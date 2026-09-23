import _bootstrap  # noqa: F401
import importlib.util
import json
import sys
import tempfile
import unittest
import zipfile
from pathlib import Path


SCRIPT = Path(__file__).resolve().parents[1] / "scripts" / "count_slide_pages.py"
SPEC = importlib.util.spec_from_file_location("count_slide_pages", SCRIPT)
MODULE = importlib.util.module_from_spec(SPEC)
assert SPEC.loader is not None
sys.modules[SPEC.name] = MODULE
SPEC.loader.exec_module(MODULE)


class CountSlidePagesTest(unittest.TestCase):
    def test_numbering_manifest_counts_semantic_pages(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "numbering_manifest.json"
            path.write_text(json.dumps({"total": 7, "units": []}))
            result = MODULE.count_artifact(path)
            self.assertEqual((result.count, result.metric), (7, "semantic_pages"))

    def test_manim_json_counts_checkpoints(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "Scene.json"
            path.write_text(json.dumps({"slides": [{}, {}, {}]}))
            result = MODULE.count_artifact(path)
            self.assertEqual((result.count, result.metric), (3, "checkpoints"))

    def test_html_counts_checkpoint_sections(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "deck.html"
            path.write_text('<section data-background-video="a.mp4"></section>' * 4)
            self.assertEqual(MODULE.count_artifact(path).count, 4)

    def test_pptx_counts_only_slide_xml(self):
        with tempfile.TemporaryDirectory() as directory:
            path = Path(directory) / "deck.pptx"
            with zipfile.ZipFile(path, "w") as archive:
                archive.writestr("ppt/slides/slide1.xml", "")
                archive.writestr("ppt/slides/slide2.xml", "")
                archive.writestr("ppt/notesSlides/notesSlide1.xml", "")
            self.assertEqual(MODULE.count_artifact(path).count, 2)


if __name__ == "__main__":
    unittest.main()
