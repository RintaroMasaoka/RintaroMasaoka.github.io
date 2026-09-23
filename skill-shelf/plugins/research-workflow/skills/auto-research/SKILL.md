---
name: auto-research
description: "理論物理研究を adaptive research lead として自律的に進める。main agent が方向・通常作業・統合を担い、専門性、実効的な並列性、独立検証、semantic tree surgery が必要な場合だけ subagent を使う。引数は cycle 上限、既定5。"
---

# /auto-research

main agent が research lead として科学的方向、通常の調査・推論、provisional integration、session handoff を担う。subagent は既定の工程ではなく、明確な追加価値を持つ bounded instrument として使う。

この package 内の役割を dispatch するときは必ず `research-workflow:<skill-name>` を使う。`research/focus.md` の Agent field も同じ qualified identity とする。package の `README.md` に記した project requirements を満たさない場合は実行を始めず、不足を報告する。

## 読み込み

開始時に次を読む。

- ../../references/core.md
- references/workflow.md
- references/schemas.md

必要なrole skillはdispatch先自身が読む。main agentはcurrent decisionに必要なnodeだけを読み、全treeやraw logを工程上の安心のために走査しない。

## 目的

指定 cycle 数を使い、現在の research board から最も情報価値の高い問いを選び、main agent 自身の作業を中心に前進させる。部分的結果、negative evidence、verification debt を正直に memory へ残す。独立 review の ACCEPT を最終真理や novelty 証明に変換しない。

## 引数

正の整数を MAX_CYCLES とする。省略時5、不正値は5。resume beacon が有効なら保存値を使う。

## Adaptive loop

1. Session Start と beacon validation。
2. current focus と必要な node context を読み、main agent が live question と判別手段を選ぶ。
3. stagnation、contradiction、major closure、pivot risk がある場合だけ `research-workflow:direction-challenger` を使う。
4. main agent が通常の検索、読解、導出、局所計算、draft synthesis を直接行う。
5. Delegation Gate を通る bounded task だけ worker に委譲する。複数 dispatch は互いに独立で、各出力が必要な場合だけ並列化する。
6. Research Draft または durable memory が依存する consequential claim だけ `research-workflow:critic` に渡す。cheap mechanical repair は最大一回。
7. semantic tree surgery、lifecycle変更、retraction、durable promotion、複雑なprovenance closure が必要な場合だけ `research-workflow:curator` を使う。
8. changed evidence への human reading route が欠ける場合だけ `research-workflow:guide-writer` を使う。
9. main agent が evidence、scope、verification debt、次の問いを統合し、focus と session handoff を更新する。
10. MAX_CYCLES、user stop、unrecoverable failure のいずれかまで繰り返し、Session End transaction と簡潔な最終報告を行う。

focus の `session_complete` は研究状態であり、残りcycleを機械的にsubagent callで消費する理由ではない。新しい情報価値のある作業がなければmain agentがその判断を記録してSession Endへ進める。

## Delegation Gate

dispatch前に、そのagentの出力、それが変える下流判断、main agentのdirect workでは同等のconfidenceまたはcostで得られない理由を一文ずつ特定する。次の少なくとも一つが成立する場合だけ呼ぶ。

- role固有のsource audit、simulation、implementation、または明示された検査contractが必要。
- 二つ以上のbounded taskが相互依存せず、並列化が実際にsession latencyを下げる。
- claimのconsequenceが高く、main agentとcontextを分離した独立検証が必要。
- nodeを跨ぐsemantic transactionやdurable authority操作が必要。

main agentが同じtoolとcontextで完了できるcontext収集、単純検索、小さな導出、局所編集、要約、formattingは直接行う。別roleを工程表の空欄を埋めるために呼ばない。batchは必要最小限とし、既定は一つのbounded dispatchである。agent returnを受け取った後も、方向判断と採否はmain agentが行う。

## 実行規律

- active session 中に user input を求めない。
- cycle 間で進捗文を返して turn を終えない。次の dispatch を行う。
- user-facing message は原則 Session End の最終報告一回だけ。
- sleep や filesystem polling で agent を待たない。runtime の agent wait を使う。
- subagent call数や役割網羅をprogressとして数えない。research decisionを変えないcallは行わない。
- session-owned manifest だけを commit 対象にし、既存 user edit を混ぜない。
- push 前に project remote を確認する。framework remote へ project state を push しない。
- 文献本文を使うときは出典を追跡する。論文執筆はこの package の責務ではない。
