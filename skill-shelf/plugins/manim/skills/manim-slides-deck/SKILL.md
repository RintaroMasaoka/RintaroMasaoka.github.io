---
name: manim-slides-deck
description: "Create, convert, repair, and verify Manim Slides decks for arbitrary papers, lectures, and presentations. Use for semantic checkpoints, page-scoped previews, navigation, reusable Manim layout/runtime gates, cost-aware rendered review, HTML export, or project-adapter integration."
---

# Manim Slides Deck

Build presentations whose source of truth is a Manim Slides `Slide` scene and
whose presenter-visible states are explicit `self.next_slide()` checkpoints.
Keep the stock skill project-agnostic. Read optional project bindings from
`.manim-slides-deck.json` and its referenced project instruction file; never
copy project paths, paper names, chapter counts, registries, or local vocabulary
back into this stock skill.

## Ownership Boundary

The stocked skill owns:

- generic `GatedSlide`, frame, and component-overlap runtime code under
  `assets/manim_slides_gate/`;
- generic render/preflight/convert orchestration under `scripts/`;
- semantic checkpoint, visualization, review, and delivery contracts.

The consuming project owns:

- current artifact scope and its field-level provenance;
- paper/deck-specific source, page order, numbering provider, and catalog;
- project asset/convention paths, audience-contract paths, output paths, and
  additional validators;
- migrations from any previous presentation runtime.

Projects should symlink generic code from stock instead of copying it. Project
adapters may re-export stock APIs for compatibility, but must not fork their
implementation. Project-specific code remains inside the project and is called
through configuration; it is never moved into stock merely because one deck
uses it.

## Project Adapter Protocol

If `.manim-slides-deck.json` exists at the project root, read it before work.
Supported schema:

```json
{
  "schema_version": 1,
  "artifact_defaults": {
    "html_dir": "build/deck-html",
    "report_dir": "build/deck-reports"
  },
  "gated_base_names": ["GatedSlide"],
  "forbidden_registry": ".manim-review-forbidden.json",
  "page_resolution": {
    "generator": ["{python}", "tools/build-page-contract.py"],
    "manifest": "build/page-manifest.json",
    "slots": "build/figure-slots.json",
    "locator_field": "source_page",
    "collection": "records"
  },
  "project_gates": [
    {"name": "scope-check", "command": ["{python}", "-m", "project.validate"]}
  ],
  "project_instructions": ".codex/manim-slides-deck-project.md"
}
```

The generic runner executes configured gates but does not interpret their
domain. Absence of a project config means a standalone generic deck, not an
error. A project gate may report inconsistency; it gains no authority to invent,
delete, enable, reorder, or repair presentation content.

`page_resolution` is optional. When present, `generator` runs before resolution
and must atomically regenerate both the manifest and slot contract from the
current source. Both outputs carry the same nonempty `revision`; every slot
entry carries the selected `page_id`. Each selected page record must
carry uniform project-relative `scene_file` and `scene_class` bindings. The
runner resolves `--page-selector <page_id>` before source inspection, supplies
the resulting context to project gates and Manim through
`MANIM_PAGE_RESOLUTION_JSON`, and uses the same derived locator for slot
validation.
Positional scene arguments remain available for standalone scenes
that have no page catalog; do not mix the two selection modes.

All adapter paths are project-relative and must remain inside the project. The
runner resolves `manim:manim-clip-verifier` as a sibling skill in the same Manim
package. `--verifier-root` is available only for an explicit development
override; do not create a standalone skill link. Output directories belong to
the project through `artifact_defaults`; generic fallback artifacts stay under
`.manim-slides-deck/artifacts/`. `gated_base_names` permits project adapters or
qualified imports without weakening the runtime assertion.

## Artifact Identity and Authority

Identify an existing page from rendered objects, their positions, and adjacent
transitions before trusting class names, page ids, filenames, catalogs, or
manifests. Those are locator candidates, not semantic evidence.

Keep these roles separate:

- a revision-bound project scope contract selects current membership/order;
- a catalog resolves selected identities to implementation metadata;
- a numbering/export manifest records one build;
- the rendered artifact shows what actually exists;
- the user authorizes changes to scope or content.

A validator checks agreement among these artifacts. It must not turn a missing
future unit, catalog extra, stale manifest, or failed lookup into permission to
change the deck. In-scope numbering must fail closed when identity cannot be
resolved. Local numbering is allowed only for an explicitly standalone artifact.

