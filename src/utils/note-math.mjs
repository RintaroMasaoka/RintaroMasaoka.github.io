/** Each command colors exactly one operator/eigenvalue glyph. */
export const noteMathColors = {
  operatorA: '#a27b28', operatorB: '#258f9f', operatorC: '#b2639c', operatorD: '#9072bf',
};
const symbols = {
  opA: ['operatorA', 'A'], opB: ['operatorB', 'B'], opC: ['operatorC', 'C'], opD: ['operatorD', 'D'],
  vacAlpha: ['operatorA', String.raw`\alpha`], vacDelta: ['operatorD', String.raw`\delta`],
};
export const noteMathMacros = Object.fromEntries(Object.entries(symbols).map(([name, [role, symbol]]) =>
  ['\\' + name, String.raw`{\textcolor{${noteMathColors[role]}}{${symbol}}}`]));
export const noteMathOptions = { macros: noteMathMacros };
