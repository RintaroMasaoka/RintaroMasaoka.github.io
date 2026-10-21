## 1. 固定したポテンシャルから波の変形を作る

時間を固定し、滑らかで、すべての導関数が無限遠で任意のべきより速く減衰する実ポテンシャル $u$（Schwartz ポテンシャル）に対する
$$
Lf=k^2f,\qquad L=-\partial_x^2+u(x)
\tag{schrodinger}
$$
を考える。まず固定した $u$ に対して、左端で自由平面波 $e^{ikx}$ に一致する解 $f_-(x,k)$ を構成する。目標は、この波の変形を全波数に共通する積分核で表し、その核の方程式を散乱データから作って $u$ を戻すことである。それぞれの端で $f_\pm(x,k)\sim e^{ikx}$（$x\to\pm\infty$）と規格化した解を Jost 解と呼ぶ。

## 2. 位置順序付き発展から変換核を作る

Schrödinger 方程式を $f_{xx}+k^2f=uf$ と書く。自由方程式による変化を先に取り除けば、残る変化はポテンシャルの作用だけになる。量子力学の相互作用描像と同じ手順を、時間ではなく位置 $x$ に沿って行おう。

まず値と傾きを並べた状態を $\boldsymbol f=(f,f_x)^{\mathsf T}$ と書く。自由解では $f_{xx}=-k^2f$ なので、$x$ 微分はこの二つの成分を $(f_x,-k^2f)^{\mathsf T}$ に移す。その作用を表す行列を $D_0$ と書く：
$$
D_0=\begin{pmatrix}0&1\\-k^2&0\end{pmatrix},\qquad
\frac{d\boldsymbol f}{dx}=D_0\boldsymbol f\quad(u=0).
$$
$D$ は微分を、添字 $0$ は $u=0$ の自由系を表す。ポテンシャルの作用を表す行列 $V(x)$ を加えると、元の方程式は
$$
\frac{d\boldsymbol f}{dx}=(D_0+V(x))\boldsymbol f,
\qquad V(x)=\begin{pmatrix}0&0\\u(x)&0\end{pmatrix}.
\tag{spatial-state}
$$
まず実数 $k\ne0$ を考え、$k=0$ では $\sin(kd)/k$ を極限 $d$ で読む。自由系での有限な位置差 $d$ の伝播は、微分を表す行列の指数関数 $e^{dD_0}$ で与えられる。$I$ を $2\times2$ の単位行列とすると $D_0^2=-k^2I$ なので、指数関数の偶数次と奇数次をまとめると
$$
\begin{aligned}
e^{dD_0}&=\cos(kd)I+\frac{\sin(kd)}{k}D_0\\
&=\begin{pmatrix}
\cos(kd)&\sin(kd)/k\\
-k\sin(kd)&\cos(kd)
\end{pmatrix},
\end{aligned}
\tag{free-propagation}
$$
となり、$\boldsymbol f(x)=e^{(x-x')D_0}\boldsymbol f(x')$（$u=0$）と伝わる。同じ行列の指数なので $e^{aD_0}e^{bD_0}=e^{(a+b)D_0}$ となり、逆向きの自由伝播は $e^{-dD_0}$ である。

有限な始点 $x_*$ を固定する。位置 $x$ の状態から、始点以来の自由伝播を逆にたどって取り除いたものが、相互作用描像の状態
$$
\boldsymbol f_I(x)=e^{-(x-x_*)D_0}\boldsymbol f(x)
$$
である。$u=0$ ならこれは始点の状態のまま変わらない。微分して式 (@spatial-state) を使うと、$e^{-(x-x_*)D_0}$ の微分と自由方程式の項が打ち消し合い、
$$
\frac{d\boldsymbol f_I}{dx}=V_I(x)\boldsymbol f_I(x),\qquad
V_I(x)=e^{-(x-x_*)D_0}V(x)e^{(x-x_*)D_0}
$$
だけが残る。$V_I$ は、位置 $x$ まで自由伝播し、そこでポテンシャルを作用させ、自由伝播を取り除く操作である。したがって、各位置の作用をこの共通の表示で積み重ねればよい。

$\mathcal P$ を、大きい位置の行列を左に置く位置順序とする。上の方程式を始点から解くと
$$
\boldsymbol f_I(x)=\mathcal P\exp\!\left[\int_{x_*}^xV_I(x')\,dx'\right]\boldsymbol f(x_*).
$$
これは量子力学の Dyson 展開と同じ順序付きの積分であり、最初の三項は
$$
\begin{aligned}
\boldsymbol f_I(x)=\Bigg[I
&+\int_{x_*}^x V_I(x')\,dx'\\
&+\int_{x_*}^x\!dx'\int_{x_*}^{x'}\!dx''\,
V_I(x')V_I(x'')+\cdots\Bigg]\boldsymbol f(x_*).
\end{aligned}
$$
二次の項では $x''\le x'$ で、先に通る位置 $x''$ の行列が右に来る。高次でも、左から右へ進む間に出会うポテンシャルの作用を、その順序のまま重ねている。

この順序付き発展を、積分核を取り出せる形に直そう。まず相互作用描像の微分方程式を一度積分し、左から $e^{(x-x_*)D_0}$ を掛けて元の状態へ戻すと
$$
\begin{aligned}
\boldsymbol f(x)
&=e^{(x-x_*)D_0}\boldsymbol f(x_*)\\
&\quad+\int_{x_*}^x e^{(x-x')D_0}V(x')\boldsymbol f(x')\,dx'.
\end{aligned}
$$
この積分項は、位置順序付き展開でポテンシャルが一回以上作用する各項を、最後の作用位置 $x'$ ごとにまとめたものである。その位置に至るまでの作用を足し合わせた状態が $\boldsymbol f(x')$ であり、$V(x')$ が最後の一回の作用を表す。その後は自由伝播だけなので、位置 $x$ へ運ぶ因子が $e^{(x-x')D_0}$ となる。

この一回の作用を行列で計算すると
$$
V(x')\boldsymbol f(x')=
\begin{pmatrix}0\\u(x')f(x')\end{pmatrix}.
$$
第二成分に現れた寄与を自由伝播させると、式 (@free-propagation) から
$$
\begin{aligned}
&e^{(x-x')D_0}V(x')\boldsymbol f(x')\\
&\qquad=u(x')f(x')
\begin{pmatrix}\sin k(x-x')/k\\\cos k(x-x')\end{pmatrix}.
\end{aligned}
$$
位置 $x'$ の微小区間が与える補正は、このベクトルに $dx'$ を掛けたものである。求めたい波の値 $f(x)$ は状態 $\boldsymbol f(x)$ の第一成分なので、この積全体の第一成分を積分すればよい。初期状態からの自由伝播の項と合わせると
$$
\begin{aligned}
f(x)={}&f(x_*)\cos k(x-x_*)
+f_x(x_*)\frac{\sin k(x-x_*)}{k}\\
&+\int_{x_*}^x\frac{\sin k(x-x')}{k}u(x')f(x')\,dx'.
\end{aligned}
\tag{finite-source-integral}
$$
正弦因子は、各位置でのポテンシャルの作用を、波の値の補正へ変える係数として現れる。

左端で自由波に一致する解 $f_-$ を得るには、有限な $x_*$ で始点の状態を $(e^{ikx_*},ik e^{ikx_*})^{\mathsf T}$ としてから $x_*\to-\infty$ とする。式 (@finite-source-integral) の最初の二項は $e^{ikx}$ となり、Schwartz 条件の下で左端までの積分が収束するので
$$
f_-(x,k)=e^{ikx}+\int_{-\infty}^x\frac{\sin k(x-x')}{k}u(x')f_-(x',k)\,dx'.
\tag{left-jost-integral}
$$
この積分方程式は、相互作用描像で位置順に積み重ねたすべての作用を含む。$u$ を固定したとき、自由波から対応する解への変換は、入力波に対して線形である。各次数の補正を平面波 $e^{iky}$ の重ね合わせに書き直し、その重みを全次数で足し合わせたものを変換核 $K(x,y)$ と書く。これによって、位置順序付き発展を
$$
f_-(x,k)=e^{ikx}+\int_{-\infty}^xK(x,y)e^{iky}\,dy
\tag{kernel-ansatz}
$$
と表す。先頭の $e^{ikx}$ が自由波であり、積分項がポテンシャルによる全補正を表す。各補正をこの形に直せる仕組みが、正弦因子が平面波を有限区間上の平面波の重ね合わせに変える恒等式
$$
\frac{\sin k(x-x')}{k}e^{iky'}=\frac12\int_{y'-(x-x')}^{y'+(x-x')}e^{iky}\,dy
\tag{plane-wave-identity}
$$
である。自由波 $e^{ikx'}$ に式 (@left-jost-integral) の積分作用を一度加えると、恒等式 (@plane-wave-identity) で $y'=x'$ と置いた区間積分になる。固定した $y$ にこの補正が寄与するには $y\le x$ かつ $y\ge 2x'-x$ が必要なので、作用位置は $x'\le(x+y)/2$ に限られる。自由波から生じる重みは、したがって $\frac12\int_{-\infty}^{(x+y)/2}u(x')\,dx'$ である。

また、$y'\le x'$ の成分に式 (@plane-wave-identity) を適用すると、区間の上端は $y'+x-x'\le x$ である。したがって、作用を重ねても $y\le x$ が保たれる。

二回以上の作用を含む寄与は、作用位置 $x'$ での波の全補正に、最後の一回の作用を加えたものとしてまとめられる。式 (@kernel-ansatz) の補正 $\int_{-\infty}^{x'}K(x',y')e^{iky'}dy'$ を式 (@left-jost-integral) に直接代入すると、その寄与は
$$
\int_{-\infty}^x\!dx'\int_{-\infty}^{x'}\!dy'\,
u(x')K(x',y')\frac{\sin k(x-x')}{k}e^{iky'}.
\tag{kernel-feedback}
$$
積分変数は $x'\le x$ と $y'\le x'$ を満たし、正弦因子の恒等式から $|y-y'|\le x-x'$ となる。

<div data-visual-slot="dyson-domain"></div>

恒等式で $y$ の区間積分に直し、$y$ を外側の積分変数にすると、固定した $y$ の重みにはこの三つの条件を満たす $x',y'$ だけが寄与する。全補正は、一回だけ作用する寄与と二回以上作用する寄与の和なので、その重み $K$ が満たす積分方程式は
$$
K(x,y)=\frac12\int_{-\infty}^{(x+y)/2}u(x')\,dx'
+\frac12\iint_{\substack{y'\le x'\le x\\|y-y'|\le x-x'}}u(x')K(x',y')\,dy'\,dx',\qquad y\le x.
\tag{kernel-recursion}
$$
第一項はポテンシャルが自由波に作用して生じる重み、第二項はすでに得た補正の重みに次の作用を加えた寄与をすべて足したものである。各作用は式 (@plane-wave-identity) によって波数に依らない重みに移るため、$K$ も波数に依らない。


位置順序付き発展に含まれるすべての補正は、この重み $K$ を用いた一つの積分にまとまる：
$$
f_-(x,k)=e^{ikx}+\int_{-\infty}^xK(x,y)e^{iky}\,dy
\tag{jost-transform}
$$
式 (@kernel-recursion) の反復代入は、この全補正の重みを作用回数ごとに計算する操作である。Schwartz 条件の下では、重みの和は対角まで連続な関数となる。和の収束と連続性は補足で確かめる。

<details id="kernel-convergence">
<summary>各次数の重みの和：収束と連続性</summary>

この補足では、ポテンシャルが $n$ 回作用した寄与の重みを $K_n$ と書く。一回の作用では
$$
K_1(x,y)=\frac12\int_{-\infty}^{(x+y)/2}u(x')\,dx'
$$
とし、$n\ge1$ に対して
$$
K_{n+1}(x,y)=\frac12\iint_{\substack{y'\le x'\le x\\|y-y'|\le x-x'}}u(x')K_n(x',y')\,dy'\,dx'
$$
と定める。全補正を足した重みは $K=\sum_{n\ge1}K_n$ である。位置順序と各内側区間の長さ $2(x-x')$ を使うと、帰納的に
$$
|K_n(x,y)|\le\frac1{2(n-1)!}
\left(\int_{-\infty}^x|u(z)|\,dz\right)
\left(\int_{-\infty}^x(x-z)|u(z)|\,dz\right)^{n-1},\qquad y\le x,
$$
と評価できる。固定した $x$ でこの評価は $y\le x$ に一様であり、核級数の局所一様収束を与える。各反復項は連続なので和も対角まで連続である。対角では式 (@kernel-recursion) の二重積分が消えるため、和の対角値は第一項の明示積分に等しい。

絶対値を取った反復積分にも同じ評価が使える。核の可積分性とフーリエ表示は、Schwartz 条件下の変換作用素の標準結果を用いる。対応する構成は [Egorova ほか、§2](https://arxiv.org/pdf/1411.0021) にある。

</details>

## 3. 対角値がポテンシャルを決める

式 (@kernel-recursion) で $y=x$ とすると、二重積分の条件は $y'\le x'$ と $|x-y'|\le x-x'$ である。後者の下側から $y'\ge x'$ が従うため $y'=x'$ に限られ、この領域は面積ゼロである。したがって対角では二重積分が消え、自由波からの第一項だけが残る。
$$
K(x,x)=\frac12\int_{-\infty}^xu(x')\,dx',\qquad
u(x)=2\frac{d}{dx}K(x,x).
\tag{potential-from-diagonal}
$$
微分は $x$ と二つ目の引数を同時に動かす対角方向の全微分である。Schwartz 条件の下で明示積分を微分すれば、ポテンシャルが直接得られる。後で散乱データから GLM 方程式を解いてこの同じ核 $K$ を得るので、式 (@potential-from-diagonal) によりポテンシャルを復元できる。

## 4. 左入射の散乱関係をフーリエ変換する

ここで散乱データを導入する。$k>0$ の左入射波は左端で入射波 $f_-(x,k)$ と反射波 $b(k)f_-(x,-k)$ の和、右端で透過波 $a(k)f_+(x,k)$ と書ける。$a$ は透過係数、$b$ は左反射係数であり、同じ解の二つの表示から実軸上
$$
a(k)f_+(x,k)=f_-(x,k)+b(k)f_-(x,-k).
\tag{scattering-relation}
$$
実ポテンシャルでは $f_\pm(x,-k)=\overline{f_\pm(x,k)}$、$a(-k)=\overline{a(k)}$、$b(-k)=\overline{b(k)}$ なので、この関係は負の実 $k$ にも成り立つ。

式 (@scattering-relation) の入射側に注目する。既知の自由波を引くと、式 (@jost-transform) から
$$
f_-(x,k)-e^{ikx}=\int_{-\infty}^xK(x,z)e^{ikz}\,dz.
\tag{incident-correction}
$$
$y<x$ とし、両辺に $e^{-iky}/(2\pi)$ を掛けて $k$ について積分すると、平面波の重ね合わせの重み $K(x,y)$ が取り出せる。
$$
\lim_{R\to\infty}\frac{1}{2\pi}\int_{-R}^R[f_-(x,k)-e^{ikx}]e^{-iky}\,dk=K(x,y).
$$
同じ操作を散乱関係の両辺に行い、残る二項も核と散乱データで表そう。反射係数 $b$ のフーリエ変換を
$$
\widehat b(s)=\int_{\mathbb R}b(k)e^{-iks}\,dk
\tag{reflection-fourier}
$$
と置く。ここでは実軸上の反射データ $b(k)$ を用いる。式 (@jost-transform) から反射項の変換は
$$
\frac1{2\pi}\int_{\mathbb R}b(k)f_-(x,-k)e^{-iky}\,dk
=\widehat b(x+y)/(2\pi)+\int_{-\infty}^xK(x,z)\widehat b(z+y)/(2\pi)\,dz.
\tag{reflected-transform}
$$
自由波では指数が $e^{-ik(x+y)}$、核の項では $e^{-ik(z+y)}$ となるため、それぞれ $\widehat b$ の引数が $x+y,z+y$ になる。積分交換は $K(x,\cdot)$ の可積分性と反射係数の減衰で許される。

## 5. 左右の境界条件からGreen関数を作る

残る透過項 $a(k)f_+(x,k)$ のフーリエ積分を求めるには、この波が複素波数で持つ極と、その係数を知る必要がある。そのために、左側に置いた波源への応答を調べる。波源から観測点までの応答を左右の境界条件から作ると、透過波と束縛状態を同じ関数で扱える。

位置 $x'$ に単位の点源を置き、その応答を $G(x,x';k)$ と書く。$x$ は観測位置、$x'$ は点源の位置であり、フーリエ変換で取り出す核の引数 $y$ とは区別する。$G$ を、点源の位置では連続で、
$$
(k^2-L)G(x,x';k)=\delta(x-x'),\qquad L=-\partial_x^2+u(x)
$$
を満たすように作る。これをGreen関数と呼ぶ。点源の強さが1なので、方程式を $x'$ の前後の微小区間で積分すると
$$
\partial_xG(x'+0,x';k)-\partial_xG(x'-0,x';k)=1.
$$
ここでは $k^2-L$ の二階微分の係数が $+1$ であるため、跳びの符号も正になる。

まず $\operatorname{Im}k>0$ とする。このとき自由波 $e^{-ikx}$ は左端で、$e^{ikx}$ は右端で減衰する。対応するポテンシャル付きの解は、それぞれ $f_-(x,-k)$ と $f_+(x,k)$ である。これらの解は上半平面で正則である。この性質は、端での漸近条件から定める積分方程式を反復して示せる。具体的な積分表示と評価は下の補足に置く。

点源の左には左端で減衰する解、右には右端で減衰する解を置く。まず連続につながる積を
$$
\begin{cases}
f_-(x,-k)f_+(x',k),&x<x',\\
f_-(x',-k)f_+(x,k),&x>x'
\end{cases}
$$
と作る。接続点 $x'$ でこの積の右微分から左微分を引くと、二つの解の値と傾きからなる行列式
$$
W(k)=\det\begin{pmatrix}
f_-(x,-k)&f_+(x,k)\\
\partial_xf_-(x,-k)&\partial_xf_+(x,k)
\end{pmatrix}
\tag{wronskian}
$$
が現れる。この行列式を Wronskian と呼ぶ。両解に $f_{xx}=(u-k^2)f$ を使うと $\partial_xW=f_-f_{+,xx}-f_{-,xx}f_+=0$ なので、どの接続点で計算しても同じ値になる。

必要な微分の跳びは1だから、上の積を $W(k)$ で割ればよい。$W(k)\ne0$ のとき、たとえば点源より右側では
$$
G(x,x';k)=\frac{f_-(x',-k)f_+(x,k)}{W(k)},\qquad x>x'.
\tag{green-boundary}
$$
Wronskian が分母に現れるのは、点源の強さに合わせて左右の解を接続するためである。

$W(k)=0$ では、同じ位置で比較した二つの状態 $(f,f_x)$ が比例する。従って左端で減衰する解と右端で減衰する解が一つにつながり、両端で減衰する固有関数が得られる。自己共役性から固有値 $k^2$ は実数であり、上半平面では $k=i\kappa_n$、$\kappa_n>0$ に限られる。この固有値は $-\kappa_n^2$ で、対応する解が束縛状態である。Schwartz ポテンシャルではその個数 $N$ は有限である。

この接続を、既に現れた1ソリトンのポテンシャル $u(x)=-2\operatorname{sech}^2x$ で見る。図ではエネルギー $E=k^2<0$ を動かし、左右の減衰解を、接続点 $x=0$ で値が1になるようにそれぞれ定数倍している。これは傾きを比べるための尺度合わせであり、まだ二乗積分による規格化ではない。$E=-1$ では傾きも一致し、一つの固有関数につながる。

<div data-visual-slot="green-matching"></div>

<details id="green-matching-formulas">
<summary>図の減衰解とWronskianの式</summary>

$E=-\kappa^2$、$\kappa>0$ と書くと、$u=-2\operatorname{sech}^2x$ に対して
$$
\begin{aligned}
f_-(x,-i\kappa)&=e^{\kappa x}\frac{\kappa-\tanh x}{\kappa+1},\\
f_+(x,i\kappa)&=e^{-\kappa x}\frac{\kappa+\tanh x}{\kappa+1}
\end{aligned}
$$
となる。それぞれ微分方程式へ代入して解であることを確認でき、対応する端では必要な指数関数に近づく。接続点 $x=0$ では両解の値が $\kappa/(\kappa+1)$、傾きがそれぞれ $\kappa-1$ と $1-\kappa$ なので、
$$
W(i\kappa)=-\frac{2\kappa(\kappa-1)}{\kappa+1}.
$$
上段の曲線は各解をその $x=0$ での値で割ったもの、下段はこの $W$ をエネルギー $E=-\kappa^2$ に対して描いたものである。

</details>


実軸上の散乱関係 (@scattering-relation) から、左端での $f_+(x,k)$ の $e^{ikx}$ 係数は $1/a(k)$ である。これを $e^{-ikx}$ に規格化した左端解と組み合わせると、自由波同士の Wronskian が $2ik$ であることから $W=2ik/a$、すなわち $a=2ik/W$ を得る。この右辺が透過係数の上半平面への有理型延長を与える。式 (@green-boundary) はそこで
$$
G(x,x';k)=f_-(x',-k)\frac{a(k)f_+(x,k)}{2ik},\qquad x'<x
\tag{green-transmission}
$$
となる。従って透過波の極の係数は、同じ応答 $G$ の極の係数から求められる。

<details id="analytic-estimates">
<summary>Jost 解の解析領域と大きな波数の評価</summary>

上半平面で正則な左端解 $f_-(x,-k)$ から平面波因子を除くと、式 (@left-jost-integral) は
$$
e^{ikx}f_-(x,-k)=1+\int_{-\infty}^x\frac{e^{2ik(x-z)}-1}{2ik}u(z)e^{ikz}f_-(z,-k)\,dz.
$$
距離 $d=x-z\ge0$ に対し
$$
\frac{e^{2ikd}-1}{2ik}=\int_0^d e^{2iks}\,ds,\qquad
\left|\frac{e^{2ikd}-1}{2ik}\right|\le d,\qquad
\left|\partial_k\frac{e^{2ikd}-1}{2ik}\right|\le d^2
$$
が閉上半平面（$k=0$ を含む）で成り立つ。この積分方程式を $j$ 回反復した項は左から右へ順序づけられた領域に入り、絶対値は
$$
\frac1{j!}\left(\int_{-\infty}^x(x-z)|u(z)|\,dz\right)^j
$$
で抑えられる。従って級数は局所一様に収束し、左辺 $e^{ikx}f_-(x,-k)$ は上半平面で正則、実軸まで連続である。$k$ 微分には $d^2$ の評価と Schwartz 条件の重み付き積分を使うので、境界までの微分可能性も得られる。大きな $|k|$ では核を $O(|k|^{-1})$ で抑える。右 Jost 解にも同じ評価を適用すると、Wronskian (@wronskian) は $2ik[1+O(|k|^{-1})]$、従って $a(k)=1+O(|k|^{-1})$ となる。これらの積分表示と評価は [Egorova ほか、§2 の (2.1)–(2.4)](https://arxiv.org/pdf/1411.0021) の標準構成に対応する。ここでは左側の積分端と $k\mapsto-k$ を明示して用いた。

</details>

## 6. 固有状態の表示から極の係数を求める

Green 関数は、点源以外の波源に対しても、その波源を積分して応答を作る。演算子で書けば $(k^2-L)^{-1}$ の積分核である。この同じ逆演算子を固有状態に作用させると、束縛状態が極として現れる理由と係数が分かる。

第2節の規格化定数を使い、束縛状態を
$$
\psi_n(x)=c_n f_-(x,-i\kappa_n),\qquad
c_n^{-2}=\int_{\mathbb R}f_-(x,-i\kappa_n)^2\,dx
\tag{bound-normalization}
$$
と書く。この実固有関数は $\int\psi_n(x)^2dx=1$ を満たす。左端の漸近形は $\psi_n(x)\sim c_ne^{\kappa_nx}$ であり、$c_n$ は単位ノルムにした束縛状態の左端での振幅でもある。

$L\psi_n=-\kappa_n^2\psi_n$ だから、逆演算子はこの成分に対して
$$
(k^2-L)^{-1}\psi_n=\frac{\psi_n}{k^2+\kappa_n^2}
$$
と働く。任意の波源からこの状態に沿う成分を取り出すには、まず $\psi_n$ との内積を取り、$\psi_n(x)$ を掛ける。その操作の積分核が $\psi_n(x)\psi_n(x')$ だから、$k=i\kappa_n$ の近くで
$$
G(x,x';k)=\frac{\psi_n(x)\psi_n(x')}{k^2+\kappa_n^2}
+\text{この極の近くで正則な部分}.
\tag{green-projector}
$$
分子 $\psi_n(x)\psi_n(x')$ は、入力からこの固有状態に沿う成分を取り出し、同じ固有関数の形で返す射影の積分核である。正則な部分は、この孤立した固有値の固有関数に直交する成分の応答である。その理由を補足に示す。

<details id="residue-proof">
<summary>極以外の成分が正則である理由</summary>

実減衰ポテンシャルに対する $L$ は自己共役で、負の固有値は連続スペクトル $[0,\infty)$ から離れた孤立固有値である。また一次元では、両端で減衰する二つの解は Wronskian が0となって比例するため、各固有空間は一次元である。

任意の波源を $\psi_n$ に沿う成分とそれに直交する成分に分ける。自己共役性により、その直交部分も $L$ の作用で保たれる。孤立固有値の十分近くでは、この直交部分のスペクトルとの距離は正に保たれるので、そこでの逆演算子は正則である。従って特異な成分は式 (@green-projector) の一項に限られる。これは全ての連続固有関数を具体的に構成せずに、極の近くの応答だけを取り出す議論である。

</details>

同じ例 $u=-2\operatorname{sech}^2x$ では、$L\operatorname{sech}x=-\operatorname{sech}x$ と $\int_{\mathbb R}\operatorname{sech}^2x\,dx=2$ から、$\psi_1(x)=\operatorname{sech}x/\sqrt2$ である。点源を $x'=0$ に置き、応答に極の分母 $E+1$ を掛けると、$E\to-1$ で $\psi_1(x)\psi_1(0)=1/(2\cosh x)$ が残る。次の図で示すのはこの極を除いた量であり、極で発散する $G$ 自体ではない。

<div data-visual-slot="green-projector"></div>

<details id="green-projector-formula">
<summary>極を除いた応答の式</summary>

上の例の減衰解と式 (@green-boundary) を使うと、$E=-\kappa^2$、$\kappa\ne1$ で
$$
(E+1)G(x,0;i\kappa)=\frac12 e^{-\kappa|x|}(\kappa+\tanh|x|).
$$
右辺は $\kappa=1$ でも連続で、その値は $\operatorname{sech}x/2$ である。図はこの連続な式を使い、元の $G$ が定義されない固有値でも極限の形を表示している。

</details>


透過波の留数に戻る。$k=i\kappa_n$ では $k^2+\kappa_n^2$ の傾きが $2i\kappa_n$ なので、式 (@green-projector) の留数は $\psi_n(x)\psi_n(x')/(2i\kappa_n)$ である。一方、同じ $G$ の式 (@green-transmission) では $\psi_n(x')=c_nf_-(x',-i\kappa_n)$ を使える。両表示に共通する $f_-(x',-i\kappa_n)$ の係数を比較すると
$$
\operatorname*{Res}_{k=i\kappa_n}[a(k)f_+(x,k)]
=i c_n\psi_n(x)
=i c_n^2 f_-(x,-i\kappa_n).
\tag{transmission-residue}
$$
係数 $i$ は、式 (@green-transmission) の $2ik$ を極で評価した $2i(i\kappa_n)$ と、極の分母の傾き $2i\kappa_n$ の比から出る。透過波の留数は、規格化された束縛状態への射影を、左端の波の規格化で読み直したものである。

## 7. フーリエ積分で束縛状態の寄与を取り出す

式 (@reflected-transform) で反射項の変換は既知データと核で表せた。残る透過項にも、核を取り出すときと同じ自由波の差し引きとフーリエ変換を施す。その被積分関数は
$$
[a(k)f_+(x,k)-e^{ikx}]e^{-iky}
=[a(k)f_+(x,k)e^{-ikx}-1]e^{ik(x-y)}.
$$
$y<x$ では $|e^{ik(x-y)}|=e^{-\operatorname{Im}k(x-y)}$ が上半平面で減衰する。従って実軸を左から右へ進み、上半円で戻る正向きの積分路を使う。括弧内は大きな波数で $O(k^{-1})$、原点近傍では有界であり、大半円と原点を避ける小半円の寄与は消える。評価の詳細は下の補足に置く。

<div data-visual-slot="contour"></div>

この操作が取り出すものを、まず一つの極で見る。上半平面の極 $i\kappa_n$ に対して
$$
\frac1{2\pi}\int_{\mathbb R}
\frac{e^{ik(x-y)}}{k-i\kappa_n}\,dk
=i e^{-\kappa_n(x-y)},\qquad y<x.
\tag{simple-pole-fourier}
$$
これは正向きの留数定理を $2\pi$ で割った因子 $i$ と、極での指数関数の値である。

自由波を除いた透過項 $a(k)f_+(x,k)e^{-ikx}-1$ から、全ての極の主要部を差し引くと、上半平面で正則な部分が残る。その部分の積分は同じ積分路で0になる。各極の係数は式 (@transmission-residue) に $e^{\kappa_nx}$ を掛けたものなので、式 (@simple-pole-fourier) を適用すると
$$
\lim_{R\to\infty}\frac1{2\pi}\int_{-R}^R[a(k)f_+(x,k)-e^{ikx}]e^{-iky}\,dk
=-\sum_{n=1}^N c_n^2 f_-(x,-i\kappa_n)e^{\kappa_n y}.
\tag{transmitted-transform}
$$
負号は、極の係数にある $i$ とフーリエ積分の $i$ の積から出る。残った各項は、束縛状態の波形と左端の振幅を持つ。留数積分は、この透過応答に含まれる束縛状態の成分を一つずつ取り出している。

<details id="contour-estimates">
<summary>積分路の大半円と原点近傍</summary>

大半円を $k=Re^{i\theta}$（$0\le\theta\le\pi$）とする。変換被積分関数は
$$
[a(k)f_+(x,k)e^{-ikx}-1]e^{ik(x-y)}.
$$
括弧内は前の補足から $O(R^{-1})$、線素は $R\,d\theta$ である。以下の $C$ は $R$ に依存しない正の評価定数とする。よって半円積分の絶対値は
$$
C\int_0^\pi e^{-R(x-y)\sin\theta}\,d\theta
=O\!\left(\frac1{R(x-y)}\right)\longrightarrow0.
$$
評価は $0\le\theta\le\pi/2$ で $\sin\theta\ge2\theta/\pi$ を使い、残りは対称性で従う。

原点の零エネルギー共鳴は、両端で有界だが平方可積分ではない非零解が存在する場合をいう。共鳴なしなら $W(0)\ne0$ なので $a=2ik/W=O(k)$。共鳴ありなら $W(0)=0$ である。実軸の流束保存 $|a(k)|^2+|b(k)|^2=1$ と $W=2ik/a$ から $|W(k)|\ge2|k|$。先の境界微分可能性から $W(k)=W'(0)k+o(|k|)$ となり、実軸上の評価で $|W'(0)|\ge2$、よって複素方向からも $a$ は原点近傍で有界である。括弧も有界であり、小半円の長さは $\pi\epsilon$ なので寄与は $O(\epsilon)$。共鳴は負の固有値に対応する束縛状態の和には含まれない。

</details>



式 (@incident-correction) から (@transmitted-transform) までの変換を散乱関係へ代入し、左辺の透過項を留数で置き換える。束縛状態の波形にも同じ変換核 (@jost-transform) が使えるため
$$
f_-(x,-i\kappa_n)e^{\kappa_n y}
=e^{\kappa_n(x+y)}+\int_{-\infty}^xK(x,z)e^{\kappa_n(z+y)}\,dz.
\tag{bound-transform}
$$
連続部分と束縛状態部分に現れる二種類の既知データをまとめて
$$
F(s)=\widehat b(s)/(2\pi)+\sum_{n=1}^Nc_n^2e^{\kappa_ns}
\tag{scattering-data-kernel}
$$
と定義する。式 (@reflected-transform) の二項は反射由来の $\widehat b(x+y)/(2\pi)$ とその核積分であり、式 (@transmitted-transform) の透過変換を右辺へ移すと、式 (@bound-transform) の自由波と核積分がそれぞれ束縛状態項を加える。従って、変換された散乱関係の三項は
$$
\boxed{K(x,y)+F(x+y)+\int_{-\infty}^xK(x,z)F(z+y)\,dz=0,\qquad y<x.}
\tag{glm}
$$
これが左 GLM 方程式である。既知の $F$ に対して、これは $K(x,\cdot)$ の線形積分方程式である。実際のポテンシャルから得た散乱データには、ここまで構成した核が解として存在する。補足で示す一意性により、その核を散乱データから決められる。解を対角へ連続に延長し、式 (@potential-from-diagonal) の対角微分を取れば $u$ が復元される。


<details id="glm-uniqueness">
<summary>左 GLM 方程式の解の一意性</summary>

固定した $x$ で、二つの解の差 $g$ が $(-\infty,x)$ 上で 絶対可積分かつ二乗可積分（$L^1\cap L^2$）とする。その差は
$$
g(y)+\int_{-\infty}^x g(z)F(z+y)\,dz=0,\qquad y<x
$$
を満たす。$g$ を $y\ge x$ で0に延長し、そのフーリエ変換 $\widehat g(k)=\int_{-\infty}^xg(z)e^{-ikz}\,dz$ を用い、式 (@scattering-data-kernel) を代入して差の式に $\overline{g(y)}$ を掛け、$y<x$ で積分する。Fubini と Plancherel の等式を使い、実部を取ると
$$
0=\int_{-\infty}^x|g(y)|^2dy+\frac1{2\pi}\int_{\mathbb R}b(k)\widehat g(k)\overline{\widehat g(-k)}\,dk
+\sum_{n=1}^N c_n^2\left|\int_{-\infty}^x g(y)e^{\kappa_n y}dy\right|^2.
$$
最後の和は非負である。反射項は $b(-k)=\overline{b(k)}$ と $2|\widehat g(k)\widehat g(-k)|\le |\widehat g(k)|^2+|\widehat g(-k)|^2$ から、絶対値が
$$
\frac1{2\pi}\int_{\mathbb R}|b(k)|\,|\widehat g(k)|^2dk
$$
以下である。さらに
$$
\int_{-\infty}^x|g(y)|^2dy=\frac1{2\pi}\int_{\mathbb R}|\widehat g(k)|^2dk.
$$
流束保存は $1=|a(k)|^2+|b(k)|^2$ を与える。また $a(k)W(k)=2ik$ なので、実数 $k\ne0$ で $a(k)\ne0$ である。従って $|b(k)|<1$ となり、実部の等式から
$$
\frac1{2\pi}\int_{\mathbb R}(1-|b(k)|)|\widehat g(k)|^2dk+\sum_{n=1}^Nc_n^2\left|\int_{-\infty}^xg(y)e^{\kappa_ny}dy\right|^2\le0.
$$
左辺は非負なので $\widehat g=0$ ほとんど至る所、Plancherel により $g=0$ である。これによりここで指定した関数クラスで解が一意である。

</details>

## 8. 一つの束縛状態からソリトンを復元する

反射がなく、束縛状態が一つだけの場合に GLM 方程式を解いてみよう。散乱データは固有値 $-\kappa_1^2$ と規格化定数 $c_1>0$ であり、まず時刻を固定する。束縛状態の左端での形を全空間へ延ばした指数関数を
$$
e_1(x)=c_1e^{\kappa_1x}
$$
と書く。Jost 解の核表示に $k=-i\kappa_1$ を代入し、$c_1$ を掛けると、規格化された束縛状態 $\psi_1=c_1f_-(x,-i\kappa_1)$ は
$$
\begin{aligned}
\psi_1(x)=e_1(x)+\int_{-\infty}^xK(x,z)e_1(z)\,dz.
\end{aligned}
\tag{equation-4d4b5b9253}
$$
と表される。

ここで散乱データ関数は $F(x+y)=e_1(x)e_1(y)$ と分離できる。GLM 方程式 (@glm) は
$$
K(x,y)+e_1(y)\left[e_1(x)+\int_{-\infty}^xK(x,z)e_1(z)\,dz\right]=0.
$$
角括弧は式 (@equation-4d4b5b9253) の $\psi_1(x)$ なので、
$$
K(x,y)=-\psi_1(x)e_1(y).
\tag{equation-3e233dbbbe}
$$
固定した $x$ では、未知の核を求める問題が一つの値 $\psi_1(x)$ を求める問題になった。これを式 (@equation-4d4b5b9253) に戻すと、
$$
\psi_1(x)=e_1(x)-\psi_1(x)\int_{-\infty}^xe_1(z)^2\,dz.
$$
積分は $e_1(x)^2/(2\kappa_1)$ だから、
$$
\boxed{\psi_1(x)=\frac{e_1(x)}{1+e_1(x)^2/(2\kappa_1)}.}
\tag{equation-aedf434e36}
$$
自由方程式の解 $e_1$ は右へ向かって増大するが、この分母によって $\psi_1$ は右端でも減衰する。左端の指数的な形から、両端で減衰する束縛状態の波形が復元された。

ポテンシャルは核の対角値から得られる。式 (@equation-3e233dbbbe) と (@equation-aedf434e36) より
$$
K(x,x)=-\frac{e_1(x)^2}{1+e_1(x)^2/(2\kappa_1)}.
\tag{equation-5ae839fb7f}
$$
波形の中心を読み取るため、分母の二項が等しくなる位置を $x_0$ とする。すなわち $c_1^2e^{2\kappa_1x_0}/(2\kappa_1)=1$ と置くと
$$
\frac{e_1(x)^2}{2\kappa_1}=e^{2\kappa_1(x-x_0)},\qquad
K(x,x)=-\kappa_1\left[1+\tanh\!\bigl(\kappa_1(x-x_0)\bigr)\right].
\tag{equation-79f6682db2}
$$
対角復元式 $u=2\,dK(x,x)/dx$ で微分すれば、
$$
\boxed{u(x)=-2\kappa_1^2\operatorname{sech}^2\!\bigl(\kappa_1(x-x_0)\bigr).}
\tag{equation-817ec0d626}
$$
固有値を指定する $\kappa_1$ が最小値 $-2\kappa_1^2$ と幅の尺度 $1/\kappa_1$ を決め、規格化定数 $c_1$ が中心 $x_0$ を決める。

第2節の時間発展 $c_1(t)=c_1(0)e^{-4\kappa_1^3t}$ を戻すと、中心を定める条件 $c_1(t)^2e^{2\kappa_1x_0(t)}/(2\kappa_1)=1$ から
$$
x_0(t)=x_0(0)+4\kappa_1^2t
\tag{equation-adf234d48b}
$$
となる。$\kappa_1$ は時間に依らないので、復元した波は形を保ち、速度 $4\kappa_1^2$ で移動する。これが一ソリトン解である。 水面の変位は $\eta=-u$ なので、その波は高さ $2\kappa_1^2$ の山として進む。

<div data-visual-slot="reconstruction"></div>
