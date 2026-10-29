## Question identity and transfer

Check the identity of the question separately from validity of its proof.
Keep two roles distinct in existing research memory: the working formulation
that guides the next investigation, and the conditions under which its result
would answer the requested question. Do not regenerate the latter from the
former. A result can be correct and valuable without satisfying those conditions.
This applies to analytic reductions, numerical models, sampled tests and chosen
observables as well as definitions of operations.

For each known gap in that connection, retain what would discharge it and the
evidence actually available. Remove it from the unresolved conditions only when
that evidence is obtained, or when a user instruction or source-based correction
changes the target with an explicit reason and reassessment of affected claims.
Describing the gap accurately, accumulating successful checks elsewhere, or
lowering its prominence in a summary does not discharge it. When the evidence
conflicts with a proposed completion claim, change that claim or keep it open;
do not preserve it merely by adding a qualification. This does not require
another ledger, a reviewer veto or guaranteed progress before exploration.
When a conclusion depends on a technical definition, recover its authority:
the user's explicit choice, a specified source definition, or an exploratory
choice made by the researcher. Use the relevant primary passages rather than
assuming the current result note or reviewer packet settles that choice.
If sources use materially different conventions, expose the difference;
"standard" is not itself evidence. Respect a user's deliberate nonstandard
question without silently replacing it by the literature's convention.

Before sustained work, after a formulation change, and before declaring the
original question answered, compare the requested statement and proved
statement in the existing question/focus note. Track their objects, allowed
operations/resources, error criterion, quantifiers, scaling and limit order,
and the evidence authorizing any change. Preserve links to known mismatches
as live conditions. Summarizing a mismatch as an explicit limitation does not
establish the missing implication.

Check the direction of transfer. To refute existence in a target operation
class, the excluded class must contain every target operation, or a proved
reduction must cover the omitted cases. A construction must produce an
operation allowed by the target definition. Stronger premises, exact equality
in place of approximation, and uniform bounds in place of size-dependent
resources can invalidate transfer even when every proof step is correct.
A physical subclass inclusion verifies that subclass, not the full target.
Without the required relation, retain the restricted theorem as partial
progress and keep the target question unresolved. This is not evidence that
the restricted theorem is false or that a target-class construction exists.

For an independent formulation check, give a fresh source-fidelity reviewer
the human request and primary definition passages before the candidate's
chosen formulation, with that baseline judgment frozen first. Its decision
is the transfer to the requested question, not whether the candidate is
honest about its narrower scope. Fresh contexts can still share the same untested premise: independence of
review reasoning is not independent evidence for that premise. Identify what
was stipulated versus checked. Mathematical reviewers may stipulate chosen
definitions, but neither their verdict nor a tally of such verdicts can close
the separate transfer condition.

# Verification is scoped evidence

For a consequential claim, keep its statement and assumptions in one result note and record each actual check against that exact version. The record answers: what was checked, by what method, with which inputs/tool/model, what happened, and what remains unchecked. It is not a confidence score or an approval token.

| Method | What the record must distinguish |
|---|---|
| analytic | Written argument and assumptions; authorship alone is not independent checking. |
| ai_check | Actual model, fresh-context independence, one assigned decision perspective, inspected claim/sections and report. ACCEPT means no located defect in that scope. |
| formal | Proof-assistant/kernel output, tool version and theorem/assumptions encoded; distinguish unchecked axioms, trusted code and translation from the physical claim. |
| symbolic | CAS identity or exact finite computation, domain/branch assumptions, exact versus floating arithmetic and reproduction command. A symbolic answer is not automatically a kernel-checked proof. |
| numerical | Code/data, parameters, size, seeds when relevant, precision and uncertainty/convergence checks; samples do not prove a thermodynamic or universal statement. |
| source | Exact source/version/passage and applicability; distinguish source theorem from the project's translation and inference. |
| mechanical | File/schema/link/reproduction check; establishes that operational property only, not scientific correctness. |

Choose verification for the uncertainty that matters. An exact computational identity need not acquire an AI approval merely to be saved. A hard argument driving subsequent work merits an independent mathematical check; use the upper tier when that reasoning requires it, not for assembling the packet or copying a report. No method universally replaces another. Numerical evidence can strongly support a conjecture without proving it; a small exact counterexample can refute a universal statement within its actual domain.

Use `python3 scripts/research_memory.py --project-root PROJECT record --input INPUT.json` from the package. The input gives claim_id, target, method, scope, outcome, evidence paths and relevant method details; the script adds IDs, timestamps and target/evidence hashes to `research/verification.jsonl`. Use `status` to flag changed or missing artifacts and historical failed/inconclusive checks. The script reports freshness and recorded outcomes only. It must never infer theorem truth, novelty, general reliability, or a proof from a numerical PASS.

One automated content identity is enough to detect stale checks. Use a Git revision when useful as an additional source identifier; no copied review, extraction manifest or hand-verified hash inventory is required. A stale result is not automatically false, but it cannot certify the changed claim. Inspect the changed part and repeat only affected checks. Preserve contradictory/failed records and annotate the result's current limitations.

If a check cannot run, record the missing capability and do not label a planned, simulated, self-authored or unaudited result as independently checked. Saving exploratory claims remains allowed with their status explicit. When retracting a claim, mark its owning note and affected conclusions; preserve the failed witness and prior checks. A content-preserving move can update paths mechanically, whereas a changed hypothesis requires substantive reassessment.
