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
\begin{gathered}
K(x,y)+F(x+y)\\
+\int_{-\infty}^xK(x,z)F(z+y)\,dz=0,\qquad y<x.
\end{gathered}
$$

ここに上の指数関数の和を代入し、$e^{\theta_n(y)}$ ごとにまとめると、
$$
\begin{aligned}
K(x,y)&+\sum_{n=1}^N e^{\theta_n(y)}\Bigl[e^{\theta_n(x)}\\
&\quad+\int_{-\infty}^xK(x,z)e^{\theta_n(z)}\,dz\Bigr]=0.
\end{aligned}
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
\begin{aligned}
\psi_m(x)&+\sum_{n=1}^N
\left[\int_{-\infty}^x e^{\theta_m(z)+\theta_n(z)}\,dz\right]\psi_n(x)\\
&=e^{\theta_m(x)}.
\end{aligned}
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
ここで $\boldsymbol\theta=(\theta_1,\ldots,\theta_N)^{\mathsf T}$ とし、$e^{\boldsymbol\theta}$ は成分ごとの指数関数を並べた列ベクトルとする。式 (@equation-4d1eb682c3) は
$$
\begin{gathered}
(I+C)\boldsymbol\psi=e^{\boldsymbol\theta},\\
\boldsymbol\psi=(\psi_1,\ldots,\psi_N)^{\mathsf T},\\
e^{\boldsymbol\theta}=(e^{\theta_1},\ldots,e^{\theta_N})^{\mathsf T}.
\end{gathered}
\tag{equation-434990ec06}
$$
となる。$I$ は $N$ 次の単位行列である。$C$ は、区間 $(-\infty,x]$ 上の指数関数 $e^{\theta_1},\ldots,e^{\theta_N}$ のグラム行列であり、各成分は上の積分で定まる内積である。従って $C$ の固有値は非負で、$I+C$ の固有値は全て $1$ 以上となり、$I+C$ は可逆である。各 $x$ で連立方程式を解けば、束縛状態 $\boldsymbol\psi=(I+C)^{-1}e^{\boldsymbol\theta}$ と核 (@equation-6b629c0eb4) が得られる。

非対角成分 $C_{mn}$ があるため、第 $m$ の方程式にも他の $\psi_n$ が現れる。束縛状態はそれぞれを独立に求めるのではなく、この一つの連立方程式から求める。

<details id="reflectionless-invertibility">
<summary>連立方程式の一意可解性</summary>

実列ベクトル $\boldsymbol\alpha=(\alpha_1,\ldots,\alpha_N)^{\mathsf T}\ne0$ に対し、$C$ の積分表示から
$$
\begin{gathered}
\boldsymbol\alpha^{\mathsf T}C\boldsymbol\alpha\\
=\int_{-\infty}^x\left(\sum_n\alpha_ne^{\theta_n(z)}\right)^2dz>0.
\end{gathered}
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

この式を確かめるには、対角値に現れた $\bigl(e^{\boldsymbol\theta}\bigr)^{\mathsf T}\boldsymbol\psi$ が $\log\det(I+C)$ の微分に等しいことを示せばよい。$C$ の積分表示から $\frac{dC}{dx}=e^{\boldsymbol\theta}\bigl(e^{\boldsymbol\theta}\bigr)^{\mathsf T}$ なので、行列式の微分公式と $\boldsymbol\psi=(I+C)^{-1}e^{\boldsymbol\theta}$ により
$$
\begin{aligned}
&\frac{d}{dx}\log\det(I+C)
&=\operatorname{tr}\!\left((I+C)^{-1}\partial_x C\right)\\
&=\bigl(e^{\boldsymbol\theta}\bigr)^{\mathsf T}(I+C)^{-1}\\
&\qquad\times e^{\boldsymbol\theta}
\\
&=\bigl(e^{\boldsymbol\theta}\bigr)^{\mathsf T}\boldsymbol\psi.
\end{aligned}
\tag{equation-ec581bb65a}
$$
これを対角復元式 (@equation-c09e1229fc) に代入すれば、上のポテンシャルの表示が得られる。

時間発展を戻すには、第2節で求めた $c_n(t)=c_n(0)e^{-4\kappa_n^3t}$ を使えばよい。すなわち
$$
\begin{gathered}
\theta_n(x,t)=\kappa_nx-4\kappa_n^3t+\log c_n(0),\\
C_{mn}(x,t)=\frac{e^{\theta_m(x,t)+\theta_n(x,t)}}{\kappa_m+\kappa_n}
\end{gathered}
\tag{equation-485df2d91c}
$$
を式 (@equation-1f3f118d6b) に入れると、$N$ ソリトン解が得られる。散乱データの指数関数的な時間発展が、同じ行列の成分を通じて波形の時間発展に変わる。$N=1$ では $\det(I+C)=1+c(t)^2e^{2\kappa x}/(2\kappa)$ となり、先ほどの一ソリトン解を再現する。

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
となる。二行目では $C_{12}^2/(C_{11}C_{22})=4\kappa_1\kappa_2/(\kappa_1+\kappa_2)^2$ を使った。

