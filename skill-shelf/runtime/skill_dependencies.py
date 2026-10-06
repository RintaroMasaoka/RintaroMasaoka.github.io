#!/usr/bin/env python3
"""Inspect and resolve declared dependencies in a local skill stock (no installation)."""
from __future__ import annotations

import argparse
import hashlib
import json
import os
from pathlib import Path
import re
import sys
import tempfile

CONTRACT = "skill-dependencies.json"
NAME = r"[a-z0-9]+(?:-[a-z0-9]+)*"
IDENTITY = re.compile(rf"^(package|standalone):({NAME})$")
SEMVER = re.compile(r"^(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$")
KINDS = {"required", "optional", "handoff"}
IGNORED = {".git", "__pycache__", ".pytest_cache", ".DS_Store"}


class Invalid(ValueError):
    pass


def require(condition, message):
    if not condition:
        raise Invalid(message)


def read_json(path):
    def pairs(items):
        result = {}
        for key, value in items:
            require(key not in result, f"duplicate JSON key: {key}")
            result[key] = value
        return result
    try:
        return json.loads(path.read_text(encoding="utf-8"), object_pairs_hook=pairs)
    except (OSError, UnicodeError, ValueError) as exc:
        raise Invalid(f"{path}: {exc}") from exc


def fields(obj, required, optional=()):
    require(isinstance(obj, dict), "expected an object")
    require(set(required) <= obj.keys(), f"missing fields: {sorted(set(required) - obj.keys())}")
    require(obj.keys() <= set(required) | set(optional), f"unknown fields: {sorted(obj.keys() - set(required) - set(optional))}")


def nonempty(value, label):
    require(isinstance(value, str) and bool(value.strip()), f"{label} must be a nonempty string")


def identity(value):
    require(isinstance(value, str) and IDENTITY.fullmatch(value), f"invalid owner identity: {value!r}")
    return value.split(":", 1)


def version_key(value):
    match = SEMVER.fullmatch(value) if isinstance(value, str) else None
    require(match is not None, f"invalid semantic version: {value!r}")
    major, minor, patch, pre, _ = match.groups()
    parts = []
    if pre:
        for item in pre.split("."):
            if item.isdigit():
                require(item == "0" or not item.startswith("0"), f"invalid numeric prerelease: {value}")
                parts.append((0, int(item)))
            else:
                parts.append((1, item))
    return (int(major), int(minor), int(patch), int(pre is None), tuple(parts))


def range_parts(expression):
    nonempty(expression, "version constraint")
    if expression == "*":
        return []
    result = []
    for part in expression.split(","):
        match = re.fullmatch(r"\s*(==|>=|<=|>|<)?\s*(\S+)\s*", part)
        require(match is not None, f"unsupported version constraint: {expression}")
        op, version = match.groups()
        result.append((op or "==", version_key(version)))
    return result


def satisfies(version, expression):
    parts = range_parts(expression)
    if not parts:
        return True
    current = version_key(version)
    for op, expected in parts:
        if not {"==": current == expected, ">=": current >= expected,
                "<=": current <= expected, ">": current > expected, "<": current < expected}[op]:
            return False
    return True


def relative(value):
    nonempty(value, "relative path")
    p = Path(value)
    require(not p.is_absolute() and ".." not in p.parts and "\\" not in value
            and value == p.as_posix() and value != ".", f"invalid relative path: {value}")
    return p


def local_file(root, value):
    path = root / relative(value)
    require(path.resolve().is_relative_to(root.resolve()), f"path escapes owner: {value}")
    require(path.is_file() and not path.is_symlink(), f"missing or symlinked owner file: {value}")
    return path


def validate_entrypoint(root, value, expected):
    path = local_file(root, value)
    lines = path.read_text(encoding="utf-8").splitlines()
    require(lines and lines[0].strip() == "---", f"missing frontmatter: {path}")
    end = next((i for i in range(1, len(lines)) if lines[i].strip() == "---"), None)
    require(end is not None, f"unclosed frontmatter: {path}")
    names = [line for line in lines[1:end] if re.match(r"^name\s*:", line)]
    match = re.fullmatch(r'''name\s*:\s*(?:"([a-z0-9-]+)"|'([a-z0-9-]+)'|([a-z0-9-]+))\s*(?:#.*)?''', names[0]) if len(names) == 1 else None
    require(match is not None and next(x for x in match.groups() if x is not None) == expected,
            f"skill frontmatter identity mismatch: {path}; expected {expected}")


