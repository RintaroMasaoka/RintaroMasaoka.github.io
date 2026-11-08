# Python 3 + SymPy. The factors retain their written left-to-right order.
N = 3

import sympy as s

if type(N) is not int or N not in (2, 3, 4):
    raise ValueError("Choose N = 2, 3 or 4.")
x = s.symbols("x")
j = [s.Function(f"j_{i}")(x) for i in range(1, N + 1)]


def compose(left, right):
    # Coefficients stand to the left of every power of partial_x.
    # partial_x**p f = sum_r binomial(p,r) f^(r) partial_x**(p-r).
    result = {}
    for p, a in left.items():
        for q, b in right.items():
            for r in range(p + 1):
                power = p + q - r
                term = a * s.binomial(p, r) * s.diff(b, x, r)
                result[power] = result.get(power, 0) + term
    return {p: s.expand(a) for p, a in result.items()}


coefficients = {0: s.Integer(1)}
for current in j:
    coefficients = compose(coefficients, {1: s.Integer(1), 0: current})
assert coefficients[N] == 1
assert s.expand(coefficients[N - 1] - sum(j)) == 0

# Check the two third-order expressions printed in the chapter.
if N == 3:
    a, b, c = j
    alpha = s.diff(b, x) + 2*s.diff(c, x) + a*b + a*c + b*c
    beta = s.diff(c, x, 2) + (a+b)*s.diff(c, x) + s.diff(b, x)*c + a*b*c
    assert s.expand(coefficients[1] - alpha) == 0
    assert s.expand(coefficients[0] - beta) == 0

# Eliminate the last current only after expanding the ordered product.
constraint = {j[-1]: -sum(j[:-1])}
reduced = {p: s.expand(a.subs(constraint).doit())
           for p, a in coefficients.items()}
assert reduced[N] == 1 and reduced[N - 1] == 0


def short_latex(expression):
    # Typography only: replace function arguments and derivative notation.
    names = {current: s.Symbol(f"j_{i+1}") for i, current in enumerate(j)}
    for i, current in enumerate(j):
        for order in range(1, N):
            names[s.diff(current, x, order)] = s.Symbol(
                "j_{" + str(i+1) + "," + "x"*order + "}")
    return s.latex(expression.xreplace(names))


def coefficient_output(label, expression):
    terms = s.Add.make_args(expression)
    # Keep each line short; each signed term is copied from the exact expression.
    rows = []
    for start in range(0, len(terms), 2):
        group = s.Add(*terms[start:start+2], evaluate=False)
        text = short_latex(group)
        if rows and not text.startswith("-"):
            text = "+ " + text
        rows.append(text)
    print(r"\begin{aligned}" + label + r"&="
          + r"\\&".join(rows) + r"\end{aligned}")


print(r"N=" + str(N) + r",\qquad j_{" + str(N) + r"}="
      + short_latex(-sum(j[:-1])))
print(r"(\partial+j_1)\cdots(\partial+j_{" + str(N)
      + r"})=\sum_{k=0}^{" + str(N) + r"}c_k\partial^k")
print(r"c_{" + str(N) + r"}=1,\qquad c_{" + str(N-1) + r"}=0")
for power in range(N - 2, -1, -1):
    label = "c_{" + str(power) + "}"
    if N == 3:
        label += r"=\alpha" if power == 1 else r"=\beta"
    coefficient_output(label, reduced[power])
