#!/usr/bin/env python3
"""Validate and install a self-contained Skill Shelf bundle at project scope.

Requires Python 3.11+. Codex uses whole-package cache publication followed by
native readback; Claude Code uses its explicit project-scoped installer.
"""
from __future__ import annotations

import argparse
import copy
import hashlib
import importlib.util
import json
import os
from pathlib import Path
import queue
import re
import shutil
import stat
import subprocess
import sys
import tempfile
import threading
import time
import tomllib

sys.dont_write_bytecode = True
NAME = re.compile(r'[a-z0-9]+(?:-[a-z0-9]+)*')
SHA = re.compile(r'[a-f0-9]{64}')


def require(condition, message):
    if not condition:
        raise ValueError(message)


def digest(data):
    return hashlib.sha256(data).hexdigest()


def read_json(path):
    def unique(items):
        result = {}
        for key, value in items:
            require(key not in result, f'Duplicate JSON key: {key}')
            result[key] = value
        return result
    return json.loads(path.read_text(encoding='utf-8'), object_pairs_hook=unique)


def file_map(root):
    result = {}
    require(root.is_dir() and not root.is_symlink(), f'Not a real directory: {root}')
    for path in sorted(root.rglob('*')):
        mode = path.lstat().st_mode
        require(not stat.S_ISLNK(mode), f'Symlink is not allowed in bundle: {path}')
        if stat.S_ISDIR(mode):
            continue
        require(stat.S_ISREG(mode), f'Unsupported bundle entry: {path}')
        result[path.relative_to(root).as_posix()] = digest(path.read_bytes())
    return result


def installed_file_map(root, source_files):
    """Permit Python's derived bytecode only for a pinned source module.

    The downloaded bundle itself always uses the strict file inventory. Native
    package helpers may create bytecode in the installed copy during ordinary
    use; it is not a source resource and must not invalidate later readback.
    """
    actual = file_map(root)
    for relative in list(actual):
        path = Path(relative)
        if path.parent.name != '__pycache__':
            continue
        match = re.fullmatch(r'(.+)\.cpython-[0-9]+(?:\.opt-[0-9]+)?\.pyc', path.name)
        if match:
            source = (path.parent.parent / (match[1] + '.py')).as_posix()
            if source in source_files:
                actual.pop(relative)
    return actual


def tree_digest(files):
    return digest(json.dumps(files, sort_keys=True, separators=(',', ':')).encode('utf-8'))


def validate_bundle(root):
    root = root.resolve()
    value = read_json(root / 'bundle.json')
    require(value.get('schema_version') == 1, 'Unsupported bundle schema')
    expected = value.get('files')
    require(isinstance(expected, dict) and expected, 'Bundle file inventory is missing')
    require('bundle.json' not in expected, 'bundle.json cannot hash itself')
    for relative, hash_ in expected.items():
        p = Path(relative)
        require(not p.is_absolute() and '..' not in p.parts and '\\' not in relative
                and p.as_posix() == relative and relative != '.', f'Unsafe bundle path: {relative}')
        require(isinstance(hash_, str) and SHA.fullmatch(hash_), f'Invalid digest: {relative}')
    actual = file_map(root)
    actual.pop('bundle.json', None)
    require(actual == expected, 'Bundle files are missing, changed, or unlisted; download a complete ZIP again')
    roots, order, packages = value.get('roots'), value.get('installation_order'), value.get('packages')
    require(isinstance(roots, list) and roots and all(isinstance(n, str) and NAME.fullmatch(n) for n in roots), 'Invalid roots')
    require(isinstance(order, list) and len(order) == len(set(order)), 'Invalid installation order')
    require(isinstance(packages, list) and packages, 'Missing packages')
    require([p.get('name') for p in packages] == order, 'Package list and installation order disagree')
    require(set(roots) <= set(order), 'A requested root is missing')
    marketplace = value.get('marketplace', {})
    require(isinstance(marketplace.get('name'), str) and NAME.fullmatch(marketplace['name']), 'Invalid marketplace identity')
    require(marketplace.get('paths') == ['.agents/plugins/marketplace.json', '.claude-plugin/marketplace.json'], 'Missing host marketplaces')
    for p in packages:
        name = p['name']
        require(isinstance(name, str) and NAME.fullmatch(name) and p.get('path') == 'plugins/' + name, 'Invalid package path')
        files = file_map(root / p['path'])
        require(tree_digest(files) == p.get('sha256'), f'Package digest mismatch: {name}')
        for host in ('codex', 'claude'):
            manifest = read_json(root / p['path'] / f'.{host}-plugin/plugin.json')
            require((manifest.get('name'), manifest.get('version')) == (name, p.get('version')), f'{host} manifest mismatch: {name}')
        codex_manifest = read_json(root / p['path'] / '.codex-plugin/plugin.json')
        for field in ('apps', 'hooks', 'mcpServers', 'mcp_servers', 'appTemplates', 'onboardingSkill', 'scheduledTasks'):
            require(not codex_manifest.get(field), f'Codex cache adapter cannot install managed components: {name}/{field}')
        for path in ('mcp.json', '.mcp.json', '.app.json', 'hooks/hooks.json'):
            require(not (root / p['path'] / path).exists(), f'Codex cache adapter cannot install managed components: {name}/{path}')
    for relative in marketplace['paths']:
        catalog = read_json(root / relative)
        require(catalog.get('name') == marketplace['name'], 'Marketplace name mismatch')
        require({p.get('name') for p in catalog.get('plugins', [])} == set(order), 'Marketplace does not contain the complete dependency closure')
        for entry in catalog['plugins']:
            source = entry.get('source')
            if isinstance(source, dict):
                require(source.get('source') == 'local', 'Bundle marketplace must be local')
                source = source.get('path')
            require(source == './plugins/' + entry['name'], 'Marketplace source escapes bundle')
    # Resolve the actual declarations again, even if someone regenerated hashes
    # after omitting a provider or changed a version constraint.
    spec = importlib.util.spec_from_file_location('_shelf_dependencies', root / 'runtime/skill_dependencies.py')
    require(spec is not None and spec.loader is not None, 'Bundled dependency validator is missing')
    resolver = importlib.util.module_from_spec(spec)
    spec.loader.exec_module(resolver)
    resolved = resolver.resolve(root / 'plugins', ['package:' + n for n in roots])
    require(resolved['order'] == ['package:' + n for n in order], 'Required dependency closure or order differs from bundle lock')
    return value


