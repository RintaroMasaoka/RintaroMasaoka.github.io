# Manim Review Checklist

Read this checklist before implementation and again before accepting the source
preflight. It supplements scripts; items that require semantic judgment remain
human/agent checks.

## TeX and Typography

- Use `MathTex` or `Tex` for mathematical content; do not put formulas,
  comparators, indices, or TeX commands in `Text`.
- In math mode, decide what every alphabetic token denotes:
  - keep mathematical variables and variable indices italic: `x`, `L`, `p_i`;
  - write fixed labels, abbreviations, and units upright with `\mathrm{...}`:
    `p_{\mathrm{eq}}`, `H_{\mathrm{loc}}`, `N_{\mathrm{eff}}`,
    `10\,\mathrm{MeV}`;
  - use `\operatorname{...}` for a custom operator and the standard TeX command
    when one exists: `\operatorname{supp}`, `\sin`, `\log`, `\max`;
  - use `\text{...}` for ordinary words or clauses inside a formula.
- Inspect likely fixed-label vocabulary such as `eq`, `eff`, `loc`, `max`,
  `min`, `in`, `out`, `init`, and `final`. Do not convert from the word list
  mechanically; decide whether the token is a fixed semantic label or a
  mathematical variable in this formula.
- Check multi-letter subscripts, superscripts, parenthesized words, state names,
  phase names, algorithm names, boundary labels, and units for accidental math
  italics.
- Do not use `\mathrm` to hide prose. Use `\text` for prose and reconsider
  whether the prose belongs on the canvas at all.

## Equation Animation

- Segment `MathTex` at the correspondence boundaries needed by the animation.
- Preserve matched glyph chunks with `TransformMatchingTex` or explicit motion.
- Introduce only added chunks with `FadeIn`/`Write`; remove only deleted chunks
  with `FadeOut`/`Unwrite`.
- Do not dissolve or replace an undivided equation for a local edit.

## Animation Concurrency

- Treat three or more top-level animations in one `self.play()` as an attention-
  sequencing warning. Ask whether they express one correspondence or several
  independent audience events.
- Stage independent events with separate `play()` calls or `LaggedStart` with a
  visible positive `lag_ratio`; do not use simultaneity merely to shorten runtime.
- An `AnimationGroup` with three or more members and zero/default `lag_ratio`, or
  a star-expanded animation list of unknown length, requires the same review.
- Keep genuinely relational simultaneity together, such as matched objects moving
  as one comparison. Put `# manim-review: intentional-simultaneous` immediately
  above that call and record the single relation the concurrency expresses.
- Even with only two animations, do not reveal sentence-length `Text` and a new
  diagram in the same `play()`: that creates competing reading and inspection
  targets. Sequence them unless their simultaneity itself expresses one relation.
- Warn on audience-facing appearance or transformation with literal
  `run_time < 0.35`. Fast cleanup-only disappearance is exempt. For a genuinely
  quick event, put `# manim-review: intentional-quick` immediately above it and
  record why temporal brevity is part of the meaning.

## Visual and Asset Discipline

- Reuse registered assets and semantic conventions before creating local
  builders, colors, arrows, highlights, or page-number code.
- Access reusable semantic parts by names or coordinate-aware methods, not
  numeric submobject indices.
- Treat long on-canvas prose as a visualization warning, not as explanatory
  completion.
- For every `Axes` or `NumberPlane`, verify coordinate-unit scale rather than
  comparing raw canvas lengths:
  `abs((x_length/x_span)/(y_length/y_span) - 1) <= 1e-6`. Require literal ranges
  and lengths when possible so preflight can calculate it. A parameterized exact
  ratio uses `# manim-review: runtime-unit-aspect <assertion/check id>` directly
  above the constructor and records that same tolerance and check in the view
  contract; preflight keeps it as a review lead rather than pretending it is
  non-unit.
- A non-1:1 graph needs a call-scoped comment immediately above the constructor:
  `# manim-review: nonunit-graph-aspect <semantic reason>`. The reason must name
  what the distortion makes inspectable and what geometric reading is forfeited;
  layout convenience or a Python plotting default is insufficient.
- Treat that comment as an exception-review trigger, not a waiver. Recompute
  `(x_length / x_span) / (y_length / y_span)` from the owner configuration or
  rendered view. Page fit, rectangular-slot fill, aesthetics, and plotting
  defaults cannot justify a non-1:1 result; repair the surrounding layout,
  ranges, inset, or scope. Confirm that subsequent fitting scales the complete
  coordinate view uniformly.
- Treat each coordinate-bearing panel, inset, or projection as one owned
  reference-system view. Confirm that native axes, ticks, and labels share the
  owner's configuration, then trace external grids, data marks, curves,
  annotation anchors, and regions through that view's public model-to-scene
  conversion. A matching numeric scale is insufficient if any dependent also
  carries a separately authored scene offset, projection, tick position, or
  later repair. Multiple views of one mathematical domain are allowed when each
  has its own contract.
