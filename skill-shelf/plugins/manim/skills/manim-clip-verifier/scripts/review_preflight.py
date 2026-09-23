#!/usr/bin/env python3
"""Cheap static and manifest gates before expensive Manim visual review."""

from __future__ import annotations

import argparse
import ast
from collections import Counter
import difflib
import io
import json
import pathlib
import re
import sys
import tokenize
import yaml
from dataclasses import asdict, dataclass
from typing import Any


TRANSFORM_CALLS = {"Transform", "ReplacementTransform", "FadeTransform"}
TARGET_PRODUCING_TRANSFORMS = TRANSFORM_CALLS | {"TransformMatchingTex", "TransformMatchingShapes"}
TEXT_CALLS = {"Text", "MarkupText", "Paragraph"}
MATH_CALLS = {"MathTex", "Tex"}
AXIS_CALLS = {"Axes", "NumberPlane"}
MANIM_COLOR_NAMES = {
    "BLACK", "BLUE", "BLUE_A", "BLUE_B", "BLUE_C", "BLUE_D", "BLUE_E",
    "DARK_BLUE", "DARK_BROWN", "DARK_GRAY", "DARK_GREY", "GOLD", "GRAY",
    "GREEN", "GREY", "LIGHT_BROWN", "LIGHT_GRAY", "LIGHT_GREY", "MAROON",
    "ORANGE", "PINK", "PURPLE", "RED", "TEAL", "WHITE", "YELLOW",
}
NUMERIC_STYLE_KEYWORDS = {
    "buff", "h_buff", "v_buff", "width", "height", "radius", "stroke_width",
    "tip_length", "max_tip_length_to_length_ratio", "max_stroke_width_to_length_ratio",
}
PRIMITIVE_CALLS = {
    "Arrow", "Arc", "Brace", "Circle", "Dot", "Ellipse", "Line", "Polygon",
    "Rectangle", "RoundedRectangle", "Square", "Triangle", "Vector",
}
GEOMETRY_METHODS = {
    "align_to", "move_to", "next_to", "put_start_and_end_on", "rotate", "scale",
    "scale_to_fit_height", "scale_to_fit_width", "set_coord", "set_height",
    "set_points_as_corners", "set_stroke", "set_width", "set_x", "set_y", "set_z",
    "shift", "stretch", "stretch_to_fit_height", "stretch_to_fit_width", "to_corner", "to_edge",
}
LIFECYCLE_CALLS = {"play", "wait", "next_slide", "assert_scene_in_frame", "mark", "transition"}
NUMERIC_INDEX_NAMES = re.compile(r"(asset|grid|patch|panel|equation|formula|diagram|group|cells|terms)", re.I)
GENERIC_PARAMETER_NAMES = {"x", "y", "z", "n", "i", "j", "k", "value", "number", "tmp", "scale", "factor"}
NUMERIC_STRING = re.compile(r"[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:[eE][+-]?\d+)?$")
NUMERIC_CONVERSION_CALLS = {"float", "int", "complex", "Decimal"}
MATHISH = re.compile(
    r"(?:\\[A-Za-z]+|[≤≥≈≠∑∏∫√∞]|(?:<=|>=|!=|==)|"
    r"(?<!\w)[A-Za-z0-9})\]]+\s*[=+*/^]\s*[A-Za-z0-9({\[]|"
    r"[A-Za-z0-9}]_[A-Za-z0-9{]|[A-Za-z0-9}]\^[A-Za-z0-9{])"
)


@dataclass
class Finding:
    severity: str
    code: str
    path: str
    line: int | None
    message: str


@dataclass
class CodeUnit:
    path: pathlib.Path
    label: str
    line: int
    end_line: int
    calls: list[str]
    shapes: list[str]
    sibling_index: int
    kind: str
    owner: str
    defines: set[str]
    transform_sources: set[str]


def call_name(node: ast.AST) -> str | None:
    if isinstance(node, ast.Name):
        return node.id
    if isinstance(node, ast.Attribute):
        return node.attr
    return None


def literal_text(node: ast.AST) -> str | None:
    if isinstance(node, ast.Constant) and isinstance(node.value, str):
        return node.value
    if isinstance(node, ast.JoinedStr):
        return "<f-string>"
    return None


def numeric_literal(node: ast.AST | None) -> float | None:
    if isinstance(node, ast.Constant) and isinstance(node.value, (int, float)) and not isinstance(node.value, bool):
        return float(node.value)
    if (
        isinstance(node, ast.UnaryOp)
        and isinstance(node.op, (ast.USub, ast.UAdd))
        and isinstance(node.operand, ast.Constant)
        and isinstance(node.operand.value, (int, float))
        and not isinstance(node.operand.value, bool)
    ):
        value = float(node.operand.value)
        return -value if isinstance(node.op, ast.USub) else value
    return None


REFERENCE_CONTRACT_FIELDS = {
    "reference_system_id",
    "contract_revision",
    "view_instance_id",
    "coordinate_domain",
    "owner",
    "owner_native_components",
    "external_semantic_dependents",
    "conversion_api",
    "allowed_post_transforms",
    "checks",
}


def reference_contracts(payload: Any) -> list[dict[str, Any]]:
    contracts: list[dict[str, Any]] = []
    if isinstance(payload, dict):
        values = payload.get("reference_system_contracts")
        if isinstance(values, list):
            contracts.extend(value for value in values if isinstance(value, dict))
        for value in payload.values():
            contracts.extend(reference_contracts(value))
    elif isinstance(payload, list):
        for value in payload:
            contracts.extend(reference_contracts(value))
    return contracts


def complete_reference_contract(contract: dict[str, Any]) -> bool:
    if not REFERENCE_CONTRACT_FIELDS.issubset(contract):
        return False
    scalar_fields = {
        "reference_system_id", "contract_revision", "view_instance_id",
        "coordinate_domain", "owner",
    }
    if not all(isinstance(contract[field], str) and contract[field].strip() for field in scalar_fields):
        return False
    list_fields = {
        "owner_native_components", "external_semantic_dependents",
        "allowed_post_transforms", "checks",
    }
    if not all(isinstance(contract[field], list) for field in list_fields):
        return False
    if not contract["checks"]:
        return False
    if contract["external_semantic_dependents"] and not (
        isinstance(contract["conversion_api"], str) and contract["conversion_api"].strip()
    ):
        return False
    return True


def load_structured(path: pathlib.Path) -> Any:
    text = path.read_text(encoding="utf-8")
    return json.loads(text) if path.suffix.lower() == ".json" else yaml.safe_load(text)


def valid_reference_reason(reason: str | None, path: pathlib.Path) -> bool:
    if not reason or not reason.startswith("reference-system="):
        return False
    parts = reason.split(None, 1)
    identity = parts[0].split("=", 1)[1]
    if not (bool(re.fullmatch(r"[A-Za-z0-9_.:/-]+", identity)) and len(parts) == 2 and len(parts[1].strip()) >= 8):
        return False
    for parent in (path.parent, *path.parents):
        registry = parent / ".manim-reference-systems.json"
        if not registry.is_file():
            continue
        try:
            entries = json.loads(registry.read_text(encoding="utf-8")).get("reference_systems", [])
        except (OSError, json.JSONDecodeError, AttributeError):
            return False
        entry = next(
            (
                item for item in entries
                if isinstance(item, dict) and item.get("reference_system_id") == identity
            ),
            None,
        )
        if not entry or not isinstance(entry.get("canonical_path"), str) or not isinstance(entry.get("contract_revision"), str):
            return False
        canonical = (registry.parent / entry["canonical_path"]).resolve()
        root = registry.parent.resolve()
        if not canonical.is_relative_to(root) or not canonical.is_file():
            return False
        try:
            candidates = reference_contracts(load_structured(canonical))
        except (OSError, json.JSONDecodeError, yaml.YAMLError):
            return False
        matches = [
            contract for contract in candidates
            if contract.get("reference_system_id") == identity
            and contract.get("contract_revision") == entry["contract_revision"]
            and complete_reference_contract(contract)
        ]
        return len(matches) == 1
    return False


