// The manuscript owns heading levels and labels. The reading map shows chapters
// and their main questions; h4 headings remain local landmarks in the body.
export function composeHeadings(full, glm) {
  return full.filter(h => h.depth === 2 || h.depth === 3).flatMap(h => [h,
    ...(h.depth === 2 && /^3\./.test(h.text) ? glm.filter(g => g.depth === 3) : [])
  ]);
}

// Compatibility targets for URLs shared before the reading structure changed.
// These anchors carry no reader-visible alternative titles or explanations.
export const headingAliases = {
  '2-kdv方程式のソリトン解': '2-ソリトンと等スペクトル変形',
  '23-逆散乱法': '23-逆散乱法の概観',
  '24-散乱データ': '24-散乱データとその時間発展',
  '25-散乱データとソリトンの運動': '25-束縛状態とソリトンの運動',
  '3-散乱データからポテンシャルを復元する': '3-散乱の逆問題',
  '31-変換核とポテンシャルの関係': '31-jost解と変換核',
  '311-相互作用描像によるjost解の構成': '311-相互作用描像',
  '313-核の対角値によるポテンシャルの復元': '313-変換核の対角値',
  '32-散乱データからglm方程式を導く': '32-glm方程式',
  '322-透過項の積分路を閉じる': '322-透過項の留数積分',
  '326-点ポテンシャルへの応答から留数を求める': '326-透過項の留数',
  '33-無反射データからソリトンを復元する': '33-無反射ポテンシャルとソリトン',
  '331-一つの束縛状態から1ソリトン解を復元する': '331-1ソリトン解',
  '333-ポテンシャルの行列式表示': '333-多ソリトン解の行列式表示',
  '4-変換核からkdv階層へ': '4-kdv階層と保存量',
  '41-変換核から擬微分作用素へ': '41-積分変換と擬微分作用素',
  '42-非負冪部分によるkdv階層の構成': '42-kdv階層',
  '43-交換子の留数から保存量を得る': '43-無限個の保存量',
  '431-演算子の冪の時間発展': '431-演算子の冪のlax方程式',
  '432-留数から保存則を導く': '432-擬微分作用素の留数と保存則',
  '1-固定ポテンシャルに対するjost解': '31-jost解と変換核',
  '2-jost解の変換核表示': '311-相互作用描像',
  '3-変換核の対角値とポテンシャルの復元': '313-変換核の対角値',
  '4-散乱関係のフーリエ変換': '321-散乱関係の逆フーリエ変換',
  '5-積分路を閉じて留数の和を得る': '322-透過項の留数積分',
  '6-入射振幅から極と束縛状態を結び付ける': '323-透過項の極と束縛状態',
  '7-接続条件から透過項の留数を求める': '324-減衰解の接続条件',
  '接続に必要な点ポテンシャル': '325-傾きの跳びと点ポテンシャル',
  '点ポテンシャルへの応答が留数を決める': '326-透過項の留数',
  '8-一ソリトン解の復元': '331-1ソリトン解',
  '34-無反射の場合のglm方程式の行列表示': '332-glm方程式の行列表示',
  '35-多ソリトン解の行列式表示': '333-多ソリトン解の行列式表示',
  '4-kdv階層と無限個の保存量': '4-kdv階層と保存量',
  '41-変換核と擬微分作用素': '41-積分変換と擬微分作用素',
  '42-高次kdv方程式': '42-kdv階層',
  '43-ppp-の冪の時間発展': '431-演算子の冪のlax方程式',
  '44-留数による保存量の構成': '432-擬微分作用素の留数と保存則',
};

export function addHeadingAliases(html) {
  const pending = new Set(Object.keys(headingAliases));
  const result = html.replace(/<h([234])\b([^>]*\bid="([^"]+)"[^>]*)>/g, (heading, level, attrs, id) => {
    const aliases = Object.entries(headingAliases).filter(([, target]) => target === id);
    return aliases.map(([old]) => {
      if (html.includes(`id="${old}"`)) throw new Error(`Duplicate KdV compatibility anchor: ${old}`);
      pending.delete(old);
      return `<span id="${old}" data-kdv-heading-alias aria-hidden="true" style="display:block;scroll-margin-top:88px"></span>`;
    }).join('') + heading;
  });
  if (pending.size) throw new Error(`Missing KdV heading targets for: ${[...pending].join(', ')}`);
  return result;
}
