# Audit Reader State

Use this task when academic prose is locally grammatical and scientifically
plausible, yet assumes a relation unavailable to its reader or teaches basics
that the stated audience can already use without helping the current argument.
For unsupported transitions, the reader cannot understand why a sentence is
true or why it appears there from the available information. The missing
item may appear later or may be omitted altogether. The failure is not
anticipation itself. It is using a referent, distinction, warrant, or result as
though it were already part of the reader's premises.

The audit concerns epistemic order: the order in which an intended reader can
acquire definitions, distinctions, warrants, and conclusions. It does not
require the prose to follow the physical chronology of events, the historical
order of discovery, or the proof order when the genre calls for a theorem or
result to be stated first.

## Apply the audience baseline

Before making an explanation's inclusion or depth depend on prior knowledge,
identify the particular relation or operation at issue. Use current user
statements, the artifact's audience requirements, and established preceding
content as evidence. Distinguish that evidence from the reviewer's inference.
A broad label such as "new to the topic" does not settle every prerequisite;
a request to explain one connection does not revoke otherwise licensed knowledge.

For the dependencies that affect this passage, distinguish:

- **Available:** use the relation to advance the argument. Retain a brief
  restatement when it supplies inputs at a consequential use or makes a new
  correspondence visible; re-teaching it needs that specific function.
- **To be learned:** build the relation from available premises before relying
  on it. A name, definition, or future-use statement does not by itself teach
  the mechanism.
- **Uncertain:** if plausible alternatives would change the next explanation's
  depth, order, or inclusion, ask one narrow question about that relation before
  making the dependent edit. Continue work independent of the answer. Do not
  turn uncertainty into either assumed expertise or a beginner tutorial.

Keep this working baseline outside the teaching artifact and proportionate to
the task; a few consequential relationships usually suffice. Stable evidence
does not require a questionnaire or renewed confirmation.

When the baseline changes, revisit the draft and prior review decisions that
depended on the changed assumption. Locate the affected explanations, diagrams,
omissions, and transitions; re-decide their inclusion and replay their use under
the current baseline. Remove or reconstruct obsolete scaffolding while keeping
independently useful content. Editing the requirements file alone does not
complete this propagation, and a verdict under the old baseline does not
validate the affected span under the new one.

If work is delegated, supply the current consequential relationships and
uncertainties, not just a learner-level label. Communicate relevant changes to
active reviewers; the integrator must reconcile their results with the current
baseline and inspect affected joins. Report a missing-input problem when the
necessary boundary was unresolved, and an application problem when available
audience evidence was not used; both may occur at different stages.

## Core contract

At each point in the text, construct the reader state from only:

- background knowledge licensed by the stated audience and genre;
- definitions, observations, assumptions, and results established earlier in
  the artifact; and
- future results whose prospective status is explicit, such as a named result,
  theorem statement, question to be resolved, or claim that the paper will
  derive.

Set the audience baseline at the level licensed by the artifact, and distinguish
field-level preparation from topic-level familiarity. A reader may know the
standard language and methods of a field while encountering the particular
phenomenon, model, or derivation for the first time. In that case, field basics
belong to the starting state; the topic's characteristic mechanism,
identifications, and conclusions do not.

A sentence passes when it does at least one of the following:

1. can be interpreted and warranted from that current reader state;
2. introduces a definition, observation, assumption, or reported result that
   legitimately enlarges the reader state; or
3. states a later conclusion with enough prospective marking that the reader
   knows it is an announced destination rather than required prior knowledge.

A sentence fails when its referent, contrast, causal force, identification, or
epistemic status becomes available only from the later artifact and the text
does not mark that dependence. Later clarification does not retroactively make
an earlier sentence pass.

Passing this epistemic test is not sufficient reason to include an explanation.
Also check what work it performs for this audience's next inference. Correct,
understandable exposition may still re-teach available knowledge without helping
the argument.

"Follows" here does not mean formal entailment in every sentence. Academic
prose may report an observation, invoke a standard result, state a theorem
before its proof, or announce a conclusion in an abstract. The requirement is
that the reader can tell what role the statement has and what licenses its use
at that point.

## Inclusion test

Select this perspective when one or more of the following may occur. These are
candidates for sequential inspection, not forbidden phrases.

