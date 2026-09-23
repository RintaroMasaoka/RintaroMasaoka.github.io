#!/usr/bin/env python3
"""Project-local terminology registry, scanner, CLI, and human review GUI."""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path
import re
import secrets
import sqlite3
import sys
import unicodedata
import urllib.parse
import webbrowser
from collections import Counter, defaultdict
from datetime import datetime, timezone
from http.server import BaseHTTPRequestHandler, ThreadingHTTPServer


SCHEMA_VERSION = 3
CATEGORIES = ("ordinary", "reader_known", "define", "project_term", "avoid", "review")
STANDINGS = ("unreviewed", "ordinary", "field_standard", "source_specific", "project_coined", "suspect")
READER_POLICIES = ("undecided", "not_applicable", "assume_known", "introduce", "define", "replace")
USAGE_POLICIES = ("undecided", "as_is", "brief_intro", "full_definition", "forbidden")
LEGACY_PRESETS = {
    "ordinary": ("ordinary", "not_applicable"),
    "reader_known": ("field_standard", "assume_known"),
    "define": ("unreviewed", "define"),
    "project_term": ("project_coined", "define"),
    "avoid": ("suspect", "replace"),
    "review": ("unreviewed", "undecided"),
    "unreviewed": ("unreviewed", "undecided"),
}
SUPPORTED = {".tex", ".md", ".markdown", ".txt", ".rst"}
WORD_RE = re.compile(r"\b[A-Za-z][A-Za-z0-9]*(?:[-‐‑‒–—][A-Za-z0-9]+)*\b")
ACRONYM_RE = re.compile(r"\b[A-Z][A-Z0-9]{2,}(?:-[A-Z0-9]+)*\b")
HYPHEN_RE = re.compile(r"\b[A-Za-z][A-Za-z0-9]*(?:[-‐‑‒–—][A-Za-z0-9]+)+\b")
QUOTED_COIN_RE = re.compile(
    r"\b(?:call(?:ed)?|term(?:ed)?|dub(?:bed)?|refer(?:red)?\s+to\s+as)\b[^\"“\n]{0,60}[\"“]([^\"”]{2,80})[\"”]",
    re.IGNORECASE,
)
PLAIN_COIN_RE = re.compile(
    r"\b(?:called|termed|dubbed)\s+(?:an?\s+|the\s+)?([A-Za-z][A-Za-z0-9-]*(?:\s+[A-Za-z][A-Za-z0-9-]*){0,2})(?=[,.;:)])",
    re.IGNORECASE,
)
TECH_SUFFIX_RE = re.compile(
    r"(?:morphism|ization|isation|icity|metric|tropic|covariant|functional|hamiltonian|ansatz|operator|tensor)$",
    re.IGNORECASE,
)
DEFINITION_CUE_RE = re.compile(
    r"(?:\b(?:define|defined|denote|denoted|call|called|refer(?:red)?\s+to)\b|\bmeans\b|\bis\s+(?:an?|the)\b|\([^)]{0,80}\))",
    re.IGNORECASE,
)
COMMON = {
    "about", "above", "after", "again", "against", "almost", "also", "although", "among", "another",
    "any", "are", "around", "because", "been", "before", "being", "below", "between", "both", "but",
    "can", "could", "data", "does", "each", "either", "equation", "example", "first", "following", "for",
    "from", "further", "given", "has", "have", "here", "however", "into", "its", "later", "less", "let",
    "may", "method", "more", "most", "much", "must", "not", "now", "number", "only", "other", "our",
    "paper", "previous", "result", "same", "section", "several", "should", "show", "shown", "since", "some",
    "such", "than", "that", "the", "their", "then", "there", "therefore", "these", "they", "this", "those",
    "through", "thus", "under", "using", "very", "was", "well", "were", "when", "where", "which", "while",
    "will", "with", "within", "without", "would", "we", "use", "used", "value", "values", "one", "two",
}


def now() -> str:
    return datetime.now(timezone.utc).isoformat(timespec="seconds")


def normalize_term(value: str) -> str:
    value = unicodedata.normalize("NFKC", value)
    value = re.sub(r"[‐‑‒–—]", "-", value)
    value = re.sub(r"\s+", " ", value.strip(" \t\r\n.,;:()[]{}\"'“”"))
    return value.casefold()


