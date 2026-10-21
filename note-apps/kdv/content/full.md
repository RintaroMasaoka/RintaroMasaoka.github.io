## 1. 導入

平らな水面からの変位に対応する無次元量を $\eta(x,t)$ とし、上向きを正に取る。座標と変位の尺度を選ぶと、KdV 方程式は
$$
\eta_t+6\eta\eta_x+\eta_{xxx}=0
\tag{equation-4fefabb2db}
$$
と書ける。$\eta=0$ が平らな水面、$\eta>0$ が水面の盛り上がりを表す。[^wave-scaling] 本ノートでは流体力学から方程式を導くことには立ち入らず、その解の形と運動を調べる。

[^wave-scaling]: 浅水波の方程式からこの形にする際は、線形波の速さで動く座標を使い、空間・時間・変位を無次元化する。以下の速度は、この座標で測った速度である。

KdV方程式はソリトンという興味深い解をもつことが知られている。 この解は孤立した波束であり、形が崩れることなく一定の速度で運動するようなものである。 さらに、速度の異なるソリトンを重ね合わせた [^src-1-1] 初期条件を考えることで、ソリトンを衝突させることができる。 不思議なことに、ソリトンは相互作用をした後でも形を崩さず個性を保つ。 線形な方程式で2つの波がすり抜けるというのならわかるが、KdV方程式は非線形なのだから、ソリトンがぶつかるときの様子は単純な重ね合わせではない。しかし、少し時間を進めてやれば波はもとの綺麗なソリトンの集まりに戻っていく。

<div data-extra-visual="collision"></div>

さらに不思議なことに、初期状態をソリトンの重ね合わせにしなくとも、時間発展させれば勝手にソリトンに分かれてしまうという現象が広く見られる。 つまり、ソリトンというのはKdV方程式の解の中でありふれた構造であり、その裏に何かありそうである。

<div data-extra-visual="breakup"></div>

またKdV方程式は他の多くの非線形偏微分方程式と違って、初期値問題を厳密に解く方法が存在するという著しい特徴をもっている。 この解法は逆散乱法と呼ばれていて、その鍵は非線形な方程式の裏に隠れた線形な問題を見抜くことにある。 KdV方程式の場合、裏に隠れているのは量子力学でもお馴染みのSchrödinger方程式である。 水面波の問題を考えていたのに量子力学が現れてくる、というのはなんだか素敵ではないだろうか。

この記事の目標の1つ目は、KdV方程式が好き勝手に非線形項を加えた汚い方程式ではなく、隠れた構造を備えた方程式であると説明することである。 もっともこの記事で扱う内容は表層であり、より深い数理については[1]など専門的な文献を参照してほしい。

2つ目の目標は、逆散乱法を用いてKdV方程式のソリトン解を具体的に求めることである。

最後におまけとして、KdV方程式が無限個の保存量をもつことを擬微分演算子を用いて示している。 このような扱いはより一般的な佐藤理論につながっている。興味のある人は[1]などを参照してほしい。

[^src-1-1]: 厳密なソリトン解を構成するためには、もちろん線形な重ね合わせではいけない。


## 2. KdV方程式のソリトン解

### 2.1. 1ソリトン解と2ソリトン解

