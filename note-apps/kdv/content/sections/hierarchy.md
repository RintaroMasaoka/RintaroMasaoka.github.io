## 4. KdV階層と無限個の保存量

### 4.1. 変換核と擬微分作用素

KdV の Lax 方程式に現れた $B=-4\partial_x^3+6u\partial_x+3u_x$ には、$u$ とその微分が特定の係数で現れた。これらの係数を一つの構造から決め、同じ仕組みでより高い微分を含む発展則も作れるだろうか。手掛かりは、前章で使った、自由波を Jost 解へ変える核 $K$ にある。

前節までに、固定したポテンシャル $u(x,t)$ に対する左 Jost 解は
$$
f_-(x,k)=e^{ikx}+\int_{-\infty}^xK(x,y)e^{iky}\,dy
\tag{dressing-jost-recall}
$$
と表され、その同じ核の対角値から $u=2\,dK(x,x)/dx$ が復元されることを見た。時刻 $t$ を固定し、自由波だけでなく積分が収束する十分滑らかな入力 $g$ にも同じ積分変換を作用させて
$$
(Sg)(x):=g(x)+\int_{-\infty}^xK(x,y)g(y)\,dy
\tag{dressing-transform}
$$
と書く。したがって $S e^{ikx}=f_-(x,k)$ である。$S$ は既習の核 $K$ が定める、自由波からポテンシャル付きの波への変換を表す。

この変換で微分はどう表されるだろうか。自由波を微分してから $S$ を作用させる操作を、変換後の波に作用する演算子 $P$ で表せれば、
$$
P(Sg)=S(\partial_x g)
$$
となる。以下ではこの関係を擬微分作用素で具体化し、$P$ の二乗が既知の Schrödinger 演算子 $-L$ になることを示す。

まず負の微分冪を使う意味を、積分変換と結び付けておく。左端で十分速く消える関数 $g$ には
$$
(\partial_x^{-1}g)(x):=\int_{-\infty}^xg(s)\,ds
$$
と置ける。このとき左端の境界項は消え、$\partial_x\partial_x^{-1}g=g$ である。以後、擬微分作用素の負冪は形式級数として扱い、積則と係数比較で定める。

係数関数と微分の積は可換ではない。たとえば、任意の滑らかな $g$ に対して
$$
\partial_x(\alpha g)=\alpha\partial_xg+\alpha_xg
$$
なので、演算子の積では $\partial_x\alpha=\alpha\partial_x+\alpha_x$ と扱う。$\partial=\partial_x$ と略記し、負冪を含む擬微分作用素を
$$
A=\sum_{j=-\infty}^{m}\alpha_j(x)\partial^j
$$
という、次数に上限をもつ形式級数として導入する。その積は一般化 Leibniz 則
$$
\partial^m\alpha=\sum_{j\ge0}\binom{m}{j}(\partial_x^j\alpha)\partial^{m-j},\qquad
\binom{m}{j}=\frac{m(m-1)\cdots(m-j+1)}{j!},\quad \binom m0=1
$$
で定める。たとえば $\partial^{-1}\alpha=\alpha\partial^{-1}-\alpha_x\partial^{-2}+\alpha_{xx}\partial^{-3}-\cdots$ となる。定積分として定めた $\partial_x^{-1}$ は、境界条件を満たす関数への具体的な積分作用である。擬微分作用素の平面波上の $(ik)^{-r}$ は、その形式級数を大波数で比較する記号として用いる。

核 $K$ と必要な導関数が左端で十分速く減衰するとき、変換 $S$ の積分核表示を平面波に作用させ、$y$ について部分積分を繰り返すと、左端の境界項が消え、上端 $y=x$ の値と導関数が順に現れる。従って $S$ の形式擬微分表示は
$$
S=1+K(x,x)\partial^{-1}-(\partial_yK)(x,x)\partial^{-2}+\cdots.
\tag{dressing-pdo}
$$
この等式は、散乱問題で $K$ が定める積分変換の大波数展開を形式級数で表す。対角値が先頭の負冪係数となる点は、既に得た $u=2\,dK(x,x)/dx$ との接点でもある。部分積分の各段の境界条件と係数確認は補足に示す。

この演算子を使う理由は、$L$ と自由微分の作用を、同じ変換後の波で直接比べられることにある。Jost 解の定義から、任意の実波数 $k$ について
$$
L(S e^{ikx})=k^2S e^{ikx}=S(-\partial^2 e^{ikx}).
$$
つまり両辺は全ての実波数 $k$ で、同じ変換後の固有関数に同じ固有値 $k^2$ で作用する。この全波数の関係を大波数で展開して形式級数の各係数を比べると、形式擬微分作用素として
$$
LS=S(-\partial^2)
\tag{dressing-intertwining}
$$
を得る。

