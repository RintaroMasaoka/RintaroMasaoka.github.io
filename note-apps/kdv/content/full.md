## 1. 導入

以下の非線形偏微分方程式をKorteweg--de Vries (KdV)方程式と呼ぶ。

$$
\begin{aligned}
\frac{\partial u}{\partial t} = 6u\frac{\partial u}{\partial x} - \frac{\partial^{3} u}{\partial x^{3}}
\end{aligned}\tag{1.1}
$$

 $u$は$x,t$に依存する実数の2変数関数である。 この方程式は浅水波を記述する方程式の1つとして知られているが、この記事では流体力学からKdV方程式を導くようなことはせず、とにかく与えられた方程式を色々と調べてみようという立場をとる。

KdV方程式はソリトンという興味深い解をもつことが知られている。 この解は孤立した波束であり、形が崩れることなく一定の速度で運動するようなものである。 さらに、速度の異なるソリトンを重ね合わせた [^src-1-1] 初期条件を考えることで、ソリトンを衝突させることができる。 不思議なことに、ソリトンは相互作用をした後でも形を崩さず個性を保つ。 [^src-1-2] 線形な方程式で2つの波がすり抜けるというのならわかるが、KdV方程式は非線形なのだから、ソリトンがぶつかるときの様子は単純な重ね合わせではない。しかし、少し時間を進めてやれば波はもとの綺麗なソリトンの集まりに戻っていく。

<div data-extra-visual="collision"></div>

さらに不思議なことに、初期状態をソリトンの重ね合わせにしなくとも、時間発展させれば勝手にソリトンに分かれてしまうという現象が広く見られる。 つまり、ソリトンというのはKdV方程式の解の中でありふれた構造であり、その裏に何かありそうである。

<div data-extra-visual="breakup"></div>

またKdV方程式は他の多くの非線形偏微分方程式と違って、初期値問題を厳密に解く方法が存在するという著しい特徴をもっている。 この解法は逆散乱法と呼ばれていて、その鍵は非線形な方程式の裏に隠れた線形な問題を見抜くことにある。 KdV方程式の場合、裏に隠れているのは量子力学でもお馴染みのSchrödinger方程式である。 水面波の問題を考えていたのに量子力学が現れてくる、というのはなんだか素敵ではないだろうか。

この記事の目標の1つ目は、KdV方程式が好き勝手に非線形項を加えた汚い方程式ではなく、隠れた構造を備えた方程式であると説明することである。 もっともこの記事で扱う内容は表層であり、より深い数理については[1]など専門的な文献を参照してほしい。

2つ目の目標は、逆散乱法と呼ばれる解法を用いて具体的にKdV方程式のソリトン解を求めることである。 これは技術的な話だが、具体的な解を全く求めないというのも気持ち悪いので、一応載せている。

最後におまけとして、KdV方程式が無限個の保存量をもつことを擬微分演算子を用いて示している。 このような扱いはより一般的な佐藤理論につながっている。興味のある人は[1]などを参照してほしい。

[^src-1-1]: 厳密なソリトン解を構成するためには、もちろん線形な重ね合わせではいけない。

[^src-1-2]: KdV方程式の2-ソリトン解を以下のリンクに置いた。遊んでみると面白いかもしれない。<https://www.desmos.com/calculator/33f1oysw7e> ただし、見やすさのために$-u(x,t)$をプロットしている。

## 2. KdV方程式のソリトン解

### 2.1. 1-ソリトン解

まず単純な形で表せる1-ソリトン解を見ておこう。 解として、進行波$u(t,x) = u(x-ct)$を仮定する。 この形を(1.1)に代入して整理すると、以下の常微分方程式を得る。

