---
name: manim-clip-implementer
description: "Implement or repair a composed Manim argument clip from a work order and accepted reusable assets. Use for scene composition, semantic layout, temporal exposition, narration, animation, and consumer-side integration. Route reusable model, builder, registry, export, and asset-preview construction to $manim:manim-asset-implementer."
---

# Manim Clip Implementer

Use this skill to write or repair the composed Manim scene for one argument
clip. The implementer owns semantic composition, visual relations, narration,
and temporal beats. Registered runtime and style policies own ordinary numeric
geometry; `$manim:manim-asset-implementer` owns reusable asset construction.

When a visual asserts a spatial or topological relation or exposes coordinates
or a data-to-position mapping, read
`../manim-asset-system/references/guarantee-integrity-contract.md` before
implementation.

## Inputs

Read:

- work order or user request
- source equations/text for the clip
- outputs from math derivation or visual planning when present
- existing scene file if repairing
- `scenes/utils.py` in the consuming project, when present, for available checks
- the work order `artifact_plan` and `temporal_plan`; if missing for a multi-part visual, create a minimal plan before coding
- the work order `viewer_contract` and `visualization_obligations`; if missing and the clip introduces technical terms, symbols, or central equations, create a minimal inventory before coding
- the work order `numerical_visual_contract`; if numerical values, plots, simulations, sampled data, or computed examples appear and the contract is missing, create a minimal one or route to `$manim:argument-clip-requirements`
- the work order `screenshot_review_plan`; if missing, derive checkpoint frames from the beat structure before claiming verification is complete
- the work order `asset_reuse_contract` and the asset/convention registry paths
  resolved there from the project adapter or explicit conventional fallback; if
  nontrivial visual objects or conventions are present and these are missing,
  route through
  `$manim:manim-asset-system` before coding
- the asset-implementer handoff for every required `asset_id`: importable public
  API, registry projection, preview evidence, and check results. If a required
  asset is not implemented, route to `$manim:manim-asset-implementer`; do not
  replace it with scene-local geometry, captions, equations, or explanatory text
- for every nontrivial asset requirement, require a resolved source class,
  accepted definition, supported claims, structural signature, matching
  class-specific contract, complete gate record, and final `pass` verdict. If
  these are absent or unresolved, do not infer them from the desired render;
  route to
  `$manim:manim-asset-system` or `$manim:argument-clip-requirements`

## Implementation Rules

- Use Manim Community APIs.
- Import the approved public asset API before composing scene geometry. The clip
  task may select declared parameters or variants, but it must not create,
  register, or repair the reusable asset inline. Route that work to
  `$manim:manim-asset-implementer`. Do not copy reusable geometry from another
  scene or use prose as its stand-in.
- Keep semantic colors, arrows, highlights, shapes, and motion conventions in
  registered assets or convention modules. Consumer scenes may position and
  animate assets but must not silently redefine their meaning.
- Separate color roles from color values. In a theme-capable project, obtain
  canvas, foreground, muted foreground, surface, border, inverse-text, and
  semantic accent colors from the active registered palette. Do not use
  `WHITE`, `BLACK`, or a hex literal as a proxy for foreground or background.
  Literal colors remain valid when the actual color carries physical or source
  meaning, but record that exception instead of allowing global inversion.
- Treat scale, orientation, dataset, density, or label-text changes as builder
  parameters or registered variants unless a semantic invariant changes.
- Prefer `MathTex` for equations and `Text` for short labels. Two `Text()`
  gotchas are cheap to check before the first render: sentence-length `Text()`
  captions (roughly 4+ words) built below ~24pt `font_size` can show
  irregular inter-letter spacing at this project's preview render quality —
  a font-hinting artifact of the default font at small sizes, not fixed by
  `disable_ligatures=True` alone; and a math comparator (`>=`, `<=`) should
  never be written as literal ASCII inside `Text(...)` — use `MathTex` with
  `\ge`/`\le` instead. See `$manim:manim-visual-review`'s mistake catalog
  (`seed-mistake-21`, `seed-mistake-22`) for the verified detail.
- Keep source-derived equations visually prominent.
- Treat every non-TeX `Transform`, `TransformFromCopy`, and
  `ReplacementTransform` as a semantic-correspondence operation, not as a
  convenient interpolation between two finished pictures. Before using one,
  compare the complete visible semantic-part inventories and their recursive
  Mobject family structure. Manim recursively aligns unequal families: an empty
  branch can receive point Mobjects at its center, while a nonempty branch can
  be padded with faded copies of existing submobjects. An unmatched part can
  therefore grow from a group center or inherit unrelated existing geometry
  even when both endpoint frames look correct. Use a whole-object transform
  only when surviving visible parts have an explicit one-to-one meaning and
  compatible family structure.
