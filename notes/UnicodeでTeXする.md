+++
title = "UnicodeでTeXする"
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
# Juliaでの.texファイル形式変換スクリプト (Unicode ⟷ Plain)
preamble = [
    "\\usepackage[oldfont,exchangeupit]{unicommand}" "%\\usepackage[oldfont,exchangeupit]{unicommand}"
    "\\usepackage{unicommand}" "%\\usepackage{unicommand}"
    "\\usepackage[oldfont]{unicommand}" "%\\usepackage[oldfont]{unicommand}"
    "\\usepackage[exchangeupit]{unicommand}" "%\\usepackage[exchangeupit]{unicommand}"
]
command_spacing = [
    "\\⟨" "\\left\\langle"
    "\\⟩" "\\right\\rangle"
    "\\∼" "\\tilde"
    "\\＿" "\\bar"
    "\\＾" "\\hat"
    "\\⋅" "\\dot"
    "\\”" "\\ddot"
    "\\／" "\\not"
    "\\→" "\\vec"
    "\\~" "\\tilde"
    "\\=" "\\bar"
    "\\^" "\\hat"
    "\\." "\\dot"
    "\\\"" "\\ddot"
]
command_not_spacing = [
    "\\∅" "\\nonumber\\\\"
    "\\（" "\\left(\\begin{matrix}"
    "\\）" "\\end{matrix}\\right)"
    "\\［" "\\left[\\begin{matrix}"
    "\\］" "\\end{matrix}\\right]"
    "\\｛" "\\left\\{\\begin{matrix}"
    "\\｝" "\\end{matrix}\\right\\}"
    "\\∣" "\\middle|"
    "（" "\\left("
    "）" "\\right)"
    "［" "\\left["
    "］" "\\right]"
    "｛" "\\left\\{"
    "｝" "\\right\\}"
]
non_standard_writing_plain = [
    "\\（" "\\left\\lparen\\begin{matrix}"
    "\\）" "\\end{matrix}\\right\\rparen"
    "\\［" "\\left\\lbrack\\begin{matrix}"
    "\\］" "\\end{matrix}\\right\\rblack"
    "\\｛" "\\left\\lbrace\\begin{matrix}"
    "\\｝" "\\end{matrix}\\right\\rbrace"
    "\\∣" "\\middle|"
    "（" "\\left\\lparen"
    "）" "\\right\\rparen"
    "［" "\\left\\lblack"
    "］" "\\right\\rblack"
    "｛" "\\left\\lbrace"
    "｝" "\\right\\rbrace"
]
char_spacing = [
#
    "α" "\\alpha"
    "β" "\\beta"
    "γ" "\\gamma"
    "δ" "\\delta"
    "ε" "\\varepsilon"
    "ϵ" "\\epsilon"
    "ζ" "\\zeta"
    "η" "\\eta"
    "θ" "\\theta"
    "ϑ" "\\vartheta"
    "ι" "\\iota"
    "κ" "\\kappa"
    "λ" "\\lambda"
    "μ" "\\mu"
    "ν" "\\nu"
    "ξ" "\\xi"
    "π" "\\pi"
    "ϖ" "\\varpi"
    "ρ" "\\rho"
    "ϱ" "\\varrho"
    "σ" "\\sigma"
    "ς" "\\varsigma"
    "τ" "\\tau"
    "υ" "\\upsilon"
    "ϕ" "\\phi"
    "φ" "\\varphi"
    "χ" "\\chi"
    "ψ" "\\psi"
    "ω" "\\omega"
    "Γ" "\\Gamma"
    "Δ" "\\Delta"
    "Θ" "\\Theta"
    "Λ" "\\Lambda"
    "Ξ" "\\Xi"
    "Π" "\\Pi"
    "Σ" "\\Sigma"
    "𝛶" "\\Upsilon"
    "Φ" "\\Phi"
    "Ψ" "\\Psi"
    "Ω" "\\Omega"
    # 
    "→" "\\to"
    "←" "\\leftarrow"
    "↑" "\\uparrow"
    "↓" "\\downarrow"
    "↔" "\\leftrightarrow"
    "⇐" "\\Leftarrow"
    "⇒" "\\Rightarrow"
    "⇔" "\\Leftrightarrow"
    "±" "\\pm"
    "∓" "\\mp"
    "‖" "\\|"
    "∑" "\\sum"
    "∏" "\\prod"
    "∫" "\\int"
    "ħ" "\\hbar"
    "∞" "\\infty"
    "∂" "\\partial"
    "∇" "\\nabla"
    "★" "\\star"
    "△" "\\triangle"
    "□" "\\square"
    "✓" "\\checkmark"
    "∃" "\\exists"
    "∀" "\\forall"
    "⟨" "\\langle"
    "⟩" "\\rangle"
    "×" "\\times"
    "⋅" "\\cdot"
    "†" "\\dagger"
    "⊕" "\\oplus"
    "⊗" "\\otimes"
    "⨁" "\\bigoplus"
    "⨂" "\\bigotimes"
    "≔" "\\coloneqq"
    "≕" "\\eqcolon"
    "≠" "\\ne"
    "≡" "\\equiv"
    "≈" "\\approx"
    "≊" "\\approxeq"
    "∼" "\\sim"
    "≃" "\\simeq"
    "≅" "\\cong"
    "∝" "\\propto"
    "∈" "\\in"
    "∉" "\\notin"
    "⊂" "\\subset"
    "⊆" "\\subseteq"
    "⊊" "\\subsetneq"
    "⊃" "\\supset"
    "⊇" "\\supseteq"
    "⊋" "\\supsetneq"
    "∩" "\\cap"
    "∪" "\\cup"
    "∅" "\\emptyset"
    "≤" "\\leq"
    "≲" "\\lesssim"
    "≦" "\\leqq"
    "≪" "\\ll"
    "≥" "\\geq"
    "≳" "\\gtrsim"
    "≧" "\\geqq"
    "≫" "\\gg"
    "⪯" "\\preceq"
    "⪰" "\\succeq"
    "⊥" "\\perp"
    "‖" "\\parallel"
    "∋" "\\ni"
    "⌈" "\\lceil"
    "⌉" "\\rceil"
    "⌊" "\\lfloor"
    "⌋" "\\rfloor"
    #
    "⋯" "\\cdots"
    "…" "\\ldots"
    "⋱" "\\ddots"
    "⋮" "\\vdots"
    "÷" "\\frac"
    "√" "\\sqrt"
    "␣" "\\quad"
    "＿" "_\\mathrm"
    "＾" "^\\mathrm"
    ]
