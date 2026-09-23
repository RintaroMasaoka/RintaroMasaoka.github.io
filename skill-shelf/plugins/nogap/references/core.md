# Nogap Core

`nogap` applies to any artifact where a reader must follow a chain of reasoning
or a demanding explanation: theoretical physics notes, mathematics proofs, paper
drafts, lecture notes, textbook translations, derivation notes, and technical
explanations.

The goal is not to make text longer or smoother in a generic style-editing
sense. The goal is to leave only the definitions, assumptions, justifications,
calculations, motivation, references, and prose transitions that a reader needs
in order to follow the argument without hidden jumps or avoidable friction.

## Boundary

- Core work: detect reasoning discontinuities or reader-friction, judge
  severity, and repair them.
- Local adaptation: link syntax, file layout, notation conventions, citation
  style, proof format, Japanese register, and available subagent/tooling
  patterns.

Do not assume any project-specific structure such as Obsidian links, block ids,
`textbook/` files, or a particular proof-network convention unless the target
project provides it.

## Input Contract

Minimum input:

- target artifact or target range;
- requested mode: scan only, edit, proof insertion, review, verification, or
  multi-artifact run;
- requested axis when known: reasoning gap, Japanese prose friction, or both.

Useful optional input:

- reference sources: papers, books, notes, code, data, prior derivations;
- local conventions: notation, glossary, link format, proof style, citation
  style, Japanese register, term translation policy;
- intended reader;
- editable files and boundaries.

If the intended reader is unspecified, assume a graduate student in the field
who remembers previously introduced material but should not reconstruct hidden
steps unaided.

## Context Loading

1. Read the target artifact or range first.
2. Read specified reference sources only as needed for gap localization and
   context; reconstruct the repair from definitions, assumptions, calculations,
   and proof obligations.
3. Read local convention files if they exist. Otherwise infer a minimal local
   convention from the artifact's existing style.
4. Use search, literature, or calculation only when local context is insufficient.
   Leave a source trail when external information is used.

## Reference Policy

- A citation or link alone does not repair a gap; explain why the cited result
  supports the present claim.
- Do not promote a paper's local convention into a general principle without
  checking the assumptions.
- For high-risk or time-sensitive claims, verify with available search or primary
  sources before editing.

## Output Style

- Match the target artifact's notation, citation, register, and prose style.
- Prefer prose and equations in a readable sequence; expand only nontrivial
  steps.
- Long repairs should become a section, appendix, collapsible block, lemma, or
  separate artifact according to local convention.
- The final text should read as if it was designed that way, not patched later.
