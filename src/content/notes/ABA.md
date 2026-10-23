---
title: "6頂点模型とYang-Baxter方程式"
lang: ja
description: "6頂点模型、Yang-Baxter方程式、代数的Bethe仮設、XXZ模型に関するノート"
---

# 導入
このノートでは主に6頂点模型について話します。これは2次元の氷をモデル化したものだと考えるとわかりやすいですが、実際の氷の性質を反映しているかは知りません。
しかし、可解格子模型の1つであり、数理的に非常に面白い性質を持っていることが知られています。

左の図では2次元の氷を図示していて、正方格子の各辺で水素原子の配置に2通りの自由度が存在します。この自由度を頂点を結ぶ矢印として書いたのが右の図です。

<figure class="aba-figure" id="aba-figure-01"><img class="aba-light" src="/notes/aba/figures/figure-01.svg" alt="正方格子上の氷の配置と、対応する矢印配位" width="594" height="245" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-01-dark.svg" alt="正方格子上の氷の配置と、対応する矢印配位" width="594" height="245" loading="lazy" /></figure>

各頂点が電気的に中性である (= 酸素原子に結合している水素原子は2個) という条件を課すと、各頂点で流入する矢印と流出する矢印の数は等しくなります。この条件を Ice rule といいます。
Ice rule を考慮すると、あり得る頂点は6通り存在します。ここからこの模型を6頂点模型と呼びます。

<figure class="aba-figure" id="aba-figure-02"><img class="aba-light" src="/notes/aba/figures/figure-02.svg" alt="Ice rule を満たす6つの頂点と重率 a、b、c" width="495" height="311" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-02-dark.svg" alt="Ice rule を満たす6つの頂点と重率 a、b、c" width="495" height="311" loading="lazy" /></figure>

矢印の反転に対する対称性を仮定すると、 Boltzmann 重率 $a, b, c$ によって模型は決定されます。[^1]
[^1]: ここで定義した Boltzmann 重率は普通 $\exp(-\beta\varepsilon)$ のように書かれますが、まとめて $a, b, c$ という一文字でおいています。

ただし、右・上向きの矢印に正符号 (オレンジ色)をつけ、左・下向きの矢印に負符号 (青色) をつけています。 

特定の矢印の配位について、格子上のあらゆる頂点の Boltzmann 重率 を掛け合わせると、その配位の重みが得られます。
また、それを全ての配位に対して足し上げることで、系の分配関数が求まります。

# テンソルネットワークの記法

6頂点模型における頂点は、上下左右の矢印の符号に対して、 $0, a, b, c$ のいずれかを返すようなテンソルだとみなせます。これを以下のグラフで表します。また、テンソルの縮約を以下のように表します。

<figure class="aba-figure" id="aba-figure-03"><img class="aba-light" src="/notes/aba/figures/figure-03.svg" alt="テンソルの脚と添字の縮約" width="682" height="177" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-03-dark.svg" alt="テンソルの脚と添字の縮約" width="682" height="177" loading="lazy" /></figure>

以上の記法はテンソルネットワークと呼ばれます。テンソルネットワークによる図示は厳密なものであり、常に数式に直すことができます。しかし数式による表現はどうしても1次元的になってしまうので、2次元的に縮約されたテンソルを表す場合、数式よりもテンソルネットワークを使って表現したほうが便利です。
例えば $10\times10$ 格子の分配関数をテンソルネットワークで表すと、以下のようになります。
点線は周期境界を表します。

<figure class="aba-figure" id="aba-figure-04"><img class="aba-light" src="/notes/aba/figures/figure-04.svg" alt="10×10 格子の分配関数。点線は周期境界を表す。" width="418" height="302" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-04-dark.svg" alt="10×10 格子の分配関数。点線は周期境界を表す。" width="418" height="302" loading="lazy" /></figure>

# モノドロミー行列と転送行列

さて、6頂点模型の頂点を表すテンソルを、具体的に成分表示しましょう。
頂点に対し、右と上の添字のあり得る組み合わせは $++, +-, -+, --$ の4つですが、これらを列の添字とみなします。同様に、左と下の添字も $++, +-, -+, --$ の4つがあり得ますが、これらを行の添字とみなします。
すると、$\alpha$行目、$𝑛$列目の頂点は、以下の $4\times4$ 行列で表示できます。
例えば2行目3列目は、左が$+$、下が$-$、 右が$-$、 上が$+$のときの Boltzmann 重率を表しています。
$$
\begin{align*}
    L_{n,\alpha}
    &
    = \begin{pmatrix}
        a&0&0&0\\
        0&b&c&0\\
        0&c&b&0\\
        0&0&0&a
    \end{pmatrix}
    = \begin{pmatrix}
        a\pi_n^+ + b\pi_n^- & c\sigma_n^- \\
        c\sigma_n^+ & b\pi_n^+ + a\pi_n^-
    \end{pmatrix}
    \\ &
    = \frac{a+b}{2}1_\alpha1_n+\frac{a-b}{2}\sigma_\alpha^z\sigma_n^z+\frac{c}{2}(\sigma_\alpha^x\sigma_n^x+\sigma_\alpha^y\sigma_n^y)
\end{align*}
$$
これをL行列といいます。なお、記号の定義は以下のとおりです。
$$
\begin{align*}
    \sigma^x = \begin{pmatrix}0&1\\1&0\end{pmatrix},\quad
    \sigma^y = \begin{pmatrix}0&-i\\i&0\end{pmatrix},\quad
    \sigma^z = \begin{pmatrix}1&0\\0&-1\end{pmatrix}.
\end{align*}
$$
$$
\begin{align*}
    \pi^+ = \frac{1+\sigma^z}{2},
    \quad
    \pi^- = \frac{1-\sigma^z}{2}.
\end{align*}
$$
$$
\begin{align*}
    \sigma^+ = \frac{\sigma^x + i\sigma^y}{2},
    \quad
    \sigma^- = \frac{\sigma^x - i\sigma^y}{2}.
\end{align*}
$$
Pauli 行列が出てきたことから分かるように、$𝐿$ は2つのスピンのテンソル積
$$
\begin{align*}
| {\uparrow} \rangle_\alpha \otimes | {\uparrow} \rangle_n,\quad
| {\uparrow} \rangle_\alpha \otimes | {\downarrow} \rangle_n,\quad
| {\downarrow} \rangle_\alpha \otimes | {\uparrow} \rangle_n,\quad
| {\downarrow} \rangle_\alpha \otimes | {\downarrow} \rangle_n
\end{align*}
$$

