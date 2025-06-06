+++
lang_ja = true
title = "c定理とg定理"
+++

# c定理

以下でZamolodchikovの$c$-定理を証明する。

$c$-定理の主張は中心電荷がくりこみ群フローに沿って単調減少することである。厳密には中心電荷は臨界点上でしか定義できないので、あるくりこみ群フローに沿って単調減少する関数 $C$ が存在し、かつ固定点では $C = c$ となる、ということを示す。

設定としては以下のバルクの摂動を考える。

$$
\begin{align*}
S_{\mathrm{pert}}[g] = ∑_i\frac{λ_i}{ε^{2-Δ_i}} ∫d^2x \sqrt{|g|} φ_i(x).
\end{align*}
$$

ここで $Δ_i<2$ とする。また式は少し長くなってしまうが、くりこみを考えるときにはカットオフ $ε$ を常に付けておくほうが分かりやすいと思ったので、加えている。

エネルギー運動量テンソルのトレース $Θ$ は摂動の下で一般にゼロにならず、

$$
\begin{align*}
\frac{Θ(z,\overline{z})}{ε^{-2}} = ∑_i  β_i(λ) \frac{φ_i(z,\overline{z})}{ε^{-Δ_i}}.
\end{align*}
$$

と表される。これを導出するために共形変換に対する作用の変化を見れば良い。 共形変換はWeyl変換と一般座標変換の組み合わせとして表せる。一般座標変換は座標の取り替えに過ぎず、作用を保つため、Weyl変換による作用の変化を考える。 Weyl変換は

$$
\begin{align*}
g_{μν} ↦ e^{- 2σ(x)} g_{μν}
\end{align*}
$$

によって与えられる。ここで $σ(x)$ は微小な任意関数とする。このとき作用の微小変化は

$$
\begin{align*}
δ_gS =  \frac12∫d^2x\sqrt{|g|}T^{μν}δg_{μν}
= - ∫d^2x\sqrt{|g|}σ(x)Θ.
\end{align*}
$$

である。一方、共形変換は摂動場の変換

$$
\begin{align*}
φ_i(x)d^2x ↦ \left(1 - \frac{β_i(λ)}{λ_i}σ(x)\right)φ_i(x)d^2x
\end{align*}
$$

とみなすこともできる。 $β_i(λ)$ はベータ関数であり、$λ$の1次までだと $φ_id^2x ↦ e^{(2-Δ_i)σ(x)}φ_id^2x$ である。 これらが一致することから、

$$
\begin{align*}
\frac{Θ(z,\overline{z})}{ε^{-2}} = ∑_i  β_i(λ) \frac{φ_i(z,\overline{z})}{ε^{-Δ_i}}.
\end{align*}
$$

エネルギー運動量テンソルのトレースを

$$
{T^μ}_μ = 2(T_{\overline{z}z} + T_{z\overline{z}}) = 4T_{\overline{z}z} ≕ Θ
$$

とおく。ここでエネルギー運動量テンソルの対称性を用いた。

保存則 $∂_μ{T^μ}_ν = 0$ を複素表示で書くと、

$$
\begin{align*}
∂_{\overline{z}}T_{zz} + ∂_zT_{\overline{z}z} = ∂_{\overline{z}}T + \frac14∂_zΘ = 0.
\end{align*}
$$

この関係から $T(z, \overline{z})$ と $Θ(z, \overline{z})$ の間の相関関数についての制限が得られる。回転対称性を用いると

$$
\begin{align*}&
⟨ T(z,\overline{z}) T(0,0) ⟩ = \frac{F(z\overline{z}/ε^2)}{z^4}, \\
&
⟨ Θ(z,\overline{z}) T(0,0) ⟩ = \frac{G(z\overline{z}/ε^2)}{z^3\overline{z}}, \\
&
⟨ Θ(z,\overline{z}) Θ(0,0) ⟩ = \frac{H(z\overline{z}/ε^2)}{z^2\overline{z}},
\end{align*}
$$

