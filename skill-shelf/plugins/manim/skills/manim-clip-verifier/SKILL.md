---
name: manim-clip-verifier
description: "Verify Manim argument clips and reusable asset bundles in this project. Use after creating or repairing a clip or asset to run or plan low-quality rendering, frame checks, bundle checks, source-content checks, viewer-definition checks, visualization-obligation checks, temporal readability review, fidelity review, and issue routing back to the right worker."
---

# Manim Clip Verifier

Use this skill after each Manim implementation pass. Verification has two layers: mechanical checks and judgment checks.

When an artifact claims a spatial or topological guarantee or exposes
coordinates or a data-to-position mapping, read
`../manim-asset-system/references/guarantee-integrity-contract.md` before
review and apply its per-claim guarantee records and self-certification guard.

Read `references/manim-review-checklist.md` before implementation review and
again before acceptance. The checklist owns semantic typography decisions such
as whether a token is a variable, fixed `\mathrm` label, operator, or prose;
do not force those decisions into a vocabulary-only script heuristic.

## Mechanical Checks

Run or request:

- Python import or Manim render through `./render.sh`
- low-quality render first: `./render.sh <scene_file> <ClassName> -q l`
- `assert_scene_in_frame` coverage in the scene code
- `assert_no_component_overlap({...})` at stable checkpoint landings, using a
  named mapping of logical components. This render-free gate reads live Manim
  Mobject bounds; do not pass glyphs or every submobject, and exempt deliberate
  overlays only as explicit component pairs.
- LaTeX compile success
- required source strings or equations present in the scene code where feasible
- expected bundle files exist when named by the work order: work order,
  source-to-scene mapping, verification report, asset `asset.yaml`, builder or
  `mobjects.py`, package exports, and preview scene
- reusable paper-specific assets live under `paper_assets/<paper_id>/<asset_id>/` when the work order calls for asset reuse
- for every required asset, validate a post-implementation acceptance record
  bound to `artifact_revision`, `implementer_id`, and `verifier_id`; independently
  confirm public API import, registry projection, preview render/checkpoint paths,
  and required check results before setting verifier-owned status to `implemented`
- required terms, symbols, and visualization obligations from the work order appear in the source-to-scene mapping or verification report when those files exist
- numerical visual contract appears in the work order, source-to-scene mapping, or verification report when numerical values, plots, simulations, sampled data, or computed examples are central
- visual-inspection plan exists for nontrivial clips; it identifies the
  continuous mp4/scene segment used for coverage and the risk signals that
  trigger a full-resolution still
- geometry and visual-primitive audits are recorded for every risk-selected
  checkpoint or segment; unselected checkpoints are covered by the continuous
  pass and a recorded selection decision, not individual screenshots
- diagrams with a `spatial_relation_contract` include executable or
  independently recomputed checks for every required relation
- coordinate-bearing assets or one-off work orders include entries in
  `reference_system_contracts`; verify that owner-native axes, ticks, and labels
  share the owner's configuration and that external grids, data marks, curves,
  annotation anchors, and regions reach scene coordinates through that view's
  single declared conversion, with no duplicate projection or post-conversion
  repair
- every 2D `Axes` or `NumberPlane` has a graph-aspect record and measured
  coordinate-unit ratio. Accept 1:1 by default when
  `abs((x_unit / y_unit) - 1) <= 1e-6`. For a non-1:1 ratio, require both a
  source- or approved-work-order-grounded distortion purpose and an explicit
  list of geometric readings that are no longer literal; fitting the page,
  filling a rectangular slot, aesthetics, or a library default is blocking even
  when a call-scoped marker is present. Verify that later layout transforms the
  complete view uniformly rather than changing its x/y ratio.
- the contract also includes mathematical owners, derivations, a
  degree-of-freedom audit, preservation arguments, animation closure, and a
  guarantee record for every claimed relation; executable checks alone are not
  a construction record
- ordinary page composition uses the registered declarative layout runtime;
  numeric consumer scale and sizing calls require a local intrinsic-geometry
  justification and are otherwise review leads

