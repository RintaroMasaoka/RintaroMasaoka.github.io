# Research Tree Contract

active tree は研究判断のための圧縮 memory であり、完全な作業履歴ではない。履歴は .logs、provisional work は _reviews、再利用する現在理解は research tree に置く。

## 主要 surface

    research/
      focus.md
      story.md
      principles.md
      conventions.md
      map.md
      {node}/
        state.md
        map.md
        plan.md
        findings.md
        guide.md
        sources.md
        backlog.md
        asides.md
        dead_ends.md
        checks/
        _reviews/{slug}/
        _materials/{src,data,images,analyses}/
      archive/

- focus.md: research leadのcurrent decision surface。cursor、lead work、selective dispatch、directive、blocker。
- state.md: node の Current Board と吸収済み evidence。短く保つ。
- map.md: parent から見た child の役割、状態、含意、reopen 条件。
- plan.md: active decomposition、依存、research leadが採用しcuratorが記録した方法とsuccess criteria。
- findings.md: admission 済みの再利用 claim と導出。principal claim ごとに checks link が必要。
- guide.md: 人間が検査する入口。authority ではない。
- sources.md: current direction が使う source route。
- backlog.md: 現在の dispatch を妨げない将来 task。
- asides.md: active thread 外だが忘れたくない item。fact authority はない。
- dead_ends.md: 再利用可能な失敗条件と再開条件。
- checks/: durable verification provenance。
- _reviews/: worker/critic の provisional transaction。
- _materials/: code、data、figure、clean analysis。存在だけでは fact authority を持たない。

## Node identity と lifecycle

各 node は一つの研究 object、question、construction、result、bridge、warning、gap のいずれかを担う。独立した問題や success criterion が混在したら split を検討する。process history だけになった node は再利用可能な residue を抽出して archive する。

state.md frontmatter の kind と status を使う。標準 status は active、blocked、stable、closed、archived。status変更、create、reparent、archiveはresearch lead directiveまたは既存evidenceが要求するtransactionとしてcuratorが閉じる。科学的優先順位をcuratorが発明しない。

state.md の最小 shape:

    ---
    kind: question | construction | result | bridge | warning | other
    status: active | blocked | stable | closed | archived
    parent: research/{parent}/
    ---
    # {Node}
    ## Background
    ## Current Board
    ## Evidence

Current Board は現在理解へ置換し、Evidence は吸収した candidate、scope、verdict、next implication を追記する。長い導出は findings または clean analysis、chronology は log へ分離する。

## 権限

- research lead: focus.md、科学的directive、通常のresearch execution、Research Draft、close-session packet。graph meaningを変えないnode-localなstate working evidenceとplan strategyを更新できる。status/kind、map、findings、checks、cross-node routeは直接編集しない。
- research-planner: 明示的に依頼されたbounded direction adviceだけ。focusとtreeへのwrite authorityは持たない。
- curator: graph/lifecycle、cross-node state/plan integration、map、findings materialisation、checks routing、archive。
- critic: _reviews 内の critic file と依頼された checks review。
- worker: _reviews と明示された _materials。
- guide-writer: guide.md。
- project owner: story、論文執筆、人間承認を伴う narrative。この package はそれらを自動で代行しない。

## Provisional review

一つの transaction directory に次を置く。

    worker.md
    critic.md
    repair.md
    critic_rereview.md

後半二つは最大一回の repair loop のときだけ使う。critic は worker file を直接編集しない。review mode は blind、source-audit、contextual。verdict は ACCEPT、REJECT、REVISE-NONBLOCKING、REVISE-BLOCKING、OPAQUE。

curatorはconsequential claimについてcritic review済みでblockingされていない内容だけをestablished supportとして吸収する。leadが採用したno-critic materialは`unreviewed`と明示したworking stateに限って吸収でき、findingsやconfirmed supportへ昇格させない。_reviewsや.logsへのdurable linkは残さない。

## Durable fact と provenance

findings.md の principal claim には次が必要。

1. claim と適用 scope
2. 読者が追える導出または導出 skeleton
3. limitations と source/project boundary
4. checks/{slug}.md への Markdown link

check file の frontmatter:

    confidence: confirmed | strong-conjecture | conjecture | open
    evidence: [proof | mechanical | numerical | literature]
    review: [critic-blind | critic-contextual]
    scope: full または具体的制限
    supports_project_central_claim: true | false

confirmed には少なくとも一つの first-order evidence と full scope が必要。critic review は evidence の代替ではない。literature だけで confirmed にできるのは外部結果をそのまま引用し、project central claim を支持しない場合だけ。project central claim には local proof、mechanical、numerical のいずれかが必要。

Durable Surface Review file は record_kind: durable-surface-review、target、surface、review_mode、verdict、scope を持つ。これは review record であり、principal claim の terminal provenance endpoint ではない。curator が evidence と accepted review を record_kind: provenance の check record へ合成する。

substantive findings または clean analysis を新規 materialise した場合、curator は Durable Surface Review を要求し、結果を checks と surface に反映する。

## Materials

- src: 再現可能な code と短い companion description。共有範囲の lowest common ancestor に置く。
- data: observable を所有する node。table は metadata header 付き TSV を標準とする。
- images: 対応する data/analysis と同じ node。
- analyses: review と curator placement を経た clean narrative。findings ではない。

material を読む前に index や frontmatter で絞る。superseded artifact は削除せず archive へ移す。generated cache、bytecode、環境依存物は commit しない。

## Transaction close

curator は touched durable prose の link、naming、notation、provenance、parent map、status を同じ transaction で整合させる。意味を変える選択が残る場合は修復せず、Admission blocked または所有者付き blocker として返す。
