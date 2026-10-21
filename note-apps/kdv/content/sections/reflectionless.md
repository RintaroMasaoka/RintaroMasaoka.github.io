### 3.4. 無反射ポテンシャルに対するGLM方程式の解

前節で得た左 GLM 方程式を無反射の場合に解く。反射係数が $b(k,t)=0$ なら散乱データ関数は束縛状態の項だけになり、(2.20) の時間発展を含めて
$$
F(s,t)=\sum_{n=1}^N c_n(t)^2e^{\kappa_ns},\qquad
c_n(t)=c_n(0)e^{-4\kappa_n^3t}.
\tag{3.60}
$$
左 GLM 方程式は
$$
K(x,y)+\sum_{m=1}^N c_m^2e^{\kappa_m(x+y)}
+\sum_{m=1}^N c_m^2e^{\kappa_my}
  \int_{-\infty}^xK(x,z)e^{\kappa_mz}\,dz=0,
\qquad y<x.
\tag{3.61}
$$
ここでは $c_n=c_n(t)$ とする。有限個の指数関数が $y$ に現れるため、核を
$$
K(x,y)=-\sum_{n=1}^N c_n\psi_n(x)e^{\kappa_ny}
\tag{3.62}
$$
と置く。各 $e^{\kappa_my}$ の係数を等しくすると
$$
\psi_m(x)=c_me^{\kappa_mx}
-\sum_{n=1}^N c_mc_n\psi_n(x)
  \int_{-\infty}^xe^{(\kappa_m+\kappa_n)z}\,dz.
\tag{3.63}
$$
成分 $e_n(x)=c_ne^{\kappa_nx}$ と行列
$$
C_{mn}(x)=\frac{e_m(x)e_n(x)}{\kappa_m+\kappa_n}
=\int_{-\infty}^xe_m(z)e_n(z)\,dz
\tag{3.64}
$$
を定義すれば、係数方程式は
$$
(I+C)\boldsymbol\psi=\boldsymbol e,
\qquad
\boldsymbol\psi=(\psi_1,\ldots,\psi_N)^{\mathsf T},\quad
\boldsymbol e=(e_1,\ldots,e_N)^{\mathsf T}.
\tag{3.65}
$$
任意の $v\in\mathbb R^N$ に対して
$$
v^{\mathsf T}Cv=\int_{-\infty}^x\left(\sum_{n=1}^Nv_ne_n(z)\right)^2dz\ge0,
$$
$\kappa_n$ は相異なるので指数関数 $e^{\kappa_n z}$ は線形独立であり、$v\ne0$ ならこの積分は正になる。したがって $C$ は正定値であり、$I+C$ も正定値だから、(3.65) は一意な解をもつ。

