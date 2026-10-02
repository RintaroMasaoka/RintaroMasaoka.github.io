---
name: notation
description: "Detect notation choices that determine how later work is interpreted during research, derivations, literature comparison, simulation, coding, research-note editing, or agent handoff. Collect and integrate them into an existing durable handoff or canonical convention ledger rather than leaving them in chat. Use when introducing, using, or changing symbol reservations, sign, orientation, order, normalization, Fourier or index conventions, term-to-symbol mappings, source-to-project notation mappings, when conventions conflict, or during a closeout sweep of formula-heavy work. Do not use for local dummy variables, source-native notation confined to a source record, or ordinary conceptual definitions alone."
---

Read [the shared authoring contract](../../references/authoring-contract.md) before applying this workflow.

# Capture Notation Conventions

Continue the main task while collecting notation decisions that need to persist. Record rules that change how future formulas, claims, or implementations are read, rather than preserving conversational remarks themselves.

## Check the inputs

- The current task, changed artifact, or agent handoff.
- The project's `AGENTS.md` and instructions governing recording authority and destinations.
- Any applicable existing convention ledger.
- For a source-to-project mapping, the source-native record and project artifact.

Follow the project's designated destination and record owner. Do not create a competing ledger for this skill.

## Collection criterion

Ask:

> Could another researcher or agent who does not know this choice realistically read the same formula, claim, or code with a different meaning?

Collect choices that:

- Reserve a symbol for a particular object or resolve overloading.
- Fix a sign, orientation, operator order, tensor-leg order, index order, normalization, phase, or Fourier transform convention.
- Establish a lasting correspondence between a technical term and a symbol.
- Map source notation to project notation.
- Use a local convention that differs from the existing ledger, or expose a conflict between two live conventions.

Do not collect:

- Dummy variables or indices confined to one derivation.
- Unmodified use of standard, unambiguous notation.
- Concept definitions, theorems, proofs, numerical results, or workflow rules.
- Faithful recording of source-native notation in a source record.
- Tentative choices still being tried, on which no subsequent artifact depends.
- Changes limited to spelling, formatting, headings, or prose consistency.

## Sidecar workflow

1. **Read the routing first.** Identify the applicable ledger, scope hierarchy, record owner, and existing durable handoff owned by the current agent. Do not invent a storage destination.
2. **Retain candidates during work.** Briefly record each candidate's exact rule, scope, grounds, and affected artifacts. Do not turn the main task into a convention audit.
3. **Distinguish standing.** Classify each candidate as:
   - `adoptable`: explicitly fixed by the user, project authority, or an already adopted artifact, and ready for mechanical integration by the record owner.
   - `proposed`: introduced by the current agent, dependent on an unverified derivation, or not yet assigned a settled scope.
   - `conflict`: two or more live rules are incompatible in the same scope.
4. **Perform one closeout sweep.** Review changed formulas, symbols, code interfaces, and source mappings once. Produce no output if there are no candidates.
5. **Route to a durable record.**
   - With authority to edit the canonical ledger, merge `adoptable` candidates after comparing existing entries.
   - Without ledger authority, place a candidate block in an existing durable submission or handoff owned by the current agent and pass it to the record owner.
   - If the task authorizes neither file writes nor a durable handoff, create no file. State the candidate and intended destination in the final response.
6. **Check consequences.** Search symbols and notation within the authorized scope. Fix clear inconsistencies in the same transaction or record the unresolved affected artifacts.

## Roles in a research-assistant package

- Execution or reader roles expose candidates in their ordinary durable submissions; they do not finalize the canonical ledger directly.
- Critics or reviewers check mathematical consistency, source fidelity, scope, and conflicts with existing conventions. ACCEPT for an artifact does not itself grant authority to adopt a convention.
- Curators or recorders integrate adoptable candidates into the narrowest applicable ledger and resolve duplication, scope promotion, compatibility mappings, and conflict routing.
- Planners or human owners decide conflicts only when the convention choice changes scientific content or research direction.
- Writers or finalizers read the ledger and apply it to paper-local notation. They do not silently invent a missing mapping.

## Record shape

Prefer the canonical ledger's existing format. If no format is prescribed, make at least these four elements recoverable:

```markdown
## {Convention name}
Scope: {where the convention applies}
Convention: {exact mapping, order, sign, or normalization rule}
Reason: {reason for the choice, source, or basis for adoption}
Consequences: {reserved symbols, affected formulas and artifacts, compatibility conditions}
```

State the current convention. Do not mix in change history, retrospective commentary, conversation quotations, or the agent's decision process.

Candidate blocks from roles without adoption authority also include `Standing: proposed | adoptable | conflict`. For a source mapping, specify the source side, project side, domain of validity, required assumptions, and what the mapping does not guarantee.

## Merge rules

- For an existing entry with the same rule and scope, update its reason or consequences instead of adding a duplicate.
- Start with the smallest scope supported by the evidence; do not assume project-wide scope.
- When a subtree-local rule is used outside that subtree, leave promotion to the lowest common ancestor to the record owner.
- Do not resolve conflicts by majority vote or recency. Keep both scopes narrow, check whether a compatibility mapping is possible, and route the scientific decision to its owner.
- Do not rewrite source records by translating source notation into project conventions.
- Do not fix an unverified calculation result as a convention. Separate the evidence on which a rule depends from that evidence's standing.

## Completion conditions

- Convention collection has not distorted the main task's result.
- Notation choices affecting future interpretation are not left only in chat.
- Adopted rules are distinguished from proposals and conflicts.
- A single scope has not acquired multiple unrelated canonical ledgers.
- Each saved entry makes its scope, rule, reason, and consequences recoverable.
