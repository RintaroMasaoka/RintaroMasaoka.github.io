---
name: reader-order
description: "Prevent, diagnose, and repair author hindsight in scholarly or technical writing by checking every required meaning and inference against the reader's actual prefix. Use before drafting a new explanatory route, after substantive drafting or changes to definitions, words, notation, operations, claim status, order, or main/supplement placement, and before certifying that route; also for explicit temporal-order or reader-knowledge complaints. Require an independent adversarial prefix reader for acceptance. Include abstracts, headings, equations, captions, and local edits whose dependencies change. Exclude spelling/formatting-only changes, historical chronology checks, and scientific truth or notation-choice certification by themselves."
---

# Reader Order

The author may inspect the whole argument to design it. The accepting reader
must acquire it in the order actually presented. Later explanation cannot
repair the experience of an earlier unsupported use. This is epistemic order,
not the history of discovery or a requirement to put every proof before its
result. Do not reduce this workflow to a warning to remember the reader.

## Inputs and authority

Recover the exact revision, requested review/edit mode, editable boundary,
audience evidence, genre, visible reading route, and governing writing,
terminology, and notation instructions. Read preceding context as an author
when available; never turn the desired section entry state into an assumed
fact. If that context is unavailable, mark its dependencies unverified.

Source papers, calculations, notes, code, and data establish what is true for
the writer. They enter the reader's state only through licensed background or
what the reading route actually communicates. A glossary, source citation, or
convention ledger outside that route does not establish comprehension at use.
Use the artifact's existing records; store no manuscript state in this package.

## Separate three stores before drafting

Keep a compact, project-owned record:

| Store | What it permits | What it cannot supply |
|---|---|---|
| Licensed baseline | Specific knowledge supported by audience evidence | Paper-specific identities and relations inferred from the finished draft |
| Acquired prefix | Identifiable objects, explicit assumptions, stated propositions and learned relations from already-read text | An unmentioned condition, an unexplained mechanism, or a future definition |
| Announced destinations | An identified question, theorem, reported result or promised conclusion, at its stated scope | Knowledge of how it works, why it follows, or details not actually stated |

An identified result can serve as a stated lemma/input before its proof when
that role and its necessary conditions are explicit. Keep its unproved status
and unresolved mechanism visible in the record. A promise that a result exists
does not supply the proposition to be used. A name alone supplies no action.

Plan what each move consumes and what it adds, then draft. For every new word,
symbol, relation, comparison, operation, or inference that matters, identify
the first point that needs it. Choose an introduction, a justified stated input,
a scoped announcement, relocation, or omission. Establish only the resolution
needed there; do not turn prevention into a glossary or a beginner tutorial.

## Author-side complete trace

Read the actual visible route left to right, including within a sentence.
Enumerate every unit in the requested coverage, not just suspicious phrases.
Split at a use that depends on a later clause; do not conceal that leak inside
a multi-sentence packet or a definition-and-use block. Preserve the ordinary
visible layout and equations; a sentence containing an immediate, intelligible
definition can legitimately introduce and use it together.

At each unit, freeze the state before reading it, then record:

`unit/location | demands on identification, premise, operation and relevance |
exact baseline/prior/current witness for each | why it licenses this use |
introduced knowledge | announced but unresolved content | state after |
expression span / governing rule / evidence and disposition |
PASS / BLOCKED / UNVERIFIED`.

Check each demand at the resolution of its use. A noun already mentioned does
not establish its domain, an operator's action, an index's role, a comparison's
baseline, or why a change of subject bears on the current question. Connectives,
grammatical presuppositions, definite descriptions, and words such as
"equivalent", "correction", and "restores" can consume relations even without
an explicit inference marker. The witness must establish the relation, not just
contain the same word. A current-unit witness must occur in time for the use or
make the sentence a determinate self-contained introduction/report.

Record the earliest missing dependency. Stop accepting at `BLOCKED`; locate
the missing explanation in later text only on the author side after that
verdict is frozen. Unavailable baseline/context is `UNVERIFIED`, not proof that
the sentence is wrong. Sampling can locate defects; it cannot certify the
requested route. Author-side success is not independent acceptance.

