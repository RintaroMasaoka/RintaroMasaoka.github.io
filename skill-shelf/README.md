# Skill Shelf

Reusable AI skill packages by Rintaro Masaoka.

This directory contains packages deliberately promoted from a separate private
working stock. It is the source for the downloadable collection, not a mirror
of the author's everyday development environment.

## Packages

| Package | Version |
| --- | --- |
| Academic Writing | 0.2.4 |
| Physics Paper | 0.1.6 |
| Nogap | 0.1.1 |
| Manim | 0.1.1 |
| Research Workflow | 0.1.3 |
| Study Notes | 0.1.2 |
| AI Bias | 0.4.4 |
| Speech Act | 0.2.1 |

Update these files only through a reviewed promotion with a package version
change. The private working stock remains the authority for ongoing development.

## Download and use

Choose a package at [Skill Shelf](https://rintaromasaoka.github.io/tools/skill-shelf/).
Each package download includes every required shared skill package and a
project-scoped installer. You can also download the
[whole collection](https://rintaromasaoka.github.io/tools/skill-shelf/downloads/skill-shelf.zip).
Extract the complete archive and follow [USAGE.md](USAGE.md).

The installer validates the pinned files and dependencies, installs the included
packages together, and verifies skill discovery in the requested project. No
private stock files or additional unbundled skill packages are prerequisites.
Task-specific runtime prerequisites remain documented in the owning skills.

## Maintain the release

The site lives in `public/tools/skill-shelf/` of this repository. The reviewed
source packages live under `skill-shelf/plugins/`; private working-stock changes
are promoted deliberately with package version updates.

Every published owner must declare `skill-dependencies.json`. Required skill
providers must exist in the release, satisfy the declared version and exports,
and be included in each consuming package's downloadable closure. Missing
providers, unregistered owners, and required cycles reject the build. Optional
steps and out-of-scope referrals must state an actual fallback.

After a reviewed release change, run from the repository root:

```sh
python3 -m unittest discover -s skill-shelf/tests -v
python3 skill-shelf/scripts/check_release_language.py
python3 skill-shelf/scripts/build_download.py
python3 skill-shelf/scripts/build_download.py --check
```

Commit the reviewed source, ZIPs, checksums, and download index together. CI
checks the dependency and packaging tests plus reproducibility before publishing.
Test installation from an extracted bundle in a fresh project and isolated host
configuration; source-tree discovery is not a substitute. The runtime dependency
resolver is a frozen copy of the canonical stock utility; its provenance and
update policy are recorded beside it in `runtime/dependency-source.json`.

## License

Original material in this repository is licensed under the MIT License.
Files or package components carrying a separate license notice remain under
the terms named in that notice. In particular, the `academic-writing` package
includes material licensed under CC BY 4.0; its attribution and license notice
must remain with the distributed package.