この解は $\boldsymbol\psi=(I+C)^{-1}\boldsymbol e$ である。$\tau=\det(I+C)$ と置くと、$C'=\boldsymbol e\boldsymbol e^{\mathsf T}$ と行列式の微分公式から
$$
\frac{d}{dx}\log\tau
=\operatorname{tr}\!\left((I+C)^{-1}C'\right)
=\boldsymbol e^{\mathsf T}\boldsymbol\psi.
\tag{3.66}
$$
従って核の対角値は
$$
K(x,x)=-\boldsymbol e^{\mathsf T}\boldsymbol\psi
=-\frac{d}{dx}\log\tau.
\tag{3.67}
$$
左変換核の対角復元公式 $u=2\,dK(x,x)/dx$ を使えば、
$$
u(x,t)=-2\frac{\partial^2}{\partial x^2}\log\det(I+C(x,t))
\tag{3.68}
$$
を得る。ここで $e_n(x,t)=c_n(t)e^{\kappa_nx}$ であり、時間依存性はすべて第2節で求めた $c_n(t)$ に含まれている。

### 3.5. $\psi_n(x)$が固有関数であることの証明

(3.65) で得た係数 $\psi_n$ が固有値 $-\kappa_n^2$ の固有関数であることを確認する。$E=\operatorname{diag}(\kappa_1,\ldots,\kappa_N)$ と置く。(3.64) の定義から
$$
\boldsymbol e'=E\boldsymbol e,\qquad
C'=\boldsymbol e\boldsymbol e^{\mathsf T},\qquad
EC+CE=\boldsymbol e\boldsymbol e^{\mathsf T}.
\tag{3.69}
$$
最後の等式は成分ごとに $(\kappa_m+\kappa_n)C_{mn}=e_me_n$ と書いたものだ。さらに (3.62) の対角微分から
$$
u=2\frac{d}{dx}K(x,x)
=-2\frac{d}{dx}(\boldsymbol e^{\mathsf T}\boldsymbol\psi).
\tag{3.70}
$$
$L=-\partial_x^2+u$ を (3.65) の各成分に作用させる。積の微分則で $C_{mn}\psi_n$ を微分し、上の関係を用いると
$$
\begin{aligned}
\sum_n(\delta_{mn}+C_{mn})L\psi_n
&=-\kappa_m^2e_m+\kappa_me_m\sum_n e_n\psi_n
  -e_m\sum_n\kappa_ne_n\psi_n\\
&=-\kappa_m^2e_m+\sum_n(\kappa_m-\kappa_n)e_me_n\psi_n.
\end{aligned}
\tag{3.71}
$$
一方 $e_m=\sum_n(\delta_{mn}+C_{mn})\psi_n$ であり、
$(\kappa_m^2-\kappa_n^2)C_{mn}=(\kappa_m-\kappa_n)e_me_n$ だから、右辺は
$$
-\sum_n(\delta_{mn}+C_{mn})\kappa_n^2\psi_n
$$
に等しい。(3.65) の $I+C$ は可逆なので
$$
(-\partial_x^2+u)\psi_n=-\kappa_n^2\psi_n.
\tag{3.72}
$$

### 3.6. 固有関数の規格化とポテンシャル表示

続いて、係数 $\psi_n$ が $L^2$ 規格化されていることと、ポテンシャルをそれらで表せることを示す。まず逆行列の微分公式を (3.69) に適用すると
$$
\frac{d}{dx}(I+C)^{-1}
=-(I+C)^{-1}\boldsymbol e\boldsymbol e^{\mathsf T}(I+C)^{-1}
=-\boldsymbol\psi\boldsymbol\psi^{\mathsf T}.
\tag{3.73}
$$
$x\to-\infty$ では $C\to0$ なので $(I+C)^{-1}\to I$。また
$C_{mn}(x)=e^{\kappa_mx}C_{mn}(0)e^{\kappa_nx}$ なので、逆行列は成分ごとに
$$
[C(x)^{-1}]_{mn}=e^{-\kappa_mx}[C(0)^{-1}]_{mn}e^{-\kappa_nx}\longrightarrow0
\qquad(x\to+\infty).
$$
$C(0)$ の可逆性は上で示した正定値性による。従って
$(I+C)^{-1}=C^{-1}(I+C^{-1})^{-1}\to0$ となる。(3.73) を両端の間で積分すれば
$$
\int_{-\infty}^{\infty}\psi_m(x)\psi_n(x)\,dx=\delta_{mn}.
\tag{3.74}
$$
従って (3.72) の実固有関数は互いに直交し、それぞれノルム1である。

ポテンシャル表示のため $q=\boldsymbol e^{\mathsf T}\boldsymbol\psi$ と置く。(3.65) から $\boldsymbol e=(I+C)\boldsymbol\psi$ なので、(3.69) を使って
$$
\boldsymbol e^{\mathsf T}E\boldsymbol\psi
=\boldsymbol\psi^{\mathsf T}(I+C)E\boldsymbol\psi
=\boldsymbol\psi^{\mathsf T}E\boldsymbol\psi+
  \boldsymbol\psi^{\mathsf T}CE\boldsymbol\psi.
$$
ここで $EC+CE=\boldsymbol e\boldsymbol e^{\mathsf T}$ と $C\boldsymbol\psi=\boldsymbol e-\boldsymbol\psi$ より
$$
\boldsymbol\psi^{\mathsf T}CE\boldsymbol\psi
=q^2-\boldsymbol\psi^{\mathsf T}EC\boldsymbol\psi
=q^2-\boldsymbol e^{\mathsf T}E\boldsymbol\psi+
  \boldsymbol\psi^{\mathsf T}E\boldsymbol\psi.
$$
従って $\boldsymbol e^{\mathsf T}E\boldsymbol\psi
=\boldsymbol\psi^{\mathsf T}E\boldsymbol\psi+q^2/2$。
一方、$q'=2\boldsymbol e^{\mathsf T}E\boldsymbol\psi-q^2$ は $C'=\boldsymbol e\boldsymbol e^{\mathsf T}$ と逆行列の微分から従うため、
$$
q'=2\boldsymbol e^{\mathsf T}E\boldsymbol\psi-q^2
=2\boldsymbol\psi^{\mathsf T}E\boldsymbol\psi
=2\sum_{n=1}^N\kappa_n\psi_n^2.
\tag{3.75}
$$
(3.70) で $u=-2q'$ としたので、求める表示は
$$
u(x,t)=-4\sum_{n=1}^N\kappa_n\psi_n(x,t)^2.
\tag{3.76}
$$
