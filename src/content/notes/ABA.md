---
title: "6頂点模型とYang-Baxter方程式"
lang: ja
description: "6頂点模型、Yang-Baxter方程式、代数的Bethe仮設に関するノート"
---

# 6頂点模型とYang-Baxter方程式

## 導入
このノートでは主に6頂点模型について話します。これは2次元の氷をモデル化したものだと考えるとわかりやすいですが、実際の氷の性質を反映しているかは知りません。
しかし、可解格子模型の一つであり、数理的に非常に面白い性質を持っていることが知られています。

左の図では2次元の氷を図示していて、正方格子の各辺で水素原子の配置に2通りの自由度が存在します。この自由度を頂点を結ぶ矢印として書いたのが右の図です。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/1ca32303-1e03-18cc-efda-746900e64434.png" style="width: 70%;" />

各頂点が電気的に中性である (= 酸素原子に結合している水素原子は2個) という条件を課すと、各頂点で流入する矢印と流出する矢印の数は等しくなります。この条件を Ice rule といいます。
Ice rule を考慮すると、あり得る頂点は6通り存在します。ここからこの模型を6頂点模型と呼びます。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/290e3dd0-0205-5ba5-6fea-2219df586957.png" style="width: 70%;" />

矢印の反転に対する対称性を仮定すると、 Boltzmann 重率 $a, b, c$ によって模型は決定されます。[^1]
[^1]: ここで定義した Boltzmann 重率は普通 $\exp(-βε)$ のように書かれますが、まとめて $a, b, c$ という一文字でおいています。

ただし、右・上向きの矢印に正符号 (オレンジ色)をつけ、左・下向きの矢印に負符号 (青色) をつけています。 

特定の矢印の配位について、格子上のあらゆる頂点の Boltzmann 重率 を掛け合わせると、その配位の重みが得られます。
また、それを全ての配位に対して足し上げることで、系の分配関数が求まります。

## テンソルネットワークの記法

6頂点模型における頂点は、上下左右の矢印の符号に対して、 $0, a, b, c$ のいずれかを返すようなテンソルだとみなせます。これを以下のグラフで表します。また、テンソルの縮約を以下のように表します。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/cc2500fd-3902-f5e7-3c81-d8cf5571ddbb.png" style="width: 70%;" />

以上の記法はテンソルネットワークと呼ばれます。テンソルネットワークによる図示は厳密なものであり、常に数式に直すことができます。しかし数式による表現はどうしても1次元的になってしまうので、2次元的に縮約されたテンソルを表す場合、数式よりもテンソルネットワークを使って表現したほうが便利です。
例えば10×10格子の分配関数をテンソルネットワークで表すと、以下のようになります。
ただし、点線は周期的境界条件を表しています。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/a32565a1-3c2e-b38f-3125-d3f8ac1c1c9a.png" style="width: 50%;" />

## モノドロミー行列と転送行列

さて、6頂点模型の頂点を表すテンソルを、具体的に成分表示しましょう。
頂点に対し、右と上の添字のあり得る組み合わせは $++, +-, -+, --$ の4つですが、これらを列の添字とみなします。同様に、左と下の添字も $++, +-, -+, --$ の4つがあり得ますが、これらを行の添字とみなします。
すると、$α$行目、$𝑛$列目の頂点は、以下の4×4行列で表示できます。
例えば2行目3列目は、左が$+$、下が$-$、 右が$-$、 上が$+$のときの Boltzmann 重率を表しています。
$$
\begin{align*}
    L_{n,α}
    &
    = \begin{pmatrix}
        a&0&0&0\\
        0&b&c&0\\
        0&c&b&0\\
        0&0&0&a
    \end{pmatrix}
    = \begin{pmatrix}
        aπ_n^+ + bπ_n^- & cσ_n^- \\
        cσ_n^+ & bπ_n^+ + aπ_n^-
    \end{pmatrix}
    \\ &
    = \frac{a+b}{2}1_α1_n+\frac{a-b}{2}σ_α^zσ_n^z+\frac{c}{2}(σ_α^xσ_n^x+σ_α^yσ_n^y)
\end{align*}
$$
これをL行列といいます。なお、記号の定義は以下のとおりです。
$$
\begin{align*}
    σ^x = \begin{pmatrix}0&1\\1&0\end{pmatrix},\quad
    σ^y = \begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad
    σ^z = \begin{pmatrix}1&0\\0&-1\end{pmatrix}.
