import {renderMathOutput,setCodeBlockSource} from '../../../src/scripts/study-note-code';

export function initFormalSquareRoot() {
  const root = document.querySelector<HTMLElement>('[data-formal-square-root]');
  if (!root || root.dataset.initialized) return;
  root.dataset.initialized = 'true';
  const form = root.querySelector('form')!;
  const order = root.querySelector('select')!;
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
    run.disabled = order.disabled = false;
    cancel.hidden = true;
    output.setAttribute('aria-busy', 'false');
  };
  const stop = (message: string) => {
    worker?.terminate(); worker = undefined;
    finish(); status.textContent = message;
  };
  order.addEventListener('change', () => {
    setCodeBlockSource(code, template.replace(/^order = \d+$/m, `order = ${order.value}`));
    output.hidden = raw.hidden = true;
    status.textContent = `Ready to compute ${order.value} coefficients.`;
  });
  cancel.addEventListener('click', () => stop('Cancelled.'));
  form.addEventListener('submit', event => {
    event.preventDefault();
    const n = Number(order.value);
    if (run.disabled || !Number.isInteger(n) || n < 1 || n > 8) return;
    run.disabled = order.disabled = true;
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
          status.textContent = `Computed ${n} coefficients. See LaTeX output.`;
          return;
        }
        if (worker !== activeWorker) return;
        output.replaceChildren(...staging.childNodes);
        setCodeBlockSource(rawCode, data.output);
        raw.hidden = false;
        output.hidden = false;
        finish(); status.textContent = `Computed ${n} coefficients.`;
      };
      worker.onerror = event => {
        event.preventDefault();
        if (worker === activeWorker) stop('Unable to load Python. Check your connection and try again.');
      };
      worker.postMessage({source: code.textContent});
    } catch { stop('Unable to start Python in this browser.'); }
  });
}
