# Costello note spec

- spec_id: costello-note
- status: active
- artifact: `content/*.md` and the reader-facing chapter/source metadata in `note.config.json`
- governs: the complete Costello note, including the introduction and Chapters 1–7 in `note.config.json` order
- approval_migration_status: complete

## Objective

量子力学・場の理論・繰り込みを一度学んだ大学院生が、Costello の 2007 年論文における摂動的場の理論の数学的な定式化について、持ち運べる見取り図を得る。読み終えた読者は、局所相互作用から正スケールの有効作用族を作る理由と方法、繰り込み群の整合性と小スケールの局所性、BV 量子マスター方程式のスケール間移送、有限な族を得ることとその方程式を解くことの違いを説明できる。論文の全証明を検証できることは目標にしない。

## Artifact role

公開される日本語の学習ノート。小さな計算を足場に、原論文の定義・定理・機構・適用範囲へ読者を導く。定理の仮定と結論、ノートで計算した範囲、原論文から採用する結果を区別する。`note.config.json` は章順・見出し・概要・出典と公開先を表示するインターフェースであり、本文の役割と一致させる。

## Audience

`reader-profile.json` の明示された読者像を使う。自由理論のガウス積分、相互作用の摂動展開、繰り込みとゲージ固定の定性的な役割は再学習させない。一方、四次平均の係数、同一点発散、熱時間の端点、指数の符号、`\hbar` の形式性、次数付き符号や BV の規約は記憶を前提にせず、必要になる前に供給する。Costello 固有の有効作用族、漸近的局所性、正則化 BV 演算子、障害類は新しい関係として構築する。

## Derivation

- D1（学習の主線）: 目標は論文の証明の再現ではなく構成の理解である。第1–3章のガウス平均・合成・同一点発散は、無限次元の問題を読者が具体的に認識するために必要で、残す。ただし一ループの例から一般定理を推論させてはならない。原論文 §§1.2–1.6, 7–9 が、正則化した縮約、方式を固定した相殺項、有効作用族の順に主張を置く。
- D2（第4章の重心）: 方式を有限定数の選択だけとして終えると、読者は Costello が何を数学的対象として作ったのかを把握できない。具体的な二点係数は入口として保ち、正スケールの族、RG の合成則、漸近的局所性、全次数での存在を同じ章の論理の流れに置く。定理 B の重要性は有限な極限の存在だけでなく、反復できる局所相殺項を確保することにある。原論文の定理 A は、先に `ε→0` の漸近展開を与え、その係数に `L→0` の局所汎関数による展開を与える。滑らかな正スケール区間の伝播関数により特異部分が最終スケール `L` に依存しないので、小さい `L` でその同じ部分を評価して局所性を示せる（§§7–8）。正の時間の熱核自体は全域のデータに依存し得るが、小時間の漸近係数は局所データで決まる。この二段階を一つの曖昧な「熱核は局所的」という説明に縮めない。
- D3（定理 C の境界）: 定義 1.6.1 と定理 C は、固定したゲージ固定を含むデータ `(E,Q,Q^{GF})` のもと、方式を固定して局所相互作用と所定の正スケール族を一対一に対応させる。方式変更は同じ族の局所表示を変える話であり、正スケールの移動やゲージ固定の変更と同一視しない（原論文 §§1.6, 9, 11）。局所相互作用の標識が方式で変わることを、物理的な全量の無条件の独立性として述べない。
- D4（BV の二段）: 有効作用族の存在を示しても QME 解は得られない。第5章では BV の変数、括弧、古典／量子マスター方程式を、作用と積分の整合性のために導入する。第6章では `Q,Q^{GF},H,P,K,Δ_L` と熱核恒等式から QME のスケール間移送を追う。ここが読者の目的に直結するので可視の主線とし、座標符号の全練習や副次的なコホモロジー計算は理解を支える範囲で補足にできる（原論文 §§2, 6, 10）。移送は解の存在を保証しない。
- D5（終章の役割）: 第4章で B/C と局所性の機構を扱った後、第7章でそれらを再講義すると、量子化の残る問題が見えにくい。終章は、既に作った有限な族に QME を課すと何が障害になるか、局所的な破れと補正の関係を説明し、読者が構成全体を一枚の地図として回収する場所にする。原論文 §12 の局所障害は有限次元の `d_{I_0}` の例だけからは従わないので、両者の類比と証明依存を分ける。
- D6（編集境界）: 読者が既存の章リンクから辿る公開ノートであり、現在の8件の章 ID・順序・公開 URL は必要なインターフェースである。内容と見出しの再配置は可能だが、ID/URL の変更は理解目標から導かれない。導入の最初の本文段落には `COSTELLO-INTRO-001` の明示的な承認があるため、その境界を守る。