\end{align*}
$$
$$
\begin{align*}
    π^+ = \frac{1+σ^z}{2},
    \quad
    π^- = \frac{1-σ^z}{2}.
\end{align*}
$$
$$
\begin{align*}
    σ^+ = \frac{σ^x + iσ^y}{2},
    \quad
    σ^- = \frac{σ^x - iσ^y}{2}.
\end{align*}
$$
Pauli 行列が出てきたことから分かるように、$𝐿$ は2つのスピンの直積
$$
\begin{align*}
| {↑} ⟩_α ⊗ | {↑} ⟩_n,\quad
| {↑} ⟩_α ⊗ | {↓} ⟩_n,\quad
| {↓} ⟩_α ⊗ | {↑} ⟩_n,\quad
| {↓} ⟩_α ⊗ | {↓} ⟩_n
\end{align*}
$$

が張る状態空間に対する演算子とみなせます。
$↑$を 上または右に置き換え、$↓$を 下または左に置き換えると、スピンと矢印の符号を対応付けられます。

ここで、モノドロミー行列 $𝑇$ および転送行列 $τ$ を、
$$
\begin{align*}
&
(T_α)_{kl} = (L_{α,1}L_{α,2}⋯L_{α,N})_{kl} \\
&
τ_α = \mathop{\operatorname{tr}} T_α = ∑_i (L_{α,1}L_{α,2}⋯L_{α,N})_{kk}
\end{align*}
$$
と定義します。ただし、 $𝑁$ は系のサイズを表します。以降は添字の $α$ は省略します。
この定義をテンソルネットワークで書くと、

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/0239e2b8-5f55-4784-6de7-9684091bbdcf.png" style="width: 40%;" />
<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/2f493c21-0e80-a088-931a-03adcd281ff0.png" style="width: 40%;" />

となります。上下に伸びる添字は省略していますが、きちんと書くと、
$$
\begin{align*}
{T^{i_1i_2⋯i_N}_{j_1j_2⋯j_N}}|_{kl},\quad
τ^{i_1i_2⋯i_N}_{j_1j_2⋯j_N}
\end{align*}
$$
です。
上下方向に並んだ転送行列 $τ$ を全て掛け合わせてトレースをとれば、周期的境界条件の下での分配関数が得られます。
$$
\begin{align*}
Z = \mathop{\operatorname{tr}}(τ^N) = ∑_{i_1,…,i_N} (τ^N)^{i_1⋯i_N}_{i_1⋯i_N}
\end{align*}
$$
したがって分配関数を求めるためには、$τ$ の固有値が分かればよいです。

# Yang-Baxter 方程式
次に、Yang-Baxter 方程式を導入します。具体的には以下の図で表されます。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/91cd1870-c347-d406-175a-fc2bfc7e97c8.png" style="width: 40%;" />

3つの頂点は別々の Boltzmann 重率をもつ6頂点模型の頂点です。
矢印は符号の基準を与えるものです。矢印と同じ向きを正符号とします。
同じことを数式で書くと、
$$
\begin{align*}
R(L_• ⊗ L_∘) = (L_∘⊗L_•)R
\end{align*}
$$
となります。ただし、$𝑅$ はR行列と呼び、成分は $𝐿$ と同じものです。繋がり方が異なっているので別の記号で区別しています。
まずこの方程式が成り立つと何が嬉しいのかを説明します。モノドロミー行列の積に、左からR行列を掛けてみます。すると、Yang-Baxter 方程式を繰り返し使うことができます。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/2a270c1c-0500-f4ad-21ca-03d228dd2a98.png" style="width: 70%;" />

左に掛けたR行列は右にすり抜けて、同時にモノドロミー行列の積の順序が入れ替わります。
これを式で書くと、

$$
\begin{align*}
R(T_• ⊗ T_∘) = (T_∘⊗T_•)R
\end{align*}
$$

です。さらに、両辺に $𝑅$ の逆行列を掛けてトレースをとることで、

$$
\begin{align*}
[τ_•, τ_∘] = 0
\end{align*}
$$

が得られます。つまり2つの転送行列は同じ固有ベクトルを共有します。