def range_span(node: ast.AST | None) -> float | None:
    if not isinstance(node, (ast.List, ast.Tuple)) or len(node.elts) < 2:
        return None
    lower = numeric_literal(node.elts[0])
    upper = numeric_literal(node.elts[1])
    if lower is None or upper is None or upper <= lower:
        return None
    return upper - lower


def constructor_call(node: ast.AST) -> ast.Call | None:
    """Peel fluent calls such as MathTex(...).scale(...).next_to(...)."""
    current = node
    while isinstance(current, ast.Call) and isinstance(current.func, ast.Attribute):
        current = current.func.value
    return current if isinstance(current, ast.Call) else None


def contains_numeric_coordinate(node: ast.AST) -> bool:
    if numeric_literal(node) is not None:
        return True
    if isinstance(node, (ast.Tuple, ast.List)):
        return any(contains_numeric_coordinate(item) for item in node.elts)
    if isinstance(node, ast.Call) and call_name(node.func) in {"array", "asarray"}:
        return any(contains_numeric_coordinate(arg) for arg in node.args)
    if isinstance(node, ast.BinOp):
        has_number = any(isinstance(item, ast.Constant) and isinstance(item.value, (int, float)) for item in ast.walk(node))
        has_direction = any(isinstance(item, ast.Name) and item.id in {"LEFT", "RIGHT", "UP", "DOWN", "ORIGIN"} for item in ast.walk(node))
        return has_number and has_direction
    return False


def positioning_value_nodes(name: str, node: ast.Call) -> list[ast.AST]:
    """Return only arguments that carry position values, not selectors/masks."""
    keyword_names = {
        "move_to": {"point", "point_or_mobject"},
        "set_x": {"x"},
        "set_y": {"y"},
        "set_z": {"z"},
        "set_coord": {"value"},
    }
    if name == "shift":
        values = list(node.args)
    else:
        values = list(node.args[:1])
    accepted_keywords = keyword_names.get(name, set())
    values.extend(keyword.value for keyword in node.keywords if keyword.arg in accepted_keywords)
    return values


def mathtex_chunks(node: ast.AST, bindings: dict[str, ast.Call]) -> tuple[int, list[str]] | None:
    if isinstance(node, ast.Name):
        node = bindings.get(node.id, node)
    node = constructor_call(node) or node
    if not isinstance(node, ast.Call) or call_name(node.func) not in MATH_CALLS:
        return None
    chunks = [chunk for arg in node.args if (chunk := literal_text(arg)) is not None]
    expanded: list[str] = []
    brace_pattern = re.compile(r"\{\{\s*(.*?)\s*\}\}")
    for chunk in chunks:
        matches = list(brace_pattern.finditer(chunk))
        if not matches:
            expanded.append(chunk)
            continue
        cursor = 0
        for match in matches:
            between = chunk[cursor:match.start()]
            if normalized_tex(between):
                expanded.append(between)
            expanded.append(match.group(1))
            cursor = match.end()
        tail = chunk[cursor:]
        if normalized_tex(tail):
            expanded.append(tail)
    isolate_node = next((kw.value for kw in node.keywords if kw.arg == "substrings_to_isolate"), None)
    isolates: list[str] = []
    if isinstance(isolate_node, ast.Constant) and isinstance(isolate_node.value, str):
        isolates = [isolate_node.value]
    elif isinstance(isolate_node, (ast.List, ast.Tuple)):
        isolates = [
            item.value for item in isolate_node.elts
            if isinstance(item, ast.Constant) and isinstance(item.value, str) and item.value
        ]
    if isolates:
        pattern = re.compile("(" + "|".join(re.escape(value) for value in sorted(isolates, key=len, reverse=True)) + ")")
        expanded = [part for chunk in expanded for part in pattern.split(chunk) if normalized_tex(part)]
    return len(expanded), expanded


def normalized_tex(value: str) -> str:
    return re.sub(r"\s+", "", value)


def matching_tex_metrics(old_chunks: list[str], new_chunks: list[str]) -> tuple[float, float, list[str]]:
    """Return raw common-block ratio, exact-key coverage, and ambiguous repeated keys."""
    old = [normalized_tex(chunk) for chunk in old_chunks if normalized_tex(chunk)]
    new = [normalized_tex(chunk) for chunk in new_chunks if normalized_tex(chunk)]
    old_text = "".join(old)
    new_text = "".join(new)
    if not old_text or not new_text:
        return 0.0, 0.0, []
    matcher = difflib.SequenceMatcher(None, old_text, new_text, autojunk=False)
    largest_common = max((block.size for block in matcher.get_matching_blocks()), default=0)
    common_ratio = largest_common / max(len(old_text), len(new_text))
    old_counts = Counter(old)
    new_counts = Counter(new)
    matched_characters = sum(
        min(count, new_counts[key]) * len(key)
        for key, count in old_counts.items()
    )
    exact_coverage = matched_characters / max(len(old_text), len(new_text))
    ambiguous = sorted(
        key for key in old_counts.keys() & new_counts.keys()
        if old_counts[key] != new_counts[key] and (old_counts[key] > 1 or new_counts[key] > 1)
    )
    return common_ratio, exact_coverage, ambiguous


def is_mathtex_fragment(node: ast.AST, bindings: dict[str, ast.Call]) -> bool:
    if isinstance(node, ast.Subscript) and isinstance(node.value, ast.Name):
        return node.value.id in bindings
    if (
        isinstance(node, ast.Call)
        and isinstance(node.func, ast.Attribute)
        and node.func.attr in {"get_part_by_tex", "get_parts_by_tex"}
        and isinstance(node.func.value, ast.Name)
    ):
        return node.func.value.id in bindings
    return False


class FeatureVisitor(ast.NodeVisitor):
    def __init__(self):
        self.calls: list[str] = []
        self.shapes: list[str] = []

    def generic_visit(self, node: ast.AST) -> None:
        self.shapes.append(type(node).__name__)
        super().generic_visit(node)

    def visit_Call(self, node: ast.Call) -> None:
        self.calls.append(call_name(node.func) or "<call>")
        self.shapes.append(f"Call:{call_name(node.func) or '<call>'}")
        self.generic_visit(node)

    def visit_keyword(self, node: ast.keyword) -> None:
        self.shapes.append(f"Keyword:{node.arg or '**'}")
        self.visit(node.value)

    def visit_BinOp(self, node: ast.BinOp) -> None:
        self.shapes.append(f"BinOp:{type(node.op).__name__}")
        self.generic_visit(node)

    def visit_Constant(self, node: ast.Constant) -> None:
        self.shapes.append(f"Constant:{type(node.value).__name__}")

    def visit_FunctionDef(self, node: ast.FunctionDef) -> None:
        # A nested helper is compared as its own unit, not folded into its parent.
        return

    def visit_AsyncFunctionDef(self, node: ast.AsyncFunctionDef) -> None:
        return

    def visit_Lambda(self, node: ast.Lambda) -> None:
        self.shapes.append("Lambda")


def features(statements: list[ast.stmt]) -> tuple[list[str], list[str]]:
    visitor = FeatureVisitor()
    for statement in statements:
        visitor.visit(statement)
    return visitor.calls, visitor.shapes


