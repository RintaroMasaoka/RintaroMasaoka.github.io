---
name: introduction
description: "Draft, revise, or audit the introduction of a physics research paper or preprint. Use when the introduction must compare independent entry trajectories before fixing its reader line, preserve a physics-venue reader baseline, earn attention across the relevant physics readership, position prior work without reshaping the field around the paper, and state the paper's problem, results, and scope. Apply PRB or PRL venue profiles only when that journal is the actual target. Do not use for non-physics papers, study notes, reviews, teaching introductions, or general academic prose."
---

# Physics Paper Introduction

Write an introduction for a physics research paper, not a tutorial on its subject. The
reader is professionally competent but has not agreed in advance that the
paper's model, method, or question deserves attention. Treat assumed knowledge
and earned interest as separate design problems. Establish the reader baseline
from the venue and article type, whether that evidence implies a broader,
narrower, or differently composed readership. When venue evidence is unavailable
or inconclusive for a physics manuscript, use the shared technical knowledge of
a broadly trained graduate physicist as an explicit fallback. Readers may be
experts in a neighboring field rather than in the paper's immediate subfield.
Use this established reader baseline throughout the draft and audit.

## Treat the gate as a control system, not a checklist

The purpose of this skill is to prevent the editor from having to discover one
new defect after every repair. A list of desirable properties is insufficient
when an agent can notice them, write plausible rationales, and still accept the
same bad decision. Run the Introduction through ordered veto gates, preserve
the evidence used at each gate, and stop at the earliest failure. Later
strengths never compensate for an earlier failed prefix.

Use this order:

```text
G0 source, body, and literature recovery
    -> G1 pre-draft claim basis and warrant
    -> G2 venue population and article-type contract
    -> G3 interest provenance and entry candidates
    -> G4 first-prefix entry
    -> G5 earned narrowing at every restriction
    -> G6 paragraph relation and working-memory load
    -> G7 wording-level claim, scope, terminology, and prose
    -> G8 isolated review and venue-exemplar calibration
```

Each gate returns `PASS`, `BACK(<gate>)`, or `UNRESOLVED`. Do not score or
average the gates. On `BACK`, invalidate every downstream artifact, repair the
earliest failed decision, and regenerate the affected prose from that point.
On `UNRESOLVED`, obtain evidence or report the unresolved condition; do not
convert uncertainty into a stylistic pass.

For every substantial new draft or reader-line revision, retain a compact gate
record:

```text
gate | evidence inspected | decision | earliest failing prefix |
invalidated downstream artifacts | repair performed | residual uncertainty
```

The record must make acceptance reproducible by another agent. An author's
explanation of what a sentence was intended to do is not evidence that it did
it. Judge the cold prefix, the cited sources, and the manuscript body.

Use the following contracts. The output of one gate is the required input of
the next; a missing output is `UNRESOLVED`, not an implicit pass.

| Gate | Required input | Veto question | Required output | Roll back here when |
|---|---|---|---|---|
| G0 | manuscript body or result record; full relevant Introductions; venue materials | Is the evidential surface complete enough to decide the paper's claims, readership, and prior state? | source inventory with unavailable evidence marked | a necessary source, body result, or article-type fact is missing |
| G1 | G0 inventory | Is every candidate field, prior-work, and present-paper proposition warranted at its proposed scope? | claim basis with scope and maximum wording | a claim, relation, significance statement, or limitation lacks warrant |
| G2 | venue profile and G0 literature sample | Is one stable population fixed without substituting the immediate microcommunity? | reader population and segment record | the assumed knowledge or readership comes only from convenient prose or nearby specialists |
| G3 | G1 claim basis and G2 population | Does each entry candidate have evidence-backed interest provenance independent of the paper's later story? | compared candidates and selected reader line | the stake is merely understandable, author-important, or supplied by hidden later context |
| G4 | selected G3 candidate | Does the actual cold first prefix activate that problem and its consequence without ceremonial generality or downstream orientation? | accepted first-prefix postcondition and cold snapshot | the first prefix is empty, misleading, or prematurely specialized |
| G5 | accepted prefix and interest ledger | Is every new restriction licensed by a benefit visible in the preceding accepted prefix? | narrowing checkpoints and specificity ledger | dimension, regime, observable, decomposition, geometry, model, or method is spent before its payoff is available |
| G6 | G5 trajectory, G1 claim basis, and accepted cold prefix | Can evidence-permitted paragraph postconditions be defined, and do the resulting grouping, transitions, working-memory load, and continuation remain coherent at every prefix? | paragraph postconditions fixed before claim selection; accepted paragraph sequence; cold-prefix snapshots | a postcondition is unsupported or retrospective, or the paragraph silently changes coordinates, overloads memory, or loses the live problem |
| G7 | G1 claim basis and G6 sequence | Does each sentence express the licensed claim with correct scope, terminology, relation, and information structure? | synchronized manuscript and sentence dossier | wording changes truth conditions, direction, load, or relation |
| G8 | verdict-neutral gate specification; Introduction under review; raw body or result record; venue materials; full comparison Introductions or source locations | Does an isolated reviewer find an earlier failure when reconstructing G0--G7 from raw evidence? | independent gate record and verdict, then an author-side comparison with the hidden original record | the reviewer finds a valid earlier failure or cannot inspect required evidence |

Map sentence-revision rollback labels to these gates rather than treating them
as a second competing system: `BACK(CLAIM)` returns to G1;
`BACK(READER)` returns to the earliest of G2--G5 implicated by the finding;
`BACK(SECTION)` returns to G3--G6 as appropriate; `BACK(PARAGRAPH)` returns to
G6; and `BACK(WORD|PHRASE|SENTENCE)` returns to G7 unless the local symptom
reveals an earlier dependency failure. Record the numeric gate in the section
gate record and the semantic label in the sentence dossier.

### Separate execution failures from gate failures

When a generated Introduction exhibits a defect, first classify the event:

- **execution failure:** an existing gate would have rejected the artifact if
  applied as written;
- **gate-specification failure:** the artifact can pass every existing gate
  while retaining the defect, or the gate has no field capable of representing
  the defect; or
- **evidence failure:** the decision cannot be made because the literature,
  venue, or body support was not recovered adequately.

For an execution failure, rerun from the missed gate and preserve the case as a
regression check. For a gate-specification failure, repair the reusable
decision contract before repairing the manuscript; then rerun the regression
cases and generate again from the earliest invalidated stage. For an evidence
failure, recover the missing evidence before editing either prose or gate.
Never treat a better manuscript sentence by itself as a successful repair of a
gate-specification failure.

Read [the gate calibration cases](../../references/introduction-gate-cases.md)
when changing the gate or when repeated feedback shows that the current gate
accepted a defective Introduction. The cases are behavioral probes rather
than templates for prose.

### Require an automatic generate--audit--repair loop

After the gate admits a reader line and the Introduction is drafted:

1. give an isolated reviewer the Introduction under review, raw body or result
   record, venue materials, the full comparison Introductions or inspectable
   source locations, a verdict-neutral copy of the gate specification, and a
   neutral review question; omit the author-produced source inventory, claim
   basis, reader population and segments, candidate set and ranking,
   postconditions, gate decisions, authoring discussion, repair log, and
   verdicts;
2. require the reviewer to locate the earliest failed prefix, distinguish
   knowledge from interest, and compare the entry behavior with genre-matched
   venue exemplars;
3. classify every valid finding as execution, gate-specification, or evidence
   failure;
