from sympy import S, Function, binomial, diff, expand, latex, symbols

x = symbols("x")
u = Function("u")(x)


def product(A, B, lowest):
    """Multiply formal operators, retaining powers >= lowest."""
    C = {}
    for i, a in A.items():
        for j, b in B.items():
            for k in range(max(0, i + j - lowest + 1)):
                power = i + j - k
                term = binomial(i, k) * a * diff(b, x, k)
                C[power] = C.get(power, S.Zero) + term
    return {j: expand(c) for j, c in C.items()}


order = 4
P = {1: S.One}
for r in range(order + 1):
    target = -u if r == 1 else S.Zero
    known = product(P, P, 1 - r).get(1 - r, S.Zero)
    P[-r] = expand((target - known) / 2)

# Display derivatives as u_x, u_xx, ...; P itself is unchanged.
display = {u: symbols("u")}
for j in range(1, order):
    display[diff(u, x, j)] = symbols("u_" + "x" * j)
for r in range(1, order + 1):
    print(rf"\partial^{{-{r}}}:\quad {latex(P[-r].xreplace(display))}")
