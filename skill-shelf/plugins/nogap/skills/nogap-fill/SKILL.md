---
name: nogap-fill
description: Use when substantial logical gaps in a rigorous explanatory artifact must be repaired directly, especially when the fix requires reconstructing a derivation, proof, motivation, structural transition, case analysis, or corrected conclusion.
---

# Nogap Fill

Use this skill after a gap has been diagnosed as heavy, or when the user directly
asks to repair a nontrivial explanation gap.

Load shared references only as needed:

- `../../references/core.md` for scope and reference policy.
- `../../references/gap-taxonomy.md` for G1-G12 labels.
- `../../references/report-contracts.md` for final reports.

## Core Principle

Do not patch individual holes with detachable asides. Rebuild the smallest
paragraph, derivation, proof block, or section that makes the reader's route
natural from the start.

## Required Inputs

- target artifact or range;
- editable boundary;
- gap assignments or a local diagnosis;
- reference sources and local conventions when available;
- intended reader, if known.

## Workflow

1. Read the full local range that produces the gap, not only the failing line.
2. State internally what the reader already knows at that point.
3. Reconstruct the missing proof, calculation, motivation, or assumption chain
   from definitions and known results.
4. Use references to check context and omitted steps, but write the repair as an
   argument rather than a quotation or bare link.
5. Edit only inside the permitted boundary.
6. Keep the artifact's notation, citation, link, and proof style.
7. After editing, check that no new undefined term, hidden assumption, missing
   proof, or reference failure was introduced.
8. If an out-of-scope artifact must change, record an external request instead
   of editing it.

## Output

When edits are made, report the target, the gap types fixed, modified files, and
unresolved or external items. Use the fill report in
`../../references/report-contracts.md` for larger jobs.

## Anti-Patterns

- Adding "to see this..." paragraphs that feel bolted on.
- Explaining terminology while leaving the inference unsupported.
- Hiding the repair in dense bullets.
- Replacing a proof obligation with a citation.
