---
title: "Fuzzy sphere regularization 入門"
lang: ja
description: "Fuzzy sphere regularization を使って 3d CFT の spectrum, OPE data, correlator, defect data を読むためのノート"
tags: ["CFT", "fuzzy sphere", "3d Ising", "conformal data"]
---

Fuzzy sphere regularization は、3d CFT を $S^2\times\mathbb{R}$ 上の有限サイズ量子多体系として調べる方法である。このノートの目的は、finite-size Hamiltonian の spectrum、matrix element、correlator を、CFT の conformal data として読むための辞書を一つの流れで整理することである。

以下では、まず CFT 側で読もうとしている data を固定し、次に spherical Landau level がなぜ $SO(3)$ を保つ cutoff になるのかを計算で見る。その後、LLL orbital 上の Hamiltonian construction、3d Ising CFT の spectrum、OPE coefficients、four-point correlator、defect CFT へ進む。

## 1. 3d CFT の辞書

### 位置づけ

fuzzy sphere の論文で出てくる spectrum、matrix element、correlator は、有限サイズ Hamiltonian の出力そのものではなく、3d CFT の conformal data として読むために作られている。このレビューの目的は、CFT の一般論を広げることではなく、Zhu et al. の spectrum paper と Hu, He, Zhu の OPE paper を読むときに必要な最小辞書を固定することである。

このノートで使う CFT 側の基本語彙は、local operator、scaling dimension、spin、primary / descendant、OPE coefficient、correlator である。fuzzy sphere 側では、それぞれが finite-size eigenstate、energy gap、$SO(3)$ angular momentum、multiplet pattern、operator matrix element、sphere 上の probe measurement と対応する。

### CFT data

local CFT は、局所演算子の集合と、それらの相関関数で特徴づけられる。実用上は、primary operators の scaling dimensions と spin、そして OPE coefficients が基本データになる。

scaling dimension $\Delta$ は、operator が scale transformation でどう変わるかを表す量である。spin $\ell$ は、3d Euclidean rotations の下でどの $SO(3)$ 表現に属するかを表す。3d Ising CFT ではさらに $\mathbb{Z}_2$ parity があり、order parameter $\sigma$ は odd、energy operator $\epsilon$ や stress tensor $T_{\mu\nu}$ は even である。

ここで最初に必要なのは、「CFT とは何か」を全体的に定義することではなく、finite-size spectrum の表に現れる次の読み替えである。

| CFT 側 | fuzzy sphere 側 |
|---|---|
| primary operator $O$ | low-energy eigenstate candidate $\lvert O\rangle$ |
| scaling dimension $\Delta_O$ | rescaled energy gap |
| spin $\ell$ | total angular momentum $L$ |
| internal symmetry sector | $\mathbb{Z}_2$、flavor、charge などの Hilbert-space sector |
| descendant | primary candidate から integer gap 上に現れる multiplet |
| OPE coefficient | normalized matrix element / ratio |

この表は同一視ではなく、IR limit での辞書である。有限サイズでは irrelevant operators、operator mixing、normalization convention、state identification error が入る。

### State-operator correspondence

radial quantization では、平坦空間の原点に局所演算子 $O(0)$ を挿入することと、$S^2$ 上の状態 $\lvert O\rangle$ を作ることが対応する。radial direction の対数を時間 $\tau$ と見ると、理論は $S^2\times\mathbb{R}$ 上の量子力学になる。

このとき radial time translation の generator は dilatation operator $D$ であり、

$$
D|O\rangle=\Delta_O |O\rangle
$$

と読める。したがって球面上の Hamiltonian の energy gap は、適切な単位で scaling dimension に対応する。

$$
E_O-E_0 \propto \frac{\Delta_O}{R}
$$

fuzzy sphere の Hamiltonian では比例係数が microscopic normalization に依存するため、論文では stress tensor などの既知 dimension を使って全体の energy scale を固定する。Zhu et al. では、$\Delta_T=3$ を持つ conserved spin-2 operator $T_{\mu\nu}$ が重要な calibration point になる。

ここで注意すべきことは、energy が近いだけでは operator identification にならないという点である。CFT operator は $\Delta$、spin、$\mathbb{Z}_2$、parity、descendant structure をまとめて持つ。finite-size state を primary と読むには、これらが一貫しているかを確認する必要がある。

### Primary と descendant

primary operator は、conformal transformations の中で一番下にある operator である。descendant は primary に derivative を作用させて作る。

scalar primary $O$ なら、schematic には

$$
O,\qquad
\partial_\mu O,\qquad
\partial_{\mu_1}\partial_{\mu_2}O,\qquad
\square O,\ldots
$$

という tower ができる。derivative は dimension を 1 上げ、spin-1 の index を持つので、descendant は primary から決まった $\Delta$ shift と spin pattern を持つ。

fuzzy sphere spectrum で primary / descendant を見分けるときは、次の順番で読む。

1. 低い energy の state を primary candidate として見る。
2. その candidate の $L$、$\mathbb{Z}_2$、parity から、CFT representation theory が予測する descendant pattern を出す。
3. 予測された integer-spaced tower が finite-size spectrum に現れるかを見る。
4. その multiplet を取り除き、残った低い state を次の primary candidate として読む。

stress tensor $T_{\mu\nu}$ は conserved operator なので特別である。保存則

$$
\partial_\mu T_{\mu\nu}=0
$$

により、generic な spin-2 primary より descendant が少ない short multiplet になる。この short multiplet structure は、$T_{\mu\nu}$ を energy-scale calibration に使うときの追加 check になる。

### OPE coefficients

OPE は、二つの local operators を近づけたときに、別の local operators の和として展開できるという主張である。scalar primary については、schematic に

$$
\phi_\alpha(x)\phi_\beta(0)
\sim
\sum_\gamma
f_{\alpha\beta\gamma}
|x|^{\Delta_\gamma-\Delta_\alpha-\Delta_\beta}
\phi_\gamma(0)
\;+\;\text{descendants}
$$

と書ける。この係数 $f_{\alpha\beta\gamma}$ が OPE coefficient であり、二点関数 normalization を固定した後の三点関数係数と同じ情報を持つ。

radial quantization では、三点関数の情報は sphere 上の matrix element に変換できる。

$$
\langle \phi_\alpha|\phi_\beta(\Omega)|\phi_\gamma\rangle
\quad\leftrightarrow\quad
f_{\alpha\beta\gamma}
$$

fuzzy sphere で直接挿入できるのは CFT operator $\phi_\beta$ そのものではなく、microscopic probe $\mathcal{O}(\Omega)$ である。例えば $n^z(\Omega)$ は Ising odd scalar の probe であり、IR では

$$
\mathcal{O}(\Omega)
=
\frac{c_\sigma}{R^{\Delta_\sigma}}\sigma(\Omega)
+
\frac{c_{\sigma'}}{R^{\Delta_{\sigma'}}}\sigma'(\Omega)
+
\cdots
$$

のように、同じ量子数を持つ CFT operators の混合として読む。large-$R$ limit では一番小さい $\Delta$ を持つ term が支配的になる。

したがって OPE extraction では、raw matrix element をそのまま universal number と読まない。probe normalization $c_\sigma$ などを消すために ratio を取る。典型例は

$$
\frac{\langle \sigma|n^z(\Omega)|\epsilon\rangle}
{\langle \sigma|n^z(\Omega)|0\rangle}
\to
f_{\sigma\sigma\epsilon}
$$

という読み方である。これは、state identification、probe selection、finite-size extrapolation がすべて揃って初めて CFT data になる。

### Correlators and defects

four-point correlator は、spectrum と OPE coefficients から作られる関数的な object である。fuzzy sphere の four-point paper を読むときは、まったく新しい種類の bulk conformal data を測っているというより、有限サイズ Hilbert space で得た operator probes と state sums から、cross-ratio-dependent correlator を再構成していると読む。

defect CFT では、bulk CFT の中に line や surface などの defect を入れる。すると、bulk local operator の spectrum だけでは理論を指定できなくなる。defect-local operators、bulk one-point coefficients、bulk-defect OPE coefficients が追加 data になる。fuzzy sphere では defect term を Hamiltonian に加えるため、defect spectrum は元の bulk Hamiltonian の追加 observable ではなく、defect 背景での別の state-operator correspondence として読む必要がある。

この違いは後で分けて扱う。bulk four-point correlator では複数の local operator insertion を組み合わせ、defect-local data では line defect によって残る対称性と defect operator を読む。

### Reading checklist

1. どの microscopic Hilbert space sector を CFT のどの symmetry sector と読んでいるか。
2. energy gap を $\Delta$ に直す scale を何で固定しているか。
3. primary identification が単一の energy level だけでなく descendant pattern に支えられているか。
4. local probe がどの CFT operator を leading component として含むか。
5. matrix element から universal coefficient を出すとき、どの ratio で非普遍的 normalization を消しているか。
6. finite-size correction を $R$、$N$、irrelevant operator、operator mixing のどれとして扱っているか。

### 未解決点

- $T_{\mu\nu}$ calibration は、finite-size spectrum のどの range で安定に働くのか。
- parity $P$ と microscopic particle-hole symmetry の対応は、Zhu et al. の convention をもう一度確認する必要がある。
- OPE extraction で使う tensor / spinning operator の angular factor は、scalar ratio の直感からどこで外れるか。
- conformal-generator papers では、primary 判定が multiplet pattern から $K_\mu|O\rangle\approx0$ の直接 check へどの程度移るのか。


## 2. Spherical Landau Levels

### 位置づけ

fuzzy sphere regularization の入口は、球面上の lowest Landau level (LLL) を有限次元の一粒子 Hilbert space として使うことにある。ここがわかると、「fuzzy sphere は格子化ではない」「有限サイズでも $SO(3)$ が保たれる」「orbital 数 $N_m=2s+1$ が cutoff になる」という説明が一つにつながる。

### Landau level cutoff

まず平面の Landau level を思い出す。2次元平面上の荷電粒子を一様磁場中に置くと、運動エネルギーのスペクトルは離散的な Landau level に分かれる。各 Landau level は大きな縮退を持つ。

直観的には、強い磁場が粒子の運動を cyclotron motion に分解し、低エネルギーでは cyclotron 励起を凍結して、残った guiding center の自由度だけを見る。

fuzzy sphere で使うのは、この球面版である。

球面 $S^2$ 上で一様磁場を作るには、球の中心に磁気単極子を置く。球面を貫く磁束を

$$
4\pi s
$$

と書く。ここで $s$ は半整数で、Dirac quantization により

$$
s \in \frac{1}{2}\mathbb{Z}
$$

となる。

この背景磁場中の荷電粒子の一粒子固有状態が、球面 Landau levels を作る。平面 Landau level と違って、球面は有限体積なので、各 Landau level の縮退度も有限になる。

最低 Landau level の縮退度は

$$
N_m = 2s+1.
$$

この $N_m$ が fuzzy sphere 文献でよく出てくる orbital 数である。

LLL の状態は

$$
m=-s,-s+1,\ldots,s
$$

でラベルできる。これは角運動量 $s$ の multiplet と同じ個数で、実際に LLL は $SO(3)$ の spin-$s$ 表現をなす。

ここが重要で、$m$ は「球面上の格子点番号」ではない。$N_m$ 個の orbital は有限個の自由度として使えるが、その全体が回転対称性の既約表現として変換する。

普通の格子正則化では、球面や平面を点の集合に置き換える。そのため連続回転対称性は有限サイズで壊れ、熱力学極限で回復することを期待する。球面 Landau level cutoff は違う。有限個の LLL orbital を残しても、それらは最初から $SO(3)$ 表現になっている。したがって有限サイズでも回転対称性を厳密に保てる。

fuzzy sphere が 3d CFT に向いている理由の一つはこれである。radial quantization では CFT を $S^2\times\mathbb{R}$ 上の Hamiltonian 問題として見るので、球面上の回転対称性 $SO(3)$ は CFT operator の spin と直接対応する。

