## 1. 散乱データから何を求めるか

散乱の順問題では、ポテンシャルを与えて波の反射や透過を計算する。ここでは逆に、散乱データから未知の実ポテンシャル $u(x)$ を求める。時間を固定し、一次元 Schrödinger 方程式
$$
L f=k^2 f,\qquad L=-\partial_x^2+u(x)
$$
を考える。以下では $u$ は滑らかで、すべての導関数が無限遠で任意のべきより速く減衰する実関数（Schwartz 関数）とする。$x$ は位置、$k$ は波数である。右端・左端で平面波に一致する Jost 解を、それぞれ
$$
f_\pm(x,k)\sim e^{ikx}\qquad(x\to\pm\infty)
$$
で定める。この規約では、$k>0$ のとき左端へ出ていく波を $f_-(x,-k)$ で表す。

まず $k>0$ とし、左端へ進む解 $f_-(x,-k)$ を右端の二つの波で表すと、
$$
f_-(x,-k)=\alpha(k)f_+(x,-k)+\beta(k)f_+(x,k)
$$
となる。右端から入る波の振幅を $1$ にそろえるために $\alpha$ で割り、透過振幅 $a(k)=1/\alpha(k)$ と反射振幅 $b(k)=\beta(k)/\alpha(k)$ を定める。すると、逆問題で使う実軸上の関係は
$$
a(k)f_-(x,-k)=f_+(x,-k)+b(k)f_+(x,k)
\tag{1}
$$
である。実ポテンシャルでは実数 $k$ に対して $f_\pm(x,-k)=\overline{f_\pm(x,k)}$、$a(-k)=\overline{a(k)}$、$b(-k)=\overline{b(k)}$ が成り立つ。この共役対称性により、(1) は $k<0$ にも拡張できる。複素 $k$ を扱う以下の計算では、共役ではなく符号反転を明記する。

負のエネルギー $-\kappa_n^2$ をもつ束縛状態は $k=i\kappa_n$（$\kappa_n>0$）に対応する。束縛状態の個数を $N$ とすると、この仮定のもとでは $N$ は有限で、各固有値は単純である。右の Jost 解 $f_+(x,i\kappa_n)$ は実数値の束縛状態であり、その規格化定数 $c_n>0$ を
$$
c_n^{-2}=\int_{-\infty}^{\infty} f_+(x,i\kappa_n)^2\,dx
\tag{2}
$$
で定める。再構成の入力は、実軸上の反射振幅 $b(k)$ と、束縛状態のデータ $\{\kappa_n,c_n\}_{n=1}^{N}$ である。束縛状態の固有値だけでなく、規格化定数も必要になる。

## 2. Jost 解を積分核で表す