def connect(db_path: Path) -> sqlite3.Connection:
    db_path.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(db_path, check_same_thread=False)
    conn.row_factory = sqlite3.Row
    conn.execute("PRAGMA foreign_keys = ON")
    conn.executescript(
        """
        CREATE TABLE IF NOT EXISTS meta (key TEXT PRIMARY KEY, value TEXT NOT NULL);
        CREATE TABLE IF NOT EXISTS terms (
            term_key TEXT PRIMARY KEY,
            display TEXT NOT NULL,
            category TEXT NOT NULL DEFAULT 'unreviewed',
            authorization TEXT NOT NULL DEFAULT 'none',
            definition TEXT NOT NULL DEFAULT '',
            rationale TEXT NOT NULL DEFAULT '',
            standing TEXT NOT NULL DEFAULT 'unreviewed',
            reader_policy TEXT NOT NULL DEFAULT 'undecided',
            evidence TEXT NOT NULL DEFAULT '',
            usage_policy TEXT NOT NULL DEFAULT 'undecided',
            deferred INTEGER NOT NULL DEFAULT 0,
            detector TEXT NOT NULL DEFAULT '',
            created_at TEXT NOT NULL,
            updated_at TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS documents (
            path TEXT PRIMARY KEY, content_hash TEXT NOT NULL, scanned_at TEXT NOT NULL
        );
        CREATE TABLE IF NOT EXISTS occurrences (
            path TEXT NOT NULL,
            line INTEGER NOT NULL,
            column_no INTEGER NOT NULL,
            term_key TEXT NOT NULL REFERENCES terms(term_key) ON DELETE CASCADE,
            surface TEXT NOT NULL,
            detector TEXT NOT NULL,
            context TEXT NOT NULL,
            PRIMARY KEY(path, line, column_no, term_key, detector)
        );
        CREATE INDEX IF NOT EXISTS occurrences_term_idx ON occurrences(term_key);
        """
    )
    found = conn.execute("SELECT value FROM meta WHERE key='schema_version'").fetchone()
    if found and int(found[0]) == 1:
        columns = {row[1] for row in conn.execute("PRAGMA table_info(terms)")}
        if "standing" not in columns:
            conn.execute("ALTER TABLE terms ADD COLUMN standing TEXT NOT NULL DEFAULT 'unreviewed'")
        if "reader_policy" not in columns:
            conn.execute("ALTER TABLE terms ADD COLUMN reader_policy TEXT NOT NULL DEFAULT 'undecided'")
        if "evidence" not in columns:
            conn.execute("ALTER TABLE terms ADD COLUMN evidence TEXT NOT NULL DEFAULT ''")
        for legacy, (standing, reader_policy) in LEGACY_PRESETS.items():
            conn.execute(
                "UPDATE terms SET standing=?,reader_policy=? WHERE category=?",
                (standing, reader_policy, legacy),
            )
        conn.execute("UPDATE meta SET value='2' WHERE key='schema_version'")
        found = conn.execute("SELECT value FROM meta WHERE key='schema_version'").fetchone()
    if found and int(found[0]) == 2:
        columns = {row[1] for row in conn.execute("PRAGMA table_info(terms)")}
        if "usage_policy" not in columns:
            conn.execute("ALTER TABLE terms ADD COLUMN usage_policy TEXT NOT NULL DEFAULT 'undecided'")
        if "deferred" not in columns:
            conn.execute("ALTER TABLE terms ADD COLUMN deferred INTEGER NOT NULL DEFAULT 0")
        conn.execute(
            """UPDATE terms SET usage_policy=CASE
                 WHEN reader_policy='replace' OR standing='suspect' THEN 'forbidden'
                 WHEN reader_policy='define' OR standing='project_coined' THEN 'full_definition'
                 WHEN reader_policy='introduce' THEN 'brief_intro'
                 WHEN reader_policy IN ('assume_known','not_applicable') THEN 'as_is'
                 ELSE 'undecided' END"""
        )
        conn.execute("UPDATE meta SET value=? WHERE key='schema_version'", (str(SCHEMA_VERSION),))
        found = conn.execute("SELECT value FROM meta WHERE key='schema_version'").fetchone()
    if found and int(found[0]) != SCHEMA_VERSION:
        raise RuntimeError(f"unsupported registry schema {found[0]}; expected {SCHEMA_VERSION}")
    conn.execute("INSERT OR IGNORE INTO meta(key,value) VALUES('schema_version',?)", (str(SCHEMA_VERSION),))
    conn.commit()
    return conn


