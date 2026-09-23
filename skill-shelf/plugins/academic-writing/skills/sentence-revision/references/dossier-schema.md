# Sentence dossier schema

Use this schema as a persistent sidecar. Keep the manuscript sentence and its
dossier linked by stable IDs rather than line numbers alone.

```markdown
# Revision dossier: <artifact>

## Context

- artifact:
- section:
- target venue and reader baseline:
- reader population:
- shared knowledge / adjacent knowledge / not assumed:
- entry candidates and comparison record:
- selected entry-candidate ID / initial active problem:
- interest available / interest to be earned:
- reader-line checkpoints and licensed specialization:
- calling skill and section-level purpose:
- claim-basis location:
- revision mode: ordinary | intensive
- last synchronized manuscript revision:

## Unit plan

- section or subsection purpose:
- entry reader state:
- exit reader state:
- paragraph postconditions:
- claim order:
- dependencies on other revision files:

## Entry-candidate record (required when this unit opens a paper)

| ID | origin and legacy exposure | first scientific focus | existing salience | warrant | first-prefix postcondition | expected paper from prefix alone | local bridge to actual question | response by readership segment | presupposed downstream orientation | specialization / genericness risks | decision and decisive reason |
|---|---|---|---|---|---|---|---|---|---|---|---|
| ENTRY-01 | | | | | | | | | | | accept / reject |
| ENTRY-02 | | | | | | | | | | | accept / reject |
| ENTRY-… (when evidence reveals another trajectory) | | | | | | | | | | | accept / reject |

- selected entry:
- adversarial dependency test with title, abstract, and later prose hidden:
- inference a fixed-baseline reader makes from the selected entry:
- tradeoffs or exclusions across readership segments:
- reason the selected trajectory wins without relying on later payoff:

## <sentence-id>

- location and neighbors:
- state: working | accepted | synchronized | reopened | stale
- origin: new-prose | existing-prose
- provisional action derived independently of final wording:
- current candidate:
- reader before:
- reader after:
- governing action:
- proposition and scope:
- warrant:
- prerequisite load:
- active-load register before / after:
- required semantic components:
- topic / given / new / stress:
- backward link:
- forward link and licensed continuations:
- component map:
  - `<component>` — <necessary role>
- deletion tests:
  - remove `<component>` — <observed loss or no loss> — <decision>
- substitution tests:
  - `<original>` -> `<candidate>` — <semantic/rhetorical difference> — <decision>
- permutation or split tests:
- null-sentence test:
- materially different or null alternative:
  - `<candidate>` — <reason accepted or rejected>
- current control decision: CONTINUE | BACK(WORD) | BACK(PHRASE) |
  BACK(SENTENCE) | BACK(PARAGRAPH) | BACK(SECTION) | BACK(READER) |
  BACK(CLAIM)
- strongest reason to BACK:
- vetoes: WARRANT pass/fail | DIRECTION pass/fail | LOAD pass/fail |
  RELATION pass/fail
- backtrack trigger, if any:
- compact backtrack log for material returns only:
  - `<level>` — <observation> — <decision invalidated> — <resume point>
- accepted wording:
- change class: surface | meaning-preserving | local-meaning | structural
- residual risk and reopening condition:
- manuscript synchronized: yes | no

For the first sentence of a paper, also record:

- selected entry-candidate ID:
- expected paper after this sentence alone:
- downstream orientation imported by the actual wording:
- opening-sentence gate: pass | BACK(READER) | BACK(SENTENCE)

## Prefix checkpoint: <first sentence or paragraph ID>

- implied readership from the prefix alone:
- active scientific problem:
- expected next topics:
- newly earned specialization:
- unresolved concepts currently held in memory:
- matches the fixed reader line: yes | no
- decision: CONTINUE | BACK(READER) | BACK(PARAGRAPH)
```

In intensive mode, the fields from `reader before` through `residual risk`
should normally amount to 10--20 complete analytic statements for one
manuscript sentence. Add more only when the sentence contains independently
contestable clauses or terms. Do not multiply statements that merely restate
the accepted wording.

When a sentence is split, retain the old ID as a retired parent and assign new
child IDs. When sentences are merged, record both parent IDs. Preserve rejected
alternatives only when they represent a real structural, semantic, or lexical
choice; ordinary typos need no archaeology.

For a paper-scale project, add a compact `index.md` with one row per revision
file:

```markdown
| unit | manuscript path | dossier path | sentence IDs | purpose | status | dependencies |
```

The index routes revision and propagates invalidation. Scientific rationale
remains in the unit plan and sentence records rather than being compressed into
the index.