### Wavefunctions

球面 Landau level の一粒子波動関数は、monopole background に合わせた球面調和関数、つまり monopole harmonics で書かれる。記号はいくつか流儀があるが、典型的には

$$
Y_{q,\ell,m}(\theta,\phi)
$$

のように書く。ここで $q$ は monopole charge、$\ell$ は全角運動量、$m$ はその $z$ 成分である。このノートの $s$ は、だいたいこの monopole charge $q$ に対応する。

monopole charge がない通常の球面調和関数では

$$
\ell=0,1,2,\ldots,\qquad m=-\ell,\ldots,\ell
$$

である。monopole charge が $s$ の sector では、最小の角運動量が $0$ ではなく $s$ になる。Landau level index を $n=0,1,2,\ldots$ とすると、

$$
\ell=s+n,\qquad m=-\ell,\ldots,\ell.
$$

したがって $n$ 番目の Landau level の縮退度は

$$
2\ell+1=2(s+n)+1.
$$

特に LLL は $n=0$ なので

$$
\ell=s,\qquad m=-s,\ldots,s,
$$

となり、縮退度は $2s+1$ になる。

LLL の波動関数は、球面の spinor coordinates

$$
u=\cos\frac{\theta}{2}e^{i\phi/2},\qquad
v=\sin\frac{\theta}{2}e^{-i\phi/2}
$$

を使うと見通しがよい。これは通常の一価な球面関数としての表示ではなく、monopole gauge を選んだときの局所的な波動関数表示だと思うのがよい。規格化を除けば、LLL basis は

$$
\psi_m(\theta,\phi)
\propto
u^{s+m}v^{s-m},
\qquad m=-s,\ldots,s.
$$

指数 $s+m$ と $s-m$ は非負整数で、その和は常に

$$
(s+m)+(s-m)=2s
$$

である。つまり LLL は、$u,v$ の次数 $2s$ の同次多項式全体として見られる。この空間の次元は

$$
2s+1
$$

で、spin-$s$ 表現そのものになっている。

ここで注意がいる。$u$ と $v$ は $\phi\to\phi+2\pi$ で

$$
u\to -u,\qquad v\to -v
$$

と変わる。したがって $u^{s+m}v^{s-m}$ は全次数 $2s$ のため、同じ変換で $(-1)^{2s}$ を拾う。$2s$ が奇数なら、この patch 表示の波動関数は符号が変わる。

これは矛盾ではない。monopole background では、波動関数を全球面上の普通の一価関数として扱うのではなく、gauge の貼り合わせ込みで扱う。物理的に必要なのは、patch 間の gauge transformation まで含めて一貫していることであり、その条件が $2s\in\mathbb{Z}$ という flux quantization と対応する。

この書き方では、$m=s$ の状態は $u^{2s}$、$m=-s$ の状態は $v^{2s}$ である。これらはそれぞれ北極・南極付近に重みを持つ。中間の $m$ は緯度方向に分布する。ただし、これらは厳密な位置固有状態ではない。$m$ basis は $L_z$ を対角化する便利な基底であり、「格子点」ではない。

この holomorphic な同次多項式表示は LLL に特有である。高い Landau level では

$$
\ell=s+n,\qquad n>0
$$

となるので、同じ monopole charge $s$ のもとで、角運動量だけが大きくなる。その波動関数は単に $u,v$ の次数 $2s$ の同次多項式では書けず、$\bar u,\bar v$ も含む monopole harmonics として現れる。

したがって、monopole harmonics 全体は

$$
Y_{s,\ell,m},\qquad \ell=s,s+1,s+2,\ldots,\qquad m=-\ell,\ldots,\ell
$$

でラベルされるが、fuzzy sphere regularization でまず残す一粒子空間は、そのうち

$$
\ell=s
$$

の LLL multiplet だけである。LLL が特別に扱いやすいのは、この部分だけが $u,v$ の holomorphic 同次多項式として閉じるからである。

### Monopole harmonics

普通の球面調和関数 $Y_{\ell m}$ は、monopole charge がない sector の角運動量固有関数である。monopole harmonics はその自然な拡張で、$q=0$ に戻すと通常の球面調和関数になる。

$$
Y_{0,\ell,m}(\theta,\phi)=Y_{\ell m}(\theta,\phi)
$$

という関係だと思えばよい。

monopole がない場合、波動関数は球面上の通常の scalar function であり、$Y_{\ell m}$ がその基底になる。monopole がある場合、荷電粒子の波動関数は gauge field に結合しているため、単一の全球的一価関数として書けるとは限らない。実際には gauge patch ごとの表示と、その重なりでの gauge transformation を合わせて考える。そのため微分演算子も普通の微分ではなく gauge-covariant derivative になる。

対応して、角運動量も素朴な orbital angular momentum

$$
\boldsymbol{L}=-i\boldsymbol{r}\times\nabla
$$

だけではなく、gauge field の寄与を含む conserved angular momentum を使う。半径 $R=1$、単位電荷、monopole flux $4\pi s$ という規約では、covariant derivative を

$$
D=\nabla-iA
$$

として、conserved angular momentum は典型的に

$$
\boldsymbol{J}=-i\,\boldsymbol{r}\times \boldsymbol{D}-s\,\hat{\boldsymbol{r}}
$$

と書ける。符号は電荷と monopole charge の規約で入れ替わるが、重要なのは gauge potential を含む微分と、monopole charge に比例する radial term が一緒に入ることである。この $\boldsymbol{J}$ は

$$
[J_i,J_j]=i\epsilon_{ijk}J_k
$$

を満たし、monopole harmonics は $\boldsymbol{J}^2,J_z$ の同時固有関数になる。

LLL の spinor-coordinate 表示では、この $\boldsymbol{J}$ は同次多項式に作用する微分演算子として

$$
J_z=\frac{1}{2}\left(u\partial_u-v\partial_v\right),
\qquad
J_+=u\partial_v,
\qquad
J_-=v\partial_u
$$

と書ける。

この表示を使うと、LLL basis が spin-$s$ multiplet であることはそのまま計算で見える。LLL は $u,v$ の次数 $2s$ の同次多項式空間

$$
\psi_m\propto u^{s+m}v^{s-m},
\qquad m=-s,\ldots,s
$$

として作れる。上の生成子を作用させると

$$
J_z\,u^{s+m}v^{s-m}=m\,u^{s+m}v^{s-m},
$$

かつ $J_\pm$ は $m$ を $\pm1$ だけ動かす。端では $J_+u^{2s}=0$、$J_-v^{2s}=0$ なので、次数 $2s$ の空間は spin-$s$ 表現として閉じる。Casimir はこの空間上で

$$
\boldsymbol{J}^2=s(s+1)
$$

を与える。monopole harmonics の言葉では、これが LLL の $\ell=s$ に対応する。

この違いのため、monopole がある場合には $\ell=0$ からではなく、$\ell=s$ から始まる。これが LLL の縮退度 $2s+1$ の直接の理由である。

fuzzy sphere で使う cutoff は、通常の scalar function の展開

$$
\bigoplus_{\ell=0}^{\infty} \mathrm{span}\{Y_{\ell m}\}
$$

を角運動量でそのまま切るものではない。monopole charge $s$ の sector に移り、その中の LLL

$$
\mathrm{span}\{\psi_m\}_{m=-s}^{s}.
$$

を一粒子 Hilbert space として残す。この意味で、通常の球面調和関数との関係は「同じ $SO(3)$ 表現論を使うが、背景 gauge flux が入った sector を使っている」と言うのが一番正確である。

### LLL projection

ここまでで見たのは一粒子問題である。full Hilbert space には LLL だけでなく、高い Landau level も含まれるため、全体としてはまだ無限次元である。一方、各 Landau level は有限縮退を持ち、それ自体が $SO(3)$ multiplet になっている。したがって、$SO(3)$ を保った有限自由度の regulator を作るには、Landau level を有限個だけ残せばよい。fuzzy sphere regularization では、その最小の選択として LLL だけを残す。

この時点で、一粒子 Hilbert space は

$$
\text{full one-particle Hilbert space on } S^2
\quad\longrightarrow\quad
\text{LLL Hilbert space of dimension } 2s+1.
$$

と置き換わる。多体系では、この有限個の orbital に粒子や flavor を入れて many-body Hilbert space を作る。

もし背後に full Hilbert space の Hamiltonian $H$ があり、それを低エネルギー側へ落とすと考えるなら、LLL 内に残る最初の項は

$$
H_{\rm proj}=P_{\rm LLL} H P_{\rm LLL}
$$

である。これは「LLL の中で始まり、LLL の中で終わる成分だけを残す」という意味での projected Hamiltonian である。

有限の Landau level gap では、高い Landau level への混合は相互作用の強さに応じて摂動的に残る。最初の補正として next Landau level の寄与を見るなら、LLL と next Landau level の energy separation を $\Delta_{\rm LL}$ とおいて、摂動展開として

$$
-
P_{\rm LLL}H(1-P_{\rm LLL})
\frac{1}{\Delta_{\rm LL}}
(1-P_{\rm LLL})HP_{\rm LLL}
$$

のような補正が出る。これは LLL から next Landau level に一度出て戻る virtual process が、$\Delta_{\rm LL}$ で抑えられるという見方である。LLL の中から見ると、相互作用係数のずれや、もともと書いていなかった多体相互作用として現れる。量子 Hall 系で Landau level mixing を低エネルギー有効 Hamiltonian に押し込む見方と同じ種類の話である。

fuzzy sphere の実際の model building では、full Hamiltonian から射影計算を始めるというより、LLL orbital 上に $SO(3)$ や内部対称性を保つ Hamiltonian を直接定義することが多い。最終的に見たいのは microscopic Hamiltonian そのものではなく、tune した先の IR critical theory である。だから、高い Landau level を積分して得られる細かい相互作用を第一原理的に全部決めることよりも、LLL 上の相互作用を選び、相図の中で目的の critical point に tune することが中心になる。

### Fuzzy sphere

普通の球面では、座標は可換な関数

$$
x_1,x_2,x_3,\qquad x_1^2+x_2^2+x_3^2=R^2
$$

である。これらは球面上の点を指定する classical coordinates であり、

$$
[x_i,x_j]=0
$$

である。

LLL に制限した後は、同じ座標関数を LLL Hilbert space 上の演算子として見る。つまり

$$
X_i=P_{\rm LLL}x_iP_{\rm LLL}
$$

を考える。$P_{\rm LLL}$ で挟むので、$X_i$ は $(2s+1)\times(2s+1)$ の有限次元行列になる。

この射影後の座標は、もとの $x_i$ のようには可換でない。LLL は spin-$s$ 表現なので、射影後の座標は角運動量行列と同じ構造を持ち、規格化を除けば

$$
X_i \sim \frac{R}{s}J_i
$$

のように振る舞う。したがって

$$
[X_i,X_j]\sim i\frac{R}{s}\epsilon_{ijk}X_k
$$

となる。有限の $s$ では座標が非可換な行列になり、$s\to\infty$ で右辺が小さくなって可換な球面座標に戻る。

この非可換性が短距離 cutoff を与える。つまり fuzzy sphere は、球面を小さい plaquette に分割するのではなく、座標関数の代数を有限次元行列で近似する。

この意味で「fuzzy」である。

ここまで見ると、LLL 後の一粒子 Hilbert space は結局

$$
\mathcal{H}^{\rm LLL}_s \simeq \text{spin-}s\text{ irrep of }SU(2)
$$

なので、はじめから spin-$s$ 表現で考えてもよいように見える。一粒子空間だけを抽象的に見るなら、それはほぼ正しい。

ただし、monopole sphere から構成すると、その spin-$s$ 表現に幾何学的な意味が付く。これは内部 spin ではなく、球面上の orbital space であり、$J_i$ は座標演算子 $X_i$ を作るための generator として読める。