## Yang-Baxter 方程式を書き下す
Yang-Baxter 方程式を以下のように変形しておきます。
右辺を回転し、全ての矢印の向きを反転しています。
矢印の向きの反転は全て同時に行う限りはBoltzmann重率を変えません。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/8ab91d97-a408-7829-84de-87b6cd264b0c.png" style="width: 40%;" />

さらに矢印の向きを1つ反転して、

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/bbfa0038-0bf0-5ca3-45ab-91b33fdddec9.png" style="width: 40%;" />

と書きます。この変形は2つの頂点 (無印と白丸) で $a ↔ b$ という変換をしたことを意味しています。後で $a ↔ b$ という変換をもう一度行って、元に戻せば大丈夫です。

Yang-Baxter 方程式は 6つの添字をもつので、 $2⁶ = 64$ 個の方程式の集まりですが、実質的な方程式の数は3つだけです。
- Ice ruleのために、6つの添字の中で流入する矢印の数と流出する矢印の数は等しくなるはずです。したがって、両辺がゼロでないのは ${}_6C_3 = 20$ 通りだけです。
- さらに矢印の反転に関する対称性から、 10通りだけ考えれば良いです。
- 10通りのうちの4通りでは、Yang-Baxter 方程式の左辺と右辺が同じものになり、恒等式を与えます。これは、以下の場合です。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/ba377c70-1ddd-f3d4-7e0e-cd5e41886096.png" style="width: 70%;" />

- 残りの6通りから、6個の方程式が得られます。しかし、左辺と右辺を入れ替えた方程式がペアになって出てくるので、実質的な方程式の数は3個となります。

3個の方程式のうちの1つは、以下のように表されます。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/df9d6137-53cd-d04b-90b0-4f34e1194f85.png" style="width: 70%;" />

これを式で書くと、
$$
\begin{align*}
cb_∘ b_• = ca_∘a_• + ac_∘c_•
\end{align*}
$$
となります。残りの2つの式は添字を巡回させたものであり、
$$
\begin{align*}
    bc_∘b_• = ac_∘a_• + ca_∘c_•\\
    bb_∘c_• = aa_∘c_• + cc_∘a_•
\end{align*}
$$
となります。以上の3つの式が、非自明な解をもつためには、
$$
\begin{align*}
&
\det \begin{pmatrix}
c_∘c_• & 0 & a_∘ a_• - b_∘ b_• \\
c_∘a_• & -c_∘ b_• & a_∘ c_• \\
a_∘c_• & -b_∘ c_• & c_∘ a_• \\
\end{pmatrix}  \\
&
= c_∘c_•(-a_•b_•c_∘^2+a_∘b_∘c_•^2)+(a_∘a_•-b_∘b_•)(-c_∘c_•a_•b_∘+c_∘c_•a_∘b_•)  \\
&
= c_∘c_•(-a_•b_•c_∘^2+a_∘b_∘c_•^2+(a_∘a_•-b_∘b_•)(-a_•b_∘+a_∘b_•))  \\
&
= c_∘c_•(a_•b_•(a_∘^2+b_∘^2-c_∘^2)-a_∘b_∘(a_•^2+b_•^2-c_•^2)) = 0
\end{align*}
$$

が成り立っていなければなりません。ここから、
$$
\begin{align*}
\frac{a_∘^2+b_∘^2-c_∘^2}{2a_∘b_∘} - \frac{a_•^2+b_•^2-c_•^2}{2a_•b_•} ≕ Δ_∘ - Δ_• = 0.
\end{align*}
$$
が分かり、同様の議論を繰り返すと、
$$
\begin{align*}
Δ = Δ_∘ = Δ_•
\end{align*}
$$
となります。したがって、 $\Delta$ が共通であることが Yang-Baxter 方程式を満たすための必要条件となります。

## スペクトルパラメーター
Boltzmann 重率 $a, b, c$ の自由度について改めて考えます。まず、 $a, b, c$ を一様に定数倍しても、分配関数が定数倍されるだけなので、物理的には同じ模型が得られます。したがって、自由度は1減ります。
さらに、これまでの議論から $\Delta$ を固定すると、 $a, b, c$ に残された自由度は1つだけです。
したがって、 $a, b, c$ を $\lambda$ によって以下のようにパラメーター表示することします (これは非常に上手いパラメーター表示であることが後で分かります)。
$$
\begin{align*}
    \begin{cases}
        a = \sin(λ+2η)
        \\
        b = \sin λ
        \\
        c = \sin(2η)
    \end{cases}
