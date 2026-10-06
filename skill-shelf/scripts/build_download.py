#!/usr/bin/env python3
"""Build portable, dependency-complete Skill Shelf downloads from release sources."""
from __future__ import annotations

import argparse
import copy
import hashlib
import importlib.util
import io
import json
from pathlib import Path
import stat
import sys
import zipfile

SOURCE = Path(__file__).resolve().parents[1]
SITE = SOURCE.parent
DOWNLOADS = SITE / "public" / "tools" / "skill-shelf" / "downloads"
RESOURCES = ("LICENSE", "README.md", "USAGE.md", "install.py", "runtime")
MARKETPLACES = (".agents/plugins/marketplace.json", ".claude-plugin/marketplace.json")
IGNORED = {"__pycache__", ".pytest_cache", ".DS_Store"}


class Invalid(ValueError):
    pass


def require(condition: bool, message: str) -> None:
    if not condition:
        raise Invalid(message)


def encoded(value: object) -> bytes:
    return (json.dumps(value, indent=2, ensure_ascii=False, sort_keys=True) + "\n").encode("utf-8")


def sha256(contents: bytes) -> str:
    return hashlib.sha256(contents).hexdigest()


def tree_hash(files: dict) -> str:
    """SHA256 of compact sorted package-relative file/hash JSON."""
    return sha256(json.dumps(files, sort_keys=True, separators=(",", ":")).encode("utf-8"))


def source_files(root: Path) -> dict[str, bytes]:
    """Read regular files only; never package links to the private stock."""
    require(root.exists() and not root.is_symlink(), f"Missing or symlinked source: {root}")
    result = {}
    candidates = [root, *sorted(root.rglob("*"))] if root.is_dir() else [root]
    for path in candidates:
        require(not path.is_symlink(), f"Symlink in package source: {path}")
        rel = path.relative_to(root) if root.is_dir() else Path(root.name)
        if any(part in IGNORED for part in rel.parts) or path.suffix == ".pyc":
            continue
        mode = path.lstat().st_mode
        if stat.S_ISDIR(mode):
            continue
        require(stat.S_ISREG(mode), f"Unsupported package source entry: {path}")
        require(path.stat().st_nlink == 1, f"Hard-linked package source entry: {path}")
        result[rel.as_posix()] = path.read_bytes()
    return result


def dependency_runtime(source: Path):
    source_files(source / "runtime")
    path = source / "runtime/skill_dependencies.py"
    require(path.is_file() and not path.is_symlink(), "Missing bundled dependency resolver")
    spec = importlib.util.spec_from_file_location("skill_shelf_dependencies", path)
    module = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(module)
    provenance = module.read_json(source / "runtime/dependency-source.json")
    require(provenance.get("source_sha256") == sha256(path.read_bytes()),
            "Frozen dependency resolver differs from its recorded source digest")
    return module


def marketplaces(source: Path, owners: dict, dependencies) -> dict:
    """Require local whole-package registrations; preserve host-specific metadata."""
    result = {}
    names = {key.split(":", 1)[1] for key in owners}
    for location in MARKETPLACES:
        candidate = source
        for part in Path(location).parts:
            candidate = candidate / part
            require(not candidate.is_symlink(), f"Symlinked marketplace path: {location}")
        data = dependencies.read_json(source / location)
        require(isinstance(data, dict) and isinstance(data.get("plugins"), list),
                f"Malformed marketplace: {location}")
        entries = {}
        for entry in data["plugins"]:
            require(isinstance(entry, dict), f"Malformed marketplace entry: {location}")
            name = entry.get("name")
            require(name in names and name not in entries,
                    f"Unknown or duplicate marketplace registration: {name}")
            expected = "./plugins/" + name
            if location.startswith(".agents/"):
                require(entry.get("source") == {"source": "local", "path": expected},
                        f"Nonlocal or escaping marketplace source: {name}")
            else:
                require(entry.get("source") == expected,
                        f"Nonlocal or escaping marketplace source: {name}")
                require(entry.get("version") == owners["package:" + name]["version"],
                        f"Marketplace version differs from package: {name}")
            entries[name] = entry
        require(set(entries) == names,
                f"Unregistered package(s) in {location}: {', '.join(sorted(names - set(entries)))}")
        result[location] = data
    return result


