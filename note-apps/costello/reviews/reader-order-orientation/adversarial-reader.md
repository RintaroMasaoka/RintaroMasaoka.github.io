---
name: adversarial-reader
description: "Run an independent adversarial subagent audit of scholarly and technical writing against its governing reader, writing, terminology, and notation guidelines. Use for an explicit strict/adversarial reader request, before accepting substantive newly drafted or revised reader-facing passages, and after changes to words, notation, claim strength, explanations, order, headings or captions that affect understanding. Cover every expression in the requested range; use prefix-only execution for reader-order judgments. Exclude spelling/formatting-only edits, personal style policing, AI-authorship detection, and certification of scientific truth without evidence. Review-only by default; repairs follow existing authorization."
---

# Adversarial Reader

Find the strongest evidence-based reason the proposed passage should fail its
actual contract. Independent scrutiny changes acceptance decisions; adding an
"adversarial" label to the author's self-check does not.

## Build the neutral packet

This workflow is run by the coordinator. The delegated reader performs the
assigned checks and returns evidence; it does not recursively dispatch the
coordinator's reader-order/adversarial workflows.

The coordinator identifies revision, exact coverage, requested review or edit
mode, audience evidence, visible route, and applicable active guidelines. Use
the user's instructions and project-authoritative notation, terminology and
writing rules; do not invent requirements from the reviewer's preferences.
Give the reviewer the actual guideline text needed for its judgments. For
unresolved authority conflicts, record the conflict rather than silently
selecting whichever rule makes the candidate pass.

Start a fresh non-authoring subagent with no inherited conversation or prior
review exchange. Exclude the author's intended answer, defense, improvement
story, expected approval, private outline, and desired reader-state trajectory.
For time-order judgments, supply only baseline and already-read text and follow
`$reader-guard:reader-order`, including its reveal/record discipline.
Do not preload the full artifact for another audit and later call this reader
prefix-only. The prefix reader may also check wording and symbol choice in
each revealed unit; source-dependent scientific checks happen separately
after its verdict is fixed. If later material must be read for a different
check, use a different context or finish the prefix pass first.

## Audit the full assigned range

For every unit, challenge the following choices. Maintain coverage even when
a unit has no finding; do not scan only a convenient list of flagged words.

| Choice | Evidence required to keep it |
|---|---|
| Word, technical term or compound | Determinate meaning here; established status or enough local explanation; the intended predicate and relation survive expansion |
| Symbol, index, accent or renamed quantity | Identifiable object and role at use; compliance with adopted conventions; a useful distinction or relationship rather than arbitrary naming |
| Sentence form, connective or contrast | Actual supported proposition, scope and comparison; the relation and expectation exist at this prefix |
| Operation, causal role or physical interpretation | Available inputs and conditions plus a warranted bridge to the output; naming the output is insufficient |
| Heading, caption, example or detail | A function for this reading route, with needed context; optional material does not secretly carry a later mainline premise |
| Claim strength or implied message | The whole passage conveys only what its evidence and role support, including what readers infer from emphasis and grouping |

Require each finding to specify `exact span | violated rule or unavailable
dependency | observable consequence | test/witness | repair direction`.
For the combined prefix pass, retain per-unit `expression_checks` in the
reader-order record: literal span, actual governing rule, verdict and reason.
Group choices only when one reason covers them; include passing coverage as
well as findings. A dependency PASS is insufficient when a required expression
check fails or remains unverified.
For a suspicious choice that survives testing, record the license rather than
inventing an objection. A compatible alternative proves neither necessity nor
defect. An unresolved requirement that affects acceptance remains unverified;
do not silently pass it. Do not make author intent or fluent prose a defense.

For notation benefit/convention decisions, apply the adopted rules. Read
existing convention records as authority rather than treating this audit as
permission to redesign fixed notation. Record symbol-choice compliance and
availability separately. Full notation design and changes to governed
conventions are outside this reader audit. Return those findings to the caller
for a separately authorized handoff to `$spec-artifacts:notation-design`;
that provider is not a step inside the prefix reader's execution. The manuscript
coordinator retains its own notation-choice gate. Do not certify full choice
review from this audit or require that workflow for an ordinary prose passage.

## Adjudicate and finish

The coordinator judges findings by evidence, not count, reviewer confidence,
or majority. Accept a real defect, reject an unsupported preference with a
reason, and retain a genuine unknown. Repair at the causal level under existing
authorization; review-only work returns findings. Never loosen the baseline or
invent a definition just to secure approval. Repairing a prefix dependency
requires fresh reader-order validation of the changed route; do not send the
revised candidate to the same reviewer for another independent verdict.

Reuse an independent completed verdict only for unchanged content and unchanged
assumptions within its actual coverage. During planning, draft acceptance,
revision and final validation, reopen this gate when consequential choices
change. A final spot check cannot stand in for missing range coverage. Scope
review to the current task; a local revision does not require auditing the
whole paper unless its dependencies reach there.

Record verdict `PASS / NEEDS_CHANGES / UNVERIFIED`, revision, coverage,
guideline authority, isolation mechanism and remaining checks outside the
artifact. A pass needs no material supported finding and no open required
check. If independent subagents are unavailable or explicitly disallowed,
perform available local work and mark independence unverified. Report the
exact remaining gap. Deliver concise findings or clean authorized revisions;
do not add a compliance performance to the reader-facing text.
