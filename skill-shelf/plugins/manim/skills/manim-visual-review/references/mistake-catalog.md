# Manim Visual Mistake Catalog

A living list of recurring, formulaic visual mistakes in this project's Manim
clips, assets, and slide decks. Read this file in full before every review pass
(see `../SKILL.md`). When a review finds a defect that does not match an existing
entry, append a new one using the template below — do not let a novel mistake go
uncataloged just because it was fixed.

Entries are numbered sequentially (`seed-mistake-NN`) regardless of category. Do
not renumber existing entries when adding new ones; append at the end of the file
with the next free number, then file it under the category section closest to its
nature (add a new category section if none fits).

## Entry Template

```
### [seed-mistake-NN] <short name>
- Symptom: <what the viewer actually sees that is wrong>
- Detection cue: <the concrete question or check that surfaces this in review>
- Fix: <the usual correct repair>
- First observed: <YYYY-MM-DD>, <clip/deck/checkpoint context, optional>
```

---

## Arrows & Connectors

### [seed-mistake-01] Meaningless arrow
- Symptom: An arrow appears in the frame but does not encode a specific relation,
  flow, or dependency the argument actually needs at this checkpoint.
- Detection cue: Ask "what relation does this arrow assert, and is that relation
  needed here?" If the answer is vague or "it just points at the next thing," the
  arrow is decorative, not argumentative.
- Fix: Remove the arrow, or replace it with the primitive that matches the real
  relation (e.g. an equals sign, a brace, a highlight), or keep it only if a
  caption/label makes the asserted relation explicit.
- First observed: 2026-07-09 (seeded from manim-clip-verifier audit checklist)

### [seed-mistake-02] Mistargeted connector
- Symptom: An arrow, brace, or line visually touches or points at the wrong
  object because its endpoint was set by rough coordinates instead of the actual
  target object's anchor.
- Detection cue: For each connector, trace both endpoints back to the specific
  Mobject they should attach to; a connector that merely lands "near" the right
  object without touching its boundary/anchor is a defect.
- Fix: Anchor endpoints with `.get_edge_center()`, `.get_critical_point()`, or
  equivalent instead of literal coordinates; re-derive endpoints whenever the
  target moves.
- First observed: 2026-07-09 (seeded from manim-clip-verifier audit checklist)

### [seed-mistake-03] Reversed or ambiguous direction
- Symptom: An arrow's direction contradicts the causal, logical, or temporal flow
  it is meant to represent, or its direction is genuinely ambiguous at the
  rendered scale.