- Separate topology changes from motion of surviving structure. Preserve or
  transform the matched parts first. Create each added part from its
  authoritative owner or attachment anchor with `Create`, `GrowFromPoint`, or
  an in-place `FadeIn` by default; remove deleted parts at their current owner
  with `Uncreate` or `FadeOut`. A detached `TransformFromCopy` is valid when the
  model explicitly defines its source-to-target correspondence. A
  relation-bearing copy or joint trajectory must additionally define its
  attachment and path. If the new part is a leg, connector, arrow, boundary,
  mark, or other relation-bearing primitive, derive its endpoints from the
  model owner and assert that its first visible geometry is attached to the
  intended anchor. When the owner itself moves, finish the owner transform
  before generating the attached part unless the model defines their joint
  trajectory.
- For duplication or splitting, keep a stable source snapshot and transform
  each copy only to its corresponding target. Do not transform a group without
  a semantic part into a group containing that part and rely on Manim's family
  padding to invent the part's origin. Inspect the first materially visible
  frame and the maximum-risk intermediate frame when it is distinct; record a
  timestamp, animation alpha, or precise beat location for each. Clean source
  and target checkpoints do not establish continuous correspondence.
- Treat an equation update as a glyph-correspondence edit, not as replacement
  of the whole rendered formula. Split `MathTex` into the smallest stable TeX
  chunks needed to express the correspondence, then use
  `TransformMatchingTex` so matched chunks move to their new positions and only
  unmatched chunks appear or disappear. For example, implement `100 -> 1000`
  as `MathTex("100") -> MathTex("100", "0")`: the existing `100` moves as one
  matched chunk and the new `0` fades in. Do not transform or dissolve the old
  `100` into a newly rendered `1000` as one unmatched object.
- When `TransformMatchingTex` cannot express the intended correspondence
  unambiguously, declare surviving, added, and removed semantic parts and route
  placement through reflow or a registered transformation helper. Introduce
  added material with `FadeIn` or `Write`, and remove deleted material with
  `FadeOut` or `Unwrite`. Use `key_map` only for a deliberate old-role to new-role mapping.
  Do not use `ReplacementTransform(old_equation, new_equation)`,
  `FadeTransform(old_equation, new_equation)`, or an undivided whole-equation
  `Transform` for a local edit merely because it is shorter to code.
- Use `assert_scene_in_frame(self)` after major layout states.
- Treat layout geometry as a high-probability failure surface. At every stable scene/page state, check alignment, unintended overlap, near-touching elements that imply false connection, label occlusion or merging, arrow/connector targets, and shifts from the previous checkpoint.
- For diagrams with a `spatial_relation_contract`, construct geometry from the
  declared relations using shared anchors, graph embeddings, analytic
  intersections, constraint solving, curve parameterization, clipping or
  boolean operations, or signed-distance and clearance constraints as
  appropriate. Independently placing objects until they look plausible does not
  establish a mathematical relation.
- Implement the contract as a reviewable construction-backed relation: instantiate the
  mathematical owner first, derive every relation-dependent mobject from that
  owner, and remove any independent placement freedom that could violate the
  claim. Do not create separately parameterized curves and then repair their
  endpoints, contact points, dimensions, or offsets into agreement.
- Keep model, topology-selector, projection, style, and layout parameters
  distinct. Relation-dependent geometry may share model and topology-selector
  parameters with its owner; projection and layout occur only after intrinsic
  construction and act on the whole related asset unless the contract proves a
  smaller transformation preserves the relation.
- For axes, plots, maps, simulations, or any visual that exposes coordinates,
  instantiate the declared owner for each rendered reference-system view first.
  Let owner-native axes, ticks, and labels arise from its configuration; generate
  external grids, data marks, curves, annotation anchors, and regions only
  through its public model-to-scene conversion. Do not duplicate its scale or
  offset in a helper, place ticks independently, or repair a dependent in scene
  coordinates after conversion. Lay out or camera-transform the complete view
  uniformly after its intrinsic geometry is fixed, and only after its semantic
  dependents share the owner. Separate panels, insets, or projections may own
  distinct registered views of the same mathematical domain. Keep unrelated
  decoration outside this contract only inside a registered decoration or
  chrome asset builder; it joins the contract if it asserts a coordinate value
  or attachment, and it never grants consumer-scene absolute-layout authority.
