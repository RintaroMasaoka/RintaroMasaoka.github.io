# CLAUDE.md

## Project Overview

Astro + Tailwind CSS で構築された多言語対応（英語/日本語）の学術ポートフォリオサイト。
GitHub Pages (`https://rintaromasaoka.github.io`) にデプロイされる。

## Tech Stack

- **Framework**: Astro v4
- **Styling**: Tailwind CSS v3.4
- **Language**: TypeScript
- **Content**: YAML ファイルベース (`src/data/`)
- **Math**: remark-math + rehype-katex
- **Deploy**: GitHub Actions → GitHub Pages

## Commands

```bash
npm install    # 依存関係インストール
npm run dev    # 開発サーバー起動 (localhost:4321)
npm run build  # 本番ビルド (./dist に出力)
npm run preview # ビルド結果プレビュー
```

## Project Structure

```
src/
├── components/     # Astro コンポーネント (Header, Footer, PublicationCard 等)
├── content/        # Astro Content Collections 設定
├── data/           # YAML コンテンツファイル (profile, cv, navigation, news)
├── i18n/           # 多言語ユーティリティ (ui.ts, utils.ts)
├── images/         # 画像 (Astro 最適化対象)
├── layouts/        # ページレイアウト (BaseLayout, NoteLayout)
├── pages/
│   ├── [...lang]/  # 動的言語ルーティング (index, cv, [type])
│   ├── notes/      # Markdown ノートページ
│   └── prerequisites/ # 前提知識ページ
├── styles/         # グローバルスタイル
├── types/          # TypeScript 型定義 (content.ts)
└── utils/          # ユーティリティ (data.ts, icons.ts, prerequisites.ts)
public/
├── notes/          # PDF ファイル置き場
└── tools/          # ツール (HTML)
```

## Key Architecture

- **i18n**: `defaultLocale: 'en'`, `locales: ['en', 'ja']`。英語は prefix なし (`/cv`)、日本語は `/ja/cv`。
- **Data flow**: YAML (`src/data/`) → `src/utils/data.ts` で読み込み → コンポーネントに渡す
- **Translation**: `useTranslations(lang)` で UI 文字列取得、`localize(bilingualData, lang)` で YAML データの言語切替
- **Routing**: `[...lang]/` パターンによる動的ルーティング。`[type].astro` で publications/presentations/notes 等を統一処理

## Content Editing

コンテンツは `src/data/` の YAML ファイルを編集する。多言語テキストは `en`/`ja` キーで記述:

```yaml
title:
  en: English Title
  ja: 日本語タイトル
```

## Style Customization

- カラーパレット: `tailwind.config.mjs` の `colors` セクション
- フォント: `tailwind.config.mjs` の `fontFamily` + `BaseLayout.astro` の Google Fonts リンク
- ダークモード: `darkMode: 'class'` で設定済み
