#!/usr/bin/env python3
"""Link the canonical manim_layout package into a project."""
from __future__ import annotations
import argparse, filecmp, pathlib, shutil, sys


def matches(source: pathlib.Path, target: pathlib.Path) -> bool:
    if target.is_symlink(): return target.resolve() == source.resolve()
    if not target.is_dir(): return False
    comparison = filecmp.dircmp(source, target)
    return not (comparison.left_only or comparison.right_only or comparison.diff_files or comparison.funny_files)


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("project_root", type=pathlib.Path)
    parser.add_argument("--force", action="store_true")
    parser.add_argument("--check", action="store_true")
    parser.add_argument("--copy", action="store_true", help="Explicit portability fallback; symlink is canonical")
    args = parser.parse_args()
    source = pathlib.Path(__file__).resolve().parents[1] / "assets" / "manim_layout"
    target = args.project_root.resolve() / "manim_layout"
    if matches(source, target): print(f"[ok] target matches canonical template: {target}"); return 0
    if args.check: print(f"[fail] target missing or differs: {target}"); return 1
    if target.exists() and not args.force: print(f"[fail] target differs; inspect or use --force: {target}", file=sys.stderr); return 1
    if target.is_symlink() or target.is_file(): target.unlink()
    elif target.exists(): shutil.rmtree(target)
    if args.copy:
        shutil.copytree(source, target)
        print(f"[ok] copied canonical manim_layout package: {target}")
    else:
        target.symlink_to(source, target_is_directory=True)
        print(f"[ok] linked canonical manim_layout package: {target} -> {source}")
    return 0


if __name__ == "__main__": raise SystemExit(main())
