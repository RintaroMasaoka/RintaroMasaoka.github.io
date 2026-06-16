---
title: "3d CFT のための fuzzy sphere regularization"
lang: ja
description: "Fuzzy sphere regularization を 3d CFT の conformal data を読む方法として整理するノート"
tags: ["CFT", "fuzzy sphere", "3d Ising", "conformal data"]
---

## 目的

Fuzzy sphere regularization は、3d CFT を $S^2\times\mathbb{R}$ 上の有限サイズ量子多体系として調べる方法である。狙いは、有限 Hilbert space の Hamiltonian を対角化すること自体ではない。その spectrum、matrix element、correlator を、CFT の conformal data として読むことである。

3d CFT の conformal data には、primary operator の scaling dimension、spin、internal symmetry quantum number、OPE coefficient、correlator、defect を入れたときの defect spectrum や bulk-defect OPE などが含まれる。Fuzzy sphere はこれらを、球面上の many-body problem に置き換える。

代表例は 3d Ising CFT である。Zhu et al. (2023) は、LLL 上の二成分 fermion model を critical point に tune し、その finite-size spectrum を 3d Ising CFT の operator spectrum と比較した。続く研究では、同じ framework から OPE coefficients、four-point correlators、defect CFT data まで取り出している。

以下では、まず CFT 側で何を読みたいのかを固定し、次に spherical LLL がなぜ symmetry-preserving cutoff になるのかを見る。その上で、LLL orbital 上の Hamiltonian construction、3d Ising model、spectrum の読み方、OPE extraction、correlator reconstruction、defect CFT へ進む。

## 1. CFT data と radial quantization

Local CFT は、local operators の集合と、それらの相関関数で特徴づけられる。実用上の基本データは、primary operators の scaling dimensions と spin、そして OPE coefficients である。

Scaling dimension $\Delta$ は、operator が scale transformation でどう変わるかを表す。Spin $\ell$ は、3d Euclidean rotations の下でどの $SO(3)$ 表現に属するかを表す。3d Ising CFT ではさらに $\mathbb{Z}_2$ parity があり、order parameter $\sigma$ は odd、energy operator $\epsilon$ や stress tensor $T_{\mu\nu}$ は even である。

Fuzzy sphere の finite-size spectrum で最初に読む対応は次の形をしている。

| CFT 側 | fuzzy sphere 側 |
|---|---|
| primary operator $O$ | low-energy eigenstate candidate $\lvert O\rangle$ |
| scaling dimension $\Delta_O$ | rescaled energy gap |
| spin $\ell$ | total angular momentum $L$ |
| internal symmetry sector | $\mathbb{Z}_2$、flavor、charge などの Hilbert-space sector |
| descendant | primary candidate から integer gap 上に現れる multiplet |
| OPE coefficient | normalized matrix element / ratio |

この表は有限サイズでの厳密な同一視ではない。IR limit で成り立つ辞書であり、finite size では irrelevant operators、operator mixing、normalization convention、state identification error が入る。

### State-operator correspondence

Radial quantization では、平坦空間の原点に local operator $O(0)$ を挿入することと、$S^2$ 上の state $\lvert O\rangle$ を作ることが対応する。Radial direction の対数を時間 $\tau$ と見ると、理論は $S^2\times\mathbb{R}$ 上の量子力学になる。

このとき radial time translation の generator は dilatation operator $D$ であり、

$$
D|O\rangle=\Delta_O |O\rangle
$$

と読める。したがって球面上の Hamiltonian の energy gap は、適切な単位で scaling dimension に対応する。

$$
E_O-E_0\sim \frac{\Delta_O}{R}.
$$

球面半径 $R=1$ の規約では $E=\Delta$ と書けるが、microscopic Hamiltonian では energy normalization が非普遍的である。そのため、finite-size spectrum を CFT dimension と比較するには、全 spectrum に scale factor をかける必要がある。

Zhu et al. では、conserved spin-2 primary である stress tensor $T_{\mu\nu}$ を calibration point として使う。3d CFT では $T_{\mu\nu}$ の protected dimension は

$$
\Delta_T=3
$$

である。したがって、$\mathbb{Z}_2=+1$、parity $P=+1$、spin $L=2$ sector の低い state を stress tensor candidate とし、その gap が $\Delta=3$ になるように spectrum 全体を rescale する。

これは、量子数だけでその state が自動的に $T_{\mu\nu}$ と証明されるという意味ではない。Stress-tensor calibration は、既知または期待される CFT に protected operator があることを使った normalization choice であり、その後に他の primary / descendant multiplets が正しい pattern で並ぶかを見る必要がある。

### Primary と descendant

Primary operator は、conformal transformations の中で一番下にある operator である。Descendant は primary に derivative を作用させて作る。

Scalar primary $O$ なら、schematic には

$$
O,\qquad
\partial_\mu O,\qquad
\partial_{\mu_1}\partial_{\mu_2}O,\qquad
\square O,\ldots
$$

という tower ができる。Derivative は dimension を 1 上げ、spin-1 の index を持つので、descendant は primary から決まった $\Delta$ shift と spin pattern を持つ。

Finite-size spectrum で primary / descendant を見分けるときは、次の順番で読む。

1. 低い energy の state を primary candidate として見る。
2. その candidate の $L$、$\mathbb{Z}_2$、parity から、CFT representation theory が予測する descendant pattern を出す。
3. 予測された integer-spaced tower が finite-size spectrum に現れるかを見る。
4. その multiplet を取り除き、残った低い state を次の primary candidate として読む。

Stress tensor $T_{\mu\nu}$ は conserved operator なので特別である。保存則

$$
\partial_\mu T_{\mu\nu}=0
$$

により、generic な spin-2 primary より descendant が少ない short multiplet になる。この short multiplet structure は、$T_{\mu\nu}$ を energy-scale calibration に使うときの追加 check になる。

## 2. Spherical Landau levels

Fuzzy sphere regularization の入口は、球面上の lowest Landau level (LLL) を有限次元の一粒子 Hilbert space として使うことにある。ここが分かると、「fuzzy sphere は格子化ではない」「finite size でも $SO(3)$ が保たれる」「orbital 数 $N_m=2s+1$ が cutoff になる」という説明が一つにつながる。

### Landau level cutoff の全体像

平面上の荷電粒子を一様磁場中に置くと、運動エネルギーの spectrum は離散的な Landau levels に分かれる。各 Landau level は大きな degeneracy を持つ。直観的には、強い磁場が粒子の運動を cyclotron motion と guiding center の自由度に分け、低エネルギーでは cyclotron excitation を凍結して guiding center だけを見る。

Fuzzy sphere で使うのは、この球面版である。

球面 $S^2$ 上で一様磁場を作るには、球の中心に magnetic monopole を置く。球面を貫く flux を

$$
4\pi s
$$

と書く。ここで $s$ は半整数で、Dirac quantization により

$$
s\in \frac{1}{2}\mathbb{Z}
$$

となる。

この background magnetic field 中の荷電粒子の一粒子固有状態が、spherical Landau levels を作る。平面 Landau level と違って球面は有限体積なので、各 Landau level の degeneracy も有限になる。

Lowest Landau level の degeneracy は

$$
N_m=2s+1.
$$

LLL の states は

$$
m=-s,-s+1,\ldots,s
$$