これを $(1+C_{11})(1+C_{22})$ と比較しよう。もしこの積なら、
$$
-2\partial_x^2\log[(1+C_{11})(1+C_{22})]
=-2\partial_x^2\log(1+C_{11})-2\partial_x^2\log(1+C_{22}),
$$
となり、ポテンシャルは二つの一ソリトンの単純な和になる。実際の行列式では、$C_{11}C_{22}$ の係数が $1$ から $((\kappa_1-\kappa_2)/(\kappa_1+\kappa_2))^2$ に変わる。この係数が、二ソリトン解を単純な和と異なる波形にする。

その違いを、衝突前後の位置のずれとして読んでみよう。二つのソリトンが十分離れたとき、第1のソリトンの中心付近で $C_{22}$ が十分小さければ、行列式は $1+C_{11}$ に近い。一方、$C_{22}$ が十分大きければ、
$$
\det(I+C)\simeq C_{22}\left[1+
\left(\frac{\kappa_1-\kappa_2}{\kappa_1+\kappa_2}\right)^2 C_{11}\right].
$$
$\log C_{22}$ は $x$ の一次式なので、その二階微分は $0$ である。従って、第1のソリトンの近くの波形は、どちらの場合も $-2\partial_x^2\log(1+\text{定数}\times C_{11})$ という一ソリトンの形になる。

まず、一ソリトンの谷の中心を式で確かめよう。$C_{11}$ の $x$ 依存性は $e^{2\kappa_1x}$ に比例するので、
$$
-2\partial_x^2\log(1+C_{11})
=-8\kappa_1^2\frac{C_{11}}{(1+C_{11})^2}.
$$
$C_{11}>0$ では $C_{11}/(1+C_{11})^2$ が最大になるのは $C_{11}=1$ のときであり、そこがポテンシャルの最小点、すなわち谷の中心となる。

$C_{11}\propto e^{2\kappa_1x-8\kappa_1^3t}$ なので、この定数倍は形や速度を変えず、中心の位置を変える。二つの領域での中心条件はそれぞれ
$$
C_{11}=1,\qquad
\left(\frac{\kappa_1-\kappa_2}{\kappa_1+\kappa_2}\right)^2 C_{11}=1
$$
であり、後者の中心は前者より
$$
-\frac{1}{2\kappa_1}\log\left(\frac{\kappa_1-\kappa_2}{\kappa_1+\kappa_2}\right)^2
$$
だけ右にある。ここでは二つの領域の位置を比較した。時間の順序も、$x\simeq4\kappa_1^2t+\text{定数}$ に沿って $C_{22}\propto\exp[8\kappa_2(\kappa_1^2-\kappa_2^2)t]$ と書けばわかる。$\kappa_1>\kappa_2$ なら第1のソリトンは衝突後にこの距離だけ前進し、$\kappa_1<\kappa_2$ なら逆の順序をたどって後退する。衝突後に形と速度が保たれることも、中心の位置がずれることも、行列式のこの係数からわかる。

<div data-extra-visual="determinant"></div>

一般の $N$ では、行列式の各項は部分集合 $S\subseteq\{1,\ldots,N\}$ に対応する主小行列式の和になる。それぞれの係数は、二ソリトンで現れた $((\kappa_i-\kappa_j)/(\kappa_i+\kappa_j))^2$ を、その集合に含まれる全ての組について掛けたものである。一般式と計算を次の補足に示す。

<details id="reflectionless-principal-minors">
<summary>主小行列式と相互作用因子</summary>

$C_{S,S}$ を、$S$ に属する行と列だけを残した行列とする。$I+C$ の行列式を各列についての多重線形性で展開すると、各列で $I$ の列か $C$ の列を選ぶことになる。$C$ の列を選んだ添字の集合を $S$ とすれば、残りの単位行列の列に沿う余因子展開により、その項は $\det C_{S,S}$ になる。空集合の主小行列式を $1$ と約束すると、
$$
\det(I+C)=\sum_{S\subseteq\{1,\ldots,N\}}\det C_{S,S}
\tag{principal-minor-expansion}
$$
である。各行と各列から $e^{\theta_i}$ をくくり出すと、
$$
\begin{gathered}
\det C_{S,S}\\
=\left(\prod_{i\in S}e^{2\theta_i}\right)\\
{}\times\det\left[\frac{1}{\kappa_i+\kappa_j}\right]_{i,j\in S}.
\end{gathered}
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

