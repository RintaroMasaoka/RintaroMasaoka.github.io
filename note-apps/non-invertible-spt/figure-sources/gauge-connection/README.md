# Portable gauge-connection figure

Requirements: Node.js 20+, KaTeX 0.16.22, Playwright 1.62.1 and Chrome. Install the package dependencies normally with `npm install`, or use existing installed packages. `KATEX_ROOT` and `PLAYWRIGHT_ROOT` optionally supply those package directories. Otherwise the reused dependency resolver uses normal `require('katex')` and `require('playwright')`. No user-specific absolute path is embedded.

Run from this directory:

```sh
node verify-sources.cjs
node generate.cjs
node render.cjs
node math-qa.cjs
```

Outputs are only `output/sources/`, `output/assets/gauge-connection.png`, and `output/qa/`. The generator copies only installed KaTeX CSS, its stylesheet-referenced fonts and LICENSE. The renderer uses Chrome by default; `BROWSER_CHANNEL=chromium` selects an installed Playwright-managed Chromium. Browser changes may change pixels. These scripts never overwrite the package's frozen insertion or its retained root PNG.

The editable geometry and actual TeX labels are in `editable/`; their frozen hashes are in `qa/frozen-manifest.json`. `create-input.py` is the portable construction source for those files; running it recreates the frozen drawing and will replace local edits to the two input files. It is optional for ordinary regeneration, which reads the existing editable inputs.

`qa/frozen-font-qa.json` and `qa/frozen-math-qa.json` retain compact evidence for the frozen figure. Fresh rendering writes actual fonts, bounds, errors and PNG hashes to `output/qa/render-font-qa.json`. Mathematical QA uses only built-in JavaScript and verifies the map compositions on noncommuting matrices, with h^{-1} distinct from h.