def contains_next_slide(statement: ast.stmt) -> bool:
    return any(
        isinstance(node, ast.Call) and call_name(node.func) == "next_slide"
        for node in ast.walk(statement)
    )


def binding_features(statements: list[ast.stmt]) -> tuple[set[str], set[str]]:
    defines: set[str] = set()
    transform_sources: set[str] = set()
    for statement in statements:
        for node in ast.walk(statement):
            if isinstance(node, (ast.Assign, ast.AnnAssign)):
                targets = node.targets if isinstance(node, ast.Assign) else [node.target]
                for target in targets:
                    if isinstance(target, ast.Name):
                        defines.add(target.id)
            if isinstance(node, ast.Call) and call_name(node.func) in TARGET_PRODUCING_TRANSFORMS and node.args:
                source = node.args[0]
                if isinstance(source, ast.Name):
                    transform_sources.add(source.id)
    return defines, transform_sources


def collect_code_units(path: pathlib.Path, tree: ast.AST) -> list[CodeUnit]:
    units: list[CodeUnit] = []
    functions = [node for node in ast.walk(tree) if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef))]
    for function_index, function in enumerate(sorted(functions, key=lambda item: item.lineno)):
        calls, shapes = features(function.body)
        defines, transform_sources = binding_features(function.body)
        if len(calls) >= 4:
            units.append(
                CodeUnit(
                    path,
                    function.name,
                    function.lineno,
                    getattr(function, "end_lineno", function.lineno),
                    calls,
                    shapes,
                    function_index,
                    "function",
                    "<module-functions>",
                    defines,
                    transform_sources,
                )
            )
        segments: list[list[ast.stmt]] = [[]]
        for statement in function.body:
            segments[-1].append(statement)
            if contains_next_slide(statement):
                segments.append([])
        for segment_index, statements in enumerate(segment for segment in segments if segment):
            segment_calls, segment_shapes = features(statements)
            segment_defines, segment_transform_sources = binding_features(statements)
            if len(segment_calls) < 4:
                continue
            units.append(
                CodeUnit(
                    path,
                    f"{function.name}:segment-{segment_index + 1}",
                    statements[0].lineno,
                    getattr(statements[-1], "end_lineno", statements[-1].lineno),
                    segment_calls,
                    segment_shapes,
                    segment_index,
                    "segment",
                    function.name,
                    segment_defines,
                    segment_transform_sources,
                )
            )
    return units


def sequence_ratio(left: list[str], right: list[str]) -> float:
    return difflib.SequenceMatcher(a=left, b=right, autojunk=False).ratio()


def filtered_calls(unit: CodeUnit, *, lifecycle: bool) -> list[str]:
    return [call for call in unit.calls if (call in LIFECYCLE_CALLS) is lifecycle]


def call_similarity(left: CodeUnit, right: CodeUnit, *, lifecycle: bool) -> float:
    left_calls = filtered_calls(left, lifecycle=lifecycle)
    right_calls = filtered_calls(right, lifecycle=lifecycle)
    if not left_calls or not right_calls:
        return 0.0
    sequence = sequence_ratio(left_calls, right_calls)
    size = min(len(left_calls), len(right_calls)) / max(len(left_calls), len(right_calls))
    return 0.8 * sequence + 0.2 * size


def unit_similarity(left: CodeUnit, right: CodeUnit) -> float:
    call_score = call_similarity(left, right, lifecycle=False)
    shape_score = sequence_ratio(left.shapes, right.shapes)
    return 0.70 * call_score + 0.30 * shape_score


def similarity_findings(units: list[CodeUnit]) -> list[Finding]:
    findings: list[Finding] = []
    for index, left in enumerate(units):
        for right in units[index + 1 :]:
            if left.kind != right.kind:
                continue
            same_file = left.path == right.path
            if left.kind == "segment":
                if not same_file or left.owner != right.owner or abs(left.sibling_index - right.sibling_index) != 1:
                    continue
                content_score = call_similarity(left, right, lifecycle=False)
                right_content = filtered_calls(right, lifecycle=False)
                connected_sources = left.defines.intersection(right.transform_sources)
                if connected_sources:
                    findings.append(
                        Finding(
                            "info",
                            "already-connected-continuation",
                            str(right.path),
                            right.line,
                            f"{left.label} -> {right.label} is linked through transform source(s) {sorted(connected_sources)}; "
                            "do not treat shared equation scaffolding as an unconnected copy",
                        )
                    )
                if content_score >= 0.76 and min(len(filtered_calls(left, lifecycle=False)), len(right_content)) >= 3:
                    code = "similar-component-segments"
                    score = unit_similarity(left, right)
                    suggestion = "connect repeated component construction through a shared builder or parameterized variant"
                else:
                    continue
            else:
                content_score = unit_similarity(left, right)
                if content_score >= 0.82:
                    code = "similar-builder-candidates"
                    score = content_score
                    suggestion = "connect them through a shared builder or parameterized variant if semantic identity is the same"
                else:
                    continue
            if left.kind == "segment":
                continuity = "consecutive in the same owner"
            elif same_file:
                continuity = "in the same file"
            else:
                continuity = "across files"
            findings.append(
                Finding(
                    "warning",
                    code,
                    str(right.path),
                    right.line,
                    f"{left.path}:{left.line}-{left.end_line} and {right.path}:{right.line}-{right.end_line} "
                    f"are {continuity} with classified similarity {score:.2f}; {suggestion}",
                )
            )
    return findings


class _SourceVisitorBase(ast.NodeVisitor):
    def __init__(
        self,
        path: pathlib.Path,
        *,
        source: str,
        intentional_simultaneous_lines: set[int] | None = None,
        intentional_quick_lines: set[int] | None = None,
        nonunit_aspect_reasons: dict[int, str] | None = None,
        runtime_unit_aspect_checks: dict[int, str] | None = None,
        absolute_layout_reasons: dict[int, str] | None = None,
        numeric_size_reasons: dict[int, str] | None = None,
    ):
        self.path = path
        self.asset_builder = is_asset_builder(path, source)
        self.intentional_simultaneous_lines = intentional_simultaneous_lines or set()
        self.intentional_quick_lines = intentional_quick_lines or set()
        self.nonunit_aspect_reasons = nonunit_aspect_reasons or {}
        self.runtime_unit_aspect_checks = runtime_unit_aspect_checks or {}
        self.absolute_layout_reasons = absolute_layout_reasons or {}
        self.numeric_size_reasons = numeric_size_reasons or {}
        self.findings: list[Finding] = []
        self.math_bindings: dict[str, ast.Call] = {}
        self.constructor_bindings: dict[str, tuple[str, str | None]] = {}
        self.primitive_aliases: set[str] = set()

    def add(self, node: ast.AST, code: str, message: str, severity: str = "warning") -> None:
        self.findings.append(Finding(severity, code, str(self.path), getattr(node, "lineno", None), message))

    def visit_Assign(self, node: ast.Assign) -> None:
        constructor = constructor_call(node.value)
        constructor_name = call_name(constructor.func) if constructor else ""
        if constructor and constructor_name in MATH_CALLS:
            for target in node.targets:
                if isinstance(target, ast.Name):
                    self.math_bindings[target.id] = constructor
        if constructor:
            constructor_text = literal_text(constructor.args[0]) if constructor.args else None
            for target in node.targets:
                if isinstance(target, ast.Name):
                    self.constructor_bindings[target.id] = (constructor_name, constructor_text)
        value = literal_text(node.value)
        if value and re.fullmatch(r"#[0-9A-Fa-f]{6,8}", value):
            self.add(node, "raw-semantic-color", f"scene-local color literal {value}; check the convention registry")
        self.generic_visit(node)