def source_paths(inputs: list[str]) -> list[Path]:
    paths: list[Path] = []
    for raw in inputs:
        path = Path(raw).resolve()
        if path.is_file() and path.suffix.lower() in SUPPORTED:
            paths.append(path)
        elif path.is_dir():
            paths.extend(p for p in path.rglob("*") if p.is_file() and p.suffix.lower() in SUPPORTED)
        else:
            raise ValueError(f"no supported manuscript source: {raw}")
    return sorted(set(paths))


def prose_line(raw: str) -> str:
    raw = re.sub(r"(?<!\\)%.*$", "", raw)
    raw = re.sub(r"\$\$.*?\$\$|\$.*?\$", " ", raw)
    raw = re.sub(r"\\\[.*?\\\]|\\\(.*?\\\)", " ", raw)
    raw = re.sub(r"\\(?:cite|ref|eqref|label|url|path|includegraphics)(?:\[[^]]*\])?\{[^}]*\}", " ", raw)
    previous = None
    while previous != raw:
        previous = raw
        raw = re.sub(r"\\[A-Za-z@]+\*?(?:\[[^]]*\])?\{([^{}]*)\}", r"\1", raw)
    raw = re.sub(r"\\[A-Za-z@]+\*?", " ", raw)
    return re.sub(r"\s+", " ", raw).strip()


def extract(text: str, tracked_terms: list[tuple[str, str]] | None = None) -> list[dict]:
    candidates: dict[tuple[int, int, str, str], dict] = {}
    technical_counts: Counter[str] = Counter()
    token_locs: defaultdict[str, list[tuple[int, int, str, str]]] = defaultdict(list)
    for line_no, raw in enumerate(text.splitlines(), 1):
        line = prose_line(raw)
        if not line:
            continue
        for match in WORD_RE.finditer(line):
            surface = match.group(0)
            key = normalize_term(surface)
            if len(key) >= 8 and key not in COMMON and TECH_SUFFIX_RE.search(key):
                technical_counts[key] += 1
                token_locs[key].append((line_no, match.start() + 1, surface, line))
        detectors = (
            (ACRONYM_RE, "acronym"), (HYPHEN_RE, "hyphenated"),
            (QUOTED_COIN_RE, "explicit_name"), (PLAIN_COIN_RE, "explicit_name"),
        )
        for pattern, detector in detectors:
            for match in pattern.finditer(line):
                surface = (match.group(1) if match.lastindex else match.group(0)).strip()
                key = normalize_term(surface)
                if not key or key in COMMON:
                    continue
                column = (match.start(1) if match.lastindex else match.start()) + 1
                candidates[(line_no, column, key, detector)] = {
                    "line": line_no, "column": column, "term_key": key,
                    "surface": surface, "detector": detector, "context": line,
                }
        occupied = {(item["column"], item["term_key"]) for item in candidates.values() if item["line"] == line_no}
        for term_key, display in tracked_terms or []:
            words = [re.escape(part) for part in re.split(r"\s+", display.strip()) if part]
            if not words:
                continue
            pattern = re.compile(r"(?<![A-Za-z0-9])" + r"\s+".join(words) + r"(?![A-Za-z0-9])", re.IGNORECASE)
            for match in pattern.finditer(line):
                position = (match.start() + 1, term_key)
                if position in occupied:
                    continue
                candidates[(line_no, position[0], term_key, "registered_exact")] = {
                    "line": line_no, "column": position[0], "term_key": term_key,
                    "surface": match.group(0), "detector": "registered_exact", "context": line,
                }
                occupied.add(position)
    for key, count in technical_counts.items():
        if count >= 2:
            for line_no, column, surface, context in token_locs[key]:
                candidates[(line_no, column, key, "technical_repeat")] = {
                    "line": line_no, "column": column, "term_key": key,
                    "surface": surface, "detector": "technical_repeat", "context": context,
                }
    return sorted(candidates.values(), key=lambda item: (item["line"], item["column"], item["term_key"]))