def validate_source(source: Path):
    require(source.is_dir() and not source.is_symlink(), "Release source is missing or symlinked")
    dependencies = dependency_runtime(source)
    stock = source / "plugins"
    # Reject links before resolver discovery reads any package content.
    source_files(stock)
    owners, errors = dependencies.discover(stock)
    require(not errors, "; ".join(errors))
    require(bool(owners) and all(key.startswith("package:") for key in owners),
            "Release source must contain whole packages")
    for key, owner in owners.items():
        counterpart = dependencies.read_json(owner["path"] / ".claude-plugin/plugin.json")
        require(counterpart.get("name") == key.split(":", 1)[1]
                and counterpart.get("version") == owner["version"],
                f"Claude package manifest identity/version mismatch: {key}")
    audit = dependencies.audit(stock, require_all=True)
    require(audit["ok"], "; ".join(audit["errors"]))
    contracts = {key: dependencies.load_contract(key, owner) for key, owner in owners.items()}
    mentions = dependencies.scan(stock)
    require(not mentions["errors"], "; ".join(mentions["errors"]))
    for mention in mentions["mentions"]:
        declared = any(edge["target"] == mention["target"]
                       and mention["skill"] in edge["skills"]
                       and mention["file"] in edge["used_by"]
                       for edge in contracts[mention["owner"]]["dependencies"])
        require(declared, f"Undeclared cross-package reference: {mention['owner']} "
                f"{mention['file']}:{mention['line']} -> {mention['target']}:{mention['skill']}")
    return dependencies, owners, marketplaces(source, owners, dependencies)


def bundle_payload(source: Path, root_names: list[str], validated=None) -> dict[str, bytes]:
    dependencies, owners, markets = validated or validate_source(source)
    root_keys = ["package:" + name for name in sorted(set(root_names))]
    plan = dependencies.resolve(source / "plugins", root_keys)
    require(all(key.startswith("package:") for key in plan["order"]),
            "A package download cannot depend on a standalone projection")
    order = [key.split(":", 1)[1] for key in plan["order"]]
    payload = {}
    for resource in RESOURCES:
        path = source / resource
        content = source_files(path)
        prefix = resource + "/" if path.is_dir() else ""
        payload.update({prefix + name: data for name, data in content.items()})
    packages = []
    for name in order:
        content = source_files(source / "plugins" / name)
        package = {"name": name, "version": owners["package:" + name]["version"],
                   "path": "plugins/" + name,
                   "sha256": tree_hash({path: sha256(data) for path, data in content.items()})}
        packages.append(package)
        payload.update({"plugins/" + name + "/" + path: data for path, data in content.items()})
    # Name marketplaces from content before naming them: no self-referential hash.
    identity = {"roots": sorted(set(root_names)), "packages": packages,
                "files": {path: sha256(data) for path, data in payload.items()}}
    market_name = "skill-shelf-" + tree_hash(identity)[:16]
    for location, template in markets.items():
        data = copy.deepcopy(template)
        data["name"] = market_name
        data["plugins"] = sorted((entry for entry in data["plugins"] if entry["name"] in order),
                                 key=lambda entry: order.index(entry["name"]))
        payload[location] = encoded(data)
    manifest = {"schema_version": 1, "roots": sorted(set(root_names)),
                "installation_order": order, "packages": packages,
                "marketplace": {"name": market_name, "paths": list(MARKETPLACES)},
                "files": {path: sha256(data) for path, data in sorted(payload.items())}}
    payload["bundle.json"] = encoded(manifest)
    return payload


