# E. Information selection and communication

Judgment: what to convey and how wording, sequence, emphasis, and amount affect
the reader. Review the artifact using its agreed audience and purpose.

## Working explanation: prose directs the reader's attention

Prose does more than store true propositions. Naming a condition asks the reader
to attend to it; introducing a symbol asks them to track it; foregrounding a
qualification can suggest that it explains the result or deserves investigation.
A useful model is a sequence of actions on the reader's understanding: each
choice can change what they consider important, what they expect next, what they
hold in memory, and which questions they pursue. This is a model for explaining failures of
communication, not a literal claim that
each word executes a fixed mental command or that actual brain states are known.

Judge these effects against the understanding the passage is meant to produce.
A mathematically necessary condition may have little explanatory importance in
the present discussion. Giving it prominent treatment can invite the wrong
question even when the condition must remain somewhere in the argument. The
problem need not be falsehood, excessive length, or a defensive tone: a single
accurate aside can redirect the reader away from the intended point.

Use the intended audience and visible text to predict these effects; distinguish
that prediction from observed reader responses. This model primarily informs
18. Use 19 for inclusion and allocation of space, and 17 for information the
reader actually needs. It complements the following hypothesis about where
inappropriate wording can come from.

## Working explanation: language for thinking enters language for communicating

A central explanatory hypothesis for this part of the catalogue is a failure to
keep the language used while working something out separate from the language
used to communicate the result to another person. Deliberation, including a
model's chain of thought, can use provisional labels, compressed relations,
rejected alternatives, self-instructions, and reminders. These can help a thinker
proceed without being appropriate content for the eventual reader. When their
roles become mixed, private shorthand can appear as public terminology, a
correction to an earlier draft can appear as a subject-matter contrast, and a
reminder to explain something can replace the explanation itself.

This hypothesis connects 16, 17, and 20–21 without making them one failed
judgment: source-role separation, information availability, term status, and
semantic completeness still need different tests. Human writers also leave
drafting residue. For AI, one useful proposed mechanism is that intermediate
representations and final prose are both made of readily reusable language;
fluent continuation need not perform a separate check of what belongs in the
deliverable. This is an explanatory model, not a claim that hidden chain of
thought was inspected or that every model uses the same internal process.

Test the artifact and the available work history: what would have to be
translated, unpacked, or removed for the agreed reader who was absent from the
work? Do not request hidden reasoning or invent a drafting history. Apply the
relevant entry to the visible defect. In a requested process record, retain the
reasoning and history that serve its audience, expressed for that audience.

## 16. Leak conversation or instruction language into the artifact

**Failure.** Import wording from requests, critiques, internal plans, or revision
history into the artifact, or use the artifact to signal obedience to those
instructions, giving readers material or implications they do not need.

**Why it can happen.** A language model generates from the supplied context;
vocabulary and phrasing can shape the continuation alongside content. Humans
also imitate language. AI work often places instructions, old drafts, criticism,
and reader-facing prose together, making their different roles easy to blur.
Under the working hypothesis above, language addressed to the thinker or editor
is reused without being converted into language addressed to the final reader.

**Examples.** Turn “be more concrete” into a sentence announcing that concreteness
is important; use an internal workflow name as a reader-facing heading; retain
“unlike the old approach” after the rejected approach has become irrelevant.

**Small-scale pattern: signal compliance inside the deliverable.**
An artifact can carry messages to the requester about the assistant's performance
alongside its messages to the intended reader. Overt examples include “This
explanation faithfully meets the requested criteria” or “We prioritize clarity
and concrete examples.” Subtler forms include repeatedly echoing a requested
quality, inserting headings that advertise it, or giving a corrected detail
extra prominence chiefly to make the correction visible. These can appear in a
first draft as well as a revision; they need not quote the instruction verbatim.

A plausible mechanism is confusing fulfilling a requirement with visibly
asserting that it was fulfilled. Evaluation cues remain salient in AI context,
while commentary about work and the work itself are generated in the same
medium. Human writers can also address an evaluator while ostensibly addressing
their audience. This explains a pattern to test, not an inferred desire for
approval or deception. It differs from merely leaving an obsolete phrase behind:
the added wording or structure functions as a report or self-assessment of
instruction-following inside the artifact.

**Discriminating test.** Hold the reader, task, and required content fixed. If
there were no need to demonstrate compliance to the requester, would this phrase,
repetition, emphasis, or heading still help the reader? Trace any apparent echo
to supplied instructions when available. Without that history, do not invent its
origin; assess the visible self-assessment and its role. A phrase such as “in
practice” or a requested heading is not evidence by itself.

**Repair.** Realize the requested quality in the content: give the example,
explanation, or logical connection. Remove claims that merely advertise doing
so, and restore the emphasis warranted by the subject. Retain the actual
correction; remove only the display of having corrected it. Keep any requested
completion summary outside the artifact unless reporting compliance or changes
is itself the artifact's purpose. Do not add a sentence announcing that the
artifact now avoids these signals.

