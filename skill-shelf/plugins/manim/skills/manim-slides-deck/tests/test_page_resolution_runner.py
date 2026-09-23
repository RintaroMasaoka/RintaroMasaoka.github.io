import _bootstrap  # noqa: F401
import argparse
import importlib.util
import json
import sys
import tempfile
import unittest
from pathlib import Path


SCRIPTS = Path(__file__).resolve().parents[1] / "scripts"
sys.path.insert(0, str(SCRIPTS))
SCRIPT = SCRIPTS / "run_deck_gates.py"
SPEC = importlib.util.spec_from_file_location("run_deck_gates", SCRIPT)
MODULE = importlib.util.module_from_spec(SPEC)
assert SPEC.loader is not None
sys.modules[SPEC.name] = MODULE
SPEC.loader.exec_module(MODULE)


class PageResolutionRunnerTest(unittest.TestCase):
    def args(self, **changes):
        values = {
            "scene_file": None,
            "scene_class": None,
            "page_selector": "topology",
        }
        values.update(changes)
        return argparse.Namespace(**values)

    def test_semantic_selector_supplies_scene_and_current_page_context(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            (root / "scenes").mkdir()
            (root / "scenes/deck.py").write_text("class Topology: pass")
            (root / "manifest.json").write_text(json.dumps({"revision": "r1", "records": [{
                "page_id": "topology", "title": "Topology", "source_page": 12,
                "scene_file": "scenes/deck.py", "scene_class": "Topology",
            }]}))
            (root / "slots.json").write_text(json.dumps({
                "revision": "r1", "pages": {"12": {"page_id": "topology"}}
            }))
            config = {
                "page_resolution": {
                    "manifest": "manifest.json", "slots": "slots.json",
                    "locator_field": "source_page", "collection": "records",
                }
            }
            scene_file, scene_class, resolution = MODULE.resolve_scene_selection(
                self.args(), root, config
            )
            self.assertEqual(scene_file, root / "scenes/deck.py")
            self.assertEqual(scene_class, "Topology")
            self.assertEqual(resolution.locator, 12)
            environment = MODULE.page_environment(
                resolution, {"MANIM_PAGE_RESOLUTION_JSON": "stale", "KEEP": "yes"}
            )
            self.assertEqual(environment["KEEP"], "yes")
            self.assertEqual(
                json.loads(environment["MANIM_PAGE_RESOLUTION_JSON"])["semantic_id"],
                "topology",
            )
            self.assertEqual(MODULE.artifact_identity(scene_class, resolution), "topology")

    def test_semantic_and_positional_selection_cannot_mix(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            with self.assertRaisesRegex(ValueError, "either semantic"):
                MODULE.resolve_scene_selection(
                    self.args(scene_file=Path("deck.py"), scene_class="Deck"), root, {}
                )

    def test_positional_scene_remains_available_without_catalog(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory)
            scene_file, scene_class, resolution = MODULE.resolve_scene_selection(
                self.args(
                    page_selector=None, scene_file=root / "deck.py", scene_class="Deck"
                ),
                root,
                {},
            )
            self.assertEqual((scene_file, scene_class, resolution),
                             ((root / "deck.py").resolve(), "Deck", None))
            environment = MODULE.page_environment(
                None, {"MANIM_PAGE_RESOLUTION_JSON": "stale", "KEEP": "yes"}
            )
            self.assertNotIn("MANIM_PAGE_RESOLUTION_JSON", environment)
            self.assertEqual(MODULE.artifact_identity(scene_class, None), "Deck")

    def test_non_ascii_semantic_ids_have_distinct_stable_artifact_names(self):
        first = argparse.Namespace(semantic_id="位相")
        second = argparse.Namespace(semantic_id="磁気")
        first_name = MODULE.artifact_identity("Deck", first)
        self.assertEqual(first_name, MODULE.artifact_identity("Deck", first))
        self.assertNotEqual(first_name, MODULE.artifact_identity("Deck", second))
        self.assertRegex(first_name, r"^page-[0-9a-f]{8}$")

    def test_page_resolution_config_requires_generator_and_contract_paths(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory).resolve()
            base = {
                "schema_version": 1,
                "page_resolution": {
                    "manifest": "manifest.json", "slots": "slots.json",
                    "locator_field": "source_page", "collection": "records",
                },
            }
            with self.assertRaisesRegex(ValueError, "generator"):
                MODULE.validate_config(base, root)
            base["page_resolution"]["generator"] = ["{python}", "tools/build.py"]
            MODULE.validate_config(base, root)

    def test_generator_runs_before_resolution_boundary(self):
        with tempfile.TemporaryDirectory() as directory:
            root = Path(directory).resolve()
            (root / "generate.py").write_text(
                "import json\n"
                "from pathlib import Path\n"
                "Path('manifest.json').write_text(json.dumps({"
                "'revision':'fresh','records':[{'page_id':'topology',"
                "'source_page':7,'scene_file':'deck.py','scene_class':'Deck'}]}))\n"
                "Path('slots.json').write_text(json.dumps({"
                "'revision':'fresh','pages':{'7':{'page_id':'topology'}}}))\n"
            )
            (root / "manifest.json").write_text("{}")
            (root / "slots.json").write_text("{}")
            config = {"page_resolution": {
                "generator": ["{python}", "generate.py"],
                "manifest": "manifest.json", "slots": "slots.json",
                "locator_field": "source_page", "collection": "records",
            }}
            MODULE.generate_page_contract(root, config)
            _, _, resolution = MODULE.resolve_scene_selection(self.args(), root, config)
            self.assertEqual((resolution.revision, resolution.locator), ("fresh", 7))


if __name__ == "__main__":
    unittest.main()
