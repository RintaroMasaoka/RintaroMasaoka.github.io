### 2.4. 散乱データ

以下では $u$ は実数値で滑らかとし、すべての導関数が両端で任意のべきより速く減衰すると仮定する。遠方では Schrödinger 方程式は自由方程式に近づく。負の固有値 $-\kappa_n^2$ に対する自由解は $e^{\pm\kappa_nx}$ であり、左端で減衰するのは $e^{\kappa_nx}$ である。

Schrödinger 方程式 $(-\partial_x^2+u(x,t))\psi(x,t)=\lambda\psi(x,t)$ の束縛状態の互いに異なる固有値を $\lambda=-\kappa_n^2$（$n=1,\ldots,N$）とする。束縛状態を $L^2(\mathbb R)$ で規格化し、左端の漸近形が正の係数をもつよう位相を選ぶと
$$
\psi_n(x,t)\sim c_n(t)e^{\kappa_nx}\quad(x\to-\infty),\qquad c_n(t)>0.
\tag{equation-cdc8dfdf01}
$$
この左端振幅 $c_n(t)$ が、後で左 GLM 方程式に入る規格化定数である。

散乱状態では $\lambda=k^2$ とし、左から入射する解を選ぶ。その遠方での形を
$$
\psi(x,t)\sim
\begin{cases}
e^{ikx}+b(k,t)e^{-ikx},&x\to-\infty,\\
a(k,t)e^{ikx},&x\to+\infty
\end{cases}
\tag{equation-4546e628e4}
$$
とする。$a$ は透過係数、$b$ は左反射係数である。$\kappa_n,c_n(t),a(k,t),b(k,t)$をまとめたものを散乱データと呼ぶ。

遠方では $B(t)=-4\partial_x^3+6u\partial_x+3u_x$ の自由部分 $-4\partial_x^3$ が波の時間位相を決める。左端の束縛状態の尾 $e^{\kappa_nx}$ には $-4\kappa_n^3$ が掛かるので
$$
c_n(t)=e^{-4\kappa_n^3t}c_n(0).
\tag{equation-1f090a0648}
$$
散乱波では $e^{ikx}$ の時間因子が $e^{4ik^3t}$、$e^{-ikx}$ の時間因子が $e^{-4ik^3t}$ である。入射振幅をまだ1に戻していない時間発展解は左端で
$$
e^{4ik^3t}e^{ikx}+b(k,0)e^{-4ik^3t}e^{-ikx},
$$
右端で $a(k,0)e^{4ik^3t}e^{ikx}$ となる。入射係数を1に戻すため全体を $e^{4ik^3t}$ で割ると
$$
a(k,t)=a(k,0),\qquad b(k,t)=e^{-8ik^3t}b(k,0).
\tag{equation-65c23b8d77}
$$
よって固有値と透過係数は一定であり、左端振幅と左反射係数は (@equation-1f090a0648)、(@equation-65c23b8d77) に従って変化する。


### 2.5. ソリトン

散乱データの時間発展は、ソリトンの移動をどのように表すのだろうか。まず束縛状態の遠方での形を見る。

束縛状態の左端の尾は、(@equation-1f090a0648)から
$$
\psi_n(x,t)\sim c_n(0)e^{\kappa_n(x-4\kappa_n^2t)}\quad(x\to-\infty)
\tag{equation-168dfc401b}
$$
と書ける。この指数関数は $x-4\kappa_n^2t$ に依存する。異なる $\kappa_n$ は異なる移動速度を与える。次節では、こうした漸近形をもつ散乱データからポテンシャル全体を復元し、ソリトンの形と運動を求める。

![3-ソリトン解が分裂する様子](/notes/KdV/images/soliton_split.png)


$N$-ソリトン解は、反射係数が $b(k,t)=0$ となる無反射ポテンシャルから得られる。以下ではまず一般の散乱データから復元方程式を導き、その後で無反射の場合を具体的に解く。
