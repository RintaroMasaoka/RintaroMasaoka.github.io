#### 3.3.2. GLM方程式の行列表示

一つの束縛状態からソリトンを復元できた。同じ構成を $N$ 個の束縛状態へ広げよう。反射がないとき、散乱データに残るのは固有値 $-\kappa_n^2$ と左端の規格化定数 $c_n$ である。各束縛状態の符号を左端の係数 $c_n>0$ となるように選ぶ。まず時刻を固定し、指数関数の中身を
$$
\theta_n(x)=\kappa_nx+\log c_n,\qquad n=1,\ldots,N
\tag{equation-4657c45747}
$$
と書く。従って、左端での形は $e^{\theta_n(x)}=c_ne^{\kappa_nx}$ である。

束縛状態の波形も、この指数関数と核 $K$ で表せる。Jost 解の核表示は
$$
f_-(x,k)=e^{ikx}+\int_{-\infty}^xK(x,z)e^{ikz}\,dz
$$
である。$k=-i\kappa_n$ を代入して $c_n$ を掛けると、規格化された束縛状態 $\psi_n=c_nf_-(x,-i\kappa_n)$ は
$$
\psi_n(x)=e^{\theta_n(x)}+\int_{-\infty}^xK(x,z)e^{\theta_n(z)}\,dz.
\tag{equation-b57207a680}
$$
$e^{\theta_n}$ は左端の形を全空間へ延ばした指数関数であり、$\psi_n$ はポテンシャルに対応する束縛状態の波形である。

核を求める GLM 方程式の既知関数 $F$ は、無反射の場合には束縛状態の散乱データだけで決まり、
$$
\begin{aligned}
F(s)&=\sum_{n=1}^N c_n^2e^{\kappa_ns},\\
F(x+y)&=\sum_{n=1}^N e^{\theta_n(x)}e^{\theta_n(y)}
\end{aligned}
$$
となる。この $F$ から未知の $K$ を求める GLM 方程式は
$$
K(x,y)+F(x+y)+\int_{-\infty}^xK(x,z)F(z+y)\,dz=0,\qquad y<x.
$$

ここに上の指数関数の和を代入し、$e^{\theta_n(y)}$ ごとにまとめると、
$$
K(x,y)+\sum_{n=1}^N e^{\theta_n(y)}\Bigl[e^{\theta_n(x)}+\int_{-\infty}^xK(x,z)e^{\theta_n(z)}\,dz\Bigr]=0.
\tag{equation-6ab543eb8f}
$$
角括弧は式 (@equation-b57207a680) の $\psi_n(x)$ なので、
$$
\boxed{K(x,y)=-\sum_{n=1}^N\psi_n(x)e^{\theta_n(y)}.}
\tag{equation-6b629c0eb4}
$$
指数関数を束縛状態へ変える核が、その束縛状態自身で書けた。固定した $x$ では、核の $y$ 依存性は既知の $N$ 個の指数関数で決まり、未知なのは $N$ 個の値 $\psi_n(x)$ だけである。

この核を $\psi_m$ の積分表示 (@equation-b57207a680) に戻すと、束縛状態を決める方程式が閉じる。
$$
\psi_m(x)+\sum_{n=1}^N
\left[\int_{-\infty}^x e^{\theta_m(z)+\theta_n(z)}\,dz\right]\psi_n(x)=e^{\theta_m(x)}.
\tag{equation-4d1eb682c3}
$$
角括弧は、二つの指数関数の積を左端から $x$ まで積分した既知の量である。これを行列の成分
$$
\begin{aligned}
C_{mn}(x)&=\int_{-\infty}^x e^{\theta_m(z)+\theta_n(z)}\,dz\\
&=\frac{e^{\theta_m(x)+\theta_n(x)}}{\kappa_m+\kappa_n}
\end{aligned}
\tag{equation-3809f1c8d2}
$$
とする。ここで $\boldsymbol\theta=(\theta_1,\ldots,\theta_N)^{\mathsf T}$ とし、$e^{\boldsymbol\theta}$ は成分ごとの指数関数を並べた列ベクトルとする。また、$\boldsymbol\psi=(\psi_1,\ldots,\psi_N)^{\mathsf T}$ とし、$I$ を $N$ 次の単位行列とする。式 (@equation-4d1eb682c3) は
$$
(I+C)\boldsymbol\psi=e^{\boldsymbol\theta}.
\tag{equation-434990ec06}
$$
となる。$C$ は、区間 $(-\infty,x]$ 上の指数関数 $e^{\theta_1},\ldots,e^{\theta_N}$ のグラム行列であり、各成分は上の積分で定まる内積である。従って $C$ の固有値は非負で、$I+C$ の固有値は全て $1$ 以上となり、$I+C$ は可逆である。各 $x$ で連立方程式を解けば、束縛状態 $\boldsymbol\psi=(I+C)^{-1}e^{\boldsymbol\theta}$ と核 (@equation-6b629c0eb4) が得られる。

