## Morse理論

前章では、正のエネルギーをもつ状態が偶・奇の対になり、Witten指数には零エネルギー状態の差だけが残った。微分形式の空間では、この零エネルギー状態が多様体の形を捉え、偶奇差はEuler標数になる。関数を一つ選んで低エネルギー状態をその臨界点の近くへ集めると、大域的な形の情報を、極小・鞍点・極大という局所的な形から数えられる。[WittenのMorse理論の議論](https://doi.org/10.4310/jdg/1214437492)を、この順に見ていこう。

### フェルミオンと微分形式

以下では、境界のないコンパクトな$n$次元Riemann多様体$M$を考える。状態空間を複素数値の微分形式の$L^2$空間とし、計量による内積を使う。次数が偶数の形式を偶状態、奇数の形式を奇状態とする。したがって、$r$形式上では偶奇演算子$(-1)^F$が$(-1)^r$として働く。

1形式との外積は形式の次数を一つ増やす。この作用が、フェルミオンを一つ生成する作用に当たる。局所座標で$dx^i\wedge$を生成演算子$\psi^{\dagger i}$、ベクトル$\partial/\partial x^i$による内部積を消滅演算子$\psi_i$に対応させる。内部積$\psi_i$は、外積から$dx^i$を取り除き、その前に並ぶ1形式の数だけ符号を反転する。$dx^i$を含まない項では零になる。例えば、それぞれの演算子は

$$
\begin{aligned}
\psi^{\dagger 1}f&\longleftrightarrow f\,dx^1,\\
\psi^{\dagger 2}(f\,dx^1)&\longleftrightarrow-f\,dx^1\wedge dx^2,\\
\psi_1(f\,dx^1\wedge dx^2)&\longleftrightarrow f\,dx^2
\end{aligned}
$$

と作用する。定数の0形式がフェルミオンの真空に当たり、$r$回生成した状態が$r$形式になる。外積の反対称性と内部積の積の公式から、

$$
\{\psi^{\dagger i},\psi^{\dagger j}\}=0,
\qquad \{\psi_i,\psi_j\}=0,
\qquad \{\psi_i,\psi^{\dagger j}\}=\delta_i{}^j
\tag{morse-form-car}
$$

が成り立つ。ここで生成演算子の随伴は$\psi^i=g^{ij}\psi_j$である。座標基底での内積を計量が与えるため、随伴には添字を上げる計量が入る。

$r$次微分形式全体を$\Omega^r(M)$と書く。外微分$d$は形式の次数を一つ増やし、$d^2=0$を満たす。その随伴$d^\dagger$は次数を一つ減らす。両者からHodge Laplacianを

$$
\Delta=dd^\dagger+d^\dagger d
\tag{hodge-laplacian}
$$

と定めると、

$$
\mathcal Q=d,\qquad
\mathcal Q^\dagger=d^\dagger,\qquad
H=\frac12(dd^\dagger+d^\dagger d)=\frac12\Delta
\tag{morse-hodge-hamiltonian}
$$

は前章と同じ超対称代数を満たす。形式$\alpha$に対して

$$
2\langle\alpha,H\alpha\rangle
=\|d\alpha\|^2+\|d^\dagger\alpha\|^2
$$

なので、零エネルギー状態は$d\alpha=d^\dagger\alpha=0$を満たす調和形式になる。

### 調和形式とEuler標数

$d\alpha=0$を満たす閉形式のうち、$d\gamma$という完全形式だけ異なるものを同一視して得られる空間が、de Rhamコホモロジー$H^r_{\mathrm{dR}}(M)$である。その次元をBetti数$b_r$という。Hodge定理は、境界のないコンパクトなRiemann多様体の各de Rhamコホモロジー類に、ただ一つの調和形式を対応させる。従って、$r$形式の零エネルギー状態の数は$b_r$である。Euler標数はBetti数の交代和に等しいので、

$$
\chi(M)=\sum_{r=0}^{n}(-1)^r b_r
=\sum_{r=0}^{n}(-1)^r\dim\ker\Delta_r
\tag{euler-harmonic-forms}
$$

となる。ここで$\Delta_r$は$r$形式上の$\Delta$である。曲面ではこの交代和が、第1章の頂点・辺・面から得たEuler標数に一致する。

この偶奇差は、偶数次と奇数次を結ぶ作用素の指数でもある。偶数次の形式全体を$\Omega^{\mathrm{ev}}(M)$、奇数次を$\Omega^{\mathrm{odd}}(M)$とし、$d+d^\dagger$の偶数次から奇数次への制限を

$$
D_{\mathrm{ev}}=(d+d^\dagger)|_{\Omega^{\mathrm{ev}}}:
\Omega^{\mathrm{ev}}(M)\longrightarrow\Omega^{\mathrm{odd}}(M)
\tag{even-de-rham-operator}
$$

とする。逆向きの制限は$D_{\mathrm{ev}}^\dagger$である。$d^2=(d^\dagger)^2=0$より、二つを順に作用させると偶数次または奇数次上の$\Delta$になる。また$\|D_{\mathrm{ev}}\alpha\|^2=\langle\alpha,D_{\mathrm{ev}}^\dagger D_{\mathrm{ev}}\alpha\rangle$より、$D_{\mathrm{ev}}$と$D_{\mathrm{ev}}^\dagger D_{\mathrm{ev}}$の核は等しい。従って、

$$
\begin{aligned}
\operatorname{ind}D_{\mathrm{ev}}
&=\dim\ker D_{\mathrm{ev}}-\dim\ker D_{\mathrm{ev}}^\dagger\\
&=\sum_{r=0}^{n}(-1)^r\dim\ker\Delta_r
=\chi(M).
\end{aligned}
\tag{gauss-bonnet-index}
$$

二次元では、これが第1章の曲率積分$\int_M\operatorname{Pf}(\Omega/2\pi)$に等しい。曲がりの積分として現れた整数が、偶数次と奇数次の微分方程式の解の数の差にも現れた。

正エネルギー状態の対消去を使えば、虚時間$\tau>0$で

$$
\operatorname{Tr}\bigl((-1)^F e^{-\tau H}\bigr)
=\sum_{r=0}^{n}(-1)^r b_r=\chi(M)
\tag{morse-index-euler}
$$

とも書ける。コンパクトな多様体上ではこの熱作用素はトレース級であり、前章の数え上げを適用できる。

### 関数による外微分の変形

Euler標数を臨界点から数えるため、滑らかな実関数$h$を用いて外微分を変形する。変形の強さを$s\ge0$とし、次の演算子を導入する。

$$
d_{sh}=e^{-sh}d\,e^{sh}=d+s\,dh\wedge,
\qquad
 d_{sh}^\dagger=d^\dagger+s\,\iota_{\nabla h}.
\tag{morse-witten-deformation}
$$

この変形では、コホモロジーを保ちながら、$s$によって低エネルギー状態の分布を変えられる。相似変換の形から$d_{sh}^2=0$であり、$d_{sh}$で閉じた形式$\alpha$を$e^{sh}\alpha$に写すと$d$で閉じた形式になる。完全形式も同じ対応で移る。コンパクトな$M$上では$e^{sh}$は有限の$s$ごとに可逆なので、この変形はコホモロジーを変えない。

変形後のHamiltonianを

$$
H_s=\frac12\bigl(d_{sh}d_{sh}^\dagger+d_{sh}^\dagger d_{sh}\bigr)
\tag{morse-deformed-hamiltonian}
$$

とする。Hodge分解はこの変形した複体にも適用できるため、$H_s$の$r$形式上の厳密な核の次元は、どの有限の$s$でも$b_r$である。従って、そのWitten指数も$\chi(M)$に等しい。

曲がった空間では、形式の係数とともに、その基底も位置によって変わる。Hamiltonianを展開する微分には、両方の変化が入る。そのためにLevi-Civita共変微分$\nabla$を使う。正規直交枠とその双対枠に対する生成・消滅演算子を用いると、外微分と随伴は

$$
d=\sum_i\psi^{\dagger i}\nabla_i,
\qquad d^\dagger=-\sum_i\psi^i\nabla_i
$$

と書ける。共変微分が基底の変化を引き受けることで、生成・消滅演算子と微分の組合せが平坦な空間と同じ形になる。

共変微分の非可換性が曲率を表す。符号はベクトル上の関係$[\nabla_i,\nabla_j]v^k=R^k{}_{\ell ij}v^\ell$で定める。評価点で接続係数が零になる正規直交枠を使うと、Hodge Laplacianは

$$
\Delta=\nabla^*\nabla
-\sum_{i,j}\psi^{\dagger i}\psi^j
 [\nabla_i,\nabla_j].
\tag{morse-weitzenbock}
$$

と分かれる。これがWeitzenböck公式である。$\nabla^*\nabla$は接続を使った運動項で、残りは形式に作用する曲率項である。曲率項は微分を含まず、形式の次数を保存する。0形式では零になり、1形式ではRicci曲率の作用になる。

この共変表示で、$s$による状態の集まり方を調べよう。$H_s$を展開すると、

$$
2H_s=\Delta+s^2|dh|^2
+s\sum_{i,j}(\nabla_i\nabla_j h)
 [\psi^{\dagger i},\psi^j]
\tag{morse-deformed-laplacian}
$$

となる。$\nabla_i\nabla_jh$は関数$h$の共変Hessianであり、座標表示では$\partial_i\partial_jh-\Gamma^k{}_{ij}\partial_kh$に等しい。$|dh|$が零から離れている領域では、正の項$s^2|dh|^2$が$s$に比例するHessian項を上回る。そのため、低エネルギー状態は$s\to\infty$で$dh=0$となる臨界点の近くに集まる。

<details>
<summary>Covariant derivatives</summary>

座標が変わると形式の基底$dx^i$も変わる。その変化を含めて微分するのがLevi-Civita共変微分である。局所座標では

$$
\nabla_i=\partial_i-\Gamma^k{}_{ij}\psi^{\dagger j}\psi_k,
\qquad
\pi_i=-i\nabla_i
$$

と書ける。例えば1形式$\alpha_j dx^j$への作用は
$\nabla_i(\alpha_jdx^j)=(\partial_i\alpha_j-\Gamma^k{}_{ij}\alpha_k)dx^j$
であり、通常の共変微分と一致する。接続の下二添字の対称性と外積の反対称性により、座標表示では

$$
d=\psi^{\dagger i}\nabla_i,
\qquad d^\dagger=-g^{ij}\psi_i\nabla_j,
\qquad
 d_{sh}=\psi^{\dagger i}(\nabla_i+s\partial_i h)
$$

となる。$d^\dagger$の随伴関係を決めるのは、計量内積と体積要素である。

主線で定めた曲率の規約では、形式上の交換子は

$$
[\nabla_i,\nabla_j]
=-R^k{}_{\ell ij}\psi^{\dagger\ell}\psi_k
$$

となる。評価点で接続係数を零にして$d d^\dagger+d^\dagger d$を展開し、式 (@morse-form-car) で生成・消滅演算子の順序を入れ替えると、二階微分の和$-\sum_i\nabla_i\nabla_i$と、交換子$-\sum_{i,j}\psi^{\dagger i}\psi^j[\nabla_i,\nabla_j]$が残る。これが式 (@morse-weitzenbock) を与える。

変形した演算子を展開する際は、$d^\dagger=-\psi^i\nabla_i$と式 (@morse-form-car) を使う。$s^2$の項が$|dh|^2$に、$s$の項がHessianと$[\psi^{\dagger i},\psi^j]$の積になることで、式 (@morse-deformed-laplacian) が得られる。

</details>

### 臨界点の近くの調和振動子

ここから$h$をMorse関数、すなわち全ての臨界点でHessianが非退化な関数とする。臨界点の条件は$dh=0$であり、極大・極小に加えて鞍点も含む。ある臨界点のまわりで正規座標$y^i$を取り、Hessianを対角化すると、

$$
h(y)=h(0)+\frac12\sum_i\lambda_i(y^i)^2+O(|y|^3),
\qquad \lambda_i\ne0
$$

と書ける。臨界点では$dh=0$なので、共変Hessianも通常の二階微分に一致する。Hessianの負の固有値の個数を、この臨界点のMorse指数という。

正規座標では$\Delta$の二階微分の主要部分が$-\sum_i\partial_{y^i}^2$となり、曲率項には$s$が掛からない。従って、大きな$s$での式 (@morse-deformed-laplacian) の主要部分は、独立な振動子の和になる。$i$方向のフェルミオン占有数を$N_i=0,1$とすると、$[\psi^{\dagger i},\psi^i]=2N_i-1$なので、

$$
H_s\simeq\frac12\sum_i
\left[-\partial_{y^i}^2+s^2\lambda_i^2(y^i)^2
+s\lambda_i(2N_i-1)\right].
\tag{morse-local-oscillator}
$$

振動子の基底エネルギーは$s|\lambda_i|/2$である。$\lambda_i>0$なら$N_i=0$、$\lambda_i<0$なら$N_i=1$を選ぶことで、最後の項がこれをちょうど打ち消す。従って、Morse指数$r$の臨界点には、主要近似で一つの$r$形式の零エネルギー状態

$$
\alpha_{\mathrm{loc}}(y)\propto
\exp\!\left[-\frac{s}{2}\sum_i|\lambda_i|(y^i)^2\right]
 dy^{i_1}\wedge\cdots\wedge dy^{i_r}
\tag{morse-local-state}
$$

が対応する。$i_1,\ldots,i_r$は負の固有値の方向である。ガウス関数の幅は$s^{-1/2}$であり、この幅が小さくなるほど臨界点近傍の二次近似がよくなる。

![鞍点の二つの断面と、それぞれの方向の占有数。](/notes/SUSYQM/diagrams/morse-saddle.svg)

二次元での対応を並べると次のようになる。

| 臨界点 | Hessianの符号 | Morse指数 | 局所状態の形式部分 |
|---|---|---|---|
| 極小点 | $(+,+)$ | $0$ | $1$ |
| 鞍点 | $(+,-)$ | $1$ | $dy$ |
| 極大点 | $(-,-)$ | $2$ | $dx\wedge dy$ |

### Morse不等式とEuler標数

Morse指数$r$の臨界点の数を$m_r$と書く。コンパクト性と非退化性から臨界点は有限個である。上の局所振動子には、この$m_r$個の点それぞれに$r$形式の基底状態が一つずつある。多様体全体でも、この臨界点の個数が低エネルギー部分空間の次元を決める。

半古典的局在の結果によると、十分大きな$s$に対し、臨界点から生じる低エネルギー部分空間と、それ以外の$s$程度以上のエネルギーをもつ状態が分離し、低エネルギー部分空間の$r$形式部分の次元は$m_r$になる。局所ガウス関数から作る試行状態が低いエネルギーの状態を与え、臨界点を避けた領域での$s^2|dh|^2$の評価が、それ以外の低い状態を排除する。[Witten (1982), §2, pp. 666–668](https://www.ias.edu/sites/default/files/sns/files/supersymmetry-and-morse-theory-1982.pdf)にこのスペクトル評価による議論がある。

厳密な零エネルギー状態$b_r$個は全てこの$m_r$次元の部分空間に入るので、

$$
b_r\le m_r
\tag{morse-weak-inequality}
$$

を得る。これが弱いMorse不等式である。局所状態どうしは、離れた臨界点の間のトンネル効果によって混ざる。その結果、局所計算で零だった状態の一部は小さな正エネルギーをもち得る。

トンネル効果で正エネルギーへ移る状態にも、前章と同じ偶奇の対構造がある。低エネルギー部分空間は超電荷で保たれ、その中の正エネルギー状態も偶・奇で打ち消し合う。従って、正エネルギーをもつ低エネルギー状態は偶・奇で同数ずつ現れ、$m_r$と$b_r$の交代和は一致する。

$$
\boxed{\quad
\chi(M)=\sum_{r=0}^{n}(-1)^r b_r
       =\sum_{r=0}^{n}(-1)^r m_r.
\quad}
\tag{morse-euler-sum}
$$

例えば球面の高さ関数には極小点と極大点が一つずつあり、$1+1=2$を与える。適切に傾けたトーラスの高さ関数には極小点一つ、鞍点二つ、極大点一つがあり、$1-2+1=0$となる。臨界点での負方向が局所状態の次数を決め、その偶奇の差が大域的なEuler標数を与えるのである。

臨界点を数えることで、超対称量子力学からEuler標数を取り出せた。次に調べたいのは、同じ整数が曲率の積分として現れる仕組みである。
