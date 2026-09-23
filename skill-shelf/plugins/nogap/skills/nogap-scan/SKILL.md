---
name: nogap-scan
description: "Use when an explanatory artifact should be scanned and diagnosed for logical gaps without necessarily editing it: skipped derivations, implicit assumptions, missing dependencies, undefined notation, weak motivation, structural leaps, incomplete cases, wrong conclusions, or missing proofs."
---

# Nogap Scan

Use this skill to detect and classify gaps before deciding what to repair.

Load shared references only as needed:

- `../../references/core.md` for scope, input contract, context loading, and
  reference policy.
- `../../references/gap-taxonomy.md` for G1-G12 labels.
- `../../references/report-contracts.md` when returning structured reports.

## Workflow

1. Confirm the target range and whether the user asked for scan-only or repair.
2. Read the target artifact before reading references.
3. Load local conventions only if the artifact or user points to them.
4. Identify candidate gaps using G1-G12.
5. Diagnose each candidate:
   - severity: light or heavy;
   - repair unit: sentence, paragraph, derivation block, section, or separate
     artifact;
   - evidence source: self-reasoning, local reference, external source, or
     calculation;
   - ownership: direct edit or external request.
6. If repair was requested, pass light fixes to ordinary editing and heavy fixes
   to `nogap:nogap-fill`.

## Output

For scan-only requests, return findings ordered by severity and location. For
multi-artifact or handoff work, use the scan report in
`../../references/report-contracts.md`.

## Anti-Patterns

- Treating every unclear sentence as a gap.
- Reporting a broad "needs more explanation" without naming the missing
  dependency, assumption, calculation, or proof obligation.
- Jumping to rewriting before the repair unit is known.