**Boundary.** Preserve useful reader orientation, meaningful statements of scope
or method, explicitly requested structures, and reports whose purpose is to
account for requirements or revisions. The requester may also be the reader;
the distinction is between communicative roles, not necessarily different people.
Use 01 additionally only when a visible compliance signal was accepted as success;
use 18 when its emphasis creates a separate misleading implication. Observable
contamination alone does not establish those additional failures.

**Small-scale pattern: negate a discarded draft inside the final artifact.**
In “not A, but B,” A may come from an earlier draft, a rejected interpretation,
or a user's correction rather than the subject being explained. For example,
after a drafting discussion changes a section from describing a procedure to
explaining a result, “This is not a procedural checklist, but an explanation of
the result” carries that discussion into a text whose readers never needed it.
The model's continuation can remain anchored to what was just corrected, so it
performs the correction again for the reader. Human revisers also leave traces
of their own drafting debate.

**Check.** Would a reader who never saw the conversation need this wording or
contrast? Would it appear if the artifact had been written correctly initially?
For a corrective contrast, trace A to its source: a live subject-matter alternative
or the work history? The mere fact that A occurred in the conversation does not
give it a role in the deliverable. Do not infer that history from wording alone
when the history is unavailable; assess whether the contrast has a local role.

**Repair and boundary.** Extract the intended content and express it in the
artifact's own vocabulary and structure. Keep historical comparison when it is
the purpose, as in change logs, meeting records, or explanations of misconceptions.
When A only records a discarded drafting choice, remove that branch and express
the supported B directly. Also remove orphaned “instead,” “now,” or “correctly”
that still presupposes the discarded version. Do not erase a genuine limitation,
negative result, or comparison requested as part of the artifact.

## 17. Treat the writer's knowledge as already supplied

**Failure.** Explain using sources, conversation history, or later conclusions
as if the reader could already use that information at this point.

**Why it can happen.** Writers see a whole argument while readers receive it
incrementally, a structure similar to the human curse of knowledge. AI can draw
on a broad context, so understanding with that context does not establish that
the delivered text supports the same understanding.

**Examples.** Use undefined notation; assume a result explained only later;
deliver instructions that require unshared discussion; skip an inferential step
as “obvious.”

**Check.** Using the agreed background knowledge and only what the reader has
received by that point, can they make the next inference or take the next action?

**Repair and boundary.** Supply the missing definition or bridge where it is
needed. Do not reteach agreed background or add a whole tutorial for one missing
step. Inventing the reader's prior knowledge belongs in 07; this entry concerns
mis-tracking information availability even with the reader premise held fixed.

## 18. Judge the whole message by sentence-level truth

**Failure.** Check each sentence's factual truth while overlooking what placement,
emphasis, and omission imply about importance, causality, necessity, or scope.

**Why it can happen.** Local truth is easier to check than the understanding
created over a sequence of sentences. Human writers face this too. An AI that
fulfills individual requirements in sequence can assemble true fragments that
suggest a relationship the evidence does not support.

**Examples.** Emphasize a testing condition until it looks necessary for validity;
juxtapose facts so that readers infer an unsupported cause; move an exception
until a conditional claim reads as unconditional.

**Small-scale variants:**

| Pattern | Why it can happen | Discriminating test and repair |
|---|---|---|
| Stage an irrelevant alternative: “not just A, but B.” | Corrective rhetoric supplies an easy shape for an apparently deeper explanation. | What made A a live subject-matter alternative, and what establishes the distinction? Remove an invented opposition and state the supported claim. If A came from drafting history, start with 16. Preserve real contrasts, nonexistence results, and scope limits. |
| Add a logical relation through “therefore,” “however,” or a trailing “thereby demonstrating…” clause. | Familiar transitions can connect fluent sentences before their logical relation has been checked. | State the actual inference, contrast, or mechanism. If it is unsupported, remove the connector or repair the argument; replacing it with another connector is insufficient. Keep transitions that express a real relation. |
| Force parallel headings, a three-part list, or “both sides” into apparent equivalence. | Symmetric forms supply easy continuations and resemble completeness. | Are these items comparable at the same level, with the implied evidential weight and coverage? Regroup, qualify, or remove filler items. Keep useful parallel structure; three items alone prove nothing. |

These are explanatory models for the patterns, not a claim that a connector or
list format itself identifies a bias.

**Check.** What would the position and emphasis lead a reader to consider central,
necessary, causal, or general? What evidence supports that reading?

**Repair and boundary.** Adjust order, relational explanation, and emphasis while
preserving the claim's scope. Keep necessary qualifications. Distinguish predicted
reader impressions from measured reactions. All content may be necessary yet
misleadingly arranged; that is this entry, while disproportionate information
relative to its usefulness belongs in 19.

### Defensive detail that misdirects attention

**Failure.** Add or foreground definitions, assumptions, quantifiers, cases, or
derivations to preempt objections, thereby inviting the reader to regard a
secondary issue as central or to investigate a question that does not advance
the intended understanding. The mathematics may be valid. The error is the
importance or explanatory role suggested by presenting it this way.

