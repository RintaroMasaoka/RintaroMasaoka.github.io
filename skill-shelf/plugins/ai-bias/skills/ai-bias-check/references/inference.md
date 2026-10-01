# D. Inference and validation

Judgment: what follows from accepted premises and whether the derivation or
result has been checked in a way that can detect an error.

## 12. Turn a local example into an unconditional rule

**Failure.** Convert one success, failure, or correction into an “always” or
“never” rule while dropping the conditions that made it useful.

**Why it can happen.** Compact rules are easier to remember and apply than
conditional experience, for humans as well as AI. Without identifying the
relevant relationship, incidental features can survive as purported causes.
Turning a local fix into reusable instructions or a checklist is a particularly
direct opportunity for this expansion.

**Examples.** Ban background explanation after one overlong response; require
tables everywhere because one table worked; stop asking even essential questions
after being criticized for excessive clarification.

**Check.** Construct another case where the rule helps and a case where it harms.
Identify the condition separating them.

**Repair and boundary.** Reconnect the rule to its triggering conditions and
purpose. Preserve well-supported general principles and explicit continuing
user constraints. In mathematics or physics, retain assumptions, conventions,
and approximation domains; do not elevate a special case to a theorem. Unlike
feedback-as-goal in 01, this check concerns the scope of a derived rule.

## 13. Prefer a familiar pattern over its applicability conditions

**Failure.** Apply a standard problem frame, method, or conclusion before
checking whether the present assumptions support it.

**Why it can happen.** Pattern recognition is useful, but shared surface features
can conceal different conditions. Human reasoning also competes with prior
beliefs. LLM reasoning performance has been found to depend on semantic content
as well as logical structure ([content effects](https://arxiv.org/abs/2207.07051)).
Conflict between a familiar conclusion and the conclusion licensed by the
premises is a useful test case.

**Examples.** Use a theorem without its hypotheses; confuse similarly named APIs;
discard an unusual fact to preserve a familiar narrative.

**Check.** List the conditions required by the pattern and compare them with the
present case. If useful, preserve the logical structure while replacing evocative
names with neutral symbols.

**Repair and boundary.** Use patterns to generate candidates and conditions to
decide applicability. Keep common knowledge or domain knowledge that the task
legitimately assumes. Do not remove meaning that is needed to solve the problem.

## 14. Build reasons to fit a chosen conclusion

**Failure.** Choose an answer or policy, then construct a plausible justification
whose premises do not independently support it.

**Why it can happen.** Continuing text consistently with a stated answer differs
from testing that answer against evidence. Humans also rationalize. In LLM
studies, input biases can affect answers without appearing in the explanation
used to justify them ([unfaithful explanations](https://arxiv.org/abs/2305.04388)).

**Examples.** List convenient benefits for an adopted design without establishing
the comparison; infer causation from temporal order; change the stated reason
after every objection while never reconsidering the conclusion.

**Check.** Hide the conclusion and ask what each premise independently supports.
Could the same reason support a different conclusion just as well?

**Repair and boundary.** Rebuild the argument within the evidence's scope. Treat
an unsupported causal connection as a hypothesis. Writing the conclusion first
is a legitimate presentation choice when the reasons actually support it.
Selecting favorable evidence (08) and forcing an inference from available
evidence are distinct operations and may occur together.

## 15. Reuse the construction premise as validation

**Failure.** Copy the author's interpretation into the test and mistake “matches
what I intended” for “satisfies the requirement.”

**Why it can happen.** Creators know their intentions and can mentally supply
information absent from the output. AI self-review in the same context can reuse
the same interpretation and omissions. More checking adds little information
about an error shared by the artifact and its acceptance test.

**Examples.** Derive expected test output from current implementation behavior;
give a reviewer the missing explanation and conclude the document is clear;
treat repeated identical answers as validation.

**Check.** Build an acceptance condition from the original requirement or primary
source without the author's explanation. Can a plausible wrong artifact pass the
current check?

**Repair and boundary.** Use independent evidence: original requirements,
observed execution, a separate derivation, or a review context without the
author's rationale. Another AI is not automatically independent. Self-checking
is useful when the criteria are well-grounded. Check the basis of validation
here; the choice of what success means is addressed in 01.
