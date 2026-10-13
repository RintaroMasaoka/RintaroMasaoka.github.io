# Portable point-defect chain diagram

Use Node.js 20+, KaTeX 0.16.22, Playwright 1.62.1 and Chrome. `npm install` installs the package's normal dependencies. Alternatively, set `KATEX_ROOT` and `PLAYWRIGHT_ROOT` to existing package directories; otherwise normal `require('katex')` and `require('playwright')` are used. No user-absolute path is embedded.

From this directory run:

```sh
node verify-sources.cjs
node generate.cjs
node render.cjs
```

Generated HTML, copied SVG/TeX records and necessary KaTeX CSS/fonts/LICENSE go to `output/sources/`. The image goes to `output/assets/point-defect-fusion.png`, and generation/font evidence to `output/qa/`. No full KaTeX distribution or node_modules is included in this bundle. `BROWSER_CHANNEL=chromium` selects an installed Playwright-managed Chromium instead of Chrome; changed versions may change pixels.

Editable input geometry and actual TeX label sources are in `editable/`. Optional `python3 create-input.py` rebuilds those two inputs from the construction source and overwrites their local edits; ordinary regeneration does not need that step. Frozen byte hashes, compact font evidence and source/condition records are in `qa/`. There is no numerical fusion simulation because no source-specific fusion coefficients are supplied or invented.

The scripts write only bundle-local output. They never overwrite the retained root PNG, insertion text or any canonical manuscript. The source-condition QA explains the composite as a relative-product object that may decompose; independent reader/wording acceptance remains a separate step.
