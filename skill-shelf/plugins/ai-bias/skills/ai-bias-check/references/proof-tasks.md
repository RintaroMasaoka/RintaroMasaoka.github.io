# Proof tasks and changes to assumptions

Use when a request to prove or develop a result gets stuck on an objection, or
is declared solved only after assumptions have changed. The primary check is
[01: proxy success](goals.md#01-substitute-a-proxy-for-success). This is an
application of the existing taxonomy, not a new basic entry.

## Recover the actual mathematical task

Distinguish proving an exact statement, testing whether it is true, developing
an intended theorem, and explaining a known theorem in its usual setting. Use
the supplied definitions, domain, quantifiers, examples, and work history to
recover the task. Do not invent an intended setting merely to save a claim.
A request for an exact validity check can be fully answered by one counterexample.
A constructive research request may call for a corrected statement and further
work after the same counterexample has been found.

For a claim H implies C, preserve what is known about H, the intended class of
objects, and the content of C. A proposed repair might strengthen H, narrow the
domain, weaken C, or split cases. Compare the actual statements; adding the
fewest words or demanding the formally weakest hypothesis is not the objective.
There need not be a unique best repair.

## When an objection becomes a detour

A counterexample satisfying the stated conditions refutes the claim even if it
is unusual or called pathological. Identify the condition it exposes and keep
that evidence. Then ask what decision further attention to it would change.
Repeating examples of the same gap can replace work on the intended question.

If context supports a routine clarification, state it and proceed with the
repaired claim. For a substantive restriction, explain its effect and pursue it
as a conditional branch when useful. Ask a focused question only when competing
repairs change the user's objective and available context cannot resolve that
choice. Do not repeatedly ask permission for ordinary mathematical reasoning.

If the obstruction reaches the core of the intended result, say so and explain
why. Cooperation does not require proving a false statement or finding a repair
that may not exist. A genuine impossibility result is progress when it answers
the research question.

## When an assumption absorbs the work

For each consequential added assumption A, check:

- **Origin and motivation:** Is A a stated premise, an established convention,
  a fact of the application, or a new restriction? What justifies considering it
  apart from making this proof finish?
- **Scope:** Which intended cases are excluded or which conclusions weakened?
  Does the revised statement still answer the question that motivated the task?
- **Proof obligation:** Can A be established for the target objects using the
  available information? If it is a new lemma, identify what remains to prove.
  A valid proof of H and A implying C does not establish H implying C.
- **Mathematical content:** Under H, is A equivalent or nearly equivalent to C,
  or does verifying A require the very step that remains unresolved? Explain
  any such relationship, including the reverse implication when claiming
  equivalence. What has been gained beyond restating the goal?

“Independent justification” here means a basis for using or establishing the
premise that does not simply assume the unresolved result. It does not mean
logical independence from C: useful sufficient conditions necessarily imply
conclusions, and a proof may legitimately reduce a difficult claim to a lemma.
An equivalent characterization can itself be valuable when requested or when
its useful consequences are established. Record that contribution accurately.
Do not call every strong sufficient condition circular, and do not present an
unproved sufficient condition as a completed proof of the original statement.

## Continue with an honest status

State the original obstruction, the proposed change and its basis, and what is
proved or still open, as briefly as the task allows. Continue the derivation
under an explicit, justified repair when possible. Retain valid intermediate
results if the main implication remains unproved. Do not conceal the unresolved
work in an assumption, lemma name, new definition, or “standard regularity.”

A collaborative result leaves the user with a sound proof, a useful and honestly
scoped corrected theorem, a meaningful reduction with the remaining obligation
visible, or a substantive refutation. Merely winning a disagreement or displaying
a proof-shaped artifact is not the completion criterion.

## Examples and boundaries

| Situation | Judgment |
|---|---|
| “Develop a maximum-existence result for continuous functions on bounded intervals.” After giving f(x)=x on (0,1), the answer keeps constructing failures on open intervals despite a closed bounded interval being an appropriate branch to investigate. | The objection is valid. Repeated refutation can substitute for progress (01); state the domain change and work on the corrected theorem if it serves the task. Do not call closedness implicit without contextual support. |
| “Prove every sequence in this class converges.” The answer assumes the sequence has a limit, or assumes that all terms approach some L, then declares the requested theorem proved. | The revised implication is valid but the requested result remains unproved. The new premise restates convergence; name the missing obligation instead of claiming completion. |
| A proof introduces a sufficient condition supported by the application, or states “It remains to prove Lemma L” after deriving the result from L. | A legitimate restriction or partial reduction if its scope and remaining burden are explicit. Difficulty moving into a lemma is not itself a failure. |
| The user asks whether continuity on (0,1) guarantees a maximum. The answer gives f(x)=x and explains that no point attains its supremum. | A complete and relevant refutation. No obligation to prove a different theorem. |
| The requested result is a characterization C iff A, and both implications are established. | Equivalence is the contribution; do not reject it merely because A can later be used as a premise. |

## Boundaries with neighboring entries

Use 01 when the completion criterion changes. Add another entry only for a
separate observed decision: 07 for treating an unsupported premise as given;
09 for closing search before a consequential alternative; 14 for reasons that
do not actually justify a claimed inference; 15 for checking only the modified
claim and mistaking that check for validation against the original request.
A correct conditional derivation does not fail 14 simply because it solves a
less useful problem. Neither a counterexample nor an added assumption alone
establishes a bias.