def discover(stock):
    require(stock.is_dir(), f"stock directory does not exist: {stock}")
    owners, problems = {}, []
    for path in sorted(stock.iterdir()):
        if path.name.startswith(".") or not path.is_dir():
            continue
        manifest = path / ".codex-plugin/plugin.json"
        skill = path / "SKILL.md"
        if not manifest.exists() and not skill.exists():
            continue
        key = ("package:" if manifest.exists() else "standalone:") + path.name
        try:
            identity(key)
            require(not path.is_symlink(), f"owner is a symlink: {key}")
            require(not (manifest.exists() and skill.exists()), f"dual owner: {key}")
            if manifest.exists():
                require(not manifest.is_symlink() and manifest.resolve().is_relative_to(path.resolve()), f"manifest escapes owner or is a symlink: {key}")
                data = read_json(manifest)
                require(isinstance(data, dict) and data.get("name") == path.name, f"manifest identity mismatch: {key}")
                version = data.get("version")
                version_key(version)
                require(data.get("skills", "./skills/") in {"./skills/", "./skills", "skills/", "skills"}, f"noncanonical skills directory: {key}")
                require((path / "skills").is_dir() and not (path / "skills").is_symlink(), f"missing or symlinked skills directory: {key}")
                skills = []
                for entry in sorted((path / "skills").glob("*/SKILL.md")):
                    require(not entry.parent.is_symlink(), f"skill directory is a symlink: {entry.parent}")
                    validate_entrypoint(path, entry.relative_to(path).as_posix(), entry.parent.name)
                    require(re.fullmatch(NAME, entry.parent.name), f"invalid skill name: {entry.parent.name}")
                    skills.append(entry.parent.name)
            else:
                version, skills = None, [path.name]
                validate_entrypoint(path, "SKILL.md", path.name)
            owners[key] = {"path": path, "version": version, "skills": skills}
        except (Invalid, OSError, UnicodeError, TypeError) as exc:
            problems.append(str(exc))
    return owners, problems


def load_contract(key, owner):
    path = local_file(owner["path"], CONTRACT)
    data = read_json(path)
    fields(data, {"schema_version", "owner", "dependencies", "bundled"})
    require(type(data["schema_version"]) is int and data["schema_version"] == 1, "unsupported contract schema_version")
    require(data["owner"] == key, f"contract owner mismatch: expected {key}")
    require(isinstance(data["dependencies"], list) and isinstance(data["bundled"], list), "dependencies and bundled must be arrays")
    seen = set()
    for edge in data["dependencies"]:
        fields(edge, {"target", "kind", "version", "skills", "used_by", "reason"}, {"when", "fallback"})
        target_kind, target_name = identity(edge["target"])
        require(edge["target"] != key, "internal calls are not owner dependencies")
        require(edge["kind"] in KINDS, f"unknown dependency kind: {edge['kind']}")
        range_parts(edge["version"])
        if target_kind == "standalone":
            require(edge["version"] == "*", "unversioned standalone dependencies must use '*'; pin content in a lock")
        for field in ("skills", "used_by"):
            require(isinstance(edge[field], list) and edge[field], f"{field} must be a nonempty array")
            require(all(isinstance(s, str) for s in edge[field]), f"{field} values must be strings")
            require(len(set(edge[field])) == len(edge[field]), f"duplicate {field} entry")
        require(all(re.fullmatch(NAME, s) for s in edge["skills"]), "invalid exported skill name")
        if target_kind == "standalone":
            require(edge["skills"] == [target_name], "standalone dependency must name its one skill")
        for caller in edge["used_by"]:
            local_file(owner["path"], caller)
        nonempty(edge["reason"], "reason")
        if edge["kind"] in {"optional", "handoff"}:
            nonempty(edge.get("when"), "when")
            nonempty(edge.get("fallback"), "fallback")
        else:
            require("when" not in edge and "fallback" not in edge,
                    "required dependencies are unconditional for the selected owner")
        signature = (edge["target"], edge["kind"], tuple(sorted(edge["skills"])), tuple(sorted(edge["used_by"])))
        require(signature not in seen, "duplicate dependency declaration")
        seen.add(signature)
    paths = set()
    for entry in data["bundled"]:
        fields(entry, {"path", "source", "source_path", "source_revision", "mode", "update_policy", "reason"}, {"source_sha256"})
        local_file(owner["path"], entry["path"])
        require(entry["path"] not in paths, f"duplicate bundled path: {entry['path']}")
        paths.add(entry["path"])
        identity(entry["source"])
        relative(entry["source_path"])
        nonempty(entry["source_revision"], "source_revision")
        require(entry["mode"] in {"copy", "adapted"}, "bundled mode must be copy or adapted")
        require(entry["update_policy"] in {"manual", "frozen"}, "bundled update_policy must be manual or frozen")
        nonempty(entry["reason"], "reason")
        if "source_sha256" in entry:
            require(isinstance(entry["source_sha256"], str) and re.fullmatch(r"[0-9a-f]{64}", entry["source_sha256"]), "invalid source_sha256")
    return data


