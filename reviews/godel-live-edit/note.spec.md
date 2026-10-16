# ゲーデルの不完全性定理ノート — active writing spec

Approval migration: not-applicable. No legacy author-approved prose or protected realizations were found; prior publication records certify rendering/deployment only.

## Objective and reader
数学に関心があり、論理学の専門知識を前提としない読者が、形式的な証明の検査から算術化・対角化・不完全性へ進む理由を追える日本語学習ノート。

## Authority and scope
Published source: src/content/notes/godel-incompleteness.md. Local source mirror: Learning/Godel_imcompleteness の元Markdown。Current production baseline 579f999076da6198321ec4b3bc4a506bcbf0904e. Existing scientific content and bibliography remain authority for this editorial pass; no new theorem claims or notation designs.

## Route and invariants
証明の規則を明示する目的→短い証明の検査→式・証明を数で扱う必要→番号の割当てと算術的性質への翻訳の区別→証明可能性→自己代入→不完全性。自己言及する証明不能文そのものは§6の構成で初出とする。歴史的な人物の対策を、後の構成の論理的必然性の代わりに用いない。
例を選ぶときはそこで示す操作を明らかにし、列挙からの一例ならその選択を明示する。
原文の定理の仮定・式・証明・文献を保つ。変更は指摘を解消する説明経路に限定し、§5以降は入口の改稿によって参照が切れる箇所だけ修復する。

## Current realization boundary
§1–§4の導入・接続を一つの説明単位として再構成する。§2は既存の証明例を生かし「たとえば、二つ目の式は」の役割を明示する。§4は自然数と記号列の対応を具体的に追え、符号化だけで算術表現が完了したと思わせない。§5の証明の検査と真偽の区別は、既出の短い等式を使って説明し、真理判定の不可能性を未導出のまま根拠に用いない。§6の自己代入は、既存の符号化規則に整合する具体的な式と数を使い、復号・代入・再符号化の入力と出力を段階ごとに示す。一般化する前に具体例を一周させ、式・数・数項・操作結果の番号を区別する。§6と結語に旧冒頭だけに依存する表現があれば接続を修復する。「一人の体系」の省略された関係を明示するか、その段落の配置変更で解消する。

## Acceptance and production
指摘への適合、変更範囲の日本語、前後への接続を確認し、型・ビルド・数式と実ページを検査する。独立の逐次読者審査が未了ならその状態を記録し、全原稿の論理・科学的正確性の受入済みとは報告しない。User authorizes iterative live publication of corrections and requests a report of changed passages.
