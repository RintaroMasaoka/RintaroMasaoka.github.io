#!/usr/bin/env python3
"""Extract one review PNG per Manim Slides checkpoint video.

The intended input is the assets directory created by `manim-slides convert`,
for example `output/manim_slides/deck_assets/`, which contains one mp4 per
exported checkpoint/section. The script samples the final stable frame of each
mp4 and writes numbered PNGs for visual feedback review.
"""

from __future__ import annotations

import argparse
from html.parser import HTMLParser
import json
import shutil
import subprocess
import sys
from pathlib import Path
from urllib.parse import unquote, urlsplit


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument(
        "input",
        help="Manim Slides HTML file, *_assets directory, or directory containing mp4 checkpoint videos.",
    )
    parser.add_argument(
        "--out-dir",
        required=True,
        help="Directory where checkpoint_###.png files and manifest.json will be written.",
    )
    parser.add_argument(
        "--sample-before-end",
        type=float,
        default=0.5,
        help=(
            "Seconds before video end where decoding starts. The helper writes "
            "the final decoded frame after that point."
        ),
    )
    return parser.parse_args()


def require_tool(name: str) -> str:
    path = shutil.which(name)
    if path is None:
        raise SystemExit(f"Missing required tool: {name}")
    return path


class SlideVideoParser(HTMLParser):
    def __init__(self) -> None:
        super().__init__()
        self.videos: list[str] = []

    def handle_starttag(self, tag: str, attrs: list[tuple[str, str | None]]) -> None:
        if tag != "section":
            return
        attr_map = dict(attrs)
        video = attr_map.get("data-background-video")
        if video:
            self.videos.append(video)


def html_videos(html_path: Path) -> list[Path]:
    parser = SlideVideoParser()
    parser.feed(html_path.read_text(encoding="utf-8"))
    videos = []
    for video in parser.videos:
        split = urlsplit(video)
        if split.scheme or split.netloc:
            raise SystemExit(f"Expected local video path in HTML, got: {video}")
        videos.append((html_path.parent / unquote(split.path)).resolve())
    return videos


def resolve_videos(input_path: Path) -> list[Path]:
    if input_path.is_file() and input_path.suffix == ".html":
        videos = html_videos(input_path)
        if not videos:
            raise SystemExit(f"No section background videos found in HTML: {input_path}")
        missing = [str(video) for video in videos if not video.is_file()]
        if missing:
            raise SystemExit("HTML references missing videos:\n" + "\n".join(missing))
        return videos
    if input_path.is_dir():
        return sorted(input_path.glob("*.mp4"))
    raise SystemExit(f"Input is not an HTML file or directory: {input_path}")


def probe_duration(ffprobe: str, video: Path) -> float:
    result = subprocess.run(
        [
            ffprobe,
            "-v",
            "error",
            "-show_entries",
            "format=duration",
            "-of",
            "default=noprint_wrappers=1:nokey=1",
            str(video),
        ],
        check=True,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
    )
    return float(result.stdout.strip())


def extract_frame(ffmpeg: str, video: Path, sample_before_end: float, output: Path) -> None:
    subprocess.run(
        [
            ffmpeg,
            "-y",
            "-loglevel",
            "error",
            "-sseof",
            f"-{sample_before_end:.3f}",
            "-i",
            str(video),
            "-update",
            "1",
            "-q:v",
            "2",
            str(output),
        ],
        check=True,
    )
    if not output.is_file() or output.stat().st_size == 0:
        raise RuntimeError(f"ffmpeg did not create a screenshot for {video}")


def main() -> int:
    args = parse_args()
    ffmpeg = require_tool("ffmpeg")
    ffprobe = require_tool("ffprobe")

    videos = resolve_videos(Path(args.input).expanduser().resolve())
    if not videos:
        raise SystemExit(f"No mp4 checkpoint videos found in: {args.input}")

    out_dir = Path(args.out_dir).expanduser().resolve()
    out_dir.mkdir(parents=True, exist_ok=True)
    for stale in out_dir.glob("checkpoint_*.png"):
        stale.unlink()
    stale_manifest = out_dir / "manifest.json"
    if stale_manifest.exists():
        stale_manifest.unlink()

    records = []
    for index, video in enumerate(videos, start=1):
        duration = probe_duration(ffprobe, video)
        window_start = max(duration - args.sample_before_end, 0.0)
        output = out_dir / f"checkpoint_{index:03d}.png"
        extract_frame(ffmpeg, video, args.sample_before_end, output)
        records.append(
            {
                "index": index,
                "source_video": str(video),
                "duration": duration,
                "sample_mode": "final_decoded_frame_after_sseof",
                "sample_window_start": window_start,
                "screenshot": str(output),
            }
        )

    manifest = out_dir / "manifest.json"
    manifest.write_text(json.dumps(records, indent=2), encoding="utf-8")
    print(f"Wrote {len(records)} checkpoint screenshots to {out_dir}")
    print(f"Wrote manifest to {manifest}")
    return 0


if __name__ == "__main__":
    sys.exit(main())