多体系でもこの幾何学的な由来が効く。単に $2s+1$ 個の状態があるだけでは、どの相互作用が球面上で自然なのかが見えにくい。LLL on sphere として構成すると、density operator、relative angular momentum、pseudopotential などを使って、球面上の局所的な相互作用を LLL に射影したものとして Hamiltonian を設計できる。

つまり、monopole background 上の Landau level construction は、target CFT が物理的な背景磁場を持つという意味ではない。spin-$s$ 表現を、球面上の空間自由度の正則化として使うための幾何学的実現である。

### 3d CFT への接続

3d CFT を radial quantization で見ると、空間は $S^2$、時間は $\mathbb{R}$ である。

$$
S^2 \times \mathbb{R}.
$$

したがって、球面上に有限 Hilbert space を作り、そこに相互作用 Hamiltonian を置き、臨界点に tune できれば、CFT の spectrum を数値的に読むことができる。

このとき球面 Landau level は次の役割を果たす。

- $S^2$ 上の自由度を有限個の orbital に落とす。
- finite size でも $SO(3)$ を保つ。
- LLL projection により UV cutoff を入れる。
- $s$ を大きくしながら、低エネルギー data の extrapolation を行う。

ただし、$s$ を変えると monopole charge も LLL Hilbert space も変わる。したがって「同じ microscopic theory の cutoff を細かくする」というより、$s$ ごとに定義された Hamiltonian の列

$$
H_s(g_1,g_2,\ldots)
$$

を tune し、IR data が同じ CFT に近づくかを見る、という理解が近い。同じ理論かどうかは、microscopic interaction が文字通り同じかではなく、scaling dimensions や OPE data などの universal quantities が同じ極限に向かうかで判断する。

### 辞書

| Term | Meaning |
|---|---|
| monopole flux | 球面を貫く磁束。このノートでは $4\pi s$ と書く。 |
| $s$ | flux を決める半整数。同時に LLL orbital が作る spin 表現の値。 |
| LLL | lowest Landau level。fuzzy sphere で残す一粒子空間。 |
| $N_m=2s+1$ | LLL の orbital 数。 |
| orbital | LLL の基底状態。格子点ではなく $SO(3)$ multiplet の成分。 |
| monopole harmonics | monopole background 中の球面上の一粒子固有関数。普通の $Y_{\ell m}$ の monopole あり版。 |
| spinor coordinates | $u=\cos(\theta/2)e^{i\phi/2}$, $v=\sin(\theta/2)e^{-i\phi/2}$。LLL 波動関数を gauge patch で同次多項式として書くのに便利。 |
| pseudopotential | LLL 上の二体相互作用を relative angular momentum channel ごとに指定する量。 |
| LLL projection | 高い Landau level を捨て、有限次元 Hilbert space に制限する操作。 |
| fuzzy | LLL 射影後に座標が非可換な有限次元行列になること。 |


## 3. LLL Hamiltonian

### 位置づけ

spherical LLL は有限個の orbital を与えるが、それだけでは物理模型は決まらない。fuzzy sphere regularization で CFT data を読むには、その orbital 上に many-body Hamiltonian を置き、対称性を保ったまま相互作用を選び、パラメータを tune して目的の IR critical point に近づける必要がある。

このノートの目的は、「LLL Hilbert space がある」から「その上に Hamiltonian をどう設定するか」への橋を作ることである。

### Hamiltonian data

LLL の一粒子空間は

$$
m=-s,-s+1,\ldots,s
$$

でラベルされる $N_m=2s+1$ 個の orbital で張られる。many-body problem では、この orbital に粒子を入れるので、creation/annihilation operators

$$
c_m^\dagger,\qquad c_m
$$

を使って Hamiltonian を書く。

一体項の係数行列を $h$ と書く。これは一粒子 Hamiltonian を LLL orbital basis で見た行列要素で、

