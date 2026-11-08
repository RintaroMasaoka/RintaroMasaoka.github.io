# Python 3 + SymPy. Exact screening residues on weight-six neutral states.
B_CHOICE = 'symbolic'

import sympy as s

if B_CHOICE not in ('symbolic', '3/2', '5/3'):
    raise ValueError('Choose symbolic, 3/2 or 5/3.')
b = s.symbols('b', nonzero=True)
Q = b/2 - 1/b
c = 1 - 12*Q**2
alpha = -b
x = s.symbols('x1:7')  # x_n = a_{-n}, with weight n.
z = s.symbols('z')


def virasoro(k, f):
    # L_{-k} on a neutral Heisenberg state; coefficient 1/2 fixes the norm.
    pair = sum(x[r-1]*x[k-r-1] for r in range(1, k))*f/2
    shift = sum(n*x[n+k-1]*s.diff(f, x[n-1]) for n in range(1, 7-k))
    return s.expand(pair + shift + Q*(k-1)*x[k-1]*f)


P = virasoro(2, virasoro(2, virasoro(2, s.Integer(1))))
R = virasoro(3, virasoro(3, s.Integer(1)))


def screening(f, charge):
    # Compute exp(charge*sum x_n z^n/n) through z^5 recursively.
    # Weight six has at most z^-6 after shifting, so this bound is exact.
    exponential = {0: s.Integer(1)}
    for n in range(1, 6):
        exponential[n] = s.expand(charge*sum(x[k-1]*exponential[n-k]
                                             for k in range(1, n+1))/n)
    shifted = s.expand(f.subs({x[n-1]: x[n-1]-charge*z**(-n)
                              for n in range(1, 7)}, simultaneous=True))
    return s.expand(sum(shifted.coeff(z, -n)*exponential[n-1]
                        for n in range(1, 7)))


def charged_derivative(f, charge):
    return s.expand(sum(n*x[n]*s.diff(f, x[n-1]) for n in range(1, 6))
                    + charge*x[0]*f)


# All partitions of weight four, hence a complete flux ansatz at that weight.
monomials = [x[0]**4, x[0]**2*x[1], x[1]**2, x[0]*x[2], x[3]]
kappa = s.symbols('kappa')
f_coeff = s.symbols('f0:5')
flux_ansatz = sum(a*m for a, m in zip(f_coeff, monomials))
obstruction = s.Poly(screening(P, alpha)-kappa*screening(R, alpha)
                    - charged_derivative(flux_ansatz, alpha), *x)
solutions = s.solve(obstruction.coeffs(), [kappa, *f_coeff], dict=True)
assert len(solutions) == 1 and all(v in solutions[0] for v in [kappa, *f_coeff])
solution = solutions[0]
K = s.factor(solution[kappa])
F = s.expand(flux_ansatz.subs(solution))
assert s.simplify(K-(c+2)/12) == 0
assert screening(P, b) == screening(R, b) == 0


def direct_residue(f, charge):
    # Independent check: multiply finite Taylor factors, rather than reuse
    # the exponential recurrence used to set up the linear system.
    exponential = s.Integer(1)
    for n in range(1, 6):
        factor = sum((charge*x[n-1]/n)**j*z**(n*j)/s.factorial(j)
                     for j in range(6//n+1) if n*j <= 5)
        product = s.Poly(s.expand(exponential*factor), z)
        exponential = sum(coef*z**power[0] for power, coef in product.terms()
                          if power[0] <= 5)
    shifted = s.expand(f.subs({x[n-1]: x[n-1]-charge*z**(-n)
                              for n in range(1, 7)}, simultaneous=True))
    return s.expand(s.expand(shifted*exponential).coeff(z, -1))


# Check the full residue identity, not merely its projection onto a quotient.
assert s.simplify(direct_residue(P-K*R, alpha)
                  - charged_derivative(F, alpha)) == 0
assert direct_residue(P, b) == direct_residue(R, b) == 0

selected = b if B_CHOICE == 'symbolic' else s.Rational(B_CHOICE)
substitute = {b: selected}
K_selected = s.factor(K.subs(substitute))
c_selected = s.factor(c.subs(substitute))
F_selected = s.expand(F.subs(substitute))
alpha_selected = -selected
# Numeric selections are checked again by direct residue evaluation.
assert s.expand(direct_residue((P-K*R).subs(substitute), alpha_selected)
                - charged_derivative(F_selected, alpha_selected)) == 0
assert c_selected != 0  # Required only for conversion to beta.
beta = s.factor(6*K_selected/c_selected)
assert s.simplify(beta-s.Rational(1, 2)-1/c_selected) == 0


def latex(f):
    return s.latex(f.xreplace({v: s.Symbol('x_{'+str(i+1)+'}')
                              for i, v in enumerate(x)}))


def display(label, expression):
    # Keep each creation-mode monomial together and factor its b coefficient.
    # This is an exact regrouping of the computed flux, not a new expression.
    terms = []
    for powers, coefficient in s.Poly(expression, *x).terms():
        monomial = s.prod(variable**power for variable, power in zip(x, powers))
        terms.append(s.Mul(s.factor(coefficient), monomial, evaluate=False))
    rows = []
    for term in terms:
        text = latex(term)
        if rows and not text.startswith('-'):
            text = '+ ' + text
        rows.append(text)
    print(r'\begin{aligned}' + label + r'&=' + r'\\&'.join(rows)
          + r'\end{aligned}')


print((r'b\ne0,\quad c\ne0' if B_CHOICE == 'symbolic'
       else r'b=' + s.latex(selected))
      )
print(r'c=13-3b^2-\frac{12}{b^2}=' + s.latex(c_selected))
# The displayed field is the manuscript's uhat; kappa stays internal.
# Its cubic normal product is right nested, as in L_-2^3 applied to 1.
stress = r'\left(-\frac c6\widehat u\right)'
cubic = r'{:}' + stress + r'^3{:}'
gradient = r'{:}\!\left[\partial_x' + stress + r'\right]^2\!{:}'
print(r'S_-\!\left[' + cubic + r'-\frac{c+2}{12}'
      + gradient + r'\right]=D_{-b}F')
print(r'D_{-b}=\sum_{n\ge1}n x_{n+1}\frac{\partial}{\partial x_n}-b x_1')
print(r'\beta=\frac12+\frac1c=' + s.latex(beta))
display('F', F_selected)
print(r'S_+\!\left[' + cubic + r'\right]=S_+\!\left[' + gradient + r'\right]=0')