形式表示の $S$ は $1$ と負冪部分の和なので、形式積の中で逆をもつ。実際、$Q:=S-1$ の次数は $-1$ 以下なので、逆級数は
$$
S^{-1}=1-Q+Q^2-Q^3+\cdots
$$
となる。$Q$ の次数が負なので、各固定次数の係数には有限個の項だけが寄与する。従ってこれは収束を要しない形式逆である。ここで
$$
P:=S\partial S^{-1}
\tag{dressed-derivative}
$$
と定めれば、$PS=S\partial$、さらに (@dressing-intertwining) より
$$
P^2=S\partial^2S^{-1}=-L.
$$
したがって $P$ は、自由波の微分を変換後の波に移す、最高次項が $\partial$ である $-L$ の形式平方根である。

<div data-extra-visual="dressing"></div>

核の展開 (@dressing-pdo) と $P^2=-L$ の係数を比較すると
$$
P=(-L)^{1/2}=\partial-\frac{u}{2}\partial^{-1}+\frac{u_x}{4}\partial^{-2}+\cdots.
\tag{equation-0c81f024ea}
$$
となり、最初の負冪係数にも対角復元式と同じポテンシャルが現れる。係数を順に定める計算は補足に置く。

<details id="dressing-expansion-check">
<summary>Kernel expansion and square-root coefficients</summary>

平面波 $g(y)=e^{iky}$ に積分変換の補正を作用させる。$K$ と必要な導関数が左端で十分速く消えるとき、部分積分を行うごとに左端の境界項は消え、上端から
$$
\int_{-\infty}^x K(x,y)e^{iky}\,dy
\sim e^{ikx}\left[\frac{K(x,x)}{ik}-\frac{K_y(x,x)}{(ik)^2}+\cdots\right]
$$
を得る。平面波上では $\partial^{-r}$ が $(ik)^{-r}$ として作用するので、これが (@dressing-pdo) の係数を与える。これはこの積分変換の大波数漸近展開である。

次に $P=\partial+a_1\partial^{-1}+a_2\partial^{-2}+\cdots$ と置く。非可換積の規則 $\partial a=a\partial+a_x$ を用いると、$P^2$ の $\partial^0$ 係数は $2a_1$、$\partial^{-1}$ 係数は $2a_2+(a_1)_x$ である。これらを $P^2=\partial^2-u$ と比較して
$$
a_1=-\frac{u}{2},\qquad a_2=\frac{u_x}{4}
$$
となる。以後も同じ係数比較で一つずつ決まる。

</details>


### 4.2. 高次KdV方程式

前節までの KdV 方程式では物理時間 $t$ を使い、
$$
L=-\partial_x^2+u(x,t),\qquad
L_t=[-4\partial_x^3+6u\partial_x+3u_x,L]
$$
という Lax 方程式で表された。ここで交換子は $[A,C]=AC-CA$ である。以後、この節では階層時間 $t_n$ を使い、$t_3=-4t$ とする。したがって $\partial_{t_3}=-(1/4)\partial_t$ であり、同じ物理的な KdV 発展は
$$
\frac{\partial u}{\partial t_3}=\frac{u_{xxx}-6uu_x}{4}
$$
と書ける。この節では、得られた一つの演算子 $P$ から無限個の時間発展を作り、それぞれに保存量があることを示す。

$L=-\partial^2+u$ の各階層時間に沿う変化は、掛け算演算子 $u_{t_n}$ である。したがって、Lax 方程式で発展を作るには、交換子 $[B,L]$ に微分演算子が残らないような $B$ が必要になる。

$P^n$ は $L=-P^2$ と可換なので、そのまま $B$ にしても自明な流れしか生じない。ところが、$P^n$ の非負冪だけを残すと、その部分と $L$ の交換子は掛け算演算子になる。この性質を使って時間発展を作る。

$A_{\ge0}$ を $A$ の非負の冪 $\partial^j$（$j\ge0$）からなる部分、$A_{<0}$ を残りの負冪部分と書き、
$$
B_n=\bigl(P^n\bigr)_{\ge0},\qquad n=1,2,\ldots
\tag{equation-d0499023f2}
$$
と定める。$P^2=-L$ なので偶数乗 $P^{2m}=(-L)^m$ は $L$ と可換し、対応する流れは自明である。$n=1$ では $B_1=\partial$ となり、$t_1=x$ と同一視される。この流れは $x$ 方向の平行移動を表し、独立の時間変数を加えない。KdV の非自明な流れは奇数 $n\ge3$ に現れる。まず $n=3$ で、この正規化の $B_3$ を求めよう。展開で $P^3$ の非負冪を集めると
$$
B_3=(P^3)_{\ge0}=\partial^3-\frac32u\partial-\frac34u_x,
\tag{equation-bc6b0d053d}
$$
となる。これは前節の物理時間の Lax 生成子の $-1/4$ 倍である。

