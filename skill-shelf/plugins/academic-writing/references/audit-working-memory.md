# Audit Working Memory

Use this perspective when scholarly prose makes readers carry definitions,
notation mappings, conditions, intermediate results, or unresolved questions
through intervening material before they can use them. All information may be
correct and already introduced while its retention and recombination still
obstruct the argument.

## Decision contract

Make the reasoning worth doing and keep its inputs usable at the point of
inference. Remove avoidable mental bookkeeping imposed by presentation;
preserve the processing needed to understand the subject. This is a qualitative
editorial gate, not a measurement of a reader's cognitive capacity.

Fix the intended audience and genre. A relation that experts retrieve as one
familiar unit can require several separate bindings for a reader new to the
topic. Establish which relationships the text lets this reader recognize or
operate with before treating previously defined material as usable. Naming a
collection of facts does not make it a familiar chunk. Neither six items nor
any other fixed count is a pass threshold. Length, number of symbols,
difficulty, repetition, and early result statements are not failures by
themselves. A concise paragraph can impose more retention work than a long,
cumulative derivation.

For teaching artifacts, use [Pedagogical exposition](pedagogical-exposition.md)
to establish the learner's purpose and motivation before unfamiliar preparation.
A meaningful reason to learn can help organize information, but does not by
itself remove retention demands. Motivation and emotional engagement also
matter independently of memory load.

## Select and distinguish

Select for delayed use of unfamiliar machinery, stacked promises of later
explanation, repeated changes of notation or representation, definitions far
from dependent equations, or compressed steps requiring several unsupported
mental substitutions. A complaint of slow or frustrating exposition is a cue
to investigate these relations, not sufficient evidence of overload.

- `audit-reader-state` checks whether a premise has been licensed or introduced.
  This gate checks whether its relevant content can be retrieved and combined
  without avoidable reconstruction, even after a proper introduction.
- `audit-expository-progression` checks why a move belongs in the argument.
  This gate checks the retention burden across a sequence of legitimate moves.
  Both may fail independently; a roadmap can establish purpose without
  supplying the inputs for the next inference.

## Inspect the actual reading sequence

Read in order, using only the audience baseline and the text so far. For each
suspected bottleneck, make a short record outside the artifact:

- the question or inference the reader is currently pursuing;
- the exact items and relationships they must retain, and where introduced;
- what intervenes before their first consequential use or next required reuse;
- what lets them recover those inputs there: a nearby equation, an explicit
  correspondence, a meaningful name, a usable diagram, or established knowledge;
- what the reader can now infer, distinguish, calculate, or decide, and which
  pending obligation that result resolves.

An item need not be used immediately. Test whether the interval helps establish
a usable concept or leaves unfamiliar material pending while other demands
accumulate. A promised future use is not an actual use. Naming a result does not
make its internal relationships a learned unit. A forward reference does not
make an absent explanation available, and a distant link may still require
holding one half of a comparison while searching for the other.

Pay particular attention to these transitions:

1. A question is opened, then suspended for several preparations that open
   further questions. Can the subsidiary argument reach a meaningful result
   before another demand is added?
2. The same object changes symbols, units, basis, or interpretation. Must the
   reader remember an arbitrary dictionary to recognize it again?
3. A step combines premises from separated locations. Can the reader see the
   relevant content together, or must they reconstruct the derivation mentally?
4. An explanation pauses for qualifications or technical data. Is that material
   needed for the current inference, and can the original task be resumed from
   the text without recalling its whole earlier state?
5. Several dependent steps have been compressed into one sentence or equation.
   Would exposing an intermediate relation reduce mental work while preserving
   the essential reasoning?

Require a concrete retention or integration demand and its consequence for the
intended reader before recording a failure. Do not assign invented load scores,
claim empirically measured overload, or flag every remote dependency.

## Repair at the level of the dependency

Choose the representation and order that let readers use information while
learning it. Consider relocating definitions to a meaningful use; establishing
one worked instance before generalizing; completing a subsidiary argument into
a reusable result; or choosing a different supported derivation that needs fewer
simultaneously active relations. Preserve exact hypotheses and the result's scope.