In the commands below, set `MANIM_PACKAGE_ROOT` to the absolute root of the
active Manim package, the directory containing `.codex-plugin/plugin.json`.
The bundled `skills/manim-clip-verifier/scripts/verify_clip.py` performs
lightweight static checks and can optionally invoke `render.sh`.

Run the coarse review preflight before expensive visual inspection:

```bash
python3 "$MANIM_PACKAGE_ROOT/skills/manim-clip-verifier/scripts/review_preflight.py" \
  path/to/scene.py paper_assets/<paper>/<asset>/builder.py \
  --manifest runs/<task>/checkpoint_manifest.json \
  --coverage runs/<task>/visual_coverage.json \
  --reference-contracts runs/<task>/work_order.json \
  --numeric-dispositions runs/<task>/numeric_dispositions.json \
  --json-out runs/<task>/review_preflight.json
```

Treat coverage errors as blocking. Treat source warnings as review leads, not
proof of a defect. Pass every consumer scene and every intrinsic asset builder
it imports; the preflight does not discover builders automatically. The script flags undivided equation transforms, math-like
content sent to `Text`/`MarkupText`, long on-canvas prose, raw color literals,
scene-local page numbering, and likely numeric access to semantic subparts.
A reference-system exception passes preflight only when its index entry provides
a project-relative canonical path and revision that resolve to exactly one
complete matching contract in an asset registry or one-off work order. Bare or
stale `.manim-reference-systems.json` IDs remain blocking; the index never
supplies contract authority by itself.
`--reference-contracts` checks required fields and enforces unique
`reference_system_id` and `view_instance_id` ownership. This structural gate
does not prove that arbitrary Python dependents actually use the declared
conversion API; inspect that construction path and its regression evidence
separately.
The preflight's non-1:1 graph marker proves only that the exception was surfaced
for review. It does not validate the stated reason. Recompute the unit ratio from
the rendered view or owner configuration and reject layout-driven distortion or
any exception whose intended reading still relies on literal slope, angle,
distance, or isotropy.
It also flags consumer sizing that bypasses semantic fit/alignment and runtime
reflow. Consumer scenes do not carry intrinsic-geometry exceptions; move that
construction into a marked asset builder.
Generic numeric literals produce review leads. Context-specific unexplained
visual tuning in consumer scale, layout, typography, style, or timing remains
blocking. Source data, model parameters, topology selectors, projection
parameters, and numerical tolerances are allowed when the owning asset records
their meaning, role, owner, provenance, domain, units or coordinate system, and
effect on claimed relations. A documented top-level `manim-parameter`
declaration in a registered `paper_assets` `builder.py` or `mobjects.py` module
marked `manim-asset-builder` supplies that trace for intrinsic geometry;
detection alone does not decide whether the parameter is legitimate. A scene or
preview cannot acquire builder authority from a source comment.
For acceptance, `numeric_dispositions.json` has `schema_version: 1`, distinct
`reviewer_id` and `implementer_id`, the reviewed `artifact_revision`, and one
entry per numeric warning containing the exact `path`, `line`, `code`,
`classification` (`source|model|topology_selector|projection|tolerance|style|layout|tuning`), `basis`,
`owner`, and `relation_effect`. Missing dispositions and values classified as
unexplained tuning are blocking. The script does not infer legitimacy from the
number itself. The disposition reviewer uses a fresh context for
relation-affecting values; the identity fields make the handoff auditable but do
not prove independence.
It also warns about blanket scene fade-outs and fade/transform combinations whose
cleanup order can expose or re-add stale objects at a page boundary.
For statically visible `TransformMatchingTex` calls, it warns when source and
target are each one changed TeX chunk despite a large common contiguous block,
when exposed matching keys cover little of an otherwise similar expression, or
when repeated identical keys change count and make correspondence ambiguous.
These are coarse review leads. Prefer the largest contiguous part whose contents
share one animation fate; do not split every glyph mechanically.

