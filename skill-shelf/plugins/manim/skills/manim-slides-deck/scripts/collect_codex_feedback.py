#!/usr/bin/env python3
"""Collect real user turns from Codex rollout JSONL for workflow review.

The collector deliberately does not decide which feedback should become a gate.
It removes injected context blocks, deduplicates resumed rollouts, and emits a
project-owned evidence file for a later causal review.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import re
from pathlib import Path


INJECTED_PREFIXES = (
    "<recommended_plugins>",
    "# AGENTS.md instructions",
    "<environment_context>",
    "<apps_instructions>",
    "<plugins_instructions>",
    "<in-app-browser-context",
    "# Applications mentioned by the user:",
    "The following is the Codex agent history",
    "The following is the Codex agent history added",
    "<skill>",
    ">>> TRANSCRIPT START",
    ">>> TRANSCRIPT DELTA START",
    "<subagent_notification>",
    "# In app browser:",
    "# Files mentioned by the user:",
)

SKILL_LINK = re.compile(r"\[\$[^\]]+\]\([^\)]+\)")

SIGNALS = {
    "rejection": re.compile(r"(?:違(?:う|い)|ではない|やめ(?:て|たい)|逆|誤解|not that)", re.I),
    "recurrence": re.compile(r"(?:よく|頻繁|何度|また|ありがち|なくならない|し続け)", re.I),
    "omission": re.compile(r"(?:忘れ|サボ|skip|していない|使っていない|未定義|置き忘れ)", re.I),
    "artifact_defect": re.compile(r"(?:overlap|continuity|復活|チカ|飛躍|不自然|汚い|ミス|bug|バグ)", re.I),
    "workflow_request": re.compile(r"(?:gate|ゲート|workflow|skill|script|check\s*list|警告|検査|review)", re.I),
}


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser()
    parser.add_argument("--project", type=Path, default=Path.cwd())
    parser.add_argument("--codex-home", type=Path, default=Path.home() / ".codex")
    parser.add_argument("--out", type=Path, required=True)
    parser.add_argument("--all-user-turns", action="store_true")
    parser.add_argument("--include-subagents", action="store_true")
    return parser.parse_args()


def clean_content(content: object) -> str:
    if not isinstance(content, list):
        return ""
    kept: list[str] = []
    for part in content:
        if not isinstance(part, dict) or part.get("type") != "input_text":
            continue
        text = str(part.get("text", "")).strip()
        meaningful = SKILL_LINK.sub("", text).strip()
        if meaningful and not text.startswith(INJECTED_PREFIXES):
            kept.append(text)
    return "\n\n".join(kept).strip()


def rollout_files(codex_home: Path) -> list[Path]:
    files: list[Path] = []
    for name in ("sessions", "archived_sessions"):
        root = codex_home / name
        if root.exists():
            files.extend(root.rglob("*.jsonl"))
    return sorted(files)


def session_meta(path: Path) -> dict:
    try:
        with path.open(encoding="utf-8") as handle:
            for line in handle:
                row = json.loads(line)
                if row.get("type") == "session_meta":
                    return row.get("payload", {})
    except (OSError, json.JSONDecodeError):
        return {}
    return {}


def iter_user_turns(path: Path):
    try:
        with path.open(encoding="utf-8") as handle:
            for line in handle:
                try:
                    row = json.loads(line)
                except json.JSONDecodeError:
                    continue
                if row.get("type") != "response_item":
                    continue
                payload = row.get("payload", {})
                if payload.get("type") != "message" or payload.get("role") != "user":
                    continue
                text = clean_content(payload.get("content"))
                if text:
                    yield row.get("timestamp"), text
    except OSError:
        return


def main() -> int:
    args = parse_args()
    project = args.project.resolve()
    seen: set[str] = set()
    rows: list[dict] = []
    matched_files = 0
    for path in rollout_files(args.codex_home.expanduser()):
        meta = session_meta(path)
        if not args.include_subagents and meta.get("thread_source") != "user":
            continue
        try:
            cwd = Path(str(meta.get("cwd", ""))).resolve()
        except (OSError, RuntimeError):
            continue
        if cwd != project:
            continue
        matched_files += 1
        for timestamp, text in iter_user_turns(path):
            normalized = " ".join(text.split())
            digest = hashlib.sha256(normalized.encode()).hexdigest()[:16]
            if digest in seen:
                continue
            seen.add(digest)
            signals = [name for name, pattern in SIGNALS.items() if pattern.search(text)]
            if not args.all_user_turns and not signals:
                continue
            rows.append({
                "evidence_id": digest,
                "timestamp": timestamp,
                "session_id": meta.get("session_id") or meta.get("id"),
                "signals": signals,
                "text": text,
                "source": str(path),
            })
    rows.sort(key=lambda row: (str(row.get("timestamp") or ""), row["evidence_id"]))
    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text("\n".join(json.dumps(row, ensure_ascii=False) for row in rows) + ("\n" if rows else ""), encoding="utf-8")
    print(json.dumps({"project": str(project), "rollouts": matched_files, "unique_turns": len(rows), "out": str(args.out)}, ensure_ascii=False))
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
