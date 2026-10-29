#!/usr/bin/env python3
"""Small, evidence-linked bookkeeping for research work; never judges scientific truth."""

import argparse
import datetime as dt
import fcntl
import hashlib
import json
import os
from pathlib import Path
import sys
import uuid

METHODS = {"analytic", "ai_check", "formal", "symbolic", "numerical", "source", "mechanical"}
OUTCOMES = {"pass", "fail", "inconclusive"}


def project_path(root: Path, value: str) -> Path:
    if not isinstance(value, str) or not value.strip():
        raise ValueError("Expected a nonempty project-relative path")
    rel = Path(value)
    if rel.is_absolute():
        raise ValueError(f"Path must be project-relative: {value}")
    path = root / rel
    resolved = path.resolve(strict=True)
    if resolved != root and root not in resolved.parents:
        raise ValueError(f"Path escapes project: {value}")
    if not resolved.is_file():
        raise ValueError(f"Expected a file: {value}")
    return resolved


def output_path(root: Path, relative: str) -> Path:
    """Validate a prospective output, including links in any existing parent."""
    rel = Path(relative)
    if rel.is_absolute():
        raise ValueError(f"Output path must be project-relative: {relative}")
    path = root / rel
    resolved = path.resolve(strict=False)
    if resolved != root and root not in resolved.parents:
        raise ValueError(f"Output path escapes project: {relative}")
    return path


def digest(path: Path) -> str:
    h = hashlib.sha256()
    with path.open("rb") as f:
        for chunk in iter(lambda: f.read(1024 * 1024), b""):
            h.update(chunk)
    return h.hexdigest()


class Locked:
    def __init__(self, root: Path):
        research = output_path(root, "research")
        research.mkdir(parents=True, exist_ok=True)
        research = output_path(root, "research")
        lock_path = output_path(root, "research/.research-memory.lock")
        self.file = lock_path.open("a", encoding="utf-8")

    def __enter__(self):
        fcntl.flock(self.file.fileno(), fcntl.LOCK_EX)
        return self

    def __exit__(self, *_):
        fcntl.flock(self.file.fileno(), fcntl.LOCK_UN)
        self.file.close()


def append_jsonl(path: Path, record: dict) -> None:
    # O_APPEND plus the shared exclusive lock prevents interleaved or replaced records.
    payload = (json.dumps(record, ensure_ascii=False, sort_keys=True) + "\n").encode()
    fd = os.open(path, os.O_WRONLY | os.O_CREAT | os.O_APPEND, 0o600)
    try:
        view = memoryview(payload)
        while view:
            view = view[os.write(fd, view):]
        os.fsync(fd)
    finally:
        os.close(fd)


def load_input(path: str) -> dict:
    with open(path, encoding="utf-8") as f:
        data = json.load(f)
    if not isinstance(data, dict):
        raise ValueError("Input JSON must be an object")
    return data


def record(root: Path, data: dict) -> dict:
    for key in ("claim_id", "target", "method", "scope", "outcome", "evidence"):
        if key not in data:
            raise ValueError(f"Missing required field: {key}")
    if not all(isinstance(data[k], str) and data[k].strip() for k in ("claim_id", "scope")):
        raise ValueError("claim_id and scope must be nonempty strings")
    if (not isinstance(data["method"], str) or not isinstance(data["outcome"], str)
            or data["method"] not in METHODS or data["outcome"] not in OUTCOMES):
        raise ValueError("Invalid method or outcome")
    required_metadata = {"ai_check": ("model", "independence"),
                         "formal": ("command", "tool_version"),
                         "symbolic": ("command", "tool_version"),
                         "numerical": ("command", "tool_version")}.get(data["method"], ())
    for key in required_metadata:
        if not isinstance(data.get(key), str) or not data[key].strip():
            raise ValueError(f"{data['method']} records require nonempty {key}")
    if not isinstance(data["evidence"], list) or not data["evidence"]:
        raise ValueError("evidence must be a nonempty list of project-relative files")
    target = project_path(root, data["target"])
    evidence = [project_path(root, p) for p in data["evidence"]]
    row = {k: data[k] for k in ("claim_id", "target", "method", "scope", "outcome")}
    # source_revision is an optional version identifier, never a URL to fetch.
    row.update({k: data[k] for k in ("command", "tool_version", "model", "independence", "limitations", "source_revision") if k in data})
    row.update({"id": str(uuid.uuid4()), "timestamp": dt.datetime.now(dt.timezone.utc).isoformat(),
                "target_sha256": digest(target),
                "evidence_sha256": {p: digest(project_path(root, p)) for p in data["evidence"]}})
    with Locked(root):
        ledger = output_path(root, "research/verification.jsonl")
        append_jsonl(ledger, row)
    return row