Verification assumes `TransformMatchingTex` is the default when TeX content or
term structure changes between displayed formulas. When content is unchanged,
preserve the existing Mobject. Position and scale changes for ordinary
composition come from `Page.animate_reflow()`; intrinsic assets may animate
their own geometry under an explicit reference-system exception. Opacity and
semantic color changes may animate the existing object directly. A use of `Transform`, `ReplacementTransform`,
`FadeTransform`, or whole-formula disappearance must be reviewed for why TeX
correspondence is intentionally unavailable; convenience is not a reason.

Apply the same correspondence test to non-TeX diagram transforms. Record the
visible semantic parts that survive, appear, and disappear, then compare the
source and target Mobject family structures used by `Transform`,
`TransformFromCopy`, or `ReplacementTransform`. Reject a whole-group transform
when an unmatched visible part is left to Manim's recursive family alignment:
an empty branch can acquire center-based point Mobjects, while a nonempty branch
can acquire faded copies of existing geometry. Added relation-bearing parts
must normally be constructed from their model-owned anchor and animated in
place. A detached copy transform is valid when the model defines its
source-to-target correspondence; a relation-bearing copy or joint trajectory
must additionally define its attachment and path. Removed parts must disappear
from their current owner. For a moving owner followed by a
topology change, verify the owner's landing before the new attached part begins
unless a model-derived joint trajectory is declared.

Rendered verification for such a transform must include the first materially
visible frame and the maximum-risk intermediate frame when it is distinct, not
only stable endpoints or a mechanically sampled 50% frame. Record a timestamp,
animation alpha, or precise beat location for each. At first visibility, check
the geometry that carries every declared relation: for example, line endpoints,
a marker center, or an owner-derived boundary path, offset, containment, or
incidence condition. A visually correct final frame fails when any new part
originates from an unrelated center, flies in from an undeclared location, or
briefly detaches from its owner.
Static preflight emits `nonmatching-tex-transform` when it can see a
content-changing `MathTex`/`Tex` pair passed to `Transform`,
`ReplacementTransform`, or `FadeTransform`. Identical-content motion does not
trigger this warning. The advisory remains visible for the warning-review
harness rather than being silently suppressible in source.

The implementation pattern expected by the verifier is:

```python
# insertion: preserve the largest stable contiguous chunk
old = MathTex("100")
new = MathTex("100", "0", arg_separator="")
self.play(TransformMatchingTex(old, new))

# replacement: only the changing suffix is unmatched
old = MathTex(r"x^2 + ", "1", arg_separator="")
new = MathTex(r"x^2 + ", "2", arg_separator="")
self.play(TransformMatchingTex(old, new))
```

Both operands should normally be the complete displayed formula Mobjects. The
chunks are submobjects used for correspondence; they are not replacement
containers for the equation. `TransformMatchingTex(old[i], new[j])` and
`TransformMatchingTex(old.get_part_by_tex(...), ...)` receive a
`fragment-only-equation-transform` warning when `old`/`new` are known MathTex
containers. Review such a case only when the unchanged surroundings are an
intentionally separate persistent asset rather than an accidentally abandoned
formula target.

Review the construction order, not only the final call: the implementer must
first formulate the complete source and complete target expressions, then
derive matching correspondence between those wholes, and only then introduce
submobject boundaries. A changed-fragment-first construction fails this gate's
model even if it is later wrapped in a `VGroup` that visually resembles a full
formula.

Treat a transition as nontrivial when it has multiple plausible
correspondences, invariant material inside a changed TeX region, repeated keys,
mixed color or motion fates inside one candidate key, changed layout or root
ownership, or one of the risky TeX structures below. Require a correspondence
manifest for every such transition. It must contain the complete source/target expressions, the actual ordered
`tex_string` keys produced with the scene's real `TexTemplate` and isolation
settings, the fate and color fate of each key, multiplicities, and the owning
complete-formula roots.  Source-code substrings are not sufficient evidence of
runtime keys.  For braces, scripts, fractions, radicals, commands, repeated
tokens, or `substrings_to_isolate`, require a small construction probe that
prints or otherwise records the actual parts before accepting implementation.
A simple insertion or replacement with unique literal constructor keys and one
obvious correspondence may use an inline source/target/key record instead of a
separate manifest; it remains subject to rendered transition review.

