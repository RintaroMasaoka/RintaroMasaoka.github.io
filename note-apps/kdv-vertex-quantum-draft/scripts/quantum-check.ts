import {renderMathOutput,setCodeBlockSource} from '../../../src/scripts/study-note-code';

export function initQuantumCheck() {
  const root=document.querySelector<HTMLElement>('[data-quantum-check]');
  if(!root||root.dataset.initialized)return;
  root.dataset.initialized='true';
  const form=root.querySelector('form')!;
  const c=root.querySelector<HTMLInputElement>('[name="c"]')!;
  const run=root.querySelector<HTMLButtonElement>('[type="submit"]')!;
  const cancel=root.querySelector<HTMLButtonElement>('[data-cancel]')!;
  const status=root.querySelector<HTMLElement>('[role="status"]')!;
  const output=root.querySelector<HTMLElement>('[data-output]')!;
  const reduction=root.querySelector<HTMLDetailsElement>('[data-reduction]')!;
  const reductionOutput=root.querySelector<HTMLElement>('[data-reduction-output]')!;
  const raw=root.querySelector<HTMLDetailsElement>('[data-raw-output]')!;
  const rawCode=root.querySelector<HTMLElement>('[data-output-source]')!;
  const code=root.querySelector<HTMLElement>('[data-source]')!;
  const template=code.textContent!;
  let worker:Worker|undefined;
  let timer:ReturnType<typeof setTimeout>;
  const finish=()=>{clearTimeout(timer);run.disabled=c.disabled=false;cancel.hidden=true;output.setAttribute('aria-busy','false');};
  const stop=(message:string)=>{worker?.terminate();worker=undefined;finish();status.textContent=message;};
  const refresh=()=>{
    output.hidden=raw.hidden=reduction.hidden=true;
    if(!form.checkValidity()){status.textContent='Enter c, a nonzero integer, or a fraction with a nonzero denominator.';return false;}
    if(/^-?0+(?:\/\d+)?$/.test(c.value)){status.textContent='Central charge c must be nonzero.';return false;}
    setCodeBlockSource(code,template.replace(/^c_input = .*$/m,`c_input = "${c.value}"`));
    status.textContent='Ready.';return true;
  };
  form.addEventListener('input',refresh);
  cancel.addEventListener('click',()=>stop('Cancelled. You can run the calculation again.'));
  form.addEventListener('submit',event=>{
    event.preventDefault();if(run.disabled||!refresh())return;
    run.disabled=c.disabled=true;cancel.hidden=false;
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
        try{
          const marker=String.raw`\text{Complete local reduction}`;
          const [main,complete]=String(data.output).split(marker);
          const stage=document.createElement('div');
          const completeStage=document.createElement('div');
          await renderMathOutput(stage,main);
          if(complete)await renderMathOutput(completeStage,complete);
          if(worker!==active)return;
          output.replaceChildren(...stage.childNodes);output.hidden=false;
          reductionOutput.replaceChildren(...completeStage.childNodes);reduction.hidden=!complete;
        }
        catch{if(worker!==active)return;raw.open=true;status.textContent='Computed. See LaTeX output.';finish();return;}
        finish();status.textContent='Computed the complete universal local residue and exact derivative reduction.';
      };
      worker.onerror=e=>{e.preventDefault();if(worker===active)stop('Unable to load Python. Check your connection and try again.');};
      worker.postMessage({source:code.textContent});
    }catch{stop('Unable to start Python in this browser.');}
  });
}
