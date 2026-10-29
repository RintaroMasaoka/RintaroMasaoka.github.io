# Research Workflow 0.2.0

Autonomous theoretical-physics research with a small orchestration loop and
on-demand task procedures. Start with `research-workflow:auto-research` in a
writable project. The lead selects a useful bounded question, executes directly
or assigns a task, interprets the evidence, and continues, redirects or finishes
without routine approval gates. Working formulations do not redefine the user's
answer conditions. Premise applicability and scientific contribution guide effort;
consequential unverified mathematical steps still receive appropriate checks.

The entrypoint does not preload all role instructions. Select `researcher` for a
bounded investigation, `critic` for a consequential independent check,
`direction-challenger` or `research-planner` for needed direction advice, and
`guide-writer` only for an explicitly requested human guide. `curator` is a
compatibility entrypoint, not an active admission stage. Every role uses the
`research-workflow:` namespace. A role need not be a separate agent.

Internal derivations, source evidence, checks and handoffs can be saved for later
agents. Human reports are complete in chat, including reasoning, limitations,
material concerns and next decisions; links are optional evidence. Separate
human-facing documents require an explicit request. Full paper authoring and
production are separate tasks outside this research runtime.

The package-local `scripts/research_memory.py` uses Python's standard library for
missing-focus initialization, evidence/attempt records and freshness checks.
Resolve its path from this package, not the research project's working directory.
Run `python3 scripts/research_memory.py --help` and
`python3 -m unittest discover -s tests` from the package directory. Legacy session
helpers remain available. Metadata and review verdicts do not certify science.
No automatic Git commit, publication, global installation or fixed role pipeline.

MIT License; see the Skill Shelf root LICENSE.
