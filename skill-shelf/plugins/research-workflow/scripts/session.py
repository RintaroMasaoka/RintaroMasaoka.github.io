#!/usr/bin/env python3
"""Initialize research memory and allocate session paths without project setup."""

import argparse
import datetime as dt
import re
from pathlib import Path


def local(root: Path, relative: str) -> Path:
    path = root / relative
    resolved = path.resolve()
    if resolved != root and root not in resolved.parents:
        raise ValueError(f"Path escapes project: {relative}")
    return path


def initialize(root: Path, question: str) -> None:
    question = " ".join(question.split()).strip()
    if not question:
        raise ValueError("A research question is required")
    research = local(root, "research")
    research.mkdir(exist_ok=True)
    state = local(root, "research/state.md")
    focus = local(root, "research/focus.md")
    if not state.exists():
        with state.open("x", encoding="utf-8") as output:
            output.write(
                "---\nkind: question\nstatus: active\nparent: null\n---\n\n"
                "# Research State\n\n## Background\n\n"
                f"{question}\n\n## Current Board\n\n"
                "Initial question recorded. Assumptions, evidence, and limitations still need assessment.\n\n"
                "## Evidence\n\nNo evidence has been admitted yet.\n"
            )
    if not focus.exists():
        with focus.open("x", encoding="utf-8") as output:
            output.write(
                "# Focus\ncursor: research/\nstatus: active\n\n"
                "## Context\n\n"
                f"{question}\n\n## Next Session\n\n### Lead Work\n"
                "- Question: Identify the first discriminating subquestion.\n"
                "  Method: Inspect assumptions and available evidence.\n"
                "  Success criteria: A concrete next check and its possible outcomes.\n\n"
                "### Worker Dispatches\n\n### Tree Directives\n\n## Blockers\n"
            )
    print(f"Research memory ready: {research}")


def allocate_path(root: Path, kind: str, label: str) -> None:
    if not re.fullmatch(r"[A-Za-z0-9_-]+", label):
        raise ValueError("Label must contain only letters, digits, _ or -")
    folder = local(root, ".logs" if kind == "log" else "feedback")
    folder.mkdir(exist_ok=True)
    stem = dt.datetime.now().strftime("%y%m%d_%H%M%S") + "_" + label
    candidate = folder / f"{stem}.md"
    suffix = 2
    while candidate.exists():
        candidate = folder / f"{stem}_{suffix}.md"
        suffix += 1
    print(candidate)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--project-root", type=Path, default=Path.cwd())
    subparsers = parser.add_subparsers(dest="command", required=True)
    init = subparsers.add_parser("init")
    init.add_argument("--question", required=True)
    path = subparsers.add_parser("path")
    path.add_argument("--kind", choices=("log", "feedback"), required=True)
    path.add_argument("--label", required=True)
    args = parser.parse_args()
    root = args.project_root.resolve(strict=True)
    if not root.is_dir():
        parser.error("Project root must be a directory")
    if args.command == "init":
        initialize(root, args.question)
    else:
        allocate_path(root, args.kind, args.label)


if __name__ == "__main__":
    main()
