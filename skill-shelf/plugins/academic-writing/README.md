# Academic Writing

Nine scholarly authoring capabilities share source authority, reader context, and project conventions. Select the capability that produces the requested result; package installation does not require running all skills.

| Skill | Output |
|---|---|
| `academic-writing:introduction` | A source-grounded opening and warranted scope |
| `academic-writing:abstract` | A faithful synopsis |
| `academic-writing:exposition` | A usable learning sequence |
| `academic-writing:prose-review` | Selected prose findings or revisions |
| `academic-writing:sentence-revision` | An inspectable sentence-level revision and decision dossier |
| `academic-writing:figures` | Inspected figures and editable sources |
| `academic-writing:terminology` | Project term registry and enforcement results |
| `academic-writing:notation` | Conventions in the project's existing ledger |
| `academic-writing:claim-audit` | Revision-specific coverage and evidence |

## Resources and dependencies

Shared authoring and prose perspectives live in `references/`. Sentence revision owns its dossier schema and editorial method basis. Terminology owns its Python/SQLite utility, browser GUI, registry contract, and regression tests. Claim audit owns its ledger and paragraph utilities, protocols, and regression tests. No live manuscript data belongs here.

Python 3 with the standard library is required for these utilities; see their `--help` and skill instructions. The term review GUI runs on localhost. Figure creation requires a TeX-capable renderer selected for the project; the package does not bundle TeX, plotting software, or an HTML site runtime. Claim audit's strict isolated repair requires execution support for the specified author/auditor boundary; do not claim that namespace separation provides it.

Study orchestration, HTML publishing, document-spec management, multi-step gap repair, and Manim production remain external workflows. This package does not require their installation for ordinary introduction, abstract, or prose work. Project records and publication authorization remain with their owner.

## Checks

Run `python3 -m unittest discover -s skills/terminology/tests -v` and `python3 -m unittest discover -s skills/claim-audit/tests -v` from the package root. Installation exposes package-qualified skills; do not project individual skills into flat active roots.

## Attribution

The sentence-clarity perspective adapts editorial concerns from Lorena A. Barba's `manuscript-writing-review` (2026), licensed under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/); see `LICENSE.manuscript-writing-review`. This adaptation replaces fixed compression and review defaults with scoped, meaning-preserving inspection and integrates the perspective with the package's reader and evidence contract. No endorsement is implied.
