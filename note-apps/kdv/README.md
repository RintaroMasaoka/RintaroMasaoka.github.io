# KdV study note website adapter

Editable bodies: `content/full.md` (original chapters; revised section sources below) and `content/glm.md` (revised GLM derivation); sole chapter metadata: `note.config.json`. Routes: `src/pages/notes/kdv.astro` and `src/pages/notes/kdv/[chapter].astro`, sharing `components/KdvPage.astro`; import/render through Astro Markdown, remark-math and rehype-katex in the root locked dependency graph. Build with the root site command. Native details/summary are auxiliary dropdowns; displayed equations have click/tap/hover previews. The common StudyNoteLayout, study-note.css and study-note-reader.ts own the header, contents, theme, progress, references and disclosure controls. Figure-specific CSS and widgets remain in this adapter. Header icons use the common ISC-licensed Lucide ReaderIcon component.

The note has seven chapter pages and a bibliography page, ordered solely by `note.config.json`. `/notes/kdv/` opens the introduction; canonical chapter URLs end in `introduction/`, `solitons/`, `inverse-scattering/`, `hierarchy/`, `sato-kp/`, `quantization/`, `w3/`, and `references/`. `content/full.md` supplies the assembled manuscript and a GLM slot; `KdvBody.astro` inserts `content/glm.md` and the scientific figures without duplicating their sources.

The project adopts Study Note HTML Specification 1.1.0 for supported Markdown, native disclosures, math, navigation and theme interactions. `math-hint`, `math-steps`, and custom cross-chapter block syntaxes are not used by this composite manuscript. Generated HTML is not an editable source. Figures are inline SVG rendered by the Astro components with KaTeX labels.

The original full PDF/TeX are preserved under `public/notes/KdV/source/`. The new route is `/notes/kdv/`. Because the existing material uses case-preserving `KdV` and macOS resolves `kdv` to the same directory, local KaTeX assets use `/notes/KdV/katex/` explicitly. KaTeX 0.16.47 CSS/fonts are copied from the root project's installed rehype-katex dependency and served locally; all CSS font URLs are relative to that asset folder. There is no CDN math dependency.

The contour figure shows generic upper-half-plane closure before pole identification, with a small indentation at zero and a fixed 320px canvas; the two plot paths are analytic, fixed-time one-bound-state solutions, not numerical KdV evolution. Changing κ or x0 regenerates samples directly from the displayed formulas.

To refresh local mathematical assets after a lockfile update, run `node note-apps/kdv/scripts/sync-math-assets.mjs` from the site root, then rebuild and verify fonts.

## Full-note composition

The `/notes/kdv/` route contains the introduction, with the common chapter navigation. `content/full.md` contains the introduction, soliton/Lax sections and conservation-law appendix, together with the rewritten left-incidence scattering-data and reflectionless reconstruction sections. Its GLM slot is filled from `content/glm.md`, which remains the independently editable revised derivation. `KdvBody.astro` composes these sources and the embedded explanatory figures. The original chapter order is retained. `scripts/chapter-pages.mjs` calls the common equation-numbering pass on the complete composition, then splits the resulting HTML at the existing chapter headings. Thus numbers and stable identities remain note-wide. It distributes footnotes to their reading pages, rewrites cross-chapter anchors and supplies equation previews with source links. The landing page resolves old full-note fragment URLs to their new chapter. Chapter titles become page h1 elements; subsection headings feed the common sidebar. The common layout owns all reading controls and previous/next links. Restoring the original text is a format migration and does not confer a new scientific or linguistic acceptance certificate on it.

## Explanatory visuals outside GLM

`TravelingSoliton.astro` and `visuals/soliton.js` plot the analytic one-soliton profile with native speed/time inputs. Its insertion point is preserved by `scripts/restore_original_source.py`; English plot lettering is rendered through KaTeX from `figure-sources/extra-labels.json` and the component sources.

