---
name: nogap-verify
description: Use for a read-only verification pass after a logical-gap repair, checking whether the gap is actually closed and whether the edit introduced new undefined notation, unsupported claims, broken references, convention drift, or downstream issues.
---

# Nogap Verify

Use this skill for independent, read-only verification after a repair. Do not
edit files while using this skill.

Load shared references only as needed:

- `../../references/core.md` for boundaries and reference policy.
- `../../references/gap-taxonomy.md` for the expected gap labels.
- `../../references/report-contracts.md` for the verification report.

## Inputs

- repaired artifact;
- previous content or diff, when available;
- original gap assignments, when available;
- local conventions and reference sources, when relevant;
- repair report, if another pass produced one.

## Checklist

1. The assigned gap is actually closed.
2. Correct existing content was not broken.
3. Added assumptions, notation, definitions, citations, and links are necessary
   and sufficient.
4. The artifact follows local conventions.
5. The proof, derivation, calculation, or reference granularity is readable.
6. The repair introduces no new undefined terms, unsupported claims, implicit
   assumptions, missing cases, or broken references.
7. Any conclusion change has downstream impact reported.

## Output

Return PASS or FAIL. For each issue, include severity, location, and the concrete
reason. Use the verification report in `../../references/report-contracts.md`
when structured output is useful.

## Anti-Patterns

- Making edits during verification.
- Re-running the whole scan instead of checking the repair's obligations.
- Passing a repair because it is longer, without checking the actual inference.