## Semantic Page Resolution

Bind code to a stable semantic page identity, never to its current ordinal.
Adding, removing, or reordering an earlier page must not require edits to scene
dispatch, figure-slot lookup, repair scripts, preview selection, or tests.

The project-owned source contract should give every page a stable `page_id` and
carry it into the generated manifest. A title is an acceptable locator only
when the current manifest proves that it names exactly one semantic page.
`source_page`, `pdf_page`, list position, and exported slide index are build
results: use them after resolution for I/O, never as the identity used to select
what code runs.

Resolve once at the build boundary and pass the resulting page context to every
consumer. Do not duplicate `if page == 12`, `range(1, 15)`, `slots["12"]`, or
similar ordinal knowledge across files. Scene selection, source records, figure
slots, overlays, and verification must consume the same resolved context. If a
selector is absent, ambiguous, or maps to a slot key that is missing, fail before
rendering rather than guessing or shifting neighboring pages.

Use the package-owned resolver:

```bash
python3 "$MANIM_PACKAGE_ROOT/skills/manim-slides-deck/scripts/resolve_slide_page.py" \
  --manifest build/page-manifest.json --selector topology \
  --locator-field source_page \
  --slots build/figure-slots.json --json
```

It accepts record-list manifests and declared `pages`/`units`/`records`
collections, prefers exact
`page_id`, falls back to an exact unique title, groups checkpoint records that
belong to one page, and verifies the derived slot key, semantic identity, and
build revision against the slot contract. The project must declare
which locator field its slot and dispatch adapters consume; the resolver never
aliases `source_page`, `pdf_page`, or another coordinate. Its Python API returns a
`PageResolution`; use that object instead of rediscovering an ordinal in each
consumer. The stock gate runner can resolve `scene_file` and `scene_class` from
the same records and exposes the serialized resolution to the scene and project
gates as `MANIM_PAGE_RESOLUTION_JSON`. Regenerate the manifest from the current
source before resolving it.

Before handoff, prove three cases: the target resolves in the current deck; an
unrelated page inserted before it leaves the semantic binding unchanged; and a
duplicate title without distinct `page_id` values fails closed. A raw page count
does not establish any of these properties.

## Page Task State Machine

For a page edit, use this completion sequence:

1. `PAGE_SCOPE_BOUND`: identify the semantic page, destination identity, source,
   adapter revision, and whether integration can change.
2. `PAGE_RENDERED`: render the smallest scene containing only that page.
3. `PAGE_REVIEWED`: pass audience, asset/convention, semantic-checkpoint,
   visualization, runtime geometry, and visual-review gates.
4. `PAGE_HTML_EXPORTED`: convert that reviewed render revision to HTML.
5. `HANDOFF_READY`: verify assets and forward/backward checkpoint navigation,
   then provide the page-preview HTML.
6. If order, numbering, shared conventions, audience handoff, or neighboring
   transitions changed, rebuild and verify the integrated artifact separately.

Do not report a page edit as complete from `PAGE_RENDERED` or `PAGE_REVIEWED`.
A low-quality render, mp4, screenshot, or successful runtime gate is internal
review evidence, not the user-facing preview.  When handing the page back to the
user, link the HTML produced from the reviewed revision; if HTML export or
navigation verification is still pending, report the task as incomplete rather
than offering the mp4 as a substitute.

Do not substitute source code, a screenshot, a full-deck fragment, or an mp4 for
the page-preview HTML deliverable. Screenshots are review evidence, not the deck.

## Audience and Model Contract

Before implementation, write the viewer baseline, introduced terms/symbols,
motivation, and required reasoning bridges in a revisioned project artifact.
Have an independent audience reviewer check use-before-introduction, undefined
motivation, and unsupported jumps after rendering.

Treat visualization as externalized understanding. A checkpoint does not pass
merely because equations are correct or copied in source order. Require a model
statement naming entities, relations, invariants, changes, why the conclusion
follows, and which visible property encodes each role.

Apply two counterfactuals:

1. Hide sentence-length prose: is the central relation still inspectable?
2. Replace the visual with source equations/claims in their original order: is
   explanatory structure lost?

If either answer exposes no model, return to visual planning. Do not repair by
adding decoration, more prose, or more mechanical derivation steps.

## Semantic Checkpoints

