### 2.1. 1ソリトン解と2ソリトン解

一つの波が形を保って進むとき、その波形はどのように決まるのだろうか。まず、形を保って速度 $v>0$ で移動する進行波 $u(x,t)=u(x-vt,0)$ を求めよう。この小節のプライムは、時刻0の波形 $u(x,0)$ の $x$ 微分を表す。KdV 方程式に代入すると
$$
u'''=6uu'+vu'.
\tag{2.1}
$$
$u,u',u''$ が両端で0に減衰すると仮定し、無限遠での値を使って積分すると
$$
u''=3u^2+vu.
\tag{2.2}
$$
さらに $2u'$ を掛けると、両辺が全微分になる。
$$
\frac{d}{dx}(u')^2=\frac{d}{dx}(2u^3+vu^2).
\tag{2.3}
$$
もう一度無限遠の境界条件を使って積分すれば
$$
(u')^2=2u^3+vu^2.
\tag{2.4}
$$
この方程式には次の局在した波形がある。
$$
u(x,0)=-\frac v2\operatorname{sech}^2\!\left(\frac{\sqrt v}{2}x\right).
\tag{2.8}
$$
ここで $\operatorname{sech}x=1/\cosh x$ である。[^soliton-check] 時刻 $t$ では $x$ を $x-vt$ に置き換える。振幅の大きさは $v/2$、幅の尺度は $2/\sqrt v$ なので、高い波ほど速く、幅は狭くなる。

[^soliton-check]: 式 (2.8) を微分すると

    $$
    u'(x,0)=\frac{v^{3/2}}{2}\operatorname{sech}^2\!\left(\frac{\sqrt v}{2}x\right)\tanh\!\left(\frac{\sqrt v}{2}x\right).
    \tag{2.5}
    $$

    従って $\tanh^2=1-\operatorname{sech}^2$ より

    $$
    (u')^2=\frac{v^3}{4}\operatorname{sech}^4\!\left(\frac{\sqrt v}{2}x\right)\left[1-\operatorname{sech}^2\!\left(\frac{\sqrt v}{2}x\right)\right]=2u^3+vu^2.
    \tag{2.6}
    $$

<div data-extra-visual="traveling"></div>

二つの波が衝突する場合はどうだろうか。導出は後に回し、速度が $4$ と $1$ の2ソリトン解を一つ書いておこう。
$$
u(x,t)=-2\frac{\partial^2}{\partial x^2}\log\Bigl[
1+e^{2x-8t}+e^{x-t}+\frac19e^{3x-9t}
\Bigr].
\tag{2.8a}
$$
衝突の十分前と十分後には、振幅の大きさが $2$ と $1/2$、速度が $4$ と $1$ の二つの1ソリトンが現れる。衝突の間は単純な和にはならないが、衝突後もそれぞれの形と速さは保たれ、位置にずれが残る。

この式を KdV 方程式に代入すれば、確かに解だと確認できる。けれども、なぜ非線形な相互作用を経ても二つの波の形と速さが残るのかは、まだわからない。多数のソリトンを組み立てたり、一般の初期波形からその後の振る舞いを求めたりするには、個々の解に共通する仕組みを知りたい。波形が変化する間、何が保たれているのだろうか。
