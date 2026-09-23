---
name: manim-visual-planner
description: "Plan faithful visuals for Manim argument clips, including diagrams, correspondence views, equation role mapping, term/symbol introduction, plots, numerical visualizations, highlights, layout, and screen-density guidance. Use when a source argument needs visual representation before code implementation, or when a rendered clip is visually unclear."
---

# Manim Visual Planner

Use this skill to design source-grounded viewer-state transitions for Manim argument clips, not merely to map source content into visible objects. A visual or transition is allowed when it is source-derived, source-implied, or explicitly requested by the user.

When a visual asserts a spatial or topological relation or exposes coordinates
or a data-to-position mapping, read
`../manim-asset-system/references/guarantee-integrity-contract.md` before
planning the geometry.

The planner's job is to help the viewer follow why each visual state follows from the previous one. Do not invent explanatory metaphors, examples, claims, or pedagogical stories that are not supported by the source. When the source argument skips an intermediate relation that the video needs, add the smallest source-grounded visual bridge or flag the missing basis.

## Visual Categories

Classify the clip need:

- `equation_focus`: sequence, grouping, term highlight, transformation.
- `term_symbol_introduction`: define or visually anchor source terms, symbols, operators, regions, arrows, colors, or visual roles before they are used.
- `correspondence`: left/right mapping, arrows, color-paired terms.
- `dependency`: claim depends on assumptions, definitions, equations.
- `diagram`: geometric or structural object from source.
- `plot`: numerical or analytic curve/surface from supplied formula and parameters.
- `comparison`: before/after, case split, limiting regimes.
- `layout_repair`: existing scene is overcrowded, off-frame, or unreadable.
- `asset_extraction`: a reusable diagram, formula block, plot, or visual state should be separated from a composed scene.

## Planning Rules

- Consume the approved reconstructed model, not raw user phrasing, when choosing
  visual objects and relations. Do not turn a vivid user metaphor or compressed
  diagnosis into a diagram merely because its words are easy to draw.
- For every user-derived visible label, record whether it is a required exact
  term or only provisional language. If provisional, derive the visual from the
  reconstructed referents and relation first; choose or omit the label second.
- Reject a plan whose only evidence of understanding is that its object names,
  section names, or captions repeat the user's vocabulary.
- Keep source equations visible when they are the authority for the visual.
- Prefer direct representation over analogy.
- Use color as semantics, not decoration.
- Before adding a visible word label for a requested or source-required element, run a visual-expression gate:
  - classify the element's role: definition, dynamic mechanism, measurement condition, theorem assumption, source correspondence, citation, caveat, or navigation cue
  - ask whether the element can be expressed more compactly through shape, position, motion, state change, grouping, color semantics, or a source-derived object
  - place the element only in the slide layer where it changes the viewer's interpretation
  - if the element is not part of the definition, do not attach it to the definition diagram merely because the user asked to make it explicit
  - keep the word label when it names a new term, prevents ambiguity, carries a math/physics condition, cites a source, or would otherwise be hard to infer from the visual
- Treat viewer comprehension as a state that changes during the clip. Track which terms, symbols, colors, and visual roles are introduced before they are used.
- An equation on screen is not yet a visualization. For each central equation, identify which grouping, dependency, transformation, correspondence, or geometric/plot structure the viewer should be able to inspect.
- If a central equation cannot be visualized faithfully from source, mark it as `source_authority_only` or route to `$manim:argument-clip-requirements` instead of pretending that text display is enough.
- Avoid more than 3 simultaneous highlight meanings.
- Keep persistent objects intentional; remove stale objects before the screen becomes dense.
- Prefer one central visual idea per clip.
- Plan reveal order as screen states, not just final layout. A readable final frame is not enough if the animation dumps all objects at once.
- Before each nontrivial change, identify what the viewer is expected to know, what they are attending to, and what must remain visually traceable.
- Preserve visual anchors across transformations when losing them would make the change look unmotivated.
- Treat every requested addition as a new whole-frame layout problem, not as an
  instruction to place one more object in leftover space. Before placing it,
  classify existing objects as `anchored`, `movable`, `rescalable`, or
  `removable`. Justify anchors by a meaningful reference system: semantic
  continuity or comparison, coordinate frames and axes, diagram topology,
  registered deck chrome, navigation, or an established spatial encoding.
  Recompute grouping, balance, spacing, and attention hierarchy for
  the combined state. Record why any existing position remains unchanged.