4. repair the gate first when its contract was insufficient, invalidate
   downstream prose, and generate again; and
5. compare the reviewer's independently produced gate record with the hidden
   author-side record only after the verdict, and use a fresh isolated reviewer
   for any second blind audit.

Use an available isolated reviewer capability. When the active environment
provides a dedicated blind-review skill, follow its isolation and two-round
protocol. Otherwise instantiate
a fresh reviewer with no authoring or prior-review history, pass the neutral
packet once, prohibit follow-up debate, and use at most two blind rounds within
one uninterrupted automatic loop. After the second audit, apply justified repairs, run local regression
checks, and report any remaining gap rather than manufacturing a pass. A
later user instruction starts a new loop. Acceptance requires both a passing
artifact and a gate that would have rejected the observed failure class before
the user named its concrete symptom.

Do not ask the user to perform routine gate discovery. Ask only when a value
judgment, scientific priority, authorial commitment, or unavailable evidence
cannot be inferred from the manuscript, venue, literature, or prior decisions.

## Fix the reader line, not only the audience label

The venue-level reader baseline answers what the audience can reasonably know.
It does not determine what the Introduction should foreground first or how
quickly it may specialize. Record a separate **reader line**: the scientific
problem initially made salient and the maximum specialization licensed at each
successive prefix. Knowledge and line are independent. A reader may know the
area law, conformal field theory, or a standard formalism without treating any
of them as the natural entry to this paper.

Before drafting or materially revising, record:

```text
reader population | shared knowledge | adjacent knowledge | not assumed |
entry-candidate record | selected initial active problem |
interest already available | interest that must be earned |
narrowing checkpoints | maximum specialization licensed at each checkpoint
```

For interest, replace unsupported intuition with an **interest-provenance
ledger**:

```text
prefix | active problem | population segment | reason this segment already
values the problem, if any | source of that reason | stake created by this
prefix | restriction introduced | benefit now visible from this restriction |
dropout risk
```

Knowledge of a term is never evidence of interest in the problem selected with
that term. “Relevant to the paper,” “the reader can understand it,” and “the
next paragraph explains it” are invalid interest provenance. Existing
interest must be supported by the venue contract or by representative
literature for that readership. Newly earned interest must be visible in the
accepted prefix itself, without the title, abstract, planned continuation, or
author rationale.

Name a real population, such as a regular-article reader of the target journal
or a neighboring specialist within that readership. “The reader” alone is not
an audience specification. For each knowledge item, distinguish familiarity
from active salience: a shared fact may remain unmentioned until the argument
needs it. For each narrowing checkpoint, state what preceding scientific
relation earns the move inward. Do not license a model, geometry, method, or
formalism merely because it appears later in the paper or is familiar to the
authors' community.

Audit the line at four scales:

- **Entry:** Does the opening activate the selected, independently compared
  scientific payoff or problem for the fixed population, or does it begin at a
  downstream obstruction before the payoff has been established?
- **Narrowing:** Does each move to a dimension, phase class, geometry, model,
  or formalism spend interest and knowledge already available in the prefix?
- **Stability:** Does the implied audience remain the same, or has the prose
  silently substituted an immediate-subfield expert?
- **Destination:** Do the continuations licensed at each prefix still include
  the paper's actual question, rather than a neighboring program made salient
  by an illustrative example?

When a sentence is understandable but chooses the wrong entry or narrowing
line, use `BACK(READER)` through `$academic-writing:sentence-revision`. Return to the
reader-line record and revise the earliest checkpoint that licensed the move.
Do not repair the mismatch by adding definitions after the specialization has
already occurred.

Treat dimension, phase or regime, observable, decomposition, geometry, model,
and method as independent restrictions. This is a diagnostic specificity
budget, not a word-count rule: several restrictions may enter together when
their joint scientific payoff is already shared or has just been established.
For each restriction, name the preceding proposition that licenses it and the
new discrimination or calculational consequence it makes possible. If the
license depends on later prose, use `BACK(READER)`. Removing jargon does not
repay unearned specificity, and adding a broad first sentence does not license
an abrupt specialized second sentence.

## Audit the entry before fixing the reader line

Do not derive the initial active problem by working backward from the paper's
eventual model, method, decomposition, or contribution statement. That route
can make a narrow opening internally coherent while presupposing the very
orientation the Introduction must create. Before paragraph planning, construct
and compare at least two genuinely competing entry trajectories for the same
fixed venue population. They must differ in the scientific state first made
active, not merely in wording. Include a wider field-level trajectory and a
more direct trajectory when both have evidential support. Add candidates when
the literature or readership analysis reveals a distinct historical,
phenomenological, conceptual, capability-based, or community-specific entry.
Do not invent a candidate to satisfy a quota; when only one viable alternative
to the selected trajectory can be warranted, record why the comparison stops
there.

Derive candidates independently from all three of the following:

- the venue population and the scientific stakes it can already recognize;
- the literature map, including how representative neighboring communities
  frame the field; and
- the paper's body-supported result and the dependencies needed to understand
  its significance.

No one source controls the entry. The venue cannot warrant a scientific claim,
related Introductions cannot dictate this paper's trajectory, and the body
cannot make its final technical organization shared background.

Before naming candidates, construct an **interest-dependency graph** from the
claim basis and comparison literature:

```text
venue-recognized stake -> scientific relation or unresolved problem ->
observable or diagnostic -> regime or geometry -> model -> method
```

The graph need not have this exact depth, and several branches may coexist.
Its purpose is to expose ancestry: which issue remains scientifically live if
the paper's eventual observable, model, and method are removed. Include in the
candidate set the nearest warranted ancestor of the intended technical focus,
provided the manuscript and sources establish a real route from that ancestor
to the result. Also include the direct focus when it has an independent claim
to salience. A set whose every candidate already contains the paper's chosen
observable, decomposition, model, or formalism is incomplete unless the
evidence establishes that object itself as the shared stake.

Identify a candidate by its **actual first focus `F`**, meaning the scientific
problem that grammatically and inferentially controls the proposed cold
prefix. Its shared stake `S`, eventual destination, or motivation cannot change
that identity. An ancestor candidate counts as present only when its `F` is the
ancestor node and the proposed prefix can be written without activating a
descendant as the controlling problem. If the record names an upstream `S` but
the prefix asks first about a downstream observable, the candidate occupies
the downstream node. Reclassify it there; do not count it toward ancestor
coverage.

For the nearest warranted ancestor candidate, write a one-sentence
**observable-free focus test** before prose: state the active problem without
the paper's eventual observable, decomposition, geometry, model, or method.
This sentence is a decision probe, not necessarily final prose. If removing
those objects leaves only ceremonial importance, unsupported universality, or
a program the paper does not address, the proposed ancestor is not warranted;
move to the next supported node. If it leaves a substantive problem and the
body supplies a local route to the result, the candidate must be compared as a
separate trajectory whose first focus remains at that node.

Do not define breadth by abstract vocabulary. A phrase such as “universal
information in subleading entanglement” remains downstream if the available
shared stake is the characterization of critical ground states and the prefix
has not shown why this particular observable bears on that stake. Conversely,
a named anomaly can be the upstream shared stake when independent literature
already organizes the venue's problem around it.

For each candidate, record before drafting prose:

```text
candidate origin | shared stake S | actual first scientific focus F |
graph node occupied by F | observable-free focus test, when ancestral |
scientific relation R connecting S to F | source warrant for R |
consequence of F for S that is visible in the proposed prefix |
independent salience of F, if any | nearest warranted ancestor candidate |
claim-basis warrant | intended first-prefix postcondition |
what paper the reader would expect from this prefix alone |
locally visible bridge to the actual question |
response of each materially distinct readership segment |
downstream categories or interests the entry presupposes |
focus-substitution result | specialization and genericness risks |
accept or reject
```

Interest does not transfer automatically from `S` to `F`. “F is an example,
probe, observable, application, or part of S” is classification, not a bridge.
The proposed prefix must make a warranted relation `R` and a consequence
visible: what learning about `F` establishes, distinguishes, constrains, or
enables for `S`. If the consequence exists only in the author's plan or later
paragraphs, return to G3. The first prefix may keep `S` as its controlling
scientific problem and introduce `F` later, or it may start with `F` when F has
independent shared salience or the S--R--F consequence is immediately visible.

Run a focus-substitution test: replace `F` with another plausible observable,
model, or method while leaving the stated motivation unchanged. If the prefix
still appears equally justified, it has supplied a generic diagnostic promise
rather than the relation that earns this focus. Return to G3 or postpone F.

The entries are competing trajectories, not ingredients to accumulate into one
comprehensive opening. Reject a candidate when any of the following holds:

- it activates a downstream premise, obstruction, taxonomy, or contrast whose
  importance exists only after the paper's later argument is known;
- its relevance can be defended only by citing the next paragraph or the
  eventual contribution;
- it silently assumes that the wider venue readership already shares the
  immediate subfield's choice of observable, decomposition, geometry, or
  formalism;
- it is broad only because it retreats to elementary or ceremonial background
  that does not materially orient the scientific problem;
- the expected paper after the first prefix belongs primarily to a neighboring
  program that the manuscript will not pursue; or
- it uses a generic promise of importance or universality that could introduce
  many unrelated papers without changing the reader's scientific state.

Select the entry whose first transition gives the fixed population the widest
stable access to the paper's actual stake while adding the least unearned
orientation. “Widest” is constrained by relevance and warrant; “direct” is
constrained by what is already salient before the manuscript speaks. A highly
technical opening may win when its stake is already shared across the venue. A
simple opening may lose when it merely rehearses shared knowledge. Preserve the
rejected candidates and the decisive reason for rejection in the planning
record so that the chosen entry cannot later be treated as inevitable.

When venue and literature recovery identifies materially distinct readership
segments, test every candidate across them. Record which segments can enter,
which require a local bridge, and which would be excluded or misdirected. Do
not replace the venue population with the one community that favors a preferred
opening, and do not force a generic sentence that says nothing to any of them.
Selection may accept an explicit tradeoff when the article type or scientific
scope warrants it, but the excluded segment and reason must be visible before
prose is drafted.

For revision of an existing Introduction, quarantine the legacy opening while
constructing the entry comparison. Derive candidate trajectories from the
venue, literature map, claim basis, and body without using the legacy wording
or its apparent purpose as evidence. Then admit the legacy trajectory as a
separately labeled candidate and compare it under the same gate. If the editor
has already seen the wording, record that exposure rather than claiming a blind
derivation; the independent source basis and candidate origin must still be
inspectable. For an audit that cannot recover authoring history, derive the
auditor's candidate set independently and compare the observed opening without
inferring how it was originally chosen.

Before selection, audit candidate-set coverage. Name the graph node represented
by each candidate and verify that at least one candidate represents the nearest
warranted ancestor of the proposed first focus. If a candidate was called
“wider” only because its nouns sound more general while it occupies the same
downstream branch, use `BACK(G3)`. This coverage audit occurs before prose and
cannot be repaired by adding one generic sentence to the selected trajectory.
Determine the represented node from `F` and from the cold prefix, not from `S`
or the candidate label. Two candidates with the same controlling `F` are one
trajectory for coverage purposes even if their motivation fields name
different ancestors.

Apply an adversarial dependency test to the selected entry: temporarily hide
the title, abstract, later Introduction, and paper-specific terminology, then
ask what active research problem and likely continuation a fixed-baseline
reader can infer from the opening alone. If the desired inference requires
hidden knowledge of where the paper is going, use `BACK(READER)` and compare
the entry trajectories again. Do not proceed to paragraph postconditions until
one candidate passes this test. Subsequent prefix checks protect the selected
line; they do not substitute for this prior comparison.

## Treat prose as reader-state transitions

An introduction is not a set of facts whose value is judged only after the last
paragraph. It is a sequence of changes in a reader's state. At every prefix of
the text, the reader may continue or leave. A later result has no rhetorical
value for a reader whom an earlier prefix has already excluded or given no
scientific reason to continue. Treat dropout as irreversible when designing the
argument; do not rely on a promised payoff several paragraphs later to repair an
opening that reads as irrelevant.

Reader state includes more than available knowledge and willingness to
continue. It also includes the active scientific frame: which known facts have
been made salient, what kind of problem the paper appears to address, and what
the reader expects to come next. A sentence can be elementary, true, and easy to
understand while directing attention toward the wrong research program. Do not
confuse a lower curricular level with a broader scientific entry point.

Fix the reader baseline from the venue and article type before drafting. Use
the introduction comparison to test vocabulary, candidate entry levels, and
possible mismatches with that baseline; it cannot narrow the venue readership
without independent venue evidence. Do not silently replace that reader with an
immediate-subfield expert when a technical sentence is convenient, then restore
the wider reader for a general claim.

After recovering the manuscript, venue, literature map, and claim basis, and
before choosing the claims for a paragraph, specify its target postcondition in
reader-state terms. Account for the scientific problem in focus, the distinction
or relation that should become salient, whether anything remains unresolved, and
what claim or machinery the reader should be prepared to assess. Any dimension
may be resolved, unchanged, or not applicable. A valid postcondition may close a
distinction, delimit scope, consolidate evidence, or make a result assessable
without manufacturing a new gap.
Do not define a postcondition as exposure to content, such as ``the reader has
been told the area law.'' Define the resulting orientation, such as ``the reader
now treats geometry-dependent subleading terms as candidate universal
observables, can identify the unresolved question of what continuum data
determine them, and is prepared to assess a proposed mechanism.'' Postconditions
must be epistemic states that the prose makes possible---for example, the reader
can identify, distinguish, assess, or challenge a claim. Never define them as a
desired belief, agreement, emotional response, or compliance.

Every scientific predicate or evaluation embedded in a postcondition must be
traceable to the claim basis at the same scope. Editorial relevance may determine
which warranted relation becomes salient, but it cannot supply the warrant. Use
this order:

```text
recover manuscript, venue, and literature
    -> build the literature map and claim basis
    -> derive evidence-permitted reader states
    -> compare and select an entry trajectory
    -> fix the reader line
    -> fix paragraph postconditions
    -> select and order claims
    -> draft prose
```

Do not infer a target postcondition retrospectively from prose already written.
For a revision, fix the postcondition before selecting the revised claim
sequence; the legacy prose need not have been produced by this workflow.

At each planned paragraph boundary, track:

- the knowledge and interests available before the passage;
- the scientific problem currently in focus and the family of continuations the
  passage makes plausible;
- the scientific fact, relation, problem, or consequence the passage adds;
- the question, uncertainty, consequence, or capability that remains live; and
- the reason a reader at the fixed baseline can see for reading the next
  passage.

Maintain a lightweight pre-draft postcondition record for every paragraph being
drafted or materially revised:

```text
prefix | required prior state | active problem frame | scientific update |
target postcondition | licensed continuations | live reason to continue | exit risk
```