Derive checkpoints from changes in audience understanding, not implementation
history. Preserve stable states where the presenter may frame a question, let
the audience predict, compare before/after, interpret a transformation, or hold
on a payoff.

For every adjacent pair apply:

- collapse: does the segment contain multiple independently discussable beats?
- triviality: does the checkpoint exist only because code created or moved an
  object without changing audience state?
- navigation: do forward and backward land on coherent explainable states?

Important continuous stories normally need more checkpoints. Do not split a
trajectory when continuous motion itself is the meaning; bracket it with
inspectable before/after states.

## Runtime Geometry Gate

Continuity and geometry are release-blocking slide correctness gates.  DRY is a
separate development concern: passing an asset registry audit is never evidence
that an animation preserves visible state correctly.

Do not expose source analysis and runtime inspection as competing acceptance
gates. They are evidence providers. Aggregate their findings by problem class
(`continuity`, `geometry`, `attention`, `DRY`) and decide severity there. A
heuristic source advisory must not prevent a stronger rendered-state or
animation-trace detector from running.

The build harness, not a human checklist, owns advisory acknowledgement. On a
first build with warnings it emits a fingerprinted warning-review manifest and
blocks generation. A subsequent build proceeds only when every current warning
has a nonempty disposition, rationale, evidence, and reviewer; new, changed,
stale, or unreviewed fingerprints block again.

`MANIM_SKIP_RUNTIME_GATES=1` is an emergency diagnostic escape hatch, not a
build option. Never set or recommend it without explicit human approval for
that specific diagnostic run. Record the approval and reason in the task report.
The formal build harness must remove the variable from its render environment,
so a skipped diagnostic can never be promoted as a gated artifact.

In the commands below, set `MANIM_PACKAGE_ROOT` to the absolute root of the
active Manim package, the directory containing `.codex-plugin/plugin.json`.
Link the package-owned runtime asset into the project:

```bash
python3 "$MANIM_PACKAGE_ROOT/skills/manim-slides-deck/scripts/link_runtime.py" /path/to/project
python3 "$MANIM_PACKAGE_ROOT/skills/manim-slides-deck/scripts/link_runtime.py" /path/to/project --check
```

Use it directly:

```python
from manim_slides_gate import GatedSlide

class PagePreview(GatedSlide):
    def construct(self):
        self.play(...)
        self.next_slide()
```

`next_slide` automatically classifies the live scene and runs frame and logical
component overlap checks.  Projects may point `component_database` at a JSON
database containing classifier branches, composite families, chrome, and exact
overlap exceptions.  The stocked runtime owns the schema and mechanics; the
project owns accumulated semantic knowledge.  `checkpoint_gate` remains only
as a backwards-compatible one-checkpoint override.

Pass semantic components, not glyphs or all recursive submobjects. Group
intentional internal overlays into one asset. Allow a deliberate overlap only as
an exact pair; never use file-wide suppression. Bounding boxes are coarse:
rotated, hollow, curved, or sparse geometry may require rendered inspection.

## Animation Attention Gate

Treat three or more top-level animations in one `play()`, star-expanded lists,
and zero/nonliteral-lag groups as attention-sequencing warnings. Use separate
plays or a visibly positive `LaggedStart` unless simultaneity exposes one
relation. For a justified case place this immediately above the call:

```python
# manim-review: intentional-simultaneous
```

Even two animations are risky when sentence-length `Text` and a new diagram
appear together. Sequence reading and inspection. Audience-facing literal
`run_time < 0.35` is a coarse warning; cleanup-only disappearance is exempt.
Use `# manim-review: intentional-quick` only when brevity is part of the event.

## Graph Unit-Aspect Gate

Default 2D `Axes` and `NumberPlane` to 1:1 coordinate-unit scale:

```text
x_length / (x_max - x_min) == y_length / (y_max - y_min)
```

This does not require `x_length == y_length` when the coordinate ranges differ.
Declare literal `x_range`, `y_range`, `x_length`, and `y_length` so strict
preflight can calculate the ratio. For an intentional non-1:1 plot, place
`# manim-review: nonunit-graph-aspect <semantic reason>` immediately above the
constructor and record which comparison becomes clearer and which geometric
readings—slope, angle, distance, or isotropy—are no longer literal. A Python
default, raw data range, page fit, or leftover space is not a semantic reason.

## Equation and Typography Gate

