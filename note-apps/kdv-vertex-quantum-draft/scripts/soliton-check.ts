import {renderMathOutput,setCodeBlockSource} from '../../../src/scripts/study-note-code';

export function initSolitonCheck(){
  const root=document.querySelector<HTMLElement>('[data-soliton-check]');
  if(!root||root.dataset.initialized)return;
  root.dataset.initialized='true';
  const form=root.querySelector('form')!;
  const k=root.querySelector<HTMLInputElement>('[name="kappa"]')!;
  const a=root.querySelector<HTMLInputElement>('[name="amplitudes"]')!;
  const run=root.querySelector<HTMLButtonElement>('[type="submit"]')!;
  const cancel=root.querySelector<HTMLButtonElement>('[data-cancel]')!;
  const status=root.querySelector<HTMLElement>('[role="status"]')!;
  const output=root.querySelector<HTMLElement>('[data-output]')!;
  const raw=root.querySelector<HTMLDetailsElement>('[data-raw-output]')!;
  const rawCode=root.querySelector<HTMLElement>('[data-output-source]')!;
  const code=root.querySelector<HTMLElement>('[data-source]')!;
  const template=code.textContent!;
  let worker:Worker|undefined;
  let timer:ReturnType<typeof setTimeout>;
  const parse=(v:string)=>{
    const tokens=v.split(',').map(t=>t.trim());
    if(tokens.length<1||tokens.length>4||tokens.some(t=>!/^\d{1,6}(\/[1-9]\d{0,5})?$/.test(t)))return null;
    const values=tokens.map(t=>{const [p,q='1']=t.split('/');return Number(p)/Number(q);});
    return values.every(v=>v>0)?values:null;
  };
  const finish=()=>{clearTimeout(timer);run.disabled=k.disabled=a.disabled=false;cancel.hidden=true;output.setAttribute('aria-busy','false');};
  const stop=(message:string)=>{worker?.terminate();worker=undefined;finish();status.textContent=message;};
  const refresh=()=>{
    output.hidden=raw.hidden=true;
    const ks=parse(k.value),as=parse(a.value);
    if(!ks||!as||ks.length!==as.length||ks.some((v,i)=>i>0&&v<=ks[i-1])){
      status.textContent='Use one to four increasing positive kappa values and the same number of positive A values. Each number accepts up to six digits.';return false;
    }
    const kv=k.value.split(',').map(v=>v.trim()).join(',');
    const av=a.value.split(',').map(v=>v.trim()).join(',');
    setCodeBlockSource(code,template.replace(/^kappa_input = .*$/m,`kappa_input = "${kv}"`).replace(/^A_input = .*$/m,`A_input = "${av}"`));
    status.textContent='Ready.';return true;
  };
  form.addEventListener('input',refresh);
  cancel.addEventListener('click',()=>stop('Cancelled. You can run the calculation again.'));
  form.addEventListener('submit',event=>{
    event.preventDefault();if(run.disabled||!refresh())return;
    run.disabled=k.disabled=a.disabled=true;cancel.hidden=false;
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
        finish();status.textContent=`Computed exactly for ${k.value.split(',').length} solitons.`;
      };
      worker.onerror=e=>{e.preventDefault();if(worker===active)stop('Unable to load Python. Check your connection and try again.');};
      worker.postMessage({source:code.textContent});
    }catch{stop('Unable to start Python in this browser.');}
  });
}
