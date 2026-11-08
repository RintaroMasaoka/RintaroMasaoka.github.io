// Exact finite CAR calculation. Matrices are stored as integers scaled by 96.
// R_abcd = k(delta_ac delta_bd - delta_ad delta_bc), Ric_ab = k(d-1)delta_ab.
const permutations = values => values.length === 0 ? [[]] : values.flatMap((x, i) =>
  permutations(values.filter((_, j) => j !== i)).map(rest => [x, ...rest]));
const orders = permutations([0, 1, 2, 3]);
const parity = order => {
  let inversions = 0;
  for (let i = 0; i < order.length; i++) for (let j = i + 1; j < order.length; j++)
    if (order[i] > order[j]) inversions++;
  return inversions % 2 ? -1 : 1;
};
const popcount = n => { let count = 0; while (n) { count += n & 1; n >>>= 1; } return count; };
function applyWord(word, state) {
  let sign = 1;
  for (const [mode, creation] of [...word].reverse()) {
    const occupied = (state >> mode) & 1;
    if (occupied === Number(creation)) return null;
    if (popcount(state & ((1 << mode) - 1)) % 2) sign = -sign;
    state ^= 1 << mode;
  }
  return [state, sign];
}
function addWord(matrix, word, coefficient, size) {
  for (let state = 0; state < size; state++) {
    const result = applyWord(word, state);
    if (result) matrix[result[0] * size + state] += coefficient * result[1];
  }
}
const gcd = (a, b) => b ? gcd(b, a % b) : Math.abs(a);
function texFraction(n, denominator = 96) {
  const divisor = gcd(n, denominator); n /= divisor; denominator /= divisor;
  return denominator === 1 ? String(n) : `${n < 0 ? '-' : ''}\\frac{${Math.abs(n)}}{${denominator}}`;
}
export function calculate(d = 2, k = 1) {
  if (![2, 3, 4].includes(d) || ![-1, 0, 1].includes(k)) throw Error('Choose dimension 2–4 and curvature −1, 0 or 1.');
  const size = 1 << d, scalar = k * d * (d - 1);
  const normal = Array(size * size).fill(0), weyl = Array(size * size).fill(0);
  for (let a = 0; a < d; a++) {
    addWord(normal, [[a, true], [a, false]], 48 * k * (d - 1), size);
    for (let b = 0; b < d; b++) for (let c = 0; c < d; c++) for (let e = 0; e < d; e++) {
      const tensor = k * (Number(a === c && b === e) - Number(a === e && b === c));
      if (!tensor) continue;
      const word = [[a, true], [b, true], [c, false], [e, false]];
      addWord(normal, word, 24 * tensor, size);
      // W^{-1} of four odd variables is the fully antisymmetrized operator word.
      // 96*(R/4)*(1/24) = R: all accumulated coefficients stay integral.
      for (const order of orders) addWord(weyl, order.map(i => word[i]), tensor * parity(order), size);
    }
  }
  for (let state = 0; state < size; state++) weyl[state * size + state] += 12 * scalar;
  const difference = normal.map((entry, i) => entry - weyl[i]);
  const error = Math.max(...difference.map(Math.abs));
  let invariantError = 0;
  for (let row = 0; row < size; row++) for (let col = 0; col < size; col++) {
    const degree = popcount(row);
    const expected = row === col ? 48 * k * degree * (d - degree) : 0;
    invariantError = Math.max(invariantError, Math.abs(normal[row * size + col] - expected));
  }
  const sectors = Array.from({length: d + 1}, (_, p) => {
    const states = Array.from({length: size}, (_, s) => s).filter(s => popcount(s) === p);
    return `p=${p}:\\quad H_{\\mathrm{curv}}=${texFraction(normal[states[0] * size + states[0]])},\\quad \\mathrm{multiplicity}=${states.length}`;
  });
  const latex = [
    `n=${d},\\quad k=${k},\\quad R=${scalar}`,
    `\\max_{u,v}|(H_{\\mathrm{curv}}-W^{-1}(W(H_{\\mathrm{curv}})))_{uv}|=${texFraction(error)}`,
    `\\max_{u,v}|(H_{\\mathrm{curv}}-\\tfrac{k}{2}N_F(n-N_F))_{uv}|=${texFraction(invariantError)}`,
    ...sectors,
  ].join('\n');
  return {d, k, normal, weyl, error, invariantError, latex};
}