でラベルできる。これは angular momentum $s$ の multiplet と同じ個数で、実際に LLL は $SO(3)$ の spin-$s$ representation をなす。

ここが重要で、$m$ は「球面上の格子点番号」ではない。$N_m$ 個の orbital は有限個の自由度として使えるが、その全体が回転対称性の既約表現として変換する。

普通の lattice regularization では、球面や平面を点の集合に置き換える。そのため連続回転対称性は finite size で壊れ、thermodynamic limit で回復することを期待する。Spherical Landau level cutoff は違う。有限個の LLL orbital を残しても、それらは最初から $SO(3)$ representation になっている。したがって finite size でも rotation symmetry を厳密に保てる。

Fuzzy sphere が 3d CFT に向いている理由の一つはこれである。Radial quantization では CFT を $S^2\times\mathbb{R}$ 上の Hamiltonian problem として見るので、球面上の $SO(3)$ は CFT operator の spin と直接対応する。

### Monopole harmonics と LLL wavefunctions

Spherical Landau level の一粒子 wavefunctions は、monopole background に合わせた spherical harmonics、つまり monopole harmonics で書かれる。典型的には

$$
Y_{q,\ell,m}(\theta,\phi)
$$

のように書く。ここで $q$ は monopole charge、$\ell$ は total angular momentum、$m$ はその $z$ 成分である。Monopole charge がない通常の spherical harmonics では

$$
\ell=0,1,2,\ldots,\qquad m=-\ell,\ldots,\ell
$$

である。Monopole charge が $s$ の sector では、最小の angular momentum が $0$ ではなく $s$ になる。Landau level index を $n=0,1,2,\ldots$ とすると、

$$
\ell=s+n,\qquad m=-\ell,\ldots,\ell.
$$

したがって $n$ 番目の Landau level の degeneracy は

$$
2\ell+1=2(s+n)+1.
$$

特に LLL は $n=0$ なので

$$
\ell=s,\qquad m=-s,\ldots,s,
$$

となり、degeneracy は $2s+1$ になる。

LLL の wavefunctions は、sphere の spinor coordinates

$$
u=\cos\frac{\theta}{2}e^{i\phi/2},
\qquad
v=\sin\frac{\theta}{2}e^{-i\phi/2}
$$

を使うと見通しがよい。これは ordinary single-valued function としての表示ではなく、monopole gauge を選んだときの local wavefunction 表示だと思うのがよい。Normalization を除けば、LLL basis は

$$
\psi_m(\theta,\phi)\propto u^{s+m}v^{s-m},
\qquad m=-s,\ldots,s.
$$

指数 $s+m$ と $s-m$ は非負整数で、その和は常に

$$
(s+m)+(s-m)=2s
$$

である。つまり LLL は、$u,v$ の次数 $2s$ の homogeneous polynomial 全体として見られる。この空間の dimension は

$$
2s+1
$$

で、spin-$s$ representation そのものになっている。

$u$ と $v$ は $\phi\to\phi+2\pi$ で

$$
u\to -u,\qquad v\to -v
$$

と変わる。したがって $u^{s+m}v^{s-m}$ は全次数 $2s$ のため、同じ変換で $(-1)^{2s}$ を拾う。$2s$ が奇数なら、この patch 表示の wavefunction は符号が変わる。

これは矛盾ではない。Monopole background では、wavefunction を全球面上の ordinary single-valued function として扱うのではなく、gauge patch の貼り合わせ込みで扱う。物理的に必要なのは、patch 間の gauge transformation まで含めて一貫していることであり、その条件が $2s\in\mathbb{Z}$ という flux quantization と対応する。

この書き方では、$m=s$ の state は $u^{2s}$、$m=-s$ の state は $v^{2s}$ である。これらはそれぞれ north pole / south pole 付近に重みを持つ。中間の $m$ は latitude direction に分布する。ただし、これらは厳密な position eigenstate ではない。$m$ basis は $L_z$ を対角化する便利な basis であり、「格子点」ではない。

### Monopole background での angular momentum

Monopole がない場合、wavefunction は球面上の ordinary scalar function であり、ordinary spherical harmonics $Y_{\ell m}$ が basis になる。Monopole がある場合、荷電粒子の wavefunction は gauge field に結合しているため、単一の globally defined ordinary function として書けるとは限らない。Gauge patch ごとの表示と、その重なりでの gauge transformation を合わせて考える。

そのため、angular momentum も素朴な orbital angular momentum

$$
\boldsymbol L=-i\boldsymbol r\times\nabla
$$

だけではなく、gauge field の寄与を含む conserved angular momentum を使う。半径 $R=1$、単位電荷、monopole flux $4\pi s$ という規約では、covariant derivative を

$$
D=\nabla-iA
$$

として、conserved angular momentum は典型的に

$$
\boldsymbol J=-i\,\boldsymbol r\times \boldsymbol D-s\,\hat{\boldsymbol r}
$$

と書ける。符号は電荷と monopole charge の convention で入れ替わるが、重要なのは gauge potential を含む微分と、monopole charge に比例する radial term が一緒に入ることである。この $\boldsymbol J$ は

$$
[J_i,J_j]=i\epsilon_{ijk}J_k
$$

を満たし、monopole harmonics は $\boldsymbol J^2,J_z$ の simultaneous eigenfunctions になる。

LLL の spinor-coordinate 表示では、この $\boldsymbol J$ は homogeneous polynomials に作用する differential operators として

$$
J_z=\frac{1}{2}\left(u\partial_u-v\partial_v\right),
\qquad
J_+=u\partial_v,
\qquad
J_-=v\partial_u
$$

と書ける。この表示を使うと、LLL basis が spin-$s$ multiplet であることはそのまま計算で見える。

$$
J_z\,u^{s+m}v^{s-m}=m\,u^{s+m}v^{s-m},
$$

かつ $J_\pm$ は $m$ を $\pm1$ だけ動かす。端では $J_+u^{2s}=0$、$J_-v^{2s}=0$ なので、次数 $2s$ の空間は spin-$s$ representation として閉じる。

### Fuzzy とは何が fuzzy なのか

LLL projection 後には、球面上の ordinary coordinate functions をそのまま sharp な位置 operator として扱えない。有限次元 Hilbert space に projection した coordinate operators は、互いに可換ではなくなる。

Schematic には、$S^2$ の coordinate $x_i$ を LLL に projection すると、spin-$s$ representation 上の angular momentum generators $J_i$ に比例する matrix になる。

$$
\hat x_i \sim \frac{1}{s}J_i.
$$

したがって

$$
[\hat x_i,\hat x_j]\sim \frac{i}{s}\epsilon_{ijk}\hat x_k.
$$

$s\to\infty$ では commutator は小さくなり、ordinary sphere に近づく。Finite $s$ では、球面の coordinates が非可換 matrix algebra として表される。この意味で sphere が fuzzy になる。

ただし、3d CFT regularization で重要なのは、非可換幾何そのものの一般論ではない。重要なのは、LLL projection によって finite-dimensional one-particle Hilbert space を得て、その finite size cutoff が $SO(3)$ symmetry を保つことである。

## 3. LLL orbital 上の Hamiltonian construction

Spherical LLL は有限個の orbital を与えるが、それだけでは物理模型は決まらない。Fuzzy sphere regularization で CFT data を読むには、その orbital 上に many-body Hamiltonian を置き、対称性を保ったまま相互作用を選び、パラメータを tune して目的の IR critical point に近づける必要がある。