\end{align*}
$$
ただし、 $\eta$ は固定されているものとします。なぜならば、
$$
\begin{align*}
 Δ = \frac{a²+b²-c²}{2ab} = \cos(2η)
\end{align*}
$$
が成り立つからです。[^2]
[^2]: $|Δ| > 1$ の場合はここで導入したパラメーターは使えませんが、その場合別のパラメーター表示を用います (ここでは紹介を省きます) 。

この式は $a, b, c$ を三角形の3辺だと思って正弦定理および余弦定理を使えばわかります。 

## Yang-Baxter 方程式の解
無印と白丸の頂点で $a ↔ b$ としなければならないことに注意し、また c が各頂点で共通することに注意すると、Yang-Baxter 方程式から以下の式が成り立ちます。
$$
\begin{align*}
a_∘ b_• - b_∘a_• = ca
\end{align*}
$$
パラメーター表示を代入すると、
$$
\begin{align*}
\sin(λ_∘+2η)\sin(λ_•) - \sin(λ_∘)\sin(λ_•+2η)
        = c\sin λ
\end{align*}
$$
となります。左辺は $Δ = \cos(2η), c = \sin(2η)$ から、
$$
\begin{align*}
        &
        (Δ\sin λ_∘+c\cos λ_∘)\sin λ_•
        - (Δ\sin λ_•+c\cos λ_•)\sin λ_∘
        \\ &
        = c \sin λ_•\cos λ_∘ - c \cos λ_• \sin λ_∘
        \\ &
        = c \sin(λ_• - λ_∘)
\end{align*}
$$
と変形できるので、
$$
\begin{align*}
λ = λ_• - λ_∘
\end{align*}
$$
が分かります。したがって、Yang-Baxter 方程式を以下のように書き直しておきます。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/71da6f02-a7d7-6885-c2d8-546ec63283d7.png" style="width: 70%;" />


# 代数的 Bethe 仮設
いよいよ、Yang-Baxter 方程式から転送行列の固有値を構成します。
モノドロミー行列の成分 $A, B, C, D$ を以下のように定義します。
$$
\begin{align*}
T(λ) = L_1(λ)⋯L_N(λ) = \begin{pmatrix}
A(λ) & B(λ) \\ C(λ) & D(λ)
\end{pmatrix}
\end{align*}
$$
成分と言いつつ、 $A, B, C, D$ は $2ᴺ×2ᴺ$ 行列であることに注意してください。
Yang-Baxter 方程式から、モノドロミー行列について、
$$
\begin{align*}
R(λ-μ)(T(λ)⊗T(μ)) = (T(μ)⊗T(λ))R(λ-μ)
\end{align*}
$$
が成り立ちます。これを行列表示で表すと、16個の交換関係が得られます。
$$
\begin{align*}
        &
         \begin{pmatrix}
            a&0&0&0\\
            0&b&c&0\\
            0&c&b&0\\
            0&0&0&a
        \end{pmatrix} \begin{pmatrix}
            AA'&AB'&BA'&BB'\\
            AC'&AD'&BC'&BD'\\
            CA'&CB'&DA'&DB'\\
            CC'&CD'&DC'&DD'
        \end{pmatrix}
         \\ &
        = \begin{pmatrix}
            A'A&A'B&B'A&B'B\\
            A'C&A'D&B'C&B'D\\
            C'A&C'B&D'A&D'B\\
            C'C&C'D&D'C&D'D
        \end{pmatrix} \begin{pmatrix}
            a&0&0&0\\
            0&b&c&0\\
            0&c&b&0\\
            0&0&0&a
        \end{pmatrix}
\end{align*}
$$
ただし、引数を省略して $a = a(λ-μ), A = A(λ), A' = A(μ)$ などと表しています。
実は、この交換関係から $𝐵(λ)$ が生成演算子のような働きをもつことが示せます。
状態 $|𝑀⟩$ を真空状態 $|0⟩ ≔ |{↑}⟩⊗|{↑}⟩⊗ ⋯ ⊗|{↑}⟩$ から以下のように構成します。
$$
\begin{align*}
| M ⟩ = B(λ_1)⋯B(λ_M)| 0 ⟩
\end{align*}
$$
すると、 ${λᵢ}$ がある条件 (Bethe 仮設方程式) を満たすときに、 $|𝑀⟩$ が転送行列 $τ$ の固有状態となります。

