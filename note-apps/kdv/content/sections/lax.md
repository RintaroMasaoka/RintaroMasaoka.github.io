### 2.2. Lax表示

ここで、一つの大きな発想の転換を導入する。KdV 方程式の未知関数を、Schrödinger 方程式のポテンシャルとして読み直してみよう。

まず $u=-\eta$ と置くと、KdV 方程式 (@equation-4fefabb2db) は
$$
u_t=\frac{u_{xxx}-6uu_x}{4}
\tag{equation-0e5e42e46f}
$$
となる。この $u(x,t)$ をポテンシャルとする Schrödinger 演算子
$$
L(t)=-\partial_x^2+u(x,t)
$$
を考える。

$u(x,t)$ が時間とともに変われば、それに応じて演算子 $L(t)$ も変わる。そこで、KdV 方程式を、この演算子の時間発展を表す方程式として書き直してみよう。

そのために、$L$ と組にする演算子 $B$ を次の形で与える。ここで $\partial$ は $x$ 微分、$u$ と $u_x$ はそれぞれの関数を掛ける演算子である。
$$
B(t)=\partial^3-\frac32u\partial-\frac34u_x.
\tag{equation-bec8ddf787}
$$
この組を Lax 対、$L$ を Lax 演算子と呼ぶ。この $B$ を使うと、KdV 方程式 (@equation-0e5e42e46f) は
$$
\frac{\mathrm{d}L}{\mathrm{d}t}=[B(t),L(t)]
\tag{equation-b75f31fbba}
$$
と書ける。これが Lax 方程式であり、$[B,L]=BL-LB$ は交換子である。実際、左辺は $u_t$、右辺は $(u_{xxx}-6uu_x)/4$ を掛ける演算子になるので、両者の等式が KdV 方程式そのものになる。

<div data-extra-visual="formal-commutator"></div>

次に、$L(t)$ の固有値問題
$$
L(t)\psi(x,t)=\lambda\psi(x,t)
\tag{lax-schrodinger-problem}
$$
を考える。この $B$ は、固有関数のユニタリな時間発展の生成子にもなる。そのために必要な反エルミート性を確かめよう。ここでは $u$ は実数値で滑らかとし、部分積分する関数と必要な導関数は無限遠で急減衰するとする。境界項が消えるので $\partial^\dagger=-\partial$ であり、$u$ による掛け算は自己随伴である。積の微分則 $\partial u=u\partial+u_x$ を使うと、
$$
\begin{aligned}
B&=\partial^3-\frac34(u\partial+\partial u),\\
B^\dagger&=-\partial^3+\frac34(\partial u+u\partial)=-B.
\end{aligned}
$$
積の随伴では順序が逆になるため、$u\partial$ と $\partial u$ を対にした形から反エルミート性がわかる。

初期時刻の固有関数を
$$
L(0)\psi(x,0)=\lambda\psi(x,0)
\tag{equation-7de551f92c}
$$
とし、$B(t)$ によって次のように発展させる。
$$
\psi(x,t)=U(t)\psi(x,0),\qquad
\frac{\mathrm{d}U(t)}{\mathrm{d}t}=B(t)U(t),\qquad U(0)=I.
\tag{equation-c5292b67c8}
$$
$I$ は恒等演算子である。$B^\dagger=-B$ なので $U(t)$ はユニタリであり、$\psi$ のノルムは保たれる。

Lax 方程式が意味するのは、この同じ $U(t)$ によって $L$ も
$$
U(t)L(0)U(t)^{-1}=L(t)
\tag{equation-b2bc328c22}
$$
と変化することである。両辺が同じ Lax 方程式と初期条件を満たすことから、この共役変換の式が確かめられる。

<details>
<summary>Verify the conjugation formula</summary>

$U(t)U(t)^{-1}=I$ を微分し、$U_t=BU$ を代入すると、
$$
\frac{\mathrm{d}}{\mathrm{d}t}U(t)^{-1}=-U(t)^{-1}B(t).
\tag{equation-efb1ce1c1d}
$$
従って、
$$
\frac{\mathrm{d}}{\mathrm{d}t}\left(U(t)L(0)U(t)^{-1}\right)
=[B(t),U(t)L(0)U(t)^{-1}].
\tag{equation-ddc22d336a}
$$
これは $L(t)$ の満たす Lax 方程式と同じであり、初期値も $U(0)L(0)U(0)^{-1}=L(0)$ と一致するので、式 (@equation-b2bc328c22) を得る。

</details>

この共役変換から、固有値保存が直接わかる。初期時刻の固有値方程式 (@equation-7de551f92c) に左から $U(t)$ を掛け、$\psi(x,0)=U(t)^{-1}\psi(x,t)$ を代入すると、
$$
U(t)L(0)U(t)^{-1}\psi(x,t)=\lambda\psi(x,t).
\tag{equation-330d5d4785}
$$
共役変換の式 (@equation-b2bc328c22) を使えば、
$$
L(t)\psi(x,t)=\lambda\psi(x,t).
\tag{equation-addf34bd26}
$$
すなわち、$B$ によって発展させた固有関数は、変化したポテンシャルのもとでも、同じ固有値 $\lambda$ をもつ。非線形に変わる波形をこの Schrödinger 問題で捉えると、固有値は固定され、その間の変化は固有関数の発展に現れる。
