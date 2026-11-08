## 付録B Fokker–Planck方程式の導出

第2章では、粒子のランダムな運動を平均すると、確率密度に拡散が生じることを用いた。雑音の平均は零なのに、なぜその効果が残るのだろうか。短い時間に生じる変位の平均と二乗平均から、力による移動と雑音による拡散が密度方程式の二つの項になる過程を追おう。

導出の出発点は、滑らかな実ポテンシャル $U(x)$ に対する過減衰Langevin方程式

$$
\frac{dx}{dt}=-U'(x)+\eta(t),
\qquad
\langle\eta(t)\rangle=0,
\qquad
\langle\eta(t)\eta(t')\rangle=\frac{2}{\beta}\delta(t-t')
\tag{fp-langevin-noise}
$$

である。$t$ は物理時間、$\beta>0$ は逆温度であり、第2章と同じ単位を用いる。$\eta$ は位置に依存しない加法的なGauss白色雑音とする。

### 雑音の増分と時間の尺度

白色雑音による時間幅 $\Delta t$ の間の変位を、積分

$$
\Delta\xi=\int_t^{t+\Delta t}\eta(u)\,du
$$

で表す。式 (@fp-langevin-noise) の平均と相関を積分すると、

$$
\begin{aligned}
\langle\Delta\xi\rangle&=0,\\
\langle(\Delta\xi)^2\rangle
&=\frac{2}{\beta}
  \int_t^{t+\Delta t}\!du\int_t^{t+\Delta t}\!dv\,\delta(u-v)
 =\frac{2\Delta t}{\beta}.
\end{aligned}
\tag{fp-noise-increment}
$$

Gauss白色雑音という仮定には、この増分がGauss分布に従い、重ならない時間区間の増分が独立であることも含まれる。従って、新しい時間区間の $\Delta\xi$ は、それ以前の運動によって決まった位置とは独立である。

増分の標準偏差は $\sqrt{2\Delta t/\beta}$ である。時間幅を小さくすると、力による変位は $\Delta t$ に比例するが、雑音による変位の大きさは $\sqrt{\Delta t}$ に比例する。このため、変位で関数をTaylor展開して平均するときには、雑音の二次の項までが時間一次に寄与する。

### デルタ関数で密度を表す

時刻 $t$ の粒子の位置を $y$ に固定し、移動先の密度を表す座標を $x$ とする。Langevin方程式を、短い区間ごとに始点で力を評価する更新

$$
y\longmapsto y+\Delta y,
\qquad
\Delta y=-U'(y)\Delta t+\Delta\xi
\tag{fp-one-step}
$$

の連続時間極限として捉える。この一歩の雑音だけについて平均すると、式 (@fp-noise-increment) より、

