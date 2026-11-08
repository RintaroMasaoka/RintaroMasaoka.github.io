import {renderMathOutput,setCodeBlockSource} from '../../../src/scripts/study-note-code';

export function initFormalCommutator() {
  const root = document.querySelector<HTMLElement>('[data-formal-commutator]');
  if (!root || root.dataset.initialized) return;
  root.dataset.initialized = 'true';
  const form = root.querySelector('form')!;
  const inputs = [...root.querySelectorAll<HTMLSelectElement>('select')];
  const run = root.querySelector<HTMLButtonElement>('[type="submit"]')!;
  const cancel = root.querySelector<HTMLButtonElement>('[data-cancel]')!;
  const status = root.querySelector<HTMLElement>('[role="status"]')!;
  const output = root.querySelector<HTMLElement>('[data-output]')!;
  const raw = root.querySelector<HTMLDetailsElement>('[data-raw-output]')!;
  const rawCode = root.querySelector<HTMLElement>('[data-output-source]')!;
  const code = root.querySelector<HTMLElement>('[data-source]')!;
  const template = code.textContent!;
  let worker: Worker | undefined;
  let timer: ReturnType<typeof setTimeout>;

  const finish = () => {
    clearTimeout(timer);
    run.disabled = false; inputs.forEach(input => input.disabled = false);
    cancel.hidden = true;
    output.setAttribute('aria-busy', 'false');
  };
  const stop = (message: string) => {
    worker?.terminate(); worker = undefined;
    finish(); status.textContent = message;
  };
  const selectedSource = () => {
    const rational = (value: string) => value.includes('/') ? value.replace('/', ', ') : value;
    return template.replace(/^a = Rational\(.+\)$/m, `a = Rational(${rational(inputs[0].value)})`)
      .replace(/^b = Rational\(.+\)$/m, `b = Rational(${rational(inputs[1].value)})`);
  };
  inputs.forEach(input => input.addEventListener('change', () => {
    setCodeBlockSource(code, selectedSource());
    output.hidden = raw.hidden = true;
    status.textContent = 'Ready to compute the selected commutator.';
  }));
  cancel.addEventListener('click', () => stop('Cancelled.'));
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (run.disabled || !['-3/2', '-1', '0'].includes(inputs[0].value) || !['-3/4', '-1/2', '0'].includes(inputs[1].value)) return;
    run.disabled = true; inputs.forEach(input => input.disabled = true);
    cancel.hidden = false; output.hidden = raw.hidden = true;
    output.setAttribute('aria-busy', 'true');
    status.textContent = 'Starting…';
    timer = setTimeout(() => stop('Timed out. Check your connection and try again.'), 120_000);
    try {
      worker ??= new Worker(new URL('../visuals/formal-square-root.worker.js', import.meta.url), {type: 'module'});
      const activeWorker = worker;
      worker.onmessage = async ({data}) => {
        if (worker !== activeWorker) return;
        if (data.status) { status.textContent = data.status; return; }
        if (data.error) { stop('Unable to run Python. Check your connection and try again.'); return; }
        const staging = document.createElement('div');
        try { await renderMathOutput(staging, data.output); }
        catch {
          if (worker !== activeWorker) return;
          setCodeBlockSource(rawCode, data.output);
          raw.hidden = false; raw.open = true; finish();
          status.textContent = 'Computed the commutator. See LaTeX output.';
          return;
        }
        if (worker !== activeWorker) return;
        output.replaceChildren(...staging.childNodes);
        setCodeBlockSource(rawCode, data.output);
        raw.hidden = false;
        output.hidden = false;
        finish(); status.textContent = 'Computed the commutator.';
      };
      worker.onerror = event => {
        event.preventDefault();
        if (worker === activeWorker) stop('Unable to load Python. Check your connection and try again.');
      };
      worker.postMessage({source: code.textContent});
    } catch { stop('Unable to start Python in this browser.'); }
  });
}