非対角成分 $C_{mn}$ があるため、第 $m$ の方程式にも他の $\psi_n$ が現れる。束縛状態はそれぞれを独立に求めるのではなく、この一つの連立方程式から求める。

<details id="reflectionless-invertibility">
<summary>連立方程式の一意可解性</summary>

実列ベクトル $\boldsymbol\alpha=(\alpha_1,\ldots,\alpha_N)^{\mathsf T}\ne0$ に対し、$C$ の積分表示から
$$
\boldsymbol\alpha^{\mathsf T}C\boldsymbol\alpha=\int_{-\infty}^x\left(\sum_n\alpha_ne^{\theta_n(z)}\right)^2dz>0.
$$
固有値に対応する $\kappa_n$ は互いに異なり、指数関数 $e^{\kappa_nz}$ は線形独立なので、不等号は厳密である。従って $C$ と $I+C$ は正定値であり、逆行列をもつ。

</details>

#### 3.3.3. 多ソリトン解の行列式表示

ポテンシャルの復元に必要なのは核の対角値である。式 (@equation-6b629c0eb4) で $y=x$ とすれば
$$
\begin{gathered}
K(x,x)=-\bigl(e^{\boldsymbol\theta}\bigr)^{\mathsf T}\boldsymbol\psi,
\\
u(x)=-2\frac{d}{dx}(\bigl(e^{\boldsymbol\theta}\bigr)^{\mathsf T}\boldsymbol\psi).
\end{gathered}
\tag{equation-c09e1229fc}
$$
ここまでは連立方程式で $\boldsymbol\psi$ を求めてからポテンシャルを計算する形だった。ポテンシャルだけなら、既知の行列 $C$ を使って直接
$$
\boxed{u(x)=-2\frac{d^2}{dx^2}\log\det(I+C(x))}
\tag{equation-1f3f118d6b}
$$
と表せる。これなら各束縛状態の波形 $\psi_n$ を求めずに、散乱データからポテンシャルを得られる。

行列の対角成分の和を $\operatorname{tr}$ と書く。この式を確かめるには、対角値に現れた $\bigl(e^{\boldsymbol\theta}\bigr)^{\mathsf T}\boldsymbol\psi$ が $\log\det(I+C)$ の微分に等しいことを示せばよい。$C$ の積分表示から $\frac{dC}{dx}=e^{\boldsymbol\theta}\bigl(e^{\boldsymbol\theta}\bigr)^{\mathsf T}$ なので、行列式の微分公式と $\boldsymbol\psi=(I+C)^{-1}e^{\boldsymbol\theta}$ により
$$
\begin{aligned}
\frac{d}{dx}\log\det(I+C)
&=\operatorname{tr}\!\left((I+C)^{-1}\partial_x C\right)\\
&=\bigl(e^{\boldsymbol\theta}\bigr)^{\mathsf T}(I+C)^{-1} e^{\boldsymbol\theta}\\
&=\bigl(e^{\boldsymbol\theta}\bigr)^{\mathsf T}\boldsymbol\psi.
\end{aligned}
\tag{equation-ec581bb65a}
$$
これを式 (@equation-c09e1229fc) の $u$ の表示に代入すれば、上のポテンシャルの表示が得られる。

時間発展を戻すには、第2節で求めた $c_n(t)=c_n(0)e^{\kappa_n^3t}$ を使えばよい。すなわち
$$
\begin{gathered}
\theta_n(x,t)=\kappa_nx+\kappa_n^3t+\log c_n(0),\\
C_{mn}(x,t)=\frac{e^{\theta_m(x,t)+\theta_n(x,t)}}{\kappa_m+\kappa_n}
\end{gathered}
\tag{equation-485df2d91c}
$$
を式 (@equation-1f3f118d6b) に入れると、$N$ ソリトン解が得られる。散乱データの指数関数的な時間発展が、同じ行列の成分を通じて波形の時間発展に変わる。$N=1$ では $\det(I+C)=1+\frac{c_1(t)^2e^{2\kappa_1 x}}{2\kappa_1}$ となり、先ほどの一ソリトン解を再現する。

