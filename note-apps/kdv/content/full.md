## 1. 導入

KdV 方程式は、浅い水域を進む長い水面波のモデルとして現れる。静止時の水面からの変位を上向き正に測り、無次元化したものを $\eta(x,t)$ と書く。空間と時間も無次元化すると、方程式は
$$
\eta_t+6\eta\eta_x+\eta_{xxx}=0
\tag{equation-4fefabb2db}
$$
と書ける。$\eta=0$ は基準の水面の高さ、$\eta>0$ は水面の盛り上がりを表す。[^wave-scaling] 本ノートでは流体力学から方程式を導くことには立ち入らず、その解の形と運動を調べる。

[^wave-scaling]: 浅水波の方程式からこの形にする際は、線形波の速さで動く座標を使う。以下の速度は、この座標で測った速度である。

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


二つのソリトンが衝突する解も書ける。速度 $v_1>v_2>0$ と位置を指定する実定数 $x_1,x_2$ を用い、$\theta_j=\frac{\sqrt{v_j}}{2}(x-v_jt-x_j)$（$j=1,2$）と置くと、
$$
\begin{gathered}
\eta(x,t)=2\partial_x^2\log\Bigl[\\
1+e^{2\theta_1}+e^{2\theta_2}\\
+\left(\frac{\sqrt{v_1}-\sqrt{v_2}}{\sqrt{v_1}+\sqrt{v_2}}\right)^2e^{2(\theta_1+\theta_2)}
\Bigr].
\end{gathered}
\tag{equation-5083fcf451}
$$

この式を KdV 方程式に代入すれば、確かに解だと確認できる。けれども、式を眺めても、なぜ非線形な相互作用を経て二つの波の形と速さが保たれるのかは、まだわからない。個々の解を書き下すことから、それらに共通する構造へ目を向けよう。波形が変化する間、何が保たれているのだろうか。

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

 を課す。$I$ は恒等演算子である。Lax 方程式を使い、$\psi(x,t)$ が $L(t)$ の固有関数でもあることを示そう。

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

固有値保存に加えて、$U(t)$ はユニタリなので波動関数のノルムも保つ。このユニタリ性は、発展方程式 $\mathrm{d}U/\mathrm{d}t=B(t)U(t)$ の生成子 $B$ が反エルミートであることから従う。以下で $B^\dagger=-B$ を示す。

ここでは実数値の $u$ と、滑らかで無限遠で急減衰する関数を考える。部分積分で境界項が消えるため $\partial^\dagger=-\partial$ であり、$u$ による掛け算は自己随伴である。

反エルミート性は、$u\partial$ と $\partial u$ を対にした形に直すと見える。積の微分則 $\partial u=u\partial+u_x$ で $B$ を書き直し、積の随伴では順序を逆にすると、
$$
\begin{aligned}
B&=-4\partial^3+3(u\partial+\partial u),\\
B^\dagger&=4\partial^3-3(\partial u+u\partial)=-B.
\end{aligned}
$$

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
この左端振幅 $c_n(t)$ が、束縛状態の規格化定数である。

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

次の図は、時刻を固定したポテンシャル $u(x)=-\operatorname{sech}^2x$ の例である。散乱状態では波数を変え、$a,b$ と遠方の波形を比べられる。束縛状態へ切り替えると、規格化された波形と左端の尾、および固有値を表示する。

<div data-extra-visual="scattering-intro"></div>

<details>
<summary>図の波形と計算方法</summary>

散乱波は Schrödinger 方程式を数値積分し、左からの入射振幅が1になるよう規格化した。区間 $[-12,12]$ の右端で自由波の値と微分を与え、刻み幅 $0.005$ の4次 Runge–Kutta 法で積分している。両端では $|u|<1.6\times10^{-10}$ である。

束縛状態は、このポテンシャルに対する
$$
\kappa_1=\frac{\sqrt5-1}{2},\qquad
\psi_1(x)=\frac{\operatorname{sech}^{\kappa_1}x}
{\left[\int_{\mathbb R}\operatorname{sech}^{2\kappa_1}z\,dz\right]^{1/2}}
$$
を描いた。$\kappa_1(\kappa_1+1)=1$ より、Schrödinger 方程式への代入で固有値 $-\kappa_1^2$ が確認できる。$\operatorname{sech}x\sim2e^x$（$x\to-\infty$）なので、左端の規格化定数は $c_1=2^{\kappa_1}\psi_1(0)$ である。

</details>

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


### 2.5. 散乱データとソリトンの運動

散乱データの時間発展が求まったので、逆散乱問題を解けば $u(x,t)$ が求まる。具体的な計算に入る前に、一つのポテンシャルが、異なる速度で移動する複数のソリトンへ分裂していく様子を、束縛状態の動きから感覚的に理解しておこう。

初期状態の左端と右端の尾の係数を、それぞれ $c_n(0)$、$\tilde c_n(0)$ と書くと、
$$
\psi_n(x,t)\sim
\begin{cases}
c_n(0)e^{\kappa_n(x-4\kappa_n^2t)},&x\to-\infty,\\[2pt]
\tilde c_n(0)e^{-\kappa_n(x-4\kappa_n^2t)},&x\to+\infty
\end{cases}
\tag{equation-168dfc401b}
$$
となる。左右の尾は、どちらも速度 $4\kappa_n^2$ で右へ移動する。十分に遠方の尾が担うノルムは小さく、ほぼ全てのノルムはその間の主要部分にある。ノルムを $1$ に保つには、この主要部分も両側の尾とともに移動しなければならない。