def numeric_constant(node: ast.AST) -> ast.Constant | None:
    if isinstance(node, ast.Constant) and isinstance(node.value, (int, float, complex)) and not isinstance(node.value, bool):
        return node
    if isinstance(node, ast.UnaryOp) and isinstance(node.op, (ast.USub, ast.UAdd)):
        return numeric_constant(node.operand)
    return None


def asset_registry_record(path: pathlib.Path) -> dict[str, Any] | None:
    try:
        index = path.parts.index("paper_assets")
    except ValueError:
        return None
    registry_path = pathlib.Path(*path.parts[: index + 1]) / "asset_registry.yaml"
    try:
        payload = yaml.safe_load(registry_path.read_text(encoding="utf-8"))
    except (OSError, yaml.YAMLError):
        return None
    module = ".".join(path.parts[index:-1])
    assets = payload.get("assets", []) if isinstance(payload, dict) else []
    return next(
        (asset for asset in assets if isinstance(asset, dict) and asset.get("module") == module and asset.get("status", "active") == "active"),
        None,
    )


def is_asset_builder(path: pathlib.Path, source: str) -> bool:
    markers = {
        token.start[0]
        for token in tokenize.generate_tokens(io.StringIO(source).readline)
        if token.type == tokenize.COMMENT
        and token.start[1] == 0
        and token.string.strip() == "# manim-asset-builder"
    }
    return (
        "paper_assets" in path.parts
        and path.name in {"builder.py", "mobjects.py"}
        and bool(markers)
        and asset_registry_record(path) is not None
    )


def semantic_parameter_literals(path: pathlib.Path, source: str, tree: ast.Module) -> tuple[set[tuple[int, int]], list[Finding]]:
    """Return numeric literal positions that form a documented asset parameter.

    A numeric value is an authored datum only when a top-level asset declaration
    states its semantic role, owner, domain, coordinate system, provenance, and
    effect on claimed relations immediately above it.
    """
    comments = {
        token.start[0]: token.string
        for token in tokenize.generate_tokens(io.StringIO(source).readline)
        if token.type == tokenize.COMMENT and "manim-parameter:" in token.string
    }
    allowed: set[tuple[int, int]] = set()
    findings: list[Finding] = []
    declarations: list[ast.Assign | ast.AnnAssign] = [
        node for node in tree.body if isinstance(node, (ast.Assign, ast.AnnAssign))
    ]
    for node in declarations:
        value = node.value
        literal = numeric_constant(value) if value is not None else None
        if literal is None:
            continue
        targets = node.targets if isinstance(node, ast.Assign) else [node.target]
        target = targets[0] if len(targets) == 1 else None
        name = target.id if isinstance(target, ast.Name) else None
        marker = comments.get(node.lineno - 1, "")
        if not marker:
            continue
        fields = {
            key.strip(): value.strip()
            for field in marker.split("manim-parameter:", 1)[1].split(";")
            if "=" in field
            for key, value in [field.split("=", 1)]
        }
        required_fields = (
            "meaning",
            "role",
            "owner",
            "domain",
            "coordinate_system",
            "origin",
            "affects_relations",
        )
        missing = [key for key in required_fields if not fields.get(key)]
        if not is_asset_builder(path, source):
            findings.append(Finding("error", "numeric-parameter-outside-asset", str(path), node.lineno,
                "numeric parameter declarations belong only in registered asset modules named builder.py or mobjects.py"))
        elif name is None or name in GENERIC_PARAMETER_NAMES or len(name) < 3:
            findings.append(Finding("error", "invalid-semantic-parameter-name", str(path), node.lineno,
                "numeric parameters need a specific descriptive variable name"))
        elif missing:
            findings.append(Finding("error", "incomplete-semantic-parameter", str(path), node.lineno,
                f"manim-parameter is missing: {', '.join(missing)}"))
        elif name not in {
            str(parameter.get("name"))
            for parameter in (asset_registry_record(path) or {}).get("parameters", [])
            if isinstance(parameter, dict)
        }:
            findings.append(Finding("error", "unregistered-semantic-parameter", str(path), node.lineno,
                f"{name} must be declared in paper_assets/asset_registry.yaml for this module"))
        else:
            allowed.add((literal.lineno, literal.col_offset))
    return allowed, findings