1. **Unlicensed connective.** A contrast or consequence signalled by words
   such as “however,” “nevertheless,” “therefore,” or “thus” requires an
   expectation or premise that has not yet been established.
2. **Retrospective premise.** A conclusion reached later in the derivation is
   written earlier as a premise, settled identification, or causal explanation
   without being marked as a result that will be established.
3. **Future-dependent referent.** “This transition,” “the two descriptions,”
   “the discrepancy,” or another compressed reference is determinate only for
   someone who already knows the later argument.
4. **Role before introduction.** An object is made to cause, explain, repair,
   or correspond to something before the reader knows what the object denotes
   or why that role is available.
5. **Unmarked retrospective compression.** An abstract compresses the finished
   argument into declarative claims whose status is clear to the author but
   not to an intended reader encountering this topic or argument for the first
   time.
6. **Deferred license.** A sentence is locally unsupported, while a later
   paragraph supplies exactly the missing distinction, calculation, or scope
   condition.
7. **Mismatched explanation depth.** Preparation re-teaches knowledge licensed
   by audience evidence, or a revised reader premise has not changed the
   dependent exposition and its prior review decisions.

Do not select this perspective merely because prose is difficult, uses disciplinary
terms, summarizes results, or places a conclusion before its derivation. Those
features pass when they are appropriate to the audience and when the text
makes the statement's role and dependencies legible. Route scientific
correctness, missing proofs, citation support, and general simplification to
other work unless the local defect is specifically an ordering of reader
knowledge.

## Relation to nearby perspectives

These distinctions are boundary signals for the coordinator. In a
perspective-specific assignment, report a possible overlap without performing
an unassigned audit.

This perspective is distinct from `audit-expository-progression`. A sentence may
name only physical or mathematical objects and still fail because it imports a
later result into the current reader state. Conversely, an explicit roadmap or
first-person result statement may pass here when it is the smallest reliable
way to mark a claim as prospective. Both perspectives may be selected when the
two defects are independently present.

This perspective is also distinct from `audit-negated-contrast`. A contrast can be
licensed but rhetorically unnecessary, or necessary but introduced too early.
The former question belongs to `audit-negated-contrast`; this perspective
handles the latter.

## Drafting prevention

Before drafting an abstract, introduction, section opening, or major
transition, record a provisional reader-state sequence outside the artifact:

```text
licensed starting knowledge
    -> new observation, definition, or assumption
    -> resulting tension, question, or constraint
    -> new object or operation made necessary by that state
    -> announced or derived consequence
```

This is a dependency trace, not a template for the prose. Different sections
may begin with a definition, a result, or a question. What matters is that each
move either follows from the current state or declares how it will be earned.

After drafting, audit the actual text from left to right. Do not use knowledge
from later paragraphs to excuse an earlier gap.

## Sequential audit

Apply the current audience baseline above. Separate general field competence
from knowledge of this topic's mechanism; do not silently move the reader to
either a general audience or a specialist audience.

Read the artifact in order and maintain a lightweight ledger of established
objects, claims, distinctions, and announced destinations. For each candidate
sentence, ask:

1. **Referent:** Can the current reader identify every object or relation on
   which the sentence turns?
2. **License:** What earlier premise supports each contrast, consequence,
   causal claim, or identification?
3. **Status:** Can the reader tell whether the statement is background,
   definition, assumption, observation, preview, reported result, or derived
   conclusion?
4. **Prefix test:** If all later prose were hidden, would the sentence still
   have a determinate meaning and a legitimate role here?
5. **Future-leak test:** Is the reviewer silently importing a later derivation,
   definition, or terminology in order to make the sentence pass?
6. **Need:** Does this explanation build an unavailable relation, enable a new
   application, or make necessary inputs usable together? If its content is
   already available, identify that function before retaining the explanation.

Escalate only failures that affect the intended reader's inference, not every
term that could be defined more fully. When reviewing a whole manuscript, pay
particular attention to:

- the abstract and the first paragraph of the introduction;
- the first occurrence of central technical objects;
- contrastive and causal transitions;
- section openings that rely on the previous section's result;
- summaries that rename or identify a result; and
- the return from formal variables to physical interpretation.

## Term and symbol availability

Run this check within the selected passage when auditing reader state or undefined
terms/notation, and before delivering drafted or substantively revised teaching
prose. This is a check of meaning available at use, separate from whether a claim
is true or a derivation is valid. Expert recognition, a registry entry, and a
later definition are not substitutes for reader availability.