Reject correspondence even when the call uses `TransformMatchingTex` if a
changed key unnecessarily contains invariant material, a key combines multiple
animation or color fates, repeated keys are ambiguous, the split changes TeX
layout, the source/target are fragment containers, or a visually unified formula
has been reconstructed from separately arranged Mobjects.  Low exact-key
coverage is evidence of under-segmentation, not merely a cosmetic optimization.

Choose chunk boundaries by animation fate. Merge adjacent invariant material
that remains and moves together; split inserted, deleted, changed, or
independently moving material. Prefer multiple `MathTex` string arguments;
`{{...}}` and `substrings_to_isolate` are alternative official mechanisms, but
substring isolation affects every matching occurrence and may introduce
repeated keys; inspect the resulting parts.
Avoid repeated one-glyph keys when a larger stable chunk removes ambiguity.
`key_map`, mismatch transforms, and mismatch fades refine correspondence after
segmentation; they are not substitutes for it.
The stocked runtime separately checks position and font/scale drift for exact or
highly similar TeX across transforms, including the source/target roots exposed
by `TransformMatchingTex`. Such drift is advisory because motion and resizing
can be intentional; root replacement performed by the official matching
animation cleanup is not itself a defect.
Rendered verification must cover the continuous transition, a risk-selected
middle frame, the final frame, and the following checkpoint landing.  Pass only
when the manifest's invariant keys remain continuous, only declared changed
keys change, color/layout remain stable, and cleanup leaves the intended target
root without black/blank frames, stale fragments, duplicate roots, or an
unexplained position jump.  A correct final equation or a clean static
checkpoint cannot substitute for this temporal and ownership review.
The source-similarity detector compares normalized constructor/animation sequences across helpers and
consecutive `next_slide()` segments within the same owner function. It separates
component similarity from data-dependent transform continuations and excludes
generic lifecycle scaffolding as insufficient evidence; do not suppress valid
findings merely because there are many.
It deliberately does not decide whether words such as `eq`, `eff`, `loc`, `max`,
`min`, `in`, `out`, `init`, or `final` require `\mathrm`; apply the checklist
using the token's role in the formula.

Repeatedly rejected project notation or source patterns belong in a
project-owned forbidden registry, not in the generic skill or agent memory:

```bash
python3 "$MANIM_PACKAGE_ROOT/skills/manim-clip-verifier/scripts/forbidden_registry.py" add '\asymp' \
  --reason 'this project requires the precise comparison relation' \
  --replacement 'write the approved one-sided or two-sided bound'
python3 "$MANIM_PACKAGE_ROOT/skills/manim-clip-verifier/scripts/review_preflight.py" scene.py \
  --forbidden-registry .manim-review-forbidden.json
```

Literal rules are the default. Regex rules are explicit. Findings are warnings
so the normal strict deck harness makes them review-blocking without rewriting
the source.

### User Rejection to Registry Flow

When the user rejects or prohibits a word, symbol, notation, constructor, or
animation pattern, apply the rejection to the current repair immediately, then
ask whether it should be persisted in the project NG registry. Do not silently
turn one local correction into a permanent rule.

Present a concrete candidate containing:

- the exact literal pattern, or a narrowly bounded regex only when necessary;
- the reason inferred from the rejection;
- the preferred replacement or decision rule, if known;
- the proposed scope: this project, or this task only.

Ask for confirmation before running `forbidden_registry.py add`. If the user
confirms project scope, register it and report the resulting registry path. If
the user says it is task-local, record it only in the task contract/checklist.
If the rejected expression is ambiguous—such as forbidding a concept in one
mathematical role but allowing the same spelling elsewhere—clarify the matching
boundary instead of adding a broad literal. A prohibition means stop using the
pattern now; registry confirmation controls persistence, not compliance with
the current instruction.