class SourceVisitor(_SourceVisitorBase):

    def visit_ClassDef(self, node: ast.ClassDef) -> None:
        if node.name == "PageNumberer":
            self.add(node, "local-page-numberer", "scene defines PageNumberer; reuse paper_assets.common.PageNumberer")
        self.generic_visit(node)

    def visit_ImportFrom(self, node: ast.ImportFrom) -> None:
        if node.module == "manim":
            imported = sorted(alias.name for alias in node.names if alias.name in MANIM_COLOR_NAMES)
            if imported:
                self.add(
                    node,
                    "raw-semantic-color-import",
                    f"consumer imports raw Manim color role(s) {imported}; use the registered semantic palette",
                )
            self.primitive_aliases.update(
                alias.asname or alias.name for alias in node.names if alias.name in PRIMITIVE_CALLS
            )
        self.generic_visit(node)

    def visit_Attribute(self, node: ast.Attribute) -> None:
        if node.attr in MANIM_COLOR_NAMES:
            self.add(node, "raw-semantic-color", f"qualified raw Manim color {node.attr}; use semantic_color(role)")
        self.generic_visit(node)

    def visit_Subscript(self, node: ast.Subscript) -> None:
        base = node.value.id if isinstance(node.value, ast.Name) else ""
        index = node.slice
        if NUMERIC_INDEX_NAMES.search(base) and isinstance(index, ast.Constant) and isinstance(index.value, int):
            self.add(node, "numeric-semantic-access", f"{base}[{index.value}] may depend on fragile submobject order")
        self.generic_visit(node)

    def visit_Call(self, node: ast.Call) -> None:
        name = call_name(node.func)
        if not self.asset_builder and (name in PRIMITIVE_CALLS or name in self.primitive_aliases):
            self.add(node, "raw-primitive-constructor", f"consumer constructs {name} directly; use a registered semantic primitive/asset builder")
        color_keywords = [keyword for keyword in node.keywords if keyword.arg in {"color", "fill_color", "stroke_color"}]
        for keyword in color_keywords:
            semantic = isinstance(keyword.value, ast.Call) and call_name(keyword.value.func) == "semantic_color"
            if not semantic:
                self.add(node, "raw-semantic-color", f"{keyword.arg} bypasses semantic_color(role)")
        if name in {"set_color", "set_fill", "set_stroke"} and node.args:
            semantic = isinstance(node.args[0], ast.Call) and call_name(node.args[0].func) == "semantic_color"
            if not semantic:
                self.add(node, "raw-semantic-color", f"{name} positional color bypasses semantic_color(role)")
        for keyword in node.keywords:
            if keyword.arg == "run_time" and name != "play":
                semantic = isinstance(keyword.value, ast.Call) and call_name(keyword.value.func) == "duration"
                if not semantic:
                    self.add(node, "numeric-consumer-timing", "animation-level run_time must use duration(role)")
            if keyword.arg == "lag_ratio":
                self.add(node, "numeric-consumer-timing", "consumer lag_ratio bypasses registered pacing/reveal policy")
        if name in AXIS_CALLS:
            keywords = {keyword.arg: keyword.value for keyword in node.keywords if keyword.arg}
            x_span = range_span(keywords.get("x_range"))
            y_span = range_span(keywords.get("y_range"))
            x_length = numeric_literal(keywords.get("x_length"))
            y_length = numeric_literal(keywords.get("y_length"))
            reason = self.nonunit_aspect_reasons.get(node.lineno) or self.nonunit_aspect_reasons.get(node.lineno - 1)
            runtime_check = self.runtime_unit_aspect_checks.get(node.lineno) or self.runtime_unit_aspect_checks.get(node.lineno - 1)
            measurable = (
                x_span is not None and y_span is not None
                and x_length is not None and y_length is not None
                and x_length > 0 and y_length > 0
            )
            if not measurable and runtime_check:
                self.add(
                    node,
                    "runtime-unit-aspect-review",
                    f"parameterized graph aspect requires the declared runtime assertion and contract check to be reviewed: {runtime_check}",
                    severity="warning",
                )
            elif not measurable and not reason:
                self.add(
                    node,
                    "unverifiable-graph-unit-aspect",
                    f"{name} must declare literal x_range, y_range, x_length, and y_length so x/y unit scale can be checked; "
                    "otherwise add a call-scoped runtime-unit-aspect assertion or an intentional nonunit-graph-aspect reason",
                )
            elif not measurable and reason:
                self.add(
                    node,
                    "unverifiable-graph-aspect-justification",
                    f"graph unit aspect is not statically measurable; declared reason: {reason}",
                    severity="info",
                )
            elif measurable:
                unit_ratio = (x_length / x_span) / (y_length / y_span)
                if abs(unit_ratio - 1.0) > 1e-6 and not reason:
                    self.add(
                        node,
                        "nonunit-graph-aspect",
                        f"{name} uses x/y coordinate-unit scale ratio {unit_ratio:.4g}:1; "
                        "make it 1:1 or add # manim-review: nonunit-graph-aspect <semantic reason> immediately above",
                    )
                elif abs(unit_ratio - 1.0) > 1e-6 and reason:
                    self.add(
                        node,
                        "nonunit-graph-aspect-justification",
                        f"declared non-1:1 graph reason: {reason}",
                        severity="info",
                    )
        numeric_positioning = name in GEOMETRY_METHODS and bool(
            positioning_value_nodes(name, node)
        )
        if numeric_positioning and not self.asset_builder:
            reason = self.absolute_layout_reasons.get(node.lineno) or self.absolute_layout_reasons.get(node.lineno - 1)
            if valid_reference_reason(reason, self.path):
                self.add(
                    node,
                    "resolved-reference-system-contract",
                    f"resolved canonical numeric-position contract for {name}: {reason}",
                    severity="info",
                )
            elif reason:
                self.add(node, "invalid-layout-exception", "allow-absolute reference ID must resolve uniquely to a complete canonical contract", severity="error")
            else:
                self.add(
                    node,
                    "absolute-consumer-layout",
                    f"numeric {name} bypasses automatic/relative layout; use Row/Column/Grid, arrange/next_to, "
                    "or add # manim-layout: allow-absolute <reference-system reason> immediately above",
                    severity="error",
                )
        numeric_sizing = name in {
            "scale",
            "scale_to_fit_width",
            "scale_to_fit_height",
            "set_width",
            "set_height",
            "stretch_to_fit_width",
            "stretch_to_fit_height",
        } and bool(node.args or node.keywords)
        if numeric_sizing and not self.asset_builder:
            reason = self.numeric_size_reasons.get(node.lineno) or self.numeric_size_reasons.get(node.lineno - 1)
            if valid_reference_reason(reason, self.path):
                self.add(
                    node,
                    "resolved-reference-system-contract",
                    f"resolved canonical numeric-size contract for {name}: {reason}",
                    severity="info",
                )
            elif reason:
                self.add(node, "invalid-layout-exception", "allow-size reference ID must resolve uniquely to a complete canonical contract", severity="error")
            else:
                self.add(
                    node,
                    "numeric-consumer-size",
                    f"numeric {name} bypasses semantic layout policy; use Page fit/alignment and Row/Column/Grid "
                    "reflow, or add # manim-layout: allow-size <intrinsic reference-system reason> immediately above",
                    severity="error",
                )
        numeric_font_size = any(keyword.arg == "font_size" for keyword in node.keywords)
        if numeric_font_size and not self.asset_builder:
            reason = self.numeric_size_reasons.get(node.lineno) or self.numeric_size_reasons.get(node.lineno - 1)
            if valid_reference_reason(reason, self.path):
                self.add(
                    node,
                    "resolved-reference-system-contract",
                    f"resolved canonical numeric-font-size contract for {name}: {reason}",
                    severity="info",
                )
            elif reason:
                self.add(node, "invalid-layout-exception", "allow-size reference ID must resolve uniquely to a complete canonical contract", severity="error")
            else:
                self.add(
                    node,
                    "numeric-consumer-font-size",
                    "numeric font_size bypasses registered typography roles; use semantic_text/semantic_math or add "
                    "# manim-layout: allow-size <intrinsic reference-system reason> immediately above",
                    severity="error",
                )
        numeric_style_keywords = sorted(
            keyword.arg
            for keyword in node.keywords
            if keyword.arg in NUMERIC_STYLE_KEYWORDS
        )
        numeric_layout_region = name == "LayoutRegion" and bool(node.args or node.keywords)
        if (numeric_style_keywords or numeric_layout_region) and not self.asset_builder:
            reason = self.numeric_size_reasons.get(node.lineno) or self.numeric_size_reasons.get(node.lineno - 1)
            subject = f"numeric keyword(s) {numeric_style_keywords}" if numeric_style_keywords else "numeric LayoutRegion geometry"
            if valid_reference_reason(reason, self.path):
                self.add(
                    node,
                    "resolved-reference-system-contract",
                    f"resolved canonical intrinsic contract for {subject}: {reason}",
                    severity="info",
                )
            elif reason:
                self.add(node, "invalid-layout-exception", "allow-size reference ID must resolve uniquely to a complete canonical contract", severity="error")
            else:
                self.add(
                    node,
                    "numeric-consumer-style",
                    f"{subject} bypasses semantic spacing/style tokens; use registered roles or add "
                    "# manim-layout: allow-size reference-system=<id> <reason> immediately above",
                    severity="error",
                )
        if name == "wait" and node.args and not (
            isinstance(node.args[0], ast.Call) and call_name(node.args[0].func) == "duration"
        ):
            self.add(node, "numeric-consumer-timing", "literal wait duration bypasses pacing tokens; use duration(role)", severity="error")
        if name == "play":
            simultaneous_allowed = (
                node.lineno in self.intentional_simultaneous_lines
                or node.lineno - 1 in self.intentional_simultaneous_lines
            )
            direct_animations = [arg for arg in node.args if isinstance(arg, ast.Call)]
            starred_animations = [arg for arg in node.args if isinstance(arg, ast.Starred)]
            if not simultaneous_allowed and len(direct_animations) >= 3:
                names = [call_name(arg.func) or "<call>" for arg in direct_animations]
                self.add(
                    node,
                    "overloaded-simultaneous-play",
                    f"one play() starts {len(direct_animations)} animations simultaneously "
                    f"({', '.join(names)}); stage independent audience events or record "
                    "# manim-review: intentional-simultaneous immediately above the call",
                )
            if not simultaneous_allowed and starred_animations:
                self.add(
                    node,
                    "dynamic-simultaneous-play",
                    "star-expanded animations in one play() have unknown simultaneous count; "
                    "prefer LaggedStart/staged plays or record an intentional-simultaneous exception",
                )
            animation_names = {
                call_name(arg.func)
                for arg in node.args
                if isinstance(arg, ast.Call)
            }
            reveal_bindings: list[tuple[str, str | None]] = []
            for animation in direct_animations:
                if call_name(animation.func) not in {
                    "FadeIn", "Write", "Create", "GrowFromCenter", "GrowArrow", "DrawBorderThenFill"
                } or not animation.args:
                    continue
                target = animation.args[0]
                if isinstance(target, ast.Name) and target.id in self.constructor_bindings:
                    reveal_bindings.append(self.constructor_bindings[target.id])
            long_prose_reveal = any(
                kind in TEXT_CALLS
                and text not in {None, "<f-string>"}
                and (len(text.split()) >= 4 or len(re.findall(r"[ぁ-んァ-ヶ一-龠]", text)) >= 12)
                for kind, text in reveal_bindings
            )
            nontext_reveal = any(kind not in TEXT_CALLS | MATH_CALLS for kind, _ in reveal_bindings)
            if not simultaneous_allowed and long_prose_reveal and nontext_reveal:
                self.add(
                    node,
                    "split-attention-text-and-visual",
                    "long Text and a non-text visual are revealed in the same play(); "
                    "let the audience read first or reveal the visual first, unless both encode one relation",
                )
            run_time_node = next((kw.value for kw in node.keywords if kw.arg == "run_time"), None)
            if run_time_node is not None and not (
                isinstance(run_time_node, ast.Call) and call_name(run_time_node.func) == "duration"
            ):
                self.add(node, "numeric-consumer-timing", "literal run_time bypasses pacing tokens; use duration(role)", severity="error")
            quick_allowed = (
                node.lineno in self.intentional_quick_lines
                or node.lineno - 1 in self.intentional_quick_lines
            )
            quick_literal = (
                isinstance(run_time_node, ast.Constant)
                and isinstance(run_time_node.value, (int, float))
                and not isinstance(run_time_node.value, bool)
                and 0 < run_time_node.value < 0.35
            )
            cleanup_only = bool(animation_names) and animation_names <= {"FadeOut", "Unwrite", "Uncreate"}
            if quick_literal and not cleanup_only and not quick_allowed:
                self.add(
                    node,
                    "too-fast-audience-animation",
                    f"audience-facing play() uses run_time={run_time_node.value}; "
                    "use at least 0.35s or record # manim-review: intentional-quick immediately above",
                )
            if "FadeOut" in animation_names and animation_names.intersection(TARGET_PRODUCING_TRANSFORMS):
                self.add(
                    node,
                    "fade-transform-cleanup-order",
                    "FadeOut and a target-producing transform share one play(); a transform target may flash after cleanup",
                )
        if name in {"AnimationGroup", "LaggedStart"} and not (
            node.lineno in self.intentional_simultaneous_lines
            or node.lineno - 1 in self.intentional_simultaneous_lines
        ):
            lag_ratio = next((kw.value for kw in node.keywords if kw.arg == "lag_ratio"), None)
            positive_literal_lag = (
                isinstance(lag_ratio, ast.Constant)
                and isinstance(lag_ratio.value, (int, float))
                and not isinstance(lag_ratio.value, bool)
                and lag_ratio.value > 0
            )
            animation_count = sum(isinstance(arg, (ast.Call, ast.Starred)) for arg in node.args)
            has_starred = any(isinstance(arg, ast.Starred) for arg in node.args)
            if (animation_count >= 3 or has_starred) and not positive_literal_lag:
                self.add(
                    node,
                    "unstaggered-animation-group",
                    f"{name} contains {'an unknown star-expanded count' if has_starred else f'{animation_count} animations'} "
                    "with absent, nonpositive, or nonliteral lag_ratio; use LaggedStart or a statically "
                    "positive lag_ratio unless simultaneity carries one relation",
                )
        if name in TEXT_CALLS and node.args:
            text = literal_text(node.args[0])
            if text and text != "<f-string>":
                if MATHISH.search(text):
                    self.add(node, "math-in-text", f"{name} contains math-like content {text!r}; use MathTex/Tex or justify prose")
                if len(text.split()) >= 9:
                    self.add(node, "long-on-canvas-prose", f"{name} contains {len(text.split())} words; check the prose gate")
        if name in TRANSFORM_CALLS and len(node.args) >= 2:
            old = mathtex_chunks(node.args[0], self.math_bindings)
            new = mathtex_chunks(node.args[1], self.math_bindings)
            if old and new and old[1] != new[1]:
                segmentation = " Both sides are undivided." if old[0] == new[0] == 1 else ""
                self.add(
                    node,
                    "nonmatching-tex-transform",
                    f"{name} changes TeX content {old[1]} -> {new[1]} instead of using TransformMatchingTex."
                    f"{segmentation} Expose maximal invariant chunks and use TransformMatchingTex by default; "
                    "review only when visible TeX correspondence is intentionally absent.",
                )
        if name == "TransformMatchingTex" and len(node.args) >= 2:
            if any(is_mathtex_fragment(arg, self.math_bindings) for arg in node.args[:2]):
                self.add(
                    node,
                    "fragment-only-equation-transform",
                    "TransformMatchingTex is applied to indexed/get_part_by_tex fragments of a larger formula. "
                    "Pass the complete source and target MathTex containers and expose changed/invariant chunks inside them by default; "
                    "review fragment-only animation only when the surrounding equation intentionally remains a separately owned anchor.",
                )
            old = mathtex_chunks(node.args[0], self.math_bindings)
            new = mathtex_chunks(node.args[1], self.math_bindings)
            if old and new and old[1] != new[1]:
                common_ratio, exact_coverage, ambiguous = matching_tex_metrics(old[1], new[1])
                if old[0] == new[0] == 1 and common_ratio >= 0.35:
                    self.add(
                        node,
                        "undivided-transform-matching-tex",
                        f"TransformMatchingTex receives one changed TeX chunk on each side, but a common contiguous block covers "
                        f"{common_ratio:.0%} of the larger expression; expose the largest parts that share one animation fate as "
                        "separate MathTex arguments, {{...}} groups, or substrings_to_isolate",
                    )
                elif common_ratio >= 0.45 and exact_coverage < 0.35:
                    self.add(
                        node,
                        "low-transform-matching-tex-coverage",
                        f"source and target share a large contiguous TeX block ({common_ratio:.0%}), but exact exposed chunk keys cover only "
                        f"{exact_coverage:.0%}; the stable block may not be isolated for TransformMatchingTex",
                    )
                if ambiguous:
                    self.add(
                        node,
                        "ambiguous-repeated-transform-key",
                        f"matching TeX key count changes for {ambiguous}; repeated identical keys may be grouped ambiguously—prefer a larger "
                        "stable contiguous chunk when it has one animation fate",
                    )
        for keyword in node.keywords:
            if keyword.arg in {"color", "fill_color", "stroke_color"}:
                value = literal_text(keyword.value)
                if value and re.fullmatch(r"#[0-9A-Fa-f]{6,8}", value):
                    self.add(node, "raw-semantic-color", f"inline {keyword.arg}={value}; check the convention registry")
        if name == "FadeOut" and node.args:
            first = node.args[0]
            if (
                isinstance(first, ast.Call)
                and call_name(first.func) in {"Group", "VGroup"}
                and any(
                    isinstance(arg, ast.Starred)
                    and isinstance(arg.value, ast.Attribute)
                    and arg.value.attr == "mobjects"
                    for arg in first.args
                )
            ):
                self.add(
                    node,
                    "blanket-scene-fadeout",
                    "FadeOut(Group/VGroup(*self.mobjects)) snapshots scene ownership and may expose stale overlapping objects",
                )
        self.generic_visit(node)