## Requirements

- R1（入口と前提）: 導入は保護段落の機能と範囲を守り、以後の学習経路を短く示す。第1–3章は、ガウス平均で相互作用を作る、平均を合成する、場で同一点の縮約が発散する、局所相殺項で具体的な一ループ二点成分を有限にする、という因果を保つ。
  - authority: 目的、読者像、保護記録、原論文 §§1.2–1.4。
  - derivation: D1, D6。最初に全定理を列挙するより、既習概念と具体計算から新しい構成へ進む方が前提を追える。
  - acceptance: 読者が各章末で次章の問題を言え、例で示した範囲と一般定理を混同しない。保護段落のアンカーと不変条件が残る。
- R2（方式の具体例）: 第4章は第3章の二点成分を使い、方式で差し引く有限部分、平均前の局所係数、同じ有効作用族を表すための係数変更、正スケール間の有限な差を説明する。
  - authority: 原論文 §§1.4–1.6、既存の第3章との接続。
  - derivation: D2, D3。読者に方式の意味を具体的に与えつつ、部分計算から全次数への飛躍を明示できる。
  - acceptance: 固定した平均前係数で方式だけ変える場合と、同じ族を保つよう係数を再表示する場合が区別される。測定量との同一視はしない。
- R3（構成される対象）: 第4章の主線で、すべての `L>0` の `I[L]`、正スケールでの滑らかさ、`I[L_2]=W(P_{L_1,L_2},I[L_1])`、古典次数の三次以上という条件、小スケールでの局所汎関数 `Φ[L]` に対する残差の消滅を説明する。
  - authority: 原論文 定義 1.6.1、§9.0.2。
  - derivation: D2。RG の合成だけでは局所場の理論に由来する族を選べず、漸近的局所性が別に必要となる。
  - acceptance: `I[L]` 自体の `L→0` 極限を要求しないこと、正の `L` で非局所項があり得ること、固定した場での例の検査は汎関数全体の収束の証明ではないことが読める。
- R4（定理 A から B への機構）: 第4章で、`ε→0` の特異係数とその `L→0` の局所展開という定理 A の二段、方式による特異部分の射影、`(\hbar\text{次数},\text{外部場次数})` ごとの帰納的相殺項、正スケール区間の滑らかな伝播関数による `L` 非依存、小さい `L` での同じ係数の局所性をつなぐ。定理 B の主張は、コンパクト多様体上の原論文所定の BV ペアリング、自由微分、許容されるゲージ固定と局所相互作用のもと、方式を固定すると局所相殺項が一意に得られ、各正スケールで有限な極限を作る、と範囲を示す。
  - authority: 原論文 定理 A/B、§§7–8、とくに補題 8.0.2–8.0.3。
  - derivation: D2。局所性は帰納法を次の次数へ進める条件であり、有限化だけの定理として紹介すると方法の核心が失われる。
  - acceptance: 読者が「なぜ `L` 非依存なら局所性が言えるか」を二段の漸近展開に結び付けて説明できる。これをノートでの完全な解析的証明と誤認させない。
