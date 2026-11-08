"""Generate exact sphere exponential-map geometry for a schematic TeX figure.
Run from this directory; geometry units are incidental, no metric reading intended.
"""
from pathlib import Path
from math import sin, cos, hypot, pi

out = Path(__file__).resolve().parent
R = 2.4
def exp(a,b):
    r=hypot(a,b)
    if not r:return (0.,0.,0.)
    return (R*sin(r/R)*a/r,R*sin(r/R)*b/r,R*(cos(r/R)-1))
def project(p):
    x,y,z=p
    return (x+.25*y,.62*y+.7*z)
def flat(a,b):return (a+.25*b,.62*b)
def coord(p):return f'({p[0]:.5f},{p[1]:.5f})'
def path(points):return ' -- '.join(map(coord,points))
def loop(t):return (1.32*cos(t),.93*sin(t))
def mapped(t):return project(exp(*loop(t)))
def draw(points,style):return '\\draw['+style+'] '+path(points)+';\n'
def node(p,text,opts=''):return '\\node['+opts+'] at '+coord(p)+' {'+text+'};\n'
def frame(a,b):
    # Parallel transport the north-pole frame along its radial great circle.
    r=hypot(a,b)
    p=exp(a,b)
    c=cos(r/R);s=sin(r/R)
    if r:
        u=(a/r,b/r)
        basis=[(1+(c-1)*u[0]**2,(c-1)*u[0]*u[1],-s*u[0]),
               ((c-1)*u[0]*u[1],1+(c-1)*u[1]**2,-s*u[1])]
    else:basis=[(1,0,0),(0,1,0)]
    return ''.join(draw([project(p),project(tuple(p[i]+.38*e[i] for i in range(3)))],
                        '->,FigureRed,line width=1.1pt') for e in basis)

s=r'''\ifdefined\FigurePDF\else\def\pgfsysdriver{pgfsys-dvisvgm.def}\fi
\documentclass[tikz,border=8pt]{standalone}
\usepackage{amsmath}
\input{figure-theme.tex}
\usetikzlibrary{arrows.meta,backgrounds}
\begin{document}
\begin{tikzpicture}[color=FigureForeground,>=Stealth,font=\small,
 background rectangle/.style={fill=FigurePaper},show background rectangle]
'''
s+=node((0,1.75),r'Tangent space at $x_0$')
s+=node((5.5,1.75),r'Manifold near $x_0$')
# Flat tangent patch, not a second manifold.
s+=r'\fill[FigureBlueFill] (-1.9,-1.15)--(1.55,-1.15)--(2.05,1.18)--(-1.4,1.18)--cycle;'+'\n'
ts=[2*pi*j/160 for j in range(161)]
s+=draw([flat(*loop(t)) for t in ts],'FigureBlue,line width=1.5pt')
selected=pi/3
a,b=loop(selected)
end=flat(a,b)
s+=draw([(0,0),end],'->,FigureOrange,dashed,line width=1.15pt')
s+=r'\fill (0,0) circle (1.7pt);'+'\n'
s+=node((-.15,-.2),r'$0$')
s+=node((.85,.99),r'$\sqrt{\tau}\,q(v)$','FigureBlue')
s+=draw([flat(*loop(t)) for t in [2.9+j*.01 for j in range(25)]],'->,FigureBlue,line width=1.5pt')
s+=draw([(2.12,.15),(3.38,.15)],'->,FigureMuted,line width=1.1pt')
s+=node((2.75,.55),r'$\exp_{x_0}$')
s+=r'\begin{scope}[xshift=5.5cm]'+'\n'
boundary=[project(exp(1.9*cos(t),1.9*sin(t))) for t in ts]
s+=r'\fill[FigureBlueFill] '+path(boundary)+' -- cycle;\n'
for t in [0,pi/3,2*pi/3]:
    s+=draw([project(exp(r*cos(t),r*sin(t))) for r in [-1.9+j*3.8/80 for j in range(81)]],
            'FigureMuted,opacity=.35,line width=.5pt')
s+=draw(boundary,'FigureMuted,opacity=.5,line width=.6pt')
s+=draw([mapped(t) for t in ts],'FigureBlue,line width=1.5pt')
s+=draw([mapped(t) for t in [2.9+j*.01 for j in range(25)]],'->,FigureBlue,line width=1.5pt')
s+=draw([project(exp(j*a/60,j*b/60)) for j in range(61)],
        '->,FigureOrange,dashed,line width=1.15pt')
s+=r'\fill (0,0) circle (1.7pt);'+'\n'
s+=node((-.15,-.22),r'$x_0$')
s+=node((1.02,.63),r'$x(u)$','FigureBlue')
s+=frame(0,0)+frame(a,b)
s+=r'\end{scope}'+'\n'
s+=draw([(-1.8,-1.98),(-1.3,-1.98)],'->,FigureBlue,line width=1.4pt')
s+=node((-1.1,-1.98),'Increasing $v$', 'anchor=west')
s+=draw([(2.6,-1.98),(3.1,-1.98)],'->,FigureOrange,dashed,line width=1.15pt')
s+=node((3.28,-1.98),'Radial geodesic','anchor=west')
s+=draw([(2.6,-2.43),(3.1,-2.43)],'->,FigureRed,line width=1.1pt')
s+=node((3.28,-2.43),'Parallel frames','anchor=west')
s+=r'\end{tikzpicture}\end{document}'+'\n'
(out/'small-loop.tex').write_text(s)