とおける。先ほどの保存則を用いると、

$$
\begin{align*}&
∂_{\overline{z}}\frac{F}{z^4}
+ \frac14 ∂_z\frac{G}{z^3\overline{z}}
= \frac{(z\overline{z}/ε^2)F'}{z^4\overline{z}} + \frac{(z\overline{z}/ε^2)G'-3G}{4z^4\overline{z}} = 0.
\end{align*}
$$

同様に、

$$
\begin{align*}
&
∂_{\overline{z}}\frac{G}{z^3\overline{z}}
+ \frac14 ∂_z\frac{H}{z^2\overline{z}^2} 
= \frac{(z\overline{z}/ε^2)G'-G}{z^3\overline{z^2}}
+ \frac{(z\overline{z}/ε^2)H'-2H}{4z^3\overline{z}^2} = 0.
\end{align*}
$$

さて、$c$-functionを

$$
\begin{align*}
C ≔ C(z\overline{z}/ε^2;λ) = 2F - G - \frac{3}{8}H
\end{align*}
$$

と定義する。臨界点上では $G=H=0$ なので $c$-functionは中心電荷 $c$ に一致することに注意する。 $c$-functionを $z\overline{z}/ε^2$ について微分すると、

$$
\begin{align*}
C'
&
= 2F' - G' - \frac38H'  \\
&
= -\frac1{2}\left(G'-\frac{3G}{z\overline{z}/ε^2}\right)
-G'
+\frac{3}{2}\left(G'-\frac{G}{z\overline{z}/ε^2}\right) - \frac{3H}{4z\overline{z}/ε^2}  \\
&
= -\frac{3H}{4z\overline{z}/ε^2}.
\end{align*}
$$

くりこみ群フローに沿った$c$-functionの変化は

$$
\begin{align*}
	 -\frac{∂C}{∂\lnε} = 2 (z\overline{z}/ε^2)\frac{∂C}{∂(z\overline{z}/ε^2)} = -\frac{3}{2}H ≤ 0.
\end{align*}
$$

ここで $H ≥ 0$ はunitarity (reflection positivity)の帰結。Reflection $z ↦ \overline{z}$ を考えると、

$$
\begin{align*}
	⟨T_{z\overline{z}}(z, \overline{z})T_{\overline{z}z}(\overline{z}, z)⟩ = \frac1{16}⟨Θ(z,\overline{z})Θ(\overline{z},z)⟩ ≥ 0.
\end{align*}
$$

よって $H≥0$ が従う。

くりこみの枠組みはスケールの変化を結合定数の変化によって相殺して同じ理論を得る、というものだった。これを式として表現したのが以下のCallan-Symanzik equationである。

$$
\begin{align*}
\left(\frac{∂}{∂\lnε} + ∑_i β_i(λ)\frac{∂}{∂λ_i}\right)C(z\overline{z}/ε^2, λ) = 0.
\end{align*}
$$

もう少し丁寧な導出:

$$
\begin{align*}
\frac{∂}{∂\lnε}⟨\mathcal{O}⟩
&
= - \frac1{Z}∫\mathcal{D}φ \mathcal{O}\frac{∂S}{∂\lnε}e^{-S} + \frac1{Z^2}∫\mathcal{D}φ \frac{∂S}{∂\lnε}e^{-S} ∫\mathcal{D}φ \mathcal{O}e^{-S} \\
&
= -∫d^2z ⟨Θ(z, \overline{z})\mathcal{O}⟩_c \\
&
= -∫\frac{d^2z}{ε^2} ∑_i β_i \left\langle \frac{φ_i(z, \overline{z})}{ε^{-Δ_i}}\mathcal{O} \right\rangle_c \\
&
= -∑_i β_i \frac{∂}{∂λ_i} ⟨\mathcal{O}⟩.
\end{align*}
$$

これを用い、$H$ の定義に $Θ$ の表示(5.15)を代入し、さらに $|z|=1$ とすると、

$$
\begin{align*}
-\frac{∂C}{∂\lnε}
&
= ∑_j β_j\frac{∂}{∂λ_j}C(1/ε^2;λ) \\
&
= -\frac{3}{2}H = -\frac{3}{2}∑_{i,j}β_iβ_j\frac{⟨φ_i(1,1)φ_j(0, 0)⟩}{ε^{-Δ_i-Δ_j}} \\
&
≕ -∑_{ij}β_iβ_jG_{ij}.
\end{align*}
$$

よって($β$-functionの線形独立性を仮定して)以下の式を得る:

$$
\begin{align*}
\frac{∂}{∂λ_j}C(1/ε^2;λ) = - ∑_i β_iG_{ij}.
\end{align*}
$$

これは先ほどより明らかな形で理論空間の中での$c$-functionの勾配を与える。$G_{ij}$ はZamolodchikov計量と呼ばれ、worldsheet theoryのmoduli spaceにおける計量となるらしい。unitary (reflection positive)な理論では同一の場の2点関数は正なので、Zamolodchikov計量は正定値になる。

# g定理

$g$-定理はざっくり言うと、boundary CFTにおいてidentityの1点関数がRGフローに沿って単調減少することを主張している。
中心電荷とidentiyの1点関数は似ても似つかないように思われるが、両者がエントロピーに結びつくことを考慮すると$g$-定理はもっともらしく思えてくる。
周長が $R$, 長さが $L$ のシリンダーを考える。 $R=1/T$ である。$T$ は温度 。
シリンダーの周方向の座標を $τ$, シリンダーの軸方向の座標を $x$ とおく。
両端の境界( $x = 0, L$ )にboundary state $\| α ⟩\!⟩$ がいるとする。

このとき分配関数は $L → ∞$ の極限で以下のように書かれる。

$$
\begin{align*}
\ln Z ≈ \frac{πc}{6} \frac{L}{R} + \ln(Z_{\mathrm{bdy}}^2).
\end{align*}
$$

境界分配関数の対数 $\ln Z_\mathrm{bdy}$ は $g_α(0)$ に同定される。分配関数をちゃんと書くと、

$$
\begin{align*}
Z_{αα}(q) = ⟨\!⟨ α \|\tilde{q}^{L_0-c/24}\|α ⟩\!⟩.
\end{align*}
$$

ここで $\tilde{q}=e^{-4πL/R}$ である。 $q=e^{-2πL/R}$ と比べて $2$ がつくのは正則と半正則の両方の寄与があるから。

$L→∞$ での主要な寄与は真空から来るので、

$$
\begin{align*}
Z_{αα}(q) ≈ \exp\left(\frac{πc}{6}\frac{L}{R}\right)|⟨ \! ⟨ α \| 0 ⟩|^2
\end{align*}
$$

となる。この対数をとれば $\ln Z_\mathrm{bdy} = g_α(0)$ を得る。

自由エネルギーは $F = -T\ln Z$ であるから、境界エントロピーは

$$
\begin{align*}
\mathcal{S}_\mathrm{bdy} ≔ -\frac{∂F_\mathrm{bdy}}{∂T} = \left(1-R\frac{∂}{∂R}\right)\ln Z_\mathrm{bdy}
\end{align*}
$$

と定義できる。共形不変な境界条件の場合、 $Z_\mathrm{bdy}$ はくりこみ不変なので $\mathcal{S}_\mathrm{bdy}$ は $\ln g_α$ に一致する。ここではRGフローに沿って $g$ が単調減少することの代わりに $\mathcal{S}_\mathrm{bdy}$ が単調減少することを示す。

境界エントロピーは以下の勾配をもつ:

$$
\begin{align*}
\frac{∂\mathcal{S}_\mathrm{bdy}}{∂λ^a} = - ∑_b β_b(λ)g_{ab}(λ)
\end{align*}
$$

ここで計量 $g_{ab}$ は

$$
\begin{align*}
g_{ab} ≔ ∫\frac{dτ'dτ}{ε^{2-h_a-h_b}} \left\langleψ_a(τ')ψ_b(τ)\right\rangle_c
\left(1-\cos\left[\frac{2π(τ'-τ)}{R}\right]\right)
\end{align*}
% g_{ab} = ∫^{2π}_0 \frac{Rdω}{2π}\sin^2\left(\frac{ω}{2}\right)⟨ψ_a(Re^{iω})ψ_b(R)⟩
$$

と定義される。これは境界におけるZamolodchikov計量の対応物である。ただ $\cos$ のウェイトがくっついているのがちょっと変に感じる。

ともかく、これを認めるとRGフローに沿った境界エントロピーの変化は、

$$
\begin{align*}
-\frac{∂\mathcal{S}_\mathrm{bdy}}{∂\lnε}
= ∑_aβ_a\frac{∂\mathcal{S}_\mathrm{bdy}}{∂λ_a}
= - ∑_{a,b} β_aβ_b g_{ab} ≤ 0.
\end{align*}
$$

$g_{ab}$ は半正定値なので、境界エントロピーは単調減少する。

境界エントロピーの勾配の導出は結構面倒。以降は [(Friedan and Konechny, 2004)](http://arxiv.org/abs/hep-th/0312197) に従う。まず以下のように変形する。

$$
\begin{align*}
 \frac{∂S_\mathrm{bdy}}{∂λ^a} &
 = \left(1+\frac{∂}{∂\ln ε}\right) \frac{∂\ln Z_\mathrm{bdy}}{∂λ^a} \\
 &
 = \left(1+\frac{∂}{∂\lnε}\right)∫\frac{dτ'}{ε} \left\langle\frac{ψ_a(τ')}{ε^{-h_a}}\right\rangle \\
 &
  = \left(1+\frac{∂}{∂\lnε}\right)\frac{R}{ε} \left\langle\frac{ψ_a(0)}{ε^{-h_a}}\right\rangle \\
 &
 = \frac{R}{ε} \frac{∂}{∂\lnε}\left\langle\frac{ψ_a(0)}{ε^{-h_a}}\right\rangle \\
 &
 = -∫\frac{Rdτ}{ε^{1-h_a}}⟨ψ_a(0)θ(τ)⟩_c
 - ∫\frac{Rdτdx}{ε^{1-h_a}} ⟨ψ_a(0)Θ(x, τ)⟩_c
\end{align*}
$$

第1項は境界の寄与で、$θ(τ)$ は境界のエネルギー運動量テンソルである。第1項は $β$ 関数を使って以下のように書ける。

$$
\begin{align*}
∫\frac{Rdτ}{ε^{1-h_a}} \left\langleψ_a(0)θ(τ)\right\rangle_c
= ∑_b β_b  ∫\frac{Rdτ}{ε^{2-h_a-h_b}} \left\langleψ_a(0)ψ_b(τ)\right\rangle_c
\end{align*}
$$

第2項のバルクの寄与の処理がちょっと大変。まず以下の共形Killingベクトルを定義する。

$$
\begin{align*}
	v = \frac{R}{4π}\sinh w,\quad \overline{v} = \frac{R}{4π}\sinh\overline{w}
\end{align*}
$$

ここで $w = 2π(x+iτ)/R$ である。$∂_σv^σ$ を計算しておく。

$$
\begin{align*}
∂_σv^σ = \frac{2π}{R} (∂_wv + ∂_{\overline{w}}\overline{v})
= \Re \cosh w
=\cosh\frac{2πx}{R}\cos\frac{2πτ}{R}
\end{align*}
$$

$Θ$ は基本的には常にゼロであり、接触項だけ気にする必要がある。ここで $w ≈ 0$ で $∂_σv^σ ≈ 1$ であることを用いて、

$$
\begin{align*}
ψ_a(0)Θ(x,τ) ≈ ψ_a(0)Θ(x,τ)∂_σv^σ
\end{align*}
$$

としてしまおう。$h_a < 1$ から接触項として出てくるのは高々 $δ'(τ)δ(x), δ(τ)δ'(x)$ であり、$1-∂_σv^σ$ は $w=0$ で1次微分係数までゼロだから、この変形は正当化される。

さらに、共形Killing方程式を用いて

$$
\begin{align*}
Θ(x,τ)∂_σv^σ
&
= T^{μν}g_{μν}∂_σv^σ\\
&
= T^{μν}(∂_μv_ν+∂_νv_μ)\\
&
 = 2T^{μν}∂_μv_ν
\end{align*}
$$

と書ける。よって

$$
\begin{align*}
∫\frac{Rdτdx}{ε^{1-h_a}}⟨ψ_a(0)Θ(x,τ)⟩∂_σv^σ
&
= 2∫\frac{Rdτdx}{ε^{1-h_a}}⟨ψ_a(0)T^{μν}(x,τ)⟩∂_μv_ν\\
&
= 2∫\frac{Rdτdx}{ε^{1-h_a}}∂_μ(⟨ψ_a(0){T^μ}_ν(x,τ)⟩v^ν)\\
&
= 2∫\frac{Rdτ}{ε^{1-h_a}}⟨ψ_a(0){T^x}_τ(0,τ)⟩v^τ \\
&= ∫\frac{R^2dτ}{2πε^{1-h_a}}⟨ψ_a(0){T^x}_τ(0,τ)⟩\sin\frac{2πτ}{R}.
\end{align*}
$$

境界での保存則 ${T^x}_τ + ∂_τθ=0$ を使うと、

$$
\begin{align*}&
∫\frac{R^2dτ}{2πε^{1-h_a}}⟨ψ_a(0){T^x}_τ(0,τ)⟩\sin\frac{2πτ}{R}\\
&
= - ∫\frac{R^2dτ}{2πε^{1-h_a}}⟨ψ_a(0)∂_τθ(τ)⟩\sin\frac{2πτ}{R} \\
&
= ∫\frac{Rdτ}{ε^{1-h_a}}⟨ψ_a(0)θ(τ)⟩\cos\frac{2πτ}{R} \\
&
= ∑_b β_b ∫\frac{Rdτ}{ε^{2-h_a-h_b}}⟨ψ_a(0)ψ_b(τ)⟩\cos\frac{2πτ}{R}.
\end{align*}
$$

***

以下、境界での保存則の導出。境界を保つような座標変換 $x↦x+ξ$ に対して $δS$ は、

$$
\begin{align*}
δS &
= ∫ dτdx {T^μ}_ν ∂_μξ^ν + ∫dτ θ(τ)∂_τξ^τ(0,τ) \\
&
= ∫ dτdx ∂_μ ({T^μ}_νξ^ν) + ∫dτ θ(τ)∂_τξ^τ(0,τ) \\
&
= ∫dτ (-{T^x}_τ(0,τ)-∂_τθ(τ))ξ^τ(0,τ).
\end{align*}
$$

よって運動方程式を使うと ${T^x}_τ + ∂_τθ=0$ が導かれる。

***

計算完了！ということで結果:

$$
\begin{align*}
\frac{∂S_\mathrm{bdy}}{∂λ_a}
&
= - ∑_a β_b  ∫\frac{Rdτ}{ε^{2-h_a-h_b}} \left\langleψ_a(0)ψ_b(τ)\right\rangle_c \left(1-\cos\frac{2πτ}{R}\right) \\
&
= -∑_b β_b g_{ab}.
\end{align*}
$$

# 参考文献
> [Recknagel and Schomerus (2013). Boundary Conformal Field Theory and the Worldsheet Approach to D-Branes](https://www.cambridge.org/core/books/boundary-conformal-field-theory-and-the-worldsheet-approach-to-dbranes/4F26D0C19081F3FFB8C85F75756F1066)

> [Friedan and Konechny (2004). On the Boundary Entropy of One-dimensional Quantum Systems at Low Temperature](http://arxiv.org/abs/hep-th/0312197)

> [c-theorem (nLab)](https://ncatlab.org/nlab/show/c-theorem)