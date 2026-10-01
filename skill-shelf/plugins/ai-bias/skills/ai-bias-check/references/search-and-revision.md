# C. Search and revision choices

Judgment: which candidates and editing operations are considered, and when
comparison ends. Distinguish closing an initial search (09), shielding an
existing option from reconsideration (10), and favoring an editing operation (11).

## 09. Close search at the first promising answer

**Failure.** Once a plausible explanation, solution, or candidate appears, treat
it as final without examining alternatives that could change the decision.

**Why it can happen.** Finishing one answer looks like clearer progress than
continuing investigation. Humans also stop judgment too early. In AI generation,
continuing the selected answer produces a finished response without a natural
trigger to reopen search. Premature answers in multi-turn dialogue have also
been studied ([early commitment](https://arxiv.org/abs/2505.06120)).

**Examples.** Stop at the first search result; accept the first working
implementation without comparison to requirements; treat one possible cause as
the only cause.

**Check.** Is there an alternative that explains the same observations but changes
the next decision? Identify an observation that would distinguish the two.

**Repair and boundary.** Compare consequential alternatives and stop when further
search is unlikely to change the decision materially. For a small reversible
task, trying a provisional solution may be the most informative next action.
Do not demand exhaustive search or a fixed number of alternatives.

## 10. Exempt the existing option from reconsideration

**Failure.** Hold an adopted problem frame, structure, or artifact fixed and
repair only its surroundings, even when its continued value is in question.

**Why it can happen.** Existing work shifts “What is needed?” into “How do I fix
this?” Humans show comparable status-quo and sunk-cost effects. For AI, its prior
interpretation and draft remain in the next input, allowing new feedback to be
read as patch material. No emotion about wasted effort needs to be assumed.
Dependence on earlier incorrect answers appears in
[multi-turn research](https://arxiv.org/abs/2505.06120).

**Variants and discriminating tests:**

| Variant | Test |
|---|---|
| Preserve the problem frame: improve the usability of a feature that is not needed. | Which premise does the patch preserve? Is that premise what the feedback challenges? Restate the problem from current requirements. |
| Preserve the artifact: retain an unnecessary table or excessively fragmented taxonomy. | If it did not exist, would it be created for this purpose now? If not, is there another reason to retain it? |

**Core check.** Compare a choice set that fixes the current option with one that
allows its deletion or replacement. Does the recommendation change?

**Repair and boundary.** Return to the earliest invalid decision and the parts
that depend on it. Preserve independently valid work. Compatibility, user
familiarity, and change costs can justify retention. An isolated typo does not
justify rebuilding the frame. This is about reopening an adopted option, not
the initial stopping decision in 09.

## 11. Prefer addition over deletion or consolidation

**Failure.** Try to repair redundancy, duplication, unnecessary structure, or a
wrong rule by adding explanations, exceptions, transitions, or caveats.

**Why it can happen.** Additions make the intervention visible and local.
Deletion requires judging what the whole artifact can do without. Generating
the next sentence is a direct operation in language-model use, so a correction
can become another piece of prose rather than a change to existing prose.
Humans also encounter incentives to demonstrate work by adding visible material.
This is an explanatory model, not a claim that AI cannot delete.

**Examples.** Add a paragraph distinguishing two duplicate sections; invent an
introduction for an unnecessary table; accumulate exceptions instead of replacing
a bad rule; respond to “shorten this” with an explanation of the shortening plan.

**Check.** Before adding, compare an edit that uses deletion, consolidation,
relocation, or replacement. Does it solve the problem while preserving the needed
function? Does every remaining element have a role?

**Repair and boundary.** Remove or reconstruct the unit creating the problem.
Add a premise or derivation when it is actually missing. Retaining an existing
object (10) and choosing addition as the editing method are separate decisions:
an agent can be willing to change the structure yet consider only additive edits.
Unnecessary output (19) can result from this choice, but can also arise in a
first draft with no editing at all.
