# Sources and maintenance

## How to interpret the explanations

This catalogue is a practical synthesis. Its causal accounts are explanatory
models for generalizing a failure and choosing a discriminating test. A useful
account need not have been experimentally established. Human-common structures
and AI-specific conditions are described where they clarify the judgment.

Research links support the particular phenomenon or analysis stated beside
them, not the whole entry, its proposed remedy, or a universal claim about every
model. No evidence ranking is needed to use the catalogue. A label does not prove
the cause of an observed incident.

The working hypothesis that language for deliberation becomes mixed with
language for communicating a deliverable was proposed by the user during the
catalogue's development. It provides a unifying explanation for several wording
failures, not an empirically verified account of a model's hidden chain of thought.
Its operational tests use the artifact and any available work history.

## Research map

| Entries | Source | Relevant scope |
|---|---|---|
| 01 | [Disentangling Length from Quality in Direct Preference Optimization](https://arxiv.org/abs/2403.19159) | Length can function as a preference proxy during optimization. |
| 01 | [Judging LLM-as-a-Judge with MT-Bench and Chatbot Arena](https://arxiv.org/abs/2306.05685) | Biases of model-based evaluators, including verbosity and self-preference. |
| 01 | [Familiarity account of evaluator preference](https://arxiv.org/abs/2410.21819) | A proposed explanation involving how familiar text is to the evaluator. |
| 01 | [Evaluation ability and apparent self-preference](https://arxiv.org/abs/2601.22548) | Distinguishing evaluator limitations from a simple self-preference account. |
| 03 | [Towards Understanding Sycophancy in Language Models](https://arxiv.org/abs/2310.13548) | Sycophantic behavior and human preference optimization. |
| 05 | [Lost in the Middle](https://arxiv.org/abs/2307.03172) | Variation in using information at different input positions. |
| 05 | [Calibrate Before Use](https://arxiv.org/abs/2102.09690) | Few-shot prediction biases, including sensitivity to examples and order. |
| 05, 09, 10 | [LLMs Get Lost in Multi-Turn Conversation](https://arxiv.org/abs/2505.06120) | Premature commitments, persistence of errors, and adjustment to later turns in the studied settings. |
| 06 | [How Language Model Hallucinations Can Snowball](https://arxiv.org/abs/2305.13534) | Initial errors can lead to further false claims in their justification; this is not a study of every form of summary loss. |
| 07 | [Why Language Models Hallucinate](https://arxiv.org/abs/2509.04664) | Analysis of uncertainty and incentives to guess rather than abstain. |
| 13 | [Content effects in language-model reasoning](https://arxiv.org/abs/2207.07051) | Reasoning performance can vary with semantic content as well as logical form. |
| 14 | [Language Models Don't Always Say What They Think](https://arxiv.org/abs/2305.04388) | Explanations can omit influences that changed a model's answer. |
| 18–19, 21 | [Do LLMs write like humans? Variation in grammatical and rhetorical styles](https://arxiv.org/abs/2410.16107) (Reinhart et al., PNAS 2025) | Parallel corpora show grammatical and rhetorical differences across humans and the tested models, with larger deviations for instruction-tuned variants. This supports inspecting genre defaults, not condemning a construction. |
| 21 | [AI, write an essay for me](https://arxiv.org/abs/2304.14276) (Herbold et al., 2023) | The studied ChatGPT essays used more nominalizations and greater lexical diversity, and received higher quality ratings. A distributional difference is not automatically a defect. |
| 19, 21–22 | [What Are LLMs Doing to Scientific Communication?](https://aclanthology.org/2026.lrec-1.142/) (Miletić and Falk, 2026) | NLP papers and paired revisions show changes in syntax and vocabulary, including lower lexical diversity in LLM-modified passages; a small expert study also found perceived benefits. This differs from the essay study: no universal direction of lexical diversity is assumed. |
| 23 | [Can Large Language Models Faithfully Express Their Intrinsic Uncertainty in Words?](https://aclanthology.org/2024.emnlp-main.443/) (Yona et al., 2024) | On knowledge-intensive question answering, verbal uncertainty did not reliably track model-internal confidence. The metric considers both excessive and insufficient hedging; internal confidence is not the same as external evidential support. |

The wording checks also synthesize stock experience and semantic analysis.
These papers do not establish the prevalence or training cause of every local
pattern, notably unmarked coined terms, drafting-history contrasts, or unstable
technical synonyms. Their checks stand on the observable defect in the artifact;
the proposed mechanisms help transfer the checks to other cases. No new entry
requires its own empirical paper before it can be useful.

## Stock provenance

The following identities identify sources of operational principles. They are
attribution, not dispatch instructions or installation prerequisites. This
package owns its synthesized explanations, examples, checks, and remedies; it
does not import the source workflows or require their project infrastructure.

| Entries | Source identities | Principle carried forward |
|---|---|---|
| 01–02 | `standalone:objective-function-alignment`, `standalone:reaction-calibration` | Distinguish outcomes from proxies, feedback compliance, and procedural activity. |
| 03–04, 12 | `standalone:reaction-calibration`, `spec-artifacts:paper-writing` (paper-writing-knowledge reference) | Agreement, decision rights, and overgeneralizing a local correction. |
| 06, 10 | `standalone:reconstruct`, `study-skills:artifact-preservation-check`, `study-skills:prior-output-truth-check` | Reopen the problem frame; distinguish retained structure and inherited claims from current justification. |
| 01, 09, 12 | `standalone:abstraction-and-deduction`, `standalone:direction-challenger` | Principles that change decisions, alternatives, and boundary cases. |
| 08, 15 | `standalone:design-test-context`, `manim:manim-visual-review` (mistake-catalog reference) | Shared assumptions between construction and verification can hide failure. |
| 16 | `study-skills:continuation-bias-filter`, `study-skills:internal-language-filter`, `standalone:lint-correction-residue` | Separate reader-facing language from instructions and correction history. |
| 07, 17–18 | `study-skills:reader-state-check`, `study-skills:ask-user-premise`, `spec-artifacts:reader-impression-audit` | Distinguish personal premises, delivered information, and implied meaning. |
| 11, 19 | `study-skills:artifact-preservation-check`, `spec-artifacts:reader-impression-audit`, `standalone:reaction-calibration` | Content must earn its role and attention; deletion and consolidation are repair options. |
| 16, 18, 20–23 | `standalone:academic-writing` (audit-term-status, reader-vocabulary, sentence-clarity, audit-japanese-rendering, audit-negated-contrast references) | Term status, recoverable semantic roles, stable technical identity, field-aware translation, and the local license for a contrast. These are synthesized principles, not imported workflows. |

## Updating the catalogue

Maintenance is manual. Compare a proposed change with the relevant original
source and the behavior it is meant to improve; do not synchronize wording or
inherit a source skill's entire workflow. Keep local explanations that make
independent use possible. No historical source revision is claimed for this
synthesis.

Before adding an entry, determine whether the failure is a new judgment, an
existing entry's special case, or a link in a causal chain. Preserve one primary
category per basic entry. Test a positive example, a legitimate counterexample,
and the closest neighboring entry. Retain useful explanations without presenting
them as findings of an unrelated paper. Update the index and reference map when
identities or coverage change.
