---
name: argument-clip-orchestrator
description: "Coordinate the project-local routine for turning a small source argument, paragraph, subsection, proof step, equation discussion, or reusable visual unit into a Manim clip or asset bundle. Use when Codex needs to decide worker skills, plan clip/asset boundaries, split or merge scope, route failures, or package outputs for later composition."
---

# Argument Clip Orchestrator

Use this skill as the top-level coordinator for one argument clip or one reusable Manim asset bundle. Do not design a whole-paper video first. Work at the smallest useful unit: one paragraph claim, one subsection claim, one proof step, one equation derivation, one figure explanation, one reusable diagram asset, or one numerical visualization.

## Core Rule

Preserve implementation freedom for the Manim author, but make success testable. The output of orchestration is not a full storyboard; it is a scoped workflow with the right worker calls, artifacts, and verification gates.

Treat the preview mp4 as a review artifact, not as the whole product. The durable product is a project bundle: source basis, work order, reusable mobjects or scene code, preview renders, source-to-scene mapping, and verification notes. If the clip contains reusable visual parts, separate those parts into an asset module instead of hiding them inside one long scene.

Default task boundaries for Manim work are scene-level: one task per maximal unit in which the main visual components persist. Planning may span a section, subsection, or deck in a Markdown task list, but implementation, screenshot inspection, repair, and acceptance should normally finish for one scene task before moving to the next. If a source unit requires multiple unrelated diagrams, visual objects, or state spaces, split it into separate scene tasks and compose them later.

Treat geometry defects as a default risk, not an edge case. Every scene task needs a per-scene geometry audit before acceptance: check object alignment, unintended overlap, near-touching elements that read as connected, labels merging into one word, arrows or lines pointing to the wrong target, and layout shifts between neighboring checkpoints.

Treat visual primitive defects as the same class of risk. Arrows, connectors, lines, braces, highlights, markers, axes, legends, and motion paths must be audited as meaning-bearing objects: direction, endpoint/target, relative scale, stroke/head balance, layering, and semantic consistency must match the argument before a scene task is accepted.

Treat duplicate visual implementation as an architectural defect. Before scene
work, use `$manim:manim-asset-system` to identify concept identities, inspect the asset
and convention registries, and choose reuse, parameterized extension, new asset,
or a justified one-off. Scene boundaries do not authorize new conventions.

Treat guarantee inflation as an acceptance-integrity defect. The workflow must
not report a relation, fidelity claim, or artifact as guaranteed, faithful,
complete, verified, or passed beyond its per-claim guarantee record. Visual
inspection and self-authored tests can reject or regress an
artifact; they cannot certify a constructive relation by themselves. When a
diagram asserts spatial or topological structure, require the guarantee record
from `$manim:manim-asset-system` before implementation and acceptance.

## Workflow

1. Identify the clip and asset boundary.
   - Prefer 15-90 seconds of video.
   - Prefer one core claim and one to three central equations.
   - Split the clip if it contains multiple claims, unrelated equations, or more than one visual idea.
   - Split the work when the main visual components stop persisting. A new diagram family, state space, plot, correspondence view, or source figure usually means a new scene task.
   - For multi-scene requests, first create or update a Markdown task list that names each scene task, its source basis, visual contract, checkpoints, geometry-audit status, visual-primitive-audit status, and acceptance criteria. Then execute one scene task at a time.
   - Merge with adjacent context only when the source unit is too small to be meaningful.
   - If the work includes reusable visual objects, formulas, diagrams, or preview states, define an `asset_id` and keep the asset separate from the composed preview scene.
   - Assign `concept_id` values before `asset_id` values. Search the project
     registry for semantic matches even when the existing surface, orientation,
     scale, or local layout differs.
   - Use `paper_assets/<paper_id>/<asset_id>/` for paper-specific reusable assets, `runs/<clip_id>/` for transient work orders and reports, and `scenes/` only for simple standalone clip scenes.

2. Create or request a work order.
   - Use `$manim:argument-clip-requirements` when the clip objective, source basis, allowed transformations, or success criteria are not already explicit.
   - Require an artifact plan and a temporal plan before implementation if the source has multiple visual states or reusable parts.
   - Require a viewer contract and visualization obligations before implementation if the clip introduces technical terms, symbols, central equations, diagrams, colors, arrows, or visual conventions.
   - Require an asset-reuse decision record and convention IDs before
     implementation whenever a visual object or semantic convention may recur.
   - Require a construction record and per-claim guarantee record
     whenever the visual claim depends on incidence or attachment, containment, intersection,
     tangency, closure, connectivity, equality or shared identity, shared
     origin, on-surface membership, separation or clearance, or crossing order.

