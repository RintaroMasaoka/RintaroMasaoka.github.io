from sympy import S, Rational, Function, binomial, diff, expand, latex, symbols, together

x = symbols("x")
u = Function("u")(x)


def product(A, B):
    """Leibniz rule: d^i b = sum_k binomial(i,k) b^(k) d^(i-k)."""
    C = {}
    for i, a in A.items():
        for j, b in B.items():
            for k in range(i + 1):
                power = i + j - k
                term = binomial(i, k) * a * diff(b, x, k)
                C[power] = C.get(power, S.Zero) + term
    return {power: expand(c) for power, c in C.items()}


a = Rational(-3, 2)
b = Rational(-3, 4)
L = {2: -S.One, 0: u}
B = {3: S.One, 1: a * u, 0: b * diff(u, x)}
BL, LB = product(B, L), product(L, B)
commutator = {
    power: expand(BL.get(power, S.Zero) - LB.get(power, S.Zero))
    for power in set(BL) | set(LB)
}

# Change derivative typography only; the computed expressions stay unchanged.
display = {u: symbols("u")}
for n in range(1, 4):
    display[diff(u, x, n)] = symbols("u_" + "x" * n)


def tex(expression):
    return latex(expression.xreplace(display))


def operator_tex(A):
    terms = []
    for power in sorted(A, reverse=True):
        coefficient = A[power]
        if coefficient == 0:
            continue
        if power == 0:
            scalar = latex(together(coefficient.xreplace(display)))
            terms.append("+(" + scalar + ")" if terms else scalar)
            continue
        negative = coefficient.could_extract_minus_sign()
        magnitude = -coefficient if negative else coefficient
        factor = "" if magnitude == 1 else tex(magnitude)
        if magnitude.is_Add:
            factor = "(" + factor + ")"
        derivative = r"\partial" if power == 1 else rf"\partial^{{{power}}}"
        term = factor + derivative
        sign = "-" if negative else ("+" if terms else "")
        terms.append(sign + term)
    return " ".join(terms) if terms else "0"


print(r"L=" + operator_tex(L))
print(r"B=" + operator_tex(B))
# The powers above 2 cancel independently of the selected coefficients.
assert all(c == 0 for power, c in commutator.items() if power > 2)
for power in (2, 1, 0):
    print(rf"\partial^{{{power}}}:\quad " + tex(commutator[power]))
print(r"[B,L]=" + operator_tex(commutator))
