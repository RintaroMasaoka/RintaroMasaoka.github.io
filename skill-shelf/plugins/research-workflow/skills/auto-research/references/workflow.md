# /auto-research Workflow

以下で役割を dispatch するときは、role label ではなく `research-workflow:<skill-name>` の identity を指定する。

## Session Start

1. ユーザーの研究質問と、現在の作業フォルダがその研究の保存先として適切かを確認する。project instructions があれば読むが、`AGENTS.md`、Git、既存の `.scripts/` は必須ではない。
2. 書き込み可能な研究フォルダでは、この skill の `SKILL.md` から `../../scripts/session.py` を解決し、`python3 <resolved-path> --project-root <project-root> init --question <question>` を実行する。これは欠けた `research/state.md` と `research/focus.md` だけを作る。既存の研究内容は変更しない。適切な保存先がなければ初期化せず会話内で作業する。
3. 既存の focus、直近の `.logs/*_auto-research-session.md` があればその最新一件、cursor ancestor、必要な state/findings/map/plan/guide を読む。全treeやraw logsは無差別に読まない。中断からの再開もこの記録と現在の依頼から判断し、未知の過去状態を推測で埋めない。

## Direction

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
5. 書き込み可能な研究フォルダでは focus を更新し、package-local `session.py path --kind log --label auto-research-session` で取得した path に、next focus、handoff、Research Draft、session log、backlog、agenda を含む packet を保存する。適切な保存先がなければ同じ内容を最終報告に含める。
6. cycle 数、主要結果、node change、deliverable、未解決の verification debt と次の問いを簡潔に user へ返す。commit と push は行わない。

packet保存に失敗した場合、研究結果は消さず、最終報告に handoff と未保存の状態を明記する。
