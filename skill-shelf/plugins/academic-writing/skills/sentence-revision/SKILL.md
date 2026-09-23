---
name: sentence-revision
description: "Revise research-paper prose through a persistent sentence dossier that records the intended reader-state transition, claim and warrant, lexical and structural choices, counterfactual deletion/substitution/reordering tests, alternatives, and final decision. Use for deliberate sentence-level revision in any paper section; do not use as a substitute for scientific claim verification or section-level argument design."
---

# Sentence Revision

Revise a paper sentence as a designed intervention in a reader's state, not as
an isolated string to make smoother. Preserve the editorial basis of the
revision in a sidecar dossier so that later changes can recover what the
sentence was meant to accomplish, which alternatives were rejected, and which
assumptions would require reopening the decision.

This skill operates after the section's scientific claims, reader baseline, and
local argumentative purpose are available. It may expose a defect in those
inputs, but it must not invent a claim, source, audience, or section purpose to
make a sentence work. Return to the calling paper skill when the intended
reader transition is unsupported or structurally misplaced.

When the sentence opens a paper, the calling skill must also supply an
entry-candidate comparison made before new prose drafting. In revision, the
legacy opening must be quarantined while independent candidates are derived,
then admitted as a labeled candidate. Do not accept a first sentence from a
reader line fixed without considering materially different entry trajectories.
Sentence-level polish cannot validate the choice of where the paper begins.

## Preserve the revision record

Store the record separately from the manuscript. Use a project-declared
revision location when one exists; otherwise place a Markdown sidecar beside
the manuscript as `<artifact-stem>.revision.md`. Give each sentence a stable ID
that survives line wrapping and small edits. Record the exact candidate and
final wording, but do not put diagnostic language, rejected alternatives, or
the history of the revision into the paper itself.

The dossier is a record of inspectable editorial decisions. Include claims,
alternatives, tests, and reasons another editor can challenge. Do not attempt to
preserve an unfiltered stream of private thought. A reason such as “clearer,”
“stronger,” or “flows better” is incomplete until it names the reader
expectation, ambiguity, scope change, emphasis, or inferential burden that
changes.

## Organize a paper-scale dossier

For a complete paper, keep one revision file for each section. Split a long or
independently revised section into subsection files. Do not accumulate the
whole paper in one ledger: an editor must be able to load the active unit and
its immediate dependencies without loading every sentence dossier.

Use a structure equivalent to:

```text
revision/
  index.md
  introduction.md
  model.md
  replica-construction.md
  results/
    corner-entropy.md
    torus-geometry.md
```

The exact names follow the manuscript. `index.md` records the manuscript path,
section or subsection dossier, sentence-ID range, unit purpose, status, and
cross-unit dependencies. It must not duplicate every sentence record. Use
stable IDs such as `INTRO-P01-S01` that identify section, paragraph, and
sentence without depending on source line numbers.

Maintain these states:

- `working`: wording and diagnosis are being developed together;
- `accepted`: the current wording passes the tests but has not yet been
  confirmed in the manuscript;
- `synchronized`: the accepted wording matches the manuscript;
- `reopened`: a local problem has sent the work back to an earlier decision;
  and
- `stale`: an upstream change has invalidated the recorded reader state,
  warrant, or neighbor relation.

A changed sentence normally reopens its immediate neighbors because their
given--new structure may have changed. A moved paragraph makes all of its
sentence records stale. A change to a section claim, reader baseline, or
paragraph postcondition makes every dependent record stale. Record these
dependencies in the index and do not describe a section as revised while it
contains stale records.

## Keep writing interruptible

Do not model the work as manuscript first and revision afterward. Do not model
it as a completed revision plan followed by transcription into prose. Wording
and its critical account develop together. The operational requirement is not
to enumerate revision rounds; it is to preserve a live option to stop forward
generation and return to an earlier decision as soon as the developing account
produces discomfort or contradiction.

Begin a sentence with the current section purpose, paragraph postcondition,
reader-before state, relevant claim and warrant, neighboring accepted prose,
and a candidate wording. Develop the sentence dossier alongside that wording.
After each substantive diagnostic statement, choose between only two kinds of
move:

```text
CONTINUE: the current assumptions remain tenable; inspect the next component.
BACK(<level>): the new observation invalidates or destabilizes an earlier
decision; stop forward explanation and return to the earliest affected level.
```

`<level>` is one of:

- `WORD` or `PHRASE`: change a lexical choice, modifier, connective, reference,
  modality, or information position;
- `SENTENCE`: change or delete the candidate's governing action or semantic
  payload;
