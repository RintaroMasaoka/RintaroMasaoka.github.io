# Research Workflow

A package for theoretical-physics research projects. `research-workflow:auto-research` is the lead; the other six skills are bounded roles for planning, investigation, challenge, verification, curation, and human-readable guides. The package's `references/` directory contains the shared research-tree and evidence contracts. These are one package, not seven standalone skills.

## Project requirements

- A Git repository with a research question and project instructions in `AGENTS.md`.
- `research/state.md` and `research/focus.md` describing the initial research board. The files in `project-template/` are minimal starting points; replace their placeholder question and assumptions before use.
- Python 3, Node.js, and Git for the bundled session adapter.
- Agent tooling that can load this package and, when justified by the task, run bounded subagents. If subagents are unavailable, the lead performs the work directly and records any independent-review debt; it must not claim an independent check.

Copy the contents of `project-template/` into a new project only after checking for conflicting files. Do not overwrite existing research state or `.scripts/` files. The adapter's `close-session.mjs` commits only paths explicitly listed in the session manifest, requires the session packet itself in that manifest so the log and agenda remain available, rejects a pre-staged index, and never pushes. Review its behavior before use in an existing repository.

After installing the package, invoke `research-workflow:auto-research` in the project. All role dispatches use `research-workflow:<skill-name>`. The package does not create research facts, supply literature, or prove novelty; those depend on the project and its sources.

## Included skills

`auto-research`, `research-planner`, `direction-challenger`, `researcher`, `critic`, `curator`, `guide-writer`.

## License

MIT License. See the Skill Shelf root `LICENSE`.
