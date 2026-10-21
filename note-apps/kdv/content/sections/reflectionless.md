### 3.4. 無反射ならGLM方程式は連立方程式になる

一つの束縛状態からソリトンを復元できた。同じ構成を $N$ 個の束縛状態へ広げよう。反射がないとき、散乱データに残るのは固有値 $-\kappa_n^2$ と左端の規格化定数 $c_n$ である。まず時刻を固定し、それぞれの束縛状態の左端での形を
$$
e_n(x)=c_ne^{\kappa_nx},\qquad n=1,\ldots,N
\tag{equation-4657c45747}
$$
と書く。

前半で作った変換 $T$ は、この指数関数をポテンシャル中の束縛状態へ変える。Jost 解の核表示に $k=-i\kappa_n$ を入れると、規格化された束縛状態 $\psi_n=c_nf_-(x,-i\kappa_n)$ は
$$
\begin{aligned}
\psi_n(x)&=(Te_n)(x)\\
&=e_n(x)+\int_{-\infty}^xK(x,z)e_n(z)\,dz.
\end{aligned}
\tag{equation-b57207a680}
$$
となる。$e_n$ は左端の形を全空間へ延ばした指数関数であり、$\psi_n$ が復元したい束縛状態の波形である。

無反射の散乱データは $F(x+y)=\sum_n e_n(x)e_n(y)$ と変数を分離して書ける。これを GLM 方程式に代入すると
$$
K(x,y)+\sum_{n=1}^N e_n(y)
\left[e_n(x)+\int_{-\infty}^xK(x,z)e_n(z)\,dz\right]=0.
\tag{equation-6ab543eb8f}
$$
角括弧はちょうど $Te_n=\psi_n$ なので、
$$
\boxed{K(x,y)=-\sum_{n=1}^N\psi_n(x)e_n(y).}
\tag{equation-6b629c0eb4}
$$
指数関数を束縛状態へ変える核が、その束縛状態自身で書けた。固定した $x$ では、核の $y$ 依存性は既知の $N$ 個の指数関数で決まり、未知なのは $N$ 個の値 $\psi_n(x)$ だけである。

この核を $\psi_m=Te_m$ の式 (@equation-b57207a680) に戻すと、束縛状態を決める方程式が閉じる。
$$
\psi_m(x)+\sum_{n=1}^N
\left[\int_{-\infty}^x e_m(z)e_n(z)\,dz\right]\psi_n(x)=e_m(x).
\tag{equation-4d1eb682c3}
$$
角括弧は、二つの指数関数の積を左端から $x$ まで積分した既知の量である。これを行列の成分
$$
C_{mn}(x)=\int_{-\infty}^x e_m(z)e_n(z)\,dz
=\frac{e_m(x)e_n(x)}{\kappa_m+\kappa_n}
\tag{equation-3809f1c8d2}
$$
と書けば、式 (@equation-4d1eb682c3) は
$$
(I+C)\boldsymbol\psi=\boldsymbol e,\qquad
\boldsymbol\psi=(\psi_1,\ldots,\psi_N)^{\mathsf T},\quad
\boldsymbol e=(e_1,\ldots,e_N)^{\mathsf T}
\tag{equation-434990ec06}
$$
となる。$I$ は $N$ 次の単位行列である。$C$ は正定値なので $I+C$ は可逆である。各 $x$ でこの連立一次方程式を解けば、束縛状態 $\boldsymbol\psi=(I+C)^{-1}\boldsymbol e$ と核 (@equation-6b629c0eb4) が得られる。

<details id="reflectionless-invertibility">
<summary>連立方程式が一意に解ける理由</summary>

実列ベクトル $\boldsymbol\alpha=(\alpha_1,\ldots,\alpha_N)^{\mathsf T}\ne0$ に対し、$C$ の積分表示から
$$
\boldsymbol\alpha^{\mathsf T}C\boldsymbol\alpha
=\int_{-\infty}^x\left(\sum_n\alpha_ne_n(z)\right)^2dz>0.
$$
固有値に対応する $\kappa_n$ は互いに異なり、指数関数 $e^{\kappa_nz}$ は線形独立なので、不等号は厳密である。従って $C$ と $I+C$ は正定値であり、逆行列をもつ。

</details>

### 3.5. 核の対角から多ソリトン解を得る