が張る状態空間に対する演算子とみなせます。
$\uparrow$を 上または右に置き換え、$\downarrow$を 下または左に置き換えると、スピンと矢印の符号を対応付けられます。

ここで、モノドロミー行列 $𝑇$ および転送行列 $\tau$ を、
$$
\begin{align*}
&
(T_\alpha)_{kl} = (L_{\alpha,1}L_{\alpha,2}\cdots L_{\alpha,N})_{kl} \\
&
\tau_\alpha = \mathop{\operatorname{tr}} T_\alpha = \sum_i (L_{\alpha,1}L_{\alpha,2}\cdots L_{\alpha,N})_{kk}
\end{align*}
$$
と定義します。ただし、 $𝑁$ は系のサイズを表します。以降は添字の $\alpha$ は省略します。
この定義をテンソルネットワークで書くと、

<figure class="aba-figure" id="aba-figure-05"><img class="aba-light" src="/notes/aba/figures/figure-05.svg" alt="モノドロミー行列 T のテンソルネットワーク" width="576" height="99" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-05-dark.svg" alt="モノドロミー行列 T のテンソルネットワーク" width="576" height="99" loading="lazy" /></figure>
<figure class="aba-figure" id="aba-figure-06"><img class="aba-light" src="/notes/aba/figures/figure-06.svg" alt="補助空間のトレースによる転送行列 τ" width="510" height="115" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-06-dark.svg" alt="補助空間のトレースによる転送行列 τ" width="510" height="115" loading="lazy" /></figure>

となります。上下に伸びる添字は省略していますが、きちんと書くと、
$$
\begin{align*}
{T^{i_1i_2\cdots i_N}_{j_1j_2\cdots j_N}}|_{kl},\quad
\tau^{i_1i_2\cdots i_N}_{j_1j_2\cdots j_N}
\end{align*}
$$
です。
上下方向に並んだ転送行列 $\tau$ を全て掛け合わせてトレースをとれば、周期的境界条件の下での分配関数が得られます。
$$
\begin{align*}
Z = \mathop{\operatorname{tr}}(\tau^N) = \sum_{i_1,\ldots,i_N} (\tau^N)^{i_1\cdots i_N}_{i_1\cdots i_N}
\end{align*}
$$
したがって分配関数を求めるためには、$\tau$ の固有値が分かればよいです。

# Yang-Baxter 方程式
次に、Yang-Baxter 方程式を導入します。具体的には以下の図で表されます。

<figure class="aba-figure" id="aba-figure-07"><img class="aba-light" src="/notes/aba/figures/figure-07.svg" alt="Yang–Baxter 方程式の3つの頂点の接続" width="388" height="155" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-07-dark.svg" alt="Yang–Baxter 方程式の3つの頂点の接続" width="388" height="155" loading="lazy" /></figure>

3つの頂点は別々の Boltzmann 重率をもつ6頂点模型の頂点です。
矢印は符号の基準を与えるものです。矢印と同じ向きを正符号とします。
同じことを数式で書くと、
$$
\begin{align*}
R(L_\bullet \otimes L_\circ) = (L_\circ\otimes L_\bullet)R
\end{align*}
$$
となります。ただし、$𝑅$ はR行列と呼び、成分は $𝐿$ と同じものです。繋がり方が異なっているので別の記号で区別しています。
まずこの方程式が成り立つと何が嬉しいのかを説明します。モノドロミー行列の積に、左からR行列を掛けてみます。すると、Yang-Baxter 方程式を繰り返し使うことができます。

<figure class="aba-figure" id="aba-figure-08"><img class="aba-light" src="/notes/aba/figures/figure-08.svg" alt="R 行列をモノドロミー行列の積に通す変形" width="830" height="413" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-08-dark.svg" alt="R 行列をモノドロミー行列の積に通す変形" width="830" height="413" loading="lazy" /></figure>

左に掛けたR行列は右にすり抜けて、同時にモノドロミー行列の積の順序が入れ替わります。
これを式で書くと、

$$
\begin{align*}
R(T_\bullet \otimes T_\circ) = (T_\circ\otimes T_\bullet)R
\end{align*}
$$

です。さらに、両辺に $𝑅$ の逆行列を掛けてトレースをとることで、

$$
\begin{align*}
[\tau_\bullet, \tau_\circ] = 0
\end{align*}
$$

が得られます。つまり2つの転送行列は同じ固有ベクトルを共有します。

# Yang-Baxter 方程式を書き下す
Yang-Baxter 方程式を以下のように変形しておきます。
右辺の図だけを180度回転し、その図の全ての矢印の向きを反転します。
先に仮定した矢印反転の対称性により、この同時反転で各頂点のBoltzmann重率は変わりません。

<figure class="aba-figure" id="aba-figure-09"><img class="aba-light" src="/notes/aba/figures/figure-09.svg" alt="上段が変形前、下段が変形後。左辺はそのままに、右辺の図を180度回転し、その図の全ての矢印を反転する。頂点の○・●と境界の添字を対応させて比較できる" width="644" height="555" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-09-dark.svg" alt="上段が変形前、下段が変形後。左辺はそのままに、右辺の図を180度回転し、その図の全ての矢印を反転する。頂点の○・●と境界の添字を対応させて比較できる" width="644" height="555" loading="lazy" /></figure>

次に、成分方程式の計算を簡単にするため、方程式の図を回転対称な形に整えます。この形にしておくと、1つの成分方程式から添字を巡回させるだけで残りの式も得られます。そこで、斜め右上へ向かう線の矢印を反転して、

<figure class="aba-figure" id="aba-figure-10"><img class="aba-light" src="/notes/aba/figures/figure-10.svg" alt="1つの矢印の基準方向を反転した方程式" width="485" height="237" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-10-dark.svg" alt="1つの矢印の基準方向を反転した方程式" width="485" height="237" loading="lazy" /></figure>

と書きます。この矢印の反転は、2つの頂点 (無印と○) で重率を $a \leftrightarrow b$ と読み替えることに対応します。以下ではこの読み替えた重率で成分方程式を求め、解を求める際にもう一度 $a \leftrightarrow b$ として元の重率に戻します。