def project_settings_path(project, host):
    """Preflight the whole settings location, including symlinked parents."""
    parent = project / ('.codex' if host == 'codex' else '.claude')
    require(parent.resolve().is_relative_to(project), f'{host} settings parent escapes the selected project: {parent}')
    path = parent / ('config.toml' if host == 'codex' else 'settings.json')
    read_optional(path)
    return path


def pinned_skills(bundle):
    result = {}
    owners = set(bundle['installation_order'])
    for relative in bundle['files']:
        parts = Path(relative).parts
        if len(parts) == 5 and parts[0] == 'plugins' and parts[1] in owners and parts[2] == 'skills' and parts[4] == 'SKILL.md':
            result[parts[1] + ':' + parts[3]] = relative
    return result


def package_routes(project, bundle):
    routes = {}
    for package in bundle['packages']:
        name = package['name']
        market = 'skill-shelf-pkg-' + name + '-' + package['sha256'][:16]
        routes[name] = {'market': market, 'key': name + '@' + market,
                        'path': project / '.skill-shelf/packages' / market}
    return routes


def package_catalogs(package, route):
    name = package['name']
    codex = {'name': route['market'], 'plugins': [{'name': name,
             'source': {'source': 'local', 'path': './plugins/' + name},
             'policy': {'installation': 'AVAILABLE', 'authentication': 'ON_INSTALL'},
             'category': 'Productivity'}]}
    claude = {'name': route['market'], 'owner': {'name': 'Skill Shelf'},
              'plugins': [{'name': name, 'source': './plugins/' + name, 'version': package['version']}]}
    return {'.agents/plugins/marketplace.json': (json.dumps(codex, indent=2) + '\n').encode(),
            '.claude-plugin/marketplace.json': (json.dumps(claude, indent=2) + '\n').encode()}


def expected_container_files(bundle, package, route):
    prefix = package['path'] + '/'
    files = {path: hash_ for path, hash_ in bundle['files'].items() if path.startswith(prefix)}
    files.update({path: digest(data) for path, data in package_catalogs(package, route).items()})
    return files


def validate_container(bundle, package, route):
    require(file_map(route['path']) == expected_container_files(bundle, package, route),
            'Pinned package container differs: ' + package['name'])


def publish_container(bundle_path, bundle, package, route):
    target = route['path']
    if target.exists():
        validate_container(bundle, package, route)
        return
    target.parent.mkdir(parents=True, exist_ok=True)
    temporary = Path(tempfile.mkdtemp(prefix='.skill-shelf-package-', dir=target.parent))
    try:
        tree = temporary / 'tree'
        shutil.copytree(bundle_path / package['path'], tree / package['path'])
        for relative, content in package_catalogs(package, route).items():
            path = tree / relative
            path.parent.mkdir(parents=True, exist_ok=True)
            path.write_bytes(content)
        require(file_map(tree) == expected_container_files(bundle, package, route), 'Package source changed during publication')
        os.rename(tree, target)
    finally:
        shutil.rmtree(temporary)


def preflight_package_routes(project, bundle, routes):
    for package in bundle['packages']:
        route = routes[package['name']]
        preflight_snapshot_location(project, route['path'])
        if route['path'].exists():
            validate_container(bundle, package, route)


def receipt_path(target):
    return target.parent / (target.name + '.receipt.json')