def scan(conn: sqlite3.Connection, inputs: list[str]) -> dict:
    paths = source_paths(inputs)
    tracked_terms = [(row["term_key"], row["display"]) for row in conn.execute("SELECT term_key,display FROM terms")]
    new_terms = 0
    occurrence_count = 0
    for path in paths:
        data = path.read_bytes()
        try:
            text = data.decode("utf-8")
        except UnicodeDecodeError as exc:
            raise ValueError(f"source is not UTF-8: {path}") from exc
        found = extract(text, tracked_terms)
        conn.execute("DELETE FROM occurrences WHERE path=?", (str(path),))
        for item in found:
            row = conn.execute("SELECT detector FROM terms WHERE term_key=?", (item["term_key"],)).fetchone()
            if not row:
                stamp = now()
                conn.execute(
                    "INSERT INTO terms(term_key,display,detector,created_at,updated_at) VALUES(?,?,?,?,?)",
                    (item["term_key"], item["surface"], item["detector"], stamp, stamp),
                )
                new_terms += 1
            else:
                merged = ",".join(sorted(set(filter(None, row[0].split(","))) | {item["detector"]}))
                conn.execute("UPDATE terms SET detector=?,updated_at=? WHERE term_key=?", (merged, now(), item["term_key"]))
            conn.execute(
                "INSERT OR REPLACE INTO occurrences(path,line,column_no,term_key,surface,detector,context) VALUES(?,?,?,?,?,?,?)",
                (str(path), item["line"], item["column"], item["term_key"], item["surface"], item["detector"], item["context"]),
            )
            occurrence_count += 1
        conn.execute(
            "INSERT OR REPLACE INTO documents(path,content_hash,scanned_at) VALUES(?,?,?)",
            (str(path), hashlib.sha256(data).hexdigest(), now()),
        )
    conn.commit()
    active_terms = conn.execute("SELECT COUNT(DISTINCT term_key) FROM occurrences").fetchone()[0]
    return {"files": len(paths), "occurrences": occurrence_count, "new_terms": new_terms, "active_terms": active_terms}


def term_rows(conn: sqlite3.Connection, unresolved_only: bool = False) -> list[dict]:
    where = "WHERE o.term_key IS NOT NULL"
    if unresolved_only:
        where += " AND t.deferred=0 AND (t.usage_policy='undecided' OR t.authorization != 'human_authorized')"
    rows = conn.execute(
        f"""SELECT t.*, COUNT(o.term_key) AS occurrence_count
            FROM terms t LEFT JOIN occurrences o ON o.term_key=t.term_key
            {where} GROUP BY t.term_key
            ORDER BY CASE t.authorization WHEN 'none' THEN 0 WHEN 'ai_authorized' THEN 1 ELSE 2 END,
                     occurrence_count DESC, t.display COLLATE NOCASE"""
    ).fetchall()
    output = []
    for row in rows:
        item = dict(row)
        first = conn.execute(
            "SELECT path,line,column_no,context FROM occurrences WHERE term_key=? ORDER BY path,line,column_no LIMIT 1",
            (row["term_key"],),
        ).fetchone()
        item["first_occurrence"] = dict(first) if first else None
        output.append(item)
    return output


def legacy_category(standing: str, reader_policy: str) -> str:
    for category, pair in LEGACY_PRESETS.items():
        if pair == (standing, reader_policy) and category != "unreviewed":
            return category
    return "review"


def usage_policy_from_axes(standing: str, reader_policy: str) -> str:
    if reader_policy == "replace" or standing == "suspect":
        return "forbidden"
    if reader_policy == "define" or standing == "project_coined":
        return "full_definition"
    if reader_policy == "introduce":
        return "brief_intro"
    if reader_policy in {"assume_known", "not_applicable"}:
        return "as_is"
    return "undecided"