先に波の速さと位置で書いた解との対応は、$v_j=-\kappa_j^2$、$c_j(0)=\sqrt{2\kappa_j}e^{-\kappa_jx_j}$ で与えられる。このとき $C_{jj}=e^{2\xi_j}=e^{2\theta_j}/(2\kappa_j)$ なので、行列式の各項は §2.1 の二ソリトン解の項に一致する。二つの添字の順序は入れ替えても行列式を変えない。

#### 3.3.4. ソリトンの衝突と位置のずれ

二つの束縛状態があるとき、二ソリトン解と、一ソリトンを二つ足した波形はどこが違うのだろうか。行列式を展開すると、
$$
\begin{aligned}
\det(I+C)
&=1+C_{11}+C_{22}+C_{11}C_{22}-C_{12}^2\\
&=1+C_{11}+C_{22}
+\left(\frac{\kappa_1-\kappa_2}{\kappa_1+\kappa_2}\right)^2C_{11}C_{22}.
\end{aligned}
\tag{two-soliton-determinant}
$$
となる。二行目では $\frac{C_{12}^2}{C_{11}C_{22}}=\frac{4\kappa_1\kappa_2}{(\kappa_1+\kappa_2)^2}$ を使った。

これを $(1+C_{11})(1+C_{22})$ と比較しよう。もしこの積なら、
$$
-2\partial_x^2\log[(1+C_{11})(1+C_{22})]
=-2\partial_x^2\log(1+C_{11})-2\partial_x^2\log(1+C_{22}),
$$
となり、ポテンシャルは二つの一ソリトンの単純な和になる。実際の行列式では、$C_{11}C_{22}$ の係数が $1$ から $\left(\frac{\kappa_1-\kappa_2}{\kappa_1+\kappa_2}\right)^2$ に変わる。この係数が、二ソリトン解を単純な和と異なる波形にする。

<div data-extra-visual="determinant"></div>

以下では $\kappa_1<\kappa_2$ とし、$\kappa_1$ に対応する遅いソリトンの谷を追う。二つの谷は負の $x$ 方向へ進み、速いソリトンが後ろから追い越す。遅い谷の速度は $-\kappa_1^2$ なので、衝突より十分前と十分後には $x\simeq-\kappa_1^2t+\text{定数}$ にある。これを $C_{22}\propto\exp[2\kappa_2(x+\kappa_2^2t)]$ に代入すると、
$$
C_{22}\propto\exp\!\left[2\kappa_2(\kappa_2^2-\kappa_1^2)t\right].
$$
指数の $t$ の係数は正である。従って、遅いソリトンの谷の近くでは、衝突より十分前（$t\to-\infty$）には $C_{22}$ が小さくなり、衝突より十分後（$t\to+\infty$）には大きくなる。

衝突前に二つの谷が十分離れていると、遅いソリトンの谷の近くでは $C_{22}$ を含む二項が小さくなるので、
$$
\det(I+C)\simeq1+C_{11}
$$
となる。

衝突後の行列式を $C_{22}$ で割ると $(1+C_{11})/C_{22}$ が小さくなるので、
$$
\det(I+C)\simeq C_{22}\left[1+
\left(\frac{\kappa_1-\kappa_2}{\kappa_1+\kappa_2}\right)^2 C_{11}\right].
$$
$\log C_{22}$ は $x$ の一次式であり、$\partial_x^2\log C_{22}=0$ である。従って、ポテンシャルを求める二階微分には、角括弧の中だけが寄与する。遅いソリトンの衝突前後の波形は、どちらも $-2\partial_x^2\log(1+\text{定数}\times C_{11})$ という一ソリトンの形で、指数因子に掛かる係数だけが異なる。

この係数が谷の位置を変える。一ソリトンでは
$$
-2\partial_x^2\log(1+C_{11})
=-8\kappa_1^2\frac{C_{11}}{(1+C_{11})^2}
$$
なので、谷の中心は $C_{11}=1$ にある。定数倍した指数因子でも、それが $1$ となる位置が中心である。従って、前後の中心条件は
$$
\begin{aligned}
\text{衝突前：}&\quad C_{11}=1,\\
\text{衝突後：}&\quad
\left(\frac{\kappa_1-\kappa_2}{\kappa_1+\kappa_2}\right)^2 C_{11}=1.
\end{aligned}
$$
$C_{11}\propto e^{2\kappa_1x+2\kappa_1^3t}$ より、衝突後の中心は、衝突前の中心を同じ速度で進めた位置から
$$
-\frac{1}{2\kappa_1}\log\left(\frac{\kappa_1-\kappa_2}{\kappa_1+\kappa_2}\right)^2>0
$$
だけ右にずれる。

