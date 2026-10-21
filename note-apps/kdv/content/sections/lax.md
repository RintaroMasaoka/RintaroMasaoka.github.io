### 2.2. Lax表示

Lax 表示では、KdV 方程式を Schrödinger 演算子を含む二つの微分演算子の関係として表す。以下ではその具体形を与え、KdV 方程式との同値性と、時間発展で固有値が保たれることを確かめる。

量子力学では、周囲より低いポテンシャルが粒子の閉じ込めを生む。山状の波 $\eta>0$ をその低いポテンシャルに対応させるため、ここで変数を
$$
u(x,t)=-\eta(x,t)
$$
に切り替え、以後はポテンシャル $u$ を使う。式 (@equation-4fefabb2db) に代入すると、その時間発展は
$$
u_t=6uu_x-u_{xxx}
\tag{equation-0e5e42e46f}
$$
となる。この $u$ を用いて、次の二つの演算子を定める。

$$
\begin{aligned}
L(t) = -\partial^2 + u,\quad
    B(t) = -4\partial^3 + 6u\partial + 3u_x
\end{aligned}\tag{equation-bec8ddf787}
$$

 表記について注意をすると、$\partial$は$x$に関する偏微分を表す演算子とする。 また$u$と書いた場合、$u(x,t)$を左から掛ける演算子を表すことにする。$u_x$などに関しても同様である。

$L(t),B(t)$をLax対と呼ぶ。 また$L(t)$はLax演算子と呼ばれ、今の場合1次元の量子力学のHamiltonianと同じ形をしている。 $L(t), B(t)$によって、KdV方程式(@equation-0e5e42e46f)は

$$
\begin{aligned}
\frac{\mathrm{d} L}{\mathrm{d} t} = [B(t), L(t)]
\end{aligned}\tag{equation-b75f31fbba}
$$

 と書き換えられる。これをLax方程式と呼ぶ。また与えられた方程式を(@equation-b75f31fbba)のように表すことをLax表示という。 Lax表示はKdV方程式に特有のものではなく、多くの可積分系に対するLax表示が知られている。

KdV方程式とLax方程式(@equation-b75f31fbba)が同値であることを証明しよう。 (@equation-b75f31fbba)の左辺は

$$
\begin{aligned}
\frac{\mathrm{d} L}{\mathrm{d} t} = u_t
\end{aligned}
$$

 となる。つぎに右辺を計算すると、

$$
\begin{aligned}
[B(t), L(t)]
    &
    = [-4\partial^3 + 6u\partial + 3u_x, -\partial^2 + u]
\end{aligned}
$$

$$
\begin{aligned}
&
    = -4(u_{xxx} + \cancel{3u_{xx}\partial} + \bcancel{3u_x\partial^2})+ 6uu_x
\end{aligned}
$$

$$
\begin{aligned}
&\quad
    + 6(\cancel{u_{xx}\partial} +\bcancel{ 2u_x\partial^2})
\end{aligned}
$$

$$
\begin{aligned}
&\quad
    + 3(u_{xxx} + \cancel{2u_{xx}\partial})
\end{aligned}
$$

$$
\begin{aligned}
&
    = 6uu_x - u_{xxx}
\end{aligned}
$$

 となる。両辺を等号で結ぶことでKdV方程式を得る。Lax方程式は演算子の等式であったが、両辺が微分演算子$\partial$を含まないために、$u$に対する偏微分方程式とみなせる。

Lax方程式(@equation-b75f31fbba)では、$B(t)$は時間発展の生成子となっている。するとLax方程式は Hamiltonian $L(t)$の$B(t)$による時間発展を考えていることになる。 ここで、$L(0)$を対角化して

$$
\begin{aligned}
L(0)\psi(x, 0) = \lambda \psi(x, 0)
\end{aligned}\tag{equation-7de551f92c}
$$

 と書く。$\psi(x, 0)$は$L(0)$の固有値$\lambda$の固有関数である。これを時間発展させてみよう。 $\psi(x, t)$の時間発展を記述する方程式として、

$$
\begin{aligned}
\psi(x, t) = U(t)\psi(x, 0),\quad
    \frac{\mathrm{d} U(t)}{\mathrm{d} t} = B(t)U(t),\quad
    U(0) = I