class BareNumericLiteralVisitor(ast.NodeVisitor):
    def __init__(self, path: pathlib.Path, allowed: set[tuple[int, int]]):
        self.path = path
        self.allowed = allowed
        self.findings: list[Finding] = []

    def visit_Constant(self, node: ast.Constant) -> None:
        if not isinstance(node.value, (int, float, complex)) or isinstance(node.value, bool):
            return
        if (node.lineno, node.col_offset) not in self.allowed:
            self.findings.append(Finding(
                "warning",
                "bare-numeric-literal",
                str(self.path),
                node.lineno,
                "classify this numeric literal as source/model/topology/projection/tolerance data or unexplained visual tuning",
            ))

    def visit_Call(self, node: ast.Call) -> None:
        name = call_name(node.func)
        encoded = literal_text(node.args[0]) if node.args else None
        if name in NUMERIC_CONVERSION_CALLS and encoded and NUMERIC_STRING.fullmatch(encoded):
            self.findings.append(Finding(
                "warning",
                "encoded-numeric-literal",
                str(self.path),
                node.lineno,
                "classify this converted numeric string and record its owner and provenance when it affects geometry",
            ))
        self.generic_visit(node)


def lint_forbidden_usage(path: pathlib.Path, source: str, rules: list[dict[str, str]]) -> list[Finding]:
    findings: list[Finding] = []
    for rule in rules:
        pattern = rule["pattern"]
        try:
            matcher = re.compile(re.escape(pattern) if rule["kind"] == "literal" else pattern)
        except re.error as exc:
            findings.append(Finding("error", "invalid-forbidden-pattern", str(path), None, f"{pattern!r}: {exc}"))
            continue
        for match in matcher.finditer(source):
            line = source.count("\n", 0, match.start()) + 1
            replacement = rule.get("replacement", "").strip()
            guidance = f"; use {replacement}" if replacement else ""
            findings.append(Finding(
                "warning",
                "registered-forbidden-usage",
                str(path),
                line,
                f"{pattern!r} is disabled: {rule['reason']}{guidance}",
            ))
    return findings


