---
name: manim-static-figures
description: Create and revise static academic diagrams and explanatory figures with Manim, using TeX for every mathematical label. Use for a still image, document figure, or static comparison composed from shapes, arrows, and mathematics. Reuse the Manim package's assets, layout, and visual review; animation and slide-deck authoring have separate workflows.
---

# Manim Static Figures

Produce a figure that supports a specific inference at its intended reading
size. Express semantic composition through the package's intermediate layout
framework; let it resolve numeric placement. Own static composition, TeX
typography, image export, and verification. Keep the editable scene with the image.

## Establish the figure's role

Read the surrounding argument and recover the reader's prerequisites. Identify
the relation this figure must make inspectable, the source that supports it,
and where the reader will encounter it. Ask one narrow question when an unknown
prerequisite would materially change the explanation; otherwise use the
established audience information. Do not teach prerequisites the reader already
knows merely because the figure uses them.

Plan the final simultaneous view. A static image must make sense without
remembering an earlier animation, listening to narration, or guessing a reveal
order. Adjacent prose can provide premises, but the reader should not have to
hold unexplained symbols or track which panel's question is still pending.
Use panels only when their grouping and comparison serve the inference.

When the reader baseline changes, reassess the dependent labels, panels, and
explanations. Updating an audience note alone does not validate the composition.

## Reuse the package at the appropriate scope

Start with `$manim:manim-asset-system` and read
[its skill](../manim-asset-system/SKILL.md). Inspect assets and conventions before
creating geometry. Decide `reuse`, `parameterize`, `new_asset`, or
`justified_one_off` using its identity rules, even for a single figure. Static
and animated consumers can use the same builder and named semantic parts.

Use the project's existing adapter and registry locations. If none exist,
explicitly adopt the package's recommended `paper_assets/asset_registry.yaml`
and `paper_assets/convention_registry.yaml` locations in a compact project-local
figure record, then initialize only the needed entries under the
[registry schema](../manim-asset-system/references/asset-convention-schema.md).
Record the source, audience baseline, intended inference, output size/format,
asset dispositions, and layout/runtime locations there. This is the static
review's intent input; do not fabricate a clip work order or narration record.

Use package-qualified identities in handoffs:

- `$manim:manim-asset-system` for source-object identity, existing asset and
  convention lookup, reusable geometry, and coordinate ownership. Read its
  [guarantee contract](../manim-asset-system/references/guarantee-integrity-contract.md)
  when claiming geometric or topological relations or exposing a coordinate map.
- `$manim:manim-asset-implementer` when an existing reusable asset needs repair
  or a genuinely reusable builder must be created. Consume its public API.
- `$manim:manim-visual-planner` when representation or composition needs a
  separate planning pass. Specify that the deliverable is a single static view;
  temporal beats are not part of this task.
- `$manim:manim-visual-review` for the actual rendered image's geometry,
  primitives, and typography. Its source is
  [the visual-review skill](../manim-visual-review/SKILL.md).

For this static workflow, findings that sibling skills would normally return
to a clip composer return to `$manim:manim-static-figures`. Keep reusable asset
repairs with `$manim:manim-asset-implementer`. Use the compact figure record and
the exact rendered image as review inputs. Do not route a still-image layout
repair into clip implementation or require temporal evidence for a static claim.

Keep project-specific figures and parameters in the project. Reuse canonical
runtime modules through their supported links; do not copy generic runtime
implementations into the figure. Follow the asset system's registry and style
rules. Keep a justified one-off compact; it still needs model-derived relations
and framework-owned placement. Static output does not require a clip work order
or narration bundle solely for its own sake.

For an ordinary static figure, perform the audience check below directly. A
separate blind audience review is appropriate when requested or when the
argument warrants it; if invoking `$manim:manim-audience-state-review`, follow
its actual contract rather than claiming that a local visual check satisfies it.

## Construct the image

Implement a scene that directly adds the intended composition in `construct()`.
Do not build a dummy animation or rely on playing transitions to obtain the
correct final geometry. For a requested still extracted from an existing clip,
use the specified state and preserve that clip's source instead.

Separate model geometry from page composition:

- Derive meaningful positions, intersections, attachments, boundaries, and
  projections from the same mathematical owner. A connector must terminate on
  its intended object; objects that share a point must share its construction.
