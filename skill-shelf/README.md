# Skill Shelf

Reusable AI skill packages by Rintaro Masaoka.

This directory contains packages deliberately promoted from a separate private
working stock. It is the source for the downloadable collection, not a mirror
of the author's everyday development environment.

## Packages

| Package | Version |
| --- | --- |
| Academic Writing | 0.2.3 |
| Physics Paper | 0.1.5 |
| Nogap | 0.1.0 |
| Manim | 0.1.0+codex.20260820030822 |
| Research Workflow | 0.1.2 |
| Study Notes | 0.1.1 |
| AI Bias | 0.4.3 |
| Speech Act | 0.2.0 |

Update these files only through a reviewed promotion with a package version
change. The private working stock remains the authority for ongoing development.

## Download

Download and extract [`skill-shelf.zip`](https://rintaromasaoka.github.io/tools/skill-shelf/downloads/skill-shelf.zip).
It contains all packages and their source files; use or adapt only the parts
you need. Browse the collection at
[Skill Shelf](https://rintaromasaoka.github.io/tools/skill-shelf/).

The site lives in `public/tools/skill-shelf/` of this repository. After updating
the reviewed packages, run `python3 skill-shelf/scripts/build_download.py` from
the repository root and commit the source, ZIP, and checksum together. The
GitHub Pages workflow verifies that the ZIP matches this directory.
Run `python3 skill-shelf/scripts/check_release_language.py` to check that public
instructions, references, and templates are in English. Japanese language
examples and Unicode test data remain where their function requires them.

Academic Writing 0.2.3, Research Workflow 0.1.2, and Study Notes 0.1.1
translate the existing public snapshots without importing later private-stock
changes. Research Workflow now follows the user's requested response language,
defaulting to English, and the Study Notes example explicitly uses English.
The study-note format retains its legacy language default for existing configs.

Speech Act 0.2.0 is a new design based on sixteen references about scholarly
communication and AI mediation. The public and working releases use the same
English package snapshot.

## License

Original material in this repository is licensed under the MIT License.
Files or package components carrying a separate license notice remain under
the terms named in that notice. In particular, the `academic-writing` package
includes material licensed under CC BY 4.0; its attribution and license notice
must remain with the distributed package.