The overlap assertion is triage, not visual acceptance. Bounding boxes can
overestimate painted geometry for rotated, curved, hollow, or sparse objects,
and cannot decide whether near-touching creates false grouping. A finding must
be repaired or inspected; a clean result reduces screenshot escalation but does
not replace continuous motion or risk-selected visual review.

## Cost-Aware Visual Inspection

Start with one continuous rendered mp4 or checkpoint-video sequence for the
current scene task. Inspect motion, stable landings, and transitions without
extracting a still for every checkpoint. Build a small escalation list while
watching. Extract or open a full-resolution frame only when playback shows, or
the plan predicts, a fine-scale risk such as:

- first use of a new term, symbol, color, arrow, region, or visual convention
- a dense landing, close spacing, thin primitive, small label, or possible overlap
- a central transformation whose correspondence or continuity is ambiguous
- numerical-process frames that show sampling, iteration, measurement, convergence, or parameter change
- a final claim whose evidence cannot be judged reliably during playback

Do not use a contact sheet as a substitute for either continuous motion review or
fine-scale inspection. The cost-saving mechanism is selective escalation from
video, not shrinking every checkpoint into a montage.

## Mandatory Geometry and Visual Primitive Audit

Assume every scene/page has a meaningful chance of geometry and visual-primitive
defects. Invoke `$manim:manim-visual-review` with the continuous segment and its
checkpoint intents, then again with each risk-selected frame. That skill owns
the audit catalog (recurring mistakes like meaningless
arrows, overlap, mistargeted connectors, label merging, false grouping, and scale
errors) and grows it over time; do not re-derive or duplicate that checklist here.

This audit is mandatory once for the continuous scene segment and separately for
each escalated frame. Record the selection rationale, time range, verdict, and
catalog references. Do not claim that a fine-scale risk passed from playback
alone; escalate it. Do not extract a checkpoint image merely to prove that the
checkpoint existed.

## Judgment Checks

Inspect preview screenshots or mp4 when available:

- Verify one scene task at a time. A scene task is the largest unit in which the main visual components persist; do not make multi-scene or multi-page batch visual artifacts part of the verification path.
- Review the scene's continuous rendered segment first. Record which checkpoints
  were escalated to still inspection and why; do not require a full-resolution
  still or separate image-context load for every checkpoint.
- Review screenshots adversarially. Try to reject the frame before accepting it: assume the viewer missed the previous beat, distrust every label, test whether the visual relation is actually inspectable, and ask what unsupported claim the frame could smuggle in.
- Are all must-show items visible?
- Is text readable at preview resolution?
- Is the scene overcrowded?
- Geometry and visual-primitive correctness (overlap, occlusion, alignment,
  connector targets, direction, scale, layering): see the `$manim:manim-visual-review`
  continuous-segment finding plus this checkpoint's coverage-map row, or the
  escalated-frame finding when selected; do not re-derive this checklist here.
- Spatial-relation correctness: verify crossing, tangency, separation clearance,
  containment, attachment, intersection count and order, and connectivity from
  geometry rather than appearance. Reject missing assertions, unjustified
  tolerances, and bounding-box-only checks when paths or filled regions carry
  the mathematical relation.
- Audit guarantee integrity before accepting those checks. Try to identify a
  coordinate, dimension, angle, endpoint, offset, or curve parameter that can
  vary independently while the claimed owner remains fixed. If one exists, the
  relation is not constructive even when every sampled assertion passes.
- Distinguish review evidence from construction evidence. A visual review can
  reject a bad render, but cannot certify topology; a self-authored test can
  catch drift, but cannot by itself justify `guaranteed`, `faithful`,
  `complete`, or a structural `PASS`. Narrow the claim's approved wording or
  reject structural-claim acceptance when the preservation argument is missing.
  Decide artifact acceptance separately: an explicitly schematic artifact may
  pass only when the work order does not require that unresolved relation.
- Structural-claim acceptance is verifier-owned. Record verifier and implementer
  identities, the reviewed artifact revision, reviewed bases, trusted gaps, and
  approved wording. Reject self-review or a decision not bound to the current
  revision. When artifact acceptance depends on a central claim, unresolved or
  narrowed status blocks artifact acceptance.