small_numbers = [
    "⁰" "^0"
    "¹" "^1"
    "²" "^2"
    "³" "^3"
    "⁴" "^4"
    "⁵" "^5"
    "⁶" "^6"
    "⁷" "^7"
    "⁸" "^8"
    "⁹" "^9"
    "⁺" "^+"
    "⁻" "^-"
    "₀" "_0"
    "₁" "_1"
    "₂" "_2"
    "₃" "_3"
    "₄" "_4"
    "₅" "_5"
    "₆" "_6"
    "₇" "_7"
    "₈" "_8"
    "₉" "_9"
    "₊" "_+"
    "₋" "_-"
]
char_not_spacing = [
    "ℯ" "{{e}}"
    "¡" "{{i}}"
    "｜" "\\Big|"
    "≟" "\\overset{?}{=}"
    #
    "𝒂" "\\bm{a}"
    "𝒃" "\\bm{b}"
    "𝒄" "\\bm{c}"
    "𝒅" "\\bm{d}"
    "𝒆" "\\bm{e}"
    "𝒇" "\\bm{f}"
    "𝒈" "\\bm{g}"
    "𝒉" "\\bm{h}"
    "𝒊" "\\bm{i}"
    "𝒋" "\\bm{j}"
    "𝒌" "\\bm{k}"
    "𝒍" "\\bm{l}"
    "𝒎" "\\bm{m}"
    "𝒏" "\\bm{n}"
    "𝒐" "\\bm{o}"
    "𝒑" "\\bm{p}"
    "𝒒" "\\bm{q}"
    "𝒓" "\\bm{r}"
    "𝒔" "\\bm{s}"
    "𝒕" "\\bm{t}"
    "𝒖" "\\bm{u}"
    "𝒗" "\\bm{v}"
    "𝒘" "\\bm{w}"
    "𝒙" "\\bm{x}"
    "𝒚" "\\bm{y}"
    "𝒛" "\\bm{z}"
    "𝑨" "\\bm{A}"
    "𝑩" "\\bm{B}"
    "𝑪" "\\bm{C}"
    "𝑫" "\\bm{D}"
    "𝑬" "\\bm{E}"
    "𝑭" "\\bm{F}"
    "𝑮" "\\bm{G}"
    "𝑯" "\\bm{H}"
    "𝑰" "\\bm{I}"
    "𝑱" "\\bm{J}"
    "𝑲" "\\bm{K}"
    "𝑳" "\\bm{L}"
    "𝑴" "\\bm{M}"
    "𝑵" "\\bm{N}"
    "𝑶" "\\bm{O}"
    "𝑷" "\\bm{P}"
    "𝑸" "\\bm{Q}"
    "𝑹" "\\bm{R}"
    "𝑺" "\\bm{S}"
    "𝑻" "\\bm{T}"
    "𝑼" "\\bm{U}"
    "𝑽" "\\bm{V}"
    "𝑾" "\\bm{W}"
    "𝑿" "\\bm{X}"
    "𝒀" "\\bm{Y}"
    "𝒁" "\\bm{Z}"
    "𝟎" "\\bm{0}"
    # 
    "𝔸" "\\mathbb{A}"
    "𝔹" "\\mathbb{B}"
    "ℂ" "\\mathbb{C}"
    "𝔻" "\\mathbb{D}"
    "𝔼" "\\mathbb{E}"
    "𝔽" "\\mathbb{F}"
    "𝔾" "\\mathbb{G}"
    "ℍ" "\\mathbb{H}"
    "𝕀" "\\mathbb{I}"
    "𝕁" "\\mathbb{J}"
    "𝕂" "\\mathbb{K}"
    "𝕃" "\\mathbb{L}"
    "𝕄" "\\mathbb{M}"
    "ℕ" "\\mathbb{N}"
    "𝕆" "\\mathbb{O}"
    "ℙ" "\\mathbb{P}"
    "ℚ" "\\mathbb{Q}"
    "ℝ" "\\mathbb{R}"
    "𝕊" "\\mathbb{S}"
    "𝕋" "\\mathbb{T}"
    "𝕌" "\\mathbb{U}"
    "𝕍" "\\mathbb{V}"
    "𝕎" "\\mathbb{W}"
    "𝕏" "\\mathbb{X}"
    "𝕐" "\\mathbb{Y}"
    "ℤ" "\\mathbb{Z}"
    "𝟙" "\\mathbbm{1}"
    # 
    "𝒜" "\\mathcal{A}"
    "ℬ" "\\mathcal{B}"
    "𝒞" "\\mathcal{C}"
    "𝒟" "\\mathcal{D}"
    "ℰ" "\\mathcal{E}"
    "ℱ" "\\mathcal{F}"
    "𝒢" "\\mathcal{G}"
    "ℋ" "\\mathcal{H}"
    "ℐ" "\\mathcal{I}"
    "𝒥" "\\mathcal{J}"
    "𝒦" "\\mathcal{K}"
    "ℒ" "\\mathcal{L}"
    "ℳ" "\\mathcal{M}"
    "𝒩" "\\mathcal{N}"
    "𝒪" "\\mathcal{O}"
    "𝒫" "\\mathcal{P}"
    "𝒬" "\\mathcal{Q}"
    "ℛ" "\\mathcal{R}"
    "𝒮" "\\mathcal{S}"
    "𝒯" "\\mathcal{T}"
    "𝒰" "\\mathcal{U}"
    "𝒱" "\\mathcal{V}"
    "𝒲" "\\mathcal{W}"
    "𝒳" "\\mathcal{X}"
    "𝒴" "\\mathcal{Y}"
    "𝒵" "\\mathcal{Z}"
    #
    "𝑎" "\\mathrm{a}"
    "𝑏" "\\mathrm{b}"
    "𝑐" "\\mathrm{c}"
    "𝑑" "\\mathrm{d}"
    "𝑒" "\\mathrm{e}"
    "𝑓" "\\mathrm{f}"
    "𝑔" "\\mathrm{g}"
    "ℎ" "\\mathrm{h}"
    "𝑖" "\\mathrm{i}"
    "𝑗" "\\mathrm{j}"
    "𝑘" "\\mathrm{k}"
    "𝑙" "\\mathrm{l}"
    "𝑚" "\\mathrm{m}"
    "𝑛" "\\mathrm{n}"
    "𝑜" "\\mathrm{o}"
    "𝑝" "\\mathrm{p}"
    "𝑞" "\\mathrm{q}"
    "𝑟" "\\mathrm{r}"
    "𝑠" "\\mathrm{s}"
    "𝑡" "\\mathrm{t}"
    "𝑢" "\\mathrm{u}"
    "𝑣" "\\mathrm{v}"
    "𝑤" "\\mathrm{w}"
    "𝑥" "\\mathrm{x}"
    "𝑦" "\\mathrm{y}"
    "𝑧" "\\mathrm{z}"
    "𝐴" "\\mathrm{A}"
    "𝐵" "\\mathrm{B}"
    "𝐶" "\\mathrm{C}"
    "𝐷" "\\mathrm{D}"
    "𝐸" "\\mathrm{E}"
    "𝐹" "\\mathrm{F}"
    "𝐺" "\\mathrm{G}"
    "𝐻" "\\mathrm{H}"
    "𝐼" "\\mathrm{I}"
    "𝐽" "\\mathrm{J}"
    "𝐾" "\\mathrm{K}"
    "𝐿" "\\mathrm{L}"
    "𝑀" "\\mathrm{M}"
    "𝑁" "\\mathrm{N}"
    "𝑂" "\\mathrm{O}"
    "𝑃" "\\mathrm{P}"
    "𝑄" "\\mathrm{Q}"
    "𝑅" "\\mathrm{R}"
    "𝑆" "\\mathrm{S}"
    "𝑇" "\\mathrm{T}"
    "𝑈" "\\mathrm{U}"
    "𝑉" "\\mathrm{V}"
    "𝑊" "\\mathrm{W}"
    "𝑋" "\\mathrm{X}"
    "𝑌" "\\mathrm{Y}"
    "𝑍" "\\mathrm{Z}"
]

