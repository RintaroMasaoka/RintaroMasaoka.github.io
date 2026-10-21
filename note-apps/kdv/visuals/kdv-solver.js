// Internal buffer v stores surface displacement eta: eta_t=-3(eta^2)_x-eta_xxx.
// Forward FFT: sum_j v_j exp(-2 pi i j m/N); inverse includes 1/N.
export function fft(re, im, inverse = false) {
  const n = re.length;
  for (let i = 1, j = 0; i < n; i++) {
    let bit = n >> 1;
    for (; j & bit; bit >>= 1) j ^= bit;
    j ^= bit;
    if (i < j) { [re[i], re[j]] = [re[j], re[i]]; [im[i], im[j]] = [im[j], im[i]]; }
  }
  for (let len = 2; len <= n; len <<= 1) {
    const angle = (inverse ? 2 : -2) * Math.PI / len;
    const wr = Math.cos(angle), wi = Math.sin(angle);
    for (let start = 0; start < n; start += len) {
      let ar = 1, ai = 0;
      for (let j = 0; j < len / 2; j++) {
        const p = start + j, q = p + len / 2;
        const r = re[q] * ar - im[q] * ai, s = re[q] * ai + im[q] * ar;
        re[q] = re[p] - r; im[q] = im[p] - s; re[p] += r; im[p] += s;
        const next = ar * wr - ai * wi; ai = ar * wi + ai * wr; ar = next;
      }
    }
  }
  if (inverse) for (let i = 0; i < n; i++) { re[i] /= n; im[i] /= n; }
}
export const initialProfile = (x, mode) => mode === 'breakup'
  ? 1.8 * Math.exp(-(((x + 20) / 6) ** 2))
  : mode === 'single' ? 2 / Math.cosh(x + 20) ** 2
  : 2 / Math.cosh(x + 20) ** 2 + .5 / Math.cosh((x + 8) / 2) ** 2;

export function createSolver({ mode = 'collision', n = 512, length = 100, dt = .0025 } = {}) {
  if (n < 16 || (n & (n - 1))) throw new Error('FFT grid must be a power of two');
  const v = Float64Array.from({length:n}, (_, j) => initialProfile(-length/2+j*length/n, mode));
  const re = new Float64Array(n), im = new Float64Array(n);
  const k = Float64Array.from({length:n}, (_,j) => 2*Math.PI*(j<n/2?j:j-n)/length);
  const keep = Array.from({length:n}, (_,j) => Math.abs(j<n/2?j:j-n) < n/3);
  const cs = Float64Array.from(k, q=>Math.cos(q**3*dt/2));
  const sn = Float64Array.from(k, q=>Math.sin(q**3*dt/2));
  const a = new Float64Array(n), b = new Float64Array(n), c = new Float64Array(n), d = new Float64Array(n), tmp = new Float64Array(n);
  let steps = 0;
  function linear() {
    re.set(v); im.fill(0); fft(re,im);
    for(let j=0;j<n;j++) {const r=re[j];re[j]=keep[j]?(r*cs[j]-im[j]*sn[j]):0;im[j]=keep[j]?(r*sn[j]+im[j]*cs[j]):0;}
    fft(re,im,true); v.set(re);
  }
  function nonlinear(input, output) {
    for(let j=0;j<n;j++) re[j]=input[j]*input[j];
    im.fill(0);fft(re,im);
    for(let j=0;j<n;j++){const r=re[j];re[j]=keep[j]?3*k[j]*im[j]:0;im[j]=keep[j]?-3*k[j]*r:0;}
    fft(re,im,true);output.set(re);
  }
  function step(count=1) {
    for(let s=0;s<count;s++) {
      linear();nonlinear(v,a);
      for(let j=0;j<n;j++)tmp[j]=v[j]+dt*a[j]/2;
      nonlinear(tmp,b);
      for(let j=0;j<n;j++)tmp[j]=v[j]+dt*b[j]/2;
      nonlinear(tmp,c);
      for(let j=0;j<n;j++)tmp[j]=v[j]+dt*c[j];
      nonlinear(tmp,d);
      for(let j=0;j<n;j++)v[j]+=dt*(a[j]+2*b[j]+2*c[j]+d[j])/6;
      linear();steps++;
    }
    if(!v.every(Number.isFinite))throw new Error('Non-finite numerical solution');
    return v;
  }
  function diagnostics() {
    let mass=0,square=0;for(const q of v){mass+=q;square+=q*q;}
    return {mass:mass*length/n,square:square*length/n,time:steps*dt};
  }
  return {v, step, diagnostics, dt, n, length};
}
