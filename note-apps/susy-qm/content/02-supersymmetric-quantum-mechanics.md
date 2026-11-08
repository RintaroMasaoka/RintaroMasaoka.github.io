## 超対称量子力学とWitten指数

### 揺らぐ粒子の平衡と緩和

粘性のある媒質中で、ポテンシャルの谷に捕らえられた粒子を考えよう。粒子には谷底へ戻す力が働く一方、媒質から絶えずランダムな力を受ける。同じ条件で運動を何度も繰り返し、各時刻の粒子の位置を集めれば、位置の確率分布が得られる。粒子の揺らぎが続く中でも、この分布は時間によらない形を取りうる。

粒子の位置を追うと揺らぎが続くが、分布を見れば、時間が経っても残る形が見えてくる。この「残るもの」に注目する見方から、超対称量子力学へ進んでみよう。本章では、平衡の分布を量子力学の零エネルギー状態として読み直していく。

一次元の滑らかな実ポテンシャル $U(x)$ の下で、慣性を無視できる過減衰の運動を扱う。移動度とBoltzmann定数を1にする単位を選ぶと、Langevin方程式は

$$
\dot x=-U'(x)+\eta(t),
\qquad
\langle\eta(t)\rangle=0,
\qquad
\langle\eta(t)\eta(t')\rangle=\frac{2}{\beta}\delta(t-t')
\tag{overdamped-langevin}
$$

となる。$\beta>0$ は逆温度であり、$\eta$ は位置に依存しない加法的なGauss白色雑音である。白色雑音を時間幅 $\Delta t$ にわたって積分した変位は、平均0、分散 $2\Delta t/\beta$ のGauss変数となる。重ならない時間区間の増分は独立である。温度が高いほど、このランダムな変位は大きくなる。

<details>
<summary>Including inertia</summary>

質量 $m$、粘性抵抗係数 $\gamma>0$ を用いると、慣性を含む運動は

$$
m\ddot x=-\gamma\dot x-U'(x)+\eta(t)
\tag{underdamped-langevin}
$$

と書ける。この式の熱雑音の相関は $\langle\eta(t)\eta(t')\rangle=2\gamma\beta^{-1}\delta(t-t')$ である。速度が緩和する時間 $m/\gamma$ が、位置分布の変化を調べる時間尺度より十分短い場合、過減衰モデルで位置の運動を記述する。抵抗係数の逆数である移動度 $1/\gamma$ を1に取った単位では、(@overdamped-langevin) の形になる。

</details>

時刻 $t$ に位置 $x$ の近くにいる確率密度を $P(x,t)$ とし、$\int P(x,t)\,dx=1$ とする。軌跡のランダムな変化を平均すると、密度の時間発展はFokker–Planck方程式