$$
\begin{aligned}
u''' = 6uu' + cu'
\end{aligned}\tag{2.1}
$$

 これを積分すると、

$$
\begin{aligned}
u'' = 3u^2 + cu + \frac{b}{2}
\end{aligned}\tag{2.2}
$$

 となる。$b$は積分定数である。 さらに$2u'$を掛けて積分すると、

$$
\begin{aligned}
u'^2 = 2u^3 + cu^2 + bu + a
\end{aligned}\tag{2.3}
$$

 となる。 [^src-2-1] $a$は積分定数である。

$u$が$|x| → ∞$で十分速く$0$に収束すると仮定すると、(2.2)、(2.3)から$b = 0,~ a = 0$となる。したがって、$u(x)$の満たす方程式は、

$$
\begin{aligned}
u'^2 = 2u^3 + cu^2
\end{aligned}\tag{2.4}
$$

 となる。この方程式には以下の1-ソリトン解が存在することが簡単に確認できる。 [^src-2-2]

$$
\begin{aligned}
u(x) = -\frac{c}{2}\operatorname{sech}^2\left(\frac{\sqrt{c}\,}{2}x\right)
\end{aligned}\tag{2.8}
$$

 ただし、$\operatorname{sech}^2 x = (\cosh x)^{-2}$である。 1-ソリトン解の高さは速度$c$に比例する。また幅は$1/\sqrt{c}\,$に比例する。

[^src-2-1]: (2.3)は、Weierstrassの楕円関数が満たす微分方程式と同じである。

[^src-2-2]: $u(x)$を微分すると、

    $$
    \begin{aligned}
    u'(x) = -c \operatorname{sech}^{3}\left(\frac{\sqrt{c}\,}{2}x\right) \cdot \frac{\sqrt{c}\,}{2}\sinh(\frac{\sqrt{c}\,}{2}x).
    \end{aligned}\tag{2.5}
    $$

     したがって、

    $$
    \begin{aligned}
    u'(x)^2
                &
                = \frac{c^3}{4} \operatorname{sech}^{6}\left(\frac{\sqrt{c}\,}{2}x\right)
                \left(\cosh^2\left(\frac{\sqrt{c}\,}{2}x\right) - 1\right)
    \end{aligned}\tag{2.6}
    $$

    $$
    \begin{aligned}
    &
                = 2u^3 + cu^2
    \end{aligned}\tag{2.7}
    $$

     となり、(2.4)が成り立つことが分かる。

<div data-extra-visual="traveling"></div>

### 2.2. Lax表示

KdV方程式を解くにあたって、まず、天下りにうまい変換を与えることにする。

以下のような2つの演算子を定義する。

$$
\begin{aligned}
L(t) = -∂^2 + u,\quad
    B(t) = -4∂^3 + 6u∂ + 3u_x
\end{aligned}\tag{2.9}
$$

 表記について注意をすると、$∂$は$x$に関する偏微分を表す演算子とする。 また$u$と書いた場合、$u(t,x)$を左から掛ける演算子を表すことにする。$u_x$などに関しても同様である。

$L(t),B(t)$をLax対と呼ぶ。 また$L(t)$はLax演算子と呼ばれ、今の場合1次元の量子力学のHaniltonianと同じ形をしている。 $L(t), B(t)$によって、KdV方程式(1.1)は

$$
\begin{aligned}
\frac{\mathrm{d} L}{\mathrm{d} t} = [B(t), L(t)]
\end{aligned}\tag{2.10}
$$

 と書き換えられる。これをLax方程式と呼ぶ。また与えられた方程式を(2.10)のように表すことをLax表示という。 Lax表示はKdV方程式に特有のものではなく、多くの可積分系に対するLax表示が知られている。

KdV方程式とLax方程式(2.10)が同値であることを証明しよう。 (2.10)の左辺は

$$
\begin{aligned}
\frac{\mathrm{d} L}{\mathrm{d} t} = u_t
\end{aligned}
$$

 となる。つぎに右辺を計算すると、

$$
\begin{aligned}
[B(t), L(t)]
    &
    = [-4∂^3 + 6u∂ + 3u_x, -∂^2 + u]
\end{aligned}
$$

$$
\begin{aligned}
&
    = -4(u_{xxx} + \cancel{3u_{xx}∂} + \bcancel{3u_x∂^2})+ 6uu_x
\end{aligned}
$$

$$
\begin{aligned}
&\quad
    + 6(\cancel{u_{xx}∂} +\bcancel{ 2u_x∂^2})
\end{aligned}
$$

$$
\begin{aligned}
&\quad
    + 3(u_{xxx} + \cancel{2u_{xx}∂})
\end{aligned}
$$

$$
\begin{aligned}
&
    = 6uu_x - u_{xxx}
\end{aligned}
$$

 となる。両辺を等号で結ぶことでKdV方程式を得る。Lax方程式は演算子の等式であったが、両辺が微分演算子$∂$を含まないために、$u$に対する偏微分方程式とみなせる。

Lax方程式(2.10)では、$B(t)$は時間発展の生成子となっている。するとLax方程式は Hamiltonian $L(t)$の$B(t)$による時間発展を考えていることになる。 ここで、$L(0)$を対角化して

$$
\begin{aligned}
L(0)ψ(x, 0) = λ ψ(x, 0)
\end{aligned}\tag{2.11}
$$

 と書く。$ψ(x, 0)$は$L(0)$の固有値$λ$の固有関数である。これを時間発展させてみよう。 $ψ(x, t)$の時間発展を記述する方程式として、

$$
\begin{aligned}
ψ(x, t) = U(t)ψ(x, 0),\quad
    \frac{\mathrm{d} U(t)}{\mathrm{d} t} = B(t)U(t),\quad
    U(0) = 1
\end{aligned}\tag{2.12}
$$

 を課す。 すると、$ψ(x, t)$は$L(t)$の固有関数であることが示せる。

(2.11)の両辺に左から$U(t)$を掛けると、

$$
\begin{aligned}
U(t)L(0)U(t)^{-1}ψ(x,t) = λ ψ(x,t).
\end{aligned}\tag{2.13}
$$

 となる。ここで、$U(t)L(0)U(t)^{-1}$を時間微分する。 $U(t)U(t)^{-1} = 1$を時間微分すると

$$
\begin{aligned}
\frac{\mathrm{d}}{\mathrm{d} t}U(t)^{-1} = - U(t)^{-1}B(t)
\end{aligned}\tag{2.14}
$$

 が分かるので、

$$
\begin{aligned}
\frac{\mathrm{d}}{\mathrm{d} t}\left(U(t)L(0)U(t)^{-1}\right) = [B(t), U(t)L(t)U(t)^{-1}]
\end{aligned}\tag{2.15}
$$

 となる。これはLax方程式なので、初期条件$U(0)L(0)U(0)^{-1} = L(0)$から、

$$
\begin{aligned}
U(t)L(0)U(t)^{-1} = L(t)
\end{aligned}\tag{2.16}
$$

 となる。この両辺を$ψ(x,t)$に作用させて、

$$
\begin{aligned}
L(t)ψ(x, t) = λ ψ(x, t)
\end{aligned}\tag{2.17}
$$

 となる。 すなわち、$B(t)$によって時間発展する波動関数$ψ(x, t)$は、任意の時刻で$L(t)$の固有関数である。 さらに、$ψ(x,t)$に対する$L(t)$の固有値は常に$λ$で時間に依存しない。 [^src-3-1]

[^src-3-1]: 逆に$L(t)$の固有値が時間変化しない条件としてLax方程式を導ける。

<div data-extra-visual="isospectral"></div>

### 2.3. 逆散乱法

Lax方程式が$L(t) = -∂^2 + u$の等スペクトル条件を意味することを見た。これを利用して、KdV方程式を量子力学における散乱の逆問題に置き換えることができる。この解法を逆散乱法と呼ぶ。

逆散乱法では、まず散乱データと呼ばれる量を求める。これはポテンシャル$u(x, t)$に対するスペクトルと、束縛解・散乱解の遠方での漸近的な振る舞いをまとめたものである。 実は$t = 0$での散乱データが分かれば、任意の$t$での散乱データは簡単に分かってしまう。スペクトルに関しては、これが時間変化しないことから明らかだろう。

散乱データからポテンシャル$u(x, t)$を復元するのは散乱の逆問題と呼ばれ、Gel'fand-Levitan-Marchenko方程式という積分方程式によって解かれる。求まった$u(x, t)$がKdV方程式の解となる。

### 2.4. 散乱データ

Schrödinger方程式$(-∂^2 + u(x, t))ψ(x, t) = λ ψ(x, t)$ に対し、束縛状態の固有値を$λ = -κ_n^2 ~ (n=1,…,N)$とする。

遠方での解の振る舞いは、

$$
\begin{aligned}
ψ(x, t) = \begin{cases}
        c_n(t) e^{-κ_n x} & (x → +∞),
        \\
        \tilde{c}_n(t) e^{κ_n x} & (x → -∞)
    \end{cases}
\end{aligned}\tag{2.18}
$$

 となる。また、散乱状態の固有値を$λ = k^2$とおく。散乱状態の遠方での振る舞いは、

$$
\begin{aligned}
ψ(x, t) = \begin{cases}
        e^{-ikx} + b(k, t)e^{ikx} & (x → +∞),
        \\
        a(k, t)e^{-ikx} & (x → -∞).
    \end{cases}
\end{aligned}\tag{2.19}
$$

 となる。散乱状態では独立な解がもう一つあるが、どちらか一方の情報だけで十分である。$κ_n, c_n(t), a(k,t), b(k,t)$からなる値の集合を散乱データと呼ぶ。

波動関数は$B(t) = -4∂^3 + 6u∂ + 3u_x$によって生成される複雑な時間発展をするが、$x → ±∞$では$B(t) ≈ -4∂^3$と近似できる。したがって、

$$
\begin{aligned}
ψ(x, t) = \begin{cases}
        e^{4κ_n^3 t} c_n(0) e^{-κ_n x} & (x → +∞),
        \\
        e^{-4κ_n^3 t}\tilde{c}_n(0) e^{κ_n x} & (x → -∞)
    \end{cases}
\end{aligned}\tag{2.20}
$$

 と書ける。すなわち$c_n(t) = e^{4κ_n^3t}c_n(0)$である。同様に、

$$
\begin{aligned}
ψ(x, t) = \begin{cases}
        e^{-4ik^3t}e^{-ikx} + e^{4ik^3t}b(k, 0)e^{ikx}
        & (x → +∞),
        \\
        e^{-4ik^3t}a(k, 0)e^{-ikx}
        & (x → -∞)
    \end{cases}
\end{aligned}\tag{2.21}
$$

 となる。位相を再定義すると、$a(k, t) = a(k, 0),~ b(k, t) = e^{8ik^3t}b(k, 0)$となる。以上の結果をまとめると、

$$
\begin{aligned}
c_n(t) = e^{4κ_n^3t}c_n(0),
    \quad
    a(k,t) = a(k,0),
    \quad
    b(k,t) = e^{8ik^3t}b(k,0).
\end{aligned}\tag{2.22}
$$


### 2.5. ソリトン

任意の時刻$t$での散乱データが求まったので、逆散乱問題を解けば$u(t,x)$が求まる。 ここで具体的な計算をする前に、まず目標である$N$-ソリトン解について感覚的な説明をしておく。

束縛状態の時間発展は

$$
\begin{aligned}
ψ_n(x, t) = \begin{cases}
        c_n(0) e^{-κ_n (x-4κ_n^2 t)} & (x → +∞),
        \\
       \tilde{c}_n(0) e^{κ_n (x-4κ_n^2t)} & (x → -∞)
    \end{cases}
\end{aligned}\tag{2.23}
$$

 と表せる。したがって、$ψ_n(x, t)$は$x→±∞$では速度$4κ_n^2$をもつ。 $|x|$が大きくない領域でも、$ψ_n(x,t)$はある程度この速度にしたがって移動するだろう。 さもなければ時間を進めた時に規格化条件$⟨ψ_n|ψ_n⟩ = 1$を保つことができない。

複数の束縛状態がある場合、別々の速度で移動する$ψ_n(x,t)$は、依然として全てポテンシャル$u(t,x)$に対する固有状態でなければならない。 このため$u(x, t)$は全ての束縛状態の移動に追従しなければならず、結果的に複数のピークに分裂する。このピークがソリトンである。

![3-ソリトン解が分裂する様子](/notes/KdV/images/soliton_split.png)

3-ソリトン解が分裂する様子。

以上の説明では反射係数$b(k, t)$の時間発展については触れなかった。実は$N$-ソリトン解は$b(k, t) = 0$となるような無反射ポテンシャルに対して得られる解である。反射係数の影響は、束縛状態を持たないポテンシャルのさざなみとして表れる。

## 3. 散乱の逆問題

<div data-chapter-slot="glm"></div>

### 3.4. 無反射ポテンシャルに対するGLM方程式の解

ポテンシャル$u(x, t)$として、反射係数$b(k) = 0$であるような無反射ポテンシャルを考える。ポテンシャルがKdV方程式に従うならば、$b(k) = 0$が保たれることに注意。このとき、

$$
\begin{aligned}
F(x) = ∑_{n=1}^N c_n(t)^2 e^{-κ_n x}
\end{aligned}\tag{3.60}
$$

 となる。ただし(2.22)から$c_n(t) = e^{4κ_n^3 t}c_n(0)$である。GLM方程式は、

$$
\begin{aligned}
K(x, y) + ∑_n c_n^2 e^{-κ_n(x+y)} + ∑_n c_n^2 e^{-κ_n y}∫_{x}^∞ \,\mathrm{d}z K(x,z) e^{-κ_n z} = 0.
\end{aligned}\tag{3.61}
$$

 ここで、$K(x,y)$の$y$依存性が$e^{-κ_n y}$の形で入っていることに注目して、

$$
\begin{aligned}
K(x, y) = -∑_n c_n ψ_n(x)e^{-κ_n y}
\end{aligned}\tag{3.62}
$$

 とおく。$ψ_n(x)$は展開係数であるが、あとで規格化されたエネルギー固有関数であることが分かる。 (3.61)に(3.62)を代入し、$c_ne^{-κ_n y}$についての係数を取り出すと、

$$
\begin{aligned}
ψ_m(x)
    &
    = c_m e^{-κ_m x} - ∑_n ψ_n(x) c_m c_n∫_{x}^{∞}e^{-(κ_m + κ_n)z}\,\mathrm{d}z
\end{aligned}\tag{3.63}
$$

$$
\begin{aligned}
&
    = c_me^{-κ_m x} - ∑_n ψ_n(x) c_m c_n \frac{e^{-(κ_m + κ_n)x}}{κ_n + κ_m}.
\end{aligned}\tag{3.64}
$$

 となる。 したがって、

$$
\begin{aligned}
I_{mn} = δ_{mn},
    \quad
    C_{mn} = c_n c_m \frac{e^{-(κ_n + κ_m)x}}{κ_n + κ_m},
    \quad
    e_m =c_m e^{-κ_m x}
\end{aligned}\tag{3.65}
$$

 とおけば、

$$
\begin{aligned}
(I + C)𝝍 = 𝒆
\end{aligned}\tag{3.66}
$$

 と書ける。

$$
\begin{aligned}
I + C = I + ∫_x^∞ 𝒆(y)𝒆^{\mathrm{T}}(y) \,\mathrm{d}y
\end{aligned}\tag{3.67}
$$

 より$I+C$は正定値なので、(3.66)は一意な解をもつ。 $I+C$の行列式を$τ$と書けば、

$$
\begin{aligned}
τ ≔ \det(I + C)
    = ∑_m \left(
        δ_{mn} + c_m c_n
                \frac{e^{-(κ_m + κ_n)x}}{κ_m + κ_n}
    \right)R_{mn}
\end{aligned}\tag{3.68}
$$

 である。ただし$R_{mn}$は$I+C$の余因子行列の$mn$成分である。Cramerの公式から、

$$
\begin{aligned}
ψ_n(x)
    = ∑_m ((I+C)^{-1})_{nm}e_m
    = τ^{-1}∑_m R_{mn} c_m e^{-κ_m x}
\end{aligned}\tag{3.69}
$$

 が成り立つ。 また$\frac{\mathrm{d} τ}{\mathrm{d} x}$は、

$$
\begin{aligned}
\frac{\mathrm{d}}{\mathrm{d} x}τ &= -∑_n ∑_m c_m c_n e^{-(κ_m + κ_n)x} R_{mn}
\end{aligned}\tag{3.70}
$$

 である。 ここから$K(x, x)$は、

$$
\begin{aligned}
K(x, x) &
    = - ∑_n c_n ψ_n(x)e^{-κ_n x}
\end{aligned}
$$

$$
\begin{aligned}
&
    = -τ^{-1}∑_n ∑_m c_n c_m e^{-(κ_n + κ_m)x}R_{mn}
\end{aligned}
$$

$$
\begin{aligned}
&
    = τ^{-1}\frac{\mathrm{d} τ}{\mathrm{d} x} = \frac{\mathrm{d}}{\mathrm{d} x}\log τ
\end{aligned}\tag{3.71}
$$

 と求まる。(3)より、$N$-ソリトン解

$$
\begin{aligned}
u(x, t) = -2\frac{\partial^2}{\partial x^{2}}\log \det\left(I + C\right)
\end{aligned}\tag{3.72}
$$

 が得られる。

### 3.5. $ψ_n(x)$が固有関数であることの証明

(3.66)の両辺に$L = -∂^2 + u$を掛けると、

$$
\begin{aligned}
&
    Lψ_m + ∑_n C_{mn}Lψ_n
\end{aligned}\tag{3.73}
$$

$$
\begin{aligned}
&\quad\quad
        + 2 ∑_n e_m e_n ψ_n' - ∑_n (κ_m + κ_n) e_m e_n ψ_n
\end{aligned}\tag{3.74}
$$

$$
\begin{aligned}
&
    = -κ_m^2 e_m + u e_m.
\end{aligned}\tag{3.75}
$$

 ただし、$C_{mn}' = -(κ_m+κ_n)C_{mn} = -e_m e_n$となることを用いた。 ここで、

$$
\begin{aligned}
u(x) = -2\frac{\mathrm{d}}{\mathrm{d} x}K(x,x) = 2∑_n e_n ψ_n' - 2∑_n κ_n e_n ψ_n
\end{aligned}\tag{3.76}
$$

 より、

$$
\begin{aligned}
&
    ∑_n (δ_{mn} + C_{mn})Lψ_n
\end{aligned}\tag{3.77}
$$

$$
\begin{aligned}
&
    = -κ_m^2 e_m + ∑_n (κ_m - κ_n)e_me_nψ_n(x)
\end{aligned}\tag{3.78}
$$

$$
\begin{aligned}
&
    =∑_n\Bigl\{ - κ_m^2(δ_{mn} + C_{mn}) ψ_n
    + (κ_m^2 - κ_n^2)C_{mn}ψ_n(x)\Bigr\}
\end{aligned}\tag{3.79}
$$

$$
\begin{aligned}
&
    = -∑_n(δ_{mn} + C_{mn})κ_n^2ψ_n(x).
\end{aligned}\tag{3.80}
$$

 したがって両辺に$I+C$の逆行列を掛けることで、

$$
\begin{aligned}
Lψ_n(x) = -κ_n^2 ψ_n(x)
\end{aligned}\tag{3.81}
$$

 を得る。

### 3.6. $u(x)$の$ψ_n(x)$による表示

$u(x)$は固有状態$ψ_n(x)$によって

$$
\begin{aligned}
u(x) = -4 ∑_n κ_n ψ_n^2
\end{aligned}\tag{3.82}
$$

 と表示できる。これを示そう。 まず $κ = \operatorname{diag}(κ_1,…,κ_N)$ とおく。

$$
\begin{aligned}
𝒆' = -κ 𝒆,
    \quad
    C' = - κ C - C κ
\end{aligned}\tag{3.83}
$$

 が成り立つ。(3.64)の両辺に左から$2 𝝍^{\mathrm{T}}κ$を掛けると、

$$
\begin{aligned}
4 𝝍^{\mathrm{T}}κ 𝝍 &
    = 4 𝝍^{\mathrm{T}}κ𝒆 - 2𝝍^{\mathrm{T}}κ C 𝝍 - 2 𝝍^{\mathrm{T}}C κ 𝝍
\end{aligned}
$$

$$
\begin{aligned}
&
    =  -4 𝝍^{\mathrm{T}}𝒆' + 2𝝍^{\mathrm{T}}C' 𝝍.
\end{aligned}
$$

 (3.64)の両辺に$-2 𝝍'^{\mathrm{T}}$を掛けると、

$$
\begin{aligned}
-2𝝍'^{\mathrm{T}}𝝍 = -2𝝍'^{\mathrm{T}}𝒆 + 2𝝍'^{\mathrm{T}}C 𝝍.
\end{aligned}\tag{3.84}
$$

 また(3.64)を微分して$𝝍^{\mathrm{T}}$を掛けると、

$$
\begin{aligned}
2𝝍^{\mathrm{T}}𝝍' = 2 𝝍^{\mathrm{T}}𝒆' - 2𝝍^{\mathrm{T}}C 𝝍' - 2𝝍^{\mathrm{T}}C'𝝍.
\end{aligned}\tag{3.85}
$$

 以上を足し合わせることで、

$$
\begin{aligned}
4 ∑_m κ_m ψ_m^2 = -2(𝝍^{\mathrm{T}}𝒆)' = -u(x)
\end{aligned}\tag{3.86}
$$

 を得る。

## 4. おまけ: 無限個の保存量の存在

### 4.1. 高次KdV方程式

KdV方程式をより高次の偏微分方程式に一般化する。KdV方程式のLax表示では、$[B(t), L(t)]$が微分演算子を含まないということが重要であった。 一般に、微分演算子$B, L$の交換関係$[B, L]$が$∂$の0次の演算子、つまり単なる関数となるとき、$B$と$L$は準可換であるという。

この節では逆に、$L = -∂^2 + u(x)$に対し準可換となるような演算子$B$を求めてみよう。 素朴で泥臭い方法をとるが、次節ではスマートな方法を紹介する。

ここまでとは定義を変えて$L ≔ ∂^2 ＋ u(x)$と定義する。 $L$と準可換な演算子の線型結合も準可換なので、準可換な演算子が張る空間の基底を求めればよい。 以下の演算子を考える。

$$
\begin{aligned}
B_m = ∑_{i=0}^m a_i(x) ∂^i
    \quad
    (m \ge 1)
\end{aligned}\tag{4.1}
$$

 $B_m$は$L$と準可換であるとする。 $∂$の最高次に注目すると、

$$
\begin{aligned}
[L, B_m] = a_m'(x)∂^{m+1} + (\text{$∂$の低次})
\end{aligned}\tag{4.2}
$$

 より$a_m'(x) = 0$であり、$a_m(x)$は定数でなければならない。したがって、$B_m$を定数倍して定義し直せば、$a_m(x) = 1$とおける。

さらに$m$が偶数の場合、$m = 2n$とおくと$\tildeB = B_m - L^n$によって$2n - 1$次以下の演算子$\tildeB$を作ることができる。 $[L,\tildeB] = [L, B_m]$より、$\tildeB$は$L$と準可換であるから、$m$は奇数だとしてよい。

以降の議論では、(4.1)の代わりに$B_m$を

$$
\begin{aligned}
B_{2n+1} = ∑_{i=0}^n (R_i(x)∂ + S_i(x))L^{n-i}
    \quad
    (R_0(x) = 1)
\end{aligned}\tag{4.3}
$$

 という表示に書き換えておく。 $[L, B_{2n+1}]$を計算すると、

$$
\begin{aligned}
[L, B_{2n+1}]
    = ∑_{i=0}^n [L, R_i∂ + S_i]L^{n-i}.
\end{aligned}\tag{4.4}
$$

 ここで、

$$
\begin{aligned}
[L, R_i∂ + S_i]
    &
    = [∂^2 + u, R_i∂ + S_i]
\end{aligned}
$$

$$
\begin{aligned}
&
    = (2R_i'∂ + R_i'')∂ + (2S_i'∂ + S_i'') - R_i u'
\end{aligned}
$$

$$
\begin{aligned}
&
    = 2R_i'L + (S_i'' - 2R_i'u - R_iu') + (R_i'' + 2S_i')∂
\end{aligned}\tag{4.5}
$$

 であるから、

$$
\begin{aligned}
[L, B_{2n+1}]
    &
    = ∑_{i=1}^{n}
    (S_{i}'' - 2R_{i}'u - R_{i}u' + 2R_{i+1}')L^{n-i}
    + ∑_{i=0}^n (R_i'' + 2S_i')∂L^{n-i}
\end{aligned}
$$

$$
\begin{aligned}
&\quad
    + 2R_0'L^{n+1} + (S_n'' - 2R_n' u - R_n u').
\end{aligned}\tag{4.6}
$$

 $B_{2n+1}$と$L$が準可換であるとき、第1項、第2項、第3項の係数は全て$0$になる。 したがって、$R_i(x),S_i(x)$に対する微分方程式

$$
\begin{aligned}
&
    R_0' = 0,
\end{aligned}\tag{4.7}
$$

$$
\begin{aligned}
&
    S_i' = -\frac{1}{2}R_i'',
\end{aligned}\tag{4.8}
$$

$$
\begin{aligned}
&
    R_{i+1}' = -\frac{1}{2}S_i'' + R_i'u + \frac{1}{2}R_iu'
\end{aligned}\tag{4.9}
$$

 を得る。 1つ目の式は$R_0(x) = 1$としているので成り立つ。 次に、2つ目の式から$S_i = -R_i'/2 + (\text{定数})$となるが、$B_{2n+1}$から$L^{n-i}$の定数倍を引いて定義し直すことで、$S_i = -R_i'/2$とおける。

3つ目の式は必ず積分できることが数学的帰納法から示せるがここでは証明しない。 $B_{2n+1}$から$B_{2(n-i)-1}$の定数倍を引いて再定義すれば、3つ目の式を積分する際の積分定数も$0$とおける。 以上より、漸化式

$$
\begin{aligned}
&
    R_0 = 1,
\end{aligned}\tag{4.10}
$$

$$
\begin{aligned}
&
    S_i = -\frac{1}{2} R_i',
\end{aligned}\tag{4.11}
$$

$$
\begin{aligned}
&
    R_{i+1} = ∫ \left(\frac{1}{4} R_i''' + R_i'u + \frac{1}{2} R_iu'\right)\,\mathrm{d}x