- `PARAGRAPH`: change the paragraph postcondition, claim order, or boundary;
- `SECTION`: change the section's role, entry state, exit state, or division;
- `READER`: return to the fixed audience or reader-line record because the
  prose assumes a different population, foregrounds the wrong problem, or
  specializes before the move has been earned; and
- `CLAIM`: return to the claim basis because the proposition, warrant, scope,
  or asserted relation is unsupported.

When `BACK` is triggered, do not finish the remaining defense of the current
wording. Record only the observation that triggered the return, mark the
affected downstream records `reopened` or `stale`, repair the earliest affected
decision, and resume from there. The backtrack is a control operation, not a
requirement to preserve every intermediate draft. Keep a compact backtrack log
only for changes that alter scope, structure, scientific meaning, or a decision
likely to recur.

Signals for `BACK` include an unexplained sense that the sentence is doing too
much; a component whose necessity can be defended only by referring to later
prose; a reader-after state copied from the candidate's vocabulary; a topic or
stress position that points away from the paper's path; a claim whose warrant
is weaker than its grammar; a deletion that causes no loss; or an alternative
that reveals that the supposed sentence action is unnecessary. Treat such a
signal as evidence to inspect, not as noise to smooth over.

Do not let one successful test conceal a failure in another. At each stopping
point, apply five independent vetoes:

- **WARRANT:** Is the proposition, scope, modality, comparison, and evaluation
  licensed by its evidence?
- **DIRECTION:** For the explicitly named target population and current reader
  line, does this wording move attention toward the intended scientific problem
  and license the required continuation?
- **LOAD:** Which concepts, distinctions, and questions remain unresolved after
  this sentence? Does the sentence use an existing item or merely add another
  axis for the reader to hold?
- **RELATION:** Does the main assertion state a scientific relation among named
  domain objects, or only assign a role in the manuscript such as posing a
  question, providing a setting, offering a route, or serving as a test?
- **COHERENCE:** Does the sentence preserve the organizing relation that the
  paragraph prefix taught the reader to use? If it contains a connective,
  comparison, generalization, or change of scope, name the comparison set,
  ordering, and boundary it presupposes. Do these match the coordinates under
  which the preceding examples or claims were grouped, or does the sentence
  silently switch axes?

Before choosing `CONTINUE`, state the strongest available reason to go back,
then mark each veto separately. `CONTINUE` is allowed only when all five pass.
Do not average them, and do not let scientific correctness compensate for a
wrong attention direction, excessive cumulative load, outline leakage, or an
incompatible paragraph relation. When `DIRECTION` fails because the audience
or narrowing path was mischosen, use `BACK(READER)`. When `LOAD` fails across
several sentences, use `BACK(PARAGRAPH)` rather than compressing the same
material more tightly. When `COHERENCE` fails, locate the earliest actual source of inconsistency.
Use `BACK(PHRASE)` or `BACK(SENTENCE)` when the accepted prefix remains coherent
and only the transition is wrong. Use `BACK(PARAGRAPH)` when the grouping or
order itself created the false inference.

When a proposed sentence asserts or implies ordering, class membership,
generalization, contrast, scope change, or a coordinate pivot across earlier
claims, maintain a compact structural register alongside the active-load
register:

```text
items currently grouped | warranted co-membership relation |
salient or nested relations inferred from their order |
coordinates held fixed or varied |
next transition's comparison set, ordering, and boundary
```

Reconstruct this register from the accepted paragraph prefix rather than from
the intended sentence. A transition may change coordinates when it marks the
pivot and the new domain relation or its relevance is warranted. A deliberately
heterogeneous list is valid when its shared property is explicit and the
transition refers to that property. An unmarked or unsupported change fails:
a sequence of individually defensible sentences does not license a silent
change in what the paragraph is comparing.

### Additional opening-sentence gate

For the first sentence of a paper, `DIRECTION` cannot pass solely because the
sentence leads efficiently to the planned second sentence. Before accepting
it, verify against the calling skill's entry-candidate record:

- the wording activates the selected scientific problem rather than a
  downstream premise useful to the authors;
- a fixed-baseline reader can identify why this is a live scientific subject
  without seeing the title, abstract, or later prose;
- the likely continuation inferred from this sentence still includes the
  paper's actual path;
- the sentence does not import the immediate subfield's eventual decomposition
  of the problem as shared orientation; and
- the rejected entry candidates remain rejected for substantive trajectory
  reasons, rather than because the accepted sentence was drafted first.