Reconsider notation itself before adding reminders. Keep related quantities
recognizably related, distinguish different roles and units, and propagate a
change through equations, prose, diagrams, and references within the authorized
scope. A definition of two aliases does not justify keeping both.

Keep inputs that must be compared or combined close together. A short local
restatement, aligned equation, or diagram can reduce retrieval effort; include
only the part used by the current inference. Check whether a foldout, link,
footnote, or summary actually makes the material accessible at that use rather
than merely moving it out of sight.

Retain repetition that transforms a concrete operation into an understood
relation, connects representations, or makes the next inference possible. For
example, growing a square by an L-shaped border, counting that border as an
odd number of cells, and summing successive borders successively connect
geometric growth, arithmetic size, and accumulation. Retain each contribution
even though the same square is revisited. Likewise, pre-training on essential concepts
can make a later complex explanation easier; give it a coherent object and an
attainable local outcome rather than requiring immediate use of every term.

Do not replace required reasoning with unexplained conclusions, strip material
conditions, impose a uniform short-section template, or add an obligatory
motivation sentence, recap, or glossary. More explanation is warranted where it
reduces hidden substitutions or exposes a mechanism. A long proof, a result-first
abstract, and a carefully stated theorem can pass with clear dependencies and
appropriate support. Replacing a proof requires mathematical verification under
the relevant workflow; this gate alone does not certify scientific correctness.

## Verification and output

Re-read the repaired sequence with the same audience baseline. At each changed
transition, actually perform the smallest meaningful inference or application
required next, using only that baseline and the text available so far. Record
its inputs, the relation combining them, and the result. If the demonstration
needs later explanations or the reviewer's unlicensed topic knowledge, the
passage has not supplied usable premises. This is a check of textual support,
not evidence that a human reader has formed a durable memory or mental schema.

Compare the original bottleneck with the revised path: what retention, search,
or reconstruction is no longer required, and was any necessary inference or
condition lost? Verify the downstream use, not only the repaired definition.
Do not claim success from fewer words, more headings, a stated purpose, or a
larger number of examples.

For diagnosis, report the exact introduction-to-use or premise-to-inference
span, the burden it imposes, and a concrete alternative. For an edit, deliver the
clean artifact and keep this ledger and audit language outside it. If the needed
repair crosses the authorized scope, identify that dependency instead of making
an unsupported local fix. A pass means no material avoidable burden was found
under the stated audience assumptions; it does not guarantee effortless reading.

## Research and practice informing this gate

The procedures above are editorial applications of the following work. They
are not a validated psychological test of prose, and transfer from classroom or
multimedia studies to scholarly text requires judgment.

- Nelson Cowan (2001), [The magical number 4 in short-term memory](https://memory.psych.missouri.edu/assets/doc/articles/2001/cowan-bbs-2001.pdf), abstract and §§1–1.2. Capacity estimates concern identifiable chunks under specified experimental conditions, including controls on recoding and rehearsal. This motivates audience-sensitive analysis of relationships being held, not a fixed word, symbol, or concept limit.
- NSW Centre for Education Statistics and Evaluation (2018), [Cognitive load theory in practice](https://education.nsw.gov.au/about-us/education-data-and-research/cese/publications/practical-guides-for-educators/cognitive-load-theory-in-practice.html), strategies 1–5. Its classroom guidance connects prior knowledge, worked examples, increasing independence, removal of inessential material, and presenting essential information together. Applied here: establish usable relations and reduce split attention while retaining the content needed for the argument.
- Richard E. Mayer and Celeste Pilegard (2014), [Principles for Managing Essential Processing in Multimedia Learning](https://doi.org/10.1017/CBO9781139547369.016), chapter 13, summary. Learner-paced segmentation and pre-training address demands from essential material. Applied here: choose meaningful stages and establish unfamiliar components when that enables subsequent integration; do not force every explanation into immediate-use fragments or assume that advance preparation is intrinsically bad.