### 一体項と二体項

LLL の one-particle space は

$$
m=-s,-s+1,\ldots,s
$$

でラベルされる $N_m=2s+1$ 個の orbital で張られる。Many-body problem では、この orbital に粒子を入れるので、creation / annihilation operators

$$
c_m^\dagger,\qquad c_m
$$

を使って Hamiltonian を書く。

一体項の coefficient matrix を $h$ と書く。これは one-particle Hamiltonian を LLL orbital basis で見た matrix element で、

$$
h_{mm'}=\langle m|h|m'\rangle
$$

と書くと、最も一般的な一体項は

$$
H_1=\sum_{m,m'}h_{mm'}c_m^\dagger c_{m'}
$$

である。

二体項までで打ち切って考えるなら、two-particle Hilbert space 上の operator の matrix element を $V_{m_1m_2m_3m_4}$ として、一般の二体項は、normalization や fermion sign convention を除けば

$$
H_2=
\sum_{m_1,m_2,m_3,m_4}
V_{m_1m_2m_3m_4}
c_{m_1}^\dagger c_{m_2}^\dagger c_{m_3}c_{m_4}
$$

の形を取る。一般には三体以上の項もありうる。

したがって、二体相互作用までを扱う段階での Hamiltonian construction の問題は、

$$
h_{mm'},\qquad V_{m_1m_2m_3m_4}
$$

をどう選ぶかである。

ただし、fuzzy sphere では適当に matrix element を選ぶわけではない。LLL orbital は spin-$s$ representation なので、球面の $SO(3)$ symmetry を保つように $h$ や $V$ を制限する。ここが lattice model の「近接サイトに相互作用を書く」発想と違う。

もし一種類の粒子だけを考え、full $SO(3)$ を保つなら、一体項は spin-$s$ multiplet の中で scalar でなければならない。Schur's lemma 的に言えば、irreducible representation の中で回転と可換な operator は identity に比例する。

つまり

$$
h_{mm'}=\epsilon\,\delta_{mm'}
$$

しか許されない。この項は

$$
H_1=\epsilon\sum_m c_m^\dagger c_m=\epsilon N
$$

であり、particle number $N$ が fixed sector では定数にすぎない。したがって、single species かつ fixed particle number で二体項までを見るなら、非自明な部分は二体相互作用である。

### 二体相互作用と total angular momentum

二体状態は、二つの spin-$s$ orbital を合成したものなので、representation theory としては

$$
s\otimes s=0\oplus1\oplus\cdots\oplus2s
$$

に分解される。

Two-particle sector の basis vector は

$$
|s,m_1;s,m_2\rangle
$$

のようにラベルできる。Identical boson / fermion では、実際には適切に symmetrized / antisymmetrized two-particle sector を使う。

Rotation symmetry を見るには total angular momentum basis

$$
|L,M\rangle
$$

を使う方が自然である。両者は Clebsch-Gordan coefficient で結ばれる。

$$
|L,M\rangle=
\sum_{m_1,m_2}
\langle s,m_1;s,m_2|L,M\rangle
|s,m_1;s,m_2\rangle.
$$

Total angular momentum $L$ の subspace への projector を

$$
P_L=\sum_{M=-L}^{L}|L,M\rangle\langle L,M|
$$

と定義する。Orbital labels で見れば、この projector の matrix element は

$$
\langle s,m_1;s,m_2|P_L|s,m_3;s,m_4\rangle
=
\sum_M
\langle s,m_1;s,m_2|L,M\rangle
\langle L,M|s,m_3;s,m_4\rangle
$$

で与えられる。

回転不変な二体相互作用は、$M$ に依存せず、total $L$ channel ごとの coefficient だけで指定できる。つまり two-particle sector 上の interaction kernel は

$$
h^{(2)}=\sum_L V_LP_L
$$

と書ける。ここで $V_L$ がその channel の相互作用強度である。このように二体相互作用を angular momentum channel ごとに指定する係数の集合を、quantum Hall や fuzzy sphere の文脈では Haldane pseudopotential、または単に pseudopotential と呼ぶ。

### Pseudopotential と局所性

Pseudopotential は、real-space potential を LLL に projection した後の二体相互作用を channel ごとに並べたものである。局所性は、この coefficient sequence の pattern として現れる。

平面上の short-range interaction なら、二粒子が近い配置に大きな energy を与える。LLL では「二粒子が近い」という情報は relative angular momentum channel に翻訳される。Relative angular momentum が小さい channel ほど、二粒子が近づく成分を多く含む。

$$
m_{\rm rel}=0,1,2,\ldots
$$

したがって、short-range repulsion は低い $m_{\rm rel}$ channel の pseudopotential を大きくする形で表される。Contact-like な interaction なら、最小の $m_{\rm rel}$ channel だけ、または少数の低い $m_{\rm rel}$ channel だけを強く penalize する、という見方になる。

球面では relative angular momentum を total angular momentum $L$ から

$$
m_{\rm rel}=2s-L
$$

と定義する。したがって低い $m_{\rm rel}$ は大きい total $L$ に対応する。$V_{m_{\rm rel}}$ と書かれている場合は、同じ channel を total-$L$ 表示で $V_{L=2s-m_{\rm rel}}$ と読めばよい。

Pseudopotential は局所性そのものではないが、局所的・短距離的な相互作用が LLL projection 後にどの relative channel を penalize するかを表す。

### Number-density operator

Density-density 型の interaction を書きたいときは、number density の spherical harmonic component を使うと便利である。

LLL には sharp な position basis がないので、点 $\Omega$ での density は overcomplete な LLL coherent state $|\Omega\rangle$ を使って読む。ここで $|\Omega\rangle$ は、spin-$s$ multiplet の highest-weight state を回転して、向き $\Omega$ に局在させた state である。

LLL orbital を $a,b=-s,\ldots,s$ でラベルし、

$$
\psi_a(\Omega)=\langle\Omega|a\rangle
$$

と書くと、coherent-state density probe は

$$
n(\Omega)=
\sum_{a,b}
\psi_a^*(\Omega)\psi_b(\Omega)c_a^\dagger c_b
$$

の形を持つ。これは orthonormal position basis での point density ではなく、LLL に projection された smeared density probe である。

その spherical harmonic component を

$$
n_{\ell q}=
\int d\Omega\,Y_{\ell q}(\Omega)n(\Omega)
$$

と定義すると、

$$
n_{\ell q}=
\sum_{a,b}
(Y_{\ell q})_{ab}c_a^\dagger c_b
$$

となる。ここで

$$
(Y_{\ell q})_{ab}
=
\int d\Omega\,
\psi_a^*(\Omega)Y_{\ell q}(\Omega)\psi_b(\Omega)
$$

である。これは、function $Y_{\ell q}$ を掛ける one-body operator を LLL orbital basis に制限した matrix element である。Representation-theoretically、固定した $\ell$ に対する $\{n_{\ell q}\}_{q=-\ell}^{\ell}$ は rank-$\ell$ tensor operator として変換する。

Density-density 型の interaction を $SO(3)$ scalar にするには、この rank-$\ell$ tensor の $q$ components を縮約する。例えば

$$
H_{nn}=
\sum_{\ell,q}g_\ell:n_{\ell q}^\dagger n_{\ell q}:
$$

のように書ける。$g_\ell$ は number-density の angular momentum component ごとの coupling であり、$q$ に依存させないことで rotation symmetry を保つ。

## 4. 3d Ising model on the fuzzy sphere

3d Ising fuzzy sphere model では、LLL 上に二成分 fermion を置く。この二成分は monopole の Zeeman field と結合する physical spin ではなく、Ising 自由度を作るための pseudospin と考える。

各 Landau orbital $m$ に

$$
\mathbf c_m=
\begin{pmatrix}
c_{m\uparrow}\\
c_{m\downarrow}
\end{pmatrix}
$$

を置く。

この模型では、二成分を含めた LLL 全体の半分を埋める。Orbital は $2s+1$ 個、pseudospin は $\uparrow,\downarrow$ の二成分なので、一粒子状態は全部で $2(2s+1)$ 個ある。そのうち

$$
N=2s+1
$$

個の fermion を入れる。つまり、LLL orbital 数と同じ数の fermion を入れるが、各 fermion は $\uparrow/\downarrow$ のどちらかを取れる。

この条件を置くと、ferromagnetic limit で

$$
|\Psi_\uparrow\rangle=
\prod_{m=-s}^{s}c_{m\uparrow}^\dagger|0\rangle,
\qquad
|\Psi_\downarrow\rangle=
\prod_{m=-s}^{s}c_{m\downarrow}^\dagger|0\rangle
$$

という二つの states が自然に出る。どちらも「全 orbital を一つの pseudospin component でちょうど埋める」state であり、$\mathbb{Z}_2$ transformation で互いに入れ替わる。このため、total charge を固定したまま、$\uparrow/\downarrow$ の向きだけを Ising order parameter として扱える。

Ising $\mathbb{Z}_2$ は、二成分 pseudospin の exchange として入る。

$$
\mathbf c_m\mapsto\sigma^x\mathbf c_m.
$$

これは各 orbital で $\uparrow$ と $\downarrow$ を入れ替える symmetry である。

Hamiltonian はこの $\mathbb{Z}_2$ を保つように作られている。相互作用には pseudospin の $z$ component を使った Ising ferromagnetic term があり、さらに $\sigma^x$ に比例する transverse field が入る。Schematic には

$$
H=H_{00}+H_{zz}+H_t,
\qquad
H_t\sim
-h\sum_m\mathbf c_m^\dagger\sigma^x\mathbf c_m
$$

という構造である。

Order parameter は pseudospin の $z$ component で、

$$
M=\sum_{m=-s}^{s}
\mathbf c_m^\dagger\frac{\sigma^z}{2}\mathbf c_m
$$

と書ける。この $M$ は fermion を作ったり消したりする operator ではない。固定した half-filling sector の中で、$\uparrow$ と $\downarrow$ の偏りを測る bilinear operator である。したがって、Ising order parameter として追う揺らぎは total charge を変えない particle-hole 型の pseudospin excitation になる。

$h=0$ では、全 orbital が $\uparrow$ にそろった state と、全 orbital が $\downarrow$ にそろった state が二つの degenerate ground states になる。これらは $\mathbb{Z}_2$ transformation で互いに入れ替わるので、ground state を一つ選ぶと $\mathbb{Z}_2$ が spontaneously broken した Ising ferromagnet になる。$h$ が大きいと、各 orbital で $\uparrow+\downarrow$ 型の superposition が好まれ、$\mathbb{Z}_2$ を保つ paramagnet になる。この二つの相の間の continuous transition を 3d Ising critical point として読む。

### Hamiltonian の orbital-basis 表示

LLL projection 後の Hamiltonian は

$$
H=H_{00}+H_{zz}+H_t
$$

である。各項は

$$
\begin{aligned}
H_{00}
&=
\frac{1}{2}
\sum_{m_1,m_2,m_3,m_4=-s}^{s}
V_{m_1m_2m_3m_4}
\left(\mathbf c_{m_1}^\dagger\mathbf c_{m_4}\right)
\left(\mathbf c_{m_2}^\dagger\mathbf c_{m_3}\right)
\delta_{m_1+m_2,m_3+m_4},
\\
H_{zz}
&=
-\frac{1}{2}
\sum_{m_1,m_2,m_3,m_4=-s}^{s}
V_{m_1m_2m_3m_4}
\left(\mathbf c_{m_1}^\dagger\sigma^z\mathbf c_{m_4}\right)
\left(\mathbf c_{m_2}^\dagger\sigma^z\mathbf c_{m_3}\right)
\delta_{m_1+m_2,m_3+m_4},
\\
H_t
&=
-h
\sum_{m=-s}^{s}
\mathbf c_m^\dagger\sigma^x\mathbf c_m.
\end{aligned}
$$

$V_{m_1m_2m_3m_4}$ は、球面上の同じ short-range two-body interaction を LLL orbital basis に projection した matrix element である。$H_{00}$ はこの matrix element を total density channel に、$H_{zz}$ は pseudospin-$z$ density channel に入れている。つまり、$V_0,V_1$ は $H_{00}$ 用と $H_{zz}$ 用の別係数ではなく、この共有された二体相互作用の Haldane pseudopotential である。

Real-space 表示は

$$
n^0(\Omega_a)n^0(\Omega_b)-n^z(\Omega_a)n^z(\Omega_b)
$$

である。LLL projection 後にはこの二つの項が $H_{00}$ と $H_{zz}$ になり、$H_{00}$ は正、$H_{zz}$ は負の符号を持つ。ここで

$$
n^\alpha(\Omega)=
\begin{pmatrix}
\psi_\uparrow^\dagger(\Omega)&
\psi_\downarrow^\dagger(\Omega)
\end{pmatrix}
\sigma^\alpha
\begin{pmatrix}
\psi_\uparrow(\Omega)\\
\psi_\downarrow(\Omega)
\end{pmatrix},
\qquad
\sigma^0=I.
$$

したがって

$$
n^0=n_\uparrow+n_\downarrow,
\qquad
n^z=n_\uparrow-n_\downarrow
$$

であり、$n^z$ には spin operator のような $1/2$ は含まれていない。

$H_{00}+H_{zz}$ の pseudospin structure は、直観的には二つの sites $i,j$ に対する

$$
\frac{1-Z_iZ_j}{2}
$$

に近い。$Z=\pm1$ を $\uparrow/\downarrow$ の向きだと思えば、この量は同じ向きでは $0$、逆向きでは $1$ になる。実際、

$$
\frac{1}{2}\left(n_i^0n_j^0-n_i^zn_j^z\right)
=
n_{i\uparrow}n_{j\downarrow}
+n_{i\downarrow}n_{j\uparrow}
$$

なので、逆向き pseudospin の pair だけが interaction energy を持つ。この energy を避けるために pseudospin がそろう、という意味で Ising ferromagnetic term になっている。

## 5. Spectrum を operator table として読む

Hamiltonian construction が分かっても、それだけでは fuzzy sphere から 3d Ising CFT の data を読んだことにはならない。次の段階は、finite-size spectrum の states を CFT operators とその descendants に対応づけることである。

Critical point 近くで exact diagonalization した低エネルギー states は、$SO(3)$ spin $L$、Ising $\mathbb{Z}_2$、spacetime parity $P$ で分類される。CFT 側では、これらを operator の $SO(3)$ spin $\ell$、$\mathbb{Z}_2$ parity、spacetime parity と読む。

Energy gap から scaling dimension $\Delta$ を読むには、全 spectrum に非普遍的な scale factor をかける。CFT 側では、sphere Hamiltonian は dilatation operator と

$$
H-E_0\sim \frac{v}{R}D
$$

のように対応する。ここで $v/R$ は microscopic Hamiltonian の normalization に依存するので、finite-size spectrum だけから絶対値としては決まらない。

Zhu et al. では、この scale を energy-momentum tensor $T_{\mu\nu}$ で固定する。$T_{\mu\nu}$ は任意の local 3d CFT にある conserved spin-2 primary で、$\mathbb{Z}_2=+1$、$P=+1$、$\ell=2$、protected dimension $\Delta_T=3$ を持つ。したがって、target が 3d Ising CFT であるという前提のもとで、$(+,+,\ell=2)$ sector の低い spin-2 state を $T_{\mu\nu}$ candidate として使い、その gap が $\Delta=3$ になるように spectrum 全体を rescale する。

これは「量子数だけでその state が自動的に $T_{\mu\nu}$ と証明される」という意味ではない。Stress-tensor calibration は、known CFT に protected operator があることを使った normalization choice であり、その後に他の primary / descendant multiplets が正しい spin と $\Delta$ shift で並ぶかを check する。

Zhu et al. の main table では、$N=16$ の fuzzy-sphere spectrum から次の low-lying primary operators が同定されている。

| operator | $\mathbb{Z}_2$ | $P$ | $\ell$ | fuzzy-sphere $\Delta$ | bootstrap / exact |
|---|---:|---:|---:|---:|---:|
| $\sigma$ | $-$ | $+$ | 0 | 0.524 | 0.518 |
| $\epsilon$ | $+$ | $+$ | 0 | 1.414 | 1.413 |
| $T_{\mu\nu}$ | $+$ | $+$ | 2 | 3 | 3 |
| $\epsilon'$ | $+$ | $+$ | 0 | 3.838 | 3.830 |
| $\sigma_{\mu_1\mu_2}$ | $-$ | $+$ | 2 | 4.214 | 4.180 |
| $\sigma'$ | $-$ | $+$ | 0 | 5.303 | 5.291 |
| $T'_{\mu\nu}$ | $+$ | $+$ | 2 | 5.583 | 5.509 |
| $\epsilon_{\mu_1\mu_2\mu_3\mu_4}$ | $+$ | $+$ | 4 | 5.103 | 5.023 |

この対応は、あとで OPE coefficients を読むときの入力にもなる。例えば $\langle\sigma|n^z|\epsilon\rangle$ のような matrix element は、finite-size spectrum のどの state を $|\sigma\rangle$、$|\epsilon\rangle$ と読むかに依存する。

### Primary / descendant pattern

Operator identification は、単に「各 $L$ sector の低い state を known operator に対応させる」作業ではない。大事なのは、CFT で operator に $\partial_\mu$ を作用させることが、$S^2$ Hilbert space では primary state から descendant state を作る操作として現れる、という点である。

Radial quantization では、local primary operator $O(0)$ が sphere 上の state $\lvert O\rangle$ に対応する。Flat space での derivative descendant

$$
\partial_\mu O(0)
$$

は、state 側では translation generator $P_\mu$ を作用させた

$$
P_\mu|O\rangle
$$

に対応する。$P_\mu$ は spin-1 の generator で、dimension を 1 上げる。

そのため、ED spectrum では「primary の energy から 1 だけ上がったところに、spin が vector product の規則に従って現れる states」が descendant の候補になる。

Scalar primary $O$ の descendants は、schematic には

$$
\partial_{\nu_1}\cdots\partial_{\nu_j}\square^nO,
\qquad
(\Delta,\ell)\mapsto(\Delta+2n+j,j)
$$

である。したがって scalar primary は、予測できる spin と energy shift の tower を作る。例えば、

| primary | descendant | expected $(\Delta,\ell)$ |
|---|---|---|
| $\sigma$ | $\partial_\mu\sigma$ | $(\Delta_\sigma+1,1)$ |
| $\sigma$ | $\square\sigma$ | $(\Delta_\sigma+2,0)$ |
| $\sigma$ | $\partial_{\mu_1}\partial_{\mu_2}\sigma$ | $(\Delta_\sigma+2,2)$ |
| $\epsilon$ | $\partial_\mu\epsilon$ | $(\Delta_\epsilon+1,1)$ |
| $\epsilon$ | $\square\epsilon$ | $(\Delta_\epsilon+2,0)$ |

Spinning primary $O_{\mu_1\cdots\mu_\ell}$ では、derivative が spin を上げるだけでなく、index contraction によって spin を下げる descendant も出る。また、$\varepsilon_{\mu\nu\rho}$ を含む descendant は spacetime parity $P$ を反転させる。このため、parity-even の spinning primary から parity-odd descendant が出ることがある。

Stress tensor $T_{\mu\nu}$ は conserved operator なので特別である。

$$
\partial_\mu T_{\mu\nu}=0
$$

を満たすため、generic な spin-2 primary よりも descendant が少ない short multiplet になる。Spectrum 上で $T_{\mu\nu}$ を同定するときは、$\Delta_T=3$ の calibration だけでなく、この short multiplet structure も check になる。

実用的には次のように読む。

1. 各 $\mathbb{Z}_2=\pm1$ sector で、まだ multiplet に割り当てていない lowest state を primary candidate にする。
2. その candidate の $\Delta,\ell,P$ から、3d conformal representation theory が予測する descendants を列挙する。
3. 対応する states が ED spectrum に出ているかを、finite-size drift を許して確認する。
4. Primary と descendants をまとめて一つの conformal multiplet として spectrum から取り除く。
5. 残った states に同じ手順を繰り返す。

この意味で、$\sigma$ と $\epsilon$ は同定しやすい。Odd / even sector の最も低い scalar primary であり、descendant tower も単純だからである。高い operator では、単一の energy level が bootstrap value に近いことだけでは不十分で、multiplet 全体の pattern が合っているかを見る必要がある。

## 6. OPE coefficients from fuzzy sphere matrix elements

Spectrum から primary operators の dimensions と spins を読んだ後、次に取り出す conformal data が OPE coefficients である。Scaling dimensions が「どんな operators があるか」を教えるなら、OPE coefficients は「operators を掛けたとき、どの channel にどれだけ流れるか」を教える。

### CFT 側で何を測るのか

CFT の primary operators は、two-point function の normalization を固定すると、three-point function の形が conformal symmetry によってほぼ固定される。Scalar primary だけなら、schematic には

$$
\langle
\phi_\alpha(x_1)\phi_\beta(x_2)\phi_\gamma(x_3)
\rangle
=
\frac{f_{\alpha\beta\gamma}}
{|x_{12}|^{\Delta_\alpha+\Delta_\beta-\Delta_\gamma}
 |x_{23}|^{\Delta_\beta+\Delta_\gamma-\Delta_\alpha}
 |x_{31}|^{\Delta_\gamma+\Delta_\alpha-\Delta_\beta}}
$$

と書ける。この coefficient $f_{\alpha\beta\gamma}$ が OPE coefficient である。同じ coefficient は operator product expansion

$$
\phi_\alpha(x)\phi_\beta(0)
\sim
\sum_\gamma
f_{\alpha\beta\gamma}
|x|^{\Delta_\gamma-\Delta_\alpha-\Delta_\beta}
\phi_\gamma(0)
+\text{descendants}
$$

にも現れる。

3d Ising CFT では $\mathbb{Z}_2$ selection rule がある。$\sigma$ は odd、$\epsilon$ と $T_{\mu\nu}$ は even なので、例えば

$$
f_{\sigma\sigma\epsilon},\quad
f_{\epsilon\epsilon\epsilon},\quad
f_{\sigma\sigma T},\quad
f_{\epsilon\epsilon T}
$$

は許される。一方で、$\mathbb{Z}_2$ parity が奇数個だけ odd になる three-point coefficient は消える。

Fuzzy sphere でやっていることは、Euclidean flat space 上の three-point function を直接測ることではない。Radial quantization で local operator を sphere 上の state に変換し、$S^2$ 上の equal-time matrix element を測って、そこから同じ $f_{\alpha\beta\gamma}$ を読む。

この見方にすると、three-point function の難しさが

$$
\langle \phi_\alpha|\mathcal O(\Omega)|\phi_\gamma\rangle
$$

という quantum-mechanical matrix element の計算に置き換わる。ここで $|\phi_\alpha\rangle$ と $|\phi_\gamma\rangle$ は spectrum で同定した CFT states であり、$\mathcal O(\Omega)$ は fuzzy sphere の microscopic probe である。

### Microscopic probe と CFT operator

Microscopic probe $\mathcal O(\Omega)$ は finite Hilbert space 上で定義された local probe である。例えば $n^z(\Omega)$ は pseudospin density であって、CFT operator $\sigma(\Omega)$ そのものではない。

Critical point の IR では、$\mathcal O$ は同じ quantum numbers を持つ CFT operators の和として読める。OPE extraction で使うのは、この和のうち $R\to\infty$ で最も遅く減衰する leading term である。

$$
\mathcal O(\Omega)
=
\sum_{\beta\in{\rm primaries}}
\frac{c_\beta}{R^{\Delta_\beta}}
\phi_\beta(\Omega)
+\text{descendant and finite-size corrections}.
$$

ここで $\phi_\beta$ は CFT の primary scaling operator、$c_\beta$ は選んだ microscopic probe に依存する nonuniversal overlap である。同じ $\mathbb{Z}_2$、spin、parity を持つ CFT operators だけがこの和に入れる。

同じ quantum numbers の中で最も小さい $\Delta_\beta$ を持つ operator が、large-$R$ limit の leading contribution になる。Odd scalar probe なら、通常は $\sigma$ が最初に残り、$\sigma'$ などは $R^{-(\Delta_{\sigma'}-\Delta_\sigma)}$ だけ余分に抑えられる。