function translator(txt)
    for dict in eachrow(preamble)
        txt = replace(txt,dict[1]=>dict[2])
    end
    for dict in eachrow(command_spacing)
        txt = replace(txt,dict[1]*r"(?=[a-zA-Z])"=>dict[2]*" ")
        txt = replace(txt,dict[1]=>dict[2])
    end
    for dict in eachrow(command_not_spacing)
        txt = replace(txt,dict[1]=>dict[2])
    end
    for dict in eachrow(char_spacing)
        txt = replace(txt,dict[1]*r"(?=[a-zA-Z])"=>dict[2]*" ")
        txt = replace(txt,dict[1]=>dict[2])
    end
    for dict in eachrow(char_not_spacing)
        txt = replace(txt,dict[1]=>dict[2])
    end
    for dict in eachrow(small_numbers)
        txt = replace(txt,dict[1]=>dict[2])
    end
    return txt
end

function unicode_to_plain(inputfile,outputfile)
    f = open(inputfile, "r")
    list = readlines(f)
    for i in 1:lastindex(list)
        list[i] = translator(list[i])
    end
    close(f)
    open(outputfile,"w") do out
        println(out,join(list,"\n"))
    end
    println("translated unicode tex to plain")
end

function inverse_translator(txt)
    for dict in eachrow(preamble)
        txt = replace(txt,dict[2]=>dict[1])
    end
    for dict in eachrow(command_spacing)
        txt = replace(txt,dict[2]*r"(?=[^a-zA-Z])"=>dict[1])
        txt = replace(txt,dict[2]*r"$"=>dict[1])
    end
    for dict in eachrow(command_not_spacing)
        txt = replace(txt,dict[2]=>dict[1])
    end
    for dict in eachrow(non_standard_writing_plain)
        txt = replace(txt,dict[2]=>dict[1])
    end
    for dict in eachrow(char_spacing)
        txt = replace(txt,dict[2]*r"(?=[^a-zA-Z])"=>dict[1])
        txt = replace(txt,dict[2]*r"$"=>dict[1])
    end
    for dict in eachrow(char_not_spacing)
        txt = replace(txt,dict[2]=>dict[1])
    end
    for dict in eachrow(small_numbers)
        txt = replace(txt,dict[2]*r"(?=[^0-9])"=>dict[1])
    end
    return txt