- Detection cue: State the flow in words first ("A causes B", "we transform X into
  Y"), then check the arrow points from A to B, not the reverse, and that the
  arrowhead is large enough to read the direction unambiguously.
- Fix: Flip the arrow, or increase arrowhead size/contrast if direction is correct
  but illegible.
- First observed: 2026-07-09 (seeded from manim-clip-verifier audit checklist)

## Overlap & Occlusion

### [seed-mistake-04] Overlapping or occluding objects
- Symptom: Two or more shapes, equations, labels, or plots that are meant to be
  visually distinct overlap or occlude each other, usually because they were
  placed with absolute coordinates instead of relative layout.
- Detection cue: For every pair of objects present simultaneously, check whether
  their bounding boxes intersect when they should not; "no overlap seen" is not a
  valid pass note unless the specific pairs checked are named.
- Fix: Express the relationship through the registered semantic layout runtime
  (`Row`, `Column`, `Grid`, alignment, distribution, and named gap roles). Let
  the runtime calculate coordinates and spacing, then rerun the overlap gate.
- First observed: 2026-07-09 (seeded from manim-clip-verifier / manim-slides-deck)

### [seed-mistake-05] Near-touching false grouping
- Symptom: Two unrelated objects sit close enough together that a viewer reads
  them as connected or grouped, even though their bounding boxes do not
  technically overlap.
- Detection cue: For each pair of nearby objects, ask "if I only had this frame,
  would I assume these two are related?" If yes and they are not, the spacing is
  a defect.
- Fix: Increase spacing between unrelated objects, or add a visual separator
  (whitespace, a divider, distinct color) so unrelated elements read as distinct.
- First observed: 2026-07-09 (seeded from manim-clip-verifier audit checklist)

### [seed-mistake-06] Label merging into one word
- Symptom: Two adjacent text labels sit close enough that they visually read as
  a single merged word or token.
- Detection cue: Read every pair of adjacent labels at rendered resolution as if
  seeing them cold; if the boundary between them is not immediately obvious, they
  are merging.
- Fix: Increase `buff` between labels, or use distinct font weight/color/size to
  separate them.
- First observed: 2026-07-09 (seeded from manim-clip-verifier audit checklist)

## Scale & Emphasis

### [seed-mistake-07] Oversized or undersized primitive
- Symptom: An arrowhead, dot, marker, or stroke width is disproportionate to the
  scene's content scale — either dominating the frame or nearly invisible.
- Detection cue: Compare the primitive's size against the smallest meaningful text
  or object in the same frame; a primitive should never be the single largest
  visual element unless it is the checkpoint's main subject.
- Fix: Scale `stroke_width`, `tip_length`, or marker `radius` to match surrounding
  content, typically by referencing an existing object's scale rather than a fixed
  constant.
- First observed: 2026-07-09 (seeded from manim-clip-verifier audit checklist)

### [seed-mistake-08] Wrong visual-weight hierarchy
- Symptom: A secondary or supporting element is rendered with more visual weight
  (size, stroke, color saturation) than the checkpoint's primary claim, so the
  viewer's eye goes to the wrong thing first.
- Detection cue: Ask "what should a viewer look at first in this frame?" then
  check that object actually has the highest visual weight present.
- Fix: De-emphasize secondary elements (thinner stroke, muted color, smaller
  scale) and/or emphasize the primary claim (highlight, color, size).
- First observed: 2026-07-09 (seeded from manim-clip-verifier audit checklist)

### [seed-mistake-15] Single-color primitive across heterogeneous backgrounds
- Symptom: A meaningful primitive uses one color while spanning multiple visual
  regimes, such as a bright spin configuration and a dark background. It may be
  semantically distinct from nearby colors, yet become hard to read on part of
  its path. The reviewer may incorrectly pass it from the text-level design fact
  "the colors do not overlap" even though that fact is not visual evidence.
- Detection cue: Split the primitive's path into background regimes and inspect
  each segment at full resolution. Ask "Can I read the direction, endpoint, and
  role on every background this object crosses?" Do not substitute color names,
  palette roles, or non-overlap claims for rendered evidence.
- Fix: Reroute the primitive through a uniform background, split it into
  background-aware styled segments, add a contrasting outline/halo, or replace it
  with a marker whose meaningful endpoint does not depend on crossing multiple
  regimes.
- First observed: 2026-07-09, `StochasticIsingDeck` page 1 update arrow review

## Consistency Across Checkpoints

### [seed-mistake-09] Inconsistent primitive semantics
- Symptom: The same color, arrow style, or marker is reused across checkpoints
  with a different meaning each time, without the change being flagged to the
  viewer.
- Detection cue: For any primitive style reused from a previous checkpoint, check
  that it still means the same thing; if the meaning changed, check that the
  change itself is visually introduced (e.g. via a legend update or explicit
  transition), not silent.
- Fix: Either keep the convention constant for the whole clip/deck, or make the
  meaning-change an explicit, visible event.
- First observed: 2026-07-09 (seeded from manim-clip-verifier audit checklist)

### [seed-mistake-10] Accidental layout shift
- Symptom: An object that persists across checkpoints subtly changes position,
  scale, or style between them without narrative reason, making the viewer
  perceive it as a new or different object.
- Detection cue: Diff the persistent object's position/scale/style against its
  state in the previous checkpoint; any unintentional delta is a defect even if
  small.
- Fix: Pin persistent objects to a stable anchor/position across checkpoints, or
  animate the change explicitly if it is intentional.
- First observed: 2026-07-09 (seeded from manim-clip-verifier / manim-slides-deck)

## Staging & Content

### [seed-mistake-11] Simultaneous dump of must-show items
- Symptom: All must-show items for a checkpoint appear on screen at once instead
  of being staged in the order the argument needs, so the viewer cannot track
  dependency or sequence.
- Detection cue: List the must-show items in argument order; check the reveal
  animation order matches that list rather than adding everything in one `Write`
  or `FadeIn` call.
- Fix: Split the reveal into sequential animations or additional checkpoints that
  match the argument's actual order.
- First observed: 2026-07-09 (seeded from manim-clip-verifier audit checklist)

### [seed-mistake-23] Unsequenced simultaneous animation dump
- Symptom: Several independently meaningful objects appear, move, or change at
  exactly the same time, so the viewer cannot tell what to watch first or which
  change motivates the next.
- Detection cue: Inspect every `play()` or animation group with three or more
  concurrent members. State the one relation their simultaneity encodes. If the
  members instead represent multiple audience events, the concurrency is a defect.
- Fix: Split independent events into ordered `play()` calls or use `LaggedStart`
  with a readable positive lag. Keep exact simultaneity only for one comparison,
  correspondence, conservation, or coordinated transformation.
- First observed: 2026-07-13, recurring AI-generated Manim deck behavior.

### [seed-mistake-24] Reading and diagram inspection compete
- Symptom: A sentence-length title or explanation appears at the same moment as
  a new diagram, so the viewer must choose between reading and understanding the
  visual change and misses one of them.
- Detection cue: For every incoming segment, ask whether a new prose object and
  a new non-text visual begin together, even if there are only two animations.
- Fix: Reveal and hold the prose before the diagram, or reveal the visual first
  and add the interpretation afterward. Keep them simultaneous only when one
  cannot be interpreted without the other and the relation is explicitly audited.
- First observed: 2026-07-13, repeated deck feedback on titles competing with diagrams.

### [seed-mistake-25] Audience-facing event is too brief to register
- Symptom: A new label, claim, state change, or transformation flashes by before
  a viewer can locate and interpret it, even though the animation technically ran.
- Detection cue: Inspect audience-facing plays with very short literal runtime,
  especially below 0.35 seconds; distinguish them from cleanup-only fade-outs.
- Fix: Increase runtime or divide the event into a stable checkpoint. Preserve a
  deliberately quick event only when temporal brevity is itself the meaning and
  record that exception.
- First observed: 2026-07-13, repeated requests to slow down or preserve intermediate states.

### [seed-mistake-26] Plot aspect inherited from tooling rather than meaning
- Symptom: A graph is stretched or flattened because its axes rectangle came
  from a Python/default plotting ratio or raw data ranges. Slopes, angles,
  curvature, and relative variation then communicate an accidental relation.
- Detection cue: Compute displayed length per coordinate unit on both axes:
  `x_length/(x_max-x_min)` and `y_length/(y_max-y_min)`. If they differ, ask what
  semantic reading requires the distortion and which geometric readings cease
  to be literal.
- Fix: Use 1:1 coordinate-unit scale by default. When unequal scale is necessary,
  choose it from the explanatory comparison, disclose the reason in the graph
  contract, and avoid claims that depend on literal slope, angle, distance, or
  isotropy unless corrected visually.
- First observed: 2026-07-13, recurring AI-generated Python-style graph proportions.

### [seed-mistake-12] Decorative or under-motivated diagram
- Symptom: A diagram is present but only schematic — it does not actually
  correspond to the source's mathematical objects or relations, so it looks
  illustrative rather than argumentative.
- Detection cue: Map every diagram element back to a specific term, symbol, or
  relation in the source argument; an element with no such mapping is decoration.
- Fix: Either give every diagram element an explicit correspondence (label, color
  mapping, or annotation) or remove the unmapped element.
- First observed: 2026-07-09 (seeded from manim-clip-verifier judgment checks)

### [seed-mistake-19] Static pointer substituted for temporal event
- Symptom: A static arrow, marker, or callout is used to explain an event that
  should happen at a particular time. The frame then reads as "always look here"
  or "this relation holds at any time," even though the intended meaning is a
  sampled update, transient attention shift, or one-time state change.
- Detection cue: For every pointer-like primitive, ask whether its meaning is
  spatial/logical or temporal. If the primitive is meant to indicate "now this
  site/event is chosen," check that the selection or change is animated as a
  temporal beat rather than left as a permanent static instruction.
- Fix: Replace the static pointer with staged motion, a transient highlight, a
  before/after state change, or a short event sequence. Keep a static arrow only
  when it asserts a persistent spatial, causal, or algebraic relation.
- First observed: 2026-07-09, `StochasticIsingDeck` page 1 random-site update

### [seed-mistake-14] Legend/axis mismatch
- Symptom: An axis label or legend entry maps to the wrong quantity, series, or
  unit compared to what is actually plotted.
- Detection cue: For each axis and legend entry, trace it to the specific data
  series or quantity it labels; a label that is "close enough" in wording but
  wrong in referent is a defect.
- Fix: Correct the label text or the underlying data binding so they match
  exactly.
- First observed: 2026-07-09 (seeded from manim-clip-verifier judgment checks)

## Review-Process Pitfalls

### [seed-mistake-13] Contact-sheet blind spot
- Symptom: A review pass is done, and passes, using a contact sheet, thumbnail
  gallery, or batched screenshot montage — which shrinks and compresses frames
  enough to hide exactly the overlap, label-merge, and small-primitive defects
  this catalog exists to catch.
- Detection cue: Before trusting any "pass" verdict, check whether the reviewer
  actually opened the individual full-resolution frame or mp4 segment for that
  specific checkpoint, or only looked at a reduced-size collective view.
- Fix: Re-review the checkpoint at full resolution individually. Contact sheets
  are acceptable only as a post-hoc audit artifact after individual review, never
  as the review method itself.
- First observed: 2026-07-09 (seeded from manim-clip-verifier / manim-slides-deck)

### [seed-mistake-16] Resolution/tiling blind spot
- Symptom: The reviewer treats "I opened the full-resolution frame" as proof that
  fine-scale defects were actually seen. Vision-language models internally
  downsample or tile images before reasoning over them, so a defect genuinely
  present in the file (a hairline overlap, a small arrowhead's direction, a thin
  stroke's endpoint) can still be invisible to the model at whole-frame scale even
  though the source file is full resolution.
- Detection cue: For any defect candidate that depends on fine detail — thin
  strokes, small markers, elements that are close-but-not-quite-overlapping —
  crop or zoom into that specific region and inspect the crop directly. Do not
  accept "I looked at the full-resolution frame" alone as evidence for a
  fine-scale claim.
- Fix: Re-inspect the suspect region via a cropped/zoomed view before recording a
  pass. Treat whole-frame inspection as sufficient only for coarse-scale defects
  (overall layout, gross overlap, dominant primitives); anything fine-grained
  needs its own crop.
- First observed: 2026-07-09 (seeded from VLM vision-agent resolution-bottleneck
  research: https://www.arunbaby.com/ai-agents/0022-screenshot-understanding-agents/)

### [seed-mistake-17] Self-confirmation bias in same-context review
- Symptom: When the same model/context that implemented a checkpoint also reviews
  it, the review tends to confirm the implementer's own assumptions rather than
  challenge them, missing defects a genuinely independent reviewer would catch.
- Detection cue: Before recording a pass, check whether this review is happening
  in the same context/session that produced the checkpoint. If so, that is a risk
  factor by itself, independent of what the frame shows.
- Fix: Prefer invoking `$manim:manim-visual-review` as an independent pass (fresh
  context) rather than inline within the implementer's own reasoning trace, when
  the caller can arrange it. At minimum, restate the checkpoint's intended claim
  from the work order rather than from the implementer's self-description before
  reviewing, so the review has an external reference point to attack.
- First observed: 2026-07-09 (seeded from independent-verifier-pattern research:
  https://www.mindstudio.ai/blog/verifier-pattern-multi-agent-systems-independent-review)

### [seed-mistake-20] Stale checkpoint screenshot after source edit
- Symptom: `checkpoint_screenshots/manifest.json` (and its PNGs) were captured before
  a later edit added or removed `next_slide()` calls earlier in the deck, so
  checkpoint index N no longer corresponds to the same page/beat content it did
  when the manifest was written. A reviewer opening "checkpoint_013.png" believing
  it shows page X may actually be looking at an earlier page's content, and a
  page-specific review file written against the old index range silently goes
  stale even though its prose diagnosis may still be conceptually valid.
- Detection cue: Before trusting any checkpoint_screenshots/manifest.json entry,
  recompute the current `next_slide()` count per `_page_*` method from the live
  source file and compare against the index range the manifest/review doc cites
  for that page; a mismatch means the screenshots must be regenerated before
  review. Also compare file mtimes: if the manifest predates the current rendered
  mp4/HTML export, treat it as stale by default.
- Fix: Regenerate checkpoint screenshots (and manifest.json) from the current
  render immediately after any source edit that changes `next_slide()` call
  counts anywhere earlier in the deck, before running or trusting any visual
  review against that directory.
- First observed: 2026-07-09, `GossetHuangStoryDeck` page_07/08/09 review
  artifacts (checkpoint_013/014 showed "one-sided cone" content instead of
  "dl-spectrum" after pages 1-6 gained additional checkpoints during repair)

### [seed-mistake-18] Relationship hallucination outpaces object hallucination
- Symptom: A review confirms the right objects are present but still misjudges
  the relation between them (overlap, relative position, direction) — VLMs are
  documented to fail at relational/spatial judgments more often than at object
  identity.
- Detection cue: Do not treat "all the right objects are visible" as evidence
  that their spatial relations are correct. Every relational claim (overlap,
  alignment, connector target) needs its own explicit pairwise check, not a
  general impression from the frame.
- Fix: No separate rendering fix; this is a review-discipline reminder. It
  reinforces `seed-mistake-04`'s requirement to name the specific object pairs
  checked rather than record "no overlap seen" generically.
- First observed: 2026-07-09 (seeded from multi-object hallucination research:
  https://proceedings.neurips.cc/paper_files/paper/2024/file/4ea4a1ea4d9ff273688c8e92bd087112-Paper-Conference.pdf)

## Text & Typography

### [seed-mistake-21] Small-font Text() spacing artifact
- Symptom: A multi-word `Text()` caption or sentence shows irregular gaps
  between specific letters (e.g. "th|is is a co|rrelation fu|n|ction b|etween
  the two p|okes"), reading as broken kerning rather than a deliberate font
  choice. It looks like a compression artifact but survives in a clean PNG.
- Detection cue: For any `Text()` mobject carrying a full sentence or phrase
  (roughly 4+ words, not a short 1-3 word label), check its `font_size`
  against this project's default preview render quality (`-q l`, 480p15). The
  only values actually tested were 18pt (artifact present) and 24-36pt
  (artifact absent); 19-23pt were not individually verified, so treat that
  range as untested, not confirmed-safe. Short labels (page numbers, "then",
  "vs.") were not affected at 18pt, likely because there is too little text
  for the drift to read as a pattern, but that has not been stress-tested at
  very small sizes either. Do not assume a low-quality preview render is
  "good enough to judge text layout but not text crispness" — this artifact
  is a real geometry defect, not a resolution/compression illusion; verify by
  cropping and zooming the exact caption region, not by a full-frame glance.
- Fix: Route sentence-length captions through a registered semantic text role
  whose runtime token is backed by a preview-quality render test. If a caption
  needs a different hierarchy, change or add a named role in the shared runtime
  and test it there; scene code must not choose a numeric `font_size` or apply a
  compensating scale.
  `disable_ligatures=True` is not a fix by itself: it can help at larger
  sizes but did not resolve the artifact at 18pt; do not treat it as a
  substitute for the font-size check without re-rendering and re-inspecting.
  A different font family (e.g. a sans-serif such as Helvetica) also
  resolved the artifact even at 18pt in one test, suggesting the default
  serif font's hinting at small sizes is part of the mechanism — a font-family
  change is a legitimate alternative fix, but treat it as a bigger stylistic
  decision (it changes the deck's typographic identity) rather than a
  drop-in default.
- First observed: 2026-07-10, `GossetHuangStoryDeck` page "target"
  (`corr_caption`, `critical_caption`, `generic_label`/`gh_label`), via
  isolated A/B test renders comparing font sizes 18/24/36, with and without
  `disable_ligatures=True`, and with an alternate font family.

### [seed-mistake-22] Math comparator written as plain Text instead of MathTex
- Symptom: A caption mixes English words and a math comparator using literal
  ASCII inside `Text(...)` (e.g. `Text("... z >= 2 ...")`) instead of real
  math typesetting. The ">=" renders as two adjacent ASCII glyphs, not a true
  >= glyph, and looks visibly inconsistent next to `MathTex`/`compact_note`
  equations elsewhere in the same frame or deck.
- Detection cue: Search the scene file's `Text(` calls for `>=`, `<=`, `!=`,
  or other math operators. Any hit is a candidate defect regardless of how
  minor or "just a caption" it seems — a comparator is math content, not
  prose, even inside an otherwise plain-English sentence.
- Fix: Rewrite as `MathTex`/`compact_note` using `\ge`, `\le`, etc., wrapping
  the surrounding English words in `\mathrm{...}` (this project's existing
  mixed-math convention, e.g.
  `n=\mathrm{number\ of\ stacked\ }P^\dagger P\mathrm{\ layers\ drawn\ above}`)
  rather than mixing a plain `Text` sentence with literal comparator
  characters. Avoid `\text{}` for embedded words unless the active
  `TexTemplate` is confirmed to load `amsmath`; prefer `\mathrm{}`, which this
  project's `LOCAL_TEX_TEMPLATE` already supports without extra packages.
- First observed: 2026-07-10, `GossetHuangStoryDeck` page "target"
  (`claim_caption`, `headline_msg`)
