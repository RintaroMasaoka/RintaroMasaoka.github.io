# Academic Website Template

Astro + Tailwind CSS で構築された学術サイトテンプレートです。

## 特徴

- **YAMLでコンテンツ管理**: `src/data/` 内のYAMLファイルを編集するだけでサイトを更新
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
| `src/data/profile.yaml` | 名前、所属、連絡先、ナビゲーション |
| `src/data/publications.yaml` | 業績リスト |
| `src/data/notes.yaml` | 研究ノートのメタ情報 |
| `src/data/cv.yaml` | 経歴、受賞、研究費など |

### 3. PDFの追加

研究ノートのPDFは `public/notes/` に配置します：

```bash
public/
└── notes/
    ├── surface-codes-intro.pdf
    └── tensor-network-memo.pdf
```

配置後、`src/data/notes.yaml` にメタ情報を追加してください。

### 4. デプロイ

mainブランチにpushすると自動的にGitHub Pagesにデプロイされます。

初回は以下の設定が必要です：

1. GitHub リポジトリの Settings > Pages
2. Source を "GitHub Actions" に変更

## ディレクトリ構造

```
academic-site/
├── src/
│   ├── data/           # ★ コンテンツ（YAML）- 主にここを編集
│   ├── components/     # UIパーツ - デザイン調整時に編集
│   ├── layouts/        # ページレイアウト
│   └── pages/          # ページ定義
├── public/
│   └── notes/          # ★ PDF置き場
└── .github/
    └── workflows/      # 自動デプロイ設定
```

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

### 新しいページの追加

1. `src/pages/` に新しい `.astro` ファイルを作成
2. `src/data/profile.yaml` の `navigation` に追加

### 研究分野の編集

`src/pages/index.astro` の "Research Interests" セクションを直接編集するか、
YAMLに移動したい場合は `src/data/profile.yaml` に追加して読み込むように変更

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
