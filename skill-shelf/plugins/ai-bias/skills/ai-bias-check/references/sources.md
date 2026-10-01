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