CFT 側では、primary states の間に CFT operator を挟んだ matrix element は three-point function と同じ情報を持つ。

$$
\langle\phi_\alpha|\phi_\beta(\Omega)|\phi_\gamma\rangle
\propto
f_{\alpha\beta\gamma}.
$$

比例係数には、operator dimensions、spin、insertion point $\Omega$、spherical harmonic convention で決まる known angular factor が含まれる。Scalar で同じ point / same component を比較する場合、この factor は ratio で消えるか、簡単な known coefficient として扱える。

Microscopic probe の展開に戻すと、

$$
\langle\phi_\alpha|\mathcal O(\Omega)|\phi_\gamma\rangle
=
\sum_\beta
\frac{c_\beta f_{\alpha\beta\gamma}}{R^{\Delta_\beta}}
+\text{corrections}
$$

の形になる。OPE extraction の中心は、leading CFT operator の overlap $c_\beta$ を matrix element の ratio で消すことにある。

### Example: $f_{\sigma\sigma\epsilon}$

$n^z(\Omega)$ は $\mathbb{Z}_2$ odd なので、$R\to\infty$ の leading term には最も低い odd scalar である $\sigma$ が現れる。Finite size では descendants や irrelevant-operator mixing 由来の correction が入るため、

$$
\langle\sigma|n^z(\Omega)|0\rangle
=
\frac{1}{R^{\Delta_\sigma}}
\left(
c_\sigma+\frac{a_1}{R^2}+O(R^{-4})
\right)
$$