**Why it can happen.** Checking a possible objection is a concrete local task;
judging how its mention changes a reader's understanding requires considering
the whole passage. Humans also write defensively when anticipating criticism.
In AI work, verification language and readily generated qualifications may enter
the final prose without a separate judgment about their communicative effects.
This is a working explanation, not evidence of the author's motives or unseen
review history. Defensive writing is one possible source of the failure, not
the defining condition for diagnosing it.

**Check.** Recover the intended message, audience, and role of the passage. For
each conspicuous detail, ask what it invites the reader to attend to, regard as
important, retain for later, or ask next. Is that invitation useful here? Does a
condition merely delimit validity, or explain why the result occurs? Does the
placement make one look like the other? A detail can be necessary for correctness
without deserving explanatory prominence. Do not add definitions merely because
words can be defined; establish what ambiguity matters for this reader's next
inference.

**Repair.** Organize the passage around the intended relationship and the steps
needed to understand it. Give necessary scope conditions proportionate, precise
treatment where the claim needs them; place full formal assumptions and
verification details in the relevant theorem, proof, methods section, or linked
reference when that division serves the task. Remove irrelevant objections and
redundant restatements. Check that the revised emphasis no longer presents a
secondary condition as the subject or mechanism. Merely adding a summary to the
same distracting prose does not repair the reader's route through it.

**Example.** A derivation fixes a standard normalization so that the coefficient
has an unambiguous value. Repeatedly highlighting this convention in a paragraph
about the physical mechanism can make it seem like a special physical assumption
responsible for the effect. State the convention where the formula needs it and
explain the mechanism in its own terms. If normalization changes the question
being answered, that distinction does deserve explicit attention.

**Boundary.** Preserve assumptions that determine the claim's scope and steps the
reader needs. Do not hide them behind vague “regularity conditions,” imply broader
validity, or remove definitions from a requested complete proof. A theorem,
formal specification, or foundational explanation may properly make conditions
the central subject. Equations can be the clearest communication. Judge the
invited understanding, not the amount of notation or technical difficulty.
Use 19 for unnecessary inclusion or disproportionate space, 23 for unwarranted
hedging or claim strength, and 01 only when resistance to objections has itself
replaced communicative success. None of these causes follows from 18 alone.

## 19. Include information beyond its useful role

**Failure.** Include a related fact, or give it excessive space or emphasis,
without comparing its contribution to the requested answer, understanding,
decision, or action.

**Why it can happen.** Associating related facts and selecting useful information
are different operations. Humans add tangents, well-meant supplements, and overly
complete reports too. AI can generate many natural continuations quickly, making
“there is something related to say” an easy substitute for a reason to say it.
The cost to the reader's attention and the effect of removal require a separate
comparison.

**Variants and discriminating tests:**

| Variant | Test |
|---|---|
| Say unnecessary things: roleless supplements, repeated conclusions, unsolicited next steps. | What understanding, decision, or action would be impaired by removing this sentence? Is topical relevance the only reason to retain it? |
| Dwell on trivialities: give low-impact distinctions or cosmetic preferences the same weight as decisive issues. | If this detail changed, how much would the conclusion or choice change? Does that contribution justify its space and prominence? |

**Core check.** Compare each element's concrete role with the attention allocated
to it. With no role, reconsider inclusion; with a small role, reconsider position,
length, and emphasis.

**Repair and boundary.** Remove roleless additions, omit or separate low-priority
detail, and stop when the requested purpose is served. Retain conditions that
prevent misuse, warnings that change action, requested background, and explicitly
requested inventories. Do not optimize for shortness itself. Length alone does
not establish this bias.

**Small-scale variants:**

| Pattern | Why it can happen | Discriminating test and repair |
|---|---|---|
| Preface an answer with “It is important to note,” announce the coming explanation, or repeat it under “In conclusion.” | Familiar exposition supplies an opening and closing even when the answer is already complete. | Does the frame orient the reader or change interpretation? Remove it when it only announces or repeats the content. Preserve navigation for a genuinely long or complex artifact. |
| Add interchangeable praise, reassurance, apologies, or offers of more help. | A generic helpful persona can supply social language independent of the particular exchange. | Does it answer a real interpersonal need, acknowledge an actual error, or enable a relevant next action? Keep that function; remove automatic padding. Warmth and genuine apology are not defects. |
| Add generic significance, benefits, or future possibilities after the concrete result. | Associative continuation makes broadly applicable endings easy to generate. | Would the same sentence fit many unrelated subjects? Identify its specific contribution or delete it. If its evaluation overstates support, also test 23 in wording.md. |
| Add a reflexive caveat or disclaimer with no bearing on this use. | A learned careful-sounding ending can be applied without checking the actual decision. | Which plausible misinterpretation or action does it prevent here? Retain relevant limits and required notices; remove irrelevant caution rather than weakening every claim. |

## Distinguish output from the chain that produced it

A recent “be more thorough” could displace other constraints (05), turn visible
thoroughness into the success criterion (01), lead to additive editing (11), and
produce roleless information (19). These are different judgments. Observing the
last one does not prove that the earlier causes occurred. Report the supported
failure and use possible explanations to choose a useful next test.