$$
h_{mm'}=\langle m|h|m'\rangle
$$

と書くと、最も一般的な一体項は

$$
H_1=\sum_{m,m'} h_{mm'}c_m^\dagger c_{m'}
$$

である。二体項までで打ち切って考えるなら、二粒子 Hilbert space 上の operator の行列要素を $V_{m_1m_2m_3m_4}$ として、一般の二体項は、規格化や反交換符号の流儀を除けば、

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

をどう選ぶかである。ここではまず二体項までを見る。

ただし、fuzzy sphere では適当に行列要素を選ぶわけではない。LLL orbital は spin-$s$ 表現なので、球面の回転対称性 $SO(3)$ を保つように $h$ や $V$ を制限する。ここが格子模型の「近接サイトに相互作用を書く」発想と違う。

### One-body terms

もし一種類の粒子だけを考え、full $SO(3)$ を保つなら、一体項は spin-$s$ multiplet の中で scalar でなければならない。Schur's lemma 的に言えば、既約表現の中で回転と可換な operator は単位行列に比例する。

つまり

$$
h_{mm'}=\epsilon\,\delta_{mm'}
$$

しか許されない。

この項は

$$
H_1=\epsilon \sum_m c_m^\dagger c_m
=\epsilon N
$$

であり、粒子数 $N$ が固定されている sector では定数にすぎない。

したがって、単一 species かつ固定粒子数で二体項までを見るなら、次に調べるべき非自明な部分は二体相互作用である。

複数 flavor や追加の内部自由度がある場合、一体項にも非自明な構造が入りうる。ただし、このノートではまず単一の spin-$s$ LLL multiplet に対して $SO(3)$ が何を制限するかを見る。

### Two-body channels

二体状態は、二つの spin-$s$ orbital を合成したものなので、表現論としては

$$
s\otimes s
=
0\oplus 1\oplus \cdots \oplus 2s
$$

に分解される。

二粒子 sector の basis vector は

$$
|s,m_1; s,m_2\rangle
$$

のようにラベルできる。ここで $s,m_1$ は、一つ目の粒子が spin-$s$ multiplet の $m_1$ 成分にあることを表す。identical boson / fermion では、実際には適切に対称化または反対称化された二粒子 sector を使う。

回転対称性を見るには total angular momentum basis

$$
|L,M\rangle
$$

を使う方が自然である。両者は Clebsch-Gordan coefficient で結ばれる。

ここで $\langle s,m_1; s,m_2 | L,M\rangle$ は、二つの spin-$s$ 表現の product state を total angular momentum $(L,M)$ に合成する Clebsch-Gordan coefficient である。

$$
|L,M\rangle
=
\sum_{m_1,m_2}
\langle s,m_1; s,m_2 | L,M\rangle
|s,m_1; s,m_2\rangle.
$$

二粒子 sector 上で、total angular momentum $L$ の部分空間への projector を

$$
P_L
=
\sum_{M=-L}^{L}
|L,M\rangle\langle L,M|
$$

と定義する。

orbital labels で見れば、ここor の行列要素は

$$
\langle s,m_1; s,m_2|P_L|s,m_3; s,m_4\rangle
=
\sum_M
\langle s,m_1; s,m_2|L,M\rangle
\langle L,M|s,m_3; s,m_4\rangle
$$

で与えられる。実際の second-quantized Hamiltonian では、ここor の行列要素が $V_{m_1m_2m_3m_4}$ の構成要素になる。

回転不変な二体相互作用は、$M$ に依存せず、total $L$ channel ごとの係数だけで指定できる。つまり二粒子 sector 上の interaction kernel は

$$
h^{(2)}=\sum_L V_L P_L
$$

と書ける。ここで $V_L$ がその channel の相互作用強度である。このように二体相互作用を angular momentum channel ごとに指定する係数の集合を、量子 Hall や fuzzy sphere の文脈では Haldane pseudopotential、または単に pseudopotential と呼ぶ。

この $h^{(2)}$ の matrix element を second-quantized form に持ち上げると、前に書いた $V_{m_1m_2m_3m_4}$ を持つ二体 Hamiltonian になる。

### Pseudopotentials

Pseudopotential は、real-space potential を LLL に射影した後の二体相互作用を channel ごとに並べたものである。局所性は、この係数列のパターンとして現れる。

平面上の短距離相互作用なら、二粒子が近い配置に大きなエネルギーを与える。LLL では「二粒子が近い」という情報は relative angular momentum channel に翻訳される。relative angular momentum が小さい channel ほど、二粒子が近づく成分を多く含む。

$$
m_{\rm rel}=0,1,2,\ldots
$$

したがって、短距離 repulsion は低い $m_{\rm rel}$ channel の pseudopotential を大きくする形で表される。例えば contact-like な相互作用なら、最小の $m_{\rm rel}$ channel だけ、または少数の低い $m_{\rm rel}$ channel だけを強く penalize する、という見方になる。

球面では relative angular momentum を total angular momentum $L$ から

$$
m_{\rm rel}:=2s-L
$$

と定義する。したがって低い $m_{\rm rel}$ は大きい total $L$ に対応する。$V_{m_{\rm rel}}$ と書かれている場合は、同じ channel を total-$L$ 表示で $V_{L=2s-m_{\rm rel}}$ と読めばよい。

したがって、pseudopotential は局所性そのものではないが、局所的・短距離的な相互作用が LLL 射影後にどの relative channel を penalize するかを表す。

### Density operators

density-density 型の相互作用を書きたいときは、number density の spherical harmonic component を使うと便利である。

LLL には sharp な位置基底がないので、点 $\Omega$ での密度は overcomplete な LLL coherent state $\lvert \Omega\rangle$ を使って読む。ここで $\lvert \Omega\rangle$ は、spin-$s$ multiplet の最高ウェイト状態を回転して、向き $\Omega$ に局在させた状態である。

LLL orbital を $a,b=-s,\ldots,s$ でラベルし、

$$
\psi_a(\Omega)=\langle \Omega|a\rangle
$$

と書くと、coherent-state density probe は

$$
n(\Omega)
=
\sum_{a,b}
\psi_a^*(\Omega)\psi_b(\Omega)
c_a^\dagger c_b
$$

の形を持つ。これは正規直交な位置基底での点密度ではなく、LLL に射影された smeared な density probe である。

このノートでは、その spherical harmonic component を

$$
n_{\ell q}
=
\int d\Omega\,
Y_{\ell q}(\Omega)n(\Omega)
$$

と定義すると、

$$
n_{\ell q}
=
\sum_{a,b}
(Y_{\ell q})_{ab}
c_a^\dagger c_b
$$

となる。ここで

$$
(Y_{\ell q})_{ab}
=
\int d\Omega\,
\psi_a^*(\Omega)Y_{\ell q}(\Omega)\psi_b(\Omega)
$$

である。これは、関数 $Y_{\ell q}$ を掛ける一体 operator を LLL orbital basis に制限した行列要素である。表現論的には、固定した $\ell$ に対する $\{n_{\ell q}\}_{q=-\ell}^{\ell}$ は rank-$\ell$ tensor operator として変換する。

density-density 型の相互作用を $SO(3)$ scalar にするには、この rank-$\ell$ tensor の $q$ 成分を縮約する。例えば

$$
H_{nn}
=
\sum_{\ell,q} g_\ell\, :n_{\ell q}^\dagger n_{\ell q}:
$$

のように書ける。$g_\ell$ は number-density の angular momentum component ごとの結合であり、$q$ に依存させないことで回転対称性を保つ。$:\cdots:$ は normal ordering で、ここでは二体項として読むために一体の自己項を分けている。

この density-density 型の表示は、二体相互作用を $SO(3)$ covariant に書く別の方法だと見ればよい。

### Ising への接続

ここでは、Hamiltonian construction の最初の具体例として 3d Ising fuzzy sphere を見る。ここでの目標は microscopic Hamiltonian そのものを神聖視することではない。重要なのは、対称性を持つ有限サイズ Hamiltonian の列

$$
H_s(g_1,g_2,\ldots)
$$

を作り、パラメータを tune した先の低エネルギー spectrum が 3d Ising CFT の conformal spectrum に近づくかである。

そのため、Hamiltonian construction で読むべき点は次の三つである。

第一に、どの自由度を使うか。つまり orbital 数 $N_m=2s+1$、particle number、flavor、fermion/boson の区別である。

第二に、どの対称性を保つか。少なくとも fuzzy sphere の利点である $SO(3)$ は保つ。Ising を狙うなら、CFT 側の基本対称性である $\mathbb{Z}_2$ が microscopic Hamiltonian 側でどう実現されているかも確認する。その他の model-specific な対称性は、具体的な Ising Hamiltonian を読む段階で扱う。

第三に、どの interaction parameters を tune するか。CFT 側では relevant operator による perturbation を調整して critical point に行く。fuzzy sphere 側では、microscopic interaction の係数を調整して、低エネルギー spectrum が CFT data に合う点を探す。

### 未解決点

このノートで整理したのは一般原理であり、具体的な Ising fuzzy sphere Hamiltonian の詳細はまだ読んでいない。

次に確認すべきことは、

- Zhu et al. (2023) が実際にどの species / filling / interaction を使うか。
- その Hamiltonian が number-density operator で書かれているのか、pseudopotential で書かれているのか。
- tuning parameter が何で、critical point をどう同定するか。
- FuzzifiED.jl では同じ Hamiltonian をどの API で作るか。
- 小さい $s$ で、$s\otimes s$ の channel decomposition を実際に計算できるか。

である。

### 辞書

| Term | Meaning |
|---|---|
| orbital basis | LLL の $m=-s,\ldots,s$ でラベルされた一粒子基底。実装に近い。 |
| creation operator | orbital $m$ に粒子を作る operator $c_m^\dagger$。 |
| two-body matrix element | $V_{m_1m_2m_3m_4}$。二体相互作用を orbital basis で指定する係数。 |
| total angular momentum channel | 二粒子状態を $\lvert L,M\rangle$ に分解したときの $L$ sector。 |
| projector $P_L$ | 二粒子 total angular momentum $L$ sector への射影 operator。 |
| pseudopotential | 二体相互作用を angular momentum channel ごとに指定する係数。局所性そのものではなく、射影後の相互作用の整理方法。 |
| number-density operator $n_{\ell q}$ | 粒子数密度の spherical harmonic component を LLL に射影した operator。 |
| tuning parameter | microscopic Hamiltonian の係数。critical point へ近づけるために調整する。 |


## 4. 3d Ising spectrum

### 位置づけ

fuzzy sphere regularization が 3d CFT の研究で重要なのは、連続回転対称性を保った有限サイズの量子多体系から、CFT の演算子スペクトルを読める可能性があるからである。Zhu et al. (2023) は、その代表例として 3d Ising CFT を扱う。

このノートでは、まず CFT 側で何を読むのかを固定し、その後で fuzzy sphere がそれをどう有限サイズの Hamiltonian 問題に置き換えるのかを見る。先に regulator の構成だけを見ると、$L$、energy gap、$\mathbb{Z}_2$ sector が何のためのラベルなのかが見えにくい。

### CFT 側

3d CFT では、局所演算子が理論の基本データを担う。代表的なデータは、scaling dimension、spin、対称性での変換性、OPE coefficient などである。このノートでまず見るのは、そのうち spectrum に関係する部分である。

state-operator correspondence を使うと、平坦空間の原点に挿入した局所演算子は、$S^2 \times \mathbb{R}$ 上の状態に対応する。ここで $\mathbb{R}$ は radial quantization の時間方向であり、$S^2$ は原点を囲む球面である。

この対応により、CFT 演算子の scaling dimension $\Delta$ は、球面上の Hamiltonian のエネルギーに対応する。球面半径を $R$ とすると、

$$
E_\alpha - E_0 \sim \frac{\Delta_\alpha}{R}
$$

となる。$1/R$ は、無次元量である $\Delta$ を、半径 $R$ の球面上のエネルギーに直すための次元換算である。$R=1$ の規約では、単に $E=\Delta$ と書ける。

同じ対応で、CFT 演算子の spin は、対応する球面上の状態がどの $SO(3)$ 表現に属するかとして現れる。したがって、球面上の状態を全角運動量 $L$ で分類できれば、それを CFT 演算子の spin と比べられる。

### Ising 自由度

Zhu et al. (2023) では、LLL 上に二成分 fermion を置く。この二成分は、monopole の Zeeman field と結合する物理スピンではなく、Ising 自由度を作るための pseudospin と考える。各 Landau orbital $m$ に

$$
\mathbf{c}_m =
\begin{pmatrix}
c_{m\uparrow} \\
c_{m\downarrow}
\end{pmatrix}
$$

を置く。

この模型では、二成分を含めた LLL 全体の半分を埋める。軌道は $2s+1$ 個、pseudospin は $\uparrow,\downarrow$ の二成分なので、一粒子状態は全部で $2(2s+1)$ 個ある。そのうち

$$
N = 2s+1
$$

個の fermion を入れる。つまり、LLL orbital 数と同じ数の fermion を入れるが、各 fermion は $\uparrow/\downarrow$ のどちらかを取れる。

この条件を置くと、強磁性的な極限で

$$
|\Psi_\uparrow\rangle=\prod_{m=-s}^{s} c^\dagger_{m\uparrow}|0\rangle,
\qquad
|\Psi_\downarrow\rangle=\prod_{m=-s}^{s} c^\dagger_{m\downarrow}|0\rangle
$$

という二つの状態が自然に出る。どちらも「全 orbital を一つの pseudospin 成分でちょうど埋める」状態であり、$\mathbb{Z}_2$ 変換で互いに入れ替わる。このため、charge の総数を固定したまま、$\uparrow/\downarrow$ の向きだけを Ising order parameter として扱える。

以後の spectrum analysis では、この半充填の固定粒子数空間で低エネルギー状態を見る。つまり、total charge は固定し、$\uparrow/\downarrow$ の偏りを Ising order parameter として読む。

この模型の Ising $\mathbb{Z}_2$ は、二成分 pseudospin の交換として入る。

$$
\mathbf{c}_m \mapsto \sigma^x \mathbf{c}_m
$$

これは各 orbital で $\uparrow$ と $\downarrow$ を入れ替える対称性である。

Hamiltonian はこの $\mathbb{Z}_2$ を保つように作られている。相互作用には pseudospin の $z$ 成分を使った Ising ferromagnetic term があり、さらに $\sigma^x$ に比例する transverse field が入る。schematic には、

$$
H = H_{00} + H_{zz} + H_t,
\qquad
H_t \sim -h \sum_m \mathbf{c}_m^\dagger \sigma^x \mathbf{c}_m
$$

という構造である。ここでは、$H_{00}+H_{zz}$ が pseudospin の向きをそろえる相互作用、$H_t$ が $\uparrow$ と $\downarrow$ を混ぜる transverse field だと読めばよい。詳しい式は次の節で見る。

order parameter は pseudospin の $z$ 成分で、

$$
M = \sum_{m=-s}^{s} \mathbf{c}_m^\dagger \frac{\sigma^z}{2} \mathbf{c}_m
$$

と書ける。この $M$ は fermion を作ったり消したりする演算子ではない。固定した半充填 sector の中で、$\uparrow$ と $\downarrow$ の偏りを測る双線形演算子である。したがって、Ising order parameter として追う揺らぎは total charge を変えない particle-hole 型の pseudospin 励起になる。LLL 上の fermion は regularization のための自由度であり、IR で Ising CFT として読む対象は、この charge-neutral な pseudospin sector である。

$h=0$ では、全 orbital が $\uparrow$ にそろった状態と、全 orbital が $\downarrow$ にそろった状態が二つの縮退基底状態になる。これらは $\mathbb{Z}_2$ 変換で互いに入れ替わるので、基底状態を一つ選ぶと $\mathbb{Z}_2$ が自発的に破れた Ising ferromagnet になる。$h$ が大きいと、各 orbital で $\uparrow+\downarrow$ 型の重ね合わせが好まれ、$\mathbb{Z}_2$ を保つ paramagnet になる。この二つの相の間の連続転移を 3d Ising critical point として読む。

この実装を踏まえると、論文の spectrum analysis に出てくる $\mathbb{Z}_2$ sector は抽象的な後付けラベルではない。微視的模型の $\mathbf{c}_m \mapsto \sigma^x \mathbf{c}_m$ で定義される対称性の even / odd sector を、そのまま IR の Ising CFT の even / odd sector と対応させている。

### Hamiltonian

前の節の schematic を、論文本文の orbital-basis 表示に対応させる。この論文の LLL 射影後の Hamiltonian は

$$
H = H_{00}+H_{zz}+H_t .
$$

である。各項は

$$
\begin{aligned}
H_{00}
&=
\frac{1}{2}
\sum_{m_1,m_2,m_3,m_4=-s}^{s}
V_{m_1m_2m_3m_4}
\left(\mathbf{c}_{m_1}^\dagger \mathbf{c}_{m_4}\right)
\left(\mathbf{c}_{m_2}^\dagger \mathbf{c}_{m_3}\right)
\delta_{m_1+m_2,m_3+m_4}, \\
H_{zz}
&=
-\frac{1}{2}
\sum_{m_1,m_2,m_3,m_4=-s}^{s}
V_{m_1m_2m_3m_4}
\left(\mathbf{c}_{m_1}^\dagger \sigma^z \mathbf{c}_{m_4}\right)
\left(\mathbf{c}_{m_2}^\dagger \sigma^z \mathbf{c}_{m_3}\right)
\delta_{m_1+m_2,m_3+m_4}, \\
H_t
&=
-h
\sum_{m=-s}^{s}
\mathbf{c}_m^\dagger \sigma^x \mathbf{c}_m .
\end{aligned}
$$

$V_{m_1m_2m_3m_4}$ は、球面上の同じ短距離二体相互作用を LLL orbital basis に射影した行列要素である。$H_{00}$ はこの行列要素を total density channel に、$H_{zz}$ は pseudospin-$z$ density channel に入れている。つまり、$V_0,V_1$ は $H_{00}$ 用と $H_{zz}$ 用の別係数ではなく、この共有された二体相互作用の Haldane pseudopotential である。

論文の実空間表示は

$$
n^0(\Omega_a)n^0(\Omega_b)-n^z(\Omega_a)n^z(\Omega_b)
$$

である。LLL 射影後にはこの二つの項が $H_{00}$ と $H_{zz}$ になり、$H_{00}$ は正、$H_{zz}$ は負の符号を持つ。ここで

$$
n^\alpha(\Omega)
=
\begin{pmatrix}
\psi_\uparrow^\dagger(\Omega) &
\psi_\downarrow^\dagger(\Omega)
\end{pmatrix}
\sigma^\alpha
\begin{pmatrix}
\psi_\uparrow(\Omega) \\
\psi_\downarrow(\Omega)
\end{pmatrix},
\qquad
\sigma^0=I
$$

である。したがって

$$
n^0=n_\uparrow+n_\downarrow,
\qquad
n^z=n_\uparrow-n_\downarrow
$$

であり、$n^z$ には spin operator のような $1/2$ は含まれていない。

実際の計算では、この pseudopotential を $V_0,V_1$ に絞る。$V_1=1$ をエネルギー単位に固定し、$V_0$ と transverse field $h$ を動かして相図を調べる。

$H_{00}+H_{zz}$ の pseudospin 構造は、直感的には二つのサイト $i,j$ に対する

$$
\frac{1-Z_i Z_j}{2}
$$

に近い。$Z=\pm 1$ を $\uparrow/\downarrow$ の向きだと思えば、この量は同じ向きでは $0$、逆向きでは $1$ になる。実際、

$$
\frac{1}{2}\left(n_i^0 n_j^0-n_i^z n_j^z\right)
=
n_{i\uparrow}n_{j\downarrow}+n_{i\downarrow}n_{j\uparrow}
$$

なので、逆向き pseudospin の pair だけが相互作用エネルギーを持つ。このエネルギーを避けるために pseudospin がそろう、という意味で Ising ferromagnetic term になっている。$H_t$ は transverse field で、$\uparrow$ と $\downarrow$ を混ぜる。

### Spectrum table

Hamiltonian construction が分かっても、それだけでは fuzzy sphere から 3d Ising CFT のデータを読んだことにはならない。次の段階は、有限サイズ spectrum の各状態を、$\sigma,\epsilon,T,\epsilon',T'$ などの CFT operator とその descendants に対応づけることである。

critical point 近くで exact diagonalization した低エネルギー状態は、$SO(3)$ spin $L$、Ising $\mathbb{Z}_2$、spacetime parity $P$ で分類される。CFT 側では、これらを operator の $SO(3)$ spin $\ell$、$\mathbb{Z}_2$ parity、spacetime parity と読む。

energy gap から scaling dimension $\Delta$ を読むには、全 spectrum に非普遍的な scale factor をかける。CFT 側では、sphere Hamiltonian は dilatation operator と

$$
H-E_0 \sim \frac{v}{R}D
$$

のように対応する。ここで $v/R$ は microscopic Hamiltonian の normalization に依存するので、有限サイズ spectrum だけから絶対値としては決まらない。

Zhu et al. (2023) では、この scale を energy-momentum tensor $T_{\mu\nu}$ で固定する。$T_{\mu\nu}$ は任意の local 3d CFT にある conserved spin-2 primary で、$\mathbb{Z}_2=+1$、$P=+1$、$\ell=2$、protected dimension $\Delta_T=3$ を持つ。したがって、target が 3d Ising CFT であるという前提のもとで、$(+,+,\ell=2)$ sector の低い spin-2 state を $T_{\mu\nu}$ candidate として使い、その gap が $\Delta=3$ になるように spectrum 全体を rescale する。

これは「量子数だけでその state が自動的に $T_{\mu\nu}$ と証明される」という意味ではない。stress-tensor calibration は、既知または期待される CFT に protected operator があることを使った normalization choice であり、その後に他の primary / descendant multiplets が正しい spin と $\Delta$ shift で並ぶかを check する。後続の fuzzy-sphere 論文でも、時間発展や correlator の radius を決めるときに $\sigma$ や $T_{\mu\nu}$ の既知 $\Delta$ を使う方法が採られており、conformal-generator の構成では microscopic Hamiltonian density と CFT の $T_{00}$ の対応が finite-size で補正を受けることも明示されている。

論文の main table では、$N=16$ の fuzzy-sphere spectrum から次の primary operators が同定されている。

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

表にはさらに高い primary や、parity-odd primary の $\epsilon^{P-}$、$\sigma^{P-}$ も載っている。ただし、最初に読むべきなのは、低い primary とその conformal multiplet の対応である。

この対応は、あとで OPE coefficients を読むときの入力にもなる。例えば $\langle\sigma|n^z|\epsilon\rangle$ のような matrix element は、finite-size spectrum のどの状態を $\lvert \sigma\rangle$、$\lvert \epsilon\rangle$ と読むかに依存する。ただし、このノートで先に固定したいのは個別 operator の対応表ではなく、energy gap、$L$、$\mathbb{Z}_2$、$P$、stress-tensor calibration、descendant pattern が、どの仮定と check によって CFT data として読まれているかである。

### Primary 判定

operator identification は、単に「各 $L$ sector の低い state を既知の operator に対応させる」作業ではない。大事なのは、CFT で operator に $\partial_\mu$ を作用させることが、$S^2$ Hilbert 空間では primary state から descendant state を作る操作として現れる、という点である。

radial quantization では、局所 primary operator $O(0)$ が sphere 上の state $\lvert O\rangle$ に対応する。平坦空間での derivative descendant

$$
\partial_\mu O(0)
$$

は、状態側では translation generator $P_\mu$ を作用させた

$$
P_\mu |O\rangle
$$

に対応する。$P_\mu$ は spin-1 の generator で、dimension を 1 上げる。

球面上で書くと、$P_\mu$ は局所的な「球面微分」そのものではない。まず $T_{00}(\Omega)$ は、CFT を cylinder $\mathbb{R}\times S^2$ 上で radial quantization したときの energy density である。$\Omega$ は $S^2$ 上の点、$0$ は cylinder time 方向を表す。これを球面全体で積分したものが、時間発展の generator、つまり dilatation generator になる。

$$
D=\int_{S^2} d\Omega\,T_{00}(\Omega)
$$

fuzzy sphere の有限サイズ Hamiltonian では、この CFT の $T_{00}(\Omega)$ が最初から厳密に与えられているわけではない。実際にあるのは microscopic Hamiltonian density $h(\Omega)$ であり、

$$
H=\int_{S^2}d\Omega\,h(\Omega)
$$

となるように Hamiltonian の one-body / two-body terms を球面上の density として書き直す。Ising fuzzy sphere なら、schematic には

$$
h(\Omega_1)
=
-h\,n^x(\Omega_1)
+
\int_{S^2}d\Omega_2\,U(\Omega_{12})
\left[
n^0(\Omega_1)n^0(\Omega_2)
-
n^z(\Omega_1)n^z(\Omega_2)
\right]
$$

のような形である。細かい係数や symmetrization は convention に依存するが、考え方は「Hamiltonian density を球面上の局所密度として選ぶ」ことである。

critical point の IR では、この $h(\Omega)$ が

$$
T_{00}(\Omega)\sim \alpha h(\Omega)+\text{irrelevant / total-derivative terms}
$$

のように対応すると期待する。この対応にも有限サイズ補正や改善項の曖昧さがある。

次に、$P_\mu$ を球面 Hilbert 空間上の generator として表す。平坦空間 $\mathbb{R}^3$ の translation と special conformal transformation の conformal Killing vectors は

$$
v_{P_\mu}=\partial_\mu,
\qquad
v_{K_\mu}=-x^2\partial_\mu+2x_\mu x^\nu\partial_\nu
$$

である。radial quantization で $r=e^\tau$ として cylinder $\mathbb{R}\times S^2$ に移り、unit sphere $x^2=1$ 上で見ると、この二つの和の時間方向成分が

$$
v_{P_\mu}+v_{K_\mu}=2x_\mu(\Omega)\partial_\tau
$$

になる。対応する保存電荷は、conformal Killing vector を stress tensor に contraction して球面上で積分したものである。ここでは時間方向成分だけが必要なので、

$$
P_\mu+K_\mu
=
2\int_{S^2} d\Omega\,x_\mu(\Omega)T_{00}(\Omega)
$$

が得られる。さらに conformal algebra の $[D,P_\mu]=P_\mu$、$[D,K_\mu]=-K_\mu$ を使うと、$X_\mu=(P_\mu+K_\mu)/2$ に対して

$$
P_\mu=X_\mu+[D,X_\mu],
\qquad
K_\mu=X_\mu-[D,X_\mu]
$$

と分離できる。ここで $x_\mu(\Omega)$ は $\ell=1$ spherical harmonics の実基底なので、$X_\mu=\int_{S^2}d\Omega\,x_\mu(\Omega)T_{00}(\Omega)$ は $T_{00}$ の $\ell=1$ projection である。

この段階ではまだ CFT 側の式である。fuzzy sphere の有限系で使うには、$D$ を $\alpha(H-E_0)$、$T_{00}$ を $\alpha h(\Omega)$ に置き換える。ここで $\alpha$ は、たとえば stress tensor candidate の gap が $\Delta_T=3$ になるように決める spectrum normalization factor である。すると

$$
\widetilde X_\mu
=
\alpha\int_{S^2}d\Omega\,x_\mu(\Omega)h(\Omega)
$$

が microscopic な $X_\mu$ candidate になる。$E_0$ は定数なので commutator から落ちる。したがって有限 Hilbert 空間上では $[\alpha H,\widetilde X_\mu]$ を計算し、

$$
\widetilde P_\mu=\widetilde X_\mu+[\alpha H,\widetilde X_\mu],
\qquad
\widetilde K_\mu=\widetilde X_\mu-[\alpha H,\widetilde X_\mu]
$$

を作る、という順番である。

このため、ED spectrum では「primary の energy から 1 だけ上がったところに、spin が vector product の規則に従って現れる states」が descendant の候補になる。

ただし Zhu et al. (2023) の main spectrum analysis では、microscopic Hilbert 空間で $P_\mu$ を直接作って作用させているわけではない。まずは conformal representation theory が予測する descendant の energy / spin / parity pattern を列挙し、ED spectrum の states がその pattern を満たすかを調べている。後続の conformal-generator 論文では、この $P_\mu$ や $K_\mu$ に対応する microscopic operator を構成して、primary 判定をより直接に行う。

原理的には、$K_\mu$ が分かれば primary 判定は直接になる。CFT では primary state は

$$
K_\mu |O\rangle=0
$$

で定義されるので、有限 fuzzy sphere 上では

$$
\mathcal N_{K\psi}
=
\|\widetilde K_\mu|\psi\rangle\|^2
$$

が小さい state を primary candidate として選べる。ただし $\widetilde K_\mu$ は microscopic Hamiltonian density から作る近似的な generator なので、有限サイズでは厳密に 0 になるとは限らない。したがって実際には、multiplet pattern による同定と、$\mathcal N_{K\psi}$ の小ささを組み合わせて見る。

これは $T_{\mu\nu}$ を使った $\Delta$ normalization の危うさも少し減らす。$(\mathbb{Z}_2=+1,P=+1,\ell=2)$ の低い state を $T_{\mu\nu}$ として使うだけだと、既知の Ising spectrum への依存が残る。そこに、$T_{\mu\nu}$ が conserved spin-2 primary であり short multiplet を持つこと、さらにその state で $\mathcal N_{K\psi}=\|\widetilde K_\mu|\psi\rangle\|^2$ が小さいことを確認できれば、calibration state としての同定がより強くなる。

scalar primary $O$ の descendants は、schematic には

$$
\partial_{\nu_1}\cdots\partial_{\nu_j}\square^n O,
\qquad
(\Delta,\ell)\mapsto(\Delta+2n+j,j)
$$

である。ここで論文の記号に従い、$\square=\partial^2$ は 3d Euclidean space の Laplacian を表す。したがって scalar primary は、予測できる spin と energy shift の塔を作る。例えば、

| primary | descendant | expected $(\Delta,\ell)$ |
|---|---|---|
| $\sigma$ | $\partial_\mu\sigma$ | $(\Delta_\sigma+1,1)$ |
| $\sigma$ | $\square\sigma$ | $(\Delta_\sigma+2,0)$ |
| $\sigma$ | $\partial_{\mu_1}\partial_{\mu_2}\sigma$ | $(\Delta_\sigma+2,2)$ |
| $\epsilon$ | $\partial_\mu\epsilon$ | $(\Delta_\epsilon+1,1)$ |
| $\epsilon$ | $\square\epsilon$ | $(\Delta_\epsilon+2,0)$ |

spinning primary $O_{\mu_1\cdots\mu_\ell}$ では、derivative が spin を上げるだけでなく、index contraction によって spin を下げる descendant も出る。また、$\varepsilon_{\mu\nu\rho}$ を含む descendant は spacetime parity $P$ を反転させる。このため、parity-even の spinning primary から parity-odd descendant が出ることがある。

stress tensor $T_{\mu\nu}$ は conserved operator なので特別である。

$$
\partial_\mu T_{\mu\nu}=0
$$

を満たすため、generic な spin-2 primary よりも descendant が少ない short multiplet になる。spectrum 上で $T_{\mu\nu}$ を同定するときは、$\Delta_T=3$ の calibration だけでなく、この short multiplet structure も check になる。

論文の practical algorithm は次のように読める。

1. 各 $\mathbb{Z}_2=\pm1$ sector で、まだ multiplet に割り当てていない lowest state を primary candidate にする。
2. その candidate の $\Delta,\ell,P$ から、3d conformal representation theory が予測する descendants を列挙する。
3. 対応する states が ED spectrum に出ているかを、finite-size drift を許して確認する。
4. primary と descendants をまとめて一つの conformal multiplet として spectrum から取り除く。
5. 残った states に同じ手順を繰り返す。

この意味で、$\sigma$ と $\epsilon$ は同定しやすい。odd / even sector の最も低い scalar primary であり、descendant tower も単純だからである。高い operator では、単一の energy level が bootstrap 値に近いことだけでは不十分で、multiplet 全体の pattern が合っているかを見る必要がある。

### 未解決点

- stress-tensor calibration は、spectrum normalization の選択、$T_{\mu\nu}$ の同定、finite-size consistency check のどこまでを担っているのか。
- primary / descendant pattern は、読者にどこまで representation theory として説明し、どこから Zhu et al. の spectrum table の経験的照合として扱うべきか。
- spacetime parity $P$ は、この読解ノートではどの程度まで microscopic symmetry として説明する必要があるか。particle-hole symmetry との関係は、本文に入れるべきか、下流の詳細確認に回すべきか。
- FuzzifiED または小さい ED 例で、$N$、sector、$L^2$、energy、parity labels が実際にどう出力され、このノートの語彙とどう対応するか。
- full primary table の再現や、各 primary の descendant match の clean / noisy 判定は、このノートの橋が固まった後の下流検証として扱う。


## 5. OPE data

### 位置づけ

Spectrum analysis では、fuzzy sphere の有限サイズ Hamiltonian から CFT primary の scaling dimension と spin を読む。次の段階である OPE extraction は、同じ Hilbert space の中で local microscopic operator の matrix element を測り、それを CFT の三点関数係数、つまり OPE coefficient に変換する方法である。

ここで重要なのは、OPE coefficient が単なる追加の数値ではなく、CFT を定義する conformal data の半分だという点である。scaling dimension が「どんな operator があるか」を教えるなら、OPE coefficient は「operator 同士を掛けたとき、どの channel にどれだけ流れるか」を教える。

### CFT 側

CFT の primary operator は、二点関数の normalization を固定すると、三点関数の形が conformal symmetry によってほぼ固定される。scalar primary だけなら、schematic には

$$
\langle \phi_\alpha(x_1)\phi_\beta(x_2)\phi_\gamma(x_3)\rangle
=
\frac{f_{\alpha\beta\gamma}}
{|x_{12}|^{\Delta_\alpha+\Delta_\beta-\Delta_\gamma}
 |x_{23}|^{\Delta_\beta+\Delta_\gamma-\Delta_\alpha}
 |x_{31}|^{\Delta_\gamma+\Delta_\alpha-\Delta_\beta}}
$$

と書ける。この係数 $f_{\alpha\beta\gamma}$ が OPE coefficient である。同じ係数は、operator product expansion

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

は許される。一方で、$\mathbb{Z}_2$ parity が奇数個だけ odd になる三点係数は消える。

Hu, He, Zhu (2023) がやっていることは、Euclidean flat space 上の三点関数を直接測ることではない。radial quantization で局所 operator を sphere 上の状態に変換し、$S^2$ 上の同時刻 matrix element を測って、そこから同じ $f_{\alpha\beta\gamma}$ を読む。

この見方にすると、三点関数の難しさが

$$
\langle \phi_\alpha | \mathcal{O}(\Omega) | \phi_\gamma\rangle
$$

という量子力学的な matrix element の計算に置き換わる。ここで $\lvert \phi_\alpha\rangle$ と $\lvert \phi_\gamma\rangle$ は spectrum extraction で同定した CFT states であり、$\mathcal{O}(\Omega)$ は fuzzy sphere の microscopic probe である。具体例は $n^z(\Omega)$、$n^x(\Omega)$、$O_\epsilon(\Omega)$ などである。

### Matrix elements

以後の $R$ は radial quantization で使う sphere radius である。fuzzy sphere の有限サイズは LLL orbital 数

$$
N=2s+1
$$

で指定される。球半径は $R\sim\sqrt{s}$ なので、大きい $N$ は大きい $R$ と同じ極限を表す。したがって

$$
R^{-2}\sim s^{-1}\sim N^{-1}
$$

であり、leading finite-size correction はしばしば $1/N$ correction として fit される。

まず、microscopic probe と CFT operator を分けておく。$\mathcal{O}(\Omega)$ は fuzzy sphere の有限 Hilbert space 上で定義された局所的な probe である。例えば $n^z(\Omega)$ は pseudospin density であって、CFT operator $\sigma(\Omega)$ そのものではない。

critical point の IR では、$\mathcal{O}$ は同じ量子数を持つ CFT operators の和として読める。OPE extraction で使うのは、この和のうち $R\to\infty$ で最も遅く減衰する leading term である。

$$
\mathcal{O}(\Omega)
=
\sum_{\beta\in{\rm primaries}}
\frac{c_\beta}{R^{\Delta_\beta}}
\phi_\beta(\Omega)
+\text{descendant and finite-size corrections}
$$

と書く。ここで $\phi_\beta$ は CFT の primary scaling operator、$c_\beta$ は選んだ microscopic probe に依存する非普遍的な overlap である。$\sigma'$ や $\sigma_{\mu\nu}$ のような高い primary も、量子数が合えばこの $\beta$ の和に含まれる。$R^{-\Delta_\beta}$ は、dimensionless な microscopic operator と scaling dimension $\Delta_\beta$ の CFT operator を対応させるための半径依存を表している。重要なのは、$\mathcal{O}$ と同じ $\mathbb{Z}_2$、spin、parity を持つ CFT operators だけがこの和に入れることである。

同じ量子数の中で最も小さい $\Delta_\beta$ を持つ operator が、large-$R$ limit の leading contribution になる。例えば odd scalar probe なら、通常は $\sigma$ が最初に残り、$\sigma'$ などは $R^{-(\Delta_{\sigma'}-\Delta_\sigma)}$ だけ余分に抑えられる。したがって fuzzy sphere の有限サイズデータでは、この leading piece に近づく様子を見て、$R\to\infty$ へ外挿する。