Yang-Baxter 方程式は 6つの添字をもつので、 $2^6 = 64$ 個の方程式の集まりですが、実質的な方程式の数は3つだけです。
- Ice ruleのために、6つの添字の中で流入する矢印の数と流出する矢印の数は等しくなるはずです。したがって、両辺がゼロでないのは ${}_6C_3 = 20$ 通りだけです。
- さらに矢印の反転に関する対称性から、 10通りだけ考えれば良いです。
- 10通りのうちの4通りでは、Yang-Baxter 方程式の左辺と右辺が同じものになり、恒等式を与えます。これは、以下の場合です。

<figure class="aba-figure" id="aba-figure-11"><img class="aba-light" src="/notes/aba/figures/figure-11.svg" alt="恒等式を与える4つの外部矢印配位" width="579" height="165" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-11-dark.svg" alt="恒等式を与える4つの外部矢印配位" width="579" height="165" loading="lazy" /></figure>

- 残りの6通りから、6個の方程式が得られます。しかし、左辺と右辺を入れ替えた方程式がペアになって出てくるので、実質的な方程式の数は3個となります。

- さらに、この3つの方程式は図の回転によって互いに移り合うので、1つを求めれば、残りの2つは添字を巡回させて得られます。

3個の方程式のうちの1つは、以下のように表されます。

<figure class="aba-figure" id="aba-figure-12"><img class="aba-light" src="/notes/aba/figures/figure-12.svg" alt="非自明な成分方程式に寄与する3つの配位" width="561" height="161" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-12-dark.svg" alt="非自明な成分方程式に寄与する3つの配位" width="561" height="161" loading="lazy" /></figure>

これを式で書くと、
$$
\begin{align*}
cb_\circ b_\bullet = ca_\circ a_\bullet + ac_\circ c_\bullet
\end{align*}
$$
となります。残りの2つの式は添字を巡回させたものであり、
$$
\begin{align*}
    bc_\circ b_\bullet = ac_\circ a_\bullet + ca_\circ c_\bullet\\
    bb_\circ c_\bullet = aa_\circ c_\bullet + cc_\circ a_\bullet
\end{align*}
$$
となります。○と●の頂点の重率を固定すると、以上の3つの式は、無印の頂点の重率 $a,b,c$ を未知数とする斉次線形方程式です。非自明な解をもつためには、係数行列の行列式がゼロである必要があるので、
$$
\begin{align*}
&
\det \begin{pmatrix}
c_\circ c_\bullet & 0 & a_\circ a_\bullet - b_\circ b_\bullet \\
c_\circ a_\bullet & -c_\circ b_\bullet & a_\circ c_\bullet \\
a_\circ c_\bullet & -b_\circ c_\bullet & c_\circ a_\bullet \\
\end{pmatrix}  \\
&
= c_\circ c_\bullet(-a_\bullet b_\bullet c_\circ^2+a_\circ b_\circ c_\bullet^2)+(a_\circ a_\bullet-b_\circ b_\bullet)(-c_\circ c_\bullet a_\bullet b_\circ+c_\circ c_\bullet a_\circ b_\bullet)  \\
&
= c_\circ c_\bullet(-a_\bullet b_\bullet c_\circ^2+a_\circ b_\circ c_\bullet^2+(a_\circ a_\bullet-b_\circ b_\bullet)(-a_\bullet b_\circ+a_\circ b_\bullet))  \\
&
= c_\circ c_\bullet(a_\bullet b_\bullet(a_\circ^2+b_\circ^2-c_\circ^2)-a_\circ b_\circ(a_\bullet^2+b_\bullet^2-c_\bullet^2)) = 0
\end{align*}
$$

が成り立っていなければなりません。ここから、
$$
\begin{align*}
\frac{a_\circ^2+b_\circ^2-c_\circ^2}{2a_\circ b_\circ} - \frac{a_\bullet^2+b_\bullet^2-c_\bullet^2}{2a_\bullet b_\bullet} \eqqcolon \Delta_\circ - \Delta_\bullet = 0.
\end{align*}
$$
が分かり、同様の議論を繰り返すと、
$$
\begin{align*}
\Delta = \Delta_\circ = \Delta_\bullet
\end{align*}
$$
となります。したがって、 $\Delta$ が共通であることが Yang-Baxter 方程式を満たすための必要条件となります。

# スペクトルパラメーター
Boltzmann 重率 $a, b, c$ の自由度について改めて考えます。まず、 $a, b, c$ を一様に定数倍しても、分配関数が定数倍されるだけなので、物理的には同じ模型が得られます。したがって、自由度は1減ります。
さらに、これまでの議論から $\Delta$ を固定すると、 $a, b, c$ に残された自由度は1つだけです。
したがって、 $a, b, c$ を $\lambda$ によって以下のようにパラメーター表示することします (これは非常に上手いパラメーター表示であることが後で分かります)。
$$
\begin{align*}
    \begin{cases}
        a = \sin(\lambda+2\eta)
        \\
        b = \sin \lambda
        \\
        c = \sin(2\eta)
    \end{cases}
\end{align*}
$$
ただし、 $\eta$ は固定されているものとします。なぜならば、
$$
\begin{align*}
 \Delta = \frac{a^2+b^2-c^2}{2ab} = \cos(2\eta)
\end{align*}
$$
が成り立つからです。[^2]
[^2]: $|\Delta| > 1$ の場合はここで導入したパラメーターは使えませんが、その場合別のパラメーター表示を用います (ここでは紹介を省きます) 。

この式は $a, b, c$ を三角形の3辺だと思って正弦定理および余弦定理を使えばわかります。

# Yang-Baxter 方程式の解
無印と○の頂点で $a \leftrightarrow b$ としなければならないことに注意し、また $c$ が各頂点で共通することに注意すると、Yang-Baxter 方程式から以下の式が成り立ちます。
$$
\begin{align*}
a_\circ b_\bullet - b_\circ a_\bullet = ca
\end{align*}
$$
パラメーター表示を代入すると、
$$
\begin{align*}
\sin(\lambda_\circ+2\eta)\sin(\lambda_\bullet) - \sin(\lambda_\circ)\sin(\lambda_\bullet+2\eta)
        = c\sin \lambda
\end{align*}
$$
となります。左辺は $\Delta = \cos(2\eta), c = \sin(2\eta)$ から、
$$
\begin{align*}
        &
        (\Delta\sin \lambda_\circ+c\cos \lambda_\circ)\sin \lambda_\bullet
        - (\Delta\sin \lambda_\bullet+c\cos \lambda_\bullet)\sin \lambda_\circ
        \\ &
        = c \sin \lambda_\bullet\cos \lambda_\circ - c \cos \lambda_\bullet \sin \lambda_\circ
        \\ &
        = c \sin(\lambda_\bullet - \lambda_\circ)
