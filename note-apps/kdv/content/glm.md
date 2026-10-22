## 1. 固定ポテンシャルに対するJost解

時間を固定し、滑らかで、すべての導関数が無限遠で任意のべきより速く減衰する実ポテンシャル $u$（Schwartz ポテンシャル）に対する
$$
Lf=k^2f,\qquad L=-\partial_x^2+u(x)
\tag{schrodinger}
$$
を考える。まず固定した $u$ に対して、左端で自由平面波 $e^{ikx}$ に一致する解 $f_-(x,k)$ を構成する。目標は、この波の変形を全波数に共通する積分核で表し、その核の方程式を散乱データから作って $u$ を戻すことである。それぞれの端で $f_\pm(x,k)\sim e^{ikx}$（$x\to\pm\infty$）と規格化した解を Jost 解と呼ぶ。

図では $u(x)=-\operatorname{sech}^2x$ に対する二つの Jost 解の実部を比較する。どちらも基準の自由波は $e^{ikx}$ であり、添字 $\pm$ はその振幅を1にそろえる端を表す。切り替えると、実線が破線の自由波に近づく側が変わる。

<div data-visual-slot="jost-intro"></div>

## 2. Jost解の変換核表示

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
<summary>変換核の級数表示の収束と連続性</summary>

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

## 3. 変換核の対角値とポテンシャルの復元

