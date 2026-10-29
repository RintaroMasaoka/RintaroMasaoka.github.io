# On-demand research operations

Use only the row needed for the selected task. This reference does not add a
second research loop or require a role, record or review at every step.

| Need | Route or resource | Boundary |
|---|---|---|
| One bounded derivation, example, computation or source investigation | $research-workflow:researcher | Execute directly or assign a worker; return evidence and limits, not global direction decisions. |
| Consequential uncertainty about premise applicability, scientific value, a proof or source fidelity | $research-workflow:critic; [verification](../../../references/verification.md) | Choose the actual uncertainty and method; one independent reviewer signs one perspective. Established unaffected checks remain usable. |
| Stagnation, premise lock-in, contradiction or consequential direction change where outside advice can affect allocation | $research-workflow:direction-challenger | Advice, not permission or routine approval. The lead can proceed directly when evidence already settles the choice. |
| Broad alternatives need an independent comparison | $research-workflow:research-planner | Bounded advice; no automatic challenger/planner chain. |
| Execution/model selection or delegation details | [core](../../../references/core.md), relevant section only | Script deterministic chores; choose model/effort for task difficulty and honor host authority/resources. |
| Save a substantive attempt or claim check | [schemas](schemas.md); `scripts/research_memory.py` | Script metadata, identities and freshness. Update existing focus/result records; no model-based curation or extra copies. |
| User explicitly requests a human reading guide | $research-workflow:guide-writer | A writing task, not routine research bookkeeping. |

Before delegation, give the selected role only the question, relation to the user
objective, assumptions/evidence, edit scope, required output and stopping bound.
Independent review receives neutral evidence without author defenses or previous
verdicts; source/formulation checks establish the human/source target before the
candidate formulation. The lead retains the scientific and continuation decisions.
Do not load all role instructions to construct a task packet.

For substantive attempts, the attempt record compares prior uncertainty, observed
result and its significance. For a consequential checked claim, record the method,
exact coverage, evidence and limits. See schemas only when using these operations.
Run `research_memory.py status` when changed evidence/freshness affects a decision,
not on every loop. Preserve prior failed or contradictory records. Recording and
review verdicts are evidence, not scientific certification or human communication.

A clarification, explanation or status question is not a new research cycle.
Incorporate steering into authorized work; report meaningful changes in chat and
continue when the next step is justified. Explicit user stop/input/resource limits
still control execution. Ordinary chat reporting and agent handoffs do not invoke
manuscript authoring or reader-acceptance procedures.