\end{align*}
$$
と変形できるので、
$$
\begin{align*}
\lambda = \lambda_\bullet - \lambda_\circ
\end{align*}
$$
が分かります。したがって、Yang-Baxter 方程式を以下のように書き直しておきます。

<figure class="aba-figure" id="aba-figure-13"><img class="aba-light" src="/notes/aba/figures/figure-13.svg" alt="スペクトルパラメーター λ、μ、λ−μ を付けた方程式" width="429" height="161" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-13-dark.svg" alt="スペクトルパラメーター λ、μ、λ−μ を付けた方程式" width="429" height="161" loading="lazy" /></figure>


# 代数的 Bethe 仮設
いよいよ、Yang-Baxter 方程式から転送行列の固有値を構成します。
モノドロミー行列の成分 $\opA, \opB, \opC, \opD$ を以下のように定義します。
$$
\begin{align*}
T(\lambda) = L_1(\lambda)\cdots L_N(\lambda) = \begin{pmatrix}
\opA(\lambda) & \opB(\lambda) \\ \opC(\lambda) & \opD(\lambda)
\end{pmatrix}
\end{align*}
$$
この $2\times2$ 行列は補助スピンの空間での表示で、各成分 $\opA,\opB,\opC,\opD$ は量子スピン鎖に作用する $2^N\times2^N$ 行列です。転送行列は、この補助空間についてモノドロミー行列のトレースを取ったものなので、対角成分を足して、
$$
\tau(\lambda)=\operatorname{tr}T(\lambda)=\opA(\lambda)+\opD(\lambda)
$$
となります。
Yang-Baxter 方程式から、モノドロミー行列について、
$$
\begin{align*}
R(\lambda-\mu)(T(\lambda)\otimes T(\mu)) = (T(\mu)\otimes T(\lambda))R(\lambda-\mu)
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
            \opA\opA'&\opA\opB'&\opB\opA'&\opB\opB'\\
            \opA\opC'&\opA\opD'&\opB\opC'&\opB\opD'\\
            \opC\opA'&\opC\opB'&\opD\opA'&\opD\opB'\\
            \opC\opC'&\opC\opD'&\opD\opC'&\opD\opD'
        \end{pmatrix}
         \\ &
        = \begin{pmatrix}
            \opA'\opA&\opA'\opB&\opB'\opA&\opB'\opB\\
            \opA'\opC&\opA'\opD&\opB'\opC&\opB'\opD\\
            \opC'\opA&\opC'\opB&\opD'\opA&\opD'\opB\\
            \opC'\opC&\opC'\opD&\opD'\opC&\opD'\opD
        \end{pmatrix} \begin{pmatrix}
            a&0&0&0\\
            0&b&c&0\\
            0&c&b&0\\
            0&0&0&a
        \end{pmatrix}
\end{align*}
$$
ただし、引数を省略して $a = a(\lambda-\mu), \opA = \opA(\lambda), \opA' = \opA(\mu)$ などと表しています。
実は、この交換関係から $\opB(\lambda)$ が生成演算子のような働きをもつことが示せます。
状態 $|𝑀\rangle$ を真空状態 $|0\rangle \coloneqq |{\uparrow}\rangle\otimes|{\uparrow}\rangle\otimes \cdots \otimes|{\uparrow}\rangle$ から以下のように構成します。
$$
\begin{align*}
| M \rangle = \opB(\lambda_1)\cdots \opB(\lambda_M)| 0 \rangle
\end{align*}
$$
すると、 ${\lambdaᵢ}$ がある条件 (Bethe 仮設方程式) を満たすときに、 $|𝑀\rangle$ が転送行列 $\tau$ の固有状態となります。

# "0粒子"の場合
一般の場合にこのことを示すのは大変なので、まず "0粒子" の場合を議論します。
0粒子の場合は状態は真空状態 $|0\rangle$ です。これが $\tau(\lambda)$ の固有状態となることを示します。
$$
\begin{align*}
L_n(\lambda)| {\uparrow} \rangle_n = \begin{pmatrix}
a(\lambda)| {\uparrow} \rangle_n & c(\lambda)| {\downarrow} \rangle_n \\ 0 & b(\lambda)| {\uparrow} \rangle_n
\end{pmatrix}
\end{align*}
$$
が上三角行列であることから、
$$
\begin{align*}
    T(\lambda)|0\rangle = L_1(\lambda)\cdots L_N(\lambda)|0\rangle = \begin{pmatrix}
    a(\lambda)^N|0\rangle & * \\ 0 & b(\lambda)^N|0\rangle
    \end{pmatrix}
\end{align*}
$$
となります。したがって
$$
\begin{align*}
\vacAlpha(\lambda) \coloneqq a(\lambda)^N, \quad   \vacDelta(\lambda) \coloneqq b(\lambda)^N
\end{align*}
$$
とおくと、
$$
\begin{align*}
 \tau(\lambda)|0\rangle = (\opA(\lambda)+\opD(\lambda))|0\rangle = (\vacAlpha(\lambda) + \vacDelta(\lambda))|0\rangle
\end{align*}
$$
となります。よって $|0\rangle$ が $\tau(\lambda)$ の固有状態となることがわかりました。

# "1粒子"の場合
次に "1粒子" の場合を議論します。$|0\rangle$ に $\opB$ を一回掛けた状態が固有状態となるかを確かめるためには、
$$
\begin{align*}
\tau(\lambda)\opB(\lambda_1)| 0 \rangle
&= [\opA(\lambda)+\opD(\lambda)]\opB(\lambda_1)| 0 \rangle \\ &\overset{?}{\propto} \opB(\lambda_1)| 0 \rangle
\end{align*}
$$
となるかを見てやればよいです。ここで、先程の16個の交換関係のうち、1行目4列目、1行目3列目、2行目4列目に注目すると、
$$
\begin{gather*}
    \opB\opB' = \opB'\opB
    \\
    a\opB\opA' = c\opA'\opB + b\opB'\opA
    \\
    b\opB\opD' + c\opD\opB' = a\opB'\opD
