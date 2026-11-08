### 3.1. Jost解と変換核

散乱データの時間発展が求まったので、各時刻の波形 $u(x,t)$ を復元する問題に戻ろう。ここで新しい見方として、自由波 $e^{ikx}$ を Jost 解 $f_-(x,k)$ に移す作用素を導入する。この作用素は線形な積分方程式から求められ、ポテンシャルはその作用素から復元できる。

以下では、滑らかで、すべての導関数が無限遠で任意のべきより速く減衰する実ポテンシャル $u$（Schwartz ポテンシャル）に対する
$$
Lf=k^2f,\qquad L=-\partial_x^2+u(x)
\tag{schrodinger}
$$
を考える。それぞれの端で $f_\pm(x,k)\sim e^{ikx}$（$x\to\pm\infty$）と規格化した解を Jost 解と呼ぶ。

<div data-visual-slot="jost-intro"></div>

#### 3.1.1. Jost解とDyson展開

左 Jost 解は、左端で自由波 $e^{ikx}$ に一致する。ポテンシャルによる作用を、左から通過する順序に重ねることで、この自由波から $f_-(x,k)$ への変化を表そう。

実数 $k\ne0$ を考える。自由波の傾きには、値に比べて $ik$ が一つ余分に付く。そこで、傾きを $ik$ で割って値と同じ尺度にそろえ、
$$
\boldsymbol{f}=\begin{pmatrix}f\\ f_x/(ik)\end{pmatrix}
$$
を状態とする。自由波の状態は
$$
e^{ikx}\begin{pmatrix}1\\1\end{pmatrix}
$$
となる。

Schrödinger 方程式 $f_{xx}+k^2f=uf$ は
$$
\frac{d\boldsymbol{f}}{dx}=(D_0+V(x))\boldsymbol{f},\qquad
D_0=ik\begin{pmatrix}0&1\\1&0\end{pmatrix},\qquad
V(x)=\frac{u(x)}{ik}\begin{pmatrix}0&0\\1&0\end{pmatrix}
\tag{spatial-state}
$$
と書ける。$D_0$ は自由伝播を、$V$ はポテンシャルの作用を表す。

自由伝播を取り除く相互作用描像
$$
\boldsymbol{f}_{\mathrm I}(x)=e^{-xD_0}\boldsymbol{f}(x),\qquad
V_{\mathrm I}(x)=e^{-xD_0}V(x)e^{xD_0}
$$
では、
$$
\frac{d\boldsymbol{f}_{\mathrm I}}{dx}=V_{\mathrm I}(x)\boldsymbol{f}_{\mathrm I}(x).
$$
左 Jost 解の境界条件は、この表示では
$$
\boldsymbol{f}_{\mathrm I}(x)\longrightarrow\begin{pmatrix}1\\1\end{pmatrix}
\qquad(x\to-\infty)
$$
となる。したがって、各位置の作用を順に重ねた Dyson 展開は
$$
\boldsymbol{f}_{\mathrm I}(x)=\Bigg[I
+\int_{-\infty}^{x}V_{\mathrm I}(x_1)\,dx_1
+\int_{-\infty}^{x}dx_1\int_{-\infty}^{x_1}dx_2\,
V_{\mathrm I}(x_1)V_{\mathrm I}(x_2)+\cdots\Bigg]\begin{pmatrix}1\\1\end{pmatrix}.
\tag{jost-dyson}
$$
先に通る位置の作用が右に置かれる。

零次項は自由波そのものである。それ以外の項には、ポテンシャルの作用が少なくとも一つ含まれる。行列のノルムには、二成分の ユークリッドノルムから定まる作用素ノルムを用いる。実数 $k$ では自由伝播がユニタリなので、
$$
\|V_{\mathrm I}(x)\|=\|V(x)\|=\frac{|u(x)|}{|k|}.
$$
各作用が $1/k$ を伴うため、固定した $x$ で $|k|\to\infty$ とすると補正が小さくなり、
$$
f_-(x,k)=e^{ikx}+O(|k|^{-1})
\tag{jost-high-frequency}
$$
となる。

#### 3.1.2. 変換核と作用素