def reject_snapshot_symlinks(root, path):
    """Keep project snapshot ancestry lexical and free of directory aliases."""
    require(path.is_relative_to(root), 'Project snapshot location escapes the selected project')
    current = root
    require(not current.is_symlink(), f'Refusing symlinked snapshot ancestry: {current}')
    for part in path.relative_to(root).parts:
        current = current / part
        require(not current.is_symlink(), f'Refusing symlinked snapshot ancestry: {current}')


def preflight_snapshot_location(project, target):
    reject_snapshot_symlinks(project, target.parent)
    require(target.parent.resolve().is_relative_to(project), 'Project snapshot location escapes the selected project')
    require(not target.is_symlink(), f'Refusing symlinked installed snapshot: {target}')
    path = receipt_path(target)
    require(path.parent.resolve().is_relative_to(project), 'Project receipt location escapes the selected project')
    read_optional(path)


def write_snapshot_receipt(target, bundle):
    value = {'schema_version': 1, 'marketplace': bundle['marketplace']['name'],
             'bundle_sha256': digest((target / 'bundle.json').read_bytes()),
             'skills': sorted(pinned_skills(bundle))}
    path = receipt_path(target)
    before = read_optional(path)
    if before is not None:
        require(read_json(path) == value, 'Project snapshot receipt differs from this accepted bundle')
    else:
        atomic_write(path, None, (json.dumps(value, indent=2) + '\n').encode('utf-8'))


def check_snapshot_pin(target):
    require(not target.is_symlink(), f'Refusing symlinked installed snapshot: {target}')
    path = receipt_path(target)
    require(read_optional(path) is not None, 'Project snapshot receipt is missing; reinstall the complete download')
    value = read_json(path)
    require(value.get('bundle_sha256') == digest((target / 'bundle.json').read_bytes()),
            'Project snapshot differs from its installation receipt')
    return value


def validate_snapshot(target, bundle):
    # Check the independent pin before importing the snapshot's validator.
    value = check_snapshot_pin(target)
    actual = validate_bundle(target)
    require(actual == bundle, 'Project snapshot manifest differs from the supplied bundle lock')
    expected = {'schema_version': 1, 'marketplace': bundle['marketplace']['name'],
                'bundle_sha256': digest((target / 'bundle.json').read_bytes()),
                'skills': sorted(pinned_skills(bundle))}
    require(value == expected, 'Project snapshot differs from its installation receipt')
    return pinned_skills(bundle)


def read_optional(path):
    require(not path.is_symlink(), f'Refusing symlinked settings: {path}')
    return path.read_bytes() if path.exists() else None


def atomic_write(path, before, after):
    require(read_optional(path) == before, f'Settings changed concurrently: {path}')
    if before == after:
        return
    path.parent.mkdir(parents=True, exist_ok=True)
    fd, temporary = tempfile.mkstemp(prefix='.skill-shelf-', dir=path.parent)
    try:
        with os.fdopen(fd, 'wb') as output:
            output.write(after)
            output.flush()
            os.fsync(output.fileno())
        os.chmod(temporary, stat.S_IMODE(path.stat().st_mode) if path.exists() else 0o600)
        require(read_optional(path) == before, f'Settings changed concurrently: {path}')
        os.replace(temporary, path)
    finally:
        if os.path.exists(temporary):
            os.unlink(temporary)


def restore(path, original, expected):
    if original is None:
        require(read_optional(path) == expected, f'Cannot roll back concurrently changed settings: {path}')
        if path.exists():
            path.unlink()
    else:
        atomic_write(path, expected, original)