- Reject append-only plans in which a new object is attached with `next_to`, an
  edge placement, or a residual-space coordinate while the existing composition
  is treated as immutable. The addition must trigger an explicit reflow decision,
  even when the decision is ultimately to preserve the old layout.
- Apply the full reflow record when an addition materially changes layout
  footprint, attention hierarchy, or semantic grouping. A reserved slot,
  registered overlay region, page number, or minor marker may use a compact
  no-reflow decision when it stays inside its declared region and does not alter
  those properties.
- Express ordinary page composition as a nested `manim_layout.Row`, `Column`, or
  `Grid` tree. Plan hierarchy, ordering, alignment, and semantic gaps; do not plan
  numeric canvas coordinates, scale factors, margins, gap values, or font sizes.
  Choose semantic `fit`, alignment, distribution, gap, and anchor roles and let
  the registered runtime and style policy resolve their numeric values. Mark only
  intrinsic asset geometry, plots, graphs, circuits, and faithful source figures
  as coordinate-owning exceptions.
- Encode left/right roles as `Row(left_role, right_role)` at the logical layer.
  Inside one conceptual box, encode common alignment once on its `Column` or
  `Grid`; do not align each child through separate movement calls. The layout
  tree should remain readable as the argument's grouping structure.
- For every coordinate-owning exception, name the stronger reference system
  that declarative layout would destroy. “It looked better at this coordinate”
  is not a reference system.
- Before planning axes, ticks, grids, data marks, curves, annotations, or regions,
  define one `reference_system_contract` per rendered panel, inset, or
  projection. Name the view's mathematical domain and single owner; separate
  owner-native axes/ticks/labels from external dependents that must use the
  owner's public model-to-scene conversion. Multiple registered views may share
  one domain. Plan page layout and camera changes only as whole-view transforms
  after this ownership is fixed.
- For every equation transition, specify the TeX correspondence: chunks that
  survive and move, chunks that appear, chunks that disappear, and chunks whose
  mathematical role genuinely changes. A local edit must not be planned as a
  whole-equation dissolve. Example: `100 -> 1000` preserves and repositions the
  `100` chunk and introduces only the final `0`.
- Change one primary relation at a time unless the source explicitly requires a simultaneous comparison.
- Identify reusable visual parts that should become named assets instead of being embedded only in one scene class.
- Before designing a new surface, use `$manim:manim-asset-system` to assign concept
  identities and inspect the project asset and convention registries. Treat
  scale, orientation, density, labels, and local layout as possible parameters,
  not automatic reasons for a new visual method.
- Reuse registered semantic conventions for colors, shapes, primitives, labels,
  and motion. If the same meaning needs a different surface, declare a variant
  and state which semantics remain invariant.
- For numerical visuals, state parameters and source basis. If parameters are missing, ask or flag.
- Mark screenshot checkpoints while planning: the frame that first makes a convention usable, the densest frame in each beat, frames before and after important transformations, numerical-process frames, and the final claim frame.
- For each checkpoint, name the likely failure mode a hostile reviewer should try to prove: visual ambiguity, unsupported source leap, unreadable text, clipped layout, stale-object distraction, weak correspondence, or result-only numerical display.
- Treat geometry failure as likely in every scene/page. For each planned checkpoint, include a geometry-audit target: alignment, spacing, unintended overlap, near-touching elements that falsely read as connected, labels merging or occluding objects, arrow/line endpoints, brace/highlight coverage, and layout shifts from the previous checkpoint.
- When a mathematical diagram depends on incidence or attachment, containment, intersection,
  tangency, closure, connectivity, equality or shared identity, shared origin,
  on-surface membership, separation or clearance, or crossing order, define a
  `spatial_relation_contract` before choosing coordinates. Plan a constructive
  method that preserves those relations; free placement followed by visual
  cleanup is not a construction method.
