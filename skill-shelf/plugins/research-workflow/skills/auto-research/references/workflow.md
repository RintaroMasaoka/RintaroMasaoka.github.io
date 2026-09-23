# /auto-research Workflow

以下で役割を dispatch するときは、role label ではなく `research-workflow:<skill-name>` の identity を指定する。

## Session Start

1. project root、AGENTS.md、必要 script、git repository を確認。
2. .logs/.auto-research-active があれば schema と repository identity を検証し、resume か stale blocker を機械的に決める。
3. research/state.md がなければ package の project-template を案内して停止。研究対象の基本概念を確認し、beacon が gitignore 対象であることを確認。
4. focus.md がなければ root cursor で初期化する。
5. focus、`.logs/last_research_draft.md`、cursor ancestor、cursor state/findings/map/plan/guide、必要な直下child summaryを読み、cycle count、session-owned paths、evidence、review verdict、open tree transactionをmemoryに保持する。全treeやraw logsは無差別に読まない。

## Direction

各cycleの先頭で `.logs/.auto-research-active` を `kind: auto-research`、`phase: cycle`、`remaining`、`max_cycles`、`repository_root`を持つJSONへ上書きする。`repository_root`はSession Startで確定したproject rootのcanonical absolute pathとする。compaction/reconnect後はschemaとrepository identityが一致する場合だけ未完cycleを再開し、未知field valueやidentity mismatchは実行せずblockerとして扱う。

main agentはcurrent local board、recent evidence、review flags、literature statusから、次のresearch decisionを最も判別する問いを一つ選び、research/focus.mdを更新する。

direction-challengerは、stagnation、contradiction、major closure、pivot、premise lock-inのriskが方向判断を左右する場合だけ狭いscopeでdispatchする。通常cycleの儀式として呼ばない。必要ならchallengeを読んだmain agentが採否を判断してfocusへ反映する。

## Boundary transaction

- child から parent へ戻り、parent-level workがchildのdurable presentationに依存する場合だけ、worker前にcuratorがpresentationを閉じる。
- Workerが読むrouteにsemantic repairが必要なPre-Worker Tree Directivesがある場合だけ、curatorがrouting repairを行い、Dispatch readiness: validまたはinvalidatedを返す。
- invalidatedの場合、予定workerを発射せず、main agentが理由を次cycleのfocusへ引き継ぐ。

## Direct work、worker、review

各cycleはmain agentのdirect workから始める。local filesと利用可能toolで妥当に完了できる調査、導出、source triage、局所計算、synthesisはmain agentが行う。

Delegation Gateを通った場合だけ、focusのWorker Dispatchesからagent、task、target、deliverable、success criteria、inputs、run/slug、delegation reason、downstream decision、direct-work insufficiencyを抽出する。複数workerはtaskが相互独立で、各deliverableが重複せず必要な場合だけ並列実行する。

main agentはworker returnをprovisional evidenceとして読み、relevance、scope、採否を判断する。criticは自動付与しない。schemaのClaim consequenceは判断記録でありdispatch命令ではない。Research Draftまたはdurable memoryが依存するconsequential claimについて、独立reviewが不確実性を実質的に下げる場合だけclaim-centered packetを渡す。

- mathematical/mechanical claim: blind
- source fidelity claim: source-audit
- narrative/provenance依存claim: contextual

REVISE-BLOCKINGまたはOPAQUEで、criticがcheap bounded repairを特定した場合だけ一回repairする。

## Curator

main agentはprovisional evidenceをResearch Draft、focus、session handoffへ統合し、graph meaningを変えないnode-localなworking evidenceを`state.md`、採用したlocal strategyを`plan.md`へ更新できる。unreviewed materialは明示し、status/kind、map、findings、checks、cross-node routeは直接編集しない。curatorはTree Directivesがnode placement、lifecycle、cross-node integration、retraction、archive、findings materialisation、checks/provenance closureを必要とする場合だけdispatchする。

substantive durable surface の review request が返ったら critic を dispatch し、curator に戻す。二 round で閉じなければ verification debt として記録する。

## Session End

1. superseded script archive directive を処理。
2. open semantic transaction、未吸収のreviewed evidence、durable promotion/retraction、cross-node route debtがある場合だけcuratorをdispatchする。局所的なprovisional workだけならmain agentがcloseする。
3. Research Draftまたはdurable surfaceが依存するpending Durable Reviewだけをdrainする。
4. changed evidenceに対するhuman reading routeが欠けるnodeだけguide-writerへ渡す。
5. main agentがbash .scripts/log-path.sh close-session-packetでpathを取得し、next focus、last-session handoff、Research Draft、session log、backlog、agenda、commit messageを含むpacketを書く。
6. beaconを`kind: auto-research`、`phase: session-end`、`remaining: 0`、`max_cycles`、`repository_root`へ書き換える。
7. bash .scripts/log-path.sh close-session-manifest で session-owned path list を作り、node .scripts/close-session.mjs --packet {packet} --kind auto-research --stage-manifest {manifest} を実行。
8. cycle 数、主要結果、node change、deliverable、agenda、commit/push を簡潔に user へ返す。

packet作成に失敗した場合、current focusと既知session-end noteから最小packetを作る。commit/push failureはresearch resultを消さずfinal metadataに残す。
