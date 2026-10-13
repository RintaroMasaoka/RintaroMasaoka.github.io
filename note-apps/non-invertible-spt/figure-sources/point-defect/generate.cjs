const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const {loadDependency} = require('./dependencies.cjs');
const {api: katex, root: katexRoot, version: katexVersion} = loadDependency('katex', 'KATEX_ROOT');
const bundle = __dirname;
const sources = path.join(bundle, 'output', 'sources');
const qa = path.join(bundle, 'output', 'qa');
fs.mkdirSync(sources, {recursive:true});
fs.mkdirSync(qa, {recursive:true});

// Copy only the CSS, the font resources it references, and their license.
// KaTeX JavaScript and the rest of dist/ are intentionally not vendored.
const fontDir = path.join(sources, 'katex', 'fonts');
fs.mkdirSync(fontDir, {recursive:true});
const cssPath = path.join(katexRoot, 'dist', 'katex.min.css');
const css = fs.readFileSync(cssPath, 'utf8');
fs.copyFileSync(cssPath, path.join(sources, 'katex', 'katex.min.css'));
fs.copyFileSync(path.join(katexRoot, 'LICENSE'), path.join(sources, 'katex', 'LICENSE'));
const referencedFonts = [...new Set([...css.matchAll(/url\((?:["'])?(fonts\/[^)'"\s]+)(?:["'])?\)/g)].map(m=>m[1]))];
if (!referencedFonts.length) throw new Error('No local KaTeX font references were found in the installed stylesheet.');
for (const relative of referencedFonts) {
  if (!/^fonts\/[^/]+\.(woff2?|ttf)$/.test(relative)) throw new Error(`Unexpected font resource: ${relative}`);
  fs.copyFileSync(path.join(katexRoot, 'dist', relative), path.join(sources, 'katex', relative));
}
const sha = file=>crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const figures = JSON.parse(fs.readFileSync(path.join(bundle, 'figures.json'), 'utf8'));
const records = [];
for (const figure of figures) {
  const geometryName = `${figure.id}-geometry.svg`;
  const labelsName = `${figure.id}-labels.json`;
  const geometrySource = path.join(bundle, 'editable', geometryName);
  const labelSource = path.join(bundle, 'editable', labelsName);
  const svg = fs.readFileSync(geometrySource, 'utf8');
  const labels = JSON.parse(fs.readFileSync(labelSource, 'utf8'));
  const lettering = labels.map(label=>`<div class="label" data-label="${label.id}" style="left:${label.x}px;top:${label.y}px;font-size:${label.size}px;width:${label.width}px">${katex.renderToString(label.tex,{throwOnError:true})}</div>`).join('');
  const html = `<!doctype html><html lang="en"><meta charset="utf-8"><title>${figure.id}</title><link rel="stylesheet" href="katex/katex.min.css"><style>html,body{margin:0;background:white;color:#25323e}#diagram{position:relative;width:${figure.width}px;height:${figure.height}px;overflow:hidden}svg{position:absolute;inset:0}.label{position:absolute;transform:translate(-50%,-50%);text-align:center;white-space:nowrap;line-height:1.2;pointer-events:none}.katex{font-size:1em}</style><div id="diagram" role="img" aria-label="${figure.caption.replaceAll('"','&quot;')}">${svg}${lettering}</div></html>`;
  fs.writeFileSync(path.join(sources, `${figure.id}.html`), html);
  fs.copyFileSync(geometrySource, path.join(sources, geometryName));
  fs.copyFileSync(labelSource, path.join(sources, labelsName));
  records.push({id:figure.id,source:`sources/${figure.id}.html`,geometrySHA256:sha(geometrySource),labelsSHA256:sha(labelSource),htmlSHA256:sha(path.join(sources, `${figure.id}.html`)),labelCount:labels.length});
}
fs.writeFileSync(path.join(qa, 'generation.json'), JSON.stringify({katexVersion,copiedFontCount:referencedFonts.length,cssSHA256:sha(cssPath),figures:records},null,2)+'\n');
console.log(`Generated ${figures.length} figure HTML files in output/sources/; copied ${referencedFonts.length} stylesheet-referenced fonts.`);