一つの波が形を保って進むとき、その波形はどのように決まるのだろうか。まず、形を保って速度 $v>0$ で移動する進行波 $\eta(x,t)=\eta(x-vt,0)$ を求めよう。この小節のプライムは、時刻0の波形 $\eta(x,0)$ の $x$ 微分を表す。KdV 方程式に代入すると
$$
\eta'''=v\eta'-6\eta\eta'.
\tag{equation-c1de586e9e}
$$
$\eta,\eta',\eta''$ が両端で0に減衰すると仮定し、無限遠での値を使って積分すると
$$
\eta''=v\eta-3\eta^2.
\tag{equation-f9f013bed9}
$$
さらに $2\eta'$ を掛けると、両辺が全微分になる。
$$
\frac{d}{dx}(\eta')^2=\frac{d}{dx}(v\eta^2-2\eta^3).
\tag{equation-cfca48d936}
$$
もう一度無限遠の境界条件を使って積分すれば
$$
(\eta')^2=v\eta^2-2\eta^3.
\tag{equation-b9960a89fd}
$$
この方程式には次の局在した波形がある。
$$
\eta(x,0)=\frac v2\operatorname{sech}^2\!\left(\frac{\sqrt v}{2}x\right).
\tag{equation-cd51ce0162}
$$
ここで $\operatorname{sech}x=1/\cosh x$ である。[^soliton-check] 時刻 $t$ では $x$ を $x-vt$ に置き換える。振幅は $v/2$、幅の尺度は $2/\sqrt v$ なので、高い波ほど速く、幅は狭くなる。

[^soliton-check]: 式 (@equation-cd51ce0162) を微分すると

    $$
    \eta'(x,0)=-\frac{v^{3/2}}{2}\operatorname{sech}^2\!\left(\frac{\sqrt v}{2}x\right)\tanh\!\left(\frac{\sqrt v}{2}x\right).
    \tag{equation-7747abb85e}
    $$

    従って $\tanh^2=1-\operatorname{sech}^2$ より

    $$
    (\eta')^2=\frac{v^3}{4}\operatorname{sech}^4\!\left(\frac{\sqrt v}{2}x\right)\left[1-\operatorname{sech}^2\!\left(\frac{\sqrt v}{2}x\right)\right]=v\eta^2-2\eta^3.
    \tag{equation-d0224c59e1}
    $$

<div data-extra-visual="traveling"></div>


二つの波が衝突する場合はどうだろうか。速度を $v_1>v_2>0$ とし、位置を調整する定数を $x_1,x_2$ とする。各波とともに移動する変数を
$$
\theta_j=\sqrt{v_j}\,(x-v_jt-x_j),\qquad j=1,2
$$
と書くと、2ソリトン解は
$$
\eta(x,t)=2\frac{\partial^2}{\partial x^2}\log\Biggl[
1+e^{\theta_1}+e^{\theta_2}
+\left(\frac{\sqrt{v_1}-\sqrt{v_2}}{\sqrt{v_1}+\sqrt{v_2}}\right)^2e^{\theta_1+\theta_2}
\Biggr].
\tag{equation-5083fcf451}
$$
衝突の十分前と十分後には、振幅が $v_1/2$ と $v_2/2$、速度が $v_1$ と $v_2$ の二つの1ソリトンが現れる。衝突の間は単純な和にはならないが、衝突後もそれぞれの形と速さは保たれ、位置にずれが残る。

この式を KdV 方程式に代入すれば、確かに解だと確認できる。けれども、なぜ非線形な相互作用を経ても二つの波の形と速さが残るのかは、まだわからない。多数のソリトンを組み立てたり、一般の初期波形からその後の振る舞いを求めたりするには、個々の解に共通する仕組みを知りたい。波形が変化する間、何が保たれているのだろうか。

### 2.2. Lax表示

Lax 表示では、KdV 方程式を Schrödinger 演算子を含む二つの微分演算子の関係として表す。以下ではその具体形を与え、KdV 方程式との同値性と、時間発展で固有値が保たれることを確かめる。

量子力学では、周囲より低いポテンシャルが粒子の閉じ込めを生む。山状の波 $\eta>0$ をその低いポテンシャルに対応させるため、ここで変数を
$$
u(x,t)=-\eta(x,t)
$$
に切り替え、以後はポテンシャル $u$ を使う。式 (@equation-4fefabb2db) に代入すると、その時間発展は
$$
u_t=6uu_x-u_{xxx}
\tag{equation-0e5e42e46f}
$$
となる。この $u$ を用いて、次の二つの演算子を定める。

$$
\begin{aligned}
L(t) = -\partial^2 + u,\quad
    B(t) = -4\partial^3 + 6u\partial + 3u_x
\end{aligned}\tag{equation-bec8ddf787}
$$

 表記について注意をすると、$\partial$は$x$に関する偏微分を表す演算子とする。 また$u$と書いた場合、$u(x,t)$を左から掛ける演算子を表すことにする。$u_x$などに関しても同様である。

$L(t),B(t)$をLax対と呼ぶ。 また$L(t)$はLax演算子と呼ばれ、今の場合1次元の量子力学のHamiltonianと同じ形をしている。 $L(t), B(t)$によって、KdV方程式(@equation-0e5e42e46f)は

$$
\begin{aligned}
\frac{\mathrm{d} L}{\mathrm{d} t} = [B(t), L(t)]
\end{aligned}\tag{equation-b75f31fbba}
$$

 と書き換えられる。これをLax方程式と呼ぶ。また与えられた方程式を(@equation-b75f31fbba)のように表すことをLax表示という。 Lax表示はKdV方程式に特有のものではなく、多くの可積分系に対するLax表示が知られている。

KdV方程式とLax方程式(@equation-b75f31fbba)が同値であることを証明しよう。 (@equation-b75f31fbba)の左辺は

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
    = [-4\partial^3 + 6u\partial + 3u_x, -\partial^2 + u]
\end{aligned}
$$

$$
\begin{aligned}
&
    = -4(u_{xxx} + \cancel{3u_{xx}\partial} + \bcancel{3u_x\partial^2})+ 6uu_x
\end{aligned}
$$

$$
\begin{aligned}
&\quad
    + 6(\cancel{u_{xx}\partial} +\bcancel{ 2u_x\partial^2})
\end{aligned}
$$

$$
\begin{aligned}
&\quad
    + 3(u_{xxx} + \cancel{2u_{xx}\partial})
\end{aligned}
$$

$$
\begin{aligned}
&
    = 6uu_x - u_{xxx}
\end{aligned}
$$

 となる。両辺を等号で結ぶことでKdV方程式を得る。Lax方程式は演算子の等式であったが、両辺が微分演算子$\partial$を含まないために、$u$に対する偏微分方程式とみなせる。

Lax方程式(@equation-b75f31fbba)では、$B(t)$は時間発展の生成子となっている。するとLax方程式は Hamiltonian $L(t)$の$B(t)$による時間発展を考えていることになる。 ここで、$L(0)$を対角化して

$$
\begin{aligned}
L(0)\psi(x, 0) = \lambda \psi(x, 0)
\end{aligned}\tag{equation-7de551f92c}
$$

 と書く。$\psi(x, 0)$は$L(0)$の固有値$\lambda$の固有関数である。これを時間発展させてみよう。 $\psi(x, t)$の時間発展を記述する方程式として、

$$
\begin{aligned}
\psi(x, t) = U(t)\psi(x, 0),\quad
    \frac{\mathrm{d} U(t)}{\mathrm{d} t} = B(t)U(t),\quad
    U(0) = I
\end{aligned}\tag{equation-c5292b67c8}
$$

 を課す。$I$ は恒等演算子である。以下のノルムの計算では $u$ は実数値とし、$u,\psi$ と必要な微分は滑らかで急減衰し、積分と時間微分を交換できるとする。部分積分により
$$
\frac{d}{dt}\int_{\mathbb R}|\psi(x,t)|^2dx
=2\operatorname{Re}\int_{\mathbb R}\overline\psi\,B\psi\,dx=0
$$
となる。従ってこの時間発展は波動関数のノルムを保つ。次に Lax 方程式を使い、$\psi(x,t)$ が $L(t)$ の固有関数でもあることを示そう。

(@equation-7de551f92c)の両辺に左から$U(t)$を掛けると、

$$
\begin{aligned}
U(t)L(0)U(t)^{-1}\psi(x,t) = \lambda \psi(x,t).
\end{aligned}\tag{equation-330d5d4785}
$$

 となる。ここで、$U(t)L(0)U(t)^{-1}$を時間微分する。 $U(t)U(t)^{-1} = I$を時間微分すると

$$
\begin{aligned}
\frac{\mathrm{d}}{\mathrm{d} t}U(t)^{-1} = - U(t)^{-1}B(t)
\end{aligned}\tag{equation-efb1ce1c1d}
$$

 が分かるので、

$$
\begin{aligned}
\frac{\mathrm{d}}{\mathrm{d} t}\left(U(t)L(0)U(t)^{-1}\right) = [B(t), U(t)L(0)U(t)^{-1}]
\end{aligned}\tag{equation-ddc22d336a}
$$

 となる。これはLax方程式なので、初期条件$U(0)L(0)U(0)^{-1} = L(0)$から、

$$
\begin{aligned}
U(t)L(0)U(t)^{-1} = L(t)
\end{aligned}\tag{equation-b2bc328c22}
$$

 となる。この両辺を$\psi(x,t)$に作用させて、

$$
\begin{aligned}
L(t)\psi(x, t) = \lambda \psi(x, t)
\end{aligned}\tag{equation-addf34bd26}
$$

 となる。 すなわち、$B(t)$によって時間発展する波動関数$\psi(x, t)$は、任意の時刻で$L(t)$の固有関数である。 さらに、$\psi(x,t)$に対する$L(t)$の固有値は常に$\lambda$で時間に依存しない。 [^src-3-1]

[^src-3-1]: 逆に$L(t)$の固有値が時間変化しない条件としてLax方程式を導ける。

### 2.3. 逆散乱法

Lax方程式が$L(t) = -\partial^2 + u$の等スペクトル条件を意味することを見た。これを利用して、KdV方程式を量子力学における散乱の逆問題に置き換えることができる。この解法を逆散乱法と呼ぶ。

逆散乱法では、まず散乱データと呼ばれる量を求める。これはポテンシャル$u(x, t)$に対するスペクトルと、束縛解・散乱解の遠方での漸近的な振る舞いをまとめたものである。 実は$t = 0$での散乱データが分かれば、任意の$t$での散乱データは簡単に分かってしまう。スペクトルに関しては、これが時間変化しないことから明らかだろう。

散乱データからポテンシャル$u(x, t)$を復元するのは散乱の逆問題と呼ばれ、Gel'fand-Levitan-Marchenko方程式という積分方程式によって解かれる。求まった$u(x, t)$がKdV方程式の解となる。

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

## 3. 散乱の逆問題

<div data-chapter-slot="glm"></div>

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

## 4. おまけ: 無限個の保存量の存在

### 4.1. 高次KdV方程式

前節までの KdV 方程式は、
$$
L=-\partial_x^2+u(x,t),\qquad
L_t=[B_3,L],\qquad
B_3=-4\partial_x^3+6u\partial_x+3u_x
$$
という Lax 方程式で表された。ここで交換子は $[A,C]=AC-CA$ である。右辺の交換子を計算すると $L_t$ は掛け算演算子となり、$u$ の時間発展方程式が得られる。この節では、$B_3$ を含む無限個の時間発展をひとつの演算子から作り、それぞれに保存量があることを示す。

演算子の積では、係数関数と微分が可換ではない。たとえば
$$
\partial_x \alpha=\alpha\partial_x+\alpha_x
$$
である。$L$ の平方根を微分の冪で表すには負の冪も必要になるため、それらを含む形式的な演算子を用意する。以後 $\partial=\partial_x$ と書き、擬微分演算子を
$$
A=\sum_{j=-\infty}^{m}\alpha_j(x,t)\partial^j
$$
の形の形式級数として扱う。次数には上限 $m$ があり、積は一般化 Leibniz 則
$$
\partial^m\alpha=\sum_{j\ge0}\binom{m}{j}\bigl(\partial_x^j\alpha\bigr)\partial^{m-j},\qquad
\binom{m}{j}=\frac{m(m-1)\cdots(m-j+1)}{j!},\quad \binom m0=1
$$
で定める。たとえば $\partial^{-1}\alpha=\alpha\partial^{-1}-\alpha_x\partial^{-2}+\alpha_{xx}\partial^{-3}-\cdots$ となる。負冪はこの形式積の記号であり、ここでは関数へ作用する積分演算子として解釈しない。

微分作用素 $-L=\partial^2-u$ の平方根を、最高次項が $\partial$ となる形式級数 $P$ として取る。
$$
P=(-L)^{1/2}=\partial-\frac{u}{2}\partial^{-1}+\frac{u_x}{4}\partial^{-2}+\cdots,
\qquad P^2=-L.
\tag{equation-0c81f024ea}
$$
この展開は $P^2=-L$ の各冪の係数を順に比較して決まる。たとえば $\partial\,\alpha=\alpha\partial+\alpha_x$ を使うと、$\partial^0$ の係数から $P$ の $\partial^{-1}$ の係数が $-u/2$、$\partial^{-1}$ の係数から $\partial^{-2}$ の係数が $u_x/4$ と定まる。以後も同様に、すでに決まった高い冪の係数を使って次の係数を一つずつ決める。

$P$ の奇数乗は $P^2=-L$ と可換である。擬微分演算子 $A$ を $A=A_{\ge0}+A_{<0}$ と分け、$A_{\ge0}$ を非負の冪 $\partial^j$（$j\ge0$）だけからなる部分とする。そこで
$$
B_{2n+1}=(-4)^n\bigl(P^{2n+1}\bigr)_{\ge0},\qquad n=0,1,2,\ldots
\tag{equation-d0499023f2}
$$
と定める。特に、展開で $P^3$ の非負冪を集めると
$$
(P^3)_{\ge0}=\partial^3-\frac32u\partial-\frac34u_x,
\qquad
B_3=-4\partial^3+6u\partial+3u_x,
\tag{equation-bc6b0d053d}
$$
となり、これは先に使った Lax 演算子と一致する。

$P^{2n+1}$ 全体は $L$ と可換なので、$B_{2n+1}$ と $L$ の交換子は負冪部分 $\bigl(P^{2n+1}\bigr)_{<0}$ との交換子だけで決まる。
$$
[L,B_{2n+1}]=-(-4)^n\left[L,\bigl(P^{2n+1}\bigr)_{<0}\right].
\tag{equation-79158a38b3}
$$
負冪部分の最高次数は $\partial^{-1}$ である。$L=-\partial^2+u$ と負冪項の交換子では、たとえば $[-\partial^2,\alpha\partial^{-1}]=-2\alpha_x-\alpha_{xx}\partial^{-1}$ のように最高次項が相殺し、次数は $0$ 以下となる。一方、左辺は微分作用素なので負の冪を含まない。両辺が一致するには次数 $0$ の項だけが残るため、交換子は掛け算演算子となる。したがって各 $B_{2n+1}$ は $L$ との Lax 方程式
$$
\frac{\partial L}{\partial t_{2n+1}}=[B_{2n+1},L]
\tag{equation-aaef1d653d}
$$
を与える。$n=1$ が通常の KdV 方程式であり、より高い $n$ は空間微分の階数がより高い方程式を与える。$t_{2n+1}$ はそれぞれの発展に割り当てた時間変数である。これらをまとめて KdV 階層と呼ぶ。

### 4.2. 擬微分演算子と留数

保存量を取り出すため、擬微分演算子 $A=\sum_j \alpha_j\partial^j$ の留数を、$\partial^{-1}$ の係数
$$
\operatorname{res}_{\partial}A=\alpha_{-1}
\tag{equation-e996f45051}
$$
と定義する。非負冪への射影 $(A)_{\ge0}$ は $\partial^0,\partial^1,\ldots$ の項を残し、留数は負冪のうち $\partial^{-1}$ の係数だけを選ぶ。この二つの取り出し方を区別しておく。

平方根 $P$ の奇数乗から次の関数を定める。
$$
R_n(x,t)=\operatorname{res}_{\partial}P^{2n-1},\qquad n=1,2,\ldots
\tag{equation-5cadc6fb79}
$$
たとえば $P$ の $\partial^{-1}$ 係数から $R_1=-u/2$ を得る。各 $R_n$ は $u$ とその空間微分だけで書ける局所密度であり、その空間積分が保存量の候補となる。

### 4.3. 留数の時間変化は全微分

通常の KdV 時間 $t=t_3$ を考える。Lax 方程式 $L_t=[B_3,L]$ と $P^2=-L$ に対応する平方根の発展は
$$
P_t=[B_3,P].
\tag{equation-ad35198100}
$$
実際、$P^2=-L$ を時間微分すると $P_tP+PP_t=-L_t$ となる。一方、$L_t=[B_3,L]$ から $[B_3,P]P+P[B_3,P]=-L_t$ である。両式の差を取ると
$$
\bigl(P_t-[B_3,P]\bigr)P+P\bigl(P_t-[B_3,P]\bigr)=0.
$$
差 $P_t-[B_3,P]$ が非零であれば、その最高次項と $P$ の最高次項 $\partial$ との積は、上式の左辺の最高次に非零の係数の2倍を与える。これは左辺がゼロであることに反する。したがって $P_t-[B_3,P]=0$、すなわち式 (@equation-ad35198100) が得られる。この関係を積の微分則へ適用すると、各正整数 $n$ について
$$
\frac{\partial}{\partial t}P^{2n-1}=[B_3,P^{2n-1}],
\qquad
\frac{\partial R_n}{\partial t}=\operatorname{res}_{\partial}[B_3,P^{2n-1}].
\tag{equation-43b9d72cd5}
$$
よって残るのは、擬微分演算子の交換子を取ったとき、その $\partial^{-1}$ 係数が $x$ の全微分になることの確認である。

この確認では演算子全体を展開する必要はない。二つの単項式 $\alpha\partial^m$ と $\beta\partial^n$ を取り、積の中から留数に寄与する項だけを拾う。一般化 Leibniz 則で $\partial^m\beta$ を展開すると、$\partial^{m+n-r}$ の項が現れる。これが $\partial^{-1}$ になるには $r=m+n+1$ でなければならない。$r<0$ なら微分回数が負となるので寄与はなく、$r=0$ なら係数は $\alpha\beta-\beta\alpha=0$ で相殺する。したがって $r\ge1$ の場合だけを調べればよい。

補足では、この単項式計算を一般化二項係数で進め、寄与が明示的な全微分であることを示す。有限和に戻せるため、$B_3$ と $P^{2n-1}$ の級数では各次数ごとに適用でき、留数全体も全微分となる。よってある局所関数 $J_n(x,t)$ が存在して
$$
\frac{\partial R_n}{\partial t}=\frac{\partial J_n}{\partial x}.
\tag{equation-fd877994c9}
$$
$u$ とその導関数が $x\to\pm\infty$ で十分速く減衰すれば $J_n$ の境界値の差は消える。したがって
$$
I_n(t)=\int_{-\infty}^{\infty}R_n(x,t)\,dx
\tag{equation-863a6af854}
$$
は時間に依存しない。すべての $n\ge1$ でこの議論が成り立つため、KdV 方程式には無限個の保存量がある。

<details id="residue-commutator">
<summary>単項式の交換子の留数が全微分になる計算</summary>

一般化二項係数を $\binom{q}{r}=q(q-1)\cdots(q-r+1)/r!$（$r\ge1$）、$\binom{q}{0}=1$ と定める。整数 $q$ に対し負の $q$ でもこの定義を使うと
$$
\partial^q\beta=\sum_{r\ge0}\binom{q}{r}\beta^{(r)}\partial^{q-r}
$$
は擬微分演算子の形式積の Leibniz 則である。ここで $\beta^{(r)}=\partial_x^r\beta$ とし、和は形式級数として扱う。

単項式 $\alpha\partial^m$ と $\beta\partial^n$ の交換子の留数を計算する。$r=m+n+1$ とおく。$r<0$ では $\partial^{-1}$ を作る項がなく、$r=0$ では交換子の係数は $\alpha\beta-\beta\alpha=0$ である。$r\ge1$ なら
$$
\operatorname{res}_{\partial}[\alpha\partial^m,\beta\partial^n]
=\binom{m}{r}\alpha\beta^{(r)}-\binom{n}{r}\beta\alpha^{(r)}.
\tag{equation-650e054d38}
$$
このとき $n=r-m-1$ なので、積の定義から $\binom{n}{r}=(-1)^r\binom{m}{r}$ となる。実際、$n(n-1)\cdots(n-r+1)$ の因子は $r-m-1,r-m-2,\ldots,-m$ で、これは $(-1)^r m(m-1)\cdots(m-r+1)$ と同じ積である。したがって
$$
\operatorname{res}_{\partial}[\alpha\partial^m,\beta\partial^n]
=\binom{m}{r}\left(\alpha\beta^{(r)}-(-1)^r\alpha^{(r)}\beta\right).
\tag{equation-c63ea5600f}
$$
一方、積の微分を展開すると中間項が隣り合って相殺し、
$$
\frac{\partial}{\partial x}\left(\sum_{j=0}^{r-1}(-1)^j\alpha^{(j)}\beta^{(r-1-j)}\right)
=\alpha\beta^{(r)}-(-1)^r\alpha^{(r)}\beta.
\tag{equation-31ec2c9789}
$$
したがって (@equation-c63ea5600f) は全微分である。$r=0$ の場合は対応する和を空和と見れば微分は $0$ となり、先の直接計算と一致する。$r<0$ では寄与も和もない。

一般の擬微分演算子は単項式の和である。各固定された次数で留数に寄与する単項式の組は有限個なので、この結果を項ごとに足せる。これを (@equation-43b9d72cd5) に適用すれば (@equation-fd877994c9) が従う。この形式計算については [Batlle, §2.1 の命題2.6・2.8および §2.2](https://web.mat.upc.edu/carles.batlle/fitxers/kdv.pdf) も参照できる。

</details>

## 参考文献

[1] 中村佳正, 高崎金久, & 辻本諭. (2018). 可積分系の数理 (解析学百科 2). 朝倉書店.

[2] 及川正行. (2013). 第 5 章 逆散乱法. ながれ: 日本流体力学会誌, 32(@schrodinger), 39-53.

[3] Miura, R. M., Gardner, C. S., & Kruskal, M. D. (1968). Korteweg-de vries equation and generalizations. II. Existence of conservation laws and constants of motion. Journal of Mathematical physics, 9(@kernel-feedback), 1204-1209.
