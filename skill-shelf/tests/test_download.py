"""Exercise portable archive closure, pinned content and clean extraction."""
from __future__ import annotations

import hashlib
import importlib.util
import io
import json
import os
from pathlib import Path
import shutil
import stat
import sys
import tempfile
import unittest
import zipfile


SOURCE = Path(__file__).resolve().parents[1]
SPEC = importlib.util.spec_from_file_location("skill_shelf_builder", SOURCE / "scripts/build_download.py")
build = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(build)


def write_json(path, value):
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(value, indent=2) + "\n", encoding="utf-8")


def load_installer(root, name):
    # Running install.py as a CLI does not generate its own .pyc. Reproduce that
    # behavior when importing it to exercise validation without native writes.
    original = sys.dont_write_bytecode
    sys.dont_write_bytecode = True
    try:
        spec = importlib.util.spec_from_file_location(name, root / "install.py")
        installer = importlib.util.module_from_spec(spec)
        spec.loader.exec_module(installer)
        return installer
    finally:
        sys.dont_write_bytecode = original


class DownloadTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix="skill-shelf-download-test-")
        self.addCleanup(self.temp.cleanup)
        self.base = Path(self.temp.name)
        self.source = self.base / "source"
        self.source.mkdir()
        for name in ("README.md", "USAGE.md", "LICENSE"):
            (self.source / name).write_text("Portable fixture\n")
        (self.source / "install.py").write_text("#!/usr/bin/env python3\n# inert fixture installer\n")
        shutil.copytree(SOURCE / "runtime", self.source / "runtime", ignore=shutil.ignore_patterns("__pycache__"))
        self.add_package("consumer")
        self.add_package("shared")
        self.add_package("foundation")
        self.add_package("unrelated")
        self.set_dependencies("consumer", [self.edge("shared")])
        self.set_dependencies("shared", [self.edge("foundation")])
        self.register()

    def add_package(self, name, version="1.0.0"):
        root = self.source / "plugins" / name
        skill = root / "skills" / "review"
        skill.mkdir(parents=True)
        (skill / "SKILL.md").write_text("---\nname: review\ndescription: Review fixture.\n---\nLocal review.\n")
        (root / "references").mkdir()
        (root / "references/shared.md").write_text("Shared package resource.\n")
        for directory in (".codex-plugin", ".claude-plugin"):
            manifest = {"name": name, "version": version}
            if directory == ".codex-plugin":
                manifest["skills"] = "./skills/"
            write_json(root / directory / "plugin.json", manifest)
        self.set_dependencies(name, [])

    def edge(self, target, kind="required", version=">=1.0.0,<2.0.0"):
        edge = {"target": "package:" + target, "kind": kind, "version": version,
                "skills": ["review"], "used_by": ["skills/review/SKILL.md"],
                "reason": "Necessary independent review."}
        if kind != "required":
            edge.update(when="Explicit optional request.", fallback="Use the local procedure.")
        return edge

    def set_dependencies(self, name, edges):
        write_json(self.source / "plugins" / name / "skill-dependencies.json",
                   {"schema_version": 1, "owner": "package:" + name,
                    "dependencies": edges, "bundled": []})

    def register(self):
        names = sorted(path.name for path in (self.source / "plugins").iterdir())
        write_json(self.source / ".agents/plugins/marketplace.json", {
            "name": "skill-shelf", "plugins": [
                {"name": name, "source": {"source": "local", "path": "./plugins/" + name}}
                for name in names]})
        write_json(self.source / ".claude-plugin/marketplace.json", {
            "name": "skill-shelf", "plugins": [
                {"name": name, "version": json.loads((self.source / "plugins" / name /
                 ".codex-plugin/plugin.json").read_text())["version"],
                 "source": "./plugins/" + name} for name in names]})

    def archive(self, roots=("consumer",)):
        return zipfile.ZipFile(io.BytesIO(build.archive_bytes(self.source, list(roots))))

    def assert_invalid(self, expression):
        with self.assertRaisesRegex(ValueError, expression):
            build.archive_bytes(self.source, ["consumer"])

    def test_individual_download_contains_transitive_closure_and_all_shared_resources(self):
        with self.archive() as archive:
            names = archive.namelist()
            manifest = json.loads(archive.read("skill-shelf/bundle.json"))
            self.assertEqual(manifest["roots"], ["consumer"])
            self.assertEqual(manifest["installation_order"], ["foundation", "shared", "consumer"])
            self.assertEqual([p["name"] for p in manifest["packages"]], manifest["installation_order"])
            self.assertFalse(any("unrelated" in path for path in names))
            for package in manifest["packages"]:
                self.assertIn("skill-shelf/" + package["path"] + "/references/shared.md", names)
            for path in ("install.py", "runtime/skill_dependencies.py", "runtime/dependency-source.json", "USAGE.md"):
                self.assertIn("skill-shelf/" + path, names)
            for location in build.MARKETPLACES:
                market = json.loads(archive.read("skill-shelf/" + location))
                self.assertEqual(market["name"], manifest["marketplace"]["name"])
                self.assertEqual([p["name"] for p in market["plugins"]], manifest["installation_order"])

    def test_multiple_roots_include_shared_provider_exactly_once(self):
        self.set_dependencies("unrelated", [self.edge("shared")])
        with self.archive(("consumer", "unrelated")) as archive:
            self.assertEqual(archive.namelist().count("skill-shelf/plugins/shared/references/shared.md"), 1)
            manifest = json.loads(archive.read("skill-shelf/bundle.json"))
            self.assertEqual(len(manifest["installation_order"]), 4)

    def test_optional_and_handoff_absence_uses_declared_fallback_without_bundling(self):
        self.set_dependencies("consumer", [self.edge("absent", kind="optional"),
                                           self.edge("other", kind="handoff")])
        with self.archive() as archive:
            manifest = json.loads(archive.read("skill-shelf/bundle.json"))
            self.assertEqual(manifest["installation_order"], ["consumer"])

    def test_missing_required_provider_rejected(self):
        self.set_dependencies("consumer", [self.edge("absent")])
        self.assert_invalid("missing target")

    def test_incompatible_required_provider_rejected(self):
        self.set_dependencies("consumer", [self.edge("shared", version=">=2.0.0")])
        self.assert_invalid("version mismatch")

    def test_missing_export_rejected(self):
        edge = self.edge("shared")
        edge["skills"] = ["nonexistent"]
        self.set_dependencies("consumer", [edge])
        self.assert_invalid("missing exports")

    def test_required_cycle_rejected(self):
        self.set_dependencies("foundation", [self.edge("consumer")])
        self.assert_invalid("dependency cycle")

    def test_unknown_dependency_contract_rejected(self):
        (self.source / "plugins/shared/skill-dependencies.json").unlink()
        self.assert_invalid("undeclared dependency closure")

    def test_undeclared_explicit_cross_package_reference_rejected(self):
        caller = self.source / "plugins/consumer/skills/review/SKILL.md"
        caller.write_text(caller.read_text() + "Call $unrelated:review before completion.\n")
        self.assert_invalid("Undeclared cross-package reference")

    def test_unregistered_whole_package_rejected(self):
        market = self.source / ".agents/plugins/marketplace.json"
        data = json.loads(market.read_text())
        data["plugins"] = [entry for entry in data["plugins"] if entry["name"] != "foundation"]
        write_json(market, data)
        self.assert_invalid("Unregistered package")

    def test_external_marketplace_source_rejected(self):
        market = self.source / ".agents/plugins/marketplace.json"
        data = json.loads(market.read_text())
        data["plugins"][0]["source"]["path"] = "../../private-stock/consumer"
        write_json(market, data)
        self.assert_invalid("Nonlocal or escaping marketplace")

    def test_symlink_to_external_source_rejected(self):
        external = self.base / "external.md"
        external.write_text("private file\n")
        (self.source / "plugins/shared/references/external.md").symlink_to(external)
        self.assert_invalid("Symlink")

    def test_hard_linked_source_rejected(self):
        original = self.source / "plugins/shared/references/shared.md"
        os.link(original, original.with_name("linked.md"))
        self.assert_invalid("Hard-linked")

    def test_archive_is_deterministic_across_source_permission_changes(self):
        first = build.archive_bytes(self.source, ["consumer"])
        for path in self.source.rglob("*"):
            if path.is_file():
                path.chmod(0o700)
        self.assertEqual(first, build.archive_bytes(self.source, ["consumer"]))
        with zipfile.ZipFile(io.BytesIO(first)) as archive:
            for info in archive.infolist():
                expected = 0o755 if archive.read(info).startswith(b"#!") else 0o644
                self.assertEqual(stat.S_IMODE(info.external_attr >> 16), expected)

    def test_extracted_bundle_pins_every_file_and_resolves_without_author_stock(self):
        destination = self.base / "isolated"
        with self.archive() as archive:
            archive.extractall(destination)
        root = destination / "skill-shelf"
        manifest = json.loads((root / "bundle.json").read_text())
        files = {path.relative_to(root).as_posix(): hashlib.sha256(path.read_bytes()).hexdigest()
                 for path in root.rglob("*") if path.is_file() and path.name != "bundle.json"}
        self.assertEqual(files, manifest["files"])
        for package in manifest["packages"]:
            prefix = package["path"] + "/"
            package_files = {path[len(prefix):]: digest for path, digest in files.items() if path.startswith(prefix)}
            self.assertEqual(build.tree_hash(package_files), package["sha256"])
        dependencies = build.dependency_runtime(root)
        plan = dependencies.resolve(root / "plugins", ["package:consumer"])
        self.assertEqual(plan["order"], ["package:foundation", "package:shared", "package:consumer"])
        tampered = root / "plugins/shared/references/shared.md"
        tampered.write_text("tampered bytes\n")
        self.assertNotEqual(hashlib.sha256(tampered.read_bytes()).hexdigest(),
                            manifest["files"][tampered.relative_to(root).as_posix()])

    def test_extracted_real_installer_accepts_complete_bundle_and_blocks_tampering(self):
        shutil.copyfile(SOURCE / "install.py", self.source / "install.py")
        destination = self.base / "installer-isolation"
        with self.archive() as archive:
            archive.extractall(destination)
        root = destination / "skill-shelf"
        installer = load_installer(root, "extracted_shelf_installer")
        self.assertEqual(installer.validate_bundle(root)["installation_order"], ["foundation", "shared", "consumer"])
        resource = root / "plugins/shared/references/shared.md"
        original = resource.read_bytes()
        resource.write_bytes(b"tampered")
        with self.assertRaisesRegex(ValueError, "missing, changed, or unlisted"):
            installer.validate_bundle(root)
        resource.write_bytes(original)
        (root / "unlisted.md").write_text("Untracked addition\n")
        with self.assertRaisesRegex(ValueError, "missing, changed, or unlisted"):
            installer.validate_bundle(root)

    def test_installer_rejects_omitted_provider_even_after_inventory_is_rehashed(self):
        shutil.copyfile(SOURCE / "install.py", self.source / "install.py")
        destination = self.base / "missing-provider-isolation"
        with self.archive() as archive:
            archive.extractall(destination)
        root = destination / "skill-shelf"
        installer = load_installer(root, "omission_shelf_installer")
        manifest = json.loads((root / "bundle.json").read_text())
        shutil.rmtree(root / "plugins/foundation")
        manifest["installation_order"].remove("foundation")
        manifest["packages"] = [entry for entry in manifest["packages"] if entry["name"] != "foundation"]
        for location in build.MARKETPLACES:
            catalog = json.loads((root / location).read_text())
            catalog["plugins"] = [entry for entry in catalog["plugins"] if entry["name"] != "foundation"]
            write_json(root / location, catalog)
        manifest["files"] = installer.file_map(root)
        manifest["files"].pop("bundle.json")
        write_json(root / "bundle.json", manifest)
        with self.assertRaisesRegex(ValueError, "missing target package:foundation"):
            installer.validate_bundle(root)

    def test_all_downloads_have_checksums_and_collection_metadata(self):
        outputs = build.download_outputs(self.source)
        metadata = json.loads(outputs["downloads.json"])
        self.assertEqual(metadata["collection"]["roots"], ["consumer", "foundation", "shared", "unrelated"])
        self.assertEqual(len(metadata["packages"]), 4)
        for entry in [metadata["collection"], *metadata["packages"]]:
            digest = hashlib.sha256(outputs[entry["filename"]]).hexdigest()
            self.assertEqual(entry["sha256"], digest)
            self.assertEqual(outputs[entry["filename"] + ".sha256"],
                             f"{digest}  {entry['filename']}\n".encode())

    def test_check_rejects_stale_or_tampered_downloads(self):
        destination = self.base / "downloads"
        arguments = ["--source", str(self.source), "--downloads", str(destination)]
        self.assertEqual(build.main(arguments), 0)
        self.assertEqual(build.main([*arguments, "--check"]), 0)
        (destination / "stale.zip").write_bytes(b"old")
        self.assertEqual(build.main([*arguments, "--check"]), 1)
        self.assertEqual(build.main(arguments), 0)
        self.assertFalse((destination / "stale.zip").exists())
        (destination / "shared.zip").write_bytes(b"tampered")
        self.assertEqual(build.main([*arguments, "--check"]), 1)


if __name__ == "__main__":
    unittest.main()
