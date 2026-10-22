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

Reader buttons use borderless Lucide icons with hover and keyboard-focus feedback. The color control shows the action available next: moon for dark mode, sun for light mode, with a matching accessible name. The contents pane owns its close control at every viewport size; the header offers an opener only while the pane is closed. Desktop section navigation keeps the pane open, while mobile section navigation closes the overlay and restores reading access. Optional source citations and resource links belong after the manuscript rather than in a generic header menu. Ordered lists, including footnotes, retain visible decimal markers.

## Responsive figure layout

Responsive layout is an implementation invariant, not a manual phone-preview acceptance step. Use container-bounded widths, intrinsic wrapping/reflow, and container-derived plot coordinates; guard these constraints automatically. Do not rely on viewport-specific patches, shrinking scientific lettering, or horizontal figure panning to make a layout fit.
