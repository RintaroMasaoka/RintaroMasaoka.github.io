# Inputs: positive rational data, one to four distinct increasing kappa values.
kappa_input = "1,2"
A_input = "1,1"

from itertools import combinations
import re
import sympy as s

def positive_rationals(text):
    tokens = [v.strip() for v in text.split(",")]
    if not all(re.fullmatch(r"[0-9]+(?:/[1-9][0-9]*)?", v) for v in tokens):
        raise ValueError("Use comma-separated positive rational numbers.")
    values = [s.Rational(v) for v in tokens]
    if any(v <= 0 for v in values):
        raise ValueError("Every parameter must be positive.")
    return values

kappa, A = positive_rationals(kappa_input), positive_rationals(A_input)
N = len(kappa)
if not 1 <= N <= 4 or len(A) != N:
    raise ValueError("Choose one to four kappa values and the same number of A values.")
if any(kappa[i] >= kappa[i+1] for i in range(N-1)):
    raise ValueError("Kappa values must be distinct and increasing.")
y = s.symbols(f"y_1:{N+1}")
b = [A[i] * s.prod((kappa[j]-kappa[i])/(kappa[j]+kappa[i])
                   for j in range(N) if j != i) for i in range(N)]
delta_minus = s.prod(kappa[i]-kappa[j]
                     for i in range(N) for j in range(i+1,N))

# Remove exp(-(eta_i-eta_i^0)/2) from Wronskian column i.
# The remaining entry is exp((eta_i-eta_i^0)/2) * partial_x**r f_i.
derivative_matrix = s.Matrix(N, N, lambda r,i:
    (-kappa[i])**r + b[i]*kappa[i]**r*y[i])
tau_w = s.expand(derivative_matrix.det()/delta_minus)

# Independent subset construction, using one factor for each selected pair.
tau_pairs = s.Integer(0)
for count in range(N+1):
    for subset in combinations(range(N), count):
        tau_pairs += s.prod(A[i]*y[i] for i in subset) * s.prod(
            ((kappa[i]-kappa[j])/(kappa[i]+kappa[j]))**2
            for i,j in combinations(subset,2))
tau_pairs = s.expand(tau_pairs)

# This matrix has the same principal minors as the symmetric scattering matrix.
# det(I + diag(2*kappa_i*A_i*y_i) * [1/(kappa_i+kappa_j)]).
cauchy_matrix = s.eye(N) + s.Matrix(N,N,lambda i,j:
    2*kappa[i]*A[i]*y[i]/(kappa[i]+kappa[j]))
tau_cauchy = s.expand(cauchy_matrix.det())
pair_difference = s.expand(tau_w-tau_pairs)
cauchy_difference = s.expand(tau_w-tau_cauchy)
assert pair_difference == cauchy_difference == 0

print(r"N=" + str(N) + r",\quad (\kappa_i)=" + s.latex(s.Tuple(*kappa)))
print(r"(A_i)=" + s.latex(s.Tuple(*A)))
print(r"(b_i)=" + s.latex(s.Tuple(*b)))
terms = s.Poly(tau_w, *y).terms()
terms.sort(key=lambda term: (sum(term[0]), tuple(-v for v in term[0])))
printed = [s.latex(coefficient * s.prod(y[i]**power for i,power in enumerate(monomial)))
           for monomial,coefficient in terms]
per_line = 2 if N <= 3 else 1
chunks = [" + ".join(printed[i:i+per_line]) for i in range(0,len(printed),per_line)]
print(r"\begin{aligned}\tau_W&=" + r"\\&+".join(chunks) + r"\end{aligned}")
print(r"\tau_W-\tau_{\mathrm{pairs}}=" + s.latex(pair_difference))
print(r"\tau_W-\det(I+C)=" + s.latex(cauchy_difference))
