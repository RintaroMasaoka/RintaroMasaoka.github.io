import _bootstrap  # noqa: F401
import importlib.util
import json
import sys
import subprocess
import tempfile
import unittest
from pathlib import Path


SCRIPT = Path(__file__).resolve().parents[1] / "scripts" / "resolve_slide_page.py"
SPEC = importlib.util.spec_from_file_location("resolve_slide_page", SCRIPT)
MODULE = importlib.util.module_from_spec(SPEC)
assert SPEC.loader is not None
sys.modules[SPEC.name] = MODULE
SPEC.loader.exec_module(MODULE)


class ResolveSlidePageTest(unittest.TestCase):
    def write(self, root, name, payload):
        path = Path(root) / name
        path.write_text(json.dumps(payload), encoding="utf-8")
        return path

    def test_page_id_resolves_checkpoint_records_and_slot(self):
        with tempfile.TemporaryDirectory() as root:
            manifest = self.write(root, "manifest.json", {"revision": "r1", "records": [
                {"page_id": "topology", "title": "Topology", "source_page": 12,
                 "pdf_page": 30, "step": 1},
                {"page_id": "topology", "title": "Topology", "source_page": 12,
                 "pdf_page": 31, "step": 2},
            ]})
            slots = self.write(root, "slots.json", {
                "revision": "r1", "pages": {
                    "12": {"page_id": "topology", "rectangles": []}
                }
            })
            result = MODULE.resolve_page(
                manifest, "topology", "source_page", slots, "records"
            )
            self.assertEqual(result.locator, 12)
            self.assertEqual(result.record_count, 2)
            self.assertEqual(result.slot_key, "12")

    def test_inserting_earlier_page_changes_locator_not_semantic_binding(self):
        with tempfile.TemporaryDirectory() as root:
            first = self.write(root, "first.json", [
                {"page_id": "topology", "title": "Topology", "source_page": 4}
            ])
            shifted = self.write(root, "shifted.json", [
                {"page_id": "intro", "title": "Intro", "source_page": 4},
                {"page_id": "topology", "title": "Topology", "source_page": 5},
            ])
            self.assertEqual(MODULE.resolve_page(first, "topology", "source_page").semantic_id, "topology")
            self.assertEqual(MODULE.resolve_page(shifted, "topology", "source_page").semantic_id, "topology")
            self.assertEqual(MODULE.resolve_page(shifted, "topology", "source_page").locator, 5)

    def test_unique_exact_title_is_compatible_fallback(self):
        with tempfile.TemporaryDirectory() as root:
            manifest = self.write(root, "manifest.json", [
                {"title": "Topology", "source_page": 8, "step": 1},
                {"title": "Topology", "source_page": 8, "step": 2},
            ])
            result = MODULE.resolve_page(manifest, "Topology", "source_page")
            self.assertEqual((result.semantic_id, result.locator), ("Topology", 8))

    def test_duplicate_title_on_distinct_pages_fails_closed(self):
        with tempfile.TemporaryDirectory() as root:
            manifest = self.write(root, "manifest.json", [
                {"page_id": "topology-a", "title": "Topology", "source_page": 8},
                {"page_id": "topology-b", "title": "Topology", "source_page": 9},
            ])
            with self.assertRaisesRegex(ValueError, "ambiguous"):
                MODULE.resolve_page(manifest, "Topology", "source_page")

    def test_duplicate_title_and_locator_with_distinct_ids_fails_closed(self):
        with tempfile.TemporaryDirectory() as root:
            manifest = self.write(root, "manifest.json", [
                {"page_id": "topology-a", "title": "Topology", "source_page": 8},
                {"page_id": "topology-b", "title": "Topology", "source_page": 8},
            ])
            with self.assertRaisesRegex(ValueError, "does not prove one semantic page"):
                MODULE.resolve_page(manifest, "Topology", "source_page")

    def test_missing_derived_slot_fails_closed(self):
        with tempfile.TemporaryDirectory() as root:
            manifest = self.write(root, "manifest.json", {"revision": "r2", "records": [
                {"page_id": "topology", "title": "Topology", "source_page": 12}
            ]})
            slots = self.write(root, "slots.json", {
                "revision": "r2", "pages": {"11": {"page_id": "topology"}}
            })
            with self.assertRaisesRegex(ValueError, "slot key '12' is absent"):
                MODULE.resolve_page(
                    manifest, "topology", "source_page", slots, "records"
                )

    def test_slot_contract_must_match_revision_and_identity(self):
        with tempfile.TemporaryDirectory() as root:
            manifest = self.write(root, "manifest.json", {"revision": "r3", "records": [
                {"page_id": "topology", "title": "Topology", "source_page": 12}
            ]})
            stale = self.write(root, "stale.json", {
                "revision": "r2", "pages": {"12": {"page_id": "topology"}}
            })
            with self.assertRaisesRegex(ValueError, "same nonempty revision"):
                MODULE.resolve_page(
                    manifest, "topology", "source_page", stale, "records"
                )
            wrong = self.write(root, "wrong.json", {
                "revision": "r3", "pages": {"12": {"page_id": "other"}}
            })
            with self.assertRaisesRegex(ValueError, "different page_id"):
                MODULE.resolve_page(
                    manifest, "topology", "source_page", wrong, "records"
                )

    def test_declared_locator_does_not_alias_other_page_coordinates(self):
        with tempfile.TemporaryDirectory() as root:
            manifest = self.write(root, "manifest.json", [
                {"page_id": "topology", "source_page": 12, "page": 7}
            ])
            self.assertEqual(
                MODULE.resolve_page(manifest, "topology", "page").locator, 7
            )
            with self.assertRaisesRegex(ValueError, "declared locator field 'pdf_page'"):
                MODULE.resolve_page(manifest, "topology", "pdf_page")

    def test_multiple_wrapped_collections_require_declaration(self):
        with tempfile.TemporaryDirectory() as root:
            manifest = self.write(root, "manifest.json", {
                "pages": [{"page_id": "a", "source_page": 1}],
                "records": [{"page_id": "b", "source_page": 2}],
            })
            with self.assertRaisesRegex(ValueError, "multiple collections"):
                MODULE.resolve_page(manifest, "a", "source_page")
            result = MODULE.resolve_page(
                manifest, "b", "source_page", collection="records"
            )
            self.assertEqual(result.locator, 2)

    def test_scene_bindings_must_be_uniform(self):
        with tempfile.TemporaryDirectory() as root:
            manifest = self.write(root, "manifest.json", [
                {"page_id": "topology", "source_page": 12,
                 "scene_file": "scenes/deck.py", "scene_class": "Topology"},
                {"page_id": "topology", "source_page": 12,
                 "scene_file": "scenes/deck.py", "scene_class": "Other"},
            ])
            with self.assertRaisesRegex(ValueError, "one nonempty binding 'scene_class'"):
                MODULE.resolve_page(
                    manifest, "topology", "source_page",
                    binding_fields=("scene_file", "scene_class"),
                )

    def test_cli_emits_json_resolution(self):
        with tempfile.TemporaryDirectory() as root:
            manifest = self.write(root, "manifest.json", [
                {"page_id": "topology", "title": "Topology", "source_page": 12}
            ])
            completed = subprocess.run(
                [sys.executable, str(SCRIPT), "--manifest", str(manifest),
                 "--selector", "topology", "--locator-field", "source_page", "--json"],
                text=True, capture_output=True, check=True,
            )
            payload = json.loads(completed.stdout)
            self.assertEqual((payload["semantic_id"], payload["locator"]),
                             ("topology", 12))


if __name__ == "__main__":
    unittest.main()