\end{gather*}
$$
が成り立ちます。整理すると、
$$
\begin{align*}
    [\opB(\lambda),\opB(\mu)] &= 0
    \\[.8em]
    \opA(\lambda)\opB(\mu)
    &= \frac{a(\mu-\lambda)}{c(\mu-\lambda)}\opB(\mu)\opA(\lambda)
    \\ &\quad - \frac{b(\mu-\lambda)}{c(\mu-\lambda)}\opB(\lambda)\opA(\mu)
    \\[.8em]
    \opD(\lambda)\opB(\mu)
    &= \frac{a(\lambda-\mu)}{c(\lambda-\mu)}\opB(\mu)\opD(\lambda)
    \\ &\quad - \frac{b(\lambda-\mu)}{c(\lambda-\mu)}\opB(\lambda)\opD(\mu)
\end{align*}
$$
です。ここから、
$$
\begin{align*}
    \opA(\lambda)\opB(\lambda_1)| 0 \rangle
    &= \frac{a(\lambda_1-\lambda)}{c(\lambda_1-\lambda)}\opB(\lambda_1)\vacAlpha(\lambda)| 0 \rangle
    \\ &\quad - \frac{b(\lambda_1-\lambda)}{c(\lambda_1-\lambda)}\opB(\lambda)\vacAlpha(\lambda_1)| 0 \rangle
    \\[.8em]
    \opD(\lambda)\opB(\lambda_1)| 0 \rangle
    &= \frac{a(\lambda-\lambda_1)}{c(\lambda-\lambda_1)}\opB(\lambda_1)\vacDelta(\lambda)| 0 \rangle
    \\ &\quad - \frac{b(\lambda-\lambda_1)}{c(\lambda-\lambda_1)}\opB(\lambda)\vacDelta(\lambda_1)| 0 \rangle
\end{align*}
$$

が分かります。これら2つの式において、第2項がもとの状態に比例しない邪魔な項なので、第2項同士が相殺することを課します。すなわち、
$$
\begin{align*}
\frac{b(\lambda_1-\lambda)}{c(\lambda_1-\lambda)}\vacAlpha(\lambda_1)
+\frac{b(\lambda-\lambda_1)}{c(\lambda-\lambda_1)}\vacDelta(\lambda_1) = 0
\end{align*}
$$
とします。私達が使っていたパラメーター表示では $b$ が奇関数であり、 $c$ が定数だったことを思い出すと、
$$
\begin{align*}
\vacAlpha(\lambda_1) = \vacDelta(\lambda_1)
\end{align*}
$$
となります。これを Bethe 仮設方程式と呼びます。

# "𝑀 粒子"の場合
最後に、一般の"𝑀 粒子"の場合について考えましょう。
$$
\begin{align*}
    [\opA(\lambda)+\opD(\lambda)]\opB(\lambda_1)\cdots \opB(\lambda_M)|0\rangle
\\ &\propto \opB(\lambda_1)\cdots \opB(\lambda_M)|0\rangle
\end{align*}
$$
となるように、$\{\lambdaᵢ\}$ を決定します。
ここで、$\opA$ に関する項を交換関係によって分解していくと、以下の状態ベクトルに比例する項が現れます。
$$
\begin{align*}
    \vacAlpha(\lambda)\opB(\lambda_1)\cdots \opB(\lambda_M)|0\rangle,
\\[.5em]
    \vacAlpha(\lambdaᵢ)\opB(\lambda_1)\cdots\overbrace{\opB(\lambda)}^i\cdots \opB(\lambda_M)|0\rangle
\end{align*}
$$
1つ目のベクトルは元の状態ベクトルに比例するものであり、その他のベクトルは消えてほしいものです。また ${\lambdaᵢ}$ が任意のパラメーターであることから、これらの状態ベクトルは線形独立だと仮定できます。
$\opA(\lambda)|𝑀\rangle$ に交換関係を1回使うと、
$$
\begin{align*}
    \left[\frac{a(\lambda_1-\lambda)}{c(\lambda_1-\lambda)}\opB(\lambda_1)\opA(\lambda)
    - \frac{b(\lambda_1-\lambda)}{c(\lambda_1-\lambda)}\opB(\lambda)\opA(\lambda_1)\right]\opB(\lambda_2)\cdots \opB(\lambda_M)|0\rangle
\end{align*}
$$
となります。これを繰り返すと $\opA(\lambda)$ が段々と右へ移動していき、最終的に $|0\rangle$ に作用して $\vacAlpha$が出てきます。
このとき、$\vacAlpha(\lambda_1)$ が出てくるような項を考えます。
上の式の第1項からはこのような項は出てきません。なぜならば、 $\opA$ の左に $\opB(\lambda_1)$ があり、交換関係を何度適用しても、 $\lambda_1$ がこの位置から動くことはないからです。
したがって、第1項を無視し、もう一度交換関係を使うと、
$$
\begin{align*}
    -\frac{b(\lambda_1-\lambda)}{c(\lambda_1-\lambda)}\opB(\lambda)\left[\frac{a(\lambda_2-\lambda_1)}{c(\lambda_2-\lambda_1)}\opB(\lambda_2)\opA(\lambda_1)
    - \frac{b(\lambda_2-\lambda_1)}{c(\lambda_2-\lambda_1)}\opB(\lambda_1)\opA(\lambda_2)\right]\opB(\lambda_3)\cdots \opB(\lambda_M)|0\rangle
\end{align*}
$$
となります。今度は第2項で $\opA$ の左に $\opB(\lambda_1)$ があるので第2項は無視できます。同様の議論を繰り返すと、 $\vacAlpha(\lambda_1)$ が出てくる項が
$$
\begin{align*}
    - \frac{b(\lambda_1-\lambda)}{c(\lambda_1-\lambda)} \left\{\prod_{i\ne1}\frac{a(\lambdaᵢ-\lambda_1)}{c(\lambdaᵢ-\lambda_1)}\right\} \vacAlpha(\lambda_1)\opB(\lambda)\opB(\lambda_2)\cdots \opB(\lambda_M)|0\rangle
\end{align*}
$$
のみだと分かります。
さらに、$\opB$ どうしの積が可換であることから、 $\opB(\lambdaⱼ)$ を先頭にもってくることで、同様の議論が可能です。すなわち $\vacAlpha(\lambdaⱼ)$ が出てくる項が、
$$
\begin{align*}
    - \frac{b(\lambdaⱼ-\lambda)}{c(\lambdaⱼ-\lambda)} \left\{\prod_{i\ne j}\frac{a(\lambdaᵢ-\lambdaⱼ)}{c(\lambdaᵢ-\lambdaⱼ)}\right\} \vacAlpha(\lambdaⱼ)\opB(\lambda_1)\cdots\overbrace{\opB(\lambda)}^j\cdots \opB(\lambda_M)|0\rangle
