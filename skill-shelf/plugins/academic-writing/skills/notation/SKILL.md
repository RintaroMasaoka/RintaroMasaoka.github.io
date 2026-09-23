---
name: notation
description: "研究、数式導出、文献比較、simulation、code、研究ノート編集、agent handoff の途中で、将来の読み方を固定する notation choice を検出し、chat ではなく既存の durable handoff または canonical convention ledger へ収集・統合する。記号予約、符号・向き・順序・正規化・Fourier・index 規約、用語と記号の対応、source notation と project notation の bridge を導入・使用・変更したとき、既存規約と衝突したとき、または formula-heavy work の closeout sweep で使う。局所 dummy variable、source record 内だけの source-native notation、通常の概念定義だけには使わない。"
---

Read [the shared authoring contract](../../references/authoring-contract.md) before applying this workflow.

# Capture Notation Conventions

主作業を止めず、notation に関する durable residue だけを sidecar として回収する。会話の発言そのものではなく、将来の式・主張・実装の読み方を変える規則を保存する。

## 入力を確認する

- 現在の task、変更した artifact、または agent handoff
- project の `AGENTS.md` と、記録権限・保存先を定める project instructions
- 適用可能な既存 convention ledger
- source-to-project bridge の場合は source-native record と project-side artifact

project が保存先または record owner を定めている場合はそれに従う。skill 独自の ledger を並立させない。

## 収集基準

次の問いで判定する。

> この選択を知らない別の研究者または agent が、同じ式・主張・code を別の意味で読む現実的な可能性があるか。

該当する例:

- 一つの symbol を特定の object に予約する、または overload を解消する。
- sign、orientation、operator order、tensor-leg order、index order、normalization、phase、Fourier transform を固定する。
- technical term と symbol を継続的に対応づける。
- source-side notation を project-side notation へ写す bridge を定める。
- 既存 ledger と異なる規約を局所的に使う、または二つの live convention が衝突する。

収集しない例:

- 一つの導出内だけで使う dummy variable や添字。
- 標準的で曖昧さのない記法を、そのまま使っただけのもの。
- concept の定義、定理、証明、数値結果、workflow rule。
- source record が source-native notation を忠実に記録しただけのもの。
- まだ試しているだけで、後続 artifact が依存していない仮置き。
- spelling、formatting、見出し、文章表現だけの統一。

## Sidecar workflow

1. **Routing を先に読む。** Applicable ledger、scope hierarchy、record owner、現在の agent が所有する durable handoff を特定する。保存先を推測で新設しない。
2. **作業中に候補を保持する。** 規約らしい選択が現れたら、正確な rule、scope、根拠、影響先を短く保持する。主作業を convention audit に変えない。
3. **standing を分ける。** 次のいずれかに分類する。
   - `adoptable`: user、project authority、または既存の採用済み artifact が明示的に固定しており、record owner が機械的に統合できる。
   - `proposed`: 今回の agent が導入した、未検証の導出に依存する、または scope がまだ確定していない。
   - `conflict`: 二つ以上の live rule が同じ scope で両立しない。
4. **closeout sweep を行う。** 変更した式、symbol、code interface、source bridge を一度だけ見直す。候補がなければ何も出力しない。
5. **durable に route する。**
   - canonical ledger の編集権限があり `adoptable` なら、既存 entry と照合して merge する。
   - ledger の編集権限がなければ、現在の agent が所有する既存の durable submission または handoff に候補 block を入れ、record owner へ渡す。
   - task に file write や durable handoff の権限がない場合は新規 file を作らない。候補と intended destination を最終応答で明示する。
6. **影響を確認する。** 許可された scope 内で symbol と表記を検索し、明らかな不一致を同じ transaction で直すか、未解決の影響先として記録する。

## Research assistant package での役割分担

- execution / reader role は、自分の通常の durable submission に候補を露出し、canonical ledger を直接確定しない。
- critic / reviewer role は、候補の数学的整合性、source fidelity、scope、既存 convention との衝突を検査する。成果物の ACCEPT だけで convention の採用権限を作らない。
- curator / recorder role は、採用可能な候補を最も狭い適用可能な ledger に統合し、重複、scope promotion、compatibility bridge、conflict routing を閉じる。
- planner / human owner は、規約の選択が科学的内容または研究方向を変える conflict だけを判断する。
- writer / finalizer role は ledger を読み、paper-local notation へ投影する。欠けた bridge を黙って発明しない。

## Record shape

Canonical ledger の既存形式を優先する。形式が自由なら、少なくとも次の四点を復元可能にする。

```markdown
## {規約名}
Scope: {適用範囲}
Convention: {正確な対応・順序・符号・正規化規則}
Reason: {選択理由、source、または採用根拠}
Consequences: {予約 symbol、影響する式・artifact・compatibility 条件}
```

Record は現在の規約を述べる。変更履歴、反省、会話の引用、agent の判断過程を混ぜない。

権限のない role が渡す候補 block には `Standing: proposed | adoptable | conflict` を加える。Source bridge では、source 側、project 側、写像の成立範囲、必要な仮定、写像が保証しないことを明記する。

## Merge rules

- 同じ rule と scope の entry は追加せず、既存 entry の reason または consequences を更新する。
- project-wide と仮定せず、最初は evidence が支える最小 scope に置く。
- subtree-local rule が外部でも使われた場合は、lowest common ancestor への promotion を record owner に委ねる。
- conflict を多数決や新しさで解消しない。両方の scope を狭く保ち、compatibility map が作れるか確認し、科学判断の owner へ route する。
- Source notation を project convention に翻訳して source record を書き換えない。
- 未検証の計算結果を convention として固定しない。Rule が依存する evidence と、その evidence の standing を分離する。

## 完了条件

- 主 task の成果が convention collection によって歪んでいない。
- 将来の読み方を変える notation choice が chat だけに残っていない。
- 採用済み rule と提案・衝突が区別されている。
- 一つの scope に複数の無関係な canonical ledger が生じていない。
- 保存した entry から scope、rule、reason、consequences を復元できる。
