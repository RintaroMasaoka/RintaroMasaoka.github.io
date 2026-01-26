# サイト管理・保守マニュアル

このドキュメントは、学術サイト（RintaroMasaoka.github.io）の管理・保守方法を説明します。

---

## 目次

1. [プロジェクト概要](#プロジェクト概要)
2. [技術スタック](#技術スタック)
3. [開発環境のセットアップ](#開発環境のセットアップ)
4. [日常的な更新作業](#日常的な更新作業)
5. [YAMLファイル編集ガイド](#yamlファイル編集ガイド)
6. [ページ構造](#ページ構造)
7. [デザインのカスタマイズ](#デザインのカスタマイズ)
8. [多言語対応（i18n）](#多言語対応i18n)
9. [デプロイ](#デプロイ)
10. [トラブルシューティング](#トラブルシューティング)
11. [ファイル一覧リファレンス](#ファイル一覧リファレンス)

---

## プロジェクト概要

このサイトは **Astro** フレームワークと **Tailwind CSS** で構築された学術用ポートフォリオサイトです。

### 主な特徴

- **YAMLベースのコンテンツ管理**: プログラミング不要でコンテンツを更新可能
- **多言語対応**: 英語(en)と日本語(ja)に対応
- **数式レンダリング**: KaTeXによる数式サポート
- **GitHub Pages自動デプロイ**: mainブランチへのpushで自動デプロイ

---

## 技術スタック

| 技術 | バージョン | 用途 |
|------|-----------|------|
| Astro | ^4.0.0 | 静的サイトジェネレーター |
| Tailwind CSS | ^3.4.0 | スタイリング |
| js-yaml | ^4.1.0 | YAMLファイルのパース |
| remark-math | ^6.0.0 | Markdown数式パース |
| rehype-katex | ^7.0.0 | KaTeX数式レンダリング |

---

## 開発環境のセットアップ

### 必要なソフトウェア

- **Node.js**: v20以上推奨
- **npm**: Node.jsに付属

### セットアップ手順

```bash
# 1. リポジトリをクローン（初回のみ）
git clone https://github.com/RintaroMasaoka/RintaroMasaoka.github.io.git
cd RintaroMasaoka.github.io

# 2. 依存関係をインストール
npm install

# 3. 開発サーバーを起動
npm run dev
```

開発サーバーが起動すると、ブラウザで `http://localhost:4321` にアクセスできます。

### 利用可能なコマンド

| コマンド | 説明 |
|---------|------|
| `npm run dev` | 開発サーバーを起動（ホットリロード対応） |
| `npm run build` | 本番用ビルドを作成（`./dist`に出力） |
| `npm run preview` | ビルド結果をローカルでプレビュー |

---

## 日常的な更新作業

### よくある更新作業の手順

#### 新しい論文を追加する

1. `src/data/publications.yaml` を開く
2. `publications:` セクションの**先頭**に新しいエントリを追加（新しい順）
3. 保存してコミット・プッシュ

```yaml
publications:
  # 新しい論文をここに追加
  - title: "論文タイトル"
    authors:
      - Rintaro Masaoka
      - 共著者名
    year: 2026
    category: preprint  # または journal
    venue: arXiv:xxxx.xxxxx
    links:
      - label: arXiv
        url: https://arxiv.org/abs/xxxx.xxxxx
```

#### 新しい発表を追加する

同じく `src/data/publications.yaml` の `publications:` セクションに追加します。`category` を適切に設定してください。

| category | 説明 |
|----------|------|
| `preprint` | プレプリント |
| `journal` | 学術論文 |
| `talk` | 招待講演 |
| `oral_en` | 口頭発表（国際） |
| `oral_jp` | 口頭発表（国内） |
| `poster_en` | ポスター発表（国際） |
| `poster_jp` | ポスター発表（国内） |

#### 研究ノートを追加する

**方法1: PDFファイルの場合**

1. PDFを `public/notes/` に配置
2. `src/data/notes.yaml` にメタ情報を追加

```yaml
notes:
  - title:
      en: "Note Title in English"
      ja: "日本語タイトル"
    filename: subfolder/filename.pdf  # public/notes/ からの相対パス
    description:
      en: "Description in English"
      ja: "日本語の説明"
    tags:
      en:
        - Tag1
        - Tag2
      ja:
        - タグ1
        - タグ2
```

**方法2: Markdownページの場合**

1. `public/notes/` にMarkdownファイル（例: `mynote.md`）を作成
2. `src/data/notes.yaml` に `url` を指定

```yaml
- title:
    en: "Note Title"
    ja: "ノートタイトル"
  url: /notes/mynote  # .md拡張子は不要
  description:
    en: "Description"
    ja: "説明"
  tags:
    en:
      - Tag
    ja:
      - タグ
```

#### プロフィールを更新する

`src/data/profile.yaml` を編集します。

```yaml
# 例: 所属が変わった場合
affiliation:
  en: New Affiliation
  ja: 新しい所属

# 例: メールアドレスを変更
contact:
  email: new-email[at]example.com
```

#### CVを更新する

`src/data/cv.yaml` を編集します。

- 新しいポジション → `positions:` に追加
- 新しい受賞 → `awards:` に追加
- 新しい研究費 → `grants:` に追加

---

## YAMLファイル編集ガイド

### ファイル一覧

| ファイル | 内容 | 更新頻度 |
|---------|------|---------|
| `src/data/profile.yaml` | 名前、所属、連絡先、ナビゲーション | 低（年に数回） |
| `src/data/publications.yaml` | 論文・発表リスト | 高（新しい成果ごと） |
| `src/data/notes.yaml` | 研究ノートのメタ情報 | 中（ノート追加時） |
| `src/data/cv.yaml` | 経歴、受賞、研究費など | 中 |

### YAML構文の注意点

```yaml
# ✅ 正しい例
title:
  en: "English Title"
  ja: "日本語タイトル"

# ❌ 間違い: インデントが揃っていない
title:
en: "English Title"    # インデントなし = エラー
  ja: "日本語タイトル"

# ✅ 複数行テキストは | を使用
bio:
  en: |
    This is the first line.
    This is the second line.
  ja: |
    これは1行目です。
    これは2行目です。

# ✅ リストの書き方
tags:
  - Tag1
  - Tag2
  - Tag3

# ✅ 特殊文字を含む場合はクォートで囲む
title: "Paper: A New Approach"
email: "user[at]example.com"
```

### 多言語データの構造

ほぼすべてのテキストは `en`（英語）と `ja`（日本語）の両方を指定します：

```yaml
name:
  en: English Name
  ja: 日本語名
```

---

## ページ構造

### URL構造

```
/              → 英語ホーム（デフォルト）
/en/           → 英語ホーム
/en/cv         → 英語CV
/en/publications → 英語論文リスト
/en/presentations → 英語発表リスト
/en/notes      → 英語ノートリスト

/ja/           → 日本語ホーム
/ja/cv         → 日本語CV
/ja/publications → 日本語論文リスト
/ja/presentations → 日本語発表リスト
/ja/notes      → 日本語ノートリスト
```

### ページファイルの場所

```
src/pages/
├── index.astro           # / (英語ホームへリダイレクト)
├── en/
│   ├── index.astro       # /en/
│   ├── cv.astro          # /en/cv
│   ├── publications.astro # /en/publications
│   ├── presentations.astro # /en/presentations
│   └── notes.astro       # /en/notes
└── ja/
    ├── index.astro       # /ja/
    ├── cv.astro          # /ja/cv
    ├── publications.astro # /ja/publications
    ├── presentations.astro # /ja/presentations
    └── notes.astro       # /ja/notes
```

---

## デザインのカスタマイズ

### カラーパレットの変更

`tailwind.config.mjs` を編集：

```javascript
colors: {
  accent: {
    DEFAULT: '#0d9488', // メインカラー（現在: Teal）
    light: '#0d9488',
    dark: '#0d9488',
  },
}
```

**おすすめの色**:
- ブルー: `#2563eb`
- パープル: `#7c3aed`
- オレンジ: `#ea580c`

### フォントの変更

1. `src/layouts/BaseLayout.astro` でGoogle Fontsリンクを変更
2. `tailwind.config.mjs` の `fontFamily` を更新

### コンポーネントの編集

| コンポーネント | 場所 | 説明 |
|--------------|------|------|
| `Header.astro` | `src/components/` | ナビゲーションバー |
| `Footer.astro` | `src/components/` | フッター |
| `HomeContent.astro` | `src/components/` | ホームページのコンテンツ |
| `PublicationCard.astro` | `src/components/` | 論文カード |
| `NoteCard.astro` | `src/components/` | ノートカード |
| `BaseLayout.astro` | `src/layouts/` | 全ページ共通レイアウト |

---

## 多言語対応（i18n）

### 翻訳文字列の追加

UI文字列は `src/i18n/ui.ts` で管理されています：

```typescript
export const ui = {
  en: {
    'nav.home': 'Home',
    'section.awards': 'Awards & Honors',
    // 新しいキーを追加
  },
  ja: {
    'nav.home': 'ホーム',
    'section.awards': '受賞歴',
    // 対応する日本語を追加
  },
};
```

### 翻訳関数の使い方（コンポーネント内）

```astro
---
import { useTranslations } from '../i18n/utils';
const t = useTranslations(lang);
---

<h2>{t('section.awards')}</h2>
```

### localize関数の使い方（YAMLデータ用）

```astro
---
import { localize } from '../i18n/utils';
import { profile } from '../utils/data';
---

<h1>{localize(profile.name, lang)}</h1>
```

---

## デプロイ

### 自動デプロイ（GitHub Actions）

`main` または `master` ブランチにプッシュすると、自動的にGitHub Pagesにデプロイされます。

**ワークフロー**: `.github/workflows/Deploy.yml`

### 初回設定（GitHub側）

1. GitHubリポジトリの **Settings** → **Pages** を開く
2. **Source** を **GitHub Actions** に変更
3. 保存

### デプロイの確認

1. GitHubリポジトリの **Actions** タブでビルド状況を確認
2. デプロイ完了後、`https://rintaromasaoka.github.io` にアクセス

### 手動デプロイ

GitHub Actionsのワークフローを手動でトリガーすることも可能：

1. **Actions** タブを開く
2. **Deploy to GitHub Pages** を選択
3. **Run workflow** をクリック

---

## トラブルシューティング

### ビルドエラーが発生する

```bash
# 依存関係を再インストール
rm -rf node_modules package-lock.json
npm install
```

### 変更が反映されない

```bash
# 開発サーバーを再起動
# Ctrl+C で停止後
npm run dev
```

### YAMLの構文エラー

- インデントは**スペース2つ**を使用（タブは不可）
- コロンの後にはスペースが必要: `key: value`
- 特殊文字を含む値はクォートで囲む

### 画像が表示されない

- 画像は `public/` または `src/images/` に配置
- `public/` 内の画像は `/filename.png` でアクセス
- `src/images/` 内の画像は `import` して使用

### デプロイが失敗する

1. **Actions** タブでエラーログを確認
2. よくある原因:
   - YAMLの構文エラー
   - 存在しないファイルへの参照
   - Node.jsバージョンの不一致

---

## ファイル一覧リファレンス

### データファイル（コンテンツ編集）

```
src/data/
├── profile.yaml        # プロフィール情報
├── publications.yaml   # 論文・発表リスト
├── notes.yaml          # 研究ノートメタ情報
└── cv.yaml             # 経歴情報
```

### 設定ファイル

```
astro.config.mjs        # Astro設定（サイトURL、i18n設定など）
tailwind.config.mjs     # Tailwind CSS設定（色、フォントなど）
package.json            # 依存関係、スクリプト
```

### ページファイル

```
src/pages/
├── index.astro         # ルートページ
├── en/*.astro          # 英語ページ
└── ja/*.astro          # 日本語ページ
```

### コンポーネント

```
src/components/
├── Header.astro        # ヘッダー/ナビゲーション
├── Footer.astro        # フッター
├── HomeContent.astro   # ホームページコンテンツ
├── PublicationCard.astro # 論文カード
└── NoteCard.astro      # ノートカード

src/layouts/
└── BaseLayout.astro    # 全ページ共通レイアウト
```

### 多言語対応

```
src/i18n/
├── ui.ts               # UI翻訳文字列
└── utils.ts            # 翻訳ユーティリティ関数
```

### 静的ファイル

```
public/
├── notes/              # PDF・Markdownノート
├── resources/          # その他リソース
└── profile.png         # プロフィール画像（設定による）

src/images/
└── profile.png         # Astro最適化用プロフィール画像
```

### 自動デプロイ

```
.github/workflows/
└── Deploy.yml          # GitHub Actions設定
```

---

## 更新履歴

| 日付 | 内容 |
|------|------|
| 2026-01-26 | 初版作成 |

---

## 連絡先

技術的な質問やバグ報告は、GitHubのIssuesに投稿してください。