- Before coding a formula change, counter the target-regeneration bias: inspect
  the currently visible equation and treat it as the source of truth. Do not
  generate a fresh complete target merely because it is easier to express.
  Decide continuity only for the next animation; later mathematical meaning and
  animation design remain revisable.
- Use `MathTex`/`Tex` for math and `Text` for prose.
- Decide whether alphabetic tokens are variables, fixed upright labels
  (`\mathrm`), operators (`\operatorname` or standard commands), or prose
  (`\text`). Do not apply a vocabulary replacement mechanically.
- Default every change in TeX content or term structure from one displayed
  formula to another to `TransformMatchingTex`. If TeX content is unchanged and
  only position, scale, opacity, or color changes, animate the existing Mobject
  with `.animate` instead; do not create a replacement formula. For content
  changes, do not fall back to `Transform`,
  `ReplacementTransform`, `FadeTransform`, or whole-formula fade-out/fade-in
  merely because they require less TeX planning. Use a different animation only
  when visible correspondence is intentionally absent, the objects are not
  meaningfully matchable TeX, or a checked Manim limitation prevents matching.
- Construct both formulas so the largest contiguous invariant parts that share
  one animation fate have identical TeX keys. Split only where a part is
  inserted, deleted, changed, or moves independently. This is the default
  implementation pattern:

  Apply this design order strictly:

  1. write the complete source formula as one semantic expression;
  2. write the complete target formula as one semantic expression;
  3. compare those two wholes and derive the `TransformMatchingTex`
     correspondence;
  4. only then split each whole at the correspondence boundaries.

  Do not begin with the changed fragment and reconstruct the surrounding
  equation around it. Segmentation is derived from matching two unified
  formulas, not the starting representation of the formula.

  A transition is nontrivial when it has more than one plausible
  correspondence, invariant material embedded inside a changed TeX region,
  repeated keys, different color or motion fates inside one candidate key,
  changed layout or root ownership, or any of the risky TeX structures listed
  below.  For every such transition, make a correspondence manifest before
  editing scene code.  Record:

  - the complete source and target TeX expressions;
  - the actual ordered `tex_string` keys produced by Manim with the same
    `TexTemplate`, constructor arguments, and `substrings_to_isolate` settings;
  - for each key, whether it is invariant, changed, inserted, deleted, or moves
    independently;
  - key multiplicity, color fate, and the complete-formula root that owns it.

  A simple insertion or replacement with unique literal constructor keys and
  one obvious correspondence may keep the same information as a short inline
  source/target/key note rather than a separate manifest artifact.  It does not
  skip the correspondence decision or rendered review.

  Do not infer keys from the apparent Python or TeX substrings.  Construct the
  two candidate `MathTex` objects in a probe and inspect their resulting parts.
  This is mandatory when the change crosses braces, superscripts, subscripts,
  fractions, radicals, commands, repeated tokens, or substring isolation:
  Manim may repair or split those strings differently from the implementer's
  mental model.

  Reject the proposed segmentation before implementation when any of these is
  true:

  - a mathematically invariant substring is swallowed by a changed key;
  - a key contains glyphs with different animation or color fates;
  - repeated identical keys make the intended pairing ambiguous;
  - the split changes TeX grouping, baseline, spacing, or visible color;
  - source or target is only a fragment, or the surrounding formula is rebuilt
    with `VGroup.arrange()` instead of remaining one TeX layout;
  - the source root has child groups promoted to scene roots when the complete
    root transform begins.

  The largest-invariant-chunk rule is a completeness requirement, not merely a
  warning against over-splitting: all visible invariant material that has one
  fate must be represented by matching keys.  A transform is still too coarse
  when it uses `TransformMatchingTex` but regenerates avoidable invariant
  material inside one unmatched chunk.

```python
old = MathTex("100")
new = MathTex("100", "0", arg_separator="")
self.play(TransformMatchingTex(old, new))
```

`old` and `new` above are the complete displayed formula containers. The
unchanged and changed pieces are submobjects inside those containers. Do not
reduce the transition to `TransformMatchingTex(old[i], new[j])` merely because
only that fragment changes: this abandons formula-level layout and ownership,
and often leaves the newly constructed target container unmanaged. A
fragment-only animation is appropriate only when the surrounding formula is an
intentionally separate, persistent asset with its own declared ownership.

Here `"100"` is one maximal invariant chunk and the final `"0"` is the only
new chunk. Do not write `MathTex("1", "0", "0")` for the source: repeated
identical keys make correspondence needlessly ambiguous.

