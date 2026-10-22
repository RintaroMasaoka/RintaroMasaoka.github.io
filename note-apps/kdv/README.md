# KdV study note website adapter

Editable bodies: `content/full.md` (original chapters; revised section sources below) and `content/glm.md` (revised GLM derivation); sole chapter metadata: `note.config.json`. Dedicated Astro page: `src/pages/notes/kdv.astro`; import/render through Astro Markdown, remark-math and rehype-katex in the root locked dependency graph. Build with the root site command. Native details/summary are auxiliary dropdowns; displayed equations have click/tap/hover previews. Sidebar, mobile contents, local theme, progress, and keyboard-friendly analytic reconstruction figure are scoped to this note.

The composite chapter `full` maps to `/notes/kdv/`. `content/full.md` supplies the original chapters and a GLM chapter slot; `KdvBody.astro` inserts `content/glm.md` at that slot without duplicating its text.

The project adopts Study Note HTML Specification 1.0.1 for supported Markdown, native disclosures, math, navigation and theme interactions. `math-hint`, `math-steps`, and custom cross-chapter block syntaxes are not used by this composite manuscript. Generated HTML is not an editable source. Figures are inline SVG rendered by the Astro components with KaTeX labels.

The original full PDF/TeX are preserved under `public/notes/KdV/source/`. The new route is `/notes/kdv/`. Because the existing material uses case-preserving `KdV` and macOS resolves `kdv` to the same directory, local KaTeX assets use `/notes/KdV/katex/` explicitly. KaTeX 0.16.47 CSS/fonts are copied from the root project's installed rehype-katex dependency and served locally; all CSS font URLs are relative to that asset folder. There is no CDN math dependency.

The contour figure shows generic upper-half-plane closure before pole identification, with a small indentation at zero and a fixed 320px canvas; the two plot paths are analytic, fixed-time one-bound-state solutions, not numerical KdV evolution. Changing κ or x0 regenerates samples directly from the displayed formulas.

To refresh local mathematical assets after a lockfile update, run `node note-apps/kdv/scripts/sync-math-assets.mjs` from the site root, then rebuild and verify fonts.

## Full-note composition

The `/notes/kdv/` route contains the complete note. `content/full.md` contains the introduction, soliton/Lax sections and conservation-law appendix, together with the rewritten left-incidence scattering-data and reflectionless reconstruction sections. Its GLM slot is filled from `content/glm.md`, which remains the independently editable revised derivation. `KdvBody.astro` composes these sources and the embedded explanatory figures. The original chapter order is retained; website equation numbers are generated across the complete composed note from stable source identities. Restoring the original text is a format migration and does not confer a new scientific or linguistic acceptance certificate on it.

## Explanatory visuals outside GLM

`TravelingSoliton.astro` and `visuals/soliton.js` plot the analytic one-soliton profile with native speed/time inputs. Its insertion point is preserved by `scripts/restore_original_source.py`; English plot lettering is rendered through KaTeX from `figure-sources/extra-labels.json` and the component sources.

The five original raster images keep their source pixels. Light mode uses multiply compositing; dark mode uses inversion with screen compositing so the white backing follows the reading surface and the colored curve remains distinct. Native image buttons open a zoom dialog supporting keyboard dismissal and scroll/pan. Generic diagram SVG sizing is limited to figure SVGs so KaTeX radical glyphs retain their own geometry.

## Live KdV simulations

The introduction's collision image and three-frame simulation are replaced by two instances of `KdvSimulation.astro`. `visuals/kdv-worker.js` computes the PDE in a Web Worker using `kdv-solver.js`; the player uses those computed frames, not an analytic animation. Nothing computes or moves until the reader starts playback.

The solver evolves surface displacement `eta`, `eta_t=-3(eta²)_x-eta_xxx` (stored in the internal buffer `v`), on a periodic interval of length100 with512 points and `dt=.0025`. Each Strang step applies an exact Fourier linear half-step, an RK4 nonlinear step with the2/3 spectral cutoff, and another linear half-step. Frames are saved every.05 through t=8, before the main pulses cross the boundary. The collision begins with two well-separated sech² pulses; breakup begins with a Gaussian pulse. The original source images remain in the source archive.

Reproduce scientific checks with `node note-apps/kdv/scripts/check-numerics.mjs`: direct-DFT/FFT comparison, inverse normalization, comparison and time-step convergence against the exact one-soliton solution, conservation drift, and comparison with a finer space/time grid. This checks through t=12, beyond the displayed interval. These are numerical checks, not a general error bound. New plot labels are editable KaTeX sources in the component, using the same local KaTeX fonts as the note.

## Portrait layout

`FigureViewport.astro` gives each scientific figure a fixed reading canvas (480px, or420px for the360-unit figures). Only that region scrolls horizontally; the note, captions and input controls remain within the reading column. Labels keep their desktop font sizes instead of changing at a phone breakpoint. A ResizeObserver shows the scroll hint only when the canvas exceeds the region. Native touch panning and keyboard arrow scrolling work without a custom drag handler.

Simulation controls use two equal button columns and a separate speed row at every width. Their14px type and44px minimum control height are constant. Plot legends use a consistent two-row layout. Preserve this separation when adding figures: shared width rules must not rescale scientific canvases or KaTeX's internal SVG glyphs.