## "0粒子"の場合
一般の場合にこのことを示すのは大変なので、まず "0粒子" の場合を議論します。
0粒子の場合は状態は真空状態 $|0⟩$ です。これが $τ$(λ) の固有状態となることを示します。
$$
\begin{align*}
L_n(λ)| {↑} ⟩_n = \begin{pmatrix}
a(λ)| {↑} ⟩_n & c(λ)| {↓} ⟩_n \\ 0 & b(λ)| {↑} ⟩_n
\end{pmatrix}
\end{align*}
$$
が上三角行列であることから、
$$
\begin{align*}
    T(λ)|0⟩ = L₁(λ)⋯L_N(λ)|0⟩ = \begin{pmatrix}
    a(λ)^N|0⟩ & * \\ 0 & b(λ)^N|0⟩
    \end{pmatrix}
\end{align*}
$$
となります。したがって
$$
\begin{align*}
α(λ) ≔ a(λ)^N, \quad   δ(λ) ≔ b(λ)^N
\end{align*}
$$
とおくと、
$$
\begin{align*}
 τ(λ)|0⟩ = (A(λ)+D(λ))|0⟩ = (α(λ) + δ(λ))|0⟩
\end{align*}
$$
となります。よって $|0⟩$ が $τ(λ)$ の固有状態となることがわかりました。

## "1粒子"の場合
次に "1粒子" の場合を議論します。$|0⟩$ に $𝐵$ を一回掛けた状態が固有状態となるかを確かめるためには、
$$
\begin{align*}
τ(λ)B(λ_1)| 0 ⟩ = [A(λ)+D(λ)]B(λ_1)| 0 ⟩ \overset{?}{∝} B(λ_1)| 0 ⟩
\end{align*}
$$
となるかを見てやればよいです。ここで、先程の16個の交換関係のうち、1行目4列目、1行目3列目、2行目4列目に注目すると、
$$
\begin{gather*}
    BB' = B'B
    \\
    aBA' = cA'B + bB'A
    \\
    bBD' + cDB' = aB'D
\end{gather*}
$$
が成り立ちます。整理すると、
$$
\begin{align*}
    &
    [B(λ),B(μ)] = 0
    \\ &
    A(λ)B(μ)
    = \frac{a(μ-λ)}{c(μ-λ)}B(μ)A(λ)
    - \frac{b(μ-λ)}{c(μ-λ)}B(λ)A(μ)
    \\ &
    D(λ)B(μ)
    = \frac{a(λ-μ)}{c(λ-μ)}B(μ)D(λ)
    - \frac{b(λ-μ)}{c(λ-μ)}B(λ)D(μ)
\end{align*}
$$
です。ここから、
$$
\begin{align*}
    &
    A(λ)B(λ_1)| 0 ⟩
    = \frac{a(λ_1-λ)}{c(λ_1-λ)}B(λ_1)α(λ)| 0 ⟩
    - \frac{b(λ_1-λ)}{c(λ_1-λ)}B(λ_1)α(λ)| 0 ⟩
    \\ &
    D(λ)B(λ_1)| 0 ⟩
    = \frac{a(λ-λ_1)}{c(λ-λ_1)}B(λ_1)δ(λ)| 0 ⟩
    - \frac{b(λ-λ_1)}{c(λ-λ_1)}B(λ)δ(λ_1)| 0 ⟩
\end{align*}
$$

が分かります。これら2つの式において、第2項がもとの状態に比例しない邪魔な項なので、第2項同士が相殺することを課します。すなわち、
$$
\begin{align*}
\frac{b(λ_1-λ)}{c(λ_1-λ)}α(λ_1)
+\frac{b(λ-λ_1)}{c(λ-λ_1)}δ(λ_1) = 0
\end{align*}
$$
とします。私達が使っていたパラメーター表示では $b$ が奇関数であり、 $c$ が定数だったことを思い出すと、
$$
\begin{align*}
α(λ_1) = δ(λ_1)
\end{align*}
$$
となります。これを Bethe 仮設方程式と呼びます。

## "𝑀 粒子"の場合
最後に、一般の"𝑀 粒子"の場合について考えましょう。
$$
\begin{align*}
    [A(λ)+D(λ)]B(λ₁)⋯B(λ_M)|0⟩ ∝ B(λ₁)⋯B(λ_M)|0⟩
