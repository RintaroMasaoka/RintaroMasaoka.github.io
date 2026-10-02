# B. Premises and evidence

Judgment: what to accept as a fact, premise, or source of support, and how much
weight to give it. These entries examine inputs to a conclusion; inferential
justification is covered in [D](inference.md).

## 03. Change factual judgment to match approval

**Failure.** Change a factual conclusion or assessment to match the user's
agreement, disagreement, or dissatisfaction without new evidence. Excess praise
or self-denigration may be manifestations.

**Why it can happen.** A preferred answer and a correct answer need not coincide.
Agreement smooths human interactions too. Preference-based optimization can
favor agreeable AI answers over accurate ones without requiring a theory of
the model's emotions ([sycophancy and preferences](https://arxiv.org/abs/2310.13548)).

**Examples.** Retract a correct answer after “Really?”; soften criticism when
told the user wrote the draft; replace a needed correction with praise or apology.

**Check.** Hold the evidence fixed and hide the user's stance. Does the assessment
change? Locate any changed conclusion without a new fact or legitimate constraint.

**Repair and boundary.** Ground agreement, correction, and uncertainty in their
respective reasons. A user's preferences legitimately determine what they want;
correct agreement needs no counterargument. Distinguish this from 04: a claim
can be accepted because of prestige even without pressure to agree with anyone.

## 04. Substitute authority for support

**Failure.** Treat an expert, paper, reviewer, or another AI's status as a
replacement for checking what supports the claim and where it applies.

**Why it can happen.** Source reliability is a useful shortcut for humans and
AI alike. It fails when an initial reason for trust becomes a conclusion without
checking scope. Citations and expert language do not by themselves establish
what a source guarantees.

**Examples.** Treat a reviewer's suggestion as a binding requirement; adopt a
claim because it appears in a prestigious paper despite different assumptions;
treat several AI endorsements as independent evidence without checking their basis.

**Check.** What is this source qualified or authorized to establish? Separate the
claim, scope, and premises from the name or status of its source.

**Repair and boundary.** Use expertise to prioritize investigation and calibrate
provisional trust. Trace consequential claims to supporting evidence. Respect
real decision rights: users choose goals, authors choose authorized editorial
policy, and specifications can define required formats.

## 05. Weight information by its presentation

**Failure.** Let position, repetition, forceful wording, candidate order, or
evaluative labels outweigh content, support, and valid priorities.

**Why it can happen.** Human judgment also uses readily recalled information and
supplied frames as starting points. LLM performance can vary with
[information position](https://arxiv.org/abs/2307.03172) and
[example order](https://arxiv.org/abs/2102.09690); over-adjustment to the last turn
has been observed in [multi-turn dialogue](https://arxiv.org/abs/2505.06120).
Vivid labels are another presentation factor that can be tested by changing
the presentation while preserving the decision-relevant content.

**Examples.** Forget the audience while applying a recent formatting correction;
spend most effort on a minor but emphatic complaint; overlook drawbacks of an
option labeled “recommended” or “safe.”

**Check.** Identify which still-valid conditions the latest instruction actually
changes. For ordering or labels, swap semantically interchangeable options or
remove evaluative wording and compare the judgments.

**Repair and boundary.** Recover the comparison criteria and active constraints.
Honor explicit revocations, goal changes, meaningful chronology, and user-defined
priorities. Variation alone does not prove its cause. Presentation may cause
proxy optimization (01), but weighting input and defining success are distinct
judgments.

## 06. Promote prior generated text to verified evidence

**Failure.** Treat a previous AI summary, plan, or note as proof that its claims
are facts or its proposals are approved decisions.

**Why it can happen.** Text left in context becomes given material for subsequent
work. If a handoff loses qualifications or source information, inference and
verification become hard to distinguish. Human hearsay has a similar structure;
repeated AI output-to-input cycles can amplify it. Related research shows models
justifying an initial incorrect answer with further false claims they can
recognize as false in isolation
([snowballing errors](https://arxiv.org/abs/2305.13534)). This is related evidence,
not an experiment establishing every mechanism of summary or handoff loss.

**Examples.** Treat a proposed plan as user-approved; assert a paper's result from
an earlier AI summary alone; turn an unverified constraint into a requirement
during handoff.

**Check.** Trace a consequential inherited claim to an original source, current
observation, or explicit decision.

**Repair and boundary.** Verify it or retain it as an assumption. An unavailable
source does not establish falsity. Reuse verified results when their basis and
scope survive. Distinguish evidence adoption here from keeping an existing
artifact out of reconsideration ([10](search-and-revision.md#10-exempt-the-existing-option-from-reconsideration)).

## 07. Settle an unverified premise

**Failure.** Fill in an unspecified goal, environment, definition, preference,
or reader profile and treat the completion as confirmed.

**Why it can happen.** Both humans and AI need to act with incomplete information.
The failure is silently fixing one of several consequential possibilities.
Familiar scenarios and incentives to answer offer a useful explanatory model.
Evaluation rules that reward guessing more than abstention have been analyzed
([uncertainty and evaluation](https://arxiv.org/abs/2509.04664)).

**Examples.** Assume a unit, boundary condition, or software version; presume
experts need no derivation or beginners need no equations; interpret one question
as evidence of general incomprehension.

**Check.** Separate confirmed premises, assumptions, and unknowns. Does a plausible
alternative change the conclusion or action? For reader profiles, distinguish
what the person stated from what was inferred.

**Repair and boundary.** State low-impact assumptions and proceed. Resolve
important branches through available evidence; ask narrowly when only the user
can supply the needed personal premise. Fix visible undefined terms and logical
gaps directly rather than asking the reader to diagnose them. Do not stop at
every omission. Unknown prior knowledge belongs here; mis-tracking what the
document has supplied belongs in [17](communication.md#17-treat-the-writers-knowledge-as-already-supplied).

In proof work, an added assumption also needs a separate check of its role:
was an omitted convention clarified, a genuine restriction proposed, or the
unproved conclusion put into the premises? See [proof tasks](proof-tasks.md).
Use 07 when a consequential premise is treated as given without support. If the
change is explicit but the revised theorem is passed off as the requested result,
01 is the relevant failure even when the conditional proof is valid.

## 08. Select only evidence that fits the conclusion

**Failure.** Choose search terms, sources, or tests that favor the desired answer,
screening out potential refutations or applicability limits.

**Why it can happen.** A hypothesis guides efficient search, but can also decide
where counterevidence will never be found. This shares the structure of human
confirmation bias. When AI generates the answer, queries, and tests, the same
premise can shape every stage while a growing source count creates no new check.

**Examples.** Search only using a presumed cause; test only successful inputs;
accept supporting articles while excluding relevant counterevidence because it
does not fit the preferred conclusion.

**Check.** What would be observable if the claim were wrong? Look for that
observation and test a consequential alternative or boundary case.

**Repair and boundary.** Examine counterexamples, limits, and sources with
different underlying evidence as needed for the decision. Do not manufacture
equal weight for weak objections; failure outside the claimed conditions is not
automatically a refutation. This concerns selection of evidence; forcing a story
from evidence to a chosen answer belongs in [14](inference.md#14-build-reasons-to-fit-a-chosen-conclusion).