Dyson 展開の補正を位置表示で書いたものを、変換核 $K(x,y)$ と定める：
$$
K(x,y):=\frac1{2\pi}\int_{\mathbb R}\bigl[f_-(x,k)-e^{ikx}\bigr]e^{-iky}\,dk.
\tag{kernel-fourier}
$$
自由波の Fourier 変換はデルタ関数を与える。一方、補正は高周波で小さくなるため、この残りは関数カーネルとして表される。

核の定義の被積分関数を
$$
\bigl[e^{-ikx}f_-(x,k)-1\bigr]e^{ik(x-y)}
$$
と書く。$y>x$ では、最後の指数因子が下半平面で減衰するので、積分路を下に閉じることを考える。そこで、角括弧内の因子の特異点と、無限遠での振る舞いを確かめる。

自由波の因子を除いた自由伝播は、下半平面で増大しない。自由伝播を各作用の間に戻して評価すると、Dyson 級数は下半平面内でも収束し、各項の正則性が保たれる。従って、固定した $x$ に対する $f_-(x,k)$ は、下半平面の内部に特異点を持たない。同じ評価から、自由波で割った補正 $e^{-ikx}f_-(x,k)-1$ は、閉下半平面で一様に $O(|k|^{-1})$ となる。

従って、$y>x$ では積分路を下に閉じることができ、Cauchy の積分定理から $K(x,y)=0$ を得る。

Schwartz ポテンシャルでは、$K$ は $y\le x$ の側で対角線まで滑らかである。Fourier 変換を戻すと、
$$
f_-(x,k)=e^{ikx}+\int_{-\infty}^{x}K(x,y)e^{iky}\,dy.
\tag{jost-transform}
$$

<details id="kernel-convergence">
<summary>Convergence, support, and regularity</summary>

Dyson 展開の $n$ 次項のノルムは
$$
\frac{\sqrt2}{n!}\left(\frac1{|k|}\int_{-\infty}^{x}|u(s)|\,ds\right)^n
$$
以下である。したがって級数は絶対収束し、補正全体は
$$
|f_-(x,k)-e^{ikx}|\le\sqrt2\left[
\exp\left(\frac1{|k|}\int_{-\infty}^{x}|u(s)|\,ds\right)-1\right]
=O(|k|^{-1})
$$
と評価される。

固定した $x$ について、Jost 解は $k=0$ の近くでも連続である。したがって
$$
\int_{\mathbb R}|f_-(x,k)-e^{ikx}|^2\,dk<\infty.
$$
核の定義で積分範囲を $[-R,R]$ に切ったものを $K_R$ とすると、$T>R$ に対し Plancherel の等式により
$$
\int_{\mathbb R}|K_T(x,y)-K_R(x,y)|^2\,dy
=\frac1{2\pi}\int_{R<|k|\le T}|f_-(x,k)-e^{ikx}|^2\,dk
\longrightarrow0.
$$
このため、$K_R$ は二乗誤差がゼロになる意味で一つの関数 $K$ に収束する。

片側支持を見るには、同じ Dyson 展開を、自由伝播を各作用の間に戻した形で複素波数へ延ばす。自由波の因子を除いた自由伝播は、距離 $d\ge0$ に対して
$$
e^{-ikd}e^{dD_0}
$$
であり、その固有値は $1$ と $e^{-2ikd}$ である。したがって下半平面では
$$
\left\|e^{-ikd}e^{dD_0}\right\|\le1.
$$
有限な始点 $x_*$ からの Dyson 展開では、各自由伝播の距離の和は $x-x_*$ である。全体から自由波の因子を除けば、各自由伝播因子にこの評価を適用できる。積分可能な $u$ の左端の尾を落とした誤差はゼロに近づくので、$x_*\to-\infty$ の極限でも同じ評価が保たれる。級数は $k\ne0$ の下半平面の各コンパクト集合で一様収束する。したがって
$$
e^{-ikx}f_-(x,k)-1
$$
は下半平面で正則であり、閉下半平面で一様に $O(|k|^{-1})$ となる。

核を
$$
K(x,y)=\frac1{2\pi}\int_{\mathbb R}
\bigl[e^{-ikx}f_-(x,k)-1\bigr]e^{ik(x-y)}\,dk
$$
と書けば、$y>x$ のとき指数因子は下半平面で減衰する。積分路を下に閉じると内部に特異点はないため、$K(x,y)=0$ を得る。原点近傍の連続性により、原点を避ける小円弧の寄与もゼロになる。

