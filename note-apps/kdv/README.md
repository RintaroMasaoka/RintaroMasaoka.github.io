# KdV study note website adapter

Editable bodies: `content/full.md` (original chapters) and `content/glm.md` (revised GLM derivation); sole chapter metadata: `note.config.json`. Dedicated Astro page: `src/pages/notes/kdv.astro`; import/render through Astro Markdown, remark-math and rehype-katex in the root locked dependency graph. Build with the root site command. Native details/summary are auxiliary dropdowns; displayed equations have click/tap/hover previews. Sidebar, mobile contents, local theme, progress, and keyboard-friendly analytic reconstruction figure are scoped to this note.

The composite chapter `full` maps to `/notes/kdv/`. `content/full.md` supplies the original chapters and a GLM chapter slot; `KdvBody.astro` inserts `content/glm.md` at that slot without duplicating its text.

The project adopts Study Note HTML Specification 1.0.1 for supported Markdown, native disclosures, math, navigation and theme interactions. `math-hint`, `math-steps`, and custom cross-chapter block syntaxes are not used by this composite manuscript. Generated HTML is not an editable source. Figures are inline SVG rendered by the Astro components with KaTeX labels.

The original full PDF/TeX are preserved under `public/notes/KdV/source/`. The new route is `/notes/kdv/`. Because the existing material uses case-preserving `KdV` and macOS resolves `kdv` to the same directory, local KaTeX assets use `/notes/KdV/katex/` explicitly. KaTeX 0.16.47 CSS/fonts are copied from the root project's installed rehype-katex dependency and served locally; all CSS font URLs are relative to that asset folder. There is no CDN math dependency.

The contour figure is a schematic bound-state arrangement; the two plot paths are analytic, fixed-time one-bound-state solutions, not numerical KdV evolution. Changing κ or x0 regenerates samples directly from the displayed formulas.

To refresh local mathematical assets after a lockfile update, run `node note-apps/kdv/scripts/sync-math-assets.mjs` from the site root, then rebuild and verify fonts.

## Full-note composition

The `/notes/kdv/` route contains the complete note. `content/full.md` preserves the original introduction, soliton/Lax/scattering-data sections, reflectionless many-state reconstruction and conservation-law appendix. Its GLM slot is filled from `content/glm.md`, which remains the independently editable revised derivation. `KdvBody.astro` composes these sources and the two existing explanatory figures. The original chapter order is retained; original section-numbered equations and the revised GLM equations use distinct number forms. Restoring the original text is a format migration and does not confer a new scientific or linguistic acceptance certificate on it.