$$
\begin{aligned}
\langle\Delta y\rangle&=-U'(y)\Delta t,\\
\langle(\Delta y)^2\rangle
&=\frac{2\Delta t}{\beta}+[U'(y)]^2(\Delta t)^2.
\end{aligned}
$$

一つの粒子が $y$ にあるとき、その位置の密度は $\delta(x-y)$ で表せる。一歩進むと $\delta(x-y-\Delta y)$ に移り、その雑音平均が、始点 $y$ からの移動先の確率密度になる。以下ではデルタ関数を分布として扱い、その微分はすべて移動先の座標 $x$ に作用する。例えば、滑らかな始点の密度 $P(y,t)$ を掛けて積分すると、

$$
\int_{\mathbb R}\!dy\,P(y,t)\partial_x\delta(x-y)
=\partial_x\int_{\mathbb R}\!dy\,P(y,t)\delta(x-y)
=\partial_xP(x,t)
$$

となる。二階微分も同様に扱え、密度に $U'(y)$ を掛けた場合には $U'(x)P(x,t)$ の微分が得られる。このように密度を掛けて積分する意味で、デルタ関数の移動を変位 $\Delta y$ の二次まで展開しよう。

$$
\begin{aligned}
\bigl\langle\delta(x-y-\Delta y)\bigr\rangle
&=\delta(x-y)
 -\langle\Delta y\rangle\,\partial_x\delta(x-y)
 +\frac12\langle(\Delta y)^2\rangle\,\partial_x^2\delta(x-y)
 +o(\Delta t)\\
&=\delta(x-y)
 +\Delta t\left[U'(y)\partial_x\delta(x-y)
 +\frac1\beta\partial_x^2\delta(x-y)\right]
 +o(\Delta t).
\end{aligned}
\tag{fp-delta-increment}
$$

上式は分布の平行移動を展開したもので、剰余も分布の意味で $o(\Delta t)$ となる。固定した $y$ では、Gauss増分の絶対三次モーメントが $O((\Delta t)^{3/2})$ なので、二次までの展開で時間一次の寄与をすべて取り出せる。雑音の一次平均は消えても、二次の項では係数 $1/2$ と分散 $2\Delta t/\beta$ の積が残る。これが密度の二階微分、すなわち拡散を生む。

### 確率密度の時間発展

次に、始点 $y$ の分布も $P(y,t)$ で平均する。一歩後の密度は移動先のデルタ関数の平均であり、一歩前の密度との差は

$$
\begin{aligned}
P(x,t+\Delta t)-P(x,t)
&=\int_{\mathbb R}\!dy\,P(y,t)
 \left[\bigl\langle\delta(x-y-\Delta y)\bigr\rangle-\delta(x-y)\right]\\
&=\Delta t\left[
 \partial_x\int_{\mathbb R}\!dy\,U'(y)P(y,t)\delta(x-y)
 +\frac1\beta\partial_x^2\int_{\mathbb R}\!dy\,P(y,t)\delta(x-y)
 \right]+o(\Delta t)\\
&=\Delta t\left[\partial_x\bigl(U'(x)P(x,t)\bigr)
 +\frac1\beta\partial_x^2P(x,t)\right]+o(\Delta t)
\end{aligned}
$$

となる。最初の等式は一歩の更新に対するもので、その連続時間極限を取る。微分 $\partial_x$ は始点の積分の外に出せ、デルタ関数の積分は $y=x$ の値を取り出す。このため、ドリフトの微分は $U'P$ 全体に作用する。

ここでは更新の連続時間極限が存在し、剰余を始点について平均しても $o(\Delta t)$ となると仮定する。例えば、$U'$ が高々線形に増大し、考える時間範囲で位置の三次モーメントが一様に有限なら、上の絶対三次モーメントによる評価を積分にも使える。$\Delta t$ で割って極限を取ると、分布の意味でFokker–Planck方程式が得られる。$P$ が必要な微分をもつ場合には通常の微分方程式として、

$$
\boxed{\quad
\partial_tP
=\partial_x(U'P)+\frac1\beta\partial_x^2P
=\partial_x\left(\frac1\beta\partial_x+U'\right)P
\quad}
\tag{fp-density-equation}
$$

が得られる。第2章のFokker–Planck方程式と同じ係数、同じ物理時間である。

ドリフトの速度 $-U'$ に密度を掛けると、各位置を単位時間に通過する確率流 $-U'P$ が得られる。雑音による拡散の流れも合わせると、

$$
j=-U'P-\frac1\beta\partial_xP,
\qquad
\partial_tP=-\partial_xj
$$

と書けば、ある区間の確率の変化は両端を通る流れの差になる。速度が場所によって変われば粒子の間隔も変わるので、ドリフトの密度変化には $U'\partial_xP$ と $U''P$ の両方が含まれる。無限遠で $j$ が消えるなら全確率が保存される。円周上ではデルタ関数を周期的なデルタ関数に置き換えれば同じ導出ができ、周期的な $U,P$ に対して全確率が保存される。

<details>
<summary>Check the drift by transforming the density</summary>

雑音を除いた一歩の移動で、場所ごとの速度の違いが密度をどう変えるかを直接確かめる。移動前の位置を $x$、移動後を $y$ とすると、

$$
y=x-U'(x)\Delta t,
\qquad
\frac{dy}{dx}=1-U''(x)\Delta t.
$$

十分小さい $\Delta t$ では、この写像は局所的に逆に解ける。対応する微小区間に入る確率は保存されるので、

$$
P(y,t+\Delta t)\,dy=P(x,t)\,dx.
$$

逆写像 $x=y+U'(y)\Delta t+O((\Delta t)^2)$ と、そのJacobianを使えば、

$$
\begin{aligned}
P(y,t+\Delta t)
&=P\bigl(y+U'(y)\Delta t,t\bigr)
  \bigl[1+U''(y)\Delta t\bigr]+O((\Delta t)^2)\\
&=P(y,t)+\bigl[U'(y)\partial_yP(y,t)+U''(y)P(y,t)\bigr]\Delta t
  +O((\Delta t)^2).
\end{aligned}
$$

粒子の移動は密度の空間微分を伴う項を生み、対応する区間の長さの変化はポテンシャルの二階微分を伴う項を生む。二つの効果を合わせた $\partial_y(U'P)$ が、確率流の微分として得たドリフト項に一致する。

</details>