def lint_source(path: pathlib.Path, forbidden_rules: list[dict[str, str]] | None = None) -> list[Finding]:
    try:
        source = path.read_text(encoding="utf-8")
        tree = ast.parse(source, filename=str(path))
    except (OSError, SyntaxError) as exc:
        return [Finding("error", "source-parse", str(path), getattr(exc, "lineno", None), str(exc))]
    intentional_simultaneous_lines = {
        token.start[0]
        for token in tokenize.generate_tokens(io.StringIO(source).readline)
        if token.type == tokenize.COMMENT
        and "manim-review: intentional-simultaneous" in token.string
    }
    intentional_quick_lines = {
        token.start[0]
        for token in tokenize.generate_tokens(io.StringIO(source).readline)
        if token.type == tokenize.COMMENT
        and "manim-review: intentional-quick" in token.string
    }
    aspect_marker = "manim-review: nonunit-graph-aspect"
    nonunit_aspect_reasons = {}
    for token in tokenize.generate_tokens(io.StringIO(source).readline):
        if token.type != tokenize.COMMENT or aspect_marker not in token.string:
            continue
        reason = token.string.split(aspect_marker, 1)[1].strip(" :-")
        if reason:
            nonunit_aspect_reasons[token.start[0]] = reason
    runtime_aspect_marker = "manim-review: runtime-unit-aspect"
    runtime_unit_aspect_checks = {}
    for token in tokenize.generate_tokens(io.StringIO(source).readline):
        if token.type != tokenize.COMMENT or runtime_aspect_marker not in token.string:
            continue
        check = token.string.split(runtime_aspect_marker, 1)[1].strip(" :-")
        if check:
            runtime_unit_aspect_checks[token.start[0]] = check
    absolute_marker = "manim-layout: allow-absolute"
    absolute_layout_reasons = {}
    for token in tokenize.generate_tokens(io.StringIO(source).readline):
        if token.type != tokenize.COMMENT or absolute_marker not in token.string:
            continue
        reason = token.string.split(absolute_marker, 1)[1].strip(" :-")
        if reason:
            absolute_layout_reasons[token.start[0]] = reason
    size_marker = "manim-layout: allow-size"
    numeric_size_reasons = {}
    for token in tokenize.generate_tokens(io.StringIO(source).readline):
        if token.type != tokenize.COMMENT or size_marker not in token.string:
            continue
        reason = token.string.split(size_marker, 1)[1].strip(" :-")
        if reason:
            numeric_size_reasons[token.start[0]] = reason
    allowed_numeric_literals, parameter_findings = semantic_parameter_literals(path, source, tree)
    numeric_visitor = BareNumericLiteralVisitor(path, allowed_numeric_literals)
    numeric_visitor.visit(tree)
    visitor = SourceVisitor(
        path,
        source=source,
        intentional_simultaneous_lines=intentional_simultaneous_lines,
        intentional_quick_lines=intentional_quick_lines,
        nonunit_aspect_reasons=nonunit_aspect_reasons,
        runtime_unit_aspect_checks=runtime_unit_aspect_checks,
        absolute_layout_reasons=absolute_layout_reasons,
        numeric_size_reasons=numeric_size_reasons,
    )
    visitor.visit(tree)
    return (
        parameter_findings
        + numeric_visitor.findings
        + visitor.findings
        + lint_forbidden_usage(path, source, forbidden_rules or [])
    )


def lint_sources(paths: list[pathlib.Path], forbidden_rules: list[dict[str, str]] | None = None) -> list[Finding]:
    findings: list[Finding] = []
    units: list[CodeUnit] = []
    for path in paths:
        findings.extend(lint_source(path, forbidden_rules))
        try:
            tree = ast.parse(path.read_text(encoding="utf-8"), filename=str(path))
        except (OSError, SyntaxError):
            continue
        units.extend(collect_code_units(path, tree))
    findings.extend(similarity_findings(units))
    return findings


def load_json(path: pathlib.Path) -> Any:
    with path.open(encoding="utf-8") as handle:
        return json.load(handle)


def manifest_rows(data: Any) -> list[dict[str, Any]]:
    if isinstance(data, list):
        return [row for row in data if isinstance(row, dict)]
    if isinstance(data, dict):
        for key in ("ordered_checkpoints", "checkpoints", "entries"):
            if isinstance(data.get(key), list):
                return [row for row in data[key] if isinstance(row, dict)]
    return []


def row_id(row: dict[str, Any], position: int) -> str:
    return str(row.get("checkpoint_id", row.get("id", row.get("index", position))))


def validate_coverage(manifest_path: pathlib.Path, coverage_path: pathlib.Path) -> list[Finding]:
    findings: list[Finding] = []
    try:
        manifest = manifest_rows(load_json(manifest_path))
        coverage_data = load_json(coverage_path)
    except (OSError, json.JSONDecodeError) as exc:
        return [Finding("error", "coverage-parse", str(coverage_path), None, str(exc))]
    coverage = manifest_rows(coverage_data)
    if not manifest:
        findings.append(Finding("error", "empty-manifest", str(manifest_path), None, "no checkpoint rows found"))
        return findings
    coverage_by_id = {row_id(row, i + 1): row for i, row in enumerate(coverage)}
    for i, row in enumerate(manifest):
        checkpoint_id = row_id(row, i + 1)
        video = row.get("video") or row.get("source_video")
        if not video:
            findings.append(Finding("error", "missing-video", str(manifest_path), None, f"{checkpoint_id}: no video path"))
        elif not pathlib.Path(video).exists():
            findings.append(Finding("error", "missing-video-file", str(manifest_path), None, f"{checkpoint_id}: {video}"))
        record = coverage_by_id.get(checkpoint_id)
        if record is None:
            findings.append(Finding("error", "missing-coverage", str(coverage_path), None, f"{checkpoint_id}: no coverage row"))
            continue
        for field in ("landing_interval", "incoming_transition_interval", "selection_reason"):
            if not record.get(field):
                findings.append(Finding("error", "incomplete-coverage", str(coverage_path), None, f"{checkpoint_id}: missing {field}"))
        if record.get("inspected") is not True:
            findings.append(Finding("error", "uninspected-checkpoint", str(coverage_path), None, checkpoint_id))
        if record.get("still_escalation") is True and not (record.get("frame") or record.get("crop") or record.get("evidence_path")):
            findings.append(Finding("error", "missing-escalation-evidence", str(coverage_path), None, checkpoint_id))
    manifest_ids = {row_id(row, i + 1) for i, row in enumerate(manifest)}
    for extra in sorted(set(coverage_by_id) - manifest_ids):
        findings.append(Finding("warning", "stale-coverage-row", str(coverage_path), None, extra))
    return findings


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("scene_file", nargs="*", type=pathlib.Path)
    parser.add_argument("--manifest", type=pathlib.Path)
    parser.add_argument("--coverage", type=pathlib.Path)
    parser.add_argument("--json-out", type=pathlib.Path)
    parser.add_argument("--numeric-dispositions", type=pathlib.Path)
    parser.add_argument("--reference-contracts", type=pathlib.Path)
    parser.add_argument("--strict-warnings", action="store_true")
    parser.add_argument("--forbidden-registry", type=pathlib.Path)
    return parser.parse_args()