Record what paper the reader would expect after this sentence alone. If that
expectation is wrong, too narrow, or empty, use `BACK(READER)`. If the sentence
could introduce many unrelated papers without producing a more specific
scientific orientation, use `BACK(SENTENCE)`. A sentence can fail both tests;
return to the earliest affected decision.

Maintain a small active-load register while working through a paragraph:

```text
introduced but not yet used | unresolved distinctions | live questions |
specialized terms whose relevance is not yet earned
```

Remove an item when the paragraph spends or resolves it. If the register grows
across consecutive sentences without a corresponding reduction, stop. A short
sentence may still fail the load veto by introducing a new dimension, phase
class, geometry, observable, and formalism into an already open chain.

Treat vague evaluators and defensive scope substitutes as alarms. Words such as
“clearest,” “natural,” “important,” “documented,” “certain settings,” “this
framework,” and “viewpoint” require a named comparison, domain, or mechanism.
They are not prohibited vocabulary, but if their function is to hide an
unsupported ranking, an unnamed class, or a missing relation, use
`BACK(PHRASE)` or `BACK(SENTENCE)`.

Do not advance by writing several manuscript sentences and later producing
plausible rationales for them. Before moving to sentence N+1, sentence N must
have a developed dossier, a real opportunity for `BACK`, an accepted wording,
and a synchronization check. The dossier need not exhibit a backtrack when no
substantive problem appeared. It must be written in a way that could stop,
delete, or redirect the sentence rather than inevitably justify it.

For existing prose, prevent the current sentence from defining its own
purpose. Derive the provisional action and semantic payload from the section
purpose, paragraph postcondition, claim basis, and neighboring prose without
using the sentence's wording as evidence. Then examine the existing sentence
with the same `CONTINUE`/`BACK` choice. It receives no presumption of survival.

Paragraph planning precedes sentence work, but it remains revisable. A sequence
of individually defensible sentences can still make a redundant or misdirected
paragraph. After accepting each sentence, reread the paragraph prefix and use
`BACK(PARAGRAPH)` when the actual reader trajectory departs from the intended
one.

## Choose the depth

Use **intensive mode** when the user requests word-by-word care, when the
calling skill requires it, or when the sentence opens a paper or section,
states a central result, synthesizes a literature, introduces a decisive
contrast, or has repeatedly resisted revision. Write roughly 10--20 complete
analytic statements for each manuscript sentence. This is a target for enough
discrimination, not a quota to fill with paraphrase.

Use **ordinary mode** for lower-risk prose. It may combine fields compactly,
but it must still state the pre-state, post-state, sentence action, warrant,
neighbor relation, and result of the necessity tests. Escalate to intensive
mode when an ordinary dossier cannot explain why the exact sentence is needed.

## Build the sentence dossier

For each sentence, record the following before accepting the wording. In
intensive mode, develop the entries as complete propositions rather than terse
labels.

1. **Anchor and working status.** Give the stable sentence ID, manuscript
   location, current candidate, and state: working,
   accepted, synchronized, reopened, or stale.
2. **Reader before.** State what the fixed target reader knows, what is salient,
   which question is live, and what the reader reasonably expects at this exact
   point. Distinguish knowledge from attention and interest.
3. **Reader after.** State the smallest observable change the sentence should
   make. Use capacities such as identify, distinguish, connect, assess, or
   expect. Do not prescribe agreement or excitement.
4. **Single governing action.** Name the sentence's principal action on the
   argument. A sentence may contain several clauses only when their functions
   jointly realize one transition. If its actions can be removed independently,
   split or delete them.
5. **Scientific content and authority.** State the exact proposition, its scope,
   its source or manuscript warrant, and the strongest licensed wording. Mark
   editorial judgments separately from truth-apt claims.
6. **Prerequisite load.** List the concepts and relations the reader must
   retrieve to process the sentence. Remove or defer a prerequisite that is not
   needed for this transition. A short sentence can still impose high load by
   switching among several conceptual axes.
7. **Information structure.** Identify the sentence topic, the given material
   that links backward, the new material, and the intended stress position.
   Check that grammatical placement produces the intended emphasis.
8. **Forward link.** State the family of continuations licensed by the sentence
   and the specific next move it prepares. The sentence must not point mainly
   toward a neighboring literature the paper will not pursue.
9. **Component map.** Divide the sentence into the smallest semantically useful
   phrases and assign each a necessary role: identify the object, delimit scope,
   express modality, state the relation, connect backward, carry new
   information, or control emphasis. Audit an individual word when its exact
   choice changes truth conditions, scope, modality, register, reference, or
   emphasis. Treat purely grammatical words as part of their construction
   unless choosing among them changes one of those properties.
