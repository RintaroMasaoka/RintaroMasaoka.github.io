const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const {loadDependency} = require('./dependencies.cjs');
const {api: katex, root: katexRoot, version: katexVersion} = loadDependency('katex', 'KATEX_ROOT');

const bundle = __dirname;
const sourceDir = path.join(bundle, 'output', 'sources');
const qaDir = path.join(bundle, 'output', 'qa');
const katexDir = path.join(sourceDir, 'katex');
const fontDir = path.join(katexDir, 'fonts');
for (const dir of [sourceDir, qaDir, fontDir]) fs.mkdirSync(dir, {recursive:true});
const sha = filename => crypto.createHash('sha256').update(fs.readFileSync(filename)).digest('hex');
const escapeHTML = value => value.replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;');

// Vendor only the CSS and font resources actually named by its URLs.
const cssPath = path.join(katexRoot, 'dist', 'katex.min.css');
const css = fs.readFileSync(cssPath, 'utf8');
fs.copyFileSync(cssPath, path.join(katexDir, 'katex.min.css'));
fs.copyFileSync(path.join(katexRoot, 'LICENSE'), path.join(katexDir, 'LICENSE'));
const fontRefs = [...new Set([...css.matchAll(/url\((?:["'])?(fonts\/[^)'"]+)(?:["'])?\)/g)].map(match=>match[1]))];
if (!fontRefs.length) throw new Error('KaTeX stylesheet contains no local font references.');
for (const relative of fontRefs) {
  if (!/^fonts\/[^/]+\.(woff2?|ttf)$/.test(relative)) throw new Error(`Unexpected font URL: ${relative}`);
  fs.copyFileSync(path.join(katexRoot, 'dist', relative), path.join(katexDir, relative));
}

const figures = JSON.parse(fs.readFileSync(path.join(bundle, 'figures.json'), 'utf8'));
const records = [];
for (const figure of figures) {
  const geometryFile = path.join(bundle, 'editable', `${figure.id}-geometry.svg`);
  const labelFile = path.join(bundle, 'editable', `${figure.id}-labels.json`);
  const geometry = fs.readFileSync(geometryFile, 'utf8');
  const labels = JSON.parse(fs.readFileSync(labelFile, 'utf8'));
  if (geometry.includes('<text') || geometry.includes('<foreignObject')) throw new Error(`Geometry must remain text-free: ${figure.id}`);
  if (new Set(labels.map(label=>label.id)).size !== labels.length) throw new Error(`Duplicate label ID: ${figure.id}`);
  for (const label of labels) {
    if (!label.english_meaning || !label.role) throw new Error(`Missing label inventory entry: ${label.id}`);
    if (/[\u3040-\u30ff\u3400-\u9fff]/.test(label.tex)) throw new Error(`Non-English figure lettering: ${label.id}`);
  }
  const lettering = labels.map(label =>
    `<div class="label" data-label="${escapeHTML(label.id)}" style="left:${label.x}px;top:${label.y}px;width:${label.width}px;font-size:${label.size}px">${katex.renderToString(label.tex,{throwOnError:true,output:'html'})}</div>`
  ).join('\n');
  const html = `<!doctype html><html lang="en"><head><meta charset="utf-8"><title>${figure.id}</title><link rel="stylesheet" href="katex/katex.min.css"><style>
html,body{margin:0;background:#fff;color:#25323e}
#diagram{position:relative;width:${figure.width}px;height:${figure.height}px;overflow:hidden;background:#fff}
#diagram svg{position:absolute;inset:0}
.label{position:absolute;transform:translate(-50%,-50%);text-align:center;white-space:nowrap;line-height:1.2;pointer-events:none}
.label .katex{font-size:1em}
</style></head><body><div id="diagram" role="img" aria-label="${escapeHTML(figure.caption)}">${geometry}${lettering}</div></body></html>`;
  const htmlFile = path.join(sourceDir, `${figure.id}.html`);
  fs.writeFileSync(htmlFile, html);
  fs.copyFileSync(geometryFile, path.join(sourceDir, path.basename(geometryFile)));
  fs.copyFileSync(labelFile, path.join(sourceDir, path.basename(labelFile)));
  records.push({id:figure.id,geometrySHA256:sha(geometryFile),labelsSHA256:sha(labelFile),htmlSHA256:sha(htmlFile),labelCount:labels.length});
}
fs.writeFileSync(path.join(qaDir,'generation.json'),JSON.stringify({katexVersion,copiedFontCount:fontRefs.length,cssSHA256:sha(cssPath),figures:records},null,2)+'\n');
console.log(`Generated ${figures.length} HTML views with KaTeX ${katexVersion} and ${fontRefs.length} font files.`);