def codex_config(before, bundle_path, bundle):
    text = (before or b'').decode('utf-8')
    parsed = tomllib.loads(text)
    routes = package_routes(bundle_path.parent.parent.resolve(), bundle)
    owners = set(bundle['installation_order'])
    for key, settings in parsed.get('plugins', {}).items():
        require(not (key.split('@', 1)[0] in owners and key != routes[key.split('@', 1)[0]]['key'] and settings.get('enabled') is True),
                f'Package namespace is already enabled from another marketplace: {key}; disable that project entry before replacing it')
    newline = '\r\n' if '\r\n' in text else '\n'
    for name in bundle['installation_order']:
        route = routes[name]
        market = route['market']
        marketplace = parsed.get('marketplaces', {}).get(market)
        expected_market = {'source_type': 'local', 'source': str(route['path'])}
        require(marketplace is None or marketplace == expected_market, 'This package marketplace is already configured at another path')
        if marketplace is None:
            text += (newline * 2 if text else '') + '[marketplaces.' + json.dumps(market) + ']' + newline
            text += 'source_type = "local"' + newline + 'source = ' + json.dumps(str(route['path'])) + newline
    for name in bundle['installation_order']:
        key = routes[name]['key']
        settings = parsed.get('plugins', {}).get(key)
        if settings is None:
            text += newline + '[plugins.' + json.dumps(key) + ']' + newline + 'enabled = true' + newline
        elif settings.get('enabled') is not True:
            # Preserve unrelated bytes and comments. Refuse ambiguous inline or
            # dotted representations rather than rewriting the entire file.
            lines = text.splitlines(keepends=True)
            start = None
            for i, line in enumerate(lines):
                if line.lstrip().startswith('['):
                    try:
                        probe = tomllib.loads(line.split('#', 1)[0] + '\n__shelf = true\n')
                    except tomllib.TOMLDecodeError:
                        continue
                    if probe.get('plugins', {}).get(key, {}).get('__shelf'):
                        start = i
                        break
            require(start is not None, f'Cannot preserve unusual plugin setting: {key}')
            end = next((i for i in range(start + 1, len(lines)) if lines[i].lstrip().startswith('[')), len(lines))
            updated = False
            for i in range(start + 1, end):
                match = re.fullmatch(r'(\s*enabled\s*=\s*)(true|false)([^\r\n]*)(\r?\n)?', lines[i])
                if match:
                    lines[i] = match[1] + 'true' + match[3] + (match[4] or '')
                    updated = True
                    break
            require(updated or 'enabled' not in settings, f'Cannot preserve unusual enabled setting: {key}')
            if not updated:
                lines.insert(start + 1, 'enabled = true' + newline)
            text = ''.join(lines)
    after = tomllib.loads(text)
    expected = copy.deepcopy(parsed)
    for name in bundle['installation_order']:
        route = routes[name]
        expected.setdefault('marketplaces', {})[route['market']] = {'source_type': 'local', 'source': str(route['path'])}
        expected.setdefault('plugins', {}).setdefault(route['key'], {})['enabled'] = True
    require(after == expected, 'Settings update would change unrelated values')
    return text.encode('utf-8')


def codex_table_span(lines, parts):
    """Find an explicit TOML table without rewriting unrelated settings."""
    for i, line in enumerate(lines):
        if not line.lstrip().startswith('['):
            continue
        try:
            value = tomllib.loads(line + '\n__shelf_table = true\n')
        except tomllib.TOMLDecodeError:
            continue
        table = value
        for part in parts:
            table = table.get(part, {}) if isinstance(table, dict) else {}
        if table == {'__shelf_table': True}:
            start = i
            break
    else:
        return None
    end = len(lines)
    for i in range(start + 1, len(lines)):
        if not lines[i].lstrip().startswith('['):
            continue
        try:
            tomllib.loads(lines[i] + '\n__shelf_table = true\n')
        except tomllib.TOMLDecodeError:
            continue
        end = i
        break
    return start, end


def rollback_codex_settings(path, original, expected):
    """Revert unchanged owned leaves, retaining concurrent unrelated edits."""
    current = read_optional(path)
    if current == expected:
        restore(path, original, expected)
        return
    old = tomllib.loads((original or b'').decode('utf-8'))
    accepted = tomllib.loads(expected.decode('utf-8'))
    text = (current or b'').decode('utf-8')
    actual = tomllib.loads(text)
    missing = object()
    conflicts = []
    for group, fields in (('plugins', ('enabled',)), ('marketplaces', ('source_type', 'source'))):
        for key, table in accepted.get(group, {}).items():
            previous = old.get(group, {}).get(key, {})
            for field in fields:
                before = previous.get(field, missing)
                after = table.get(field, missing)
                if before == after:
                    continue
                existing = actual.get(group, {}).get(key, {}).get(field, missing)
                if existing is missing or existing == before:
                    continue
                label = group + '.' + key + '.' + field
                if existing != after:
                    conflicts.append(label)
                    continue
                lines = text.splitlines(keepends=True)
                span = codex_table_span(lines, (group, key))
                candidate = None
                if span is not None:
                    start, end = span
                    for i in range(start + 1, end):
                        try:
                            probe = tomllib.loads(lines[start] + lines[i]).get(group, {}).get(key, {})
                        except tomllib.TOMLDecodeError:
                            continue
                        if field not in probe:
                            continue
                        edited = lines.copy()
                        if before is missing:
                            del edited[i]
                        else:
                            # The enabling writer only changes existing booleans.
                            match = re.fullmatch(r'(\s*(?:enabled|"enabled"|\'enabled\')\s*=\s*)(true|false)([^\r\n]*)(\r?\n)?', lines[i])
                            if field != 'enabled' or not isinstance(before, bool) or match is None:
                                break
                            edited[i] = match[1] + ('true' if before else 'false') + match[3] + (match[4] or '')
                        candidate = ''.join(edited)
                        break
                desired = copy.deepcopy(actual)
                owned = desired[group][key]
                if before is missing:
                    owned.pop(field, None)
                else:
                    owned[field] = before
                if candidate is not None:
                    # Remove only an empty newly created owner table. Retain
                    # comments and any concurrent fields within that table.
                    if not owned and key not in old.get(group, {}):
                        edited = candidate.splitlines(keepends=True)
                        span = codex_table_span(edited, (group, key))
                        if span is not None:
                            del edited[span[0]]
                            candidate = ''.join(edited)
                            desired[group].pop(key)
                            if not desired[group] and codex_table_span(edited, (group,)) is None:
                                desired.pop(group)
                    try:
                        require(tomllib.loads(candidate) == desired, 'Rollback would change unrelated TOML values')
                    except (ValueError, tomllib.TOMLDecodeError):
                        candidate = None
                if candidate is None:
                    conflicts.append(label)
                    continue
                text, actual = candidate, desired
    rolled_back = text.encode('utf-8')
    if rolled_back != (current or b''):
        atomic_write(path, current, rolled_back)
    require(not conflicts, 'Scoped rollback incomplete because owned project settings changed concurrently: ' + ', '.join(conflicts))