- Implement the visual plan's graph-aspect contract before constructing each 2D
  `Axes` or `NumberPlane`. Unless the source meaning requires distortion, derive
  one displayed axis length from the other so
  `abs((x_length / x_span) / (y_length / y_span) - 1) <= 1e-6`. Do not pick
  both lengths independently to fill a rectangular slot, and do not use
  nonuniform stretching to make the completed view fit. If the available region
  cannot contain the resulting view, change the surrounding layout, coordinate
  range, inset, or clip scope rather than changing the unit ratio.
- A non-1:1 coordinate-unit ratio is permitted only when the contract names the
  source- or approved-work-order-grounded quantity or comparison made readable
  by distortion and lists the geometric readings that cease to be literal.
  Record the required call-scoped review marker, but do not treat that marker as
  permission: a fit, aesthetics, plotting default, or available-space reason
  remains blocking.
- Assert the declared relations programmatically at representative stable
  states, including intersection count or order, tangency residual, positive
  clearance, containment, endpoint incidence, or connectivity as applicable.
- Treat those assertions as regression checks, not proof of arbitrary Python
  geometry. Record the preservation argument separately from implementation
  assurance, regression evidence, visual evidence, and proposed wording.
  Never report a relation as guaranteed merely because checks authored from the
  same assumptions as the builder pass.
- Do not fill or alter `structural_claim_review`. Record the implementation
  identity and artifact revision for a separate verifier; the implementer may
  propose claim wording but cannot approve it.
- When adding a new visible element to an existing state, do not preserve all
  prior coordinates by default. Inventory the current mobjects, protect only
  declared semantic anchors, and lay out the combined state as one composition.
  Move, rescale, regroup, or remove existing objects when that produces clearer
  spacing and hierarchy. If no existing object moves, record the reason and
  verify that the choice was deliberate rather than omitted reflow work.
- Allow a compact no-reflow path for an addition confined to a declared reserved
  slot or registered overlay/chrome region whose footprint does not change the
  argument layout or attention hierarchy. Verify those conditions rather than
  treating every small marker as a global rearrangement.
- Prefer group-level layout operations (`arrange`, `arrange_in_grid`, aligned
  containers, shared bounding boxes, or computed anchors) over attaching the new
  object to whichever local object has free space. `next_to` is a relation tool,
  not evidence that the whole frame has been recomposed.
- Use the project `manim_layout` package as the default page-composition layer.
  Build nested `Row` / `Column` / `Grid` trees, wrap them in `Page`, and call
  `apply()` or `animate_reflow()`. Express fit, alignment, distribution, gap, and
  pacing through the runtime's semantic tokens. Consumer scenes do not choose
  numeric canvas coordinates, scale factors, margins, gaps, font sizes, or
  reflow durations. Intrinsic asset geometry may use documented source, model,
  topology, projection, or tolerance parameters when the work order names their
  provenance, domain, coordinate system or units, and effect on claimed
  relations. Keep these values in their registered `builder.py` or `mobjects.py`
  module marked `# manim-asset-builder` as named parameters. Generic bare-number
  findings are review leads; unexplained
  consumer tuning and numeric submobject indices remain defects.
- Construct ordinary on-canvas text with `semantic_text(role=...)`, equations
  with `semantic_math(role=...)`, and numeric API durations with
  `duration(<pace>)`. Extend registered roles in the runtime when the project
  needs a new durable style; do not tune one scene with local numbers.
- Treat meaningful visual primitives as part of the argument. Choose direction,
  endpoints, layering, meaning, and a semantic importance role. Registered
  primitive styles map that role to numeric scale, stroke width, and head/marker
  size; consumer scenes do not tune those values.
- Keep one primary scene class per clip or composition-preview file. Focused
  asset preview classes belong to `$manim:manim-asset-implementer`.
