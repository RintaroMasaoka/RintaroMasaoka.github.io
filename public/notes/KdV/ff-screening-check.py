# Python 3 + SymPy. Exact finite screening calculations at weight four or six.
WEIGHT_CHOICE = '6'
B_CHOICE = 'symbolic'

import sympy as s

if WEIGHT_CHOICE not in ('4', '6'):
    raise ValueError('Choose weight 4 or 6.')
if B_CHOICE not in ('symbolic', '3/2', '5/3'):
    raise ValueError('Choose symbolic, 3/2 or 5/3.')
b = s.symbols('b', nonzero=True)
Q = b/2 - 1/b
c = 1 - 12*Q**2
selected = b if B_CHOICE == 'symbolic' else s.Rational(B_CHOICE)
substitute = {b: selected}
c_selected = s.factor(c.subs(substitute))
x = s.symbols('x1:7')
# Local Heisenberg state variables, NOT Fourier modes of the periodic field:
# x_n = a_{-n}|0> corresponds to (partial_w^(n-1) j)/(n-1)!.
z = s.symbols('z')
alpha = -b


def virasoro(k, f):
    # L_{-k} on a neutral Heisenberg state; T = :j^2:/2 + Q partial_w j.
    pair = sum(x[r-1]*x[k-r-1] for r in range(1, k))*f/2
    shift = sum(n*x[n+k-1]*s.diff(f, x[n-1]) for n in range(1, 7-k))
    return s.expand(pair + shift + Q*(k-1)*x[k-1]*f)


def solve_weight_four():
    # Compute Res rho(z) V_alpha(0), then solve for a and its primitive.
    # This neutral-on-vertex residue has the opposite commutator orientation
    # to S_alpha rho; its vanishing modulo a derivative is equivalent.
    charge = s.symbols('alpha', nonzero=True)
    j, j1, j2 = s.symbols('j j_1 j_2')
    a, u, v = s.symbols('a u v')
    taylor = j + j1*z + j2*z**2/2
    wick = s.expand((taylor + charge/z)**4
                    + a*(j1+j2*z-charge/z**2)**2)
    residue = wick.coeff(z, -1)
    primitive = u*j**2 + v*j1
    derivative = s.expand(j1*s.diff(primitive, j)
                          + j2*s.diff(primitive, j1) + charge*j*primitive)
    solutions = s.solve(s.Poly(residue-derivative, j, j1, j2).coeffs(),
                        [a, u, v], dict=True)
    assert len(solutions) == 1
    solution = solutions[0]
    A = s.factor(solution[a])
    assert s.simplify(A-charge**2+6-4/charge**2) == 0
    assert s.expand((residue-derivative).subs(solution)) == 0
    A_selected = s.factor(A.subs(charge, selected))
    print(r'\rho_a={:}j^4{:}+a{:}(\partial_w j)^2{:}')
    print(r'\operatorname{Res}_{z=w}\rho_a(z)V_\alpha(w)'
          r'={:}V_\alpha[4\alpha j^3+12\alpha^2j\partial_w j'
          r'+(2\alpha^3-2a\alpha)\partial_w^2j]{:}')
    print(r'\partial_w{:}V_\alpha(uj^2+v\partial_w j){:}'
          r'={:}V_\alpha[\alpha uj^3+(2u+\alpha v)j\partial_w j'
          r'+v\partial_w^2j]{:}')
    print(r'a=' + s.latex(A) + r',\quad u=' + s.latex(solution[u])
          + r',\quad v=' + s.latex(s.factor(solution[v])))
    print(r'\alpha=\pm b:\quad a=b^2-6+4/b^2=' + s.latex(A_selected))
    for sign in (1, -1):
        q = sign*selected
        assert s.expand((residue-derivative).subs(solution).subs(charge, q)) == 0
        print(r'\alpha=' + s.latex(q) + r':\quad '
              r'\operatorname{Res}_{z=w}\rho_a(z)V_\alpha(w)'
              r'-\partial_w{:}V_\alpha[4j^2+('
              + s.latex(s.factor(solution[v].subs(charge, q)))
              + r')\partial_wj]{:}=0')


def solve_weight_six():
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



    print(r'\rho_6={:}T^3{:}-\kappa{:}(\partial_wT)^2{:},\quad '
          r'\kappa=' + s.latex(K_selected) + r'=\frac{c+2}{12}')
    print(r'S_-\rho_6=D_{-b}F,\quad '
          r'D_{-b}=\sum_{n\ge1}n x_{n+1}\frac{\partial}{\partial x_n}-b x_1')
    print(r'x_n\longleftrightarrow\frac{\partial_w^{n-1}j}{(n-1)!}'
          r'\quad\text{(local state--field variables)}')
    display('F', F_selected)
    print(r'S_+{:}T^3{:}=S_+{:}(\partial_wT)^2{:}=0')
    print(r'w=ix,\quad T(w)=\frac c6\widehat u(x),\quad '
          r'\partial_w=-i\partial_x,\quad c\ne0')
    print(r'\rho_6=\left(\frac c6\right)^3'
          r'\left[{:}\widehat u^3{:}+\beta{:}(\partial_x\widehat u)^2{:}\right]')
    print(r'\beta=\frac{6\kappa}{c}=\frac12+\frac1c=' + s.latex(beta))
    print(r'\widehat I_5=\frac1{16}\oint_x'
          r'\left[{:}\widehat u^3{:}+\beta{:}(\partial_x\widehat u)^2{:}\right]')


print((r'b\ne0' if B_CHOICE == 'symbolic' else r'b=' + s.latex(selected)))
print(r'c=13-3b^2-\frac{12}{b^2}=' + s.latex(c_selected))
if WEIGHT_CHOICE == '4':
    solve_weight_four()
else:
    solve_weight_six()