def propose(
    conn: sqlite3.Connection,
    term: str,
    category: str,
    definition: str,
    rationale: str,
    evidence: str = "",
    standing: str = "",
    reader_policy: str = "",
    usage_policy: str = "",
    commit: bool = True,
) -> dict:
    if category not in CATEGORIES:
        raise ValueError(f"unknown category: {category}")
    preset_standing, preset_policy = LEGACY_PRESETS[category]
    standing = standing or preset_standing
    reader_policy = reader_policy or preset_policy
    if standing not in STANDINGS:
        raise ValueError(f"unknown standing: {standing}")
    if reader_policy not in READER_POLICIES:
        raise ValueError(f"unknown reader policy: {reader_policy}")
    usage_policy = usage_policy or usage_policy_from_axes(standing, reader_policy)
    if usage_policy not in USAGE_POLICIES:
        raise ValueError(f"unknown usage policy: {usage_policy}")
    key = normalize_term(term)
    if not key:
        raise ValueError("term is empty")
    stamp = now()
    conn.execute(
        """INSERT INTO terms(term_key,display,category,authorization,definition,rationale,standing,reader_policy,evidence,usage_policy,deferred,created_at,updated_at)
           VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)
           ON CONFLICT(term_key) DO UPDATE SET category=excluded.category,
             authorization='ai_authorized', definition=excluded.definition,
             rationale=excluded.rationale, standing=excluded.standing,
             reader_policy=excluded.reader_policy, evidence=excluded.evidence,
             usage_policy=excluded.usage_policy, deferred=0, updated_at=excluded.updated_at""",
        (key, term.strip(), legacy_category(standing, reader_policy), "ai_authorized", definition, rationale,
         standing, reader_policy, evidence, usage_policy, 0, stamp, stamp),
    )
    if commit:
        conn.commit()
    return dict(conn.execute("SELECT * FROM terms WHERE term_key=?", (key,)).fetchone())


def propose_batch(conn: sqlite3.Connection, proposals: object) -> list[dict]:
    if not isinstance(proposals, list):
        raise ValueError("proposal batch must be a JSON array")
    results = []
    try:
        for item in proposals:
            if not isinstance(item, dict) or "term" not in item:
                raise ValueError("each proposal must be an object with a term")
            results.append(propose(
                conn,
                str(item["term"]),
                str(item.get("category", "review")),
                str(item.get("definition", "")),
                str(item.get("rationale", "")),
                str(item.get("evidence", "")),
                str(item.get("standing", "")),
                str(item.get("reader_policy", "")),
                str(item.get("usage_policy", "")),
                commit=False,
            ))
        conn.commit()
    except Exception:
        conn.rollback()
        raise
    return results


def human_decide(
    conn: sqlite3.Connection,
    term: str,
    category: str = "",
    definition: str | None = None,
    rationale: str | None = None,
    evidence: str | None = None,
    standing: str = "",
    reader_policy: str = "",
    usage_policy: str = "",
) -> dict:
    key = normalize_term(term)
    current = conn.execute("SELECT * FROM terms WHERE term_key=?", (key,)).fetchone()
    if not current:
        raise ValueError(f"unknown term: {term}")
    if category:
        if category not in CATEGORIES:
            raise ValueError(f"unknown category: {category}")
        standing, reader_policy = LEGACY_PRESETS[category]
    standing = standing or current["standing"]
    reader_policy = reader_policy or current["reader_policy"]
    if standing not in STANDINGS:
        raise ValueError(f"unknown standing: {standing}")
    if reader_policy not in READER_POLICIES:
        raise ValueError(f"unknown reader policy: {reader_policy}")
    usage_policy = usage_policy or usage_policy_from_axes(standing, reader_policy)
    if usage_policy not in USAGE_POLICIES:
        raise ValueError(f"unknown usage policy: {usage_policy}")
    definition = current["definition"] if definition is None else definition
    rationale = current["rationale"] if rationale is None else rationale
    evidence = current["evidence"] if evidence is None else evidence
    conn.execute(
        """UPDATE terms SET category=?,authorization='human_authorized',definition=?,rationale=?,
           standing=?,reader_policy=?,evidence=?,usage_policy=?,deferred=0,updated_at=? WHERE term_key=?""",
        (legacy_category(standing, reader_policy), definition, rationale, standing,
         reader_policy, evidence, usage_policy, now(), key),
    )
    conn.commit()
    return dict(conn.execute("SELECT * FROM terms WHERE term_key=?", (key,)).fetchone())


