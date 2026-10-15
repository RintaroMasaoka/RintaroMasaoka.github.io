// Exact geometry for C_g ⊂ Σ, S_g = C_g × I_t, and S_g ∩ ∂M.
// The central panel is an oblique projection of (x,y,t), with ∂Σ at y=0.
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const c = 0.5;
const radius = 0.26;
const left = c - radius;
const right = c + radius;
const cut = theta => ({x: c + radius * Math.cos(theta), y: radius * Math.sin(theta)});
const spatial = ({x, y}) => ({x: 70 + 340 * x, y: 490 - 240 * y / radius});
const oblique = ({x, y}, t) => ({x: 660 + 140 * x - 180 * y / radius, y: 515 - 245 * t - 100 * y / radius});
const fmt = n => Number(n.toFixed(2));
const same = (a, b) => Math.abs(a - b) < 1e-9;
const arc = (project, t = 0, reverse = false) => {
  const samples = Array.from({length: 65}, (_, i) => i * Math.PI / 64);
  if (reverse) samples.reverse();
  return samples.map(theta => project(cut(theta), t));
};
const points = list => list.map(p => `${fmt(p.x)},${fmt(p.y)}`).join(' ');
const pathOf = list => `M${list.map(p => `${fmt(p.x)} ${fmt(p.y)}`).join('L')}`;

function checkIncidence() {
  assert(same(cut(0).x, right) && same(cut(0).y, 0));
  assert(same(cut(Math.PI).x, left) && same(cut(Math.PI).y, 0));
  for (let i = 1; i < 64; i++) assert(cut(i * Math.PI / 64).y > 0);
  for (const t of [0, 0.25, 0.5, 0.75, 1]) {
    for (const x of [left, right]) {
      const sheetSide = oblique({x, y: 0}, t);
      const boundaryPlane = {x: 660 + 140 * x, y: 515 - 245 * t};
      assert(same(sheetSide.x, boundaryPlane.x) && same(sheetSide.y, boundaryPlane.y));
    }
  }
}

function buildGeometry() {
  checkIncidence();
  const spatialCut = arc(p => spatial(p));
  const top = arc(oblique, 1);
  const bottom = arc(oblique, 0);
  // Individual ruled strips preserve the projected surface even where an
  // oblique view folds its silhouette over itself.
  const surfaceStrips = Array.from({length:64}, (_, i) => {
    const a = cut(i * Math.PI / 64), b = cut((i + 1) * Math.PI / 64);
    return `<polygon points="${points([oblique(a,1),oblique(b,1),oblique(b,0),oblique(a,0)])}"/>`;
  }).join('');
  const xL = fmt(oblique({x: left, y: 0}, 0).x);
  const xR = fmt(oblique({x: right, y: 0}, 0).x);
  const rulings = [0.25, 0.5, 0.75].map(f => {
    const q = cut(f * Math.PI);
    const low = oblique(q, 0), high = oblique(q, 1);
    return `<path d="M${fmt(low.x)} ${fmt(low.y)}V${fmt(high.y)}"/>`;
  }).join('');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1320" height="650" viewBox="0 0 1320 650">
<defs><marker id="step" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="10" markerHeight="10" orient="auto"><path d="M0 0 10 5 0 10Z" fill="#526a7d"/></marker><marker id="time" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="9" markerHeight="9" orient="auto"><path d="M0 0 10 5 0 10Z" fill="#405669"/></marker></defs>
<rect width="1320" height="650" fill="#fff"/>
<path d="M50 94H420M464 94H864M904 94H1280" stroke="#ced9df" stroke-width="2"/>
<path d="M440 125V586M884 125V586" stroke="#dbe3e8" stroke-width="2"/>
<!-- Σ at fixed time: the cut is a one-dimensional arc, not its enclosed area. -->
<rect x="70" y="160" width="340" height="330" fill="#f8e7c8" stroke="#ac7635" stroke-width="3"/>
<path d="${pathOf(spatialCut)}" fill="none" stroke="#7c3c9a" stroke-width="9" stroke-linecap="round"/>
<path d="M70 490H410" stroke="#176d99" stroke-width="11" stroke-linecap="round"/>
<path d="M${fmt(spatial({x:left,y:0}).x)} 493H${fmt(spatial({x:right,y:0}).x)}" stroke="#d18a31" stroke-width="5"/>
<g fill="#7c3c9a" stroke="#fff" stroke-width="3"><circle cx="${fmt(spatial({x:left,y:0}).x)}" cy="490" r="11"/><circle cx="${fmt(spatial({x:right,y:0}).x)}" cy="490" r="11"/></g>
<!-- The ruled purple surface lies at y>0 except at its two side edges. -->
<g fill="#b88bc9" fill-opacity=".57">${surfaceStrips}</g>
<g fill="none" stroke="#9c69ae" stroke-width="2" opacity=".55">${rulings}</g>
<path d="${pathOf(top)}" fill="none" stroke="#7c3c9a" stroke-width="7"/>
<path d="${pathOf(bottom)}" fill="none" stroke="#7c3c9a" stroke-width="5" stroke-dasharray="10 7"/>
<!-- Opaque foreground y=0 plane occludes the interior sheet in projection. -->
<rect x="660" y="270" width="140" height="245" fill="#d8eaf4" stroke="#176d99" stroke-width="3"/>
<path d="M660 270H800M660 515H800" stroke="#176d99" stroke-width="6"/>
<path d="M${xL} 270V515M${xR} 270V515" stroke="#7c3c9a" stroke-width="8"/>
<path d="M835 507V277" stroke="#405669" stroke-width="3" marker-end="url(#time)"/>
<!-- Only the two rails survive on the isolated boundary worldsheet. -->
<rect x="920" y="180" width="350" height="345" fill="#d8eaf4" stroke="#176d99" stroke-width="3"/>
<path d="M1010 180V525M1180 180V525" stroke="#7c3c9a" stroke-width="9"/>
<path d="M920 525H1270" stroke="#176d99" stroke-width="7"/>
<path d="M1292 485V220" stroke="#405669" stroke-width="3" marker-end="url(#time)"/>
<path d="M427 345H459M867 345H897" stroke="#526a7d" stroke-width="3" marker-end="url(#step)"/>
</svg>\n`;
}

if (require.main === module) {
  const output = path.join(__dirname, 'editable', 'bulk-edge-incidence-geometry.svg');
  fs.writeFileSync(output, buildGeometry());
  console.log(`Generated ${output}; C_g ∩ ∂Σ = {x_L,x_R} and S_g ∩ ∂M has two rails.`);
}

module.exports = {buildGeometry, checkIncidence};
