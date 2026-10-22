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
  '3-散乱の逆問題': '3-散乱データからポテンシャルを復元する',
  '1-固定ポテンシャルに対するjost解': '31-変換核とポテンシャルの関係',
  '2-jost解の変換核表示': '311-相互作用描像によるjost解の構成',
  '3-変換核の対角値とポテンシャルの復元': '313-核の対角値によるポテンシャルの復元',
  '4-散乱関係のフーリエ変換': '321-散乱関係の逆フーリエ変換',
  '5-積分路を閉じて留数の和を得る': '322-透過項の積分路を閉じる',
  '6-入射振幅から極と束縛状態を結び付ける': '323-透過項の極と束縛状態',
  '7-接続条件から透過項の留数を求める': '324-減衰解の接続条件',
  '接続に必要な点ポテンシャル': '325-傾きの跳びと点ポテンシャル',
  '点ポテンシャルへの応答が留数を決める': '326-点ポテンシャルへの応答から留数を求める',
  '8-一ソリトン解の復元': '331-一つの束縛状態から1ソリトン解を復元する',
  '34-無反射の場合のglm方程式の行列表示': '332-glm方程式の行列表示',
  '35-多ソリトン解の行列式表示': '333-ポテンシャルの行列式表示',
  '4-kdv階層と無限個の保存量': '4-変換核からkdv階層へ',
  '41-変換核と擬微分作用素': '41-変換核から擬微分作用素へ',
  '42-高次kdv方程式': '42-非負冪部分によるkdv階層の構成',
  '43-ppp-の冪の時間発展': '431-演算子の冪の時間発展',
  '44-留数による保存量の構成': '432-留数から保存則を導く',
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