\end{aligned}\tag{4.12}
$$

 を得る。ただし、3つ目の式の積分定数は0とする。 具体的に$R_i$を$i=0$から順に表示すると、

$$
\begin{aligned}
R_0 &= 1,
\end{aligned}\tag{4.13}
$$

$$
\begin{aligned}
R_1 &= \frac{1}{2}u,
\end{aligned}\tag{4.14}
$$

$$
\begin{aligned}
R_2 &= \frac{1}{8}u'' + \frac{3}{8} u^2,
\end{aligned}\tag{4.15}
$$

$$
\begin{aligned}
& ~⋮
\end{aligned}
$$

 となる。

$2n+1 = 3$の場合、

$$
\begin{aligned}
B_3 &= \left(R_0∂ - \frac{1}{2} R_0'\right)L + \left(R_1∂ - \frac{1}{2}R_1'\right)
\end{aligned}
$$

$$
\begin{aligned}
&
    = ∂^3 + ∂ u + \frac{1}{2}u∂ - \frac{1}{4}u'
\end{aligned}
$$

$$
\begin{aligned}
&
    = ∂^3 + \frac{3}{2}u∂ +\frac{3}{4}u'
\end{aligned}\tag{4.16}
$$

 となり、この演算子からLax方程式を立てると、KdV方程式が得られる。 さらに、この結果は容易により高次の場合に拡張できる。高次の$B_{2n+1}$からLax方程式を立てて得られる偏微分方程式を高次KdV方程式と呼ぶ。 またこのような方法で得られる無数の偏微分方程式の一群を、KdV階層という。

