import {renderMathOutput,setCodeBlockSource} from '../../../src/scripts/study-note-code';

export function initScreeningCheck(){
  const root=document.querySelector<HTMLElement>('[data-screening-check]');
  if(!root||root.dataset.initialized)return;
  root.dataset.initialized='true';
  const form=root.querySelector('form')!;
  const charge=root.querySelector<HTMLSelectElement>('[name="charge"]')!;
  const run=root.querySelector<HTMLButtonElement>('[type="submit"]')!;
  const cancel=root.querySelector<HTMLButtonElement>('[data-cancel]')!;
  const status=root.querySelector<HTMLElement>('[role="status"]')!;
  const output=root.querySelector<HTMLElement>('[data-output]')!;
  const raw=root.querySelector<HTMLDetailsElement>('[data-raw-output]')!;
  const rawCode=root.querySelector<HTMLElement>('[data-output-source]')!;
  const code=root.querySelector<HTMLElement>('[data-source]')!;
  const download=root.querySelector<HTMLAnchorElement>('[data-download]')!;
  const template=code.textContent!;
  let worker:Worker|undefined;
  let timer:ReturnType<typeof setTimeout>;
  let downloadUrl:string|undefined;
  const finish=()=>{clearTimeout(timer);run.disabled=charge.disabled=false;cancel.hidden=true;output.setAttribute('aria-busy','false');};
  const stop=(message:string)=>{worker?.terminate();worker=undefined;finish();status.textContent=message;};
  const refresh=()=>{
    output.hidden=raw.hidden=true;
    if(!['symbolic','3/2','5/3'].includes(charge.value)){
      status.textContent='Choose symbolic, 3/2 or 5/3.';return false;
    }
    setCodeBlockSource(code,template.replace(/^B_CHOICE = .*$/m,`B_CHOICE = '${charge.value}'`));
    if(downloadUrl)URL.revokeObjectURL(downloadUrl);
    downloadUrl=URL.createObjectURL(new Blob([code.textContent!],{type:'text/x-python;charset=utf-8'}));
    download.href=downloadUrl;download.download='screening-check.py';
    status.textContent='Ready.';return true;
  };
  form.addEventListener('change',refresh);
  window.addEventListener('pagehide',()=>{if(downloadUrl)URL.revokeObjectURL(downloadUrl);worker?.terminate();});
  cancel.addEventListener('click',()=>stop('Cancelled. You can run the calculation again.'));
  form.addEventListener('submit',event=>{
    event.preventDefault();if(run.disabled||!refresh())return;
    run.disabled=charge.disabled=true;cancel.hidden=false;
    output.setAttribute('aria-busy','true');status.textContent='Starting…';
    timer=setTimeout(()=>stop('Timed out. Check your connection and try again.'),120_000);
    try{
      worker??=new Worker(new URL('../visuals/quantum-check.worker.js',import.meta.url),{type:'module'});
      const active=worker;
      worker.onmessage=async({data})=>{
        if(worker!==active)return;
        if(data.status){status.textContent=data.status;return;}
        if(data.error){stop('Unable to compute. Check your connection and inputs, then try again.');return;}
        setCodeBlockSource(rawCode,data.output);raw.hidden=false;
        try{const stage=document.createElement('div');await renderMathOutput(stage,data.output);if(worker!==active)return;output.replaceChildren(...stage.childNodes);output.hidden=false;}
        catch{if(worker!==active)return;raw.open=true;status.textContent='Computed. See LaTeX output.';finish();return;}
        finish();status.textContent=`Solved and checked exactly for b = ${charge.value}.`;
      };
      worker.onerror=e=>{e.preventDefault();if(worker===active)stop('Unable to load Python. Check your connection and try again.');};
      worker.postMessage({source:code.textContent});
    }catch{stop('Unable to start Python in this browser.');}
  });
}
