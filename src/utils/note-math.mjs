/** Each command colors exactly one operator/eigenvalue glyph. */
export const noteMathColors = {
  operatorA: '#c0634b', operatorB: '#398c65', operatorC: '#9072bf', operatorD: '#4f82bc',
};
const symbols = {
  opA: ['operatorA', 'A'], opB: ['operatorB', 'B'], opC: ['operatorC', 'C'], opD: ['operatorD', 'D'],
  vacAlpha: ['operatorA', String.raw`\alpha`], vacDelta: ['operatorD', String.raw`\delta`],
};
export const noteMathMacros = Object.fromEntries(Object.entries(symbols).map(([name, [role, symbol]]) =>
  ['\\' + name, String.raw`{\textcolor{${noteMathColors[role]}}{${symbol}}}`]));
export const noteMathOptions = { macros: noteMathMacros };
