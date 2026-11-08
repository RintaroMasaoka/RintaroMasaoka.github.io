# Input: use "c" for a universal symbolic result, or a nonzero integer/fraction.
c_input = "c"

import re
from functools import lru_cache
import sympy as s

if c_input != "c" and not re.fullmatch(r"-?[0-9]+(?:/[1-9][0-9]*)?", c_input):
    raise ValueError('Use c, a nonzero integer, or a fraction.')
c = s.Symbol('c', nonzero=True) if c_input == 'c' else s.Rational(c_input)
if c == 0:
    raise ValueError('Central charge c must be nonzero.')
beta = s.Symbol('beta')

# Internal mapping only: w=ix and T=(c/6) uhat. A local PBW word
# (n1,...,nk) represents the RIGHT-nested product of
# (d/dw)^(-nj-2) T / (-nj-2)!. These are universal differential fields,
# not states in a selected physical highest-weight representation.
# The local vacuum is a formal device: ell_n annihilates it for n>=-1.
# No null-vector quotient is imposed, including at exceptional values of c.
def add(*vectors):
    result = {}
    for vector in vectors:
        for word, value in vector.items():
            result[word] = s.expand(result.get(word, 0) + value)
    return {word: value for word, value in result.items() if value != 0}

def scale(factor, vector):
    return {word: s.expand(factor*value) for word, value in vector.items()
            if factor*value != 0}

@lru_cache(None)
def act(n, word):
    if not word:
        return {(n,): s.Integer(1)} if n <= -2 else {}
    m, tail = word[0], word[1:]
    if n <= m:
        return {(n,) + word: s.Integer(1)}
    # [ell_n,ell_m]=(n-m)ell_(n+m)+c(n^3-n)delta_(n+m,0)/12.
    return add(apply(m, act(n, tail)), scale(n-m, act(n+m, tail)),
               scale(c*s.Rational(n**3-n, 12) if n == -m else 0, {tail: 1}))

def apply(n, vector):
    return add(*(scale(value, act(n, word)) for word, value in vector.items()))

def residue(vector):
    # (:TT:)_(0)=2 sum_(j>=0) ell_(-j-2) ell_(j-1).
    # Weight-six input: j>7 vanishes by grading. This is an exact bound
    # on LOCAL differential fields, not a physical-module truncation.
    weight = sum(-n for n in next(iter(vector)))
    assert all(sum(-n for n in word) == weight for word in vector)
    return scale(2, add(*(apply(-j-2, apply(j-1, vector))
                          for j in range(weight+2))))

def words(weight, maximum=None):
    if weight == 0:
        return [()]
    return [(-k,) + tail for k in range(min(weight, maximum or weight), 1, -1)
            for tail in words(weight-k, k)]

def column(vector, basis):
    return s.Matrix([vector.get(word, 0) for word in basis])

# Fix the cubic coefficient to one. The derivative-square coefficient is
# UNKNOWN: its conversion is -c*beta/6, from d/dw=-i d/dx.
basis = words(9)
primitives = words(8)
D = s.Matrix.hstack(*(column(apply(-1, {word: 1}), basis) for word in primitives))
target = column({(-3, -3, -3): 1}, basis)
r = column(residue({(-2, -2, -2): 1, (-3, -3): -c*beta/6}), basis)
assert len(basis) == 8 and D.rank() == 7
assert D.row_join(target).rank() == 8  # Target is NONZERO modulo derivatives.
solution = D.row_join(target).inv()*r
obstruction = s.factor(solution[-1])
primitive = solution[:-1, :]
remainder = (r-D*primitive-target*obstruction).applyfunc(s.expand)
assert remainder == s.zeros(8, 1)  # Reconstruct the ENTIRE weight-nine residue.
solved_beta = s.solve(obstruction, beta)[0]
assert (r.subs(beta, solved_beta)-D*primitive.subs(beta, solved_beta)).applyfunc(s.expand) == s.zeros(8, 1)

