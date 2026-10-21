## 1. 固定したポテンシャルから波の変形を作る

時間を固定し、滑らかで、すべての導関数が無限遠で任意のべきより速く減衰する実ポテンシャル $u$（Schwartz ポテンシャル）に対する
$$
Lf=k^2f,\qquad L=-\partial_x^2+u(x)
\tag{1}
$$
を考える。まず固定した $u$ に対して、左端で自由平面波 $e^{ikx}$ に一致する解 $f_-(x,k)$ を構成する。目標は、この波の変形を全波数に共通する積分核で表し、その核の方程式を散乱データから作って $u$ を戻すことである。Jost 解は $f_\pm(x,k)\sim e^{ikx}$（$x\to\pm\infty$）で規格化する。

## 2. 位置順序付き発展から変換核を作る

二階方程式を $Y=(f,f')^{\mathsf T}$ の一階の系にすると
$$
Y'(x)=\left[M_0(k)+V(x)\right]Y(x),\quad
M_0(k)=\begin{pmatrix}0&1\\-k^2&0\end{pmatrix},\quad
V(x)=\begin{pmatrix}0&0\\u(x)&0\end{pmatrix}.
\tag{2}
$$
この節では $Y$ に作用する $2×2$ 行列として、有限な始点 $x_*<x$ での伝播を位置順序付き指数
$$
U(x,x_*)=\mathcal P\exp\!\left(\int_{x_*}^x[M_0(k)+V(z)]\,dz\right)
$$
で表す。$\mathcal P$ は大きい位置が左に並ぶ順序を指定する。すなわち展開の $n$ 次項は $x_*<z_n<\cdots<z_1<x$ 上の積 $(M_0+V)(z_1)\cdots(M_0+V)(z_n)$ を積分する。有限始点で $Y(x_*)$ を指定すれば $Y(x)=U(x,x_*)Y(x_*)$ である。

自由伝播を $U_0(\ell)=e^{\ell M_0}$ と書くと、
$$
U_0(\ell)=\begin{pmatrix}\cos k\ell&\sin(k\ell)/k\\-k\sin(k\ell)&\cos k\ell\end{pmatrix}.
\tag{3}
$$
$k=0$ では $\sin(k\ell)/k=\ell$ と読む。位置順序付き指数を自由伝播との相互作用表示に直すと
$$
U(x,x_*)=U_0(x-x_*)+\int_{x_*}^xU_0(x-z)V(z)U(z,x_*)\,dz.
\tag{4}
$$
これは各ポテンシャル作用点の間を自由伝播でつなぐ Duhamel 公式である。左端の Jost 解は $x_*\to-\infty$ の境界極限で、始点値を自由解 $(e^{ikx_*},ik e^{ikx_*})^{\mathsf T}$ に漸近させて得る。積の第1成分では $U_0$ の $(1,2)$ 成分が $VY=(0,uf)^{\mathsf T}$ に掛かるので、
$$
f_-(x,k)=e^{ikx}+\int_{-\infty}^x\frac{\sin k(x-x')}{k}u(x')f_-(x',k)\,dx'.
\tag{5}
$$
これが左端条件を含むスカラー Duhamel 方程式である。作用位置 $x'\le x$ の順に積分されるため、反復項でもポテンシャル作用点は位置順序を保つ。

目標は、$f_-$ を各波数に同じ重みを用いる変換
$$
f_-(x,k)=e^{ikx}+\int_{-\infty}^xK(x,y)e^{iky}\,dy
\tag{6}
$$
で表すことである。$K(x,y)$ が波数 $k$ に依存しなければ、一つの核で全波数の波の変形を扱える。Duhamel の積分がこの形を保つ鍵は、正弦核が平面波を有限区間上の平面波の重ね合わせに変える恒等式
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
と定める。すると式 (9) の解は $K=\sum_{n\ge1}K_n$ である。$A(x)=\int_{-\infty}^x|u(x')|dx'$、$B(x)=\int_{-\infty}^x(x-x')|u(x')|dx'$ と置くと、位置順序と各内側区間の長さ $2(x-x')$ を使った帰納評価
$$
|K_n(x,y)|\le\frac{A(x)B(x)^{n-1}}{2(n-1)!},\qquad y\le x,
$$
を得る。固定した $x$ でこの評価は $y\le x$ に一様であり、核級数の局所一様収束を与える。各反復項は連続なので和も対角まで連続である。対角では式 (9) の二重積分が消えるため、和の対角値は第一項の明示積分に等しい。

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

同じ操作を散乱関係の両辺に行い、残る二項も核と散乱データで表そう。反射データをフーリエ変換して
$$
r(s)=\frac1{2\pi}\int_{\mathbb R}b(k)e^{-iks}\,dk
\tag{16}
$$
と置く。ここでは実軸上の反射データ $b(k)$ を用いる。式 (10) から反射項の変換は
$$
\frac1{2\pi}\int_{\mathbb R}b(k)f_-(x,-k)e^{-iky}\,dk
=r(x+y)+\int_{-\infty}^xK(x,z)r(z+y)\,dz.
\tag{17}
$$
自由波では指数が $e^{-ik(x+y)}$、核の項では $e^{-ik(z+y)}$ となるため、それぞれ $r$ の引数が $x+y,z+y$ になる。積分交換は $K(x,\cdot)$ の可積分性と反射係数の減衰で許される。

残る透過項を留数で評価するため、Jost 解を複素波数へ続ける。式 (5) で自由波因子を除くと、積分核には $e^{-2ik(x-z)}$（$z\le x$）が現れる。この指数は下半平面で増大せず、反復積分は局所一様に収束する。そのため左 Jost 解 $f_-(x,k)$ は下半平面で正則になる。したがって $f_-(x,-k)$ と右 Jost 解 $f_+(x,k)$ は上半平面で正則であり、組み合わせた Wronskian
$$
W(k)=W[f_-(x,-k),f_+(x,k)],\quad W[v,w]=v w_x-v_xw
\tag{18}
$$
も $x$ に依らず正則である。実軸上の (14) を左端で評価すると、$f_+$ の $e^{ikx}$ 係数が $1/a$ となる。自由波同士の Wronskian は $2ik$ なので、$W=2ik/a$、すなわち $a=2ik/W$ となり透過係数の有理型延長が定まる。$W(k)=0$ なら二つの端で減衰する Jost 解が比例し、束縛状態を与える。自己共役性から $k^2$ は実数であり、上半平面の零点は $k=i\kappa_n$（$\kappa_n>0$）に限られる。Schwartz ポテンシャルではその個数 $N$ は有限である。

<details id="analytic-estimates">
<summary>Jost 解の解析領域と大きな波数の評価</summary>

上半平面で解析的な左端解は $p(x,k)=f_-(x,-k)$ である。平面波を除いた $h(x,k)=e^{ikx}p(x,k)$ は
$$
h(x,k)=1+\int_{-\infty}^x\frac{e^{2ik(x-z)}-1}{2ik}u(z)h(z,k)\,dz.
$$
距離 $d=x-z\ge0$ に対し
$$
\frac{e^{2ikd}-1}{2ik}=\int_0^d e^{2iks}\,ds,\qquad
\left|\frac{e^{2ikd}-1}{2ik}\right|\le d,\qquad
\left|\partial_k\frac{e^{2ikd}-1}{2ik}\right|\le d^2
$$
が閉上半平面（$k=0$ を含む）で成り立つ。$j$ 回の Volterra 反復は左から右へ順序づけられた領域に入り、絶対値は
$$
\frac1{j!}\left(\int_{-\infty}^x(x-z)|u(z)|\,dz\right)^j
$$
で抑えられる。従って級数は局所一様に収束し、$h$ は上半平面で正則、実軸まで連続である。$k$ 微分には $d^2$ の評価と Schwartz 条件の重み付き積分を使うので、境界までの微分可能性も得られる。大きな $|k|$ では核を $O(|k|^{-1})$ で抑える。右 Jost 解にも同じ評価を適用すると、Wronskian (18) は $2ik[1+O(|k|^{-1})]$、従って $a(k)=1+O(|k|^{-1})$ となる。これらの Volterra 表示・評価は [Egorova ほか、§2 の (2.1)–(2.4)](https://arxiv.org/pdf/1411.0021) の標準構成に対応する。ここでは左側の積分端と $k\mapsto-k$ を明示して用いた。

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
を得る。留数に現れる係数は、束縛状態の二乗積分の逆数である。計算では、極を作る $W$ の傾きと規格化定数を次のように結びつける。

<details id="residue-proof">
<summary>束縛状態の極と規格化定数</summary>

$k_n=i\kappa_n$ で $p(x,k)=f_-(x,-k)$ と $f_+(x,k)$ は同じ束縛状態を表すため、$f_+(x,k_n)=d_n p(x,k_n)$ と書ける。$W(k)=W[p,f_+]$ を微分する。各 Jost 解の微分方程式を $k$ で微分すると
$$
\partial_xW[\partial_kp,f_+]=2kp f_+,\qquad
\partial_xW[p,\partial_k f_+]=-2kp f_+
$$
を得る。束縛状態では第1の Wronskian は左端で、第2は右端で消える。境界条件を $k$ 微分しても、多項式因子を伴う指数減衰なのでこの結論は変わらない。第1式を左端から $x$ へ、第2式を $x$ から右端へ積分して足すと
$$
W'(k_n)=2k_n d_n\int_{\mathbb R}p(z,k_n)^2\,dz.
$$
左端での係数評価から $a=2ik/W$ なので、
$$
\operatorname*{Res}_{k=k_n}[a(k)f_+(x,k)]
=\frac{2ik_n f_+(x,k_n)}{W'(k_n)}
=i\frac{f_-(x,-k_n)}{\int_{\mathbb R}f_-(z,-k_n)^2\,dz}.
$$
これは (19) で定めた $c_n$ を用いると (20) になる。二乗積分は正なので $W'(k_n)\ne0$、従って極は単純である。

</details>

変換した透過項の被積分関数は
$$
[a(k)f_+(x,k)e^{-ikx}-1]e^{ik(x-y)}.
$$
$y<x$ なら上半平面で指数が減衰する。括弧内は大きな半円で $O(k^{-1})$ であり、端点近傍も含む Jordan 型評価で半円の寄与は消える。原点は共鳴の有無にかかわらず被積分関数が有界なので、小半円の寄与も消える。閉曲線を正向きに取った積分の値は、(20) の留数を使って
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
括弧内は前の補足から $O(R^{-1})$、線素は $R\,d\theta$ である。よって半円積分の絶対値は
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
F(s)=r(s)+\sum_{n=1}^Nc_n^2e^{\kappa_ns}
\tag{23}
$$
と定義する。式 (17) の二項は反射由来の $r(x+y)$ とその核積分であり、式 (21) の透過変換を右辺へ移すと、式 (22) の自由波と核積分がそれぞれ束縛状態項を加える。そこで $F$ を (23) と定義すれば、変換された散乱関係の三項は
$$
\boxed{K(x,y)+F(x+y)+\int_{-\infty}^xK(x,z)F(z+y)\,dz=0,\qquad y<x.}
\tag{24}
$$
これが左 GLM 方程式である。既知の $F$ に対して、これは $K(x,\cdot)$ の線形積分方程式である。実際のポテンシャルから得た散乱データには、ここまで構成した核が解として存在する。補足で示す一意性により、その核を散乱データから決められる。解を対角へ連続に延長し、式 (11) の対角微分を取れば $u$ が復元される。


<details id="glm-uniqueness">
<summary>左 GLM 方程式の解の一意性</summary>

固定した $x$ で、二つの解の差 $g$ が $(-\infty,x)$ 上で $L^1\cap L^2$ に属するとする。その差は
$$
g(y)+\int_{-\infty}^x g(z)F(z+y)\,dz=0,\qquad y<x
$$
を満たす。$G(k)=\int_{-\infty}^xg(z)e^{-ikz}\,dz$ と定め、式 (23) を代入して差の式に $\overline{g(y)}$ を掛け、$y<x$ で積分する。Fubini と Plancherel の等式を使い、実部を取ると
$$
0=\int_{-\infty}^x|g(y)|^2dy+\frac1{2\pi}\int_{\mathbb R}b(k)G(k)\overline{G(-k)}\,dk
+\sum_{n=1}^N c_n^2\left|\int_{-\infty}^x g(y)e^{\kappa_n y}dy\right|^2.
$$
最後の和は非負である。反射項は $b(-k)=\overline{b(k)}$ と $2|G(k)G(-k)|\le |G(k)|^2+|G(-k)|^2$ から、絶対値が
$$
\frac1{2\pi}\int_{\mathbb R}|b(k)|\,|G(k)|^2dk
$$
以下である。さらに
$$
\int_{-\infty}^x|g(y)|^2dy=\frac1{2\pi}\int_{\mathbb R}|G(k)|^2dk.
$$
流束保存は $1=|a(k)|^2+|b(k)|^2$ を与える。また $a(k)W(k)=2ik$ なので、実数 $k\ne0$ で $a(k)\ne0$ である。従って $|b(k)|<1$ となり、実部の等式から
$$
\frac1{2\pi}\int_{\mathbb R}(1-|b(k)|)|G(k)|^2dk+\sum_{n=1}^Nc_n^2\left|\int_{-\infty}^xg(y)e^{\kappa_ny}dy\right|^2\le0.
$$
左辺は非負なので $G=0$ ほとんど至る所、Plancherel により $g=0$ である。これによりここで指定した関数クラスで解が一意である。

</details>

## 5. 束縛状態が一つの例

反射がなく束縛状態が一つなら、式 (23) は $F(s)=c^2e^{\kappa s}$ となる。式 (24) の既知の項と積分項は $y$ について $e^{\kappa y}$ に比例するので、それらと釣り合う未知核も $K(x,y)=-C(x)e^{\kappa y}$ と置ける（$y<x$）。代入して係数を比較すると
$$
-C(x)+c^2e^{\kappa x}-C(x)c^2\frac{e^{2\kappa x}}{2\kappa}=0.
$$
従って
$$
K(x,y)=-\frac{c^2e^{\kappa(x+y)}}{1+c^2e^{2\kappa x}/(2\kappa)},\qquad
K(x,x)=-\frac{c^2e^{2\kappa x}}{1+c^2e^{2\kappa x}/(2\kappa)}.
\tag{25}
$$
分母は積分 $\int_{-\infty}^x e^{2\kappa z}dz=e^{2\kappa x}/(2\kappa)$ から出た。規格化定数を $c^2=2\kappa e^{-2\kappa x_0}$ と書けば
$$
K(x,x)=-\kappa[1+\tanh(\kappa(x-x_0))],\qquad
\boxed{u(x)=-2\kappa^2\operatorname{sech}^2(\kappa(x-x_0))}.
\tag{26}
$$
実際、式 (11) の微分を取ると右のポテンシャルが得られる。固有値 $-\kappa^2$ が最小値と幅を決め、左規格化 $c$ が中心 $x_0$ を定める。

第2節の時間発展 $c(t)=c(0)e^{-4\kappa^3t}$ を復元式に入れると、$c(t)^2=2\kappa e^{-2\kappa x_0(t)}$ より
$$
x_0(t)=x_0(0)+4\kappa^2t.
$$
したがって復元したポテンシャルは、形を保ったまま速度 $4\kappa^2$ で移動する。

<div data-visual-slot="reconstruction"></div>