Select claims because they move the reader toward the target postcondition or
supply a prerequisite for that move. A true and relevant claim still does not
belong when it leaves the reader in an unspecified state or makes a secondary
issue more salient than the intended postcondition. Content is the means; a
warranted reader orientation is the design objective.

This table is a diagnostic artifact, not prose for the manuscript. The
continuation reason must arise from the science: a consequence, unresolved
relation, conflict, unexplained observation, newly possible determination, or a
concrete need to inspect the next claim, mechanism, evidence, scope, or
consequence after a result has already been stated. Every asserted or implied
question, consequence, conflict, or capability used for this purpose must be
present in the claim basis at the same scope.
Prestige, novelty by itself, an announcement that a subject is important, and
teaser language do not create continuation value. Not every sentence needs an
independent hook. Explanatory sentences may develop a question or consequence
that is already live, provided specialized detail does not bury or exhaust that
reason before the text advances it.

The first sentence bears the highest entry burden because no manuscript-created
context yet exists. It should normally activate the widest research problem
that is both scientifically relevant to the paper and legible at the fixed
baseline. ``Widest'' concerns the scope of the research problem, not how early
the fact appears in a curriculum. Do not begin with an elementary prerequisite
merely because every reader will understand it. A shared fact belongs in the
opening when foregrounding it materially locates, distinguishes, connects, or
changes the reader's understanding of the paper's actual scientific problem.
A technical result may open the paper when that exact issue is already a shared
field-level stake for the venue's readership. Do not select a downstream premise
as the opening merely because the manuscript later needs it. A true statement
about the paper's observable can still be a failed opening when the reader has
not yet been given a reason to treat that observable as the relevant entry to
the field.

The first sentence must instantiate the selected entry trajectory and cite its
entry-candidate record in the revision dossier. Re-run the adversarial
dependency test on the actual wording. If the sentence changes which scientific
problem is active, what paper is expected, or what downstream categories are
being assumed, the selected trajectory is no longer valid: use `BACK(READER)`
rather than rationalizing the sentence from the remainder of the paragraph.

Apply a two-level all-prefix gate. Always check after the first sentence and
after every paragraph. Within a paragraph, also check any risk point where the
text introduces a specialized object or notation, assumes a community's
interest, changes the implied reader, or defers the payoff. Use the planning
table to diagnose the earliest failing region rather than requiring formal
bookkeeping after every sentence. At each check, temporarily hide the remaining
introduction and ask:

1. What scientific situation can the fixed-baseline reader now identify?
2. Did the passage produce the target postcondition fixed before drafting? What
   changed in the reader's understanding, orientation, sense of relevance,
   salience, or expectations?
3. What scientifically grounded reason remains to continue?
4. Has the passage narrowed to a community, object, or notation whose relevance
   has not yet been earned?
5. If the manuscript stopped here, what family of scientific continuations
   would the passage license? Does it include a warranted path or local bridge
   to the paper's actual question, or does it point only toward a neighboring
   literature that the paper will not pursue? A scientifically grounded surprise
   is valid when the passage establishes its connection locally rather than
   relying on hidden later context.

Perform the first-sentence and paragraph checks before drafting the next unit,
not as a retrospective audit after the whole Introduction exists. At each such
checkpoint, hide all intended later prose and record a cold prefix snapshot:

```text
implied readership | active scientific problem | expected next topics |
newly earned specialization | unresolved concepts currently held in memory
```

If the implied readership differs from the fixed population, the actual paper
path is absent from the expected continuations, the specialization has not been
earned, or unresolved concepts accumulate faster than the paragraph uses them,
stop and go back. Later clarity or stronger results cannot compensate for this
prefix failure.

Revise the earliest failing prefix. Do not compensate by strengthening a later
contribution paragraph. At the end of the introduction, continuation means a
scientific reason to inspect the paper's argument or evidence; it does not
require withholding the conclusion. This gate governs the sequence of warranted
claims; it does not license clickbait, inflated stakes, artificial suspense, or
generic background.

## Recover the paper before writing

Read the actual or planned body, the closest prior work, and the target venue or
article type. When available, inspect the venue's scope and current author
guidance to establish the reader baseline, and use a small sample of
representative recent introductions to diagnose customary vocabulary, entry
levels, and possible mismatches with that baseline. Use primary sources for
consequential claims about prior-work limits. Mark the reader-baseline inference
as uncertain when the venue materials are unavailable.
For a Physical Review B submission, also read the
[PRB venue profile](../../references/venues/prb.md). For another Physical
Review journal, inspect that journal's own current scope and author guidance
rather than importing PRB's readership or article types.
For a Physical Review Letters submission, instead read the
[PRL venue profile](../../references/venues/prl.md); do not combine PRB and PRL
reader or article assumptions merely because both belong to the Physical Review
family.
Establish:

- the paper's main result and the evidence that supports it;
- the concrete unresolved question, limitation, discrepancy, opportunity, or
  newly established fact to which the result responds;
- the research communities expected to read the venue;
- the closest prior approaches and what they do and do not establish;
- the scope conditions that materially limit the announced result.

Do not infer importance from novelty alone or motivation from the existence of a
new calculation. If the body is incomplete, announce only the result or
reduction it currently supports.

## Learn how the field frames itself

When the opening, field account, reader baseline, or narrowing path is being
drafted or materially revised or audited, read the Introduction sections of a
small, purposeful set of related papers. For a local revision, reuse an
inspectable comparison record whose scope still covers the passage rather than
repeating the survey. Abstracts establish advertised results; they
do not reveal the field account, reader assumptions, or narrowing logic that
the authors used to make those results intelligible. A bibliography, search
snippet, review summary, or existing literature note does not substitute for
this step.

Choose papers by functional role rather than convenience. The roles depend on
the discipline and article type. Cover those material to the manuscript:

- a foundational paper that established a development used in the field
  account;
- an authoritative review or synthesis, when one exists;
- the closest prior paper to the present question; and
- a neighboring or later line of work that tests whether the framing is local
  to one community, method, or period; and
- when reader calibration is in question, a recent paper of comparable venue
  and article type.

For every substantial new draft or reader-line revision, calibrate beyond the
immediate micro-literature. Include both:

- a well-established paper from the same venue and article type whose topic is
  adjacent or different but whose intended readership overlaps; and
- a paper from the same venue and article type in which a direct or technical
  opening succeeds because the already shared stake makes it appropriate.
  When no defensible same-venue example can be recovered, use the closest
  article-type match and record the departure and its effect on transferability.

These controls prevent the immediate community from defining its own specialist
orientation as venue-wide interest, while preventing “start generally” from
becoming a mechanical rule. Record why each control paper is comparable;
prestige or citation count alone does not make its entry transferable.

For experimental, empirical, materials, or computational work, an enabling
measurement, benchmark dataset, instrument or synthesis method, material-family
study, or accepted computational baseline may fill the foundational and
neighboring roles more appropriately than a theory genealogy.

One paper may fill more than one role, and a highly specialized or short-format
article may justify a smaller set. As a default, compare two to four distinct
Introductions. Stop when every material role and at least one plausible
counter-framing are represented. Expand the set only when a framing conflict,
reader-baseline uncertainty, or claim-basis gap remains. Record any departure
from this rule rather than silently omitting comparison. Read the complete
Introduction in the published version or stable preprint and record the exact
source location. For each paper,
extract:

