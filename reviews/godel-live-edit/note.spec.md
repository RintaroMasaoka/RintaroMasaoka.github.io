# ゲーデルの不完全性定理ノート — active writing spec

Approval migration: not-applicable. No legacy author-approved prose or protected realizations were found; prior publication records certify rendering/deployment only.

## Objective and reader
数学に関心があり、論理学の専門知識を前提としない読者が、形式的な証明の検査から算術化・対角化・不完全性へ進む理由を追える日本語学習ノート。

## Authority and scope
Published source: src/content/notes/godel-incompleteness.md. Local source mirror: Learning/Godel_imcompleteness の元Markdown。Initial publication baseline: 579f999076da6198321ec4b3bc4a506bcbf0904e. Current manuscript revision is tracked in Git. Existing scientific content and bibliography remain authority for this editorial pass; no new theorem claims or notation designs.

## Route and invariants
§1は最初の公開版の、嘘つきのパラドックスから歴史的背景へ進む導入を保つ。そこから証明の検査→式・証明を数で扱う必要→番号の割当てと算術的性質への翻訳の区別→証明可能性→自己代入→不完全性へ進む。自己言及する証明不能文そのものは§6の構成で初出とする。§10で§4のコラッツの例を再び使う際には、具体的な規則と例の役割をその場で回復できるようにする。歴史的な人物の対策を、後の構成の論理的必然性の代わりに用いない。
例を選ぶときはそこで示す操作を明らかにし、列挙からの一例ならその選択を明示する。
原文の定理の仮定・式・証明・文献を保つ。変更は指摘を解消する説明経路に限定し、§5以降は入口の改稿によって参照が切れる箇所だけ修復する。

## Current realization boundary
§1は元の導入・段落順・語り口を保持する。変更は「一人の体系」の関係明示と、型の制限から体系全体の矛盾の問題、証明を調べる必要、ヒルベルトの計画へ移る接続部分に限定する。型の制限から証明の機械的検査を直接の帰結として導かない。式の制限から証明を対象にする目的が先に分かることを要する。§1末尾では構成の技術的な要約を行わず、証明できることの限界という主題と、嘘つき文が数学の証明にどう関係するかという問いを示して§2へ導く。嘘つき文からラッセルの応答までの導入は保存する。§2–§4は現在の修正を保持する。§2は既存の証明例を生かし「たとえば、二つ目の式は」の役割を明示する。§4は自然数と記号列の対応を具体的に追え、符号化だけで算術表現が完了したと思わせない。§5の証明の検査と真偽の区別は、既出の短い等式を使って説明し、真理判定の不可能性を未導出のまま根拠に用いない。§6の自己代入は、番号がすでに付いている具体的な式を使い、式を取り出す・その番号を代入する・できた式に番号を付ける、という対応をその場で追えるようにする。記号コードの割当てや素数の積の計算はこの説明の前提にしない。一般化する前に具体例を一周させ、式・数・数項・操作結果の番号を区別する。§6と結語に旧冒頭だけに依存する表現があれば接続を修復する。「一人の体系」の省略された関係を明示するか、その段落の配置変更で解消する。

## Acceptance and production
指摘への適合、変更範囲の日本語、前後への接続を確認し、型・ビルド・数式と実ページを検査する。独立の逐次読者審査が未了ならその状態を記録し、全原稿の論理・科学的正確性の受入済みとは報告しない。User authorizes iterative live publication of corrections and requests a report of changed passages.

## Notation conventions
定義には \coloneqq を使う。式のゲーデル数は既存の \ulcorner…\urcorner の記法で元の式との関係を直接示し、fなどの別名を覚えるだけの対応表を増やさない。証明番号の束縛変数など、役割のある局所変数は保つ。§6の具体例は特定の式への自己代入の対応を見せるために使い、記号番号の割当て・素数の積の計算・巨大な数項の展開を目的にしない。記号を減らすために、必要な式と番号の区別を崩さない。

## Opening orientation
§1より前に、ノートの主題、歴史と具体例から証明の基本的な考え方を追う概説という役割、厳密な細部を省く説明範囲を短い一段落で示す。専門用語や構成手順を先に覚えさせず、実際の本文の範囲を超える読者前提・理解保証を約束しない。
