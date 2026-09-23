---
name: nogap-run
description: Use when nogap work should be coordinated across multiple artifacts or ranges, splitting the job into scan, fill, Japanese-friction, and verify passes while respecting editable boundaries and local conventions.
---

# Nogap Run

Use this skill to coordinate multi-artifact repair across reasoning gaps and
Japanese reader-friction. It is an orchestrator, not the place to perform every
repair inline.

Load shared references only as needed:

- `../../references/core.md` for the shared contract.
- `../../references/gap-taxonomy.md` when aggregating findings.
- `../../references/report-contracts.md` for run summaries.

## Workflow

1. Define the job id, target artifacts, editable boundaries, output locations,
   reference sources, local conventions, and reader model.
2. For each artifact, run a `nogap:nogap-scan` pass.
3. Group findings:
   - light direct edits;
   - heavy repairs for `nogap:nogap-fill`;
   - Japanese prose-friction repairs for `nogap:nogap-ja-friction`;
   - read-only checks for `nogap:nogap-verify`;
   - out-of-bound external requests.
4. Process reasoning repairs before Japanese polish when both affect the same
   range.
5. Process artifacts independently unless a dependency requires a shared repair.
6. Verify heavy repairs before summarizing.
7. Re-read Japanese-friction edits for technical weakening before summarizing.
6. Aggregate modified files, new artifacts, external requests, unresolved items,
   and G1-G12 counts.

## Handoff Template

```text
Job: {job_id}
Artifact: {artifact}
Editable boundary: {editable_scope}
Output location: {output_location}
Audience: {audience}
Local conventions: {local_conventions}
Reference sources: {reference_sources}
Requested pass: scan | fill | japanese-friction | verify
Gap assignments: {gap_assignments}
```

## Output

Use the run report in `../../references/report-contracts.md` for multi-artifact
jobs.

## Anti-Patterns

- Letting each artifact invent a different notation or citation style.
- Editing outside the declared boundary to make aggregation easier.
- Aggregating counts without preserving unresolved or external requests.