- Use `manim_layout` Row/Column/Grid composition and registered semantic styles
  for ordinary page layout. If absent, set up the canonical runtime through
  `$manim:manim-asset-system`; absence is not permission to use manual placement.
  Choose grouping, alignment, fit, distribution, and semantic gap/padding roles.
  The runtime owns numeric placement, spacing, scaling, and type sizes.
- Group labels with their objects and compose comparisons as groups. If a
  requested addition changes the footprint or attention hierarchy, reconsider
  the whole composition before appending it to an empty corner.
- Every arrow, color, region, and line style must have an intelligible meaning.
  Distinguish a map from evolution or implication. Mark a schematic projection
  when the drawing could otherwise assert a false dimension or shape.

Keep the caption responsible for scope and interpretation that the image alone
cannot carry. Avoid duplicating the complete explanation across image, caption,
and surrounding prose.

### Keep manual adjustment out of consumer scenes

Do not repair a composition by guessing pixel coordinates, adding `shift`
offsets, selecting local font sizes, or repeatedly tuning numeric `buff`, scale,
or margin values. Wrapping such numbers in helper functions or named constants
does not make them semantic layout. Raw `next_to`/`move_to` chains are not a
replacement for the framework's composition tree.

Repair the cause at its owner: grouping or hierarchy in the layout tree,
reusable typography and spacing in registered policy, or attachment and
intrinsic geometry in the asset builder. If the framework cannot express a
required relation, extend its appropriate reusable API or report the concrete
limitation; do not silently fall back to scene-local nudging. Numerical source
data, mathematically defined geometry, and declared projection parameters are
legitimate inside their model/asset owner. They are distinct from guessed
page-layout coordinates. Transform a coordinate-bearing view as a whole.

Check the scene source as well as the image: a screenshot can look correct
while relying on brittle compensating offsets. Layout overflow calls for a
structural reflow or content decision, not shrinking text until it fits.

## Require TeX for all mathematics

Use `MathTex` for mathematical variables, subscripts, indices, state notation,
operators, equations, and mathematical content in axes, legends, and arrow
labels through `semantic_math` and its registered roles, backed by `MathTex`.
Intrinsic asset labels must also use the TeX rendering path. Use the project's TeX template and
packages so notation and fonts remain consistent.

Ordinary prose uses `semantic_text` backed by `Text` or a suitable Japanese
renderer. Compose prose and mathematics through layout groups for mixed labels,
or use a working TeX
template that supports the complete label. Do not put mathematical content into
`Text` for convenience.

Unicode mathematical substitutes, hand-positioned glyphs, image-generated
lettering, and Matplotlib MathText do not satisfy this requirement. Preserve
TeX source even when the final glyphs are exported as vector outlines. On a TeX
failure, fix the template or toolchain; do not silently switch renderers or
remove notation to make the render succeed.

## Render and verify the deliverable

Use the project's established Manim environment or render wrapper. For a normal
Manim CLI, a static scene can be rendered with:

```bash
manim -s -qh figure.py FigureScene
```

Choose final resolution, aspect ratio, background, and transparency for the
actual destination. PNG is a normal still-image deliverable. A request for SVG
or PDF requires a verified vector-export workflow; saving a PNG inside an SVG
or PDF is not vector output. Do not promise whole-scene SVG export merely
because individual `MathTex` objects originate as SVG. A supported vector
export must preserve the already-resolved asset geometry, layout, and TeX
glyphs. If that export is unavailable, report the format limitation and provide
the verified raster option for consideration. Do not silently reconstruct the
figure in another drawing tool or bypass the semantic layout framework.

Inspect the actual final image, not just the source or a successful command.
Check both full resolution and intended display size for clipping, overlap,
label ambiguity, arrow attachment, contrast, TeX rendering, and consistent
notation. Use `$manim:manim-visual-review` for this pass; a one-image review does
not require a video or slide deck.

Separately attempt the intended inference from the reader's prerequisites,
nearby prose, and visible figure. Identify the specific missing relation if it
fails. Check for unnecessary explanations as well as missing ones. Geometry
review is not evidence of audience comprehension or mathematical correctness.

Repair the demonstrated defect and re-render the affected image. For a
meaningful source or audience change, reassess the corresponding construction
and explanation before inspecting appearance again.

Deliver the verified image, its editable scene and TeX source, and a concise
caption or alt text as appropriate. State any real unresolved limitation.
Hand the asset to the document/site workflow; creating a figure does not
authorize publishing it or converting unrelated figures.
