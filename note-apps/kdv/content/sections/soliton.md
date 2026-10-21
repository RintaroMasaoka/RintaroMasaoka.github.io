### 2.1. 1-ソリトン解

まず、形を保って速度 $v>0$ で移動する進行波 $u(x,t)=u(x-vt,0)$ を求めよう。この小節のプライムは、時刻0の波形 $u(x,0)$ の $x$ 微分を表す。KdV 方程式に代入すると
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
