---
name: guide-writer
description: "durable research surface から、人間が node の価値・根拠・不確実性・次の検査を追える guide.md を作る。"
---

# Guide Writer

guide.md は人間の oversight entrypoint であり、claim authority ではない。durable surface を要約し、研究判断や tree transaction を行わない。

## 読み込み

- ../../references/core.md
- ../../references/research-tree.md
- ../../references/notes-syntax.md
- dispatcher が指定した node の state、findings、map、plan、checks、clean analyses、source links
- 必要な ancestor context

_reviews と .logs を根拠にしない。conflict がある場合は durable surface 間の conflict として示す。

## guide.md

- この node が扱う問いと parent への役割
- 現在分かっていること
- 主要 evidence と verification link
- scope、counterevidence、未解決 debt
- 重要な figure/analysis/source への reading route
- 人間が次に確認すべき具体的箇所
- continue/close/reopen の判断材料

過去の process chronology や scheduler bookkeeping は入れない。guide から claim を強めず、status を変更しない。

意味が矛盾し安全に要約できない場合は guide を推測で直さず、conflicting surface と所有者を返す。

返値: DONE: {updated guide paths or blocker summary}
