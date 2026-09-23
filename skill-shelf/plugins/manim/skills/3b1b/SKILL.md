---
name: 3b1b
description: "Apply Grant Sanderson's (3Blue1Brown) video-making and pedagogical philosophy — concreteness before abstraction, motivation within 30 seconds, payoff as convergence of two threads, empathy for the viewer, curation/restraint over completeness — to shape a clip's narrative and pedagogical arc before visual planning, or to audit a finished script/clip for whether it actually lands as exposition. Use when defining what a clip should teach and why someone should care, when a visual plan technically shows the source but doesn't feel motivated or earned, or when a rendered clip is geometrically clean (see manim:manim-visual-review) but pedagogically flat. Does not check geometry, visual-primitive correctness, render mechanics, or mathematical correctness — those belong to manim:manim-visual-review, manim:manim-clip-verifier, and manim:manim-math-derivation respectively."
---

# 3b1b

This skill owns narrative and pedagogical quality: whether a clip's content is
motivated, ordered the way a learner (not an expert) needs it, and structured so a
payoff actually feels earned. It does not own visual layout, geometry, visual
primitives, render correctness, or mathematical correctness — route those to
`manim:manim-visual-planner`/`manim:manim-visual-review`,
`manim:manim-clip-verifier`, and `manim:manim-math-derivation`.

The principles below are drawn from Grant Sanderson's own writing (SoME judging
criteria, 3blue1brown.com) and multiple interviews (Lex Fridman, Dwarkesh Patel,
Perell, Stanford Daily, IAPS). Full sourcing, verbatim quotes, and confidence levels
are in `references/philosophy-sources.md` — read it before quoting a line as his own
words, since some material is paraphrase-level rather than verbatim. Do not present
paraphrase-level claims as direct quotes.

## When to invoke

- During `manim:argument-clip-requirements`, to pressure-test the pedagogical arc before
  scope is locked: why should the viewer care, what is the concrete entry point, what
  is the payoff.
- Before or alongside `manim:manim-visual-planner`'s beat sequencing, to check whether the
  planned beat order matches how a learner needs to encounter the idea rather than the
  source's logical/proof order.
- As a standalone review of a finished script, beat sequence, or rendered clip: does
  this feel like a 3b1b video, or does it read as a correct-but-flat fact dump.
- Do not invoke this for a pure geometry/layout defect (near-touching labels, bad
  arrow endpoints, clutter) — that is `manim:manim-visual-review`'s job even if the same
  clip also has a narrative problem.

## Core Principles

**Concreteness before abstraction**
- Open with a concrete example, case, or question — not a definition or general
  statement. The definition is an endpoint the viewer arrives at, not a starting
  point.
- The pedagogical order of ideas is often the reverse of the logical/proof order used
  in the source. When `manim:argument-clip-requirements` or the source material presents
  definition → theorem → example, actively consider inverting it for the clip.
- Prefer a concrete example specific enough that the viewer could plausibly
  rediscover the general pattern from it, over an example that merely illustrates a
  pattern already stated.

**Motivation in the first 30 seconds**
- Before finalizing a clip's opening beat, state explicitly why the viewer should care
  about this specific question, in one sentence. If you cannot state it, the clip is
  not ready for visual planning — send it back to requirements.
- "Useful" is not required as the motivation. Intrinsic delight, mystery, or "this is
  a strange thing that turns out to be true" is a legitimate and often stronger
  motivation than practical application.

**Novelty**
- A clip that only re-renders a standard textbook explanation with nicer visuals is
  not sufficient. Identify the specific angle, ordering, or connection this clip
  offers that a reader would not get from the source text alone — an obscure
  connection surfaced, a common topic taught in a materially better way, or a
  perspective the source itself doesn't take.
- If no such angle exists, say so explicitly rather than proceeding on visual polish
  alone.

**Memorability**
- Every clip should have at least one moment a viewer could plausibly recall months
  later — an aha moment, a strikingly clean visual, or a genuine surprise. Name that
  moment explicitly during planning. A clip with no candidate memorable moment is a
  weak clip even if every fact in it is correct.

**Payoff as convergence, not a single build-up**
- The strongest payoffs come from two separately developed lines of reasoning
  (concepts, visual threads, or partial results) finally meeting to resolve the
  question — not from one steadily escalating explanation. When planning a payoff
  beat, check whether it can be restructured as a convergence of two threads the
  viewer has been independently tracking.
- A payoff should feel like something the viewer arrives at, not something delivered
  to them. Prefer beat sequences that let the viewer predict or half-guess the next
  step over beat sequences that simply state the next fact.

