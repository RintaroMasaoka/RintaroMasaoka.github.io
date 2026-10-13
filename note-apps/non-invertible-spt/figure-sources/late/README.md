# Portable late-section figures

This bundle regenerates six figures from editable SVG geometry and JSON records containing actual TeX label sources. It contains no manuscript, manuscript editor or publication operation. The input geometry and label files are byte-identical to the frozen originals; their hashes and the existing PNG hashes are recorded in `qa/frozen-manifest.json`. No PNG was regenerated while preparing this bundle.

Requirements: Node.js 20 or later, KaTeX 0.16.22, Playwright 1.62.1 and Chrome. The mathematical check additionally uses Python 3 with NumPy. Dependencies can be installed in the normal Node environment with `npm install`. The bundle does not include node_modules.

From this bundle's directory, run:

```sh
node verify-sources.cjs
node generate.cjs
node render.cjs
python3 math-check.py
```

`generate.cjs` normally resolves `require('katex')`. Set `KATEX_ROOT` to an existing KaTeX package directory when using a separate installed dependency. `render.cjs` normally resolves `require('playwright')`; set `PLAYWRIGHT_ROOT` to its package directory when needed. Paths are supplied by the execution environment, never embedded in these sources.

Chrome is the default renderer because it produced the frozen PNGs. To use Playwright's managed Chromium instead, install that browser with `npx playwright install chromium`, then run `BROWSER_CHANNEL=chromium node render.cjs`. Browser or library version changes may change pixels; the diagram geometry and label source identities remain independently checkable.

Outputs stay under this bundle's `output/`:

- `output/sources/<figure>.html`: self-contained local rendering sources, together with byte-preserving SVG and label copies.
- `output/sources/katex/`: only the installed KaTeX stylesheet, its referenced font files and LICENSE. No KaTeX JavaScript, full dist directory or node_modules is copied.
- `output/assets/<figure>.png`: regenerated images at a device scale factor of 2.
- `output/qa/generation.json`: geometry/label/HTML hashes and KaTeX version.
- `output/qa/render-font-qa.json`: actual loaded fonts, per-label font families and bounds, errors, PNG hashes and browser version.
- `output/qa/math-check.json`: explicit Pauli/CZ/string calculations and sector/product counts.

Editable inputs are in `editable/`; figure dimensions and non-image alt descriptions are in `figures.json`. `qa/frozen-font-qa.json` and `qa/frozen-math-qa.json` preserve compact evidence from the frozen images. These historical records are not fresh render certification after an edit. Run the renderer and inspect its outputs when revising a figure.

After copying this bundle into another project's `figure-sources/late/`, the same commands and paths work relative to that directory. The scripts cannot replace the retained published PNGs or edit prose; any integration remains a separate action.
