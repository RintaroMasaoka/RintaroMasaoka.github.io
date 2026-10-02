# /auto-research Workflow

When dispatching a role below, specify its `research-workflow:<skill-name>` identity, not a bare role label.

## Session Start

1. Check the user's research question and whether the current working folder is a suitable place to store that research. Read project instructions if present; `AGENTS.md`, Git, and existing `.scripts/` are not required.
2. In a writable research folder, resolve `../../scripts/session.py` relative to this skill's `SKILL.md`, then run `python3 <resolved-path> --project-root <project-root> init --question <question>`. This creates only missing `research/state.md` and `research/focus.md`; it does not modify existing research content. If no suitable location exists, skip initialization and work in the conversation.
3. Read the existing focus, the latest `.logs/*_auto-research-session.md` if present, cursor ancestors, and necessary state/findings/map/plan/guide files. Do not read the entire tree or raw logs indiscriminately. Use these records and the current request to resume an interrupted session; do not invent missing history.

## Direction

From the current local board, recent evidence, review flags, and literature status, the main agent selects the question that best distinguishes the next research decision and updates research/focus.md.

Dispatch direction-challenger with a narrow scope only when stagnation, contradiction, major closure, pivot risk, or premise lock-in affects the direction decision. Do not call it as a ritual in ordinary cycles. When needed, the main agent reads the challenge, decides what to adopt, and reflects that decision in focus.

## Boundary transaction

- When returning from a child to its parent, the curator completes the child's presentation before worker execution only if parent-level work depends on that durable presentation.
- Only when Pre-Worker Tree Directives identify a semantic repair to the route a worker will read, the curator repairs that route and returns Dispatch readiness: valid or invalidated.
- If invalidated, do not launch the planned worker. The main agent carries the reason into the next cycle's focus.

## Direct work, workers, and review

Start each cycle with direct work by the main agent. Perform research, derivations, source triage, local calculations, and synthesis directly when local files and available tools reasonably suffice.

Only after the Delegation Gate passes, extract the agent, task, target, deliverable, success criteria, inputs, run/slug, delegation reason, downstream decision, and direct-work insufficiency from focus's Worker Dispatches. Run multiple workers in parallel only when their tasks are independent and every deliverable is necessary and nonduplicative.

The main agent treats worker returns as provisional evidence and judges relevance, scope, and adoption. Do not automatically attach a critic. Claim consequence in the schema is a decision record, not a dispatch command. For consequential claims on which the Research Draft or durable memory depends, send a packet centered on the claim only when independent review can materially reduce uncertainty.

- Mathematical/mechanical claim: blind
- Source fidelity claim: source-audit
- Claim dependent on narrative/provenance: contextual

Perform one repair only for REVISE-BLOCKING or OPAQUE when the critic identifies a cheap, bounded repair.

## Curator

The main agent integrates provisional evidence into the Research Draft, focus, and session handoff. It may update node-local working evidence in `state.md` and adopted local strategy in `plan.md` without changing graph meaning. Mark unreviewed material explicitly; do not directly edit status/kind, maps, findings, checks, or cross-node routes. Dispatch the curator only when Tree Directives require node placement, lifecycle changes, cross-node integration, retraction, archiving, findings materialisation, or checks/provenance closure.

When a request to review substantive durable content is returned, dispatch the critic and return the review to the curator. If unresolved after two rounds, record verification debt.

## Session End

1. Process directives to archive superseded scripts.
2. Dispatch the curator only for open semantic transactions, unintegrated reviewed evidence, durable promotion/retraction, or cross-node routing debt. The main agent closes sessions containing only local provisional work.
3. Resolve only pending Durable Reviews on which the Research Draft or durable documents depend.
4. Send only nodes lacking a human reading route to changed evidence to guide-writer.
5. In a writable research folder, update focus and save a packet containing next focus, handoff, Research Draft, session log, backlog, and agenda to the path returned by the package-local `session.py path --kind log --label auto-research-session`. If no suitable location exists, include the same content in the final report.
6. Briefly report the cycle count, principal results, node changes, deliverables, unresolved verification debt, and next question to the user. Do not commit or push.

If saving the packet fails, preserve the research results and explicitly include the handoff and unsaved status in the final report.
