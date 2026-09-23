"""Observable exposure and fidelity, not certification of agent reading behavior."""
import hashlib
import json
from pathlib import Path
import subprocess
import sys
import tempfile
import unittest

READER = Path(__file__).resolve().parents[1] / 'scripts' / 'read_paragraph.py'


class ParagraphTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.addCleanup(self.temp.cleanup)
        self.path = Path(self.temp.name) / 'source.md'

    def source(self, text):
        self.path.write_bytes(text.encode('utf-8'))
        self.original = self.path.read_bytes()
        self.digest = hashlib.sha256(self.original).hexdigest()

    def read(self, line=1, digest=None):
        before = self.path.read_bytes()
        r = subprocess.run([sys.executable, str(READER), str(self.path),
                            '--line', str(line), '--sha256', digest or self.digest],
                           capture_output=True, text=True)
        self.assertEqual(self.path.read_bytes(), before)
        return r.returncode, json.loads(r.stdout)

    def test_each_response_and_exhaustive_progression(self):
        self.source('\n一段落目。\n続く文。\n \t\n二段落目。\n\n最後。')
        cursor = 1
        for expected, span in [('一段落目。\n続く文。\n', [2, 3]),
                               ('二段落目。\n', [5, 5]), ('最後。', [7, 7])]:
            code, r = self.read(cursor)
            self.assertEqual(code, 0)
            self.assertEqual(r['text'], expected)
            self.assertEqual(r['span'], span)
            self.assertFalse(r['eof'])
            self.assertGreater(r['next_line'], cursor)
            cursor = r['next_line']
        code, r = self.read(cursor)
        self.assertEqual(code, 0)
        self.assertTrue(r['eof'])
        self.assertEqual(r['text'], '')
        self.assertIsNone(r['span'])

    def test_blank_lines_inside_code_and_math(self):
        for block in ['```python\na = 1\n\nb = 2\n```\n',
                      '$$\na=b\n\n=c\n$$\n',
                      '\\[\na=b\n\n=c\n\\]\n']:
            with self.subTest(block=block):
                self.source(block + '\n後続の段落。\n')
                code, r = self.read()
                self.assertEqual(code, 0)
                self.assertEqual(r['text'], block)
                self.assertEqual(r['span'], [1, 5])
                self.assertEqual(self.read(r['next_line'])[1]['text'], '後続の段落。\n')

    def test_empty_and_blank(self):
        for text in ['', '\n \t\n']:
            self.source(text)
            code, r = self.read()
            self.assertEqual(code, 0)
            self.assertTrue(r['eof'])
            self.assertEqual(r['text'], '')

    def test_hash_change_returns_no_source(self):
        self.source('先頭。\n\n後続。\n')
        self.assertEqual(self.read()[0], 0)
        self.path.write_bytes(self.original + '変更。'.encode('utf-8'))
        code, r = self.read(3)
        self.assertEqual(code, 2)
        self.assertEqual(set(r), {'error'})
        self.assertIn('hash mismatch', r['error'])

    def test_cursor_contract(self):
        self.source('一。\n二。\n\n三。\n')
        for cursor in [0, -1, 2, 6]:
            with self.subTest(cursor=cursor):
                code, r = self.read(cursor)
                self.assertEqual(code, 2)
                self.assertEqual(set(r), {'error'})

    def test_unclosed_block_is_not_silently_truncated(self):
        self.source('$$\na=b\n\n後続。\n')
        code, r = self.read()
        self.assertEqual(code, 2)
        self.assertEqual(set(r), {'error'})


if __name__ == '__main__':
    unittest.main()