\end{align*}
$$
となるように、$\{λᵢ\}$ を決定します。
ここで、$A$ に関する項を交換関係によって分解していくと、以下の状態ベクトルに比例する項が現れます。
$$
\begin{align*}
    α(λ)B(λ₁)⋯B(λ_M)|0⟩, \quad
    α(λᵢ)B(λ₁)⋯\overbrace{B(λ)}^i⋯B(λ_M)|0⟩
\end{align*}
$$
1つ目のベクトルは元の状態ベクトルに比例するものであり、その他のベクトルは消えてほしいものです。また ${λᵢ}$ が任意のパラメーターであることから、これらの状態ベクトルは線形独立だと仮定できます。
$A(λ)|𝑀⟩$ に交換関係を1回使うと、
$$
\begin{align*}
    \left[\frac{a(λ₁-λ)}{c(λ₁-λ)}B(λ₁)A(λ)
    - \frac{b(λ₁-λ)}{c(λ₁-λ)}B(λ)A(λ₁)\right]B(λ₂)⋯B(λ_M)|0⟩
\end{align*}
$$
となります。これを繰り返すと $A(λ)$ が段々と右へ移動していき、最終的に $|0⟩$ に作用して $α$が出てきます。
このとき、$α(λ₁)$ が出てくるような項を考えます。
上の式の第1項からはこのような項は出てきません。なぜならば、 $A$ の左に $𝐵(λ₁)$ があり、交換関係を何度適用しても、 $λ₁$ がこの位置から動くことはないからです。
したがって、第1項を無視し、もう一度交換関係を使うと、
$$
\begin{align*}
    -\frac{b(λ₁-λ)}{c(λ₁-λ)}B(λ)\left[\frac{a(λ₂-λ₁)}{c(λ₂-λ₁)}B(λ₂)A(λ₁)
    - \frac{b(λ₂-λ₁)}{c(λ₂-λ₁)}B(λ₁)A(λ₂)\right]B(λ₃)⋯B(λ_M)|0⟩
\end{align*}
$$
となります。今度は第2項で $A$ の左に $𝐵(λ₁)$ があるので第2項は無視できます。同様の議論を繰り返すと、 $α(λ₁)$ が出てくる項が
$$
\begin{align*}
    - \frac{b(λ₁-λ)}{c(λ₁-λ)} \left\{∏_{i≠1}\frac{a(λᵢ-λ₁)}{c(λᵢ-λ₁)}\right\} α(λ₁)B(λ)B(λ₂)⋯B(λ_M)|0⟩
\end{align*}
$$
のみだと分かります。
さらに、$𝐵$ どうしの積が可換であることから、 $𝐵(λⱼ)$ を先頭にもってくることで、同様の議論が可能です。すなわち $α(λⱼ)$ が出てくる項が、
$$
\begin{align*}
    - \frac{b(λⱼ-λ)}{c(λⱼ-λ)} \left\{∏_{i≠j}\frac{a(λᵢ-λⱼ)}{c(λᵢ-λⱼ)}\right\} α(λⱼ)B(λ₁)⋯\overbrace{B(λ)}^j⋯B(λ_M)|0⟩
\end{align*}
$$
のみだと分かります。 $𝐷(λ)|𝑀⟩$ についても同様に
$$
\begin{align*}
    - \frac{b(λ-λⱼ)}{c(λ-λⱼ)}\left\{∏_{i≠j}\frac{a(λⱼ-λᵢ)}{c(λⱼ-λᵢ)}\right\} δ(λⱼ)B(λ₁)⋯\overbrace{B(λ)}^j⋯B(λ_M)|0⟩
\end{align*}
$$
という項が出てくることが分かるので、これらが相殺することを課し、Bethe 仮設方程式
$$
\begin{align*}
    α(λⱼ)\frac{b(λⱼ-λ)}{c(λⱼ-λ)} ∏_{i≠j}\frac{a(λᵢ-λⱼ)}{c(λᵢ-λⱼ)}
    + δ(λⱼ)\frac{b(λ-λⱼ)}{c(λ-λⱼ)} ∏_{i≠j}\frac{a(λⱼ-λᵢ)}{c(λⱼ-λᵢ)} = 0
