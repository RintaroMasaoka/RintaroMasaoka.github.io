## 1. 固定したポテンシャルから波の変形を作る

時間を固定し、滑らかで、すべての導関数が無限遠で任意のべきより速く減衰する実ポテンシャル $u$（Schwartz ポテンシャル）に対する
$$
Lf=k^2f,\qquad L=-\partial_x^2+u(x)
\tag{1}
$$
を考える。まず固定した $u$ に対して、左端で自由平面波 $e^{ikx}$ に一致する解 $f_-(x,k)$ を構成する。目標は、この波の変形を全波数に共通する積分核で表し、その核の方程式を散乱データから作って $u$ を戻すことである。それぞれの端で $f_\pm(x,k)\sim e^{ikx}$（$x\to\pm\infty$）と規格化した解を Jost 解と呼ぶ。

## 2. 位置順序付き発展から変換核を作る

Schrödinger 方程式を $f_{xx}+k^2f=uf$ と書く。自由方程式による変化を先に取り除けば、残る変化はポテンシャルの作用だけになる。量子力学の相互作用描像と同じ手順を、時間ではなく位置 $x$ に沿って行おう。

まず値と傾きを並べた状態を $\boldsymbol f=(f,f_x)^{\mathsf T}$ と書く。ポテンシャルの作用を表す行列 $V(x)$ を分けると、
$$
\frac{d\boldsymbol f}{dx}
=\begin{pmatrix}0&1\\-k^2&0\end{pmatrix}\boldsymbol f+V(x)\boldsymbol f,
\qquad V(x)=\begin{pmatrix}0&0\\u(x)&0\end{pmatrix}.
\tag{2}
$$
自由方程式の基本解行列を $F_0$ と書く。これは、距離 $x-x'$ の自由伝播を
$$
F_0(x-x')=
\begin{pmatrix}
\cos k(x-x')&\sin k(x-x')/k\\
-k\sin k(x-x')&\cos k(x-x')
\end{pmatrix},\qquad
\boldsymbol f(x)=F_0(x-x')\boldsymbol f(x')\quad(u=0)
\tag{3}
$$
と表す行列である。まず実数 $k\ne0$ を考え、$k=0$ では $\sin(kd)/k$ を極限 $d$ で読む。自由伝播を続けて行うことから $F_0(a)F_0(b)=F_0(a+b)$、特に $F_0(-d)=F_0(d)^{-1}$ である。

有限な始点 $x_*$ を固定する。位置 $x$ の状態から、始点以来の自由伝播を逆にたどって取り除いたものが、相互作用描像の状態
$$
\boldsymbol f_I(x)=F_0(x_*-x)\boldsymbol f(x)
$$
である。$u=0$ ならこれは始点の状態のまま変わらない。微分して式 (2) を使うと、$F_0(x_*-x)$ の微分と自由方程式の項が打ち消し合い、
$$
\frac{d\boldsymbol f_I}{dx}=V_I(x)\boldsymbol f_I(x),\qquad
V_I(x)=F_0(x_*-x)V(x)F_0(x-x_*)
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
ここで $I$ は $2\times2$ の単位行列である。二次の項では $x''\le x'$ で、先に通る位置 $x''$ の行列が右に来る。高次でも、左から右へ進む間に出会うポテンシャルの作用を、その順序のまま重ねている。

この順序付き発展を、積分核を取り出せる形に直そう。まず相互作用描像の微分方程式を一度積分し、左から $F_0(x-x_*)$ を掛けて元の状態へ戻すと
$$
\begin{aligned}
\boldsymbol f(x)
&=F_0(x-x_*)\boldsymbol f(x_*)\\
&\quad+\int_{x_*}^x F_0(x-x')V(x')\boldsymbol f(x')\,dx'.
\end{aligned}
$$
ここでは、作用位置 $x'$ までの状態はすでに $\boldsymbol f(x')$ に含まれ、そこに $V(x')$ が作用した後を $F_0(x-x')$ で自由に伝える。$V(x')\boldsymbol f(x')=(0,u(x')f(x'))^{\mathsf T}$ なので、第一成分を取ると
$$
\begin{aligned}
f(x)={}&f(x_*)\cos k(x-x_*)
+f_x(x_*)\frac{\sin k(x-x_*)}{k}\\
&+\int_{x_*}^x\frac{\sin k(x-x')}{k}u(x')f(x')\,dx'.
\end{aligned}
\tag{4}
$$
正弦核は、ポテンシャルの作用を受けた状態を、自由伝播行列の第一成分へ移したときに現れた。

左端で自由波に一致する解 $f_-$ を得るには、有限な $x_*$ で始点の状態を $(e^{ikx_*},ik e^{ikx_*})^{\mathsf T}$ としてから $x_*\to-\infty$ とする。式 (4) の最初の二項は $e^{ikx}$ となり、Schwartz 条件の下で左端までの積分が収束するので
$$
f_-(x,k)=e^{ikx}+\int_{-\infty}^x\frac{\sin k(x-x')}{k}u(x')f_-(x',k)\,dx'.
\tag{5}
$$
この積分方程式は、相互作用描像で位置順に積み重ねたすべての作用を含む。次はそれらを、波数によらない一つの核にまとめる。

目標は、$f_-$ を各波数に同じ重みを用いる変換
$$
f_-(x,k)=e^{ikx}+\int_{-\infty}^xK(x,y)e^{iky}\,dy
\tag{6}
$$
で表すことである。$K(x,y)$ が波数 $k$ に依存しなければ、一つの核で全波数の波の変形を扱える。式 (5) の積分がこの形を保つ鍵は、正弦核が平面波を有限区間上の平面波の重ね合わせに変える恒等式
$$
\frac{\sin k(x-x')}{k}e^{iky'}=\frac12\int_{y'-(x-x')}^{y'+(x-x')}e^{iky}\,dy
\tag{7}
$$
である。自由波 $e^{ikx'}$ を積分に入れた寄与では $y'=x'$ となり、積分区間の条件 $y\le x$ と $y\ge 2x'-x$ を満たす作用位置は $x'\le(x+y)/2$ である。したがって自由波から生じる重みは $\frac12\int_{-\infty}^{(x+y)/2}u(x')\,dx'$ となる。

次に、同じ表示を作用位置 $x'$ で用い、$f_-(x',k)$ の補正 $\int_{-\infty}^{x'}K(x',y')e^{iky'}dy'$ を式 (5) に代入する。その寄与は
$$
\int_{-\infty}^x\!dx'\int_{-\infty}^{x'}\!dy'\,
u(x')K(x',y')\frac{\sin k(x-x')}{k}e^{iky'}.
\tag{8}
$$
積分変数は $x'\le x$ と $y'\le x'$ を満たし、正弦核の恒等式から $|y-y'|\le x-x'$ となる。恒等式で $y$ の区間積分に直し、$y$ を外側の積分変数にすると、固定した $y$ の係数にはこの三つの条件を満たす $x',y'$ だけが寄与する。自由波からの寄与と合わせた閉じた核方程式は
$$
K(x,y)=\frac12\int_{-\infty}^{(x+y)/2}u(x')\,dx'
+\frac12\iint_{\substack{y'\le x'\le x\\|y-y'|\le x-x'}}u(x')K(x',y')\,dy'\,dx',\qquad y\le x.
\tag{9}
$$
第一項はポテンシャルが自由波に作用して生じる重み、第二項はすでに変換された波に次の作用を加えた重みである。固定した $x,y$ に対し、二重積分の領域は $(x',y')$ 平面で $y'\le x'\le x$ と $|y-y'|\le x-x'$ の共通部分である。

<div data-visual-slot="dyson-domain"></div>

この核方程式の解は、右辺へ順に代入して構成できる。Schwartz 条件の下でその反復積分は対角を含めて局所一様に収束することを補足で確かめる。得られた核を用いると
$$
f_-(x,k)=e^{ikx}+\int_{-\infty}^xK(x,y)e^{iky}\,dy
\tag{10}
$$
となる。$K$ は反復代入で得た平面波の重みをまとめたものであり、波数 $k$ に依存しない。

<details id="kernel-convergence">
<summary>核方程式の反復が収束することの確認</summary>

式 (9) の右辺を反復する項を明示する。まず
$$
K_1(x,y)=\frac12\int_{-\infty}^{(x+y)/2}u(x')\,dx'
$$
とし、$n\ge1$ に対して
$$
K_{n+1}(x,y)=\frac12\iint_{\substack{y'\le x'\le x\\|y-y'|\le x-x'}}u(x')K_n(x',y')\,dy'\,dx'
$$
と定める。すると式 (9) の解は $K=\sum_{n\ge1}K_n$ である。位置順序と各内側区間の長さ $2(x-x')$ を使うと、帰納的に
$$
|K_n(x,y)|\le\frac1{2(n-1)!}
\left(\int_{-\infty}^x|u(z)|\,dz\right)
\left(\int_{-\infty}^x(x-z)|u(z)|\,dz\right)^{n-1},\qquad y\le x,
$$
と評価できる。固定した $x$ でこの評価は $y\le x$ に一様であり、核級数の局所一様収束を与える。各反復項は連続なので和も対角まで連続である。対角では式 (9) の二重積分が消えるため、和の対角値は第一項の明示積分に等しい。

絶対値を取った反復積分にも同じ評価が使える。核の可積分性とフーリエ表示は、Schwartz 条件下の変換作用素の標準結果を用いる。対応する構成は [Egorova ほか、§2](https://arxiv.org/pdf/1411.0021) にある。

</details>

## 3. 対角値がポテンシャルを決める

式 (9) で $y=x$ とすると、二重積分の条件は $y'\le x'$ と $|x-y'|\le x-x'$ である。後者の下側から $y'\ge x'$ が従うため $y'=x'$ に限られ、この領域は面積ゼロである。したがって対角では二重積分が消え、自由波からの第一項だけが残る。
$$
K(x,x)=\frac12\int_{-\infty}^xu(x')\,dx',\qquad
u(x)=2\frac{d}{dx}K(x,x).
\tag{11}
$$
微分は $x$ と二つ目の引数を同時に動かす対角方向の全微分である。Schwartz 条件の下で明示積分を微分すれば、ポテンシャルが直接得られる。後で散乱データから GLM 方程式を解いてこの同じ核 $K$ を得るので、式 (11) によりポテンシャルを復元できる。

変換核 $K$ は自由波をポテンシャル付きの波へ移す共通作用素を定める。
$$
(Tg)(x)=g(x)+\int_{-\infty}^xK(x,y)g(y)\,dy,\qquad L_0=-\partial_x^2.
\tag{12}
$$
式 (10) は $T e^{ikx}=f_-(x,k)$ を示し、これを微分方程式へ代入すると $LT e^{ikx}=k^2T e^{ikx}=TL_0e^{ikx}$ となる。フーリエ反転により十分滑らかで減衰する関数にも拡張され、
$$
LT=TL_0.
\tag{13}
$$
したがって同じ $K$ がすべての波数の自由固有関数を Schrödinger 固有関数へ移す。散乱関係を一つの核で表せるのはこの共通変換による。

<details id="intertwining-proof">
<summary>平面波から一般の関数へ変換恒等式を広げる</summary>

Schwartz 関数 $g$ に対し、$\widehat g(k)=\int_{\mathbb R}g(x)e^{-ikx}\,dx$ とする。フーリエ反転を (12) に代入し、$K(x,\cdot)$ の可積分性を使って積分順序を入れ替えると
$$
(Tg)(x)=\frac1{2\pi}\int_{\mathbb R}\widehat g(k)f_-(x,k)\,dk.
$$
式 (5) とその $x$ 微分から、実 $k$ に対して $f_-$ と $\partial_xf_-$ は、局所的な $x$ の範囲でそれぞれ $O(1)$、$O(1+|k|)$ に抑えられる。さらに $\partial_x^2f_-=(u-k^2)f_-$ だから二階微分も $O(1+k^2)$ である。$\widehat g$ は急減衰するので、上の積分を2回微分できる。

各平面波成分に $Lf_-=k^2f_-$ を適用すると
$$
L(Tg)=\frac1{2\pi}\int_{\mathbb R}k^2\widehat g(k)f_-(x,k)\,dk
=T(L_0g).
$$
最後の等式は、$L_0g=-g''$ のフーリエ変換が $k^2\widehat g$ であることによる。

</details>


## 4. 左入射の散乱関係をフーリエ変換する

ここで散乱データを導入する。$k>0$ の左入射波は左端で入射波 $f_-(x,k)$ と反射波 $b(k)f_-(x,-k)$ の和、右端で透過波 $a(k)f_+(x,k)$ と書ける。$a$ は透過係数、$b$ は左反射係数であり、同じ解の二つの表示から実軸上
$$
a(k)f_+(x,k)=f_-(x,k)+b(k)f_-(x,-k).
\tag{14}
$$
実ポテンシャルでは $f_\pm(x,-k)=\overline{f_\pm(x,k)}$、$a(-k)=\overline{a(k)}$、$b(-k)=\overline{b(k)}$ なので、この関係は負の実 $k$ にも成り立つ。

式 (14) の入射側に注目する。既知の自由波を引くと、式 (10) から
$$
f_-(x,k)-e^{ikx}=\int_{-\infty}^xK(x,z)e^{ikz}\,dz.
\tag{15}
$$
核そのものを求めるには、この平面波の係数をフーリエ反転で取り出せばよい。以下では $y<x$ とする。すなわち、
$$
\lim_{R\to\infty}\frac{1}{2\pi}\int_{-R}^R[f_-(x,k)-e^{ikx}]e^{-iky}\,dk=K(x,y).
$$
Schwartz 減衰の下で通常のフーリエ反転が適用でき、$y<x$ は積分核の支持内部なので端点の値は関与しない。

同じ操作を散乱関係の両辺に行い、残る二項も核と散乱データで表そう。反射係数 $b$ のフーリエ変換を
$$
\widehat b(s)=\int_{\mathbb R}b(k)e^{-iks}\,dk
\tag{16}
$$
と置く。ここでは実軸上の反射データ $b(k)$ を用いる。式 (10) から反射項の変換は
$$
\frac1{2\pi}\int_{\mathbb R}b(k)f_-(x,-k)e^{-iky}\,dk
=\widehat b(x+y)/(2\pi)+\int_{-\infty}^xK(x,z)\widehat b(z+y)/(2\pi)\,dz.
\tag{17}
$$
自由波では指数が $e^{-ik(x+y)}$、核の項では $e^{-ik(z+y)}$ となるため、それぞれ $\widehat b$ の引数が $x+y,z+y$ になる。積分交換は $K(x,\cdot)$ の可積分性と反射係数の減衰で許される。

残る透過項を留数で評価するため、Jost 解を複素波数へ続ける。式 (5) で自由波因子を除くと、積分核には $e^{-2ik(x-z)}$（$z\le x$）が現れる。この指数は下半平面で増大せず、反復積分は局所一様に収束する。そのため左 Jost 解 $f_-(x,k)$ は下半平面で正則になる。したがって $f_-(x,-k)$ と右 Jost 解 $f_+(x,k)$ は上半平面で正則である。二つの関数に対する量 $W[f,g]=f g_x-f_xg$ を Wronskian と呼ぶ。この二つの解から作る
$$
W(k)=W[f_-(x,-k),f_+(x,k)]
\tag{18}
$$
は $x$ に依らず、上半平面で正則である。実軸上の (14) を左端で評価すると、$f_+$ の $e^{ikx}$ 係数が $1/a$ となる。自由波同士の Wronskian は $2ik$ なので、$W=2ik/a$、すなわち $a=2ik/W$ となり透過係数の有理型延長が定まる。$W(k)=0$ なら二つの端で減衰する Jost 解が比例し、束縛状態を与える。自己共役性から $k^2$ は実数であり、上半平面の零点は $k=i\kappa_n$（$\kappa_n>0$）に限られる。Schwartz ポテンシャルではその個数 $N$ は有限である。

<details id="analytic-estimates">
<summary>Jost 解の解析領域と大きな波数の評価</summary>

上半平面で正則な左端解 $f_-(x,-k)$ から平面波因子を除くと、式 (5) は
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
で抑えられる。従って級数は局所一様に収束し、左辺 $e^{ikx}f_-(x,-k)$ は上半平面で正則、実軸まで連続である。$k$ 微分には $d^2$ の評価と Schwartz 条件の重み付き積分を使うので、境界までの微分可能性も得られる。大きな $|k|$ では核を $O(|k|^{-1})$ で抑える。右 Jost 解にも同じ評価を適用すると、Wronskian (18) は $2ik[1+O(|k|^{-1})]$、従って $a(k)=1+O(|k|^{-1})$ となる。これらの積分表示と評価は [Egorova ほか、§2 の (2.1)–(2.4)](https://arxiv.org/pdf/1411.0021) の標準構成に対応する。ここでは左側の積分端と $k\mapsto-k$ を明示して用いた。

</details>

第2節の規格化定数 $c_n>0$ を、この Jost 解で書けば
$$
c_n^{-2}=\int_{\mathbb R}f_-(x,-i\kappa_n)^2\,dx
\tag{19}
$$
となる。この実数値解は左端で $e^{\kappa_n x}$ に規格化されており、$c_n f_-(x,-i\kappa_n)$ の二乗積分は $1$ になる。微分方程式を $k$ で微分して両端で積分すると、$W$ の単純零点の傾きがこの二乗積分で決まり、
$$
\operatorname*{Res}_{k=i\kappa_n}\left[a(k)f_+(x,k)\right]
=i c_n^2 f_-(x,-i\kappa_n)
\tag{20}
$$
を得る。留数に現れる係数は、束縛状態の二乗積分の逆数である。透過係数 $a=2ik/W$ の留数は、分母の零点での $k$ 微分 $W'(i\kappa_n)$ によって決まる。この微分を束縛状態の二乗積分と結びつける計算を補足に示す。

<details id="residue-proof">
<summary>束縛状態の極と規格化定数</summary>

極 $k=i\kappa_n$ では $f_-(x,-i\kappa_n)$ と $f_+(x,i\kappa_n)$ が同じ束縛状態に比例する。比例係数を別に名付けず、Wronskian (18) をそのまま微分する。各解の方程式を $k$ で微分すると
$$
\begin{aligned}
\partial_xW[\partial_k f_-(\cdot,-k),f_+(\cdot,k)]
 &=2k f_-(x,-k)f_+(x,k),\\
\partial_xW[f_-(\cdot,-k),\partial_k f_+(\cdot,k)]
 &=-2k f_-(x,-k)f_+(x,k).
\end{aligned}
$$
ここで $\partial_k f_-(x,-k)$ は合成関数 $k\mapsto f_-(x,-k)$ の微分であり、$\cdot$ は Wronskian が微分する空間変数を表す。束縛状態では第1の Wronskian は左端で、第2は右端で消える。境界条件の $k$ 微分によって多項式因子が加わっても、指数減衰は保たれる。第1式を左端から $x$ へ、第2式を $x$ から右端へ積分して足すと
$$
W'(i\kappa_n)=2i\kappa_n\int_{\mathbb R}f_-(z,-i\kappa_n)f_+(z,i\kappa_n)\,dz.
$$
左端での係数評価は $a=2ik/W$ を与える。二つの解の比例関係を使うと、分子と分母に共通の比例係数が消え、
$$
\begin{aligned}
\operatorname*{Res}_{k=i\kappa_n}[a(k)f_+(x,k)]
&=\frac{2i(i\kappa_n)f_+(x,i\kappa_n)}{W'(i\kappa_n)}\\
&=i\frac{f_-(x,-i\kappa_n)}{\int_{\mathbb R}f_-(z,-i\kappa_n)^2\,dz}.
\end{aligned}
$$
これは (19) の $c_n$ を用いると (20) になる。二つの束縛解は非零の係数で比例し、最後の二乗積分は正なので、$W'(i\kappa_n)\ne0$ である。従って極は単純である。

</details>

変換した透過項の被積分関数は
$$
[a(k)f_+(x,k)e^{-ikx}-1]e^{ik(x-y)}.
$$
$y<x$ なら上半平面で指数が減衰する。括弧内は大きな半円で $O(k^{-1})$ であり、補足の半円積分の評価により半円の寄与は消える。原点は共鳴の有無にかかわらず被積分関数が有界なので、小半円の寄与も消える。閉曲線を正向きに取った積分の値は、(20) の留数を使って
$$
\lim_{R\to\infty}\frac1{2\pi}\int_{-R}^R[a(k)f_+(x,k)-e^{ikx}]e^{-iky}\,dk
=-\sum_{n=1}^N c_n^2 f_-(x,-i\kappa_n)e^{\kappa_n y}.
\tag{21}
$$
右辺の負号は留数定理の因子 $i$ と留数 (20) の $i$ の積から出る。

<div data-visual-slot="contour"></div>

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

式 (15) から (21) までの変換を散乱関係へ代入し、左辺の透過項を留数で置き換える。束縛状態の波形にも同じ変換核 (10) が使えるため
$$
f_-(x,-i\kappa_n)e^{\kappa_n y}
=e^{\kappa_n(x+y)}+\int_{-\infty}^xK(x,z)e^{\kappa_n(z+y)}\,dz.
\tag{22}
$$
連続部分と束縛状態部分に現れる二種類の既知データをまとめて
$$
F(s)=\widehat b(s)/(2\pi)+\sum_{n=1}^Nc_n^2e^{\kappa_ns}
\tag{23}
$$
と定義する。式 (17) の二項は反射由来の $\widehat b(x+y)/(2\pi)$ とその核積分であり、式 (21) の透過変換を右辺へ移すと、式 (22) の自由波と核積分がそれぞれ束縛状態項を加える。従って、変換された散乱関係の三項は
$$
\boxed{K(x,y)+F(x+y)+\int_{-\infty}^xK(x,z)F(z+y)\,dz=0,\qquad y<x.}
\tag{24}
$$
これが左 GLM 方程式である。既知の $F$ に対して、これは $K(x,\cdot)$ の線形積分方程式である。実際のポテンシャルから得た散乱データには、ここまで構成した核が解として存在する。補足で示す一意性により、その核を散乱データから決められる。解を対角へ連続に延長し、式 (11) の対角微分を取れば $u$ が復元される。


<details id="glm-uniqueness">
<summary>左 GLM 方程式の解の一意性</summary>

固定した $x$ で、二つの解の差 $g$ が $(-\infty,x)$ 上で 絶対可積分かつ二乗可積分（$L^1\cap L^2$）とする。その差は
$$
g(y)+\int_{-\infty}^x g(z)F(z+y)\,dz=0,\qquad y<x
$$
を満たす。$g$ を $y\ge x$ で0に延長し、そのフーリエ変換 $\widehat g(k)=\int_{-\infty}^xg(z)e^{-ikz}\,dz$ を用い、式 (23) を代入して差の式に $\overline{g(y)}$ を掛け、$y<x$ で積分する。Fubini と Plancherel の等式を使い、実部を取ると
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

## 5. 一つの束縛状態からソリトンを復元する

反射がなく、束縛状態が一つだけの場合に GLM 方程式を解いてみよう。散乱データは固有値 $-\kappa_1^2$ と規格化定数 $c_1>0$ であり、まず時刻を固定する。束縛状態の左端での形を全空間へ延ばした指数関数を
$$
e_1(x)=c_1e^{\kappa_1x}
$$
と書く。前半の変換 $T$ により、この指数関数から束縛状態の波形が得られる。
$$
\begin{aligned}
\psi_1(x)&=(Te_1)(x)\\
&=e_1(x)+\int_{-\infty}^xK(x,z)e_1(z)\,dz.
\end{aligned}
\tag{25}
$$
これは Jost 解の核表示に $k=-i\kappa_1$ を入れたもので、$\psi_1=c_1f_-(x,-i\kappa_1)$ である。

ここで散乱データ関数は $F(x+y)=e_1(x)e_1(y)$ と分離できる。GLM 方程式 (24) は
$$
K(x,y)+e_1(y)\left[e_1(x)+\int_{-\infty}^xK(x,z)e_1(z)\,dz\right]=0.
$$
角括弧は式 (25) の $\psi_1(x)$ なので、
$$
K(x,y)=-\psi_1(x)e_1(y).
\tag{26}
$$
固定した $x$ では、未知の核を求める問題が一つの値 $\psi_1(x)$ を求める問題になった。これを式 (25) に戻すと、
$$
\psi_1(x)=e_1(x)-\psi_1(x)\int_{-\infty}^xe_1(z)^2\,dz.
$$
積分は $e_1(x)^2/(2\kappa_1)$ だから、
$$
\boxed{\psi_1(x)=\frac{e_1(x)}{1+e_1(x)^2/(2\kappa_1)}.}
\tag{27}
$$
自由方程式の解 $e_1$ は右へ向かって増大するが、この分母によって $\psi_1$ は右端でも減衰する。左端の指数的な形から、両端で減衰する束縛状態の波形が復元された。

ポテンシャルは核の対角値から得られる。式 (26) と (27) より
$$
K(x,x)=-\frac{e_1(x)^2}{1+e_1(x)^2/(2\kappa_1)}.
\tag{28}
$$
波形の中心を読み取るため、分母の二項が等しくなる位置を $x_0$ とする。すなわち $c_1^2e^{2\kappa_1x_0}/(2\kappa_1)=1$ と置くと
$$
\frac{e_1(x)^2}{2\kappa_1}=e^{2\kappa_1(x-x_0)},\qquad
K(x,x)=-\kappa_1\left[1+\tanh\!\bigl(\kappa_1(x-x_0)\bigr)\right].
\tag{29}
$$
対角復元式 $u=2\,dK(x,x)/dx$ で微分すれば、
$$
\boxed{u(x)=-2\kappa_1^2\operatorname{sech}^2\!\bigl(\kappa_1(x-x_0)\bigr).}
\tag{30}
$$
固有値を指定する $\kappa_1$ が最小値 $-2\kappa_1^2$ と幅の尺度 $1/\kappa_1$ を決め、規格化定数 $c_1$ が中心 $x_0$ を決める。

第2節の時間発展 $c_1(t)=c_1(0)e^{-4\kappa_1^3t}$ を戻すと、中心を定める条件 $c_1(t)^2e^{2\kappa_1x_0(t)}/(2\kappa_1)=1$ から
$$
x_0(t)=x_0(0)+4\kappa_1^2t
\tag{31}
$$
となる。$\kappa_1$ は時間に依らないので、復元した波は形を保ち、速度 $4\kappa_1^2$ で移動する。これが一ソリトン解である。

<div data-visual-slot="reconstruction"></div>