と期待される。

一方で、

$$
\langle\sigma|n^z(\Omega)|\epsilon\rangle
=
\frac{1}{R^{\Delta_\sigma}}
\left(
f_{\sigma\sigma\epsilon}c_\sigma+\frac{b_1}{R^2}+O(R^{-4})
\right)
$$

なので、比を取ると

$$
\frac{\langle\sigma|n^z(\Omega)|\epsilon\rangle}
{\langle\sigma|n^z(\Omega)|0\rangle}
=
f_{\sigma\sigma\epsilon}
+\frac{A}{R^2}
+O(R^{-4})
$$

となる。$A$ は correction の詳細に依存する nonuniversal coefficient である。したがって $1/N$ に対して extrapolate し、$R\to\infty$ に対応する intercept を取ると、$f_{\sigma\sigma\epsilon}$ が得られる。

報告値は

$$
f_{\sigma\sigma\epsilon}\approx1.0539(18)
$$

であり、bootstrap value $1.0519$ とよく合う。

この例は OPE extraction の最小単位である。必要なのは、three local operators を同時に測ることではなく、二つの CFT states と一つの microscopic local probe の matrix element を測ること。Three-point coefficient が sphere Hilbert space の matrix element に圧縮されている。

### Local probes

LLL orbital の coherent-state wavefunction を