- For that contract, identify one mathematical owner for each relation and
  derive dependent objects from it. Audit degrees of freedom before planning
  coordinates: if a related object could move, resize, or change endpoints
  independently while the owner remains fixed, the plan has not encoded the
  relation. Remove that freedom by restriction, shared incidence, boundary,
  intersection, transformed copy, or an actual constraint solve.
- Give each claimed relation a guarantee record from the guarantee-integrity
  contract: claim domain and assumptions, exact or approximate status and any
  error bound, construction basis, implementation assurance, regression and
  visual evidence, and proposed wording. Mark whether artifact acceptance
  depends on the claim; do not infer one axis from another or pre-approve the
  reviewer-owned structural-claim decision.
- Treat visual primitives as semantic objects, not decoration. For every arrow,
  connector, line, brace, highlight, marker, axis, legend item, or motion path,
  plan direction, endpoints, layering, semantic importance role, and relation to
  any legend or prior convention. Registered styles own numeric scale and
  stroke/head/marker sizing. The audit checks whether rendered weight matches
  the declared role.

## Numerical Visualization Rules

- Default every 2D `Axes` or `NumberPlane` to equal coordinate-unit scale, not
  equal canvas lengths: require
  `abs((x_length / x_span) / (y_length / y_span) - 1) <= 1e-6`. Data ranges
  choose coordinates; they do not silently choose the visible rectangle or
  slope.
- Resolve that equality before page fitting: choose one axis length from the
  available layout region, derive the other from the two coordinate spans, and
  fit or transform the completed coordinate view uniformly. Do not choose
  `x_length` and `y_length` independently from the leftover width and height;
  that turns a page-layout constraint into a false geometric claim.
- When a plot intentionally uses non-1:1 unit scale, state the semantic reason in
  the visual contract: which source- or approved-work-order-grounded variation,
  comparison, or readable feature the distortion exposes, and which geometric
  readings (slope, angle, distance, isotropy) are no longer literal. “Python
  chose it,” “fits the page,” or an inherited plotting default is not a semantic
  reason. A declared reason is not self-validating: if the intended reading
  still depends on literal geometry, keep 1:1 and change the surrounding layout,
  range, inset, or clip scope.
- A number appearing on screen is not a numerical visualization. Plan what changes over time or across parameter values: sample points, iterates, measured quantities, bar/line movement, curve construction, residual shrinkage, convergence trace, stochastic accumulation, or another source-grounded visual encoding.
- Keep 3b1b-style real-time computation allowed when the screen shows the computation as an inspectable process. The important distinction is not whether values are computed live in Python; it is whether the viewer sees the value-producing structure rather than only the final answer.
- If data or values must be precomputed for render speed, plan the visible process that replays or exposes them: axes and units, input parameters, update rule, sampled states, interpolation path, or endpoint check.
- Use final numeric values only as labels, checkpoints, or endpoints unless the work order explicitly makes them source authority. They do not replace the visual obligation to show the relationship, trend, convergence, or measurement.
- If the only available basis is "the agent calculated this number", route to `$manim:argument-clip-requirements` or `$manim:manim-math-derivation`. Do not plan a result-only scene.

## Viewer-State Planning

For each planned beat, track:

- `viewer_state_before`: what the viewer can reasonably know or recognize at this moment.
- `beat_purpose`: the specific understanding, correspondence, or attention shift this beat should create.
- `attention_path`: where the viewer's eye should move from and to.
- `must_persist`: equations, labels, anchors, colors, or spatial relations that must remain visible or traceable.
- `new_information`: the single main object, relation, transformation, or conclusion introduced by the beat.
- `transition_risk`: what would feel abrupt, overloaded, or visually unearned if animated directly.
- `missing_visual_bridge`: the smallest intermediate relation needed when the source step is too compressed for video.