Cauchy の行列式の公式も、行の基本変形で確認できる。まず添字全体 $1,\ldots,N$ で計算しよう。第 $m$ 行（$m\ge2$）から、第1行の $2\kappa_1/(\kappa_m+\kappa_1)$ 倍を引くと、第一列の第2行以降は $0$ になる。残る $m,n\ge2$ の成分は
$$
\begin{aligned}
\frac{1}{\kappa_m+\kappa_n}
-\frac{2\kappa_1}{(\kappa_m+\kappa_1)(\kappa_1+\kappa_n)}
&=\frac{\kappa_m-\kappa_1}{\kappa_m+\kappa_1}
\frac{1}{\kappa_m+\kappa_n}
\frac{\kappa_n-\kappa_1}{\kappa_n+\kappa_1}.
\end{aligned}
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

復元したポテンシャルは、束縛状態の波形を使って
$$
u(x,t)=-4\sum_{n=1}^N\kappa_n\psi_n(x,t)^2
\tag{equation-1888e2449c}
$$
とも表せる。左端の指数関数から連立方程式で求めた $\psi_n$ は、規格化された束縛状態であり、その二乗の重み付き和がポテンシャルを与える。この表示の導出と規格化の確認を以下の補足に示す。

<details id="reflectionless-normalization">
<summary>束縛状態の固有方程式と規格化</summary>

式 (@equation-b57207a680) は $\psi_n=c_nf_-(x,-i\kappa_n)$ の核表示である。この複素波数では指数関数が左端で減衰し、左積分は収束する。$Lf_-(x,k)=k^2f_-(x,k)$ より
$$
L\psi_n=-\kappa_n^2\psi_n.
$$
規格化は連立方程式からも確かめられる。$\frac{dC}{dx}=e^{\boldsymbol\theta}\bigl(e^{\boldsymbol\theta}\bigr)^{\mathsf T}$ と逆行列の微分公式から
$$
\begin{aligned}
&\frac{d}{dx}(I+C)^{-1}\\
&=-(I+C)^{-1}e^{\boldsymbol\theta}\\
&\qquad\times\bigl(e^{\boldsymbol\theta}\bigr)^{\mathsf T}(I+C)^{-1}\\
&=-\boldsymbol\psi\boldsymbol\psi^{\mathsf T}.
\end{aligned}
\tag{equation-eeebde7889}
$$
$x\to-\infty$ では $C\to0$ なので $(I+C)^{-1}\to I$。他方、$C_{mn}(x)=e^{\kappa_mx}C_{mn}(0)e^{\kappa_nx}$ より
$$
[C(x)^{-1}]_{mn}=e^{-\kappa_mx}[C(0)^{-1}]_{mn}e^{-\kappa_nx}\longrightarrow0
\qquad(x\to+\infty).
$$
従って $(I+C)^{-1}=C^{-1}(I+C^{-1})^{-1}\to0$ である。式 (@equation-eeebde7889) を両端の間で積分すると
$$
\int_{\mathbb R}\psi_m(x)\psi_n(x)\,dx=\delta_{mn}
\tag{equation-962ded102a}
$$
を得る。ここで $\delta_{mn}$ は $m=n$ のとき1、それ以外で0である。

</details>

<details id="reflectionless-density">
<summary>束縛状態の二乗和によるポテンシャルの表示</summary>

$e^{\theta_n}=\psi_n+\sum_mC_{nm}\psi_m$、$C_{mn}=C_{nm}$ および $(\kappa_m+\kappa_n)C_{mn}=e^{\theta_m+\theta_n}$ より
$$
\begin{aligned}
&2\sum_n\kappa_ne^{\theta_n}\psi_n
&=2\sum_n\kappa_n\psi_n^2\\
&\quad+\sum_{m,n}e^{\theta_m+\theta_n}\psi_m\psi_n\\
&=2\sum_n\kappa_n\psi_n^2\\
&\quad+(\bigl(e^{\boldsymbol\theta}\bigr)^{\mathsf T}\boldsymbol\psi)^2.
\end{aligned}
\tag{equation-9de2c9f65e}
$$
一方、$\bigl(e^{\boldsymbol\theta}\bigr)^{\mathsf T}\boldsymbol\psi=\bigl(e^{\boldsymbol\theta}\bigr)^{\mathsf T}(I+C)^{-1}e^{\boldsymbol\theta}$ を微分する。$\partial_x\theta_n=\kappa_n$ なので、左右の指数関数を微分した寄与を足し、逆行列の微分 (@equation-eeebde7889) を使うと
$$
\begin{aligned}
&\frac{d}{dx}(\bigl(e^{\boldsymbol\theta}\bigr)^{\mathsf T}\boldsymbol\psi)
&=2\sum_n\kappa_ne^{\theta_n}\psi_n\\
&\quad-\left[\bigl(e^{\boldsymbol\theta}\bigr)^{\mathsf T}\boldsymbol\psi\right]^2\\
&=2\sum_n\kappa_n\psi_n^2.
\end{aligned}
\tag{equation-95a2bc6b3b}
$$
これを対角復元式 (@equation-c09e1229fc) に代入すれば $u=-4\sum_n\kappa_n\psi_n^2$ が従う。

</details>
