## Chern–Gauss–Bonnetの定理

曲面では、各点の曲率を面全体で積分すると、Euler標数の$2\pi$倍になることをすでに見た。曲面を滑らかに変形すると曲率の分布は変わるが、この積分は変わらない。場所ごとの曲がり方を足し合わせた量が、面全体の位相を捉えているのである。この局所と大域の結びつきを、今度は量子力学の経路積分から導こう。曲面で見た関係が、高次元ではどのような曲率の組合せになるのかも、同じ計算から明らかになる。

目標は、曲率とEuler標数を結ぶChern–Gauss–Bonnetの定理

$$
\chi(M)=\int_M\operatorname{Eu}(TM)
\tag{cgb-goal}
$$

を、向き付けられたコンパクトで境界のない偶数次元Riemann多様体$M$について導くことである。Euler形式$\operatorname{Eu}(TM)$は曲率から作られる最高次数の微分形式であり、曲面では$K\,d\operatorname{vol}_g/(2\pi)$になる。以下の計算では、この形式を曲率から具体的に求める。

### Witten指数の経路積分

前章の関数による変形を外して$h=0$とし、$H=\Delta/2$を考える。形式次数の偶奇を$(-1)^F$で表すと、Witten指数は

$$
I(\tau)=\operatorname{Tr}\!\left[(-1)^F e^{-\tau H}\right]=\chi(M)
\tag{cgb-heat-index}
$$

だった。正エネルギーの偶・奇の状態は、同じ重みで逆符号に寄与して打ち消し合う。従って指数は虚時間$\tau>0$によらない。

このtraceを経路の和へ移そう。微分形式の成分をフェルミオンの状態として表すと、位置と内部状態をもつ粒子として扱える。traceは、各状態から出発して同じ状態へ戻る虚時間発展の振幅を足す操作であり、ここでは形式次数の偶奇に応じて符号をつける。時間発展を短い区間に分け、区間の間に位置とフェルミオン状態の完全系を挿入すると、途中の状態の和が経路の積分になる。位置の始点と終点は同じなので、足し合わせる位置の経路は閉じている。

各経路の重みを定める作用を与えよう。$n=\dim M$とし、局所正規直交枠$e_a$を選ぶ。フェルミオンの生成・消滅演算子$\hat\psi^{\dagger a},\hat\psi^a$は、この枠での外積と内部積を表し、$\{\hat\psi^a,\hat\psi^{\dagger b}\}=\delta^{ab}$を満たす。経路積分では、これらを独立なGrassmann変数$\bar\psi^a,\psi^a$で表す。Grassmann変数は互いに反交換し、一つの変数の二乗は零である。

曲率は前章と同じく$[\nabla_i,\nabla_j]v^k=R^k{}_{\ell ij}v^\ell$で定め、$R_{abcd}=\langle e_a,R(e_c,e_d)e_b\rangle$とする。$\nabla_i e_b=\omega_i{}^a{}_b e_a$で接続係数を定めると、Euclidean作用は

$$
\begin{aligned}
S_E&=\int_0^\tau du\,\left[
\frac12g_{ij}\dot x^i\dot x^j
+\bar\psi^aD_u\psi^a
+\frac14R_{abcd}\bar\psi^a\bar\psi^b\psi^c\psi^d\right],\\
D_u\psi^a&=\dot\psi^a+\dot x^i\omega_i{}^a{}_b\psi^b.
\end{aligned}
\tag{cgb-euclidean-action}
$$

である。$u$は経路上の虚時間、ドットは$u$微分を表し、$\hbar=1$とする。第一項は位置の運動、第二項は経路に沿うフェルミオンの輸送、第三項は曲率による相互作用である。この作用のHamiltonianからの導出は、次の補足にまとめる。

フェルミオンの通常のtraceでは、Grassmann変数の終点は始点の逆符号になる。$(-1)^F$の挿入によってこの符号がもう一度反転するので、指数ではフェルミオンの変数も始点と終点で同じ値を取る。この周期条件の導出も補足で扱う。従って指数は

$$
I(\tau)=\int_{\substack{x(\tau)=x(0)\\
\psi(\tau)=\psi(0),\ \bar\psi(\tau)=\bar\psi(0)}}
\mathcal D x\,\mathcal D\bar\psi\,\mathcal D\psi\ e^{-S_E}
\tag{cgb-periodic-path-integral}
$$

で表される。各経路の重み$e^{-S_E}$を積分し、その閉経路が多様体上のどこにあるかについても足し合わせる。

<details>
<summary>From the Hamiltonian to the Euclidean action</summary>