- R5（定理 C と条件）: 第4章で、R3 の族と局所相互作用の対応を、繰り込み方式を固定した定理 C として定理 B の後に扱う。ゲージ固定は構成データとして固定し、方式変更時には同じ族の局所表示が変わることを説明する。
  - authority: 原論文 定理 C、§9。
  - derivation: D3。B が順方向の構成、C が逆方向を含む対応という役割差を保つ。
  - acceptance: B/C の結論と仮定が入れ替わらず、方式・スケール・ゲージ固定の比較の仕方が混ざらない。
- R6（BV の必要最小限の主線）: 第5章はゲージ重複と積分の変形という動機から、ゴースト・反場・奇のペアリング、BV 括弧と `Δ`、古典マスター方程式と量子マスター方程式の意味と式、自由微分 `Q` と相互作用 `I` の分離へ進む。有限次元の計算例はこれらの操作を検査する役割に合わせる。
  - authority: 原論文 §§2, 10.1、読者像。
  - derivation: D4。QME を単なる新しい式に見せず、作用と測度を含む積分の整合性へ結び付けるため。
  - acceptance: 第6章の `Q` と `Δ_L` を読むための意味が本文中で得られる。長い左微分の符号確認やコホモロジーの例は、主線を遮る場合は折りたたみ・短縮できるが、規約と使う結論は使用地点で参照できる。
- R7（熱核と QME の移送）: 第6章は固定したゲージ固定のもとで `Q^2=(Q^{GF})^2=0`、`H=[Q,Q^{GF}]`、正時間の熱核 `K_L`、区間伝播関数 `P_{L_1,L_2}`、正則化した `Δ_L` を役割とともに導入する。`QP_{L_1,L_2}=K_{L_1}-K_{L_2}`、縮約演算子との交換関係、`(Q+\hbar Δ_{L_2})T=T(Q+\hbar Δ_{L_1})` から QME のスケール間保存まで、推論を可視に保つ。
  - authority: 原論文 §§6, 10.1–10.2。
  - derivation: D4。構成の数学的な整合性がどこから生じるかを示す最短の鎖である。
  - acceptance: それぞれの核と演算子の入力・役割、熱演算子の端点差が BV 演算子の端点差へ移ること、移送に初期 QME 解の存在は含まれないことが追える。座標別の符号ドリルは必要に応じて補足へ移せる。
- R8（量子化の障害と出口）: 第7章は有限な有効作用族へ QME を課したときの残る問題に集中する。有限次元の一次補正を類比として示す場合、原論文 §12 の局所的な破れは低次数まで QME を満たす仮定のもとで現れ、次の `(i,k)` の局所補正による変化はその段階では `Q` による、という構造と、閉じているが像でない類が障害となる意味を説明する。最後に全体の依存関係と未解決の個別理論での障害判定を回収する。
  - authority: 原論文 §12、目的。
  - derivation: D5。B/C を再説明するより、有限化から量子化へ進む最後の分岐を明確にする。
  - acceptance: 第4章の B/C と局所性の一般説明を重複させず、有限次元の `d_{I_0}` と原論文の次数別の `Q` 障害を同一視しない。非零障害の具体例を作ったと誤認させない。
- R9（出典とメタデータ）: 各一般主張は原論文の該当箇所へ辿れ、模型内の計算、原典から採用した定理、ノートによる説明上の類比が識別できる。`note.config.json` の章タイトル・概要・出典範囲は最終本文の仕事を正確に示す。
  - authority: artifact role、公開ノートのインターフェース、原論文。
  - derivation: D1–D6。局所模型とコンパクト多様体の定理を連続的に読むため、根拠の境界とナビゲーションが必要。
  - acceptance: 章リンクと参照先が実在し、目次から B/C を読む章、BV の移送を読む章、障害を読む章が見つかる。既存章 ID・順序・公開 URL を保つ。

## Conventions

