'use client';

import { useState } from 'react';
import { sitePath } from '../lib/site-path';

const views = [
  {
    label: '固定時刻',
    src: '/diagrams/bulk-edge-slice.png',
    width: 440,
    alt: '固定時刻のバルク空間Σにある紫の半円C_g。その両端x_Lとx_Rは青い空間境界上にあり、境界区間Iの両端に一致する。'
  },
  {
    label: '時空の面',
    src: '/diagrams/bulk-edge-sheet.png',
    width: 444,
    alt: '同じ半円C_gを時間区間I_tにわたって延ばした紫の欠陥面S_g。手前の青い境界時空面とは左右二本の縦辺で交わる。'
  },
  {
    label: '境界時空',
    src: '/diagrams/bulk-edge-boundary.png',
    width: 436,
    alt: '青い境界時空面だけを正面から見た図。x_Lとx_Rを時間方向に追う二本の紫の欠陥線が残る。'
  }
] as const;

export function IncidenceSequence() {
  const [step, setStep] = useState(0);
  const view = views[step];

  return <span className="concept-figure incidence-sequence" role="group" aria-label="切れ目から境界欠陥線までの三つの視点">
    <span className="incidence-sequence-controls">
      {views.map((item, index) => <button
        key={item.src}
        type="button"
        aria-pressed={step === index}
        onClick={() => setStep(index)}
      >{index + 1}. {item.label}</button>)}
    </span>
    <span className="incidence-sequence-panel" aria-live="polite">
      <img src={sitePath(view.src)} alt={view.alt} loading="lazy" width={view.width} height={595} />
    </span>
  </span>;
}
