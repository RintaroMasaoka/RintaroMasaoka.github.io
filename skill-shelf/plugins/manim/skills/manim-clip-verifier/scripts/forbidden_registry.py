#!/usr/bin/env python3
"""Add, remove, or list project-owned forbidden source patterns."""

from __future__ import annotations

import argparse
import json
import pathlib


def load(path: pathlib.Path) -> dict[str, object]:
    if not path.exists():
        return {"schema_version": 1, "rules": []}
    payload = json.loads(path.read_text(encoding="utf-8"))
    if not isinstance(payload, dict) or payload.get("schema_version") != 1 or not isinstance(payload.get("rules"), list):
        raise SystemExit(f"invalid registry: {path}")
    return payload


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--registry", type=pathlib.Path, default=pathlib.Path(".manim-review-forbidden.json"))
    sub = parser.add_subparsers(dest="command", required=True)
    add = sub.add_parser("add")
    add.add_argument("pattern")
    add.add_argument("--kind", choices=("literal", "regex"), default="literal")
    add.add_argument("--reason", required=True)
    add.add_argument("--replacement", default="")
    remove = sub.add_parser("remove")
    remove.add_argument("pattern")
    sub.add_parser("list")
    args = parser.parse_args()

    path = args.registry.resolve()
    payload = load(path)
    rules = payload["rules"]
    assert isinstance(rules, list)
    if args.command == "list":
        print(json.dumps(payload, indent=2, ensure_ascii=False))
        return 0
    if args.command == "remove":
        kept = [rule for rule in rules if not isinstance(rule, dict) or rule.get("pattern") != args.pattern]
        if len(kept) == len(rules):
            raise SystemExit(f"pattern not registered: {args.pattern!r}")
        payload["rules"] = kept
    else:
        if any(isinstance(rule, dict) and rule.get("pattern") == args.pattern for rule in rules):
            raise SystemExit(f"pattern already registered: {args.pattern!r}")
        rules.append({
            "kind": args.kind,
            "pattern": args.pattern,
            "reason": args.reason,
            "replacement": args.replacement,
        })
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(payload, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(path)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