def archive_bytes(source: Path = SOURCE, roots: list[str] | None = None, validated=None) -> bytes:
    checked = validated or validate_source(source)
    names = roots if roots is not None else [key.split(":", 1)[1] for key in checked[1]]
    payload = bundle_payload(source, names, checked)
    buffer = io.BytesIO()
    with zipfile.ZipFile(buffer, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as output:
        for path, data in sorted(payload.items()):
            info = zipfile.ZipInfo("skill-shelf/" + path, date_time=(1980, 1, 1, 0, 0, 0))
            info.create_system = 3
            # Stable source content determines permissions, never checkout modes.
            permissions = 0o755 if data.startswith(b"#!") else 0o644
            info.external_attr = (stat.S_IFREG | permissions) << 16
            info.compress_type = zipfile.ZIP_DEFLATED
            output.writestr(info, data, compress_type=zipfile.ZIP_DEFLATED, compresslevel=9)
    return buffer.getvalue()


def download_outputs(source: Path = SOURCE) -> dict[str, bytes]:
    checked = validate_source(source)
    names = sorted(key.split(":", 1)[1] for key in checked[1])
    require("skill-shelf" not in names, "Package name conflicts with collection download")
    outputs, metadata = {}, {"schema_version": 1, "packages": []}
    selections = [("skill-shelf", names), *[(name, [name]) for name in names]]
    for title, roots in selections:
        filename = title + ".zip"
        data = archive_bytes(source, roots, checked)
        digest = sha256(data)
        outputs[filename] = data
        outputs[filename + ".sha256"] = f"{digest}  {filename}\n".encode()
        with zipfile.ZipFile(io.BytesIO(data)) as archive:
            manifest = json.loads(archive.read("skill-shelf/bundle.json"))
        entry = {"filename": filename, "sha256": digest, "roots": manifest["roots"],
                 "packages": [{"name": item["name"], "version": item["version"]}
                              for item in manifest["packages"]]}
        if title == "skill-shelf":
            metadata["collection"] = entry
        else:
            entry.update(name=title, version=checked[1]["package:" + title]["version"])
            metadata["packages"].append(entry)
    outputs["downloads.json"] = encoded(metadata)
    return outputs


def main(argv=None) -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="verify all downloads and reject stale package ZIPs")
    parser.add_argument("--source", type=Path, default=SOURCE, help=argparse.SUPPRESS)
    parser.add_argument("--downloads", type=Path, default=DOWNLOADS, help=argparse.SUPPRESS)
    args = parser.parse_args(argv)
    try:
        outputs = download_outputs(args.source)
        require(not args.downloads.is_symlink(), "Refusing symlinked download destination")
        if args.check:
            actual = {path.name for path in args.downloads.iterdir()} if args.downloads.is_dir() else set()
            mismatches = sorted(set(outputs) ^ actual)
            mismatches.extend(name for name, data in outputs.items()
                              if name in actual and (not (args.downloads / name).is_file()
                              or (args.downloads / name).is_symlink()
                              or (args.downloads / name).read_bytes() != data))
            if mismatches:
                print("Skill Shelf downloads are out of date: " + ", ".join(sorted(set(mismatches))), file=sys.stderr)
                return 1
            print(f"All {len(outputs)} Skill Shelf download artifacts match the release sources.")
            return 0
        args.downloads.mkdir(parents=True, exist_ok=True)
        stale = [path for path in args.downloads.iterdir() if path.name not in outputs]
        require(all(path.is_file() and not path.is_symlink() and
                    (path.name.endswith(".zip") or path.name.endswith(".zip.sha256")) for path in stale),
                "Unexpected entry in download destination; review it before rebuilding")
        for name, data in outputs.items():
            path = args.downloads / name
            require(not path.is_symlink(), f"Refusing symlinked output: {path}")
            path.write_bytes(data)
        for path in stale:
            path.unlink()
        print(f"Built {len(outputs)} download artifacts in {args.downloads}")
        return 0
    except (Invalid, OSError, ValueError, TypeError, KeyError) as exc:
        print(f"Cannot build Skill Shelf downloads: {exc}", file=sys.stderr)
        return 1


if __name__ == "__main__":
    raise SystemExit(main())