def edge_problem(edge, owners):
    target = owners.get(edge["target"])
    if target is None:
        return f"missing target {edge['target']}"
    missing = sorted(set(edge["skills"]) - set(target["skills"]))
    if missing:
        return f"missing exports {edge['target']}: {', '.join(missing)}"
    if not satisfies(target["version"], edge["version"]):
        return f"version mismatch {edge['target']}: {target['version']} does not satisfy {edge['version']}"
    return None


def topological(nodes, edges):
    result, active, done = [], [], set()
    def visit(node):
        if node in active:
            raise Invalid("dependency cycle: " + " -> ".join(active[active.index(node):] + [node]))
        if node in done:
            return
        active.append(node)
        for target in sorted(set(edges.get(node, []))):
            if target in nodes:
                visit(target)
        active.pop()
        done.add(node)
        result.append(node)
    for node in sorted(nodes):
        visit(node)
    return result


def audit(stock, selected=None, require_all=False):
    owners, errors = discover(stock)
    warnings, unregistered, contracts = [], [], {}
    keys = sorted(set(selected) if selected else owners)
    # Read all registered owners to detect cycles across the selected owners' closure.
    contract_errors = {}
    for key, owner in owners.items():
        if not (owner["path"] / CONTRACT).exists():
            continue
        try:
            contracts[key] = load_contract(key, owner)
        except (Invalid, TypeError) as exc:
            contract_errors[key] = f"{key}: {exc}"
    closure = set(keys)
    required_targets = set()
    pending = list(keys)
    while pending:
        key = pending.pop()
        for edge in contracts.get(key, {}).get("dependencies", []):
            if edge["kind"] == "required":
                required_targets.add(edge["target"])
                if edge["target"] not in closure:
                    closure.add(edge["target"])
                    pending.append(edge["target"])
    for key in sorted(closure):
        if key not in owners:
            errors.append(f"unknown owner: {key}")
            continue
        if key in contract_errors:
            errors.append(contract_errors[key])
            continue
        if key not in contracts:
            unregistered.append(key)
            if require_all or selected or key in required_targets:
                errors.append(f"undeclared dependency closure: {key} has no {CONTRACT}")
            continue
        for edge in contracts[key]["dependencies"]:
            problem = edge_problem(edge, owners)
            if problem:
                (errors if edge["kind"] == "required" else warnings).append(f"{key} ({edge['kind']}): {problem}")
        for entry in contracts[key]["bundled"]:
            if entry["source_revision"] == "unknown":
                warnings.append(f"{key}:{entry['path']}: upstream revision is unrecorded")
            source = owners.get(entry["source"])
            if source and "source_sha256" in entry:
                try:
                    upstream = local_file(source["path"], entry["source_path"])
                    if hashlib.sha256(upstream.read_bytes()).hexdigest() != entry["source_sha256"]:
                        warnings.append(f"{key}:{entry['path']}: upstream differs; {entry['update_policy']} update policy applies")
                except Invalid:
                    warnings.append(f"{key}:{entry['path']}: upstream path no longer available; bundled copy remains usable")
    edges = {k: [e["target"] for e in v["dependencies"] if e["kind"] == "required"] for k, v in contracts.items()}
    try:
        topological(closure, edges)
    except Invalid as exc:
        errors.append(str(exc))
    return {"schema_version": 1, "ok": not errors, "checked": sorted(closure),
            "registered_count": len(contracts), "owner_count": len(owners),
            "unregistered": unregistered, "errors": sorted(set(errors)), "warnings": sorted(set(warnings))}


