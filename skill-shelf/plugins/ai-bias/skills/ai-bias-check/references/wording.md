# Wording and terminology

These entries continue category E. Inspect an actual phrase in its paragraph,
with the artifact's purpose, field, and intended audience held fixed. A familiar
AI style is a reason to inspect, not evidence of failure or of AI authorship.
Do not blacklist words, punctuation, passive voice, or compounds.

For the shared explanation connecting private thinking language with public
prose, see [the working hypothesis in communication](communication.md#working-explanation-language-for-thinking-enters-language-for-communicating).
Use it to select tests, not to claim access to hidden reasoning.

## 20. Present an invented term as shared vocabulary

**Failure.** Insert a locally invented label, compound, acronym, or translated
term into a deliverable as though it were already recognized vocabulary. The
failure is the unmarked transition from generating a phrase to treating it as
a term. Even a readily understandable coinage can make this false suggestion.

**Why it can happen.** Productive language generation can combine familiar words
into a plausible-looking unit without checking whether that unit has the stated
status in the field. Reusing it in later sentences then makes the local invention
look settled. Humans also introduce private shorthand without noticing; an AI
can generate and propagate such shorthand within one fluent drafting pass.
A provisional label useful during deliberation may cross into the deliverable
without the separate act of checking or introducing its status for other people.

**Variants and discriminating tests:**

| Variant | Test |
|---|---|
| Stack nouns into an apparent technical term: introduce “evidence alignment layer” in a report about comparing observations. | Is this a field term, an explicitly introduced local definition, an ordinary descriptive phrase, or an unmarked invention? Familiar component words do not settle the status of the combination. |
| Give a one-off idea a framework name, acronym, capitalization, or hyphenated label. | Does the artifact present a deliberate naming act, or quietly promote an improvised phrase into an established concept? Repetition by the AI is not independent evidence of establishment. |
| Manufacture a target-language term by translating a source expression word by word. | Is the resulting term actually used in the target field, or did only its source-language counterpart have established status? |

**Check.** Locate the first use and establish the expression's status from
supplied terminology, relevant field usage, or an explicit local definition.
Inspect plausible coinages selectively; do not demand citations for ordinary
descriptive language. If status matters and cannot be verified, do not imply
that the term is established.

**Repair and boundary.** Replace an unmarked invention with an established term
or a direct description of the intended relation. Do not automatically legitimize
it by adding a definition. Deliberately introducing a new term is appropriate
when the task calls for naming or the argument actually needs a reusable concept;
mark that act explicitly and define the content before relying on the name.
Preserve established technical compounds, proper names, and intentional creative
language. Readability is a secondary consideration for deliberate naming, not
the admission test for silently invented terminology. Entry 16 concerns where
wording came from; this entry concerns the status it is given in the artifact.

## 21. Compress away the relation the sentence needs to state

**Failure.** Abstract nouns, nominalizations, modifier piles, or vague verbs
replace the wording that would specify the actor, action, object, condition,
or comparison needed to determine its meaning.

**Why it can happen.** Nominal phrases package actions as objects and resemble
dense professional prose. A model can reproduce that surface compactness while
leaving semantic roles unbound. Human bureaucratic and academic writing does
this too: a short noun phrase can conceal several different propositions.
The thinker may supply the missing relation from their own working context;
copying that compression into public prose leaves the reader without it.

**Examples.** “Validation of the adaptation was performed” leaves unclear what
was checked, by what test, and against what criterion when those distinctions
matter. “The system supports optimization” does not specify whether it computes
an optimum, exposes a control, or only reports a metric. A long modifier chain
can leave the condition attached to the wrong operation.

**Check.** Expand the sentence into who or what does what, to which object, under
which condition. Can two materially different expansions fit? Identify the
missing relation instead of merely judging the sentence hard to read.

**Repair and boundary.** Restore the supported verb and its relevant arguments;
split a sentence or clarify attachment when necessary. If the source does not
determine the relation, report the content gap outside the artifact rather than
inventing an actor or causal link. Keep passive voice when the actor is irrelevant,
and keep abstract nouns that denote genuinely defined objects. Entry 20 tests
term status; this entry can fail using entirely standard words. Entry 17 concerns
information unavailable at the reader's current point; this entry concerns a
relation left indeterminate by the expression itself.

## 22. Vary wording without preserving identity

**Failure.** Substitute a synonym, translation, abbreviation, or stylistic variant
without checking whether readers can still identify the same object, operation,
or technical distinction.

**Why it can happen.** Avoiding repetition is a familiar writing preference.
Words similar in general usage can also be plausible local continuations, even
when they have different technical meanings. Humans vary language for elegance;
AI revision can apply that preference independently at each occurrence, losing
the document's stable mapping between names and referents.

**Examples.** Alternate “accuracy,” “precision,” and “reliability” for a single
measured quantity; rename one component across headings; alternate translations
so one concept appears to be two. The reverse error uses one convenient word for
distinct source concepts and erases the difference.

**Check.** Trace repeated references to the same entity and distinct references
that must stay distinct. Does the wording preserve both mappings? Can a reader
tell whether the vocabulary change signals a real change of object or meaning?

**Repair and boundary.** Restore stable terms where identity matters and state
an alias once when useful. Preserve intentional distinctions and ordinary
paraphrase that cannot confuse identity. Do not enforce identical wording
throughout prose or replace field terms merely to make the vocabulary uniform.
Entry 20 asks whether a term was improperly introduced; this entry asks whether
names and referents remain consistent across uses.

## 23. Choose the force of a claim by tone rather than grounds

**Failure.** Make a claim sound more certain, tentative, important, general, or
evaluative than its support and scope warrant, while treating the change as
stylistic polish.

**Why it can happen.** Assertive prose can resemble expertise, while hedging can
resemble care. Both are reusable language patterns. Humans manage impressions
through these choices too. A model can select a confident or cautious voice
without separately checking the epistemic force of each proposition.

**Variants and discriminating tests:**

| Variant | Test |
|---|---|
| Inflate certainty: “clearly,” “proves,” “guarantees,” or “always.” | Does the evidence establish exactly that strength and scope, or only support, association, or a conditional result? |
| Hedge ritualistically: “may perhaps suggest” around a directly established fact. | What is actually uncertain? Does the hedge locate that uncertainty or merely make the sentence sound careful? |
| Inflate significance: “groundbreaking,” “crucial,” “remarkable,” or an unsupported superlative. | Which comparison or consequence licenses the evaluation? Would a concrete result be more accurate? |
| Attribute ease or emotion: “obviously,” “simply,” “fortunately,” or “you may be surprised.” | Whose knowledge, effort, preferences, or reaction does this wording presume, and is that premise available? |

**Check.** Compare the proposition expressed with and without the modifier,
modal, or reporting verb. Is the difference justified by the evidence, domain,
and agreed communicative purpose? Do not equate fluent certainty with support.

**Repair and boundary.** Match the wording to the supported claim and identify
the specific uncertainty when it matters. Remove unsupported evaluations and
reader attributions; keep justified emphasis, appropriate tact, and requested
expressive tone. Do not make every claim tentative. If the belief itself changed
to please the user, inspect 03; if an invented audience premise controls content,
inspect 07. Here the immediate failed decision is how a claim is expressed.

## Related small-scale patterns in existing entries

For “not A, but B” that negates an earlier draft or rejected interpretation,
start with [16](communication.md#16-leak-conversation-or-instruction-language-into-the-artifact).
For unsupported subject-matter contrasts, decorative logical connectors, and
misleading parallel lists, use
[18](communication.md#18-judge-the-whole-message-by-sentence-level-truth).
For empty framing, repeated conclusions, stock courtesies, and generic closing
offers, use [19](communication.md#19-include-information-beyond-its-useful-role).
For internal workflow labels and residues of a correction, use
[16](communication.md#16-leak-conversation-or-instruction-language-into-the-artifact).
The location of an expression in a sentence does not create another primary
category; select the judgment that its concrete defect exposes.
