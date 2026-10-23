/** Rebuild with Node.js, LaTeX (TikZ/standalone), and dvisvgm on PATH. */
import { mkdtempSync, readdirSync, readFileSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';
const dir = dirname(fileURLToPath(import.meta.url));
const files = readdirSync(dir).filter(f => /^figure-\d\d\.tex$/.test(f)).sort();
const evidence = [];
for (const file of files) {
  const name = file.replace(/\.tex$/, '');
  const work = mkdtempSync(join(tmpdir(), 'aba-figure-'));
  try {
    for (const source of readdirSync(dir).filter(f => f.endsWith('.tex'))) {
      writeFileSync(join(work, source), readFileSync(join(dir, source)));
    }
    for (const [cmd, args] of [['latex', ['-interaction=nonstopmode', '-halt-on-error', file]], ['dvisvgm', ['--no-fonts', '--exact', '--output=figure.svg', `${name}.dvi`]]]) {
      const p = spawnSync(cmd, args, { cwd: work, encoding: 'utf8' });
      if (p.status !== 0) throw new Error(`${file}: ${cmd}\n${p.stdout}\n${p.stderr}`);
    }
    const svg = readFileSync(join(work, 'figure.svg'), 'utf8');
    for (const dark of [false, true]) {
      const ink = dark ? '#e2e7e1' : '#202321';
      const surface = dark ? '#1d2320' : '#fbfaf7';
      let themed = svg.replace(/#000000\b|#000\b/g, ink).replace(/#ffffff\b|#fff\b/gi, surface);
      // TikZ xcolor writes these semantic colors as hexadecimal attributes.
      if (dark) themed = themed.replace(/#c66a20/gi, '#efa35a').replace(/#2773b4/gi, '#75b6ee');
      themed = themed.replace(/(<svg\b[^>]*>)/, `$1\n<g fill="${ink}" stroke="none">`).replace('</svg>', '</g>\n</svg>');
      writeFileSync(join(dir, `${name}${dark ? '-dark' : ''}.svg`), themed);
    }
    evidence.push({ source: file, renderer: 'latex + dvisvgm --no-fonts --exact', labels: 'TeX glyph outlines; no external fonts', paths: (svg.match(/<path\b/g) || []).length });
    console.log(name);
  } finally { rmSync(work, { recursive: true, force: true }); }
}
writeFileSync(join(dir, 'render-manifest.json'), JSON.stringify(evidence, null, 2) + '\n');