def defer_term(conn: sqlite3.Connection, term: str) -> dict:
    key = normalize_term(term)
    changed = conn.execute("UPDATE terms SET deferred=1,updated_at=? WHERE term_key=?", (now(), key)).rowcount
    if not changed:
        raise ValueError(f"unknown term: {term}")
    conn.commit()
    return dict(conn.execute("SELECT * FROM terms WHERE term_key=?", (key,)).fetchone())


def check(conn: sqlite3.Connection, allow_ai: bool = False) -> dict:
    findings = []
    rows = term_rows(conn)
    for item in rows:
        usage_policy = item["usage_policy"]
        authorization = item["authorization"]
        reason = None
        if item["deferred"]:
            reason = "human_review_deferred"
        elif usage_policy == "undecided":
            reason = "unresolved"
        elif usage_policy == "forbidden":
            reason = "forbidden_term_present"
        elif authorization != "human_authorized" and not (allow_ai and authorization == "ai_authorized"):
            reason = "human_authorization_required"
        elif usage_policy in {"brief_intro", "full_definition"}:
            context = (item.get("first_occurrence") or {}).get("context", "")
            if not DEFINITION_CUE_RE.search(context):
                reason = "first_use_definition_not_detected" if usage_policy == "full_definition" else "first_use_introduction_not_detected"
        if reason:
            findings.append({
                "term": item["display"], "usage_policy": usage_policy, "authorization": authorization,
                "reason": reason, "first_occurrence": item.get("first_occurrence"),
            })
    return {"ok": not findings, "findings": findings, "active_terms": len(rows)}



GUI_HTML = (Path(__file__).resolve().parents[1] / "assets" / "gui.html").read_text(encoding="utf-8")


def serve(conn: sqlite3.Connection, host: str, port: int, open_browser: bool) -> None:
    if host not in {"127.0.0.1", "localhost", "::1"}:
        raise ValueError("GUI may bind only to localhost")
    token = secrets.token_urlsafe(24)

    class Handler(BaseHTTPRequestHandler):
        def log_message(self, fmt: str, *args) -> None:
            sys.stderr.write("term-guard: " + (fmt % args) + "\n")

        def send_json(self, payload, status=200):
            data = json.dumps(payload, ensure_ascii=False).encode()
            self.send_response(status)
            self.send_header("Content-Type", "application/json; charset=utf-8")
            self.send_header("Content-Length", str(len(data)))
            self.end_headers()
            self.wfile.write(data)

        def do_GET(self):
            parsed = urllib.parse.urlparse(self.path)
            if parsed.path == "/":
                data = GUI_HTML.replace("__CSRF__", json.dumps(token)).encode()
                self.send_response(200)
                self.send_header("Content-Type", "text/html; charset=utf-8")
                self.send_header("Content-Length", str(len(data)))
                self.end_headers()
                self.wfile.write(data)
            elif parsed.path == "/api/terms":
                self.send_json(term_rows(conn, unresolved_only=False))
            else:
                self.send_json({"error": "not found"}, 404)

        def do_POST(self):
            if self.path != "/api/decide":
                self.send_json({"error": "not found"}, 404)
                return
            if self.headers.get("X-Term-CSRF") != token:
                self.send_json({"error": "invalid session token"}, 403)
                return
            try:
                length = int(self.headers.get("Content-Length", "0"))
                if length > 65536:
                    raise ValueError("request too large")
                payload = json.loads(self.rfile.read(length))
                if payload.get("action") == "defer":
                    result = defer_term(conn, payload["term"])
                else:
                    result = human_decide(
                        conn, payload["term"], payload.get("category", ""),
                        payload.get("definition"), payload.get("rationale"), payload.get("evidence"),
                        payload.get("standing", ""), payload.get("reader_policy", ""),
                        payload.get("usage_policy", ""),
                    )
                self.send_json(result)
            except (ValueError, KeyError, json.JSONDecodeError) as exc:
                self.send_json({"error": str(exc)}, 400)

    server = ThreadingHTTPServer((host, port), Handler)
    url = f"http://{host}:{server.server_port}/"
    print(url, flush=True)
    if open_browser:
        webbrowser.open(url)
    try:
        server.serve_forever()
    except KeyboardInterrupt:
        pass
    finally:
        server.server_close()