CFT 側では、primary states の間に CFT operator を挟んだ matrix element は、三点関数と同じ情報を持つ。したがって、$\phi_\beta$ を挟むと

$$
\langle \phi_\alpha|\phi_\beta(\Omega)|\phi_\gamma\rangle
\propto
f_{\alpha\beta\gamma}
$$

となる。比例係数には、operator dimensions、spin、挿入点 $\Omega$、spherical harmonic convention で決まる既知の角度因子が含まれる。scalar で同じ点・同じ component を比較する場合、この因子は ratio で消えるか、簡単な既知係数として扱える。

これを microscopic probe の展開に戻すと、

$$
\langle \phi_\alpha|\mathcal{O}(\Omega)|\phi_\gamma\rangle
=
\sum_\beta
\frac{c_\beta f_{\alpha\beta\gamma}}
{R^{\Delta_\beta}}
+\text{corrections}
$$

の形になる。実際には角度因子や tensor factor が付くが、ここでは scalar OPE の ratio を理解するために省いている。

OPE extraction の中心は、$R\to\infty$ で残る leading CFT operator の overlap $c_\beta$ を、matrix element の比で消すことにある。

例えば $n^z(\Omega)$ が $\sigma$ を強く含むなら、

$$
\langle \sigma|n^z(\Omega)|0\rangle
\sim
\frac{c_\sigma}{R^{\Delta_\sigma}}
$$

