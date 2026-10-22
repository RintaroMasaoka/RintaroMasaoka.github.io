# Jost profile figure simplification

Reader task: compare left- and right-decaying Jost solutions as energy varies; recognize their proportionality at the bound energy, as established by W=0 in the preceding mathematics.
Change: remove the W-versus-energy plot and its numerical readout. Preserve signed profiles, scales, potential u=-6 sech²x, E=-1 target, controls, energy range and zero/nonzero status. No new curve data, normalization or lettering convention.
Medium: existing responsive SVG in the Astro manuscript, 375px portrait and ordinary desktop, both existing light/dark themes. Preserve the host CSS variables and KaTeX lettering.
Affected source: MatchingFigure.astro, visuals/matching.js, two explanatory figure references in glm.md, corresponding current project convention documentation. Proof of W constancy and pole identity unchanged.
Check: no references or DOM queries for removed elements; selected energy updates remaining curves and status; inspect endpoints and E=-1 in embedded portrait/desktop; fresh Luna perceptual review of the reduced view. Existing numerical tests confirm unchanged profile model.
