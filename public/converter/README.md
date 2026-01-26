# Unicode ⇌ LaTeX Converter

数学記号やギリシャ文字などの Unicode 文字と LaTeX コマンドを相互変換するWebツールです。

## 概要

このツールは、Unicode 記号（例：`α`, `∑`, `→`）と LaTeX コマンド（例：`\alpha`, `\sum`, `\to`）を双方向に変換できます。論文執筆やノート作成において、Unicode で入力された数式を LaTeX 形式に変換したり、その逆を行う際に便利です。

## 使い方

### 基本操作

1. **入力欄**にテキストを入力すると、リアルタイムで**出力欄**に変換結果が表示されます
2. **Switch to LaTeX → Unicode** / **Switch to Unicode → LaTeX** ボタンで変換方向を切り替えられます
3. **Copy Output** ボタンで変換結果をクリップボードにコピーできます

### 変換例

#### Unicode → LaTeX
```
α + β = γ, ∑ᵢ xᵢ, A → B
```
↓
```
\alpha + \beta = \gamma, \sum_i x_i, A \to B
```

#### LaTeX → Unicode
```
\alpha + \beta = \gamma, \sum_i x_i, A \to B
```
↓
```
α + β = γ, ∑ᵢ xᵢ, A → B
```

## 対応記号

### 演算子・大型演算子
| Unicode | LaTeX |
|---------|-------|
| ∑ | `\sum` |
| ∏ | `\prod` |
| ∫ | `\int` |
| ∮ | `\oint` |
| ⨁ | `\bigoplus` |
| ⨂ | `\bigotimes` |
| ⋂ | `\bigcap` |
| ⋃ | `\bigcup` |
| ⋀ | `\bigwedge` |
| ⋁ | `\bigvee` |

### 関係記号
| Unicode | LaTeX |
|---------|-------|
| ≤ | `\le` |
| ≥ | `\ge` |
| ≪ | `\ll` |
| ≫ | `\gg` |
| ≠ | `\ne` |
| ≡ | `\equiv` |
| ≈ | `\approx` |
| ∼ | `\sim` |
| ≃ | `\simeq` |
| ≅ | `\cong` |
| ∝ | `\propto` |
| ⊂ | `\subset` |
| ⊆ | `\subseteq` |
| ∈ | `\in` |
| ∉ | `\notin` |
| ∋ | `\ni` |
| ∩ | `\cap` |
| ∪ | `\cup` |

### 矢印
| Unicode | LaTeX |
|---------|-------|
| → | `\to` |
| ← | `\gets` |
| ↔ | `\leftrightarrow` |
| ⇒ | `\Rightarrow` |
| ⇐ | `\Leftarrow` |
| ⇔ | `\Leftrightarrow` |
| ⟹ | `\implies` |
| ⟸ | `\impliedby` |
| ⟺ | `\iff` |
| ↦ | `\mapsto` |
| ↪ | `\hookrightarrow` |
| ↩ | `\hookleftarrow` |

### ギリシャ文字
| Unicode | LaTeX | Unicode | LaTeX |
|---------|-------|---------|-------|
| α | `\alpha` | Γ | `\Gamma` |
| β | `\beta` | Δ | `\Delta` |
| γ | `\gamma` | Θ | `\Theta` |
| δ | `\delta` | Λ | `\Lambda` |
| ε | `\varepsilon` | Ξ | `\Xi` |
| ϵ | `\epsilon` | Π | `\Pi` |
| ζ | `\zeta` | Σ | `\Sigma` |
| η | `\eta` | Υ | `\Upsilon` |
| θ | `\theta` | Φ | `\Phi` |
| ι | `\iota` | Ψ | `\Psi` |
| κ | `\kappa` | Ω | `\Omega` |
| λ | `\lambda` | | |
| μ | `\mu` | | |
| ν | `\nu` | | |
| ξ | `\xi` | | |
| π | `\pi` | | |
| ρ | `\rho` | | |
| σ | `\sigma` | | |
| τ | `\tau` | | |
| υ | `\upsilon` | | |
| φ | `\varphi` | | |
| χ | `\chi` | | |
| ψ | `\psi` | | |
| ω | `\omega` | | |

### 特殊文字
| Unicode | LaTeX |
|---------|-------|
| ∅ | `\emptyset` |
| ∞ | `\infty` |
| ∂ | `\partial` |
| ∇ | `\nabla` |
| ħ | `\hbar` |
| ℓ | `\ell` |
| ℘ | `\wp` |
| ∀ | `\forall` |
| ∃ | `\exists` |
| ¬ | `\neg` |
| ⊥ | `\bot` |
| ⊤ | `\top` |
| † | `\dagger` |
| ⋯ | `\cdots` |
| ⋮ | `\vdots` |
| ⋱ | `\ddots` |