**Curation and restraint over completeness**
- Deciding what to leave out is as much the job as deciding what to include. Cutting
  accurate, source-supported material to keep the narrative coherent and within
  length is a legitimate and expected editorial choice, not a fidelity violation —
  flag what was cut and why rather than silently including everything the source
  contains.
- Every visual, aside, or beat should be traceable to a purpose in the narrative. A
  beat that is source-accurate but doesn't serve the motivating question or the
  payoff is a candidate for cutting, not a candidate for "explicit completeness."
- One unifying thread per clip. If a clip needs two unrelated unifying ideas to make
  sense, it is two clips.

**Empathy for the viewer**
- Assume the viewer's background is exactly the stated viewer baseline from the work
  order — not the assistant's or the source author's background. Jargon must be
  explained at first use, not assumed.
- When a step feels obvious to the source or the implementer, that is a specific risk
  signal, not reassurance — the more distance between the author's current fluency
  and the target viewer, the more likely an unstated step gets silently skipped. Check
  those steps explicitly.
- Distinguish "this step is unprovable without more source" from "this step is
  provable but a beginner cannot see it without help" — the second case needs a
  visual bridge or slower pacing, not a citation.

**Pacing — author it, don't outsource it**
- Do not rely on the viewer pausing, replaying, or exploring on their own to recover
  missing understanding. Plan pacing as if most viewers will passively watch once
  straight through.
- Give the viewer explicit time (a beat, a pause, a held frame) to absorb a nontrivial
  claim before advancing, especially right before a payoff. A correct beat sequence
  that advances at uniform speed regardless of difficulty is a pacing defect.

**Mechanism over pattern-matching**
- "The viewer can see the pattern" is not the same as "the viewer understands why the
  pattern holds." When a clip's payoff is a numerical or visual pattern (growth,
  convergence, symmetry), check whether the underlying mechanism is shown, not just
  the resulting shape.
- Avoid the "fun fact" failure mode: a vivid analogy or trivia-like observation that
  doesn't connect to why the result actually matters to people who study it. If a
  visual is striking but disconnected from the motivating question, it is decoration,
  not exposition.

**Problem-solving vs. expository framing**
- If the clip solves a specific problem with a known start and end, the scripting job
  is mostly to draw a clear line between them.
- If the clip explains an already-known result to a new audience, the scripting job is
  harder: finding the angle, not finding the answer. Do not underestimate the time
  this takes relative to a problem-solving clip of similar length.

## Application to this project's pipeline

- `manim:argument-clip-requirements` should be able to answer, per clip: motivation
  (one sentence), the concrete entry point, the candidate memorable moment, and the
  cut material (what source content was deliberately excluded and why). If it cannot,
  route back before visual planning starts.
- `manim:manim-visual-planner`'s beat sequence should be checked against "pedagogical order
  vs. logical order" and "payoff as convergence" before it is handed to
  `manim:manim-clip-implementer`.
- Use this skill's narrative review (below) as a distinct pass from
  `manim:manim-visual-review`'s geometry audit — a clip can pass one and fail the other.

## Narrative Review (standalone audit use)

Given a script, beat sequence, or rendered clip plus its stated motivation and target
viewer:

1. State the clip's motivating question and target viewer as given — do not infer a
   more forgiving version of either.
2. Check each principle above that applies; do not skip empathy and pacing checks just
   because the content is mathematically correct.
3. Identify the candidate memorable moment. If none exists, that is a finding, not a
   pass.
4. Identify whether the payoff is a convergence of two threads or a single escalation;
   note which, and whether restructuring toward convergence is feasible without
   violating source fidelity.
5. Identify any beat that is source-accurate but not traceable to the motivating
   question or payoff — flag as a cut candidate rather than silently accepting it for
   completeness.

Report format:

- `motivating_question`: as stated for this clip
- `target_viewer`: as stated for this clip
- `verdict`: `pass`, `pass-with-notes`, or `needs-narrative-repair`
- per-principle findings: which principles were checked, which held, which failed, and
  concrete evidence (quote the beat/line, not a general impression)
- `memorable_moment`: named moment, or `none found`
- `payoff_structure`: `convergence`, `single-escalation`, or `no clear payoff`
- `cut_candidates`: beats that are accurate but not narratively load-bearing
- repair target: `manim:argument-clip-requirements` (motivation/scope problem),
  `manim:manim-visual-planner` (beat ordering/pacing problem), or none (narrative is sound,
  any remaining issue is geometry — route to `manim:manim-visual-review`)

Do not write "feels flat" or "good energy" without pointing at the specific beat and
principle that produced the judgment.
