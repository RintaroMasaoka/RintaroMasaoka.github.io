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

    // --- デフォルト変換ルール (correspondence は省略) ---
    const defaultRules = {
        "correspondence": [
            {"unicode": "α", "normal": "\\alpha"},
            {"unicode": "β", "normal": "\\beta"},
            {"unicode": "γ", "normal": "\\gamma"},
            {"unicode": "δ", "normal": "\\delta"},
            {"unicode": "ε", "normal": "\\varepsilon"},
            {"unicode": "ϵ", "normal": "\\epsilon"},
            {"unicode": "ζ", "normal": "\\zeta"},
            {"unicode": "η", "normal": "\\eta"},
            {"unicode": "θ", "normal": "\\theta"},
            {"unicode": "ϑ", "normal": "\\vartheta"},
            {"unicode": "ι", "normal": "\\iota"},
            {"unicode": "κ", "normal": "\\kappa"},
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
            // 
            {"unicode": "∑", "normal": "\\sum"},
            {"unicode": "∏", "normal": "\\prod"},
            {"unicode": "∫", "normal": "\\int"},
            {"unicode": "⨁", "normal": "\\bigoplus"},
            {"unicode": "⨂", "normal": "\\bigotimes"},
            // 
            {"unicode": "∅", "normal": "\\emptyset"}, 
            {"unicode": "‖", "normal": "\\|"},
            {"unicode": "ħ", "normal": "\\hbar"},
            {"unicode": "∞", "normal": "\\infty"},
            {"unicode": "∂", "normal": "\\partial"},
            {"unicode": "∇", "normal": "\\nabla"},
            {"unicode": "★", "normal": "\\star"},
            {"unicode": "△", "normal": "\\triangle"},
            {"unicode": "□", "normal": "\\square"},
            {"unicode": "✓", "normal": "\\checkmark"},
            {"unicode": "∃", "normal": "\\exists"},
            {"unicode": "∀", "normal": "\\forall"},
            {"unicode": "†", "normal": "\\dagger"},
            {"unicode": "⊥", "normal": "\\bot"},
            {"unicode": "⊤", "normal": "\\top"},
            {"unicode": "☡", "normal": "\\danger"},
            {"unicode": "±", "normal": "\\pm"},
            {"unicode": "∓", "normal": "\\mp"},
            {"unicode": "∧", "normal": "\\wedge"},
            {"unicode": "∨", "normal": "\\vee"},
            {"unicode": "×", "normal": "\\times"},
            {"unicode": "⋅", "normal": "\\cdot"},
            {"unicode": "⊕", "normal": "\\oplus"},
            {"unicode": "⊗", "normal": "\\otimes"},
            {"unicode": "→", "normal": "\\to"},
            {"unicode": "←", "normal": "\\leftarrow"},
            {"unicode": "↑", "normal": "\\uparrow"},
            {"unicode": "↓", "normal": "\\downarrow"},
            {"unicode": "↔", "normal": "\\leftrightarrow"},
            {"unicode": "⇐", "normal": "\\Leftarrow"},
            {"unicode": "⇒", "normal": "\\Rightarrow"},
            {"unicode": "⇔", "normal": "\\Leftrightarrow"},
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
            {"unicode": "∉", "normal": "\\notin"},
            {"unicode": "⊂", "normal": "\\subset"},
            {"unicode": "⊆", "normal": "\\subseteq"},
            {"unicode": "⊊", "normal": "\\subsetneq"},
            {"unicode": "⊃", "normal": "\\supset"},
            {"unicode": "⊇", "normal": "\\supseteq"},
            {"unicode": "⊋", "normal": "\\supsetneq"},
            {"unicode": "∩", "normal": "\\cap"},
            {"unicode": "∪", "normal": "\\cup"},
            {"unicode": "≤", "normal": "\\leq"},
            {"unicode": "≲", "normal": "\\lesssim"},
            {"unicode": "≦", "normal": "\\leqq"},
            {"unicode": "≪", "normal": "\\ll"},
            {"unicode": "≥", "normal": "\\geq"},
            {"unicode": "≳", "normal": "\\gtrsim"},
            {"unicode": "≧", "normal": "\\geqq"},
            {"unicode": "≫", "normal": "\\gg"},
            {"unicode": "⪯", "normal": "\\preceq"},
            {"unicode": "⪰", "normal": "\\succeq"},
            {"unicode": "⟂", "normal": "\\perp"},
            {"unicode": "∥", "normal": "\\parallel"},
            {"unicode": "∋", "normal": "\\ni"},
            {"unicode": "⟨", "normal": "\\langle"},
            {"unicode": "⟩", "normal": "\\rangle"},
            {"unicode": "⌈", "normal": "\\lceil"},
            {"unicode": "⌉", "normal": "\\rceil"},
            {"unicode": "⌊", "normal": "\\lfloor"},
            {"unicode": "⌋", "normal": "\\rfloor"},
            {"unicode": "⋯", "normal": "\\cdots"},
            {"unicode": "…", "normal": "\\ldots"},
            {"unicode": "⋱", "normal": "\\ddots"},
            {"unicode": "⋮", "normal": "\\vdots"},
            {"unicode": "÷", "normal": "\\frac"},
            {"unicode": "√", "normal": "\\sqrt"},
            {"unicode": "␣", "normal": "\\quad"},
            {"unicode": "＿", "normal": "_\\mathrm"},
            {"unicode": "＾", "normal": "^\\mathrm"},
            {"unicode": "ℯ", "normal": "{{e}}"},
            {"unicode": "¡", "normal": "{{i}}"},
            {"unicode": "｜", "normal": "\\Big|"},
            {"unicode": "≟", "normal": "\\overset{?}{=}"},
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
            // 
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
            {"unicode": "𝟙", "normal": "\\mathbbm{1}"},
            // 
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
            // 
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
            // 
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
        "other_normal": [ // Additional Normal forms -> Unicode
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
            {"unicode": "₋", "normal": "_{-}"}
        ],
        "other_unicode": [ // Additional Unicode forms -> Normal
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
            {"unicode": "𝛺", "normal": "\\Omega"},
        ]
    };

    let currentRules = {};
    let conversionDirection = 'unicodeToNormal'; // 'unicodeToNormal' or 'normalToUnicode'
    let processedRules = {
        unicodeToNormalMap: [],
        normalToUnicodeMap: []
    };

    // --- Helper Functions ---
    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function isAlphabeticEnding(str) {
        if (!str || str.length === 0) return false;
        const lastChar = str.slice(-1);
        return /[a-zA-Z]/.test(lastChar);
    }

    // --- Rule Processing (修正版) ---
    function processRules(rules) {
        const unicodeToNormalMap = [];
        const normalToUnicodeMap = [];

        // 1. Process 'correspondence' rules (Main bidirectional mapping)
        if (rules.correspondence && Array.isArray(rules.correspondence)) {
            rules.correspondence.forEach(rule => {
                if (rule.unicode && rule.normal) {
                    const needsSpacingForNormalOutput = isAlphabeticEnding(rule.normal);
                    const needsSpacingForNormalInput = isAlphabeticEnding(rule.normal); // For reverse mapping

                    // Rule for Unicode -> Normal
                    unicodeToNormalMap.push({
                        from: rule.unicode,
                        to: rule.normal,
                        needsSpacing: needsSpacingForNormalOutput, // Space needed if normal output ends in letter
                        fromLength: rule.unicode.length
                    });

                    // Rule for Normal -> Unicode
                    normalToUnicodeMap.push({
                        from: rule.normal,
                        to: rule.unicode,
                        needsSpacing: needsSpacingForNormalInput, // Space needed if normal input ends in letter
                        fromLength: rule.normal.length
                    });
                }
            });
        }

        // 2. Process 'other_unicode' (Additional Unicode forms -> Normal)
        // These define extra 'unicode' representations that should map TO a 'normal' form.
        if (rules.other_unicode && Array.isArray(rules.other_unicode)) {
             rules.other_unicode.forEach(rule => {
                 if (rule.unicode && rule.normal) {
                     const needsSpacingForNormalOutput = isAlphabeticEnding(rule.normal);
                     // Add rule: from=unicode_alt, to=normal
                     unicodeToNormalMap.push({
                         from: rule.unicode, // The alternative unicode form (e.g., \~)
                         to: rule.normal,   // The standard normal form (e.g., \tilde)
                         needsSpacing: needsSpacingForNormalOutput, // Spacing based on the 'to' (normal) string
                         fromLength: rule.unicode.length
                     });
                 }
             });
        }


        // 3. Process 'other_normal' (Additional Normal forms -> Unicode)
        // These define extra 'normal' representations that should map TO a 'unicode' form.
        if (rules.other_normal && Array.isArray(rules.other_normal)) {
            rules.other_normal.forEach(rule => {
                if (rule.unicode && rule.normal) {
                    const needsSpacingForNormalInput = isAlphabeticEnding(rule.normal); // Check the 'from' (normal) string
                    // Add rule: from=normal_alt, to=unicode
                     normalToUnicodeMap.push({
                         from: rule.normal, // The alternative normal form (e.g., \left\lparen...)
                         to: rule.unicode, // The standard unicode form (e.g., \（)
                         needsSpacing: needsSpacingForNormalInput, // Spacing based on the 'from' (normal) string
                         fromLength: rule.normal.length
                     });
                }
            });
        }

        // 4. Sort rules by length of the 'from' string (descending) for correct replacement order
        unicodeToNormalMap.sort((a, b) => b.fromLength - a.fromLength);
        normalToUnicodeMap.sort((a, b) => b.fromLength - a.fromLength);

        // console.log("Processed Unicode->Normal:", unicodeToNormalMap); // For debugging
        // console.log("Processed Normal->Unicode:", normalToUnicodeMap); // For debugging

        return { unicodeToNormalMap, normalToUnicodeMap };
    }


    // --- Translation Functions ---
    function unicodeToNormal(text, rulesMap) {
        let result = text;
        rulesMap.forEach(rule => {
            const escapedFrom = escapeRegExp(rule.from);
            let regex;
            if (rule.needsSpacing) { // Check if the *output* (normal) needs space
                // Add space if the original text has a letter following the match
                regex = new RegExp(escapedFrom + '(?=[a-zA-Z])', 'g');
                result = result.replace(regex, rule.to + ' ');
                // Replace occurrences not followed by a letter
                regex = new RegExp(escapedFrom + '(?![a-zA-Z])', 'g');
                 result = result.replace(regex, rule.to);
            } else {
                 regex = new RegExp(escapedFrom, 'g');
                 result = result.replace(regex, rule.to);
            }
        });
        return result;
    }

    function normalToUnicode(text, rulesMap) {
        let result = text;
         rulesMap.forEach(rule => {
            const escapedFrom = escapeRegExp(rule.from);
            let regex;
            if (rule.needsSpacing) { // Check if the *input* (normal) needs space logic
                 // Replace if the 'from' string is followed by a non-letter or end of string
                regex = new RegExp(escapedFrom + '(?![a-zA-Z])', 'g');
                result = result.replace(regex, rule.to);
            } else {
                 // Simple replacement if no spacing logic needed for the 'from' string
                 regex = new RegExp(escapedFrom, 'g');
                 result = result.replace(regex, rule.to);
            }
         });
        return result;
    }

    // --- Update UI and Perform Conversion ---
    function convert() {
        const inputText = inputTextArea.value;
        let outputText = '';

        try {
            // Ensure processedRules are generated before conversion
            if (!processedRules || !processedRules.unicodeToNormalMap || !processedRules.normalToUnicodeMap) {
                 console.warn("Rules not processed yet. Processing now.");
                 processedRules = processRules(currentRules);
             }

            if (conversionDirection === 'unicodeToNormal') {
                outputText = unicodeToNormal(inputText, processedRules.unicodeToNormalMap);
            } else {
                outputText = normalToUnicode(inputText, processedRules.normalToUnicodeMap);
            }
            outputTextArea.value = outputText;
            ruleStatus.textContent = ''; // Clear status on successful conversion
            ruleStatus.className = '';
        } catch (error) {
            console.error("Conversion error:", error);
            outputTextArea.value = "変換エラーが発生しました。";
            ruleStatus.textContent = `変換エラー: ${error.message}`;
            ruleStatus.className = 'error';
        }
    }

    // --- Update UI elements based on direction ---
    function updateUIForDirection() {
        if (conversionDirection === 'unicodeToNormal') {
            inputLabel.textContent = '入力 (Unicode)';
            outputLabel.textContent = '出力 (Normal)';
            toggleDirectionButton.textContent = 'Normal → Unicode に切り替え';
            inputTextArea.placeholder = 'Unicode LaTeX コードを入力...';
        } else {
            inputLabel.textContent = '入力 (Normal)';
            outputLabel.textContent = '出力 (Unicode)';
            toggleDirectionButton.textContent = 'Unicode → Normal に切り替え';
            inputTextArea.placeholder = 'Normal LaTeX コードを入力...';
        }
        // Trigger conversion with the new direction
        convert();
    }

    // --- Load Rules ---
    function loadRules() {
        let rulesToProcess = defaultRules; // Start with default
        try {
            const storedRules = localStorage.getItem('latexConverterRules');
            if (storedRules) {
                currentRules = JSON.parse(storedRules);
                rulesTextArea.value = JSON.stringify(currentRules, null, 2);
                rulesToProcess = currentRules; // Use stored rules
                ruleStatus.textContent = '保存されたカスタムルールを読み込みました。';
                ruleStatus.className = '';
            } else {
                currentRules = JSON.parse(JSON.stringify(defaultRules)); // Deep copy for editing
                rulesTextArea.value = JSON.stringify(currentRules, null, 2);
                ruleStatus.textContent = 'デフォルトルールを使用中。';
                ruleStatus.className = '';
            }
            // Always process the rules after determining which set to use
            processedRules = processRules(rulesToProcess);

        } catch (error) {
            console.error("Error loading/processing rules:", error);
            // Fallback to default rules if loading/parsing/processing fails
            currentRules = JSON.parse(JSON.stringify(defaultRules));
            rulesTextArea.value = JSON.stringify(currentRules, null, 2);
            processedRules = processRules(defaultRules); // Process default rules on error
            ruleStatus.textContent = 'ルールの読み込み/処理に失敗。デフォルトルールを使用します。';
            ruleStatus.className = 'error';
        }
         // Initial conversion might happen here or after UI update
         // convert(); // Moved to the end after updateUIForDirection
    }

    // --- Event Listeners ---
    inputTextArea.addEventListener('input', convert);

    toggleDirectionButton.addEventListener('click', () => {
        conversionDirection = (conversionDirection === 'unicodeToNormal') ? 'normalToUnicode' : 'unicodeToNormal';
        updateUIForDirection();
    });

     copyOutputButton.addEventListener('click', () => {
        if (outputTextArea.value) {
            navigator.clipboard.writeText(outputTextArea.value)
                .then(() => {
                    ruleStatus.textContent = '出力内容をクリップボードにコピーしました。';
                    ruleStatus.className = '';
                    setTimeout(() => { if (ruleStatus.textContent === '出力内容をクリップボードにコピーしました。') ruleStatus.textContent = ''; }, 2000);
                })
                .catch(err => {
                    console.error('コピー失敗:', err);
                    ruleStatus.textContent = 'クリップボードへのコピーに失敗しました。';
                    ruleStatus.className = 'error';
                });
        }
    });

    saveRulesButton.addEventListener('click', () => {
        try {
            const newRulesRaw = rulesTextArea.value;
            if (!newRulesRaw) {
                 throw new Error("ルール定義が空です。");
            }
            const newRules = JSON.parse(newRulesRaw);

            // Basic validation
            if (typeof newRules !== 'object' || newRules === null) {
                 throw new Error("ルールはJSONオブジェクト形式で定義してください。");
            }
            if (!Array.isArray(newRules.correspondence)) {
                throw new Error("'correspondence' 配列は必須です。");
            }
            // Ensure optional arrays exist if not provided in the text area
            if (!newRules.other_normal) newRules.other_normal = [];
            if (!newRules.other_unicode) newRules.other_unicode = [];
            if (!Array.isArray(newRules.other_normal) || !Array.isArray(newRules.other_unicode)) {
                throw new Error("'other_normal' と 'other_unicode' は配列である必要があります。");
            }

            // Process the new rules to check for processing errors before saving
            const tempProcessed = processRules(newRules);

            // If processing succeeds, save and apply
            currentRules = newRules;
            processedRules = tempProcessed; // Use the successfully processed rules
            localStorage.setItem('latexConverterRules', JSON.stringify(currentRules));
            ruleStatus.textContent = 'ルールが正常に保存・適用されました。';
            ruleStatus.className = '';
            convert(); // Re-convert with new rules

        } catch (error) {
            console.error("Error saving/processing rules:", error);
            ruleStatus.textContent = `ルールの保存/処理に失敗: ${error.message}`;
            ruleStatus.className = 'error';
             // Do NOT update currentRules or processedRules if saving/processing failed
        }
    });

    resetRulesButton.addEventListener('click', () => {
        if (confirm('現在のカスタムルールを破棄し、デフォルトルールに戻しますか？')) {
            try {
                currentRules = JSON.parse(JSON.stringify(defaultRules)); // Deep copy
                rulesTextArea.value = JSON.stringify(currentRules, null, 2);
                processedRules = processRules(currentRules); // Process default rules
                localStorage.removeItem('latexConverterRules');
                ruleStatus.textContent = 'デフォルトルールにリセットしました。';
                ruleStatus.className = '';
                convert(); // Re-convert with default rules
            } catch (error) {
                 console.error("Error resetting to default rules:", error);
                 ruleStatus.textContent = `デフォルトルールへのリセットに失敗: ${error.message}`;
                 ruleStatus.className = 'error';
            }
        }
    });

    // --- Initial Load ---
    loadRules(); // Load and process rules
    updateUIForDirection(); // Set initial UI state and perform initial conversion
});