- For central structural claims, use a fresh-context blind reviewer that did not
  implement the artifact. Supply the source, work order, artifact revision, and
  review evidence, but not the implementer's rationale or desired verdict.
  Identity fields are an audit trail, not mechanical proof of independence.
- Reconcile `objective.central_relation_ids` against the spatial-relation
  contract before review. Missing relation records are unresolved claims, and
  an empty central set requires an explicit reviewer finding that the core claim
  contains no spatial or topological assertion.
- Could a viewer infer the wrong object, direction, dependency, or equality from the layout?
- Does any label, color, arrow, or motion carry two meanings at once?
- Does the screenshot alone expose the required visual relation, or does it only look plausible because the verifier remembers the intended explanation?
- Are technical terms, symbols, colors, arrows, regions, and visual roles introduced before the viewer is expected to use them?
- Are any undefined items acceptable prerequisites for the stated target viewer, or are they missing definitions?
- For each central equation, is there visual work beyond text display: grouping, transformation, correspondence, dependency, diagram, or plot?
- If an equation is only source authority, is it treated as such rather than as the central visualization?
- If numerical computation is used, does the preview show a process, parameter dependence, measurement, sampling, iteration, convergence, or visual mapping rather than only a final number or table?
- Are precomputed numerical values clearly serving animation, labels, endpoints, or checks rather than silently becoming unsupported claim authority?
- If a final plot is used, are axes, parameters, sampled/constructed structure, and relation to the source claim inspectable?
- For every coordinate-bearing visual, can any semantic dependent vary in
  scene space while its rendered-view owner remains fixed? If so,
  reject reference-system ownership even when the current pixels align. Check
  representative tick/grid/data coincidences and confirm that displayed sample
  coordinates mean what their labels claim rather than merely lying nearby.
- Are must-show items staged at the moment they are needed, or dumped onto the screen all at once?
- Are stale objects removed or de-emphasized before the next focal relation?
- Is the mp4 clearly labeled as a standalone clip, asset preview, or composition preview?
- If the visual includes reusable parts, are those parts importable as named builders instead of locked inside one scene class?
- Do highlights have consistent meaning?
- Does the animation order match the argument?
- Are unsupported examples, analogies, or new claims present?
- Are derivation steps equivalent or clearly flagged?

## Adversarial Feedback Procedure

Write one compact finding for the continuous scene segment and one for each
escalated checkpoint or time range:

- `frame_or_segment`: path, timestamp, or beat name
- `attack_question`: the concrete failure mode tested
- `selection_reason`: continuous coverage or the risk that required escalation
- `geometry_audit`: verdict and catalog refs from `$manim:manim-visual-review`
- `visual_primitive_audit`: verdict and catalog refs from `$manim:manim-visual-review`
- `evidence_seen`: what in the frame supports or fails the intended claim
- `verdict`: `repair`, `pass-with-risk`, or `pass`
- `repair_target`: requirements, visual planner, math derivation, asset
  implementer, clip implementer, or none

Do not write generic praise such as "looks good" or "screenshot checked." A
passing scene note must state its covered time range, what was attacked, and why
particular checkpoints did or did not require escalation.

Bind visual coverage to the rendered checkpoint manifest. Record, for every
manifest checkpoint, its stable-landing interval, incoming-transition interval,
the continuous segment that traversed both, `inspected: true|false`,
`still_escalation: true|false`, and the selection reason. Missing, unplayable, or
untraversed intervals block acceptance. This coverage map is bookkeeping, not a
request to load one image per row.

## Issue Routing

Route issues narrowly:

- Python, Manim, or LaTeX error in asset model, builder, export, registry
  projection, or asset preview: `$manim:manim-asset-implementer`; the same error
  in a composed consumer scene: `$manim:manim-clip-implementer`
- geometry or visual-primitive defect flagged by `$manim:manim-visual-review`
  (overlap, mistargeted connector, label merge, false grouping, scale/direction
  error): `$manim:manim-asset-implementer` when intrinsic to an asset builder or
  asset preview, `$manim:manim-clip-implementer` when introduced by consumer
  composition, or `$manim:manim-visual-planner` when the visual metaphor must change
