# Current early figures: portable editable authority

This is the single current regeneration bundle for five figures. The fusion figure now fixes the total output d, resolves the intermediate simple channels e/f and both junction multiplicities, and expands one left basis junction as a weighted sum over the right basis. Its editable authority is `generate-fusion.cjs`. The superseded unresolved tree is absent from the generator and check manifests; earlier bundles outside this folder are historical snapshots.

The five current figures are:

- `edge-phase-cancellation`
- `defect-orientations`
- `fusion-associator` — the revised junction-basis figure
- `vacuum-defect-sector`
- `tensor-coherence-routes`

Use Node.js 20 or later with KaTeX 0.16.22 and Playwright 1.62.1. Normal dependencies use `require('katex')` and `require('playwright')`. Install them and an available browser when needed:

```sh
npm install
npx playwright install chromium
```

The complete reproduction sequence, from this folder, is:

```sh
node generate.cjs
node check-sources.cjs
node render.cjs
```

The first command invokes the base, revised fusion and coherence sources and writes one ordered `assets/figures.json` manifest containing exactly these five current figures. The check compares the generated SVG, TeX-label, HTML and manifests with `qa/expected-sources.json`. The final command renders all five current HTML views to bundle-local PNGs and records actual glyph fonts and geometry checks. During this packaging task, only source generation/checking ran; unchanged original PNGs were not rerendered.

For an existing installation, set `KATEX_ROOT` to the KaTeX package directory and `PLAYWRIGHT_ROOT` to the Playwright package directory. Set optional `BROWSER_EXECUTABLE` to an installed compatible Chromium/Chrome executable if Playwright's installed Chromium is not used. No dependency or browser location is hardcoded to a user's machine.

The generators copy only KaTeX's CSS, fonts and LICENSE to `assets/katex/`. They do not copy its complete distribution, JavaScript, contrib tools or source tree. The bundle contains no `node_modules`, manuscript code or PNGs. Generated outputs stay under this folder's `assets/` and `qa/`.

`qa/current-figures.json` identifies the five current source/image hashes. `qa/font-render-evidence.json` is compact recorded evidence for these five current PNGs and contains no evidence for the superseded fusion. Rendering later replaces that bundle-local evidence with the new run. Geometry and label sources are checked byte-for-byte; exact pixels can vary with browser/platform changes. Canonical-site integration and independent reader acceptance remain outside this source bundle.
