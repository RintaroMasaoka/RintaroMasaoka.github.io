#!/usr/bin/env python3
"""Check version-bound Skill Shelf companion catch-up before a package promotion."""
from __future__ import annotations

import argparse
from datetime import date
import hashlib
import json
from pathlib import Path
import re
import stat

SOURCE = Path(__file__).resolve().parents[1]
CHECKS = ('summary_fidelity', 'roles_and_handoffs', 'mermaid_rendered')
IGNORED = {'__pycache__', '.pytest_cache', '.DS_Store'}


def sha256(data):
    return hashlib.sha256(data).hexdigest()


def fingerprint(root):
    """Hash every package file using the download builder's path/hash convention."""
    if not root.is_dir() or root.is_symlink():
        raise ValueError(f'Missing or linked package: {root}')
    files = {}
    for path in sorted(root.rglob('*')):
        if path.is_symlink():
            raise ValueError(f'Symlink in package: {path}')
        relative = path.relative_to(root)
        if any(part in IGNORED for part in relative.parts) or path.suffix == '.pyc':
            continue
        mode = path.lstat().st_mode
        if stat.S_ISDIR(mode):
            continue
        if not stat.S_ISREG(mode) or path.stat().st_nlink != 1:
            raise ValueError(f'Non-regular or hard-linked package file: {path}')
        files[relative.as_posix()] = sha256(path.read_bytes())
    return sha256(json.dumps(files, sort_keys=True, separators=(',', ':')).encode())


def regular(path):
    if not path.is_file() or path.is_symlink():
        raise ValueError(f'Missing or linked companion file: {path}')
    return path.read_bytes()


def check(source, name):
    if not isinstance(name, str) or not re.fullmatch('[a-z0-9][a-z0-9-]*', name):
        raise ValueError('Invalid package name')
    for location in (source, source / 'plugins', source / 'companion', source / 'companion' / name):
        if location.is_symlink():
            raise ValueError(f'Symlinked release path: {location}')
    root = source / 'plugins' / name
    actual = fingerprint(root)
    manifests = [json.loads(regular(root / host / 'plugin.json')) for host in ('.codex-plugin', '.claude-plugin')]
    version = manifests[0].get('version')
    if not isinstance(version, str) or not version or any(m.get('name') != name or m.get('version') != version for m in manifests):
        raise ValueError(f'{name}: manifest identity/version mismatch')
    summary = regular(source / 'companion' / name / 'HUMAN.md')
    record = json.loads(regular(source / 'companion' / name / 'review.json'))
    if record.get('schema_version') != 1 or record.get('package') != name or record.get('version') != version:
        raise ValueError(f'{name}: companion release identity/version mismatch')
    if record.get('source_sha256') != actual or record.get('summary_sha256') != sha256(summary):
        raise ValueError(f'{name}: companion catch-up is stale')
    if not re.search(r'^```mermaid\s*\n\S[\s\S]*?^```\s*$', summary.decode('utf-8'), re.M):
        raise ValueError(f'{name}: missing Mermaid diagram')
    if not isinstance(record.get('reviewed_on'), str):
        raise ValueError(f'{name}: review date required')
    date.fromisoformat(record['reviewed_on'])
    if not isinstance(record.get('checks'), dict) or any(record['checks'].get(k) is not True for k in CHECKS):
        raise ValueError(f'{name}: catch-up review is incomplete')
    return f'{name}@{version}: companion catch-up record matches release snapshot'


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', type=Path, default=SOURCE)
    parser.add_argument('--package', action='append', required=True, help='package selected for promotion; repeat for multiple packages')
    args = parser.parse_args(argv)
    errors = []
    for name in sorted(set(args.package)):
        try:
            print(check(args.source, name))
        except (ValueError, OSError, TypeError, KeyError) as exc:
            errors.append(f'{name}: {exc}')
    for error in errors:
        print('ERROR: ' + error)
    return 1 if errors else 0


if __name__ == '__main__':
    raise SystemExit(main())
