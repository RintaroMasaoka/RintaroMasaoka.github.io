# Bounded KdV figures

## Shared contract

- Reader: calculus, Fourier methods, residues, and the one-dimensional Schrödinger equation are already familiar.
- Source authority: `content/full.md` §2.1; §2.2 through the isospectral result (2.17); §4.2 through the definition of `Res` after (4.26). The original manuscript is not edited by this figure task.
- Renderer: inline SVG with editable analytic geometry; compact axis and mathematical labels use KaTeX in `foreignObject`, while long equations and legends use HTML KaTeX outside the SVG to preserve their rendered width. Label sources and meanings are listed in `extra-labels.json`.
- Palette: project theme variables `--ink`, `--muted`, `--accent`, `--blue`, `--line`, `--paper`, and `--surface`. The soliton figure uses line style plus color to distinguish the current profile from its reference.
- Reading surface: responsive inline figures with an SVG viewBox no taller than 530 units; at 320px viewport the anticipated usable plot width is about 272px. Captions remain Japanese outside the drawing.

## Traveling one-soliton

- Point of use: after §2.1.
- Inference: changing `t` translates the profile; changing signed velocity `v<0` changes height and width together. Higher waves travel faster toward negative x.
- Relation: plot `eta(x,t)=-2v sech²(sqrt(-v)(x-vt))` for `v ∈ [-1,-.25]`, default `v=-.5`, `t ∈ [-8,8]`, `x ∈ [-12,12]`, and display `0 ≤ eta ≤ 2.2`. Samples directly evaluate the analytic formula, with no numerical PDE claim.
- Motif: solid accent curve for the current analytic profile. No separate time-zero reference is drawn in this figure. The numerical collision/breakup figures retain their dashed initial profiles.
- Usable extent: 600×320 SVG units with the formula and controls outside the plot. The fixed640px figure canvas scrolls within narrow reading columns; controls remain within the column.

## Operator projection

- Point of use: at the end of §4.2 after the definition of `Res`.
- Inference: `(A)_{≥0}` retains all nonnegative powers; `Res(A)` selects coefficient `a_{-1}` attached to `∂^{-1}`.
- Relation: schematic series `A=Σ_{j=-∞}^{m} a_j∂^j` with a negative-power group and a nonnegative group ending at finite `m`. Each shown coefficient and power occupies a separate cell; ellipses denote omitted terms. The residue leader terminates at the highlighted coefficient cell, not at the power cell.
- Motif: the external group headings name negative and nonnegative powers; a blue bracket routes the nonnegative group to the projection, and an accent leader routes the highlighted `a_{-1}` coefficient cell to the residue output. Separate cells keep coefficient and power roles visible.
- Usable extent: 600×330 SVG units plus the external group headings. The same truncation applies to `L_KP^{2n+1}` to obtain `B_{2n+1}`, as stated in the outside Japanese caption.

## Verification status

Source equations and formulas were checked against the bounded passages above. Geometry is generated from the exact stated functions; no hand-fitted samples or numerical PDE evolution are used. The KaTeX source inventory is retained with the components. Site build and embedded-size visual inspection are pending the coordinator's integration pass; this record does not claim visual acceptance.
