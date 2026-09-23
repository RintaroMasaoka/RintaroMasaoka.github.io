---
name: nogap-ja-friction
description: Use when Japanese technical prose, research notes, textbook translations, explanations, or drafts feel unnatural, translated, overcompressed, register-mismatched, particle-ambiguous, rhythmically heavy, or subtly misleading even if the logical content may be correct.
---

# Nogap Japanese Friction

Use this skill to detect and repair Japanese prose friction in rigorous
explanatory artifacts. This is not a generic copyedit: preserve technical
precision, notation, and the artifact's local purpose.

Load shared references only as needed:

- `../../references/core.md` for scope, input contract, context loading, and
  output style.
- `../../references/japanese-friction-taxonomy.md` for J1-J10 labels.
- `../../references/gap-taxonomy.md` only when the discomfort may actually be a
  missing inference or proof obligation.
- `../../references/report-contracts.md` when returning structured reports.

## Workflow

1. Read the surrounding paragraph or section before editing a sentence.
2. Decide whether the discomfort is:
   - Japanese prose friction: use J1-J10;
   - reasoning gap: switch to `nogap:nogap-scan` or `nogap:nogap-fill`;
   - both: repair the reasoning first, then polish the Japanese.
3. Identify the smallest unit that produces the friction: particle, phrase,
   sentence, paragraph transition, term choice, or register.
4. Rewrite directly when editing is allowed. Preserve:
   - mathematical and physical claims;
   - assumptions and qualifications;
   - notation and term definitions;
   - citation and link style.
5. Prefer local naturalness over global stylistic rules. Match the artifact's
   existing voice unless that voice is the source of the problem.
6. After editing, re-read for technical weakening: no condition, contrast,
   dependency, or quantifier should disappear.

## Output

For review-only requests, report concrete findings by location using J-labels.
For edit requests, summarize the friction types fixed and any places where the
Japanese discomfort revealed a deeper reasoning gap.

## Anti-Patterns

- Making the prose broadly elegant while losing technical distinctions.
- Replacing all English terms with Japanese terms without checking local usage.
- Treating every stiff sentence as bad; proof prose may need controlled stiffness.
- Fixing particles locally while leaving the paragraph's topic flow broken.
