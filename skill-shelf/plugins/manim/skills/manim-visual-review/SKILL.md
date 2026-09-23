---
name: manim-visual-review
description: "Audit a rendered Manim frame, screenshot, or mp4 checkpoint (clip, reusable asset, or slide-deck page) against an accumulated catalog of recurring formulaic visual mistakes — meaningless arrows, overlapping/occluded objects, mistargeted connectors, label merging, false grouping, scale/direction errors, inconsistent primitive semantics, and text/typography defects such as small-font glyph-spacing artifacts or math written as plain Text instead of MathTex. Append newly discovered mistake patterns to the catalog after each review. Called by manim:manim-clip-verifier and manim:manim-slides-deck as their geometry/visual-primitive/typography audit layer, or invoked directly for an ad hoc visual QA pass."
---

# Manim Visual Review

This skill owns one narrow job: given a single rendered checkpoint (a full-resolution
frame, screenshot, or short mp4 segment) and the semantic intent it is supposed to
convey, decide whether the visual layout and visual primitives actually convey that
intent — and check it against a growing catalog of mistakes this project keeps making.

This skill does not judge mechanical correctness (render success, LaTeX compile,
imports), source fidelity, mathematical correctness, viewer prerequisites,
use-before-introduction, missing motivation, or reasoning bridges. Route the
last four audience-state questions to `$manim:manim-audience-state-review`. It does
not judge code reuse, builder structure, or registry completeness; route those
to `$manim:manim-asset-system`. It does not decide how to fix a defect. It only detects and names visual-layout, visual-primitive, and
text/typography defects (e.g. glyph-spacing artifacts from small `font_size`,
or math written as plain `Text` instead of `MathTex`).

## When callers should invoke this

- `manim:manim-clip-verifier` invokes this for every inspected checkpoint in place of
  running its own geometry/visual-primitive checklist inline.
- `manim:manim-slides-deck` invokes this for continuous scene coverage and each
  risk-selected page/checkpoint frame, in place of its own inline geometry/
  primitive sub-checks. Browser screenshots may also be reviewed when
  the question is specifically about the exported HTML runtime, but they should
  not be treated as the default source of truth for Manim visual design.
- `manim:manim-visual-planner` may invoke this before finalizing a diagram plan, to sanity
  check a mock or early render against the catalog.
- Any skill or user can invoke this directly for a one-off visual QA pass over an
  existing frame, screenshot, or exported deck.

## Required Input From the Caller

A useful review needs, at minimum:

- either one frame/checkpoint intent, or a continuous mp4 segment plus the
  ordered checkpoint intents and manifest time intervals it covers
- the frame, screenshot path, or mp4 segment/timestamp to inspect, including
  whether it came from rendered Manim output or from an exported HTML/browser
  runtime check
- what the checkpoint is supposed to show: the claim, relation, correspondence, or
  transition it argues for
- which objects, colors, arrows, or labels are meaningful (i.e., carry the argument)
  versus decorative or structural (titles, page numbers, backgrounds)
- whether this checkpoint persists objects from a previous checkpoint (needed for
  layout-shift and primitive-consistency checks)
- registered asset IDs, convention IDs, and declared variants used by the frame,
  when the project has an asset/convention registry

If the caller cannot supply the semantic intent, ask for it before reviewing — a
geometry audit without knowing what the frame is supposed to assert degrades into
"looks fine," which is not a real check.

Do not use an audience-state pass as proxy evidence that a primitive is visible,
and do not infer an audience-state failure merely because geometry hides an
introduction. Diagnose the geometry defect here; after repair, require the caller
to rerun the affected `$manim:manim-audience-state-review` sequence.

## Procedure

1. Read `references/mistake-catalog.md` in full before reviewing. Do not review from
   memory of a previous pass; the catalog grows over time and a stale mental copy
   causes missed checks.
