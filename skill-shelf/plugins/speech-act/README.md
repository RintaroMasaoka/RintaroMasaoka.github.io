# speech-act

Version: 0.2.0  
Entrypoint: `speech-act:speech-act-writing`  
Author: Rintaro Masaoka

This package supplies an instructional skill for scholarly drafting, revision, evaluation, and responses to criticism with language models. It asks what a text says, what action it is intended to perform, what a reader might infer, and what evidence supports those judgments.

Select it when claims, implied requests, commitments, reader assumptions, stance, or document relationships matter. Proofreading and factual verification alone do not require this skill.

## Use

Load the bundled [skill](skills/speech-act-writing/SKILL.md) through a compatible skill loader, or provide its instructions directly to a language model with the task materials. Keep the references directory alongside the skill. Host-specific installation procedures are outside the package.

Supply the text or drafting notes, intended audience and purpose, relevant evidence, and any known constraints. Request an operation such as:

- Draft an abstract that reports these findings without extending their scope.
- Revise this paragraph so that it requests clarification without committing us to new work.
- Evaluate the implied claims and reader assumptions in this discussion section.
- Prepare a response to these reviewer comments, distinguishing completed changes from proposed changes.

The artifact can be in any language required by the task. The skill's instructions and teaching examples are English; cross-language effectiveness has not been established by the dossier.

The operations are planning, act mapping, controlled drafting or revision, evaluation, and exchange repair. Use only the operations needed. Outputs identify consequential assumptions and commitments without treating a model's proposed reading as actual recipient understanding.

## Contents and evidence

The two plugin manifests declare the package. `skill-dependencies.json` records no external skill dependencies. Supporting resources are regular Markdown files; there are no scripts, hooks, executable components, or external skills.

The [dossier guide](skills/speech-act-writing/references/dossier.md) preserves source identifiers, provenance links, findings, conceptual distinctions, and inspection limits. The [examples](skills/speech-act-writing/references/examples.md) use fictional scholarly situations.

The package was derived only from the assignment and its four embedded research documents. The linked primary works were not independently accessed. The workflow is a design proposal, not an empirically validated intervention. It does not certify intentions, authorship, institutional validity, source authenticity, or actual reader effects.

The accompanying `design-notes.md` and `input-manifest.json` are outside the package and document its derivation. They are not runtime dependencies.

## License

Original package text and the accompanying design notes and input manifest are licensed under the [MIT License](LICENSE). Bibliographic attribution remains with the identified sources; this license does not purport to relicense those underlying works.