### 括弧
| Unicode | LaTeX |
|---------|-------|
| ⟨ | `\langle` |
| ⟩ | `\rangle` |
| ⌈ | `\lceil` |
| ⌉ | `\rceil` |
| ⌊ | `\lfloor` |
| ⌋ | `\rfloor` |
| ⟦ | `\llbracket` |
| ⟧ | `\rrbracket` |
| ‖ | `\|` |

### フォントスタイル

#### 太字（Bold）
| Unicode | LaTeX |
|---------|-------|
| 𝒂 - 𝒛 | `\bm{a}` - `\bm{z}` |
| 𝑨 - 𝒁 | `\bm{A}` - `\bm{Z}` |
| 𝟎 - 𝟗 | `\bm{0}` - `\bm{9}` |
| 𝜶 - 𝝎 | `\bm{\alpha}` - `\bm{\omega}` |

#### 黒板太字（Blackboard Bold）
| Unicode | LaTeX |
|---------|-------|
| 𝔸 - ℤ | `\mathbb{A}` - `\mathbb{Z}` |
| ℂ, ℍ, ℕ, ℙ, ℚ, ℝ, ℤ | 複素数、四元数、自然数、... |
| 𝟙 | `\mathbb{1}` |

#### 筆記体（Calligraphic）
| Unicode | LaTeX |
|---------|-------|
| 𝒜 - 𝒵 | `\mathcal{A}` - `\mathcal{Z}` |

#### フラクトゥール（Fraktur）
| Unicode | LaTeX |
|---------|-------|
| 𝔞 - 𝔷 | `\mathfrak{a}` - `\mathfrak{z}` |
| 𝔄 - ℨ | `\mathfrak{A}` - `\mathfrak{Z}` |

### 上付き・下付き文字
| Unicode | LaTeX | Unicode | LaTeX |
|---------|-------|---------|-------|
| ⁰ - ⁹ | `^0` - `^9` | ₀ - ₉ | `_0` - `_9` |
| ⁺ | `^+` | ₊ | `_+` |
| ⁻ | `^-` | ₋ | `_-` |

## カスタム変換ルール

### ルールのカスタマイズ

ページ下部の「Customize Conversion Rules」セクションで、変換ルールをJSON形式で編集できます。

### ルール構造

```json
{
  "correspondence": [
    {"unicode": "α", "latex": "\\alpha"},
    ...
  ],
  "other_unicode": [
    {"unicode": "𝛼", "latex": "\\alpha"},
    ...
  ],
  "other_latex": [
    {"unicode": "→", "latex": "\\rightarrow"},
    ...
  ]
}
```

### 各配列の役割

| 配列名 | 用途 |
|--------|------|
| `correspondence` | **双方向変換**に使用される基本ルール |
| `other_unicode` | **Unicode → LaTeX** 変換のみに使用（代替の Unicode 表現） |
| `other_latex` | **LaTeX → Unicode** 変換のみに使用（代替の LaTeX 表現） |

### ルール保存

- **Save & Apply Rules**: 編集したルールを保存・適用します（ローカルストレージに保存）
- **Reset to Default Rules**: デフォルトのルールにリセットします

保存されたカスタムルールは、ブラウザのローカルストレージに保存され、次回アクセス時にも自動的に読み込まれます。

## 技術仕様

### 変換アルゴリズム

1. 入力テキストを `\\` で分割（LaTeX の改行を保持）
2. 各ブロックに対してルールマップを適用
3. ルールは長い文字列から優先的にマッチ（最長一致）
4. LaTeX コマンドの後にアルファベットが続く場合は自動でスペースを挿入

### ファイル構成

```
converter/
├── index.html    # メインHTML
├── style.css     # スタイルシート
├── script.js     # 変換ロジック
├── myrule.json   # カスタムルールの例
└── README.md     # このドキュメント
```

## 注意事項

- 一部の特殊な Unicode 文字は、環境によっては正しく表示されない場合があります
- LaTeX パッケージ（`amsmath`, `amssymb`, `bm` など）が必要なコマンドもあります
- 複雑なネスト構造（`\frac`, `\sqrt` の引数など）は個別の変換対象ではありません

## ライセンス

MIT License
