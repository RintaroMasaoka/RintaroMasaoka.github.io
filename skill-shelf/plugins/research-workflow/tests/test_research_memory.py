import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

SCRIPT = Path(__file__).parents[1] / "scripts" / "research_memory.py"


class ResearchMemoryTests(unittest.TestCase):
    def setUp(self):
        self.tmp = tempfile.TemporaryDirectory()
        self.root = Path(self.tmp.name)
        (self.root / "draft.md").write_text("claim v1")
        (self.root / "evidence.txt").write_text("evidence v1")

    def tearDown(self):
        self.tmp.cleanup()

    def cli(self, *args):
        return subprocess.run([sys.executable, str(SCRIPT), "--project-root", str(self.root), *args],
                              text=True, capture_output=True)

    def input_file(self, data):
        path = self.root / "input.json"
        path.write_text(json.dumps(data))
        return str(path)

    def test_init_preserves_existing_focus_and_only_creates_focus(self):
        research = self.root / "research"
        research.mkdir()
        focus = research / "focus.md"
        focus.write_text("keep exactly\n")
        self.assertEqual(self.cli("init").returncode, 0)
        self.assertEqual(focus.read_text(), "keep exactly\n")
        self.assertIn("keep exactly", focus.read_text())
        (research / "focus.md").unlink()
        self.assertEqual(self.cli("init").returncode, 0)
        self.assertEqual((research / "focus.md").read_text(), "# Focus\n\n")

    def test_record_attempt_status_and_staleness(self):
        data = {"claim_id": "c1", "target": "draft.md", "method": "numerical", "scope": "bounded check",
                "outcome": "inconclusive", "evidence": ["evidence.txt"], "source_revision": "rev-4",
                "command": "python check.py", "tool_version": "Python 3.x"}
        res = self.cli("record", "--input", self.input_file(data))
        self.assertEqual(res.returncode, 0, res.stderr)
        row = json.loads(res.stdout)
        self.assertEqual(row["method"], "numerical")
        self.assertNotIn("proof", row)
        (self.root / "draft.md").write_text("claim v2")
        (self.root / "evidence.txt").write_text("changed")
        for method in ("numerical", "analytic"):
            attempt = {"question_id": "q", "method": method, "result": "no new distinction",
                       "information_gain": False, "witness": "same unresolved case"}
            self.assertEqual(self.cli("attempt", "--input", self.input_file(attempt)).returncode, 0)
        report = json.loads(self.cli("status").stdout)
        self.assertEqual(report["record_count"], 1)
        self.assertTrue(report["stale"])
        self.assertEqual(report["failed_or_inconclusive"][0]["outcome"], "inconclusive")
        self.assertIn("Historical records", report["failed_or_inconclusive_note"])
        reasons = report["stale"][0]["reasons"]
        self.assertIn("target_changed", reasons)
        self.assertIn("evidence_changed:evidence.txt", reasons)
        self.assertEqual(report["attempts_by_question"][0]["question_id"], "q")
        self.assertEqual(report["attempts_by_question"][0]["count"], 2)
        self.assertEqual(report["attempts_by_question"][0]["latest"]["method"], "analytic")
        self.assertNotIn("reassessment_required", report)
        self.assertIn("cannot decide scientific progress or continuation", report["warning"])

    def test_attempt_accepts_unknown_assessment_and_legacy_repetition_is_not_decision(self):
        modern = {"question_id": "q2", "method": "analytic", "result": "unclear", "witness": "case A",
                  "baseline": "prior derivation", "assessment": "unknown"}
        result = self.cli("attempt", "--input", self.input_file(modern))
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(json.loads(result.stdout)["assessment"], "unknown")

        legacy = {"question_id": "q1", "method": "source", "result": "same", "witness": "case B",
                  "information_gain": False}
        for _ in range(4):
            result = self.cli("attempt", "--input", self.input_file(legacy))
            self.assertEqual(result.returncode, 0, result.stderr)
        report = json.loads(self.cli("status").stdout)
        self.assertEqual([item["question_id"] for item in report["attempts_by_question"]], ["q1", "q2"])
        self.assertEqual(report["attempts_by_question"][0]["count"], 4)
        self.assertFalse(report["attempts_by_question"][0]["latest"]["information_gain"])
        self.assertNotIn("reassessment_required", report)

    def test_attempt_rejects_partial_or_empty_baseline_assessment(self):
        base = {"question_id": "q", "method": "analytic", "result": "r", "witness": "w"}
        for extra in ({"baseline": "prior"}, {"assessment": "unknown"},
                      {"baseline": " ", "assessment": "unknown"},
                      {"baseline": "prior", "assessment": " "}):
            result = self.cli("attempt", "--input", self.input_file(dict(base, **extra)))
            self.assertNotEqual(result.returncode, 0, extra)

    def test_legacy_attempt_ledger_is_read_without_migration(self):
        research = self.root / "research"
        research.mkdir()
        original = '{"question_id":"legacy","method":"old","result":"kept","witness":"w","information_gain":false}\n'
        ledger = research / "attempts.jsonl"
        ledger.write_text(original)
        report = json.loads(self.cli("status").stdout)
        self.assertEqual(ledger.read_text(), original)
        self.assertEqual(report["attempts_by_question"][0]["latest"]["result"], "kept")

    def test_path_escape_rejected(self):
        outside = Path(self.tmp.name).parent / (Path(self.tmp.name).name + "_outside")
        outside.write_text("outside")
        (self.root / "escape").symlink_to(outside)
        data = {"claim_id": "c", "target": "draft.md", "method": "source", "scope": "s",
                "outcome": "pass", "evidence": ["escape"]}
        result = self.cli("record", "--input", self.input_file(data))
        self.assertNotEqual(result.returncode, 0)
        outside.unlink()

    def test_symlinked_research_directory_and_ledger_cannot_write_outside(self):
        outside = Path(self.tmp.name).parent / (Path(self.tmp.name).name + "_outside_dir")
        outside.mkdir()
        (self.root / "research").symlink_to(outside, target_is_directory=True)
        data = {"claim_id": "c", "target": "draft.md", "method": "analytic", "scope": "s",
                "outcome": "pass", "evidence": ["evidence.txt"]}
        result = self.cli("record", "--input", self.input_file(data))
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(list(outside.iterdir()), [])
        (self.root / "research").unlink()
        (self.root / "research").mkdir()
        sentinel = outside / "ledger.jsonl"
        sentinel.write_text("preserve")
        (self.root / "research" / "verification.jsonl").symlink_to(sentinel)
        result = self.cli("record", "--input", self.input_file(data))
        self.assertNotEqual(result.returncode, 0)
        self.assertEqual(sentinel.read_text(), "preserve")
        import shutil
        shutil.rmtree(outside)

    def test_method_specific_metadata_required(self):
        base = {"claim_id": "c", "target": "draft.md", "scope": "s", "outcome": "pass", "evidence": ["evidence.txt"]}
        for method in ("ai_check", "numerical", "formal", "symbolic"):
            data = dict(base, method=method)
            result = self.cli("record", "--input", self.input_file(data))
            self.assertNotEqual(result.returncode, 0, method)
        ai = dict(base, method="ai_check", model="small", independence="fresh reviewer")
        self.assertEqual(self.cli("record", "--input", self.input_file(ai)).returncode, 0)
        numeric = dict(base, method="numerical", command="python calc.py", tool_version="Python 3.x",
                       limitations="finite precision")
        result = self.cli("record", "--input", self.input_file(numeric))
        self.assertEqual(result.returncode, 0, result.stderr)
        self.assertEqual(json.loads(result.stdout)["limitations"], "finite precision")

    def test_missing_evidence_is_stale(self):
        data = {"claim_id": "c", "target": "draft.md", "method": "analytic", "scope": "s",
                "outcome": "pass", "evidence": ["evidence.txt"]}
        self.assertEqual(self.cli("record", "--input", self.input_file(data)).returncode, 0)
        (self.root / "evidence.txt").unlink()
        report = json.loads(self.cli("status").stdout)
        self.assertIn("evidence_missing_or_unavailable:evidence.txt", report["stale"][0]["reasons"])

    def test_status_does_not_treat_record_count_as_progress(self):
        self.assertEqual(json.loads(self.cli("status").stdout)["record_count"], 0)
        self.assertIn("cannot decide scientific progress or continuation", json.loads(self.cli("status").stdout)["warning"])


if __name__ == "__main__":
    unittest.main()