\end{align*}
$$
のみだと分かります。 $\opD(\lambda)|𝑀\rangle$ についても同様に
$$
\begin{align*}
    - \frac{b(\lambda-\lambdaⱼ)}{c(\lambda-\lambdaⱼ)}\left\{\prod_{i\ne j}\frac{a(\lambdaⱼ-\lambdaᵢ)}{c(\lambdaⱼ-\lambdaᵢ)}\right\} \vacDelta(\lambdaⱼ)\opB(\lambda_1)\cdots\overbrace{\opB(\lambda)}^j\cdots \opB(\lambda_M)|0\rangle
\end{align*}
$$
という項が出てくることが分かるので、これらが相殺することを課し、Bethe 仮設方程式
$$
\begin{align*}
    &\vacAlpha(\lambdaⱼ)\frac{b(\lambdaⱼ-\lambda)}{c(\lambdaⱼ-\lambda)} \prod_{i\ne j}\frac{a(\lambdaᵢ-\lambdaⱼ)}{c(\lambdaᵢ-\lambdaⱼ)}
    \\ &\quad + \vacDelta(\lambdaⱼ)\frac{b(\lambda-\lambdaⱼ)}{c(\lambda-\lambdaⱼ)} \prod_{i\ne j}\frac{a(\lambdaⱼ-\lambdaᵢ)}{c(\lambdaⱼ-\lambdaᵢ)} = 0
\end{align*}
$$
を得ます。 $b$ が奇関数であり、 $c$ が定数であることを使って整理すると、
$$
\begin{align*}
\frac{\vacAlpha(\lambdaⱼ)}{\vacDelta(\lambdaⱼ)} = \prod_{i\ne j}\frac{a(\lambdaⱼ-\lambdaᵢ)}{a(\lambdaᵢ-\lambdaⱼ)}
\end{align*}
$$
となります。Bethe 仮設方程式の解が得られれば、転送行列の固有値は
$$
\begin{align*}
    \Lambda(\lambda;\lambda_1,\ldots,\lambda_M)
    &= \vacAlpha(\lambda) \prod_{i=1}^M \frac{a(\lambdaᵢ-\lambda)}{c(\lambdaᵢ-\lambda)}
    \\ &\quad + \vacDelta(\lambda) \prod_{i=1}^M \frac{a(\lambda-\lambdaᵢ)}{c(\lambda-\lambdaᵢ)}
\end{align*}
$$
によって構成されます。

# 組み紐群の表現
ちょっと話題を変えて、Yang-Baxter 方程式と組み紐群との関係について見てみます。ここでは組み紐群の定義については省略します。
Yang-Baxter 方程式を変形して

<figure class="aba-figure" id="aba-figure-14"><img class="aba-light" src="/notes/aba/figures/figure-14.svg" alt="Yang–Baxter 方程式の組み紐状の配置" width="379" height="238" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-14-dark.svg" alt="Yang–Baxter 方程式の組み紐状の配置" width="379" height="238" loading="lazy" /></figure>

と書くと、組み紐関係式に見えてきます。組み紐関係式とは、以下の等式を指します。

<figure class="aba-figure" id="aba-figure-15"><img class="aba-light" src="/notes/aba/figures/figure-15.svg" alt="3本の組み紐の組み紐関係式" width="340" height="306" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-15-dark.svg" alt="3本の組み紐の組み紐関係式" width="340" height="306" loading="lazy" /></figure>

違いとしては、Yang-Baxter 方程式では頂点が連続的なパラメーターによって特徴づけられていますが、組み紐関係式ではそのようなパラメーターはありません。
しかし、パラメーターについて適切に極限をとることで、Yang-Baxter 方程式から組み紐群の表現を得ることができます。

例えば、以下のR行列を考えてみます。これが Yang-Baxter 方程式を満たすことの証明は読者への演習問題とします。
$$
\begin{align*}
    R(\lambda)
    = \begin{pmatrix}
        \sinh(\lambda+2\eta) & 0                & 0            & 0 \\
        0           &  e^{-\lambda}\sinh(2\eta) & \sinh \lambda      & 0 \\
        0           & \sinh \lambda          & e^\lambda\sinh(2\eta) & 0 \\
        0           & 0                & 0            & \sinh(\lambda+2\eta)
    \end{pmatrix}
\end{align*}
$$
以下のようにパラメーターの極限をとります。
$$
\begin{align*}
    R \coloneqq \lim_{\lambda\to\infty} 2e^{-\lambda-\eta}R(\lambda)
    = \begin{pmatrix}
        e^\eta & 0      & 0             & 0 \\
        0   & 0      & e^{-\eta}        & 0 \\
        0   & e^{-\eta} & e^{\eta}-e^{-3\eta} & 0 \\
        0   & 0      & 0             & e^\eta
    \end{pmatrix}
\end{align*}
$$
Yang-Baxter 方程式から、この行列は組み紐群の表現になっています。
ここから、

<figure class="aba-figure" id="aba-figure-16"><img class="aba-light" src="/notes/aba/figures/figure-16.svg" alt="交差と R 行列の成分表示" width="400" height="161" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-16-dark.svg" alt="交差と R 行列の成分表示" width="400" height="161" loading="lazy" /></figure>

と書くことにします。ただし、列の添字は上の2つの端点の添字 $(++, +-, -+, --)$ を表しており、行の添字は下の2つの端点の添字 $(++, +-, -+, --)$ を表しています。また $A = e^\eta$とおきました。反対向きの交差は逆行列をとって、

<figure class="aba-figure" id="aba-figure-17"><img class="aba-light" src="/notes/aba/figures/figure-17.svg" alt="逆向きの交差と逆行列" width="433" height="161" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-17-dark.svg" alt="逆向きの交差と逆行列" width="433" height="161" loading="lazy" /></figure>

となります。さらに、次の関係式 (カウフマンブラケットの性質)

<figure class="aba-figure" id="aba-figure-18"><img class="aba-light" src="/notes/aba/figures/figure-18.svg" alt="カウフマンブラケットの交差の分解" width="357" height="105" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-18-dark.svg" alt="カウフマンブラケットの交差の分解" width="357" height="105" loading="lazy" /></figure>

を課します。右辺は、交差を解いて端点をつなぐ2通りの図の和です。第1項は単位行列の $A$ 倍なので、第2項の弧の図に対応する行列は、交差の行列 $R$ から $A$ 倍の単位行列を引き、全体を $A$ 倍すると求まります。したがって、