であり、

$$
\langle \sigma|n^z(\Omega)|\epsilon\rangle
\sim
\frac{f_{\sigma\sigma\epsilon}c_\sigma}{R^{\Delta_\sigma}}
$$

となる。したがって

$$
\frac{\langle \sigma|n^z(\Omega)|\epsilon\rangle}
{\langle \sigma|n^z(\Omega)|0\rangle}
\to
f_{\sigma\sigma\epsilon}
$$

が得られる。これは OPE coefficient の universal な部分だけを取り出し、microscopic normalization を ratio で消す操作である。

### Local probes

monopole background 上の一粒子波動関数は、monopole harmonics

$$
Y_{s,\ell,m}(\theta,\phi),
\qquad
\ell=s,s+1,\ldots,\qquad m=-\ell,\ldots,\ell
$$

と書く。ここで最初の $s$ は monopole charge、$\ell$ は全角運動量、$m$ はその $z$ 成分である。LLL は $\ell=s$ の multiplet だけなので、orbital は $m=-s,\ldots,s$ でラベルされる。

LLL orbital の coherent-state wavefunction を

$$
\psi_m(\Omega)=\langle \Omega|m\rangle
$$

と書く。これは、規格化と gauge patch の規約を除けば LLL monopole harmonic $Y_{s,s,m}(\Omega)$ と同じ情報を持つ。二成分 Ising model では、pseudospin index を $\alpha=\uparrow,\downarrow$ として、LLL に射影された field probe を

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

であり、通常の spherical harmonics で

$$
n^a(\Omega)
=
N\sum_{\ell=0}^{2s}\sum_{q=-\ell}^{\ell}
n^a_{\ell q}Y_{\ell q}(\Omega)
$$

と展開される。ここで $Y_{\ell q}$ は monopole charge のない通常の spherical harmonic であり、$Y_{s,\ell,m}$ とは別物である。$q$ を使うのは、LLL orbital label $m$ と混同しないためである。

Hu, He, Zhu (2023) で中心になる probe は次の三つである。

| microscopic probe | symmetry | leading CFT content |
|---|---|---|
| $n^z(\Omega)$ | $\mathbb{Z}_2$ odd | $\sigma$ plus odd primaries / descendants |
| $n^x(\Omega)$ | $\mathbb{Z}_2$ even | $\epsilon$ plus even primaries / descendants |
| $O_\epsilon(\Omega)=H(\Omega)+2h n^x(\Omega)$ | $\mathbb{Z}_2$ even | improved $\epsilon$ probe |

ここで $H(\Omega)$ は Hamiltonian density で、

$$
\int d\Omega\,H(\Omega)=H
$$

を満たすように定義される。

$n^z$ を $\sigma$ そのものと同一視してはいけない。正確には、$n^z$ は $\sigma$、$\sigma_{\mu\nu}$、$\sigma'$、それらの descendants など、同じ symmetry を持つ CFT operators の混合である。ただし large $R$ では最も低い dimension を持つ $\sigma$ が支配的になるため、matrix element の leading scaling から $\sigma$ channel を抽出できる。

同じく $n^x$ や $O_\epsilon$ も $\epsilon$ そのものではない。$\epsilon$ を leading component とする even probe である。複数の microscopic probes から同じ OPE coefficient が出るかどうかは、systematic error の check になる。

### Extraction steps

Hu, He, Zhu (2023) の計算は、概念的には次の順番で読める。

1. Ising critical point に Hamiltonian を tune する。
2. ED または DMRG で低エネルギー spectrum と eigenstates を得る。
3. Spectrum extraction で $\lvert 0\rangle$、$\lvert \sigma\rangle$、$\lvert \epsilon\rangle$、$\lvert T_{\mu\nu}\rangle$、$\lvert \epsilon'\rangle$、$\lvert \sigma'\rangle$、$\lvert \sigma_{\mu\nu}\rangle$ などを同定する。
4. 測りたい OPE coefficient に合う microscopic probe を選ぶ。
5. $\langle \phi_\alpha|\mathcal{O}|\phi_\gamma\rangle$ と normalization 用の $\langle \phi_\beta|\mathcal{O}|0\rangle$ を計算する。
6. Ratio を取り、非普遍的な operator normalization を消す。
7. finite-size data を $R\to\infty$ へ外挿する。実用上は $R^{-2}\sim1/N$ を fit variable にする。
8. 別 probe、別 fit window、既知 bootstrap value と比較して error を見積もる。