- Do not introduce new claims, examples, or analogies unless the work order allows them.
- Do not use a technical term, symbol, color meaning, arrow meaning, region, or visual role before it is introduced in the clip or listed as a viewer prerequisite.
- Do not treat `MathTex` display as sufficient visualization for a central equation. Use grouping, highlighting, spatial correspondence, transformation, dependency arrows, source-implied diagrams, or plots to make the required visual role inspectable.
- If a central source equation is included only as authority text, keep it visually secondary and do not present it as the main visualization unless the work order marks `source_authority_only`.
- Do not satisfy a clip by calculating a numeric result off-screen and writing the answer into the scene. If numerical computation is central, animate the quantity-producing structure: changing parameters, sampled points, iterates, measured values, residuals, convergence, or curve construction.
- Precomputed arrays, constants, or tables are allowed for render speed, but the scene must expose what they mean visually. Use final numbers as labels, endpoints, or checks unless the source itself presents the number as authority.
- Prefer clear sequencing over dense simultaneous display.
- Do not make the low-quality mp4 the only durable output when the visual contains reusable parts. Require the reusable asset bundle from `$manim:manim-asset-implementer`, and keep the composed scene as a consumer of its public API.
- For simple one-off clips, `scenes/<clip_id>.py` is acceptable. Consume
  paper-specific reusable visuals from their exported asset package; do not edit
  its builder, preview, or `asset.yaml` projection as part of clip composition.
- Use `runs/<clip_id>/` for work orders, source-to-scene mappings, verification reports, and unresolved issue notes when those artifacts are created during the task.
- Consume asset exports through their existing importable package boundary. If
  an export or named semantic part is missing, route the defect to
  `$manim:manim-asset-implementer`; do not add or change the asset package here.
- Use stable, readable names for important mobjects.
- Add comments only when they help map code to the argument beats.

## Temporal Structure

Before writing dense scenes, convert the work order into beats:

- Each beat should introduce one new claim, equation group, correspondence, or visual relation.
- At first use, pair important terms and symbols with their viewer role: label-to-object, symbol-to-term, color-to-meaning, arrow-to-relation, or region-to-source concept.
- Keep a small persistent context and remove stale helpers before the next focal relation.
- Avoid starting with every required object already on screen. `must_show` means the item appears at the right point in the argument, not that it is present throughout.
- At each major beat, check the visible state with `assert_scene_in_frame(self)` and keep text readable in low-quality preview.
- Make the major beats easy to screenshot: include stable states after introductions, before and after central transformations, at numerical-process inspection points, and at the final claim.
- Leave enough separation and stable positioning for per-checkpoint geometry review; do not rely on the verifier to discover avoidable overlaps after dense layout code is written.
- Make primitive choices reviewable at stable states; avoid tiny, ambiguous, or oversized relation markers whose meaning depends on the author's memory rather than the frame.
- If a beat needs too many simultaneous focal items, split the clip or route
  reusable pieces to `$manim:manim-asset-implementer` rather than shrinking
  everything into one frame.

## Numerical Computation Discipline

- Keep an internal distinction between `computed_for_animation` and `computed_as_claim`. Values computed for animation may drive mobject positions, traces, bars, colors, or counters; values computed as claims require source/user parameters and a visible interpretation.
- For 3b1b-style real-time numerical scenes, use trackers, updaters, sampled traces, or staged data reveal so the viewer sees the computation unfold. The code may precompute values, but the presentation should read as a process, not a result dump.
- When using a plotted or simulated result, show enough structure for inspection: axes or coordinate meaning, parameter values, sampled states or curve construction, and the relationship between the visible change and the source claim.
- If the only available action is `Text("result = ...")` or a static final plot with no visual explanation of how it supports the claim, repair the requirements or visual plan before coding.

## Viewer and Definition Discipline

- Keep an internal "introduced set" while coding: source terms, symbols, colors, arrows, regions, and visual conventions that the viewer can now rely on.
- When introducing a dense equation, reveal or highlight the parts that matter for the argument before asking the viewer to follow a transformation.
- If a symbol appears in a later beat, either keep a compact legend/reference visible or reintroduce it briefly when needed.
- If the only faithful move is to show a source equation without further visualization, state that assumption in the source-to-scene mapping and leave the equation out of the central visual claim.

## Scene Structure

Use this rough structure unless there is a reason not to:

1. brief title/context
2. introduce only the definitions or source equation needed for the first beat
3. animate the central transformation, correspondence, diagram, or plot in staged states
4. highlight the conclusion with stale helpers removed or de-emphasized
5. leave or fade to a clean final state

## Output Bundle

After implementation or repair, provide:

- scene file path
- consumed asset package paths and exported builder names
- asset/convention DRY summary: concept IDs, reuse dispositions, registry
  entries, convention IDs, variants, public APIs, consumers, and one-off
  exceptions
