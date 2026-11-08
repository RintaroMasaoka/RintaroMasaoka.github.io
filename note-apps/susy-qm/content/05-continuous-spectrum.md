## 付録A 連続スペクトルをもつWitten模型

コンパクトな多様体では、熱発展演算子がtraceをもち、正エネルギーの対を消去してWitten指数を計算できた。無限直線では、無限遠まで広がる散乱状態が現れる。その状態は$L^2$で規格化できず、各部門のtraceも発散する。一方、二つの系の密度差には有限の寄与が残る。この付録では、その連続スペクトルの寄与を計算し、有限の正則化パラメータで得る量と核の差を比べる。議論の原典は[Hirayama (1983), §2とAppendix](https://doi.org/10.1143/PTP.70.1444)である。

### 核の差と相対trace

実関数$h(x)$を使った第2章の1次元模型を、実数直線上で考える。作用素の定義域も第2章と同じく、閉作用素$A$とそのHilbert空間随伴$A^\dagger$から定める。

$$
A=\frac{d}{dx}+h'(x),\qquad
H_0=\frac12A^\dagger A,\qquad H_1=\frac12AA^\dagger,\qquad
H=\begin{pmatrix}H_0&0\\0&H_1\end{pmatrix}.
$$

上の成分を偶状態、下の成分を奇状態とする。$h$は滑らかで、勾配が両端で非零定数に近づくと仮定する。

$$
h'(-\infty)=\lambda\ne0,\qquad
h'(+\infty)=\mu\ne0.
\tag{continuum-asymptotic-slopes}
$$

二つのSchrödinger演算子は

$$
H_0=\frac12\left[-\partial_x^2+h'^2-h''\right],\qquad
H_1=\frac12\left[-\partial_x^2+h'^2+h''\right]
\tag{continuum-partners}
$$

である。さらに、$h''$が両端で $0$ に近づくとする。このとき、ポテンシャルはともに左端で$\lambda^2/2$、右端で$\mu^2/2$に近づく。従って連続スペクトルは$\min(\lambda^2,\mu^2)/2$から始まる。

零モードの方程式は$Au=0$と$A^\dagger v=0$で、解はそれぞれ$e^{-h}$と$e^h$に比例する。$e^{-h}$が両端で減衰するのは$\lambda<0<\mu$、$e^h$が減衰するのは$\mu<0<\lambda$のときである。従って核の差は

$$
\operatorname{ind}A
=\dim\ker A-\dim\ker A^\dagger
=\frac12\bigl(\operatorname{sgn}\mu-\operatorname{sgn}\lambda\bigr).
\tag{continuum-kernel-index}
$$

次に、各エネルギー$E$の状態に重み$z/(E+z)$を掛けて、偶状態と奇状態の差を調べる。$z$は$E$と同じ単位をもつ正のパラメータであり、resolventを使って

$$
J(z)=\operatorname{Tr}_{L^2(\mathbb R)}
\left[\frac{z}{H_0+z}-\frac{z}{H_1+z}\right],
\qquad z>0
\tag{continuum-relative-trace}
$$

と定義する。これは二つのresolventの**差を取ってから**traceを計算する相対traceである。この相対traceと以下の連続状態の計算では、左半直線で$h'-\lambda$、右半直線で$h'-\mu$が可積分で、$h''$も可積分であるとする。各resolventのtraceは発散するが、二つのHamiltonianのポテンシャルの差は可積分かつ有界な $h''$ なので、resolventの差はtrace classとなり、$J(z)$が有限に定まる。

離散的な正エネルギー状態は$A$で対応し、$J(z)$への寄与を相殺する。零モードには重み$z/(0+z)=1$が掛かるので、

$$
J(z)=\operatorname{ind}A+J_{\mathrm c}(z)
\tag{continuum-trace-split}
$$

と分けられる。散乱状態の密度差が、残る$J_{\mathrm c}(z)$を与える。

### 密度差を境界項に直す

連続状態についても、同じエネルギーの散乱解を対応させられる。$H_0u_E=Eu_E$の解に対し、$H_1$の解を$v_E=Au_E/\sqrt{2E}$と置く。逆向きの写像は$u_E=A^\dagger v_E/\sqrt{2E}$である。この二つの解の点ごとの密度差は

$$
|u_E|^2-|v_E|^2
=-\frac1{2E}\frac{d}{dx}
\left[\frac12\frac{d}{dx}|u_E|^2+h'|u_E|^2\right]
\tag{continuum-density-boundary}
$$

となる。例えば$u_E''=(h'^2-h''-2E)u_E$を右辺に代入すると、$|u_E|^2-|u_E'+h'u_E|^2/(2E)$が戻る。密度差を空間全体で積分すると全微分が境界項となり、無限遠における波の振幅が結果を決める。

散乱波の干渉項は無限遠でも振動し続けるため、波束、またはエネルギー積分による平均で境界を評価する。そのとき$\frac{d}{dx}|u_E|^2$の振動項は消え、非振動成分$h'|u_E|^2$が残る。以下の振幅二乗はこの平均を取った値である。

### 波数の異なる二つの散乱経路

まず$\lambda^2<\mu^2$とする。勾配の二乗が左右のポテンシャルの閾値を定めるので、この場合は左端の閾値が低い。$E>\mu^2/2$では左右ともに進行波が存在し、その波数を

$$
k_{\mathrm L}=\sqrt{2E-\lambda^2},\qquad
k_{\mathrm R}=\sqrt{2E-\mu^2}
$$

とする。左から入射する解と右から入射する解を、入射振幅1で次のように取る。

$$
\begin{array}{c|cc}
&x\to-\infty&x\to+\infty\\ \hline
u_{\mathrm L}&e^{ik_{\mathrm L}x}+R_{\mathrm L}e^{-ik_{\mathrm L}x}
&T_{\mathrm L}e^{ik_{\mathrm R}x}\\
u_{\mathrm R}&T_{\mathrm R}e^{-ik_{\mathrm L}x}
&e^{-ik_{\mathrm R}x}+R_{\mathrm R}e^{ik_{\mathrm R}x}
\end{array}
\tag{continuum-scattering-waves}
$$

入射振幅を1としたので、状態和には平面波のFourier展開と同じ規格化を使う。各経路では、入射側の波数に対して$dk_{\mathrm L}/(2\pi)$または$dk_{\mathrm R}/(2\pi)$で積分する。$A/\sqrt{2E}$を作用させると、各入射波の振幅には$(\pm ik+h')/\sqrt{2E}$が掛かる。その絶対値は入射側で1なので、対応する$v_E$も同じ規格化をもつ。

resolventの位置表示では、この密度差が相対traceの空間積分に入る。スペクトル分解では、各入射経路の散乱解は核に$z/(E+z)\,u_E(x)\overline{u_E(y)}$を寄与し、これを上の状態和で積分する。対角成分$y=x$を取ると、波動関数の積は密度$|u_E(x)|^2$になる。$H_1$の核では同じ重みで$|v_E(x)|^2$が現れるので、二つの核の差を取り、全入射経路を足して対角成分を$x$について積分すれば、$J_{\mathrm c}(z)$が得られる。従って式 (@continuum-density-boundary) は、このtraceの空間積分を左右の境界密度から求める式になっている。

左右の波数が異なると、透過確率には振幅二乗に加えて波数の比が入る。流束保存と実ポテンシャルの相反関係は

$$
\begin{aligned}
|R_{\mathrm L}|^2+\frac{k_{\mathrm R}}{k_{\mathrm L}}|T_{\mathrm L}|^2&=1,\\
|R_{\mathrm R}|^2+\frac{k_{\mathrm L}}{k_{\mathrm R}}|T_{\mathrm R}|^2&=1,\\
k_{\mathrm R}T_{\mathrm L}&=k_{\mathrm L}T_{\mathrm R}
\end{aligned}
\tag{continuum-flux-relations}
$$

を与える。最初の二式は入射・反射・透過の確率流を比べたものである。最後の式には、二つの解の組合せ $u_{\mathrm L}u_{\mathrm R}^{\prime}-u_{\mathrm L}^{\prime}u_{\mathrm R}$（Wronskian）を使う。同じSchrödinger方程式を満たすので、この組合せを微分すると零になる。左端での値は $-2ik_{\mathrm L}T_{\mathrm R}$、右端での値は $-2ik_{\mathrm R}T_{\mathrm L}$ であり、両者を等置すると最後の式が得られる。

右端の密度を、両方の入射経路について足そう。$E=(k_{\mathrm L}^2+\lambda^2)/2=(k_{\mathrm R}^2+\mu^2)/2$なので、$k_{\mathrm L}dk_{\mathrm L}=k_{\mathrm R}dk_{\mathrm R}=dE$である。式 (@continuum-flux-relations) と合わせると、

$$
\begin{aligned}
&dk_{\mathrm L}|T_{\mathrm L}|^2
 +dk_{\mathrm R}(1+|R_{\mathrm R}|^2)\\
&\qquad=dk_{\mathrm R}
 \left(\frac{k_{\mathrm R}}{k_{\mathrm L}}|T_{\mathrm L}|^2
 +1+|R_{\mathrm R}|^2\right)
=2\,dk_{\mathrm R}.
\end{aligned}
$$

同様に、左端では$2\,dk_{\mathrm L}$になる。両経路を足すと反射・透過振幅が消え、各端の境界密度はその端の波数だけで決まる。

$\lambda^2/2<E<\mu^2/2$では左側の経路だけが開いている。右側の波は指数減衰し、左側では全反射する。左端の平均密度は$1+|R_{\mathrm L}|^2=2$、右端の密度は0である。この寄与を加えると、左端の波数積分も$k_{\mathrm L}=0$から全範囲を走る。$\mu^2<\lambda^2$では左右を交換すればよく、等しい場合には一つの経路だけが開く区間がなくなる。

### 有限の正則化パラメータで残る項

境界での勾配は左端で$\lambda$、右端で$\mu$である。状態和の係数$1/(2\pi)$を含めると、境界密度は右端で$dk_{\mathrm R}/\pi$、左端で$dk_{\mathrm L}/\pi$になる。式 (@continuum-density-boundary) の係数$-1/(2E)$と重み$z/(E+z)$を掛けるため、各端の勾配を$a$、その端の波数を$k$と書けば、被積分式の係数は

$$
-\frac1\pi\frac1{2E}\frac z{E+z}
=-\frac{2z}{\pi(k^2+a^2)(k^2+a^2+2z)},
\qquad E=\frac{k^2+a^2}{2}
$$

となる。境界項は右端の値から左端の値を引くので、連続状態の寄与は

$$
J_{\mathrm c}(z)
=-\frac{2z}\pi\int_0^\infty dk\,
\left[
\frac{\mu}{(k^2+\mu^2)(k^2+\mu^2+2z)}
-\frac{\lambda}{(k^2+\lambda^2)(k^2+\lambda^2+2z)}
\right].
\tag{continuum-correction-integral}
$$

積分変数$k$は各端の波数をそれぞれ表す。二つの端で独立に行う波数積分を、共通の積分変数名でまとめている。

この積分は部分分数に分ければ求まる。非零の実数$a$について、

$$
\begin{aligned}
&-\frac{2z}\pi\int_0^\infty
 \frac{a\,dk}{(k^2+a^2)(k^2+a^2+2z)}\\
&\quad=\frac a\pi\int_0^\infty
 \left(\frac1{k^2+a^2+2z}-\frac1{k^2+a^2}\right)dk\\
&\quad=\frac12\left(\frac a{\sqrt{a^2+2z}}-\operatorname{sgn}a\right)
\end{aligned}
$$

となる。ここで$\int_0^\infty dk/(k^2+c^2)=\pi/(2c)$、$c>0$を使った。式 (@continuum-kernel-index) と足し合わせれば、

$$
\boxed{\quad
J(z)=\frac12\left[
\frac\mu{\sqrt{\mu^2+2z}}-
\frac\lambda{\sqrt{\lambda^2+2z}}
\right].\quad}
\tag{continuum-resolvent-index}
$$

有限の$z$では、$J(z)$は一般には整数ではない。連続状態の寄与を含むこの量は、漸近勾配が非零という仮定の下で

$$
\lim_{z\downarrow0}J(z)
=\frac12(\operatorname{sgn}\mu-\operatorname{sgn}\lambda)
=\operatorname{ind}A
$$

となる。例えば$\lambda=-a,\mu=a$、$a>0$なら核の差は1だが、$J(z)=a/\sqrt{a^2+2z}$であり、連続状態が$J_{\mathrm c}(z)=a/\sqrt{a^2+2z}-1$を与える。正の束縛状態は対になって相殺し、無限遠まで広がる散乱状態は境界密度の差を通じて寄与する。その寄与が有限の正則化量を核の差からずらし、零極限で消える。
