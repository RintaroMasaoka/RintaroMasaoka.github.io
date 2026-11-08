// The Python shown in the note runs here, without blocking the reader.
let ready;
async function loadPython() {
  if (!ready) ready = (async () => {
    self.postMessage({status: 'Loading Python…'});
    const base = 'https://cdn.jsdelivr.net/pyodide/v0.29.2/full/';
    const {loadPyodide} = await import(/* @vite-ignore */ `${base}pyodide.mjs`);
    const python = await loadPyodide({indexURL: base});
    self.postMessage({status: 'Loading SymPy…'});
    await python.loadPackage('sympy');
    return python;
  })().catch(error => { ready = undefined; throw error; });
  return ready;
}
self.onmessage = async ({data: {source}}) => {
  let scope;
  try {
    const python = await loadPython();
    self.postMessage({status: 'Computing…'});
    const lines = [];
    python.setStdout({batched: line => lines.push(line)});
    scope = python.toPy({});
    await python.runPythonAsync(source, {globals: scope});
    self.postMessage({output: lines.join('\n')});
  } catch (error) {
    self.postMessage({error: String(error)});
  } finally { scope?.destroy(); }
};
