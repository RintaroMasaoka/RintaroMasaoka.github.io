# KdVの量子化と保存量の構成

<span id="kdvの量子化と可換な保存量"></span>

KdV 階層では、一つの場 $u(x)$ から無限個の局所保存量が得られた。場を量子演算子にすると、同じ点での積にも、保存量どうしの交換にも順序が関わる。それでも、古典の保存量に補正を加え、互いに可換な無限系列を作ることができる。この章では、一つの保存量の係数を実際に決めた後、その構成がどの次数でも続く理由を調べる。古典 KdV の可積分構造が、量子化によってどのような条件の問題に変わるかが見えてくる。

## KdVのHamiltonian構造と量子化

留数から得た保存量には、時間発展に沿って一定であるだけでなく、KdV 階層の各発展を生成する働きがある。この働きを表すのが、場の Poisson 括弧である。量子力学で Hamiltonian との交換子が時間発展を与えるように、古典論では保存量との Poisson 括弧が発展を与える。まずこの関係を既習の KdV 階層について組み立て、量子化すべき場の括弧を定めよう。

ここから空間を周期 $2\pi$ とし、積分と周期デルタ関数を
$$
\oint f:=\int_0^{2\pi}\frac{dx}{2\pi}f(x),\qquad
\delta_{\mathrm{per}}(x-y)=\sum_{n\in\mathbb Z}e^{in(x-y)}
\tag{quantum-circle-convention}
$$
で規格化する。$\oint dx$ や $\oint dy$ もこの測度を表し、$\oint dy\,\delta_{\mathrm{per}}(x-y)f(y)=f(x)$ である。周期境界条件のもとでも全微分の積分は零なので、これまでの留数保存量を同じように扱える。最初の三つは
$$
I_1=\frac12\oint u,\qquad
I_3=-\frac18\oint u^2,\qquad
I_5=\frac1{16}\oint\left(u^3+\frac12u_x^2\right)
\tag{quantum-classical-charges}
$$
となる。

Poisson 括弧は、二つの量に対する演算 $\{F,G\}$ であり、反対称性、Jacobi 恒等式、積に対する微分の法則を満たす。Hamiltonian を $H$ とすると、発展は $F_t=\{F,H\}$ と書かれる。ここで扱う $F[u]$ は場の局所密度を積分した量で、その汎関数微分を
$$
\delta F=\oint dx\,\frac{\delta F}{\delta u(x)}\delta u(x)
$$
によって定める。例えば $I_3$ の汎関数微分は $-u/4$ である。

場の括弧を構成するために、補助場 $j(x)$ から局所式 $u=j^2+j_x$ を作る。この対応を古典 Miura 変換と呼ぶ。既習の Schrödinger 作用素 $L=-\partial_x^2+u$ は、この対応のもとで
$$
-L=(\partial_x+j)(\partial_x-j)
=\partial_x^2-(j^2+j_x)
\tag{quantum-classical-miura}
$$
と因数分解される。ここで用いるのは場とその導関数からなる局所式の関係であり、与えられた周期場 $u$ から周期場 $j$ を求めることは前提としない。補助場 $j$ には、場に依存しない単純な括弧
$$
\{j(x),j(y)\}=\partial_x\delta_{\mathrm{per}}(x-y)
\tag{quantum-current-poisson}
$$
を与える。これを積と微分の規則で $u=j^2+j_x$ の括弧へ移すと、$u$ 自身を係数に持つ括弧が得られる。

