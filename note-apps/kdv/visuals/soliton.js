export const solitonConfig = Object.freeze({
  velocityMin: -1, velocityMax: -.25, velocityStep: .01, velocityDefault: -.5,
  timeMin: -8, timeMax: 8, timeStep: .01, timeDefault: 0,
  xMin: -12, xMax: 12,
});
export const solitonProfile = (x, c, t) => -2 * c / Math.cosh(Math.sqrt(-c) * (x - c * t)) ** 2;
const curvePath = (c, t) => Array.from({ length: 401 }, (_, i) => {
  const {xMin,xMax}=solitonConfig;
  const x = xMin + i * (xMax-xMin) / 400;
  const px = 62 + (x-xMin) * 500 / (xMax-xMin);
  const py = 266 - solitonProfile(x, c, t) * (210 / 2.2);
  return `${i ? 'L' : 'M'}${px.toFixed(2)},${py.toFixed(2)}`;
}).join(' ');

export function initTravelingSoliton() {
  document.querySelectorAll('[data-kdv-soliton]:not([data-soliton-ready])').forEach((figure) => {
    figure.dataset.solitonReady = 'true';
    const cInput = figure.querySelector('[data-soliton-c]');
    const tInput = figure.querySelector('[data-soliton-t]');
    const cOutput = figure.querySelector('[data-soliton-c-output]');
    const tOutput = figure.querySelector('[data-soliton-t-output]');
    const current = figure.querySelector('[data-soliton-current]');
    const update = () => {
      const c = Number(cInput.value);
      const t = Number(tInput.value);
      current.setAttribute('d', curvePath(c, t));
      cOutput.value = c.toFixed(2);
      cOutput.textContent = c.toFixed(2);
      tOutput.value = t.toFixed(2);
      tOutput.textContent = t.toFixed(2);
    };
    cInput.addEventListener('input', update);
    tInput.addEventListener('input', update);
    figure.querySelector('[data-soliton-reset]').addEventListener('click', () => {
      cInput.value = String(solitonConfig.velocityDefault);
      tInput.value = String(solitonConfig.timeDefault);
      update();
      cInput.focus();
    });
    update();
  });
}
