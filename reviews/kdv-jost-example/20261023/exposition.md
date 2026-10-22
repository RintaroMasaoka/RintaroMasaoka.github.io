例として、$u(x)=-2\operatorname{sech}^2x$ を考える。この場合、$E=-1$ で左右の Jost 解はともに $\tfrac12\operatorname{sech}x$ となる。次の図でエネルギーを動かすと、この値で二つの波形が全区間で一致し、$W=0$ になる様子を確かめられる。

<div data-visual-slot="matching"></div>

<details>
<summary>図に示したポテンシャルの厳密解</summary>

$k=i\kappa$（$\kappa>0$）に対して
$$
f_+(x,i\kappa)=e^{-\kappa x}\frac{\kappa+\tanh x}{\kappa+1},
\qquad
f_-(x,-i\kappa)=e^{\kappa x}\frac{\kappa-\tanh x}{\kappa+1}.
$$
これらは $L=-\partial_x^2-2\operatorname{sech}^2x$ の固有値方程式を満たし、それぞれの端で所定の自由波に漸近する。$x=0$ で値と微分を評価すると、
$$
W(i\kappa)
=\frac{\kappa}{\kappa+1}(1-\kappa)
-(\kappa-1)\frac{\kappa}{\kappa+1}
=-2\kappa\frac{\kappa-1}{\kappa+1}.
$$
従って $\kappa=1$、すなわち $E=-1$ で $W=0$ となり、
$$
f_-(x,-i)=f_+(x,i)=\tfrac12\operatorname{sech}x.
$$
二つの Jost 解が同じ、両端で減衰する波形を表している。

</details>
