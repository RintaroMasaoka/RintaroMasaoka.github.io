"""Make bundled runtime assets importable under ordinary test discovery."""
import pathlib
import sys

SKILLS = pathlib.Path(__file__).resolve().parents[2]
for asset_root in (
    SKILLS / "manim-asset-system" / "assets",
    SKILLS / "manim-slides-deck" / "assets",
):
    sys.path.insert(0, str(asset_root))