速いソリトンの中心 $x\simeq-\kappa_2^2t+\text{定数}$ では、$C_{11}\propto\exp[-2\kappa_1(\kappa_2^2-\kappa_1^2)t]$ が衝突前に大きく、衝突後に小さくなる。同じ計算で、中心条件は衝突前の $\left(\frac{\kappa_1-\kappa_2}{\kappa_1+\kappa_2}\right)^2C_{22}=1$ から、衝突後の $C_{22}=1$ へ移る。従って速いソリトンの位置のずれは
$$
\frac{1}{2\kappa_2}\log\left(\frac{\kappa_1-\kappa_2}{\kappa_1+\kappa_2}\right)^2<0
$$
であり、左へずれる。どちらも指数の $x,t$ の係数は変わらないため、谷の深さ・幅と速度は保たれる。

行列式の混合項の係数が、形と速度を保ったまま中心位置をずらすのである。

一般の $N$ では、行列式の各項は部分集合 $S\subseteq\{1,\ldots,N\}$ に対応する主小行列式の和になる。それぞれの係数は、二ソリトンで現れた $\left(\frac{\kappa_i-\kappa_j}{\kappa_i+\kappa_j}\right)^2$ を、その集合に含まれる全ての組について掛けたものである。一般式と計算を次の補足に示す。

<details id="reflectionless-principal-minors">
<summary>主小行列式の計算</summary>

$C_{S,S}$ を、$S$ に属する行と列だけを残した行列とする。$I+C$ の行列式を各列についての多重線形性で展開すると、各列で $I$ の列か $C$ の列を選ぶことになる。$C$ の列を選んだ添字の集合を $S$ とすれば、残りの単位行列の列に沿う余因子展開により、その項は $\det C_{S,S}$ になる。空集合の主小行列式を $1$ と約束すると、
$$
\det(I+C)=\sum_{S\subseteq\{1,\ldots,N\}}\det C_{S,S}
\tag{principal-minor-expansion}
$$
である。各行と各列から $e^{\theta_i}$ をくくり出すと、
$$
\det C_{S,S}=\left(\prod_{i\in S}e^{2\theta_i}\right)\det\left[\frac{1}{\kappa_i+\kappa_j}\right]_{i,j\in S}.
$$
残った行列式は Cauchy の行列式であり、
$$
\det\left[\frac{1}{\kappa_i+\kappa_j}\right]_{i,j\in S}
=\left(\prod_{i\in S}\frac{1}{2\kappa_i}\right)
\prod_{\substack{i<j\\i,j\in S}}
\left(\frac{\kappa_i-\kappa_j}{\kappa_i+\kappa_j}\right)^2
$$
となる。従って、
$$
\det C_{S,S}
=\prod_{i\in S}C_{ii}
\prod_{\substack{i<j\\i,j\in S}}
\left(\frac{\kappa_i-\kappa_j}{\kappa_i+\kappa_j}\right)^2.
\tag{cauchy-principal-minor}
$$
各部分集合の項には、その中の全ての組の係数が一つずつ現れる。

Cauchy の行列式の公式も、行の基本変形で確認できる。まず添字全体 $1,\ldots,N$ で計算しよう。第 $m$ 行（$m\ge2$）から、第1行の $\frac{2\kappa_1}{\kappa_m+\kappa_1}$ 倍を引くと、第一列の第2行以降は $0$ になる。残る $m,n\ge2$ の成分は
$$
\frac{1}{\kappa_m+\kappa_n}
-\frac{2\kappa_1}{(\kappa_m+\kappa_1)(\kappa_1+\kappa_n)}
=\frac{\kappa_m-\kappa_1}{\kappa_m+\kappa_1}
\frac{1}{\kappa_m+\kappa_n}
\frac{\kappa_n-\kappa_1}{\kappa_n+\kappa_1}.
$$

第一列で余因子展開し、残る行と列から左右の因子をそれぞれくくり出すと、
$$
\det\left[\frac{1}{\kappa_m+\kappa_n}\right]_{m,n=1}^N
=\frac{1}{2\kappa_1}
\prod_{n=2}^N\left(\frac{\kappa_n-\kappa_1}{\kappa_n+\kappa_1}\right)^2
\det\left[\frac{1}{\kappa_m+\kappa_n}\right]_{m,n=2}^N.
$$
同じ操作を繰り返すと、各添字から $1/(2\kappa_i)$ が一つ、各組から差と和の比の二乗が一つずつ現れる。任意の部分集合 $S$ にも同じ計算が適用でき、上の公式を得る。

</details>
