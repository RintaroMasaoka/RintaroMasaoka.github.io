# 非可逆対称性に保護されたトポロジカル相

[公開版を読む](https://rintaromasaoka.github.io/notes/non-invertible-spt/) · [ローカル版](http://127.0.0.1:4173/overview) · [文献一覧](https://rintaromasaoka.github.io/notes/non-invertible-spt/references/)

原稿の正本は [content/overview.md](content/overview.md) と [content/references.md](content/references.md)。章情報と表示順は [note.config.json](note.config.json) で管理する。

## HTMLを作り直す

Node.js 22.13以降とnpmを使う。

```sh
npm ci
npm run build
npm run preview
```

プレビューはこのMacの http://127.0.0.1:4173 で開く。終了後は npm run preview で再起動する。別のポートは npm run preview -- 4174 のように指定できる。

生成HTMLは dist/ に置く。本文と文献にはそれぞれ直接URLがあり、JavaScript実行前にも本文を含む。KaTeXのCSSと全フォントを同じビルドへ収める。

個人サイトへ載せるときは `VITE_SITE_BASE_PATH=/notes/non-invertible-spt npm run build` で公開パスを付け、`dist/` をサイトの `public/notes/non-invertible-spt/` に反映する。

## 共通仕様と検証

Studyの採用版1.0.0に従う。正本仕様1.0.1の互換な表示方針を使用し、基準実装のMarkdown・数式・プレビュー部品とCSSを再利用する。

HTML化の検証記録と基準実装の対応表は、作業用のStudyワークスペースで管理する。

本文に28枚の説明図を埋め込んでいる。図の編集元と再生成手順は [figure-sources/README.md](figure-sources/README.md)、公開画像は `public/diagrams/`。図中の文字は英語とTeX組版を使用する。