### 4.2. 擬微分演算子

以上で述べたKdV方程式の一般化は、$∂$の負冪を許すような擬微分演算子を用いることでより簡潔に述べることができる。 まず微分演算子$∂$と掛け算演算子$a$に対し、に対しLeibniz則

$$
\begin{aligned}
∂^n a = ∑_{j=0}^∞ \begin{pmatrix}n \\ j\end{pmatrix}a^{(r)}∂^{n-j},
    \quad
    (n > 0)
\end{aligned}\tag{4.17}
$$

 が成り立つ。ただし、2項係数は

$$
\begin{aligned}
\begin{pmatrix}n \\ j\end{pmatrix} = \frac{n(n-1)⋯(n-j+1)}{j!}
\end{aligned}\tag{4.18}
$$

 と定義される。これを$n < 0$にも拡張する。例えば、

$$
\begin{aligned}
∂^{-1}a &= a∂^{-1} - a'∂^{-2} + a''∂^{-3} - ⋯
\end{aligned}\tag{4.19}
$$

$$
\begin{aligned}
∂^{-2}a &= a∂^{-2} -2a'∂^{-3} + 3a''∂^{-4} - ⋯
\end{aligned}\tag{4.20}
$$

 である。$∂$の負冪はあくまで形式的なものであり、演算子どうしの和や積は許されているが、関数への作用は定義されていない。 擬微分演算子は、