class NativeCodex:
    def __init__(self, binary, project):
        self.binary, self.project = binary, project

    def __enter__(self):
        self.process = subprocess.Popen([self.binary, 'app-server', '--stdio'], cwd=self.project,
            stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL, text=True, bufsize=1)
        self.mailbox, self.counter = queue.Queue(), 0
        def read():
            for line in self.process.stdout:
                try:
                    self.mailbox.put(json.loads(line))
                except ValueError:
                    pass
            self.mailbox.put({'_ended': True})
        threading.Thread(target=read, daemon=True).start()
        try:
            self.call('initialize', {'clientInfo': {'name': 'skill-shelf-installer', 'version': '1'}, 'capabilities': {'experimentalApi': True}})
            self.process.stdin.write(json.dumps({'method': 'initialized', 'params': {}}) + '\n')
            self.process.stdin.flush()
            return self
        except BaseException:
            self.__exit__()
            raise

    def call(self, method, params):
        self.counter += 1
        request_id = self.counter
        self.process.stdin.write(json.dumps({'id': request_id, 'method': method, 'params': params}) + '\n')
        self.process.stdin.flush()
        deadline = time.monotonic() + 45
        while time.monotonic() < deadline:
            value = self.mailbox.get(timeout=max(.1, deadline - time.monotonic()))
            require(not value.get('_ended'), f'Codex exited before {method}')
            if value.get('id') == request_id:
                require('error' not in value, f'Codex rejected {method}: {value.get("error")}')
                return value['result']
        raise TimeoutError('Codex timed out: ' + method)

    def __exit__(self, *_):
        self.process.terminate()
        try:
            self.process.wait(timeout=3)
        except subprocess.TimeoutExpired:
            self.process.kill()
            self.process.wait()


def publish_tree(source, target, expected_hash, is_bundle=False):
    require(not target.is_symlink(), f'Refusing symlinked installed snapshot: {target}')
    if target.exists():
        require(target.is_dir(), f'Installed snapshot is not a directory: {target}')
        actual = digest((target / 'bundle.json').read_bytes()) if is_bundle else tree_digest(installed_file_map(target, file_map(source)))
        require(actual == expected_hash, f'Installed immutable snapshot differs: {target}')
        if is_bundle:
            validate_bundle(target)
        return
    target.parent.mkdir(parents=True, exist_ok=True)
    temporary = Path(tempfile.mkdtemp(prefix='.skill-shelf-stage-', dir=target.parent))
    try:
        shutil.copytree(source, temporary / 'tree')
        tree = temporary / 'tree'
        actual = digest((tree / 'bundle.json').read_bytes()) if is_bundle else tree_digest(file_map(tree))
        require(actual == expected_hash, 'Source changed while preparing installed snapshot')
        if is_bundle:
            validate_bundle(tree)
        os.rename(tree, target)
    finally:
        shutil.rmtree(temporary)


def codex_verify(binary, project, bundle_path, bundle, cache):
    project = project.resolve()
    project_settings_path(project, 'codex')
    expected_skills = validate_snapshot(bundle_path, bundle)
    routes = package_routes(project, bundle)
    preflight_package_routes(project, bundle, routes)
    package_names = set(bundle['installation_order'])
    keys = {route['key'] for route in routes.values()}
    with NativeCodex(binary, project) as host:
        config = host.call('config/read', {'cwd': str(project), 'includeLayers': True})['config']
        for name in package_names:
            require(config.get('plugins', {}).get(routes[name]['key'], {}).get('enabled') is True,
                    'Project config is not active; open this as a trusted Codex project: ' + str(project))
        data = host.call('skills/list', {'cwds': [str(project)], 'forceReload': True})['data']
        discovered = {s['name']: s for row in data for s in row.get('skills', []) if s.get('pluginId') in keys}
        for p in bundle['packages']:
            route = routes[p['name']]
            validate_container(bundle, p, route)
            expected_root = cache / route['market'] / p['name'] / p['version']
            require(tree_digest(installed_file_map(expected_root, file_map(bundle_path / p['path']))) == p['sha256'], 'Loaded package resources differ: ' + p['name'])
            native = host.call('plugin/read', {'pluginName': p['name'], 'marketplacePath': str(route['path'] / '.agents/plugins/marketplace.json')})['plugin']
            # installed/enabled in plugin/read describe user-level activation.
            # Project activation is established by effective project config and
            # the native skills records below, including their pinned cache paths.
            require(native['summary'].get('localVersion') == p['version'], 'Codex did not recognize cached version: ' + p['name'])
            for identity, relative in expected_skills.items():
                if identity.split(':', 1)[0] != p['name']:
                    continue
                skill = bundle_path / relative
                record = discovered.get(identity)
                require(record is not None and record.get('enabled') is True, 'Skill not discovered: ' + identity)
                loaded = Path(record['path']).resolve()
                require(loaded == (expected_root / 'skills' / skill.parent.name / 'SKILL.md').resolve(), 'Codex loaded another package version: ' + identity)
                require(loaded.read_bytes() == skill.read_bytes(), 'Loaded entrypoint differs: ' + identity)
        outside = host.call('skills/list', {'cwds': [str(project.parent)], 'forceReload': True})['data']
        require(not any(s.get('pluginId') in keys for row in outside for s in row.get('skills', [])), 'Bundle gained activation outside the selected project')
    return {'host': 'codex', 'project': str(project), 'bundle_path': str(bundle_path), 'packages': bundle['installation_order'], 'skills': sorted(discovered), 'scope': 'project'}