$$
\psi_m(\Omega)=\langle\Omega|m\rangle
$$

と書く。二成分 Ising model では、pseudospin index を $\alpha=\uparrow,\downarrow$ として、LLL に projection された field probe を

$$
\Psi_\alpha(\Omega)
=
\sum_{m=-s}^{s}\psi_m(\Omega)c_{m,\alpha}
$$

と書ける。CFT の Ising operator を探る対象は charge excitation ではなく、この $\Psi_\alpha$ から作る particle-hole 型の pseudospin density である。

基本的な spin density は

$$
n^a(\Omega)
=
\Psi^\dagger(\Omega)\sigma^a\Psi(\Omega)
=
\sum_{m,m'=-s}^{s}
\psi_m^*(\Omega)\psi_{m'}(\Omega)
c_{m,\alpha}^\dagger(\sigma^a)_{\alpha\beta}c_{m',\beta}
$$

であり、ordinary spherical harmonics で

$$
n^a(\Omega)
=
N\sum_{\ell=0}^{2s}\sum_{q=-\ell}^{\ell}
n^a_{\ell q}Y_{\ell q}(\Omega)
$$

と展開される。ここで $Y_{\ell q}$ は monopole charge のない ordinary spherical harmonic であり、monopole harmonics $Y_{s,\ell,m}$ とは別物である。

中心になる probes は次の三つである。

| microscopic probe | symmetry | leading CFT content |
|---|---|---|
| $n^z(\Omega)$ | $\mathbb{Z}_2$ odd | $\sigma$ plus odd primaries / descendants |
| $n^x(\Omega)$ | $\mathbb{Z}_2$ even | $\epsilon$ plus even primaries / descendants |
| $O_\epsilon(\Omega)=H(\Omega)+2h n^x(\Omega)$ | $\mathbb{Z}_2$ even | improved $\epsilon$ probe |

$n^z$ を $\sigma$ そのものと同一視してはいけない。正確には、$n^z$ は $\sigma$、$\sigma_{\mu\nu}$、$\sigma'$、それらの descendants など、同じ symmetry を持つ CFT operators の混合である。ただし large $R$ では最も低い dimension を持つ $\sigma$ が支配的になる。

同じく $n^x$ や $O_\epsilon$ も $\epsilon$ そのものではない。$\epsilon$ を leading component とする even probe である。複数の microscopic probes から同じ OPE coefficient が出るかどうかは、systematic error の check になる。

### Spinning operators

$T_{\mu\nu}$ や $\sigma_{\mu\nu}$ のような spinful primary を含む OPE coefficient では、matrix element に angular dependence がある。そのため、sphere 上で spherical harmonics に projection して、対応する spin component を取り出す。

代表例として、$f_{\sigma\sigma T}$ では、schematic に

$$
\frac{
\langle\sigma|
\int d\Omega\,\overline Y_{2,0}(\Omega)n^z(\Omega)
|T,m=0\rangle
}{
\langle\sigma|
\int d\Omega\,\overline Y_{0,0}(\Omega)n^z(\Omega)
|0\rangle
}
\times
\text{known tensor factor}
\to
f_{\sigma\sigma T}
$$

の形になる。Specific component の matrix element から reduced coefficient を読むため、Wigner-Eckart 的な angular projection が必要になる。

Spinning OPE では、値そのものだけでなく convention を読む必要がある。どの $m$ component を使うか、どの spherical harmonic normalization を使うか、stress tensor をどう normalized するかで、式の見た目が変わる。

### Low-lying OPE data

主な reported OPE coefficients は次の通り。

| coefficient | fuzzy sphere | bootstrap / known |
|---|---:|---:|
| $f_{\sigma\sigma\epsilon}$ | $1.0539(18)$ | $1.0519$ |
| $f_{\epsilon\epsilon\epsilon}$ | $1.5441(23)$ | $1.5324$ |
| $f_{\sigma\sigma\epsilon'}$ | $0.0529(16)$ | $0.0530$ |
| $f_{\epsilon\epsilon\epsilon'}$ | $1.566(68)$ | $1.5360$ |
| $f_{\sigma'\sigma\epsilon}$ | $0.0515(42)$ | $0.0572$ |
| $f_{\sigma'\sigma\epsilon'}$ | $1.294(51)$ | NA |
| $f_{\sigma'\epsilon\sigma'}$ | $2.98(13)$ | NA |
| $f_{\sigma\sigma T}$ | $0.3248(35)$ | $0.3261$ |
| $f_{\sigma'\sigma T}$ | $-0.00007(96)$ | $0$ |
| $f_{\epsilon\epsilon T}$ | $0.8951(35)$ | $0.8892$ |
| $f_{T\epsilon T}$ | $0.8658(69)$ | NA |
| $f_{\sigma\epsilon\sigma_{\mu\nu}}$ | $0.400(33)$ | $0.3892$ |
| $f_{\sigma\epsilon'\sigma_{\mu\nu}}$ | $0.18256(69)$ | NA |

Fuzzy sphere が known bootstrap numbers を再現することは validation として重要である。より強い点は、$T_{\mu\nu}$ や高い primary を含む、standard bootstrap table では扱いにくい OPE coefficients へ microscopic model から直接アクセスできることである。

## 7. Four-point correlator reconstruction

Bulk CFT は、原理的には spectrum と OPE coefficients で指定される。したがって four-point function は、完全な conformal data から独立した追加データではない。重要なのは、fuzzy sphere で得た finite-size states と local probes から、cross ratios に依存する CFT correlator がどう再構成されるかである。

Identical scalar の four-point function の非自明な部分は、schematic には

$$
g(u,v)=
\sum_{\mathcal O}
f_{\phi\phi\mathcal O}^2
G_{\Delta,\ell}(u,v)
$$

のように conformal block expansion で書ける。ここで $\Delta,\ell$ は exchanged primary operator の spectrum data、$f_{\phi\phi\mathcal O}$ は OPE coefficient である。

したがって、four-point correlator を読むときの問いは「新しい種類の CFT data は何か」ではない。問いは、finite-size fuzzy sphere で得た states、operator probes、normalization が、CFT の cross-ratio-dependent function として整合的に組み上がるかである。

Radial quantization では、four-point function の一部の insertions を external states にし、残りを cylinder 上の operator insertion として扱える。

$$
\langle O_4(\infty)O_3(1)O_2(z,\bar z)O_1(0)\rangle
\quad\leftrightarrow\quad
\langle O_4|\,O_2(\tau,\theta)\,O_3(0)\,|O_1\rangle.
$$

ここで $(\tau,\theta)$ が cross-ratio data を表す。Fuzzy sphere では、external states は low-energy eigenstates、operator insertions は microscopic local probes として実装される。

扱われる代表的な correlators は

- $\langle\sigma\sigma\sigma\sigma\rangle$
- $\langle\sigma\sigma\epsilon\epsilon\rangle$
- $\langle\sigma\sigma T_{\mu\nu}T_{\rho\eta}\rangle$

である。

Four-point correlator は、spectrum と OPE extraction の後に来る自然な検査対象である。Finite-size matrix elements から構成された function が、CFT の conformal block expansion や crossing consistency とどの程度合うかを見ることで、state identification、probe normalization、finite-size extrapolation の全体が検査される。

## 8. Defect CFT on the fuzzy sphere

Defect CFT は、bulk CFT の中に line、surface、impurity などが置かれたとき、IR で作られる conformal fixed point を調べる枠組みである。Bulk theory そのものの conformal data は spectrum と OPE coefficients で指定されるが、defect を入れるとそれだけでは足りない。Defect-local operators、bulk one-point coefficients、bulk-defect OPE coefficients が新しく必要になる。

Fuzzy sphere で重要なのは、defect を「格子上の境界」ではなく、radial quantization 後の $S^2$ 上の localized perturbation として扱える点である。これにより、bulk の sphere geometry と angular momentum structure をかなり保ったまま、defect fixed point の spectrum と correlator data を読むことができる。

### Defect を入れるとは何を変えることか

Bulk spectrum や bulk OPE を読むときは、critical point に tune した Hamiltonian の low-energy Hilbert space を CFT data として読む。Defect CFT では、Hamiltonian に localized perturbation を加える。したがって、調べているのは元の bulk Hamiltonian の追加 observable ではなく、defect term を含む別の Hilbert-space problem である。

Generic local defect は、bulk の空間対称性や内部対称性を一部破る local perturbation である。Conformal defect は、その perturbation が IR で scale / conformal symmetry を持つ defect fixed point に流れたものを指す。

Schematic には、bulk CFT に $p$-dimensional defect を入れる deformation は

$$
H_{\rm CFT}
\quad\longrightarrow\quad
H_{\rm CFT}
+h_d\int_{\rm defect}d^px\,O(x)
$$

のように書ける。Magnetic line defect の場合、defect は one-dimensional であり、3d Ising CFT の order-parameter channel、つまり $\sigma$ 型の perturbation に結合する。

### Radial quantization で line defect はどう見えるか

Flat space の line defect を radial quantization に移すと、time direction は radial direction になり、spatial slice は $S^2$ になる。中心を通る line defect は、各 $S^2$ slice と二点で交わる。この二点を north pole と south pole に取る。

したがって、cylinder $S^2\times\mathbb R$ 上では、defect は north/south pole に沿って time direction に伸びる二本の $0+1$d impurity line として見える。

Hamiltonian は fixed radial-time slice 上の generator なので、fuzzy sphere 側ではその slice 上の二点に localized term として入る。Schematic には

$$
\int_{-\infty}^{\infty}dx\,O(x)
\quad\longrightarrow\quad
\int d\tau\,[O_N(\tau)+O_S(\tau)]
$$

であり、Hamiltonian の中では $O_N+O_S$ という二点の local term として現れる。

したがって変えるものは Hilbert space の幾何ではなく Hamiltonian である。同じ LLL many-body Hilbert space を使い、bulk critical Hamiltonian $H_0$ に defect term $H_d$ を足して

$$
H_{\rm defect}=H_0+H_d
$$

を対角化する。

Magnetic line defect では、この defect term は schematic に

$$
H_d=
2\pi h_d
\left[
n^z(\theta=0,\varphi=0)
+n^z(\theta=\pi,\varphi=0)
\right]
$$

と書ける。これは $S^2$ 上の north/south pole における Ising order-parameter density $n^z$ への pinning field である。$h_d$ が impurity strength を制御する。

Large $h_d$ limit では、pole-localized term は端の monopole orbital だけに作用し、

$$
H_d=
\frac{h_d}{2}
\left(
\hat c_s^\dagger\sigma^z\hat c_s
+\hat c_{-s}^\dagger\sigma^z\hat c_{-s}
\right)
$$

となる。したがって $h_d\to\infty$ では、$m=\pm s$ の二つの端 orbital の spin を fixed boundary condition のように扱える。この pinned-orbital picture は、point impurity が LLL projection 後にどれだけ local Hilbert-space constraint として現れるかを示している。

### Defect spectrum と displacement operator

Defect がない 3d CFT では、Euclidean conformal group は $SO(4,1)$ である。Line defect を入れると、line に沿った conformal transformations と、line に垂直な rotations だけが残る。したがって、期待される defect conformal symmetry は

$$
SO(2,1)\times O(2)
$$

である。

Bulk operator の場合は $SO(3)$ spin $L$ で multiplet を読むが、line defect では defect に沿った scaling dimension と、defect に垂直な $O(2)$ charge / angular momentum が主要な labels になる。

Defect 付き radial quantization では、対応する operator は bulk point operator ではなく、defect 上の radial-time origin に挿入される defect-local operator である。

$$
|\hat O\rangle_{\rm defect}
\quad\leftrightarrow\quad
\hat O(0)|\hat 1\rangle.
$$

ここで $|\hat 1\rangle$ は defect が入った background の ground state であって、defect なしの CFT vacuum ではない。Defect Hamiltonian の energy gaps が defect operator dimensions $\hat\Delta$ を与える。

Displacement operator は defect CFT で特別な operator である。Defect がない bulk CFT では、translation symmetry に対応して stress tensor が保存する。

$$
\partial_\mu T^{\mu i}=0.
$$

Line defect を置くと、defect に沿った translations は残るが、defect を横方向に動かす translations は破れる。そのため、stress tensor の保存則は defect 上で contact term を持つ。Schematic には、defect を $x_\perp=0$ に置いたとき、

$$
\partial_\mu T^{\mu i}(x)
=
\delta^{(2)}(x_\perp)D^i(x_\parallel)
$$

のように書ける。ここで $i$ は defect に垂直な方向、$D^i$ が displacement operator である。つまり $D^i$ は、defect を横方向へ少し動かす deformation に対応する defect-local operator であり、broken transverse translation の Ward identity に現れる。

3d の line defect では、displacement operator の dimension は symmetry により

$$
\Delta_D=2
$$

と期待される。Spectrum の中にこの operator とその descendant structure が見えることは、defect fixed point の emergent conformal symmetry を検査する重要な check になる。

### Bulk one-point function と bulk-defect OPE

Defect がない CFT vacuum では、非自明な primary operator の one-point function は通常消える。Defect があると、defect が位置と方向を選ぶため、bulk primary の one-point function が許される。

Line defect からの perpendicular distance を $r_\perp$ とすると、scalar bulk primary $O$ の one-point function は defect conformal symmetry により

$$
\langle O(x)\rangle_{\rm defect}
=
\frac{a_O}{|x_\perp|^{\Delta_O}}
$$

のような形に固定される。ここで $a_O$ は one-point coefficient であり、defect CFT data の一部である。

Defect があると、bulk operator は defect に近づく極限で defect operators に展開できる。

$$
O_{\rm bulk}(x_\parallel,x_\perp)
\sim
\sum_{\hat O}
b_{O\hat O}
|x_\perp|^{\hat\Delta-\Delta_O}
\hat O(x_\parallel).
$$

ここで $\hat O$ は defect operator、$\hat\Delta$ はその scaling dimension、$b_{O\hat O}$ は bulk-defect OPE coefficient である。

これは bulk OPE coefficient $f_{ijk}$ とは別の data である。Bulk OPE は bulk operators 同士を近づけたときの展開であり、bulk-defect OPE は bulk operator を defect に近づけたときの展開である。

## 9. 何が制御され、何が繊細に残るか

Fuzzy sphere regularization の強みは、finite size でも $SO(3)$ symmetry を保ち、radial quantization を計算可能な many-body spectrum problem に変える点にある。このため、ordinary lattice regularization と比べて、CFT operator の spin labels に直接アクセスしやすい。

同時に、いくつかの段階は繊細である。

- Microscopic Hamiltonian は、狙う critical point に tune する必要がある。
- Energy gap を $\Delta$ に変換するには normalization choice が必要で、多くの場合 $T_{\mu\nu}$ と結びつく。
- Primary identification は isolated energy level だけでなく、representation theory が予測する multiplet pattern を使う。
- Microscopic probe は CFT operator そのものではない。同じ quantum numbers を持つ CFT operators を nonuniversal overlap つきで含む。
- OPE extraction には ratio と finite-size extrapolation が必要である。
- Spinning operators では angular projection と convention-dependent tensor factor が必要になる。
- Defect data は bulk spectrum に observable を一つ足して得るものではなく、defect term を入れた別の Hamiltonian problem から読む。

概念的な利点は、finite-dimensional で symmetry-preserving な framework から、low-lying spectrum だけでなく、OPE data、correlators、defect CFT quantities まで同じ radial-quantization の言葉で読めることである。

## References

- Zhu et al., "Uncovering conformal symmetry in the 3D Ising transition: State-operator correspondence from a fuzzy sphere regularization," Phys. Rev. X 13, 021009 (2023). arXiv: https://arxiv.org/abs/2210.13482
- Hu, He, Zhu, "Operator Product Expansion Coefficients of the 3D Ising Criticality via Quantum Fuzzy Sphere," Phys. Rev. Lett. 131, 031601 (2023). arXiv: https://arxiv.org/abs/2303.08844
- Han, Hu, Zhu, He, "Conformal four-point correlators of the 3D Ising transition via the quantum fuzzy sphere." arXiv: https://arxiv.org/abs/2306.04681
- Hu, He, Zhu, "Solving Conformal Defects in 3D Conformal Field Theory using Fuzzy Sphere Regularization," Nature Communications 15, 3659 (2024). arXiv: https://arxiv.org/abs/2308.01903