- the first substantive scientific claim, excluding ceremonial statements;
- the field-level problem it treats as already established;
- the physical or intellectual payoff it gives for studying that problem;
- the knowledge it assumes and the concepts it explains;
- the active problem frame established by the opening and the family of
  scientific continuations it makes plausible;
- the sequence by which it narrows from the field to its own system, observable,
  or method;
- the prior results and limitations it uses to justify its question; and
- which parts are source-supported field claims and which are the authors'
  rhetorical positioning of their own work.

Compare the entries before writing prose. Identify agreements that persist
across roles, changes in the field's self-description over time, and genuine
differences between communities. Do not average incompatible framings into a
false consensus, copy the opening of the most prestigious paper, or infer a
field structure from vocabulary shared by several abstracts. The output of
this step is a compact introduction-comparison record that can be inspected
alongside the claim basis.

For every compared Introduction, record the first restriction to dimension,
phase or regime, observable, geometry, model, or method; the scientific stake
established before that restriction; and whether the paper's genre makes the
restriction itself the stake. Compare transitions in reader state rather than
copying first-sentence breadth or vocabulary.

Treat this comparison as diagnostic evidence for reader assumptions, framing
diversity, and candidate entry levels, not as scientific warrant. A candidate
field-level topic sentence may be drafted only after the comparison, but it
passes only when the claim basis and underlying sources warrant its substantive
relation, development, or unresolved issue. A sentence that merely announces
that a topic ``has become important,'' ``plays a role,'' or ``has attracted
interest'' does not become informative because related papers use similar
language.

## Map the field before choosing where the prose begins

A research-paper introduction must place its question in the field, but that
does not predetermine the first sentence. In many specialist papers the winning
entry is a field-level account broader than the paper's observable, geometry,
model, or method. A direct technical entry can instead win when the exact issue
is already a shared venue-level stake and the opening-only test confirms that
neighboring readers can locate its consequence. The literature map must test
this choice rather than encode either outcome in advance. Do not assume that a
reader already shares the immediate subfield's selected questions, and do not
force an established venue-wide question through a ceremonial broad preface.

An observable family may itself define the wider field: many-body spatial
entanglement, for example, can precede a review of one- and higher-dimensional
results before the text narrows to a particular geometry and model. This is a
possible trajectory to compare, not a reusable outline.

Build a literature map before choosing the opening paragraph. Record:

- the wider scientific problem and the physical information the field seeks;
- the major conceptual, calculational, experimental, empirical,
  methodological, or materials developments that changed what could be
  established or accessed;
- the main classes of systems, observables, or approaches that must be
  distinguished for the present question to become intelligible;
- the documented state of the field immediately relevant to the question;
- the present paper's body-supported relation to that state, classified as its
  question, result, or capability rather than attributed to the prior work; and
- the primary sources, reviews, or convergent source set that warrants each
  synthesis.

Use the introduction-comparison record to test candidate starting levels and
reader assumptions. Derive the final narrowing path from the manuscript's
evidential dependencies and the venue baseline. Recurring rhetoric or structure
in related papers is not the default outline. Use the underlying literature,
rather than the compared authors' prose, to warrant the resulting scientific
claims.

The map should let a neighboring specialist understand how the question was
reached without already sharing the authors' interests. It may therefore take
several paragraphs. It is neither a textbook preface nor a chronological list
of citations: select developments because they change the reader's
understanding of the present state of the field, and state the relations among
them. A review paragraph ordinarily needs a synthesis sentence saying what a
body of work established, separated, or left unresolved. Such a sentence is a
scientific claim derived from its source set, not prose scaffolding invented to
give the paragraph a role.

Claim safety constrains the strength of a synthesis, not how far back the
introduction may begin. Broad statements are legitimate when reviews, multiple
primary sources, or an established result warrant their scope. When the reader
needs a broader orientation and its warrant has not yet been assembled,
research the literature; do not solve the uncertainty by opening at the
paper-specific topic. Conversely, do not move outward to generic claims about
science, information, or importance that do not explain a documented
development in the field.

## Establish the claim basis before prose

Do not invent topic sentences by first assigning prose to paragraph roles.
First build the literature map, then derive its synthesis claims and the
paper-specific claims from evidence. A review paragraph normally requires a
topic sentence, but its scope must be warranted by the source set; correct
supporting sentences do not automatically entail a broader opening sentence.

Before outlining paragraphs, record a compact claim basis for every
consequential assertion that may enter the introduction. Include transitions,
contrasts, summaries, and statements of significance; they make claims even
when they contain no technical result. For each proposition, fix:

- the exact subject and predicate at the breadth required for reader
  orientation and no broader than the evidence warrants;
- whether it is a literature synthesis, established field knowledge, a report
  of prior work, a result of the present paper, an inference, or an editorial
  reason for inclusion;
- its domain, quantifiers, geometry, regime, boundary conditions, conventions,
  and other scope conditions that change its truth;
- the source or body location that warrants a factual claim or inference,
  rather than a citation that is merely nearby; and
- the strongest wording entailed by that evidence, together with any
  verification still missing.

An editorial reason is warranted by the manuscript's actual purpose and results,
but it licenses selection only. It cannot serve as evidence for a scientific
sentence, a grouping of prior work, or a claim that the field shares the
authors' motivation.

Draft only from this claim basis. A field-review paragraph ordinarily begins
with a supported synthesis; a result or construction paragraph may instead
begin with a narrow result, observation, or relation. When no supported
proposition can summarize the following literature, obtain the missing
evidence, split the material, or revise the proposed grouping. Do not infer a
field-level synthesis merely from citations that happen to be useful to the
present paper.

Apply extra scrutiny when wording expands the burden of proof:

- class-wide or universal scope, such as ``in two dimensions,'' ``for
  nonrelativistic critical points,'' ``always,'' or ``only'';
- absence, priority, or novelty, such as ``is not available,'' ``has not been
  identified,'' or ``for the first time'';
- causation or entailment, including ``therefore,'' ``shows,'' ``requires,''
  and ``is necessary'';
- identities and transfers between descriptions, including ``is described
  by,'' ``reduces to,'' ``is equivalent to,'' and claims that a mechanism does
  or does not carry over;
- evaluative or comparative language, including ``universal,'' ``accurate,''
  ``natural,'' ``important,'' and ``distinguishes.''

For these claims, require evidence that directly warrants the asserted strength.
That warrant may come from a primary source, an authoritative review or
synthesis, several convergent sources, or a derivation in the present paper, as
appropriate to the proposition; ``directly'' describes the inferential relation,
not a requirement that one source state the sentence verbatim. Evidence for one
named model, geometry, R\'enyi index, sector, or regulator does not establish a
statement about its whole class. Failure of one paper to identify a quantity
does not establish absence from the literature. A present-paper derivation does
not retroactively warrant a field-framing claim. Narrow the subject or state the
specific observation when the wider proposition is not established.

## Build the venue-level entry ramp

A specialist paper may address a narrow question while its venue serves a wider
field. The entry ramp is the selected trajectory through the relevant field and
prior state. It may begin with a wider synthesis or with a direct issue already
shared across the venue. Before paper-specific machinery dominates, readers at
the established baseline, including the materially distinct neighboring
segments identified in the audience record, must be able to see the research
problem, the developments or distinctions that shape it, and the prior state
against which the advance is judged. This is an argument about the subject, not
a tutorial and not a ceremonial statement that the field is important.

