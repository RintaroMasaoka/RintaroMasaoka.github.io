// Reframe the three exact-incidence views as a readable vertical sequence.
// Each nested viewBox crops the same generated geometry; no relation is redrawn
// with a different coordinate convention.
const {buildGeometry: buildHorizontalGeometry} = require('./precision-incidence.cjs');

const panels = [
  {start: 0, width: 440, top: 0},
  {start: 440, width: 444, top: 710},
  {start: 884, width: 436, top: 1420}
];

function buildGeometry() {
  const horizontal = buildHorizontalGeometry();
  const body = horizontal
    .replace(/^<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .replace(/<path d="M427 345H459M867 345H897"[^>]*\/>/, '')
    .replace(/<path d="M440 125V586M884 125V586"[^>]*\/>/, '');
  const views = panels.map(panel =>
    `<svg x="40" y="${panel.top}" width="${panel.width}" height="650" viewBox="${panel.start} 0 ${panel.width} 650">${body}</svg>`
  ).join('\n');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="520" height="2070" viewBox="0 0 520 2070">
<rect width="520" height="2070" fill="#fff"/>
${views}
<path d="M260 663V689M260 1373V1399" fill="none" stroke="#526a7d" stroke-width="3"/>
<path d="M251 688L260 701L269 688ZM251 1398L260 1411L269 1398Z" fill="#526a7d"/>
</svg>\n`;
}

function verticalLabels(horizontalLabels) {
  return horizontalLabels.map(label => {
    const panel = panels.find(p => label.x >= p.start && label.x < p.start + p.width);
    if (!panel) throw new Error(`Unassigned incidence label: ${label.id}`);
    return {...label, x: 40 + label.x - panel.start, y: panel.top + label.y};
  });
}

module.exports = {buildGeometry, verticalLabels};
