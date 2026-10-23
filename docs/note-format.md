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

Responsive layout is an implementation invariant. Reading controls wrap within the container; scientific figures use the fitting choices below. Guard those constraints automatically, then inspect the embedded result. Do not introduce viewport-specific changes to internal figure proportions or horizontal figure panning.


## Figure design and responsive fallback

First author the figure at a deliberate normal size. Choose its geometric composition, lettering, line weights, internal whitespace and relation to the manuscript together; a figure need not fill the article column. Migrating an older narrow figure requires re-authoring its normal typography and composition rather than enlarging the old canvas blindly. Reader controls and captions retain manuscript typography.

Once that authored design is settled, adapt a fixed-composition canvas to a narrower reader container only when necessary. The fallback applies one uniform scale to the complete scientific canvas, including text, legends, strokes and internal spacing. It preserves aspect ratio and does not independently reposition elements. Available width is a ceiling, not an instruction to enlarge a figure.

KdV matching and joined-wave plots use native responsive coordinates: the plot area follows the container while labels, markers and strokes retain fixed CSS sizes. They do not use a transform-scaled canvas.

Other fixed-composition KdV figures use `FigureViewport.astro` with scale=min(1,availableWidth/designWidth), centered at its normal size when space permits. Height uses that same scale. Interactive drawing uses untransformed clientWidth, and content height is observed. Scientific axis domains remain independent of layout. Check the normal design visually as well as the narrow fallback; a correct scale transform alone does not certify good figure design.

## Semantic math color commands

`src/utils/note-math.mjs` owns the palette and shared KaTeX command definitions.
Each command expands to a grouped `\textcolor{color}{glyph}`. Only its letter is
colored; scripts, primes, arguments and surrounding operators retain normal ink.
There are no CSS color selectors or HTML-trust extensions.

| Commands | Meaning |
| --- | --- |
| `\opA`, `\opB`, `\opC`, `\opD` | Monodromy matrix components |
| `\vacAlpha`, `\vacDelta` | Vacuum eigenvalues |

For example, `$\opA_1'(\lambda)\opB(\mu)$` colors only A and B.
The scalar weights `a,b,c` use ordinary TeX and are uncolored.
Do not replace an unrelated spin index `\alpha` with `\vacAlpha`.
Vacuum eigenvalues share their corresponding A/D operator colors. Change
`noteMathColors` once to update every use. Both reader themes use these colors.

The collection renderer, chapter renderer and final equation-numbering pass
use the same macro definitions. Run `node scripts/check-note-math.mjs` and
`node scripts/check-note-equations.mjs` after changing them, then inspect a fresh
build in both themes.