<figure class="aba-figure" id="aba-figure-19"><img class="aba-light" src="/notes/aba/figures/figure-19.svg" alt="平滑化の行列表示" width="621" height="161" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-19-dark.svg" alt="平滑化の行列表示" width="621" height="161" loading="lazy" /></figure>

が分かります。トレースを取ると、

<figure class="aba-figure" id="aba-figure-20"><img class="aba-light" src="/notes/aba/figures/figure-20.svg" alt="閉じたループの値" width="259" height="82" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-20-dark.svg" alt="閉じたループの値" width="259" height="82" loading="lazy" /></figure>

となります。(この時点で組み紐だけでなく絡み目も考えていることになります。)
同じ交差の分解則を使って、小さなひねりの値も求められます。ひねりに含まれる交差を分解すると、一方は「円と直線」、もう一方は「直線」になります。

<figure class="aba-figure" id="aba-figure-24"><img class="aba-light" src="/notes/aba/figures/figure-24.svg" alt="ひねりの交差を分解すると、係数Aの円と直線の項と、係数Aの逆数の直線の項になる。" width="393" height="123" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-24-dark.svg" alt="ひねりの交差を分解すると、係数Aの円と直線の項と、係数Aの逆数の直線の項になる。" width="393" height="123" loading="lazy" /></figure>

円1つの値は $-A^2-A^{-2}$ なので、直線に掛かる係数は
$$
A(-A^2-A^{-2})+A^{-1}=-A^3
$$
です。つまり、ひねりを付ける前の直線に対して、次の倍率が現れます。

<figure class="aba-figure" id="aba-figure-21"><img class="aba-light" src="/notes/aba/figures/figure-21.svg" alt="ひねりの係数と単位行列" width="282" height="123" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-21-dark.svg" alt="ひねりの係数と単位行列" width="282" height="123" loading="lazy" /></figure>

逆向きのひねりでは、分解の係数 $A$ と $A^{-1}$ が入れ替わり、倍率は $-A^{-3}$ になります。したがって、このままではひねりを付けたり取り除いたりすると値が変わります。この倍率を補正して、紐の変形で変わらない量を作ります。

閉じた紐の配置を絡み目と呼び、その図を $D$ とします。交差を分解して円の値を代入した結果を、カウフマンブラケット $\langle D\rangle$ と書きます。それぞれの閉じた紐に向きを付け、交差に次の符号を割り当てます。片方の紐の向きを逆にすると、交差の符号も反転します。図全体で交差の符号を足したものを $w(D)$ とします。

<figure class="aba-figure" id="aba-figure-25"><img class="aba-light" src="/notes/aba/figures/figure-25.svg" alt="向き付き交差の符号。両方の紐を下向きに見たとき、右上から左下へ通る紐が上なら正、その鏡像なら負。" width="205" height="156" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-25-dark.svg" alt="向き付き交差の符号。両方の紐を下向きに見たとき、右上から左下へ通る紐が上なら正、その鏡像なら負。" width="205" height="156" loading="lazy" /></figure>

上のひねりを付けると、$\langle D\rangle$ は $-A^3$ 倍になり、$w(D)$ は1増えます。そこで $(-A^3)^{-w(D)}$ を掛ければ、両者の変化が打ち消し合います。逆向きのひねりでも同じように打ち消されます。交差の組み替えに対する関係式と合わせると、ひねりを含む紐の変形に対して値が変わらなくなります。

さらに、円1つの値が1になるように $-A^2-A^{-2}$ で割り、変数を $t=A^{-4}$ と書き換えたものが Jones 多項式です。$D$ が表す絡み目を $L$ とすると、
$$
V_L(t)=\left.
(-A^3)^{-w(D)}\frac{\langle D\rangle}{-A^2-A^{-2}}
\right|_{t=A^{-4}}.
\tag{braid-jones-normalization}
$$
交差を行列で表すところから始めて、図の交差を分解し、ひねりの倍率を補正することで、同じ絡み目を表す図に共通の多項式が得られました。

# XXZ模型との対応

6頂点模型の転送行列には、1次元量子スピン系のハミルトニアンも含まれています。組み紐の節で用いた双曲線関数の行列から、先に導入した三角関数の重率 $a(\lambda)=\sin(\lambda+2\eta)$、$b(\lambda)=\sin\lambda$、$c=\sin(2\eta)$ に戻り、この対応を調べます。以下では実数 $\eta$ を固定し、$\sin(2\eta)\ne0$ とします。

各格子点にスピン $1/2$ を置き、両端をつないだ $N\ge2$ サイトの鎖を考えます。隣り合うスピンが $x,y,z$ 方向に相互作用し、$z$ 方向の結合の強さが $\Delta=\cos(2\eta)$ 倍である模型がXXZ模型です。各方向の相互作用を鎖全体で足し合わせ、ハミルトニアンを
$$
\frac14\sum_{n=1}^{N}
\left(\sigma_n^x\sigma_{n+1}^x+\sigma_n^y\sigma_{n+1}^y
+\Delta\sigma_n^z\sigma_{n+1}^z\right)
\eqqcolon H_{\mathrm{XXZ}},\qquad
\sigma_{N+1}^{\nu}=\sigma_1^{\nu}\quad(\nu=x,y,z)
\tag{xxz-hamiltonian}
$$
と定義します。これまでの $L$ 行列と転送行列 $\tau(\lambda)=\operatorname{tr}_{\alpha}[L_{\alpha,1}(\lambda)\cdots L_{\alpha,N}(\lambda)]$ を使うと、次の関係が成り立ちます。
$$
H_{\mathrm{XXZ}}
=\frac{\sin(2\eta)}2\tau(0)^{-1}\tau'(0)
-\frac{N\Delta}{4}\,I.
\tag{xxz-transfer-hamiltonian}
$$
ここでプライムは $\lambda$ による微分、$I$ は鎖全体の単位演算子です。転送行列を微分し、$\lambda=0$ での転送行列の作用を取り除くと、隣接スピンの相互作用が現れます。その仕組みを見てみましょう。

まず $\lambda=0$ では $a=c$、$b=0$ なので、$L$ 行列は2つのスピンを交換する演算子になります。交換演算子を $P_{\alpha,n}|s\rangle_{\alpha}|t\rangle_n=|t\rangle_{\alpha}|s\rangle_n$ と書くと、
$$
L_{\alpha,n}(0)
=c\begin{pmatrix}
1&0&0&0\\
0&0&1&0\\
0&1&0&0\\
0&0&0&1
\end{pmatrix}
=c P_{\alpha,n}.
\tag{xxz-regular-point}
$$
補助スピンと各サイトのスピンを順に交換して補助空間のトレースを取ると、鎖のスピン配置が1サイト左に移ります。