その移し方は変分で見られる。Miura 変換の変分は $\delta u=(\partial_x+2j)\delta j$ であり、周期積分の部分積分によって反対側に移す作用素は $-\partial_x+2j$ となる。従って、$j$ の括弧を表す $\partial_x$ は、$u$ の括弧では
$$
\begin{aligned}
(\partial_x+2j)\partial_x(-\partial_x+2j)
&=-\partial_x^3+4(j^2+j_x)\partial_x+2(j^2+j_x)_x\\
&=-\partial_x^3+4u\partial_x+2u_x
\end{aligned}
\tag{quantum-miura-poisson-realization}
$$
に変わる。右辺には $j$ が残らず、$u$ だけで括弧を定められる。これを作用素 $J$ と書くと、場と局所汎関数の括弧は
$$
\begin{gathered}
J=-\partial_x^3+4u\partial_x+2u_x,\qquad
\{u(x),u(y)\}=J_x\delta_{\mathrm{per}}(x-y),\\
\{F,G\}=\oint dx\,\frac{\delta F}{\delta u(x)}
J\frac{\delta G}{\delta u(x)}.
\end{gathered}
\tag{quantum-second-poisson}
$$
となる。$J$ の最後の項は $2u_x$ の掛け算であり、場の括弧では微分は $x$ に関して行う。これは KdV の第二 Poisson 括弧と呼ばれる構造である [[1]](#ref-blz-quantum), 式 (12)–(14)。同文献の場 $U$ は $-u$ に対応し、括弧の符号とデルタ関数の規格化を本章にそろえた。

<details>
<summary>Check the induced bracket and its Poisson properties</summary>

補助場の括弧は
$$
\{F,G\}_j=\oint dx\,\frac{\delta F}{\delta j}\,
\partial_x\frac{\delta G}{\delta j}
$$
である。部分積分によって反対称となる。また、三つの $j$ の Jacobi 恒等式では、内側の括弧が場によらないため、外側の括弧は零となる。積と微分の規則で広げると、$j$ の微分多項式についても Jacobi 恒等式が成り立つ。

Miura 変換の変分と部分積分から
$$
\frac{\delta F}{\delta j}
=(-\partial_x+2j)\frac{\delta F}{\delta u}
\tag{quantum-miura-chain-rule}
$$
である。これを補助場の括弧に代入し、左の $-\partial_x+2j$ を部分積分で移すと
$$
\{F,G\}_j
=\oint dx\,\frac{\delta F}{\delta u}
(\partial_x+2j)\partial_x(-\partial_x+2j)
\frac{\delta G}{\delta u}
$$
となり、本文の $J$ を得る。

この構成で必要なのは局所的な微分多項式の対応であり、任意の周期場 $u$ を周期場 $j$ で大域的に表せるとは仮定しない。実際、$\partial_x^k u=\partial_x^{k+1}j+\cdots$ の残りの項には、それより低階の $j$ の導関数しか現れない。一点で $j$ の値を選べば、任意に指定した $u,u_x,\ldots$ の値に合わせて $j_x,j_{xx},\ldots$ を順に選べる。そのため、$u$ の微分多項式が Miura 代入後に恒等的に零なら、代入前から零である。この性質により、補助場で成立する Jacobi 恒等式は $u$ の局所的な括弧にも移る。周期積分を取ると局所汎関数にも同じ性質が成り立つ。

</details>

この括弧に $I_3$ を入れると、
$$
u_{t_3}=\{u,I_3\}
=J\left(-\frac u4\right)
=\frac14(u_{xxx}-6uu_x)
\tag{quantum-kdv-hamiltonian-example}
$$
となり、既習の KdV 方程式が戻る。$I_1$ なら $\{u,I_1\}=J(1/2)=u_x$ となり、空間並進を生成する。同じ括弧で生成子を替えると、階層の異なる時間発展が得られるのである。

これは最初の二つだけの一致ではない。既習の $P^2=-L$ による留数保存量について、全ての正の奇数 $m$ で
$$
I_m=-\frac1m\operatorname{Tr}_{\mathrm{AM}}P^m,
\qquad
u_{t_m}=J\frac{\delta I_m}{\delta u}
\tag{quantum-trace-generates-sato-flow}
$$
が成り立つ。ここでも Adler–Manin トレースは規格化した周期積分で取る。右の発展は、前章で学んだ $u_{t_m}=[(P^m)_{\ge0},L]$ そのものである。次の補足で、トレースの巡回性からこの対応を確かめる。

<details>
<summary>Prove Hamiltonian generation for the hierarchy</summary>

任意の周期関数 $f(x)$ を用いて $\delta u=Jf$ の方向に変分する。掛け算作用素としての $\delta L=\delta u$ を、既習の $L=-\partial_x^2+u$ と結び付ける恒等式は
$$
Jf=[2f\partial_x-f_x,L]+4f_xL
\tag{classical-lax-hamiltonian-operator}
$$
である。右辺では二階微分項が打ち消し合い、掛け算の項 $-f_{xxx}+4uf_x+2u_xf=Jf$ だけが残る。

一方、$P^2=-L$ の変分とトレースの巡回性から
$$
\begin{aligned}
\delta I_m
&=-\operatorname{Tr}_{\mathrm{AM}}(P^{m-1}\delta P)\\
&=\frac12\operatorname{Tr}_{\mathrm{AM}}(P^{m-2}\delta L)
\end{aligned}
\tag{quantum-trace-variation}
$$
となる。$\delta L=Jf$ に上の恒等式を使うと、$P^{m-2}$ と $L$ が可換であるため、交換子を含む項のトレースは零になる。従って
$$
\begin{aligned}
\delta I_m
&=2\operatorname{Tr}_{\mathrm{AM}}(P^{m-2}f_xL)\\
&=-2\operatorname{Tr}_{\mathrm{AM}}(f_xP^m)\\
&=2\oint f\,\partial_x\operatorname{res}_{\partial_x}P^m.
\end{aligned}
\tag{quantum-trace-paired-variation}
$$
二行目は巡回性と $LP^{m-2}=-P^m$、三行目は留数積分と部分積分による。

前章の Lax 方程式では、$B_m=(P^m)_{\ge0}$ とすると $[P^m,L]=0$ より $[B_m,L]=-[(P^m)_{<0},L]$ である。この交換子の掛け算の項には負冪部分の先頭だけが寄与するので、
$$
u_{t_m}=[B_m,L]
=-2\partial_x\operatorname{res}_{\partial_x}P^m
\tag{quantum-lax-residue-velocity}
$$
を得る。従って、先ほどの変分は $\delta I_m=-\oint f\,u_{t_m}$ と書ける。

同じ変分を汎関数微分で表すと、$J^\dagger=-J$ より
$$
\delta I_m
=\oint\frac{\delta I_m}{\delta u}\,Jf
=-\oint f\,J\frac{\delta I_m}{\delta u}
\tag{quantum-trace-paired-gradient}
$$
である。任意の $f$ に対する二つの式を比べれば、本文の生成関係が従う。$m=1$ も、擬微分作用素の形式逆 $P^{-1}$ を使って同じように扱える。

</details>

従って、場に依存する量の発展も $\partial_{t_m}F=\{F,I_m\}$ と書ける。既習の保存則は、この表示では
$$
0=\frac{dI_k}{dt_m}=\{I_k,I_m\},
\qquad k,m=1,3,5,\ldots
\tag{quantum-classical-family-involution}
$$
となる。留数保存量は、全ての発展で保存されると同時に、それらを生成する互いに Poisson 可換な Hamiltonian でもある。量子化では、この場の括弧を交換関係へ移し、保存量の相互可換性を保つように量子補正を求める。その交換関係を見通すため、次に $u$ の Fourier モードの括弧を調べよう。

場を Fourier 級数 $u(x)=\sum_nu_ne^{-inx}$、$u_n=\oint e^{inx}u(x)$ で表すと、この括弧は
$$
i\{u_m,u_n\}=2(m-n)u_{m+n}+m^3\delta_{m+n,0}
\tag{quantum-classical-virasoro}
$$
となる。実際、$J$ を $e^{inx}$ に作用させた $-\partial_x^3$ の項は $in^3\delta_{m+n,0}$、残りは $[4in-2i(m+n)]u_{m+n}$ を与える。場のモードに線形な項と、場によらない項だけで括弧が閉じている。

この関係の量子版は、Virasoro 代数で表せる。ここからは共形場理論（CFT）の基礎知識を前提とし、Virasoro 代数、エネルギー運動量テンソル、OPE、正規積、自由ボソンとその頂点演算子、Wick の定理を既知として扱う。後半では、複体とコホモロジーの基本事項も用いる。本章では Virasoro 関係の規約を
$$
[L_m,L_n]=(m-n)L_{m+n}
+\frac c{12}(m^3-m)\delta_{m+n,0}\mathbf1
\tag{quantum-virasoro}
$$
とし、$\mathbf1$ は恒等作用素を表す。中心電荷 $c\ne0$ として、KdV の量子場を
$$
\widehat u(x)=\frac6c\sum_nL_ne^{-inx}-\frac14\mathbf1,
\qquad
\widehat u_n=\frac6cL_n-\frac14\delta_{n,0}\mathbf1
\tag{quantum-cylinder-field}
$$
と定めると、正確に
$$
\frac c3[\widehat u_m,\widehat u_n]
=2(m-n)\widehat u_{m+n}+m^3\delta_{m+n,0}\mathbf1
\tag{quantum-mode-correspondence}
$$
を得る。$m+n=0$ のとき、定数移動からの $cm/12$ が中心項の $-cm/12$ を打ち消すためである。古典の式 (@quantum-classical-virasoro) と比較すると、$c[\ ,\ ]/(3i)$ が Poisson 括弧に対応する。この規格化での量子発展は
$$
\partial_{t_m}\widehat F
=\frac c{3i}[\widehat F,\widehat I_m]
\tag{quantum-hamiltonian-evolution}
$$
であり、代数的な古典極限は $c\to-\infty$、$\widehat u\to u$ として比較する。

求める保存量は、$\widehat u$ とその導関数の正規積を密度とする局所積分である。本章の $:AB:$ には、以下で固定する局所座標での OPE の正則定数項を用いる。

## 自由場表示とスクリーニング

自由場による Miura 表示を用いて保存密度を構成する。局所座標と Virasoro 場の規格化を
$$
w=ix,\qquad \partial:=\partial_w=-i\partial_x,\qquad
T(w)=\frac c6\widehat u(x)
\tag{quantum-local-coordinate}
$$
と取る。$T$ が先ほどの Virasoro 場であり、$T=\sum_nL_ne^{-inx}-c\mathbf1/24$ である。これは線形な座標変更である。以下の二点展開は $w$ で書くが、$\oint$ は引き続き (@quantum-circle-convention) の $x$ の積分を表す。

自由場のカレント $j(w)$ の OPE は
$$
j(z)j(w)\sim\frac1{(z-w)^2}
\tag{quantum-ff-current}
$$
とし、Virasoro 場を次の量子 Miura 表示で実現する。
$$
T=\frac12:j^2:+\left(\frac b2-\frac1b\right)\partial j,
\qquad
c=13-3b^2-\frac{12}{b^2},\qquad b\ne0.
\tag{quantum-ff-miura}
$$
$b$ は中心電荷 $c$ を上式で表すパラメータである。二次項の二重縮約は $1/[2(z-w)^4]$、微分項どうしの縮約は $-6(b/2-1/b)^2/(z-w)^4$ であり、その和が中心項 $c/[2(z-w)^4]$ を与える。残りの項も合わせて
$$
T(z)T(w)\sim\frac{c/2}{(z-w)^4}
+\frac{2T(w)}{(z-w)^2}+\frac{\partial T(w)}{z-w}
\tag{cft-stress-self-ope}
$$
となる。

次に、密度を選ぶための作用を用意する。$\partial\phi=j$ とし、正規順序化した指数関数で与えられる頂点演算子とその縮約を
$$
V_\alpha=:e^{\alpha\phi}:,\qquad
j(z)V_\alpha(w)\sim\frac{\alpha V_\alpha(w)}{z-w},
\qquad
\partial V_\alpha=\alpha:jV_\alpha:
\tag{quantum-ff-vertex}
$$
とする。反対符号の電荷 $\alpha=+b,-b$ を用い、密度 $f$ への作用を
$$
S_\pm f(w):=\operatorname*{Res}_{z=w}V_{\pm b}(z)f(w)
\tag{quantum-ff-screening}
$$
と定める。これが二つのスクリーニングである。例えば積の順序をこの式にそろえると $S_\pm j=\mp bV_{\pm b}$ となる。出力は、元の $j$ の多項式に頂点演算子が掛かった場である。

保存量に課す条件は、二つの作用の結果がともに全微分になることである。
$$
S_+f=\partial h_+,\qquad S_-f=\partial h_-.
\tag{quantum-ff-integral-condition}
$$
頂点演算子を含む出力は局所式として扱い、全微分だけ異なるものを同一視する。この商の上で、二つのスクリーニングの作用がともに零になるのがこの条件である。$\oint f$ には周期積分を用い、$V_\pm$ は上の局所的な留数作用を定めるために用いている。ここで頂点演算子を含む全微分は
$$
\partial:V_\alpha F:
=:V_\alpha(\partial F+\alpha jF):
\tag{quantum-ff-charged-derivative}
$$
である。従って、出力の $j$ の多項式だけを普通に微分する場合とは条件が異なる。また $S_\pm\partial=\partial S_\pm$ なので、密度を全微分だけ変えても積分の条件は変わらない。

この条件が Virasoro 場とどう結び付くかを確かめよう。縮約から
$$
S_+:j^2:=(b^3-2b):jV_b:,\qquad
S_+(\partial j)=-b^2:jV_b:
$$
となり、(@quantum-ff-miura) へ代入すると $S_+T=0$ である。さらに、一般の $b$ に対しては、次の $\mathfrak{sl}_2$ のスクリーニングに関する結果が成り立つ。$j$ とその導関数の正規積の空間から、$V_b$ を含む場の空間への $S_+$ は全射であり、その核は、$T$ とその導関数の正規積で生成される場の空間である。$T$ が核に入ることは今確かめたが、全射性と核の完全な同定には Feigin–Frenkel の結果を用いる [[2]](#ref-ff-screening), Proposition 4.4.4。

この全射性により、保存量の密度を Virasoro 場で探してよいことが分かる。実際、$S_+f=\partial h_+$ なら、$S_+g=h_+$ となる $g$ を選べるため、
$$
S_+(f-\partial g)=0.
\tag{quantum-ff-virasoro-representative}
$$
$f-\partial g$ は $f$ と同じ積分を与え、しかも $T$ の正規積で書ける。従って、Virasoro 密度を選び、残る $S_-$ の条件を解けばよい。自由場の計算を使いながら、結果を $T$ の保存量へ戻せるのである。

## 最初の非自明な保存量の構成

空間並進を生成する $\widehat I_1=\frac12\oint\widehat u$ に続き、KdV の発展に対応する $\widehat I_3$ を構成しよう。ここで扱う中性の局所密度は、$j$ と微分 $\partial$ にそれぞれ $1$ を割り当てて共形次元を数える。$T$ の共形次元は $2$ であり、$\widehat I_3$ の密度は共形次元 $4$ になる。

自由場での共形次元 $4$ の候補は、$j^4,j^2\partial j,(\partial j)^2,j\partial^2j,\partial^3j$ の正規積である。このうち $j^2\partial j$ と $\partial^3j$ は全微分であり、部分積分で $j\partial^2j\equiv-(\partial j)^2$ となる。ここで $\equiv$ は全微分の差を除いて等しいことを表す。先頭係数を $1$ に固定すると、調べる密度は
$$
\rho_4=:j^4:+a:(\partial j)^2:
\tag{quantum-ff-quartic-ansatz}
$$
の一つの未知係数 $a$ に絞られる。

二つのスクリーニングを一度に扱うため、一般電荷 $\alpha$ で留数を計算する。この計算では密度を左に置いた $\rho_4(z)V_\alpha(w)$ を用いる。これは式 (@quantum-ff-screening) とは積の順序が逆である。全微分を除いた局所式の空間では、留数で定まる括弧は反対称なので、密度が頂点演算子に作用する向きと、スクリーニングが密度に作用する向きは符号が逆になる。従って、出力が全微分になる条件は、どちらの向きで計算しても同じである。

$j(z)$ と頂点演算子を一組、二組、三組縮約すると、それぞれ
$$
\frac{4\alpha}{z-w}:j(z)^3V_\alpha(w):,\quad
\frac{6\alpha^2}{(z-w)^2}:j(z)^2V_\alpha(w):,\quad
\frac{4\alpha^3}{(z-w)^3}:j(z)V_\alpha(w):
$$
が生じる。四組の縮約は四重極だけで、留数には寄与しない。残った $j(z)$ を展開して単純極を取り出すと、四次項から $4\alpha j^3+12\alpha^2j\partial j+2\alpha^3\partial^2j$ が得られる。一方、$\partial j(z)V_\alpha(w)\sim-\alpha V_\alpha(w)/(z-w)^2$ なので、微分二次項の留数は $-2a\alpha\partial^2j$ である。合わせると
$$
\operatorname*{Res}_{z=w}\rho_4(z)V_\alpha(w)
=:V_\alpha\{4\alpha j^3+12\alpha^2j\partial j
+(2\alpha^3-2a\alpha)\partial^2j\}:.
\tag{quantum-ff-quartic-residue}
$$
ここまでが Wick の規則で決まる部分である。

次に、この出力を全微分と照合する。式 (@quantum-ff-charged-derivative) から、
$$
\begin{aligned}
\partial:V_\alpha j^2:
&=:V_\alpha(\alpha j^3+2j\partial j):,\\
\partial:V_\alpha\partial j:
&=:V_\alpha(\alpha j\partial j+\partial^2j):.
\end{aligned}
\tag{quantum-ff-quartic-primitives}
$$
微分するとこの留数になる場の候補は $:V_\alpha j^2:$ と $:V_\alpha\partial j:$ の線形結合である。留数の $j^3$ の係数を合わせると、前者の係数は $4$ になる。次に $j\partial j$ を合わせると、後者の係数は $12\alpha-8/\alpha$ となる。最後に $\partial^2j$ の係数が一致する条件は
$$
2\alpha^3-2a\alpha=12\alpha-\frac8\alpha,
\qquad a=\alpha^2-6+\frac4{\alpha^2}.
$$
$\alpha=b,-b$ に対して同じ値が得られ、
$$
a=b^2-6+\frac4{b^2}
=4\left(\frac b2-\frac1b\right)^2-2
\tag{quantum-ff-quartic-coefficient}
$$
と決まる。実際、この係数を入れると、両符号について留数を次の全微分で表せる。
$$
\operatorname*{Res}_{z=w}\rho_4(z)V_\alpha(w)
=\partial:V_\alpha\left\{4j^2+
\left(12\alpha-\frac8\alpha\right)\partial j\right\}:,
\qquad \alpha=\pm b.
\tag{quantum-ff-quartic-total-derivative}
$$
これで、両スクリーニングについて頂点演算子を含めた全微分を具体的に構成できた。

この密度を $T$ で書き直すと、正規積の有限項の働きも分かる。$T(z)T(w)$ の正則な定数項を Wick の規則で計算すると
$$
\begin{aligned}
:TT:={}&\frac14:j^4:
+\left(\frac b2-\frac1b\right):j^2\partial j:
+\left(\frac b2-\frac1b\right)^2:(\partial j)^2:\\
&+\frac12:j\partial^2j:
+\frac13\left(\frac b2-\frac1b\right)\partial^3j.
\end{aligned}
\tag{quantum-ff-stress-product}
$$
ここで $:j\partial^2j:/2$ は、二次項どうしの一組縮約 $(z-w)^{-2}:j(z)j(w):$ の正則定数項から生じる。この項も含めて部分積分すると
$$
:TT:\equiv\frac14\left\{
:j^4:+\left[4\left(\frac b2-\frac1b\right)^2-2\right]:(\partial j)^2:
\right\}=\frac14\rho_4.
\tag{quantum-ff-quartic-virasoro}
$$
先ほどスクリーニングから決まった係数が、Virasoro の正規積にも現れた。

$T=c\widehat u/6$ に戻すと、構成した積分は
$$
\widehat I_3=-\frac18\oint:\widehat u^2:
=-\frac9{2c^2}\oint:TT:
=-\frac9{8c^2}\oint\rho_4
\tag{quantum-ff-third-charge}
$$
となる。全ての場を $w=ix$ で引き戻し、同じ $x$ の測度で積分している。

共形次元を上げても、行う操作は同じである。その共形次元の微分多項式を列挙し、全微分で候補を減らす。次に留数を計算し、頂点演算子を含む全微分の係数と照合する。各共形次元で候補は有限個なので、未知係数についての有限の線形方程式になる。次の保存量まで書くと
$$
\begin{aligned}
\widehat I_1&=\frac12\oint\widehat u,\\
\widehat I_3&=-\frac18\oint:\widehat u^2:,\\
\widehat I_5&=\frac1{16}\oint\left[
:\widehat u^3:+\left(\frac12+\frac1c\right):\widehat u_x^2:
\right],\qquad
:\widehat u^3:=:\widehat u(:\widehat u\widehat u:):.
\end{aligned}
\tag{quantum-local-charges}
$$
$I_5$ の微分項に $1/c$ の補正が加わる。これは局所積の処方まで含めて決まる係数である [[1]](#ref-blz-quantum), 式 (6)–(11)。

<details>
<summary>Compute the weight-four and weight-six screening conditions</summary>

次の計算では、本文と同じ $w$ 座標、$jj\sim(z-w)^{-2}$、電荷 $\pm b$ を用い、共形次元 $4$ または $6$ の条件を実際に解く。共形次元 $4$ では上の係数と式 (@quantum-ff-quartic-total-derivative) の全微分の表示を再現し、共形次元 $6$ では同じ操作を $\widehat I_5$ へ進められる。$x$ 表示と比較するときは $\partial_w=-i\partial_x$ を用いるので、微分を二つ含む項の符号が変わる。有限個の未知係数を求める計算であり、全次数で解があることの証明は次節以降で行う。

<div data-draft-program="ff-screening-check"></div>

</details>

一つずつ解けることと、どの共形次元でも解が存在することは、まだ別の問題である。量子補正の方程式が途中で解けなくなる可能性を調べよう。

## 量子補正を求める条件

古典の保存密度から量子の密度へ進むには、古典の式に順に補正を加えると考えられる。後で述べる量子複体の結果によって、二つのスクリーニングを組にした作用を、古典極限が正則になる規格化で扱える。その作用を $S_b$ と書き、密度とともに $b$ の冪に展開してみよう。
$$
\begin{aligned}
S_b&=S_0+bS_1+b^2S_2+\cdots,\\
f_b&=f_0+bf_1+b^2f_2+\cdots,\qquad
h_b=h_0+bh_1+b^2h_2+\cdots.
\end{aligned}
$$
$S_bf_b=\partial h_b$ の各次数は
$$
\begin{aligned}
S_0f_0-\partial h_0&=0,\\
S_0f_1-\partial h_1&=-S_1f_0,\\
S_0f_2-\partial h_2&=-S_1f_1-S_2f_0.
\end{aligned}
\tag{quantum-ff-correction-equations}
$$
右辺が、古典の作用 $S_0$ と全微分を組み合わせて作れる範囲に入っていれば、次の補正を選べる。その範囲から外れる成分があれば、補正はそこで止まる。必要なのは古典の解の数だけでなく、こうした解けない成分を制御する構造である。

Feigin–Frenkel は、二つのスクリーニングを最初の微分とする量子複体を構成した。その複体と古典極限のコホモロジーを用いると、各共形次元で保存量の存在を判定できる。ここでは複体の構成を原論文から借り、局所積分との関係と、変形によってコホモロジーが保たれる理由を調べる。用いる複体は
$$
C^0\xrightarrow{\delta}C^1\xrightarrow{\delta}C^2
\xrightarrow{\delta}\cdots,\qquad \delta^2=0
\tag{quantum-ff-complex}
$$
であり、次の性質を持つ [[2]](#ref-ff-screening), §§4.5–4.7。以下では $C^{-1}=0$ とし、そのコホモロジーを $H^k$ と書く。上付き $k$ はコホモロジー次数である。

- $C^0$ はカレントの局所密度の空間、$C^1$ は電荷 $\pm b$ の頂点演算子を含む二つの出力空間の直和である。最初の $\delta$ は、非零の定数倍を除いて $(S_+,S_-)$ である。
- この先にも写像を延長でき、$\delta^2=0$、$\delta\partial=\partial\delta$ が成り立つ。$k\ge1$ の $C^k$ では $\partial$ は単射である。$C^0$ では $\partial$ の核は定数だけである。
- 各 $C^k$ は整数による次数付けを持ち、その内部次数によってさらに分解される。$C^0$ の内部次数は、先ほどの局所密度の共形次元に一致する。荷電場を含む $C^k$ では、内部次数は共形次元と区別する。$\delta$ は内部次数を保ち、$\partial$ は $1$ 上げる。内部次数を固定すると、有限個の有限次元空間の列になる。
- 適切な変数の取り方と写像の定数倍によって、各内部次数の空間を固定したまま、$b=0$ まで正則な行列の族にできる。$b=0$ での値は古典のスクリーニング複体である。

このように $b=0$ まで正則な複体の族を取れることは、この道具に含まれる重要な条件である。具体例で用いた縮約係数 $1$ の $j$ を固定したまま $b\to0$ とすると、$T$ 自身に $1/b$ が現れる。例えばカレントを $bj$ の表示に変えれば縮約は $b^2/(z-w)^2$ となるが、複体全体には写像の規格化も必要になる。その正則な族の存在を借りており、先ほどの全ての式へ単に $b=0$ を代入しているのではない。複体の後半の具体式とその構成法は、量子群と BGG 分解（BGG resolution）を用いる原論文に委ねる。

この道具が局所保存量にどう使えるかは、最初の二段で分かる。保存密度 $f\in C^0$ の条件を、二つまとめて
$$
\delta f=\partial h,\qquad h\in C^1
\tag{quantum-ff-descent-equation}
$$
と書く。両辺へ $\delta$ を作用させると、
$$
0=\delta^2f=\delta\partial h=\partial\delta h.
$$
$C^2$ で $\partial$ は単射なので、$\delta h=0$ である。従って、保存密度から $H^1$ のクラス $[h]$ が得られる。

保存密度が $\delta$ の核に入る必要はなく、その作用が全微分ならよい、という条件がここに残っている。次は、この $H^1$ が量子化によって失われないことを示し、そこから密度へ戻ろう。

## 無限個の量子保存量の存在

古典側では、この複体のコホモロジーが計算されている。必要な出力を先に述べる。下付きの $m$ を内部次数とすると、
$$
H^0_{\mathrm{cl}}=\mathbb C,\qquad
\dim H^1_{\mathrm{cl},m}=
\begin{cases}
1,&m=1,3,5,\ldots,\\
0,&\text{otherwise},
\end{cases}
\tag{quantum-ff-classical-h1}
$$
である。また全ての段階について、
$$
H^k_{\mathrm{cl},m}=0\quad\text{unless }k\equiv m\pmod2
\tag{quantum-ff-classical-parity}
$$
が成り立つ。段階 $k$ と内部次数 $m$ は別の数であるが、非零のコホモロジーではその偶奇が一致する。さらに、これらから得る古典の局所積分は、Miura 表示を通して、既習の KdV 階層の Hamiltonian と一致する。このコホモロジーの計算結果と古典 KdV との同定を、もう一つの入力として用いる [[2]](#ref-ff-screening), Proposition 3.1.10, §§3.1.11–3.1.13。

量子化後の次元は、古典コホモロジーの偶奇と、正則変形における階数の性質から決まる。内部次数 $m$ を固定すると複体は有限次元かつ有界であり、Euler 標数の恒等式
$$
\sum_k(-1)^k\dim C^k_m
=\sum_k(-1)^k\dim H^k_m
\tag{quantum-ff-euler}
$$
が成り立つ。左辺は固定した空間の次元だけで決まるため、量子パラメータによらない。

一方、正則な行列の族では、古典点 $b=0$ で非零の小行列式は一般の $b$ でも非零である。従って各微分の階数は古典点より小さくならず、核の次元は増えず、像の次元は減らないので、
$$
\dim H^k_m(b)\le\dim H^k_{\mathrm{cl},m}
\tag{quantum-ff-dimension-bound}
$$
となる。特に古典で零だった段階は、一般の量子パラメータでも零である。残りの段階は全て $k\equiv m\pmod2$ なので、(@quantum-ff-euler) の右辺に同じ符号で現れる。

<div data-draft-figure="ff-parity"></div>

$m$ が偶数なら残る項は全て正、奇数なら全て負である。どの次元も増えない一方で、同符号の項の和は変わらないから、一つだけでも次元を減らすことはできない。よって全ての段階で古典と量子のコホモロジーの次元が等しくなる。特に、$H^0$ は定数だけであり、$H^1_m$ は内部次数が正の奇数なら一次元、偶数なら零である。これは一般のパラメータ、または古典点からの形式的変形としての結論であり、特殊な値での次元まで一律に定めるものではない。

ここから局所積分へ戻す。前節で保存密度から $[h]\in H^1$ を作ったとき、$\partial h=\delta f$ なので、$\partial h$ は $\delta$ の像である。従ってコホモロジー上では
$$
\partial_*[h]=[\partial h]=0
\tag{quantum-ff-derivative-on-h1}
$$
となる。ここで $\partial_*$ は、$\delta$ と可換な $\partial$ がコホモロジー上に誘導する写像であり、内部次数を $1$ 上げる。

<div data-draft-figure="ff-descent"></div>

図の正方形では、内部次数 $m$ の $h$ と共形次元 $m+1$ の密度 $f$ が、$\partial h=\delta f$ によって結び付く。上付きはコホモロジー次数、下付きは内部次数である。この関係を逆向きに使うと、$H^1$ のクラスから保存密度を構成できる。

実際、$\partial_*[h]=0$ なら、ある $f\in C^0$ を選んで $\partial h=\delta f$ と書ける。この $f$ が二つのスクリーニング条件を満たす保存密度になる。

$f$ を $f+\partial g$ に変えると、$h$ は $h+\delta g$ に変わるので、この対応は全微分を除いた密度に対して定まる。さらに $[h]=0$、すなわち $h=\delta g$ なら、$f-\partial g\in\ker\delta=H^0=\mathbb C$ となる。従って、定数も除けば対応は単射であり、全微分と定数を除いた保存密度の空間は
$$
\{f:\delta f\text{ is a total derivative}\}
\big/\{\partial g+\text{constants}\}
\ \simeq\ \ker(\partial_*:H^1\to H^1)
\tag{quantum-ff-descent-isomorphism}
$$
に等しい。定数は正の次数の系列から除いている。周期積分での恒等作用素の定数倍は、別に加えてよい。

$\partial$ は内部次数を $1$ 上げるが、$H^1$ には内部次数が奇数のクラスしかない。その行き先では内部次数が偶数となり、$H^1$ は零だから、$\partial_*$ は全てのクラスを零にする。内部次数 $m$ の $h$ は、$\delta f=\partial h$ によって共形次元 $m+1$ の密度 $f$ を与える。積分の次数を密度の共形次元から $1$ 引いた数と呼べば、
$$
\text{各 }m=1,3,5,\ldots\text{ に一次元の局所保存量、正の偶数次数には零}
\tag{quantum-ff-local-dimensions}
$$
を得る。共形次元 $4$ の具体例は次数 $3$ の $\widehat I_3$ に当たり、その先にも一つずつ保存量が続く。

古典クラスは、各内部次数で通常の行列の消去法を用いて形式的に持ち上げられる。先頭の古典保存量を (@quantum-classical-charges) および既習の留数規格化に合わせれば、量子保存量 $\widehat I_m$ をその変形として選べる。密度の代表式には全微分の自由度が残るが、局所積分としての一次元性が、各次数で何を構成しているかを定めている。

## 保存量の相互可換性と古典極限

ここまでで、両スクリーニングの条件を満たす局所積分が、正の奇数次数ごとに得られた。最後に、それらが互いに可換であることを示そう。

局所密度の積分どうしの交換子は、二点積の単純極の留数を積分して得られるので、再び一つの局所密度の積分になる。また、全微分を除いた局所式の空間では、スクリーニングの作用はこの留数の括弧に対して微分の法則を満たす。これは留数の交換子に対する Jacobi 恒等式の帰結であり、
$$
S_\pm[\widehat I_m,\widehat I_n]
=[S_\pm\widehat I_m,\widehat I_n]
+[\widehat I_m,S_\pm\widehat I_n]=0.
\tag{quantum-ff-bracket-closure}
$$
ここで $S_\pm$ は、この商の上に誘導された作用を表す。従って、二つの保存量の交換子も同じスクリーニング条件を満たす。

密度の共形次元が $m+1,n+1$ なら、その積の単純極の係数は共形次元 $m+n+1$ をもつ。積分の次数は密度の共形次元より $1$ 小さいので、
$$
\deg[\widehat I_m,\widehat I_n]
=(m+1)+(n+1)-1-1=m+n.
\tag{quantum-ff-bracket-degree}
$$
$m,n$ が奇数なら $m+n$ は正の偶数である。しかし、その次数にスクリーニング条件を満たす非零の局所積分はない。よって
$$
[\widehat I_m,\widehat I_n]=0,
\qquad m,n=1,3,5,\ldots
\tag{quantum-screening-family-involution}
$$
が従う。ここで数えたのは、一つの局所密度の積分の空間である。積 $\widehat I_m\widehat I_n$ は一般には二点にわたる二重積分であり、偶数次数の局所保存量が存在することにはならない。局所積分の空間が交換子で閉じることと、その偶数次数が空であることの組合せが、可換性を与えている。

古典との対応を、最初の保存量で確認しよう。規格化した場 $\widehat u$ を固定して $c\to-\infty$ とすると、二点積の縮約は $1/c$ の次数になり、正規積は古典の積に戻る。また $\widehat I_5$ の明示的な補正も消えるため、
$$
\begin{aligned}
\widehat I_3&=-\frac18\oint:\widehat u^2:
\longrightarrow-\frac18\oint u^2=I_3,\\
\widehat I_5&=\frac1{16}\oint\left[
:\widehat u^3:+\left(\frac12+\frac1c\right):\widehat u_x^2:
\right]
\longrightarrow\frac1{16}\oint\left(u^3+\frac12u_x^2\right)=I_5.
\end{aligned}
\tag{quantum-ff-classical-limit}
$$
交換子を $c/(3i)$ 倍したものが Poisson 括弧へ戻ることと合わせ、これらはもとの KdV の可換な Hamiltonian になる。自由場の縮約係数 $1$ の表示を固定した極限ではなく、$\widehat u$ と保存量の規格化、および $b=0$ まで正則な複体の族を用いて比較している。

CFT のエネルギー運動量テンソル $T$ は、$\widehat I_1$ を通して並進を生成する。局所密度の積分は全微分を消すので、並進との可換性だけなら広い範囲の積分が満たす。今回の構成では、二つのスクリーニング条件によって、その中から互いに可換な無限系列を選び出した。$\widehat I_3$ が生成する量子 KdV の発展に対して、高次の $\widehat I_m$ も全て保存される。局所場を使った有限の係数計算と、全次数の存在保証とが、こうして一つの量子可積分系を作る。

[次章の Boussinesq 方程式と W₃ 代数](/notes/kdv/w3/)では、KP の簡約を二次から三次へ変える。古典側で独立な係数場が二つになることに対応して、量子側でも Virasoro 場にもう一つの生成場が加わる。ここで用いた Poisson 括弧、局所正規積、可換な積分という見方を、その拡張へ持ち込もう。

<p class="font-semibold">参考文献</p>

<span id="ref-blz-quantum"></span>

[1] V. V. Bazhanov, S. L. Lukyanov and A. B. Zamolodchikov, [*Integrable Structure of Conformal Field Theory, Quantum KdV Theory and Thermodynamic Bethe Ansatz*](https://arxiv.org/abs/hep-th/9412229). 式 (6)–(11)（局所積の処方と最初の量子保存量）；式 (12)–(14)（第二 Hamiltonian 構造と古典階層）。本章では KdV の留数保存量の規格化へ換算した。

<span id="ref-ff-screening"></span>

[2] B. Feigin and E. Frenkel, [*Integrals of Motion and Quantum Groups*](https://arxiv.org/abs/hep-th/9310022), v3. §§3.1.7–3.1.13（古典コホモロジー、局所積分への降下、KdV 階層との同定）；§§4.3–4.4、特に Proposition 4.4.4（スクリーニングと Virasoro の自由場表示）；§§4.5–4.7、特に Proposition 4.7.2, Theorem 4.7.3（量子複体とアフィン $A_1^{(1)}$ の局所積分）。
