---
name: claim-audit
description: Exhaustively audit equations, claims, and inferential connections in scholarly teaching documents using small evidence-bound agent tasks, an explicit coverage ledger, and separation from authoring. Use for requested formal or claim-by-claim audits, including low-token delegated audits; ordinary prose review does not require this workflow.
---

Read [the shared authoring contract](../../references/authoring-contract.md) before applying this workflow.

# Academic Claim Audit

Make every substantive assertion and inference accountable while keeping the
teaching document free of the audit's structure. This is a structured human/LLM
audit, not machine-checked mathematical proof. A completed audit may find that
the document fails.

## Inputs and boundary

Recover the target revision and range, learning objective, audience's usable
knowledge, conventions, authoritative sources, and desired audit/repair scope.
Record these in project-owned audit files, outside the published content.
Ask narrowly when a missing reader premise changes a decision; meanwhile audit
unaffected claims. Do not replace a specific uncertainty with a broad label
such as "beginner" or "expert".

Use this skill for exhaustive accounting. A selected excerpt is a pilot with
explicit bounds, never evidence of full-document coverage. Existing academic
writing or logical-gap reviews can provide methods, but their verdicts are not
premises for this audit. Read [the protocol](references/protocol.md) before
creating the inventory or dispatching agents. It routes to the dimension-specific
worker rules and ledger format. For the explanatory basis of these judgments,
read [説明が理解を進める条件](references/understanding-and-evidence.md);
that essay is maintained guidance, not an additional per-leaf input.

## Work allocation

The coordinator freezes inputs, accounts for coverage, prepares small packets,
checks dependencies across packets, and adjudicates findings against evidence.
It does not need to rederive every leaf result itself. Auditors return decisions
and witnesses, not replacement prose.

Delegate audit decisions to lightweight agents when supported. Follow the user's
model/cost constraints; where tool policy permits, choose an available low-cost
model with low reasoning effort and record the actual selection. Do not silently
substitute a more expensive model. If the required option is unavailable, expose
that limitation before dependent work. Never promise a token cap that the tool
cannot enforce.

A unit contains **one proposition and one decision question**. A short paragraph
can contain many units; a long supplied derivation can support a simple unit.
Before dispatch, require explicit premises and an expected form of evidence,
such as one substitution, a cited hypothesis, a counterexample, or the exact
missing relation. If answering requires discovering several intermediate facts,
split first. Workers may return `split` with child questions and their dependency
order; they must not replace decomposition with a long essay or guessed pass.

Batch independent small units when they share a compact source window. Start
with a few units and adjust using observed ambiguity and usage, not a universal
batch size. Supply only the relevant source window, licensed premises and
needed source extracts; do not reload the full manuscript and skill catalog for
each leaf. If needed context is missing, return `unknown` with the exact missing
input. Record tool-reported usage when available; otherwise report calls and
packet/output sizes as proxies, explicitly not token totals.

## Audit sequence

1. Freeze the source and reader contract. Enumerate all claims and equations,
   including claims in captions, examples, footnotes and folded material.
2. Independently reconcile the inventory against the raw source before using
   its size as a coverage denominator. Compound assertions require separate
   entries even when they share a source span.
3. For each claim, dispatch separate questions about its warrant, reader
   availability, and role at this position. Audit each required claim-to-claim
   inference separately. Neither algebraic correctness nor a stated future use
   establishes a pedagogical connection.
4. Resolve splits into bounded leaf questions. A separate join decision checks
   that their answers actually entail the original claim under the same
   assumptions, indices, normalization, and limit. Child passes alone cannot
   close the parent.
5. Reconcile the witnesses across dimensions using the protocol’s integration
   check, then adjudicate without voting. Ground findings in source evidence;
   reject purported gaps that merely demand re-teaching licensed knowledge.
   Inspect cross-packet dependencies, notation changes, approximation regimes,
   and reading-order transitions as bounded decisions of their own.
6. Run the ledger checker and a semantic coverage review. Report what was
   covered, what failed, what remains unknown, and the exact revision. Corrections
   invalidate affected claims and downstream checks; retain unaffected evidence
   only after checking that its premises still match.

A hard leaf may remain unknown because evidence is unavailable, the computation
is irreducible under the available budget, or the reader contract is unsettled.
Decomposition must reduce distinct unknowns, not endlessly rename the same
question. Expose the unresolved leaf and required next input or capability;
never upgrade models or narrow coverage silently to obtain all passes.

## Keep auditing separate from writing

Before any authoring dispatch, establish the execution boundary described in the
protocol. The author receives original content, sources, audience and learning
goals, and a short subject-level explanation problem. It receives no ledger,
claim IDs, checklists, verdict history, or audit-shaped rewrite plan. The
coordinator that has read the ledger must not become the supposedly isolated
writer. A new agent without inherited conversation prevents context inheritance;
it does not prevent access through a shared filesystem or tools.

If enforceable access separation is unavailable, complete the authorized audit
and prepare the clean author packet. Report that strict writer isolation remains
unavailable; do not start a supposedly isolated rewrite. A weaker arrangement is
an explicit change of constraint for the user to decide. When repair is
requested and the boundary exists, the writer reconstructs a coherent passage
from its teaching objective; the auditor then checks the revised artifact.

## Deliverables

Keep the source snapshot, reader contract, inventory/ledger, bounded agent
packets, and adjudication evidence in the project audit directory. The reusable
skill contains no manuscript-specific verdicts or paths.

Return a concise report distinguishing:

- coverage and accounting completion;
- supported passes, observed gaps, and unresolved decisions;
- original claims versus generated subquestions (splitting must not inflate
  apparent coverage);
- source/provenance and isolation limits;
- actual available usage measurements.

The checker regression tests can be run with
`python3 -m unittest discover -s <package>/skills/claim-audit/tests -v`.

The machine checker validates bookkeeping, not the truth of evidence or the
completeness of a semantic inventory. State this boundary when reporting results.