\end{aligned}\tag{equation-c5292b67c8}
$$

 を課す。$I$ は恒等演算子である。まず、この発展で波動関数のノルムが保たれることを確かめよう。以下では $u$ は実数値とし、$u,\psi$ と必要な微分は滑らかで急減衰し、積分と時間微分を交換できるとする。

$\psi_t=B\psi$ なので、ノルムの二乗の時間変化は
$$
\begin{aligned}
\frac{d}{dt}\int_{\mathbb R}|\psi|^2dx
&=2\operatorname{Re}\int_{\mathbb R}\overline\psi\,\psi_t\,dx\\
&=2\operatorname{Re}\int_{\mathbb R}\overline\psi\,
(-4\psi_{xxx}+6u\psi_x+3u_x\psi)\,dx.
\end{aligned}
$$
ここで $B$ の三階微分の項と、$u$ を含む二項を分けて計算する。

三階微分の項は、部分積分と $\partial_x|\psi_x|^2=2\operatorname{Re}(\overline{\psi_x}\psi_{xx})$ により
$$
\begin{aligned}
\operatorname{Re}\int_{\mathbb R}\overline\psi\,\psi_{xxx}\,dx
&=-\operatorname{Re}\int_{\mathbb R}\overline{\psi_x}\,\psi_{xx}\,dx\\
&=-\frac12\int_{\mathbb R}\partial_x|\psi_x|^2dx=0.
\end{aligned}
$$
最初の部分積分の境界項も、最後の全微分の積分も、無限遠での減衰により消える。

残りの二項は、$u$ が実数値であることと $\partial_x|\psi|^2=2\operatorname{Re}(\overline\psi\psi_x)$ を使うと、一つの全微分にまとまる。
$$
\begin{aligned}
2\operatorname{Re}\int_{\mathbb R}\overline\psi\,(6u\psi_x+3u_x\psi)\,dx
&=6\int_{\mathbb R}\bigl(u\partial_x|\psi|^2+u_x|\psi|^2\bigr)dx\\
&=6\int_{\mathbb R}\partial_x\bigl(u|\psi|^2\bigr)dx=0.
\end{aligned}
$$
ここでも境界項は減衰により消える。$B$ の $6u\partial$ と $3u_x$ がこの組合せになっているため、$u$ を含む項もノルムを変えない。

従ってノルムの二乗の時間微分は0であり、
$$
\int_{\mathbb R}|\psi(x,t)|^2dx
=\int_{\mathbb R}|\psi(x,0)|^2dx
$$
となる。特に、初めに規格化した固有関数は規格化されたまま時間発展する。次に Lax 方程式を使い、$\psi(x,t)$ が $L(t)$ の固有関数でもあることを示そう。

(@equation-7de551f92c)の両辺に左から$U(t)$を掛けると、

$$
\begin{aligned}
U(t)L(0)U(t)^{-1}\psi(x,t) = \lambda \psi(x,t).
\end{aligned}\tag{equation-330d5d4785}
$$

 となる。ここで、$U(t)L(0)U(t)^{-1}$を時間微分する。 $U(t)U(t)^{-1} = I$を時間微分すると

$$
\begin{aligned}
\frac{\mathrm{d}}{\mathrm{d} t}U(t)^{-1} = - U(t)^{-1}B(t)
\end{aligned}\tag{equation-efb1ce1c1d}
$$

 が分かるので、

$$
\begin{aligned}
\frac{\mathrm{d}}{\mathrm{d} t}\left(U(t)L(0)U(t)^{-1}\right) = [B(t), U(t)L(0)U(t)^{-1}]
\end{aligned}\tag{equation-ddc22d336a}
$$

 となる。これはLax方程式なので、初期条件$U(0)L(0)U(0)^{-1} = L(0)$から、

$$
\begin{aligned}
U(t)L(0)U(t)^{-1} = L(t)
\end{aligned}\tag{equation-b2bc328c22}
$$

 となる。この両辺を$\psi(x,t)$に作用させて、

$$
\begin{aligned}
L(t)\psi(x, t) = \lambda \psi(x, t)
\end{aligned}\tag{equation-addf34bd26}
$$

 となる。 すなわち、$B(t)$によって時間発展する波動関数$\psi(x, t)$は、任意の時刻で$L(t)$の固有関数である。 さらに、$\psi(x,t)$に対する$L(t)$の固有値は常に$\lambda$で時間に依存しない。 [^src-3-1]

[^src-3-1]: 逆に$L(t)$の固有値が時間変化しない条件としてLax方程式を導ける。
