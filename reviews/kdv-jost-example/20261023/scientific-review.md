# Scientific review: Jost matching model

**Perspective:** scientific correctness of the plotted Jost model and its Wronskian normalization only.

**Verdict: PASS (bounded to the two reviewed files and the stated model).**

For (q=\kappa>0), write (t=\tanh x), so (t'=1-t^2=\operatorname{sech}^2x). The displayed functions are
\[
f_-=e^{qx}\frac{q-t}{q+1},\qquad f_+=e^{-qx}\frac{q+t}{q+1}.
\]
Direct differentiation gives
\[
f_-''=e^{qx}\frac{q-t}{q+1}\bigl(q^2-2(1-t^2)\bigr),\qquad
f_+''=e^{-qx}\frac{q+t}{q+1}\bigl(q^2-2(1-t^2)\bigr).
\]
Thus both obey \(-f''-2\operatorname{sech}^2x f=-q^2 f\). At the normalized endpoints, (t\to-1) as (x\to-\infty) gives (f_-\sim e^{qx}=e^{-ikx}) for (k=iq); (t\to1) as (x\to+\infty) gives (f_+\sim e^{-qx}=e^{ikx}). These are the stated tails with unit amplitude.

At (x=0),
\[
f_-=f_+=\frac{q}{q+1},\quad f_-'=q-1,\quad f_+'=1-q.
\]
With the specified order (W=f_-f_+'-f_-'f_+), this yields
\[
W=\frac{q(1-q)}{q+1}-\frac{q(q-1)}{q+1}
=-2q\frac{q-1}{q+1}.
\]
This matches both the code's raw `W` value and the exposition's sign and normalization; there is no display rescaling.

At (E=-1), (q=1). The formulas reduce to
\[
f_-=\tfrac12 e^x(1-\tanh x)=\tfrac12\operatorname{sech}x,
\qquad
f_+=\tfrac12 e^{-x}(1+\tanh x)=\tfrac12\operatorname{sech}x,
\]
and (W=0). The special branch in `matching-model.js` returns exactly these two values and zero. This agrees with the displayed excerpt.