3. Decide needed workers.
   - Use `$manim:manim-math-derivation` for algebraic transformations, omitted derivation steps, symbolic equivalence, or term-level correspondence.
   - Use `$manim:manim-visual-planner` for diagrams, geometric layouts, plots, correspondence visuals, or dense screen design.
   - Use `$manim:manim-asset-system` for registry lookup, concept identity, public
     API contract, convention reuse, variant decisions, and extraction/migration gates.
   - Use `$manim:manim-asset-implementer` to create or repair executable model,
     builder, registry-projection, export, and asset-preview artifacts. Asset
     design records or explanatory text do not satisfy this worker's output.
   - Use `$manim:manim-clip-implementer` only after required reusable assets are
     importable and checked; it owns scene composition, temporal exposition, and
     narration, not asset construction.
   - Use `$manim:manim-clip-verifier` after implementation or after any nontrivial repair.
     For central spatial or topological claims, spawn a fresh-context blind
     reviewer rather than reusing the implementing agent's context; withhold
     implementation rationale and expected verdict.

4. Route failures to the narrowest worker.
   - Source misunderstanding: requirements or semantic decomposition.
   - Wrong derivation: math derivation.
   - Unsupported diagram or visualization: visual planner plus fidelity review.
   - Undefined term, unexplained symbol, or missing viewer baseline: requirements.
   - Duplicate semantic asset or locally invented convention: asset system, then
     asset implementer when code or migration is required.
   - Missing builder, model, export, registry projection, or asset preview:
     asset implementer. Do not route this as a writing or scene-caption task.
   - Hard-coded reusable geometry in a consumer scene: asset system, asset
     implementer, then clip implementer for consumer migration.
   - Relation satisfied only by independently tuned values, post-hoc assertions,
     or appearance: asset system and visual planner; rebuild from a mathematical
     owner instead of adding more visual tuning.
   - Completion or guarantee language stronger than the guarantee record:
     verifier must narrow the claim or reject its acceptance before further
     polish. Artifact acceptance remains a separate decision.
   - Equation shown without visual role: visual planner, then clip implementer.
   - Render or API failure: asset implementer for an asset package or preview;
     clip implementer for a consumer scene.
   - Off-frame, overcrowded, unreadable, misaligned, unintentionally overlapping,
     visually merged elements, or broken visual primitives: visual planner, then
     the implementer that owns the affected artifact.
   - Hallucinated claim: requirements plus fidelity review.

5. Package the accepted artifact.
   - Keep scene code, preview path, source-to-scene mapping, verification report, and unresolved issues together.
   - Keep reusable asset code and preview classes in the asset bundle when present.
   - For every required `asset_id`, require a verifier-owned acceptance record
     bound to artifact revision and reviewer/implementer identities, naming the
     independently checked public API, registry projection, rendered preview,
     checks, and verdict. Plans, descriptions, and implementer assertions are
     not substitutes.
   - Record whether the mp4 is a standalone clip, an asset preview, or a composition preview.
   - Do not mark an artifact accepted until mechanical verification, fidelity review,
     screenshot review, asset/convention DRY gate, per-scene geometry audit, and
     visual-primitive audit are all addressed, and no reported guarantee exceeds
     its construction evidence.
   - Require a reviewer-owned structural-claim decision bound to the current
     artifact revision, with reviewer identity distinct from the implementer.
     Block artifact acceptance when any work-order-required central structural
     claim is unresolved.
   - Reconcile `objective.central_relation_ids` with the contract. Missing IDs
     block acceptance; a declaration that there are no central structural
     claims requires the independent reviewer's explicit agreement.

## Required Artifacts

For a clip, maintain these artifacts when feasible:

- `work_order.json` or a Markdown work order with equivalent fields
- `source_to_scene.md`
- scene code, either `scenes/<clip_id>.py` for simple clips or `paper_assets/<paper_id>/<asset_id>/scene_<asset_id>.py` for paper-specific reusable assets
- reusable mobject/helper module such as `paper_assets/<paper_id>/<asset_id>/mobjects.py` when the visual object will be reused or previewed independently
- asset-reuse decision record with concept IDs, registry candidates,
  disposition, convention IDs, variants, and one-off exceptions
- per-claim guarantee records with claim domains and assumptions, exact or
  approximate status and error bounds, construction bases, implementation
  assurance, mathematical owners, derivations, degree-of-freedom audits,
  preservation arguments, animation closure, regression and visual evidence,
  proposed wording, reviewer-owned decisions, and unresolved relations
- preview mp4 or screenshot from low-quality render, labeled as standalone clip, asset preview, or composition preview
- `verification.md`
- for multi-scene requests, a Markdown scene task list with per-scene source basis, visual contract, checkpoints, screenshot review status, geometry-audit status, visual-primitive-audit status, and acceptance criteria

For a pure asset-bundle task, do not require clip narration or a composed scene.
Require the asset implementation work order, importable model/builder package,
exports, registry projection, focused asset preview, check outputs, verifier-owned
asset acceptance record, and unresolved limitation notes.

## Output Format

When reporting orchestration status, include:

- artifact boundary: clip or pure asset bundle
- chosen worker sequence
- artifacts created or updated
- current blocker or next repair target
- acceptance status: `drafted`, `ready-for-verification`, `needs_review`, or `accepted`
