+++
title = "Unicode TeXing"
lang_ja = true
+++


```sty
% By Rintaro Masaoka
% updated: Apr 12, 2025

\RequirePackage{
   amsmath,
   amssymb,
   mathtools,
   xparse,
   mathcommand,
   newunicodechar,
   diffcoeff,
   slashed
}
\DeclareMathAlphabet{\oldmathbb}{U}{msb}{m}{n}
\DeclareMathAlphabet{\oldmathcal}{OMS}{cmsy}{m}{n}
\let\oldbecause\because
\let\oldtherefore\therefore
\let\oldhbar\hbar
\usepackage[bold-style=ISO]{unicode-math}
\DeclareOption{uprightconst}{\let\conststyle\symup} 
\DeclareOption{italicconst}{\let\conststyle\symit}
\DeclareOption{oldfont}{
   \newunicodechar{𝔸}{\oldmathbb{A}}
   \newunicodechar{𝔹}{\oldmathbb{B}}
   \newunicodechar{ℂ}{\oldmathbb{C}}
   \newunicodechar{𝔻}{\oldmathbb{D}}
   \newunicodechar{𝔼}{\oldmathbb{E}}
   \newunicodechar{𝔽}{\oldmathbb{F}}
   \newunicodechar{𝔾}{\oldmathbb{G}}
   \newunicodechar{ℍ}{\oldmathbb{H}}
   \newunicodechar{𝕀}{\oldmathbb{I}}
   \newunicodechar{𝕁}{\oldmathbb{J}}
   \newunicodechar{𝕂}{\oldmathbb{K}}
   \newunicodechar{𝕃}{\oldmathbb{L}}
   \newunicodechar{𝕄}{\oldmathbb{M}}
   \newunicodechar{ℕ}{\oldmathbb{N}}
   \newunicodechar{𝕆}{\oldmathbb{O}}
   \newunicodechar{ℙ}{\oldmathbb{P}}
   \newunicodechar{ℚ}{\oldmathbb{Q}}
   \newunicodechar{ℝ}{\oldmathbb{R}}
   \newunicodechar{𝕊}{\oldmathbb{S}}
   \newunicodechar{𝕋}{\oldmathbb{T}}
   \newunicodechar{𝕌}{\oldmathbb{U}}
   \newunicodechar{𝕍}{\oldmathbb{V}}
   \newunicodechar{𝕎}{\oldmathbb{W}}
   \newunicodechar{𝕏}{\oldmathbb{X}}
   \newunicodechar{𝕐}{\oldmathbb{Y}}
   \newunicodechar{ℤ}{\oldmathbb{Z}}
   \newunicodechar{𝒜}{\oldmathcal{A}}
   \newunicodechar{ℬ}{\oldmathcal{B}}
   \newunicodechar{𝒞}{\oldmathcal{C}}
   \newunicodechar{𝒟}{\oldmathcal{D}}
   \newunicodechar{ℰ}{\oldmathcal{E}}
   \newunicodechar{ℱ}{\oldmathcal{F}}
   \newunicodechar{𝒢}{\oldmathcal{G}}
   \newunicodechar{ℋ}{\oldmathcal{H}}
   \newunicodechar{ℐ}{\oldmathcal{I}}
   \newunicodechar{𝒥}{\oldmathcal{J}}
   \newunicodechar{𝒦}{\oldmathcal{K}}
   \newunicodechar{ℒ}{\oldmathcal{L}}
   \newunicodechar{ℳ}{\oldmathcal{M}}
   \newunicodechar{𝒩}{\oldmathcal{N}}
   \newunicodechar{𝒪}{\oldmathcal{O}}
   \newunicodechar{𝒫}{\oldmathcal{P}}
   \newunicodechar{𝒬}{\oldmathcal{Q}}
   \newunicodechar{ℛ}{\oldmathcal{R}}
   \newunicodechar{𝒮}{\oldmathcal{S}}
   \newunicodechar{𝒯}{\oldmathcal{T}}
   \newunicodechar{𝒰}{\oldmathcal{U}}
   \newunicodechar{𝒱}{\oldmathcal{V}}
   \newunicodechar{𝒲}{\oldmathcal{W}}
   \newunicodechar{𝒳}{\oldmathcal{X}}
   \newunicodechar{𝒴}{\oldmathcal{Y}}
   \newunicodechar{𝒵}{\oldmathcal{Z}}
   \newunicodechar{∵}{\oldbecause}
   \newunicodechar{∴}{\oldtherefore}
   \newunicodechar{ħ}{\oldhbar}
}
\DeclareOption{exchangeupit}{
   \newunicodechar{𝑎}{{\symup{a}}}
   \newunicodechar{𝑏}{{\symup{b}}}
   \newunicodechar{𝑐}{{\symup{c}}}
   \newunicodechar{𝑑}{{\symup{d}}}
   \newunicodechar{𝑒}{{\symup{e}}}
   \newunicodechar{𝑓}{{\symup{f}}}
   \newunicodechar{𝑔}{{\symup{g}}}
   \newunicodechar{ℎ}{{\symup{h}}}
   \newunicodechar{𝑖}{{\symup{i}}}
   \newunicodechar{𝑗}{{\symup{j}}}
   \newunicodechar{𝑘}{{\symup{k}}}
   \newunicodechar{𝑙}{{\symup{l}}}
   \newunicodechar{𝑚}{{\symup{m}}}
   \newunicodechar{𝑛}{{\symup{n}}}
   \newunicodechar{𝑜}{{\symup{o}}}
   \newunicodechar{𝑝}{{\symup{p}}}
   \newunicodechar{𝑞}{{\symup{q}}}
   \newunicodechar{𝑟}{{\symup{r}}}
   \newunicodechar{𝑠}{{\symup{s}}}
   \newunicodechar{𝑡}{{\symup{t}}}
   \newunicodechar{𝑢}{{\symup{u}}}
   \newunicodechar{𝑣}{{\symup{v}}}
   \newunicodechar{𝑤}{{\symup{w}}}
   \newunicodechar{𝑥}{{\symup{x}}}
   \newunicodechar{𝑦}{{\symup{y}}}
   \newunicodechar{𝑧}{{\symup{z}}}
   
   \newunicodechar{𝐴}{{\symup{A}}}
   \newunicodechar{𝐵}{{\symup{B}}}
   \newunicodechar{𝐶}{{\symup{C}}}
   \newunicodechar{𝐷}{{\symup{D}}}
   \newunicodechar{𝐸}{{\symup{E}}}
   \newunicodechar{𝐹}{{\symup{F}}}
   \newunicodechar{𝐺}{{\symup{G}}}
   \newunicodechar{𝐻}{{\symup{H}}}
   \newunicodechar{𝐼}{{\symup{I}}}
   \newunicodechar{𝐽}{{\symup{J}}}
   \newunicodechar{𝐾}{{\symup{K}}}
   \newunicodechar{𝐿}{{\symup{L}}}
   \newunicodechar{𝑀}{{\symup{M}}}
   \newunicodechar{𝑁}{{\symup{N}}}
   \newunicodechar{𝑂}{{\symup{O}}}
   \newunicodechar{𝑃}{{\symup{P}}}
   \newunicodechar{𝑄}{{\symup{Q}}}
   \newunicodechar{𝑅}{{\symup{R}}}
   \newunicodechar{𝑆}{{\symup{S}}}
   \newunicodechar{𝑇}{{\symup{T}}}
   \newunicodechar{𝑈}{{\symup{U}}}
   \newunicodechar{𝑉}{{\symup{V}}}
   \newunicodechar{𝑊}{{\symup{W}}}
   \newunicodechar{𝑋}{{\symup{X}}}
   \newunicodechar{𝑌}{{\symup{Y}}}
   \newunicodechar{𝑍}{{\symup{Z}}}

   \newunicodechar{𝛼}{\symup{\alpha     }}
   \newunicodechar{𝛽}{\symup{\beta      }}
   \newunicodechar{𝛾}{\symup{\gamma     }}
   \newunicodechar{𝛿}{\symup{\delta     }}
   \newunicodechar{ϵ}{\symup{\epsilon   }}
   \newunicodechar{𝜁}{\symup{\zeta      }}
   \newunicodechar{𝜂}{\symup{\eta       }}
   \newunicodechar{𝜃}{\symup{\theta     }}
   \newunicodechar{𝜄}{\symup{\iota      }}
   \newunicodechar{𝜅}{\symup{\kappa     }}
   \newunicodechar{𝜆}{\symup{\lambda    }}
   \newunicodechar{𝜇}{\symup{\mu        }}
   \newunicodechar{𝜈}{\symup{\nu        }}
   \newunicodechar{𝜉}{\symup{\xi        }}
   \newunicodechar{𝜋}{\symup{\pi        }}
   \newunicodechar{𝜌}{\symup{\rho       }}
   \newunicodechar{𝜎}{\symup{\sigma     }}
   \newunicodechar{𝜏}{\symup{\tau       }}
   \newunicodechar{𝜐}{\symup{\upsilon   }}
   \newunicodechar{𝜙}{\symup{\phi       }}
   \newunicodechar{𝜒}{\symup{\chi       }}
   \newunicodechar{𝜔}{\symup{\omega     }}
   \newunicodechar{𝜓}{\symup{\varpsi    }}
   \newunicodechar{𝜀}{\symup{\varepsilon}}
   \newunicodechar{𝜗}{\symup{\vartheta  }}
   \newunicodechar{𝜚}{\symup{\varrho    }}
   \newunicodechar{𝜍}{\symup{\varsigma  }}
   \newunicodechar{𝜛}{\symup{\varomega  }}
   \newunicodechar{𝜑}{\symup{\varphi    }}
   \newunicodechar{𝛤}{\symup{\Gamma     }}
   \newunicodechar{𝛥}{\symup{\Delta     }}
   \newunicodechar{𝛩}{\symup{\Theta     }}
   \newunicodechar{𝛬}{\symup{\Lambda    }}
   \newunicodechar{𝛯}{\symup{\Xi        }}
   \newunicodechar{𝛱}{\symup{\Pi        }}
   \newunicodechar{𝛴}{\symup{\Sigma     }}
   \newunicodechar{𝛶}{\symup{\Upsilon   }}
   \newunicodechar{𝛷}{\symup{\Phi       }}
   \newunicodechar{𝛹}{\symup{\Psi       }}
   \newunicodechar{𝛺}{\symup{\Omega     }}
}
\ExecuteOptions{uprightconst}
\ProcessOptions\relax


% Math accents
\newcommand{\∼}{\tilde}
\newcommand{\＾}{\hat}
\newcommand{\＿}{\bar}
\newcommand{\’}{\dot}
\newcommand{\”}{\ddot}
\newcommand{\／}{\slashed}
\newcommand{\∨}{\check}
\newcommand{\∪}{\breve}
\newcommand{\→}{\vec}
\newcommand{\←}[1]{
   \mathrlap{\reflectbox{\ensuremath{\vec{\phantom{#1}}}}}#1
}
\newcommand{\↔}[1]{
   \mathrlap{\reflectbox{\ensuremath{\vec{\phantom{#1}}}}}\vec{#1}
}
% Old math accents
\renewmathcommand{\~}{\tilde}
\renewmathcommand{\'}{\dot}
\renewmathcommand{\"}{\ddot}
\renewmathcommand{\^}{\hat}
\renewmathcommand{\_}{\bar}
\renewmathcommand{\v}{\check}
\renewmathcommand{\u}{\breve}
\renewmathcommand{\'}{\acute}
\renewmathcommand{\`}{\grave}

% constants
\newunicodechar{ℯ}{\conststyle{e}}
\newunicodechar{¡}{\conststyle{i}}
\newunicodechar{𝘬}{k_{\symup{B}}}

% differential
\NewDocumentCommand{\𝚍}{s e{^} t_ m}{
   \IfBooleanTF{#1}
   {\IfBooleanTF{#3}{\diff[#2]{}/{#4}}{\diff[#2]{#4}/}}
   {\IfBooleanTF{#3}{\diff[#2]{}{#4}}{\diff[#2]{#4}}}
}
\NewDocumentCommand{\∂}{s e{^} t_ m}{
   \IfBooleanTF{#1}
   {\IfBooleanTF{#3}{\diffp[#2]{}/{#4}}{\diffp[#2]{#4}/}}
   {\IfBooleanTF{#3}{\diffp[#2]{}{#4}}{\diffp[#2]{#4}}}
}
\NewDocumentCommand{\δ}{s e{^} t_ m}{
   \IfBooleanTF{#1}
   {\IfBooleanTF{#3}{\diffd[#2]{}/{#4}}{\diffd[#2]{#4}/}}
   {\IfBooleanTF{#3}{\diffd[#2]{}{#4}}{\diffd[#2]{#4}}}
} 
\NewDocumentCommand{\Δ}{s e{^} t_ m}{
   \IfBooleanTF{#1}
   {\IfBooleanTF{#3}{\Diffd[#2]{}/{#4}}{\Diffd[#2]{#4}/}}
   {\IfBooleanTF{#3}{\Diffd[#2]{}{#4}}{\Diffd[#2]{#4}}}
}
\NewDocumentCommand{\𝑑}{e{^} m}{
   \IfNoValueTF{#1}
   {\mathinner{\symup{d}#2}}
   {\mathinner{\symup{d}^{#1}#2}}
}
\newcommand{\𝒟}[1]{\mathinner{𝒟#1}}
\newcommand{\𝛥}[1]{\mathinner{Δ#1}}
\newcommand{\𝛿}[1]{\mathinner{δ#1}}

% brakets
\newcommand{\⟨}{\left\langle}
\newcommand{\⟩}{\right\rangle}
\newcommand{\∣}{~\middle|~}
\newcommand{\Mid}{~\middle|~}
\newcommand{\（}{\left\lparen\begin{matrix}}
\newcommand{\）}{\end{matrix}\right\rparen}
\newcommand{\［}{\left\lbrack\begin{matrix}}
\newcommand{\］}{\end{matrix}\right\rbrack}
\newcommand{\｛}{\left\lbrace\begin{matrix}}
\newcommand{\｝}{\end{matrix}\right\rbrace}
\newunicodechar{（}{\left\lparen}
\newunicodechar{）}{\right\rparen}
\newunicodechar{［}{\left\lbrack}
\newunicodechar{］}{\right\rbrack}
\newunicodechar{｛}{\left\lbrace}
\newunicodechar{｝}{\right\rbrace}
\newunicodechar{｟}{\left\lparen\begin{matrix}}
\newunicodechar{｠}{\end{matrix}\right\rparen}
\newunicodechar{〚}{\left\lbrack\begin{matrix}}
\newunicodechar{〛}{\end{matrix}\right\rbrack}
\newunicodechar{｜}{\Big|}

% other commands
\newcommand{\√}[1]{\sqrt{#1}\,}
\newunicodechar{√}{\√}
\NewDocumentCommand{\myfrac}{s}{\IfBooleanTF{#1}{\dfrac}{\frac}}
\newunicodechar{÷}{\myfrac}
\newcommand{\÷}{\div}
\newunicodechar{⨸}{\dfrac}
\newunicodechar{␣}{\quad}
\newunicodechar{＿}{_\mathup}
\newunicodechar{＾}{^\mathup}
\newcommand{\␣}{\qquad}
\newcommand{\∅}{\nonumber \\}
\newcommand{\𝚛}{\right}
\newcommand{\𝚕}{\left}
\newcommand{\𝚖}{\middle}
\newcommand{\𝚝}{\text}
\newcommand{\𝚞}{\mathup}
\NewDocumentCommand{\𝚚}{s m}{
   \IfBooleanTF{#1}{}{\quad}\text{#2}\quad
}
\newcommand{\𝙴}{\left.\vphantom{\int}\right\rvert}
\newcommand{\𝙼}[1]{\begin{matrix}#1\end{matrix}}

% redefinition of unicode characters
\newunicodechar{★}{\star}
\newunicodechar{∅}{\emptyset}
\newunicodechar{⋯}{\mathinner{\cdots}}
\newunicodechar{…}{\mathinner{\ldots}}
\newunicodechar{≟}{\overset{?}{=}}
\newunicodechar{∣}{\mid}

\AtBeginDocument{
    \let\Re\relax \DeclareMathOperator\Re{\mathrm{Re}}%
    \let\Im\relax \DeclareMathOperator\Im{\mathrm{Im}}%
}

```

```jl


```