def fingerprint(root):
    root = root.resolve()
    digest = hashlib.sha256()
    for path in sorted(root.rglob("*")):
        rel = path.relative_to(root)
        if any(p in IGNORED for p in rel.parts) or path.suffix == ".pyc":
            continue
        if path.is_symlink():
            require(not Path(os.readlink(path)).is_absolute() and path.resolve().is_relative_to(root.resolve())
                    and path.exists(), f"unsafe or broken owner symlink: {rel}")
            direct = Path(os.path.abspath(path.parent / os.readlink(path)))
            require(direct.is_relative_to(root.resolve()), f"symlink traverses outside owner: {rel}")
            for target in (direct.relative_to(root.resolve()), path.resolve().relative_to(root.resolve())):
                require(not any(p in IGNORED for p in target.parts) and target.suffix != ".pyc",
                        f"symlink targets content excluded from the lock: {rel}")
            content, kind = os.readlink(path).encode(), "link"
        elif path.is_dir():
            continue
        elif path.is_file():
            content, kind = path.read_bytes(), "file"
        else:
            raise Invalid(f"unsupported owner entry: {rel}")
        header = json.dumps([rel.as_posix(), kind, bool(path.lstat().st_mode & 0o111)], separators=(",", ":")).encode()
        digest.update(header + b"\0" + str(len(content)).encode() + b"\0" + content + b"\0")
    return digest.hexdigest()


def resolve(stock, roots, include_optional=False):
    owners, discovery_errors = discover(stock)
    require(not discovery_errors, "; ".join(discovery_errors))
    nodes, edges, warnings = {}, {}, []
    pending = list(roots)
    require(bool(pending), "at least one root is required")
    while pending:
        key = pending.pop()
        identity(key)
        if key in nodes:
            continue
        require(key in owners, f"unknown owner: {key}")
        contract = load_contract(key, owners[key])
        nodes[key] = owners[key]
        edges[key] = []
        for edge in contract["dependencies"]:
            problem = edge_problem(edge, owners)
            selected = edge["kind"] == "required" or (include_optional and edge["kind"] == "optional")
            if selected:
                require(problem is None, f"{key}: {problem}")
                edges[key].append(edge["target"])
                pending.append(edge["target"])
            elif problem:
                warnings.append(f"{key} ({edge['kind']}): {problem}; use declared fallback")
    order = topological(nodes, edges)
    return {"schema_version": 1, "roots": sorted(set(roots)), "include_optional": include_optional,
            "order": order, "owners": {k: {"version": nodes[k]["version"], "sha256": fingerprint(nodes[k]["path"])} for k in order},
            "warnings": sorted(set(warnings))}


def check_lock(stock, path):
    locked = read_json(path)
    fields(locked, {"schema_version", "roots", "include_optional", "order", "owners", "warnings"})
    require(type(locked["schema_version"]) is int and locked["schema_version"] == 1, "unsupported lock schema_version")
    require(type(locked["include_optional"]) is bool, "invalid lock include_optional")
    require(isinstance(locked["roots"], list) and all(isinstance(x, str) for x in locked["roots"]), "invalid lock roots")
    current = resolve(stock, locked["roots"], locked["include_optional"])
    for field in ("order", "owners"):
        require(locked[field] == current[field], f"lock drift in {field}; inspect changes and explicitly regenerate the lock")
    return {"ok": True, "checked": current["order"], "warnings": current["warnings"]}


def scan(stock):
    owners, errors = discover(stock)
    results = []
    token = re.compile(r"\$([a-z0-9]+(?:-[a-z0-9]+)*):([a-z0-9]+(?:-[a-z0-9]+)*)(?![a-z0-9:-])")
    for key, owner in owners.items():
        for path in sorted(owner["path"].rglob("*")):
            if path.is_symlink() or not path.is_file() or path.suffix not in {".md", ".yaml", ".yml"}:
                continue
            rel = path.relative_to(owner["path"])
            if any(p in IGNORED | {"tests", "fixtures", "node_modules"} for p in rel.parts):
                continue
            for line, text in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
                for match in token.finditer(text):
                    namespace, skill = match.groups()
                    target = ("standalone:" + skill) if namespace == "standalone" else ("package:" + namespace)
                    if target != key:
                        results.append({"owner": key, "target": target, "skill": skill, "file": rel.as_posix(), "line": line})
    return {"schema_version": 1, "advisory_only": True,
            "note": "Explicit qualified mentions only. May include examples or exclusions; bare names and dynamic calls require manual review. No dependency kind is inferred.",
            "mentions": results, "errors": errors}