end

function plain_to_unicode(inputfile,outputfile)
    f = open(inputfile, "r")
    list = readlines(f)
    for i in 1:lastindex(list)
        list[i] = inverse_translator(list[i])
    end
    close(f)
    open(outputfile,"w") do out
        println(out,join(list,"\n"))
    end
    println("translated plain tex to unicode")
end

"""
現在のディレクトリとそのサブディレクトリから.texファイルを検索して表示します
"""
function list_tex_files()
    # 現在のディレクトリを取得
    current_dir = pwd()
    println("Current directory: $current_dir")
    
    # .texファイルのリストを初期化
    tex_files = String[]
    
    # 現在のディレクトリとサブディレクトリを検索
    println("Searching for files...")
    
    # readdir再帰で検索
    function search_dir(dir)
        try
            for item in readdir(dir, join=true)
                if isfile(item) && endswith(lowercase(item), ".tex")
                    push!(tex_files, item)
                elseif isdir(item)
                    search_dir(item)
                end
            end
        catch e
            println("Warning: Error reading directory $dir: $e")
        end
    end
    
    # 検索実行
    search_dir(current_dir)
    
    # 結果を表示
    if isempty(tex_files)
        println("No .tex files found in the current directory")
        return nothing
    end
    
    println("\nFound .tex files (total: $(length(tex_files))):")
    for (i, file) in enumerate(tex_files)
        println("$i. $file")
    end
    
    return tex_files