def install_codex(binary, project, source, bundle, verify_only=False):
    project = project.resolve()
    project_path = project_settings_path(project, 'codex')
    task_codex_dir = Path(os.environ.get('CODEX_HOME', str(Path.home() / '.codex'))).resolve()
    cache = task_codex_dir / 'plugins/cache'
    user_path = task_codex_dir / 'config.toml'
    user_before = read_optional(user_path)
    project_before = read_optional(project_path)
    market = bundle['marketplace']['name']
    target = project / '.skill-shelf' / market
    preflight_snapshot_location(project, target)
    routes = package_routes(project, bundle)
    preflight_package_routes(project, bundle, routes)
    if verify_only:
        return codex_verify(binary, project, target, bundle, cache)
    # Check effective scope before any cache publication: an already-authorized
    # conflicting namespace must be handled deliberately, not shadowed.
    with NativeCodex(binary, project) as host:
        effective = host.call('config/read', {'cwd': str(project), 'includeLayers': True})['config']
        for key, setting in effective.get('plugins', {}).items():
            require(not (key.split('@', 1)[0] in bundle['installation_order'] and setting.get('enabled') is True and key != routes[key.split('@', 1)[0]]['key']),
                    'Package already enabled from another marketplace: ' + key + '; disable that existing entry before replacing it')
    user_plugins = tomllib.loads((user_before or b'').decode()).get('plugins', {})
    require(not any(user_plugins.get(routes[n]['key'], {}).get('enabled') is True for n in bundle['installation_order']), 'This bundle is globally enabled already; folder-only installation requires resolving that existing activation')
    after = codex_config(project_before, target, bundle)
    publish_tree(source, target, digest((source / 'bundle.json').read_bytes()), is_bundle=True)
    write_snapshot_receipt(target, bundle)
    for p in bundle['packages']:
        route = routes[p['name']]
        publish_container(target, bundle, p, route)
        publish_tree(route['path'] / p['path'], cache / route['market'] / p['name'] / p['version'], p['sha256'])
    try:
        atomic_write(project_path, project_before, after)
        result = codex_verify(binary, project, target, bundle, cache)
        require(read_optional(user_path) == user_before, 'Host changed user config unexpectedly')
        return result
    except BaseException as error:
        try:
            rollback_codex_settings(project_path, project_before, after)
        except (ValueError, OSError, RuntimeError) as rollback_error:
            raise RuntimeError(str(error) + '; ' + str(rollback_error) + '; installation failed and remaining project activation requires inspection') from error
        raise


def claude_command(binary, project, arguments):
    response = subprocess.run([binary, 'plugin', *arguments], cwd=project, text=True, capture_output=True, timeout=60)
    require(response.returncode == 0, 'Claude Code plugin command failed: ' + response.stderr.strip() + response.stdout.strip())
    return response.stdout


