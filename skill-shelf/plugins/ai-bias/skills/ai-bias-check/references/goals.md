# A. Goals and success criteria

Judgment: what to achieve, and what counts as success. This applies during
evaluation as well as initial planning. Distinguish choosing the wrong target
(02) from using the wrong success criterion for a target (01).

## 01. Substitute a proxy for success

**Failure.** Treat an easy-to-observe condition—length, a passing check, a
completed procedure, a visible response to feedback, or polished presentation—as
sufficient evidence of the intended outcome.

**Why it can happen.** Usefulness and understanding require contextual judgment;
counts, pass/fail signals, and familiar formats are easier to assess. Humans and
organizations also adapt to measurement. In AI work, explicit checklist items,
tool success signals, and salient feedback can become convenient stopping
conditions without a renewed check that they imply the requested result.
Excess optimization of response length as a preference proxy has been studied
in training ([length and quality](https://arxiv.org/abs/2403.19159)).

**Variants and discriminating tests:**

| Variant | Test |
|---|---|
| Measurable completion: tests pass or citations are numerous, so the task is declared done. | Construct a case that passes those conditions but fails actual use or the argument. |
| Feedback becomes the goal: maximize “shorter,” “more detailed,” or “more cautious.” | Did strengthening that property remove something necessary for the artifact's purpose? State success without repeating the feedback's wording. |
| Procedure replaces progress: plans, questions, or reviews count as the result. | Which concrete failure does each procedure prevent here? Does its result change the work? |
| Naming replaces explanation: calling something a “structural problem” is treated as understanding it. | Without the name, explain which relationship is wrong and what that changes about the response. |
| Appearance replaces quality: length, polish, or familiar style wins over correctness. | Remove author identity and nonessential decoration, then compare correctness and requirement satisfaction. |
| Resistance to objections replaces communication: a passage is considered finished once every conceivable caveat is stated. | Can the intended reader identify the message and follow the needed reasoning? Check whether the defensive detail serves that purpose; use the reader-attention checks in [18](communication.md#defensive-detail-that-misdirects-attention). |
| A correct objection replaces constructive progress: a proof request ends with repeated attention to an omitted condition, although the intended setting supports a useful repair. | After the obstruction is established, what does another counterexample change? Has a justified repair or the actual obstruction to repair been addressed? |
| An easy conditional proof replaces the requested theorem: add the conclusion, a near-equivalent condition, or the unresolved lemma as a hypothesis and report success on the original task. | Compare the original and revised claims. What independently justifies the added condition, how much of the intended scope survives, and where did the original proof obligation go? |

LLM-judge research examines length and self-preference effects
([judge biases](https://arxiv.org/abs/2306.05685)). Familiarity is one proposed
account ([familiarity](https://arxiv.org/abs/2410.21819)); limitations in evaluation
ability can also contribute ([evaluation ability](https://arxiv.org/abs/2601.22548)).
Do not assume one explanation covers every case.

**Core check.** Can all current acceptance conditions hold while the user's
intended result fails? Identify the actual substitute criterion; a bad outcome
alone does not establish this bias.

**Repair and boundary.** Replace weak criteria with observations that distinguish
success from that failure. Retain required formats, meaningful approvals,
established terminology, and stylistic qualities that are themselves requested.
Honor explicit changes to the goal. Do not fix procedural excess by dropping a
check that prevents a relevant, consequential error.

### Proof tasks: two ways to secure an easy verdict

A refutation of the literal wording and a proof of a modified claim can both be
correct while leaving the intended research question unresolved. The shared
failure is accepting that local verdict as completion, not counterexample search
or conditional reasoning itself. Read [proof tasks](proof-tasks.md) for the
assumption checks, examples, and boundaries.

**Explanatory model.** A crisp refutation or completed proof offers a readily
assessable endpoint. Repairing a statement while preserving its research content
requires a harder judgment about intent, scope, and remaining obligations.
Humans can also retreat to defensible objections or move the goalposts. In AI
work, familiar proof/refutation formats and pressure to produce a satisfactory
answer may favor those endpoints. The result can function like gaming an
evaluation without establishing that the agent intends to deceive or compete
with the user. Test the change in success criteria, rather than attributing a
motive from the tone of the answer.

## 02. Let available means determine the goal

**Failure.** Reshape the problem around an available tool, dataset, template,
or classification before deciding what outcome is needed.

**Why it can happen.** Concrete means make a finished product and next action
easy to imagine. Humans also favor familiar tools. Tool descriptions and existing
files can be especially prominent in an AI's context, giving the work a shape
before their necessity has been assessed.

**Examples.** Make a diagram when none is needed; narrow a research question to
what an available dataset can answer; treat filling template fields as the
investigation.

**Check.** If that tool or resource were absent, would this still be the chosen
question and deliverable? Restate the goal without naming the means.

**Repair and boundary.** Define the needed result and choose means by their
contribution to it. Integration with an existing system and an explicitly
required format are legitimate constraints. A tool's presence alone is not a
failure: identify whether it changed the goal (02), or became a misleading
measure of completion (01).
