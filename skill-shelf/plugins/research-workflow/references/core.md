# 共通実行契約

## 役割

| 所有者 | 判断・成果物 |
|---|---|
| `research-workflow:auto-research` の research lead | 科学的方向、research/focus.md、通常の調査・推論、selective worker dispatch、Research Draft、close-session packet |
| research-planner | 明示的に依頼された場合だけ、方向判断のbounded advisory memo。focusやdirectiveを直接更新しない |
| worker | 指定された狭い調査・計算・読解・実装 |
| critic | 独立検証。主張、導出、source fidelity、再現性 |
| curator | research tree の配置、状態、吸収、provenance、archive |
| guide-writer | durable surface から作る人間向け guide.md |
| project owner | 研究方向と、論文執筆など package 外の成果物に関する判断 |

他の役割の判断を黙って代行しない。判断権が不足するときは blocker と所有者を明記する。

## 実行規則

- prose は日本語。technical term、固有名、path、schema key、LaTeX は原表記でよい。
- 数式は Markdown LaTeX の $...$ または $$...$$ を使う。
- `research-workflow:auto-research` の active session 中は user input を求めない。曖昧さは合理的仮定と scope 表示で処理し、構造的に不可能なら停止理由を残す。
- project 外へ書かず、global install を行わない。
- 入力は path で受け、必要な section だけ読む。_materials は index や説明から絞り、必要な body だけ開く。
- durable research prose は .logs や _reviews を根拠として link しない。内容を吸収し、checks や source record へ provenance を閉じる。

## Worker transaction

review 対象の worker は次へ書く。

- node task: research/{node}/_reviews/{slug}/worker.md
- source task: literature/_reviews/{id}/worker.md
- raw process trace: .logs/{timestamp}_{agent}_{slug}.md
- 任意の workflow feedback: feedback/{timestamp}_{agent}_{slug}.md

raw log と feedback の path は、この reference から `../scripts/session.py` にある package-local script を解決し、`python3 <resolved-path> --project-root <project-root> path --kind log|feedback --label <agent-or-slug>` で取得する。project-local な補助 script を前提にせず、timestamp を手作りしない。

worker.md の先頭は次の review contract を使う。

    transaction_kind: worker-submission
    intended_destination: state | findings | _materials/analyses | dead_ends | checks | source_record | none
    review_focus: {critic が検査する claim、導出、計算、抽出、構成}
    scope: {claimed scope}
    evidence: [proof | mechanical | numerical | literature]
    raw_log: .logs/{...}.md
    feedback: feedback/{...}.md

feedback key は実際に feedback note を書いた場合だけ置く。本文には task、candidate、method、evidence、scope、limitations、再現手順、Naming decisions を必要に応じて含める。

返値は DONE: {worker.md path}。失敗時は FAILED: {reason}。

worker.md は provisional candidate であり、critic verdict だけでも durable fact にはならない。research leadがResearch Draftとfocusへの採否を判断し、curatorがreviewとadmission sourceを確認してdurable treeへ吸収する。

長い tool call の前後には、何を検査するか／何が分かったかを一文で dispatcher に返し、silent timeout を避ける。artifact 本文へ進捗 narration を混ぜない。

## 信頼境界

- ACCEPT は検査範囲に blocking defect が見つからなかったことを示す。novelty や完全性の最終保証ではない。
- evidence、review、admission は別の軸。強い文章や長い導出を authority の代用にしない。
- user、planner、source、project observation のどれに由来するかを区別する。