$P^n$ 全体は $L$ と可換なので、$B_n$ と $L$ の交換子は負冪部分 $\bigl(P^n\bigr)_{<0}$ との交換子だけで決まる。
$$
[L,B_n]=-[L,\bigl(P^n\bigr)_{<0}].
\tag{equation-79158a38b3}
$$
負冪部分の最高次数は $\partial^{-1}$ である。$L=-\partial^2+u$ と負冪項の交換子では、たとえば $[-\partial^2,\alpha\partial^{-1}]=-2\alpha_x-\alpha_{xx}\partial^{-1}$ のように最高次項が相殺し、次数は $0$ 以下となる。一方、左辺は微分作用素なので負の冪を含まない。両辺が一致するには次数 $0$ の項だけが残るため、交換子は掛け算演算子となる。したがって各 $B_n$ は $L$ との Lax 方程式
$$
\frac{\partial L}{\partial t_n}=[B_n,L]
\tag{equation-aaef1d653d}
$$
を与える。偶数 $n$ は自明な流れであり、奇数 $n\ge3$ が KdV 階層の非自明な発展を与える。$t_n$ は各発展に割り当てた階層時間である。

### 4.3. $P$ の冪の時間発展

ここでは $t_3$ に沿う発展を考える。前節で作った $P$ から保存量を探すため、まず $P$ とその冪の時間変化を求めよう。一つの発展則でこれらを追えれば、個々の式を展開せずに、無限個の量をまとめて調べられる。

$P^2=-L$ を時間微分すると
$$
P_{t_3}P+PP_{t_3}=-L_{t_3}
$$
である。一方、Lax 方程式 $L_{t_3}=[B_3,L]$ と $P^2=-L$ から
$$
[B_3,P]P+P[B_3,P]=[B_3,P^2]=-L_{t_3}
$$
となる。両式の差を取れば
$$
\bigl(P_{t_3}-[B_3,P]\bigr)P+P\bigl(P_{t_3}-[B_3,P]\bigr)=0.
$$
$P$ の最高次項は $\partial$ なので、差 $P_{t_3}-[B_3,P]$ が非零なら、左辺の最高次項はその係数の2倍となり、消えない。したがって
$$
P_{t_3}=[B_3,P].
\tag{equation-ad35198100}
$$
積の微分則を使うと、各正整数 $n$ の奇数冪についても
$$
\frac{\partial}{\partial t_3}P^{2n-1}=[B_3,P^{2n-1}]
\tag{odd-power-evolution}
$$
が得られる。

### 4.4. 留数による保存量の構成

これで、各奇数冪の $t_3$ 発展は交換子として書けた。保存量を得るには、ここから時間微分が $x$ の全微分になる量を取り出せばよい。空間積分すると、境界項だけが残るからである。

ここで役立つのが、擬微分演算子の交換子では、$\partial^{-1}$ の係数が $x$ の全微分になるという性質である。この係数を取り出す操作を
$$
A=\sum_j\alpha_j\partial^j,\qquad
\operatorname{res}_{\partial}A=\alpha_{-1}
\tag{equation-e996f45051}
$$
と書き、$A$ の留数と呼ぶ。すると、既に求めた発展則 (@odd-power-evolution) から
$$
\frac{\partial}{\partial t_3}\operatorname{res}_{\partial}P^{2n-1}
=\operatorname{res}_{\partial}[B_3,P^{2n-1}].
\tag{equation-43b9d72cd5}
$$
右辺が全微分になることを、以下で確かめよう。

この確認では演算子全体を展開する必要はない。二つの単項式 $\alpha\partial^m$ と $\beta\partial^n$ を取り、積の中から留数に寄与する項だけを拾う。一般化 Leibniz 則で $\partial^m\beta$ を展開すると、$\partial^{m+n-r}$ の項が現れる。これが $\partial^{-1}$ になるには $r=m+n+1$ でなければならない。$r<0$ なら微分回数が負となるので寄与はなく、$r=0$ なら係数は $\alpha\beta-\beta\alpha=0$ で相殺する。したがって $r\ge1$ の場合だけを調べればよい。

留数に寄与する項は有限個なので、$B_3$ と $P^{2n-1}$ の級数にも項ごとに適用でき、留数全体も全微分となる。

そこで、この留数を
$$
R_n(x,t_3)=\operatorname{res}_{\partial}P^{2n-1},\qquad n=1,2,\ldots
\tag{equation-5cadc6fb79}
$$
と書く。たとえば $P$ の $\partial^{-1}$ 係数から $R_1=-u/2$ を得る。各 $R_n$ は $u$ とその空間微分だけで書ける。式 (@equation-43b9d72cd5) の右辺が全微分になることから、ある局所関数 $J_n(x,t_3)$ が存在して
$$
\frac{\partial R_n}{\partial t_3}=\frac{\partial J_n}{\partial x}.
\tag{equation-fd877994c9}
$$
$u$ とその導関数が $x\to\pm\infty$ で十分速く減衰すれば $J_n$ の境界値の差は消える。したがって
$$
I_n(t_3)=\int_{-\infty}^{\infty}R_n(x,t_3)\,dx
\tag{equation-863a6af854}
$$
は $t_3$ に依存しない。すべての $n\ge1$ でこの議論が成り立つため、KdV 方程式には無限個の保存量がある。

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