The five original raster images keep their source pixels. Light mode uses multiply compositing; dark mode uses inversion with screen compositing so the white backing follows the reading surface and the colored curve remains distinct. Native image buttons open a zoom dialog supporting keyboard dismissal and scroll/pan. Generic diagram SVG sizing is limited to figure SVGs so KaTeX radical glyphs retain their own geometry.

## Live KdV simulations

The introduction's collision image and three-frame simulation are replaced by two instances of `KdvSimulation.astro`. `visuals/kdv-worker.js` computes the PDE in a Web Worker using `kdv-solver.js`; the player uses those computed frames, not an analytic animation. Nothing computes or moves until the reader starts playback.

The solver evolves surface displacement `eta`, `eta_t=(3/4)(eta²)_x+(1/4)eta_xxx` (stored in the internal buffer `v`), on a periodic interval of length100 with512 points and `dt=.01`. Each Strang step applies an exact Fourier linear half-step, an RK4 nonlinear step with the2/3 spectral cutoff, and another linear half-step. The shared `visuals/simulation-config.js` supplies the solver, worker, initial-condition formula, plot domain and time controls. Frames are saved every.2 through t=32, before the main pulses cross the boundary. The time slider uses actual Sato time0–32, step.2, rather than frame indices. The collision begins with two well-separated sech² pulses (kappa1 at x20, kappa.5 at x8); breakup begins with a Gaussian pulse. The original source images remain in the source archive.

Reproduce scientific checks with `node note-apps/kdv/scripts/check-numerics.mjs`: direct-DFT/FFT comparison, inverse normalization, comparison and time-step convergence against the exact one-soliton solution, conservation drift, and comparison with a finer space/time grid. This checks through t=48, beyond the displayed interval. These are numerical checks, not a general error bound. New plot labels are editable KaTeX sources in the component, using the same local KaTeX fonts as the note.

## Portrait layout

`FigureViewport.astro` gives each scientific figure a fixed reading canvas (480px, or420px for the360-unit figures). Only that region scrolls horizontally; the note, captions and input controls remain within the reading column. Labels keep their desktop font sizes instead of changing at a phone breakpoint. A ResizeObserver shows the scroll hint only when the canvas exceeds the region. Native touch panning and keyboard arrow scrolling work without a custom drag handler.

Simulation controls use two equal button columns and a separate speed row at every width. Their14px type and44px minimum control height are constant. Plot legends use a consistent two-row layout. Preserve this separation when adding figures: shared width rules must not rescale scientific canvases or KaTeX's internal SVG glyphs.

## Left-convention reconstruction

`content/glm.md` is the authored ordered-evolution and left GLM derivation. The canonical sources for §§2.4–2.5, the multi-state continuation of §3.3, and §§4–5 are `content/sections/scattering.md`, `content/sections/reflectionless.md`, and `content/sections/hierarchy.md`; `content/full.md` contains their assembled copies. The reflectionless range is delimited by stable composition comments rather than a visible section number. Edit these section sources and refresh their corresponding ranges in `full.md` together. `scripts/restore_original_source.py` imports the archived TeX for remaining chapters and always inserts these revised sections. All scattering coefficients and norming constants use the left convention throughout.

The former interval/domain recursion figures are no longer embedded in the reading path. Their component sources are retained as historical material.

Notation: v is soliton speed; c_n are left-tail norming amplitudes. The one-state reconstruction retains c_1 and kappa_1. Hat denotes the Fourier transform without 1/(2pi); inverse/extraction carries 1/(2pi). The spatial interaction picture uses bold italic f=(f,f_x/(ik)), written with `\boldsymbol{f}`, D_0=ik sigma_x for the free generator, V=u E_21/(ik) for the potential matrix, and subscript I for the interaction representation. The state and its interaction representation use italic f throughout. Dyson ordering remains in the main derivation; its zeroth term is the free wave, and the Fourier transform of the correction defines K. Convergence, one-sided support, and regularity are checked in the adjacent disclosure.

