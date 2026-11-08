## 1. 導入

KdV 方程式は、浅い水域を進む長い水面波のモデルとして現れる。静止時の水面からの変位を上向き正に測り、無次元化したものを $\eta(x,t)$ と書く。空間軸の向きと時間の尺度を選ぶと、方程式は
$$
\eta_t=\frac{\eta_{xxx}+6\eta\eta_x}{4}
\tag{equation-4fefabb2db}
$$
と書ける。$\eta=0$ は基準の水面の高さ、$\eta>0$ は水面の盛り上がりを表す。[^wave-scaling]

[^wave-scaling]: 浅水波の方程式からこの形にする際は、線形波の速さで動く座標を使い、その進行方向と逆向きを $x$ の正方向に取る。以下の速度は、この座標で測った速度である。

この方程式には、形を保ったまま一定の速度で進む、局在した波の解がある。このような波をソリトンと呼ぶ。速さの異なる二つのソリトンを衝突させると、重なっている間には波形が大きく変わる。それでも、十分に離れた後には、それぞれが衝突前と同じ形と速さで進んでいく。位置にはずれが残るものの、二つの波は再び見分けられるようになる。

<div data-extra-visual="collision"></div>

さらに不思議なことに、初期状態をソリトンの重ね合わせにしなくとも、時間発展させれば勝手にソリトンに分かれてしまうという現象が広く見られる。 つまり、ソリトンというのはKdV方程式の解の中でありふれた構造であり、その裏に何かありそうである。

<div data-extra-visual="breakup"></div>

またKdV方程式は他の多くの非線形偏微分方程式と違って、初期値問題を厳密に解く方法が存在するという著しい特徴をもっている。 この解法は逆散乱法と呼ばれていて、その鍵は非線形な方程式の裏に隠れた線形な問題を見抜くことにある。 KdV方程式の場合、裏に隠れているのは量子力学でもお馴染みのSchrödinger方程式である。 水面波の問題を考えていたのに量子力学が現れてくる、というのはなんだか素敵ではないだろうか。

本ノートの目的は、KdV という具体例を通して、可積分系に共通する構造を理解することである。KdV 方程式のソリトンや厳密な解法が、どのような構造に支えられているのかを、具体的な計算をしながら学んでいく。

ソリトン解を求めるところから、KdV 階層や KP 階層、さらに量子 KdV や共形場理論（CFT）へと、KdV からつながる話題をたどる。その過程で必要になる考え方や道具も、そのつど取り上げる。

## 2. ソリトンと等スペクトル変形

### 2.1. 1ソリトン解と2ソリトン解