Compare the broadest relevant level at which the venue's readership can locate
the problem with any more direct level supported by shared salience, then follow
the winning trajectory through warranted stages. Measure breadth by scientific
domain and problem, not by the elementary level of the statements used.
Rehearsing prerequisites can make prose less specialized while making its
scientific direction less accurate. The trajectory may follow documented
historical developments or conceptual distinctions, according to the
evidential spine. Before specialist machinery dominates, the Introduction must
establish:

- the physical phenomenon, observable, or theoretical obstruction;
- what information it carries or what operation it makes possible;
- the established result or observation that makes the contribution assessable;
  and
- the prior state of knowledge to which the paper responds, including a limit
  of present understanding or calculational control when one is material.

Move inward only through evidence-backed domain relations: source field and
prior-work claims from the literature, and support present-paper claims from the
body. The entry ramp may take
several paragraphs in a regular article when distinct communities need to be
connected. It may be short in a letter or when the target problem is already
shared across the venue. Do not equate accessibility with defining every term:
explain why a specialized object enters before expanding its machinery, and
define only the unfamiliar terms needed to follow the claim.

Reject both failure modes:

- **contextless specialization:** opening with a model-specific numerical fact,
  notation, or formal correspondence before a wider venue reader knows which
  physical question it bears on;
- **generic expansion:** moving farther back to area-wide statements that do not
  change how the reader understands the paper's question, significance, or
  result.

The outline-leakage gate still applies. Broad context passes when it makes a
truth-apt, sourced synthesis already present in the claim basis and changes how
the reader understands the field's development or the narrower question.

## Maintain two reader contracts

### Knowledge contract

Use the reader baseline established from the venue and article type. For a
physics manuscript with inconclusive venue evidence, use broadly trained
graduate-level physics as the explicit fallback. Do not silently replace either
baseline with the knowledge of the paper's immediate community.
Classify background into three levels:

1. **Shared:** ordinary knowledge for that readership. Use it without teaching
   it again. Add a locating sentence when foregrounding that knowledge
   materially locates, distinguishes, connects, or changes understanding of the
   problem actually pursued by the paper. Familiarity alone is not a reason to
   use a shared fact as the opening.
2. **Adjacent:** familiar to part of the readership but needed for the argument.
   Review the development and relation at the depth needed for a neighboring
   expert to follow why the paper's question arises.
3. **Paper-specific:** the model, observable, obstruction, convention, or method
   whose exact role cannot be inferred from venue-level knowledge. Introduce it
   where the argument first spends it.

Technical sophistication does not license unexplained paper-specific objects,
and broad readership does not require re-teaching shared foundations. A generic
opening is not made accessible merely by starting farther back. Keep the
classification fixed across the introduction. A concept cannot be treated as
shared in one paragraph because defining it would slow the prose and then as
adjacent or paper-specific when the argument later needs to motivate it.

### Interest contract

Do not assume that readers care about the chosen system or formalism because the
authors do. Identify what can earn attention from the intended community:

- an established observable whose behavior is not understood;
- a comparison that has remained phenomenological;
- a calculation unavailable to existing methods;
- a conflict, ambiguity, or normalization that affects interpretation;
- a result that changes which quantities can be derived, compared, or tested.
- a newly accessible regime, discriminating measurement, controlled material
  synthesis or realization, or resolved structure--property relation.

State the intellectual stake before asking the reader to absorb specialized
machinery. The stake may be narrow and technical; it need not be advertised as
important to all of physics. Prestige, general claims about a field, and phrases
such as "has attracted much attention" do not supply a reason to care.

Use two diagnostic readers:

- **Informed but indifferent:** knows the venue-level background and will
  continue only if the scientific stake and payoff are concrete.
- **Interested but adjacent:** accepts the problem's importance but needs the
  paper-specific objects and relations made identifiable.

The introduction must work for both. Diagnose their needs independently. A
passage may serve both readers when it supplies a relation they need and makes
the stake of that relation visible; do not assume that adding background repairs
a missing reason to care, or that adding motivation repairs an unidentified
technical object. Reapply both diagnoses to successive prefixes, rather than
asking only whether the completed introduction eventually serves both readers.

Candidate comparison is non-compensatory. First compare the earliest prefix at
which each candidate fails the fixed reader line; discard a candidate with an
earlier failure even when its later claim control, contribution paragraph, or
style is stronger. Among candidates that survive the same prefixes, compare
claim integrity, scientific structure, and local prose in that order. Do not
average an opening failure together with later strengths.

An entry candidate passes the interest gate only when an informed but
indifferent member of every materially included readership segment can answer,
from that prefix alone:

1. What physical or theoretical issue is active?
2. What consequence makes resolving or characterizing it worthwhile?
3. Why is the next restriction useful for that issue now?
4. What warranted relation connects the shared stake to the actual focus of
   this prefix, and what consequence travels across that relation?

The answer need not be grand or emotionally engaging. It must identify a
scientific consequence rather than repeat the topic. If the answer to item 2
or 3 comes from later prose, the title, the abstract, the paper's final result,
or the author's private objective, the candidate fails at that prefix.
If the answer merely says that the focus belongs to the broader topic, the
candidate also fails: membership does not transfer interest.

## Build an evidential spine

Let the field's documented development, the subject matter, and the selected
entry trajectory determine the order. Many Introductions narrow from a field
review; a direct trajectory may begin later in the same evidential structure
when its stake is already shared. A useful provisional spine for the broader
trajectory is

```text
wide research problem and literature map
    -> major established developments and distinctions
    -> concrete prior state, observation, unresolved relation, or opportunity
    -> closest prior result and its actual bearing
    -> paper-specific construction
    -> achieved result and consequence
```

This is a diagnostic, not a mandatory paragraph template, and a direct winning
trajectory may omit its earlier stages. Start where the tested readership
segments can enter the relevant field, not where only an expert in the
immediate topic can identify the problem. A historical account
is useful when the sequence of developments changes how the present problem is
understood; a conceptual review may be preferable when chronology does not.

Every transition must expose a scientifically relevant relation. Do not repeat the same gap at the end
of successive paragraphs to make the paper appear inevitable. Do not force
materially different results into identical method--result--check paragraphs.
Present a contribution hierarchy: the main result, the mechanism that makes it
possible, and the checks or extensions that establish its reach.

The evidential spine and the reader-state progression are separate constraints.
A sequence of true, properly sourced claims can still fail when it asks the
fixed-baseline reader to care about a downstream quantity before establishing
the scientific problem that makes it consequential. Conversely, an engaging
progression cannot repair unsupported claims. Require both at every stage.

## Preserve the paragraph's organizing relation

A paragraph does more than accumulate individually warranted transitions. By
selecting and ordering examples, comparisons, or historical cases, it teaches
the reader how those items are grouped and which coordinates distinguish them.
That inferred organizing relation becomes part of the reader state even when no
sentence names it. A later connective can therefore be locally grammatical and
factually correct while being structurally false to the paragraph: it may
compare the items along a different axis, treat an earlier member as if it lay
outside the class just constructed, or turn heterogeneous examples into an
unstated progression.

Use the expanded audit when a proposed transition asserts or implies an
ordering, class boundary, contrast, generalization, change of scope, or pivot
between coordinates. Routine examples that do not support such a transition
need only pass the ordinary coherence veto. At an expanded audit, record:

```text
items grouped | warranted reason they belong together |
salient relation or nested relations inferred from their order |
coordinates held fixed or varied |
comparison set, ordering, and boundary presupposed by the transition
```