形式の成分に作用する接続は$\nabla_i=\partial_i+\Gamma_i$、$\Gamma_i=\omega_i{}^a{}_b\hat\psi^{\dagger a}\hat\psi^b$である。ここで$\Gamma_i$はLevi-Civita接続が全次数の形式の成分に誘導する接続行列であり、$\Gamma^k{}_{ij}$は座標基底の接続係数を表す。$R_{bd}=\sum_aR_{abad}$、$R=\sum_bR_{bb}$とすると、前章のWeitzenböck公式は

$$
\begin{aligned}
H&=-\frac12g^{ij}(\nabla_i\nabla_j-\Gamma^k{}_{ij}\nabla_k)+H_{\mathrm{curv}},\\
H_{\mathrm{curv}}
&=\frac12R_{ab}\hat\psi^{\dagger a}\hat\psi^b
+\frac14R_{abcd}\hat\psi^{\dagger a}\hat\psi^{\dagger b}\hat\psi^c\hat\psi^d.
\end{aligned}
\tag{cgb-hodge-components}
$$

となる。このHamiltonianにはRicci曲率の二次項があるのに、作用 (@cgb-euclidean-action) には四次の曲率項だけが現れている。この違いを調べるには、演算子の積をGrassmann変数の多項式でどう表すかを決める必要がある。例えば$\hat\psi^b\hat\psi^{\dagger a}=\delta^{ab}-\hat\psi^{\dagger a}\hat\psi^b$だが、Grassmann変数では$\psi^b\bar\psi^a=-\bar\psi^a\psi^b$である。演算子をそのまま変数へ置き換えると、反交換関係の定数項が失われる。

ここでは、フェルミオン演算子の積を**Weyl順序**で表す。Grassmann変数の交換で生じる符号に合わせ、すべての並べ方を置換の符号つきで平均し、完全反対称化した積を基準にする方法である。二つの因子なら、基準となる積と元の積の関係は

$$
\begin{aligned}
\frac12\left(\hat\psi^{\dagger a}\hat\psi^b-\hat\psi^b\hat\psi^{\dagger a}\right)
&=\hat\psi^{\dagger a}\hat\psi^b-\frac12\delta^{ab},\\
\hat\psi^{\dagger a}\hat\psi^b
&=\frac12\left(\hat\psi^{\dagger a}\hat\psi^b-\hat\psi^b\hat\psi^{\dagger a}\right)+\frac12\delta^{ab}.
\end{aligned}
$$

となる。完全反対称化した演算子の積を、同じ順のGrassmann変数の積へ移す写像を$W$と書き、その結果を**Weyl symbol**と呼ぶ。和と係数はそのまま移し、恒等演算子は$1$へ移す。従って上の分解から

$$
W(\hat\psi^{\dagger a}\hat\psi^b)=\bar\psi^a\psi^b+\frac12\delta^{ab}
\tag{cgb-weyl-quadratic}
$$

を得る。右辺の定数項は、同じ演算子を表すために必要な項である。四つの因子でも、$4!$通りを符号つきで平均した積に書き換え、反交換関係から出る項を残してから変数へ移す。曲率で縮約した結果は

$$
\begin{aligned}
&W(R_{abcd}\hat\psi^{\dagger a}\hat\psi^{\dagger b}\hat\psi^c\hat\psi^d)\\
&\quad=R_{abcd}\bar\psi^a\bar\psi^b\psi^c\psi^d
-2R_{ab}\bar\psi^a\psi^b-\frac12R.
\end{aligned}
\tag{cgb-weyl-quartic-contracted}
$$

ここで一度の縮約とは、反交換関係の$\delta^{ab}$によって二つの演算子を取り除くことであり、四次の積から二次項が生じる。二度縮約すれば定数項になる。式 (@cgb-weyl-quadratic) よりHamiltonianのRicci項の記号は$R_{ab}\bar\psi^a\psi^b/2+R/4$であり、四次項の記号は式 (@cgb-weyl-quartic-contracted) の$1/4$倍である。両者の二次項が相殺して

$$
W(H_{\mathrm{curv}})=\frac14R_{abcd}\bar\psi^a\bar\psi^b\psi^c\psi^d+\frac18R.
\tag{cgb-weyl-curvature}
$$

位置と運動量についても順序を指定する。こちらのWeyl順序は、位置演算子と運動量演算子のすべての並べ方を、符号をつけずに平均する対称化である。対称化した積を可換な位置・運動量の積へ移す操作も$W$で表す。この順序は、短時間の位置の振幅を運動量のFourier積分で表すとき、位置を区間の中点で評価する処方に対応する。以下では、この中点処方を用いる。

位置の体積測度も含めるため、$g=\det(g_{ij})$として波動関数を$g^{1/4}$倍し、$d^nx$測度上の$\widetilde H=g^{1/4}Hg^{-1/4}$へ移す。この表示で運動量演算子は$-i\partial_i$であり、その記号を$p_i$と書く。位置・運動量の対称化で運動項から生じる$-R/8$が、式 (@cgb-weyl-curvature) の$R/8$と相殺する。接続の積にも順序交換の補正があり、合わせると全体の記号は