## Left-convention reconstruction

`content/glm.md` is the authored ordered-evolution and left GLM derivation. The canonical replacements for §§2.4–2.5 and §§3.4–3.5 are `content/sections/scattering.md` and `content/sections/reflectionless.md`; `content/full.md` contains their assembled copies. Edit these section sources and refresh their corresponding ranges in `full.md` together. `scripts/restore_original_source.py` imports the archived TeX for remaining chapters and always inserts these revised sections. All scattering coefficients and norming constants use the left convention throughout.

`DysonDomain.astro` and `visuals/dyson-domain.js` display the recursion domain in (x′,y′) at fixed x, with an x−y slider. The 240px plot canvas keeps its scale and label size in portrait layouts; the domain extends to negative infinity and collapses to the diagonal at y=x.

Notation: v is soliton speed; c_n are left-tail norming amplitudes. The one-state reconstruction retains c_1 and kappa_1. Hat denotes the Fourier transform without 1/(2pi); inverse/extraction carries 1/(2pi). The spatial interaction picture uses bold f=(f,f_x), D_0 for differentiation on free solutions, with free propagation written exp(d D_0), V for the potential matrix, and subscript I for the interaction representation. Position ordering remains in the main derivation; integrating this same evolution and restoring the original representation yields the sine kernel.

## Wave-height and potential signs

The introduction and §2.1 use upward-positive scaled surface displacement eta. All three early plots show eta directly. At §2.2 the text defines u=-eta and supplies u_t=6uu_x-u_xxx before the Lax operators; u denotes the potential throughout the remainder. At the recovered single soliton, eta=-u is recalled once to read its physical height. Speed is v throughout. `content/sections/introduction.md` is the authored introduction and is included by `restore_original_source.py`; changing signs only in assembled `full.md` would not persist.

The kernel K collects the plane-wave weights of all ordered potential corrections, with the free wave kept separately. The main route derives its support and recursion by direct substitution; the kernel-convergence disclosure checks summability and continuity of the weights.

## Wronskian matching and bound-state residues

Section6 uses `MatchingFigure.astro` / `visuals/matching.js` to compare the left/right endpoint-decaying exact solutions for u=-2 sech²x. Both are divided by their value at zero. A fixed overview and fixed local magnifier show when values and slopes agree; k²=-1 is selectable directly. SVG coordinates are recomputed from available width without scaling labels or requiring horizontal scrolling. Solid accent/dashed ink identify the same solutions in both panels. Colors inherit the common light/dark theme.

Section7 identifies the matching slope difference with the actual point-potential strength. First-order eigenenergy response explains the full-space norm; W factorization then gives the transmission residue. `PointSpectrum.astro` / `visuals/point-spectrum.js` shows the connected state and exact energy-versus-coupling curve, with the unperturbed tangent. Its energy slider is synchronized with the matching figure. Historical response modules remain only as exact-solution helpers.

Run `node note-apps/kdv/scripts/check-point-spectrum.mjs` for independent finite-difference ODE/jump tests and quadrature of the norm-response identity. `check-green-response.mjs` verifies the endpoint profiles; `check-direct-residue.mjs` independently checks the final residue sign across three scales.

## Automatic equation numbering

The site default is documented in `docs/note-format.md`. `KdvBody.astro` calls the shared `src/utils/note-equations.mjs` after composing all chapters and figures. Source tags identify equations; `(@ID)` references resolve at build time. Display numbers follow the final manuscript order, including disclosures and footnotes. Never add a numeric suffix or manually update reference numbers. `scripts/legacy-equation-keys.json` is used only to translate the preserved archive on reimport; it does not determine display numbers.


## Bound-state motion and explanatory coverage

The figure below the tail-motion equation is `BoundStates.astro`, driven by `visuals/bound-states.js`. It solves the finite left Marchenko system at each plotted point with kappa=(1,2,3) and c(0)^2=(12,60,60). Its initial potential is -12 sech²x. The plotted eigenfunctions are normalized instantaneous eigenfunctions, not arbitrary curves moved by hand; their phases follow the positive-left-tail convention continuously. Run `node note-apps/kdv/scripts/check-bound-states.mjs` for independent finite-difference Schrödinger/KdV residuals and norm/orthogonality quadrature. The common vertical axis shows u and lambda_n+2 psi_n; the amplitude display factor is fixed at 2, with a dotted reference at each eigenvalue. Initial, intermediate and separated states must be inspected in both themes and portrait width.

The source of §§2.4–2.5 is `content/sections/scattering.md`; assembled `full.md` must match it. Run `node note-apps/kdv/scripts/check-section-sync.mjs` before publishing changes to either. For a substantive rewrite, compare the original explanatory roles as well as equations and headings. Record which roles remain, which are replaced by a supported explanation, and why any role is no longer needed. A defect in one argument does not by itself justify deleting its useful explanatory job. Use `reader-contract.yaml`'s retained explanatory jobs for the required scope. Acceptance checks apply to the edited section source and its final assembled placement. This permits justified reorganization and deletion; it requires evidence for their effect on reader coverage.