def claude_discovery(binary, project):
    """Read native command discovery through a control-only SDK handshake.

    No prompt/model turn is sent, and hooks and MCP are disabled for this probe.
    """
    command = [binary, '--print', '--input-format', 'stream-json',
               '--output-format', 'stream-json', '--verbose',
               '--no-session-persistence', '--no-chrome',
               '--setting-sources', 'user,project,local', '--tools', '',
               '--strict-mcp-config', '--mcp-config', '{"mcpServers":{}}',
               '--settings', '{"disableAllHooks":true}']
    child_env = os.environ.copy()
    child_env['CLAUDE_CODE_DISABLE_NONESSENTIAL_TRAFFIC'] = '1'
    process = subprocess.Popen(command, cwd=project, env=child_env,
        stdin=subprocess.PIPE, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL,
        text=True, bufsize=1)
    mailbox = queue.Queue()
    def read():
        for line in process.stdout:
            try:
                mailbox.put(json.loads(line))
            except ValueError:
                pass
        mailbox.put({'type': '_ended'})
    threading.Thread(target=read, daemon=True).start()
    request_id = 'skill_shelf_discovery_only'
    process.stdin.write(json.dumps({'type': 'control_request', 'request_id': request_id,
        'request': {'subtype': 'initialize', 'hooks': None}}) + '\n')
    process.stdin.flush()
    deadline = time.monotonic() + 45
    try:
        while time.monotonic() < deadline:
            value = mailbox.get(timeout=max(.1, deadline - time.monotonic()))
            require(value.get('type') not in ('assistant', 'stream_event', 'result'), 'Unexpected model turn during Claude discovery')
            require(value.get('type') != '_ended', 'Claude exited before discovery handshake')
            if value.get('type') != 'control_response':
                continue
            response = value.get('response', {})
            if response.get('request_id') != request_id:
                continue
            require(response.get('subtype') != 'error', 'Claude rejected command discovery handshake')
            commands = response.get('response', {}).get('commands', [])
            return {entry if isinstance(entry, str) else entry.get('name') for entry in commands}
        raise TimeoutError('Claude command discovery timed out')
    finally:
        process.terminate()
        try:
            process.wait(timeout=3)
        except subprocess.TimeoutExpired:
            process.kill()
            process.wait()


def rollback_claude_settings(path, original, bundle, target, attempted):
    """Undo only known native installer edits, retaining concurrent user edits."""
    current = read_optional(path)
    before = json.loads((original or b'{}').decode('utf-8'))
    now = json.loads((current or b'{}').decode('utf-8'))
    require(isinstance(before, dict) and isinstance(now, dict), 'Cannot safely roll back malformed Claude project settings')
    candidate = copy.deepcopy(now)
    conflicts = []
    missing = object()
    edits = [('enabledPlugins', key, True) for key in attempted['packages']]
    for market, registered_path in attempted['marketplaces'].items():
        edits.append(('extraKnownMarketplaces', market, {'source': {'source': 'directory', 'path': str(registered_path)}}))
    for section, key, installer_value in edits:
        old_map, current_map = before.get(section, {}), candidate.get(section, {})
        if not isinstance(old_map, dict) or not isinstance(current_map, dict):
            conflicts.append(section + '.' + key)
            continue
        old_value, current_value = old_map.get(key, missing), current_map.get(key, missing)
        if current_value == old_value:
            continue
        if current_value != installer_value:
            conflicts.append(section + '.' + key)
            continue
        if old_value is missing:
            current_map.pop(key, None)
        else:
            current_map[key] = copy.deepcopy(old_value)
        if not current_map and section not in before:
            candidate.pop(section, None)
    if candidate != now:
        if candidate == before:
            restore(path, original, current)
        else:
            atomic_write(path, current, (json.dumps(candidate, indent=2) + '\n').encode('utf-8'))
    require(not conflicts, 'Scoped rollback incomplete; concurrently changed owned entries were preserved: ' + ', '.join(conflicts))