end

# Unicodeファイルを判別するための識別子リスト
unicode_indicator_list = ["(unicode)", "(uni)", "(u)"]

"""
選択されたファイルの形式を検出します
ファイル名にunicode_indicator_listのいずれかの文字列が含まれていればUnicode形式、
それ以外はPlain形式と判定します
"""
function detect_format(file_path)
    try
        # ファイル名を取得
        filename = basename(file_path)
        
        # ファイル名にunicode_indicator_listのいずれかが含まれるか確認
        for indicator in unicode_indicator_list
            if occursin(lowercase(indicator), lowercase(filename))
                return "Unicode"
            end
        end
        
        # どの識別子も含まれていない場合はPlain形式
        return "Plain"
    catch e
        println("Error processing filename: $e")
        println(e)
        return "Error"
    end
end

"""
ファイルを指定された形式に変換します
Unicode形式: ファイル名にunicode_indicator_listのいずれかを含む
Plain形式: ファイル名にUnicode形式の特徴を含まない
"""
function convert_format(input_file, target_format)
    if !isfile(input_file)
        println("Error: File '$input_file' not found")
        return false
    end
    
    # ファイル名と拡張子を取得
    dir_name = dirname(input_file)
    file_name = basename(input_file)
    base_name, extension = splitext(file_name)
    
    # 現在の形式を検出
    current_format = detect_format(input_file)
    println("Current format: $current_format")
    
    # 新しいファイル名を準備
    new_file_name = ""
    output_file = ""
    
    # 変換処理
    if target_format == "Unicode" && current_format == "Plain"
        # Plain→Unicode変換
        # ファイル名に"(unicode)"を追加
        new_base_name = "$(base_name)(unicode)"
        new_file_name = "$(new_base_name)$(extension)"
        output_file = joinpath(dir_name, new_file_name)
        
        println("Converting from Plain to Unicode format")
        println("'$(file_name)' → '$(new_file_name)'")
        
        # 実際の変換処理を呼び出す
        try
            # 既存の変換関数を呼び出し
            plain_to_unicode(input_file, output_file)
            println("Conversion completed!")
            return true
        catch e
            println("Error during conversion: $e")
            return false
        end
        
    elseif target_format == "Plain" && current_format == "Unicode"
        # Unicode→Plain変換
        # ファイル名から識別子を削除
        new_base_name = base_name
        for indicator in unicode_indicator_list
            new_base_name = replace(new_base_name, lowercase(indicator) => "")
            new_base_name = replace(new_base_name, indicator => "")
        end
        
        # 連続する括弧や空白を整理
        new_base_name = replace(new_base_name, r"\(\s*\)" => "")
        new_base_name = replace(new_base_name, r"\s+" => " ")
        new_base_name = strip(new_base_name)
        
        new_file_name = "$(new_base_name)$(extension)"
        output_file = joinpath(dir_name, new_file_name)
        
        println("Converting from Unicode to Plain format")
        println("'$(file_name)' → '$(new_file_name)'")
        
        # 実際の変換処理を呼び出す
        try
            # 既存の変換関数を呼び出し
            unicode_to_plain(input_file, output_file)
            println("Conversion completed!")
            return true
        catch e
            println("Error during conversion: $e")
            return false
        end
        
    elseif target_format == current_format
        println("File is already in $target_format format. No conversion needed.")
        return false
    else
        println("Unsupported conversion: $current_format to $target_format")
        return false
    end