Do not describe the group only by the paper's editorial purpose. State the
domain relation or hierarchy of relations that makes the items co-members. A
connective such as ``beyond,'' ``instead,'' ``however,'' ``more generally,'' or
``in higher dimensions'' is a compressed claim: identify its comparison set,
ordering, and boundary. Different coordinates are valid when the prose marks
the pivot and the new relation or its relevance is warranted. They fail when
the pivot is silent, the new relation is unsupported, or an earlier member
falls on the wrong side of the asserted boundary. Deliberately heterogeneous
examples are valid when their shared property is explicit and the transition
refers to that property. The gate forbids silent coordinate changes, not
multidimensional arguments.

At the risk point, reconstruct the accepted prefix before accepting the
transition. Hide the proposed transition and ask:

1. What salient relation or nested relations would a fixed-baseline reader use
   to explain why these items were placed together?
2. Which dimensions, regimes, or categories now appear ordered, contrasted, or
   held fixed?
3. What comparison set, ordering, and boundary does the transition presuppose?
4. Would any earlier item fall on the wrong side of that boundary, or cease to
   be comparable under the new coordinate?
5. If the coordinates differ, does the text mark the pivot and warrant the new
   domain relation or its relevance here?

A failure can exist even when every sentence passes its own warrant test, but
the repair level must match the actual defect. Use `BACK(PHRASE)` or
`BACK(SENTENCE)` when the grouping remains coherent and only the connective or
transition is wrong. Use `BACK(PARAGRAPH)` when the selection or order created
the false grouping or cannot support the intended move. Return to the earliest
actually faulty decision, mark only its dependents stale, and do not rely on a
later summary to repair a transition the reader has already been asked to make.

## Prevent the outline from leaking into the prose

Language models readily replace a scientific dependency with a discourse plan:
they assign each paragraph a role such as background, example, setting, method,
test, or extension, then state that role as the paragraph's opening sentence.
This produces local continuity while leaving the relation between the scientific
objects unstated. It can also reverse the research logic by turning the target
observable into a test of the method, or recast prior work as a step toward the
present paper.

Before drafting prose, record each intended paragraph boundary in terms of
domain content:

```text
named result, quantity, or claim
    -> scientifically relevant relation
    -> named result, quantity, or claim
```

The relation may be a dependency, contrast, specialization or generalization,
consequence, independent evidence, application, or scope boundary. It need not
make every paragraph answer a deficit created by the previous one. If no
scientifically relevant relation can be stated, merge, reorder, or remove the
material. Do not manufacture a bridge by announcing what role the next topic
will play.

A literature-synthesis topic sentence is not outline leakage when it would
remain a substantive, disputable account of the field after the present paper
is removed. It should identify the body of work being synthesized, state what
changed or how lines of work relate, and be warranted by the recorded source
set. A sentence that merely calls the selected literature a ``framework,''
``route,'' or ``setting'' for this paper still fails the gate.

Apply the following gate to every paragraph-opening transition and to any
sentence whose main purpose is to move between topics:

1. **A legitimate source of warrant.** Trace the sentence to the claim basis.
   A prior-work or field-framing claim must
   remain a verifiable or disputable proposition after the present paper's
   desired story, method, and results are removed as premises. A present-paper
   claim may instead be warranted by the body, but it must name the operation or
   observation, its result, and any scope needed to assess it. Both kinds must
   remain truth-apt when detached from their rhetorical placement. A claim that
   an object ``provides a setting,'' ``offers a route,'' or ``gives a test''
   usually states its role in the outline rather than a relation in the subject.
2. **Explicit operands.** Can the antecedent and successor be named as a
   quantity, field, boundary condition, operation, theorem, observation, or
   documented historical claim? Expand words such as ``this program,'' ``these
   data,'' ``that problem,'' and ``this construction.'' If the expansion yields
   a section role or a summary of the preceding prose rather than a domain
   object, the transition fails.
3. **Domain relation in the main verb.** The main assertion should say what the
   objects do or how they are related---for example, a boundary condition
   factorizes a partition function, a map sends a wedge to a strip, or a Ward
   identity fixes a derivative. A verb that merely assigns rhetorical use to an
   object leaves the scientific relation implicit.
4. **Research direction recovered rather than imposed.** Recover the actual
   contribution hierarchy and causal or epistemic direction from the body. Do
   not demote an observable to a ``test'' or ``application'' of a construction
   merely because the construction appears first in the outline, and do not
   portray earlier work as anticipating or motivating the present route unless
   the sources establish that relation. A general construction may legitimately
   be the main result and a named observable its application when the
   construction is established independently and the text states the concrete
   result, inference, comparison, simplification, or operation produced by the
   application.
5. **Resistance to noun substitution.** Replace the technical nouns mentally
   with unrelated topics. If the sentence retains the same informational force,
   it is probably generic discourse scaffolding rather than manuscript-specific
   reasoning.

A failed sentence is evidence of a missing relation, not a wording defect. Do
not repair it by replacing ``setting,'' ``route,'' ``test,'' or ``probe'' with a
synonym. Delete the scaffold and write the relation with its named operands. A
legitimate methodological validation may still be called a test when the text
states what prediction is tested, by what evidence, and with what discriminating
outcome. A documented research program may be named when it is defined and the
claimed historical relation is sourced. Functional verbs such as ``probe,''
``realize,'' and ``encode'' are also valid when they assert a mechanism or
sensitivity with named operands. The gate excludes roles invented by the
manuscript, not the vocabulary itself.

## Keep relevance separate from warrant

The paper's contribution determines which background is relevant to include. It
does not prove that the selected topics are central, representative, naturally
grouped, historically connected, converging toward this paper, or recognized as
an important gap.

For each consequential passage, distinguish:

1. facts established by sources;
2. relations or evaluations implied by selection, omission, ordering, and
   connectives; and
3. the editorial reason the paper discusses them.

The third licenses inclusion, not the first two. Separate citations do not by
themselves establish a grouping, causal connection, trend, collective
importance, or motivation. State editorial choices as such. If the paper itself
establishes a relation, present it as its question or result rather than placing
it into the prior account.

## Draft the introduction

After the claim basis has been established, fix the evidence-permitted target
postcondition for each paragraph before selecting or ordering its claims. Then
give the reader, in the order demanded by the argument:

- enough established context to identify the live problem;
- the closest prior result at the strength supported by its source;
- the exact prior state of knowledge to which the paper responds, including an
  unresolved step when the contribution actually resolves one;
- the construction or observation supplied by this paper;
- the main results, their domain, and the consequence that makes them useful.

Explain a method when its mechanism is part of the contribution or when the
reader needs it to assess the result. Otherwise name it at the level required to
understand the claim. Do not turn the contribution statement into a chronological
work log or a list of section contents. Include a roadmap only when the paper's
structure is not recoverable from the argument and the roadmap enables a real
navigation decision.

Keep qualifications next to the claims they limit. Do not distribute one caveat
per result merely to make the prose look balanced. Preserve genuine differences
in the amount and form of evidence supporting each result.

## Route sentence-level revision

After the claim sequence and paragraph postconditions are fixed, route every
new or materially revised Introduction sentence through
`$academic-writing:sentence-revision` when that skill is available. Supply it
with the fixed reader baseline, claim-basis entry, paragraph postcondition, and
the already accepted neighboring prose. Writing and revision must proceed as
that skill's interruptible sentence work:
candidate wording and diagnosis develop together, and the next sentence is not
begun before the current sentence is synchronized. At every substantive
diagnostic step, preserve the sentence-revision skill's `BACK` option and stop
forward prose when the new observation destabilizes a word, sentence action,
paragraph postcondition, section role, or claim. Do not require a visible series
of revision rounds when no problem appears, and do not draft a passage and later
manufacture dossiers that rationalize its wording. For existing prose, derive
the provisional sentence action without using the sentence itself as evidence,
then examine the existing wording without presuming that it survives.

