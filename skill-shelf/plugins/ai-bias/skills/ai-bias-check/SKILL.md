---
name: ai-bias-check
description: "Diagnose and correct recurring biases in AI reasoning, research, writing, and revision, including goal substitution, proof requests derailed by objections or convenient assumptions, unsupported premises, fixation, circular validation, misdirected reader attention, defensive overformalization, instruction-compliance signals in deliverables, and misleading wording. Use for an explicit bias review or a concrete sign of these patterns during reasoning or revision; not for demographic fairness audits."
---

# AI Bias Check

Find the judgment that went wrong, test it against the task, and change the
decision or artifact accordingly. Use explanations to recognize the same failure
in unfamiliar settings, rather than merely attaching bias names to mistakes.

This skill concerns biases in how AI performs work. It is not a demographic
fairness audit. It requires no other skill, external service, or executable.
Follow the user's requested response language; the instructions being in English
do not determine the language of the result.

## Establish the review target

Use the supplied answer, plan, draft, revision, or decision together with its
intended outcome, current constraints, audience, and available supporting
evidence. Recover these from the task before asking for more information.
For a comparison, inspect both the original and the revision when available.

Treat source notes, papers, code, data, execution results, and explicit user
decisions according to what they actually establish. An earlier AI summary is
not proof of its own claims. If essential evidence is unavailable, identify the
specific unresolved judgment instead of inventing context or certifying it.

Keep the existing authorization: review when asked to review; make repairs when
revision is already authorized. This skill does not authorize publishing,
external messages, or unrelated changes.

## Select the relevant checks

Classify by **the judgment operation that failed**, not by the agent's presumed
motives or the stage of work. Each basic entry has one primary category; a single
incident may contain several distinct failures. A plausible causal explanation
is a model to test, not evidence that the cause occurred in this instance.

Use this index to select checks. Read the relevant entries in the linked file;
do not load the whole catalogue or run every check by default.

| Judgment | Initial test | Detailed entries |
|---|---|---|
| A. Goals and success criteria | Could the stated completion condition pass while the user's outcome fails? Did a tool determine the task? | [01 Proxy success; 02 Means-driven goals](references/goals.md) |
| B. Premises and evidence | Would the belief survive removing approval, prestige, presentation cues, and unverified assumptions? | [03 Agreement; 04 Authority; 05 Presentation; 06 Prior output; 07 Assumptions; 08 Selective evidence](references/evidence.md) |
| C. Search and revision choices | Were meaningful alternatives considered, including changing the existing structure and deleting content? | [09 Early closure; 10 Preservation; 11 Addition preference](references/search-and-revision.md) |
| D. Inference and validation | Do the conditions support this conclusion, and could the check detect an error in the original interpretation? | [12 Overgeneralization; 13 Familiar patterns; 14 Rationalization; 15 Shared-premise validation](references/inference.md) |
| E. Information selection and communication | Does the artifact convey supported meaning in its own vocabulary, with appropriate emphasis and detail? | [16 Context leakage; 17 Reader information; 18 Implied meaning; 19 Unnecessary information](references/communication.md); [20 Unmarked coinages; 21 Missing relations; 22 Unstable terms; 23 Claim strength](references/wording.md) |

For true details that make readers focus on the wrong issue, including defensive
piles of assumptions and definitions, start with
[18](references/communication.md#18-judge-the-whole-message-by-sentence-level-truth).
Recover the intended message and check the attention, questions, and importance
judgments the passage invites. For information with no useful role or excessive
space, use 19; these tests can apply separately to the same passage.
For “keeps adding instead of removing,” start with 11. These concern different
decisions: selecting information versus selecting an editing operation.

For proof requests that stall at a counterexample or become easy only after
changing the assumptions, start with 01 and read
[proof tasks and changes to assumptions](references/proof-tasks.md). Judge the
validity of the objection separately from whether it advances the requested
work. Do not label a conditional proof invalid merely because the new assumption
makes it easy; check what problem was actually solved.

For an artifact that advertises following instructions through self-assessment,
echoed quality labels, or conspicuous correction signals, start with
[16](references/communication.md#16-leak-conversation-or-instruction-language-into-the-artifact).
Keep the requested substance and reader-facing function; inspect the additional
signal rather than treating all instruction-shaped content as contamination.

For invented compounds, noun-heavy prose, shifting terminology, or ungrounded
certainty and hedging, read [wording](references/wording.md). For “not A, but B,”
first check whether A comes from discarded work history (16); use 18 for an
unsupported subject-matter contrast. Do not turn style inspection into an AI
authorship detector or a blacklist of phrases.

## Test and repair

1. Identify the concrete choice: what was treated as a goal, fact, candidate,
   inference, or necessary content? Point to the relevant text or action.
2. Apply the entry's discriminating test. Compare a plausible alternative,
   trace a claim to evidence, check an applicability condition, or try removal.
   Use the explanation to choose the test, not to infer hidden intentions.
3. Check the legitimate boundary. Correct agreement, useful detail, a justified
   existing structure, and explicit user choices are not failures. A missing
   piece of personal context may require a question; a visible defect in the
   artifact should be diagnosed directly.
4. Repair the smallest coherent unit that resolves the failure. This may mean
   changing a premise or structure, rather than adding a sentence. Compare
   deletion, consolidation, relocation, and replacement before adding material
   to fix redundancy. Preserve independent valid work and real constraints.
5. Recheck against the original outcome and the evidence. Stop when the relevant
   problem is resolved; do not turn the audit into a new task or a growing list
   of caveats.

Do not score by the number of labels or manufacture a finding for every class.
Record multiple labels only when they identify different decisions or tests.
In scientific work, check units, conventions, assumptions, approximation ranges,
and sufficient versus necessary conditions where the conclusion depends on them.

## Output

For an explicit review, report only actionable findings: **location or choice →
observed failure and its consequence → test/evidence → suggested repair**.
Include an entry number when it helps distinguish the issue. State material
unknowns separately; do not call an untested suspicion a confirmed bias.
If the relevant checks find no issue, say so without claiming exhaustive proof.

For an authorized revision, deliver the revised artifact and a brief explanation
of consequential changes and verification. When applying the skill during other
work, let it improve the result without appending a taxonomy report unless asked.

Read [sources and maintenance](references/sources.md) only when attribution,
research support, or updating the catalogue matters. The local entries contain
the guidance needed to apply the skill without fetching their sources.
