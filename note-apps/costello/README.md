# Costello note

Costello の摂動的場の理論を学ぶ、日本語の 8 章の対話的ノートです。
公開 URL: https://rintaromasaoka.github.io/notes/costello/

本文の正本は `content/`、章順・書誌・公開情報は `note.config.json` です。
本文は Mac 上の元ノートから内容を変更せずに移しています。
図の生成ソースは `figure-sources/`、生成した図は `public/diagrams/` に置きます。

Node.js 22.13 以降で、このフォルダから実行します。

```sh
npm ci
npm run build
```

静的出力はサイト側の `public/notes/costello/` です。
ビルドは各章の `index.html` も生成し、GitHub Pages で章 URL を直接開けるようにします。
サイト全体を生成するときは、ノートのビルド後にリポジトリルートで `npm run build` を実行します。

既存の内容検証:

```sh
npm run test:math
npm run test:urls
node scripts/test-review-extraction.mjs
node scripts/validate-manuscripts.mjs
python3 scripts/check-calculations.py  # SymPy が必要
npm run build
```