- 日本語のつながった説明文を基本に、式の直前に入力と目的、直後に何が分かったかを置く。用語は読者の既習概念に結び付けて導入し、初出の記号を未説明のまま推論に使わない（Audience、D1）。章ごとに同じ説明文型を強制しない。
- 有効相互作用の規約 `I=-V` と指数の `+I/\hbar`、ガウス共分散 `\hbar p`、四次項 `g/4!`、`\hbar` の形式次数、熱時間の下限 `ε` と正の上限 `L` を一貫させる。第1–3章と第4章冒頭の正定値スカラー模型から原論文の BV 伝播関数へ移る際は、定義と仮定の差を明示する（Audience、原論文 §§1.2, 6, 10）。
- 式の符号は採用した次数付き微分・BV ペアリング・`Δ_L` の規約と一緒に示す。原論文の式へ対応を付ける際は、同じ記号が異なる対象に作用する箇所を区別する（R6–R7）。
- `ε→0` は紫外カットオフを外す極限、`L→0` は構成された族の漸近的局所性を調べる極限として別々に扱う。正スケール間の移動はさらに別の操作である（R3–R5）。

## Invariants

- `COSTELLO-INTRO-001` の段落、その境界、許可された変更の範囲を守る。アンカーが一意に見つからなくなったら本体の編集を止める（D6、共有 spec contract）。
- 第1–3章の具体計算は一般定理の動機と検算であり、証明としては扱わない。平坦な `\mathbb R^4` スカラー模型の範囲と、原論文のコンパクト多様体・BV 設定を区別する（D1、R1）。
- 方式選択、正スケール、ゲージ固定は異なるパラメータ・操作である。固定条件を明示し、固定していない選択に関する独立性を主張しない（D3、R5）。
- 局所相殺項を得たこと、正スケールの有限な族を得たこと、QME を満たす補正が存在することは別の段階である（D2–D5）。
- `note.config.json` の章 ID と順序、公開 URL を保ち、見出し・概要と本文の新しい重心を一致させる（D6、R9）。

## Protected human realizations

- COSTELLO-INTRO-001
  - anchor: `content/orientation.md`, the complete first prose paragraph immediately after `# Costelloの繰り込みと有効作用`; begins `場の量子論を摂動的に扱うと` and ends `構成の仮定と主張を追う。` At migration, this is line 3, SHA-256 of the paragraph without its trailing newline `e463e607d10a47156bbeb2e57e432be67249b6508e1e1faf736ee002c7dd3993` (Git blob for the full file: `449c15c6b1113c4096bb9fb8452e5c43778673be`).
  - accepted function: Orient a reader familiar with perturbative field theory from Feynman-diagram calculation rules to the question of what remains after the short-distance cutoff is removed and in what sense it forms one theory; introduce Costello's contribution as the mathematical construction of a family of renormalized effective actions under stated conditions; announce the note's route from small Gaussian-average and divergence calculations to the construction's assumptions and claims.
  - invariants: Preserve the connected, accessible four-step progression in this paragraph: familiar calculation rules, the unresolved cutoff/theory question, Costello's constructive answer, and the note's route. Preserve their order, reader-facing role, and explanatory pacing. Do not replace, shorten, re-technicalize, or reorder this realization merely because another opening could satisfy a general spec.
  - allowed changes: Correct typos, punctuation, or link presentation and make other mechanical corrections that preserve the approved progression, meaning, and pacing.
  - boundary: Protection covers only this complete paragraph. The preceding title, the following `## 想定読者と規約の扱い` section, and the remaining chapters were not approved by this human response.
  - state: protected
  - reopening criterion: Explicit human reapproval, or an independently established incompatibility with higher authority, source fidelity, mathematical logic, or a necessary artifact interface that cannot be resolved while preserving the paragraph; record the reason and smallest reopened span before revision.
  - reopening authorization: none
  - authorization evidence: The coordinator confirmed from the prior task context that the user praised this then-current revised opening immediately after it was shown: `ものすごく良くなりました。今回のまぐれじゃなくて、毎回このクオリティを再現できるようにスキルを整えたい`. The coordinator confirmed that the displayed passage is the current first paragraph and that the praise did not extend to the title or later sections. The subsequent request to review the body did not reopen this paragraph.
  - reopened boundary: none

