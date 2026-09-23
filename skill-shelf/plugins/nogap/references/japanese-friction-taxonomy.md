# Japanese Friction Taxonomy

Use these labels when a Japanese artifact feels wrong, heavy, translated,
overcompressed, or hard to read even when the logical content may be correct.

These are reader-friction labels, not proof-gap labels. Use G1-G12 from
`gap-taxonomy.md` when the problem is a missing inference, assumption, proof, or
dependency.

## J1: Translationese

The sentence follows English word order, noun stacking, or connective rhythm too
closely.

Repair by rewriting into natural Japanese information order while preserving the
technical content and terms.

## J2: Register Mismatch

The prose mixes registers: overly casual expressions in formal notes, stiff
legalistic phrasing in study prose, or blog-like emphasis in a proof.

Repair by matching the artifact's local register and audience.

## J3: Topic Flow Break

The topic or subject changes without a Japanese discourse cue, causing the
reader to lose what the sentence is "about".

Repair by restoring topic continuity with word order, particles, explicit
subjects, or a short transition.

## J4: Particle or Attachment Ambiguity

Particles, modifiers, or long relative clauses leave unclear what modifies what
or which object a claim applies to.

Repair by splitting the sentence, moving the modifier, or naming the object.

## J5: Over-Nominalization

Abstract nouns and `こと` / `もの` / `性` / `化` chains hide the actual action or
relation.

Repair by recovering the verb, relation, or actor when it improves readability.

## J6: Connective Mismatch

Connectives such as `したがって`, `一方`, `つまり`, `なお`, `ただし`, or `むしろ`
do not match the actual relation.

Repair by replacing the connective or rewriting the neighboring sentences so the
relation is explicit.

## J7: Term Instability

The same technical term is translated or abbreviated inconsistently, or an
English term and Japanese term alternate without reason.

Repair by choosing the local canonical term and noting alternatives only when
they matter.

## J8: Rhythm or Density Failure

Sentences are too long, clauses stack too deeply, or every sentence has the same
shape, making the reader reparse instead of following the argument.

Repair by splitting, merging, or changing sentence rhythm without diluting the
content.

## J9: Emphasis Drift

The Japanese sentence emphasizes a side point rather than the mathematical or
physical point that should carry the paragraph.

Repair by moving the main claim to the position of emphasis and demoting
secondary conditions.

## J10: False Naturalness

The prose sounds fluent but weakens a technical distinction, hides a condition,
or turns a precise claim into vague explanation.

Repair by keeping the technical distinction explicit, even if the sentence
becomes slightly less casual.
