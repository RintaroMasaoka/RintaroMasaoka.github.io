---
name: prose-review
description: "Review or revise scholarly prose using selected perspectives on sentence clarity, reader vocabulary, terminology, Japanese rendering, contrasts, progression, and working memory. Preserve scientific content and requested coverage."
---

# Scholarly Prose Review

Read [the shared authoring contract](../../references/authoring-contract.md) before applying this workflow.

Use `$academic-writing:abstract`, `$academic-writing:introduction`, or `$academic-writing:exposition` when the request is to construct that artifact or its learning sequence. This skill owns focused or integrated prose inspection. For a teaching passage whose definitions, derivations, order, or main/supplement placement change substantively, also apply the [dedicated sequential review](../../references/audit-reader-state.md#dedicated-sequential-review).

## Determine the audit shape

Recover separately:

- **Purpose:** drafting prevention, direct revision, review, or diagnosis.
- **Coverage:** a named concern, concerns implied by the request, or a
  comprehensive audit.
- **Execution:** one focused pass, an integrated multi-perspective pass, or
  separate perspective-specific passes.
- **Independence:** whether the user needs independent judgments or only a
  coherent final result.

Infer these from the request and artifact when stable. Ask only when plausible
choices would materially change coverage, cost, or the form of the result.
Do not inspect every perspective merely to discover which prompt to load. Read
each prompt selected for an actual pass; read the whole catalog only when the
chosen coverage is comprehensive.

For undefined terms or symbols, select `audit-reader-state` and its [term and symbol availability check](../../references/audit-reader-state.md#term-and-symbol-availability). Establish what expressions denote before evaluating whether reasoning follows. A request about definitions does not by itself request proof auditing, terminology governance, or a new glossary.

Choose an execution shape proportionate to the task:

- **Focused:** select one or more perspectives from an explicit request,
  task purpose, or already identified symptom and apply them only to relevant
  spans.
- **Integrated:** let one agent apply multiple selected perspectives when
  shared context and synthesis matter more than independence.
- **Independent:** when the user requests independent review, or when separated
  judgments materially improve a broad audit, give each selected perspective
  to a newly instantiated subagent whose context excludes the parent task's
  analysis, earlier review exchanges, and sibling findings, when that isolation
  is available and permitted. Give each reviewer the raw artifact, relevant
  audience and terminology context, and only its assigned prompt. Parallelize
  when useful, then integrate findings by evidence rather than vote.

If separate reviewers are unavailable, or the context boundary cannot be
established, run clearly separated passes but do not describe them as
independent. Comprehensive coverage may select every perspective; ordinary
targeted work must not do so by default.

## Perspective catalog

The perspectives do not form a hierarchy or a required processing order. A
span may participate in more than one relation. The decision question, rather than the identifier, defines
what counts as a failure.

| Perspective | Relation under test | Decision question | Select when | Do not infer from | Prompt |
|---|---|---|---|---|---|
| `sentence-clarity` | sentence form ↔ exact scientific meaning | Does restructuring reduce a demonstrated reading burden without removing conditions or necessary reasoning? | Clutter, ambiguous agency, buried predicates, or inconsistent naming | Word-count thresholds, passive voice, or a demand for shortest prose | [Sentence clarity](../../references/sentence-clarity.md) |
| `reader-vocabulary` | expression at first use ↔ licensed reader knowledge | Can the reader identify the objects and roles used by this sentence? | Unavailable vocabulary or workflow terminology in reader-facing prose | Technical register or an established compressed term alone | [Reader vocabulary](../../references/reader-vocabulary.md) |
| `audit-term-status` | compact expression ↔ disciplinary or local term system | Has the expression earned term status, and does it expose every relation still needed for the claim? | An unestablished and functionally undefined task-local compound or nominal label suppresses a relation the reader must reconstruct | Length, kanji count, hyphenation, technical density, or assumed AI authorship alone | [Audit term status](../../references/audit-term-status.md) |
| `audit-japanese-rendering` | source concept, proposition, or name ↔ Japanese wording | Does the Japanese preserve term identity, propositional content, and personal-name identity through established terminology and natural sentence structure? | Japanese scholarly prose may contain an unestablished rendering, word-for-word substitution, source-language syntax, inappropriate name treatment, or another translation choice unnatural in its sentence and field | A blanket preference for Japanese, English, katakana, kanji, or plain language | [Audit Japanese rendering](../../references/audit-japanese-rendering.md) |
| `audit-negated-contrast` | rejected proposition ↔ license, resolution, and consequence | What exactly is rejected, what makes it live, what resolves it, and what changes after the contrast? | The proposition, license, resolution, or consequence of a negated alternative, corrective contrast, or anticipated misconception is uncertain | The presence of negation, phrases such as “not merely,” or an AI-like impression alone | [Audit negated contrast](../../references/audit-negated-contrast.md) |
| `audit-expository-progression` | expository move ↔ subject-level or navigational dependency | What mathematical, physical, historical, evidential, methodological, or navigational dependency makes this move follow here? | Writer-, reader-, or document-centered actions, manufactured inquiry, premature synthesis, repeated templates, takeaway certification, or instruction residue may be substituting for such a dependency | Imperative or verbal wording, an explicit roadmap, first-person prose, or a question heading alone | [Audit expository progression](../../references/audit-expository-progression.md) |
| `audit-reader-state` | statement at a position ↔ information available to the intended reader | Are the statement's premises available, and does its explanation depth fit the audience's licensed knowledge? | A transition spends unavailable knowledge, preparation re-teaches licensed basics without a role, or audience corrections have not reached dependent prose and verdicts | Technical density, stating a result early, using an abstract or roadmap, or assuming field-appropriate background alone | [Audit reader state](../../references/audit-reader-state.md) |
| `audit-working-memory` | information introduced or separated ↔ retention and integration at its use | What must the reader hold or reconstruct before making the next inference, and can the presentation remove that burden? | Delayed use, suspended questions, notation switching, split attention, or compressed dependencies may impose avoidable mental bookkeeping | Length, symbol count, technical difficulty, repetition, or a fixed capacity limit alone | [Audit working memory](../../references/audit-working-memory.md) |

Use the perspective boundaries this way:

- `audit-term-status` asks whether a compact label may function as a term at
  all, regardless of language or provenance. `audit-japanese-rendering` asks
  how a concept, proposition, or personal name should be expressed in Japanese.
  Apply both when a Japanese rendering also creates an unearned term.
- `audit-negated-contrast` reconstructs one rejected proposition and tests its
  license, resolution, and consequence. `audit-expository-progression`
  reconstructs the dependency that organizes progression and tests whether
  editorial tasks displaced it. Either perspective may apply at the sentence,
  paragraph, or section level; apply both when both relations fail.
- `audit-reader-state` tests whether the intended reader has the needed
  information now. It can accompany any other perspective whether the missing
  item appears later or never appears; difficulty or weak wording alone does
  not select it.

- `audit-working-memory` tests retention and integration across the actual
  reading sequence. Previously introduced information can still impose an
  avoidable burden; a legitimate expository move can still be poorly placed
  for its use. Select this gate for those demands without treating necessary
  reasoning or cumulative explanation as defects.

If no inclusion test matches the chosen work, do not manufacture a catalog
problem. Use an appropriate specialized skill or the ordinary editing workflow.

## Shared contract

Recover from the request and artifact, when available:

- the exact passage and whether the user wants review or direct revision;
- publication language, discipline, genre, and intended readership;
- established terminology and notation in the surrounding manuscript;
- source text when the task concerns Japanese rendering.

Infer missing context from the artifact when the choice is stable. Ask only
when two plausible readings would produce materially different prose.

Preserve claims, logical relations, modality, quantifiers, assumptions,
citations, and disciplinary term identity. Notation and expository order may be
revised when the selected task warrants it; propagate changes consistently and
preserve mathematical meaning, conventions, and reference integrity. A writing
perspective may expose a scientific or logical ambiguity, but it must not
silently resolve one without evidence.

For an edit request, return or write clean artifact-ready prose without
labels, audit narration, rejected wording, or discussion of the repair. For a
review-only request, identify the exact spans, selected perspective, and
concrete revision candidates. Match the artifact's language and local
formatting.

When several passes contribute, reconcile duplicate or conflicting findings
against the shared contract and the source evidence. Preserve distinct findings
that arise from different relations; do not collapse them merely because they
concern the same span.

When working from files, read the surrounding paragraph or section and any
project-owned terminology or notation record before editing. Treat those
artifacts as local authority; do not store manuscript-specific vocabulary in
this skill.

## Adding perspectives

Add a perspective only when it has a distinct inclusion test, changes editing
decisions, and has a boundary case that must remain unchanged. Put its full
procedure in one focused file under `references/` and add one row to the
catalog. Do not grow this entrypoint into a collection of generic virtues or
isolated bad-phrase replacements.