def emit(payload, as_json: bool) -> None:
    if as_json:
        print(json.dumps(payload, ensure_ascii=False, indent=2))
    elif isinstance(payload, list):
        for item in payload:
            first = item.get("first_occurrence") or {}
            print(f"{item['display']}\t{item['usage_policy']}\t{item['authorization']}\t{item.get('occurrence_count', 0)}\t{first.get('path','')}:{first.get('line','')}")
    elif isinstance(payload, dict):
        print("\n".join(f"{key}: {value}" for key, value in payload.items()))
    else:
        print(payload)


def parser() -> argparse.ArgumentParser:
    ap = argparse.ArgumentParser(description=__doc__)
    ap.add_argument("--db", type=Path, default=Path(".paper-terms/registry.sqlite3"))
    ap.add_argument("--json", action="store_true", help="emit machine-readable JSON")
    sub = ap.add_subparsers(dest="command", required=True)
    sub.add_parser("init", help="initialize the registry")
    scan_p = sub.add_parser("scan", help="scan manuscript files or directories")
    scan_p.add_argument("paths", nargs="+", help="UTF-8 LaTeX, Markdown, reStructuredText, or text")
    queue_p = sub.add_parser("queue", help="list active unresolved and non-human terms")
    queue_p.add_argument("--all", action="store_true", help="include all active terms")
    proposal = sub.add_parser("propose", help="record an AI-authorized provisional classification")
    proposal.add_argument("term")
    proposal.add_argument("category", choices=CATEGORIES, nargs="?", default="review", help="legacy preset; prefer the two explicit flags")
    proposal.add_argument("--definition", default="")
    proposal.add_argument("--rationale", default="")
    proposal.add_argument("--evidence", default="")
    proposal.add_argument("--standing", choices=STANDINGS, default="")
    proposal.add_argument("--reader-policy", choices=READER_POLICIES, default="")
    proposal.add_argument("--usage-policy", choices=USAGE_POLICIES, default="")
    batch = sub.add_parser("propose-batch", help="record a JSON array of AI provisional classifications")
    batch.add_argument("input", help="JSON file, or - for standard input")
    check_p = sub.add_parser("check", help="evaluate the active terminology policy")
    check_p.add_argument("--allow-ai", action="store_true", help="exploratory only; accept AI-authorized allowed categories")
    serve_p = sub.add_parser("serve", help="start the localhost human review GUI")
    serve_p.add_argument("--host", default="127.0.0.1")
    serve_p.add_argument("--port", type=int, default=8765)
    serve_p.add_argument("--open", action="store_true", help="open the default browser")
    return ap


def main(argv: list[str] | None = None) -> int:
    args = parser().parse_args(argv)
    try:
        conn = connect(args.db.resolve())
        if args.command == "init":
            emit({"registry": str(args.db.resolve()), "schema_version": SCHEMA_VERSION}, args.json)
        elif args.command == "scan":
            emit(scan(conn, args.paths), args.json)
        elif args.command == "queue":
            emit(term_rows(conn, unresolved_only=not args.all), args.json)
        elif args.command == "propose":
            emit(propose(
                conn, args.term, args.category, args.definition, args.rationale,
                args.evidence, args.standing, args.reader_policy, args.usage_policy,
            ), args.json)
        elif args.command == "propose-batch":
            if args.input == "-":
                payload = json.load(sys.stdin)
            else:
                with Path(args.input).open(encoding="utf-8") as handle:
                    payload = json.load(handle)
            emit(propose_batch(conn, payload), args.json)
        elif args.command == "check":
            result = check(conn, allow_ai=args.allow_ai)
            emit(result, args.json)
            return 0 if result["ok"] else 1
        elif args.command == "serve":
            serve(conn, args.host, args.port, args.open)
        return 0
    except (OSError, sqlite3.Error, RuntimeError, ValueError) as exc:
        if getattr(args, "json", False):
            print(json.dumps({"error": str(exc)}, ensure_ascii=False))
        else:
            print(f"error: {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
