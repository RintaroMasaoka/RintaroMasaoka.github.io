# Python 3 + SymPy. Formal differential polynomials; no analytic limit is computed.
# Highest retained inverse-power order.
N = 5

import sympy as s

if type(N) is not int or N not in (3, 5, 7):
    raise ValueError('Choose N = 3, 5 or 7.')
# u[k] represents the k-th x derivative of the manuscript field u(x).
u = s.symbols('u0:' + str(N + 2))


def dx(f):
    return s.expand(sum(s.diff(f, u[k])*u[k+1] for k in range(N+1)))


def derivative(f, count):
    for _ in range(count):
        f = dx(f)
    return f


def euler(f):
    return s.expand(sum((-1)**k*derivative(s.diff(f, u[k]), k)
                        for k in range(N)))


coefficients = {1: u[0]/2}
for n in range(1, N):
    coefficients[n+1] = s.expand(-(dx(coefficients[n]) + sum(coefficients[a]*coefficients[n-a]
                                     for a in range(1, n)))/2)
# Independently square the finite Laurent polynomial and inspect its residual.
k = s.symbols('k', nonzero=True)
truncated = s.I*k + sum(coefficients[n]*(s.I*k)**(-n) for n in range(1, N+1))
residual = s.expand(dx(truncated) + truncated**2 + k**2 - u[0])
for power in range(0, -N, -1):
    assert residual.coeff(k, power) == 0

representatives = {
    1: u[0]/2,
    3: -u[0]**2/8,
    5: u[0]**3/16 + u[1]**2/32,
    7: -5*u[0]**4/128 - 5*u[0]*u[1]**2/64 - u[2]**2/128,
}


def primitive(f):
    # Differential-polynomial homotopy: construct, then check an exact flux.
    t = s.symbols('t')
    flux = s.Integer(0)
    for i in range(N-1):
        for k in range(i+1, N):
            term = (-1)**(k-i-1)*derivative(s.diff(f, u[k]), k-i-1)
            flux += u[i]*term.subs({v: t*v for v in u}, simultaneous=True)
    result = s.expand(s.integrate(flux, (t, 0, 1)))
    assert s.expand(dx(result)-f) == 0
    return result


names = {v: s.Symbol('u' if k == 0 else 'u_{' + 'x'*k + '}')
         for k, v in enumerate(u)}


def latex(f):
    return s.latex(s.expand(f).xreplace(names))


def display(label, f):
    # Split only for line width; every displayed term belongs to the exact f.
    terms = s.Add.make_args(s.expand(f))
    rows = []
    for start in range(0, len(terms), 2):
        text = latex(s.Add(*terms[start:start+2]))
        if rows and not text.startswith('-'):
            text = '+ ' + text
        rows.append(text)
    print(r'\begin{aligned}' + label + r'&=' + r'\\&'.join(rows)
          + r'\end{aligned}')


print(r's=ik+\sum_{n=1}^{' + str(N)
      + r'}s_n(ik)^{-n}+O(k^{-' + str(N+1) + r'})')
print(r'\text{Riccati residual verified: }O(k^{-' + str(N) + r'})')
for n in range(1, N+1):
    index = str(n)
    if n % 2:
        density = representatives[n]
        assert euler(coefficients[n]-density) == 0
        flux = primitive(coefficients[n]-density)
        display('s_{' + index + '}', coefficients[n])
        print(r'I_{' + index + r'}=\oint s_{' + index
              + r'}=\oint\left(' + latex(density) + r'\right)')
        if flux != 0:
            print(r's_{' + index + r'}-\left(' + latex(density)
                  + r'\right)=\partial_x\left(' + latex(flux) + r'\right)')
    else:
        assert euler(coefficients[n]) == 0
        flux = primitive(coefficients[n])
        print(r's_{' + index + r'}=\partial_x\left(' + latex(flux)
              + r'\right),\qquad\oint s_{' + index + r'}=0')
