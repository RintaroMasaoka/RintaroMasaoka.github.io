"""Integrity, dependency closure, config preservation and rollback checks."""
from __future__ import annotations

import copy
import importlib.util
import contextlib
import io
import json
from pathlib import Path
import shutil
import sys
import tempfile
import tomllib
import unittest
from unittest.mock import patch

sys.dont_write_bytecode = True
ROOT = Path(__file__).resolve().parents[1]
spec = importlib.util.spec_from_file_location('shelf_installer', ROOT / 'install.py')
installer = importlib.util.module_from_spec(spec)
spec.loader.exec_module(installer)


def fixture(destination, consumer="consumer", provider_policy=""):
    destination.mkdir(parents=True)
    (destination / 'runtime').mkdir()
    shutil.copyfile(ROOT / 'runtime/skill_dependencies.py', destination / 'runtime/skill_dependencies.py')
    shutil.copyfile(ROOT / 'install.py', destination / 'install.py')
    for name in ('provider', consumer):
        root = destination / 'plugins' / name
        for host in ('codex', 'claude'):
            manifest = root / f'.{host}-plugin/plugin.json'
            manifest.parent.mkdir(parents=True)
            manifest.write_text(json.dumps({'name': name, 'version': '1.0.0', 'skills': './skills/'}))
        skill = root / 'skills' / 'review' / 'SKILL.md'
        skill.parent.mkdir(parents=True)
        skill.write_text('---\nname: review\ndescription: Review reader dependencies.\n---\nReview the supplied explanation.\n' + (provider_policy if name == 'provider' else ''))
        edges = []
        if name == consumer:
            edges = [{'target': 'package:provider', 'kind': 'required', 'version': '>=1.0.0,<2.0.0',
                      'skills': ['review'], 'used_by': ['skills/review/SKILL.md'], 'reason': 'Independent required shared review.'}]
        (root / 'skill-dependencies.json').write_text(json.dumps({'schema_version': 1, 'owner': 'package:' + name, 'dependencies': edges, 'bundled': []}))
    market = 'skill-shelf-fixture-' + consumer
    for host in ('agents/plugins', 'claude-plugin'):
        path = destination / ('.' + host) / 'marketplace.json'
        path.parent.mkdir(parents=True)
        entries = [{'name': n, 'source': './plugins/' + n,
                    'policy': {'installation': 'AVAILABLE', 'authentication': 'ON_INSTALL'}, 'category': 'Productivity'} for n in ('provider', consumer)]
        path.write_text(json.dumps({'name': market, 'owner': {'name': 'Fixture'}, 'plugins': entries}))
    lock = {'schema_version': 1, 'roots': [consumer], 'installation_order': ['provider', consumer],
            'packages': [{'name': n, 'version': '1.0.0', 'path': 'plugins/' + n,
                          'sha256': installer.tree_digest(installer.file_map(destination / 'plugins' / n))} for n in ('provider', consumer)],
            'marketplace': {'name': market, 'paths': ['.agents/plugins/marketplace.json', '.claude-plugin/marketplace.json']},
            'files': installer.file_map(destination)}
    (destination / 'bundle.json').write_text(json.dumps(lock))
    return lock


class InstallerTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory(prefix='shelf-install-test-')
        self.root = Path(self.temp.name)
        self.source = self.root / 'bundle'
        self.lock = fixture(self.source)
        self.project = self.root / 'project'
        self.project.mkdir()

    def tearDown(self):
        self.temp.cleanup()

    def test_required_provider_included_and_resolved(self):
        self.assertEqual(installer.validate_bundle(self.source)['installation_order'], ['provider', 'consumer'])

    def test_tamper_rejected_before_config_write(self):
        (self.source / 'plugins/provider/skills/review/SKILL.md').write_text('changed')
        with self.assertRaisesRegex(ValueError, 'missing, changed, or unlisted'):
            installer.validate_bundle(self.source)
        self.assertFalse((self.project / '.codex/config.toml').exists())

    def test_missing_provider_rejected_even_with_rewritten_inventory(self):
        shutil.rmtree(self.source / 'plugins/provider')
        self.lock['packages'] = self.lock['packages'][1:]
        self.lock['installation_order'] = ['consumer']
        for relative in self.lock['marketplace']['paths']:
            value = json.loads((self.source / relative).read_text())
            value['plugins'] = [p for p in value['plugins'] if p['name'] == 'consumer']
            (self.source / relative).write_text(json.dumps(value))
        self.lock['files'] = installer.file_map(self.source)
        self.lock['files'].pop('bundle.json')
        (self.source / 'bundle.json').write_text(json.dumps(self.lock))
        with self.assertRaisesRegex(ValueError, 'missing target package:provider'):
            installer.validate_bundle(self.source)
        self.assertFalse((self.project / '.codex/config.toml').exists())

    def test_unknown_file_rejected(self):
        (self.source / 'unlisted.txt').write_text('unexpected')
        with self.assertRaises(ValueError):
            installer.validate_bundle(self.source)

    def test_unrelated_config_preserved_and_repeat_is_idempotent(self):
        before = b'# project comment\nmodel = "keep-me"\n[plugins."unrelated@other"]\nenabled = true # retained\n'
        target = self.project / '.skill-shelf' / self.lock['marketplace']['name']
        after = installer.codex_config(before, target, self.lock)
        self.assertTrue(after.startswith(before))
        self.assertEqual(installer.codex_config(after, target, self.lock), after)
        self.assertEqual(tomllib.loads(after.decode())['plugins']['unrelated@other'], {'enabled': True})

    def test_namespace_conflict_fails_without_changing_config(self):
        before = b'[plugins."consumer@previous-bundle"]\nenabled = true\n'
        with self.assertRaisesRegex(ValueError, 'already enabled'):
            installer.codex_config(before, self.source, self.lock)
        self.assertEqual(before, b'[plugins."consumer@previous-bundle"]\nenabled = true\n')

    def test_snapshot_symlink_is_rejected(self):
        target = self.root / 'snapshot-link'
        target.symlink_to(self.source, target_is_directory=True)
        with self.assertRaisesRegex(ValueError, 'symlinked installed snapshot'):
            installer.publish_tree(self.source, target, installer.digest((self.source / 'bundle.json').read_bytes()), is_bundle=True)

    def test_installed_python_cache_does_not_invalidate_pinned_sources(self):
        source = self.root / 'source-package'
        source.mkdir()
        (source / 'helper.py').write_text('print("helper")\n')
        installed = self.root / 'installed-package'
        shutil.copytree(source, installed)
        cache = installed / '__pycache__'
        cache.mkdir()
        (cache / 'helper.cpython-311.pyc').write_bytes(b'derived bytecode')
        files = installer.file_map(source)
        self.assertEqual(installer.installed_file_map(installed, files), files)
        installer.publish_tree(source, installed, installer.tree_digest(files))
        # Unlisted files and bytecode without a pinned source still fail.
        (cache / 'extra.cpython-311.pyc').write_bytes(b'unknown module')
        with self.assertRaisesRegex(ValueError, 'snapshot differs'):
            installer.publish_tree(source, installed, installer.tree_digest(files))

    def test_symlinked_settings_parents_rejected_before_any_host_or_snapshot_write(self):
        for host in ('codex', 'claude'):
            with self.subTest(host=host):
                project = self.root / ('escape-' + host)
                project.mkdir()
                outside = self.root / ('outside-' + host)
                outside.mkdir()
                filename = 'config.toml' if host == 'codex' else 'settings.json'
                content = b'model = "outside"\n' if host == 'codex' else b'{"model":"outside"}\n'
                (outside / filename).write_bytes(content)
                (project / ('.' + host)).symlink_to(outside, target_is_directory=True)
                with patch.object(installer, 'NativeCodex') as codex, patch.object(installer, 'claude_command') as claude:
                    operation = installer.install_codex if host == 'codex' else installer.install_claude
                    with self.assertRaisesRegex(ValueError, 'settings parent escapes'):
                        operation('unused', project, self.source, self.lock)
                    codex.assert_not_called()
                    claude.assert_not_called()
                self.assertEqual((outside / filename).read_bytes(), content)
                self.assertFalse((project / '.skill-shelf').exists())

    def test_symlinked_receipt_rejected_before_host_or_snapshot_write(self):
        target = self.project / '.skill-shelf' / self.lock['marketplace']['name']
        target.parent.mkdir()
        outside = self.root / 'outside-receipt.json'
        outside.write_text('{"outside":"preserve"}')
        installer.receipt_path(target).symlink_to(outside)
        with patch.object(installer, 'NativeCodex') as codex, patch.object(installer, 'claude_command') as claude:
            for operation in (installer.install_codex, installer.install_claude):
                with self.subTest(host=operation.__name__):
                    with self.assertRaisesRegex(ValueError, 'symlinked settings'):
                        operation('unused', self.project, self.source, self.lock)
            codex.assert_not_called()
            claude.assert_not_called()
        self.assertFalse(target.exists())
        self.assertEqual(outside.read_text(), '{"outside":"preserve"}')

    def test_internal_snapshot_directory_alias_rejected_before_installation_changes(self):
        for host in ('codex', 'claude'):
            with self.subTest(host=host):
                project = (self.root / ('internal-alias-' + host)).resolve()
                project.mkdir()
                state = project / 'state'
                state.mkdir()
                (state / 'keep.txt').write_text('unrelated state')
                (project / '.skill-shelf').symlink_to('state', target_is_directory=True)
                settings = project / ('.codex/config.toml' if host == 'codex' else '.claude/settings.json')
                settings.parent.mkdir()
                original = b'model = "keep"\n' if host == 'codex' else b'{"model":"keep"}\n'
                settings.write_bytes(original)
                state_before = installer.file_map(state)
                with patch.object(installer, 'NativeCodex') as codex, patch.object(installer, 'claude_command') as claude, \
                     patch.dict('os.environ', {'CODEX_HOME': str(self.root / 'unused-codex-home'),
                                               'CLAUDE_CONFIG_DIR': str(self.root / 'unused-claude-home')}):
                    operation = installer.install_codex if host == 'codex' else installer.install_claude
                    with self.assertRaisesRegex(ValueError, 'symlinked snapshot ancestry'):
                        operation('unused', project, self.source, self.lock)
                    codex.assert_not_called()
                    claude.assert_not_called()
                self.assertEqual(settings.read_bytes(), original)
                self.assertEqual(installer.file_map(state), state_before)

    def test_main_verify_rejects_lexical_snapshot_alias_before_resolve_or_validator_import(self):
        for host in ('codex', 'claude'):
            with self.subTest(host=host):
                project_a = (self.root / ('alias-source-' + host)).resolve()
                project_b = (self.root / ('alias-selected-' + host)).resolve()
                project_a.mkdir()
                project_b.mkdir()
                state = project_a / 'state'
                state.mkdir()
                (project_a / '.skill-shelf').symlink_to('state', target_is_directory=True)
                source_a = project_a / '.skill-shelf' / self.lock['marketplace']['name']
                target_b = project_b / '.skill-shelf' / self.lock['marketplace']['name']
                shutil.copytree(self.source, source_a)
                shutil.copytree(self.source, target_b)
                installer.write_snapshot_receipt(source_a, self.lock)
                installer.write_snapshot_receipt(target_b, self.lock)
                installer.receipt_path(source_a).unlink()
                marker = self.root / ('aliased-validator-ran-' + host)
                runtime = source_a / 'runtime/skill_dependencies.py'
                runtime.write_text(runtime.read_text() + '\nfrom pathlib import Path\nPath(' + repr(str(marker)) + ').write_text("executed")\n')
                changed = copy.deepcopy(self.lock)
                changed['files'] = installer.file_map(source_a)
                changed['files'].pop('bundle.json')
                (source_a / 'bundle.json').write_text(json.dumps(changed))
                with patch.object(installer, '__file__', str(source_a / 'install.py')), \
                     patch.object(installer, 'install_codex') as codex, patch.object(installer, 'install_claude') as claude:
                    with self.assertRaisesRegex(ValueError, 'symlinked snapshot ancestry'):
                        installer.main(['--host', host, '--project', str(project_b), '--verify'])
                    codex.assert_not_called()
                    claude.assert_not_called()
                self.assertFalse(marker.exists())

    def test_main_verify_rejects_canonical_alias_target_before_import_even_with_marketplace_redirect(self):
        for host in ('codex', 'claude'):
            for redirect in (False, True):
                with self.subTest(host=host, redirect=redirect):
                    project_a = (self.root / ('canonical-source-' + host + '-' + str(redirect))).resolve()
                    project_b = (self.root / ('canonical-selected-' + host + '-' + str(redirect))).resolve()
                    project_a.mkdir()
                    project_b.mkdir()
                    state = project_a / 'state'
                    state.mkdir()
                    (project_a / '.skill-shelf').symlink_to('state', target_is_directory=True)
                    source_a = state / self.lock['marketplace']['name']
                    shutil.copytree(self.source, source_a)
                    installer.write_snapshot_receipt(source_a, self.lock)
                    installer.receipt_path(source_a).unlink()
                    changed = copy.deepcopy(self.lock)
                    if redirect:
                        original_b = self.root / ('canonical-bundle-b-' + host)
                        bundle_b = fixture(original_b, 'consumer-b')
                        target_b = project_b / '.skill-shelf' / bundle_b['marketplace']['name']
                        shutil.copytree(original_b, target_b)
                        installer.write_snapshot_receipt(target_b, bundle_b)
                        changed['marketplace']['name'] = bundle_b['marketplace']['name']
                        for relative in changed['marketplace']['paths']:
                            catalog = json.loads((source_a / relative).read_text())
                            catalog['name'] = bundle_b['marketplace']['name']
                            (source_a / relative).write_text(json.dumps(catalog))
                    else:
                        target_b = project_b / '.skill-shelf' / self.lock['marketplace']['name']
                        shutil.copytree(self.source, target_b)
                        installer.write_snapshot_receipt(target_b, self.lock)
                    marker = self.root / ('canonical-validator-ran-' + host + '-' + str(redirect))
                    runtime = source_a / 'runtime/skill_dependencies.py'
                    runtime.write_text(runtime.read_text() + '\nfrom pathlib import Path\nPath(' + repr(str(marker)) + ').write_text("executed")\n')
                    changed['files'] = installer.file_map(source_a)
                    changed['files'].pop('bundle.json')
                    (source_a / 'bundle.json').write_text(json.dumps(changed))
                    with patch.object(installer, '__file__', str(source_a / 'install.py')), \
                         patch.object(installer, 'install_codex') as codex, patch.object(installer, 'install_claude') as claude:
                        with self.assertRaisesRegex(ValueError, 'symlinked snapshot ancestry'):
                            installer.main(['--host', host, '--project', str(project_b), '--verify'])
                        codex.assert_not_called()
                        claude.assert_not_called()
                    self.assertFalse(marker.exists())

    def test_main_verify_preserves_original_download_outside_an_aliased_snapshot_store(self):
        project_a = self.root / 'normal-download-with-state-alias'
        project_b = (self.root / 'normal-download-selected').resolve()
        project_a.mkdir()
        project_b.mkdir()
        (project_a / 'state').mkdir()
        (project_a / '.skill-shelf').symlink_to('state', target_is_directory=True)
        source = project_a / 'download'
        shutil.copytree(self.source, source)
        target = project_b / '.skill-shelf' / self.lock['marketplace']['name']
        shutil.copytree(self.source, target)
        installer.write_snapshot_receipt(target, self.lock)
        with patch.object(installer, '__file__', str(source / 'install.py')), \
             patch.object(installer.shutil, 'which', return_value='unused'), \
             patch.object(installer, 'install_codex', return_value={'valid': True}) as operation, \
             contextlib.redirect_stdout(io.StringIO()):
            self.assertEqual(installer.main(['--project', str(project_b), '--verify']), 0)
            operation.assert_called_once_with('codex', project_b, source.resolve(), self.lock, True)

    def test_both_hosts_verify_reject_missing_snapshot_entrypoint_before_host_calls(self):
        target = self.project / '.skill-shelf' / self.lock['marketplace']['name']
        shutil.copytree(self.source, target)
        installer.write_snapshot_receipt(target, self.lock)
        (target / 'plugins/provider/skills/review/SKILL.md').unlink()
        with patch.object(installer, 'NativeCodex') as codex, patch.object(installer, 'claude_command') as claude:
            for operation in (installer.install_codex, installer.install_claude):
                with self.subTest(host=operation.__name__):
                    with self.assertRaisesRegex(ValueError, 'missing, changed, or unlisted'):
                        operation('unused', self.project, self.source, self.lock, verify_only=True)
            codex.assert_not_called()
            claude.assert_not_called()

    def test_both_hosts_verify_reject_rehashed_snapshot_even_when_it_is_source(self):
        target = self.project / '.skill-shelf' / self.lock['marketplace']['name']
        shutil.copytree(self.source, target)
        installer.write_snapshot_receipt(target, self.lock)
        skill = target / 'plugins/provider/skills/review/SKILL.md'
        skill.write_text(skill.read_text() + 'Changed provider policy.\n')
        changed = copy.deepcopy(self.lock)
        changed['packages'][0]['sha256'] = installer.tree_digest(installer.file_map(target / 'plugins/provider'))
        changed['files'] = installer.file_map(target)
        changed['files'].pop('bundle.json')
        (target / 'bundle.json').write_text(json.dumps(changed))
        # The internally rehashed snapshot is structurally valid. The separate
        # original installation pin must still reject it, even when source=target.
        self.assertEqual(installer.validate_bundle(target), changed)
        with patch.object(installer, 'NativeCodex') as codex, patch.object(installer, 'claude_command') as claude:
            for operation in (installer.install_codex, installer.install_claude):
                with self.subTest(host=operation.__name__):
                    with self.assertRaisesRegex(ValueError, 'installation receipt'):
                        operation('unused', self.project, target, changed, verify_only=True)
            codex.assert_not_called()
            claude.assert_not_called()
        with self.assertRaisesRegex(ValueError, 'receipt differs'):
            installer.write_snapshot_receipt(target, changed)

    def test_claude_failure_phases_preserve_old_and_concurrent_unrelated_settings(self):
        phases = ('marketplace', 'provider', 'consumer', 'readback-list', 'discovery', 'outside-discovery', 'outside-list')
        for phase in phases:
            for concurrent in (False, True):
                with self.subTest(phase=phase, concurrent=concurrent):
                    project = (self.root / ('claude-' + phase + '-' + str(concurrent))).resolve()
                    project.mkdir()
                    settings = project / '.claude/settings.json'
                    settings.parent.mkdir()
                    old = {'model': 'old-model', 'enabledPlugins': {'old@other': False}}
                    original = (json.dumps(old, indent=2) + '\n').encode()
                    settings.write_bytes(original)
                    market = self.lock['marketplace']['name']
                    routes = installer.package_routes(project, self.lock)
                    state = {'lists': 0, 'discoveries': 0}
                    def fail():
                        if concurrent:
                            value = json.loads(settings.read_text())
                            value['concurrentSetting'] = 'preserve-me'
                            value.setdefault('enabledPlugins', {})['concurrent@other'] = True
                            value.setdefault('extraKnownMarketplaces', {})['concurrent-market'] = {'source': {'source': 'directory', 'path': '/unrelated'}}
                            settings.write_text(json.dumps(value))
                        raise ValueError('failure at ' + phase)
                    def command(_binary, cwd, arguments):
                        if arguments[0] == 'marketplace':
                            value = json.loads(settings.read_text())
                            registered = Path(arguments[2])
                            value.setdefault('extraKnownMarketplaces', {})[registered.name] = {'source': {'source': 'directory', 'path': str(registered)}}
                            settings.write_text(json.dumps(value))
                            if phase == 'marketplace': fail()
                            return ''
                        if arguments[0] == 'install':
                            key = arguments[1]
                            value = json.loads(settings.read_text())
                            value.setdefault('enabledPlugins', {})[key] = True
                            settings.write_text(json.dumps(value))
                            if phase == key.split('@')[0]: fail()
                            return ''
                        state['lists'] += 1
                        if state['lists'] == 1: return '[]'
                        if phase == 'readback-list' and cwd == project: fail()
                        if phase == 'outside-list' and cwd == project.parent: fail()
                        if cwd == project.parent: return '[]'
                        return json.dumps([{'id': routes[p['name']]['key'], 'scope': 'project', 'enabled': True,
                                            'version': p['version'], 'projectPath': str(project),
                                            'installPath': str(self.source / p['path'])} for p in self.lock['packages']])
                    def discovery(_binary, cwd):
                        state['discoveries'] += 1
                        if phase == 'discovery' and cwd == project: fail()
                        if phase == 'outside-discovery' and cwd == project.parent: fail()
                        return {'provider:review', 'consumer:review'} if cwd == project else set()
                    with patch.object(installer, 'claude_command', side_effect=command), patch.object(installer, 'claude_discovery', side_effect=discovery), \
                         patch.dict('os.environ', {'CLAUDE_CONFIG_DIR': str(self.root / 'unused-claude-home')}):
                        with self.assertRaisesRegex(ValueError, 'failure at ' + phase):
                            installer.install_claude('unused', project, self.source, self.lock)
                    if concurrent:
                        actual = json.loads(settings.read_text())
                        expected = copy.deepcopy(old)
                        expected['concurrentSetting'] = 'preserve-me'
                        expected['enabledPlugins']['concurrent@other'] = True
                        expected['extraKnownMarketplaces'] = {'concurrent-market': {'source': {'source': 'directory', 'path': '/unrelated'}}}
                        self.assertEqual(actual, expected)
                    else:
                        self.assertEqual(settings.read_bytes(), original)

    def test_claude_unsafe_owned_rollback_is_reported_and_not_overwritten(self):
        settings = self.project / '.claude/settings.json'
        settings.parent.mkdir()
        original = b'{"model":"old"}\n'
        settings.write_bytes(original)
        market = self.lock['marketplace']['name']
        value = {'model': 'old', 'unrelated': 'keep', 'enabledPlugins': {'provider@' + market: False},
                 'extraKnownMarketplaces': {market: {'source': {'source': 'directory', 'path': str(self.project / '.skill-shelf' / market)}}}}
        settings.write_text(json.dumps(value))
        with self.assertRaisesRegex(ValueError, 'Scoped rollback incomplete'):
            installer.rollback_claude_settings(settings, original, self.lock, self.project / '.skill-shelf' / market,
                                               {'packages': ['provider@' + market], 'marketplaces': {market: self.project / '.skill-shelf' / market}})
        after = json.loads(settings.read_text())
        self.assertEqual(after['enabledPlugins']['provider@' + market], False)
        self.assertEqual(after['unrelated'], 'keep')
        self.assertNotIn('extraKnownMarketplaces', after)

    def test_codex_failure_removes_owned_activation_and_preserves_concurrent_settings(self):
        config = self.project / '.codex/config.toml'
        config.parent.mkdir()
        config.write_text('model = "preserved"\n')
        class Native:
            def __init__(self, *_): pass
            def __enter__(self): return self
            def __exit__(self, *_): pass
            def call(self, *_): return {'config': {}}
        def fail(*_):
            config.write_text(config.read_text() + '\n[unrelated]\nkeep = true\n')
            raise ValueError('readback failed')
        with patch.object(installer, 'NativeCodex', Native), patch.object(installer, 'codex_verify', side_effect=fail), \
             patch.dict('os.environ', {'CODEX_HOME': str(self.root / 'isolated-codex')}):
            with self.assertRaisesRegex(ValueError, 'readback failed'):
                installer.install_codex('unused', self.project, self.source, self.lock)
        actual = tomllib.loads(config.read_text())
        self.assertTrue(actual['unrelated']['keep'])
        self.assertEqual(actual['model'], 'preserved')
        self.assertNotIn('plugins', actual)
        self.assertNotIn('marketplaces', actual)

    def test_codex_owned_delta_rollback_restores_disabled_entries_and_preserves_new_fields(self):
        project = self.project.resolve()
        routes = installer.package_routes(project, self.lock)
        config = project / '.codex/config.toml'
        config.parent.mkdir()
        provider = routes['provider']['key']
        original = ('# original comment\nmodel = "keep"\n[plugins.' + json.dumps(provider) + ']\n'
                    'enabled = false # original disabled value\npolicy = "retained"\n').encode()
        expected = installer.codex_config(original, project / '.skill-shelf' / self.lock['marketplace']['name'], self.lock)
        concurrent = expected.replace(b'enabled = true # original disabled value',
                                      b'enabled = true # original disabled value\nnewField = "concurrent"')
        concurrent += b'\n[plugins."unrelated@other"]\nenabled = true\n[unrelated]\nkeep = true\n'
        config.write_bytes(concurrent)
        installer.rollback_codex_settings(config, original, expected)
        actual = tomllib.loads(config.read_text())
        self.assertEqual(actual, {'model': 'keep', 'plugins': {
            provider: {'enabled': False, 'policy': 'retained', 'newField': 'concurrent'},
            'unrelated@other': {'enabled': True}}, 'unrelated': {'keep': True}})
        self.assertIn(b'# original comment', config.read_bytes())
        self.assertIn(b'enabled = false # original disabled value', config.read_bytes())

    def test_codex_unsafe_owned_rollback_preserves_changed_leaf_and_cleans_other_owned_entries(self):
        project = self.project.resolve()
        config = project / '.codex/config.toml'
        config.parent.mkdir()
        original = b'model = "keep"\n'
        expected = installer.codex_config(original, project / '.skill-shelf' / self.lock['marketplace']['name'], self.lock)
        concurrent = expected.replace(b'enabled = true', b'enabled = false', 1) + b'\n[unrelated]\nkeep = true\n'
        config.write_bytes(concurrent)
        with self.assertRaisesRegex(ValueError, 'Scoped rollback incomplete.*owned project settings'):
            installer.rollback_codex_settings(config, original, expected)
        routes = installer.package_routes(project, self.lock)
        actual = tomllib.loads(config.read_text())
        self.assertEqual(actual, {'model': 'keep', 'plugins': {routes['provider']['key']: {'enabled': False}},
                                  'unrelated': {'keep': True}})

    def test_codex_native_project_discovery_accepts_user_level_uninstalled_summary(self):
        project = self.project.resolve()
        target = project / '.skill-shelf' / self.lock['marketplace']['name']
        shutil.copytree(self.source, target)
        installer.write_snapshot_receipt(target, self.lock)
        routes = installer.package_routes(project, self.lock)
        cache = self.root / 'isolated-cache'
        records = []
        for package in self.lock['packages']:
            route = routes[package['name']]
            installer.publish_container(target, self.lock, package, route)
            root = cache / route['market'] / package['name'] / package['version']
            shutil.copytree(target / package['path'], root)
            records.append({'name': package['name'] + ':review', 'enabled': True, 'pluginId': route['key'],
                            'path': str(root / 'skills/review/SKILL.md')})
        class Native:
            def __init__(self, *_): pass
            def __enter__(self): return self
            def __exit__(self, *_): pass
            def call(self, method, params):
                if method == 'config/read':
                    return {'config': {'plugins': {r['key']: {'enabled': True} for r in routes.values()}}}
                if method == 'skills/list':
                    return {'data': [{'skills': records if params['cwds'] == [str(project)] else []}]}
                if method == 'plugin/read':
                    return {'plugin': {'summary': {'installed': False, 'enabled': False, 'localVersion': '1.0.0'}}}
                raise AssertionError(method)
        with patch.object(installer, 'NativeCodex', Native):
            result = installer.codex_verify('unused', project, target, self.lock, cache)
        self.assertEqual(result['skills'], ['consumer:review', 'provider:review'])
        records[0]['path'] = str(self.source / 'plugins/provider/skills/review/SKILL.md')
        with patch.object(installer, 'NativeCodex', Native):
            with self.assertRaisesRegex(ValueError, 'loaded another package version'):
                installer.codex_verify('unused', project, target, self.lock, cache)

    def test_main_verify_pins_its_own_source_before_marketplace_selection_or_import(self):
        for host in ('codex', 'claude'):
            for attack in ('redirect-validator', 'valid-substitution', 'missing-receipt-other-project'):
                with self.subTest(host=host, attack=attack):
                    project = (self.root / ('main-' + host + '-' + attack)).resolve()
                    project.mkdir()
                    source_a = project / '.skill-shelf' / self.lock['marketplace']['name']
                    shutil.copytree(self.source, source_a)
                    installer.write_snapshot_receipt(source_a, self.lock)
                    bundle_b = fixture(self.root / ('bundle-b-' + host + '-' + attack), 'consumer-b')
                    source_b = project / '.skill-shelf' / bundle_b['marketplace']['name']
                    shutil.copytree(self.root / ('bundle-b-' + host + '-' + attack), source_b)
                    installer.write_snapshot_receipt(source_b, bundle_b)
                    marker = self.root / ('validator-ran-' + host + '-' + attack)
                    selected_project = project
                    if attack == 'valid-substitution':
                        shutil.rmtree(source_a)
                        shutil.copytree(source_b, source_a)
                    elif attack == 'redirect-validator':
                        changed = copy.deepcopy(self.lock)
                        changed['marketplace']['name'] = bundle_b['marketplace']['name']
                        for relative in changed['marketplace']['paths']:
                            catalog = json.loads((source_a / relative).read_text())
                            catalog['name'] = bundle_b['marketplace']['name']
                            (source_a / relative).write_text(json.dumps(catalog))
                        runtime = source_a / 'runtime/skill_dependencies.py'
                        runtime.write_text(runtime.read_text() + '\nfrom pathlib import Path\nPath(' + repr(str(marker)) + ').write_text("executed")\n')
                        changed['files'] = installer.file_map(source_a)
                        changed['files'].pop('bundle.json')
                        (source_a / 'bundle.json').write_text(json.dumps(changed))
                    else:
                        installer.receipt_path(source_a).unlink()
                        selected_project = self.root / ('other-main-' + host)
                        selected_project.mkdir()
                        other_target = selected_project / '.skill-shelf' / self.lock['marketplace']['name']
                        shutil.copytree(self.source, other_target)
                        installer.write_snapshot_receipt(other_target, self.lock)
                    with patch.object(installer, '__file__', str(source_a / 'install.py')), \
                         patch.object(installer, 'install_codex') as codex, patch.object(installer, 'install_claude') as claude:
                        with self.assertRaisesRegex(ValueError, 'snapshot receipt is missing|installation receipt'):
                            installer.main(['--host', host, '--project', str(selected_project), '--verify'])
                        codex.assert_not_called()
                        claude.assert_not_called()
                    self.assertFalse(marker.exists())

    def test_main_verify_accepts_original_download_and_intact_snapshot_for_other_project(self):
        for source in (self.source, self.project / '.skill-shelf' / self.lock['marketplace']['name']):
            if source != self.source:
                shutil.copytree(self.source, source)
                installer.write_snapshot_receipt(source, self.lock)
            selected = (self.root / ('verify-' + source.name)).resolve()
            selected.mkdir()
            target = selected / '.skill-shelf' / self.lock['marketplace']['name']
            shutil.copytree(self.source, target)
            installer.write_snapshot_receipt(target, self.lock)
            with patch.object(installer, '__file__', str(source / 'install.py')), \
                 patch.object(installer.shutil, 'which', return_value='unused'), \
                 patch.object(installer, 'install_codex', return_value={'valid': True}) as operation, \
                 contextlib.redirect_stdout(io.StringIO()):
                self.assertEqual(installer.main(['--project', str(selected), '--verify']), 0)
                operation.assert_called_once_with('codex', selected, source.resolve(), self.lock, True)

    def test_two_bundles_reuse_one_owned_provider_container_and_namespace(self):
        source_a, source_b = self.root / 'bundle-a', self.root / 'bundle-b'
        bundle_a, bundle_b = fixture(source_a, 'consumer-a'), fixture(source_b, 'consumer-b')
        routes_a = installer.package_routes(self.project.resolve(), bundle_a)
        routes_b = installer.package_routes(self.project.resolve(), bundle_b)
        self.assertEqual(routes_a['provider'], routes_b['provider'])
        first = installer.codex_config(None, self.project / '.skill-shelf' / bundle_a['marketplace']['name'], bundle_a)
        second = installer.codex_config(first, self.project / '.skill-shelf' / bundle_b['marketplace']['name'], bundle_b)
        settings = tomllib.loads(second.decode())
        enabled = [key for key, value in settings['plugins'].items() if value['enabled']]
        self.assertEqual(len([key for key in enabled if key.startswith('provider@')]), 1)
        self.assertIn(routes_a['consumer-a']['key'], enabled)
        self.assertIn(routes_b['consumer-b']['key'], enabled)
        for package in bundle_a['packages']:
            installer.publish_container(source_a, bundle_a, package, routes_a[package['name']])
        provider_before = installer.file_map(routes_a['provider']['path'])
        for package in bundle_b['packages']:
            installer.publish_container(source_b, bundle_b, package, routes_b[package['name']])
        self.assertEqual(installer.file_map(routes_b['provider']['path']), provider_before)
        shutil.rmtree(source_a)
        installer.validate_container(bundle_b, bundle_b['packages'][0], routes_b['provider'])

    def test_incompatible_owned_provider_refuses_before_publication_or_activation(self):
        bundle_a = fixture(self.root / 'bundle-a', 'consumer-a')
        bundle_b = fixture(self.root / 'bundle-b', 'consumer-b', 'Changed incompatible shared provider.\n')
        target_a = self.project / '.skill-shelf' / bundle_a['marketplace']['name']
        existing = installer.codex_config(None, target_a, bundle_a)
        settings = self.project / '.codex/config.toml'
        settings.parent.mkdir()
        settings.write_bytes(existing)
        parsed = tomllib.loads(existing.decode())
        class Native:
            def __init__(self, *_): pass
            def __enter__(self): return self
            def __exit__(self, *_): pass
            def call(self, *_): return {'config': parsed}
        with patch.object(installer, 'NativeCodex', Native), patch.object(installer, 'publish_tree') as publish, \
             patch.dict('os.environ', {'CODEX_HOME': str(self.root / 'isolated-codex')}):
            with self.assertRaisesRegex(ValueError, 'already enabled'):
                installer.install_codex('unused', self.project, self.root / 'bundle-b', bundle_b)
            publish.assert_not_called()
        self.assertEqual(settings.read_bytes(), existing)
        self.assertFalse((self.project / '.skill-shelf' / bundle_b['marketplace']['name']).exists())
        routes_a = installer.package_routes(self.project.resolve(), bundle_a)
        entries = [{'id': routes_a['provider']['key'], 'enabled': True, 'scope': 'project'}]
        with patch.object(installer, 'claude_command', return_value=json.dumps(entries)) as native, patch.object(installer, 'publish_tree') as publish:
            with self.assertRaisesRegex(ValueError, 'already enabled'):
                installer.install_claude('unused', self.project, self.root / 'bundle-b', bundle_b)
            publish.assert_not_called()
            self.assertEqual(native.call_count, 1)
        self.assertFalse((self.project / '.claude/settings.json').exists())

    def test_failed_native_readback_restores_project_config(self):
        config = self.project / '.codex/config.toml'
        config.parent.mkdir()
        original = b'model = "preserved"\n'
        config.write_bytes(original)
        class Native:
            def __init__(self, *_): pass
            def __enter__(self): return self
            def __exit__(self, *_): pass
            def call(self, *_): return {'config': {}}
        with patch.object(installer, 'NativeCodex', Native), patch.object(installer, 'codex_verify', side_effect=ValueError('readback failed')), \
             patch.dict('os.environ', {'CODEX_HOME': str(self.root / 'isolated-codex')}):
            with self.assertRaisesRegex(ValueError, 'readback failed'):
                installer.install_codex('unused', self.project, self.source, self.lock)
        self.assertEqual(config.read_bytes(), original)


if __name__ == '__main__':
    unittest.main()