10. **Deletion test.** Remove each mapped component in turn. Record the exact
    loss: false or broader claim, missing referent, broken syntax, displaced
    emphasis, lost connection, or no loss. Delete components whose removal has
    no material cost.
11. **Substitution test.** Try the nearest simpler or more ordinary expression.
    Keep the original only if the substitute changes precision, scope,
    connotation, disciplinary meaning, rhythm needed for parsing, or the
    reader-state transition. Familiarity alone does not justify a technical
    term; technicality alone does not justify replacing it.
12. **Permutation and split test.** Move clauses and modifiers, then test a
    two-sentence version. Compare topic continuity, stress, attachment,
    inferential order, and cumulative load. Prefer the arrangement that makes
    the intended reading easiest without distorting the claim.
13. **Null-sentence test.** Delete the whole sentence and read the paragraph.
    If the target postcondition, argumentative dependency, or justified pace is
    unchanged, the sentence is unnecessary. Do not save it because it is true,
    elegant, cited, or expensive to produce.
14. **Alternatives and backtrack status.** Test at least one materially
    different candidate in intensive mode. State why it fails or what tradeoff
    it makes; do not merely rank alternatives by taste. Include the null
    alternative when deletion is plausible. Record whether the current
    observation licenses `CONTINUE` or requires `BACK(<level>)`.
15. **Decision and residual risk.** Quote the accepted wording, name the tests
    it passes, and record any unresolved evidence, audience, terminology,
    cadence, or neighbor dependency that would reopen it.

For the first sentence of a paper, add the selected entry-candidate ID, the
expected-paper inference under the opening-only test, any downstream
orientation imported by the wording, and the result of the additional
opening-sentence gate. These fields are prerequisites for `CONTINUE`, not an
after-the-fact explanation.

Read [the dossier schema](references/dossier-schema.md) when creating or
updating the persistent record. Read [the method basis](references/method-basis.md)
when adapting this workflow, explaining how it relates to established revision
practice, or deciding whether a proposed new test belongs here.

## Revise recursively without losing scale

Work from the larger decision toward the smaller one: section purpose,
paragraph transition, sentence action, clause structure, phrase, then word.
Word-level care cannot rescue a sentence whose action is unnecessary or whose
reader transition belongs elsewhere. Conversely, a sound paragraph plan does
not excuse a sentence whose local wording creates the wrong scope or emphasis.

After changing a sentence, reread its predecessor, successor, and paragraph.
Update their dossiers when the change alters what is given, what is new, which
question is live, or where the paragraph lands. Revision is recursive: a local
edit may reveal a paragraph-level defect, and a paragraph change may invalidate
previously accepted lexical choices.

Classify each accepted change as one of:

- surface correction with no intended meaning change;
- meaning-preserving reformulation;
- local meaning change within the sentence or paragraph; or
- structural meaning change that alters the section's argumentative path.

Return structural meaning changes to the calling section skill before applying
them. A sentence dossier records and tests a design; it does not grant authority
to redesign the paper silently.

## Acceptance gate

Accept a sentence only when all of the following hold:

- its pre-state follows from the actual preceding prose for the target reader;
- its post-state is both useful here and attainable from the sentence;
- its reader-before state names the same target population and current reader
  line used by the section, without silently substituting a narrower expert;
- its governing action is necessary to the local argument;
- its scientific proposition and strength have a traceable warrant;
- its prerequisites do not exceed what has been established or what the
  sentence can supply without changing focus;
- its topic, given--new progression, and stress position support the intended
  reading;
- every retained component survives deletion or has a documented grammatical
  dependency;
- no tested simpler substitute preserves the same function more cleanly;
- the sentence remains necessary under the null-sentence test; and
- its dossier contains genuine stopping points at which a diagnosis could have
  triggered `BACK`, rather than a rationale that was guaranteed to preserve the
  final wording; and
- WARRANT, DIRECTION, LOAD, and RELATION each pass independently, with the
  strongest reason to go back recorded; and
- when it is the first sentence of a paper, it instantiates a preselected entry
  trajectory, passes the opening-only expectation test, and does not depend on
  hidden later prose or an unearned subfield orientation; and
- its accepted wording and residual risks are recorded in the sidecar.

Do not force every sentence to sound maximally compressed. Repetition,
qualification, cadence, and an explicit connective can be necessary when they
control interpretation or processing. The gate requires a reason for each
retained component, not the fewest possible words.