# Completeness of the weight-six ansatz, modulo total derivatives.
basis6 = words(6)
D6 = s.Matrix.hstack(*(column(apply(-1, {word: 1}), basis6) for word in words(5)))
assert len(basis6)-D6.rank() == 2

# Convert every computed coefficient to the note's ACTUAL uhat and x.
# I3=-9 Q4/(2c^2), I5=27 Q6/(2c^3); no known I5 coefficient is input.
normalization = -s.Rational(243, 4)/c**5
def field_factor(word):
    order = sum(-n-2 for n in word)
    return (c/6)**len(word)*(-s.I)**order/s.prod(s.factorial(-n-2) for n in word)

def field_tex(word):
    fields = [r'\widehat u' if n == -2 else r'\partial_x^{'+str(-n-2)+r'}\widehat u' for n in word]
    if len(fields) == 1:
        return fields[0]
    result = fields[-1]
    for field in reversed(fields[:-1]):
        result = r':\!'+field+r'\left('+result+r'\right)\!:'
    return result

def term(value, word):
    return r'\left('+s.latex(s.factor(value))+r'\right)'+field_tex(word)

coefficient = s.factor(normalization*field_factor((-3, -3, -3))*obstruction)
# Universal expected shape is checked AFTER deriving the coefficient.
assert s.simplify(coefficient-9*s.I/(32*c)*(beta-s.Rational(1,2)-1/c)) == 0
print(r'c='+s.latex(c))
print(r'\widehat u(x)=\frac6c\sum_{n\in\mathbb Z}L_ne^{-inx}-\frac14\mathbf1')
print(r'\widehat I_3=-\frac18\oint:\widehat u^2:,\qquad\widehat I_5(\beta)=\frac1{16}\oint\left[:\widehat u(:\widehat u\widehat u:):+\beta:\widehat u_x^2:\right]')
# Compute the two independent input residues separately, in x normalization.
for word, conversion, field in [
    ((-2, -2, -2), 1, r':\widehat u(:\widehat u\widehat u:):'),
    ((-3, -3), -c/6, r':\widehat u_x^2:')]:
    separate = D.row_join(target).inv()*column(residue({word: conversion}), basis)
    integrated_residue = s.expand(normalization*field_factor((-3, -3, -3))*separate[-1]/(-s.I/128))
    print(r'\oint\operatorname{Res}_{\epsilon=0}\left[:\widehat u^2:(x+\epsilon)'+field+r'(x)\right]=\left('+s.latex(integrated_residue)+r'\right)\oint:\widehat u_x(:\widehat u_x\widehat u_x:):')
prefactor = 9*s.I/(32*c)
print(r'[\widehat I_3,\widehat I_5(\beta)]='+s.latex(prefactor)+r'\left('+s.latex(s.expand(coefficient/prefactor))+r'\right)\oint:\widehat u_x(:\widehat u_x\widehat u_x:):')
print(r'\beta='+s.latex(s.apart(solved_beta))+r'\quad\Longrightarrow\quad[\widehat I_3,\widehat I_5]=0')
print(r'\text{Independent weight-nine density classes modulo total derivatives: }'+str(len(basis)-D.rank()))
print(r'\text{The cubic derivative class is nonzero; the full residue remainder is }0.')
print(r'\text{Complete local reduction}')
# Full local commutator density, before discarding any derivative.
# Each line is one summand; their sum is the density under the integral.
print(r'\text{Full commutator density: sum of the following eight terms}')
for word, value in zip(basis, r):
    print(term(normalization*field_factor(word)*value, word))
# Explicit total-derivative primitive, computed by elimination, not guessed.
print(r'\text{Total derivative primitive: sum of the following seven terms}')
for word, value in zip(primitives, primitive):
    print(term(-s.I*normalization*field_factor(word)*value, word))
print(r'\text{Full density}-\partial_x(\text{primitive})-\left('+s.latex(coefficient)+r'\right):\widehat u_x(:\widehat u_x\widehat u_x:):=0')