def graph(stock):
    owners, errors = discover(stock)
    require(not errors, "; ".join(errors))
    contracts, names = {}, set(owners)
    for key, owner in owners.items():
        if (owner["path"] / CONTRACT).exists():
            contracts[key] = load_contract(key, owner)
            names.update(e["target"] for e in contracts[key]["dependencies"])
            names.update(e["source"] for e in contracts[key]["bundled"])
    ids = {key: f"n{i}" for i, key in enumerate(sorted(names))}
    lines = ["flowchart LR"]
    for key in sorted(names):
        status = "" if key in contracts else (" (undeclared)" if key in owners else " (absent)")
        lines.append(f'    {ids[key]}["{key}{status}"]')
    for key, contract in sorted(contracts.items()):
        for edge in contract["dependencies"]:
            arrow = f'-->|required|' if edge["kind"] == "required" else f'-. {edge["kind"]} .->'
            lines.append(f'    {ids[key]} {arrow} {ids[edge["target"]]}')
        for source in sorted({e["source"] for e in contract["bundled"]}):
            lines.append(f'    {ids[key]} -. bundled provenance .-> {ids[source]}')
    return "\n".join(lines)


def write_lock(path, value, stock, force=False):
    require(not path.resolve().is_relative_to(stock.resolve()), "lock must be outside stock (consumer or operation workspace)")
    require(not path.is_symlink(), "refusing to write through a lock symlink")
    require(force or not path.exists(), "lock exists; use --force only after reviewing drift")
    require(path.parent.is_dir(), "lock output parent directory does not exist")
    fd, temp = tempfile.mkstemp(prefix=".skill-lock-", dir=path.parent)
    try:
        with os.fdopen(fd, "w", encoding="utf-8") as stream:
            json.dump(value, stream, indent=2, ensure_ascii=False)
            stream.write("\n")
        if force:
            os.replace(temp, path)
        else:
            # Atomic no-clobber publication; the temporary link is then removed.
            os.link(temp, path)
    finally:
        if os.path.exists(temp):
            os.unlink(temp)


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--stock", type=Path, default=Path(__file__).resolve().parents[2])
    commands = parser.add_subparsers(dest="command", required=True)
    commands.add_parser("inventory", help="list owners and declaration coverage")
    commands.add_parser("scan", help="find candidate cross-owner mentions; no automatic declarations")
    audit_parser = commands.add_parser("audit", help="validate contracts, targets, ranges, and required cycles")
    audit_parser.add_argument("--owner", action="append")
    audit_parser.add_argument("--require-all", action="store_true")
    for name in ("plan", "lock"):
        sub = commands.add_parser(name, help="resolve the current stock; never download or install")
        sub.add_argument("--root", action="append", required=True)
        sub.add_argument("--include-optional", action="store_true")
        if name == "lock":
            sub.add_argument("--output", type=Path, required=True)
            sub.add_argument("--force", action="store_true")
    check = commands.add_parser("check-lock", help="verify recorded versions and exact owner content")
    check.add_argument("lockfile", type=Path)
    commands.add_parser("graph", help="emit Mermaid; distinguish dependency kinds and unknown owners")
    args = parser.parse_args(argv)
    try:
        if args.command == "inventory":
            owners, errors = discover(args.stock)
            result = {"owners": [{"owner": k, "version": v["version"], "skills": v["skills"],
                                  "declared": (v["path"] / CONTRACT).is_file()} for k, v in owners.items()], "errors": errors}
        elif args.command == "scan":
            result = scan(args.stock)
        elif args.command == "audit":
            result = audit(args.stock, args.owner, args.require_all)
        elif args.command in {"plan", "lock"}:
            result = resolve(args.stock, args.root, args.include_optional)
            if args.command == "lock":
                write_lock(args.output, result, args.stock, args.force)
        elif args.command == "check-lock":
            result = check_lock(args.stock, args.lockfile)
        else:
            print(graph(args.stock))
            return 0
        print(json.dumps(result, indent=2, ensure_ascii=False))
        return 1 if result.get("errors") else 0
    except (Invalid, OSError, TypeError, KeyError, UnicodeError) as exc:
        print(json.dumps({"ok": False, "error": str(exc)}, ensure_ascii=False), file=sys.stderr)
        return 1


if __name__ == "__main__":
    sys.exit(main())
