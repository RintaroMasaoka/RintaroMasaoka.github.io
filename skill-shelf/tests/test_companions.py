"""Exercise release-time catch-up independently of private stock and deployments."""
import importlib.util
import json
from pathlib import Path
import tempfile
import unittest

SPEC = importlib.util.spec_from_file_location('companion_check', Path(__file__).parents[1] / 'scripts/check_companions.py')
check = importlib.util.module_from_spec(SPEC)
SPEC.loader.exec_module(check)


class CompanionTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.addCleanup(self.tmp.cleanup)
        self.source = Path(self.tmp.name)
        self.package = self.source / 'plugins/sample'
        for host in ('.codex-plugin', '.claude-plugin'):
            path = self.package / host / 'plugin.json'
            path.parent.mkdir(parents=True)
            path.write_text(json.dumps(dict(name='sample', version='1.0.0')))
        self.body = self.package / 'skills/test/SKILL.md'
        self.body.parent.mkdir(parents=True)
        self.body.write_text('AI instructions')
        self.companion = self.source / 'companion/sample'
        self.companion.mkdir(parents=True)
        self.summary = self.companion / 'HUMAN.md'
        self.summary.write_text('# Summary\n\n```mermaid\nflowchart TD\n  a[Author] --> b[Reviewer]\n```\n')
        self.record = dict(schema_version=1, package='sample', version='1.0.0',
                           source_sha256=check.fingerprint(self.package), summary_sha256=check.sha256(self.summary.read_bytes()),
                           reviewed_on='2026-10-19', checks={key: True for key in check.CHECKS})
        self.save()

    def save(self):
        (self.companion / 'review.json').write_text(json.dumps(self.record))

    def test_current_record_passes_without_writes(self):
        before = {p: p.read_bytes() for p in self.source.rglob('*') if p.is_file()}
        self.assertIn('1.0.0', check.check(self.source, 'sample'))
        self.assertEqual(before, {p: p.read_bytes() for p in self.source.rglob('*') if p.is_file()})

    def test_body_and_reference_changes_invalidate_record(self):
        for path in (self.body, self.package / 'new-reference.md'):
            original = path.read_bytes() if path.exists() else None
            path.write_text('Updated source')
            with self.assertRaisesRegex(ValueError, 'stale'):
                check.check(self.source, 'sample')
            if original is None:
                path.unlink()
            else:
                path.write_bytes(original)

    def test_changed_summary_invalidates_record(self):
        self.summary.write_text(self.summary.read_text() + 'Changed role')
        with self.assertRaisesRegex(ValueError, 'stale'):
            check.check(self.source, 'sample')

    def test_missing_review_and_incomplete_visual_check_fail(self):
        for value in (False, 'true', None):
            self.record['checks']['mermaid_rendered'] = value
            self.save()
            with self.assertRaisesRegex(ValueError, 'incomplete'):
                check.check(self.source, 'sample')
        (self.companion / 'review.json').unlink()
        with self.assertRaises(ValueError):
            check.check(self.source, 'sample')

    def test_new_version_requires_new_record(self):
        for host in ('.codex-plugin', '.claude-plugin'):
            (self.package / host / 'plugin.json').write_text(json.dumps(dict(name='sample', version='1.1.0')))
        with self.assertRaisesRegex(ValueError, 'version mismatch'):
            check.check(self.source, 'sample')

    def test_missing_mermaid_not_cured_by_digest(self):
        self.summary.write_text('Summary only')
        self.record['summary_sha256'] = check.sha256(self.summary.read_bytes())
        self.save()
        with self.assertRaisesRegex(ValueError, 'Mermaid'):
            check.check(self.source, 'sample')

    def test_escape_name_rejected(self):
        with self.assertRaisesRegex(ValueError, 'Invalid package'):
            check.check(self.source, '../sample')


if __name__ == '__main__':
    unittest.main()
