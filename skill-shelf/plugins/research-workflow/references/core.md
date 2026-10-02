# Common Execution Contract

## Roles

| Owner | Decisions and artifacts |
|---|---|
| Research lead in `research-workflow:auto-research` | Scientific direction, research/focus.md, ordinary research and reasoning, selective worker dispatch, Research Draft, and the session closing packet |
| research-planner | A bounded advisory memo on direction, only when explicitly requested. Does not directly update focus or directives |
| worker | The assigned, narrowly scoped research, calculation, reading, or implementation |
| critic | Independent verification of claims, derivations, source fidelity, and reproducibility |
| curator | Research tree placement, state, integration, provenance, and archiving |
| guide-writer | A human-readable guide.md based on durable research records |
| project owner | Decisions about research direction and outputs outside this package, such as paper writing |

Do not silently assume another role's decision authority. When authority is missing, identify the blocker and its owner.

## Execution rules

- Write prose in the language requested by the user; default to English when none is specified. Preserve technical terms, proper names, paths, schema keys, and LaTeX as appropriate.
- Use Markdown LaTeX, $...$ or $$...$$, for mathematics.
- Do not request user input during an active `research-workflow:auto-research` session. Handle ambiguity with reasonable assumptions and explicit scope; record the reason for stopping if execution is structurally impossible.
- Do not write outside the project or perform global installations.
- Receive inputs as paths and read only the necessary sections. Narrow down _materials using indexes or descriptions before opening the relevant content.
- Do not cite .logs or _reviews as evidence in durable research prose. Integrate their content and record provenance in checks or source records.

## Worker transaction

Workers whose output will be reviewed write to:

- Node task: research/{node}/_reviews/{slug}/worker.md
- Source task: literature/_reviews/{id}/worker.md
- Raw process trace: .logs/{timestamp}_{agent}_{slug}.md
- Optional workflow feedback: feedback/{timestamp}_{agent}_{slug}.md

For raw log and feedback paths, resolve the package-local script at `../scripts/session.py` relative to this reference, then run `python3 <resolved-path> --project-root <project-root> path --kind log|feedback --label <agent-or-slug>`. Do not assume a project-local helper script or construct timestamps manually.

Start worker.md with this review contract:

    transaction_kind: worker-submission
    intended_destination: state | findings | _materials/analyses | dead_ends | checks | source_record | none
    review_focus: {claim, derivation, calculation, extraction, or construction for the critic to inspect}
    scope: {claimed scope}
    evidence: [proof | mechanical | numerical | literature]
    raw_log: .logs/{...}.md
    feedback: feedback/{...}.md

Include the feedback key only when a feedback note was actually written. Include the task, candidate result, method, evidence, scope, limitations, reproduction steps, and Naming decisions in the body as needed.

Return DONE: {worker.md path}, or FAILED: {reason} on failure.

worker.md is a provisional candidate; a critic verdict alone does not make it a durable fact. The research lead decides whether to adopt it in the Research Draft and focus. The curator checks the review and admission source before integrating it into the durable tree.

Before and after long tool calls, send the dispatcher one sentence stating what will be checked or what was learned, to avoid silent timeouts. Keep progress narration out of the artifact itself.

## Trust boundaries

- ACCEPT means that no blocking defect was found within the reviewed scope. It is not a final guarantee of novelty or completeness.
- Evidence, review, and admission are separate dimensions. Forceful prose or a long derivation does not substitute for authority.
- Distinguish material originating from the user, planner, a source, or project observations.