For a local replacement:

```python
old = MathTex(r"x^2 + ", "1", arg_separator="")
new = MathTex(r"x^2 + ", "2", arg_separator="")
self.play(TransformMatchingTex(old, new))
```

For independently moving terms, expose each independently moving maximal part:

```python
old = MathTex("a", "+", "b", "=", "c")
new = MathTex("a", "=", "c", "-", "b")
self.play(TransformMatchingTex(old, new))
```

Multiple constructor strings are the simplest route. `{{ ... }}` groups and
`substrings_to_isolate=[...]` are alternative official mechanisms. Inspect the
resulting boundaries: substring isolation separates every matching occurrence
and can create repeated ambiguous keys.
Use `key_map={old_key: new_key}` only when two parts should correspond despite
different TeX strings. `transform_mismatches=True` and
`fade_transform_mismatches=True` control genuinely unmatched parts; they do not
repair missing segmentation.
- Do not dissolve an entire equation for a local change. `100 -> 1000` should
  visually continue/move the unchanged `100` part and introduce only the new
  zero. `TransformMatchingTex` may still replace the source root with the target
  root during official cleanup; root identity is not the visual continuity
  criterion.
- Do not maximize chunks across different animation fates. “Maximum” means
  maximal under the current correspondence: adjacent material stays together
  only when it remains invariant and moves/transforms as one unit. Decide this
  for the current transition; do not freeze the later derivation or story.
- Static preflight warns about undivided local changes, low matching-key
  coverage, ambiguous repeated keys, and content-changing formula transforms
  that bypass `TransformMatchingTex`. It also warns when matching transforms are
  applied only to indexed or `get_part_by_tex` fragments of a larger formula.
  Treat these as review leads, not claims about mathematical meaning. An
  intentional absence of visible correspondence is handled through the normal
  warning-review rationale, not an inline bypass.
- Runtime continuity review also compares identical or highly similar TeX roots
  across transforms. It warns when font/scale changes or unexplained movement
  exceed the project thresholds. For `TransformMatchingTex`, inspect its
  official source-to-target ownership handoff rather than treating source-root
  removal and target-root addition as a continuity failure by themselves.
- A matching transform is not complete when its final formula is merely
  correct.  Review the continuous transition plus a risk-selected middle frame,
  its final frame, and the next checkpoint landing.  Confirm that invariant
  keys stay visually continuous, changed keys alone change, color and TeX
  layout remain stable, and official cleanup leaves exactly the intended target
  root without black/blank frames, stale fragments, duplicate roots, or a
  position jump.  Do not export or hand off HTML until this rendered ownership
  and correspondence review passes.
- Keep repeatedly rejected notation or construction patterns in the
  project-owned `forbidden_registry`; do not rely on conversational memory.
  The stock verifier owns the registry schema and detector, while the project
  owns its entries and reasons. Register a literal with:

```bash
python3 "$MANIM_PACKAGE_ROOT/skills/manim-clip-verifier/scripts/forbidden_registry.py" add '\Theta' \
  --reason 'project notation policy rejects this shorthand' \
  --replacement 'state the approved explicit bound'
```

Use `--kind regex` only when a literal cannot express the rejected pattern.
Every rule requires a reason; replacements are guidance, not automatic edits.

When the user says that a word, symbol, notation, Manim construct, or animation
pattern must not be used, remove it from the current work immediately and offer
to register it in the project NG list. Show the proposed pattern, reason,
replacement guidance, and scope, then obtain user confirmation before writing
the project-owned registry. Distinguish a one-page correction from a durable
project convention; store the former in the page/task contract only. Do not use
a broad regex when the prohibition depends on mathematical or animation
context. After confirmation, use `forbidden_registry.py add` so the one-command
deck gate enforces the decision on later work.

## Assets, Conventions, and Layout

Use the project's asset/convention adapter when present. Reuse semantic concept
identities across scale, orientation, data, density, and local layout variants.
Do not hard-code reusable geometry or invent a new surface convention for the
same concept.

Compose ordinary pages with nested declarative row/column/grid layout using
Manim `arrange`/`arrange_in_grid` or the stocked `manim_layout` package. Numeric
coordinates belong to intrinsic geometry, plots, graphs, circuits, or faithful
figure reconstruction, not routine page composition. Reflow the whole
composition when adding an element.