## Independent adversarial prefix reader

This is a required acceptance step for the trigger conditions in the
description. Start a new non-authoring subagent with **no inherited task
conversation**, previous candidates, author's trace, repair report, expected
exit state, later sources, or earlier reviewer exchange. Give it only these
review instructions, the supported baseline, applicable governing guidelines,
and the ordinary visible prefix. Guideline examples must not reveal the
candidate's later content. Route the broader expression/notation compliance
assignment through `$reader-guard:adversarial-reader`; one independent
reader may perform both jobs if its input remains prefix-limited throughout.

The coordinator reveals one unit, obtains and freezes the reader's demands,
witnesses, unresolved questions and verdict, and adjudicates them **before**
revealing the next. The reader is adversarial: try to falsify each proposed
license. Demand the actual referent, applicability condition, relation, and
guideline support for every consequential notation or wording choice. Do not
fill gaps with specialist knowledge, charitable paraphrase, author's probable
intent, or what a later sentence might say. Equally, an objection needs an
exact location, a violated dependency or guideline, and a concrete consequence.
Unfamiliarity, personal taste and a quota of findings are not evidence.

The coordinator owns delegation and route selection. A subagent assigned as
the prefix reader executes the received review contract and returns records;
it does not invoke these coordinator workflows recursively or spawn a replacement
reader for itself.

Read [the execution protocol](references/prefix-protocol.md) before running
the reviewer. Use its coordinator utility to freeze reveal/record order when
Python is available; otherwise maintain the same inspectable transcript.
The utility checks record structure, witness provenance and coverage, not
semantic sufficiency or reviewer independence. The coordinator must inspect
whether the quote actually warrants the claimed use. A mechanically accepted
`PASS` with an invalid witness is a semantic failure; stop and restart after
repair. Never override a valid reader failure with an author's explanation.

For a shared filesystem, explicitly forbid filesystem, search, retrieval and
thread-reading tools during replay; audit the execution record. The boundary
is instructional unless an actual access restriction is established. Receiving
the suffix or using discovery tools invalidates independent prefix evidence.
Do not call an instructional boundary sealed. If a fresh reviewer or audited
prefix boundary is unavailable, continue authorized repair and report
`INDEPENDENT_UNVERIFIED`; do not substitute a full-text reviewer or self-review
and certify the gate. A user's opt-out changes the validation available, not
the existence of unresolved dependencies.

## Repair and replay

Repair the smallest coherent unit at the earliest unavailable use. Compare
reordering, replacing a compressed relation, narrowing a claim, marking a real
result's status, and deletion before adding explanations. "We will see" cannot
license an undefined input or turn an announced conclusion into its own proof.
Do not ban technical vocabulary, result-first abstracts, theorem statements,
or nonlinear historical exposition when their roles are clear.

When wording, baseline, or order changes a dependency, preserve the old record
and create a new revision. A reader who saw the old suffix cannot validate the
new prefix. Use a fresh reader from a separately verified unchanged checkpoint,
or from the beginning when no trustworthy checkpoint exists. The supplied
utility uses new full sessions. Inspect every affected downstream use and join,
including changed caption, heading and supplement routes. Narrow mechanical
edits that preserve all licenses do not require needless restart.

## Acceptance and output

A reader-order pass requires all units in the declared route, no unresolved
required dependency, semantically accepted witnesses, a fixed revision and
baseline, and independent adversarial prefix evidence. Record coverage,
input-boundary enforcement, reviewer identity, transcript, and separate status
for the mechanical trace, semantic judgment, and independence. Rendering,
scientific correctness, and complete notation-choice review prove other things.

For review, report actionable findings as `earliest location -> unavailable
meaning/relation -> prefix evidence and later-only location, if found ->
consequence -> smallest supported repair`. Report checked scope and unknowns.
For an authorized edit, deliver clean prose with no review vocabulary or repair
history. Put the coverage record and consequential validation limits outside
the artifact. Before accepting this skill's changes, exercise the negative and
boundary probes in [the calibration cases](references/calibration-cases.md).