end

function convert_tex()
    println("=== TeX Format Converter (Unicode ⟷ Plain) ===")
    
    # ステップ1: ファイルの検索
    files = list_tex_files()
    if files === nothing || isempty(files)
        println("No .tex files found. Exiting.")
        return
    end
    
    # ステップ2: ファイルの選択 - 修正された入力処理
    choice_num = 0
    valid_choice = false
    
    while !valid_choice
        println("\nEnter the number of the file to convert: ")
        try
            # 標準入力から直接読み込み、空白を削除
            choice_str = strip(readline())
            
            # 入力が空でないことを確認
            if isempty(choice_str)
                println("Empty input received. Please enter a number.")
                continue
            end
            
            # 文字列を整数に変換
            choice_num = parse(Int, choice_str)
            
            # 有効な範囲内か確認
            if choice_num < 1 || choice_num > length(files)
                println("Invalid selection. Please enter a number between 1 and $(length(files)).")
                continue
            end
            
            valid_choice = true
        catch e
            println("Invalid input. Please enter a number: $(e)")
        end
    end
    
    # 有効な選択を取得した後の処理
    selected_file = files[choice_num]
    println("Selected file: $selected_file")
    
    # ステップ3: 形式の検出
    current_format = detect_format(selected_file)
    
    if current_format == "Error"
        println("An error occurred while processing the file.")
        return
    else
        println("Detected format: $current_format")
        # 対象形式（現在の形式の反対）を決定
        target_format = current_format == "Unicode" ? "Plain" : "Unicode"
        println("Will convert to: $target_format")
    end
    
    # ステップ4: 確認
    confirm = ""
    while !(confirm in ["y", "n"])
        print("Continue? (y/n): ")
        confirm = lowercase(strip(readline()))
        if isempty(confirm)
            println("Empty input received. Please enter 'y' or 'n'.")
        end
    end
    
    if confirm != "y"
        println("Conversion cancelled.")
        return
    end
    
    # ステップ5: 変換実行
    success = convert_format(selected_file, target_format)
    if success
        println("Conversion completed successfully.")
    else
        println("Conversion could not be completed.")
    end
end

convert_tex()

```