1. Fix the reading route and licensed background. Read in order, including
   equations, captions, tables, and headings. Treat optional supplements as
   separate routes: a hidden definition cannot supply a premise required on the
   main route. When reviewing an excerpt, inspect relevant preceding context if
   available; otherwise mark the dependency unverified rather than absent.
2. Track new technical terms and symbols in a compact working record, reusing
   an existing project record where suitable. For each, retain the first use,
   the local explanation or earlier definition that licenses it, and any later
   use that changes its meaning. For long passages, retain checked coverage by
   section as well as findings; a sample of salient symbols is not a whole-text
   check. Keep this record outside reader-facing prose.
3. Decide whether the reader can identify the object and use it as required
   here. For a term, a functional description or a defining example can suffice;
   a formal dictionary definition is not always needed. For notation, check the
   relevant type/domain, parameter or index role and range, operation and its
   target, and convention such as degree, units, sign, or limiting variable.
   Require only the details that affect interpretation at this use. An equation
   can define a symbol when its inputs and role are already identifiable.
4. Distinguish available background, locally introduced meaning, a sufficiently
   identified preview, missing explanation, later-only explanation, ambiguous
   convention, and meaning supplied only in optional material. A historical name
   or announced theory need not be taught in full when only its stated role is
   used. Conversely, naming an operator does not define its action. Reuse of a
   symbol is allowed when its changed scope and meaning are explicit.
5. Record each material finding at the earliest affected use: the term or
   symbol, what cannot be determined, any later/optional definition location,
   and the smallest repair. Group downstream symptoms under the same missing
   introduction. In an authorized edit, define or rephrase at the first needed
   point and propagate changed notation; in a review, return findings without
   editing. Report unresolved contextual or audience uncertainty separately.

Do not infer missing definitions merely from unfamiliar words. Equally, do not
pass an essential use because a specialist can reconstruct the intended meaning.
A pass requires both identified coverage and no unresolved meaning needed for the
requested passage. Availability does not certify mathematical correctness, proof
completeness, or pedagogical effectiveness; report those separately if in scope.

## Dedicated sequential review

Use a dedicated reviewer when a teaching passage is drafted or substantively
changed in its definitions, derivations, conceptual order, or placement of
reasoning between main text and supplements. Also use it when the user requests
an independent review of epistemic order. A terminology, typo, or formatting
edit that leaves these dependencies intact does not trigger this procedure.
This is an execution mode of the reader-state audit, not an additional
perspective or a requirement to audit every passage in a manuscript.

The coordinator must make the input boundary real. A reviewer who already has
the complete text can silently use later knowledge even when told to ignore
it. Start a fresh, non-authoring reviewer with no inherited authoring discussion,
prior verdicts, or sibling findings, when that isolation is available and
permitted. Give it the current audience baseline and these review instructions;
withhold the full artifact, later sections, supplements, and unrestricted source
paths. If repository access cannot be technically limited, explicitly forbid
retrieving them and describe the boundary as instructional rather than enforced.
If an isolated reviewer is unavailable or the user disallows delegation, perform
a local prefix pass and report that independent validation was not obtained.

The coordinator supplies the reading sequence as follows:

1. Fix the target revision, coverage, audience evidence and uncertainties, and
   intended main reading route. Supply relevant preceding text as context rather
   than silently treating the reviewer's subject expertise as reader knowledge.
2. Present the main route with optional foldouts, tooltips, footnotes, linked
   derivations, and appendices withheld. Preserve visible equations, labels and
   captions; do not remove content merely because it is interactive when it is
   already visible on that route. A format that requires an action to expose
   essential reasoning must still state the required premise or result on the
   main route.
3. Release one meaningful argument unit at a time, such as a definition with its
   immediate use or a short derivation. Require a recorded verdict and the
   resulting reader state before releasing the next unit. A whole assigned
   section is too large when later paragraphs supply the very premises under
   inspection. Split even a short unit at a use whose premise appears only later
   inside that unit. Continue over the agreed coverage even if one unit fails; group
   downstream consequences under their earliest missing dependency.
4. Only after the main-route verdict is fixed, release supplements needed to
   check the flagged premises, computations, or conventions. Finding the missing
   premise there records its location; it cannot turn the earlier main-route
   failure into a pass. Route unresolved scientific validity to an appropriate
   subject review rather than silently deciding it as a prose issue.

