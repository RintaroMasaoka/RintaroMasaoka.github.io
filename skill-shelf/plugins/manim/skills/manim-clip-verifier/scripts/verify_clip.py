#!/usr/bin/env python3
"""Lightweight verifier for project-local Manim argument clips."""

from __future__ import annotations

import argparse
import pathlib
import subprocess
import sys


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Verify a Manim clip scene file.")
    parser.add_argument(
        "scene_file",
        help="Path to a Manim scene file, such as scenes/<clip>.py or paper_assets/<paper>/<asset>/scene_<asset>.py",
    )
    parser.add_argument("class_name", help="Manim Scene class name")
    parser.add_argument(
        "--must-contain",
        action="append",
        default=[],
        help="String that must appear in the scene source. Repeatable.",
    )
    parser.add_argument(
        "--require-file",
        action="append",
        default=[],
        help="Bundle file that must exist relative to the current working directory. Repeatable.",
    )
    parser.add_argument(
        "--render",
        action="store_true",
        help="Run ./render.sh at low quality after static checks.",
    )
    parser.add_argument("--quality", default="l", choices=["l", "m", "h"])
    return parser.parse_args()


def main() -> int:
    args = parse_args()
    scene_path = pathlib.Path(args.scene_file)
    if not scene_path.exists():
        print(f"[fail] scene file does not exist: {scene_path}", file=sys.stderr)
        return 2

    source = scene_path.read_text(encoding="utf-8")
    failed = False

    if args.class_name not in source:
        print(f"[fail] class name not found in source: {args.class_name}")
        failed = True
    else:
        print(f"[ok] class name found: {args.class_name}")

    gated_checkpoint = "checkpoint_gate" in source and "GatedSlide" in source

    if "assert_scene_in_frame" not in source and not gated_checkpoint:
        print("[warn] assert_scene_in_frame is not referenced")
    else:
        print("[ok] frame assertion referenced directly or through GatedSlide")

    if "assert_no_component_overlap" not in source and not gated_checkpoint:
        print(
            "[warn] assert_no_component_overlap is not referenced; "
            "checkpoint component collisions have no render-free runtime gate"
        )
    else:
        print("[ok] overlap assertion referenced directly or through GatedSlide")

    for required in args.must_contain:
        if required not in source:
            print(f"[fail] required string missing: {required}")
            failed = True
        else:
            print(f"[ok] required string present: {required}")

    for required_file in args.require_file:
        required_path = pathlib.Path(required_file)
        if not required_path.exists():
            print(f"[fail] required bundle file missing: {required_file}")
            failed = True
        else:
            print(f"[ok] required bundle file exists: {required_file}")

    if failed:
        return 1

    if args.render:
        cmd = ["./render.sh", str(scene_path), args.class_name, "-q", args.quality]
        print("[run] " + " ".join(cmd))
        return subprocess.call(cmd)

    return 0


if __name__ == "__main__":
    raise SystemExit(main())
