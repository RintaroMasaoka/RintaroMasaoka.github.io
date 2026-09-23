---
name: terminology
description: Govern whether and under what introduction condition a term may appear in a scholarly manuscript. Use when extracting suspicious vocabulary from LaTeX, Markdown, or text, assigning AI-provisional paper-admission policies, rapidly obtaining human confirmation through a keyboard-first GUI, or blocking forbidden and insufficiently introduced terms. Do not use for notation-only conventions or general prose editing.
---

Read [the shared authoring contract](../../references/authoring-contract.md) before applying this workflow.

# Govern Paper Terminology

Prevent AI-invented or reader-inaccessible language from propagating through a
paper. Treat classification as a manuscript-admission decision, not a taxonomy
of what kind of word the expression is.

## Keep The Registry Project-Owned

Use the registry path declared by the paper project. If none exists, use
`.paper-terms/registry.sqlite3` at the manuscript root. Never store live paper
vocabulary in this skill.

Resolve the intended reader from the paper contract or Reader Card before
classification. Reader assumptions belong at project scope; do not ask the
human to classify the same term on a second reader axis during rapid review.

## Extract Before Using Model Tokens

Run the deterministic scan first:

```bash
python3 <skill>/scripts/term_guard.py --db <registry> scan <manuscript paths>
python3 <skill>/scripts/term_guard.py --db <registry> --json queue
```

The extractor finds high-signal candidates such as acronyms, explicitly named
expressions, hyphenated compounds, and repeated technical-looking words. It is
a candidate generator, not a semantic judge.

## Classify By Admission Condition

Every active term receives exactly one `usage_policy`:

- `as_is`: the paper may use it without a local explanation;
- `brief_intro`: the first use must add a short gloss, expansion, or relation;
- `full_definition`: dependent prose may use it only after a precise definition;
- `forbidden`: the paper must remove or replace the expression;
- `undecided`: no proposal exists yet and the paper remains blocked.

The first four policies form the complete human classification. `deferred` is a
workflow state, not a fifth policy. Term origin, suspected coinage, source
specificity, and model rationale may support a proposal but must not become
parallel classification axes.

## Let AI Propose, Then Human Confirm

Use a lightweight model on the residual JSON queue and write all provisional
decisions in one batch:

```bash
python3 <skill>/scripts/term_guard.py --db <registry> propose-batch proposals.json
```

Each proposal needs only `term` and `usage_policy`; optional definition or
rationale fields may support downstream work. CLI proposals are always
`ai_authorized` and cannot satisfy the publication gate by default.

Start the human review surface with:

```bash
python3 <skill>/scripts/term_guard.py --db <registry> serve
```

The launcher serves the bundled `assets/gui.html` on localhost. The main
surface is a dense, one-screen list: AI proposals are preselected, multiple
terms remain visible, and human decisions update rows in place. The default
`All` view never removes a term merely because it was human-reviewed; use the
optional `Pending` filter when an unresolved-only view is useful.

Each row exposes only four numbered controls. The fixed legend defines their
manuscript actions:

- `1` / `as_is`: use directly because the expected reader already knows it;
- `2` / `brief_intro`: explain once because a phrase or sentence is enough;
- `3` / `full_definition`: define explicitly because the exact meaning must be fixed;
- `4` / `forbidden`: remove the term because it must not appear.

The complete keyboard surface is:

- `Enter`: accept the AI proposal and record human authorization;
- `1`–`4`: assign the corresponding policy above;
- `Up` / `Down` or `J` / `K`: move the active row;
- `Space`: defer without granting human authorization;

Every decision advances the active cursor while leaving the decided row in the
list. Do not ask the reviewer to write a definition, citation, or rationale
during this fast pass. Route deferred terms and manuscript obligations to a
later focused pass.

The GUI marks a record `human_authorized`, but this is channel provenance rather
than identity authentication. A process that automates the GUI or edits SQLite
directly can imitate that channel.

## Enforce The Result

Run:

```bash
python3 <skill>/scripts/term_guard.py --db <registry> check
```

The default gate blocks undecided, deferred, forbidden, and AI-only terms. It
also flags `brief_intro` and `full_definition` when the first occurrence lacks a
detectable introduction cue. A positive cue is triage evidence only; use
`$academic-writing:prose-review` with its reader-vocabulary perspective to judge whether the actual prose meets the reader's
needs.

Read [the registry contract](references/registry-contract.md) when integrating
the database, consuming JSON, or changing migration and gate behavior. Use
`$academic-writing:notation` for symbols, signs, ordering, and notation
bridges rather than storing them as words here.

## Completion Gate

Finish only when the manuscript has been rescanned, every active term has a
human-authorized policy, no deferred or forbidden term remains present, and all
required brief introductions or full definitions are realized in the paper.
