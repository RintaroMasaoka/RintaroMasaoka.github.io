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

### 4.3. 留数から保存量を得る

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

補足では、この単項式計算を一般化二項係数で進め、寄与が明示的な全微分であることを示す。留数に寄与する項は有限個なので、$B_3$ と $P^{2n-1}$ の級数にも項ごとに適用でき、留数全体も全微分となる。

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
