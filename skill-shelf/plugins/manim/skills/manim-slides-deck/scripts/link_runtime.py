#!/usr/bin/env python3
"""Symlink the stocked generic Manim Slides runtime into a project."""

from __future__ import annotations

import argparse
import pathlib
import sys


def ensure_link(target: pathlib.Path, source: pathlib.Path, *, force: bool, check: bool) -> None:
    if target.is_symlink() and target.resolve() == source.resolve():
        print(f"[ok] {target} -> {source}")
        return
    if target.exists() or target.is_symlink():
        if check:
            raise SystemExit(f"noncanonical runtime link: {target}")
        if not force:
            raise SystemExit(f"refusing to replace noncanonical target: {target}")
        if target.is_dir() and not target.is_symlink():
            raise SystemExit(f"refusing to remove directory automatically: {target}")
        target.unlink()
    if check:
        raise SystemExit(f"missing runtime link: {target}")
    target.parent.mkdir(parents=True, exist_ok=True)
    target.symlink_to(source, target_is_directory=source.is_dir())
    print(f"[ok] linked {target} -> {source}")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("project_root", type=pathlib.Path)
    parser.add_argument("--compat-scenes-utils", action="store_true")
    parser.add_argument("--force", action="store_true")
    parser.add_argument("--check", action="store_true", help="verify links without changing files")
    args = parser.parse_args()
    project = args.project_root.resolve()
    source = pathlib.Path(__file__).resolve().parents[1] / "assets" / "manim_slides_gate"
    ensure_link(project / "manim_slides_gate", source, force=args.force, check=args.check)
    if args.compat_scenes_utils:
        ensure_link(project / "scenes" / "utils.py", source / "__init__.py", force=args.force, check=args.check)
    return 0


if __name__ == "__main__":
    sys.exit(main())
