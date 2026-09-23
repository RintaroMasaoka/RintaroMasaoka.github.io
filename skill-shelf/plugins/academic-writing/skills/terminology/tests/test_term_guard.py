import json
from pathlib import Path
import re
import sqlite3
import subprocess
import sys
import tempfile
import unittest
import urllib.error
import urllib.request


SKILL = Path(__file__).resolve().parents[1]
SCRIPT = SKILL / "scripts" / "term_guard.py"


class TermGuardTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.root = Path(self.temp.name)
        self.db = self.root / "terms.sqlite3"
        self.source = self.root / "paper.tex"

    def tearDown(self):
        self.temp.cleanup()

    def cli(self, *args, expected=None, stdin=None):
        command = [sys.executable, str(SCRIPT), "--db", str(self.db), "--json", *args]
        result = subprocess.run(command, input=stdin, text=True, capture_output=True, timeout=10)
        if expected is not None:
            self.assertEqual(result.returncode, expected, result.stderr or result.stdout)
        return result, json.loads(result.stdout)

    def start_gui(self):
        process = subprocess.Popen(
            [sys.executable, str(SCRIPT), "--db", str(self.db), "serve", "--port", "0"],
            text=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE,
        )
        assert process.stdout is not None
        url = process.stdout.readline().strip()
        self.assertTrue(url.startswith("http://127.0.0.1:"), url)
        return process, url

    def stop_gui(self, process):
        process.terminate()
        try:
            process.wait(timeout=3)
        except subprocess.TimeoutExpired:
            process.kill()
        if process.stdout:
            process.stdout.close()
        if process.stderr:
            process.stderr.close()

    @staticmethod
    def post(url, token, payload):
        request = urllib.request.Request(
            url + "api/decide", data=json.dumps(payload).encode(), method="POST",
            headers={"Content-Type": "application/json", "X-Term-CSRF": token},
        )
        with urllib.request.urlopen(request, timeout=3) as response:
            return json.load(response)

    def seed(self, text):
        self.source.write_text(text, encoding="utf-8")
        self.cli("scan", str(self.source), expected=0)

    def test_extraction_is_deterministic_and_rescan_preserves_ai_policy(self):
        self.seed(
            "This paper explains ordinary methods.\n"
            "We use MPS in a state-space calculation.\n"
            "We call this construction the \"flux cabinet\".\n"
            "The Hamiltonian is local. The Hamiltonian is bounded.\n"
        )
        _, rows = self.cli("queue", "--all", expected=0)
        self.assertEqual(
            {row["term_key"] for row in rows},
            {"mps", "state-space", "flux cabinet", "hamiltonian"},
        )
        self.cli("propose", "MPS", "--usage-policy", "as_is", expected=0)
        second = self.cli("scan", str(self.source), expected=0)[1]
        self.assertEqual(second["new_terms"], 0)
        _, rescanned = self.cli("queue", "--all", expected=0)
        mps = next(row for row in rescanned if row["term_key"] == "mps")
        self.assertEqual(mps["usage_policy"], "as_is")
        self.assertEqual(mps["authorization"], "ai_authorized")

    def test_ai_batch_human_confirmation_and_deferral_preserve_provenance(self):
        self.seed("We use MPS and XRN.\n")
        batch = [
            {"term": "MPS", "usage_policy": "as_is"},
            {"term": "XRN", "usage_policy": "forbidden"},
        ]
        _, proposed = self.cli("propose-batch", "-", expected=0, stdin=json.dumps(batch))
        self.assertEqual({row["authorization"] for row in proposed}, {"ai_authorized"})
        _, blocked = self.cli("check", expected=1)
        self.assertIn("human_authorization_required", {x["reason"] for x in blocked["findings"]})

        process, url = self.start_gui()
        try:
            with urllib.request.urlopen(url, timeout=3) as response:
                page = response.read().decode()
            token = json.loads(re.search(r"const csrf=(\"[^\"]+\")", page).group(1))
            confirmed = self.post(url, token, {"term": "MPS", "usage_policy": "brief_intro"})
            self.assertEqual(confirmed["authorization"], "human_authorized")
            self.assertEqual(confirmed["usage_policy"], "brief_intro")
            deferred = self.post(url, token, {"term": "XRN", "action": "defer"})
            self.assertEqual(deferred["authorization"], "ai_authorized")
            self.assertEqual(deferred["deferred"], 1)
            _, rows = self.cli("queue", "--all", expected=0)
            self.assertEqual({row["term_key"] for row in rows}, {"mps", "xrn"})
            _, gate = self.cli("check", expected=1)
            self.assertIn("human_review_deferred", {x["reason"] for x in gate["findings"]})
        finally:
            self.stop_gui(process)

    def test_gate_implements_the_four_admission_policies(self):
        self.seed(
            "MPS is used directly.\n"
            "We call the short explanation XRN.\n"
            "We define QZP as the exact project object.\n"
            "The FBD label remains.\n"
        )
        process, url = self.start_gui()
        try:
            with urllib.request.urlopen(url, timeout=3) as response:
                page = response.read().decode()
            token = json.loads(re.search(r"const csrf=(\"[^\"]+\")", page).group(1))
            self.post(url, token, {"term": "MPS", "usage_policy": "as_is"})
            self.post(url, token, {"term": "XRN", "usage_policy": "brief_intro"})
            self.post(url, token, {"term": "QZP", "usage_policy": "full_definition"})
            self.post(url, token, {"term": "FBD", "usage_policy": "forbidden"})
            _, gate = self.cli("check", expected=1)
            findings = {item["term"]: item["reason"] for item in gate["findings"]}
            self.assertEqual(findings, {"FBD": "forbidden_term_present"})
        finally:
            self.stop_gui(process)

    def test_schema_v2_migration_uses_reviewed_golden_mapping(self):
        conn = sqlite3.connect(self.db)
        conn.executescript(
            """
            CREATE TABLE meta (key TEXT PRIMARY KEY, value TEXT NOT NULL);
            INSERT INTO meta VALUES ('schema_version','2');
            CREATE TABLE terms (
              term_key TEXT PRIMARY KEY, display TEXT NOT NULL, category TEXT NOT NULL,
              authorization TEXT NOT NULL, definition TEXT NOT NULL, rationale TEXT NOT NULL,
              standing TEXT NOT NULL, reader_policy TEXT NOT NULL, evidence TEXT NOT NULL,
              detector TEXT NOT NULL, created_at TEXT NOT NULL, updated_at TEXT NOT NULL
            );
            CREATE TABLE documents (path TEXT PRIMARY KEY, content_hash TEXT NOT NULL, scanned_at TEXT NOT NULL);
            CREATE TABLE occurrences (
              path TEXT NOT NULL, line INTEGER NOT NULL, column_no INTEGER NOT NULL,
              term_key TEXT NOT NULL, surface TEXT NOT NULL, detector TEXT NOT NULL,
              context TEXT NOT NULL, PRIMARY KEY(path,line,column_no,term_key,detector)
            );
            INSERT INTO terms VALUES
              ('a','A','reader_known','human_authorized','d-a','r-a','field_standard','assume_known','e-a','acronym','t0','t1'),
              ('b','B','define','ai_authorized','d-b','r-b','source_specific','introduce','e-b','acronym','t0','t1'),
              ('c','C','project_term','ai_authorized','d-c','r-c','project_coined','define','e-c','acronym','t0','t1'),
              ('d','D','avoid','ai_authorized','d-d','r-d','suspect','replace','e-d','acronym','t0','t1'),
              ('e','E','review','none','d-e','r-e','unreviewed','undecided','e-e','acronym','t0','t1');
            INSERT INTO occurrences VALUES ('paper.tex',1,1,'a','A','acronym','A context');
            INSERT INTO occurrences VALUES ('paper.tex',2,1,'b','B','acronym','B context');
            INSERT INTO occurrences VALUES ('paper.tex',3,1,'c','C','acronym','C context');
            INSERT INTO occurrences VALUES ('paper.tex',4,1,'d','D','acronym','D context');
            INSERT INTO occurrences VALUES ('paper.tex',5,1,'e','E','acronym','E context');
            """
        )
        conn.commit()
        conn.close()
        _, rows = self.cli("queue", "--all", expected=0)
        mapped = {row["term_key"]: row for row in rows}
        self.assertEqual(
            {key: row["usage_policy"] for key, row in mapped.items()},
            {"a": "as_is", "b": "brief_intro", "c": "full_definition", "d": "forbidden", "e": "undecided"},
        )
        self.assertEqual(mapped["a"]["authorization"], "human_authorized")
        self.assertEqual(mapped["c"]["definition"], "d-c")
        self.assertEqual(mapped["c"]["rationale"], "r-c")
        self.assertEqual(mapped["c"]["evidence"], "e-c")
        self.assertEqual(mapped["c"]["occurrence_count"], 1)

    def test_gui_is_dense_english_list_not_an_authoring_form(self):
        self.seed("We use MPS, XRN, QZP, and FBD.\n")
        for term, policy in (("MPS", "as_is"), ("XRN", "brief_intro"),
                             ("QZP", "full_definition"), ("FBD", "forbidden")):
            self.cli("propose", term, "--usage-policy", policy, expected=0)
        process, url = self.start_gui()
        try:
            with urllib.request.urlopen(url, timeout=3) as response:
                page = response.read().decode()
            for visible in ("Term review", "All", "Pending", "Use directly", "Explain once",
                            "Define explicitly", "Remove term", "Reader already knows it",
                            "A phrase or sentence is enough", "The exact meaning must be fixed",
                            "It must not appear", "Deferred", "Enter", "Space", "J K"):
                self.assertIn(visible, page)
            self.assertIn("let terms=[],view='all',activeKey=null", page)
            self.assertIn("['as_is','Use directly — reader already knows it','1']", page)
            self.assertIn("['brief_intro','Explain once — a phrase or sentence is enough','2']", page)
            self.assertIn("['full_definition','Define explicitly — the exact meaning must be fixed','3']", page)
            self.assertIn("['forbidden','Remove term — it must not appear','4']", page)
            self.assertEqual(page.count("data-policy=\"${id}\""), 1)
            self.assertIn('aria-label="${label}">${key}</button>', page)
            self.assertIn("['arrowdown','arrowup','j','k']", page)
            self.assertIn("decide(active(),policies[Number(event.key)-1][0])", page)
            self.assertIn("defer(active())", page)
            self.assertIn('class="row ${t.term_key===activeKey', page)
            self.assertIsNone(re.search(r"[\u3040-\u30ff\u3400-\u9fff]", page))
            for removed in ("textarea", "term-card", "overlay", "Evidence", "Rationale",
                            "Lexical standing", "Reader treatment"):
                self.assertNotIn(removed, page)
        finally:
            self.stop_gui(process)


if __name__ == "__main__":
    unittest.main()
