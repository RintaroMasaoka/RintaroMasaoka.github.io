/** Fixed x=1; changing x-y changes the actual integration domain, not plot scale. */
export function initDysonDomain() {
  document.querySelectorAll('[data-dyson-domain]').forEach(root => {
    if (root.dataset.initialized) return;
    root.dataset.initialized = 'true';
    const slider = root.querySelector('[data-dyson-gap]');
    const X = xp => 132 + 36*xp, Y = yp => 104 - 36*yp;
    const point = (xp,yp) => `${X(xp)},${Y(yp)}`;
    const update = () => {
      const gap=Number(slider.value), x=1, y=x-gap, corner=(x+y)/2;
      root.querySelector('[data-dyson-gap-output]').value=gap.toFixed(2);
      const polygon=`M${point(-3,-3)} L${point(corner,corner)} L${point(x,y)} L${point(-3,-3-gap)}`;
      root.querySelector('[data-dyson-fill]').setAttribute('d',polygon+' Z');
      root.querySelector('[data-dyson-edge]').setAttribute('d',polygon);
      root.querySelector('[data-dyson-lower]').setAttribute('d',`M${point(-3,-3-gap)} L${point(2,2-gap)}`);
      root.querySelector('[data-dyson-upper]').setAttribute('d',`M${point(-3,x+y+3)} L${point(2,x+y-2)}`);
      root.querySelector('[data-dyson-continuation]').setAttribute('d',`M${point(-2,-2-gap/2)} l-10 10 m0 -6 v6 h6`);
      root.querySelector('[data-dyson-continuation]').style.visibility=gap===0?'hidden':'visible';
      root.querySelector('[data-dyson-status]').textContent=gap===0?'対角では二重積分が消え、自由波から生じる項が残る。':'色の付いた領域の内部を積分する。';
    };
    slider.addEventListener('input',update);update();
  });
}