Use this reviewer contract with the existing sequential-audit questions:

> Read only the supplied prefix and licensed audience baseline. Before receiving
> the next unit, record the location, the claim or operation being used, its
> required premises, where the available premises were established, and the
> earliest missing relation if any. Check the object's domain and notation,
> the reason for introducing it, and the bridge from a mathematical construction
> to its stated physical meaning. A definition alone need not establish those
> bridges. Preserve the recorded judgment when later text supplies an answer;
> append its location instead. Do not inspect withheld text or edit the artifact.

Accept legitimately announced or reported results under the core contract.
An external theorem can be a usable input when its relevant claim, conditions,
and source are given; its proof may remain in a supplement. A theorem statement,
abstract, roadmap, or licensed disciplinary term does not fail merely because
its proof or fuller explanation comes later. Conversely, a pointer to a later
section does not supply an unidentified object or unspecified assumption.

Record pass / pass-with-notes / needs-changes with revision, coverage, audience
baseline, review mode and input-boundary enforcement, evidence for each material
finding, and unresolved items outside the
teaching artifact. An unresolved dependency needed for the main learning
inference prevents a passing verdict. Repair the earliest cause, then inspect
its downstream uses; do not move every technical calculation into the main text.

A changed revision gets a separate record. When a repair changes the acquisition
order, use a fresh reviewer for the affected prefix and downstream units so
knowledge from later text is not carried into the new verdict. Limit an automatic
review–repair–review loop to two review rounds; after the second, apply justified
repairs and local checks, and report any residual gap or final changes not covered
by an independent verdict. Do not present successful rendering, builds, or expert
agreement as evidence that the reader-state gate passed.

## Abstracts and other result-first genres

An abstract is retrospective for the author but prospective for the reader. It
may name the phenomenon, state the main result, and summarize a derivation
before the body supplies evidence. It must nevertheless distinguish among:

- accepted background or a named phenomenon;
- the motivating observation or puzzle;
- a result the artifact reports or will establish; and
- the route by which that result is obtained.

Use the smallest natural marker that makes this status clear. Depending on the
genre, this may be “is known as,” “we show,” “the derivation yields,” a theorem
label, or an explicit statement of the result. Do not force every preview into
first-person or roadmap language. A technical name may appear early when the
text introduces it as a name; it fails only when understanding the sentence
requires the reader already to know the named theory's later mechanism.

## Repair

Repair the earliest point at which the text spends knowledge that the reader
does not yet have.

1. If an omitted premise is necessary, supported, and economical, establish it
   before the dependent sentence.
2. If the sentence announces a later conclusion, mark its prospective or
   reported status instead of pretending it has already been derived.
3. If a contrast lacks its expected baseline, state the baseline or recast the
   passage around the observable difference that actually motivates it.
4. If an object receives a causal role before introduction, introduce the
   observable problem first and let that problem make the new object necessary.
5. Reorder a paragraph when several local patches would preserve the same
   backward dependency.
6. Remove a sentence when it has no function except to display knowledge that
   the later text will eventually establish.

Do not repair by defining every technical word, replacing all declarative
claims with “we will show,” or expanding every abstract into a miniature
derivation. Do not add vague promises that merely postpone the same gap. The
repair should make the reader's next inference possible while preserving the
genre's compression and the intended audience's legitimate background.

## Boundary cases

- A theorem may precede its proof because the theorem label fixes its status.
- An abstract may report a conclusion before evidence when it is legible as a
  reported result rather than assumed background.
- A standard disciplinary term may be used without definition when the audience
  contract licenses it; unfamiliarity alone is not a sequencing defect.
- A proof or calculation may state the next operation directly when the
  immediately preceding expression makes that operation available.
- A later section may refine an earlier provisional statement if the earlier
  statement was explicitly provisional and correct at its stated resolution.
- Nonlinear historical or narrative order may be appropriate when temporal and
  evidential relations remain explicit.

## Output

- **Edit:** return clean artifact-ready prose. Do not mention the ledger, gate,
  hidden future text, or the correction conversation in the artifact.
- **Review:** identify the earliest failing sentence, the missing item in the
  current reader state, the later passage being imported if any, and the
  smallest supported repair. Separate sequencing defects from scientific gaps
  or audience-background choices.