$$
\begin{aligned}
W(\widetilde H)&=\frac12g^{ij}(p_i-iW(\Gamma_i))(p_j-iW(\Gamma_j))
+\frac14R_{abcd}\bar\psi^a\bar\psi^b\psi^c\psi^d+V_{\mathrm{TS}},\\
W(\Gamma_i)&=\bar\psi^a\omega_i{}^a{}_b\psi^b,\\
V_{\mathrm{TS}}&=\frac18g^{ij}\left(\Gamma^k{}_{i\ell}\Gamma^\ell{}_{jk}
-\operatorname{tr}(\omega_i\omega_j)\right).
\end{aligned}
\tag{cgb-complete-weyl-symbol}
$$

中点での時間分割では、式 (@cgb-euclidean-action) に$\int_0^\tau V_{\mathrm{TS}}du$を加え、各リンクの測度と合わせて扱う。この補正と時間分割の対応は[de Boerらの導出](https://arxiv.org/abs/hep-th/9509158)に詳しい。正規座標・平行枠の中心では両接続が零なので、$V_{\mathrm{TS}}$も零である。近傍では$V_{\mathrm{TS}}=O(|x-x_0|^2)$となり、下で用いる$|x-x_0|=O(\sqrt\tau)$の尺度では作用への寄与は$O(\tau^2)$である。従ってこの補正は短時間の主要項に影響しない。

フェルミオンのコヒーレント状態の内積を$\langle\bar\eta|\xi\rangle=e^{\bar\eta\xi}$とする。積分は各変数の一次係数を取り出すGrassmann積分で、完全系を

$$
1=\int d\bar\psi\,d\psi\ e^{-\bar\psi\psi}|\psi\rangle\langle\bar\psi|
\tag{cgb-coherent-resolution}
$$

と規格化する。隣り合う状態の内積と完全系の重みは、合わせて$e^{-\bar\psi_r(\psi_r-\psi_{r-1})}$になる。これが自由なフェルミオンの運動項の差分表示である。同じ規約では偶演算子$O$に対し

$$
\begin{aligned}
\operatorname{Tr}[(-1)^F O]&=\int d\bar\eta\,d\eta\ e^{-\bar\eta\eta}\langle\bar\eta|O|\eta\rangle,\\
\operatorname{Tr}O&=\int d\bar\eta\,d\eta\ e^{-\bar\eta\eta}\langle-\bar\eta|O|\eta\rangle.
\end{aligned}
\tag{cgb-coherent-traces}
$$

従って指数では、フェルミオンのラベルも同じ値に閉じる。

相互作用にWeyl symbolを使うには、コヒーレント状態の間にその記号を入れるための積分恒等式が必要になる。ここでは[de Boerらの恒等式と時間分割](https://arxiv.org/abs/hep-th/9509158)（§2.2、式 (33)–(37)）を用いる。各区間に補助のGrassmann変数を導入し、中間のコヒーレント状態のラベルを積分すると、残った変数を$\bar\psi_r,\psi_r$と書いて、運動項を$\bar\psi_r(\psi_r-\psi_{r-1})$、相互作用のWeyl symbolの引数を

$$
\left(\bar\psi_r,\frac{\psi_r+\psi_{r-1}}2\right)
$$

とする処方が得られる。区間の長さは$\varepsilon=\tau/N$であり、各短時間核を$\varepsilon$の一次まで合わせて$N\to\infty$とする。supertraceでは$\psi_0=\psi_N$として循環させる。この積分恒等式が、自由な状態の重なりとWeyl順序の相互作用を結ぶ。生成演算子を左へ集めた正規順序では相互作用を隣接する二つの状態のラベルで評価できるが、Weyl symbolには上の片側だけを平均する処方を用いる。

第$r$区間の位置の変位を$\Delta x=x_r-x_{r-1}$、中点を$m=(x_r+x_{r-1})/2$とする。式 (@cgb-complete-weyl-symbol) をこの$m$と上のフェルミオンの引数で評価し、そのGrassmann変数を固定して運動量を積分すると、

$$
\begin{aligned}
&\int\frac{d^np}{(2\pi)^n}
 e^{ip_i\Delta x^i-\varepsilon g^{ij}(p_i-iW(\Gamma_i))(p_j-iW(\Gamma_j))/2}\\
&\quad=\frac{\sqrt{g(m)}}{(2\pi\varepsilon)^{n/2}}
 e^{-g_{ij}(m)\Delta x^i\Delta x^j/(2\varepsilon)-W(\Gamma_i)\Delta x^i}.
\end{aligned}
\tag{cgb-momentum-gaussian}
$$

となる。従って接続の項とフェルミオンの差分を合わせたものは

$$
\sum_{r=1}^N\bar\psi_r^a\left[
\psi_r^a-\psi_{r-1}^a
+\Delta x^i\omega_i{}^a{}_b(m)\frac{\psi_r^b+\psi_{r-1}^b}2
\right]
\tag{cgb-weyl-link-transport}
$$

である。角括弧を$\varepsilon$で割れば、経路に沿う変化$\dot\psi^a+\dot x^i\omega_i{}^a{}_b\psi^b=D_u\psi^a$に対応し、和が$\int du\,\bar\psi^aD_u\psi^a$を与える。曲率四次項と$V_{\mathrm{TS}}$も同じ区間の引数で評価する。こうして式 (@cgb-euclidean-action) の共変な作用と時間分割補正が得られ、測度には各区間のガウス規格化とGrassmann変数の測度が含まれる。

断面曲率が一定の$k$なら、$R_{abcd}=k(\delta_{ac}\delta_{bd}-\delta_{ad}\delta_{bc})$であり、$N_F=\sum_a\hat\psi^{\dagger a}\hat\psi^a$を使って$H_{\mathrm{curv}}=kN_F(n-N_F)/2$となる。次の計算では、この行列と式 (@cgb-weyl-curvature) を演算子へ戻した行列を比較できる。次元と曲率を変えれば、Ricci項を含む表示と四次のWeyl symbolが同じ作用をすることを確かめられる。

<div data-weyl-calculation-slot></div>

</details>

### 短時間極限と零モードの積分

ここで、指数が$\tau$によらないことを使い、虚時間を短くしてみよう。時間$\tau$の間に距離$r$程度まで動く経路では、速度は$r/\tau$程度であり、作用 (@cgb-euclidean-action) の運動項は$\tau(r/\tau)^2=r^2/\tau$程度になる。従って短時間ほど大きな移動の重みが抑えられ、閉経路の広がりは$\sqrt\tau$程度になる。これによって、$\tau\to0^+$の経路積分は、ほぼ一点に留まる経路の近くで評価できる（[Alvarez-Gauméの指数計算](https://www.damtp.cam.ac.uk/user/tong/susy/index.pdf)参照）。留まる点は多様体のどこでもよい。その点の近傍の幾何を使って経路の揺らぎを積分し、得られた寄与を多様体全体で足し合わせれば、同じEuler標数が求まる。そこで、各点の近くの閉経路が、作用に含まれる曲率からどのような積を残すかを計算しよう。

小さい閉経路を、一点$x_0$の近くの揺らぎとして表そう。まず、$x_0$での接ベクトルを初速度として、速度ベクトルを平行に保ちながら進む曲線を考えよう。これを測地線という。その測地線を単位時間だけ進んだ点を接ベクトルに対応させるのが、指数写像$\exp_{x_0}$である。$x_0$の近くでは、この接ベクトルの成分を点の座標として使える。これが正規座標である。各点での正規直交枠は、$x_0$の枠をこの放射状の測地線に沿って平行移動して定める。区間を$v=u/\tau\in[0,1]$へ移し、周期的な接ベクトルの揺らぎを$q(v)$と書く。位置の経路は次のように表せる。

$$
x(u)=\exp_{x_0}\!\bigl(\sqrt\tau\,q(v)\bigr),
\qquad \int_0^1q(v)\,dv=0
\tag{cgb-small-loop-scaling}
$$

![接空間の原点から閉曲線上の点へ向かうベクトルを、指数写像が多様体上の放射状の測地線へ対応させる。青い矢印は閉経路をたどる時間の向き、橙の破線はx₀から各点へ枠を運ぶ測地線、赤い二本の矢印はその平行移動前後の枠を表す。](/notes/SUSYQM/diagrams/small-loop.svg)

*接空間の閉曲線を指数写像で移すと、多様体上の閉経路になる。青い閉経路は虚時間の進行を、橙の測地線は各点の枠を$x_0$から定める経路を表す。二次元での関係を示した模式図である。*

平均零の条件で$x_0$を選ぶことで、揺らぎ$q$の時間によらない成分を除いている。作用の運動項の主要部は$\frac12\int_0^1|q'|^2dv$となり、$\tau$が消える。ここでprimeは$v$微分を表す。この座標と枠では、$x_0$で$g_{ij}=\delta_{ij}$、$\omega_i{}^a{}_b=0$である。

周期的なフェルミオンにも、時間によらない定数成分がある。自由な運動項$\bar\psi\dot\psi$はこの成分には作用しないので、時間微分の**零モード**と呼ぶ。経路の揺らぎを積分した後にも、この成分の積分は残る。位置の経路を$x_0$と$q$に分けたのと同じように取り分け、残りを平均零の$\chi,\bar\chi$とする。

ここでは定数成分を$\tau^{-1/4}$倍した変数で表そう。曲率四次項の時間積分が与える$\tau$を、四つの定数フェルミオンからの$\tau^{-1}$で打ち消し、曲率を含む項を有限に保つためである。

$$
\begin{aligned}
\psi(u)&=\tau^{-1/4}\psi_0+\chi(v),
&\int_0^1\chi(v)\,dv&=0,\\
\bar\psi(u)&=\tau^{-1/4}\bar\psi_0+\bar\chi(v),
&\int_0^1\bar\chi(v)\,dv&=0.
\end{aligned}
\tag{cgb-fermion-mode-split}
$$

非定数成分$\chi,\bar\chi$は変えずにおけば、$du=\tau\,dv$と$\partial_u=\tau^{-1}\partial_v$が打ち消し合い、その運動項も有限のままになる。定数成分と$\chi'$の交差項は周期条件により積分すると零になる。こうして式 (@cgb-euclidean-action) の主要部は

$$
\begin{aligned}
S_E={}&\frac12\int_0^1|q'|^2\,dv
+\int_0^1\bar\chi^a\chi'^a\,dv\\
&+\frac14R_{abcd}(x_0)
 \bar\psi_0^a\bar\psi_0^b\psi_0^c\psi_0^d
+\text{正の}\tau\text{次数をもつ項}
\end{aligned}
\tag{cgb-leading-mode-action}
$$

となる。最初の二項は平坦な空間の自由な揺らぎを表し、位置$x_0$の曲率情報は最後の四次項に入っている。

短時間極限での各項の大きさは、同じ変数変換から分かる。正規座標では$g_{ij}-\delta_{ij}=O(\tau |q|^2)$、選んだ枠では$\omega(x)=O(\sqrt\tau q)$である。従って計量による運動項の補正は$O(\tau)$、二つの定数フェルミオンを含む接続項は$O(\tau^{1/2})$になる。曲率四次項の定数フェルミオンを一つ非定数成分へ替えると$\tau^{1/4}$、曲率の位置依存を展開すると少なくとも$\tau^{1/2}$が加わる。測度の補正も正の次数をもつ。従って短時間の主要項は、自由な揺らぎと、定数フェルミオンの四次相互作用に分かれる。

#### 自由な揺らぎと測度

揺らぎのうち、位置の振幅は通常のガウス積分で積分できる。フェルミオンの振幅にはGrassmann積分を使うので、その計算を先に用意しよう。一変数では、

$$
\int d\psi\,(A+B\psi)=B,
\qquad \int d\psi\,1=0,\quad \int d\psi\,\psi=1
$$

と定める。変数の二乗が零なので、これで任意の多項式を積分できる。複数の変数では、一つでも欠けた項はその変数の積分で零になり、すべての変数を一度ずつ含む項だけが残る。積の順序を変えると符号が変わるため、測度の順序も固定する。この章では、完全系 (@cgb-coherent-resolution) と同じく一組について

$$
\int d\bar\psi\,d\psi\,\bar\psi\psi=-1,
\qquad
\int d\bar\psi\,d\psi\,e^{-\bar\psi\psi}
=\int d\bar\psi\,d\psi\,(1-\bar\psi\psi)=1
$$

となる順序を使う。指数関数も有限の多項式となり、この積分はその係数を取り出している。独立な対の積には、各対の測度を同じ順に並べる。特に零モードでは

$$
d\bar\psi_0\,d\psi_0
=\prod_{a=1}^{n}(d\bar\psi_0^a\,d\psi_0^a),
\qquad
\int d\bar\psi_0\,d\psi_0\,
e^{-\sum_a\bar\psi_0^a\psi_0^a}=1
\tag{cgb-berezin-orientation}
$$

と規格化する。

測度の変数変換も、係数抽出の規則から決まる。通常の数$c\ne0$について$\psi=c\eta$と置くと、$\int d\psi\,\psi=1$を保つには

$$
1=\int (c^{-1}d\eta)\,c\eta,
\qquad d\psi=c^{-1}d\eta
$$

でなければならない。Grassmann変数の測度は、変数の倍率の逆数を受け取る。

この係数抽出を、二つの周期的なモードに使ってみよう。正の周波数$\lambda=2\pi r$ごとに、正規直交な実モード$\sqrt2\cos(\lambda v),\sqrt2\sin(\lambda v)$を取る。一つの位置成分の振幅を$a,b$とすると、作用の運動項は$\lambda^2(a^2+b^2)/2$となり、

$$
\int\frac{da\,db}{2\pi}\,
e^{-\lambda^2(a^2+b^2)/2}=\lambda^{-2}
$$

を与える。同じモードに沿う$\chi$の振幅を$\eta_c,\eta_s$、$\bar\chi$の振幅を$\bar\eta_c,\bar\eta_s$と書く。時間微分はcos成分を$-\lambda$倍のsin成分へ、sin成分を$\lambda$倍のcos成分へ移す。従ってその作用と重みは

$$
\begin{aligned}
\int_0^1\bar\chi\chi'\,dv
&=\lambda\bar\eta_c\eta_s-\lambda\bar\eta_s\eta_c,\\
e^{-\lambda\bar\eta_c\eta_s+\lambda\bar\eta_s\eta_c}
&=1-\lambda\bar\eta_c\eta_s+\lambda\bar\eta_s\eta_c
+\lambda^2(\bar\eta_c\eta_c)(\bar\eta_s\eta_s).
\end{aligned}
$$

最後の項の符号は、$\bar\eta_c\eta_s\bar\eta_s\eta_c=-(\bar\eta_c\eta_c)(\bar\eta_s\eta_s)$による。二対の積分で残るのはこの項だけであり、各対から$-1$が出るので、結果は$\lambda^2$になる。従ってボソンの$\lambda^{-2}$とフェルミオンの$\lambda^2$が打ち消し合う。共通の有限のモード数で打ち切れば、この相殺を各周波数・各方向で行える。

非零モードの相殺の後には、$x_0$についての積分と、元のリンク測度の規格化が残る。フェルミオンの元の定数成分を$\psi_{\mathrm{const}},\bar\psi_{\mathrm{const}}$と書くと、自由な部分を積分した測度は

$$
\frac{d\operatorname{vol}_g(x_0)}{(2\pi\tau)^{n/2}}
\,d\bar\psi_{\mathrm{const}}\,d\psi_{\mathrm{const}}
\tag{cgb-free-mode-measure}
$$

である。位置の規格化は、平坦な空間の自由粒子の戻り振幅

$$
\int\frac{d^np}{(2\pi)^n}e^{-\tau p^2/2}=(2\pi\tau)^{-n/2}
$$

から決まる。フェルミオンでは定数成分を積分せずに残すので、この段階ではそのGrassmann変数の測度が付く。自由な揺らぎの相殺と、この定数成分の規格化を時間分割で追う計算を次の補足に示す。

<details>
<summary>Free periodic modes and their measures</summary>

一つの実座標と一組の複素フェルミオンについて、$N$個の周期的なリンクを取り、$\varepsilon=\tau/N$とする。サイトを一つずらす行列を$T$、差分を$D=1-T$と書く。定数ベクトルを除く行列式は

$$
\det{}'D=\prod_{r=1}^{N-1}(1-e^{2\pi ir/N})=N,
\qquad \det{}'(D^*D)=N^2.
$$

正規直交なモード基底で展開すると、ボソンの規格化された定数モードに沿う係数は$\sqrt N x_0$である。その測度$\sqrt N\,dx_0$と、$N-1$個の非零モードのガウス積分を、元のリンク規格化と合わせると

$$
(2\pi\varepsilon)^{-N/2}
\frac{(2\pi\varepsilon)^{(N-1)/2}}{N}
\sqrt N\,dx_0
=(2\pi\tau)^{-1/2}dx_0
$$

を得る。フェルミオンの作用は$\sum_r\bar\psi_r(\psi_r-\psi_{r-1})$である。非零モードの積分は$\det{}'D=N$を与えるが、規格化された定数モードに沿う係数は$\sqrt N\psi_{\mathrm{const}}$なので、そのGrassmann変数の測度は$N^{-1}d\bar\psi_{\mathrm{const}}d\psi_{\mathrm{const}}$となる。両者は打ち消し合う。積分の符号は、式 (@cgb-coherent-resolution) の完全系と同じ順序で定まる。この計算を$n$方向で行うと式 (@cgb-free-mode-measure) になる。

</details>

式 (@cgb-fermion-mode-split) では、$\psi_{\mathrm{const}}=\tau^{-1/4}\psi_0$と変数変換した。先ほどの測度の変換則より、一変数ごとに$\tau^{1/4}$が出る。従って$2n$個の定数フェルミオンの測度は、合わせて$\tau^{n/2}$を与え、式 (@cgb-free-mode-measure) の$\tau^{-n/2}$を打ち消す。こうして短時間に残る局所的な寄与は

$$
\frac{d\operatorname{vol}_g(x_0)}{(2\pi)^{n/2}}
\int d\bar\psi_0\,d\psi_0\,
\exp\!\left[-\frac14R_{abcd}(x_0)
\bar\psi_0^a\bar\psi_0^b\psi_0^c\psi_0^d\right]
\tag{cgb-zero-mode-integral}
$$

となる。無限個の経路の積分から、各点で有限個のGrassmann変数を積分する問題へ移ったのである。

### 曲率の積とPfaffian

まず二次元で、残った積分を実行しよう。以下の二次元の式では、零モードを表す添字$0$を省く。$R_{1212}=K$とすると、曲率の各添字対の反対称性とGrassmann変数の反交換性から、四つの非零項はすべて同じ積になる。その和が係数$1/4$を打ち消すので、四次項は

$$
\frac14R_{abcd}\bar\psi^a\bar\psi^b\psi^c\psi^d
=K\bar\psi^1\bar\psi^2\psi^1\psi^2,
\qquad
\int d\bar\psi\,d\psi\,
e^{-K\bar\psi^1\bar\psi^2\psi^1\psi^2}=K
\tag{cgb-surface-zero-mode-check}
$$

となる。実際、四次の積の二乗は零なので、重みを対ごとの順序に直すと

$$
e^{-K\bar\psi^1\bar\psi^2\psi^1\psi^2}
=1-K\bar\psi^1\bar\psi^2\psi^1\psi^2
=1+K(\bar\psi^1\psi^1)(\bar\psi^2\psi^2).
$$

定数項の積分は零、最後の項の積分は$K\times(-1)\times(-1)=K$である。これを式 (@cgb-zero-mode-integral) に戻すと、Euler形式は$K\,d\operatorname{vol}_g/(2\pi)$となり、第1章の式 (@surface-euler-form) に戻る。

偶数次元$n=2m$では、Grassmann積分で残るのは、$n$個の$\bar\psi_0$と$n$個の$\psi_0$を、それぞれ一度ずつ含む項だけである。曲率の四次項一つは、各種類を二つずつ供給する。従って指数関数から選ばれるのは、ちょうど$m$次の項になる。曲率の積の個数は、次元と、この「すべてのGrassmann変数を一度ずつ含む」という条件で決まる。

一般の係数を求めるには、変数を種類ごとにまとめたときの符号が必要になる。測度は式 (@cgb-berezin-orientation) の対ごとの順序を保つ。積分する多項式を対ごとの順序から$\bar\psi_0$、$\psi_0$の順へ並べ替えるには、$\psi_0^a$を後続の$n-a$個のbar付き変数と交換するので、合計$n(n-1)/2$回の交換になる。各対の積分が与える$(-1)^n$も合わせると、

$$
\int d\bar\psi_0\,d\psi_0\,
\bar\psi_0^1\cdots\bar\psi_0^n
\psi_0^1\cdots\psi_0^n
=(-1)^{n(n+1)/2}=(-1)^m.
\tag{cgb-grouped-berezin-sign}
$$

この$m$次の項を展開しよう。曲率テンソルの積に掛かる展開係数は$(-1)^m/(4^m m!)$である。各四次項の二つの$\psi_0$を、後続の二つの$\bar\psi_0$より後ろへ移すには四回の交換が必要なので、符号は$+1$である。残る各種類の並べ替えを$\epsilon^{12\cdots n}=1$の反対称記号で表すと、積分の$(-1)^m$が指数展開の符号を打ち消し、

$$
\begin{aligned}
&\int d\bar\psi_0\,d\psi_0\,
e^{-R_{abcd}\bar\psi_0^a\bar\psi_0^b\psi_0^c\psi_0^d/4}\\
&\quad=\frac1{4^m m!}
\epsilon^{a_1\cdots a_n}\epsilon^{i_1\cdots i_n}
\prod_{r=1}^{m}
R_{a_{2r-1}a_{2r}i_{2r-1}i_{2r}}
\end{aligned}
\tag{cgb-saturated-curvature-polynomial}
$$

を得る。これが経路積分から選ばれた曲率多項式である。

各種類の変数を一度ずつ含む項を取り出す操作が、二つの反対称記号を生んだ。このうち$\psi_0$側の反対称化は、微分形式の外積で表せる。向きと一致する双対枠$\theta^1,\ldots,\theta^n$では、曲率2形式と体積形式は

$$
\Omega_{ab}=\frac12R_{abij}\theta^i\wedge\theta^j,
\qquad d\operatorname{vol}_g=\theta^1\wedge\cdots\wedge\theta^n
\tag{cgb-curvature-two-form}
$$

である。反対称行列のPfaffianは、添字を二つずつ組に分けて全添字を一度ずつ使った積の符号付き和である。全順列を足す表示では、各組の向きの重複$2^m$と、組の順序の重複$m!$で割る。第1章の定義 (@pfaffian-convention) をこの曲率2形式へ適用すると、

$$
\begin{aligned}
\operatorname{Pf}\!\left(\frac{\Omega}{2\pi}\right)
&=\frac{\epsilon^{a_1\cdots a_n}}{(2\pi)^m2^m m!}
\Omega_{a_1a_2}\wedge\cdots\wedge\Omega_{a_{n-1}a_n}\\
&=\frac{\epsilon^{a_1\cdots a_n}\epsilon^{i_1\cdots i_n}}
{(2\pi)^m4^m m!}
\prod_{r=1}^{m}R_{a_{2r-1}a_{2r}i_{2r-1}i_{2r}}
\,d\operatorname{vol}_g.
\end{aligned}
\tag{cgb-pfaffian-density}
$$

二行目では、各$\Omega$の$1/2$と、$n$個の$\theta$の外積を体積形式に並べ直す符号を使った。これは式 (@cgb-zero-mode-integral) と式 (@cgb-saturated-curvature-polynomial) を合わせたものに、係数まで一致する。Grassmann積分がすべての変数を要求することと、最高次数の微分形式を作ることが、ここで同じ反対称化になった。

<details>
<summary>Compute the Grassmann coefficient and the Pfaffian</summary>

有限次元の計算でも、この対応を確かめられる。ここでは各座標2平面の曲率を$\kappa_{ab}$として、$a<b$に対し$R_{abab}=\kappa_{ab}$と置き、曲率の対称性で他の成分を定め、それ以外の独立成分を零にする。この曲率テンソルは第一Bianchi恒等式も満たす。曲率2形式は$\Omega_{ab}=\kappa_{ab}\theta^a\wedge\theta^b$となる。

下の計算は、四次多項式

$$
Q=\frac14R_{abcd}\bar\psi^a\bar\psi^b\psi^c\psi^d
$$

から$e^{-Q}$の最高次係数を求め、式 (@cgb-grouped-berezin-sign) の積分符号を掛ける。別の計算で$\operatorname{Pf}(\Omega)$の体積形式の係数を求め、両者を比較する。表示されるEuler形式の係数には、さらに$(2\pi)^{-n/2}$を掛けている。

すべての2平面で$\kappa_{ab}=k$とする場合と、独立な2平面にだけ$k,2k,3k$を置く場合を比べてみよう。四次元では、すべての2平面に曲率を置くと$3k^2$、独立な2平面にだけ曲率を置くと$2k^2$となる。すべての2平面に曲率がある場合は三通りの平面の組合せが寄与し、独立な2平面の場合は一通りが寄与する。一般の曲率についての等式は式 (@cgb-saturated-curvature-polynomial)–(@cgb-pfaffian-density) が示しており、この実行例では次元や曲率の配置を変えたときの係数を追える。

<div data-pfaffian-calculation-slot></div>

</details>

### 曲率積分とEuler標数

向きを保つ正規直交枠の変換では、曲率行列は$SO(n)$の行列による共役で変わり、そのPfaffianは不変である。従って各近傍で得た最高次数形式$\operatorname{Pf}(\Omega/2\pi)$は、多様体全体のEuler形式$\operatorname{Eu}(TM)$を定める。式 (@cgb-periodic-path-integral) の短時間極限では、非零モードを積分した結果 (@cgb-zero-mode-integral) が残り、式 (@cgb-pfaffian-density) によってEuler形式となる。各点での短時間の寄与を多様体上で積分する。指数が$\tau$によらないことから、

$$
\boxed{
\operatorname{ind}D_{\mathrm{ev}}
=\chi(M)=I(\tau)
=\int_M\operatorname{Pf}\!\left(\frac{\Omega}{2\pi}\right)
=\int_M\operatorname{Eu}(TM).
}
\tag{cgb-index-theorem}
$$

これがChern–Gauss–Bonnetの定理である。左辺は偶数次から奇数次へのde Rham作用素の指数、右辺は局所的な曲率から作った形式の積分である。

半径$r$の球面では$K=r^{-2}$、面積は$4\pi r^2$だから、

$$
\chi(S^2)=\frac1{2\pi}\,\frac1{r^2}\,4\pi r^2=2.
\tag{cgb-round-sphere-check}
$$

局所の曲がりから作ったEuler形式の積分が整数になるのは、それが零エネルギー状態の偶奇差に等しいからである。虚時間区間を長くすればその状態の数え上げになり、短くすれば各点の曲率密度の積分になる。両者を同じ指数に保つのは、どの$\tau>0$でも正エネルギー状態の各対が同じ重みで逆符号に寄与し、打ち消し合うことである。短時間に残る定数フェルミオンの積分は、各Grassmann変数を一度ずつ含む項を取り出す。その条件で選ばれる曲率の積は、最高次数の微分形式を作る反対称化と一致する。その密度がEuler形式なので、局所の曲率を積分すれば、大域的な零エネルギー状態の偶奇差が求まる。冒頭の不足角の総和、形式の指数、Euler形式の積分は、こうして同じEuler標数の計算として結び付いた。

