# Gap Taxonomy

Use these labels during scan, fill, and verification. Multiple labels may apply.

## G1: Skipped Step

A nontrivial calculation, proof step, or transformation is hidden behind phrases
such as "clearly", "directly", "similarly", or "therefore".

Repair by reconstructing the necessary intermediate steps from definitions,
lemmas, or calculations. Do not expand trivial algebra.

## G2: Missing Dependency

A claim depends on another result, definition, fact, computation, or dataset
without a usable reference.

Repair by identifying the dependency and connecting it at the right granularity.
If the dependency itself lacks support, mark it for proof or external repair.

## G3: Implicit Assumption

The argument needs an unstated condition: finiteness, regularity, boundary
conditions, convergence, commutativity, nondegeneracy, gauge choice,
normalization, sign convention, measurement condition, approximation range, or
data preprocessing.

Repair by stating the assumption and where it enters.

## G4: Missing Motivation

A construction, definition, ansatz, variable change, approximation, or proof
strategy appears without explaining its role.

Repair by connecting the choice to the problem it solves, such as diagonalizing
an operator, exposing a conserved quantity, or satisfying required conditions.

## G5: Undefined Notation

A symbol, index range, operator, abbreviation, or convention is used before it is
introduced.

Repair by defining it at first use or linking to the established definition.

## G6: Structural Leap

The frame changes without justification: finite to infinite dimensional, local
to global, classical to quantum, formal computation to analytic argument, or
continuous model to discrete implementation.

Repair by separating what is preserved from what now requires new conditions.

## G7: Incomplete Case Analysis

Cases, induction steps, classifications, or symmetry reductions are not
exhaustive.

Repair by stating the full case space, omitted cases, symmetry reductions, base
cases, and induction applicability.

## G8: Presentation Break

The content may be correct, but the presentation blocks the reader's inference:
equations are disconnected from prose, dense bullets hide logic, or display math
is overused for trivial steps.

Repair by reorganizing the local presentation so the reasoning order is visible.

## G9: Artifact Granularity

The artifact has too many independent concepts or proofs, or it is split so much
that dependencies disappear.

Repair by extracting reusable concepts/proofs/calculations or recombining
fragments according to local convention.

## G10: Cross-reference Failure

Links, citations, labels, equation numbers, or section references are absent,
wrong, broken, or too coarse.

Repair using the target artifact's reference format. If the needed change is out
of scope, return an external request.

## G11: Wrong Conclusion

The conclusion itself is false or unsupported, not merely underexplained.

Repair by isolating the failed assumption, calculation, or reference; correct the
conclusion; and inspect downstream dependencies. If unresolved, state the exact
condition needed for resolution.

## G12: Missing Proof

A theorem, proposition, lemma, or important claim lacks proof or verification.

Repair by formulating the claim precisely, choosing a proof strategy, adding
needed lemmas and assumptions, and placing the proof in the artifact's expected
form.
