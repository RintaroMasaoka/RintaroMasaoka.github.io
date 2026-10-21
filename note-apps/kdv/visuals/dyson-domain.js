/** Fixed x=1; changing x-s changes the actual integration domain, not plot scale. */
export function initDysonDomain() {
  document.querySelectorAll('[data-dyson-domain]').forEach(root => {
    if (root.dataset.initialized) return;
    root.dataset.initialized = 'true';
    const slider = root.querySelector('[data-dyson-gap]');
    const X = z => 132 + 36*z, Y = v => 104 - 36*v;
    const point = (z,v) => `${X(z)},${Y(v)}`;
    const update = () => {
      const gap=Number(slider.value), x=1, s=x-gap, corner=(x+s)/2;
      root.querySelector('[data-dyson-gap-output]').value=gap.toFixed(2);
      const polygon=`M${point(-3,-3)} L${point(corner,corner)} L${point(x,s)} L${point(-3,-3-gap)}`;
      root.querySelector('[data-dyson-fill]').setAttribute('d',polygon+' Z');
      root.querySelector('[data-dyson-edge]').setAttribute('d',polygon);
      root.querySelector('[data-dyson-lower]').setAttribute('d',`M${point(-3,-3-gap)} L${point(2,2-gap)}`);
      root.querySelector('[data-dyson-upper]').setAttribute('d',`M${point(-3,x+s+3)} L${point(2,x+s-2)}`);
      root.querySelector('[data-dyson-continuation]').setAttribute('d',`M${point(-2,-2-gap/2)} l-10 10 m0 -6 v6 h6`);
      root.querySelector('[data-dyson-continuation]').style.visibility=gap===0?'hidden':'visible';
      root.querySelector('[data-dyson-status]').textContent=gap===0?'対角では面積がゼロになる。一次の項は別に残る。':'色の付いた領域の内部を積分する。';
    };
    slider.addEventListener('input',update);update();
  });
}