2. Open the actual full-resolution frame or continuous mp4 segment. Prefer a
   rendered Manim segment as the first review input; use a browser
   screenshot only for HTML/runtime questions or when the user explicitly asks to
   inspect the browser surface. Never review from a contact sheet, thumbnail, or
   batched gallery — those hide exactly the defects this skill exists to catch
   (see catalog entry `seed-mistake-13`). For any fine-scale claim (thin strokes,
   small markers, close-but-not-quite-overlapping elements), crop or zoom into the
   specific region rather than trusting a whole-frame glance — the reviewer's own
   internal downsampling can hide a real defect even in a full-resolution file
   (`seed-mistake-16`). A continuous segment may cover several checkpoints. Mark
   fine-scale risks during playback and request individual full-resolution frames
   only for those risks; do not require one still per checkpoint.
3. If this review is running in the same context/session that implemented the
   checkpoint, treat that as a risk factor on its own: restate the checkpoint's
   intended claim from the work order rather than from the implementer's
   self-description before reviewing, so there is an external reference point to
   attack (`seed-mistake-17`).
4. Run the adversarial pass below, checking every catalog entry that applies to this
   checkpoint's content (an entry does not apply if the relevant primitive or layout
   situation is simply absent — record that as not-applicable, not as a pass).
5. Write one finding record for the continuous segment and one for each
   risk-selected frame. Keep checkpoint-to-time coverage in the caller's compact
   coverage map rather than duplicating pass records here.
6. If you find a defect that does not match any existing catalog entry, add a new
   entry using the template in the catalog file before finishing the review. Do not
   silently fix or report a novel defect without cataloging it — the point of this
   skill is that formulaic mistakes stop recurring once they are named.

## Adversarial Review Pass

For the continuous segment and each risk-selected frame, actively try to reject
it before accepting it. Distrust
every apparent visual relation and ask what false grouping, ambiguous direction,
mistargeted primitive, misleading emphasis, or hidden object the frame could
visually assert. Do not decide here whether a premise or term was introduced in
an earlier beat; that belongs to `$manim:manim-audience-state-review`.

**Geometry:**

- object alignment and spacing
- unintended overlap or occlusion between shapes, equations, labels, braces,
  highlights, plots, legends, and axes
- near-touching elements that falsely read as connected or grouped
- labels merging into each other or into one word
- edge proximity that looks cramped or clipped even if technically in frame
- layout shift from the previous checkpoint that makes a persistent object look
  accidental or new

**Visual primitives** (arrows, connectors, lines, braces, highlights, markers, dots,
axes, legends, motion paths — anything that carries relation, emphasis, order,
measurement, or motion):

- direction and orientation match the intended relation or flow
- endpoints and targets attach to the intended objects, not merely nearby objects
- arrowheads, markers, dots, braces, highlights, and line widths are proportionate to
  scene scale and do not dominate the content
- stroke/head/marker size hierarchy matches semantic importance
- semantic color correctness and visibility are separate layers. Do not infer
  visibility from text-level facts such as color names, palette roles, or "not the
  same color"; inspect the rendered primitive in the frame.
- theme portability is a third layer. When more than one theme is claimed,
  inspect equivalent rendered checkpoints in every supported theme. A pass on
  the default background does not establish that foreground text, panel fills,
  borders, inverse labels, images, plots, or semantic accents remain legible in
  another theme.
- distinguish palette roles from literal colors during diagnosis. `WHITE` or
  `BLACK` used as current-background contrast is a theme-mapping defect; an
  actual black/white object whose color carries physical or source meaning is
  not automatically a defect and must not be globally inverted.
- a single-color primitive spanning different visual regimes (for example, a bright
  spin configuration and a dark background) is suspect by default because no single
  color is guaranteed to read over both bases. Verify each segment of its path
  separately.
- primitives crossing patterned, textured, multi-color, or regime-changing content
  remain readable throughout their path; if not, require an outline/halo, rerouted
  path through a uniform region, segmented styling, stronger contrast, or a clearer
  endpoint
- primitives do not hide, cross, or visually overwrite the content they clarify
- repeated primitives keep the same meaning, color, style, and scale convention
  unless the change is deliberately introduced
