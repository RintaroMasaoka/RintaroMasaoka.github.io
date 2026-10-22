# Website study-note format

## Equation identities and automatic numbering

`src/utils/note-equations.mjs` numbers referenced display equations after the complete note is composed. `NoteLayout.astro` applies it by default; custom note adapters must call the same function after joining their chapter and figure slots. The output, including MathML, TeX annotations and prose references, already contains final numbers at build time. JavaScript is not needed for numbering.

Give a referenced display equation a stable descriptive ID, not its intended number:

```markdown
$$
Lf=k^2 f
\tag{schrodinger}
$$

式 (@schrodinger) を用いる。
```

The adapter treats the source tag as an identity, assigns the visible number in final reading order, and resolves `(@schrodinger)` to that same number. Moving or inserting equations never requires editing reference numbers. Keep the ID when revising the equation. Choose IDs unique within the complete note, including supplements and chapters. Untagged calculations remain unnumbered. Linked external citations, inline mathematics and code are not rewritten.

Duplicate IDs and unknown explicit references fail the build. The numbered equation also receives a stable `eq-<ID>` HTML anchor. Rendered HTML is output, not an authoring source.

This applies to newly authored and revised website notes. Archived original PDFs and TeX retain their historical numbering. KdV's archive-import script translates archived identities through its migration map before composing the web source.

Run `node scripts/check-note-equations.mjs` to verify insertion/reordering, reference resolution, duplicate/missing-reference failures, and preservation of inline mathematics and source citations.

## Shared reading controls

Reader buttons use borderless Lucide icons with hover and keyboard-focus feedback. The color control shows the action available next: moon for dark mode, sun for light mode, with a matching accessible name. The full-height contents pane and article header sit side by side on desktop. One fixed toggle at the upper-left keeps the same position in both states. On mobile, contents overlays the page; the toggle stays accessible while the article and its header become inert. Desktop section navigation keeps the pane open, while mobile section navigation closes the overlay and restores reading access. Optional source citations and resource links belong after the manuscript rather than in a generic header menu. Ordered lists, including footnotes, retain visible decimal markers.

## Responsive figure layout

Responsive layout is an implementation invariant. Reading controls wrap within the container; scientific canvases use the uniform fitting contract below. Guard those constraints automatically, then inspect the embedded result. Do not introduce viewport-specific changes to internal figure proportions or horizontal figure panning.


## Uniform figure fitting

Scientific figures use the available article width. Fit a complete authored canvas with one scalar scale factor: geometry, text, strokes, markers, internal spacing, legends and mathematical labels all receive exactly the same transformation. Preserve its internal aspect ratio. Do not stretch axes independently or resize/reposition its individual elements in response to screen width. Reader controls and manuscript captions remain outside that scientific canvas.

KdV uses `FigureViewport.astro`: a design-width canvas, a top-left `scale(s)` with `s = availableWidth / designWidth`, and an outer height equal to the design height times that same factor. There is no horizontal panning and no phone-sized maximum on the outer figure. Measure the untransformed canvas when updating interactive content (`clientWidth`), and observe content-height changes as well as available width. Axis domains and parameter ranges are scientific decisions independent of this fitting operation.

Verify the actual embedded narrow and wide views, both themes and affected input states. Check that horizontal and vertical scale factors are equal and that the complete canvas—including its lettering—retains its proportions; then inspect for baseline overlaps or clipping. Uniform fitting does not excuse a defect in the authored canvas.