Write layout at the logical grouping level: `Row(left_role, right_role)` for
left/right argument roles, then `Column(..., align="start|center|end")` or
`Grid(...)` for items sharing one box. Do not reproduce those relations through
per-object coordinates. Every numeric `shift`, `move_to`, `set_x`, `set_y`,
`set_z`, or `set_coord` outside the layout engine requires
`# manim-layout: allow-absolute reference-system=<id> <reason>` immediately above the
call. Strict preflight records the reason for reviewer inspection; a bare marker
does not suppress the warning.

## Cost-Aware Review

1. Run runtime/static gates.
2. Render one page or scene continuously.
3. Reconcile every checkpoint landing and incoming transition with its manifest.
4. Watch the continuous segment and mark only risks that need a full-resolution
   still or crop: dense geometry, possible overlap, thin primitives, small text,
   ambiguous correspondence, or a central numerical process.
5. Invoke `$manim:manim-visual-review` on the segment and selected risks.
6. Inspect exported HTML only for runtime/navigation/asset questions.

Do not take one screenshot per checkpoint, use contact sheets as visual proof,
or route primary design feedback through a browser. A clean mechanical gate
reduces escalation; it never proves arrow meaning, diagram correctness,
motivation, or explanatory quality.

## History-to-Workflow Refinement

Treat Codex history as noisy evidence about the workflow, not as a rule file.
Collect real user turns with `scripts/collect_codex_feedback.py`; it excludes
injected context blocks, filters by exact project `cwd`, and deduplicates turns
replayed by resume or rollout forks. Write its output under a project-owned,
private review directory, never into the stock skill:

```bash
python3 "$MANIM_PACKAGE_ROOT/skills/manim-slides-deck/scripts/collect_codex_feedback.py" \
  --project "$PWD" \
  --out .manim-slides-deck/history-review/candidates.jsonl
```

Do not convert keyword frequency or the user's latest wording directly into a
prompt prohibition. For each accepted candidate, record the observed symptom,
production condition, accepted-but-wrong state, missing decision contract,
existing control that failed, and the least powerful intervention that would
catch the sibling failure family. Route it to exactly one primary owner:

- prompt/contract when the choice must change before code exists;
- static gate when source syntax is useful evidence;
- runtime gate when scene state or animation trace is required;
- blind review when meaning, motivation, or audience state is required;
- project registry when the decision is a durable local convention.

Keep rejected, duplicate, ambiguous, and already-covered candidates visible in
the project ledger with a disposition. Promote a change only after checking one
original case, one sibling case, and one boundary case. Re-run the history review
after real work and prefer evidence that the same failure escaped again over a
larger checklist.

## Single Automated Command

From the consuming project root run:

```bash
python3 "$MANIM_PACKAGE_ROOT/skills/manim-slides-deck/scripts/run_deck_gates.py" \
  path/to/page.py PagePreviewClass \
  --manifest path/to/checkpoint_manifest.json \
  --coverage path/to/visual_coverage.json \
  --html path/to/page-preview.html
```

For a catalogued page, select the stable identity and let the adapter resolve
the scene and current ordinal:

```bash
python3 "$MANIM_PACKAGE_ROOT/skills/manim-slides-deck/scripts/run_deck_gates.py" \
  --page-selector topology --html build/topology.html
```

The command runs Python/source checks, checkpoint-gate coverage, companion
preflight/source verification, configured project gates, Manim Slides render,
one-file HTML conversion, and HTML sanity. Warnings block by default.
`--static-only` is diagnostic and returns incomplete. The JSON result records
judgment gates as pending; automated success is not `HANDOFF_READY`.

Use `extract_checkpoint_screenshots.py` only for risk-selected checkpoint videos.

## Verification and Handoff

Before acceptance verify:

- source imports and low-quality render;
- every stable landing passes `checkpoint_gate`;
- checkpoint ordering and forward/backward coherence;
- audience contract and model externalization;
- equation edit locality and typography;
- asset/convention reuse and declarative layout;
- continuous visual coverage plus selected full-resolution risks;
- HTML existence, asset resolution, and navigation;
- project adapter gates, when configured.

Report source paths, scene class, checkpoint list, adapter/config revision,
render/review evidence, HTML path, and any pending judgment or integration risk.
The handoff link for a completed page edit must be the verified HTML. Mention an
mp4 only as supporting review evidence, never as the preview or primary handoff.