複数の束縛状態がある場合、それぞれの速度 $4\kappa_n^2$ は異なる。それでも、別々の速度で移動する $\psi_n(x,t)$ は、どの時刻でも全て同じポテンシャル $u(x,t)$ の固有状態でなければならない。一つの $u(x,t)$ が、異なる場所へ離れていく束縛状態を、それぞれの場所で局在させなければならないのである。このため、ポテンシャルも各束縛状態の移動に伴って複数の谷へ分裂していく。この移動する谷が、$u$ で表したソリトンである。

下図では、初めに中心をそろえた三つの束縛状態と、それらに共通するポテンシャルの時間発展を計算した。再生すると、束縛状態が異なる場所へ移動し、それに伴ってポテンシャルが三つの谷に分かれていく様子を確かめられる。

<div data-extra-visual="bound-states"></div>


$N$-ソリトン解は、反射係数が $b(k,t)=0$ となる無反射ポテンシャルから得られる。以下ではまず一般の散乱データから復元方程式を導き、その後で無反射の場合を具体的に解く。

## 3. 散乱の逆問題

<div data-chapter-slot="glm"></div>

### 3.4. 無反射の場合のGLM方程式の行列表示

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

### 3.5. 多ソリトン解の行列式表示

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

## 4. KdV階層と無限個の保存量

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

$L=-\partial^2+u$ の時間変化は、掛け算演算子 $u_t$ である。したがって、新しい時間発展を Lax 方程式で作るには、交換子 $[B,L]$ に微分演算子が残らないような $B$ が必要になる。

$P$ の奇数乗は $L=-P^2$ と可換なので、そのまま $B$ にしても $L_t=0$ にしかならない。ところが、奇数乗の非負冪だけを残すと、その部分と $L$ の交換子は掛け算演算子になる。この性質を使って時間発展を作る。

$A_{\ge0}$ を $A$ の非負の冪 $\partial^j$（$j\ge0$）からなる部分、$A_{<0}$ を残りの負冪部分と書き、
$$
B_{2n+1}=(-4)^n\bigl(P^{2n+1}\bigr)_{\ge0},\qquad n=0,1,2,\ldots
\tag{equation-d0499023f2}
$$
と定める。まず $n=1$ で、先に使った $B_3$ が得られることを確認し、続いて交換子に微分演算子が残らない理由を示そう。展開で $P^3$ の非負冪を集めると
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

### 4.2. $P$ の冪の時間発展

通常の KdV 時間 $t=t_3$ を考える。前節で作った $P$ から保存量を探すため、まず $P$ とその冪の時間変化を求めよう。一つの発展則でこれらを追えれば、個々の式を展開せずに、無限個の量をまとめて調べられる。

$P^2=-L$ を時間微分すると
$$
P_tP+PP_t=-L_t
$$
である。一方、Lax 方程式 $L_t=[B_3,L]$ と $P^2=-L$ から
$$
[B_3,P]P+P[B_3,P]=[B_3,P^2]=-L_t
$$
となる。両式の差を取れば
$$
\bigl(P_t-[B_3,P]\bigr)P+P\bigl(P_t-[B_3,P]\bigr)=0.
$$
$P$ の最高次項は $\partial$ なので、差 $P_t-[B_3,P]$ が非零なら、左辺の最高次項はその係数の2倍となり、消えない。したがって
$$
P_t=[B_3,P].
\tag{equation-ad35198100}
$$
積の微分則を使うと、各正整数 $n$ の奇数乗についても
$$
\frac{\partial}{\partial t}P^{2n-1}=[B_3,P^{2n-1}]
\tag{odd-power-evolution}
$$
が得られる。

### 4.3. 留数による保存量の構成

これで、各奇数乗の時間変化は交換子として書けた。保存量を得るには、ここから時間微分が $x$ の全微分になる量を取り出せばよい。空間積分すると、境界項だけが残るからである。

ここで役立つのが、擬微分演算子の交換子では、$\partial^{-1}$ の係数が $x$ の全微分になるという性質である。この係数を取り出す操作を
$$
A=\sum_j\alpha_j\partial^j,\qquad
\operatorname{res}_{\partial}A=\alpha_{-1}
\tag{equation-e996f45051}
$$
と書き、$A$ の留数と呼ぶ。すると、既に求めた発展則 (@odd-power-evolution) から
$$
\frac{\partial}{\partial t}\operatorname{res}_{\partial}P^{2n-1}
=\operatorname{res}_{\partial}[B_3,P^{2n-1}].
\tag{equation-43b9d72cd5}
$$
右辺が全微分になることを、以下で確かめよう。

この確認では演算子全体を展開する必要はない。二つの単項式 $\alpha\partial^m$ と $\beta\partial^n$ を取り、積の中から留数に寄与する項だけを拾う。一般化 Leibniz 則で $\partial^m\beta$ を展開すると、$\partial^{m+n-r}$ の項が現れる。これが $\partial^{-1}$ になるには $r=m+n+1$ でなければならない。$r<0$ なら微分回数が負となるので寄与はなく、$r=0$ なら係数は $\alpha\beta-\beta\alpha=0$ で相殺する。したがって $r\ge1$ の場合だけを調べればよい。

留数に寄与する項は有限個なので、$B_3$ と $P^{2n-1}$ の級数にも項ごとに適用でき、留数全体も全微分となる。

そこで、この留数を
$$
R_n(x,t)=\operatorname{res}_{\partial}P^{2n-1},\qquad n=1,2,\ldots
\tag{equation-5cadc6fb79}
$$
と書く。たとえば $P$ の $\partial^{-1}$ 係数から $R_1=-u/2$ を得る。各 $R_n$ は $u$ とその空間微分だけで書ける。式 (@equation-43b9d72cd5) の右辺が全微分になることから、ある局所関数 $J_n(x,t)$ が存在して
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
<summary>交換子の留数と全微分</summary>

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
