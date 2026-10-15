// Three bounded views of one exact spatial-cut geometry.
// Cropping changes only the view; coordinates and incidence remain shared.
const {buildGeometry: buildHorizontalGeometry} = require('./precision-incidence.cjs');

const panels = [
  {id: 'bulk-edge-slice', start: 0, width: 440},
  {id: 'bulk-edge-sheet', start: 440, width: 444},
  {id: 'bulk-edge-boundary', start: 884, width: 436}
];
const top = 30;
const height = 595;

function geometryFor(panel) {
  const body = buildHorizontalGeometry()
    .replace(/^<svg[^>]*>/, '')
    .replace(/<\/svg>\s*$/, '')
    .replace(/<path d="M427 345H459M867 345H897"[^>]*\/>/, '')
    .replace(/<path d="M440 125V586M884 125V586"[^>]*\/>/, '');
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${panel.width}" height="${height}" viewBox="0 0 ${panel.width} ${height}">
<svg width="${panel.width}" height="${height}" viewBox="${panel.start} ${top} ${panel.width} ${height}">${body}</svg>
</svg>\n`;
}

function labelsFor(panel, horizontalLabels) {
  return horizontalLabels
    .filter(label => label.x >= panel.start && label.x < panel.start + panel.width)
    .map(label => ({...label, x: label.x - panel.start, y: label.y - top}));
}

module.exports = {panels, height, geometryFor, labelsFor};