## Exclusions

- 原論文の関数空間の位相、熱核の全漸近展開、全次数の帰納法、定理 C の逆写像、§12 の障害命題をノート内で厳密に証明することは目標外。これらの主張は必要な仮定・役割・結論と証明依存を示し、原典へ案内する（Objective、D2–D5）。
- 一ループ二点計算を原論文の定理 B の証明、有限次元の BV 障害式を無限次元の局所性の証明、QME のスケール間保存を QME 解の存在証明として使わない（D1, D4, D5）。
- 任意の場の理論、非コンパクト空間、任意のゲージ固定に無条件で構成が成立するとしない。具体的な理論で障害が消えるか、散乱振幅と模型の繰り込み条件がどう結び付くかは別の問題とする（原論文 Abstract, §§1.1, 12; R2, R8）。
- 題材を一般的な繰り込み史、BV 形式の網羅的な教科書、符号計算の演習集へ拡張しない。補足は本文の構成を理解するための参照として置く（Objective、D1, D4）。

## Sources and dependencies

- 一次資料: Kevin Costello, [*Renormalisation and the Batalin–Vilkovisky formalism*, arXiv:0706.1533v3](https://arxiv.org/html/0706.1533v3)。§§1.2–1.6 は伝播関数・定理 A/B/C の概観、§7 は二段の漸近展開、§8 は相殺項の帰納構成と最終スケール非依存・局所性、§9 は有効作用族と定理 C、§10.2 は熱核恒等式と QME 移送、§12 は局所障害。§§2, 6 は第5–6章で使う BV と縮約の規約。数式や仮定の最終照合は該当節で行う。
- 読者の前提については `reader-profile.json` の `basis`、`concept_available`、`conventions_to_supply`、`new_or_unconfirmed` を採用する。そのファイルの過去の `reader_fit` や `opening_assessment` は当時の本文の履歴的評価であり、改稿後の合格証明として扱わない。
- 制作上の既存インターフェースは `note.config.json` の章配列、`content/*.md` の章間リンク・数式参照・補足アンカー、公開 URL。本文やメタデータを変える際はリンク・アンカーの整合を確認する。2011 年の著書はメタデータに挙がる参考資料だが、この spec の定理判断は上記 2007 年論文に依拠する。

## Acceptance checks

1. 章順に通読して、ガウス平均 → 合成 → 同一点発散 → 方式と全次数の有効作用族 → BV の条件 → 熱核による条件の移送 → 局所障害、という依存関係を、後の節を先読みせず説明できるかを確認する（R1–R8）。
2. 第4章だけで、具体例の式から定義 1.6.1、定理 A の二段、定理 B の有限化と局所性、定理 C の対応まで辿れるか確認する。各段で「計算したこと」「原典から採用すること」「次の段へ必要なこと」を見分けられるかを見る（R2–R5）。
3. 第5–6章の本文だけで、QME を課す動機と移送の鎖に必要な記号・関係を追えるかを確認する。折りたたみ部分を開かなければ核心が分からない配置にしない（R6–R7）。
4. 第7章を読んだ後、読者が「定理 B は何を与えるか」「第6章は何を保証するか」「障害が何を妨げるか」を別々に答えられるか確認する。第4章の B/C の再叙述が主役になっていないかも見る（R8）。
5. 原論文の該当節と式・仮定を照合し、模型の条件から一般定理の条件への飛躍、`ε` と `L` の極限の混同、方式とゲージ固定の混同、局所性の証明範囲の過大表示を検査する（R1–R9）。
6. `COSTELLO-INTRO-001` の保護アンカーが一意で段落が許容範囲内にあること、章 ID・順序・公開 URL が保たれ、章の見出し・概要・出典表示と本文が一致し、参照リンクが解決することを確認する（R1, R9）。

## Open decisions

なし。本文の段落分け、数式の展開量、補足に畳む箇所、各章の正確な見出しは、上の到達条件とインターフェースの範囲内で realizer が決められる。
