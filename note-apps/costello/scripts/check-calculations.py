"""Independent symbolic checks for worked examples; requires SymPy."""
import sympy as s
x,y,a,g,h,p,L,m,mu,eps=s.symbols('x y a g h p L m mu eps',positive=True)
def expectation(poly):
 result=0
 for (n,),coefficient in s.Poly(s.expand(poly),y).terms():
  if n%2==0: result+=coefficient*(s.factorial2(n-1) if n else 1)*a**(n//2)
 return s.expand(result)
e4=expectation((x+y)**4); e8=expectation((x+y)**8)
w2=s.expand((e8-e4**2).subs(a,h*p)/(2*h*24**2))
assert s.simplify(w2-(p*x**6/s.Integer(72)+7*h*p**2*x**4/s.Integer(48)+h**2*p**3*x**2/3+h**3*p**4/12))==0
# Differentiate the explicit finite coefficient, including its integral endpoint.
Bprime=s.diff(-1/L-m**2*s.log(L*mu**2),L)+(s.exp(-m**2*L)-1+m**2*L)/L**2
assert s.simplify(Bprime-s.exp(-m**2*L)/L**2)==0
assert s.limit((s.exp(-m**2*eps)-1+m**2*eps)/eps**2,eps,0)==m**4/2
# Coordinate BV polynomial algebra: odd variables c, x*, y*, left derivatives.
z,ystar=s.symbols('z ystar')
# Ordinary coefficients use x,y,k=c*; monomials in odd variables are bitmasks.
k=s.symbols('k'); coords=[x,y,k]; oddbits=[1,2,4]
def add(*polys):
 out={}
 for f in polys:
  for mask,c in f.items(): out[mask]=s.expand(out.get(mask,0)+c)
 return {b:c for b,c in out.items() if c!=0}
def scale(f,c): return {b:s.expand(v*c) for b,v in f.items() if v*c!=0}
def mul(f,j):
 out={}
 for a1,c1 in f.items():
  for a2,c2 in j.items():
   if a1&a2: continue
   inv=sum(1 for i in range(3) for q in range(3) if i>q and a1&(1<<i) and a2&(1<<q))
   b=a1|a2;out[b]=out.get(b,0)+(-1)**inv*c1*c2
 return add(out)
def oddD(f,bit):
 return add({mask^bit:(-1)**((mask&(bit-1)).bit_count())*c for mask,c in f.items() if mask&bit})
def evenD(f,v):return add({mask:s.diff(c,v) for mask,c in f.items()})
def delta(f):return add(evenD(oddD(f,2),x),evenD(oddD(f,4),y),scale(oddD(evenD(f,k),1),-1))
def bracket(f,j,parity=0):return scale(add(delta(mul(f,j)),scale(mul(delta(f),j),-1),scale(mul(f,delta(j)),-(-1)**parity)),(-1)**parity)
# S=x^2/2+y*c; y*c is -c y* in canonical odd ordering.
S={0:x*x/2,5:-1}
assert delta(S)=={}
assert bracket(S,S)=={}
variables=[{0:x},{0:y},{1:1},{2:1},{4:1},{0:k}]
expected=[{}, {1:1}, {}, {0:x}, {}, {4:1}]
for v,e in zip(variables,expected):
 assert bracket(S,v)==e,(v,bracket(S,v),e)
 assert bracket(S,bracket(S,v))=={}
print('PASS: Gaussian cumulant g^2, heat-kernel subtraction/scale derivative, BV coordinate signs and nilpotence.')
# Graded commutator used in chapter 6: [c d_y + y* d_c*, d_c d_y*] = Delta_(y,c).
def sg(f): return add(mul({1:1},evenD(f,y)),mul({4:1},evenD(f,k)))
def R(f):return oddD(oddD(f,4),1)
def delta_g(f):return add(evenD(oddD(f,4),y),scale(oddD(evenD(f,k),1),-1))
for mask in range(8):
 for even in [1,y,k,y*k,y*y*k*k,x*y*k]:
  f={mask:s.sympify(even)}
  assert add(sg(R(f)),scale(R(sg(f)),-1))==delta_g(f)
print('PASS: graded commutator on 48 coordinate monomials.')