def validate_reference_contracts(path: pathlib.Path) -> list[Finding]:
    try:
        contracts = reference_contracts(load_structured(path))
    except (OSError, json.JSONDecodeError, yaml.YAMLError) as exc:
        return [Finding("error", "reference-contract-parse", str(path), None, str(exc))]
    if not contracts:
        return [Finding("error", "reference-contract-missing", str(path), None, "no reference_system_contracts entries found")]
    findings: list[Finding] = []
    reference_ids: Counter[str] = Counter()
    view_ids: Counter[str] = Counter()
    for index, contract in enumerate(contracts):
        if not complete_reference_contract(contract):
            findings.append(Finding(
                "error",
                "incomplete-reference-contract",
                str(path),
                None,
                f"reference_system_contracts[{index}] is incomplete or has invalid field types",
            ))
            continue
        reference_ids[contract["reference_system_id"]] += 1
        view_ids[contract["view_instance_id"]] += 1
    for identity, count in sorted(reference_ids.items()):
        if count > 1:
            findings.append(Finding("error", "duplicate-reference-system-id", str(path), None, f"{identity}: {count} complete contracts"))
    for identity, count in sorted(view_ids.items()):
        if count > 1:
            findings.append(Finding("error", "duplicate-reference-view-owner", str(path), None, f"{identity}: {count} complete contracts"))
    return findings


def validate_numeric_dispositions(findings: list[Finding], path: pathlib.Path) -> list[Finding]:
    """Require a reviewed disposition for every non-blocking numeric warning."""
    try:
        payload = load_json(path)
    except (OSError, json.JSONDecodeError) as exc:
        return [Finding("error", "numeric-disposition-parse", str(path), None, str(exc))]
    if not isinstance(payload, dict) or payload.get("schema_version") != 1 or not isinstance(payload.get("entries"), list):
        return [Finding("error", "numeric-disposition-schema", str(path), None, "expected schema_version 1 and an entries list")]
    reviewer_id = str(payload.get("reviewer_id", "")).strip()
    implementer_id = str(payload.get("implementer_id", "")).strip()
    artifact_revision = str(payload.get("artifact_revision", "")).strip()
    if not reviewer_id or not implementer_id or not artifact_revision or reviewer_id == implementer_id:
        return [Finding(
            "error",
            "numeric-disposition-authority",
            str(path),
            None,
            "reviewer_id, distinct implementer_id, and artifact_revision are required audit fields",
        )]
    allowed = {"source", "model", "topology_selector", "projection", "tolerance", "style", "layout", "tuning"}
    index: dict[tuple[str, int | None, str], dict[str, object]] = {}
    result: list[Finding] = []
    for position, raw in enumerate(payload["entries"]):
        if not isinstance(raw, dict):
            result.append(Finding("error", "numeric-disposition-entry", str(path), None, f"entries[{position}] must be an object"))
            continue
        key = (str(raw.get("path", "")), raw.get("line"), str(raw.get("code", "")))
        classification = raw.get("classification")
        if classification not in allowed or not str(raw.get("basis", "")).strip() or not str(raw.get("owner", "")).strip() or not str(raw.get("relation_effect", "")).strip():
            result.append(Finding(
                "error",
                "numeric-disposition-entry",
                str(path),
                None,
                f"entries[{position}] requires path, line, code, classification, basis, owner, and relation_effect",
            ))
            continue
        index[key] = raw
    for finding in findings:
        if finding.severity != "warning" or finding.code not in {"bare-numeric-literal", "encoded-numeric-literal"}:
            continue
        record = index.get((finding.path, finding.line, finding.code))
        if record is None:
            result.append(Finding("error", "unresolved-numeric-warning", finding.path, finding.line, finding.code))
        elif record["classification"] == "tuning":
            result.append(Finding("error", "unexplained-numeric-tuning", finding.path, finding.line, str(record["basis"])))
    return result


def load_forbidden_rules(path: pathlib.Path | None) -> tuple[list[dict[str, str]], list[Finding]]:
    if path is None:
        return [], []
    try:
        payload = load_json(path)
    except (OSError, json.JSONDecodeError) as exc:
        return [], [Finding("error", "forbidden-registry-parse", str(path), None, str(exc))]
    if not isinstance(payload, dict) or payload.get("schema_version") != 1 or not isinstance(payload.get("rules"), list):
        return [], [Finding("error", "forbidden-registry-schema", str(path), None, "expected schema_version 1 and a rules list")]
    rules: list[dict[str, str]] = []
    findings: list[Finding] = []
    for index, raw in enumerate(payload["rules"]):
        if not isinstance(raw, dict) or raw.get("kind") not in {"literal", "regex"} or not all(
            isinstance(raw.get(key), str) and raw[key].strip() for key in ("pattern", "reason")
        ):
            findings.append(Finding("error", "forbidden-registry-rule", str(path), None, f"rules[{index}] requires kind literal|regex, pattern, and reason"))
            continue
        rules.append({key: str(raw.get(key, "")) for key in ("kind", "pattern", "reason", "replacement")})
    return rules, findings


def main() -> int:
    args = parse_args()
    forbidden_rules, findings = load_forbidden_rules(args.forbidden_registry)
    findings.extend(lint_sources(args.scene_file, forbidden_rules))
    if args.reference_contracts:
        findings.extend(validate_reference_contracts(args.reference_contracts))
    if args.numeric_dispositions:
        findings.extend(validate_numeric_dispositions(findings, args.numeric_dispositions))
    else:
        findings.extend(
            Finding("error", "unresolved-numeric-warning", finding.path, finding.line, finding.code)
            for finding in list(findings)
            if finding.severity == "warning" and finding.code in {"bare-numeric-literal", "encoded-numeric-literal"}
        )
    if bool(args.manifest) != bool(args.coverage):
        findings.append(Finding("error", "coverage-arguments", "<cli>", None, "--manifest and --coverage must be supplied together"))
    elif args.manifest and args.coverage:
        findings.extend(validate_coverage(args.manifest, args.coverage))

    payload = {"errors": sum(f.severity == "error" for f in findings), "warnings": sum(f.severity == "warning" for f in findings), "findings": [asdict(f) for f in findings]}
    if args.json_out:
        args.json_out.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    for finding in findings:
        location = f"{finding.path}:{finding.line}" if finding.line else finding.path
        print(f"[{finding.severity}] {finding.code} {location} — {finding.message}")
    print(f"summary: {payload['errors']} errors, {payload['warnings']} warnings")
    if payload["errors"] or (args.strict_warnings and payload["warnings"]):
        return 1
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