def attempt(root: Path, data: dict) -> dict:
    for key in ("question_id", "method", "result", "witness"):
        if key not in data:
            raise ValueError(f"Missing required field: {key}")
    if any(not isinstance(data[k], str) or not data[k].strip() for k in ("question_id", "method", "result", "witness")):
        raise ValueError("question_id, method, result, and witness must be nonempty strings")
    has_baseline = "baseline" in data
    has_assessment = "assessment" in data
    if has_baseline != has_assessment:
        raise ValueError("baseline and assessment must be supplied together")
    if has_baseline and any(not isinstance(data[k], str) or not data[k].strip()
                            for k in ("baseline", "assessment")):
        raise ValueError("baseline and assessment must be nonempty strings")
    if not has_baseline and "information_gain" not in data:
        raise ValueError("New attempts require baseline and assessment, or legacy information_gain")
    if "information_gain" in data and not isinstance(data["information_gain"], bool):
        raise ValueError("information_gain must be boolean")
    if "next_change" in data and not isinstance(data["next_change"], str):
        raise ValueError("next_change must be a string")
    row = dict(data, id=str(uuid.uuid4()), timestamp=dt.datetime.now(dt.timezone.utc).isoformat())
    with Locked(root):
        ledger = output_path(root, "research/attempts.jsonl")
        append_jsonl(ledger, row)
    return row


def read_lines(path: Path) -> list:
    if not path.exists():
        return []
    rows = []
    for n, line in enumerate(path.read_text(encoding="utf-8").splitlines(), 1):
        try:
            rows.append(json.loads(line))
        except json.JSONDecodeError as e:
            raise ValueError(f"Invalid JSON in {path.name}:{n}") from e
    return rows


def status(root: Path) -> dict:
    research = root / "research"
    with Locked(root):
        records_path = output_path(root, "research/verification.jsonl")
        attempts_path = output_path(root, "research/attempts.jsonl")
        records = read_lines(records_path)
        attempts = read_lines(attempts_path)
    stale = []
    failed_or_inconclusive = []
    for row in records:
        reason = []
        try:
            if digest(project_path(root, row["target"])) != row["target_sha256"]:
                reason.append("target_changed")
        except (OSError, ValueError, KeyError):
            reason.append("target_missing_or_unavailable")
        for rel, expected in row.get("evidence_sha256", {}).items():
            try:
                if digest(project_path(root, rel)) != expected:
                    reason.append(f"evidence_changed:{rel}")
            except (OSError, ValueError):
                reason.append(f"evidence_missing_or_unavailable:{rel}")
        if reason:
            stale.append({"id": row.get("id"), "claim_id": row.get("claim_id"), "reasons": reason})
        if row.get("outcome") in ("fail", "inconclusive"):
            failed_or_inconclusive.append({"id": row.get("id"), "claim_id": row.get("claim_id"), "outcome": row["outcome"]})
    by_question = {}
    for row in attempts:
        by_question.setdefault(row["question_id"], []).append(row)
    attempts_by_question = [
        {"question_id": question_id, "count": len(rows), "latest": rows[-1]}
        for question_id, rows in sorted(by_question.items())
    ]
    return {"record_count": len(records), "stale": stale, "failed_or_inconclusive": failed_or_inconclusive,
            "failed_or_inconclusive_note": "Historical records only; later work may have resolved these outcomes.",
            "attempts_by_question": attempts_by_question,
            "warning": "Bookkeeping only: summaries count recorded attempts and show the latest row; they cannot decide scientific progress or continuation."}


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--project-root", required=True, type=Path, metavar="ROOT")
    sub = parser.add_subparsers(dest="action", required=True)
    sub.add_parser("init", help="create research/focus.md if absent")
    p = sub.add_parser("record", help="append evidence-linked verification JSON")
    p.add_argument("--input", required=True, metavar="JSON")
    p = sub.add_parser("attempt", help="append a research-attempt JSON record")
    p.add_argument("--input", required=True, metavar="JSON")
    sub.add_parser("status", help="report stale evidence and factual attempt summaries")
    args = parser.parse_args()
    try:
        root = args.project_root.resolve(strict=True)
        if not root.is_dir():
            raise ValueError("Project root must be a directory")
        if args.action == "init":
            with Locked(root):
                focus = output_path(root, "research/focus.md")
                if not focus.exists():
                    fd = os.open(focus, os.O_WRONLY | os.O_CREAT | os.O_EXCL, 0o600)
                    with os.fdopen(fd, "w", encoding="utf-8") as f:
                        f.write("# Focus\n\n")
            result = {"focus": "research/focus.md"}
        elif args.action == "record":
            result = record(root, load_input(args.input))
        elif args.action == "attempt":
            result = attempt(root, load_input(args.input))
        else:
            result = status(root)
        print(json.dumps(result, ensure_ascii=False, sort_keys=True))
        return 0
    except (OSError, ValueError, json.JSONDecodeError) as exc:
        print(f"error: {exc}", file=sys.stderr)
        return 2


if __name__ == "__main__":
    raise SystemExit(main())
