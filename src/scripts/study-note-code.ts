/** Shared source viewer behavior; execution remains with each scientific widget. */
export function setCodeBlockSource(code: HTMLElement, source: string) {
  const lines = [...code.querySelectorAll<HTMLElement>(':scope > .line')];
  const next = source.split('\n');
  if (lines.length === next.length) {
    lines.forEach((line, i) => { if (line.textContent !== next[i]) line.textContent = next[i]; });
  } else {
    code.replaceChildren(...next.flatMap((value, i) => {
      const line = document.createElement('span'); line.className = 'line'; line.textContent = value;
      return i ? [document.createTextNode('\n'), line] : [line];
    }));
  }
}

export function initNoteCodeBlocks() {
  document.addEventListener('click', async event => {
    const button = (event.target as Element).closest<HTMLButtonElement>('[data-code-copy]');
    if (!button || button.disabled) return;
    const code = button.closest('.note-code')?.querySelector('pre code');
    if (!code) return;
    button.disabled = true;
    try { await navigator.clipboard.writeText(code.textContent || ''); button.textContent = 'Copied'; }
    catch { button.textContent = 'Copy failed'; }
    setTimeout(() => { button.textContent = 'Copy'; button.disabled = false; }, 1500);
  });
}

let renderer: Promise<any> | undefined;
/** Render each exact Python-produced LaTeX line, without changing its mathematical content. */
export async function renderMathOutput(container: HTMLElement, output: string) {
  const url = '/notes/reader/katex/katex.mjs';
  renderer ??= import(/* @vite-ignore */ url).catch(error => { renderer = undefined; throw error; });
  const {default: katex} = await renderer;
  const rows = output.split('\n').filter(line => line.trim()).map(tex => {
    const row = document.createElement('div'); row.className = 'note-math-output-line';
    row.innerHTML = katex.renderToString(tex, {displayMode:true,throwOnError:true,trust:false});
    return row;
  });
  container.replaceChildren(...rows);
}