Hu, He, Zhu (2023) では、ED は $N=18$ まで、DMRG はいくつかの量で $N=48$ まで使われている。

OPE extraction は spectrum extraction より一段 fragile である。理由は二つある。

第一に、state の同定を間違えると matrix element の意味が変わる。OPE extraction は spectrum extraction の上に乗っている。

第二に、求めたい値は raw matrix element ではなく、$R\to\infty$ の leading-channel intercept である。local probe には同じ symmetry の primary や descendants が混ざるので、$\langle \sigma|n^z|0\rangle R^{\Delta_\sigma}$ や $\langle \epsilon|n^x|0\rangle R^{\Delta_\epsilon}$ が定数へ近づくかを見ながら、fit window や補正形への依存を評価する必要がある。

### Example: $f_{\sigma\sigma\epsilon}$

$n^z(\Omega)$ は $\mathbb{Z}_2$ odd なので、$R\to\infty$ の leading term には最も低い odd scalar である $\sigma$ が現れる。finite size では descendants や irrelevant-operator mixing 由来の correction が入るため、

$$
\langle \sigma|n^z(\Omega)|0\rangle
=
\frac{1}{R^{\Delta_\sigma}}
\left(
c_\sigma+\frac{a_1}{R^2}+O(R^{-4})
\right)
$$

と期待される。

一方で、

$$
\langle \sigma|n^z(\Omega)|\epsilon\rangle
=
\frac{1}{R^{\Delta_\sigma}}
\left(
f_{\sigma\sigma\epsilon}c_\sigma+\frac{b_1}{R^2}+O(R^{-4})
\right)
$$

なので、比を取ると

$$
\frac{\langle \sigma|n^z(\Omega)|\epsilon\rangle}
{\langle \sigma|n^z(\Omega)|0\rangle}
=
f_{\sigma\sigma\epsilon}
+\frac{A}{R^2}
+O(R^{-4})
$$

となる。$A$ は descendant correction の詳細に依存する非普遍的な係数である。したがって $1/N$ に対して線形 extrapolation し、$R\to\infty$ に対応する intercept を取ると、$f_{\sigma\sigma\epsilon}$ が得られる。

Hu, He, Zhu (2023) の報告値は

$$
f_{\sigma\sigma\epsilon}\approx 1.0539(18)
$$

であり、bootstrap value $1.0519$ とよく合う。

この例は OPE extraction の最小単位である。必要なのは、三つの local operators を同時に測ることではなく、二つの CFT states と一つの microscopic local probe の matrix element を測ること。三点関数の係数が、sphere Hilbert space の matrix element に圧縮されている。

### Spinning operators

$T_{\mu\nu}$ や $\sigma_{\mu\nu}$ のような spinful primary を含む OPE coefficient では、matrix element に角度依存がある。そのため、球面上で spherical harmonics に射影して、対応する spin component を取り出す。

代表例として、$f_{\sigma\sigma T}$ では、schematic に

$$
\frac{
\langle \sigma|
\int d\Omega\,\overline{Y}_{2,0}(\Omega)n^z(\Omega)
|T,m=0\rangle}
{
\langle \sigma|
\int d\Omega\,\overline{Y}_{0,0}(\Omega)n^z(\Omega)
|0\rangle}
\times
\text{known tensor factor}
\to
f_{\sigma\sigma T}
$$

の形になる。Hu, He, Zhu (2023) の convention では、この known tensor factor が $\sqrt{15/8}$ として現れる。

spinning OPE では、値そのものだけでなく convention を読む必要がある。どの $m$ component を使うか、どの spherical harmonic normalization を使うか、stress tensor をどう normalized するかで、式の見た目が変わる。

したがって最初の読書では、spinning OPE の細かい係数を暗記するよりも、次の点を確認するのがよい。

- angular dependence は spherical harmonic projection で消す。
- Wigner-Eckart 的に、特定の component の matrix element から reduced coefficient を読む。
- scalar の ratio と同じく、microscopic probe の非普遍的 normalization は denominator で消す。
- tensor convention が違う論文同士では、数値を直接比較できない場合がある。

### Low-lying data

Hu, He, Zhu (2023) で報告された主な OPE coefficients は次の通り。

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

この表で使われている primary dimensions は、おおよそ