未知の $u$ を直接探す代わりに、平面波を Jost 解に変える積分核 $K(x,z)$ を求める。右端の境界条件から得られる積分方程式は
$$
f_+(x,k)=e^{ikx}+\int_x^\infty\frac{\sin k(z-x)}{k}\,u(z)f_+(z,k)\,dz
\tag{3}
$$
である。積分区間が $[x,\infty)$ なので、右の Jost 解は $x$ より右側のポテンシャルだけで決まる。このように積分の一方の端が変数 $x$ である方程式を Volterra 型積分方程式という。その逐次代入を整理すると、上の減衰条件のもとで、$k$ に依存しない滑らかな核を使った次の表示
$$
f_+(x,k)=e^{ikx}+\int_x^\infty K(x,z)e^{ikz}\,dz
\tag{4}
$$
が得られる。核の存在と評価はここでは標準結果として用いる。表示の具体的な形と評価は [Egorova ほか、§2 の (2.1)–(2.3)](https://arxiv.org/pdf/1411.0021) を参照できる。同論文の $B_+(x,t)$ は、この規約では $2K(x,x+2t)$ に対応する。

この核を求めれば、どこから $u$ を読み取れるだろうか。(4) を $e^{ikx}$ で割って部分積分すると、積分の下端 $z=x$ が大きな $k$ での主要項を与える。一方、(3) を同じように展開すれば、その主要項は $u$ の積分で表される。上半平面で $|k|\to\infty$ とすると、両者は
$$
\begin{aligned}
f_+(x,k)e^{-ikx}
 &=1-\frac{K(x,x)}{ik}+O(k^{-2}),\\
f_+(x,k)e^{-ikx}
 &=1-\frac{1}{2ik}\int_x^\infty u(z)\,dz+O(k^{-2})
\end{aligned}
$$
となる。したがって、対角上の値とポテンシャルは
$$
K(x,x)=\frac12\int_x^\infty u(z)\,dz,
\qquad
\boxed{u(x)=-2\frac{d}{dx}K(x,x)}
\tag{5}
$$
で結びつく。$dK(x,x)/dx$ は、両方の引数を同時に動かす対角に沿った全微分である。

## 3. 実軸上の関係から核を取り出す

(1) の $f_+(x,-k)$ に (4) を代入すると、未知の核が $e^{-ikz}$ の係数として現れる。そこで両辺に $e^{iky}/(2\pi)$ を掛けて実数 $k$ について積分し、フーリエ反転でその係数を取り出す。以後は **$y>x$** とする。この範囲では自由な平面波の寄与 $\delta(y-x)$ は消え、
$$
\frac{1}{2\pi}\int_{\mathbb R}f_+(x,-k)e^{iky}\,dk
 =\delta(y-x)+\int_x^\infty K(x,z)\delta(y-z)\,dz
 =K(x,y)
\tag{6}
$$
を得る。ここで $\delta$ は Dirac のデルタ分布である。平面波を含むフーリエ積分は分布の意味で取り、その後で開領域 $y>x$ に制限する。これにより、対角上のデルタ分布の扱いを途中で決めずに済む。

反射波の項にも同じ変換を行う。そのために、既知の反射振幅のフーリエ変換を
$$
r(s)=\frac{1}{2\pi}\int_{\mathbb R}b(k)e^{iks}\,dk
\tag{7}
$$
とおく。(4) の平面波と積分部分をそれぞれ変換すると、
$$
\frac{1}{2\pi}\int_{\mathbb R}b(k)f_+(x,k)e^{iky}\,dk
 =r(x+y)+\int_x^\infty K(x,z)r(z+y)\,dz
\tag{8}
$$
となる。引数 $z+y$ は、核の中の $e^{ikz}$ と変換の $e^{iky}$ が掛け合わされた結果である。ここでの積分順序の交換は、Schwartz ポテンシャルに対する $b\in L^1(\mathbb R)$ と、固定した $x$ での $K(x,\cdot)\in L^1([x,\infty))$ によって正当化される。

(6) と (8) により、(1) の右辺からは $K$ と反射データの寄与が取り出せた。残る左辺の変換には、束縛状態の情報が入っている。その情報を取り出すため、次に複素 $k$ 平面での留数を使う。

## 4. 束縛状態の寄与を留数で取り出す

$f_+(x,k)e^{-ikx}$ と $f_-(x,-k)e^{ikx}$ は上半平面で正則であり、閉じた上半平面で $|k|\to\infty$ のとき $1+O(k^{-1})$ となる。透過振幅 $a(k)$ は上半平面へ有理型に続き、その単純極が束縛状態 $k=i\kappa_n$ である。左辺のフーリエ積分に使うのは、透過波の組合せの留数
$$
\operatorname*{Res}_{k=i\kappa_n}
 \bigl[a(k)f_-(x,-k)\bigr]
 =i c_n^2 f_+(x,i\kappa_n)
\tag{9}
$$
である。この式が、束縛状態の規格化と複素積分を結ぶ。[Aktosun、§VI の (6.1)–(6.4)](https://arxiv.org/pdf/0905.4746) に対応する結果がある。同論文の $T,R,f_l,f_r$ は、それぞれここでの $a,b,f_+(x,k),f_-(x,-k)$ に対応する。

<details id="residue-proof">
<summary>留数と規格化定数の関係を Wronskian で確かめる</summary>

Wronskian を $W[v,w]=v\partial_xw-(\partial_xv)w$ と定める。実軸上の散乱関係から得られる $\alpha(k)=-W[f_+(x,k),f_-(x,-k)]/(2ik)$ を上半平面で用いる。束縛状態では両 Jost 解は同じ一次元の固有空間に属するので、実数の比例定数 $d_n\ne0$ を使って $f_-(x,-i\kappa_n)=d_n f_+(x,i\kappa_n)$ と書ける。Schrödinger 方程式を $k$ で微分すると、
$$
\begin{aligned}
\partial_xW[\partial_k f_+,f_-(x,-k)]
 &=2k f_+(x,k)f_-(x,-k),\\
\partial_xW[f_+,\partial_k f_-(x,-k)]
 &=-2k f_+(x,k)f_-(x,-k)
\end{aligned}
$$
となる。$\partial_k f_-(x,-k)$ は合成関数全体の微分である。$k=i\kappa_n$ では第1の Wronskian は $+\infty$ で、第2は $-\infty$ で消える。それぞれの端から $x$ まで積分して足すと、
$$
-2i(i\kappa_n)\alpha'(i\kappa_n)
 =-2i\kappa_n d_n\int_{\mathbb R}f_+(z,i\kappa_n)^2\,dz,
\qquad
\alpha'(i\kappa_n)=-i d_n c_n^{-2}.
$$
よって $a=1/\alpha$ の単純極での留数は
$$
\frac{f_-(x,-i\kappa_n)}{\alpha'(i\kappa_n)}
 =i c_n^2f_+(x,i\kappa_n)
$$
となり、(9) が得られる。

</details>

(9) をフーリエ積分に使うには、実軸を上半円で閉じる。ただし、自由な平面波を先に除き、
$$
\bigl[a(k)f_-(x,-k)e^{ikx}-1\bigr]e^{ik(y-x)}
\tag{10}
$$
を積分する。角括弧内は無限遠で $O(k^{-1})$ であり、$y>x$ なら $|e^{ik(y-x)}|=e^{-\operatorname{Im}k\,(y-x)}$ が上半平面で減衰する。この二つの性質により大きな上半円上の積分は消える。下図の向きで実軸を $-R$ から $R$、上半円を $R$ から $-R$ へ進むと、正の向きで束縛状態の極を囲む。$k=0$ では境界値を用いる。この点でも (10) の角括弧内は有界なので、小半円で避けたときの寄与は半径とともにゼロになる。したがって、$k=0$ から留数の項は加わらない。

<details id="contour-estimates">
<summary>大きな上半円と、原点を避ける小半円の積分を評価する</summary>

大きな上半円を $k=Re^{i\theta}$（$0\le\theta\le\pi$）と表す。角括弧内の $O(R^{-1})$ と線素の大きさ $R\,d\theta$ が打ち消し合うので、$R$ に依存しない定数 $C$ を使って、(10) の上半円上の積分の絶対値は
$$
C\int_0^\pi e^{-R(y-x)\sin\theta}\,d\theta
 =O\!\left(\frac{1}{R(y-x)}\right)\longrightarrow0
$$
と評価できる。実際、$0\le\theta\le\pi/2$ では $\sin\theta\ge2\theta/\pi$ を使い、残りの半分には対称性を使えばよい。実軸に接する両端では指数関数は一様に小さくならないため、この角度積分まで評価することが重要である。

原点で注意が必要なのは、zero-energy resonanceがありうるためである。これは、エネルギーが $0$ のとき、平方可積分ではないが両端で有界な非零解が存在する場合をいう。Schwartz ポテンシャルでは、共鳴の有無によらず透過振幅と、平面波因子を除いた Jost 解 $f_+(x,k)e^{-ikx}$、$f_-(x,-k)e^{ikx}$ の組合せは $k=0$ で有界に保たれる（[Egorova ほか、§2 の (2.4)–(2.7) と定理 2.1](https://arxiv.org/pdf/1411.0021)）。したがって半径 $\varepsilon$ の小半円上では、(10) の積分は $O(\varepsilon)$ で消える。zero-energy resonanceを除外する仮定は必要なく、共鳴は負の固有値に対応する束縛状態の和にも含めない。

</details>

<div data-visual-slot="contour"></div>

留数定理を用い、(10) で引いた $1$ の変換も $y>x$ ではゼロであることに注意すると、左辺の変換は
$$
\begin{aligned}
\frac{1}{2\pi}\int_{\mathbb R}a(k)f_-(x,-k)e^{iky}\,dk
 &=i\sum_{n=1}^{N}\operatorname*{Res}_{k=i\kappa_n}
       [a(k)f_-(x,-k)]e^{-\kappa_n y}\\
 &=-\sum_{n=1}^{N}c_n^2 f_+(x,i\kappa_n)e^{-\kappa_n y}
\end{aligned}
\tag{11}
$$
となる。最後の負号は、留数定理と $1/(2\pi)$ から出る $i$ に、(9) の $i$ が掛かるためである。

## 5. GLM 方程式とポテンシャルの再構成

(11) の束縛状態の Jost 解にも (4) を代入すると、
$$
\begin{aligned}
f_+(x,i\kappa_n)e^{-\kappa_n y}
 &=e^{-\kappa_n(x+y)}
   +\int_x^\infty K(x,z)e^{-\kappa_n(z+y)}\,dz.
\end{aligned}
$$
これは反射項 (8) と同じ形である。そこで、反射データと束縛状態データを一つの既知の関数にまとめて、
$$
\boxed{
F(s)=\underbrace{\frac{1}{2\pi}\int_{\mathbb R}b(k)e^{iks}\,dk}_{r(s):\ \text{continuous data}}
 +\underbrace{\sum_{n=1}^{N}c_n^2e^{-\kappa_n s}}_{\text{bound-state data}}
}
\tag{12}
$$
と定める。(1) の変換で得た (6)、(8)、(11) を合わせ、束縛状態の項を右辺から左辺へ移すと、Gel'fand–Levitan–Marchenko（GLM）方程式
$$
\boxed{
K(x,y)+F(x+y)+\int_x^\infty K(x,z)F(z+y)\,dz=0,
\qquad y>x
}
\tag{13}
$$
が得られる。求める対象は、各 $x$ を固定したときの未知関数 $K(x,\cdot)$ である。

再構成は、散乱データから (12) の $F$ を作り、(13) を解き、(5) の $u(x)=-2\,dK(x,x)/dx$ を使う、という順序になる。実際のポテンシャルに由来するデータに対しては、GLM 方程式は対応する変換核を一意に定める。いまの滑らかさと減衰の仮定により、核は対角まで連続に延長でき、対角に沿って微分できる。したがって、まず $y>x$ で求めた核の極限 $y\downarrow x$ を取り、それからポテンシャルを復元すればよい。GLM 方程式と再構成の標準形は [Aktosun、§VIII の (8.1)–(8.3)](https://arxiv.org/pdf/0905.4746) と比較できる。

## 6. 無反射の場合：一つの束縛状態からソリトンへ

反射がなく $b(k)=0$、束縛状態が一つだけなら、入力は $\kappa>0$ と規格化定数 $c>0$ で、$F(s)=c^2e^{-\kappa s}$ となる。(13) の各項の $y$ 依存性は $e^{-\kappa y}$ なので、核を $K(x,y)=-A(x)e^{-\kappa y}$ とおく。GLM 方程式をこの指数関数で割ると、積分方程式が
$$
-A(x)+c^2e^{-\kappa x}
 -A(x)c^2\frac{e^{-2\kappa x}}{2\kappa}=0
$$
という代数方程式になる。したがって核とその対角値は
$$
K(x,y)=-\frac{c^2e^{-\kappa(x+y)}}{1+\dfrac{c^2}{2\kappa}e^{-2\kappa x}},
\qquad
K(x,x)=-\frac{c^2e^{-2\kappa x}}{1+\dfrac{c^2}{2\kappa}e^{-2\kappa x}}
\tag{14}
$$
と求まる。

規格化定数を $c^2=2\kappa e^{2\kappa x_0}$ と表すと、$x_0$ はポテンシャルの中心位置になる。(14) の対角値を (5) で微分すれば、
$$
K(x,x)=-\frac{2\kappa}{1+e^{2\kappa(x-x_0)}},
\qquad
\boxed{u(x)=-2\kappa^2\operatorname{sech}^2\!\bigl[\kappa(x-x_0)\bigr]}
\tag{15}
$$
を得る。これが、固定した時刻での一ソリトン・ポテンシャルである。下の図では、規格化定数を中心位置 $x_0$ に置き換えて操作できる。$x_0$ を動かすと核の対角値とポテンシャルがともに平行移動する。$\kappa$ を大きくすると井戸は深くなり、幅は狭くなる。核の対角値の傾きに $-2$ を掛けたものがポテンシャルであることも、二つの曲線から確認できる。

<div data-visual-slot="reconstruction"></div>

このノートは散乱データからの再構成に範囲を絞った。KdV 方程式との関係や散乱データの時間発展まで読む場合は、[元のノート全体（PDF）](/notes/KdV/source/数理班_政岡凜太郎.pdf) と [LaTeX ソース](/notes/KdV/source/KdV.tex) を参照してほしい。逆散乱の全体像と無反射の場合の計算は [Aktosun、§VI–IX](https://arxiv.org/pdf/0905.4746) にまとまっている。