## Wave-height and potential signs

The introduction and §2.1 use upward-positive scaled surface displacement eta. All three early plots show eta directly. Solitons have signed velocity v<0. At §2.2 the text defines u=-eta and supplies u_t=(u_xxx-6uu_x)/4 before the Lax operators; u denotes the potential throughout the remainder. At the recovered single soliton, eta=-u is recalled once to read its physical height. Speed is v throughout. `content/sections/introduction.md` is the authored introduction and is included by `restore_original_source.py`; changing signs only in assembled `full.md` would not persist.

Section 3.1 defines S as the Fourier synthesis that replaces free waves by Jost solutions and establishes LS=S(-partial_x^2). Distributional differentiation of the kernel gives u=2 dK(x,x)/dx. Section 4 recalls this same S and relation before developing their formal pseudodifferential representation; it does not redefine S. The stable equation identities `dressing-transform` and `dressing-intertwining` are owned by section 3.1.

## Wronskian matching and bound-state residues

The bound-state pole discussion (§3.2.3) uses `MatchingFigure.astro`, `visuals/matching.js` and `visuals/matching-model.js` for u=-2 sech²x. The actual endpoint-normalized Jost functions are plotted without sign or amplitude rescaling on common continuously fitted linear axes. At E=-1 both are sech(x)/2. The physical W readout is visible; its energy graph is absent. The next joined-wave figure uses the same potential, with its own value-one joining normalization. Run `node note-apps/kdv/scripts/check-matching-model.mjs` for the plotted model, raw W and tail normalization.

The matching/residue argument (§3.2.4–3.2.6) fixes a nonnodal matching point x_0 and normalizes each Jost solution by its value there. The common value is f(x_0;E)=1 and the derivative jump is Delta(E)=W/[f_-(x_0,-k)f_+(x_0,k)], also the point-potential strength. The text justifies nonvanishing denominators locally near E_n before defining f. The joined-wave figure uses centered u=-2 sech²x and explicitly specializes x_0=0. The joined waveform has unit matching value, no position slider and no max normalization. Generic norm response and residue cancellation retain x_0; final residue independent of it. Native responsive coordinates preserve label sizes.

Run `node note-apps/kdv/scripts/check-two-bound-state.mjs` for the two-state ODE, Wronskian, eigenfunctions, node count, full-range finiteness, product-continuity/jump, point-potential response, and matching-point independent residues. Run `node note-apps/kdv/scripts/check-adaptive-ranges.mjs` for range continuity and dense-grid containment. Run `node note-apps/kdv/scripts/check-point-spectrum.mjs` for independent finite-difference ODE/jump tests and quadrature of the norm-response identity. `check-green-response.mjs` verifies the endpoint profiles; `check-direct-residue.mjs` independently checks the final residue sign across three scales.

## Automatic equation numbering

The site default is documented in `docs/note-format.md`. `KdvBody.astro` calls the shared `src/utils/note-equations.mjs` after composing all chapters and figures. Source tags identify equations; `(@ID)` references resolve at build time. Display numbers follow the final manuscript order, including disclosures and footnotes. Never add a numeric suffix or manually update reference numbers. `scripts/legacy-equation-keys.json` is used only to translate the preserved archive on reimport; it does not determine display numbers.


## Bound-state motion and explanatory coverage

The figure below the tail-motion equation is `BoundStates.astro`, driven by `visuals/bound-states.js`. It solves the finite left Marchenko system at each plotted point with kappa=(1,2,3) and c(0)^2=(12,60,60). Its initial potential is -12 sech²x. The plotted eigenfunctions are normalized instantaneous eigenfunctions, not arbitrary curves moved by hand; their phases follow the positive-left-tail convention continuously. Run `node note-apps/kdv/scripts/check-bound-states.mjs` for independent finite-difference Schrödinger/KdV residuals and norm/orthogonality quadrature. The common vertical axis shows u and lambda_n+2 psi_n; the amplitude display factor is fixed at 2, with a dotted reference at each eigenvalue. Initial, intermediate and separated states must be inspected in both themes and portrait width.

