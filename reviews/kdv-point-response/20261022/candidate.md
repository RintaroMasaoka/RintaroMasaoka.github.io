#### 3.2.5. 傾きの跳びと点ポテンシャル

透過項の留数を決めるには、$\Delta(E)$ が固有エネルギー $E_n$ の近くでどう変化するかを知ればよい。この変化は、点ポテンシャルに対する束縛状態のエネルギー応答から求められる。式 (@matching-def) の接続波形は連続で、傾きの跳びは $\Delta(E)$ なので、二階の分布微分は
$$
\partial_x^2 f=(u-E)f+\Delta(E)\delta(x-x_0)
$$
となる。従って、$f(x_0;E)=1$ を使うと
$$
[L+\Delta(E)\delta(x-x_0)]f=Ef.
\tag{matching-point-potential}
$$
$\Delta(E)$ は、この波形をエネルギー $E$ の固有関数にする点ポテンシャルの強さである。

点ポテンシャルによるエネルギーの一次の変化は、その位置での束縛状態の確率密度に比例する。実数値の束縛状態 $\psi_n$ を $L\psi_n=E_n\psi_n$、$\int_{\mathbb R}\psi_n(x)^2dx=1$ と規格化すると、
$$
\begin{aligned}
E-E_n
&=\int_{\mathbb R}\psi_n(x)\,[\Delta(E)\delta(x-x_0)]\,\psi_n(x)\,dx
+O(\Delta(E)^2)\\
&=\Delta(E)\,|\psi_n(x_0)|^2+O(\Delta(E)^2).
\end{aligned}
\tag{matching-norm}
$$
一次の計算を下に示す。接続点での確率密度 $|\psi_n(x_0)|^2$ が、点ポテンシャルの強さとエネルギーのずれを結んでいる。

<details id="point-energy-response-proof">
<summary>エネルギーの一次の変化</summary>

点ポテンシャルを加えた固有関数と固有エネルギーを、一次まで $\psi_n+\delta\psi$、$E_n+\delta E$ と書く。固有値方程式の一次の項は
$$
(L-E_n)\delta\psi+\Delta(E)\delta(x-x_0)\psi_n
=\delta E\,\psi_n.
$$
$\psi_n$ との内積では、固有関数の変化 $\delta\psi$ の項は
$$
\int_{\mathbb R}\psi_n(L-E_n)\delta\psi\,dx
=\int_{\mathbb R}[(L-E_n)\psi_n]\,\delta\psi\,dx=0
$$
となる。ここでは $L$ の自己共役性と $(L-E_n)\psi_n=0$ を使った。

残る項は、規格化条件とデルタ関数により
$$
\delta E\underbrace{\int_{\mathbb R}\psi_n(x)^2dx}_{1}
=\Delta(E)\int_{\mathbb R}\psi_n(x)^2\delta(x-x_0)dx
=\Delta(E)|\psi_n(x_0)|^2.
$$
従って一次のエネルギー変化には、もとの束縛状態の確率密度だけが必要になる。

</details>

式 (@matching-norm) を透過項の分母に使う形にすると、
$$
\frac1{\Delta(E)}=\frac{|\psi_n(x_0)|^2}{E-E_n}+O(1).
$$
接続点での確率密度が、$1/\Delta(E)$ の極の係数になる。これを式 (@transmission-from-matching) に代入して、透過項の留数を求めよう。
