### 2.1. 1ソリトン解と2ソリトン解

一つの波が形を保って進むとき、その波形はどのように決まるのだろうか。まず、形を保って速度 $v>0$ で移動する進行波 $\eta(x,t)=\eta(x-vt,0)$ を求めよう。この小節のプライムは、時刻0の波形 $\eta(x,0)$ の $x$ 微分を表す。KdV 方程式に代入すると
$$
\eta'''=v\eta'-6\eta\eta'.
\tag{equation-c1de586e9e}
$$
$\eta,\eta',\eta''$ が両端で0に減衰すると仮定し、無限遠での値を使って積分すると
$$
\eta''=v\eta-3\eta^2.
\tag{equation-f9f013bed9}
$$
さらに $2\eta'$ を掛けると、両辺が全微分になる。
$$
\frac{d}{dx}(\eta')^2=\frac{d}{dx}(v\eta^2-2\eta^3).
\tag{equation-cfca48d936}
$$
もう一度無限遠の境界条件を使って積分すれば
$$
(\eta')^2=v\eta^2-2\eta^3.
\tag{equation-b9960a89fd}
$$
この方程式には次の局在した波形がある。
$$
\eta(x,0)=\frac v2\operatorname{sech}^2\!\left(\frac{\sqrt v}{2}x\right).
\tag{equation-cd51ce0162}
$$
ここで $\operatorname{sech}x=1/\cosh x$ である。[^soliton-check] 時刻 $t$ では $x$ を $x-vt$ に置き換える。振幅は $v/2$、幅の尺度は $2/\sqrt v$ なので、高い波ほど速く、幅は狭くなる。

[^soliton-check]: 式 (@equation-cd51ce0162) を微分すると

    $$
    \eta'(x,0)=-\frac{v^{3/2}}{2}\operatorname{sech}^2\!\left(\frac{\sqrt v}{2}x\right)\tanh\!\left(\frac{\sqrt v}{2}x\right).
    \tag{equation-7747abb85e}
    $$

    従って $\tanh^2=1-\operatorname{sech}^2$ より

    $$
    (\eta')^2=\frac{v^3}{4}\operatorname{sech}^4\!\left(\frac{\sqrt v}{2}x\right)\left[1-\operatorname{sech}^2\!\left(\frac{\sqrt v}{2}x\right)\right]=v\eta^2-2\eta^3.
    \tag{equation-d0224c59e1}
    $$

<div data-extra-visual="traveling"></div>


二つのソリトンが衝突する場合にも、たとえば次の解を具体的に書ける。
$$
\eta(x,t)=2\frac{\partial^2}{\partial x^2}\log\left[
1+e^{2x-8t}+e^{x-t}+\frac19e^{3x-9t}
\right].
\tag{equation-5083fcf451}
$$

この式を KdV 方程式に代入すれば、確かに解だと確認できる。けれども、式を眺めても、なぜ非線形な相互作用を経て二つの波の形と速さが保たれるのかは、まだわからない。個々の解を書き下すことから、それらに共通する構造へ目を向けよう。波形が変化する間、何が保たれているのだろうか。
