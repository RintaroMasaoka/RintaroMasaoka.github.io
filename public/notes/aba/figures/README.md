# Six-vertex, tensor-network and braid figures

The article `/notes/aba/` uses `figure-01.svg` through `figure-23.svg`.
Geometry and labels are authored in the corresponding `.tex` files.

Regenerate all SVGs with Node.js, LaTeX (TikZ and standalone), and dvisvgm:

```sh
node public/notes/aba/figures/generate.mjs
```

The script builds in temporary directories and writes self-contained glyph-outline
SVGs, light/dark variants and `render-manifest.json`. No remote fonts, images or
Figma connection are required to render the article. The conditional PGF driver
in each source makes `latex` produce native SVG geometry; `pdflatex` can also
compile the same source for PDF use.

## Reusable parts

- `aba-tensor-parts.tex`: tensor legs, crossings, marked vertices, strands, rows,
  periodic boundary guides and signed state arrows.
- `aba-ybe-parts.tex`: three-strand Yang–Baxter geometry, boundary labels and
  state arrows. Figures 09, 10, 12 and 13 share the same geometric construction.
- `aba-braid-parts.tex`: positive/inverse crossings, identity strands, cup/cap,
  closed loop, curl and three-strand crossings.

- `aba-xxz-parts.tex`: four-site permutation rows, a differentiated vertex,
  and explicit auxiliary trace closures for the transfer-derivative diagrams.

Each file documents its macro arguments. To add a figure, copy the preamble of
an existing source, input the relevant parts file, and place/compose the macros
inside a `tikzpicture`. Keep vertex types, strand connections, direction,
over/under order, parameters and coefficients explicit in the composition.
Run the generator and inspect the new SVG at its intended article width.

The shared sources use 0.9pt structural lines, TeX lettering, and orange/blue
for positive/negative states. Direction and signs also encode the distinction.
Dark exports recolor structural ink, open-vertex fill and state colors without
changing diagram geometry. The article selects variants using the reader's
active theme; print uses light variants.

The drawings were reconstructed from the article's original image references.
Source-reference and verification records are under `reviews/aba-figures/`.

The periodic grid and transfer row use dotted periodic boundary guides.
XXZ diagrams use circular local tensors containing the exchange connections.
Their scalar normalization belongs to the tensor; inverse tensors carry a
superscript inverse. Figure 23 compares the contraction and its two-site result
side by side.