$$
\Delta_\sigma\approx0.51815,\quad
\Delta_\epsilon\approx1.4126,\quad
\Delta_{\epsilon'}\approx3.8297,\quad
\Delta_{\sigma'}\approx5.2906,\quad
\Delta_T=3,\quad
\Delta_{\sigma_{\mu\nu}}\approx4.1803.
$$

概念的にいちばん重要なのは、fuzzy sphere が既知の bootstrap numbers を再現することだけではない。もちろんそれは validation として重要だが、より強い点は、$T_{\mu\nu}$ や高い primary を含む、標準的な bootstrap table では扱いにくい OPE coefficients へ microscopic model から直接アクセスできることである。

ここで最初に読むときの target は次でよい。

1. Reproduce the logic of $f_{\sigma\sigma\epsilon}$.
2. Understand why $n^z$ and $n^x/O_\epsilon$ isolate odd and even channels.
3. Understand how spherical harmonic projection enters $f_{\sigma\sigma T}$.
4. Only after that, read the full table as a data product.

### Reading checklist

- OPE coefficients are universal only after CFT operator normalization is fixed.
- Microscopic probes have nonuniversal overlaps $c_\alpha$ with CFT operators.
- Ratio formulas are designed to cancel these nonuniversal overlaps.
- Descendants generate finite-size corrections, often organized as powers of $R^{-2}\sim N^{-1}$.
- Higher primaries with the same symmetry also contaminate finite-size data.
- Spinning operators require angular projection and tensor-normalization conventions.

この extraction は、三層の対応として理解すると混乱しにくい。

| layer | object | role |
|---|---|---|
| microscopic fuzzy sphere | $H$, $\lvert \psi\rangle$, $n^a(\Omega)$ | computable finite Hilbert-space data |
| radial quantization | $\lvert \phi_\alpha\rangle$, $\langle\phi_\alpha|\mathcal{O}|\phi_\gamma\rangle$ | bridge from states to CFT operators |
| CFT data | $\Delta_\alpha$, $f_{\alpha\beta\gamma}$ | universal output |

多くの混乱は、一層目と三層目を混ぜるところから来る。例えば、$n^z$ は CFT operator $\sigma$ そのものではない。$\sigma$ を IR 展開に含む microscopic probe である。同様に、OPE coefficient は raw matrix element ではない。normalization cancellation と finite-size extrapolation の後に残る universal intercept である。

### 未解決点

- In the paper's supplemental material, what exactly fixes the improvement choice $O_\epsilon(\Omega)=H(\Omega)+2h n^x(\Omega)$?
- Which finite-size correction powers are predicted by descendants, and which are empirical fit choices?
- How are signs of OPE coefficients fixed in the fuzzy sphere convention? In particular, what phase conventions are used for states like $\lvert \sigma'\rangle$?
- For $T_{\mu\nu}$, how does the normalization convention compare with conformal bootstrap conventions?
- Can a small FuzzifiED example compute the spherical harmonic components $n^a_{\ell q}$ and a simple matrix element, even if system sizes are too small for a serious extrapolation?
- How does the later conformal-generator paper improve primary-state identification before OPE extraction?


## 6. Bulk correlators

### 位置づけ

bulk CFT は、原理的には spectrum と OPE coefficients で指定される。したがって four-point function は、完全な conformal data から独立した追加データではない。重要なのは、fuzzy sphere で得た有限サイズの states と local probes から、cross ratios に依存する CFT correlator がどう再構成されるかである。

このノートでは、four-point correlator を「3-point では足りないから足す observable」としてではなく、bulk conformal data が関数として組み上がることを直接検査する対象として読む。

### CFT 側

identical scalar の four-point function の非自明な部分は、schematic には

$$
g(u,v)=\sum_{\mathcal{O}} f_{\phi\phi\mathcal{O}}^2\,G_{\Delta,\ell}(u,v)
$$

のように conformal block expansion で書ける。ここで $\Delta,\ell$ は exchanged primary operator の spectrum data、$f_{\phi\phi\mathcal{O}}$ は OPE coefficient である。

したがって、four-point correlator を読むときの問いは「新しい種類の CFT data は何か」ではない。問いは、有限サイズ fuzzy sphere で得た状態・operator probe・normalization が、CFT の cross-ratio-dependent function として整合的に組み上がるかである。

### Fuzzy sphere 側

radial quantization では、four-point function の一部の insertion を外部状態にし、残りを cylinder 上の operator insertion として扱える。

$$
\langle O_4(\infty)O_3(1)O_2(z,\bar z)O_1(0)\rangle
\quad\leftrightarrow\quad
\langle O_4|\,O_2(\tau,\theta)\,O_3(0)\,|O_1\rangle .
$$

ここで $(\tau,\theta)$ が cross-ratio data を表す。fuzzy sphere では、外部状態は低エネルギー eigenstates、operator insertion は microscopic local probe として実装される。

Han, Hu, Zhu, He はこの方法で次の correlator を扱う。

- $\langle \sigma\sigma\sigma\sigma\rangle$
- $\langle \sigma\sigma\epsilon\epsilon\rangle$
- $\langle \sigma\sigma T_{\mu\nu}T_{\rho\eta}\rangle$

### 未解決点

- finite-size fuzzy sphere data から $g(u,v)$ をどう正規化しているのか。
- 直接測った four-point function と conformal block reconstruction はどこまで比較されているのか。
- crossing symmetry は finite-size extrapolation 後に見るのか、有限 $N$ の consistency check として見るのか。
- $\sigma$、$\epsilon$、$T_{\mu\nu}$ を probe する microscopic operators は何か。


## 7. Defect CFT

### 位置づけ

defect CFT は、bulk CFT の中に置いた line、surface、impurity などが IR で作る conformal fixed point を調べる枠組みである。このノートでは、Hu, He, Zhu の magnetic line defect を、3d Ising CFT に局所的な magnetic perturbation を入れたときの defect fixed point として読む。

この論文で扱うのは、bulk CFT に局所的な perturbation を入れたとき、それが IR で conformal defect fixed point に流れるか、そしてその fixed point の data をどう読むかである。bulk theory そのものの conformal data は spectrum と OPE coefficients で指定されるが、defect を入れると、それだけでは足りない。defect 上に住む operator、bulk operator の one-point function、bulk operator が defect に近づいたときの bulk-defect OPE が新しく必要になる。

fuzzy sphere で重要なのは、defect を「格子上の境界」ではなく、radial quantization 後の $S^2$ 上の localized perturbation として扱える点である。これにより、bulk の球面幾何と angular momentum の構造をかなり保ったまま、defect fixed point の spectrum と correlator data を読むことができる。

### Paper

このノートで読む主な対象は、Hu, He, Zhu の magnetic line defect paper である。

- 論文: "Solving Conformal Defects in 3D Conformal Field Theory using Fuzzy Sphere Regularization"
- arXiv: https://arxiv.org/abs/2308.01903
- Published: Nature Communications 15, 3659 (2024)
- DOI: https://doi.org/10.1038/s41467-024-47978-y

### Defect perturbation

bulk spectrum や bulk OPE を読むときは、critical point に tune した同じ Hamiltonian の低エネルギー Hilbert space を CFT data として読む。defect CFT では、Hamiltonian に localized perturbation を加える。したがって、調べているのは元の bulk Hamiltonian の追加 observable ではなく、defect term を含む別の Hilbert space problem である。

generic な local defect は、bulk の空間対称性や内部対称性を一部破る局所 perturbation である。conformal defect は、その perturbation が IR で scale / conformal symmetry を持つ defect fixed point に流れたものを指す。magnetic line defect の読解で見るべきなのは、局所的な magnetic perturbation が IR で conformal defect として振る舞うかである。

schematic には、bulk CFT に $p$ 次元 defect を入れる変形は

$$
H_{\rm CFT}
\quad\longrightarrow\quad
H_{\rm CFT}
+ h_d \int_{\rm defect} d^p x\, O(x)
$$

のように書ける。magnetic line defect の場合、defect は一次元であり、3d Ising CFT の order-parameter channel、つまり $\sigma$ 型の perturbation に結合する。

この変形が IR で消えてしまう場合、defect は trivial になる。一方、非自明な fixed point に流れる場合、bulk CFT とは別に defect CFT data を持つ。Hu, He, Zhu の論文が示そうとしているのは、3d Ising CFT の magnetic line defect がこの非自明な conformal defect fixed point に流れ、その data を fuzzy sphere から読めるということである。

### Line defect

flat space の line defect を radial quantization に移すと、時間方向は radial direction になり、空間断面は $S^2$ になる。ここで扱う defect は、radial quantization の中心を通る line defect である。この位置関係が重要である。

一般に、中心を通る $p$ 次元 defect は cylinder 上で

$$
\mathbb{R}_\tau \times S^{p-1}
$$

として見える。$\mathbb{R}_\tau$ は radial time、$S^{p-1}$ は各 $S^2$ slice と defect の交わりである。

line defect は $p=1$ なので、各 $S^2$ slice との交わりは

$$
S^{p-1}=S^0
$$

である。$S^0$ は二点集合である。具体的には、原点中心の各 $S^2$ slice は中心を通る line defect と二点で交わり、この二点を north pole と south pole に取る。したがって、cylinder $S^2\times\mathbb{R}$ 上では、defect は north/south pole に沿って time direction に伸びる二本の $0+1$d impurity line として見える。

Hamiltonian は固定した radial-time slice 上の generator なので、fuzzy sphere 側ではその slice 上の二点に局在した項として入る。schematic には

$$
\int_{-\infty}^{\infty} dx\,O(x)
\quad\longrightarrow\quad
\int d\tau\,[O_N(\tau)+O_S(\tau)]
$$

であり、Hamiltonian の中では $O_N+O_S$ という二点の局所項として現れる。

したがって fuzzy sphere 側で変えるものは Hilbert space の幾何ではなく Hamiltonian である。LLL orbital から作る同じ many-body Hilbert space を使い、bulk critical Hamiltonian $H_0$ に defect term $H_d$ を足して

$$
H_{\rm defect}=H_0+H_d
$$

を対角化する。論文では、この defect term は schematic に

$$
H_d
=
2\pi h_d
\left[
n^z(\theta=0,\varphi=0)
+
n^z(\theta=\pi,\varphi=0)
\right]
$$

と書ける。これは $S^2$ 上の north/south pole における Ising order-parameter density $n^z$ への pinning field である。$h_d$ が impurity strength を制御する。

この項は bulk の $\mathbb{Z}_2$ symmetry を defect で明示的に破り、defect 上で $\sigma$ channel を有効にする。論文では、この $\sigma$ deformation が line defect 上で relevant なので、系が非自明な conformal defect fixed point に流れると読む。

supplement では、large $h_d$ limit を LLL orbital basis でさらに単純化している。pole-localized term は端の monopole orbital だけに作用し、

21942
H_d
=
\frac{h_d}{2}
\left(
\hat c_s^\dagger \sigma^z \hat c_s
+
\hat c_{-s}^\dagger \sigma^z \hat c_{-s}
\right)
21942

となる。したがって $h_d\to\infty$ では、$m=\pm s$ の二つの端 orbital の spin を固定して計算できる。この pinned-orbital picture は、point impurity が LLL projection 後にどれだけ局所的な Hilbert-space constraint として現れるかを示している。

### Symmetry

defect がない 3d CFT では、Euclidean conformal group は $SO(4,1)$ である。line defect を入れると、line に沿った conformal transformations と、line に垂直な rotations だけが残る。したがって、期待される defect conformal symmetry は

$$
SO(2,1)\times O(2)
$$

である。

fuzzy sphere の spectrum で見るべきことは、defect term を入れた Hamiltonian の低エネルギー準位が、この残った symmetry に合う形で並ぶかである。bulk operator の場合は $SO(3)$ spin $L$ で multiplet を読むが、line defect では defect に沿った scaling dimension と、defect に垂直な $O(2)$ charge / angular momentum が主要なラベルになる。

このため、defect spectrum を bulk spectrum と同じ表として読んではいけない。defect 背景の低エネルギー state は、bulk local operator ではなく、defect 上の local operator に対応する。

### Defect state-operator correspondence

bulk CFT の radial quantization では、原点に bulk local operator を挿入すると $S^2$ 上の state ができる。Hamiltonian は radial time translation の generator なので、その state の energy gap を bulk operator の scaling dimension として読む。

defect CFT では、同じ radial quantization を defect がある背景で行う。line defect が radial direction に沿って原点を通っていると、各 $S^2$ slice は north/south pole で defect と交わる。そのため量子化する Hilbert space は、defect term を含む Hamiltonian の Hilbert space になる。

このとき対応する operator は、bulk の点 operator ではなく、defect 上の radial-time origin に挿入される defect-local operator である。したがって

21942
|\hat O\rangle_{\rm defect}
\quad\leftrightarrow\quad
\hat O(0)|\hat 1\rangle
21942

であり、defect Hamiltonian の energy gaps が defect operator dimensions $\hat\Delta$ を与える。ここで $\lvert \hat 1\rangle$ は defect が入った背景の ground state であって、defect なしの CFT vacuum ではない。

これが、displacement operator のような defect-local operator が finite-size spectrum の中に現れる理由である。spectrum に出るのは「bulk displacement field」ではなく、defect を横方向に動かす変形に対応する defect-sector state である。

### Defect spectrum

Hu, He, Zhu は、magnetic line defect について六つの low-lying defect primary operators を同定し、その中に displacement operator を含めている。

displacement operator は、defect CFT で特別な operator である。defect がない bulk CFT では、translation symmetry に対応して stress tensor が保存する。

$$
\partial_\mu T^{\mu i}=0 .
$$

line defect を置くと、defect に沿った translations は残るが、defect を横方向に動かす translations は破れる。そのため、stress tensor の保存則は defect 上で接触項を持つ。schematic には、defect を $x_\perp=0$ に置いたとき、

$$
\partial_\mu T^{\mu i}(x)
=
\delta^{(2)}(x_\perp)\,D^i(x_\parallel)
$$

のように書ける。ここで $i$ は defect に垂直な方向、$D^i$ が displacement operator である。つまり $D^i$ は、defect を横方向へ少し動かす変形に対応する defect-local operator であり、broken transverse translation の Ward identity に現れる。

3d の line defect では、displacement operator の dimension は symmetry により

$$
\Delta_D = 2
$$

と期待される。したがって、spectrum の中にこの operator とその descendant structure が見えることは、defect fixed point の emergent conformal symmetry を検査する重要な check になる。

読むときは、次の区別を保つ。

| bulk spectrum | defect spectrum |
|---|---|
| bulk local primary を読む | defect local primary を読む |
| $SO(3)$ spin $L$ が基本ラベル | residual $O(2)$ quantum number が基本ラベル |
| stress tensor など bulk protected operator が calibration/check に使われる | displacement operator が conformal defect の check になる |

### Bulk one-point function

defect がない CFT vacuum では、非自明な primary operator の one-point function は通常消える。defect があると、defect が位置と方向を選ぶため、bulk primary の one-point function が許される。

line defect からの垂直距離を $r_\perp$ とすると、scalar bulk primary $O$ の one-point function は defect conformal symmetry により

$$
\langle O(x)\rangle_{\rm defect}
=
\frac{a_O}{|x_\perp|^{\Delta_O}}
$$

のような形に固定される。ここで $a_O$ は one-point coefficient であり、defect CFT data の一部である。

fuzzy sphere では、bulk probe を defect 背景の ground state で測ることで、この one-point data に対応する量を読む。ここでも注意点は bulk OPE と同じで、microscopic probe は CFT operator そのものではない。$n^z$ や $n^x$ などの local probe が、IR でどの CFT operator に overlap しているかを見て正規化する必要がある。

### Bulk-defect OPE

defect があると、bulk operator は defect に近づく極限で defect operators に展開できる。

$$
O_{\rm bulk}(x_\parallel,x_\perp)
\sim
\sum_{\hat O}
b_{O\hat O}
|x_\perp|^{\hat\Delta-\Delta_O}
\hat O(x_\parallel).
$$

ここで $\hat O$ は defect operator、$\hat\Delta$ はその scaling dimension、$b_{O\hat O}$ は bulk-defect OPE coefficient である。

これは bulk OPE coefficient $f_{ijk}$ とは別の data である。bulk OPE は bulk operator 同士を近づけたときの展開であり、bulk-defect OPE は bulk operator を defect に近づけたときの展開である。

fuzzy sphere での対応は、bulk probe と defect-sector state の matrix element / correlator を測り、defect conformal symmetry が固定する距離依存を取り除いて coefficient を抽出する、という形になる。詳細な ratio や normalization convention は論文本文で確認する。

### Reading order

この論文を読むときは、結果表から先に入るより、次の順で見る方が混乱が少ない。

1. magnetic line defect が、全ての $S^2$ time slices の north/south pole に置かれた時間非依存 Hamiltonian term として入ること。
2. $h_d$ を変えたとき、IR fixed point への flow をどう判断しているか。
3. defect spectrum をどの residual symmetry label で整理しているか。
4. defect 付き state-operator correspondence により、defect Hamiltonian の state を defect-local operator として読む理由。
5. displacement operator をどう同定しているか。
6. bulk one-point function の形と coefficient extraction。
7. bulk-defect two-point function / bulk-defect OPE coefficient の normalization。

特に、defect spectrum を bulk spectrum table の延長として読まないことが重要である。defect term を入れた時点で、読んでいる Hilbert space と operator dictionary が変わっている。

### 未解決点

- pole-localized density $n^z(\theta=0,\varphi=0)$ と $n^z(\theta=\pi,\varphi=0)$ は、large $h_d$ limit では $m=\pm s$ orbital pinning に落ちる。有限 $h_d$ で同じ fixed point に流れる根拠は、$h_d$ 依存性の解析と $h_d=\infty$ spectrum の比較でどう示されているのか。
- $h_d$ の sign と normalization は、defect fixed point の同定にどう影響するのか。
- defect spectrum の energy scale は、論文本文では bulk CFT の velocity を使う。supplement にある displacement calibration との一致は、どの範囲の operators で確認されているのか。
- defect primaries と descendants の integer spacing は、有限 size data からどの程度 clean に読めるのか。
- displacement operator の同定は、$\Delta_D=2$ への接近だけでなく、$L_z=\pm1$ quantum number や descendant pattern でも確認されているのか。
- one-point coefficient と bulk-defect OPE coefficient の normalization は、bulk OPE coefficient extraction とどこまで同型なのか。
- reported defect data は、Monte Carlo、epsilon expansion、bootstrap など既存手法とどこで比較されているのか。


## References

- Zhu, Han, Huffman, Hofmann, He, "Uncovering conformal symmetry in the 3D Ising transition: State-operator correspondence from a fuzzy sphere regularization," Phys. Rev. X 13, 021009 (2023). arXiv: https://arxiv.org/abs/2210.13482
- Hu, He, Zhu, "Operator Product Expansion Coefficients of the 3D Ising Criticality via Quantum Fuzzy Sphere," Phys. Rev. Lett. 131, 031601 (2023). arXiv: https://arxiv.org/abs/2303.08844
- Han, Hu, Zhu, He, "Conformal four-point correlators of the 3D Ising transition via the quantum fuzzy sphere," Phys. Rev. B 108, 235123 (2023). arXiv: https://arxiv.org/abs/2306.04681
- Hu, He, Zhu, "Solving Conformal Defects in 3D Conformal Field Theory using Fuzzy Sphere Regularization," Nature Communications 15, 3659 (2024). arXiv: https://arxiv.org/abs/2308.01903