$$
\begin{aligned}
A = ∑_{j=-∞}^m a_j ∂^j
\end{aligned}\tag{4.21}
$$

 と定義される。擬微分演算子どうしの積は、Leibniz則と

$$
\begin{aligned}
∂^n∂^m = ∂^{n+m},\quad n,m ∈ ℤ
\end{aligned}\tag{4.22}
$$

 によって定まる。

前節では、$L = -∂^2 + u$と準可換な演算子を漸化式でコツコツ求めたが、擬微分演算子を用いると高次KdV方程式を簡潔に表示することができる。

$$
\begin{aligned}
L_\text{KP} ≔ L^{1/2}
    = ∂ -\frac{u}{2}∂^{-1}+\frac{u'}{4}∂^{-2}+⋯
\end{aligned}\tag{4.23}
$$

 として、

$$
\begin{aligned}
B_{2n+1} ≔ (L_\text{KP}^{2n+1})_{≥0}
\end{aligned}\tag{4.24}
$$

 とする。ただし$()_{≥0}$は$∂$の非負の冪のみを取り出すことを意味する。 $L_\text{KP}^{2n+1}$が$L$と可換であることから、

$$
\begin{aligned}
[L, B_{2n+1}] = -[L, (L_\text{KP}^{2n+1})_{<0}]
\end{aligned}\tag{4.25}
$$

 が成り立つ。ただし$()_{<0}$は$∂$の負の冪のみを取り出すことを意味する。 ここで、右辺の$∂$の次数を勘定すると、現れる$∂$の最高次は0次である。 一方左辺は微分演算子の交換関係なので、微分演算子である。 すなわち、両辺が等号で結ばれるためには$∂$の0次しか現れてはいけない。 したがって、$B_{2n+1}$は$L$と準可換になる。 $B_{2n+1}$の最高次は$∂^{2n+1}$であり、他の係数は$u,u',u'',…$のみで表示されているので、これは前節で求めたものと同じである。 また前節の$R_n$は

$$
\begin{aligned}
R_n = \operatorname{Res}(L_\text{KP}^{2n-1})
\end{aligned}\tag{4.26}
$$

 と書くことができる。 ここで、$\operatorname{Res}()$は擬微分演算子のうち$∂^{-1}$に比例する係数を取り出したものである。

<div data-extra-visual="operator"></div>

### 4.3. 無限個の保存量

KdV方程式に無限個の保存量が存在することを証明しよう。

$$
\begin{aligned}
\frac{\mathrm{d} R_n}{\mathrm{d} t}
    &
    = \frac{\mathrm{d}}{\mathrm{d} t}\operatorname{Res}(L_\text{KP}^{2n-1})
\end{aligned}\tag{4.27}
$$

$$
\begin{aligned}
&
    = \operatorname{Res}(\frac{\mathrm{d} L_\text{KP}^{2n-1}}{\mathrm{d} t})
\end{aligned}\tag{4.28}
$$

$$
\begin{aligned}
&
    = \operatorname{Res}[B_m,L_\text{KP}^{2n-1}]
\end{aligned}\tag{4.29}
$$

 である。 擬微分演算子の交換関係の留数は

$$
\begin{aligned}
\operatorname{Res}[a∂^m,b∂^n]
    = \begin{pmatrix}m\\m+n+1\end{pmatrix}ab^{(m+n+1)} - \begin{pmatrix}n\\m+n+1\end{pmatrix}a^{(m+n+1)}b
\end{aligned}\tag{4.30}
$$

 によって計算できる。 ここで

$$
\begin{aligned}
\begin{pmatrix}n\\m+n+1\end{pmatrix}
    = \frac{n(n-1)⋯(-m)}{m+n+1},
    \quad
    \begin{pmatrix}n\\m+n+1\end{pmatrix}
    =\frac{m(m-1)⋯(-n)}{m+n+1}
\end{aligned}\tag{4.31}
$$

 から、

$$
\begin{aligned}
\begin{pmatrix}n\\m+n+1\end{pmatrix}=(-1)^{m+n+1}\begin{pmatrix}m\\m+n+1\end{pmatrix}
\end{aligned}\tag{4.32}
$$

 が分かる。 よって

$$
\begin{aligned}
\operatorname{Res}[a∂^m,b∂^n]
    &
    = \begin{pmatrix}m\\m+n+1\end{pmatrix}
    \left(ab^{(m+n+1)}-(-1)^{m+n+1}a^{(m+n+1)}b\right)
\end{aligned}\tag{4.33}
$$

$$
\begin{aligned}
&
    = \begin{pmatrix}m\\m+n+1\end{pmatrix}\frac{\partial}{\partial x}\left(
        ∑_{k=0}^{m+n}
        (-1)^ka^{(k)}b^{(m+n-k)}
    \right)
\end{aligned}\tag{4.34}
$$

 となる。 したがって、$u$から得られる関数$J(x,t)$が存在して

$$
\begin{aligned}
\frac{\partial R_n}{\partial t}
    = \operatorname{Res}[B_3,L_\text{KP}^{2n-1}]
    = \frac{\partial}{\partial x}J(x,t)
\end{aligned}\tag{4.35}
$$

 と書ける。 $x → ±∞$で$u(x,t)$が十分速く減衰するという仮定のもとで、

$$
\begin{aligned}
∫_{-∞}^∞ R_n\,\mathrm{d}x
\end{aligned}\tag{4.36}
$$

 はKdV方程式の保存量となっている。

## 参考文献

[1] 中村佳正, 高崎金久, & 辻本諭. (2018). 可積分系の数理 (解析学百科 2). 朝倉書店.

[2] 及川正行. (2013). 第 5 章 逆散乱法. ながれ: 日本流体力学会誌, 32(1), 39-53.

[3] Miura, R. M., Gardner, C. S., & Kruskal, M. D. (1968). Korteweg-de vries equation and generalizations. II. Existence of conservation laws and constants of motion. Journal of Mathematical physics, 9(8), 1204-1209.
