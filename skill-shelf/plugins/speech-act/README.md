# Speech Act

A portable English release snapshot for designing structure, sequence, vocabulary, and implication while distinguishing a text's content, its act in context, and its effects on readers. Release snapshots are reviewed and validated before publication.

Invoke `$speech-act:speech-act-writing`. For example: "Revise this introduction so readers can assess the question and this study's contribution. Preserve the evidence and the strength of the claims." The instructions are in English; user artifacts retain the language requested or established for the task.

Use this package alongside an existing workflow for papers or explanations. Management of a particular genre's artifacts, scientific correctness, notation design, and a complete independent check of what readers can understand at each point remain the responsibility of the relevant workflow. This package includes the decision procedures and literature knowledge needed for independent use. It does not invoke other stock owners or contain copies of their implementations.

The execution procedure is in [SKILL.md](skills/speech-act-writing/SKILL.md). The literature consulted and the scope of verification are recorded in the [Source Map](skills/speech-act-writing/references/sources.md). The writing methods derived from that literature are this package's practical synthesis; they are not theoretical theorems or effects guaranteed by experiments.

The package owner is `speech-act`, and its public entrypoint is `speech-act:speech-act-writing`. Install and enable the complete package through a compatible host's package mechanism at the chosen scope. Package registration, storage in a cache, activation in a folder, and loading by the host are separate checks. Do not symlink an individual package skill into an active skill root. This versioned release snapshot is separate from the private working source and does not synchronize with it automatically.

Released under the [MIT License](LICENSE).
