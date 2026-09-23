#!/usr/bin/env python3
"""Validate audit accounting; never certify the semantics of its witnesses."""
import hashlib
import json
import sys
from collections import Counter
from pathlib import Path


class Invalid(ValueError):
    pass


def require(condition, message):
    if not condition:
        raise Invalid(message)


def unique_object(pairs):
    obj = {}
    for key, value in pairs:
        require(key not in obj, f"duplicate JSON key: {key}")
        obj[key] = value
    return obj


def nonempty(value):
    return isinstance(value, str) and bool(value.strip())


def evaluate(source, ledger):
    raw = source.read_bytes()
    lines = raw.decode("utf-8").splitlines()
    require(isinstance(ledger, dict), "ledger must be an object")
    require(ledger.get("source_sha256") == hashlib.sha256(raw).hexdigest(),
            "source hash mismatch; review and migrate the ledger")
    claims, tasks = ledger.get("claims"), ledger.get("tasks")
    require(isinstance(claims, dict) and isinstance(tasks, dict),
            "claims and tasks must be objects")
    exclusions = ledger.get("exclusions", [])
    require(isinstance(exclusions, list), "exclusions must be a list")
    for group in (claims, tasks):
        require(all(nonempty(k) and isinstance(v, dict) for k, v in group.items()),
                "IDs must be nonempty strings with object records")

    def span(record):
        pair = record.get("span")
        require(isinstance(pair, list) and len(pair) == 2 and
                all(type(x) is int for x in pair), "span must be [start, end]")
        a, b = pair
        require(1 <= a <= b <= len(lines), f"invalid source span {pair}")
        return set(range(a, b + 1))

    claim_lines, excluded_lines = set(), set()
    for cid, claim in claims.items():
        require(nonempty(claim.get("text")) and nonempty(claim.get("kind")),
                f"{cid}: text and kind required")
        claim_lines |= span(claim)
    for exclusion in exclusions:
        require(isinstance(exclusion, dict) and nonempty(exclusion.get("reason")),
                "exclusion requires a reason")
        part = span(exclusion)
        require(not part & (claim_lines | excluded_lines),
                "exclusion overlaps claims or another exclusion")
        excluded_lines |= part
    uncovered = sorted(i for i, line in enumerate(lines, 1)
                       if line.strip() and i not in claim_lines | excluded_lines)

    task_results, visiting, used = {}, set(), set()

    def task_result(tid):
        require(isinstance(tid, str) and tid in tasks, f"missing task: {tid}")
        require(tid not in visiting, f"cyclic task dependency: {tid}")
        used.add(tid)
        if tid in task_results:
            return task_results[tid]
        record = tasks[tid]
        require(nonempty(record.get("question")), f"{tid}: question required")
        status = record.get("status")
        require(status in ("pass", "gap", "unknown", "split"),
                f"{tid}: invalid status")
        if status != "split":
            require(nonempty(record.get("evidence")), f"{tid}: evidence required")
            require(not record.get("children") and not record.get("join"),
                    f"{tid}: terminal task cannot hide split obligations")
            result = (status != "unknown", status == "pass")
        else:
            children, join = record.get("children"), record.get("join")
            require(isinstance(children, list) and len(children) >= 2 and
                    all(isinstance(x, str) for x in children) and
                    len(set(children)) == len(children),
                    f"{tid}: split needs distinct child questions")
            require(isinstance(join, str) and join not in children and join != tid,
                    f"{tid}: distinct join task required")
            visiting.add(tid)
            values = [task_result(x) for x in children + [join]]
            visiting.remove(tid)
            result = (all(x[0] for x in values), all(x[1] for x in values))
        task_results[tid] = result
        return result

    coverage = task_result(ledger.get("coverage_review"))
    claim_results, claim_visiting = {}, set()

    def claim_result(cid):
        require(isinstance(cid, str) and cid in claims, f"missing prerequisite: {cid}")
        require(cid not in claim_visiting, f"cyclic claim dependency: {cid}")
        if cid in claim_results:
            return claim_results[cid]
        record = claims[cid]
        checks, deps, edges = record.get("checks"), record.get("requires"), record.get("edges")
        require(isinstance(checks, dict) and set(checks) == {"warrant", "availability", "role"},
                f"{cid}: exactly warrant, availability, role checks required")
        require(all(isinstance(x, str) for x in checks.values()) and len(set(checks.values())) == 3,
                f"{cid}: separate decision tasks required")
        require(isinstance(deps, list) and all(isinstance(x, str) for x in deps) and
                len(set(deps)) == len(deps), f"{cid}: requires must list distinct claim IDs")
        require(isinstance(edges, dict) and set(edges) == set(deps),
                f"{cid}: every prerequisite needs exactly one edge check")
        require(all(isinstance(x, str) for x in edges.values()) and
                len(set(edges.values())) == len(edges) and
                not set(edges.values()) & set(checks.values()),
                f"{cid}: edge decisions must be separate")
        claim_visiting.add(cid)
        own = [task_result(x) for x in list(checks.values()) + list(edges.values())]
        prior = [claim_result(x) for x in deps]
        claim_visiting.remove(cid)
        result = (all(x[0] for x in own + prior), all(x[1] for x in own + prior))
        claim_results[cid] = result
        return result

    for cid in claims:
        claim_result(cid)
    require(used == set(tasks), f"unreferenced task records: {sorted(set(tasks) - used)}")
    counts = Counter(tasks[t]["status"] for t in used)
    complete = not uncovered and coverage[1] and all(x[0] for x in claim_results.values())
    return {
        "accounting_complete": complete,
        "semantic_truth_certified": False,
        "source_sha256": hashlib.sha256(raw).hexdigest(),
        "original_claims": len(claims),
        "supported_claims_by_recorded_evidence": sum(x[1] for x in claim_results.values()),
        "uncovered_nonblank_lines": uncovered,
        "inventory_review_passes_by_recorded_evidence": coverage[1],
        "decision_counts": dict(sorted(counts.items())),
        "gap_tasks": sorted(t for t in used if tasks[t]["status"] == "gap"),
        "unknown_tasks": sorted(t for t in used if tasks[t]["status"] == "unknown"),
        "claims_not_supported": sorted(c for c, result in claim_results.items() if not result[1]),
    }


def main():
    try:
        require(len(sys.argv) == 3, "usage: check_ledger.py SOURCE LEDGER_JSON")
        ledger = json.loads(Path(sys.argv[2]).read_text(encoding="utf-8"),
                            object_pairs_hook=unique_object)
        report = evaluate(Path(sys.argv[1]), ledger)
        print(json.dumps(report, ensure_ascii=False, indent=2))
        return 0 if report["accounting_complete"] else 1
    except (Invalid, ValueError, OSError, TypeError, KeyError, RecursionError) as error:
        print(json.dumps({"accounting_complete": False,
                          "semantic_truth_certified": False, "error": str(error)},
                         ensure_ascii=False, indent=2))
        return 2


if __name__ == "__main__":
    sys.exit(main())
