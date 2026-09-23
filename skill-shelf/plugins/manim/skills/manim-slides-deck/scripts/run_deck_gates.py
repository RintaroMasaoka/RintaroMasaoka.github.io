#!/usr/bin/env python3
"""Run every deterministic Manim Slides deck gate through one command."""

from __future__ import annotations

import argparse
import ast
import hashlib
import json
import os
import pathlib
import re
import subprocess
import sys
import time
from dataclasses import asdict

from resolve_slide_page import resolve_page


SKILL_ROOT = pathlib.Path(__file__).resolve().parents[1]

def inside_project(project: pathlib.Path, value: object, label: str) -> pathlib.Path:
    if not isinstance(value, str) or not value:
        raise ValueError(f"{label} must be a nonempty project-relative path")
    # Check the adapter's lexical project location, not the resolved symlink
    # target: project-local links are the intended route into canonical stock.
    path = pathlib.Path(os.path.abspath(project / value))
    if not path.is_relative_to(project):
        raise ValueError(f"{label} escapes project root: {value}")
    return path


def validate_config(config: object, project: pathlib.Path) -> dict[str, object]:
    if not isinstance(config, dict) or config.get("schema_version") != 1:
        raise ValueError("project config must be a schema_version 1 object")
    gates = config.get("project_gates", [])
    if not isinstance(gates, list):
        raise ValueError("project_gates must be a list")
    for index, gate in enumerate(gates):
        if not isinstance(gate, dict):
            raise ValueError(f"project_gates[{index}] must be an object")
        command = gate.get("command")
        if not isinstance(command, list) or not command or not all(isinstance(x, str) and x for x in command):
            raise ValueError(f"project_gates[{index}].command must be a nonempty string list")
    instructions = config.get("project_instructions")
    if instructions is not None and not inside_project(project, instructions, "project_instructions").is_file():
        raise ValueError(f"project_instructions not found: {instructions}")
    forbidden_registry = config.get("forbidden_registry")
    if forbidden_registry is not None and not inside_project(project, forbidden_registry, "forbidden_registry").is_file():
        raise ValueError(f"forbidden_registry not found: {forbidden_registry}")
    defaults = config.get("artifact_defaults", {})
    if not isinstance(defaults, dict):
        raise ValueError("artifact_defaults must be an object")
    for key in ("html_dir", "report_dir"):
        if key in defaults:
            inside_project(project, defaults[key], f"artifact_defaults.{key}")
    names = config.get("gated_base_names", ["GatedSlide"])
    if not isinstance(names, list) or not names or not all(isinstance(x, str) and x for x in names):
        raise ValueError("gated_base_names must be a nonempty string list")
    page_resolution = config.get("page_resolution")
    if page_resolution is not None:
        if not isinstance(page_resolution, dict):
            raise ValueError("page_resolution must be an object")
        for key in ("manifest", "slots"):
            if key not in page_resolution:
                raise ValueError(f"page_resolution.{key} is required")
            inside_project(project, page_resolution[key], f"page_resolution.{key}")
        generator = page_resolution.get("generator")
        if (not isinstance(generator, list) or not generator
                or not all(isinstance(part, str) and part for part in generator)):
            raise ValueError("page_resolution.generator must be a nonempty string list")
        locator_field = page_resolution.get("locator_field")
        if not isinstance(locator_field, str) or not locator_field:
            raise ValueError("page_resolution.locator_field must be a nonempty string")
        collection = page_resolution.get("collection")
        if collection is not None and collection not in {"pages", "units", "records"}:
            raise ValueError("page_resolution.collection must be pages, units, or records")
    return config


