// Linked boundary components form effective sites before the edge action.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const siteXs = [120, 470, 820];
const width = 270;
const top = 150;
const bottom = 370;
const inset = 20;
const dotY = bottom;
const left = x => x + inset;
const right = x => x + width - inset;
const clusters = [
  {a: right(siteXs[0]), b: left(siteXs[1]), labelX: 430},
  {a: right(siteXs[1]), b: left(siteXs[2]), labelX: 780},
];

function buildGeometry() {
  for (const {a,b,labelX} of clusters) assert(a < labelX && labelX < b);
  assert(left(siteXs[1]) === clusters[0].b);
  assert(right(siteXs[1]) === clusters[1].a);
  const sites = siteXs.map((x, i) => `<g>
<rect x="${x}" y="${top}" width="${width}" height="${bottom-top}" rx="16" fill="#fff4e4" stroke="#b77b32" stroke-width="4"/>
<circle cx="${left(x)}" cy="${top+inset}" r="11" fill="#fff" stroke="#2a789d" stroke-width="4"/>
<circle cx="${right(x)}" cy="${top+inset}" r="11" fill="#fff" stroke="#2a789d" stroke-width="4"/>
<circle cx="${left(x)}" cy="${dotY}" r="11" fill="${i===0?'#fff':'#7c3c9a'}" stroke="${i===0?'#2a789d':'#7c3c9a'}" stroke-width="4"/>
<circle cx="${right(x)}" cy="${dotY}" r="11" fill="${i===2?'#fff':'#7c3c9a'}" stroke="${i===2?'#2a789d':'#7c3c9a'}" stroke-width="4"/>
</g>`).join('');
  const links = clusters.map(({a,b,labelX}) => `<g>
<path d="M${a} ${dotY}H${b}" stroke="#7c3c9a" stroke-width="9" stroke-linecap="round"/>
<path d="M${a} ${dotY+15}L${labelX} 454L${b} ${dotY+15}" fill="none" stroke="#2a789d" stroke-width="3" stroke-dasharray="7 7"/>
<circle cx="${labelX}" cy="466" r="13" fill="#d8eaf4" stroke="#2a789d" stroke-width="4"/>
</g>`).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1320" height="570" viewBox="0 0 1320 570">
<defs><marker id="bond-arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="8" markerHeight="8" orient="auto"><path d="M0 0L10 5L0 10Z" fill="#bf7727"/></marker></defs>
<rect width="1320" height="570" fill="#fff"/>
<path d="M95 95H1225" stroke="#d3dde2" stroke-width="2"/>
${sites}${links}
<path d="M${left(siteXs[1])+17} ${dotY}H${right(siteXs[1])-18}" stroke="#bf7727" stroke-width="10" marker-end="url(#bond-arrow)"/>
<path d="M90 520H1225" stroke="#d3dde2" stroke-width="2"/>
</svg>\n`;
}

if (require.main === module) {
  const output = path.join(__dirname, 'editable', 'boundary-label-clusters-geometry.svg');
  fs.writeFileSync(output, buildGeometry());
  console.log(`Generated ${output}; each marked boundary cluster joins exactly two site components.`);
}

module.exports = {buildGeometry};
