"""Accounting invariants, not semantic certification of synthetic claims."""
import copy
import hashlib
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

CHECKER = Path(__file__).resolve().parents[1] / 'scripts' / 'check_ledger.py'


class LedgerTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.source = Path(self.temp.name) / 'source.md'
        self.ledger = Path(self.temp.name) / 'ledger.json'
        self.source.write_text('x = 1\ny = x + 1\n# References\n', encoding='utf-8')
        tasks = {k: dict(question=f'Decision {k}?', status='pass', evidence=f'Witness {k}, source L1–2')
                 for k in ['w1', 'a1', 'r1', 'w2', 'a2', 'r2', 'edge', 'coverage', 'child1', 'child2', 'join']}
        tasks['w2'] = dict(question='Does the composite assertion follow?', status='split',
                           children=['child1', 'child2'], join='join')
        self.data = dict(source_sha256=hashlib.sha256(self.source.read_bytes()).hexdigest(),
                        exclusions=[dict(span=[3, 3], reason='Bibliography heading')],
                        coverage_review='coverage', tasks=tasks, claims={
            'C1': dict(span=[1, 1], text='x=1', kind='equation', requires=[], edges={},
                       checks=dict(warrant='w1', availability='a1', role='r1')),
            'C2': dict(span=[2, 2], text='y=x+1', kind='equation', requires=['C1'], edges={'C1': 'edge'},
                       checks=dict(warrant='w2', availability='a2', role='r2'))})

    def run_case(self, data=None):
        self.ledger.write_text(json.dumps(self.data if data is None else data), encoding='utf-8')
        result = subprocess.run([sys.executable, str(CHECKER), str(self.source), str(self.ledger)],
                                capture_output=True, text=True)
        return result.returncode, json.loads(result.stdout)

    def test_complete_mixed_and_split(self):
        code, report = self.run_case()
        self.assertEqual(code, 0)
        self.assertEqual(report['original_claims'], 2)
        self.assertEqual(report['supported_claims_by_recorded_evidence'], 2)
        self.assertFalse(report['semantic_truth_certified'])
        self.data['tasks']['w1']['status'] = 'gap'
        code, report = self.run_case()
        self.assertEqual(code, 0)
        self.assertEqual(report['gap_tasks'], ['w1'])
        self.assertEqual(report['supported_claims_by_recorded_evidence'], 0)

    def test_unresolved_split(self):
        self.data['tasks']['child1']['status'] = 'unknown'
        code, report = self.run_case()
        self.assertEqual(code, 1)
        self.assertIn('child1', report['unknown_tasks'])
        self.assertIn('C2', report['claims_not_supported'])

    def test_uncovered_content(self):
        self.data['claims']['C2']['span'] = [1, 1]
        code, report = self.run_case()
        self.assertEqual(code, 1)
        self.assertEqual(report['uncovered_nonblank_lines'], [2])

    def test_overlapping_claim_spans_are_valid(self):
        self.data['claims']['C2']['span'] = [1, 2]
        self.assertEqual(self.run_case()[0], 0)

    def test_failed_inventory_review_is_incomplete(self):
        self.data['tasks']['coverage']['status'] = 'gap'
        self.assertEqual(self.run_case()[0], 1)

    def test_invalid_accounting(self):
        mutations = {
            'changed source': lambda d: d.update(source_sha256='stale'),
            'missing root': lambda d: d['claims']['C1']['checks'].pop('warrant'),
            'empty witness': lambda d: d['tasks']['w1'].update(evidence='  '),
            'unknown prerequisite': lambda d: d['claims']['C2'].update(requires=['C9'], edges={'C9': 'edge'}),
            'claim cycle': lambda d: d['claims']['C1'].update(requires=['C2'], edges={'C2': 'join'}),
            'task cycle': lambda d: d['tasks']['w2'].update(children=['w2', 'child1']),
            'absent join': lambda d: d['tasks']['w2'].pop('join'),
            'join reused as child': lambda d: d['tasks']['w2'].update(join='child1'),
            'absent edge': lambda d: d['claims']['C2'].update(edges={}),
            'stale task reference': lambda d: d['claims']['C1']['checks'].update(warrant='missing'),
            'invalid span': lambda d: d['claims']['C1'].update(span=[0, 2]),
            'out of bounds': lambda d: d['claims']['C1'].update(span=[1, 9]),
            'exclusion lacks reason': lambda d: d['exclusions'][0].pop('reason'),
            'exclusion hides claim': lambda d: d['exclusions'][0].update(span=[2, 3]),
            'orphan task': lambda d: d['tasks'].update(orphan=dict(question='?', status='pass', evidence='witness')),
        }
        for name, mutate in mutations.items():
            with self.subTest(name=name):
                data = copy.deepcopy(self.data)
                mutate(data)
                self.assertEqual(self.run_case(data)[0], 2)

    def test_duplicate_json_keys_rejected(self):
        self.ledger.write_text('{"claims": {}, "claims": {}}', encoding='utf-8')
        result = subprocess.run([sys.executable, str(CHECKER), str(self.source), str(self.ledger)], capture_output=True, text=True)
        self.assertEqual(result.returncode, 2)
        self.assertIn('duplicate JSON key', result.stdout)


if __name__ == '__main__':
    unittest.main()