対角線までの滑らかさと、$y\to-\infty$ での減衰については、Schwartz ポテンシャルに対する変換核の標準的な正則性結果を用いる。この滑らかな代表の、$y\le x$ 側からの対角値を $K(x,x)$ とする。零近傍での Jost 解の連続性と変換核の性質については、文献 [[4]](#ref-egorova) の §2 を参照。同論文の左 Jost 解の波数を $-k$ に置き換えると、本節の規約になる。

核表示は下半平面にも延びる。特に $k=-i\kappa$（$\kappa>0$）では、$y\to-\infty$ で $e^{iky}=e^{\kappa y}$ が減衰するため、後で束縛状態にも同じ表示を用いられる。

</details>

自由波を Jost 解へ置き換える線形作用素 $S$ を、Fourier 係数を保った重ね合わせによって定める：
$$
g(x)=\frac1{2\pi}\int_{\mathbb R}\widehat g(k)e^{ikx}\,dk,\qquad
(Sg)(x)=\frac1{2\pi}\int_{\mathbb R}\widehat g(k)f_-(x,k)\,dk.
$$
まず $g$ は Schwartz 関数とする。核の表示を代入すると、
$$
(Sg)(x)=g(x)+\int_{-\infty}^{x}K(x,y)g(y)\,dy.
\tag{dressing-transform}
$$
位置 $x$ での出力は、入力 $g$ の $y\le x$ における値だけで決まる。
Dyson 展開の零次項が恒等作用素を与え、ポテンシャルによる補正全体が $K$ に収められている。

#### 3.1.3. 変換核からのポテンシャルの復元

この作用素からポテンシャルを取り出そう。自由波と Jost 解は、それぞれ
$$
\begin{aligned}
-\partial_x^2e^{ikx}&=k^2e^{ikx},\\
(-\partial_x^2+u)f_-(x,k)&=k^2f_-(x,k).
\end{aligned}
$$
を満たす。$S$ は $e^{ikx}$ を $f_-(x,k)$ へ移すので、
$$
\begin{aligned}
L(Se^{ikx})&=k^2f_-(x,k)\\
&=S(-\partial_x^2e^{ikx}).
\end{aligned}
$$
つまり、$S$ で Jost 解へ移してから $L$ を作用させても、先に自由波へ $-\partial_x^2$ を作用させてから $S$ で移しても、結果は同じである。任意の Schwartz 関数は平面波の Fourier 重ね合わせで表されるので、線形性により、この二つの作用順序はその関数に対しても同じ結果を与える。従って、
$$
LS=S(-\partial_x^2),
\tag{dressing-intertwining}
$$
$L=-\partial_x^2+u$ を代入すると、
$$
[\partial_x^2,S]=uS.
$$
右辺 $uS$ は、入力 $g$ に対して $u(x)g(x)$ と積分項を与える。$u(x)g(x)$ の項は、積分核では $u(x)\delta(x-y)$ になる。したがって、左辺の交換子の核からデルタ関数の係数を取り出せば、$u(x)$ を復元できる。

この係数を調べるために、$S$ を核で表そう。$S$ の核は
$$
\delta(x-y)+\Theta(x-y)K(x,y)
$$
である。ここで $\Theta$ は Heaviside 関数である。以下では、この核の微分を分布の意味で扱う。

$\partial_x^2S$ では、$S$ の出力を $x$ で微分するので、核の $x$ 微分が現れる。
$$
\partial_x^2(Sg)(x)
=g''(x)+\int_{\mathbb R}\partial_x^2[\Theta(x-y)K(x,y)]g(y)\,dy.
$$
一方、$S\partial_x^2$ では、入力を微分してから $S$ を作用させる。積分内では入力の変数は $y$ なので、
$$
(S\partial_x^2g)(x)
=g''(x)+\int_{\mathbb R}\Theta(x-y)K(x,y)g''(y)\,dy.
$$
分布の微分の定義に従って2回部分積分すると、入力の微分が核の $y$ 微分に移る。
$$
(S\partial_x^2g)(x)
=g''(x)+\int_{\mathbb R}\partial_y^2[\Theta(x-y)K(x,y)]g(y)\,dy.
$$

この二つの作用の差を取ると、恒等作用素に由来する $g''(x)$ が消える。従って、交換子 $[\partial_x^2,S]$ の核は
$$
(\partial_x^2-\partial_y^2)[\Theta(x-y)K(x,y)]
$$
である。右辺 $uS$ の核と等しいことから、
$$
(\partial_x^2-\partial_y^2)(\Theta K)
=u(x)\delta(x-y)+u(x)\Theta K.
$$
左辺に含まれるデルタ関数を取り出すため、
$$
\partial_x^2-\partial_y^2
=(\partial_x-\partial_y)(\partial_x+\partial_y)
$$
と因数分解する。$\Theta$ は $x-y$ だけの関数だから、
$$
(\partial_x+\partial_y)(\Theta K)=\Theta(K_x+K_y),\qquad
(\partial_x-\partial_y)\Theta(x-y)=2\delta(x-y).
$$
したがって、
$$
(\partial_x^2-\partial_y^2)(\Theta K)
=2\delta(x-y)(K_x+K_y)(x,x)+\Theta(K_{xx}-K_{yy}).
$$
デルタ関数の係数を比べれば、
$$
u(x)=2(K_x+K_y)(x,x).
$$
右辺は対角線に沿った微分なので、
$$
u(x)=2\frac{d}{dx}K(x,x).
\tag{potential-from-diagonal}
$$

積分の境界を微分したときに生じる局所的な作用が、ポテンシャル $u(x)$ に一致する。次に、この $K$ を散乱データから決める線形積分方程式を導く。


### 3.2. GLM方程式

#### 3.2.1. 散乱関係の逆フーリエ変換

前章で求めた散乱データから、変換核 $K$ を決める方程式を作ろう。$k>0$ の左入射波は左端で入射波 $f_-(x,k)$ と反射波 $b(k)f_-(x,-k)$ の和、右端で透過波 $a(k)f_+(x,k)$ と書ける。$a$ は透過係数、$b$ は左反射係数であり、同じ解の二つの表示から実軸上
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
核の定義 (@kernel-fourier) に従って、散乱関係から $K(x,y)$ を取り出す。$y<x$ では、
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
=\frac{\widehat b(x+y)}{2\pi}+\int_{-\infty}^xK(x,z)\frac{\widehat b(z+y)}{2\pi}\,dz.
\tag{reflected-transform}
$$
自由波では指数が $e^{-ik(x+y)}$、核の項では $e^{-ik(z+y)}$ となるため、それぞれ $\widehat b$ の引数が $x+y,z+y$ になる。積分交換は $K(x,\cdot)$ の可積分性と反射係数の減衰で許される。

#### 3.2.2. 透過項の留数積分

反射項は、式 (@reflected-transform) により、既知の反射係数 $b$ と、求めたい核 $K$ で表せた。一方、透過項 $a(k)f_+(x,k)$ には、未知のポテンシャルに依存する右 Jost 解 $f_+$ が残っている。この項も既知の散乱データと同じ核 $K$ で表せれば、$K$ の方程式が閉じる。そこで、透過項の逆フーリエ変換を、複素波数の極の留数から求めよう。

式 (@incident-correction) で入射波と自由波の差から $K(x,y)$ を取り出したのと同じように、透過波についても自由波との差を考える。逆フーリエ変換の被積分関数を次のように書くと、自由波に対する補正と、積分路を選ぶ手がかりが分かれる。
$$
[a(k)f_+(x,k)-e^{ikx}]e^{-iky}
=[a(k)f_+(x,k)e^{-ikx}-1]e^{ik(x-y)}.
$$

式 (@jost-high-frequency) の左 Jost 解と同様に、右 Jost 解も高周波で自由波に近づく。透過係数も $a(k)=1+O(|k|^{-1})$ を満たすので、上の括弧内は大きな $|k|$ で $O(|k|^{-1})$ となる。

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
\lim_{R\to\infty}\frac1{2\pi}\int_{-R}^R[a(k)f_+(x,k)-e^{ikx}]e^{-iky}\,dk
=i\sum_{\text{上半平面の各極}}\operatorname*{Res}\!\left[(a(k)f_+(x,k)-e^{ikx})e^{-iky}\right].
\tag{transmission-residue-sum}
$$
右辺では、各極での被積分関数全体の留数を足している。積分を具体的に求めるために残るのは、極がどこにあり、その留数がいくらかという問題である。

#### 3.2.3. 透過項の極と束縛状態

実波数の散乱では、左から入る波の振幅を1にしたとき、右へ抜ける波の振幅が $a(k)$ である。逆に、右へ抜ける波の振幅を1にそろえた解が $f_+$ なので、その左側の入射波の振幅は $1/a(k)$ になる。実軸上の散乱関係 (@scattering-relation) をこの規格化で書けば
$$
f_+(x,k)=\frac1{a(k)}f_-(x,k)+\frac{b(k)}{a(k)}f_-(x,-k).
$$

束縛状態の固有値は負の実数 $k^2=-\kappa^2$（$\kappa>0$）なので、上半平面で対応する波数は $k=i\kappa$ である。右 Jost 解 $f_+(x,i\kappa)$ は、右端で $e^{-\kappa x}$ に漸近する。左端の増大成分の係数は $1/a(i\kappa)$ である。

<div data-visual-slot="imaginary-jost"></div>

両端で減衰する束縛状態は、$1/a(i\kappa)=0$、すなわち $k=i\kappa$ における $a(k)$ の極に対応する。

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

極で得られる解は、両端で指数関数的に減衰するため平方可積分である。実ポテンシャルに対する $L$ は自己共役なので、その固有値 $k^2$ は実数となる。従って、
$$
0=\operatorname{Im}(k^2)
=2\operatorname{Re}k\,\operatorname{Im}k.
$$
上半平面では $\operatorname{Im}k>0$ だから、$\operatorname{Re}k=0$ でなければならない。これにより、上半平面にある透過係数の極は正の虚軸上の $k=i\kappa_n$（$\kappa_n>0$）に限られ、固有値は $-\kappa_n^2$ となる。Schwartz ポテンシャルでは負の固有値は有限個である。

<div data-visual-slot="matching"></div>

<details>
<summary>図に示したポテンシャルの厳密解</summary>

$k=i\kappa$（$\kappa>0$）に対して
$$
f_+(x,i\kappa)=e^{-\kappa x}\frac{\kappa+\tanh x}{\kappa+1},
\qquad
f_-(x,-i\kappa)=e^{\kappa x}\frac{\kappa-\tanh x}{\kappa+1}.
$$
これらは $L=-\partial_x^2-2\operatorname{sech}^2x$ の固有値方程式を満たし、それぞれの端で所定の自由波に漸近する。$x=0$ で値と微分を評価すると、
$$
W(i\kappa)
=\frac{\kappa}{\kappa+1}(1-\kappa)
-(\kappa-1)\frac{\kappa}{\kappa+1}
=-2\kappa\frac{\kappa-1}{\kappa+1}.
$$
従って $\kappa=1$、すなわち $E=-1$ で $W=0$ となり、
$$
f_-(x,-i)=f_+(x,i)=\tfrac12\operatorname{sech}x.
$$
二つの Jost 解が同じ、両端で減衰する波形を表している。

</details>

<details id="analytic-estimates">
<summary>透過項の解析性と円弧積分の評価</summary>

先ほどの積分路の議論で用いた三点、すなわち上半平面での有理型性、大半円の寄与が消えること、原点での有界性を確かめる。以下では $x$ と $y<x$ を固定する。

**上半平面での解析性。** 零近傍までの性質を確かめるため、Schrödinger 方程式と左端の境界条件を積分した表示を用いる。自由波 $e^{-ikx}$ を除くと、
$$
e^{ikx}f_-(x,-k)=1+\int_{-\infty}^x\frac{e^{2ik(x-z)}-1}{2ik}u(z)e^{ikz}f_-(z,-k)\,dz.
\tag{left-jost-integral}
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

両 Jost 解の積分方程式による構成と評価については、文献 [[4]](#ref-egorova) の §2, (2.1)–(2.4) も参照。

</details>

#### 3.2.4. 減衰解の接続条件

前の小節で極の位置が分かったので、次は透過項 $a(k)f_+(x,k)$ の留数を求める。固有エネルギーから少し離れると、左右の減衰解はそのままではつながらない。その不一致を傾きの差として表し、透過項の分母と結び付けよう。

以下では $E=k^2<0$、$\operatorname{Im}k>0$ とし、束縛状態のエネルギー $E_n=-\kappa_n^2$ の近傍を考える。固有値 $E_n$ の束縛状態 $\psi_n$ が0でない点を接続点 $x_0$ に選び、以後固定する。固有エネルギーでは両 Jost 解が $\psi_n$ に比例するので、$f_-(x_0,-i\kappa_n)$ と $f_+(x_0,i\kappa_n)$ はともに0でない。連続性により、$E_n$ の十分小さい近傍でも両者は0でない。そこで、$f_-(x,-k)$ と $f_+(x,k)$ をそれぞれ $x_0$ での値で割り、接続点での値を1にそろえて接続する：
$$
\begin{aligned}
f(x;E)&=\frac{f_-(x,-k)}{f_-(x_0,-k)}\Theta(x_0-x)\\
&\quad+\frac{f_+(x,k)}{f_+(x_0,k)}\Theta(x-x_0).
\end{aligned}
\tag{matching-def}
$$
$\Theta$ は Heaviside 関数であり、$\Theta(0)=1/2$ とする。この波形は $f(x_0;E)=1$ で連続だが、一般には左右の傾きが異なる。その差を
$$
\begin{aligned}
\Delta(E)&:=\partial_xf(x_0^+;E)-\partial_xf(x_0^-;E)\\
&=\frac{\partial_xf_+(x_0,k)}{f_+(x_0,k)}
-\frac{\partial_xf_-(x_0,-k)}{f_-(x_0,-k)}
\end{aligned}
\tag{matching-slope-difference}
$$
と定める。

<div data-visual-slot="joined-wave"></div>

式 (@wronskian) により、
$$
\begin{aligned}
\Delta(E)&=
\frac{f_-(x_0,-k)\partial_xf_+(x_0,k)-\partial_xf_-(x_0,-k)f_+(x_0,k)}
{f_-(x_0,-k)f_+(x_0,k)}\\
&=\frac{W(k)}{f_-(x_0,-k)f_+(x_0,k)}.
\end{aligned}
\tag{matching-wronskian-factorization}
$$
従って $a=2ik/W$ を使うと、
$$
a(k)f_+(x,k)=\frac{2ik}{\Delta(E)}\,
\frac{f_+(x,k)}{f_-(x_0,-k)f_+(x_0,k)}.
\tag{transmission-from-matching}
$$
となる。右辺の比は $E_n$ で有限であり、極の係数は $\Delta(E)$ の零点近傍の変化で決まる。

#### 3.2.5. 傾きの跳びと点ポテンシャル

透過項の留数を決めるには、$\Delta(E)$ が固有エネルギー $E_n$ の近くでどう変化するかを知ればよい。そのために、点ポテンシャルを加えたときの束縛状態のエネルギーの変化を求める。式 (@matching-def) の $f(x;E)$ は連続で、傾きの跳びは $\Delta(E)$ なので、二階の分布微分は
$$
\partial_x^2 f=(u-E)f+\Delta(E)\delta(x-x_0)
$$
となる。従って、$f(x_0;E)=1$ を使うと
$$
[L+\Delta(E)\delta(x-x_0)]f=Ef.
\tag{matching-point-potential}
$$
$\Delta(E)$ は、この波形をエネルギー $E$ の固有関数にする点ポテンシャルの強さである。

点ポテンシャルによるエネルギーの一次の変化は、その位置での束縛状態の確率密度に比例する。実数値の束縛状態 $\psi_n$ を $L\psi_n=E_n\psi_n$、$\int_{\mathbb R}\psi_n(x)^2dx=1$ と規格化すると、
$$
\begin{aligned}
E-E_n
&=\int_{\mathbb R}\psi_n(x)\,[\Delta(E)\delta(x-x_0)]\,\psi_n(x)\,dx
+O(\Delta(E)^2)\\
&=\Delta(E)\,|\psi_n(x_0)|^2+O(\Delta(E)^2).
\end{aligned}
\tag{matching-norm}
$$
一次の計算を下に示す。接続点での確率密度 $|\psi_n(x_0)|^2$ が、点ポテンシャルの強さとエネルギーのずれを結んでいる。

<details id="point-energy-response-proof">
<summary>エネルギーの一次の変化</summary>

点ポテンシャルを加えた固有関数と固有エネルギーを、一次まで $\psi_n+\delta\psi$、$E_n+\delta E$ と書く。固有値方程式の一次の項は
$$
(L-E_n)\delta\psi+\Delta(E)\delta(x-x_0)\psi_n
=\delta E\,\psi_n.
$$
$\psi_n$ との内積では、固有関数の変化 $\delta\psi$ の項は
$$
\int_{\mathbb R}\psi_n(L-E_n)\delta\psi\,dx
=\int_{\mathbb R}[(L-E_n)\psi_n]\,\delta\psi\,dx=0
$$
となる。ここでは $L$ の自己共役性と $(L-E_n)\psi_n=0$ を使った。

残る項は、規格化条件とデルタ関数により
$$
\delta E\underbrace{\int_{\mathbb R}\psi_n(x)^2dx}_{1}
=\Delta(E)\int_{\mathbb R}\psi_n(x)^2\delta(x-x_0)dx
=\Delta(E)|\psi_n(x_0)|^2.
$$
従って一次のエネルギー変化には、もとの束縛状態の確率密度だけが必要になる。

</details>

式 (@matching-norm) を透過項の分母に使う形にすると、
$$
\frac1{\Delta(E)}=\frac{|\psi_n(x_0)|^2}{E-E_n}+O(1).
$$
接続点での確率密度が、$1/\Delta(E)$ の極の係数になる。これを式 (@transmission-from-matching) に代入して、透過項の留数を求めよう。

#### 3.2.6. 透過項の留数

束縛状態では両 Jost 解は同じ固有関数に比例する。左 Jost 解に合わせて符号を選んだ、規格化された実数値の固有関数を
$$
\begin{gathered}
\psi_n(x)=c_nf_-(x,-i\kappa_n),\qquad c_n>0,\\
c_n^{-2}=\int_{\mathbb R}f_-(z,-i\kappa_n)^2\,dz
\end{gathered}
\tag{bound-normalization}
$$
とする。求めたいのは $1/(E-E_n)$ の係数である。透過項を
$$
\frac{a(k)f_+(x,k)}{2ik}
=\frac{f_+(x,k)}{f_+(x_0,k)}\,
\frac1{f_-(x_0,-k)}\,
\frac1{\Delta(E)}
$$
と分けると、極をもつのは最後の $1/\Delta(E)$ だけで、その係数は $\psi_n(x_0)^2$ であった。残る二つの因子をそれぞれ $k=i\kappa_n$ で評価し、$\psi_n(x_0)^2$ と掛け合わせる。

右Jost解は、束縛状態では $\psi_n$ に比例する。分子と分母に同じ比例係数が付くので、
$$
\frac{f_+(x,k)}{f_+(x_0,k)}
\longrightarrow\frac{\psi_n(x)}{\psi_n(x_0)}
\qquad(k\to i\kappa_n).
$$
従って、$1/(E-E_n)$ の係数は
$$
\begin{aligned}
\frac{\psi_n(x)}{\psi_n(x_0)}\,
\frac1{f_-(x_0,-i\kappa_n)}\,
\psi_n(x_0)^2
&=\psi_n(x)\,\frac{\psi_n(x_0)}{f_-(x_0,-i\kappa_n)}\\
&=c_n\psi_n(x).
\end{aligned}
$$
最後の等号では、規格化の関係 $\psi_n(x_0)=c_nf_-(x_0,-i\kappa_n)$ を使った。これで透過項は
$$
\frac{a(k)f_+(x,k)}{2ik}
=\frac{c_n\psi_n(x)}{E-E_n}+O(1).
\tag{transmission-energy-pole}
$$
$1/(E-E_n)$ の係数 $c_n\psi_n(x)$ は、接続点 $x_0$ の選択に依存しない。
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

式 (@transmission-residue-sum) で、各極 $k=i\kappa_n$ における留数は、式 (@transmission-residue) に $e^{\kappa_n y}$ を掛けたものである。従って、
$$
\lim_{R\to\infty}\frac1{2\pi}\int_{-R}^R[a(k)f_+(x,k)-e^{ikx}]e^{-iky}\,dk
=-\sum_{n=1}^N c_n^2f_-(x,-i\kappa_n)e^{\kappa_n y}.
\tag{transmitted-transform}
$$
となる。負号は極の係数の $i$ とフーリエ積分の $i$ の積から生じる。

<details id="simple-pole-fourier-proof">
<summary>単純極の留数積分</summary>

上半平面の極 $i\kappa_n$ に対して、
$$
\frac1{2\pi}\int_{\mathbb R}\frac{e^{ik(x-y)}}{k-i\kappa_n}\,dk
=i e^{-\kappa_n(x-y)},\qquad y<x.
\tag{simple-pole-fourier}
$$
正向きの留数定理を $2\pi$ で割った因子 $i$ と、極での指数関数の値が現れる。

</details>

#### 3.2.7. GLM方程式の導出

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
0=K(x,y)+\underbrace{\frac{\widehat b(x+y)}{2\pi}
+\sum_{n=1}^Nc_n^2e^{\kappa_n(x+y)}}_{F(x+y)}
+\int_{-\infty}^xK(x,z)\,\Bigl[\underbrace{\frac{\widehat b(z+y)}{2\pi}
+\sum_{n=1}^Nc_n^2e^{\kappa_n(z+y)}}_{F(z+y)}\Bigr]\,dz.
\tag{glm-data-assembly}
$$
となる。積分の外の二項は $F(x+y)$、積分内の二項は $F(z+y)$ そのものである。従って、
$$
\boxed{0=K(x,y)+F(x+y)+\int_{-\infty}^xK(x,z)F(z+y)\,dz.}\qquad y<x.
\tag{glm}
$$
となる。これが左 GLM 方程式である。既知の $F$ に対して、これは $K(x,\cdot)$ の線形積分方程式である。実際のポテンシャルから得た散乱データには、ここまで構成した核が解として存在する。補足で示す一意性により、その核を散乱データから決められる。解を対角へ連続に延長し、式 (@potential-from-diagonal) に従って $K(x,x)$ を $x$ で微分して2倍すれば $u$ が復元される。


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


### 3.3. 無反射ポテンシャルとソリトン

#### 3.3.1. 1ソリトン解

反射がなく、束縛状態が一つの場合を考える。時刻を固定し、固有値を $-\kappa_1^2$、規格化定数を $c_1>0$ とし、指数関数の中身を $\theta_1(x)=\kappa_1x+\log c_1$ と書く。規格化された束縛状態 $\psi_1=c_1f_-(x,-i\kappa_1)$ は、Jost 解の核表示から
$$
\psi_1(x)=e^{\theta_1(x)}+\int_{-\infty}^xK(x,z)e^{\theta_1(z)}\,dz.
\tag{equation-4d4b5b9253}
$$

この場合は $F(x+y)=e^{\theta_1(x)}e^{\theta_1(y)}$ なので、GLM 方程式 (@glm) の後二項を上の $\psi_1(x)$ でまとめると、
$$
K(x,y)=-\psi_1(x)e^{\theta_1(y)}.
\tag{equation-3e233dbbbe}
$$
これを $\psi_1$ の積分表示に戻して指数関数を積分すれば、各 $x$ で $\psi_1(x)$ を決める一つの一次方程式になる。
$$
\left(1+\frac{e^{2\theta_1(x)}}{2\kappa_1}\right)\psi_1(x)=e^{\theta_1(x)}.
\tag{equation-aedf434e36}
$$

<span id="eq-equation-5ae839fb7f"></span>

この式を解いて $K(x,x)=-\psi_1(x)e^{\theta_1(x)}$ に代入する。$e^{2\theta_1(x_0)}=2\kappa_1$ となる位置を $x_0$ とすれば、
$$
K(x,x)=-\kappa_1\left[1+\tanh\!\bigl(\kappa_1(x-x_0)\bigr)\right].
\tag{equation-79f6682db2}
$$
従って $u=2\frac{dK(x,x)}{dx}$ より、
$$
\boxed{u(x)=-2\kappa_1^2\operatorname{sech}^2\!\bigl(\kappa_1(x-x_0)\bigr).}
\tag{equation-817ec0d626}
$$
$\kappa_1$ が深さと幅を、$c_1$ が中心 $x_0$ を決める。

時間発展を戻すと $\theta_1(x,t)=\theta_1(x,0)+\kappa_1^3t$ となる。中心の条件 $e^{2\theta_1(x_0(t),t)}=2\kappa_1$ から
$$
x_0(t)=x_0(0)-\kappa_1^2t.
\tag{equation-adf234d48b}
$$
$\kappa_1$ は一定なので、波形は速度 $-\kappa_1^2$ で形を保って進む。水面の変位は $\eta=-u$ であり、高さ $2\kappa_1^2$ の山に対応する。

<div data-visual-slot="reconstruction"></div>
