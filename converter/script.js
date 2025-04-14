document.addEventListener('DOMContentLoaded', () => {
    const inputTextArea = document.getElementById('input-textarea');
    const outputTextArea = document.getElementById('output-textarea');
    const toggleDirectionButton = document.getElementById('toggle-direction-button');
    const copyOutputButton = document.getElementById('copy-output-button');
    const rulesTextArea = document.getElementById('rules-textarea');
    const saveRulesButton = document.getElementById('save-rules-button');
    const resetRulesButton = document.getElementById('reset-rules-button');
    const ruleStatus = document.getElementById('rule-status');
    const inputLabel = document.getElementById('input-label');
    const outputLabel = document.getElementById('output-label');

    // --- デフォルト変換ルール ---
    const defaultRules = {
        "correspondence": [
            // big operators
            {"unicode": "∑", "normal": "\\sum"},
            {"unicode": "∏", "normal": "\\prod"},
            {"unicode": "∫", "normal": "\\int"},
            {"unicode": "⨁", "normal": "\\bigoplus"},
            {"unicode": "⨂", "normal": "\\bigotimes"},
            {"unicode": "∮", "normal": "\\oint"},
            {"unicode": "∐", "normal": "\\coprod"},
            {"unicode": "⋀", "normal": "\\bigwedge"},
            {"unicode": "⋁", "normal": "\\bigvee"},
            {"unicode": "⋂", "normal": "\\bigcap"},
            {"unicode": "⋃", "normal": "\\bigcup"},
            // characters
            {"unicode": "∅", "normal": "\\emptyset"},
            {"unicode": "∅", "normal": "\\varnothing"},
            {"unicode": "ħ", "normal": "\\hbar"},
            {"unicode": "ℏ", "normal": "\\hslash"},
            {"unicode": "℘", "normal": "\\wp"},
            {"unicode": "∠", "normal": "\\angle"},
            {"unicode": "∞", "normal": "\\infty"},
            {"unicode": "∂", "normal": "\\partial"},
            {"unicode": "∇", "normal": "\\nabla"},
            {"unicode": "★", "normal": "\\star"},
            {"unicode": "△", "normal": "\\triangle"},
            {"unicode": "□", "normal": "\\square"},
            {"unicode": "✓", "normal": "\\checkmark"},
            {"unicode": "∃", "normal": "\\exists"},
            {"unicode": "∄", "normal": "\\nexists"},
            {"unicode": "∀", "normal": "\\forall"},
            {"unicode": "†", "normal": "\\dagger"},
            {"unicode": "⊥", "normal": "\\bot"},
            {"unicode": "⊤", "normal": "\\top"},
            {"unicode": "☡", "normal": "\\danger"},
            {"unicode": "¬", "normal": "\\neg"},
            {"unicode": "′", "normal": "\\prime"},
            {"unicode": "‵", "normal": "\\backprime"},
            {"unicode": "ℵ", "normal": "\\aleph"},
            {"unicode": "ℶ", "normal": "\\beth"},
            {"unicode": "ℷ", "normal": "\\gimel"},
            {"unicode": "ℸ", "normal": "\\daleth"},
            {"unicode": "ı", "normal": "\\imath"},
            {"unicode": "ȷ", "normal": "\\jmath"},
            {"unicode": "ℓ", "normal": "\\ell"},
            {"unicode": "♣", "normal": "\\clubsuit"},
            {"unicode": "♢", "normal": "\\diamondsuit"},
            {"unicode": "♡", "normal": "\\heartsuit"},
            {"unicode": "♠", "normal": "\\spadesuit"},
            {"unicode": "⋯", "normal": "\\cdots"},
            {"unicode": "…", "normal": "\\ldots"},
            {"unicode": "⋱", "normal": "\\ddots"},
            {"unicode": "⋮", "normal": "\\vdots"},
            // relations
            {"unicode": "±", "normal": "\\pm"},
            {"unicode": "∓", "normal": "\\mp"},
            {"unicode": "∧", "normal": "\\wedge"},
            {"unicode": "∨", "normal": "\\vee"},
            {"unicode": "×", "normal": "\\times"},
            {"unicode": "⋅", "normal": "\\cdot"},
            {"unicode": "∘", "normal": "\\circ"},
            {"unicode": "∙", "normal": "\\bullet"},
            {"unicode": "⊕", "normal": "\\oplus"},
            {"unicode": "⊗", "normal": "\\otimes"},
            {"unicode": "∖", "normal": "\\setminus"},
            {"unicode": "≀", "normal": "\\wr"},
            {"unicode": "⊎", "normal": "\\uplus"},
            {"unicode": "→", "normal": "\\to"},
            {"unicode": "←", "normal": "\\gets"},
            {"unicode": "↑", "normal": "\\uparrow"},
            {"unicode": "↓", "normal": "\\downarrow"},
            {"unicode": "↔", "normal": "\\leftrightarrow"},
            {"unicode": "↕", "normal": "\\updownarrow"},
            {"unicode": "⇐", "normal": "\\Leftarrow"},
            {"unicode": "⇒", "normal": "\\Rightarrow"},
            {"unicode": "⇑", "normal": "\\Uparrow"},
            {"unicode": "⇓", "normal": "\\Downarrow"},
            {"unicode": "⇔", "normal": "\\Leftrightarrow"},
            {"unicode": "⇕", "normal": "\\Updownarrow"},
            {"unicode": "⟹", "normal": "\\implies"},
            {"unicode": "⟸", "normal": "\\impliedby"},
            {"unicode": "⟺", "normal": "\\iff"},
            {"unicode": "↦", "normal": "\\mapsto"},
            {"unicode": "⟼", "normal": "\\longmapsto"},
            {"unicode": "⟵", "normal": "\\longleftarrow"},
            {"unicode": "⟶", "normal": "\\longrightarrow"},
            {"unicode": "⟷", "normal": "\\longleftrightarrow"},
            {"unicode": "↢", "normal": "\\leftarrowtail"},
            {"unicode": "↣", "normal": "\\rightarrowtail"},
            {"unicode": "↠", "normal": "\\twoheadrightarrow"},
            {"unicode": "↞", "normal": "\\twoheadleftarrow"},
            {"unicode": "↼", "normal": "\\leftharpoonup"},
            {"unicode": "↽", "normal": "\\leftharpoondown"},
            {"unicode": "⇀", "normal": "\\rightharpoonup"},
            {"unicode": "⇁", "normal": "\\rightharpoondown"},
            {"unicode": "⇌", "normal": "\\rightleftharpoons"},
            {"unicode": "↝", "normal": "\\leadsto"},
            {"unicode": "↪", "normal": "\\hookrightarrow"},
            {"unicode": "↩", "normal": "\\hookleftarrow"},
            {"unicode": "↗", "normal": "\\nearrow"},
            {"unicode": "↘", "normal": "\\searrow"},
            {"unicode": "↖", "normal": "\\nwarrow"},
            {"unicode": "↙", "normal": "\\swarrow"},
            {"unicode": "≔", "normal": "\\coloneqq"},
            {"unicode": "≕", "normal": "\\eqcolon"},
            {"unicode": "≠", "normal": "\\ne"},
            {"unicode": "≡", "normal": "\\equiv"},
            {"unicode": "≈", "normal": "\\approx"},
            {"unicode": "≊", "normal": "\\approxeq"},
            {"unicode": "∼", "normal": "\\sim"},
            {"unicode": "≃", "normal": "\\simeq"},
            {"unicode": "≅", "normal": "\\cong"},
            {"unicode": "∝", "normal": "\\propto"},
            {"unicode": "∈", "normal": "\\in"},
            {"unicode": "∋", "normal": "\\ni"},
            {"unicode": "∉", "normal": "\\notin"},
            {"unicode": "⊂", "normal": "\\subset"},
            {"unicode": "⊆", "normal": "\\subseteq"},
            {"unicode": "⊊", "normal": "\\subsetneq"},
            {"unicode": "⊃", "normal": "\\supset"},
            {"unicode": "⊇", "normal": "\\supseteq"},
            {"unicode": "⊋", "normal": "\\supsetneq"},
            {"unicode": "∩", "normal": "\\cap"},
            {"unicode": "∪", "normal": "\\cup"},
            {"unicode": "≤", "normal": "\\le"},
            {"unicode": "≲", "normal": "\\lesssim"},
            {"unicode": "≦", "normal": "\\leqq"},
            {"unicode": "≪", "normal": "\\ll"},
            {"unicode": "≥", "normal": "\\ge"},
            {"unicode": "≳", "normal": "\\gtrsim"},
            {"unicode": "≧", "normal": "\\geqq"},
            {"unicode": "≫", "normal": "\\gg"},
            {"unicode": "⪯", "normal": "\\preceq"},
            {"unicode": "⪰", "normal": "\\succeq"},
            {"unicode": "⟂", "normal": "\\perp"},
            {"unicode": "∥", "normal": "\\parallel"},
            {"unicode": "∣", "normal": "\\mid"},
            {"unicode": "∤", "normal": "\\nmid"},
            {"unicode": "⊢", "normal": "\\vdash"},
            {"unicode": "⊣", "normal": "\\dashv"},
            {"unicode": "⊨", "normal": "\\models"},
            {"unicode": "≺", "normal": "\\prec"},
            {"unicode": "≻", "normal": "\\succ"},
            {"unicode": "≼", "normal": "\\preccurlyeq"},
            {"unicode": "≽", "normal": "\\succcurlyeq"},
            {"unicode": "⊏", "normal": "\\sqsubset"},
            {"unicode": "⊐", "normal": "\\sqsupset"},
            {"unicode": "⊑", "normal": "\\sqsubseteq"},
            {"unicode": "⊒", "normal": "\\sqsupseteq"},
            {"unicode": "≍", "normal": "\\asymp"},
            {"unicode": "≐", "normal": "\\doteq"},
            // brackets
            {"unicode": "⟨", "normal": "\\langle"},
            {"unicode": "⟩", "normal": "\\rangle"},
            {"unicode": "⌈", "normal": "\\lceil"},
            {"unicode": "⌉", "normal": "\\rceil"},
            {"unicode": "⌊", "normal": "\\lfloor"},
            {"unicode": "⌋", "normal": "\\rfloor"},
            {"unicode": "⟦", "normal": "\\llbracket"},
            {"unicode": "⟧", "normal": "\\rrbracket"},
            {"unicode": "‖", "normal": "\\|"},
            // special notation
            {"unicode": "÷", "normal": "\\frac"},
            {"unicode": "√", "normal": "\\sqrt"},
            {"unicode": "␣", "normal": "\\quad"},
            // bold font
            {"unicode": "𝒂", "normal": "\\bm{a}"},
            {"unicode": "𝒃", "normal": "\\bm{b}"},
            {"unicode": "𝒄", "normal": "\\bm{c}"},
            {"unicode": "𝒅", "normal": "\\bm{d}"},
            {"unicode": "𝒆", "normal": "\\bm{e}"},
            {"unicode": "𝒇", "normal": "\\bm{f}"},
            {"unicode": "𝒈", "normal": "\\bm{g}"},
            {"unicode": "𝒉", "normal": "\\bm{h}"},
            {"unicode": "𝒊", "normal": "\\bm{i}"},
            {"unicode": "𝒋", "normal": "\\bm{j}"},
            {"unicode": "𝒌", "normal": "\\bm{k}"},
            {"unicode": "𝒍", "normal": "\\bm{l}"},
            {"unicode": "𝒎", "normal": "\\bm{m}"},
            {"unicode": "𝒏", "normal": "\\bm{n}"},
            {"unicode": "𝒐", "normal": "\\bm{o}"},
            {"unicode": "𝒑", "normal": "\\bm{p}"},
            {"unicode": "𝒒", "normal": "\\bm{q}"},
            {"unicode": "𝒓", "normal": "\\bm{r}"},
            {"unicode": "𝒔", "normal": "\\bm{s}"},
            {"unicode": "𝒕", "normal": "\\bm{t}"},
            {"unicode": "𝒖", "normal": "\\bm{u}"},
            {"unicode": "𝒗", "normal": "\\bm{v}"},
            {"unicode": "𝒘", "normal": "\\bm{w}"},
            {"unicode": "𝒙", "normal": "\\bm{x}"},
            {"unicode": "𝒚", "normal": "\\bm{y}"},
            {"unicode": "𝒛", "normal": "\\bm{z}"},
            {"unicode": "𝑨", "normal": "\\bm{A}"},
            {"unicode": "𝑩", "normal": "\\bm{B}"},
            {"unicode": "𝑪", "normal": "\\bm{C}"},
            {"unicode": "𝑫", "normal": "\\bm{D}"},
            {"unicode": "𝑬", "normal": "\\bm{E}"},
            {"unicode": "𝑭", "normal": "\\bm{F}"},
            {"unicode": "𝑮", "normal": "\\bm{G}"},
            {"unicode": "𝑯", "normal": "\\bm{H}"},
            {"unicode": "𝑰", "normal": "\\bm{I}"},
            {"unicode": "𝑱", "normal": "\\bm{J}"},
            {"unicode": "𝑲", "normal": "\\bm{K}"},
            {"unicode": "𝑳", "normal": "\\bm{L}"},
            {"unicode": "𝑴", "normal": "\\bm{M}"},
            {"unicode": "𝑵", "normal": "\\bm{N}"},
            {"unicode": "𝑶", "normal": "\\bm{O}"},
            {"unicode": "𝑷", "normal": "\\bm{P}"},
            {"unicode": "𝑸", "normal": "\\bm{Q}"},
            {"unicode": "𝑹", "normal": "\\bm{R}"},
            {"unicode": "𝑺", "normal": "\\bm{S}"},
            {"unicode": "𝑻", "normal": "\\bm{T}"},
            {"unicode": "𝑼", "normal": "\\bm{U}"},
            {"unicode": "𝑽", "normal": "\\bm{V}"},
            {"unicode": "𝑾", "normal": "\\bm{W}"},
            {"unicode": "𝑿", "normal": "\\bm{X}"},
            {"unicode": "𝒀", "normal": "\\bm{Y}"},
            {"unicode": "𝒁", "normal": "\\bm{Z}"},
            {"unicode": "𝟎", "normal": "\\bm{0}"},
            {"unicode": "𝟏", "normal": "\\bm{1}"},
            {"unicode": "𝟐", "normal": "\\bm{2}"},
            {"unicode": "𝟑", "normal": "\\bm{3}"},
            {"unicode": "𝟒", "normal": "\\bm{4}"},
            {"unicode": "𝟓", "normal": "\\bm{5}"},
            {"unicode": "𝟔", "normal": "\\bm{6}"},
            {"unicode": "𝟕", "normal": "\\bm{7}"},
            {"unicode": "𝟖", "normal": "\\bm{8}"},
            {"unicode": "𝟗", "normal": "\\bm{9}"},
            // Greek letters
            {"unicode": "α", "normal": "\\alpha"},
            {"unicode": "β", "normal": "\\beta"},
            {"unicode": "γ", "normal": "\\gamma"},
            {"unicode": "δ", "normal": "\\delta"},
            {"unicode": "ϵ", "normal": "\\epsilon"},
            {"unicode": "ε", "normal": "\\varepsilon"},
            {"unicode": "ζ", "normal": "\\zeta"},
            {"unicode": "η", "normal": "\\eta"},
            {"unicode": "θ", "normal": "\\theta"},
            {"unicode": "ϑ", "normal": "\\vartheta"},
            {"unicode": "ι", "normal": "\\iota"},
            {"unicode": "κ", "normal": "\\kappa"},
            {"unicode": "ϰ", "normal": "\\varkappa"},
            {"unicode": "λ", "normal": "\\lambda"},
            {"unicode": "μ", "normal": "\\mu"},
            {"unicode": "ν", "normal": "\\nu"},
            {"unicode": "ξ", "normal": "\\xi"},
            {"unicode": "π", "normal": "\\pi"},
            {"unicode": "ϖ", "normal": "\\varpi"},
            {"unicode": "ρ", "normal": "\\rho"},
            {"unicode": "ϱ", "normal": "\\varrho"},
            {"unicode": "σ", "normal": "\\sigma"},
            {"unicode": "ς", "normal": "\\varsigma"},
            {"unicode": "τ", "normal": "\\tau"},
            {"unicode": "υ", "normal": "\\upsilon"},
            {"unicode": "ϕ", "normal": "\\phi"},
            {"unicode": "φ", "normal": "\\varphi"},
            {"unicode": "χ", "normal": "\\chi"},
            {"unicode": "ψ", "normal": "\\psi"},
            {"unicode": "ω", "normal": "\\omega"},
            {"unicode": "Γ", "normal": "\\Gamma"},
            {"unicode": "Δ", "normal": "\\Delta"},
            {"unicode": "Θ", "normal": "\\Theta"},
            {"unicode": "Λ", "normal": "\\Lambda"},
            {"unicode": "Ξ", "normal": "\\Xi"},
            {"unicode": "Π", "normal": "\\Pi"},
            {"unicode": "Σ", "normal": "\\Sigma"},
            {"unicode": "Υ", "normal": "\\Upsilon"},
            {"unicode": "Φ", "normal": "\\Phi"},
            {"unicode": "Ψ", "normal": "\\Psi"},
            {"unicode": "Ω", "normal": "\\Omega"},
            {"unicode": "Ϝ", "normal": "\\Digamma"},
            {"unicode": "ϝ", "normal": "\\digamma"},
            // bold greek
            {"unicode": "𝜶", "normal": "\\bm{\\alpha}"},
            {"unicode": "𝜷", "normal": "\\bm{\\beta}"},
            {"unicode": "𝜸", "normal": "\\bm{\\gamma}"},
            {"unicode": "𝜹", "normal": "\\bm{\\delta}"},
            {"unicode": "𝜺", "normal": "\\bm{\\epsilon}"},
            {"unicode": "𝝐", "normal": "\\bm{\\varepsilon}"},
            {"unicode": "𝜻", "normal": "\\bm{\\zeta}"},
            {"unicode": "𝜼", "normal": "\\bm{\\eta}"},
            {"unicode": "𝜽", "normal": "\\bm{\\theta}"},
            {"unicode": "𝝑", "normal": "\\bm{\\vartheta}"},
            {"unicode": "𝜾", "normal": "\\bm{\\iota}"},
            {"unicode": "𝜿", "normal": "\\bm{\\kappa}"},
            {"unicode": "𝝒", "normal": "\\bm{\\varkappa}"},
            {"unicode": "𝝀", "normal": "\\bm{\\lambda}"},
            {"unicode": "𝝁", "normal": "\\bm{\\mu}"},
            {"unicode": "𝝂", "normal": "\\bm{\\nu}"},
            {"unicode": "𝝃", "normal": "\\bm{\\xi}"},
            {"unicode": "𝝅", "normal": "\\bm{\\pi}"},
            {"unicode": "𝝕", "normal": "\\bm{\\varpi}"},
            {"unicode": "𝝆", "normal": "\\bm{\\rho}"},
            {"unicode": "𝝔", "normal": "\\bm{\\varrho}"},
            {"unicode": "𝝈", "normal": "\\bm{\\sigma}"},
            {"unicode": "𝝇", "normal": "\\bm{\\varsigma}"},
            {"unicode": "𝝉", "normal": "\\bm{\\tau}"},
            {"unicode": "𝝊", "normal": "\\bm{\\upsilon}"},
            {"unicode": "𝝋", "normal": "\\bm{\\phi}"},
            {"unicode": "𝝓", "normal": "\\bm{\\varphi}"},
            {"unicode": "𝝌", "normal": "\\bm{\\chi}"},
            {"unicode": "𝝍", "normal": "\\bm{\\psi}"},
            {"unicode": "𝝎", "normal": "\\bm{\\omega}"},
            {"unicode": "𝜞", "normal": "\\bm{\\Gamma}"},
            {"unicode": "𝜟", "normal": "\\bm{\\Delta}"},
            {"unicode": "𝜣", "normal": "\\bm{\\Theta}"},
            {"unicode": "𝜦", "normal": "\\bm{\\Lambda}"},
            {"unicode": "𝜩", "normal": "\\bm{\\Xi}"},
            {"unicode": "𝜫", "normal": "\\bm{\\Pi}"},
            {"unicode": "𝜮", "normal": "\\bm{\\Sigma}"},
            {"unicode": "𝜰", "normal": "\\bm{\\Upsilon}"},
            {"unicode": "𝜱", "normal": "\\bm{\\Phi}"},
            {"unicode": "𝜳", "normal": "\\bm{\\Psi}"},
            {"unicode": "𝜴", "normal": "\\bm{\\Omega}"},
            // blackboard font
            {"unicode": "𝔸", "normal": "\\mathbb{A}"},
            {"unicode": "𝔹", "normal": "\\mathbb{B}"},
            {"unicode": "ℂ", "normal": "\\mathbb{C}"},
            {"unicode": "𝔻", "normal": "\\mathbb{D}"},
            {"unicode": "𝔼", "normal": "\\mathbb{E}"},
            {"unicode": "𝔽", "normal": "\\mathbb{F}"},
            {"unicode": "𝔾", "normal": "\\mathbb{G}"},
            {"unicode": "ℍ", "normal": "\\mathbb{H}"},
            {"unicode": "𝕀", "normal": "\\mathbb{I}"},
            {"unicode": "𝕁", "normal": "\\mathbb{J}"},
            {"unicode": "𝕂", "normal": "\\mathbb{K}"},
            {"unicode": "𝕃", "normal": "\\mathbb{L}"},
            {"unicode": "𝕄", "normal": "\\mathbb{M}"},
            {"unicode": "ℕ", "normal": "\\mathbb{N}"},
            {"unicode": "𝕆", "normal": "\\mathbb{O}"},
            {"unicode": "ℙ", "normal": "\\mathbb{P}"},
            {"unicode": "ℚ", "normal": "\\mathbb{Q}"},
            {"unicode": "ℝ", "normal": "\\mathbb{R}"},
            {"unicode": "𝕊", "normal": "\\mathbb{S}"},
            {"unicode": "𝕋", "normal": "\\mathbb{T}"},
            {"unicode": "𝕌", "normal": "\\mathbb{U}"},
            {"unicode": "𝕍", "normal": "\\mathbb{V}"},
            {"unicode": "𝕎", "normal": "\\mathbb{W}"},
            {"unicode": "𝕏", "normal": "\\mathbb{X}"},
            {"unicode": "𝕐", "normal": "\\mathbb{Y}"},
            {"unicode": "ℤ", "normal": "\\mathbb{Z}"},
            {"unicode": "𝟘", "normal": "\\mathbbm{0}"},
            {"unicode": "𝟙", "normal": "\\mathbbm{1}"},
            {"unicode": "𝟚", "normal": "\\mathbbm{2}"},
            {"unicode": "𝟛", "normal": "\\mathbbm{3}"},
            {"unicode": "𝟜", "normal": "\\mathbbm{4}"},
            {"unicode": "𝟝", "normal": "\\mathbbm{5}"},
            {"unicode": "𝟞", "normal": "\\mathbbm{6}"},
            {"unicode": "𝟟", "normal": "\\mathbbm{7}"},
            {"unicode": "𝟠", "normal": "\\mathbbm{8}"},
            {"unicode": "𝟡", "normal": "\\mathbbm{9}"},
            // Calligraphic font
            {"unicode": "𝒜", "normal": "\\mathcal{A}"},
            {"unicode": "ℬ", "normal": "\\mathcal{B}"},
            {"unicode": "𝒞", "normal": "\\mathcal{C}"},
            {"unicode": "𝒟", "normal": "\\mathcal{D}"},
            {"unicode": "ℰ", "normal": "\\mathcal{E}"},
            {"unicode": "ℱ", "normal": "\\mathcal{F}"},
            {"unicode": "𝒢", "normal": "\\mathcal{G}"},
            {"unicode": "ℋ", "normal": "\\mathcal{H}"},
            {"unicode": "ℐ", "normal": "\\mathcal{I}"},
            {"unicode": "𝒥", "normal": "\\mathcal{J}"},
            {"unicode": "𝒦", "normal": "\\mathcal{K}"},
            {"unicode": "ℒ", "normal": "\\mathcal{L}"},
            {"unicode": "ℳ", "normal": "\\mathcal{M}"},
            {"unicode": "𝒩", "normal": "\\mathcal{N}"},
            {"unicode": "𝒪", "normal": "\\mathcal{O}"},
            {"unicode": "𝒫", "normal": "\\mathcal{P}"},
            {"unicode": "𝒬", "normal": "\\mathcal{Q}"},
            {"unicode": "ℛ", "normal": "\\mathcal{R}"},
            {"unicode": "𝒮", "normal": "\\mathcal{S}"},
            {"unicode": "𝒯", "normal": "\\mathcal{T}"},
            {"unicode": "𝒰", "normal": "\\mathcal{U}"},
            {"unicode": "𝒱", "normal": "\\mathcal{V}"},
            {"unicode": "𝒲", "normal": "\\mathcal{W}"},
            {"unicode": "𝒳", "normal": "\\mathcal{X}"},
            {"unicode": "𝒴", "normal": "\\mathcal{Y}"},
            {"unicode": "𝒵", "normal": "\\mathcal{Z}"},
            // Fraktur font
            {"unicode": "𝔞", "normal": "\\mathfrak{a}"},
            {"unicode": "𝔟", "normal": "\\mathfrak{b}"},
            {"unicode": "𝔠", "normal": "\\mathfrak{c}"},
            {"unicode": "𝔡", "normal": "\\mathfrak{d}"},
            {"unicode": "𝔢", "normal": "\\mathfrak{e}"},
            {"unicode": "𝔣", "normal": "\\mathfrak{f}"},
            {"unicode": "𝔤", "normal": "\\mathfrak{g}"},
            {"unicode": "𝔥", "normal": "\\mathfrak{h}"},
            {"unicode": "𝔦", "normal": "\\mathfrak{i}"},
            {"unicode": "𝔧", "normal": "\\mathfrak{j}"},
            {"unicode": "𝓀", "normal": "\\mathfrak{k}"},
            {"unicode": "𝔩", "normal": "\\mathfrak{l}"},
            {"unicode": "𝔪", "normal": "\\mathfrak{m}"},
            {"unicode": "𝔫", "normal": "\\mathfrak{n}"},
            {"unicode": "𝔬", "normal": "\\mathfrak{o}"},
            {"unicode": "𝔭", "normal": "\\mathfrak{p}"},
            {"unicode": "𝔮", "normal": "\\mathfrak{q}"},
            {"unicode": "𝔯", "normal": "\\mathfrak{r}"},
            {"unicode": "𝔰", "normal": "\\mathfrak{s}"},
            {"unicode": "𝔱", "normal": "\\mathfrak{t}"},
            {"unicode": "𝔲", "normal": "\\mathfrak{u}"},
            {"unicode": "𝔳", "normal": "\\mathfrak{v}"},
            {"unicode": "𝔴", "normal": "\\mathfrak{w}"},
            {"unicode": "𝔵", "normal": "\\mathfrak{x}"},
            {"unicode": "𝔶", "normal": "\\mathfrak{y}"},
            {"unicode": "𝔷", "normal": "\\mathfrak{z}"},
            {"unicode": "𝔄", "normal": "\\mathfrak{A}"},
            {"unicode": "𝔅", "normal": "\\mathfrak{B}"},
            {"unicode": "ℭ", "normal": "\\mathfrak{C}"},
            {"unicode": "𝔇", "normal": "\\mathfrak{D}"},
            {"unicode": "𝔈", "normal": "\\mathfrak{E}"},
            {"unicode": "𝔉", "normal": "\\mathfrak{F}"},
            {"unicode": "𝔊", "normal": "\\mathfrak{G}"},
            {"unicode": "ℌ", "normal": "\\mathfrak{H}"},
            {"unicode": "ℑ", "normal": "\\mathfrak{I}"}, 
            {"unicode": "𝔍", "normal": "\\mathfrak{J}"},
            {"unicode": "𝔎", "normal": "\\mathfrak{K}"},
            {"unicode": "𝔏", "normal": "\\mathfrak{L}"},
            {"unicode": "𝔐", "normal": "\\mathfrak{M}"},
            {"unicode": "𝔑", "normal": "\\mathfrak{N}"},
            {"unicode": "𝔒", "normal": "\\mathfrak{O}"},
            {"unicode": "𝔓", "normal": "\\mathfrak{P}"},
            {"unicode": "𝔔", "normal": "\\mathfrak{Q}"},
            {"unicode": "ℜ", "normal": "\\mathfrak{R}"}, 
            {"unicode": "𝔖", "normal": "\\mathfrak{S}"},
            {"unicode": "𝔗", "normal": "\\mathfrak{T}"},
            {"unicode": "𝔘", "normal": "\\mathfrak{U}"},
            {"unicode": "𝔙", "normal": "\\mathfrak{V}"},
            {"unicode": "𝔚", "normal": "\\mathfrak{W}"},
            {"unicode": "𝔛", "normal": "\\mathfrak{X}"},
            {"unicode": "𝔜", "normal": "\\mathfrak{Y}"},
            {"unicode": "ℨ", "normal": "\\mathfrak{Z}"},
            // roman font (I usually swap italic and roman, because in the math-mode roman inputs are interpreted as italic.)
            {"unicode": "𝑎", "normal": "\\mathrm{a}"},
            {"unicode": "𝑏", "normal": "\\mathrm{b}"},
            {"unicode": "𝑐", "normal": "\\mathrm{c}"},
            {"unicode": "𝑑", "normal": "\\mathrm{d}"},
            {"unicode": "𝑒", "normal": "\\mathrm{e}"},
            {"unicode": "𝑓", "normal": "\\mathrm{f}"},
            {"unicode": "𝑔", "normal": "\\mathrm{g}"},
            {"unicode": "ℎ", "normal": "\\mathrm{h}"},
            {"unicode": "𝑖", "normal": "\\mathrm{i}"},
            {"unicode": "𝑗", "normal": "\\mathrm{j}"},
            {"unicode": "𝑘", "normal": "\\mathrm{k}"},
            {"unicode": "𝑙", "normal": "\\mathrm{l}"},
            {"unicode": "𝑚", "normal": "\\mathrm{m}"},
            {"unicode": "𝑛", "normal": "\\mathrm{n}"},
            {"unicode": "𝑜", "normal": "\\mathrm{o}"},
            {"unicode": "𝑝", "normal": "\\mathrm{p}"},
            {"unicode": "𝑞", "normal": "\\mathrm{q}"},
            {"unicode": "𝑟", "normal": "\\mathrm{r}"},
            {"unicode": "𝑠", "normal": "\\mathrm{s}"},
            {"unicode": "𝑡", "normal": "\\mathrm{t}"},
            {"unicode": "𝑢", "normal": "\\mathrm{u}"},
            {"unicode": "𝑣", "normal": "\\mathrm{v}"},
            {"unicode": "𝑤", "normal": "\\mathrm{w}"},
            {"unicode": "𝑥", "normal": "\\mathrm{x}"},
            {"unicode": "𝑦", "normal": "\\mathrm{y}"},
            {"unicode": "𝑧", "normal": "\\mathrm{z}"},
            {"unicode": "𝐴", "normal": "\\mathrm{A}"},
            {"unicode": "𝐵", "normal": "\\mathrm{B}"},
            {"unicode": "𝐶", "normal": "\\mathrm{C}"},
            {"unicode": "𝐷", "normal": "\\mathrm{D}"},
            {"unicode": "𝐸", "normal": "\\mathrm{E}"},
            {"unicode": "𝐹", "normal": "\\mathrm{F}"},
            {"unicode": "𝐺", "normal": "\\mathrm{G}"},
            {"unicode": "𝐻", "normal": "\\mathrm{H}"},
            {"unicode": "𝐼", "normal": "\\mathrm{I}"},
            {"unicode": "𝐽", "normal": "\\mathrm{J}"},
            {"unicode": "𝐾", "normal": "\\mathrm{K}"},
            {"unicode": "𝐿", "normal": "\\mathrm{L}"},
            {"unicode": "𝑀", "normal": "\\mathrm{M}"},
            {"unicode": "𝑁", "normal": "\\mathrm{N}"},
            {"unicode": "𝑂", "normal": "\\mathrm{O}"},
            {"unicode": "𝑃", "normal": "\\mathrm{P}"},
            {"unicode": "𝑄", "normal": "\\mathrm{Q}"},
            {"unicode": "𝑅", "normal": "\\mathrm{R}"},
            {"unicode": "𝑆", "normal": "\\mathrm{S}"},
            {"unicode": "𝑇", "normal": "\\mathrm{T}"},
            {"unicode": "𝑈", "normal": "\\mathrm{U}"},
            {"unicode": "𝑉", "normal": "\\mathrm{V}"},
            {"unicode": "𝑊", "normal": "\\mathrm{W}"},
            {"unicode": "𝑋", "normal": "\\mathrm{X}"},
            {"unicode": "𝑌", "normal": "\\mathrm{Y}"},
            {"unicode": "𝑍", "normal": "\\mathrm{Z}"},
            // sub/superscript
            {"unicode": "⁰", "normal": "^0"},
            {"unicode": "¹", "normal": "^1"},
            {"unicode": "²", "normal": "^2"},
            {"unicode": "³", "normal": "^3"},
            {"unicode": "⁴", "normal": "^4"},
            {"unicode": "⁵", "normal": "^5"},
            {"unicode": "⁶", "normal": "^6"},
            {"unicode": "⁷", "normal": "^7"},
            {"unicode": "⁸", "normal": "^8"},
            {"unicode": "⁹", "normal": "^9"},
            {"unicode": "⁺", "normal": "^+"},
            {"unicode": "⁻", "normal": "^-"},
            {"unicode": "₀", "normal": "_0"},
            {"unicode": "₁", "normal": "_1"},
            {"unicode": "₂", "normal": "_2"},
            {"unicode": "₃", "normal": "_3"},
            {"unicode": "₄", "normal": "_4"},
            {"unicode": "₅", "normal": "_5"},
            {"unicode": "₆", "normal": "_6"},
            {"unicode": "₇", "normal": "_7"},
            {"unicode": "₈", "normal": "_8"},
            {"unicode": "₉", "normal": "_9"},
            {"unicode": "₊", "normal": "_+"},
            {"unicode": "₋", "normal": "_-"}
        ],
        "other_normal": [
            {"unicode": "⟹", "normal": "\\Longrightarrow"},
            {"unicode": "⟸", "normal": "\\Longleftarrow"},
            {"unicode": "⟺", "normal": "\\Longleftrightarrow"},
            {"unicode": "→", "normal": "\\rightarrow"},
            {"unicode": "←", "normal": "\\leftarrow"},
            {"unicode": "≠", "normal": "\\neq"},
            {"unicode": "∣", "normal": "\\vert"},
            {"unicode": "‖", "normal": "\\Vert"}, 
            {"unicode": "≠", "normal": "\\not="},
            {"unicode": "≠", "normal": "\\not ="},
            {"unicode": "≤", "normal": "\\leq"},
            {"unicode": "≥", "normal": "\\geq"},
            {"unicode": "⁰", "normal": "^{0}"},
            {"unicode": "¹", "normal": "^{1}"},
            {"unicode": "²", "normal": "^{2}"},
            {"unicode": "³", "normal": "^{3}"},
            {"unicode": "⁴", "normal": "^{4}"},
            {"unicode": "⁵", "normal": "^{5}"},
            {"unicode": "⁶", "normal": "^{6}"},
            {"unicode": "⁷", "normal": "^{7}"},
            {"unicode": "⁸", "normal": "^{8}"},
            {"unicode": "⁹", "normal": "^{9}"},
            {"unicode": "⁺", "normal": "^{+}"},
            {"unicode": "⁻", "normal": "^{-}"},
            {"unicode": "₀", "normal": "_{0}"},
            {"unicode": "₁", "normal": "_{1}"},
            {"unicode": "₂", "normal": "_{2}"},
            {"unicode": "₃", "normal": "_{3}"},
            {"unicode": "₄", "normal": "_{4}"},
            {"unicode": "₅", "normal": "_{5}"},
            {"unicode": "₆", "normal": "_{6}"},
            {"unicode": "₇", "normal": "_{7}"},
            {"unicode": "₈", "normal": "_{8}"},
            {"unicode": "₉", "normal": "_{9}"},
            {"unicode": "₊", "normal": "_{+}"},
            {"unicode": "₋", "normal": "_{-}"},
        ],
        "other_unicode": [
            {"unicode": "𝛼", "normal": "\\alpha"},
            {"unicode": "𝛽", "normal": "\\beta"},
            {"unicode": "𝛾", "normal": "\\gamma"},
            {"unicode": "𝛿", "normal": "\\delta"},
            {"unicode": "𝜖", "normal": "\\varepsilon"},
            {"unicode": "𝜀", "normal": "\\epsilon"},
            {"unicode": "𝜁", "normal": "\\zeta"},
            {"unicode": "𝜂", "normal": "\\eta"},
            {"unicode": "𝜃", "normal": "\\theta"},
            {"unicode": "𝜗", "normal": "\\vartheta"},
            {"unicode": "𝜄", "normal": "\\iota"},
            {"unicode": "𝜅", "normal": "\\kappa"},
            {"unicode": "𝜘", "normal": "\\varkappa"},
            {"unicode": "𝜆", "normal": "\\lambda"},
            {"unicode": "𝜇", "normal": "\\mu"},
            {"unicode": "𝜈", "normal": "\\nu"},
            {"unicode": "𝜉", "normal": "\\xi"},
            {"unicode": "𝜋", "normal": "\\pi"},
            {"unicode": "𝜛", "normal": "\\varpi"},
            {"unicode": "𝜌", "normal": "\\rho"},
            {"unicode": "𝜚", "normal": "\\varrho"},
            {"unicode": "𝜎", "normal": "\\sigma"},
            {"unicode": "𝜍", "normal": "\\varsigma"},
            {"unicode": "𝜏", "normal": "\\tau"},
            {"unicode": "𝜐", "normal": "\\upsilon"},
            {"unicode": "𝜑", "normal": "\\phi"},
            {"unicode": "𝜙", "normal": "\\varphi"},
            {"unicode": "𝜒", "normal": "\\chi"},
            {"unicode": "𝜓", "normal": "\\psi"},
            {"unicode": "𝜔", "normal": "\\omega"},
            {"unicode": "𝛤", "normal": "\\Gamma"},
            {"unicode": "𝛥", "normal": "\\Delta"},
            {"unicode": "𝛩", "normal": "\\Theta"},
            {"unicode": "𝛬", "normal": "\\Lambda"},
            {"unicode": "𝛯", "normal": "\\Xi"},
            {"unicode": "𝛱", "normal": "\\Pi"},
            {"unicode": "𝛴", "normal": "\\Sigma"},
            {"unicode": "𝛶", "normal": "\\Upsilon"},
            {"unicode": "𝛷", "normal": "\\Phi"},
            {"unicode": "𝛹", "normal": "\\Psi"},
            {"unicode": "𝛺", "normal": "\\Omega"}
        ]
    };


    let currentRules = {};
    let conversionDirection = 'unicodeToNormal';
    let processedRules = {
        unicodeToNormalMap: [],
        normalToUnicodeMap: []
    };

    // --- Helper Functions (Unchanged) ---
    function escapeRegExp(string) { /* ... */ return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
    function isAlphabeticEnding(str) { /* ... */ if (!str || str.length === 0) return false; const lastChar = str.slice(-1); return /[a-zA-Z]/.test(lastChar); }

    // --- Rule Processing (Unchanged) ---
    function processRules(rules) { /* ... */
        const unicodeToNormalMap = []; const normalToUnicodeMap = [];
        const addRule = (map, rule) => { if (!map.some(existing => existing.from === rule.from)) { map.push(rule); } };
        rules = rules || {}; rules.correspondence = rules.correspondence || []; rules.other_unicode = rules.other_unicode || []; rules.other_normal = rules.other_normal || [];
        if (Array.isArray(rules.correspondence)) { rules.correspondence.forEach(rule => { if (rule.unicode && rule.normal) { const n = isAlphabeticEnding(rule.normal); addRule(unicodeToNormalMap, {from: rule.unicode, to: rule.normal, needsSpacing: n, fromLength: rule.unicode.length}); addRule(normalToUnicodeMap, {from: rule.normal, to: rule.unicode, needsSpacing: n, fromLength: rule.normal.length}); } }); }
        if (Array.isArray(rules.other_unicode)) { rules.other_unicode.forEach(rule => { if (rule.unicode && rule.normal) { const n = isAlphabeticEnding(rule.normal); addRule(unicodeToNormalMap, {from: rule.unicode, to: rule.normal, needsSpacing: n, fromLength: rule.unicode.length}); } }); }
        if (Array.isArray(rules.other_normal)) { rules.other_normal.forEach(rule => { if (rule.unicode && rule.normal) { const n = isAlphabeticEnding(rule.normal); addRule(normalToUnicodeMap, {from: rule.normal, to: rule.unicode, needsSpacing: n, fromLength: rule.normal.length}); } }); }
        unicodeToNormalMap.sort((a, b) => b.fromLength - a.fromLength); normalToUnicodeMap.sort((a, b) => b.fromLength - a.fromLength);
        return { unicodeToNormalMap, normalToUnicodeMap };
    }

    // --- Textarea Formatter ---
    function formatRulesForTextarea(rules) {
        try {
            rules = rules || {}; rules.correspondence = Array.isArray(rules.correspondence) ? rules.correspondence : []; rules.other_unicode = Array.isArray(rules.other_unicode) ? rules.other_unicode : []; rules.other_normal = Array.isArray(rules.other_normal) ? rules.other_normal : [];
            const indent = "  "; let output = "{\n";
            const processRuleArray = (arrayName, ruleArray) => {
                let arrayOutput = `${indent}"${arrayName}": [\n`; if (ruleArray.length === 0) { return arrayOutput + `${indent}],\n`; }
                let maxUnicodeValueLength = 0; ruleArray.forEach(rule => { if (rule && typeof rule.unicode === 'string') { maxUnicodeValueLength = Math.max(maxUnicodeValueLength, JSON.stringify(rule.unicode).length); } });
                const keyUnicode = '"unicode": '; const keyNormal = '"normal": '; const valueSeparator = ', ';
                const formattedRuleLines = ruleArray.map((rule, index) => {
                    if (rule && typeof rule.unicode === 'string' && typeof rule.normal === 'string') {
                        const unicodeValueStr = JSON.stringify(rule.unicode); const normalValueStr = JSON.stringify(rule.normal); const paddedUnicodeValue = unicodeValueStr.padEnd(maxUnicodeValueLength);
                        const line = `${indent}${indent}{${keyUnicode}${paddedUnicodeValue}${valueSeparator}${keyNormal}${normalValueStr}}`; const comma = (index < ruleArray.length - 1) ? "," : ""; return line + comma;
                    } return null;
                }).filter(line => line !== null);
                arrayOutput += formattedRuleLines.join('\n'); arrayOutput += `\n${indent}],\n`; return arrayOutput;
            };
            output += processRuleArray("correspondence", rules.correspondence); output += processRuleArray("other_unicode", rules.other_unicode); output += processRuleArray("other_normal", rules.other_normal);
            if (output.endsWith(',\n')) { output = output.slice(0, -2) + '\n'; } output += "}"; return output;
        } catch (error) { console.error("Error formatting rules:", error); return JSON.stringify(rules, null, 2); }
     }

    // --- Translation Functions ---
    function translateBlockUnicodeToNormal(block, rulesMap) { 
        let result = block;
        rulesMap.forEach(rule => {
            const escapedFrom = escapeRegExp(rule.from); let regex;
            if (rule.needsSpacing) {
                regex = new RegExp(escapedFrom + '(?=[a-zA-Z])', 'g'); result = result.replace(regex, () => rule.to + ' ');
                regex = new RegExp(escapedFrom + '(?![a-zA-Z])', 'g'); result = result.replace(regex, rule.to);
                const endRegex = new RegExp(escapeRegExp(rule.from) + '$');
                if (endRegex.test(block) && result.endsWith(rule.from)) { result = result.replace(endRegex, rule.to); }
            } else { regex = new RegExp(escapedFrom, 'g'); result = result.replace(regex, rule.to); }
        }); return result;
    }
    function translateBlockNormalToUnicode(block, rulesMap) { 
        let result = block;
        rulesMap.forEach(rule => {
            const escapedFrom = escapeRegExp(rule.from); let regex;
            if (rule.needsSpacing) { regex = new RegExp(escapedFrom + '(?![a-zA-Z])', 'g'); result = result.replace(regex, rule.to); }
            else { regex = new RegExp(escapedFrom, 'g'); result = result.replace(regex, rule.to); }
        }); return result;
    }

    // --- Main Conversion Function ---
    function convert() {
        const inputText = inputTextArea.value; let outputText = '';
        try {
            if (!processedRules || !processedRules.unicodeToNormalMap || !processedRules.normalToUnicodeMap || processedRules.unicodeToNormalMap.length === 0 || processedRules.normalToUnicodeMap.length === 0) {
                console.warn("Rules not processed. Trying to process current rules."); if (Object.keys(currentRules).length === 0) { currentRules = JSON.parse(JSON.stringify(defaultRules)); }
                 try { processedRules = processRules(currentRules); if (ruleStatus.classList.contains('error')) { ruleStatus.textContent = ''; ruleStatus.className = ''; } }
                 catch (ruleProcessingError) { console.error("Error processing rules:", ruleProcessingError); console.warn("Falling back to default rules."); ruleStatus.textContent = `ルール処理エラー: ${ruleProcessingError.message}。デフォルトルールで試行します。`; ruleStatus.className = 'error'; try { processedRules = processRules(JSON.parse(JSON.stringify(defaultRules))); } catch (defaultProcessingError) { console.error("FATAL: Error processing default rules:", defaultProcessingError); outputTextArea.value = "ルール処理エラーのため変換できません。"; return; } }
                 if (!processedRules || !processedRules.unicodeToNormalMap || !processedRules.normalToUnicodeMap || processedRules.unicodeToNormalMap.length === 0 || processedRules.normalToUnicodeMap.length === 0){ throw new Error("ルールマップ生成失敗。"); }
            }
            const blocks = inputText.split('\\\\'); let convertedBlocks;
            if (conversionDirection === 'unicodeToNormal') { convertedBlocks = blocks.map(block => translateBlockUnicodeToNormal(block, processedRules.unicodeToNormalMap)); } else { convertedBlocks = blocks.map(block => translateBlockNormalToUnicode(block, processedRules.normalToUnicodeMap)); }
            outputText = convertedBlocks.join('\\\\'); outputTextArea.value = outputText;
            if (!ruleStatus.textContent.startsWith('ルール処理エラー')) { ruleStatus.textContent = ''; ruleStatus.className = ''; }
        } catch (error) { console.error("Conversion error:", error); outputTextArea.value = `変換エラー:\n${error.message}`; ruleStatus.textContent = `変換エラー: ${error.message}`; ruleStatus.className = 'error'; }
    }

    // --- Update UI ---
    function updateUIForDirection() {
        if (conversionDirection === 'unicodeToNormal') {
            inputLabel.textContent = '入力 (Unicode)';
            outputLabel.textContent = '出力 (Normal)';
            toggleDirectionButton.textContent = 'Normal → Unicode に切り替え'; 
            inputTextArea.placeholder = 'Unicode LaTeX コード (例: α → β)';
            outputTextArea.placeholder = '変換結果 (例: \\alpha \\to \\beta)';
        } else {
            inputLabel.textContent = '入力 (Normal)';
            outputLabel.textContent = '出力 (Unicode)';
            toggleDirectionButton.textContent = 'Unicode → Normal に切り替え'; 
            inputTextArea.placeholder = 'Normal LaTeX コード (例: \\alpha \\to \\beta)';
            outputTextArea.placeholder = '変換結果 (例: α → β)';
        }
        // すでに convert() が呼ばれているので、ここでは不要
        // convert();
    }

    // --- Load/Save Rules (Unchanged) ---
    function loadRules() {
        try {
            const storedRules = localStorage.getItem('latexConverterRules'); if (storedRules) { const parsedRules = JSON.parse(storedRules); if (typeof parsedRules === 'object' && parsedRules !== null && Array.isArray(parsedRules.correspondence)) { currentRules = parsedRules; if (!currentRules.other_normal) currentRules.other_normal = []; if (!currentRules.other_unicode) currentRules.other_unicode = []; rulesTextArea.value = formatRulesForTextarea(currentRules); ruleStatus.textContent = '保存されたカスタムルールを読み込みました'; ruleStatus.className = ''; } else { console.warn("..."); currentRules = JSON.parse(JSON.stringify(defaultRules)); rulesTextArea.value = formatRulesForTextarea(currentRules); ruleStatus.textContent = 'カスタムルールが無効なため、デフォルトルールを使用します'; ruleStatus.className = 'error'; } } else { currentRules = JSON.parse(JSON.stringify(defaultRules)); rulesTextArea.value = formatRulesForTextarea(currentRules); ruleStatus.textContent = 'デフォルトルールを使用中'; ruleStatus.className = ''; }
            processedRules = processRules(currentRules);
        } catch (error) { console.error("Error applying rules:", error); currentRules = JSON.parse(JSON.stringify(defaultRules)); rulesTextArea.value = formatRulesForTextarea(currentRules); try { processedRules = processRules(currentRules); ruleStatus.textContent = `ルール適用エラー (${error.message})。デフォルトルールを使用します。`; ruleStatus.className = 'error'; } catch (processingError) { console.error("FATAL:", processingError); processedRules = { unicodeToNormalMap: [], normalToUnicodeMap: [] }; currentRules = { correspondence: [], other_normal: [], other_unicode: [] }; rulesTextArea.value = formatRulesForTextarea(currentRules); ruleStatus.textContent = '致命的エラー: ルールの処理に失敗しました。'; ruleStatus.className = 'error'; } }
    }

    // --- Event Listeners ---
    inputTextArea.addEventListener('input', convert);

    toggleDirectionButton.addEventListener('click', () => {
        conversionDirection = (conversionDirection === 'unicodeToNormal') ? 'normalToUnicode' : 'unicodeToNormal';
        // UI更新関数を呼ぶだけで、テキスト更新と変換が実行される
        updateUIForDirection(); // ★★★ UI更新関数を呼ぶ ★★★
        // 変換は updateUIForDirection 内で呼ばれるため、ここでは不要
        // convert();
    });

    copyOutputButton.addEventListener('click', () => { if (outputTextArea.value) { navigator.clipboard.writeText(outputTextArea.value).then(() => { /*...*/ }).catch(err => { /*...*/ }); } else { /*...*/ } });

    saveRulesButton.addEventListener('click', () => {
        try { const newRulesRaw = rulesTextArea.value; if (!newRulesRaw.trim()) { throw new Error("..."); } const newRules = JSON.parse(newRulesRaw); /* Validation ... */ if (typeof newRules !== 'object' || newRules === null) throw new Error("..."); if (!Array.isArray(newRules.correspondence)) throw new Error("..."); if (newRules.hasOwnProperty('other_normal') && !Array.isArray(newRules.other_normal)) throw new Error("..."); if (newRules.hasOwnProperty('other_unicode') && !Array.isArray(newRules.other_unicode)) throw new Error("..."); if (!newRules.other_normal) newRules.other_normal = []; if (!newRules.other_unicode) newRules.other_unicode = []; const tempProcessed = processRules(newRules); currentRules = newRules; processedRules = tempProcessed; localStorage.setItem('latexConverterRules', JSON.stringify(currentRules)); rulesTextArea.value = formatRulesForTextarea(currentRules); ruleStatus.textContent = 'ルールが正常に保存・適用されました'; ruleStatus.className = ''; convert(); } catch (error) { console.error("Error saving rules:", error); ruleStatus.textContent = `ルール保存/処理エラー: ${error.message}`; ruleStatus.className = 'error'; }
    });

    resetRulesButton.addEventListener('click', () => {
        if (confirm('...')) { try { currentRules = JSON.parse(JSON.stringify(defaultRules)); processedRules = processRules(currentRules); localStorage.removeItem('latexConverterRules'); rulesTextArea.value = formatRulesForTextarea(currentRules); ruleStatus.textContent = 'デフォルトルールにリセットしました'; ruleStatus.className = ''; convert(); } catch (error) { console.error("Error resetting:", error); ruleStatus.textContent = `リセットエラー: ${error.message}`; ruleStatus.className = 'error'; try { rulesTextArea.value = formatRulesForTextarea(defaultRules); } catch { rulesTextArea.value = "{}"; } processedRules = { unicodeToNormalMap: [], normalToUnicodeMap: [] }; } }
    });

    // --- Initial Load ---
    loadRules();
    // 初回ロード時にUIのテキストを正しく設定し、変換を実行
    updateUIForDirection(); // ★★★ 初期化時にも呼ぶ ★★★

}); // End DOMContentLoaded