- Probe representative mathematical coincidences in code at declared sample
  coordinates: a labeled data point must equal the owner's conversion of that
  value and x/y unit vectors must have the declared aspect. When integer
  grid/tick alignment is claimed, also require the integer grid line to meet the
  corresponding native tick. Inspect those locations in the render as
  regression evidence, not as the construction basis.

## Layout Revision on Addition

- Treat a new element as a change to the whole layout, not an append operation.
- Classify existing objects as `anchored`, `movable`, `rescalable`, or
  `removable`. Require a semantic reason for every anchor.
- For additions that materially change footprint, attention hierarchy, or
  semantic grouping, consider at least one combined-layout alternative that
  moves or regroups an existing object. If the old positions remain, record why
  that alternative was rejected.
- Use a compact no-reflow decision for reserved slots, registered overlays/page
  chrome, or minor markers only when they remain inside their declared region
  and do not change the main composition.
- Check both failure directions: collision/crowding and accidental empty space.
- Re-evaluate attention hierarchy, connector length, edge distance, alignment,
  and negative-space balance after the addition.
- Do not accept `new.next_to(old)` as proof that reflow was considered.
- Repair the combined composition, not only the newly added object.
- Require the preceding rendered state or continuous segment as evidence; a
  final frame alone cannot establish that reflow was considered.
- Use `manim_layout` nested `Row` / `Column` / `Grid` as the default consumer
  composition. Treat `absolute-consumer-layout` as a required exception review;
  numeric coordinates belong only to intrinsic asset geometry, plots, graphs,
  circuits, or faithful source-figure reconstruction.
- Express logical roles at the layout-tree level: use `Row(left_role,
  right_role)` for horizontal argument structure and `Column(...,
  align="start|center|end")` for alignment inside one logical box. Do not encode
  those relations as repeated shifts or individual coordinates.
- Numeric `shift`, `move_to`, `set_x`, `set_y`, `set_z`, or `set_coord` requires
  `# manim-layout: allow-absolute reference-system=<id> <reason>` immediately above
  that call. The reason must name the stronger coordinate system—plot axes,
  source-figure coordinates, diagram topology, circuit geometry, or registered
  chrome. A bare marker, visual convenience, or leftover space does not count.
- `.manim-reference-systems.json` is only a derived lint index of canonical
  `reference_system_contracts` in the asset registry or one-off work order.
  Each entry must bind its ID to a project-relative canonical path and contract
  revision. Preflight resolves exactly one complete matching contract; reject
  bare IDs, stale revisions, escaping paths, missing fields, duplicated matches,
  or contradictory entries before acceptance.
- Record accepted numeric-position reasons in preflight output and have the
  reviewer inspect them. An exception is evidence to review, not silent lint
  suppression.
- Numeric consumer `scale`, `scale_to_fit_*`, `set_width`, `set_height`, and
  `font_size` bypass the same authority boundary. Use semantic Page fit and
  registered typography roles; reserve `manim-layout: allow-size reference-system=<id>` for a named
  intrinsic reference system.
- Interpret DRY findings by class: `similar-component-segments` and
  `similar-builder-candidates` ask whether one registered builder or parameter
  should connect the copies; `already-connected-continuation` records a verified
  data dependency from the preceding segment. Generic `play` / `wait` /
  `next_slide` / frame-check scaffolding alone is not a DRY finding.

## Page Cleanup

- Do not treat `VGroup(*self.mobjects)` or a page group created earlier as a
  reliable inventory of the objects currently owned by the scene. Transforms,
  copies, later annotations, and updaters can change that inventory.
- Before the visible page exit, remove stale transform sources, hidden originals,
  obsolete copies, and inactive updater-owned objects without animation. Then
  fade only the component that is presently meant to be visible.
- Do not fade overlapping current and stale versions together. As the upper
  object becomes transparent, the stale object underneath can flash visibly.
- Avoid mixing page-wide `FadeOut` and target-producing transforms such as
  `TransformMatchingTex`, `ReplacementTransform`, or `FadeTransform` in the same
  `play()`. Animation cleanup can add a target after the fade target set was
  captured.
- Clear updaters before removing an `always_redraw` or updater-controlled object.
- Inspect the final fade and the page boundary in motion. A clean final frame
  does not rule out a one-frame flash during cleanup.
- After cleanup, check `self.mobjects` against an explicit allowlist of intended
  persistent objects. Treat unexpected residual objects as a lifecycle defect.

## Review Evidence

- Run `review_preflight.py`; treat its warnings as leads, not verdicts.
- At each stable checkpoint, call `assert_no_component_overlap` on a named map
  of semantic components. Group intentional internal overlays into one component
  or allow the exact pair explicitly; never silence the gate file-wide.
- Treat bounding-box intersections as coarse risk signals. Rotated, hollow,
  curved, or sparse objects can produce false positives, while near-touching and
  transient animation collisions can escape a checkpoint-only test.
- Review the continuous rendered scene first and escalate only fine-scale risks
  to full-resolution frames or crops.
- Reconcile every checkpoint landing and incoming transition with the manifest-
  bound coverage map. Do not use screenshot count as evidence of coverage.
