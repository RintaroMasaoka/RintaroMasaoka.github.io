# Research Workflow

A package for theoretical-physics research. `research-workflow:auto-research` is the lead; the other six skills are bounded roles for planning, investigation, challenge, verification, curation, and human-readable guides. The package's `references/` directory contains the shared research-tree and evidence contracts. These are one package, not seven standalone skills.

## Use

Install the package, then ask `research-workflow:auto-research` to investigate a theoretical-physics question. No template, Git repository, pre-existing research files, or manual setup is required. In a writable project, the lead uses the package-local `scripts/session.py` to initialize only missing `research/state.md` and `research/focus.md` files. It never overwrites existing research state. Session notes are kept under `.logs/`; the package does not commit or push.

Python 3 is needed only for this automatic on-disk initialization. Without a suitable writable project, the lead can still investigate in the conversation but must report that no durable project memory was saved. If subagents are unavailable, the lead performs work directly and records independent-review debt rather than claiming an independent check.

All role dispatches use `research-workflow:<skill-name>`. The package does not create research facts, supply literature, or prove novelty; those depend on the question and its sources.

## Included skills

`auto-research`, `research-planner`, `direction-challenger`, `researcher`, `critic`, `curator`, `guide-writer`.

## License

MIT License. See the Skill Shelf root `LICENSE`.
