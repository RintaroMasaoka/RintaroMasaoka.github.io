document.addEventListener('DOMContentLoaded', () => {
    // --- DOM Elements ---
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

    // UI View Elements
    const uiViewButton = document.getElementById('ui-view-button');
    const jsonViewButton = document.getElementById('json-view-button');
    const uiView = document.getElementById('ui-view');
    const jsonView = document.getElementById('json-view');
    const rulesList = document.getElementById('rules-list');
    const ruleSearch = document.getElementById('rule-search');
    const filterButtons = document.querySelectorAll('.filter-button');
    const newUnicodeInput = document.getElementById('new-unicode');
    const newLatexInput = document.getElementById('new-latex');
    const newRuleTypeSelect = document.getElementById('new-rule-type');
    const addRuleButton = document.getElementById('add-rule-button');
    const saveUiRulesButton = document.getElementById('save-ui-rules-button');
    const resetRulesButtonUi = document.getElementById('reset-rules-button-ui');

    // --- Default Conversion Rules ---
    const defaultRules = {
        "bidirectional": [
            // big operators
            {"unicode": "∑", "latex": "\\sum"},
            {"unicode": "∏", "latex": "\\prod"},
            {"unicode": "∫", "latex": "\\int"},
            {"unicode": "⨁", "latex": "\\bigoplus"},
            {"unicode": "⨂", "latex": "\\bigotimes"},
            {"unicode": "∮", "latex": "\\oint"},
            {"unicode": "∐", "latex": "\\coprod"},
            {"unicode": "⋀", "latex": "\\bigwedge"},
            {"unicode": "⋁", "latex": "\\bigvee"},
            {"unicode": "⋂", "latex": "\\bigcap"},
            {"unicode": "⋃", "latex": "\\bigcup"},
            // characters
            {"unicode": "∅", "latex": "\\emptyset"},
            {"unicode": "∅", "latex": "\\varnothing"},
            {"unicode": "ħ", "latex": "\\hbar"},
            {"unicode": "ℏ", "latex": "\\hslash"},
            {"unicode": "℘", "latex": "\\wp"},
            {"unicode": "∠", "latex": "\\angle"},
            {"unicode": "∞", "latex": "\\infty"},
            {"unicode": "∂", "latex": "\\partial"},
            {"unicode": "∇", "latex": "\\nabla"},
            {"unicode": "★", "latex": "\\star"},
            {"unicode": "△", "latex": "\\triangle"},
            {"unicode": "□", "latex": "\\square"},
            {"unicode": "✓", "latex": "\\checkmark"},
            {"unicode": "∃", "latex": "\\exists"},
            {"unicode": "∄", "latex": "\\nexists"},
            {"unicode": "∀", "latex": "\\forall"},
            {"unicode": "†", "latex": "\\dagger"},
            {"unicode": "⊥", "latex": "\\bot"},
            {"unicode": "⊤", "latex": "\\top"},
            {"unicode": "☡", "latex": "\\danger"},
            {"unicode": "¬", "latex": "\\neg"},
            {"unicode": "ℵ", "latex": "\\aleph"},
            {"unicode": "ℶ", "latex": "\\beth"},
            {"unicode": "ℷ", "latex": "\\gimel"},
            {"unicode": "ℸ", "latex": "\\daleth"},
            {"unicode": "ı", "latex": "\\imath"},
            {"unicode": "ȷ", "latex": "\\jmath"},
            {"unicode": "ℓ", "latex": "\\ell"},
            {"unicode": "♣", "latex": "\\clubsuit"},
            {"unicode": "♢", "latex": "\\diamondsuit"},
            {"unicode": "♡", "latex": "\\heartsuit"},
            {"unicode": "♠", "latex": "\\spadesuit"},
            {"unicode": "⋯", "latex": "\\cdots"},
            {"unicode": "…", "latex": "\\ldots"},
            {"unicode": "⋱", "latex": "\\ddots"},
            {"unicode": "⋮", "latex": "\\vdots"},
            // relations
            {"unicode": "±", "latex": "\\pm"},
            {"unicode": "∓", "latex": "\\mp"},
            {"unicode": "∧", "latex": "\\wedge"},
            {"unicode": "∨", "latex": "\\vee"},
            {"unicode": "×", "latex": "\\times"},
            {"unicode": "⋅", "latex": "\\cdot"},
            {"unicode": "∘", "latex": "\\circ"},
            {"unicode": "∙", "latex": "\\bullet"},
            {"unicode": "⊕", "latex": "\\oplus"},
            {"unicode": "⊗", "latex": "\\otimes"},
            {"unicode": "∖", "latex": "\\setminus"},
            {"unicode": "≀", "latex": "\\wr"},
            {"unicode": "⊎", "latex": "\\uplus"},
            {"unicode": "→", "latex": "\\to"},
            {"unicode": "←", "latex": "\\gets"},
            {"unicode": "↑", "latex": "\\uparrow"},
            {"unicode": "↓", "latex": "\\downarrow"},
            {"unicode": "↔", "latex": "\\leftrightarrow"},
            {"unicode": "↕", "latex": "\\updownarrow"},
            {"unicode": "⇐", "latex": "\\Leftarrow"},
            {"unicode": "⇒", "latex": "\\Rightarrow"},
            {"unicode": "⇑", "latex": "\\Uparrow"},
            {"unicode": "⇓", "latex": "\\Downarrow"},
            {"unicode": "⇔", "latex": "\\Leftrightarrow"},
            {"unicode": "⇕", "latex": "\\Updownarrow"},
            {"unicode": "⟹", "latex": "\\implies"},
            {"unicode": "⟸", "latex": "\\impliedby"},
            {"unicode": "⟺", "latex": "\\iff"},
            {"unicode": "↦", "latex": "\\mapsto"},
            {"unicode": "⟼", "latex": "\\longmapsto"},
            {"unicode": "⟵", "latex": "\\longleftarrow"},
            {"unicode": "⟶", "latex": "\\longrightarrow"},
            {"unicode": "⟷", "latex": "\\longleftrightarrow"},
            {"unicode": "↢", "latex": "\\leftarrowtail"},
            {"unicode": "↣", "latex": "\\rightarrowtail"},
            {"unicode": "↠", "latex": "\\twoheadrightarrow"},
            {"unicode": "↞", "latex": "\\twoheadleftarrow"},
            {"unicode": "↼", "latex": "\\leftharpoonup"},
            {"unicode": "↽", "latex": "\\leftharpoondown"},
            {"unicode": "⇀", "latex": "\\rightharpoonup"},
            {"unicode": "⇁", "latex": "\\rightharpoondown"},
            {"unicode": "⇌", "latex": "\\rightleftharpoons"},
            {"unicode": "↝", "latex": "\\leadsto"},
            {"unicode": "↪", "latex": "\\hookrightarrow"},
            {"unicode": "↩", "latex": "\\hookleftarrow"},
            {"unicode": "↗", "latex": "\\nearrow"},
            {"unicode": "↘", "latex": "\\searrow"},
            {"unicode": "↖", "latex": "\\nwarrow"},
            {"unicode": "↙", "latex": "\\swarrow"},
            {"unicode": "≔", "latex": "\\coloneqq"},
            {"unicode": "≕", "latex": "\\eqcolon"},
            {"unicode": "≠", "latex": "\\ne"},
            {"unicode": "≡", "latex": "\\equiv"},
            {"unicode": "≈", "latex": "\\approx"},
            {"unicode": "≊", "latex": "\\approxeq"},
            {"unicode": "∼", "latex": "\\sim"},
            {"unicode": "≃", "latex": "\\simeq"},
            {"unicode": "≅", "latex": "\\cong"},
            {"unicode": "∝", "latex": "\\propto"},
            {"unicode": "∈", "latex": "\\in"},
            {"unicode": "∋", "latex": "\\ni"},
            {"unicode": "∉", "latex": "\\notin"},
            {"unicode": "⊂", "latex": "\\subset"},
            {"unicode": "⊆", "latex": "\\subseteq"},
            {"unicode": "⊊", "latex": "\\subsetneq"},
            {"unicode": "⊃", "latex": "\\supset"},
            {"unicode": "⊇", "latex": "\\supseteq"},
            {"unicode": "⊋", "latex": "\\supsetneq"},
            {"unicode": "∩", "latex": "\\cap"},
            {"unicode": "∪", "latex": "\\cup"},
            {"unicode": "≤", "latex": "\\le"},
            {"unicode": "≲", "latex": "\\lesssim"},
            {"unicode": "≦", "latex": "\\leqq"},
            {"unicode": "≪", "latex": "\\ll"},
            {"unicode": "≥", "latex": "\\ge"},
            {"unicode": "≳", "latex": "\\gtrsim"},
            {"unicode": "≧", "latex": "\\geqq"},
            {"unicode": "≫", "latex": "\\gg"},
            {"unicode": "⪯", "latex": "\\preceq"},
            {"unicode": "⪰", "latex": "\\succeq"},
            {"unicode": "⟂", "latex": "\\perp"},
            {"unicode": "∥", "latex": "\\parallel"},
            {"unicode": "∣", "latex": "\\mid"},
            {"unicode": "∤", "latex": "\\nmid"},
            {"unicode": "⊢", "latex": "\\vdash"},
            {"unicode": "⊣", "latex": "\\dashv"},
            {"unicode": "⊨", "latex": "\\models"},
            {"unicode": "≺", "latex": "\\prec"},
            {"unicode": "≻", "latex": "\\succ"},
            {"unicode": "≼", "latex": "\\preccurlyeq"},
            {"unicode": "≽", "latex": "\\succcurlyeq"},
            {"unicode": "⊏", "latex": "\\sqsubset"},
            {"unicode": "⊐", "latex": "\\sqsupset"},
            {"unicode": "⊑", "latex": "\\sqsubseteq"},
            {"unicode": "⊒", "latex": "\\sqsupseteq"},
            {"unicode": "≍", "latex": "\\asymp"},
            {"unicode": "≐", "latex": "\\doteq"},
            // brackets
            {"unicode": "⟨", "latex": "\\langle"},
            {"unicode": "⟩", "latex": "\\rangle"},
            {"unicode": "⌈", "latex": "\\lceil"},
            {"unicode": "⌉", "latex": "\\rceil"},
            {"unicode": "⌊", "latex": "\\lfloor"},
            {"unicode": "⌋", "latex": "\\rfloor"},
            {"unicode": "⟦", "latex": "\\llbracket"},
            {"unicode": "⟧", "latex": "\\rrbracket"},
            {"unicode": "‖", "latex": "\\|"},
            // bold font
            {"unicode": "𝒂", "latex": "\\bm{a}"},
            {"unicode": "𝒃", "latex": "\\bm{b}"},
            {"unicode": "𝒄", "latex": "\\bm{c}"},
            {"unicode": "𝒅", "latex": "\\bm{d}"},
            {"unicode": "𝒆", "latex": "\\bm{e}"},
            {"unicode": "𝒇", "latex": "\\bm{f}"},
            {"unicode": "𝒈", "latex": "\\bm{g}"},
            {"unicode": "𝒉", "latex": "\\bm{h}"},
            {"unicode": "𝒊", "latex": "\\bm{i}"},
            {"unicode": "𝒋", "latex": "\\bm{j}"},
            {"unicode": "𝒌", "latex": "\\bm{k}"},
            {"unicode": "𝒍", "latex": "\\bm{l}"},
            {"unicode": "𝒎", "latex": "\\bm{m}"},
            {"unicode": "𝒏", "latex": "\\bm{n}"},
            {"unicode": "𝒐", "latex": "\\bm{o}"},
            {"unicode": "𝒑", "latex": "\\bm{p}"},
            {"unicode": "𝒒", "latex": "\\bm{q}"},
            {"unicode": "𝒓", "latex": "\\bm{r}"},
            {"unicode": "𝒔", "latex": "\\bm{s}"},
            {"unicode": "𝒕", "latex": "\\bm{t}"},
            {"unicode": "𝒖", "latex": "\\bm{u}"},
            {"unicode": "𝒗", "latex": "\\bm{v}"},
            {"unicode": "𝒘", "latex": "\\bm{w}"},
            {"unicode": "𝒙", "latex": "\\bm{x}"},
            {"unicode": "𝒚", "latex": "\\bm{y}"},
            {"unicode": "𝒛", "latex": "\\bm{z}"},
            {"unicode": "𝑨", "latex": "\\bm{A}"},
            {"unicode": "𝑩", "latex": "\\bm{B}"},
            {"unicode": "𝑪", "latex": "\\bm{C}"},
            {"unicode": "𝑫", "latex": "\\bm{D}"},
            {"unicode": "𝑬", "latex": "\\bm{E}"},
            {"unicode": "𝑭", "latex": "\\bm{F}"},
            {"unicode": "𝑮", "latex": "\\bm{G}"},
            {"unicode": "𝑯", "latex": "\\bm{H}"},
            {"unicode": "𝑰", "latex": "\\bm{I}"},
            {"unicode": "𝑱", "latex": "\\bm{J}"},
            {"unicode": "𝑲", "latex": "\\bm{K}"},
            {"unicode": "𝑳", "latex": "\\bm{L}"},
            {"unicode": "𝑴", "latex": "\\bm{M}"},
            {"unicode": "𝑵", "latex": "\\bm{N}"},
            {"unicode": "𝑶", "latex": "\\bm{O}"},
            {"unicode": "𝑷", "latex": "\\bm{P}"},
            {"unicode": "𝑸", "latex": "\\bm{Q}"},
            {"unicode": "𝑹", "latex": "\\bm{R}"},
            {"unicode": "𝑺", "latex": "\\bm{S}"},
            {"unicode": "𝑻", "latex": "\\bm{T}"},
            {"unicode": "𝑼", "latex": "\\bm{U}"},
            {"unicode": "𝑽", "latex": "\\bm{V}"},
            {"unicode": "𝑾", "latex": "\\bm{W}"},
            {"unicode": "𝑿", "latex": "\\bm{X}"},
            {"unicode": "𝒀", "latex": "\\bm{Y}"},
            {"unicode": "𝒁", "latex": "\\bm{Z}"},
            {"unicode": "𝟎", "latex": "\\bm{0}"},
            {"unicode": "𝟏", "latex": "\\bm{1}"},
            {"unicode": "𝟐", "latex": "\\bm{2}"},
            {"unicode": "𝟑", "latex": "\\bm{3}"},
            {"unicode": "𝟒", "latex": "\\bm{4}"},
            {"unicode": "𝟓", "latex": "\\bm{5}"},
            {"unicode": "𝟔", "latex": "\\bm{6}"},
            {"unicode": "𝟕", "latex": "\\bm{7}"},
            {"unicode": "𝟖", "latex": "\\bm{8}"},
            {"unicode": "𝟗", "latex": "\\bm{9}"},
            // Greek letters
            {"unicode": "α", "latex": "\\alpha"},
            {"unicode": "β", "latex": "\\beta"},
            {"unicode": "γ", "latex": "\\gamma"},
            {"unicode": "δ", "latex": "\\delta"},
            {"unicode": "ϵ", "latex": "\\epsilon"},
            {"unicode": "ε", "latex": "\\varepsilon"},
            {"unicode": "ζ", "latex": "\\zeta"},
            {"unicode": "η", "latex": "\\eta"},
            {"unicode": "θ", "latex": "\\theta"},
            {"unicode": "ϑ", "latex": "\\vartheta"},
            {"unicode": "ι", "latex": "\\iota"},
            {"unicode": "κ", "latex": "\\kappa"},
            {"unicode": "ϰ", "latex": "\\varkappa"},
            {"unicode": "λ", "latex": "\\lambda"},
            {"unicode": "μ", "latex": "\\mu"},
            {"unicode": "ν", "latex": "\\nu"},
            {"unicode": "ξ", "latex": "\\xi"},
            {"unicode": "π", "latex": "\\pi"},
            {"unicode": "ϖ", "latex": "\\varpi"},
            {"unicode": "ρ", "latex": "\\rho"},
            {"unicode": "ϱ", "latex": "\\varrho"},
            {"unicode": "σ", "latex": "\\sigma"},
            {"unicode": "ς", "latex": "\\varsigma"},
            {"unicode": "τ", "latex": "\\tau"},
            {"unicode": "υ", "latex": "\\upsilon"},
            {"unicode": "ϕ", "latex": "\\phi"},
            {"unicode": "φ", "latex": "\\varphi"},
            {"unicode": "χ", "latex": "\\chi"},
            {"unicode": "ψ", "latex": "\\psi"},
            {"unicode": "ω", "latex": "\\omega"},
            {"unicode": "Γ", "latex": "\\Gamma"},
            {"unicode": "Δ", "latex": "\\Delta"},
            {"unicode": "Θ", "latex": "\\Theta"},
            {"unicode": "Λ", "latex": "\\Lambda"},
            {"unicode": "Ξ", "latex": "\\Xi"},
            {"unicode": "Π", "latex": "\\Pi"},
            {"unicode": "Σ", "latex": "\\Sigma"},
            {"unicode": "Υ", "latex": "\\Upsilon"},
            {"unicode": "Φ", "latex": "\\Phi"},
            {"unicode": "Ψ", "latex": "\\Psi"},
            {"unicode": "Ω", "latex": "\\Omega"},
            // bold greek
            {"unicode": "𝜶", "latex": "\\bm{\\alpha}"},
            {"unicode": "𝜷", "latex": "\\bm{\\beta}"},
            {"unicode": "𝜸", "latex": "\\bm{\\gamma}"},
            {"unicode": "𝜹", "latex": "\\bm{\\delta}"},
            {"unicode": "𝜺", "latex": "\\bm{\\epsilon}"},
            {"unicode": "𝝐", "latex": "\\bm{\\varepsilon}"},
            {"unicode": "𝜻", "latex": "\\bm{\\zeta}"},
            {"unicode": "𝜼", "latex": "\\bm{\\eta}"},
            {"unicode": "𝜽", "latex": "\\bm{\\theta}"},
            {"unicode": "𝝑", "latex": "\\bm{\\vartheta}"},
            {"unicode": "𝜾", "latex": "\\bm{\\iota}"},
            {"unicode": "𝜿", "latex": "\\bm{\\kappa}"},
            {"unicode": "𝝒", "latex": "\\bm{\\varkappa}"},
            {"unicode": "𝝀", "latex": "\\bm{\\lambda}"},
            {"unicode": "𝝁", "latex": "\\bm{\\mu}"},
            {"unicode": "𝝂", "latex": "\\bm{\\nu}"},
            {"unicode": "𝝃", "latex": "\\bm{\\xi}"},
            {"unicode": "𝝅", "latex": "\\bm{\\pi}"},
            {"unicode": "𝝕", "latex": "\\bm{\\varpi}"},
            {"unicode": "𝝆", "latex": "\\bm{\\rho}"},
            {"unicode": "𝝔", "latex": "\\bm{\\varrho}"},
            {"unicode": "𝝈", "latex": "\\bm{\\sigma}"},
            {"unicode": "𝝇", "latex": "\\bm{\\varsigma}"},
            {"unicode": "𝝉", "latex": "\\bm{\\tau}"},
            {"unicode": "𝝊", "latex": "\\bm{\\upsilon}"},
            {"unicode": "𝝋", "latex": "\\bm{\\phi}"},
            {"unicode": "𝝓", "latex": "\\bm{\\varphi}"},
            {"unicode": "𝝌", "latex": "\\bm{\\chi}"},
            {"unicode": "𝝍", "latex": "\\bm{\\psi}"},
            {"unicode": "𝝎", "latex": "\\bm{\\omega}"},
            {"unicode": "𝜞", "latex": "\\bm{\\Gamma}"},
            {"unicode": "𝜟", "latex": "\\bm{\\Delta}"},
            {"unicode": "𝜣", "latex": "\\bm{\\Theta}"},
            {"unicode": "𝜦", "latex": "\\bm{\\Lambda}"},
            {"unicode": "𝜩", "latex": "\\bm{\\Xi}"},
            {"unicode": "𝜫", "latex": "\\bm{\\Pi}"},
            {"unicode": "𝜮", "latex": "\\bm{\\Sigma}"},
            {"unicode": "𝜰", "latex": "\\bm{\\Upsilon}"},
            {"unicode": "𝜱", "latex": "\\bm{\\Phi}"},
            {"unicode": "𝜳", "latex": "\\bm{\\Psi}"},
            {"unicode": "𝜴", "latex": "\\bm{\\Omega}"},
            // blackboard font
            {"unicode": "𝔸", "latex": "\\mathbb{A}"},
            {"unicode": "𝔹", "latex": "\\mathbb{B}"},
            {"unicode": "ℂ", "latex": "\\mathbb{C}"},
            {"unicode": "𝔻", "latex": "\\mathbb{D}"},
            {"unicode": "𝔼", "latex": "\\mathbb{E}"},
            {"unicode": "𝔽", "latex": "\\mathbb{F}"},
            {"unicode": "𝔾", "latex": "\\mathbb{G}"},
            {"unicode": "ℍ", "latex": "\\mathbb{H}"},
            {"unicode": "𝕀", "latex": "\\mathbb{I}"},
            {"unicode": "𝕁", "latex": "\\mathbb{J}"},
            {"unicode": "𝕂", "latex": "\\mathbb{K}"},
            {"unicode": "𝕃", "latex": "\\mathbb{L}"},
            {"unicode": "𝕄", "latex": "\\mathbb{M}"},
            {"unicode": "ℕ", "latex": "\\mathbb{N}"},
            {"unicode": "𝕆", "latex": "\\mathbb{O}"},
            {"unicode": "ℙ", "latex": "\\mathbb{P}"},
            {"unicode": "ℚ", "latex": "\\mathbb{Q}"},
            {"unicode": "ℝ", "latex": "\\mathbb{R}"},
            {"unicode": "𝕊", "latex": "\\mathbb{S}"},
            {"unicode": "𝕋", "latex": "\\mathbb{T}"},
            {"unicode": "𝕌", "latex": "\\mathbb{U}"},
            {"unicode": "𝕍", "latex": "\\mathbb{V}"},
            {"unicode": "𝕎", "latex": "\\mathbb{W}"},
            {"unicode": "𝕏", "latex": "\\mathbb{X}"},
            {"unicode": "𝕐", "latex": "\\mathbb{Y}"},
            {"unicode": "ℤ", "latex": "\\mathbb{Z}"},
            {"unicode": "𝟘", "latex": "\\mathbb{0}"},
            {"unicode": "𝟙", "latex": "\\mathbb{1}"},
            {"unicode": "𝟚", "latex": "\\mathbb{2}"},
            {"unicode": "𝟛", "latex": "\\mathbb{3}"},
            {"unicode": "𝟜", "latex": "\\mathbb{4}"},
            {"unicode": "𝟝", "latex": "\\mathbb{5}"},
            {"unicode": "𝟞", "latex": "\\mathbb{6}"},
            {"unicode": "𝟟", "latex": "\\mathbb{7}"},
            {"unicode": "𝟠", "latex": "\\mathbb{8}"},
            {"unicode": "𝟡", "latex": "\\mathbb{9}"},
            // Calligraphic font
            {"unicode": "𝒜", "latex": "\\mathcal{A}"},
            {"unicode": "ℬ", "latex": "\\mathcal{B}"},
            {"unicode": "𝒞", "latex": "\\mathcal{C}"},
            {"unicode": "𝒟", "latex": "\\mathcal{D}"},
            {"unicode": "ℰ", "latex": "\\mathcal{E}"},
            {"unicode": "ℱ", "latex": "\\mathcal{F}"},
            {"unicode": "𝒢", "latex": "\\mathcal{G}"},
            {"unicode": "ℋ", "latex": "\\mathcal{H}"},
            {"unicode": "ℐ", "latex": "\\mathcal{I}"},
            {"unicode": "𝒥", "latex": "\\mathcal{J}"},
            {"unicode": "𝒦", "latex": "\\mathcal{K}"},
            {"unicode": "ℒ", "latex": "\\mathcal{L}"},
            {"unicode": "ℳ", "latex": "\\mathcal{M}"},
            {"unicode": "𝒩", "latex": "\\mathcal{N}"},
            {"unicode": "𝒪", "latex": "\\mathcal{O}"},
            {"unicode": "𝒫", "latex": "\\mathcal{P}"},
            {"unicode": "𝒬", "latex": "\\mathcal{Q}"},
            {"unicode": "ℛ", "latex": "\\mathcal{R}"},
            {"unicode": "𝒮", "latex": "\\mathcal{S}"},
            {"unicode": "𝒯", "latex": "\\mathcal{T}"},
            {"unicode": "𝒰", "latex": "\\mathcal{U}"},
            {"unicode": "𝒱", "latex": "\\mathcal{V}"},
            {"unicode": "𝒲", "latex": "\\mathcal{W}"},
            {"unicode": "𝒳", "latex": "\\mathcal{X}"},
            {"unicode": "𝒴", "latex": "\\mathcal{Y}"},
            {"unicode": "𝒵", "latex": "\\mathcal{Z}"},
            // Fraktur font
            {"unicode": "𝔞", "latex": "\\mathfrak{a}"},
            {"unicode": "𝔟", "latex": "\\mathfrak{b}"},
            {"unicode": "𝔠", "latex": "\\mathfrak{c}"},
            {"unicode": "𝔡", "latex": "\\mathfrak{d}"},
            {"unicode": "𝔢", "latex": "\\mathfrak{e}"},
            {"unicode": "𝔣", "latex": "\\mathfrak{f}"},
            {"unicode": "𝔤", "latex": "\\mathfrak{g}"},
            {"unicode": "𝔥", "latex": "\\mathfrak{h}"},
            {"unicode": "𝔦", "latex": "\\mathfrak{i}"},
            {"unicode": "𝔧", "latex": "\\mathfrak{j}"},
            {"unicode": "𝓀", "latex": "\\mathfrak{k}"},
            {"unicode": "𝔩", "latex": "\\mathfrak{l}"},
            {"unicode": "𝔪", "latex": "\\mathfrak{m}"},
            {"unicode": "𝔫", "latex": "\\mathfrak{n}"},
            {"unicode": "𝔬", "latex": "\\mathfrak{o}"},
            {"unicode": "𝔭", "latex": "\\mathfrak{p}"},
            {"unicode": "𝔮", "latex": "\\mathfrak{q}"},
            {"unicode": "𝔯", "latex": "\\mathfrak{r}"},
            {"unicode": "𝔰", "latex": "\\mathfrak{s}"},
            {"unicode": "𝔱", "latex": "\\mathfrak{t}"},
            {"unicode": "𝔲", "latex": "\\mathfrak{u}"},
            {"unicode": "𝔳", "latex": "\\mathfrak{v}"},
            {"unicode": "𝔴", "latex": "\\mathfrak{w}"},
            {"unicode": "𝔵", "latex": "\\mathfrak{x}"},
            {"unicode": "𝔶", "latex": "\\mathfrak{y}"},
            {"unicode": "𝔷", "latex": "\\mathfrak{z}"},
            {"unicode": "𝔄", "latex": "\\mathfrak{A}"},
            {"unicode": "𝔅", "latex": "\\mathfrak{B}"},
            {"unicode": "ℭ", "latex": "\\mathfrak{C}"},
            {"unicode": "𝔇", "latex": "\\mathfrak{D}"},
            {"unicode": "𝔈", "latex": "\\mathfrak{E}"},
            {"unicode": "𝔉", "latex": "\\mathfrak{F}"},
            {"unicode": "𝔊", "latex": "\\mathfrak{G}"},
            {"unicode": "ℌ", "latex": "\\mathfrak{H}"},
            {"unicode": "ℑ", "latex": "\\mathfrak{I}"}, 
            {"unicode": "𝔍", "latex": "\\mathfrak{J}"},
            {"unicode": "𝔎", "latex": "\\mathfrak{K}"},
            {"unicode": "𝔏", "latex": "\\mathfrak{L}"},
            {"unicode": "𝔐", "latex": "\\mathfrak{M}"},
            {"unicode": "𝔑", "latex": "\\mathfrak{N}"},
            {"unicode": "𝔒", "latex": "\\mathfrak{O}"},
            {"unicode": "𝔓", "latex": "\\mathfrak{P}"},
            {"unicode": "𝔔", "latex": "\\mathfrak{Q}"},
            {"unicode": "ℜ", "latex": "\\mathfrak{R}"}, 
            {"unicode": "𝔖", "latex": "\\mathfrak{S}"},
            {"unicode": "𝔗", "latex": "\\mathfrak{T}"},
            {"unicode": "𝔘", "latex": "\\mathfrak{U}"},
            {"unicode": "𝔙", "latex": "\\mathfrak{V}"},
            {"unicode": "𝔚", "latex": "\\mathfrak{W}"},
            {"unicode": "𝔛", "latex": "\\mathfrak{X}"},
            {"unicode": "𝔜", "latex": "\\mathfrak{Y}"},
            {"unicode": "ℨ", "latex": "\\mathfrak{Z}"},
            // sub/superscript
            {"unicode": "⁰", "latex": "^0"},
            {"unicode": "¹", "latex": "^1"},
            {"unicode": "²", "latex": "^2"},
            {"unicode": "³", "latex": "^3"},
            {"unicode": "⁴", "latex": "^4"},
            {"unicode": "⁵", "latex": "^5"},
            {"unicode": "⁶", "latex": "^6"},
            {"unicode": "⁷", "latex": "^7"},
            {"unicode": "⁸", "latex": "^8"},
            {"unicode": "⁹", "latex": "^9"},
            {"unicode": "⁺", "latex": "^+"},
            {"unicode": "⁻", "latex": "^-"},
            {"unicode": "₀", "latex": "_0"},
            {"unicode": "₁", "latex": "_1"},
            {"unicode": "₂", "latex": "_2"},
            {"unicode": "₃", "latex": "_3"},
            {"unicode": "₄", "latex": "_4"},
            {"unicode": "₅", "latex": "_5"},
            {"unicode": "₆", "latex": "_6"},
            {"unicode": "₇", "latex": "_7"},
            {"unicode": "₈", "latex": "_8"},
            {"unicode": "₉", "latex": "_9"},
            {"unicode": "₊", "latex": "_+"},
            {"unicode": "₋", "latex": "_-"}
        ],
        "latex_to_unicode": [
            {"unicode": "⟹", "latex": "\\Longrightarrow"},
            {"unicode": "⟸", "latex": "\\Longleftarrow"},
            {"unicode": "⟺", "latex": "\\Longleftrightarrow"},
            {"unicode": "→", "latex": "\\rightarrow"},
            {"unicode": "←", "latex": "\\leftarrow"},
            {"unicode": "≠", "latex": "\\neq"},
            {"unicode": "≠", "latex": "\\not="},
            {"unicode": "≠", "latex": "\\not ="},
            {"unicode": "∣", "latex": "\\vert"},
            {"unicode": "‖", "latex": "\\Vert"}, 
            {"unicode": "≤", "latex": "\\leq"},
            {"unicode": "≥", "latex": "\\geq"},
            {"unicode": "≔", "latex": "\\coloneq"},
            {"unicode": "𝟙", "latex": "\\mathbbm{1}"},
            {"unicode": "⁰", "latex": "^{0}"},
            {"unicode": "¹", "latex": "^{1}"},
            {"unicode": "²", "latex": "^{2}"},
            {"unicode": "³", "latex": "^{3}"},
            {"unicode": "⁴", "latex": "^{4}"},
            {"unicode": "⁵", "latex": "^{5}"},
            {"unicode": "⁶", "latex": "^{6}"},
            {"unicode": "⁷", "latex": "^{7}"},
            {"unicode": "⁸", "latex": "^{8}"},
            {"unicode": "⁹", "latex": "^{9}"},
            {"unicode": "⁺", "latex": "^{+}"},
            {"unicode": "⁻", "latex": "^{-}"},
            {"unicode": "₀", "latex": "_{0}"},
            {"unicode": "₁", "latex": "_{1}"},
            {"unicode": "₂", "latex": "_{2}"},
            {"unicode": "₃", "latex": "_{3}"},
            {"unicode": "₄", "latex": "_{4}"},
            {"unicode": "₅", "latex": "_{5}"},
            {"unicode": "₆", "latex": "_{6}"},
            {"unicode": "₇", "latex": "_{7}"},
            {"unicode": "₈", "latex": "_{8}"},
            {"unicode": "₉", "latex": "_{9}"},
            {"unicode": "₊", "latex": "_{+}"},
            {"unicode": "₋", "latex": "_{-}"},
            {"unicode": "𝒜", "latex": "\\mathscr{A}"},
            {"unicode": "ℬ", "latex": "\\mathscr{B}"},
            {"unicode": "𝒞", "latex": "\\mathscr{C}"},
            {"unicode": "𝒟", "latex": "\\mathscr{D}"},
            {"unicode": "ℰ", "latex": "\\mathscr{E}"},
            {"unicode": "ℱ", "latex": "\\mathscr{F}"},
            {"unicode": "𝒢", "latex": "\\mathscr{G}"},
            {"unicode": "ℋ", "latex": "\\mathscr{H}"},
            {"unicode": "ℐ", "latex": "\\mathscr{I}"},
            {"unicode": "𝒥", "latex": "\\mathscr{J}"},
            {"unicode": "𝒦", "latex": "\\mathscr{K}"},
            {"unicode": "ℒ", "latex": "\\mathscr{L}"},
            {"unicode": "ℳ", "latex": "\\mathscr{M}"},
            {"unicode": "𝒩", "latex": "\\mathscr{N}"},
            {"unicode": "𝒪", "latex": "\\mathscr{O}"},
            {"unicode": "𝒫", "latex": "\\mathscr{P}"},
            {"unicode": "𝒬", "latex": "\\mathscr{Q}"},
            {"unicode": "ℛ", "latex": "\\mathscr{R}"},
            {"unicode": "𝒮", "latex": "\\mathscr{S}"},
            {"unicode": "𝒯", "latex": "\\mathscr{T}"},
            {"unicode": "𝒰", "latex": "\\mathscr{U}"},
            {"unicode": "𝒱", "latex": "\\mathscr{V}"},
            {"unicode": "𝒲", "latex": "\\mathscr{W}"},
            {"unicode": "𝒳", "latex": "\\mathscr{X}"},
            {"unicode": "𝒴", "latex": "\\mathscr{Y}"},
            {"unicode": "𝒵", "latex": "\\mathscr{Z}"}
        ],
        "unicode_to_latex": [
            {"unicode": "𝛼", "latex": "\\alpha"},
            {"unicode": "𝛽", "latex": "\\beta"},
            {"unicode": "𝛾", "latex": "\\gamma"},
            {"unicode": "𝛿", "latex": "\\delta"},
            {"unicode": "𝜖", "latex": "\\varepsilon"},
            {"unicode": "𝜀", "latex": "\\epsilon"},
            {"unicode": "𝜁", "latex": "\\zeta"},
            {"unicode": "𝜂", "latex": "\\eta"},
            {"unicode": "𝜃", "latex": "\\theta"},
            {"unicode": "𝜗", "latex": "\\vartheta"},
            {"unicode": "𝜄", "latex": "\\iota"},
            {"unicode": "𝜅", "latex": "\\kappa"},
            {"unicode": "𝜘", "latex": "\\varkappa"},
            {"unicode": "𝜆", "latex": "\\lambda"},
            {"unicode": "𝜇", "latex": "\\mu"},
            {"unicode": "𝜈", "latex": "\\nu"},
            {"unicode": "𝜉", "latex": "\\xi"},
            {"unicode": "𝜋", "latex": "\\pi"},
            {"unicode": "𝜛", "latex": "\\varpi"},
            {"unicode": "𝜌", "latex": "\\rho"},
            {"unicode": "𝜚", "latex": "\\varrho"},
            {"unicode": "𝜎", "latex": "\\sigma"},
            {"unicode": "𝜍", "latex": "\\varsigma"},
            {"unicode": "𝜏", "latex": "\\tau"},
            {"unicode": "𝜐", "latex": "\\upsilon"},
            {"unicode": "𝜑", "latex": "\\phi"},
            {"unicode": "𝜙", "latex": "\\varphi"},
            {"unicode": "𝜒", "latex": "\\chi"},
            {"unicode": "𝜓", "latex": "\\psi"},
            {"unicode": "𝜔", "latex": "\\omega"},
            {"unicode": "𝛤", "latex": "\\Gamma"},
            {"unicode": "𝛥", "latex": "\\Delta"},
            {"unicode": "𝛩", "latex": "\\Theta"},
            {"unicode": "𝛬", "latex": "\\Lambda"},
            {"unicode": "𝛯", "latex": "\\Xi"},
            {"unicode": "𝛱", "latex": "\\Pi"},
            {"unicode": "𝛴", "latex": "\\Sigma"},
            {"unicode": "𝛶", "latex": "\\Upsilon"},
            {"unicode": "𝛷", "latex": "\\Phi"},
            {"unicode": "𝛹", "latex": "\\Psi"},
            {"unicode": "𝛺", "latex": "\\Omega"}
        ]
    };

    // --- State ---
    let currentRules = {};
    let conversionDirection = 'unicodeToLaTeX';
    let processedRules = { unicodeToLaTeXMap: [], latexToUnicodeMap: [] };
    let currentFilter = 'all';
    let currentSearch = '';
    let editingRuleIndex = null;
    let editingRuleType = null;

    // --- Helper Functions ---
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function isAlphabeticEnding(str) {
        if (!str || str.length === 0) return false;
        const lastChar = str.slice(-1);
        return /[a-zA-Z]/.test(lastChar);
    }

    function escapeHtml(str) {
        const div = document.createElement('div');
        div.textContent = str;
        return div.innerHTML;
    }

    // --- Rule Processing ---
    function processRules(rules) {
        const unicodeToLaTeXMap = [];
        const latexToUnicodeMap = [];
        const addRule = (map, rule) => {
            if (!map.some(existing => existing.from === rule.from)) {
                map.push(rule);
            }
        };

        rules = rules || {};
        rules.bidirectional = rules.bidirectional || [];
        rules.unicode_to_latex = rules.unicode_to_latex || [];
        rules.latex_to_unicode = rules.latex_to_unicode || [];

        if (Array.isArray(rules.bidirectional)) {
            rules.bidirectional.forEach(rule => {
                if (rule.unicode && rule.latex) {
                    const n = isAlphabeticEnding(rule.latex);
                    addRule(unicodeToLaTeXMap, { from: rule.unicode, to: rule.latex, needsSpacing: n, fromLength: rule.unicode.length });
                    addRule(latexToUnicodeMap, { from: rule.latex, to: rule.unicode, needsSpacing: n, fromLength: rule.latex.length });
                }
            });
        }

        if (Array.isArray(rules.unicode_to_latex)) {
            rules.unicode_to_latex.forEach(rule => {
                if (rule.unicode && rule.latex) {
                    const n = isAlphabeticEnding(rule.latex);
                    addRule(unicodeToLaTeXMap, { from: rule.unicode, to: rule.latex, needsSpacing: n, fromLength: rule.unicode.length });
                }
            });
        }

        if (Array.isArray(rules.latex_to_unicode)) {
            rules.latex_to_unicode.forEach(rule => {
                if (rule.unicode && rule.latex) {
                    const n = isAlphabeticEnding(rule.latex);
                    addRule(latexToUnicodeMap, { from: rule.latex, to: rule.unicode, needsSpacing: n, fromLength: rule.latex.length });
                }
            });
        }

        unicodeToLaTeXMap.sort((a, b) => b.fromLength - a.fromLength);
        latexToUnicodeMap.sort((a, b) => b.fromLength - a.fromLength);

        return { unicodeToLaTeXMap, latexToUnicodeMap };
    }

    // --- JSON Formatter ---
    function formatRulesForTextarea(rules) {
        try {
            rules = rules || {};
            rules.bidirectional = Array.isArray(rules.bidirectional) ? rules.bidirectional : [];
            rules.unicode_to_latex = Array.isArray(rules.unicode_to_latex) ? rules.unicode_to_latex : [];
            rules.latex_to_unicode = Array.isArray(rules.latex_to_unicode) ? rules.latex_to_unicode : [];

            const indent = "  ";
            let output = "{\n";

            const processRuleArray = (arrayName, ruleArray) => {
                let arrayOutput = `${indent}"${arrayName}": [\n`;
                if (ruleArray.length === 0) {
                    return arrayOutput + `${indent}],\n`;
                }

                let maxUnicodeValueLength = 0;
                ruleArray.forEach(rule => {
                    if (rule && typeof rule.unicode === 'string') {
                        maxUnicodeValueLength = Math.max(maxUnicodeValueLength, JSON.stringify(rule.unicode).length);
                    }
                });

                const keyUnicode = '"unicode": ';
                const keyLaTeX = '"latex": ';
                const valueSeparator = ', ';

                const formattedRuleLines = ruleArray.map((rule, index) => {
                    if (rule && typeof rule.unicode === 'string' && typeof rule.latex === 'string') {
                        const unicodeValueStr = JSON.stringify(rule.unicode);
                        const latexValueStr = JSON.stringify(rule.latex);
                        const paddedUnicodeValue = unicodeValueStr.padEnd(maxUnicodeValueLength);
                        const line = `${indent}${indent}{${keyUnicode}${paddedUnicodeValue}${valueSeparator}${keyLaTeX}${latexValueStr}}`;
                        const comma = (index < ruleArray.length - 1) ? "," : "";
                        return line + comma;
                    }
                    return null;
                }).filter(line => line !== null);

                arrayOutput += formattedRuleLines.join('\n');
                arrayOutput += `\n${indent}],\n`;
                return arrayOutput;
            };

            output += processRuleArray("bidirectional", rules.bidirectional);
            output += processRuleArray("unicode_to_latex", rules.unicode_to_latex);
            output += processRuleArray("latex_to_unicode", rules.latex_to_unicode);

            if (output.endsWith(',\n')) {
                output = output.slice(0, -2) + '\n';
            }
            output += "}";
            return output;
        } catch (error) {
            console.error("Error formatting rules:", error);
            return JSON.stringify(rules, null, 2);
        }
    }

    // --- Translation Functions ---
    function translateBlockUnicodeToLaTeX(block, rulesMap) {
        let result = block;
        rulesMap.forEach(rule => {
            const escapedFrom = escapeRegExp(rule.from);
            let regex;
            if (rule.needsSpacing) {
                regex = new RegExp(escapedFrom + '(?=[a-zA-Z])', 'g');
                result = result.replace(regex, () => rule.to + ' ');
                regex = new RegExp(escapedFrom + '(?![a-zA-Z])', 'g');
                result = result.replace(regex, rule.to);
                const endRegex = new RegExp(escapeRegExp(rule.from) + '$');
                if (endRegex.test(block) && result.endsWith(rule.from)) {
                    result = result.replace(endRegex, rule.to);
                }
            } else {
                regex = new RegExp(escapedFrom, 'g');
                result = result.replace(regex, rule.to);
            }
        });
        return result;
    }

    function translateBlockLaTeXToUnicode(block, rulesMap) {
        let result = block;
        rulesMap.forEach(rule => {
            const escapedFrom = escapeRegExp(rule.from);
            let regex;
            if (rule.needsSpacing) {
                regex = new RegExp(escapedFrom + '(?![a-zA-Z])', 'g');
                result = result.replace(regex, rule.to);
            } else {
                regex = new RegExp(escapedFrom, 'g');
                result = result.replace(regex, rule.to);
            }
        });
        return result;
    }

    // --- Main Conversion Function ---
    function convert() {
        const inputText = inputTextArea.value;
        let outputText = '';
        try {
            if (!processedRules || !processedRules.unicodeToLaTeXMap || !processedRules.latexToUnicodeMap ||
                processedRules.unicodeToLaTeXMap.length === 0 || processedRules.latexToUnicodeMap.length === 0) {
                console.warn("Rules not processed. Trying to process current rules.");
                if (Object.keys(currentRules).length === 0) {
                    currentRules = JSON.parse(JSON.stringify(defaultRules));
                }
                try {
                    processedRules = processRules(currentRules);
                    if (ruleStatus.classList.contains('error')) {
                        ruleStatus.textContent = '';
                        ruleStatus.className = '';
                    }
                } catch (ruleProcessingError) {
                    console.error("Error processing rules:", ruleProcessingError);
                    ruleStatus.textContent = `Error processing rules: ${ruleProcessingError.message}`;
                    ruleStatus.className = 'error';
                    try {
                        processedRules = processRules(JSON.parse(JSON.stringify(defaultRules)));
                    } catch (defaultProcessingError) {
                        console.error("FATAL:", defaultProcessingError);
                        outputTextArea.value = "Cannot convert due to rule processing error.";
                        return;
                    }
                }
                if (!processedRules || !processedRules.unicodeToLaTeXMap || !processedRules.latexToUnicodeMap ||
                    processedRules.unicodeToLaTeXMap.length === 0 || processedRules.latexToUnicodeMap.length === 0) {
                    throw new Error("Failed to generate rule map.");
                }
            }

            const blocks = inputText.split('\\\\');
            let convertedBlocks;
            if (conversionDirection === 'unicodeToLaTeX') {
                convertedBlocks = blocks.map(block => translateBlockUnicodeToLaTeX(block, processedRules.unicodeToLaTeXMap));
            } else {
                convertedBlocks = blocks.map(block => translateBlockLaTeXToUnicode(block, processedRules.latexToUnicodeMap));
            }
            outputText = convertedBlocks.join('\\\\');
            outputTextArea.value = outputText;

            if (!ruleStatus.textContent.startsWith('Error processing rules') && !ruleStatus.textContent.startsWith('Conversion error')) {
                ruleStatus.textContent = '';
                ruleStatus.className = '';
            }
        } catch (error) {
            console.error("Conversion error:", error);
            outputTextArea.value = `Conversion error:\n${error.message}`;
            ruleStatus.textContent = `Conversion error: ${error.message}`;
            ruleStatus.className = 'error';
        }
    }

    // --- Update UI for Direction ---
    function updateUIForDirection() {
        if (conversionDirection === 'unicodeToLaTeX') {
            inputLabel.textContent = 'Input (Unicode)';
            outputLabel.textContent = 'Output (LaTeX)';
            toggleDirectionButton.textContent = 'Switch to LaTeX → Unicode';
            inputTextArea.placeholder = 'Unicode LaTeX code (e.g., α → β)';
            outputTextArea.placeholder = 'Conversion result (e.g., \\alpha \\to \\beta)';
        } else {
            inputLabel.textContent = 'Input (LaTeX)';
            outputLabel.textContent = 'Output (Unicode)';
            toggleDirectionButton.textContent = 'Switch to Unicode → LaTeX';
            inputTextArea.placeholder = 'LaTeX code (e.g., \\alpha \\to \\beta)';
            outputTextArea.placeholder = 'Conversion result (e.g., α → β)';
        }
        const currentInput = inputTextArea.value;
        inputTextArea.value = outputTextArea.value;
        outputTextArea.value = currentInput;
        convert();
    }

    // --- View Toggle Functions ---
    function switchToUIView() {
        uiView.classList.remove('hidden');
        jsonView.classList.add('hidden');
        uiViewButton.classList.add('active');
        jsonViewButton.classList.remove('active');
        renderRulesList();
    }

    function switchToJSONView() {
        uiView.classList.add('hidden');
        jsonView.classList.remove('hidden');
        uiViewButton.classList.remove('active');
        jsonViewButton.classList.add('active');
        rulesTextArea.value = formatRulesForTextarea(currentRules);
    }

    // --- UI Rules List ---
    function getFilteredRules() {
        const allRules = [];
        const searchLower = currentSearch.toLowerCase();

        if (currentFilter === 'all' || currentFilter === 'bidirectional') {
            (currentRules.bidirectional || []).forEach((rule, index) => {
                if (!currentSearch ||
                    rule.unicode.toLowerCase().includes(searchLower) ||
                    rule.latex.toLowerCase().includes(searchLower)) {
                    allRules.push({ ...rule, type: 'bidirectional', index });
                }
            });
        }

        if (currentFilter === 'all' || currentFilter === 'unicode_to_latex') {
            (currentRules.unicode_to_latex || []).forEach((rule, index) => {
                if (!currentSearch ||
                    rule.unicode.toLowerCase().includes(searchLower) ||
                    rule.latex.toLowerCase().includes(searchLower)) {
                    allRules.push({ ...rule, type: 'unicode_to_latex', index });
                }
            });
        }

        if (currentFilter === 'all' || currentFilter === 'latex_to_unicode') {
            (currentRules.latex_to_unicode || []).forEach((rule, index) => {
                if (!currentSearch ||
                    rule.unicode.toLowerCase().includes(searchLower) ||
                    rule.latex.toLowerCase().includes(searchLower)) {
                    allRules.push({ ...rule, type: 'latex_to_unicode', index });
                }
            });
        }

        return allRules;
    }

    function getTypeBadgeClass(type) {
        return `rule-type-badge ${type}`;
    }

    function getTypeLabel(type) {
        switch (type) {
            case 'bidirectional': return 'Bi-directional';
            case 'unicode_to_latex': return 'Unicode→LaTeX';
            case 'latex_to_unicode': return 'LaTeX→Unicode';
            default: return type;
        }
    }

    function renderRulesList() {
        const rules = getFilteredRules();

        if (rules.length === 0) {
            rulesList.innerHTML = '<div class="rules-list-empty">No rules found</div>';
            return;
        }

        const html = rules.map((rule, displayIndex) => {
            const isEditing = editingRuleIndex === rule.index && editingRuleType === rule.type;

            if (isEditing) {
                return `
                    <div class="rule-item editing" data-type="${rule.type}" data-index="${rule.index}">
                        <div class="unicode-col">
                            <input type="text" class="edit-unicode" value="${escapeHtml(rule.unicode)}">
                        </div>
                        <div class="latex-col">
                            <input type="text" class="edit-latex" value="${escapeHtml(rule.latex)}">
                        </div>
                        <div class="type-col">
                            <span class="${getTypeBadgeClass(rule.type)}">${getTypeLabel(rule.type)}</span>
                        </div>
                        <div class="actions-col">
                            <button class="save-edit-button" data-type="${rule.type}" data-index="${rule.index}">Save</button>
                            <button class="cancel-edit-button">Cancel</button>
                        </div>
                    </div>
                `;
            }

            return `
                <div class="rule-item" data-type="${rule.type}" data-index="${rule.index}">
                    <div class="unicode-col" title="${escapeHtml(rule.unicode)}">${escapeHtml(rule.unicode)}</div>
                    <div class="latex-col" title="${escapeHtml(rule.latex)}">${escapeHtml(rule.latex)}</div>
                    <div class="type-col">
                        <span class="${getTypeBadgeClass(rule.type)}">${getTypeLabel(rule.type)}</span>
                    </div>
                    <div class="actions-col">
                        <button class="edit-button" data-type="${rule.type}" data-index="${rule.index}">Edit</button>
                        <button class="delete-button" data-type="${rule.type}" data-index="${rule.index}">Delete</button>
                    </div>
                </div>
            `;
        }).join('');

        rulesList.innerHTML = html;
    }

    // --- Rule Management Functions ---
    function addRule(unicode, latex, type) {
        if (!unicode || !latex) {
            showStatus('Please enter both Unicode and LaTeX values', true);
            return false;
        }

        if (!currentRules[type]) {
            currentRules[type] = [];
        }

        // Check for duplicates
        const exists = currentRules[type].some(r => r.unicode === unicode && r.latex === latex);
        if (exists) {
            showStatus('This rule already exists', true);
            return false;
        }

        // Add at the beginning for visibility
        currentRules[type].unshift({ unicode, latex });
        return true;
    }

    function deleteRule(type, index) {
        if (currentRules[type] && currentRules[type][index]) {
            currentRules[type].splice(index, 1);
            return true;
        }
        return false;
    }

    function updateRule(type, index, unicode, latex) {
        if (!unicode || !latex) {
            showStatus('Please enter both Unicode and LaTeX values', true);
            return false;
        }

        if (currentRules[type] && currentRules[type][index]) {
            currentRules[type][index] = { unicode, latex };
            return true;
        }
        return false;
    }

    function saveRulesToStorage() {
        try {
            processedRules = processRules(currentRules);
            localStorage.setItem('latexConverterRules', JSON.stringify(currentRules));
            showStatus('Rules saved successfully', false);
            convert();
            return true;
        } catch (error) {
            console.error("Error saving rules:", error);
            showStatus(`Error saving rules: ${error.message}`, true);
            return false;
        }
    }

    function showStatus(message, isError) {
        ruleStatus.textContent = message;
        ruleStatus.className = isError ? 'error' : '';
        if (!isError) {
            setTimeout(() => {
                if (ruleStatus.textContent === message) {
                    ruleStatus.textContent = '';
                }
            }, 3000);
        }
    }

    // --- Load Rules ---
    function loadRules() {
        try {
            const storedRules = localStorage.getItem('latexConverterRules');
            if (storedRules) {
                const parsedRules = JSON.parse(storedRules);
                if (typeof parsedRules === 'object' && parsedRules !== null && Array.isArray(parsedRules.bidirectional)) {
                    currentRules = parsedRules;
                    if (!currentRules.latex_to_unicode) currentRules.latex_to_unicode = [];
                    if (!currentRules.unicode_to_latex) currentRules.unicode_to_latex = [];
                    rulesTextArea.value = formatRulesForTextarea(currentRules);
                    ruleStatus.textContent = 'Loaded saved custom rules';
                    ruleStatus.className = '';
                } else {
                    console.warn("Invalid format in stored rules.");
                    currentRules = JSON.parse(JSON.stringify(defaultRules));
                    rulesTextArea.value = formatRulesForTextarea(currentRules);
                    ruleStatus.textContent = 'Invalid custom rules found, using default rules';
                    ruleStatus.className = 'error';
                }
            } else {
                currentRules = JSON.parse(JSON.stringify(defaultRules));
                rulesTextArea.value = formatRulesForTextarea(currentRules);
                ruleStatus.textContent = 'Using default rules';
                ruleStatus.className = '';
            }
            processedRules = processRules(currentRules);
        } catch (error) {
            console.error("Error loading rules:", error);
            currentRules = JSON.parse(JSON.stringify(defaultRules));
            rulesTextArea.value = formatRulesForTextarea(currentRules);
            try {
                processedRules = processRules(currentRules);
                ruleStatus.textContent = `Rule load error (${error.message}). Using default rules.`;
                ruleStatus.className = 'error';
            } catch (processingError) {
                console.error("FATAL:", processingError);
                processedRules = { unicodeToLaTeXMap: [], latexToUnicodeMap: [] };
                currentRules = { bidirectional: [], latex_to_unicode: [], unicode_to_latex: [] };
                rulesTextArea.value = formatRulesForTextarea(currentRules);
                ruleStatus.textContent = 'Fatal error: Failed to process rules.';
                ruleStatus.className = 'error';
            }
        }
    }

    function resetToDefaultRules() {
        if (confirm('Are you sure you want to reset to default rules? This will remove your custom rules.')) {
            try {
                currentRules = JSON.parse(JSON.stringify(defaultRules));
                processedRules = processRules(currentRules);
                localStorage.removeItem('latexConverterRules');
                rulesTextArea.value = formatRulesForTextarea(currentRules);
                ruleStatus.textContent = 'Reset to default rules';
                ruleStatus.className = '';
                renderRulesList();
                convert();
            } catch (error) {
                console.error("Error resetting rules:", error);
                ruleStatus.textContent = `Reset error: ${error.message}`;
                ruleStatus.className = 'error';
                try {
                    rulesTextArea.value = formatRulesForTextarea(defaultRules);
                } catch {
                    rulesTextArea.value = "{}";
                }
                processedRules = { unicodeToLaTeXMap: [], latexToUnicodeMap: [] };
            }
        }
    }

    // --- Event Listeners ---

    // Converter
    inputTextArea.addEventListener('input', convert);

    toggleDirectionButton.addEventListener('click', () => {
        conversionDirection = (conversionDirection === 'unicodeToLaTeX') ? 'latexToUnicode' : 'unicodeToLaTeX';
        updateUIForDirection();
    });

    copyOutputButton.addEventListener('click', () => {
        const originalText = copyOutputButton.textContent;
        if (outputTextArea.value) {
            navigator.clipboard.writeText(outputTextArea.value).then(() => {
                copyOutputButton.textContent = 'Copied!';
                setTimeout(() => { copyOutputButton.textContent = originalText; }, 1500);
            }).catch(err => {
                console.error('Copy failed', err);
                alert('Failed to copy text.');
            });
        } else {
            alert('Nothing to copy.');
        }
    });

    // View Toggle
    uiViewButton.addEventListener('click', switchToUIView);
    jsonViewButton.addEventListener('click', switchToJSONView);

    // Search and Filter
    ruleSearch.addEventListener('input', (e) => {
        currentSearch = e.target.value;
        renderRulesList();
    });

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilter = btn.dataset.filter;
            renderRulesList();
        });
    });

    // Add New Rule
    addRuleButton.addEventListener('click', () => {
        const unicode = newUnicodeInput.value;
        const latex = newLatexInput.value;
        const type = newRuleTypeSelect.value;

        if (addRule(unicode, latex, type)) {
            newUnicodeInput.value = '';
            newLatexInput.value = '';
            renderRulesList();
            showStatus('Rule added (click "Save Rules" to persist)', false);
        }
    });

    // Enter key to add rule
    [newUnicodeInput, newLatexInput].forEach(input => {
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addRuleButton.click();
            }
        });
    });

    // Save UI Rules
    saveUiRulesButton.addEventListener('click', () => {
        saveRulesToStorage();
        renderRulesList();
    });

    // Reset buttons
    resetRulesButtonUi.addEventListener('click', resetToDefaultRules);
    resetRulesButton.addEventListener('click', resetToDefaultRules);

    // Rules List Event Delegation
    rulesList.addEventListener('click', (e) => {
        const target = e.target;

        // Edit button
        if (target.classList.contains('edit-button')) {
            editingRuleType = target.dataset.type;
            editingRuleIndex = parseInt(target.dataset.index);
            renderRulesList();
        }

        // Delete button
        if (target.classList.contains('delete-button')) {
            const type = target.dataset.type;
            const index = parseInt(target.dataset.index);
            if (deleteRule(type, index)) {
                renderRulesList();
                showStatus('Rule deleted (click "Save Rules" to persist)', false);
            }
        }

        // Save edit button
        if (target.classList.contains('save-edit-button')) {
            const type = target.dataset.type;
            const index = parseInt(target.dataset.index);
            const item = target.closest('.rule-item');
            const unicode = item.querySelector('.edit-unicode').value;
            const latex = item.querySelector('.edit-latex').value;

            if (updateRule(type, index, unicode, latex)) {
                editingRuleIndex = null;
                editingRuleType = null;
                renderRulesList();
                showStatus('Rule updated (click "Save Rules" to persist)', false);
            }
        }

        // Cancel edit button
        if (target.classList.contains('cancel-edit-button')) {
            editingRuleIndex = null;
            editingRuleType = null;
            renderRulesList();
        }
    });

    // JSON View - Save Rules
    saveRulesButton.addEventListener('click', () => {
        try {
            const newRulesRaw = rulesTextArea.value;
            if (!newRulesRaw.trim()) {
                throw new Error("Rules cannot be empty.");
            }
            const newRules = JSON.parse(newRulesRaw);

            if (typeof newRules !== 'object' || newRules === null) throw new Error("Rules must be a JSON object.");
            if (!Array.isArray(newRules.bidirectional)) throw new Error("'bidirectional' must be an array.");
            if (newRules.hasOwnProperty('latex_to_unicode') && !Array.isArray(newRules.latex_to_unicode)) throw new Error("'latex_to_unicode' must be an array if present.");
            if (newRules.hasOwnProperty('unicode_to_latex') && !Array.isArray(newRules.unicode_to_latex)) throw new Error("'unicode_to_latex' must be an array if present.");

            if (!newRules.latex_to_unicode) newRules.latex_to_unicode = [];
            if (!newRules.unicode_to_latex) newRules.unicode_to_latex = [];

            const tempProcessed = processRules(newRules);
            currentRules = newRules;
            processedRules = tempProcessed;
            localStorage.setItem('latexConverterRules', JSON.stringify(currentRules));
            rulesTextArea.value = formatRulesForTextarea(currentRules);
            ruleStatus.textContent = 'Rules saved and applied successfully';
            ruleStatus.className = '';
            convert();
        } catch (error) {
            console.error("Error saving rules:", error);
            ruleStatus.textContent = `Error saving/processing rules: ${error.message}`;
            ruleStatus.className = 'error';
        }
    });

    // --- Initialize ---
    loadRules();
    updateUIForDirection();
    renderRulesList();

});