$$
\partial_tP
=\partial_x\left(\frac{1}{\beta}\partial_x+U'\right)P
=-\partial_xj,
\qquad
j=-\frac{1}{\beta}\partial_xP-U'P
\tag{fokker-planck-physical}
$$

で与えられる。$j$ は確率流であり、$-\beta^{-1}\partial_xP$ は密度の高い所から低い所へ広がる拡散、$-U'P$ は力に沿って粒子を運ぶドリフトを表す。雑音の分散が拡散係数 $1/\beta$ を生む導出は、[付録B](#fokker-planck)で行う。

実数直線上では無限遠で確率流が消える条件を課す。このとき、(@fokker-planck-physical) を積分すれば全確率が保存される。円周上で $U$ と $P$ に周期条件を課す場合も同様である。平衡で確率流が零なら、拡散とドリフトが釣り合い、$\partial_xP=-\beta U'P$ となる。従って、その分布は

$$
P_{\mathrm{eq}}(x)=\frac{e^{-\beta U(x)}}{Z},
\qquad
Z=\int e^{-\beta U(x)}\,dx
\tag{equilibrium-distribution}
$$

である。ここでは $Z<\infty$ を仮定する。谷底に近いほど粒子は多く、有限温度では熱揺動によって谷底の周囲に広がる。この平衡分布を使って密度を書き換え、零エネルギー状態との対応を確かめよう。

### 平衡分布からHamiltonianへ

無次元の関数 $h=\beta U/2$ と、時間 $\tau=2t/\beta$ を用いると、密度の発展は

$$
\partial_\tau P=LP,
\qquad
L=\frac12\partial_x(\partial_x+2h')
\tag{rescaled-fokker-planck}
$$

と書ける。$L$ は密度の時間発展の生成子である。この発展を虚時間Schrödinger方程式の形へ移すため、平衡分布の平方根を重みに使う。平衡分布は $e^{-2h}$ に比例するので、密度を

$$
P=e^{-h}\psi
\tag{equilibrium-similarity}
$$

と置く。ここで導入した関数 $\psi$ に重み $e^{-h}$ を掛けると、確率密度 $P$ が得られる。この書換えによって、$\psi$ の発展は通常の $L^2(dx)$ 内積で扱えるSchrödinger型になる。右側の因数は $(\partial_x+2h')(e^{-h}\psi)=e^{-h}(\partial_x+h')\psi$ となり、左側では $e^h\partial_xe^{-h}=\partial_x-h'$ となる。従って、

$$
\partial_\tau\psi
=e^hLe^{-h}\psi
=\frac12(\partial_x-h')(\partial_x+h')\psi
=-H_0\psi.
\tag{imaginary-time-from-fokker-planck}
$$

実数値の $h$ に対して、一階作用素とHamiltonianを

$$
A=\partial_x+h',
\qquad
A^\dagger=-\partial_x+h',
\qquad
H_0=\frac12A^\dagger A
=\frac12\left[-\partial_x^2+(h')^2-h''\right]
\tag{factorized-hamiltonian}
$$

と取れば、これは虚時間Schrödinger方程式である。上の $A^\dagger$ を随伴の定義で確かめよう。実数直線では十分遠方で零になる滑らかな波動関数、円周では滑らかな周期波動関数を二つ取り、$\phi,\psi$ とする。内積 $\langle\phi,A\psi\rangle=\int\overline{\phi}(\partial_x+h')\psi\,dx$ の微分項を部分積分すると、境界項が消えて $\langle\phi,A\psi\rangle=\langle A^\dagger\phi,\psi\rangle$ となる。

<details>
<summary>Operator domains</summary>

実数直線では、コンパクトな台をもつ滑らかな関数上の $A$ の閉包を用いる。円周では、滑らかな周期関数上の $A$ の閉包を用いる。この閉じた稠密定義作用素 $A$ とそのHilbert空間随伴 $A^\dagger$ から、$H_0=A^\dagger A/2$ を定める。$H_0$ の定義域は、$\psi$ が $A$ の定義域に属し、さらに $A\psi$ が $A^\dagger$ の定義域に属するような関数全体である。同様に、後で用いる $H_1=AA^\dagger/2$ の定義域は、$\phi$ が $A^\dagger$ の定義域に属し、さらに $A^\dagger\phi$ が $A$ の定義域に属するような関数全体である。これらの積の定義によって、両Hamiltonianは自己共役になる。

</details>

平衡分布に対応する波動関数は $e^{-h}$ に比例する。先ほどの $Z<\infty$ の条件があれば、これは二乗可積分であり、規格化すると

$$
\psi_0(x)=\frac{e^{-h(x)}}{\left(\int e^{-2h(x)}\,dx\right)^{1/2}},
\qquad
A\psi_0=0
\tag{bosonic-zero-mode}
$$

となる。この状態は $H_0\psi_0=0$ を満たし、時間変化しない。密度へ戻して全確率を1に規格化すると、(@equilibrium-distribution) が得られる。量子力学の零エネルギーは、ここでは確率分布の平衡を表している。

$H_0$ の固有モード $H_0\psi_E=E\psi_E$ は、虚時間発展によって $e^{-E\tau}\psi_E$ となり、$E>0$ なら減衰する。密度へ戻すと $e^{-h}\psi_Ee^{-E\tau}$ となる。重み $e^{-h}$ は時間に依存しないので、$E$ は平衡からのずれの緩和率を表す。物理時間 $t$ での減衰因子は $e^{-2Et/\beta}$ である。

さらに、因数分解からエネルギーの非負性も分かる。

$$
E\|\psi_E\|^2
=\langle\psi_E,H_0\psi_E\rangle
=\frac12\|A\psi_E\|^2\geq0.
\tag{hamiltonian-positivity}
$$

### 因数の順序を交換した二つの量子系

平衡は $H_0$ の零エネルギー状態に対応し、正エネルギーの成分は減衰する。$H_0$ の因数を逆の順序で組み合わせると、正エネルギーでは同じ準位をもちながら、零エネルギーでは状態数の異なりうる系が得られる。同じ $A$ とその随伴から、もう一つのHamiltonianを

$$
H_1=\frac12 AA^\dagger
=\frac12\left[-\partial_x^2+(h')^2+h''\right].
\tag{partner-hamiltonian}
$$

と定める。$H_1$ は $H_0$ の**パートナーHamiltonian**と呼ばれる。因数分解から $H_1$ も非負である。$H_0$ の正エネルギー固有状態 $\psi_E$ に $A$ を作用させると、$H_1$ の同じエネルギーの状態へ移る。実際、$H_0\psi_E=E\psi_E$ から、

$$
H_1(A\psi_E)=A(H_0\psi_E)=E(A\psi_E).
\tag{partner-intertwining}
$$

$E>0$ なら (@hamiltonian-positivity) より $A\psi_E\ne0$ であり、$H_1$ の同じエネルギーの状態が得られる。逆向きには $A^\dagger$ が働く。規格化した状態同士の対応は

$$
\phi_E=\frac{A\psi_E}{\sqrt{2E}},
\qquad
\psi_E=\frac{A^\dagger\phi_E}{\sqrt{2E}}.
\tag{normalized-partner-pair}
$$

となる。二度の写像で元に戻るので、正のエネルギーでは重複度も含めてスペクトルが一致する。元の緩和問題では、この対応は各モードの虚時間での緩和率 $E$ を保つ。一方、平衡に対応する $\psi_0$ は $A\psi_0=0$ であり、この写像は零を返す。$H_1$ の零モードも $A^\dagger$ で零に写る。減衰するモードは一対一に対応し、時間変化しないモードの数には差が残りうる。

![二つのHamiltonianの正のエネルギー準位は同じ高さで対になり、Aとその随伴が対応を与える。零準位の状態はこの写像では移らず、数の差が残る。](/notes/SUSYQM/diagrams/paired-spectrum.svg)

図では縦の高さが共通のエネルギーを表し、準位間隔と零モード数は模式的に描いている。二つの系の状態数を引くと、同じ高さにある正準位の対が相殺する。

### 調和振動子の準位を比べる

$h=x^2/2$ の調和振動子では、準位の列からこの対応を読み取れる。$\hbar$、質量、角振動数を1に取り、通常の消滅・生成演算子を $a=(\partial_x+x)/\sqrt2$、$a^\dagger=(-\partial_x+x)/\sqrt2$ と書くと、

$$
A=\sqrt2a,
\qquad
H_0=a^\dagger a,
\qquad
H_1=aa^\dagger=a^\dagger a+1.
\tag{positive-superpotential-oscillator}
$$

$H_0$ のエネルギーは $0,1,2,\ldots$、$H_1$ では $1,2,3,\ldots$ となる。$H_0$ の第 $n$ 励起状態は、$n\geq1$ なら $A$ によって $H_1$ の第 $n-1$ 励起状態へ移る。励起の番号が一つずれた二つの状態が、同じエネルギー $n$ をもつ。$H_0$ のGaussian基底状態だけは $A$ で零に写り、$H_1$ に相手をもたない。この一段のずれに、正準位の対形成と零準位の相手の欠落がともに現れている。

### 超電荷と超対称代数

二つの系を一つにまとめ、Hilbert空間を $\mathcal H=\mathcal H_0\oplus\mathcal H_1$ とする。状態は二成分 $\Psi=(\psi_0,\psi_1)^{\mathsf T}$ で表す。第一成分をボソン的セクター、第二成分をフェルミオン的セクターと呼ぶ。この二つの呼称は空間の偶奇を表し、その違いを演算子

$$
(-1)^F=
\begin{pmatrix}1&0\\0&-1\end{pmatrix}
\tag{fermion-parity}
$$

で区別する。この演算子の固有値 $+1$ が第一成分、$-1$ が第二成分であり、$((-1)^F)^2=1$ である。

二つの空間の間を移す**複素超電荷**を

$$
\mathcal Q=\begin{pmatrix}0&0\\A&0\end{pmatrix},
\qquad
\mathcal Q^\dagger=\begin{pmatrix}0&A^\dagger\\0&0\end{pmatrix}
\tag{complex-supercharges}
$$

と定める。反交換子は、二つの作用素を両方の順で掛けた積の和を表す。これを用いると、Hamiltonianは

$$
H=\frac12\{\mathcal Q,\mathcal Q^\dagger\}
=\begin{pmatrix}H_0&0\\0&H_1\end{pmatrix}.
\tag{susy-block-hamiltonian}
$$

この一次元の模型をWitten模型、関数 $h$ を**超ポテンシャル**という。超ポテンシャルから、量子系で粒子が感じるポテンシャル $(h')^2/2\mp h''/2$ が定まる。$h$ はその形を一階・二階の微分を通じて決めている。

ブロック行列を掛け合わせると、

$$
\mathcal Q^2=(\mathcal Q^\dagger)^2=0,
\qquad
\{\mathcal Q,\mathcal Q^\dagger\}=2H,
\qquad
[H,\mathcal Q]=[H,\mathcal Q^\dagger]=0,
\tag{susy-algebra}
$$

$$
[H,(-1)^F]=0,
\qquad
\{(-1)^F,\mathcal Q\}=\{(-1)^F,\mathcal Q^\dagger\}=0
\tag{susy-parity-algebra}
$$

を得る。超電荷はエネルギーを変えず、偶奇を反転する。これが、先ほど $A$ で見た状態の対応をまとめた超対称性の代数である。

実超電荷 $Q=(\mathcal Q+\mathcal Q^\dagger)/\sqrt2$ では、エネルギーを保って偶奇を反転する対構造を

$$
Q^2=H,
\qquad
\{Q,(-1)^F\}=0,
\qquad
((-1)^F)^2=1
\tag{real-supercharge-algebra}
$$

とまとめられる。実際、エネルギー $E>0$ の規格化された偶状態 $|b_E\rangle$ から $|f_E\rangle=Q|b_E\rangle/\sqrt E$ を作ると、ノルムは1、エネルギーは $E$、偶奇は奇になる。さらにもう一度 $Q/\sqrt E$ を作用させると元の状態に戻る。零エネルギーでは $\|Q\Psi\|^2=\langle\Psi,H\Psi\rangle=0$ なので、この対応は消える。この代数だけで、超ポテンシャルによらず正準位の対形成が定まる。

### 零モードの差としてのWitten指数

二つの核が有限次元である場合、**Witten指数**を

$$
\operatorname{ind}A
=\dim\ker H_0-\dim\ker H_1
=\dim\ker A-\dim\ker A^\dagger
\tag{witten-index-kernel}
$$

と定める。一般に、作用素の核と随伴の核の次元差を**作用素の指数**と呼ぶ。正エネルギーでは二つの系の状態数が一致するため、差に残るのはこの零モードだけである。

スペクトルが離散的で $e^{-\tau H}$ がトレース級となる場合、$\tau>0$ を用いて

$$
\operatorname{ind}A
=\operatorname{Tr}\left[(-1)^F e^{-\tau H}\right]
=\operatorname{Tr}e^{-\tau H_0}-\operatorname{Tr}e^{-\tau H_1}
\tag{witten-heat-supertrace}
$$

と書ける。$\tau$ は、密度の発展からHamiltonianへ移るときに導入した**虚時間**である。正のエネルギー $E$ の対は $e^{-\tau E}-e^{-\tau E}=0$ と相殺し、零モード一つ当たりの寄与は、偶なら $+1$、奇なら $-1$ である。このため右辺は $\tau$ によらない。

形式的な $\operatorname{Tr}(-1)^F$ に $e^{-\tau H}$ を挿入して正則化したものが (@witten-heat-supertrace) である。上のトレース級の条件の下で、両セクターのエネルギー $E$ の状態に同じ因子 $e^{-\tau E}$ を掛けると各セクターのトレースが収束し、状態数の差を計算できる。連続スペクトルがある非コンパクト系では、熱核のトレース自体が存在しないことや、正則化した差に連続状態の寄与が残ることがある。[連続スペクトルの付録](#continuous-spectrum)で、核の差と正則化した量を区別して扱う。

### 零モードと超ポテンシャルの形

$H_0$ 側の零モードは、平衡分布から得た (@bosonic-zero-mode) の $e^{-h}$ に比例する状態だった。$H_1$ 側では $\langle\phi,H_1\phi\rangle=\|A^\dagger\phi\|^2/2$ なので、零モードは $A^\dagger\phi=0$ を満たす。この一次方程式 $(-\partial_x+h')\phi=0$ の解は $e^h$ に比例する。二つの一次方程式の解はそれぞれ定数倍を除いて一つなので、$H_0$ の零モードは $e^{-h}$ が二乗可積分なら一つ、$H_1$ の零モードは $e^h$ が二乗可積分なら一つとなる。円周では滑らかな一価関数 $h$ を用いるので、どちらの解も周期条件を満たす。

先ほどの振動子 $h=x^2/2$ では、$e^{-h}$ が減衰して規格化可能となり、$e^h$ は発散する。従って、二成分で書いた零モードと指数は

$$
\Psi_0(x)=\pi^{-1/4}e^{-x^2/2}
\begin{pmatrix}1\\0\end{pmatrix},
\qquad
\operatorname{ind}A=1.
\tag{positive-oscillator-zero-mode}
$$

となる。次に $h=-x^2/2$ とする。この場合は $A=-\sqrt2a^\dagger$ なので、

$$
H_0=aa^\dagger,
\qquad
H_1=a^\dagger a,
\qquad
\Psi_0(x)=\pi^{-1/4}e^{-x^2/2}
\begin{pmatrix}0\\1\end{pmatrix},
\qquad
\operatorname{ind}A=-1.
\tag{negative-superpotential-oscillator}
$$

超ポテンシャルの谷を山に変えると、零モードが第一成分から第二成分へ移り、指数の符号が反転した。正エネルギーの対は両方の場合に存在する。超ポテンシャルの符号を反転した $H_0$ に対応する $e^{-2h}=e^{x^2}$ は積分できず、元の確率過程には規格化可能な平衡分布がない。この場合も量子系のパートナー構造は成り立ち、零モードは第二成分に残る。

一般に実数直線上で $e^{-2h}$ が積分可能で、$e^{2h}$ は積分可能でないなら、$H_0$ に一つ、$H_1$ には零モードがなく、指数は $1$ である。円周上で滑らかな一価関数 $h$ と周期条件を取れば $e^{\pm h}$ はどちらも規格化可能で、指数は $1-1=0$ となる。この差は、平衡に対応する零モードとパートナー側の零モードをともに数えて決まる。

この整数は、超ポテンシャルのグラフの形とも結び付く。非退化な臨界点が有限個あり、実数直線上では十分遠方の左側で $h'<0$、右側で $h'>0$ であり、上の規格化条件を満たす場合、極小点と極大点は交互に現れ、極小点が一つ多い。円周上では交互の列が閉じるため、両者の数は等しい。これらの場合、

$$
\operatorname{ind}A
=\#\{h\text{ の極小点}\}-\#\{h\text{ の極大点}\}
\tag{one-dimensional-morse-count}
$$

となる。全空間に広がる零モードの数の差が、グラフ上の極小点と極大点の数の差に等しくなった。一般の多様体では鞍点も必要になり、臨界点の負方向の数に応じた符号を付ける。次章のMorse理論では、その符号がフェルミオン数と結び付くことを調べる。