\end{align*}
$$
を得ます。 $b$ が奇関数であり、 $c$ が定数であることを使って整理すると、
$$
\begin{align*}
\frac{α(λⱼ)}{δ(λⱼ)} = ∏_{i≠j}\frac{a(λⱼ-λᵢ)}{a(λᵢ-λⱼ)}
\end{align*}
$$
となります。Bethe 仮設方程式の解が得られれば、転送行列の固有値は
$$
\begin{align*}
    Λ(λ;λ₁,…,λ_M) = α(λ) ∏_{i=1}^M \frac{a(λᵢ-λ)}{c(λᵢ-λ)}
    + δ(λ) ∏_{i=1}^M \frac{a(λ-λᵢ)}{c(λ-λᵢ)}
\end{align*}
$$
によって構成されます。

# 組み紐群の表現
ちょっと話題を変えて、Yang-Baxter 方程式と組み紐群との関係について見てみます。ここでは組み紐群の定義については省略します。
Yang-Baxter 方程式を変形して

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/71196d8f-6a54-0454-3373-6560113ade89.png" style="width: 30%;" />

と書くと、組み紐関係式に見えてきます。組み紐関係式とは、以下の等式を指します。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/9a1443c0-dcac-e522-ffba-1573493425fe.png" style="width: 30%;" />

違いとしては、Yang-Baxter 方程式では頂点が連続的なパラメーターによって特徴づけられていますが、組み紐関係式ではそのようなパラメーターはありません。
しかし、パラメーターについて適切に極限をとることで、Yang-Baxter 方程式から組み紐群の表現を得ることができます。

例えば、以下のR行列を考えてみます。これが Yang-Baxter 方程式を満たすことの証明は読者への演習問題とします。
$$
\begin{align*}
    R(λ)
    = \begin{pmatrix}
        \sinh(λ+2η) & 0                & 0            & 0 \\
        0           &  e^{-λ}\sinh(2η) & \sinh λ      & 0 \\
        0           & \sinh λ          & e^λ\sinh(2η) & 0 \\
        0           & 0                & 0            & \sinh(λ+2η)
    \end{pmatrix}
\end{align*}
$$
以下のようにパラメーターの極限をとります。
$$
\begin{align*}
    R ≔ \lim_{λ→∞} 2e^{-λ-η}R(λ)
    = \begin{pmatrix}
        e^η & 0      & 0             & 0 \\
        0   & 0      & e^{-η}        & 0 \\
        0   & e^{-η} & e^{η}-e^{-3η} & 0 \\
        0   & 0      & 0             & e^η
    \end{pmatrix}
\end{align*}
$$
Yang-Baxter 方程式から、この行列は組み紐群の表現になっています。
ここから、

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/72c78b03-4fda-f5b7-0fea-bcda0bb9ed4b.png" style="width: 70%;" />

と書くことにします。ただし、列の添字は上の2つの端点の添字 $(++, +-, -+, --)$ を表しており、行の添字は下の2つの端点の添字 $(++, +-, -+, --)$ を表しています。また $A = e^η$とおきました。反対向きの交差は逆行列をとって、

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/0fd5fc7c-ef56-285d-cf57-6d3484133894.png" style="width: 70%;" />

となります。さらに、次の関係式 (カウフマンブラケットの性質)

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/33d95339-86f4-64d0-5627-c80470895571.png" style="width: 70%;" />

を課します。第1項は単位行列 $(× A)$ です。すると、

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/9b4f9408-acac-1efb-7b1f-919a3e86dd7c.png" style="width: 70%;" />

が分かります。トレースを取ると、

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/0825477d-7e0d-63c2-c982-e67f625b6747.png" style="width: 70%;" />

となります。(この時点で組み紐だけでなく絡み目も考えていることになります。)
さらにカウフマンブラケットの性質から、以下の式も示せます。

<img src="https://qiita-image-store.s3.ap-northeast-1.amazonaws.com/0/2655346/7221bb0e-0d42-7ccb-20f6-dbb75ca96f2f.png" style="width: 70%;" />

以上で導入した組み紐・絡み目の表現は、Jones 多項式と呼ばれるものです。

# 参考文献
>[出口 哲生. (2000). 1次元量子系の厳密解とベーテ仮説の数理物理. 物性研究, 74(3), 255-319](https://core.ac.uk/download/39228381.pdf)

>[Franchini, F. (2017). An Introduction to Integrable Techniques for One-Dimensional Quantum Systems.](https://link.springer.com/book/10.1007/978-3-319-48487-7)