- equation error or unsupported transformation: `$manim:manim-math-derivation`
- unclear diagram, plot, color, or density: `$manim:manim-visual-planner`
- result-only numerical computation or unsupported parameter choice: `$manim:argument-clip-requirements` then `$manim:manim-visual-planner`
- undefined term, unexplained symbol, or missing viewer baseline: `$manim:argument-clip-requirements`
- equation displayed without satisfying its visualization obligation: `$manim:manim-visual-planner` then `$manim:manim-clip-implementer`
- reusable asset missing, non-importable, unregistered, unpreviewed, or replaced
  by prose/scene-local geometry: `$manim:manim-asset-implementer`; use
  `$manim:manim-asset-system` first if identity or authority is unresolved, and
  `$manim:manim-visual-planner` if the visual boundary is unclear
- missing objective or ambiguous source basis: `$manim:argument-clip-requirements`
- hallucinated claim: `$manim:argument-clip-requirements` plus the implementer
  that owns the affected artifact

## Report Format

Return:

- verdict: `pass`, `pass-with-notes`, or `needs-changes`
- checks run
- findings ordered by severity
- exact command outputs that matter
- artifact bundle status: complete, incomplete, or not applicable
- temporal readability status: staged, too simultaneous, or not inspectable
- viewer-definition status: introduced, assumed prerequisite, missing, or not inspectable
- visualization-obligation status: satisfied, source-authority-only, missing, or not inspectable
- numerical-visualization status: process-visible, label/check-only, result-only, unsupported-parameters, or not applicable
- visual-review status: manifest-covered, coverage-gap, or not applicable
- geometry-audit status: continuous-pass, escalations-repaired, missing, or not applicable
- guarantee-integrity status: claim domain and assumptions, exact or approximate
  status and error bound, construction basis, implementation assurance,
  regression and visual evidence, proposed and approved wording, and unresolved independent
  degrees of freedom for each claimed relation
- reference-system status: owner and conversion API, semantic dependents
  covered, allowed whole-system transforms, coincidence/unit-scale checks, and
  any independent scene-space degrees of freedom
- structural-claim acceptance: accepted, narrowed, unresolved, or not required
  with reviewer and implementer identities, artifact revision, reviewed basis,
  trusted gaps, and approved wording
- asset-implementation acceptance for every required asset: verifier-owned
  `implemented`, `needs_repair`, or `blocked`, with artifact revision,
  implementer/verifier identities, import result, registry projection result,
  preview/render evidence, required check results, and missing artifacts
- visual-primitive-audit status: continuous-pass, escalations-repaired, missing, or not applicable
- adversarial findings: continuous-segment record plus risk-selected records
- scene-task scope status: single-scene verified, multi-scene split needed, or not inspectable
- next repair target
- residual risks

Do not mark a clip accepted just because render succeeds. Render success is necessary, not sufficient.
Do not mark an asset-oriented clip accepted if the only durable output is a single mp4 and scene file while reusable parts, mappings, or verification notes are missing.
Do not mark a clip accepted if central terms or symbols are used without either introduction or explicit prerequisite status.
Do not mark a clip accepted if the central equation is merely displayed and no required relation, grouping, transformation, dependency, diagram, or plot is visually inspectable.
Do not mark a clip accepted if a numerical result is the central evidence but the viewer cannot inspect the quantity, parameters, process, measurement, convergence, or visual mapping that produced it.
Do not mark a nontrivial clip accepted without a continuous-pass coverage record,
risk-selection decisions, and full-resolution inspection of every escalated
fine-scale risk. Screenshot count is neither a pass criterion nor a coverage
metric.
Do not mark a nontrivial clip accepted when the manifest-bound coverage map has a
gap, or when an ambiguity involving geometry or a meaningful primitive was not
escalated and resolved. Non-escalated checkpoints inherit only documented
continuous-segment coverage, never an invented individual-frame pass.