一つの波が形を保って進むとき、その波形はどのように決まるのだろうか。まず、形を保って速度 $v<0$ で移動する進行波 $\eta(x,t)=\eta(x-vt,0)$ を求めよう。この小節のプライムは、時刻0の波形 $\eta(x,0)$ の $x$ 微分を表す。KdV 方程式に代入すると
$$
\eta'''=-4v\eta'-6\eta\eta'.
\tag{equation-c1de586e9e}
$$
$\eta,\eta',\eta''$ が両端で0に減衰すると仮定し、無限遠での値を使って積分すると
$$
\eta''=-4v\eta-3\eta^2.
\tag{equation-f9f013bed9}
$$
さらに $2\eta'$ を掛けると、両辺が全微分になる。
$$
\frac{d}{dx}(\eta')^2=\frac{d}{dx}(-4v\eta^2-2\eta^3).
\tag{equation-cfca48d936}
$$
もう一度無限遠の境界条件を使って積分すれば
$$
(\eta')^2=-4v\eta^2-2\eta^3.
\tag{equation-b9960a89fd}
$$
この方程式には次の局在した波形がある。
$$
\eta(x,0)=-2v\operatorname{sech}^2\!\left(\sqrt{-v}\,x\right).
\tag{equation-cd51ce0162}
$$
ここで $\operatorname{sech}x=1/\cosh x$ である。[^soliton-check] 中心の初期位置を $x_0$ とすると、時刻 $t$ の波形は $x$ を $x-vt-x_0$ に置き換えて得られる。振幅は $-2v$、幅の尺度は $1/\sqrt{-v}$ なので、高い波ほど負の $x$ 方向へ速く進み、幅は狭くなる。

[^soliton-check]: 式 (@equation-cd51ce0162) を微分すると

    $$
    \eta'(x,0)=4v\sqrt{-v}\operatorname{sech}^2\!\left(\sqrt{-v}\,x\right)\tanh\!\left(\sqrt{-v}\,x\right).
    \tag{equation-7747abb85e}
    $$

    従って $\tanh^2=1-\operatorname{sech}^2$ より

    $$
    (\eta')^2=-16v^3\operatorname{sech}^4\!\left(\sqrt{-v}\,x\right)\left[1-\operatorname{sech}^2\!\left(\sqrt{-v}\,x\right)\right]=-4v\eta^2-2\eta^3.
    \tag{equation-d0224c59e1}
    $$

<div data-extra-visual="traveling"></div>


二つのソリトンが衝突する解も書ける。速度 $v_1<v_2<0$（$|v_1|>|v_2|$）と位置を指定する実定数 $x_1,x_2$ を用い、移動座標 $\xi_j=\sqrt{-v_j}(x-v_jt-x_j)$（$j=1,2$）と置くと、
$$
\eta(x,t)=2\partial_x^2\log\Bigl[1+e^{2\xi_1}+e^{2\xi_2}
+\left(\frac{\sqrt{-v_1}-\sqrt{-v_2}}{\sqrt{-v_1}+\sqrt{-v_2}}\right)^2e^{2(\xi_1+\xi_2)}\Bigr].
\tag{equation-5083fcf451}
$$

この式を KdV 方程式に代入すれば、確かに解だと確認できる。けれども、式を眺めても、なぜ非線形な相互作用を経て二つの波の形と速さが保たれるのかは、まだわからない。個々の解を書き下すことから、それらに共通する構造へ目を向けよう。波形が変化する間、何が保たれているのだろうか。

### 2.2. Lax表示

ここで、一つの大きな発想の転換を導入する。KdV 方程式の未知関数を、Schrödinger 方程式のポテンシャルとして読み直してみよう。

まず $u=-\eta$ と置くと、KdV 方程式 (@equation-4fefabb2db) は
$$
u_t=\frac{u_{xxx}-6uu_x}{4}
\tag{equation-0e5e42e46f}
$$
となる。この $u(x,t)$ をポテンシャルとする Schrödinger 演算子
$$
L(t)=-\partial_x^2+u(x,t)
$$
を考える。

$u(x,t)$ が時間とともに変われば、それに応じて演算子 $L(t)$ も変わる。そこで、KdV 方程式を、この演算子の時間発展を表す方程式として書き直してみよう。

そのために、$L$ と組にする演算子 $B$ を次の形で与える。ここで $\partial$ は $x$ 微分、$u$ と $u_x$ はそれぞれの関数を掛ける演算子である。
$$
B(t)=\partial^3-\frac32u\partial-\frac34u_x.
\tag{equation-bec8ddf787}
$$
この組を Lax 対、$L$ を Lax 演算子と呼ぶ。この $B$ を使うと、KdV 方程式 (@equation-0e5e42e46f) は
$$
\frac{\mathrm{d}L}{\mathrm{d}t}=[B(t),L(t)]
\tag{equation-b75f31fbba}
$$
と書ける。これが Lax 方程式であり、$[B,L]=BL-LB$ は交換子である。実際、左辺は $u_t$、右辺は $(u_{xxx}-6uu_x)/4$ を掛ける演算子になるので、両者の等式が KdV 方程式そのものになる。

<div data-extra-visual="formal-commutator"></div>

次に、$L(t)$ の固有値問題
$$
L(t)\psi(x,t)=E\psi(x,t)
\tag{lax-schrodinger-problem}
$$
を考える。この $B$ は、固有関数のユニタリな時間発展の生成子にもなる。そのために必要な反エルミート性を確かめよう。ここでは $u$ は実数値で滑らかとし、部分積分する関数と必要な導関数は無限遠で急減衰するとする。境界項が消えるので $\partial^\dagger=-\partial$ であり、$u$ による掛け算は自己随伴である。積の微分則 $\partial u=u\partial+u_x$ を使うと、
$$
\begin{aligned}
B&=\partial^3-\frac34(u\partial+\partial u),\\
B^\dagger&=-\partial^3+\frac34(\partial u+u\partial)=-B.
\end{aligned}
$$
積の随伴では順序が逆になるため、$u\partial$ と $\partial u$ を対にした形から反エルミート性がわかる。

初期時刻の固有関数を
$$
L(0)\psi(x,0)=E\psi(x,0)
\tag{equation-7de551f92c}
$$
とし、$B(t)$ によって次のように発展させる。
$$
\psi(x,t)=U(t)\psi(x,0),\qquad
\frac{\mathrm{d}U(t)}{\mathrm{d}t}=B(t)U(t),\qquad U(0)=I.
\tag{equation-c5292b67c8}
$$
$I$ は恒等演算子である。$B^\dagger=-B$ なので $U(t)$ はユニタリであり、$\psi$ のノルムは保たれる。

Lax 方程式が意味するのは、この同じ $U(t)$ によって $L$ も
$$
U(t)L(0)U(t)^{-1}=L(t)
\tag{equation-b2bc328c22}
$$
と変化することである。両辺が同じ Lax 方程式と初期条件を満たすことから、この共役変換の式が確かめられる。

<details>
<summary>Verify the conjugation formula</summary>

$U(t)U(t)^{-1}=I$ を微分し、$U_t=BU$ を代入すると、
$$
\frac{\mathrm{d}}{\mathrm{d}t}U(t)^{-1}=-U(t)^{-1}B(t).
\tag{equation-efb1ce1c1d}
$$
従って、
$$
\frac{\mathrm{d}}{\mathrm{d}t}\left(U(t)L(0)U(t)^{-1}\right)
=[B(t),U(t)L(0)U(t)^{-1}].
\tag{equation-ddc22d336a}
$$
これは $L(t)$ の満たす Lax 方程式と同じであり、初期値も $U(0)L(0)U(0)^{-1}=L(0)$ と一致するので、式 (@equation-b2bc328c22) を得る。

</details>

この共役変換から、固有値保存が直接わかる。初期時刻の固有値方程式 (@equation-7de551f92c) に左から $U(t)$ を掛け、$\psi(x,0)=U(t)^{-1}\psi(x,t)$ を代入すると、
$$
U(t)L(0)U(t)^{-1}\psi(x,t)=E\psi(x,t).
\tag{equation-330d5d4785}
$$
共役変換の式 (@equation-b2bc328c22) を使えば、
$$
L(t)\psi(x,t)=E\psi(x,t).
\tag{equation-addf34bd26}
$$
すなわち、$B$ によって発展させた固有関数は、変化したポテンシャルのもとでも、同じ固有値 $E$ をもつ。非線形に変わる波形をこの Schrödinger 問題で捉えると、固有値は固定され、その間の変化は固有関数の発展に現れる。

### 2.3. 逆散乱法の概観

Lax方程式が$L(t) = -\partial^2 + u$の等スペクトル条件を意味することを見た。これを利用して、KdV方程式を量子力学における散乱の逆問題に置き換えることができる。この解法を逆散乱法と呼ぶ。

逆散乱法では、まず散乱データと呼ばれる量を求める。これはポテンシャル$u(x, t)$に対するスペクトルと、束縛解・散乱解の遠方での漸近的な振る舞いをまとめたものである。 スペクトルが時間変化しないことは前節で示した。残りの散乱データの時間変化は、次節で Lax 対の演算子 $B$ を使って求める。その結果、初期時刻の散乱データから各時刻の散乱データを計算できる。

散乱データからポテンシャル$u(x, t)$を復元するのは散乱の逆問題と呼ばれ、Gel'fand-Levitan-Marchenko方程式という積分方程式によって解かれる。求まった$u(x, t)$がKdV方程式の解となる。

### 2.4. 散乱データとその時間発展

以下では $u$ は実数値で滑らかとし、すべての導関数が両端で任意のべきより速く減衰すると仮定する。Schrödinger 方程式 $(-\partial_x^2+u(x,t))\psi(x,t)=E\psi(x,t)$ の束縛状態の互いに異なる固有値を $E_n=-\kappa_n^2$（$\kappa_n>0$、$n=1,\ldots,N$）とする。遠方では Schrödinger 方程式は自由方程式に近づく。この固有値に対する自由解は $e^{\pm\kappa_nx}$ であり、左端で減衰するのは $e^{\kappa_nx}$ である。

束縛状態を $L^2(\mathbb R)$ で規格化し、左端の漸近形が正の係数をもつよう位相を選ぶと
$$
\psi_n(x,t)\sim c_n(t)e^{\kappa_nx}\quad(x\to-\infty),\qquad c_n(t)>0.
\tag{equation-cdc8dfdf01}
$$
この係数 $c_n(t)$ を、束縛状態の規格化定数と呼ぶ。

<div data-extra-visual="bound-tail-intro"></div>

散乱状態では実数の波数 $k>0$ を用いて $E=k^2$ とし、左から入射する解を選ぶ。その遠方での形を
$$
\psi(x,t)\sim
\begin{cases}
e^{ikx}+b(k,t)e^{-ikx},&x\to-\infty,\\
a(k,t)e^{ikx},&x\to+\infty
\end{cases}
\tag{equation-4546e628e4}
$$
とする。$a$ は透過係数、$b$ は左反射係数である。$\kappa_n,c_n(t),a(k,t),b(k,t)$をまとめたものを散乱データと呼ぶ。

<div data-extra-visual="scattering-intro"></div>

遠方では $B(t)=\partial_x^3-\frac32u\partial_x-\frac34u_x$ の自由部分 $\partial_x^3$ が波の時間位相を決める。左端の束縛状態の尾 $e^{\kappa_nx}$ には $\kappa_n^3$ が掛かるので
$$
c_n(t)=e^{\kappa_n^3t}c_n(0).
\tag{equation-1f090a0648}
$$
散乱波 $e^{ikx}$、$e^{-ikx}$ の時間因子は、それぞれ $e^{-ik^3t}$、$e^{ik^3t}$ である。時刻0で入射係数を1とした解を $B$ によって時間発展させると、左端では
$$
e^{-ik^3t}e^{ikx}+b(k,0)e^{ik^3t}e^{-ikx},
$$
右端では
$$
a(k,0)e^{-ik^3t}e^{ikx}
$$
となる。入射係数を1に規格化すると、
$$
a(k,t)=a(k,0),\qquad b(k,t)=e^{2ik^3t}b(k,0).
\tag{equation-65c23b8d77}
$$
透過係数は一定であり、反射係数には時間に比例する位相が付く。

よって固有値と透過係数は一定であり、規格化定数 $c_n(t)$ と左反射係数は (@equation-1f090a0648)、(@equation-65c23b8d77) に従って変化する。


### 2.5. 束縛状態とソリトンの運動

散乱データの時間発展が求まったので、逆散乱問題を解けば $u(x,t)$ が求まる。具体的な計算に入る前に、一つのポテンシャルが、異なる速度で移動する複数のソリトンへ分裂していく様子を、束縛状態の動きから感覚的に理解しておこう。

初期状態の左端と右端の尾の係数を、それぞれ $c_n(0)$、$\tilde c_n(0)$ と書くと、
$$
\psi_n(x,t)\sim
\begin{cases}
c_n(0)e^{\kappa_n(x+\kappa_n^2t)},&x\to-\infty,\\[2pt]
\tilde c_n(0)e^{-\kappa_n(x+\kappa_n^2t)},&x\to+\infty
\end{cases}
\tag{equation-168dfc401b}
$$
となる。左右の尾は、どちらも速度 $-\kappa_n^2$ で左へ移動する。十分に遠方の尾が担うノルムは小さく、ほぼ全てのノルムはその間の主要部分にある。ノルムを $1$ に保つには、この主要部分も両側の尾とともに移動しなければならない。

複数の束縛状態がある場合、それぞれの速度 $-\kappa_n^2$ は異なる。それでも、別々の速度で移動する $\psi_n(x,t)$ は、どの時刻でも全て同じポテンシャル $u(x,t)$ の固有状態でなければならない。一つの $u(x,t)$ が、異なる場所へ離れていく束縛状態を、それぞれの場所で局在させなければならないのである。このため、ポテンシャルも各束縛状態の移動に伴って複数の谷へ分裂していく。この移動する谷が、$u$ で表したソリトンである。

下図では、初めに中心をそろえた三つの束縛状態と、それらに共通するポテンシャルの時間発展を計算した。再生すると、束縛状態が異なる場所へ移動し、それに伴ってポテンシャルが三つの谷に分かれていく様子を確かめられる。

<div data-extra-visual="bound-states"></div>


ここまでは束縛状態の動きからソリトンの分裂を説明してきたが、散乱データには反射係数 $b(k,t)$ もあった。反射係数の影響は、束縛状態を持たないポテンシャルのさざなみとして表れる。ソリトンだけからなる $N$-ソリトン解は、$b(k,t)=0$ となる無反射ポテンシャルに対して得られる。以下ではまず一般の散乱データから復元方程式を導き、その後で無反射の場合を具体的に解く。

## 3. 散乱の逆問題

<div data-chapter-slot="glm"></div>

<!-- kdv-reflectionless:start -->
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
<!-- kdv-reflectionless:end -->

## 4. KdV階層と保存量

### 4.1. 積分変換と擬微分作用素

§2.2 では、$B=\partial_x^3-\frac32u\partial_x-\frac34u_x$ を与え、その交換子が KdV 方程式を再現することを確かめた。しかし、なぜ $1,-3/2,-3/4$ という係数の組合せでうまくいくのだろうか。この章では、この組合せを前章の変換核 $K$ から導く。同じ構成を続けると、高階の発展則と無限個の保存量も得られ、KdV 方程式の背後に共通する構造が見えてくる。

前章で導入した作用素 $S$ は、自由波を左 Jost 解へ移す：
$$
f_-(x,k)=S e^{ikx}.
\tag{dressing-jost-recall}
$$
核の対角値から $u=2\frac{dK(x,x)}{dx}$ が復元され、$S$ と $L$ は式 (@dressing-intertwining) の $LS=S(-\partial_x^2)$ で結び付いている。

この関係を使った演算子の計算では、$S$ の積分部分も微分と共通の記法で表すと扱いやすい。$\partial=\partial_x$ と略記し、左端で十分速く消える関数 $g$ に対して
$$
(\partial^{-1}g)(x):=\int_{-\infty}^xg(y)\,dy
$$
と定める。$\partial^{-r}$ は、この積分を $r$ 回繰り返す作用である。

入力関数 $g$ に $\alpha$ を掛けてから積分すると、積分内では各点の値 $\alpha(y)$ が掛かる。一方、$g$ を積分してから $\alpha$ を掛けると、積分全体に上端の値 $\alpha(x)$ が掛かる。係数が位置によって変わると、この二つの操作は一致しない。

微分と積分を合わせた展開
$$
A=\sum_{j=-\infty}^{m}a_j(x)\partial^j
$$
を擬微分作用素と呼ぶ。各項 $a_j(x)\partial^j$ は、入力関数に $\partial^j$ を作用させてから、係数 $a_j(x)$ を掛ける演算子である。次数 $j$ には上限 $m$ を設ける。以下では、これらの展開を形式級数として係数ごとに計算する。

$S$ の積分表示を部分積分すると、左端の境界項が消える条件の下で
$$
(Sg)(x)=g(x)+K(x,x)(\partial^{-1}g)(x)
-\int_{-\infty}^xK_y(x,y)(\partial^{-1}g)(y)\,dy.
$$
これを繰り返して、$S$ の展開
$$
S=1+K(x,x)\partial^{-1}-(\partial_yK)(x,x)\partial^{-2}+\cdots
\tag{dressing-pdo}
$$
を得る。

積は、係数関数を左にそろえて計算する。たとえば、$\alpha g$ の積分を部分積分すると、
$$
\partial^{-1}(\alpha g)
=\alpha\,\partial^{-1}g
-\partial^{-1}(\alpha_x\,\partial^{-1}g).
$$
右辺の第二項が、積分区間内での係数の変化を補う。$\alpha$ が一定なら、この項は消える。同じ部分積分を繰り返すと、
$$
\partial^{-1}\alpha
=\alpha\partial^{-1}-\alpha_x\partial^{-2}
+\alpha_{xx}\partial^{-3}-\cdots.
$$
この式の両辺に左から $\partial^{-1}$ を作用させると、右辺の最初の三項からそれぞれ
$$
\begin{aligned}
\partial^{-1}(\alpha\partial^{-1})
&=\alpha\partial^{-2}-\alpha_x\partial^{-3}
+\alpha_{xx}\partial^{-4}-\cdots,\\
-\partial^{-1}(\alpha_x\partial^{-2})
&=-\alpha_x\partial^{-3}+\alpha_{xx}\partial^{-4}-\cdots,\\
\partial^{-1}(\alpha_{xx}\partial^{-3})
&=\alpha_{xx}\partial^{-4}-\cdots
\end{aligned}
$$
が生じる。同じ冪の項を足し合わせて、
$$
\partial^{-2}\alpha
=\alpha\partial^{-2}-2\alpha_x\partial^{-3}
+3\alpha_{xx}\partial^{-4}-\cdots.
$$
積分を重ねると、係数の変化による補正も重なっていく。一般の整数冪の積は、一般化 Leibniz 則
$$
\partial^m\alpha=\sum_{j\ge0}\binom{m}{j}(\partial_x^j\alpha)\partial^{m-j},\qquad
\binom{m}{j}=\frac{m(m-1)\cdots(m-j+1)}{j!},\quad \binom m0=1
$$
にまとめられる。

<details id="pdo-leibniz-derivation">
<summary>負の整数冪についての帰納法</summary>

$r\ge1$ に対して
$$
\partial^{-r}\alpha
=\sum_{j\ge0}(-1)^j\binom{r+j-1}{j}
\alpha^{(j)}\partial^{-(r+j)},\qquad
\alpha^{(j)}=\partial_x^j\alpha
$$
を示す。$r=1$ は本文で求めた式である。

$r$ 回の式の各項をもう一度積分する。$\alpha^{(n)}\partial^{-(r+n+1)}$ には、$j=0,\ldots,n$ の項からそれぞれ $n-j$ 回の微分が加わって寄与する。その係数を足すと、
$$
\begin{aligned}
\sum_{j=0}^n
(-1)^j\binom{r+j-1}{j}(-1)^{n-j}
&=(-1)^n\sum_{j=0}^n\binom{r+j-1}{j}\\
&=(-1)^n\binom{r+n}{n}.
\end{aligned}
$$
最後の等号には Pascal の関係を用いた。これは $r$ を $r+1$ に置き換えた係数なので、すべての $r\ge1$ で式が成り立つ。

二項係数の定義から $\binom{-r}{j}=(-1)^j\binom{r+j-1}{j}$ であり、$m=-r$ と書けば本文の一般化 Leibniz 則を得る。

</details>

式 (@dressing-intertwining) から $L$ を取り出すために、$S$ の逆を求める。
$$
S^{-1}=1-(S-1)+(S-1)^2-(S-1)^3+\cdots
$$
である。実際、右から $S=1+(S-1)$ を掛ければ隣り合う冪の項が打ち消し合い、$1$ が残る。$S-1$ の最高次数は $-1$ なので、$(S-1)^r$ の最高次数は $-r$ 以下であり、各固定次数の係数には有限個の項だけが寄与する。従って、これは係数ごとに計算できる形式級数の逆である。式 (@dressing-intertwining) の右からこの $S^{-1}$ を掛け、符号を反転すると
$$
-L=S\partial^2S^{-1}.
$$
ここで、後に $B$ を構成するため、$-L$ を一つの演算子の二乗として表す方法を導入する。

この右辺は、隣り合う $S^{-1}S$ が $1$ になることを使って
$$
S\partial^2S^{-1}=(S\partial S^{-1})(S\partial S^{-1})
$$
と二つの同じ因子に分けられる。この因子に $P$ と名前を付ける。
$$
P:=S\partial S^{-1}
\tag{dressed-derivative}
$$
すると
$$
P^2=-L
$$
であり、$P$ は $-L$ の形式平方根である。$S=1+$ 負冪部分なので、$P$ の最高次項は $\partial$ となる。

また、定義の右から $S$ を掛ければ、形式級数の積として
$$
PS=S\partial
$$
となる。図は、この積の関係を表している。

<div data-extra-visual="dressing"></div>

$P^2=-L=\partial^2-u$ の係数を比較すると
$$
P=(-L)^{1/2}=\partial-\frac{u}{2}\partial^{-1}+\frac{u_x}{4}\partial^{-2}+\cdots.
\tag{equation-0c81f024ea}
$$
となる。

<div data-extra-visual="formal-square-root"></div>


### 4.2. KdV階層

§2.2 で用いた演算子
$$
B=\partial^3-\frac32u\partial-\frac34u_x
$$
について、なぜこの係数の組合せで KdV 方程式を表せるのか、という問いに戻ろう。

Lax 方程式 $L_t=[B,L]$ の左辺は、$L=-\partial^2+u$ より $u_t$ を掛ける演算子である。一方、$B$ と $L$ はどちらも微分演算子だが、その交換子では微分項がすべて相殺し、
$$
[B,L]=\frac{u_{xxx}-6uu_x}{4}
$$
という掛け算演算子になる。そのため、演算子の等式 $L_t=[B,L]$ が、関数 $u$ についての KdV 方程式になる。

この相殺を生む係数は、実は前節の $P$ から組み立てられる。$B$ は三階の微分演算子であり、$P$ の先頭の項は一階微分 $\partial$ である。三階の項から比較するため、$P^3$ を展開する。

前節の $P=\partial-(u/2)\partial^{-1}+(u_x/4)\partial^{-2}+\cdots$ を用いると、
$$
P^3=\partial^3-\frac32u\partial-\frac34u_x+\text{（負冪の項）}.
$$
右辺の最初の三項は、上の $B$ に一致する。つまり、$P^3$ のうち $\partial^3,\partial^1,\partial^0$ の項を残すと、既知の KdV の演算子が得られる。

この部分を取り出す記法として、$A_{\ge0}$ を $A$ の非負の冪 $\partial^j$（$j\ge0$）からなる部分、$A_{<0}$ を残りの負冪部分と書く。すると、今の関係は
$$
B_3:=(P^3)_{\ge0}=\partial^3-\frac32u\partial-\frac34u_x=B
\tag{equation-bc6b0d053d}
$$
となる。$B_3$ は、既知の $B$ そのものである。

この三乗に対応する時間を $t_3$ と書けば、初めから用いてきた時間は $t=t_3$ である。既知の KdV 方程式は
$$
\frac{\partial L}{\partial t_3}=[B_3,L],\qquad
\frac{\partial u}{\partial t_3}=\frac{u_{xxx}-6uu_x}{4}
$$
となる。ここで $L=-\partial^2+u$である。

次に、$P^3$ を正負の冪に分けて、微分項が相殺する仕組みを確かめる。

$L=-P^2$ なので、$P^3$ 全体は $L$ と可換である。$P^3=B_3+(P^3)_{<0}$ と分けると、
$$
[L,B_3]=-[L,(P^3)_{<0}].
$$
左辺は微分演算子どうしの交換子なので、負の冪を含まない。一方、右辺は負冪部分との交換子である。たとえば、$L$ の二階微分と先頭の負冪項の交換子は
$$
[-\partial^2,\alpha\partial^{-1}]
=-2\alpha_x-\alpha_{xx}\partial^{-1}.
$$
両方の積に現れる $-\alpha\partial$ が相殺し、正の冪は残らない。より低い負冪との交換子の次数はさらに低く、$u$ との交換子にも正の冪は現れない。したがって右辺の次数は $0$ 以下である。

左辺には負の冪がなく、右辺には正の冪がない。両辺が等しいので、残るのは $\partial^0$、すなわち関数を掛ける項だけである。これが、$B_3$ と $L$ の交換子で微分項がすべて消える理由である。

この議論は三乗に限らない。どの $P^n$ も $L=-P^2$ と可換なので、正整数 $n$ に対して
$$
B_n=\bigl(P^n\bigr)_{\ge0},\qquad n=1,2,\ldots
\tag{equation-d0499023f2}
$$
と置けば、
$$
[L,B_n]=-[L,\bigl(P^n\bigr)_{<0}]
\tag{equation-79158a38b3}
$$
の両辺も、同じ理由で掛け算の項だけになる。各発展に割り当てる時間変数を $t_n$ と書けば、各 $B_n$ から
$$
\frac{\partial L}{\partial t_n}=[B_n,L]
\tag{equation-aaef1d653d}
$$
によって $u$ の発展方程式を定められる。左辺は $u_{t_n}$ を掛ける演算子である。

偶数 $n=2m$ では $P^{2m}=(-L)^m$ は負冪を含まないので、$B_{2m}=(-L)^m$ であり、$[B_{2m},L]=0$ となる。$n=1$ では $B_1=\partial$、$[\partial,L]=u_x$ なので、$u_{t_1}=u_x$ は空間の平行移動を表す。この流れの変数は $t_1=x$ と同一視する。奇数 $n\ge3$ が KdV 階層の非自明な発展を与え、$n=3$ が上で確かめた KdV 方程式である。

高次の KdV 方程式も、第2–3節と同じ逆散乱法で解ける。どの流れでも空間の散乱問題は $L=-\partial^2+u$ のままであり、散乱データから $u$ を復元する GLM 方程式は変わらない。変わるのは、散乱データの時間発展だけである。

奇数 $n\ge3$ の流れでは、無限遠で $B_n\to\partial^n$ となる。§2.4 と同じく、波の線形発展 $\partial_{t_n}\psi=B_n\psi$ を左右の平面波および束縛状態の $x\to-\infty$ での形 $\psi_j\sim c_j e^{\kappa_jx}$ と比較すれば、固有値と透過係数 $a$ は一定で、
$$
\begin{aligned}
b(k,t_n)&=b(k,0)e^{-2(ik)^n t_n},\\
c_j(t_n)&=c_j(0)e^{\kappa_j^n t_n}
\end{aligned}
\tag{hierarchy-scattering-evolution}
$$
を得る。特に、初めに反射がなければ、どの流れでも反射は生じない。

したがって、無反射の場合には §3.3 の指数関数を
$$
\theta_j(x,t_n)=\kappa_jx+\kappa_j^n t_n+\log c_j(0)
\tag{hierarchy-soliton-phase}
$$
に替え、同じ $C_{ij}=e^{\theta_i+\theta_j}/(\kappa_i+\kappa_j)$ と $u=-2\partial_x^2\log\det(I+C)$ を使えば、高次 KdV の $N$ ソリトン解が得られる。一ソリトンの $\operatorname{sech}^2$ 型の波形・振幅・幅は共通で、$t_n$ に対する速度は $-\kappa_1^{n-1}$ となる。

### 4.3. 無限個の保存量

#### 4.3.1. 共役変換とトレース

§2.2 では、Lax 方程式による時間発展が
$$
L(t)=U(t)L(0)U(t)^{-1}
$$
という共役変換であり、固有値を保つことを見た。有限行列では、こうして保たれる固有値から、その和や二乗和などの保存量を作れる。これらの和を、固有値を一つずつ求めずに計算する方法がトレースである。

有限行列 $M$ のトレースは、対角成分の和
$$
\operatorname{tr}M=\sum_i M_{ii}
$$
である。二つの行列 $M,N$ について
$$
\operatorname{tr}(MN)=\sum_{i,j}M_{ij}N_{ji}
=\sum_{i,j}N_{ji}M_{ij}=\operatorname{tr}(NM)
$$
となり、積の順序を巡回的に入れ替えられる。この性質を使えば、可逆行列 $U$ による共役変換に対して
$$
\operatorname{tr}(UM^rU^{-1})=\operatorname{tr}(M^r),\qquad r=1,2,\ldots
$$
である。$M$ を対角化でき、その固有値を $\lambda_j$ とすれば、
$$
\operatorname{tr}(M^r)=\sum_j\lambda_j^r.
$$
したがって、冪のトレースは、同じ共役変換が保つ固有値のさまざまな和を表している。

この仕組みのうち、Lax 方程式から保存量を導くために必要なのは、交換子のトレースが $0$ になることである。実際、行列の発展が $M_t=[B,M]$ ならば $(M^r)_t=[B,M^r]$ なので、
$$
\frac{d}{dt}\operatorname{tr}(M^r)
=\operatorname{tr}[B,M^r]=0
$$
となる。前節で得た $P$ と $B_n$ にも、この仕組みを使う。ただし、微分と積分を含む形式的な演算子に対しては、それに適したトレースを導入する必要がある。

#### 4.3.2. Adler–Maninトレース

ここで新しく導入するのが、擬微分作用素の $\partial^{-1}$ の係数を空間積分する **Adler–Manin トレース**である。[^adler-manin-trace] まず、この係数を取り出す操作を
$$
A=\sum_ja_j(x)\partial^j,\qquad
\operatorname{res}_{\partial}A=a_{-1}(x)
\tag{equation-e996f45051}
$$
と書き、擬微分作用素の留数と呼ぶ。その積分によって
$$
\operatorname{Tr}_{\mathrm{AM}}A
:=\int_{-\infty}^{\infty}\operatorname{res}_{\partial}A\,dx
$$
を定める。以下では $u$ と必要な空間導関数が無限遠で急減衰し、用いる留数の積分が収束して時間微分と空間積分を交換できるとする。

このトレースも、境界項が消える範囲で
$$
\begin{aligned}
\operatorname{Tr}_{\mathrm{AM}}(BA)&=\operatorname{Tr}_{\mathrm{AM}}(AB),\\
\operatorname{Tr}_{\mathrm{AM}}[B,A]&=0
\end{aligned}
$$
を満たす。これが保存量を作る性質である。その理由を、§4.1 の積分核と平面波を使って確かめよう。

各項 $a_j(x)\partial^j$ では、$\partial^j$ が平面波に $(ik)^j$ を掛け、その後に係数 $a_j(x)$ が掛かる。したがって、$A$ の平面波への作用は
$$
e^{-ikx}Ae^{ikx}=\sum_ja_j(x)(ik)^j
$$
となる。留数 $\operatorname{res}_{\partial}A$ は、この展開の $(ik)^{-1}$ の係数でもある。複素 $k$ の留数で係数を取り出せば、
$$
\operatorname{res}_{\partial}A
=\frac{1}{2\pi}\oint e^{-ikx}Ae^{ikx}\,dk
\tag{residue-plane-wave}
$$
と書ける。ここでの周回積分は、この形式的なローラン展開に対する留数積分を表す。

次に、$A$ の負冪部分 $A_{<0}$ が、滑らかな核を持つ左積分演算子
$$
(A_{<0}g)(x)=\int_{-\infty}^{x}K_A(x,y)g(y)\,dy
$$
で表される場合を考える。左端の境界項が消える条件で平面波を入れて部分積分すると、
$$
e^{-ikx}A_{<0}e^{ikx}
\sim\frac{K_A(x,x)}{ik}
-\frac{(\partial_yK_A)(x,x)}{(ik)^2}+\cdots.
$$
したがって、Adler–Manin トレースは核の対角値の積分として
$$
\operatorname{Tr}_{\mathrm{AM}}A
=\int_{-\infty}^{\infty}K_A(x,x)\,dx
\tag{residue-kernel-diagonal}
$$
と表される。

微分演算子 $B$ は、関数を掛ける操作と、一回の微分 $\partial$ との積と和で作られる。この二つの操作をトレースの中で巡回的に動かせれば、$B$ 全体についても巡回性が従う。

まず、関数 $b$ を掛ける操作を考える。$bA_{<0}g$ では積分後の出力に $b(x)$ が掛かり、$A_{<0}(bg)$ では積分内の入力に $b(y)$ が掛かる。二つの積分核はそれぞれ $b(x)K_A(x,y)$ と $K_A(x,y)b(y)$ であり、対角 $y=x$ 上では等しい。従って、
$$
\operatorname{Tr}_{\mathrm{AM}}(bA_{<0})
=\operatorname{Tr}_{\mathrm{AM}}(A_{<0}b).
$$

次に、$\partial(A_{<0}g)$ と $A_{<0}(\partial g)$ を比べる。前者は積分後の出力を $x$ で微分する。後者は入力 $g$ を微分してから積分するので、左端の境界項が消える条件で部分積分し、 $g$ の微分を核へ移せる。二つの積分部分の核は、それぞれ
$$
\begin{aligned}
\partial A_{<0}&:\quad\partial_xK_A(x,y),\\
A_{<0}\partial&:\quad-\partial_yK_A(x,y)
\end{aligned}
$$
となる。どちらにも上端 $y=x$ から同じ項 $K_A(x,x)g(x)$ が生じるので、差 $[\partial,A_{<0}]g$ では相殺される。

この二つの核の差 $\partial_xK_A+\partial_yK_A$ は、対角上では $K_A(x,x)$ の微分である。対角値が両端で消えるなら、
$$
\begin{aligned}
&\operatorname{Tr}_{\mathrm{AM}}[\partial,A_{<0}]\\
&\quad=\int_{-\infty}^{\infty}\frac{d}{dx}K_A(x,x)\,dx\\
&\quad=\bigl[K_A(x,x)\bigr]_{-\infty}^{\infty}=0.
\end{aligned}
\tag{residue-kernel-tangent}
$$
従って、$\partial$ もトレースの中で巡回的に動かせる。$B$ を構成する乗算と微分を一つずつ動かせば、
$$
\begin{aligned}
\operatorname{Tr}_{\mathrm{AM}}(BA)&=\operatorname{Tr}_{\mathrm{AM}}(AB),\\
\operatorname{Tr}_{\mathrm{AM}}[B,A]&=0
\end{aligned}
$$
を得る。以下では、この操作で現れる核と必要な導関数の対角値が、いずれも両端で消える場合を扱う。

<details id="formal-residue-kernel-jet">
<summary>形式級数に対する核の計算</summary>

$B=\sum_{m=0}^{M}b_m(x)\partial^m$ を $M$ 階の微分演算子とする。留数が取り出すのは $\partial^{-1}$ の係数である。$A$ の $\partial^{-(M+2)}$ 以下の項は、$B$ を左右どちらから掛けても次数が $-2$ 以下にとどまり、この係数に影響しない。また、$A$ の微分部分と $B$ の積にも負冪は現れない。従って、$BA,AB$ の留数を求めるには、$A$ を有限和
$$
\sum_{r=1}^{M+1}a_{-r}(x)\partial^{-r}
$$
に置き換えてよい。$\partial^{-r}$ は左積分の $r$ 回の繰り返しなので、この有限和の核は
$$
K_A(x,y)=\sum_{r=1}^{M+1}
a_{-r}(x)\frac{(x-y)^{r-1}}{(r-1)!}
$$
である。$y=x$ で $y$ 微分を取れば、$a_{-r}(x)=(-1)^{r-1}(\partial_y^{r-1}K_A)(x,x)$ が得られ、§4.1 の部分積分による展開と一致する。

この有限和は $BA,AB$ の留数を変えないので、その核で得たトレースの等式は、元の形式級数についても成り立つ。

</details>

以下で用いる $A=P^{2n-1}$ の負冪の係数は、$u$ とその導関数で作られ、$u=0$ なら消える。$B_m$ の係数は定数項を除いて同様である。そのため、$u$ の急減衰によって上の偏導関数の対角値も両端で消え、
$$
\operatorname{Tr}_{\mathrm{AM}}[B_m,P^{2n-1}]=0
$$
が使える。[^residue-general]

#### 4.3.3. トレースから保存量へ

まず、$P$ の冪も同じ Lax 方程式に従うことを確かめる。$P^2=-L$ と $L_{t_3}=[B_3,L]$ から $(P^2)_{t_3}=[B_3,P^2]$ であり、その形式平方根 $P$ 自身についても
$$
P_{t_3}=[B_3,P]
\tag{equation-ad35198100}
$$
となる。これは、$P$ の先頭の項を $\partial$ と指定した形式平方根の一意性から従う。

<details id="root-lax-evolution">
<summary>形式平方根のLax方程式の導出</summary>

$P^2=-L$ を時間微分すると
$$
P_{t_3}P+PP_{t_3}=-L_{t_3}.
$$
一方、
$$
[B_3,P]P+P[B_3,P]=[B_3,P^2]=-L_{t_3}
$$
である。二つの式の差を取り、$D=P_{t_3}-[B_3,P]$ と置くと
$$
DP+PD=0.
$$
$D$ が非零で、最高次項が $\alpha\partial^q$ だとする。$P$ の最高次項は $\partial$ なので、$DP+PD$ の最高次項は $2\alpha\partial^{q+1}$ となり、$0$ にはならない。従って $D=0$ である。$B_3,t_3$ を $B_m,t_m$ に替えても、同じ議論が成り立つ。

</details>

交換子を取る操作も積に対する微分と同じ法則を満たすので、各冪について
$$
\begin{aligned}
\frac{\partial}{\partial t_3}P^{2n-1}&=[B_3,P^{2n-1}],\\
n&=1,2,\ldots
\end{aligned}
\tag{odd-power-evolution}
$$
である。前節のどの発展 $t_m$ に対しても、同様に
$$
P_{t_m}=[B_m,P],\qquad
\frac{\partial P^{2n-1}}{\partial t_m}=[B_m,P^{2n-1}]
$$
となる。すべての冪が、同じ生成子 $B_m$ によって発展している。この交換子による発展は、§2.2 で見た共役変換の時間微分の形である。

そこで、奇数冪の留数を積分した量に、$-1/(2n-1)$ という係数を付けて
$$
\begin{aligned}
I_{2n-1}&:=-\frac1{2n-1}\operatorname{Tr}_{\mathrm{AM}}P^{2n-1}\\
&=-\frac1{2n-1}\int_{-\infty}^{\infty}\operatorname{res}_{\partial}P^{2n-1}\,dx,
\qquad n=1,2,\ldots
\end{aligned}
\tag{equation-863a6af854}
$$
と定める。添字は使った $P$ の冪を表し、前の係数はここで採用する規格化である。偶数冪 $P^{2n}=(-L)^n$ は微分演算子で留数が $0$ なので、奇数冪を使っている。

冪の Lax 方程式にトレースを取れば、任意の $m,n\ge1$ に対して
$$
\frac{\partial}{\partial t_m}\operatorname{Tr}_{\mathrm{AM}}P^{2n-1}
=\operatorname{Tr}_{\mathrm{AM}}[B_m,P^{2n-1}]=0.
$$
前の係数は時間によらないので、各 $I_{2n-1}$ も KdV 階層のどの発展に対しても保存される。有限行列の冪のトレースと同じく、共通する交換子による発展と巡回性が、これらの保存量を一度に与えている。

> **Remark.** $P=S\partial S^{-1}$ は形式級数としての共役関係であり、$P$ と自由作用素 $\partial$ が同じスペクトルを持つことまでは保証しない。形式逆 $S^{-1}$ の存在だけでは、$S$ が関数の二乗可積分性や作用素の定義域を保つ可逆変換になるとは限らない。

最初の保存量を具体的に見よう。既に求めた $P$ の展開から
$$
\operatorname{res}_{\partial}P=-\frac u2,\qquad
I_1=\frac12\int_{-\infty}^{\infty}u\,dx
$$
である。次の奇数冪 $P^3$ からは
$$
\operatorname{res}_{\partial}P^3
=\frac38u^2-\frac18u_{xx}
$$
を得る。$u_{xx}$ の積分は境界項になって消えるので、
$$
I_3=-\frac18\int_{-\infty}^{\infty}u^2\,dx.
$$
$\int u\,dx$ では波形の正負の部分が相殺しうるが、$\int u^2\,dx$ は各点の振幅の二乗を足し合わせる。KdV の波形は、こうした異なる制約を同時に満たしながら変化する。

さらに $P^5$ からは、三乗の密度と波形の空間変化を組み合わせた
$$
I_5=\frac1{16}\int_{-\infty}^{\infty}\left(u^3+\frac12u_x^2\right)\,dx
\tag{classical-fifth-integral}
$$
が得られる。

<details id="second-density-check">
<summary>Check the second and third conserved densities</summary>

$P=\partial+p_1\partial^{-1}+p_2\partial^{-2}+p_3\partial^{-3}+\cdots$ と書く。式 (@equation-0c81f024ea) の係数から $p_1=-u/2$、$p_2=u_x/4$ である。さらに、$P^2=\partial^2-u$ の $\partial^{-2}$ の係数から
$$
2p_3+p_{2,x}+p_1^2=0,\qquad
 p_3=-\frac{u_{xx}+u^2}{8}
$$
を得る。$P^3=(\partial^2-u)P$ の $\partial^{-1}$ の係数を集めると
$$
\operatorname{res}_{\partial}P^3
=p_{1,xx}+2p_{2,x}+p_3-up_1
=\frac38u^2-\frac18u_{xx}.
$$
同じ平方根の係数比較を二段進めると
$$
p_4=\frac38uu_x+\frac1{16}u_{xxx},\qquad
p_5=-\frac1{16}u^3-\frac7{16}uu_{xx}
-\frac{11}{32}u_x^2-\frac1{32}u_{xxxx}
$$
となる。$P^5=(\partial^2-u)^2P$ の留数を取れば
$$
\operatorname{res}_{\partial}P^5
=-\frac5{16}u^3+\frac5{16}uu_{xx}
+\frac5{32}u_x^2-\frac1{32}u_{xxxx}.
$$
$\int uu_{xx}\,dx=-\int u_x^2\,dx$ と $\int u_{xxxx}\,dx=0$ を使うと
$$
\operatorname{Tr}_{\mathrm{AM}}P^5
=-\frac5{16}\int_{-\infty}^{\infty}
\left(u^3+\frac12u_x^2\right)\,dx.
$$
定義に従って $-1/5$ 倍すると、式 (@classical-fifth-integral) を得る。

</details>

<details id="first-conserved-integrals-check">
<summary>KdV 方程式から最初の二つの保存量を確かめる</summary>

既知の KdV 方程式は
$$
\frac{\partial u}{\partial t_3}
=\partial_x\left(\frac{u_{xx}-3u^2}{4}\right)
$$
と書ける。両端での減衰によって
$$
\frac{d}{dt_3}\int_{-\infty}^{\infty}u\,dx
=\left[\frac{u_{xx}-3u^2}{4}\right]_{-\infty}^{\infty}=0.
$$
同じ方程式に $2u$ を掛けると
$$
\frac{\partial u^2}{\partial t_3}
=\frac12u u_{xxx}-3u^2u_x
=\partial_x\left(\frac12u u_{xx}-\frac14u_x^2-u^3\right)
$$
となるので、
$$
\frac{d}{dt_3}\int_{-\infty}^{\infty}u^2\,dx=0
$$
も従う。

</details>

[^adler-manin-trace]: 文献 [[5]](#ref-fathizadeh), §2, pp. 3–4。§2 で形式的な擬微分作用素の留数と Adler–Manin トレース、その巡回性を扱っている。

[^residue-general]: 一般の擬微分作用素どうしでも、それぞれを微分部分と負冪部分に分ければ、交換子のトレースが $0$ になることが分かる。微分部分どうしの積には留数がなく、負冪部分どうしの積は次数が $-2$ 以下なので留数がない。残る混合項には本文の議論を適用できる。積分した巡回性には、同じく境界項が消える条件が必要である。§4.1 の $P=S\partial S^{-1}$ に現れる $S$ の係数は、この減衰条件を満たすとは限らないため、そこから $\operatorname{Tr}_{\mathrm{AM}}P^r=\operatorname{Tr}_{\mathrm{AM}}\partial^r$ とすることはできない。

## 5. 佐藤方程式とKP階層

### 5.1. 変換の時間発展

ある時刻のポテンシャルに対して、$S$ は自由波を Jost 解へ移す。KdV に従ってポテンシャルが変化すれば、この変換も変化する。では、波形 $u$ の時間発展を、変換 $S$ 自体の時間発展として記述できるだろうか。

まず、既知の KdV の時間 $t_3$ を考える。自由側の発展は三階微分で与えられ、
$$
\partial_{t_3}e^{ikx+t_3(ik)^3}
=\partial^3e^{ikx+t_3(ik)^3}
$$
となる。この自由波を $S$ で変換した波を
$$
\begin{aligned}
\psi(x,t_3,k)&:=S(t_3)e^{ikx+t_3(ik)^3}\\
&=e^{t_3(ik)^3}f_-(x,t_3,k)
\end{aligned}
\tag{sato-wave}
$$
と置く。§2.4 では、自由波の時間因子を含めた波が Lax 表示の線形発展に従うことを使った。ここでの時間因子は $e^{t_3(ik)^3}$ なので、この $\psi$ も
$$
\partial_{t_3}\psi=B_3\psi
$$
に従う。

$\psi$ の時間変化には、$S$ の変化と自由波の変化の二つがある：
$$
\begin{aligned}
\partial_{t_3}\psi
&=(\partial_{t_3}S)e^{ikx+t_3(ik)^3}
+S\partial^3e^{ikx+t_3(ik)^3}\\
&=\bigl[(\partial_{t_3}S)S^{-1}+P^3\bigr]\psi.
\end{aligned}
$$
これが全波数について $B_3\psi$ に等しいので、
$$
(\partial_{t_3}S)S^{-1}=B_3-P^3.
$$
既に $B_3=(P^3)_{\ge0}$ と分かっているから、
$$
\partial_{t_3}S=-(P^3)_{<0}S.
\tag{sato-kdv-flow}
$$

自由波の発展を $S$ で移すと $P^3$ が現れる。そのうち負冪部分は $S$ 自身の変化によって打ち消され、波の発展には微分作用素 $B_3$ が残る。

### 5.2. 佐藤方程式

同じ構成を、自由側の発展 $\partial_{t_n}g=\partial^n g$ に広げよう。変換後の波 $Sg$ の発展を微分作用素 $B_n$ で表すなら、先ほどと同じ積の微分から
$$
(\partial_{t_n}S)S^{-1}+P^n=B_n
$$
が必要になる。

$S=1+\text{負冪部分}$ という形を保つとき、$(\partial_{t_n}S)S^{-1}$ は負冪だけを持つ。一方、$B_n$ は非負冪だけを持つ。したがって、正負の部分を比べれば
$$
B_n=(P^n)_{\ge0},\qquad
\partial_{t_n}S=-(P^n)_{<0}S
\tag{sato-equation}
$$
と決まる。後者を佐藤方程式と呼ぶ。

この方程式から $P=S\partial S^{-1}$ の変化を求めると、
$$
\begin{aligned}
\partial_{t_n}P
&=[(\partial_{t_n}S)S^{-1},P]\\
&=[-(P^n)_{<0},P]\\
&=[B_n,P].
\end{aligned}
\tag{sato-lax-flow}
$$
最後の等号では、$P^n$ 全体が $P$ と可換であることを使った。先に導入した $P$ の Lax 発展は、同じ変換 $S$ の時間発展から得られる。

### 5.3. 流れの両立性

各発展則を作れたとしても、それらを異なる順序で進めた結果が一致するとは限らない。例えば、$t_3$ を進めてから $t_5$ を進めた場合と、その逆では、同じ変換 $S$ に到達するだろうか。

ここで働くのも正負分解である。同じ作用素 $P$ の冪は
$$
[P^m,P^n]=0
$$
を満たし、非負冪同士の交換子は非負冪だけ、負冪同士の交換子は負冪だけからなる。この構造から
$$
\partial_{t_m}B_n-\partial_{t_n}B_m-[B_m,B_n]
=-\bigl([(P^m)_{<0},(P^n)_{<0}]\bigr)_{\ge0}=0
\tag{zakharov-shabat}
$$
を得る。負冪部分同士の交換子には、非負冪部分がないためである。

したがって、
$$
[\partial_{t_m}-B_m,\ \partial_{t_n}-B_n]=0.
\tag{zero-curvature}
$$
これは、波の二つの線形発展が両立することを表す Zakharov–Shabat 方程式（零曲率条件）である。変換 $S$ の発展も両立し、どちらの順序で進めても同じ結果になる。

<details id="sato-flow-compatibility">
<summary>Compatibility of the flows</summary>

$\partial_{t_m}P=[B_m,P]$ より、
$$
\partial_{t_m}P^n=[B_m,P^n].
$$
非負冪部分を取り、二つの時間を入れ替えた式との差を求めると、
$$
\begin{aligned}
\partial_{t_m}B_n-\partial_{t_n}B_m-[B_m,B_n]
&=[B_m,B_n]
+\bigl([B_m,(P^n)_{<0}]+[(P^m)_{<0},B_n]\bigr)_{\ge0}\\
&=-[(P^m)_{<0},(P^n)_{<0}]_{\ge0}=0.
\end{aligned}
$$
二つ目の等号には、$[P^m,P^n]=0$ の非負冪部分を使った。

Lax 方程式の負冪部分を取り、$[P^m,P^n]=0$ を用いると、
$$
\partial_{t_m}(P^n)_{<0}-\partial_{t_n}(P^m)_{<0}
=-[(P^m)_{<0},(P^n)_{<0}]
$$
を得る。したがって佐藤方程式についても、
$$
(\partial_{t_m}\partial_{t_n}-\partial_{t_n}\partial_{t_m})S
=-\Bigl(\partial_{t_m}(P^n)_{<0}-\partial_{t_n}(P^m)_{<0}
+[(P^m)_{<0},(P^n)_{<0}]\Bigr)S
=0.
$$
各発展則が定める変化は、互いに可換である。

</details>

### 5.4. KP階層とreduction

これまで $P$ は $P^2=-L$ を満たしていた。しかし、佐藤方程式を構成し、流れの両立性を示す議論では、$P^2$ が微分作用素であることを使っていない。

そこで、この制約を外し、
$$
P=\partial+p_1\partial^{-1}+p_2\partial^{-2}+\cdots
$$
という一般の形式的な擬微分作用素を、同じ発展則
$$
\partial_{t_n}P=[(P^n)_{\ge0},P]
\tag{kp-hierarchy}
$$
で動かす。これが KP 階層である。対応する $S$ の発展は、同じ佐藤方程式で与えられる。佐藤方程式と KP 階層、流れの両立性については 文献 [[6]](#ref-mulase) の §4 を参照。

KdV を指定していた条件は、正負分解の言葉では
$$
(P^2)_{<0}=0
\tag{kdv-two-reduction}
$$
と書ける。この条件は KP の発展によって保たれる。実際、
$$
\partial_{t_n}(P^2)=[B_n,P^2]
$$
であり、$P^2$ が微分作用素なら、右辺も微分作用素なので負冪は生じない。この制約を課した KP 階層を 2-reduction と呼ぶ。

このとき偶数冪 $P^{2m}$ は微分作用素になるため、
$$
\partial_{t_{2m}}S=-(P^{2m})_{<0}S=0.
$$
KdV 階層に奇数の非自明な流れだけが残ったのは、このためである。一般の KP 階層では、偶数時間にも非自明な発展が現れる。

### 5.5. Boussinesq階層

二乗の代わりに、三乗が微分作用素になる条件
$$
(P^3)_{<0}=0
$$
を課すと、Boussinesq 階層が得られる。これを KP 階層の 3-reduction と呼ぶ。同じ理由でこの制約は発展によって保たれ、3 の倍数の流れは $\partial_{t_{3m}}S=0$ となる。

最初の非自明な発展は $t_2$ によるものである。三階の微分作用素の係数を
$$
P^3=\partial^3+\alpha\partial+\beta
$$
と書くと、$\partial_{t_2}(P^3)=[(P^2)_{\ge0},P^3]$ から、$\alpha$ は
$$
3\alpha_{t_2t_2}+\alpha_{xxxx}+2(\alpha^2)_{xx}=0
\tag{boussinesq-equation}
$$
を満たす。これが、この規約での Boussinesq 方程式である。空間変数は $x=t_1$、時間変数は $t_2$ となる。

一般に、$(P^r)_{<0}=0$ を課すと、同じ構成で $r$-reduction が得られる。この階層を Gelfand–Dickey 階層と呼ぶ。KdV と Boussinesq は、共通の KP 階層に対して、どの冪を微分作用素に保つかを選んだものである。

## 参考文献

<span id="ref-nakamura">[1]</span> 中村佳正・高崎金久・辻本諭 (2018). 『可積分系の数理』解析学百科 2. 朝倉書店.

<span id="ref-oikawa">[2]</span> 及川正行 (2013). 「第5章 逆散乱法」. 『ながれ』, **32**(1), 39–53.

<span id="ref-miura">[3]</span> Miura, R. M., Gardner, C. S., & Kruskal, M. D. (1968). “Korteweg–de Vries equation and generalizations. II. Existence of conservation laws and constants of motion.” *Journal of Mathematical Physics*, **9**(8), 1204–1209.

<span id="ref-egorova">[4]</span> Egorova, I., Kopylova, E., Marchenko, V., & Teschl, G. (2016). “[Dispersion estimates for one-dimensional Schrödinger and Klein–Gordon equations revisited](https://arxiv.org/abs/1411.0021).” *Russian Mathematical Surveys*, **71**, 3–26.

<span id="ref-fathizadeh">[5]</span> Fathizadeh, F., & Khalkhali, M. (2010). “[The algebra of formal twisted pseudodifferential symbols and a noncommutative residue](https://arxiv.org/abs/0810.0484).” *Letters in Mathematical Physics*, **94**(1), 41–61.

<span id="ref-mulase">[6]</span> Mulase, M. (1994). “[Algebraic theory of the KP equations](https://www.math.ucdavis.edu/~mulase/texfiles/algebraictheo.pdf).” In R. Penner & S. T. Yau (Eds.), *Perspectives in Mathematical Physics*, 151–218.
