---
name: auto-research
description: "Autonomously coordinate theoretical-physics research: select worthwhile bounded questions, interpret results against the user's goal, and continue, redirect or stop. Load research, review, bookkeeping and writing procedures only when their task is selected. Not a mandatory multi-agent pipeline."
---

# Autonomous research orchestration

Own the user's question, research direction and interpretation of evidence.
Keep the working formulation distinct from the conditions for answering that
question. A correct partial result remains partial until its connection to the
requested conclusion is supported. Prioritize premise applicability and scientific
contribution; check consequential new mathematical reasoning when it matters.

## Autonomous loop

1. Recover the goal and current obstacle from the human instructions and existing
   research memory (`research/question.md` if present, then `research/focus.md`).
   Reuse established evidence; reopen only decisions affected by new facts or a
   changed formulation. Recover source definitions when their authority or the
   transfer to the question is uncertain, not from the current proof's convenience.
2. Choose one worthwhile next question, a method, the evidence it could produce,
   and a resource/reconsideration bound. A useful exploratory question need not
   guarantee success. Execute directly when appropriate; select a worker only
   for useful specialization, independence or parallel work allowed by the host.
3. Interpret the result: what changed, do the premises apply, does it advance the
   actual question, and which consequential uncertainty remains? Select only
   the verification needed for that uncertainty. Do not repeat an unchanged check
   or equate reviewer agreement with coverage of an untested premise.
4. Continue with the next bounded question when justified. Reconsider direction
   when the route stalls, its premises fail, or another route offers more insight.
   Preserve partial results. Finish when the requested answer is supported or no
   worthwhile next action can be grounded within the authorized resources; explain
   unresolved conditions. Report meaningful changes without waiting for a reply
   unless a necessary input, permission or explicit stop prevents further work.

## Task boundary and on-demand procedures

The lead selects tasks and integrates their results. A research worker receives
one question, its relation to the goal, exact assumptions, evidence pointers,
allowed edits and a stop/resource bound; it returns findings and limits rather
than running this orchestration loop. A skill invocation does not require another
agent. Workers load their own selected procedures; the lead need not preload them.

Read [operating details](references/workflow.md) only when selecting a role,
recording evidence, or resolving an execution detail. It is a lookup reference,
not another sequence to perform each cycle. Read the verification procedure only
for an actual consequential claim or formulation check. Writing is a separate,
explicitly requested task, not a stage of ordinary research or chat reporting.

Honor the user's budget. Otherwise allow at most five substantive attempts per
bounded session, including reviews/retries; this is a ceiling, not a target.
Before costly work, identify the uncertainty and useful stopping point. Use
scripts for deterministic work and select model effort for the actual task.

## Persistence and human communication

Keep current goal, live obstacle and next action in existing focus memory;
keep derivations/evidence once at their owning paths. Update changed information
without a parallel reporting bureaucracy. Documents may preserve calculations,
reviews and handoffs for later agents. Communicate everything needed for the
human's understanding and decisions in chat: result, reasoning, evidence scope,
material assumptions/concerns and their consequences, unresolved issues and next
steps. Surface conclusion-changing concerns when known. Links supplement that
account; they never carry missing explanations. Separate user-facing documents
require explicit request. No automatic publication, commit or global installation.