def base_name(node: ast.expr) -> str | None:
    if isinstance(node, ast.Name):
        return node.id
    if isinstance(node, ast.Attribute):
        return node.attr
    return None


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(
        description=(
            "Run compile, source-contract, static preflight, configured project gates, "
            "runtime overlap/render, conversion, and HTML sanity gates."
        )
    )
    parser.add_argument("scene_file", nargs="?", type=pathlib.Path)
    parser.add_argument("scene_class", nargs="?")
    parser.add_argument("--page-selector")
    parser.add_argument(
        "--html",
        type=pathlib.Path,
        help="HTML destination (default: adapter html_dir or generic artifact directory)",
    )
    parser.add_argument("--manifest", type=pathlib.Path)
    parser.add_argument("--coverage", type=pathlib.Path)
    parser.add_argument(
        "--warning-review",
        type=pathlib.Path,
        help="Revision-bound warning coverage manifest. Required when advisories exist.",
    )
    parser.add_argument(
        "--report",
        type=pathlib.Path,
        help="JSON report destination (default: adapter report_dir or generic artifact directory)",
    )
    parser.add_argument("--quality", default="l", choices=("l", "m", "h"))
    parser.add_argument(
        "--allow-preflight-warnings",
        action="store_true",
        help="Deprecated compatibility flag; advisory findings never block stronger detectors.",
    )
    parser.add_argument(
        "--static-only",
        action="store_true",
        help="Run cheap gates only. This can never produce an acceptance pass.",
    )
    parser.add_argument("--project-config", type=pathlib.Path)
    parser.add_argument("--verifier-root", type=pathlib.Path)
    return parser.parse_args()


def resolve_scene_selection(
    args: argparse.Namespace,
    project_root: pathlib.Path,
    project_config: dict[str, object],
):
    resolution = None
    page_config = project_config.get("page_resolution", {})
    assert isinstance(page_config, dict)
    if args.page_selector:
        if args.scene_file is not None or args.scene_class is not None:
            raise ValueError("use either semantic --page-selector or positional scene arguments")
        manifest_value = (
            inside_project(project_root, page_config["manifest"], "page_resolution.manifest")
            if "manifest" in page_config else None
        )
        locator_field = page_config.get("locator_field")
        slots_value = (
            inside_project(project_root, page_config["slots"], "page_resolution.slots")
            if "slots" in page_config else None
        )
        collection = page_config.get("collection")
        if manifest_value is None or not isinstance(locator_field, str) or not locator_field:
            raise ValueError("semantic page resolution needs a manifest and locator field")
        manifest_path = manifest_value
        if slots_value is None:
            raise ValueError("semantic page resolution needs a slot contract")
        slots_path = slots_value
        resolution = resolve_page(
            manifest_path, args.page_selector, locator_field, slots_path,
            str(collection) if collection else None,
            ("scene_file", "scene_class"),
        )
        scene_file = inside_project(
            project_root, resolution.bindings["scene_file"], "resolved scene_file"
        )
        scene_class = resolution.bindings["scene_class"]
    elif args.scene_file is not None and args.scene_class is not None:
        scene_file = args.scene_file.resolve()
        scene_class = args.scene_class
    else:
        raise ValueError("provide scene_file and scene_class, or use --page-selector")
    return scene_file, scene_class, resolution


def page_environment(resolution, base: dict[str, str] | None = None) -> dict[str, str]:
    environment = dict(os.environ if base is None else base)
    environment.pop("MANIM_PAGE_RESOLUTION_JSON", None)
    if resolution is not None:
        environment["MANIM_PAGE_RESOLUTION_JSON"] = json.dumps(
            asdict(resolution), ensure_ascii=False
        )
    return environment


def artifact_identity(scene_class: str, resolution) -> str:
    value = resolution.semantic_id if resolution is not None else scene_class
    stem = re.sub(r"[^A-Za-z0-9_.-]+", "-", value).strip("-") or "page"
    if stem == value:
        return stem
    digest = hashlib.sha256(value.encode("utf-8")).hexdigest()[:8]
    return f"{stem}-{digest}"


def generate_page_contract(project_root: pathlib.Path, project_config: dict[str, object]) -> None:
    page_config = project_config.get("page_resolution")
    if not isinstance(page_config, dict):
        raise ValueError("--page-selector requires project page_resolution configuration")
    generator = page_config.get("generator")
    if not isinstance(generator, list):
        raise ValueError("page_resolution.generator is required")
    command = [sys.executable if part == "{python}" else str(part) for part in generator]
    print("\n== semantic-page-contract-generation ==")
    print("$ " + " ".join(command))
    completed = subprocess.run(command, cwd=project_root)
    if completed.returncode:
        raise ValueError("semantic page contract generation failed")