The source of §§2.4–2.5 is `content/sections/scattering.md`; assembled `full.md` must match it. Run `node note-apps/kdv/scripts/check-section-sync.mjs` before publishing changes to either. For a substantive rewrite, compare the original explanatory roles as well as equations and headings. Record which roles remain, which are replaced by a supported explanation, and why any role is no longer needed. A defect in one argument does not by itself justify deleting its useful explanatory job. Use `reader-contract.yaml`'s retained explanatory jobs for the required scope. Acceptance checks apply to the edited section source and its final assembled placement. This permits justified reorganization and deletion; it requires evidence for their effect on reader coverage.

## Scattering-data and Jost introductions

`ScatteringChannels.astro` is the scattering-data entry: a schematic binds transmission to a and reflection to b. Incident (upper left), transmitted (middle right), and reflected (lower left) waves have separate rows, direct TeX labels, and direction arrows; vertical offsets have no metric meaning. The potential region separates left/right channels. Native-width geometry retains fixed label sizes on mobile. This figure replaces the introductory numerical scattering display; later bound-state and Jost examples remain.

`JostEnds.astro` supplies the Jost introduction: two simultaneous schematic rows highlight f_minus at the left and f_plus at the right, both with the same exp(ikx). `BoundTail.astro` appears immediately after the norming-constant definition: it binds c_n(t) to the left exponential tail of a state with full norm1. Both use fixed480px compositions and the common FigureViewport fallback. Existing numerical ScatteringIntro and scattering-state helpers are retained as source but are no longer embedded at these introductory definitions.

## Reading structure

Chapter 3 groups the kernel/potential relation, derivation of GLM from scattering data, and reflectionless soliton reconstruction. Chapter 4 continues the kernel to formal operators, higher flows, and conserved quantities. Source h3 headings are the main reading map; h4 headings mark local questions within those sections. KdvBody preserves source levels and numbering, while headings.mjs selects the same source h2/h3 entries for the contents. It also retains old shared heading URLs as invisible compatibility anchors. Equation identities are independent of section names.


### Heading wording

Active heading authority: `reviews/kdv-structure/20261022/headings.spec.md`. The inverse-scattering overview is authored in `content/sections/overview.md`; the archive importer preserves that section and the current chapter labels. Main contents and local subsection headings identify the actual mathematical subjects. A separate §3.2.7 contains the final GLM assembly. All prior heading URLs resolve through `scripts/headings.mjs`.

## KP continuation

Chapter5 in `content/sections/hierarchy.md` continues the same S into its time evolution, the Sato equation, commuting flows, and the general KP hierarchy. Negative projections retain `(P^n)_{<0}` in both main prose and the proof disclosure; there is no A_n alias. The 2/3-reduction examples include the Boussinesq PDE result, without its coefficient calculation. The initial KdV time is t=t3, while the Boussinesq example evolves in t2. The exact assembled hierarchy source spans chapters4–5 in `full.md`.

## Adopted field-theory chapters

Chapters6/7 are canonical at `content/sections/quantization.md` and `content/sections/w3.md`, adopted without scholarly changes on 2026-11-02. `KdvBody.astro` composes them before bibliography, using `scripts/field-theory.mjs` for heading namespaces and the same note-wide equation pass. Classical endnote equations are numbered before the extension and then distributed to their owning pages. Existing figure/calculator components remain shared from `../kdv-vertex-quantum-draft/components/DraftBody.astro`, with exact Python sources at their existing public URLs. The historical draft manuscripts/routes remain an archival snapshot; future accepted manuscript edits belong here. The optional soliton-vertex source is not part of the accepted route.