式 (@kernel-recursion) で $y=x$ とすると、二重積分の条件は $y'\le x'$ と $|x-y'|\le x-x'$ である。後者の下側から $y'\ge x'$ が従うため $y'=x'$ に限られ、この領域は面積ゼロである。したがって対角では二重積分が消え、自由波からの第一項だけが残る。
$$
K(x,x)=\frac12\int_{-\infty}^xu(x')\,dx',\qquad
u(x)=2\frac{d}{dx}K(x,x).
\tag{potential-from-diagonal}
$$
微分は $x$ と二つ目の引数を同時に動かす対角方向の全微分である。Schwartz 条件の下で明示積分を微分すれば、ポテンシャルが直接得られる。後で散乱データから GLM 方程式を解いてこの同じ核 $K$ を得るので、式 (@potential-from-diagonal) によりポテンシャルを復元できる。

## 4. 散乱関係のフーリエ変換

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
逆フーリエ変換で、平面波の重ね合わせの重み $K(x,y)$ を取り出す。$y<x$ では、
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

## 5. 積分路を閉じて留数の和を得る

反射項は、式 (@reflected-transform) により、既知の反射係数 $b$ と、求めたい核 $K$ で表せた。一方、透過項 $a(k)f_+(x,k)$ には、未知のポテンシャルに依存する右 Jost 解 $f_+$ が残っている。この項も既知の散乱データと同じ核 $K$ で表せれば、$K$ の方程式が閉じる。そこで、透過項の逆フーリエ変換を、複素波数の極の留数から求めよう。

式 (@incident-correction) で入射波と自由波の差から $K(x,y)$ を取り出したのと同じように、透過波についても自由波との差を考える。逆フーリエ変換の被積分関数を次のように書くと、自由波に対する補正と、積分路を選ぶ手がかりが分かれる。
$$
[a(k)f_+(x,k)-e^{ikx}]e^{-iky}
=[a(k)f_+(x,k)e^{-ikx}-1]e^{ik(x-y)}.
$$

波数が大きいと、Schrödinger 方程式 $f_{xx}+(k^2-u(x))f=0$ では $k^2$ に対するポテンシャル $u(x)$ の影響が小さくなり、透過波は自由波に近づく。上の括弧内は、自由波に対する補正を表しており、大きな $|k|$ で小さくなる。

さらに、$y<x$ では
$$
|e^{ik(x-y)}|=e^{-\operatorname{Im}k\,(x-y)}
$$
なので、上半平面の奥へ進むほど、この絶対値も小さくなる。この二つの性質により、実軸を左から右へ進み、上半円で戻る積分路では、無限遠を回る部分の寄与が消える。

原点 $k=0$ では、散乱の基準となる二つの自由波 $e^{ikx}$ と $e^{-ikx}$ が一致するため、散乱係数の表示を別途確かめる必要がある。そこで、まず原点を小半円で避けておく。この被積分関数は原点近傍でも有界なので、小半円を縮めると、その積分の寄与も消える。

透過項は上半平面で、孤立した極以外では正則である。従って、無限遠と原点からの寄与を除けば、実軸上の積分には内部の極の留数だけが残る。ここではこれらの性質を用いて先へ進む。解析性と円弧の寄与が消えるための厳密な評価は、[後に示す](#analytic-estimates)。

<div data-visual-slot="contour"></div>



従って、求める積分は上半平面にある極の留数の和になる。
$$
\begin{aligned}
&\lim_{R\to\infty}\frac1{2\pi}\int_{-R}^R[a(k)f_+(x,k)-e^{ikx}]e^{-iky}\,dk\\
&\qquad=i\sum_{\text{上半平面の各極}}\operatorname*{Res}\!\left[(a(k)f_+(x,k)-e^{ikx})e^{-iky}\right].
\end{aligned}
\tag{transmission-residue-sum}
$$
右辺では、各極での被積分関数全体の留数を足している。積分を具体的に求めるために残るのは、極がどこにあり、その留数がいくらかという問題である。

## 6. 入射振幅から極と束縛状態を結び付ける

実波数の散乱では、左から入る波の振幅を1にしたとき、右へ抜ける波の振幅が $a(k)$ である。逆に、右へ抜ける波の振幅を1にそろえた解が $f_+$ なので、その左側の入射波の振幅は $1/a(k)$ になる。実軸上の散乱関係 (@scattering-relation) をこの規格化で書けば
$$
f_+(x,k)=\frac1{a(k)}f_-(x,k)+\frac{b(k)}{a(k)}f_-(x,-k).
$$

この入射振幅の意味から、複素波数での極を考えよう。$k=i\kappa$、$\kappa>0$ では、右端の自由波 $e^{ikx}=e^{-\kappa x}$ は右へ行くほど小さくなる。一方、この自由波は左へ行くほど大きくなる。右端で規格化した $f_+$ が左端でも小さくなるには、左側で大きくなる成分の係数 $1/a(k)$ が0にならなければならない。右端の振幅を1に保ったまま、必要な入射振幅が0になると、$a(k)$ に極が現れる。この両端で小さくなる波形が束縛状態である。以下で、入射振幅を計算してこの関係を確かめる。

入射振幅 $1/a(k)$ を取り出すには、上の散乱関係から反射成分を消せばよい。反射波と同じ解 $f_-(x,-k)$ を第一列に置き、値と傾きからなる行列式
$$
W(x,k)=\det\begin{pmatrix}
f_-(x,-k)&f_+(x,k)\\
\partial_xf_-(x,-k)&\partial_xf_+(x,k)
\end{pmatrix}
\tag{wronskian}
$$
を考える。この行列式は Wronskian である。第二列に散乱関係を代入すると、反射項では二列が比例するため、その行列式は0になる。従って実波数では、入射項だけが残って
$$
W(x,k)=\frac1{a(k)}\det\begin{pmatrix}
f_-(x,-k)&f_-(x,k)\\
\partial_xf_-(x,-k)&\partial_xf_-(x,k)
\end{pmatrix}.
$$

<span id="wronskian-constancy"></span>

この Wronskian は、波数 $k$ を固定すると位置 $x$ によらない。

行列式の微分は、一行ずつ微分した行列式の和である。式 (@wronskian) で上の行を微分すると下の行と同じになるので、この項は0になる。

一方、両解は $f_{xx}=(u(x)-k^2)f$ を満たすため、下の行を微分すると、上の行の $u(x)-k^2$ 倍になる。この項も二行が比例するので0である。従って $\partial_xW(x,k)=0$ となる。以後は $x$ を省略して $W(k)$ と書く。

従って、反射項を消した先の表示で左端の極限を取り、Jost 解とその微分を自由波の表示に置き換えれば
$$
W(k)=\frac1{a(k)}\det\begin{pmatrix}
e^{-ikx}&e^{ikx}\\
-ik e^{-ikx}&ik e^{ikx}
\end{pmatrix}
=\frac{2ik}{a(k)},\qquad
 a(k)=\frac{2ik}{W(k)}.
$$

上半平面では $f_-(x,-k)$ と $f_+(x,k)$ は正則であり、それぞれ左端と右端で小さくなる解である。上の商により $a$ を上半平面へ延長すると、原点以外で極が現れるのは $W(k)=0$ のときである。この条件は二つの解の値と傾きが比例することを意味する。同じ微分方程式の解は値と傾きで決まるため、二つの解は全区間で比例し、両端で小さくなる一つの波形につながる。これが、入射振幅が0になる条件と束縛状態との正確な結び付きである。

例として、$u(x)=-6\operatorname{sech}^2x$ の励起状態 $E=-1$ の近くを調べる。束縛状態では両端で小さくなる一方、エネルギーが固有値から外れると、一方の端で小さくなる Jost 解は他方の端で大きくなる。この違いを見るため、下段には $\log|f_-(x,-k)|$ と $\log|f_+(x,k)|$ を描く。$|f|=Ce^{\alpha x}$ なら $\log|f|=\log C+\alpha x$ なので、指数関数的な振る舞いは直線の傾きとして読める。

上段の $W$ が0になる $E=-1$ では、二つの Jost 解は逆符号で比例し、絶対値の対数は重なる。スライダーでこのエネルギーから離れると、両端で小さくなる一つの解にはつながらなくなる。Jost 解の振幅は端での自由波の規約のままとし、図のための定数倍はしていない。

<div data-visual-slot="matching"></div>

<details>
<summary>図のポテンシャルに対する厳密解</summary>

$k=i\kappa$（$\kappa>0$）に対して
$$
f_+(x,i\kappa)=e^{-\kappa x}
\frac{\kappa^2-1+3\kappa\tanh x+3\tanh^2x}{(\kappa+1)(\kappa+2)},
\qquad f_-(x,-i\kappa)=f_+(-x,i\kappa).
$$
このとき
$$
W(i\kappa)=-2\kappa\frac{(\kappa-1)(\kappa-2)}{(\kappa+1)(\kappa+2)}.
$$
図は励起状態 $E=-1$ の近くに絞っている。この状態では
$$
f_+(x,i)=\tfrac12\operatorname{sech}x\tanh x,
\qquad f_-(x,-i)=-f_+(x,i).
$$
従って原点に節が一つあり、両端で $\log|f_\pm|\sim-|x|$ となる。もう一つの束縛状態は $E=-4$ である。

</details>

両端で指数関数的に小さくなるこの解は平方可積分である。$L$ の自己共役性により固有値 $k^2$ は実数なので、上半平面の零点は $k=i\kappa_n$（$\kappa_n>0$）に限られ、固有値は $-\kappa_n^2$ となる。Schwartz ポテンシャルでは負の固有値は有限個である。次節では、これらの点での留数を求める。

<details id="analytic-estimates">
<summary>積分路を閉じるための評価</summary>

第5節で用いた三点、すなわち上半平面での有理型性、大半円の寄与が消えること、原点での有界性を確かめる。以下では $x$ と $y<x$ を固定する。

**上半平面での解析性。** 左 Jost 解の積分方程式 (@left-jost-integral) で $k$ を $-k$ に置き換え、自由波 $e^{-ikx}$ で割ると
$$
e^{ikx}f_-(x,-k)=1+\int_{-\infty}^x\frac{e^{2ik(x-z)}-1}{2ik}u(z)e^{ikz}f_-(z,-k)\,dz.
$$

この積分核は、$z\le x$ に対して
$$
\frac{e^{2ik(x-z)}-1}{2ik}=\int_0^{x-z}e^{2iks}\,ds
$$
と書ける。閉上半平面では $|e^{2iks}|\le1$ なので、核の絶対値は $x-z$ 以下、$k$ 微分の絶対値は $(x-z)^2$ 以下である。従って原点でも核に特異性はない。

逐次代入の第 $j$ 項の絶対値は、積分変数の順序によって
$$
\frac1{j!}\left(\int_{-\infty}^x(x-z)|u(z)|\,dz\right)^j
$$
以下になる。Schwartz 条件の下でこの級数は局所一様に収束し、$k$ 微分にも上の二次の重みの評価を使える。右 Jost 解も、右端からの積分方程式で同じ評価を満たす。従って両解とその $x$ 微分は上半平面で正則、実軸まで $k$ に関して連続微分可能である。これにより $W$ も同じ性質を持ち、$a=2ik/W$ と透過項は上半平面で有理型になる。

**無限遠での評価。** 閉上半平面では $|e^{2ik(x-z)}-1|\le2$ なので、大きな $|k|$ では積分核の絶対値は $1/|k|$ 以下になる。従って自由波で割った両 Jost 解は $1+O(|k|^{-1})$ である。また、その補正を $x$ で微分すると、核の微分は $e^{2ik(x-z)}$ となり、絶対値は1以下なので、補正の $x$ 微分は $O(1)$ である。これらを Wronskian に代入すれば
$$
W(k)=2ik[1+O(|k|^{-1})],\qquad
 a(k)=1+O(|k|^{-1}),\qquad
 a(k)f_+(x,k)e^{-ikx}-1=O(|k|^{-1}).
$$

大半円 $k=Re^{i\theta}$（$0\le\theta\le\pi$）では、最後の評価と $|e^{ik(x-y)}|=e^{-R(x-y)\sin\theta}$ より、円弧上の積分は
$$
\left|\int_{\text{大半円}}[a(k)f_+(x,k)-e^{ikx}]e^{-iky}\,dk\right|
\le C\int_0^\pi e^{-R(x-y)\sin\theta}\,d\theta
\le\frac{C\pi}{R(x-y)}\longrightarrow0
$$
を満たす。$C$ は $R$ に依存しない定数であり、最後の不等式には $0\le\theta\le\pi/2$ で $\sin\theta\ge2\theta/\pi$ と積分の対称性を使った。

**原点での評価。** 必要なのは $a(k)$ の有界性である。実波数の散乱解では、Schrödinger 方程式から $\operatorname{Im}(\overline f\,\partial_xf)$ が $x$ によらない。入射振幅を1とした解について両端での自由波の漸近形を用いると、$k\ne0$ で
$$
k(1-|b(k)|^2)=k|a(k)|^2,\qquad |a(k)|\le1.
$$
従って $aW=2ik$ より、実軸上で $|W(k)|\ge2|k|$ となる。

$W(0)\ne0$ なら $a=2ik/W$ は原点近傍で有界である。$W(0)=0$ の場合も、既に示した $\partial_k W$ の連続性により、原点から $k$ までの線分で積分して
$$
W(k)=k\int_0^1(\partial_k W)(sk)\,ds=\partial_k W(0)k+o(|k|)
$$
となる。実軸上の $|W(k)|\ge2|k|$ から $|\partial_k W(0)|\ge2$ なので、上半平面から近づいても $a(k)\to\frac{2i}{\partial_k W(0)}$ は有限である。

従って原点では $a(k)$ も $f_+(x,k)$ も有界である。半径 $\epsilon$ の小半円では被積分関数も有界なので、その積分の絶対値は $O(\epsilon)$ であり、$\epsilon\to0$ でゼロになる。以上で、留数の和以外に円弧からの寄与がないことが確かめられた。

両 Jost 解の積分方程式による構成と評価については、[Egorova ほか、§2 の (2.1)–(2.4)](https://arxiv.org/pdf/1411.0021) も参照。

</details>

## 7. 接続条件から透過項の留数を求める

前節で、$W(k)=0$ は左右の減衰解が比例する条件だと分かった。ここでは任意の接続点 $x_*$ で両解をつないだ波形を作り、その傾きの跳びから透過項 $a(k)f_+(x,k)$ の極係数を求める。以下では $E=k^2<0$、$\operatorname{Im}k>0$ とし、束縛状態のエネルギー $E_n=-\kappa_n^2$ の近傍を考える。接続点は $\psi_n(x_*)\ne0$ を満たすように選ぶ。

左端で減衰する解を $x_*$ まで、右端で減衰する解をそこから先に用いて、次の連続な波形を定める：
$$
f(x;E,x_*)=f_-(x,-k)f_+(x_*,k)\Theta(x_*-x)
+f_+(x,k)f_-(x_*,-k)\Theta(x-x_*).
\tag{matching-def}
$$
ここで $\Theta$ は Heaviside 関数である。接続点での値は両側とも $f_-(x_*,-k)f_+(x_*,k)$ となる。右側の傾きから左側の傾きを引くと、Wronskian の定義そのものから $W(k)$ になる。次の図では、同じポテンシャルに対して接続点を動かせる。束縛状態のエネルギーでは、接続点を変えても波形は同じ固有関数に比例する。

<div data-visual-slot="joined-wave"></div>

接続点での値で割った傾きの跳びを
$$
\Delta(E;x_*)=\frac{\partial_xf_+(x_*,k)}{f_+(x_*,k)}
-\frac{\partial_xf_-(x_*,-k)}{f_-(x_*,-k)}
,\qquad E=k^2
\tag{matching-slope-difference}
$$
と定める。Wronskian の定義から、
$$
\begin{aligned}
W(k)
&=f_-(x_*,-k)\partial_xf_+(x_*,k)
-\partial_xf_-(x_*,-k)f_+(x_*,k)\\
&=f_-(x_*,-k)f_+(x_*,k)\Delta(E;x_*).
\end{aligned}
\tag{matching-wronskian-factorization}
$$
であり、$a=2ik/W$ を使うと
$$
a(k)f_+(x,k)=\frac{2ik}{\Delta(E;x_*)}\,
\frac{f_+(x,k)}{f_-(x_*,-k)f_+(x_*,k)}.
\tag{transmission-from-matching}
$$
となる。右辺の比は $E_n$ で有限であり、極の係数は $\Delta(E;x_*)$ の零点近傍の変化で決まる。

### 接続に必要な点ポテンシャル

式 (@matching-def) の波形は連続なので、二階の分布微分では傾きの跳びだけがデルタ項になる。従って $(L-E)f=-W(k)\delta(x-x_*)$ である。一方、点ポテンシャル $\Delta(E;x_*)\delta(x-x_*)$ を加えると、その寄与は $\Delta(E;x_*)f(x_*;E,x_*)\delta(x-x_*)$ となる。式 (@matching-wronskian-factorization) より係数は $W(k)$ に等しいため、
$$
\begin{gathered}
(L-E)f=-W(k)\delta(x-x_*),\\
[L+\Delta(E;x_*)\delta(x-x_*)]f=Ef.
\end{gathered}
\tag{matching-point-potential}
$$
つまり、$\Delta(E;x_*)$ はこの接続波形をエネルギー $E$ の固有関数にする点ポテンシャルの強さである。$\Delta=0$ なら元の $L$ の束縛状態になる。

元の束縛状態 $\psi_n$ を実数値に選び、$\int_{\mathbb R}\psi_n(x)^2dx=1$ と規格化する。点ポテンシャルによる固有関数とエネルギーの一次の変化を $\delta\psi$、$\delta E$ とすると、固有値方程式の一次の項は
$$
(L-E_n)\delta\psi+\Delta(E;x_*)\delta(x-x_*)\psi_n
=\delta E\,\psi_n.
$$
両辺に $\psi_n$ を掛けて積分する。$L$ の自己共役性と $(L-E_n)\psi_n=0$ により第一項の積分は0になる。デルタ関数の項の積分は $\Delta(E;x_*)|\psi_n(x_*)|^2$ なので、$\delta E=\Delta(E;x_*)|\psi_n(x_*)|^2$ となる。
したがって、
$$
E-E_n=\Delta(E;x_*)\,|\psi_n(x_*)|^2+O(\Delta(E;x_*)^2).
\tag{matching-norm}
$$
が成り立つ。この関係を透過項の極係数に使う。

### 点ポテンシャルへの応答が留数を決める

束縛状態では両 Jost 解は同じ固有関数に比例する。左 Jost 解に合わせて符号を選んだ実規格化固有関数を
$$
\begin{gathered}
\psi_n(x)=c_nf_-(x,-i\kappa_n),\qquad c_n>0,\\
c_n^{-2}=\int_{\mathbb R}f_-(z,-i\kappa_n)^2\,dz
\end{gathered}
\tag{bound-normalization}
$$
とする。$E\to E_n$ で $f_+(x,k)/f_+(x_*,k)\to\psi_n(x)/\psi_n(x_*)$ だから、式 (@transmission-from-matching) と (@matching-norm) より
$$
\begin{aligned}
\frac{a(k)f_+(x,k)}{2ik}
&=\frac{f_+(x,k)}{f_+(x_*,k)f_-(x_*,-k)}\,
\frac{1}{\Delta(E;x_*)}\\
&=\underbrace{\frac{\psi_n(x_*)}{f_-(x_*,-i\kappa_n)}}_{c_n}
\frac{\psi_n(x)}{E-E_n}+O(1)\\
&=\frac{c_n\psi_n(x)}{E-E_n}+O(1).
\end{aligned}
\tag{transmission-energy-pole}
$$
接続点での値の比は、$\psi_n(x_*)=c_nf_-(x_*,-i\kappa_n)$ より $c_n$ に等しい。したがって極係数は接続点 $x_*$ に依存しない。

最後に $E-E_n=(k-i\kappa_n)(k+i\kappa_n)$ なので
$$
\frac{2ik}{E-E_n}=\frac{i}{k-i\kappa_n}+O(1).
$$
したがって $a(k)$ は $k=i\kappa_n$ に単純極を持ち、透過項の留数は
$$
\operatorname*{Res}_{k=i\kappa_n}[a(k)f_+(x,k)]
=i c_n\psi_n(x)=i c_n^2f_-(x,-i\kappa_n).
\tag{transmission-residue}
$$

この一次摂動関係は、$u(x)=-2\operatorname{sech}^2x$ の、束縛状態を一つ持つ例でも確かめられる。この場合 $E_1=-1$、$\psi_1(x)=\operatorname{sech}x/\sqrt2$ なので、原点 $x_*=0$ では $E=-1+\Delta/2+O(\Delta^2)$ となる。下図は厳密な関係と一次摂動を比較する。

<div data-visual-slot="point-spectrum"></div>

<details>
<summary>図に使った厳密解</summary>

$E=-\kappa^2$（$\kappa>0$）とし、接続波形を原点での値で割ると
$$
\frac{f(x;E,0)}{f(0;E,0)}=e^{-\kappa|x|}\frac{\kappa+\tanh|x|}{\kappa}.
$$
その左右の傾きの差から
$$
\begin{gathered}
\Delta(E;0)=2(\kappa^{-1}-\kappa),\\
E=-\left(\frac{\sqrt{\Delta^2+16}-\Delta}{4}\right)^2
\end{gathered}
$$
を得る。図の実線にはこの厳密な関係を使っている。

</details>

式 (@transmission-residue-sum) で、各極 $k=i\kappa_n$ における留数は、式 (@transmission-residue) に $e^{\kappa_n y}$ を掛けたものである。従って、
$$
\lim_{R\to\infty}\frac1{2\pi}\int_{-R}^R[a(k)f_+(x,k)-e^{ikx}]e^{-iky}\,dk
=-\sum_{n=1}^N c_n^2f_-(x,-i\kappa_n)e^{\kappa_n y}.
\tag{transmitted-transform}
$$
となる。負号は極の係数の $i$ とフーリエ積分の $i$ の積から生じる。

<details id="simple-pole-fourier-proof">
<summary>一つの単純極が与える積分</summary>

上半平面の極 $i\kappa_n$ に対して、
$$
\frac1{2\pi}\int_{\mathbb R}\frac{e^{ik(x-y)}}{k-i\kappa_n}\,dk
=i e^{-\kappa_n(x-y)},\qquad y<x.
\tag{simple-pole-fourier}
$$
正向きの留数定理を $2\pi$ で割った因子 $i$ と、極での指数関数の値が現れる。

</details>

式 (@reflected-transform) の反射項は既知データと核で表せている。式 (@transmitted-transform) を散乱関係の変換へ代入するため、束縛状態の波形にも同じ核表示 (@jost-transform) を使うと
$$
f_-(x,-i\kappa_n)e^{\kappa_n y}
=e^{\kappa_n(x+y)}+\int_{-\infty}^xK(x,z)e^{\kappa_n(z+y)}\,dz.
\tag{bound-transform}
$$
反射項には $\widehat b(s)/(2\pi)$、束縛状態項には $\sum_{n=1}^N c_n^2e^{\kappa_ns}$ が現れる。どちらも、積分の外では $s=x+y$、核の積分内では $s=z+y$ という同じ引数で評価される。そこで、この二つの既知データの和を一つの関数にまとめる：
$$
F(s)=\underbrace{\frac1{2\pi}\int_{\mathbb R}b(k)e^{-iks}\,dk}_{\widehat b(s)/(2\pi)}
+\sum_{n=1}^Nc_n^2e^{\kappa_ns}.
\tag{scattering-data-kernel}
$$
入射項と反射項の変換の和から透過項の変換を引くと0になる。式 (@reflected-transform)、(@transmitted-transform)、(@bound-transform) を代入すると、透過項を引く負号と式 (@transmitted-transform) の負号により、束縛状態項は正となる：
$$
\begin{aligned}
0={}&K(x,y)\\
&+\underbrace{\frac{\widehat b(x+y)}{2\pi}
+\sum_{n=1}^Nc_n^2e^{\kappa_n(x+y)}}_{F(x+y)}\\
&+\int_{-\infty}^xK(x,z)\,\Bigl[\\
&\quad\underbrace{\frac{\widehat b(z+y)}{2\pi}
+\sum_{n=1}^Nc_n^2e^{\kappa_n(z+y)}}_{F(z+y)}\Bigr]\,dz.
\end{aligned}
\tag{glm-data-assembly}
$$
となる。積分の外の二項は $F(x+y)$、積分内の二項は $F(z+y)$ そのものである。従って、
$$
\begin{gathered}
\boxed{\begin{aligned}
0={}&K(x,y)+F(x+y)\\
&+\int_{-\infty}^xK(x,z)F(z+y)\,dz.
\end{aligned}}\\
y<x.
\end{gathered}
\tag{glm}
$$
となる。これが左 GLM 方程式である。既知の $F$ に対して、これは $K(x,\cdot)$ の線形積分方程式である。実際のポテンシャルから得た散乱データには、ここまで構成した核が解として存在する。補足で示す一意性により、その核を散乱データから決められる。解を対角へ連続に延長し、式 (@potential-from-diagonal) の対角微分を取れば $u$ が復元される。


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


## 8. 一ソリトン解の復元

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
