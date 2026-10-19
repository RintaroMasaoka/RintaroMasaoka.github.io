const profile = (x, c, t) => c / (2 * Math.cosh(Math.sqrt(c) * (x - c * t) / 2) ** 2);
const curvePath = (c, t) => Array.from({ length: 401 }, (_, i) => {
  const x = -12 + i * 24 / 400;
  const px = 62 + (x + 12) * 500 / 24;
  const py = 266 - profile(x, c, t) * (210 / 2.2);
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
    const reference = figure.querySelector('[data-soliton-reference]');
    const update = () => {
      const c = Number(cInput.value);
      const t = Number(tInput.value);
      current.setAttribute('d', curvePath(c, t));
      reference.setAttribute('d', curvePath(c, 0));
      cOutput.value = c.toFixed(2);
      cOutput.textContent = c.toFixed(2);
      tOutput.value = t.toFixed(2);
      tOutput.textContent = t.toFixed(2);
    };
    cInput.addEventListener('input', update);
    tInput.addEventListener('input', update);
    figure.querySelector('[data-soliton-reset]').addEventListener('click', () => {
      cInput.value = '2';
      tInput.value = '0';
      update();
      cInput.focus();
    });
    update();
  });
}