- the rendered asset matches its registered semantic convention; surface-only
  variants preserve the invariant roles declared by `$manim:manim-asset-system`
- axes, legends, and measurement markers are readable and mapped to the right
  quantity
- every primitive present actually encodes a relation this checkpoint needs — a
  primitive with no assertable meaning is a defect, not a neutral decoration

**Text & typography:**

- any sentence-length `Text()` caption (roughly 4+ words) rendered at a small
  `font_size` for irregular inter-letter spacing; crop and zoom the specific
  caption region rather than judging from a whole-frame glance (`seed-mistake-21`)
- any math comparator (`>=`, `<=`, `!=`) written as literal ASCII inside a plain
  `Text()` string instead of `MathTex` with `\ge`/`\le` (`seed-mistake-22`)
- visual consistency between `Text` captions and nearby `MathTex` equations in
  the same frame — mixed math/prose that should read as one register but looks
  like two different typesetting systems

**Cross-checkpoint consistency** (only when a previous checkpoint is available):

- same object, same position/role reads as continuous rather than reset
- primitive meaning (color, arrow style) carried over unless a change is flagged
- when a new element appears, distinguish justified anchor continuity from
  append-only layout inertia. Check whether old objects that could have moved
  were left fixed without semantic reason, producing overlap, edge crowding,
  accidental voids, stretched connectors, or an unbalanced attention hierarchy
- compare occupied regions and negative-space distribution before and after the
  addition; visually awkward empty space is a layout defect even when no boxes
  technically overlap
- require the preceding rendered state or a continuous segment whenever the
  checkpoint adds an element; without before-state evidence, mark append-only
  layout inertia `not-inspectable` rather than not-applicable

## Finding Record Format

Write one record for the continuous segment and one for each escalated risk:

- `frame_or_segment`: path, timestamp, or beat name
- `semantic_intent`: what this checkpoint is supposed to assert (as given by caller)
- `attack_question`: the concrete failure mode tested this pass
- `catalog_refs`: catalog IDs explicitly checked (include not-applicable ones only if
  they were genuinely close calls worth recording)
- `asset_convention_refs`: registered asset/convention/variant IDs checked, or
  `none`
- `theme_evidence`: theme name and rendered checkpoint inspected, or
  `single-theme-only`
- `evidence_seen`: what in the frame supports or fails the intended claim
- `verdict`: `repair`, `pass-with-risk`, or `pass`
- `new_catalog_entry`: id of any newly added catalog entry, or `none`

Do not write generic praise such as "looks good" or "screenshot checked." A
passing record must say which catalog entries were attacked, which time ranges
were covered, and why no further still was needed. If the continuous pass finds
no named risk, rerun it more critically before reporting completion.

Do not accept proxy pass conditions such as "the colors do not overlap" or "the
semantic colors are distinct." Those are text-level statements about the design
spec, not evidence that a viewer can read the rendered object. A meaningful
primitive passes only when its direction, endpoint, role, and visibility are
obvious in rendered evidence. Use the continuous segment when these properties
are unambiguous; escalate to a full-resolution frame or crop when scale,
occlusion, contrast, or a changing background makes them uncertain.

## Report Format (back to caller)

- verdict: `pass`, `pass-with-notes`, or `needs-repair`
- continuous-pass record and risk-selected finding records (above)
- new catalog entries added this pass, if any
- repair target suggestion per failing checkpoint: intrinsic asset or asset-preview
  fix (`$manim:manim-asset-implementer`), consumer layout/positioning fix
  (`$manim:manim-clip-implementer`), or visual-metaphor redesign (`$manim:manim-visual-planner`) —
  this skill diagnoses, it does not choose between those two on its own when the
  right target is ambiguous; say so and let the caller decide

Do not mark an inspected meaningful primitive accepted if it lacks an explicit
direction/endpoint/scale/layering check. Do not mark a risk accepted based on a
contact sheet, thumbnail, or batched gallery. A continuous mp4 pass may cover
multiple checkpoints, but every fine-scale ambiguity discovered there must be
escalated to a full-resolution frame or crop.