<figure class="aba-figure" id="aba-figure-22"><img class="aba-light" src="/notes/aba/figures/figure-22.svg" alt="周期的な4サイトの入力s1,s2,s3,s4が、補助空間を閉じた交換の列を通ってs2,s3,s4,s1へ移る。各頂点の係数cの積はcの4乗。" width="313" height="205" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-22-dark.svg" alt="周期的な4サイトの入力s1,s2,s3,s4が、補助空間を閉じた交換の列を通ってs2,s3,s4,s1へ移る。各頂点の係数cの積はcの4乗。" width="313" height="205" loading="lazy" /></figure>

$$
\tau(0)|s_1,s_2,\ldots,s_N\rangle
=c^N|s_2,s_3,\ldots,s_N,s_1\rangle.
\tag{xxz-transfer-shift}
$$

この一様な移動を除いて、$\lambda$ を変えたときの作用を取り出します。積の微分則により、$\tau'(0)$ は、1つの $L$ だけを $L'(0)$ に置き換えた項の和です。
$$
\tau'(0)=\sum_{n=1}^{N}\operatorname{tr}_{\alpha}
\left[
(c P_{\alpha,1})\cdots(c P_{\alpha,n-1})
L'_{\alpha,n}(0)
(c P_{\alpha,n+1})\cdots(c P_{\alpha,N})
\right].
\tag{xxz-differentiated-row}
$$
<figure class="aba-figure" id="aba-figure-23"><img class="aba-light" src="/notes/aba/figures/figure-23.svg" alt="サイト2だけを微分した転送行列の一項に、上から逆向きの移動を重ねる。線をほどくとサイト1,4は単位作用になり、サイト2,3にPとLプライムの積が係数1/cで残る。" width="597" height="194" loading="lazy" /><img class="aba-dark" src="/notes/aba/figures/figure-23-dark.svg" alt="サイト2だけを微分した転送行列の一項に、上から逆向きの移動を重ねる。線をほどくとサイト1,4は単位作用になり、サイト2,3にPとLプライムの積が係数1/cで残る。" width="597" height="194" loading="lazy" /></figure>

各項に左から $\tau(0)^{-1}$ を作用させると、交換だけで生じる移動が打ち消されます。微分した頂点につながる2本の線は隣接するサイト $n,n+1$ に残り、それ以外のサイトには単位演算子が作用します。
$$
\tau(0)^{-1}\tau'(0)
=\frac1c\sum_{n=1}^{N}P_{n,n+1}L'_{n,n+1}(0).
\tag{xxz-local-derivative}
$$
右辺の $L'_{n,n+1}(0)$ は、同じ $4\times4$ 行列を2つの量子スピンに作用させたものです。$n=N$ の項は周期境界をまたぐサイト $N,1$ の相互作用になります。

残った二サイトの行列を計算します。重率の微分は $a'(0)=\Delta$、$b'(0)=1$、$c'=0$ なので、
$$
P L'(0)
=\begin{pmatrix}
\Delta&0&0&0\\
0&0&1&0\\
0&1&0&0\\
0&0&0&\Delta
\end{pmatrix}
=\frac12\left[
\sigma^x\otimes\sigma^x+\sigma^y\otimes\sigma^y
+\Delta(\sigma^z\otimes\sigma^z+I_2\otimes I_2)
\right].
\tag{xxz-local-matrix}
$$
ここで $I_2$ は1つのスピンに対する単位行列です。平行なスピンには対角成分 $\Delta$ が、反平行なスピンには互いを交換する成分が作用することが読み取れます。

式 (@xxz-local-matrix) を式 (@xxz-local-derivative) に代入すると、
$$
\tau(0)^{-1}\tau'(0)
=\frac{1}{2\sin(2\eta)}\sum_{n=1}^{N}
\left[
\sigma_n^x\sigma_{n+1}^x+\sigma_n^y\sigma_{n+1}^y
+\Delta(\sigma_n^z\sigma_{n+1}^z+I)
\right]
=\frac{2}{\sin(2\eta)}H_{\mathrm{XXZ}}
+\frac{N\Delta}{2\sin(2\eta)}I.
\tag{xxz-derivative-sum}
$$
これで式 (@xxz-transfer-hamiltonian) が得られました。6頂点模型の重率を特徴づけていた $\Delta$ が、XXZ模型では $z$ 方向と $x,y$ 方向の相互作用の比として現れています。

最後に、この関係を固有値に適用します。$\lambda$ に依存しない状態 $|\Psi\rangle$ が、$0$ の近くで $\tau(\lambda)|\Psi\rangle=\Lambda(\lambda)|\Psi\rangle$ を満たせば、式 (@xxz-transfer-hamiltonian) より同じ状態がXXZ模型の固有状態になり、そのエネルギーは
$$
E=\frac{\sin(2\eta)}2\frac{\Lambda'(0)}{\Lambda(0)}-\frac{N\Delta}{4}
\tag{xxz-energy-from-transfer}
$$
です。したがって、代数的Bethe仮設で転送行列の固有状態と固有値が得られれば、量子スピン鎖のエネルギーも求まります。

# 参考文献
>[出口 哲生. (2000). 1次元量子系の厳密解とベーテ仮説の数理物理. 物性研究, 74(3), 255-319](https://core.ac.uk/download/39228381.pdf)

>[Franchini, F. (2017). An Introduction to Integrable Techniques for One-Dimensional Quantum Systems.](https://link.springer.com/book/10.1007/978-3-319-48487-7)

<style>
.aba-figure { margin: 1.8rem 0; text-align: center; }
.aba-figure img { max-width: 100%; height: auto; margin-inline: auto; vertical-align: middle; }
.aba-figure .aba-light { display: inline-block; }
.aba-figure .aba-dark { display: none; }
:root[data-theme="dark"] .aba-figure .aba-light { display: none; }
:root[data-theme="dark"] .aba-figure .aba-dark { display: inline-block; }
@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) .aba-figure .aba-light { display: none; }
  :root:not([data-theme="light"]) .aba-figure .aba-dark { display: inline-block; }
}
@media print {
  .aba-figure .aba-light { display: inline-block !important; }
  .aba-figure .aba-dark { display: none !important; }
}
</style>
