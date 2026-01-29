# Academic Website Template

Astro + Tailwind CSS で構築された多言語対応の学術サイトテンプレートです。

## 特徴

- **多言語対応（i18n）**: 英語/日本語のバイリンガルサイト
- **YAMLでコンテンツ管理**: `src/data/` 内のYAMLファイルを編集するだけでサイトを更新
- **動的ルーティング**: `[...lang]/` パターンによる言語別URL生成
- **モダンなデザイン**: Tailwind CSS によるレスポンシブデザイン
- **数式サポート**: KaTeX による数式レンダリング
- **GitHub Pages対応**: 自動デプロイ設定済み

## クイックスタート

### 1. セットアップ

```bash
# リポジトリをクローン
git clone <your-repo-url>
cd academic-site

# 依存関係をインストール
npm install

# 開発サーバーを起動
npm run dev
```

### 2. コンテンツの編集

YAMLファイルを編集してサイトを更新します：

| ファイル | 内容 |
|---------|------|
| `src/data/profile.yaml` | 名前、所属、連絡先、自己紹介（多言語） |
| `src/data/navigation.yaml` | ナビゲーションメニュー（言語別） |
| `src/data/publications.yaml` | 論文リスト（カテゴリ分類） |
| `src/data/presentations.yaml` | 発表リスト（招待講演、口頭、ポスター） |
| `src/data/resources.yaml` | 研究ノート・ツール（多言語対応） |
| `src/data/cv.yaml` | 経歴、受賞、研究費など |

### 3. 多言語コンテンツの書き方

多くのフィールドはバイリンガル形式で記述します：

```yaml
title:
  en: English Title
  ja: 日本語タイトル
```

### 4. PDFの追加

研究ノートのPDFは `public/notes/` に配置します：

```bash
public/
└── notes/
    ├── your-note.pdf
    └── another-note.pdf
```

配置後、`src/data/resources.yaml` の `items` セクションにメタ情報を追加してください。

### 5. デプロイ

mainブランチにpushすると自動的にGitHub Pagesにデプロイされます。

初回は以下の設定が必要です：

1. GitHub リポジトリの Settings > Pages
2. Source を "GitHub Actions" に変更

## URL構造

多言語対応のため、以下のURL構造になっています：

| 言語 | URL例 |
|------|-------|
| 英語（デフォルト） | `/`, `/cv`, `/publications` |
| 日本語 | `/ja/`, `/ja/cv`, `/ja/publications` |

## ディレクトリ構造

```
academic-site/
├── src/
│   ├── data/           # ★ コンテンツ（YAML）- 主にここを編集
│   │   ├── profile.yaml
│   │   ├── navigation.yaml
│   │   ├── publications.yaml
│   │   ├── presentations.yaml
│   │   ├── resources.yaml
│   │   └── cv.yaml
│   ├── i18n/           # 国際化ユーティリティ
│   │   ├── ui.ts       # UI翻訳文字列
│   │   └── utils.ts    # 多言語ヘルパー関数
│   ├── types/          # TypeScript型定義
│   │   └── content.ts  # コンテンツ型（PageType, BilingualText等）
│   ├── utils/          # ユーティリティ
│   │   └── data.ts     # YAMLデータ読み込み
│   ├── components/     # UIパーツ
│   ├── layouts/        # ページレイアウト
│   └── pages/
│       ├── [...lang]/  # 動的言語ルーティング
│       │   ├── index.astro   # ホーム
│       │   ├── cv.astro      # CV
│       │   └── [type].astro  # publications/presentations/resources
│       └── notes/      # Markdownノート
├── public/
│   ├── notes/          # ★ PDF置き場
│   └── tools/          # ツール（HTML）
└── .github/
    └── workflows/      # 自動デプロイ設定
```

## ページ構成

| ページ | 説明 |
|--------|------|
| Home | プロフィール、研究内容 |
| CV | 経歴、受賞、研究費 |
| Publications | 論文リスト（査読付き、プレプリント等のカテゴリ別） |
| Presentations | 発表リスト（招待講演、口頭、ポスター等のカテゴリ別） |
| Resources | 研究ノート（PDF）とツール |

## AIとのデザイン調整（Vibe Coding）

デザインを変更したい場合、以下のようにAIに依頼できます：

### 色を変えたい
```
tailwind.config.mjs の accent の色を青系に変えてほしい
```

### カードのホバーエフェクトを変えたい
```
PublicationCard.astro のホバー時に少し浮き上がるようにしてほしい
```

### フォントを変えたい
```
BaseLayout.astro の Google Fonts のリンクを変更して、
tailwind.config.mjs のフォント設定も更新してほしい
```

## カスタマイズのヒント

### 色の変更

`tailwind.config.mjs` の `colors` セクションを編集：

```js
colors: {
  accent: {
    DEFAULT: '#0d9488', // メインのアクセントカラー
    light: '#5eead4',
    dark: '#134e4a',
  },
}
```

### ナビゲーションの編集

`src/data/navigation.yaml` を編集します。各言語ごとにメニュー項目を定義：

```yaml
en:
  - label: Home
    href: /
  - label: CV
    href: /cv

ja:
  - label: ホーム
    href: /ja/
  - label: 履歴書
    href: /ja/cv
```

### 新しいリソースの追加

`src/data/resources.yaml` の `items` セクションに追加：

```yaml
items:
  - title:
      en: My New Note
      ja: 新しいノート
    category: notes
    filename: my-note.pdf
    description:
      en: Description in English
      ja: 日本語の説明
```

## トラブルシューティング

### ビルドエラーが出る

```bash
# 依存関係を再インストール
rm -rf node_modules package-lock.json
npm install
```

### 変更が反映されない

開発サーバーを再起動してください：
```bash
# Ctrl+C で停止後
npm run dev
```

## ライセンス

MIT
