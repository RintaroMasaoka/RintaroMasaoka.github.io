/** Shared semantic TeX commands; color values live only in note-math.css. */
const symbols = {
  wa: ['weight-a', 'a'], wb: ['weight-b', 'b'], wc: ['weight-c', 'c'],
  opA: ['op-a', 'A'], opB: ['op-b', 'B'], opC: ['op-c', 'C'], opD: ['op-d', 'D'],
  vacAlpha: ['vac-alpha', String.raw`\alpha`], vacDelta: ['vac-delta', String.raw`\delta`],
};
const allowedClasses = new Set(Object.values(symbols).map(([role]) => `math-${role}`));
export const noteMathMacros = Object.fromEntries(Object.entries(symbols).map(([name, [role, symbol]]) =>
  [`\\${name}`, String.raw`\htmlClass{math-${role}}{${symbol}}`]));
export const noteMathOptions = {
  macros: noteMathMacros,
  trust: ({ command, class: className }) => command === '\\htmlClass' && allowedClasses.has(className),
  strict: code => code === 'htmlExtension' ? 'ignore' : 'warn',
};