ポテンシャルの復元に必要なのは核の対角値である。式 (@equation-6b629c0eb4) で $y=x$ とすれば
$$
K(x,x)=-\boldsymbol e^{\mathsf T}\boldsymbol\psi,
\qquad
u(x)=-2\frac{d}{dx}(\boldsymbol e^{\mathsf T}\boldsymbol\psi).
\tag{equation-c09e1229fc}
$$
この計算は行列式でまとめられる。$C$ の積分表示を微分すると $\frac{dC}{dx}=\boldsymbol e\boldsymbol e^{\mathsf T}$ だから、行列式の微分公式と $\boldsymbol\psi=(I+C)^{-1}\boldsymbol e$ により
$$
\begin{aligned}
\frac{d}{dx}\log\det(I+C)
&=\operatorname{tr}\!\left((I+C)^{-1}\frac{dC}{dx}\right)\\
&=\boldsymbol e^{\mathsf T}(I+C)^{-1}\boldsymbol e
=\boldsymbol e^{\mathsf T}\boldsymbol\psi.
\end{aligned}
\tag{equation-ec581bb65a}
$$
従って、求めるポテンシャルは
$$
\boxed{u(x)=-2\frac{d^2}{dx^2}\log\det(I+C(x)).}
\tag{equation-1f3f118d6b}
$$

時間発展を戻すには、第2節で求めた $c_n(t)=c_n(0)e^{-4\kappa_n^3t}$ を使えばよい。すなわち
$$
e_n(x,t)=c_n(0)e^{\kappa_nx-4\kappa_n^3t},\qquad
C_{mn}(x,t)=\frac{e_m(x,t)e_n(x,t)}{\kappa_m+\kappa_n}
\tag{equation-485df2d91c}
$$
を式 (@equation-1f3f118d6b) に入れると、$N$ ソリトン解が得られる。散乱データの指数関数的な時間発展が、同じ行列の成分を通じて波形の時間発展に変わる。$N=1$ では $\det(I+C)=1+c(t)^2e^{2\kappa x}/(2\kappa)$ となり、先ほどの一ソリトン解を再現する。

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
これは前半の $LT=TL_0$ と同じ、自由な固有関数をポテンシャル中の固有関数へ移す関係を、束縛状態の波数で見たものである。

規格化は連立方程式からも確かめられる。$\frac{dC}{dx}=\boldsymbol e\boldsymbol e^{\mathsf T}$ と逆行列の微分公式から
$$
\frac{d}{dx}(I+C)^{-1}
=-(I+C)^{-1}\boldsymbol e\boldsymbol e^{\mathsf T}(I+C)^{-1}
=-\boldsymbol\psi\boldsymbol\psi^{\mathsf T}.
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
<summary>ポテンシャルを束縛状態の二乗和で表す計算</summary>

$e_n=\psi_n+\sum_mC_{nm}\psi_m$、$C_{mn}=C_{nm}$ および $(\kappa_m+\kappa_n)C_{mn}=e_me_n$ より
$$
\begin{aligned}
2\sum_n\kappa_ne_n\psi_n
&=2\sum_n\kappa_n\psi_n^2
 +\sum_{m,n}(\kappa_m+\kappa_n)C_{mn}\psi_m\psi_n\\
&=2\sum_n\kappa_n\psi_n^2
 +(\boldsymbol e^{\mathsf T}\boldsymbol\psi)^2.
\end{aligned}
\tag{equation-9de2c9f65e}
$$
一方、$\boldsymbol e^{\mathsf T}\boldsymbol\psi=\boldsymbol e^{\mathsf T}(I+C)^{-1}\boldsymbol e$ を微分する。左右の $e_n'=\kappa_ne_n$ の寄与を足し、逆行列の微分 (@equation-eeebde7889) を使うと
$$
\begin{aligned}
\frac{d}{dx}(\boldsymbol e^{\mathsf T}\boldsymbol\psi)
&=2\sum_n\kappa_ne_n\psi_n-(\boldsymbol e^{\mathsf T}\boldsymbol\psi)^2\\
&=2\sum_n\kappa_n\psi_n^2.
\end{aligned}
\tag{equation-95a2bc6b3b}
$$
これを対角復元式 (@equation-c09e1229fc) に代入すれば $u=-4\sum_n\kappa_n\psi_n^2$ が従う。

</details>
