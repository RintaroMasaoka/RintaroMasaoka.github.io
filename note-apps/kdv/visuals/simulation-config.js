// Numerical and reader controls use the same Sato time t=t3.
export const simulationConfig = Object.freeze({
  n: 512, length: 100, dt: .01,
  stepsPerFrame: 20, frameCount: 160, playbackFramesPerSecond: 20,
});
export const frameInterval = simulationConfig.dt * simulationConfig.stepsPerFrame;
export const endTime = frameInterval * simulationConfig.frameCount;
export const collisionPulses = Object.freeze([
  Object.freeze({ kappa: 1, center: 20 }),
  Object.freeze({ kappa: .5, center: 8 }),
]);
export const broadPulse = Object.freeze({ amplitude: 1.8, center: 20, width: 6 });
export function initialProfile(x, mode) {
  if (mode === 'breakup') {
    const { amplitude, center, width } = broadPulse;
    return amplitude * Math.exp(-(((x - center) / width) ** 2));
  }
  const pulses = mode === 'single' ? collisionPulses.slice(0, 1) : collisionPulses;
  return pulses.reduce((sum, { kappa, center }) => sum + 2 * kappa ** 2 / Math.cosh(kappa * (x - center)) ** 2, 0);
}
export function initialFormula(mode) {
  if (mode === 'breakup') {
    const { amplitude, center, width } = broadPulse;
    return `\\eta(x,0)=${amplitude}\\exp[-((x-${center})/${width})^2]`;
  }
  return '\\eta(x,0)=' + collisionPulses.map(({ kappa, center }) => {
    const amplitude = 2 * kappa ** 2;
    const coefficient = amplitude === .5 ? '\\tfrac12' : String(amplitude);
    const argument = kappa === 1 ? `x-${center}` : `(x-${center})/${1 / kappa}`;
    return `${coefficient}\\,\\operatorname{sech}^2(${argument})`;
  }).join('+');
}