Do not fill these fields with generic advice. If a field does not constrain the Manim implementer, omit it or mark the gap explicitly.

## Output

Return a visual plan with:

- visual category
- source basis
- beat sequence with viewer-state transitions
- viewer anchors: terms, symbols, colors, arrows, and visual roles that must be introduced before use
- visual-expression gate: which requested/source-required elements were encoded visually, which remain as labels, and why
- equation visual roles: for each central equation, what is represented visually beyond text display
- numerical visual contract: parameters, computed quantity, visible process, visual encoding, and which values may appear only as labels
- graph aspect contract: x/y ranges and lengths, computed coordinate-unit ratio,
  whether slopes/angles/distances must be literal, and the semantic reason for
  any non-1:1 ratio
- reference-system contracts: one record per rendered coordinate view with its
  view instance, mathematical domain, owner, owner-native components, external
  semantic dependents, conversion API, allowed whole-view transforms, and
  coordinate/regression checks
- screenshot checkpoints: frames or mp4 segments to inspect, why each is risky, and what would force repair
- geometry audit targets for every scene/page checkpoint
- spatial-relation contract when applicable: required pairwise relations,
  counts or order, mathematical owners, derived objects, degree-of-freedom
  audit, preservation argument, animation closure, per-claim guarantee record,
  tolerances or error bounds, proposed wording, claim criticality, and
  programmatic regression
  checks
- visual primitive audit: direction, endpoint/target, semantic importance role,
  rendered-weight expectation, layering, and semantic consistency for meaningful
  arrows, connectors, braces, highlights, markers, axes, legends, or motion paths
- asset extraction recommendation: none, or proposed `asset_id` with reusable builder names
- asset/convention reuse record: concept IDs, registry candidates, reuse
  disposition, selected builders, convention IDs, and declared variants
- objects to show, at the level of roles rather than exact Manim code
- temporal states: what appears, persists, fades, or transforms in each beat
- layout guidance
- layout intent: `contain|fill`, horizontal and vertical alignment, row/column/grid
  distribution, semantic gap role, anchors, and intrinsic-geometry exceptions
- layout-revision record for every added element: existing-object mobility
  classes, anchors and reasons, reflow candidates considered, chosen combined
  layout, and before/after overlap and whitespace risks
- highlight semantics
- density/readability risks
- what the Manim implementer may choose freely

## Layout Guidance

Use this guidance unless the project or user gives stronger constraints:

- 16:9 frame.
- Main equation or diagram occupies the center.
- Title/context is short and at the top.
- Auxiliary definitions belong near the bottom or side.
- Math text should stay comfortably readable at low-quality preview.
- Do not rely on tiny labels for essential content.
- Do not put every must-show object on the screen at once. If all must-show items are needed for review, use staged states or separate asset previews.
- Labels are not sufficient for first use of a term or symbol unless the viewer baseline already includes it. Pair first use with a role, grouping, color meaning, spatial anchor, or source equation part.

## Repair Review

For an existing preview, report:

- off-frame or near-edge content
- misaligned objects, unintended overlap, false visual connections from near-touching elements, labels merging into one word, or visual primitives pointing to, emphasizing, scaling, or layering against the intended relation
- text too small
- clutter or conflicting focal points
- highlights with unclear meaning
- equivalent concepts rendered through inconsistent or unregistered visual
  conventions, including surface-only variations incorrectly treated as new
  semantic methods
- transformations that are visually hard to follow
- equation edits whose unchanged glyphs dissolve or are regenerated because
  the implementation transformed the undivided equation instead of matching
  stable TeX chunks
- numerical values shown without a visible process, parameter dependence, measurement, or convergence structure
- abrupt changes where the viewer lacks the prior state, visual anchor, or bridge needed to follow the transition
- objects, labels, or colors that disappear before their role in the argument is complete
- checkpoint frames that must be re-inspected after repair; do not treat a new render as accepted until those frames have repair/no-repair decisions
- whether repair should change layout, pacing, or source scope
