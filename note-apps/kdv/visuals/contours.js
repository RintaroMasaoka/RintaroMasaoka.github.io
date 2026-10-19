/** Fixed-time reflectionless GLM example. All curve samples use the analytic formulas. */
export function initKdvVisuals() {
  document.querySelectorAll('[data-kdv-reconstruction]').forEach(root => {
    if (root.dataset.kdvInitialized) return;
    root.dataset.kdvInitialized = 'true';
    const kappa = root.querySelector('[data-kdv-kappa]');
    const center = root.querySelector('[data-kdv-center]');
    const px = x => 53 + (x + 7) * 280 / 14;
    const py = y => 76 - y * 23;
    const update = () => {
      const k = Number(kappa.value), x0 = Number(center.value);
      root.querySelector('[data-kdv-kappa-output]').value = k.toFixed(2);
      root.querySelector('[data-kdv-center-output]').value = x0.toFixed(2);
      root.querySelector('[data-kdv-values]').textContent = `最小値 ${(-2*k*k).toFixed(2)} ／ 幅の尺度 ${(1/k).toFixed(2)} ／ 規格化定数の二乗 ${(2*k*Math.exp(2*k*x0)).toFixed(2)}`;
      root.querySelectorAll('[data-kdv-curve]').forEach(path => {
        const potential = path.dataset.kdvCurve === 'u';
        const d = Array.from({length:281}, (_,i) => {
          const x = -7 + .05*i, z = k*(x-x0);
          const y = potential ? -2*k*k/Math.cosh(z)**2 : -k*(1-Math.tanh(z));
          return `${i?'L':'M'}${px(x).toFixed(3)},${py(y).toFixed(3)}`;
        }).join(' ');
        path.setAttribute('d',d);
      });
      root.querySelectorAll('[data-kdv-center-guide]').forEach(path => path.setAttribute('d', `M${px(x0)} 76 V214`));
    };
    kappa.addEventListener('input', update);
    center.addEventListener('input', update);
    root.querySelector('[data-kdv-reset]').addEventListener('click', () => {kappa.value='1';center.value='0';update();});
    update();
  });
}