- class name
- scene class names and whether each preview is a standalone clip or composition preview
- source-to-scene mapping summary
- viewer/term introduction summary and any prerequisites assumed
- visualization obligation summary: which obligations were satisfied visually and which remain source-authority-only
- numerical computation summary: source basis, parameters, visible process, precomputed parts, and whether any final values are only labels/checks
- screenshot checkpoint summary: which stable frames or mp4 segments should be inspected, the risk each one tests, and any frame paths if screenshots were produced
- theme summary: supported themes, palette used, literal-color exceptions, and
  rendered checkpoint evidence for every theme claimed by the artifact
- geometry audit summary: per scene/page checkpoint status for alignment, overlap, occlusion, false connections, connector targets, and layout shifts
- spatial-relation verification summary when applicable: construction method,
  mathematical owners, derivations, degree-of-freedom audit, preservation
  argument, animation closure, per-claim guarantee records, tolerances or error
  bounds, proposed wording, and assertion results; leave the reviewer-owned
  structural-claim decision pending
- reference-system summary when applicable: one owner per rendered coordinate
  view, owner-native components, external semantic dependents and conversion
  API, allowed whole-view transforms, coordinate checks, and unresolved
  independent scene-space freedom
- graph-aspect summary for every 2D coordinate view: ranges, displayed lengths,
  computed coordinate-unit ratio, whether geometric readings are literal, any
  accepted distortion basis, and confirmation that later fitting was uniform
- guarantee-integrity summary: claims narrowed or withheld because their
  construction basis, implementation assurance, domain, assumptions, or error
  bound did not justify stronger wording
- visual primitive audit summary: direction, endpoint/target, registered
  importance role, rendered-weight result, layering, and semantic consistency
- assumptions made
- verification command, usually `./render.sh <scene_file> <ClassName> -q l`

## Repair Rules

- If render fails, fix the concrete Python or LaTeX error first.
- If frame check fails, adjust layout before changing content.
- If geometry audit fails on any scene/page checkpoint, repair layout before changing pacing or adding new explanatory text.
- If a spatial-relation assertion fails or is absent, repair the construction
  before adjusting appearance.
- If assertions pass but the relation still depends on independently authored
  geometry, discard that construction and rebuild from a shared owner. Do not
  add more samples, tolerances, named constants, or screenshot comparisons and
  present them as a guarantee.
- If ticks, grids, data, or annotations use a projection separate from their
  coordinate-system owner, rebuild them through the owner's conversion API.
  Do not fix the rendered discrepancy with a compensating shift, scale, or
  sampling choice selected only to appear aligned.
- If an addition creates overlap, edge crowding, a large accidental void, or an
  unbalanced focal hierarchy, rerun layout on the combined object set. Do not
  repair only the new object while keeping unjustified legacy positions fixed.
- If a visual primitive points the wrong way, targets the wrong object, dominates by scale, hides content, or contradicts its legend/prior use, repair the primitive before changing the surrounding explanation.
- If fidelity fails, remove or mark unsupported content before polishing visuals.
- If terms, symbols, colors, arrows, or regions are used before introduction, repair the viewer contract or add an introduction beat before changing aesthetics.
- If a scene only displays a central equation without making any relation, grouping, transformation, or dependency visually inspectable, repair the visual plan before polishing timing.
- If a scene only displays a numerical answer, static result table, or final plot without an inspectable process or visual mapping, repair the numerical visual contract before polishing timing.
- If a local equation edit dissolves, redraws, or morphs glyphs that should
  visually survive the edit, split the TeX correspondence and repair the
  animation before adjusting timing. Verify the rendered transition, not only
  the final equation.
- If a screenshot review finds no issues but does not state which concrete failure modes were attacked, repeat the review with explicit adversarial questions before accepting the render.
- If the clip is too dense, split scope, stage the reveal, or route reusable
  visual parts to `$manim:manim-asset-implementer`. Do not solve density only by
  shrinking text.
- If the output is a single mp4 with no reusable code or mapping even though the
  work order names reusable parts, route the missing asset bundle to
  `$manim:manim-asset-implementer` before polishing animation timing.
- If a scene duplicates an existing semantic asset, hard-codes a registered
  convention, forks a builder for a surface-only difference, or accesses asset
  internals through numeric indices, route asset repair to
  `$manim:manim-asset-implementer` before accepting the render.
- If a supported theme changes only the canvas while foreground, fills, borders,
  inverse labels, or semantic accents remain hard-coded, repair the palette-role
  mapping before tuning individual colors. Verify every claimed theme from
  rendered checkpoints; a successful render in one theme proves nothing about
  contrast in another.