At the first sentence and each paragraph boundary, supply the sentence-revision
skill with the current reader-line checkpoint and cold prefix snapshot. A
failure of reader identity, attention direction, earned specialization, or
cumulative load is a `BACK(READER)` or `BACK(PARAGRAPH)` condition even when
every factual claim is correct.

Keep one Introduction revision file, or split it by subsection when its length
or independent revision history makes that useful. Use intensive mode for the
opening sentence, paragraph-opening topic sentences, field-level syntheses,
decisive narrowing transitions, and contribution statements; also use intensive
mode whenever the user requests a word-by-word revision record. Ordinary mode
is sufficient for lower-risk supporting sentences unless their role or
necessity remains disputed.

When `$academic-writing:sentence-revision` is unavailable, G7 remains
executable locally. For each sentence, store its candidate and status; reader
before and intended reader after; one governing action; exact claim, scope, and
warrant; prerequisite load; topic/given/new/stress structure; forward link;
phrase roles; deletion, simpler-substitution, reordering, split, and whole-
sentence deletion tests; at least one materially different alternative for an
opening, synthesis, transition, or contribution sentence; the strongest reason
to roll back; the decision for warrant, direction, load, scientific relation,
and coherence as independent vetoes; accepted wording; and residual risk.
Allow rollback to G1--G6 as soon as a test destabilizes an upstream decision.
Do not draft the next sentence until the current record and manuscript agree.

The sentence-revision dossier is a sidecar editorial record, not manuscript
prose and not an independent source of scientific warrant. If its deletion,
substitution, split, or reader-state tests expose a change to the Introduction's
claim sequence or paragraph postcondition, return here and revise the
section-level design before continuing. Do not silently treat a structural
change as sentence polishing.

## Audit before delivery

Read the completed introduction as a passage, not as isolated correct sentences.
For an audit of existing prose, independently derive the expected reader states
from the body, venue, literature map, and claim basis before using the wording of
the Introduction as evidence. Compare those expected states with the states the
prose actually produces. For revision, record the target postcondition before
selecting the revised claim sequence.
Check:

1. **Stable audience:** Was the reader baseline fixed from the venue and article
   type before prose was chosen, with comparison papers used only to test entry
   level, vocabulary, and mismatch? Does any passage assume immediate-subfield
   knowledge merely because that assumption makes the local sentence easier to
   write?
2. **Postcondition-first design:** For a new draft or material revision, was the
   desired reader state after each paragraph derived from the claim basis and
   recorded before its claims were selected? Does that record state the
   applicable problem, distinction, resolved or unresolved status, and readiness
   rather than merely listing facts? For an audit of existing prose, did the
   auditor record the expected states independently before inspecting the
   Introduction and then compare them with the prose? Treat unavailable legacy
   authoring history as unavailable, not as failure, and do not reconstruct it.
   In either mode, can every scientific predicate in the expected state be traced
   at the same scope, and did the passage produce that state without allowing a
   secondary fact to take control of attention?
3. **Attention direction:** Does the opening activate the paper's broadest
   relevant research problem, or merely restate the earliest shared prerequisite?
   After each prefix, does the licensed family of continuations include a
   warranted path or locally established bridge to the paper's actual question?
   Has an elementary fact redirected attention only toward a neighboring
   literature the paper will not pursue? Do not reject a productive surprise
   whose scientific connection is established where the turn occurs.
4. **Prefix viability:** With the text hidden after the first sentence, after
   each paragraph, and at any sentence-level risk point, can the fixed-baseline
   reader identify a scientific situation, a change in understanding,
   orientation, relevance, salience, or expectation, and a reason to continue?
   Locate and repair the earliest prefix at which the text becomes irrelevant,
   opaque, or inert.
5. **Reader-state continuity:** Does each passage require only knowledge already
   shared or introduced? Does a live scientific question or consequence survive
   while necessary explanation is supplied, without artificial suspense or
   repeated promises of later payoff?

6. **Introduction comparison:** When the opening, field account, reader
   baseline, or narrowing path was in scope, were full Introduction sections,
   rather than only abstracts or summaries, compared across the relevant
   literature roles? Is the comparison record inspectable, with source
   locations and the field framing separated from each paper's
   self-positioning? For a local revision, does the reused record actually
   cover the passage?
7. **Opening level:** Does the introduction review the wider field before
   specializing to the paper's specific observable, geometry, method, or model,
   unless venue evidence establishes that the exact technical issue is already
   a shared field-level stake? Could a neighboring specialist within the venue's
   readership enter at the established reader baseline?
8. **Field synthesis:** Does the review explain established developments and
   their relations rather than list references? Would its account remain valid
   and useful if the present paper were removed?
9. **Knowledge calibration:** Does it lecture the target reader on shared
   foundations? Does it spend any paper-specific object before making its role
   identifiable? Has immediate-subfield knowledge been mistaken for knowledge
   shared by the established venue readership?
10. **Interest calibration:** Where does the informed but indifferent reader get
   a concrete reason to continue? Is the payoff visible before specialized
   machinery accumulates?
11. **Venue entry:** Can a reader from the journal's wider field identify the
   physical question, what the chosen observable or obstruction reveals, and
   why the paper's result changes current understanding or capability before
   model-specific machinery begins?
12. **Warrant:** Do sources or explicit arguments support every claim about
   importance, grouping, history, motivation, and prior limitations?
13. **Independence:** If the desired story and the paper's result are removed as
   premises, does the evidence still support the account of the field?
14. **Contribution fidelity:** Does the body establish each announced result,
   including its normalization, sector, assumptions, and claimed scope?
15. **Structure:** Are repeated gap statements, symmetrical contribution blocks,
   generic opening claims, or a redundant final roadmap substituting for the
   paper's actual dependency structure?
16. **Outline leakage:** Does any transition tell the reader how a topic functions
   in the manuscript instead of stating how named scientific objects are
   related? Expand demonstratives, identify the operands and main verb, and
   verify that field claims have manuscript-independent warrant while
   contribution claims are supported by concrete results in the body.
17. **Claim traceability:** Can every consequential sentence, including topic
   sentences and connective claims, be traced to a proposition at the same
   scope and strength in the claim basis? Did any paragraph acquire an umbrella
   statement that its individually supported details do not entail?
18. **Gate reproducibility:** Could an isolated reviewer reach the same pass or
   failure from the stored evidence, or does acceptance depend on the drafter's
   explanation of intent?
19. **Failure classification:** If this revision was triggered by a newly
   noticed defect, was it classified as execution, gate-specification, or
   evidence failure, and was the earliest affected gate repaired before prose?
20. **Calibration controls:** For a substantial draft or reader-line revision,
   did the comparison include a same-venue control outside the immediate micro-literature and a
   legitimate direct-entry counterexample, with genre and transferability
   recorded?
21. **Non-compensation:** Did any later result, stylistic strength, or complete
   contribution paragraph conceal a failure in an earlier cold prefix?

For revision, rewrite the smallest coherent passage that repairs the reader
contracts and evidential spine. A structural failure usually requires more than
replacing a conspicuous phrase. Deliver clean manuscript prose; keep diagnoses,
rejected framings, and production history outside the introduction.