def main() -> int:
    args = parse_args()
    project_root = pathlib.Path.cwd().resolve()
    config_path = (args.project_config or project_root / ".manim-slides-deck.json").resolve()
    project_config: dict[str, object] = {}
    if config_path.is_file():
        try:
            project_config = validate_config(json.loads(config_path.read_text(encoding="utf-8")), project_root)
        except (ValueError, json.JSONDecodeError) as error:
            raise SystemExit(f"invalid project config {config_path}: {error}") from error
    if args.page_selector:
        try:
            generate_page_contract(project_root, project_config)
        except ValueError as error:
            raise SystemExit(str(error)) from error
    try:
        scene_file, scene_class, resolution = resolve_scene_selection(
            args, project_root, project_config
        )
    except (OSError, ValueError, json.JSONDecodeError) as error:
        raise SystemExit(f"page resolution failed: {error}") from error
    args.scene_file = scene_file
    args.scene_class = scene_class
    page_env = page_environment(resolution)
    defaults = project_config.get("artifact_defaults", {})
    assert isinstance(defaults, dict)
    html_dir = inside_project(project_root, defaults.get("html_dir", ".manim-slides-deck/artifacts/html"), "artifact_defaults.html_dir")
    report_dir = inside_project(project_root, defaults.get("report_dir", ".manim-slides-deck/artifacts/reports"), "artifact_defaults.report_dir")
    artifact_stem = artifact_identity(args.scene_class, resolution)
    html = (args.html.resolve() if args.html else html_dir / f"{artifact_stem}.html")
    report_path = (args.report.resolve() if args.report else report_dir / f"{artifact_stem}.json")
    warning_review_path = (
        args.warning_review.resolve()
        if args.warning_review
        else report_path.with_name(report_path.stem + ".warning-review.json")
    )
    verifier_candidates = [
        args.verifier_root.resolve() if args.verifier_root else None,
        SKILL_ROOT.parent / "manim-clip-verifier",
    ]
    verifier_root = next((p.resolve() for p in verifier_candidates if p and (p / "scripts/review_preflight.py").is_file() and (p / "scripts/verify_clip.py").is_file()), None)
    if verifier_root is None:
        raise SystemExit(
            "manim-clip-verifier not found as a sibling package skill; "
            "set --verifier-root only for an explicit development override"
        )
    preflight_script = verifier_root / "scripts/review_preflight.py"
    verify_clip_script = verifier_root / "scripts/verify_clip.py"
    report_path.parent.mkdir(parents=True, exist_ok=True)

    report: dict[str, object] = {
        "schema_version": 1,
        "scene_file": str(scene_file),
        "scene_class": args.scene_class,
        "started_at_unix": time.time(),
        "acceptance_mode": "static-only" if args.static_only else "full-automated",
        "project_config": str(config_path) if config_path.is_file() else None,
        "verifier_root": str(verifier_root),
        "page_resolution": asdict(resolution) if resolution else None,
        "steps": [],
        "gate_results": {
            "continuity": {"status": "pending", "findings": []},
            "geometry": {"status": "pending", "findings": []},
            "attention": {"status": "pending", "findings": []},
            "dry": {"status": "pending", "findings": []},
            "other": {"status": "pending", "findings": []},
        },
        "judgment_gates": {
            "audience_state": "pending-independent-review",
            "understanding_through_visualization": "pending-review",
            "semantic_checkpoint": "pending-review",
            "continuous_visual_review": "pending-review",
            "html_navigation": "pending-runtime-review",
        },
    }

    def save(status: str) -> None:
        report["status"] = status
        report["finished_at_unix"] = time.time()
        report_path.write_text(json.dumps(report, indent=2) + "\n", encoding="utf-8")

    def run(
        name: str,
        command: list[str],
        *,
        classify_failure: bool = False,
        env: dict[str, str] | None = None,
    ) -> bool:
        print(f"\n== {name} ==")
        print("$ " + " ".join(command))
        completed = subprocess.run(
            command,
            cwd=project_root,
            text=True,
            stdout=subprocess.PIPE,
            stderr=subprocess.STDOUT,
            env=env,
        )
        output = completed.stdout or ""
        if output:
            print(output, end="" if output.endswith("\n") else "\n")
        report["steps"].append(
            {
                "name": name,
                "command": command,
                "returncode": completed.returncode,
                "output_tail": output[-4000:] if completed.returncode else None,
            }
        )
        if completed.returncode:
            if classify_failure:
                if "continuity gate detected" in output:
                    category = "continuity"
                elif "component overlap detected" in output or "out of frame" in output:
                    category = "geometry"
                else:
                    category = "other"
                gate = report["gate_results"][category]
                gate["status"] = "fail"
                gate["findings"].append({
                    "severity": "error",
                    "provider": "rendered-state-and-animation-trace",
                    "message": output[-2000:],
                })
            print(f"[FAIL] {name}", file=sys.stderr)
            save("failed")
            return False
        print(f"[PASS] {name}")
        return True

    if not scene_file.is_file():
        print(f"[FAIL] scene file not found: {scene_file}", file=sys.stderr)
        report["steps"].append({"name": "input", "returncode": 2})
        save("failed")
        return 2

    source = scene_file.read_text(encoding="utf-8")
    required_tokens = {
        "scene class": f"class {args.scene_class}",
        "Manim Slides checkpoint": "self.next_slide(",
    }
    missing = [label for label, token in required_tokens.items() if token not in source]
    report["steps"].append(
        {"name": "source-contract", "returncode": 1 if missing else 0, "missing": missing}
    )
    if missing:
        print("[FAIL] source contract missing: " + ", ".join(missing), file=sys.stderr)
        save("failed")
        return 1
    print("[PASS] source-contract")

    try:
        tree = ast.parse(source, str(scene_file))
        compile(tree, str(scene_file), "exec")
    except SyntaxError as error:
        print(f"[FAIL] python-compile: {error}", file=sys.stderr)
        report["steps"].append({"name": "python-compile", "returncode": 1, "error": str(error)})
        save("failed")
        return 1
    report["steps"].append({"name": "python-compile", "returncode": 0})
    print("[PASS] python-compile")

    class_nodes = {
        node.name: node for node in tree.body if isinstance(node, ast.ClassDef)
    }
    relevant_classes: list[ast.ClassDef] = []
    pending = [args.scene_class]
    seen: set[str] = set()
    while pending:
        class_name = pending.pop()
        if class_name in seen or class_name not in class_nodes:
            continue
        seen.add(class_name)
        class_node = class_nodes[class_name]
        relevant_classes.append(class_node)
        pending.extend(name for base in class_node.bases if (name := base_name(base)))
    relevant_next_slide_calls = sum(
        1
        for cls in relevant_classes
        for node in ast.walk(cls)
        if isinstance(node, ast.Call)
        and isinstance(node.func, ast.Attribute)
        and node.func.attr == "next_slide"
    )
    # A page-scoped preview may bind a tested page method from another class in
    # the same module. Runtime GatedSlide.next_slide remains the enforcement
    # point, so source-wide calls are valid coverage evidence for that adapter.
    source_next_slide_calls = sum(
        1
        for node in ast.walk(tree)
        if isinstance(node, ast.Call)
        and isinstance(node.func, ast.Attribute)
        and node.func.attr == "next_slide"
    )
    next_slide_calls = relevant_next_slide_calls or source_next_slide_calls
    gated_names = set(project_config.get("gated_base_names", ["GatedSlide"]))
    gated_base = any(
        base_name(base) in gated_names
        for cls in relevant_classes
        for base in cls.bases
    )
    forbidden_overrides = sorted(
        f"{cls.name}.{node.name}"
        for cls in relevant_classes
        for node in cls.body
        if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef))
        and node.name in {"next_slide", "checkpoint_gate", "_automatic_gate_components"}
    )
    checkpoint_gate_ok = next_slide_calls > 0 and gated_base and not forbidden_overrides
    report["steps"].append(
        {
            "name": "checkpoint-overlap-coverage",
            "returncode": 0 if checkpoint_gate_ok else 1,
            "next_slide_calls": next_slide_calls,
            "relevant_next_slide_calls": relevant_next_slide_calls,
            "source_next_slide_calls": source_next_slide_calls,
            "gated_slide_base": gated_base,
            "forbidden_overrides": forbidden_overrides,
        }
    )
    if not checkpoint_gate_ok:
        print(
            "[FAIL] target class must derive from GatedSlide and declare at "
            f"least one next_slide(): next_slide={next_slide_calls}, "
            f"gated_slide_base={gated_base}, "
            f"forbidden_overrides={forbidden_overrides}",
            file=sys.stderr,
        )
        save("failed")
        return 1
    print(
        "[PASS] checkpoint-overlap-coverage: "
        f"next_slide={next_slide_calls}, gated_slide_base={gated_base}"
    )

    if not run("clip-source-verifier", [sys.executable, str(verify_clip_script), str(scene_file), args.scene_class]):
        return 1

    preflight_json = report_path.with_name(report_path.stem + ".preflight.json")
    preflight = [
        sys.executable,
        str(preflight_script),
        str(scene_file),
        "--json-out",
        str(preflight_json),
    ]
    if args.manifest:
        preflight += ["--manifest", str(args.manifest.resolve())]
    if args.coverage:
        preflight += ["--coverage", str(args.coverage.resolve())]
    forbidden_registry = project_config.get("forbidden_registry")
    if forbidden_registry:
        preflight += [
            "--forbidden-registry",
            str(inside_project(project_root, forbidden_registry, "forbidden_registry")),
        ]
    if not run("source-evidence-provider", preflight):
        return 1

    source_payload = json.loads(preflight_json.read_text(encoding="utf-8"))

    # Restrict source evidence to code reachable from the requested preview.
    # A monolithic source file may contain many unrelated pages and legacy
    # scenes; their findings do not belong to this page's warning coverage.
    method_nodes: dict[str, dict[str, ast.FunctionDef | ast.AsyncFunctionDef]] = {}
    function_owner: dict[ast.FunctionDef | ast.AsyncFunctionDef, str | None] = {}
    module_functions: dict[str, ast.FunctionDef | ast.AsyncFunctionDef] = {}
    for node in tree.body:
        if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef)):
            module_functions[node.name] = node
            function_owner[node] = None
        elif isinstance(node, ast.ClassDef):
            methods = {
                child.name: child for child in node.body
                if isinstance(child, (ast.FunctionDef, ast.AsyncFunctionDef))
            }
            method_nodes[node.name] = methods
            for child in methods.values():
                function_owner[child] = node.name
    dispatch_methods: dict[str, ast.FunctionDef | ast.AsyncFunctionDef] = {}
    for cls in relevant_classes:
        for name, method in method_nodes.get(cls.name, {}).items():
            dispatch_methods.setdefault(name, method)
    reachable: set[ast.FunctionDef | ast.AsyncFunctionDef] = set()
    queue: list[ast.FunctionDef | ast.AsyncFunctionDef] = []
    for cls in relevant_classes:
        queue.extend(
            node for node in cls.body
            if isinstance(node, (ast.FunctionDef, ast.AsyncFunctionDef))
        )
        for node in cls.body:
            if not isinstance(node, (ast.Assign, ast.AnnAssign)):
                continue
            value = node.value
            if (
                isinstance(value, ast.Attribute)
                and isinstance(value.value, ast.Name)
            ):
                aliased = method_nodes.get(value.value.id, {}).get(value.attr)
                if aliased is not None:
                    queue.append(aliased)
    while queue:
        function = queue.pop()
        if function in reachable:
            continue
        reachable.add(function)
        owner = function_owner.get(function)
        for node in ast.walk(function):
            if not isinstance(node, ast.Call):
                continue
            if isinstance(node.func, ast.Name):
                helper = module_functions.get(node.func.id)
                if helper is not None:
                    queue.append(helper)
            elif (
                owner is not None
                and isinstance(node.func, ast.Attribute)
                and isinstance(node.func.value, ast.Name)
                and node.func.value.id in {"self", "cls"}
            ):
                method = dispatch_methods.get(node.func.attr) or method_nodes.get(owner, {}).get(node.func.attr)
                if method is not None:
                    queue.append(method)
    reachable_ranges = [
        (node.lineno, getattr(node, "end_lineno", node.lineno))
        for node in reachable
    ]
    scoped_findings = []
    for finding in source_payload.get("findings", []):
        line = finding.get("line")
        if line is None or any(start <= int(line) <= end for start, end in reachable_ranges):
            scoped_findings.append(finding)
    report["source_scope"] = {
        "mode": "reachable-page-code",
        "reachable_functions": len(reachable),
        "all_findings": len(source_payload.get("findings", [])),
        "scoped_findings": len(scoped_findings),
    }
    continuity_codes = {
        "already-connected-continuation",
        "fade-transform-cleanup-order", "blanket-scene-fadeout",
        "whole-equation-transform", "nonmatching-tex-transform",
        "undivided-transform-matching-tex",
        "fragment-only-equation-transform",
        "low-transform-matching-tex-coverage", "ambiguous-repeated-transform-key",
    }
    geometry_codes = {
        "absolute-consumer-layout", "nonunit-graph-aspect",
        "unverifiable-graph-unit-aspect",
    }
    attention_codes = {
        "overloaded-simultaneous-play", "dynamic-simultaneous-play",
        "too-fast-audience-animation", "split-attention-text-and-visual",
        "long-on-canvas-prose",
    }
    dry_codes = {
        "similar-builder-candidates", "similar-component-segments", "numeric-semantic-access",
        "raw-semantic-color",
    }
    for finding in scoped_findings:
        code = finding.get("code")
        if code in continuity_codes:
            category = "continuity"
        elif code in geometry_codes:
            category = "geometry"
        elif code in attention_codes:
            category = "attention"
        elif code in dry_codes:
            category = "dry"
        else:
            category = "other"
        normalized = dict(finding)
        normalized["provider"] = "source-analysis"
        report["gate_results"][category]["findings"].append(normalized)
    for category, gate in report["gate_results"].items():
        if gate["status"] == "pending" and gate["findings"]:
            gate["status"] = "advisory"

    def enforce_warning_review() -> bool:
        reviewable: list[dict[str, object]] = []
        source_lines = source.splitlines()
        for category, gate in report["gate_results"].items():
            for ordinal, finding in enumerate(gate["findings"]):
                if finding.get("severity") != "warning":
                    continue
                line = finding.get("line")
                context = ""
                if isinstance(line, int) and line > 0:
                    context = "\n".join(source_lines[max(0, line - 3):line + 2])
                identity_payload = {
                    "scene_class": args.scene_class,
                    "category": category,
                    "code": finding.get("code"),
                    "relative_path": os.path.relpath(str(finding.get("path", scene_file)), project_root),
                    "message": finding.get("message"),
                    "context_hash": hashlib.sha256(context.encode("utf-8")).hexdigest()[:16],
                    "provider": finding.get("provider"),
                    "ordinal": ordinal,
                }
                finding_id = hashlib.sha256(
                    json.dumps(identity_payload, sort_keys=True).encode("utf-8")
                ).hexdigest()[:20]
                finding["finding_id"] = finding_id
                reviewable.append({
                    "finding_id": finding_id,
                    "category": category,
                    "code": finding.get("code"),
                    "provider": finding.get("provider"),
                    "path": finding.get("path"),
                    "line": line,
                    "message": finding.get("message"),
                    "disposition": None,
                    "reason": None,
                    "evidence": None,
                    "reviewer": None,
                })

        if not reviewable:
            report["warning_review"] = {"status": "not-needed", "count": 0}
            return True
        required_ids = {str(item["finding_id"]) for item in reviewable}
        accepted_dispositions = {"intentional", "false-positive", "accepted-risk"}
        review_error = None
        review_data = None
        try:
            review_data = json.loads(warning_review_path.read_text(encoding="utf-8"))
        except FileNotFoundError:
            review_error = "warning review manifest is missing"
        except json.JSONDecodeError as error:
            review_error = f"warning review manifest is invalid JSON: {error}"
        if review_data is not None:
            rows = review_data.get("warnings", []) if isinstance(review_data, dict) else []
            by_id = {
                str(row.get("finding_id")): row
                for row in rows
                if isinstance(row, dict) and row.get("finding_id")
            }
            missing_ids = sorted(required_ids - set(by_id))
            stale_ids = sorted(set(by_id) - required_ids)
            incomplete = sorted(
                finding_id
                for finding_id in required_ids.intersection(by_id)
                if by_id[finding_id].get("disposition") not in accepted_dispositions
                or not str(by_id[finding_id].get("reason", "")).strip()
                or not str(by_id[finding_id].get("evidence", "")).strip()
                or not str(by_id[finding_id].get("reviewer", "")).strip()
            )
            if missing_ids or stale_ids or incomplete:
                review_error = (
                    f"warning coverage mismatch: missing={len(missing_ids)}, "
                    f"stale={len(stale_ids)}, incomplete={len(incomplete)}"
                )
        if review_error:
            required_path = warning_review_path.with_name(
                warning_review_path.stem + ".required.json"
            )
            required_path.parent.mkdir(parents=True, exist_ok=True)
            required_path.write_text(json.dumps({
                "schema_version": 1,
                "scene_class": args.scene_class,
                "source_file": str(scene_file),
                "warnings": reviewable,
            }, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
            report["warning_review"] = {
                "status": "required",
                "manifest": str(warning_review_path),
                "template": str(required_path),
                "count": len(reviewable),
                "error": review_error,
            }
            print(f"[BLOCK] {review_error}", file=sys.stderr)
            print(f"[REVIEW TEMPLATE] {required_path}", file=sys.stderr)
            save("warning-review-required")
            return False
        report["warning_review"] = {
            "status": "covered",
            "manifest": str(warning_review_path),
            "count": len(reviewable),
        }
        return True

    for gate in project_config.get("project_gates", []):
        if not isinstance(gate, dict) or not isinstance(gate.get("command"), list):
            print(f"[FAIL] invalid project gate in {config_path}: {gate!r}", file=sys.stderr)
            save("failed")
            return 1
        command = [sys.executable if part == "{python}" else str(part) for part in gate["command"]]
        if not run(str(gate.get("name", "project-gate")), command, env=page_env):
            return 1

    if args.static_only:
        print("\n[INCOMPLETE] static-only mode cannot pass runtime or delivery gates")
        save("incomplete-static-only")
        return 3

    render = [
        "manim-slides",
        "render",
        str(scene_file),
        args.scene_class,
        "-q",
        args.quality,
    ]
    runtime_findings_path = report_path.with_name(report_path.stem + ".runtime-findings.jsonl")
    runtime_findings_path.unlink(missing_ok=True)
    render_env = page_env.copy()
    # The opt-out remains available for direct developer diagnostics, but a
    # formal harness run never inherits it accidentally.
    render_env.pop("MANIM_SKIP_RUNTIME_GATES", None)
    render_env["MANIM_GATE_FINDINGS_PATH"] = str(runtime_findings_path)
    if not run(
        "rendered-state-and-animation-trace-provider",
        render,
        classify_failure=True,
        env=render_env,
    ):
        return 1
    if runtime_findings_path.is_file():
        for raw_line in runtime_findings_path.read_text(encoding="utf-8").splitlines():
            if not raw_line.strip():
                continue
            finding = json.loads(raw_line)
            category = str(finding.get("category", "other"))
            if category not in report["gate_results"]:
                category = "other"
            report["gate_results"][category]["findings"].append(finding)
            if finding.get("severity") == "warning" and report["gate_results"][category]["status"] == "pending":
                report["gate_results"][category]["status"] = "advisory"
    for category in ("continuity", "geometry"):
        gate = report["gate_results"][category]
        if gate["status"] in {"pending", "advisory"}:
            gate["status"] = "pass-with-advisories" if gate["findings"] else "pass"

    if not enforce_warning_review():
        return 4

    html.parent.mkdir(parents=True, exist_ok=True)
    if not run(
        "manim-slides-convert",
        ["manim-slides", "convert", "--one-file", args.scene_class, str(html)],
    ):
        return 1

    html_ok = html.is_file() and html.stat().st_size > 1000
    report["steps"].append(
        {
            "name": "html-sanity",
            "returncode": 0 if html_ok else 1,
            "path": str(html),
            "bytes": html.stat().st_size if html.is_file() else 0,
        }
    )
    if not html_ok:
        print(f"[FAIL] HTML missing or implausibly small: {html}", file=sys.stderr)
        save("failed")
        return 1
    print(f"[PASS] html-sanity: {html}")

    report["html"] = str(html)
    save("automated-gates-passed-judgment-pending")
    print(f"\n[AUTOMATED PASS] report: {report_path}")
    print("[PENDING] audience, semantic, visual, and navigation judgment gates")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
