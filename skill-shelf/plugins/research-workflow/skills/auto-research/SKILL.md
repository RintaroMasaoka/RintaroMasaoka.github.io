---
name: auto-research
description: "Advance theoretical physics research autonomously as an adaptive research lead. The main agent owns direction, ordinary work, and integration, using subagents only for specialization, effective parallelism, independent verification, or semantic changes to the research tree. The argument is the cycle limit, default 5."
---

# /auto-research

The main agent acts as research lead, owning scientific direction, ordinary research and reasoning, provisional integration, and session handoff. Use subagents for bounded tasks with clear added value, rather than as mandatory stages.

Always dispatch roles in this package using `research-workflow:<skill-name>`. Use the same qualified identity in the Agent field of `research/focus.md`. Do not ask users to copy templates or perform setup before first use. In a writable research folder, use the package's `../../scripts/session.py` to initialize only missing research records. Do not overwrite existing files. If no suitable folder exists, work in the conversation and report that no durable record is being kept.

If durable records cannot be stored, do not dispatch supporting roles that write to the project tree. Limit execution to direct work by the main agent and explicit reporting of unverified matters.

## Read

At startup, read:

- ../../references/core.md
- references/workflow.md
- references/schemas.md

Dispatched roles read their own skill instructions. The main agent reads only nodes needed for the current decision, rather than scanning the entire tree or raw logs for procedural reassurance.

## Objective

Within the specified cycle budget, choose the highest-information question from the current research board and advance it primarily through the main agent's own work. Honestly record partial results, negative evidence, and verification debt in memory. Do not turn an independent review's ACCEPT into final truth or proof of novelty.

## Arguments

Use a positive integer as MAX_CYCLES. Default to 5 when omitted or invalid. When resuming an interrupted session, reconstruct remaining work from the current focus and latest session log.

## Adaptive loop

1. Session Start. Inspect the question and existing research records; automatically initialize missing records in a writable research folder.
2. Read the current focus and necessary node context. The main agent selects a live question and a method that distinguishes the alternatives.
3. Use `research-workflow:direction-challenger` only for stagnation, contradiction, major closure, or pivot risk.
4. The main agent directly performs ordinary searches, reading, derivations, local calculations, and draft synthesis.
5. Delegate only bounded tasks that pass the Delegation Gate. Parallelize multiple dispatches only when they are independent and every output is necessary.
6. Send only consequential claims on which the Research Draft or durable memory depends to `research-workflow:critic`. Allow at most one cheap mechanical repair.
7. Use `research-workflow:curator` only for semantic changes to the tree, lifecycle changes, retraction, durable promotion, or complex provenance closure.
8. Use `research-workflow:guide-writer` only when a human reading route to changed evidence is missing.
9. The main agent integrates evidence, scope, verification debt, and the next question, updating focus and session handoff.
10. Repeat until MAX_CYCLES, a user stop, or an unrecoverable failure; then perform the Session End transaction and give a concise final report.

The focus field `session_complete` records research state. It is not a reason to mechanically spend remaining cycles on subagent calls. If no further work has information value, the main agent records that judgment and proceeds to Session End.

## Delegation Gate

Before dispatch, identify in one sentence each: the agent's output, the downstream decision it can change, and why the main agent cannot obtain the same result through direct work with comparable confidence or cost. Dispatch only if at least one condition holds:

- A role-specific source audit, simulation, implementation, or explicit inspection contract is needed.
- Two or more bounded tasks are independent, and parallel execution actually reduces session latency.
- A claim has high consequences and needs independent verification with context separated from the main agent.
- A semantic transaction across nodes or an operation on durable authority is needed.

Directly perform context gathering, simple searches, small derivations, local edits, summaries, and formatting that the main agent can complete with the same tools and context. Do not call another role to fill a slot in a workflow. Keep batches minimal; default to one bounded dispatch. The main agent retains direction and adoption decisions after receiving agent results.

## Execution discipline

- Do not request user input during an active session.
- Do not end a turn with a progress message between cycles. Proceed to the next dispatch.
- By default, send only one user-facing message: the final Session End report.
- Use the runtime's agent wait mechanism, not sleep or filesystem polling, to wait for agents.
- Do not count subagent calls or role coverage as progress. Avoid calls that cannot change a research decision.
- This skill does not automatically commit or push. Preserve existing user edits separately and save only the research session records.
- Track sources when using literature content. Paper writing is outside this package's responsibility.