def install_claude(binary, project, source, bundle, verify_only=False):
    project = project.resolve()
    market = bundle['marketplace']['name']
    target = project / '.skill-shelf' / market
    preflight_snapshot_location(project, target)
    routes = package_routes(project, bundle)
    preflight_package_routes(project, bundle, routes)
    settings_path = project_settings_path(project, 'claude')
    before = read_optional(settings_path)
    task_claude_dir = Path(os.environ.get('CLAUDE_CONFIG_DIR', str(Path.home() / '.claude'))).resolve()
    user_settings = task_claude_dir / 'settings.json'
    user_before = read_optional(user_settings)
    if verify_only:
        validate_snapshot(target, bundle)
    original_entries = json.loads(claude_command(binary, project, ['list', '--json']))
    require(isinstance(original_entries, list), 'Unexpected Claude plugin list format')
    if not verify_only:
        for entry in original_entries:
            key = entry.get('id', '')
            require(not (entry.get('enabled') is True and key.split('@', 1)[0] in bundle['installation_order']
                        and (key != routes[key.split('@', 1)[0]]['key'] or entry.get('scope') == 'user')),
                    'Package already enabled from another source or global scope: ' + key)
        publish_tree(source, target, digest((source / 'bundle.json').read_bytes()), is_bundle=True)
        write_snapshot_receipt(target, bundle)
    expected_skills = validate_snapshot(target, bundle)
    attempted = {'marketplaces': {}, 'packages': []}
    try:
        if not verify_only:
            # Explicit scope is required for both registration and installation.
            for p in bundle['packages']:
                route = routes[p['name']]
                publish_container(target, bundle, p, route)
            for name in bundle['installation_order']:
                route = routes[name]
                attempted['marketplaces'][route['market']] = route['path']
                claude_command(binary, project, ['marketplace', 'add', str(route['path']), '--scope', 'project'])
                attempted['packages'].append(route['key'])
                claude_command(binary, project, ['install', route['key'], '--scope', 'project'])
        entries = json.loads(claude_command(binary, project, ['list', '--json']))
        require(isinstance(entries, list), 'Unexpected Claude plugin list format')
        for p in bundle['packages']:
            route = routes[p['name']]
            validate_container(bundle, p, route)
            key = route['key']
            match = [e for e in entries if e.get('id') == key and e.get('scope') == 'project'
                     and Path(e.get('projectPath', '')).resolve() == project]
            require(len(match) == 1 and match[0].get('enabled') is True, 'Claude package not enabled at project scope: ' + key)
            require(match[0].get('version') == p['version'], 'Claude installed another version: ' + key)
            installed = Path(match[0].get('installPath', ''))
            require(installed.is_dir() and tree_digest(installed_file_map(installed, file_map(target / p['path']))) == p['sha256'], 'Claude installed package resources differ: ' + key)
        commands = claude_discovery(binary, project)
        required_commands = set(expected_skills)
        require(required_commands <= commands, 'Claude did not discover required skills: ' + ', '.join(sorted(required_commands - commands)))
        outside_commands = claude_discovery(binary, project.parent)
        require(not required_commands & outside_commands, 'Bundle skills gained Claude discovery outside the selected project')
        outside = json.loads(claude_command(binary, project.parent, ['list', '--json']))
        require(not any(e.get('id') in {route['key'] for route in routes.values()} and e.get('enabled') is True for e in outside),
                'Bundle gained Claude activation outside the selected project')
        require(read_optional(user_settings) == user_before, 'Claude changed user activation settings unexpectedly')
        return {'host': 'claude', 'project': str(project), 'bundle_path': str(target), 'packages': bundle['installation_order'], 'skills': sorted(required_commands), 'scope': 'project'}
    except BaseException as error:
        if not verify_only:
            try:
                rollback_claude_settings(settings_path, before, bundle, target, attempted)
            except (ValueError, OSError, RuntimeError) as rollback_error:
                raise RuntimeError(str(error) + '; ' + str(rollback_error) + '; installation failed and remaining project activation requires inspection') from error
        raise


def main(argv=None):
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--project', type=Path, default=Path.cwd())
    parser.add_argument('--host', choices=('codex', 'claude'), default='codex')
    parser.add_argument('--codex-bin', default='codex')
    parser.add_argument('--claude-bin', default='claude')
    parser.add_argument('--check', action='store_true', help='Validate bundle without installing or enabling anything')
    parser.add_argument('--verify', action='store_true', help='Verify an existing project installation without enabling it')
    args = parser.parse_args(argv)
    lexical_source = Path(os.path.abspath(__file__)).parent
    for ancestor in (lexical_source, *lexical_source.parents):
        if ancestor.name == '.skill-shelf':
            reject_snapshot_symlinks(ancestor.parent, lexical_source)
            break
    source = lexical_source.resolve()
    # Invoking a legacy aliased snapshot through its canonical target must not
    # erase its snapshot identity either. Check independently of --project.
    for ancestor in (source, *source.parents):
        alias = ancestor / '.skill-shelf'
        if alias.is_symlink():
            require(not source.is_relative_to(alias.resolve()),
                    f'Refusing symlinked snapshot ancestry: {alias}')
    if args.verify:
        project = args.project.resolve()
        project_settings_path(project, args.host)
        # An installed source is pinned by the receipt adjacent to that source.
        # Never let its unverified marketplace field redirect this first check
        # to a different, intact snapshot before importing source code.
        source_receipt = receipt_path(source)
        if (source.parent.name == '.skill-shelf' or source_receipt.exists()
                or source_receipt.is_symlink()):
            check_snapshot_pin(source)
        preliminary = read_json(source / 'bundle.json')
        target = project / '.skill-shelf' / preliminary['marketplace']['name']
        preflight_snapshot_location(project, target)
        check_snapshot_pin(target)
    bundle = validate_bundle(source)
    if args.check:
        print(json.dumps({'valid': True, 'roots': bundle['roots'], 'packages': bundle['installation_order']}))
        return 0
    project = args.project.resolve()
    require(project.is_dir(), 'Project directory does not exist: ' + str(project))
    binary = args.codex_bin if args.host == 'codex' else args.claude_bin
    require(shutil.which(binary) is not None, args.host + ' executable is unavailable; install the host or supply its binary path')
    operation = install_codex if args.host == 'codex' else install_claude
    result = operation(binary, project, source, bundle, args.verify)
    print(json.dumps(result))
    return 0


if __name__ == '__main__':
    try:
        sys.exit(main())
    except (ValueError, OSError, RuntimeError, TimeoutError, subprocess.SubprocessError, queue.Empty) as exc:
        print('Skill Shelf installation failed: ' + str(exc), file=sys.stderr)
        sys.exit(1)
