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

    // --- デフォルト変換ルール (短いサンプル) ---
    const defaultRules = {
        "correspondence": [
            {"unicode": "α", "normal": "\\alpha"},     {"unicode": "β", "normal": "\\beta"},      {"unicode": "Γ", "normal": "\\Gamma"},
            {"unicode": "∑", "normal": "\\sum"},       {"unicode": "→", "normal": "\\rightarrow"},{"unicode": "×", "normal": "\\times"},
            {"unicode": "∈", "normal": "\\in"},        {"unicode": "⊆", "normal": "\\subseteq"},  {"unicode": "⟨", "normal": "\\langle"},
            {"unicode": "⟩", "normal": "\\rangle"},    {"unicode": "¹", "normal": "^1"},        {"unicode": "₁", "normal": "_1"},
        ],
        "other_normal": [
            {"unicode": "≥", "normal": "\\ge"},        {"unicode": "≤", "normal": "\\le"},        {"unicode": "ℝ", "normal": "\\R"},
            {"unicode": "→", "normal": "\\to"},        {"unicode": "₁", "normal": "_{1}"},
        ],
        "other_unicode": [
            {"unicode": "（", "normal": "\\left("},    {"unicode": "）", "normal": "\\right)"},   {"unicode": "𝜀", "normal": "\\epsilon"},
            {"unicode": "𝑎", "normal": "a"},
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

    // --- Textarea Formatter (修正版) ---
    function formatRulesForTextarea(rules) {
        try {
            rules = rules || {};
            rules.correspondence = Array.isArray(rules.correspondence) ? rules.correspondence : [];
            rules.other_unicode = Array.isArray(rules.other_unicode) ? rules.other_unicode : [];
            rules.other_normal = Array.isArray(rules.other_normal) ? rules.other_normal : [];

            const indent = "  ";
            let output = "{\n";

            const processRuleArray = (arrayName, ruleArray) => {
                let arrayOutput = `${indent}"${arrayName}": [\n`;
                if (ruleArray.length === 0) { return arrayOutput + `${indent}],\n`; }

                let maxUnicodeValueLength = 0;
                ruleArray.forEach(rule => { if (rule && typeof rule.unicode === 'string') { maxUnicodeValueLength = Math.max(maxUnicodeValueLength, JSON.stringify(rule.unicode).length); } });

                const keyUnicode = '"unicode": '; const keyNormal = '"normal": ';
                const valueSeparator = ', ';

                const formattedRuleLines = ruleArray.map((rule, index) => {
                    if (rule && typeof rule.unicode === 'string' && typeof rule.normal === 'string') {
                        const unicodeValueStr = JSON.stringify(rule.unicode);
                        const normalValueStr = JSON.stringify(rule.normal);
                        const paddedUnicodeValue = unicodeValueStr.padEnd(maxUnicodeValueLength);
                        const line = `${indent}${indent}{${keyUnicode}${paddedUnicodeValue}${valueSeparator}${keyNormal}${normalValueStr}}`;
                        const comma = (index < ruleArray.length - 1) ? "," : "";
                        return line + comma;
                    } return null;
                }).filter(line => line !== null);

                arrayOutput += formattedRuleLines.join('\n');
                arrayOutput += `\n${indent}],\n`;
                return arrayOutput;
            };

            output += processRuleArray("correspondence", rules.correspondence);
            output += processRuleArray("other_unicode", rules.other_unicode);
            output += processRuleArray("other_normal", rules.other_normal);

            if (output.endsWith(',\n')) { output = output.slice(0, -2) + '\n'; }
            output += "}";
            return output;
        } catch (error) { console.error("Error formatting rules:", error); return JSON.stringify(rules, null, 2); }
    }

    // --- Translation Functions (Unchanged) ---
    function translateBlockUnicodeToNormal(block, rulesMap) { /* ... */
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
    function translateBlockNormalToUnicode(block, rulesMap) { /* ... */
        let result = block;
        rulesMap.forEach(rule => {
            const escapedFrom = escapeRegExp(rule.from); let regex;
            if (rule.needsSpacing) { regex = new RegExp(escapedFrom + '(?![a-zA-Z])', 'g'); result = result.replace(regex, rule.to); }
            else { regex = new RegExp(escapedFrom, 'g'); result = result.replace(regex, rule.to); }
        }); return result;
    }

    // --- Main Conversion Function (Unchanged) ---
    function convert() { /* ... */
        const inputText = inputTextArea.value; let outputText = '';
        try {
            if (!processedRules || !processedRules.unicodeToNormalMap || !processedRules.normalToUnicodeMap || processedRules.unicodeToNormalMap.length === 0 || processedRules.normalToUnicodeMap.length === 0) {
                console.warn("Rules not processed. Trying to process current rules.");
                if (Object.keys(currentRules).length === 0) { currentRules = JSON.parse(JSON.stringify(defaultRules)); }
                 try {
                    processedRules = processRules(currentRules);
                    if (ruleStatus.classList.contains('error')) { ruleStatus.textContent = ''; ruleStatus.className = ''; }
                 } catch (ruleProcessingError) {
                     console.error("Error processing rules:", ruleProcessingError); console.warn("Falling back to default rules.");
                     ruleStatus.textContent = `ルール処理エラー: ${ruleProcessingError.message}。デフォルトルールで試行します。`; ruleStatus.className = 'error';
                     try { processedRules = processRules(JSON.parse(JSON.stringify(defaultRules))); }
                     catch (defaultProcessingError) { console.error("FATAL: Error processing default rules:", defaultProcessingError); outputTextArea.value = "ルール処理エラーのため変換できません。"; return; }
                 }
                 if (!processedRules || !processedRules.unicodeToNormalMap || !processedRules.normalToUnicodeMap || processedRules.unicodeToNormalMap.length === 0 || processedRules.normalToUnicodeMap.length === 0){ throw new Error("ルールマップ生成失敗。"); }
            }
            const blocks = inputText.split('\\\\'); let convertedBlocks;
            if (conversionDirection === 'unicodeToNormal') { convertedBlocks = blocks.map(block => translateBlockUnicodeToNormal(block, processedRules.unicodeToNormalMap)); }
            else { convertedBlocks = blocks.map(block => translateBlockNormalToUnicode(block, processedRules.normalToUnicodeMap)); }
            outputText = convertedBlocks.join('\\\\'); outputTextArea.value = outputText;
            if (!ruleStatus.textContent.startsWith('ルール処理エラー')) { ruleStatus.textContent = ''; ruleStatus.className = ''; }
        } catch (error) { console.error("Conversion error:", error); outputTextArea.value = `変換エラー:\n${error.message}`; ruleStatus.textContent = `変換エラー: ${error.message}`; ruleStatus.className = 'error'; }
    }

    // --- Update UI (Unchanged) ---
    function updateUIForDirection() { /* ... */
        if (conversionDirection === 'unicodeToNormal') { /*...*/ } else { /*...*/ } convert();
    }

    // --- Load/Save Rules (Uses formatter) ---
    function loadRules() {
        try { /* ... */
            const storedRules = localStorage.getItem('latexConverterRules');
            if (storedRules) {
                const parsedRules = JSON.parse(storedRules);
                if (typeof parsedRules === 'object' && parsedRules !== null && Array.isArray(parsedRules.correspondence)) {
                    currentRules = parsedRules; /*...*/ rulesTextArea.value = formatRulesForTextarea(currentRules); ruleStatus.textContent = '保存されたカスタムルールを読み込みました。'; ruleStatus.className = '';
                } else { /*...*/ currentRules = JSON.parse(JSON.stringify(defaultRules)); rulesTextArea.value = formatRulesForTextarea(currentRules); ruleStatus.textContent = 'カスタムルールが無効なため、デフォルトルールを使用します。'; ruleStatus.className = 'error'; }
            } else { /*...*/ currentRules = JSON.parse(JSON.stringify(defaultRules)); rulesTextArea.value = formatRulesForTextarea(currentRules); ruleStatus.textContent = 'デフォルトルールを使用中。'; ruleStatus.className = ''; }
            processedRules = processRules(currentRules);
        } catch (error) { /* ... Error handling ... */
            console.error("Error applying rules:", error); currentRules = JSON.parse(JSON.stringify(defaultRules)); rulesTextArea.value = formatRulesForTextarea(currentRules);
            try { processedRules = processRules(currentRules); ruleStatus.textContent = `ルール適用エラー (${error.message})。デフォルトルールを使用します。`; ruleStatus.className = 'error'; }
            catch (processingError) { /*...*/ processedRules = { unicodeToNormalMap: [], normalToUnicodeMap: [] }; currentRules = { correspondence: [], other_normal: [], other_unicode: [] }; rulesTextArea.value = formatRulesForTextarea(currentRules); ruleStatus.textContent = '致命的エラー: ルールの処理に失敗しました。'; ruleStatus.className = 'error'; }
        }
    }

    // --- Event Listeners (Uses formatter) ---
    inputTextArea.addEventListener('input', convert);
    toggleDirectionButton.addEventListener('click', () => { /* ... */ conversionDirection = (conversionDirection === 'unicodeToNormal') ? 'normalToUnicode' : 'unicodeToNormal'; const temp = inputTextArea.value; inputTextArea.value = outputTextArea.value; updateUIForDirection(); });
    copyOutputButton.addEventListener('click', () => { /* ... */ if (outputTextArea.value) { navigator.clipboard.writeText(outputTextArea.value).then(() => { /*...*/ }).catch(err => { /*...*/ }); } else { /*...*/ } });
    saveRulesButton.addEventListener('click', () => { /* ... */
        try {
            const newRulesRaw = rulesTextArea.value; if (!newRulesRaw.trim()) { throw new Error("ルール定義が空です。"); }
            const newRules = JSON.parse(newRulesRaw); // Parse potentially unformatted user input
            // Validation ...
            if (typeof newRules !== 'object' || newRules === null) throw new Error("..."); if (!Array.isArray(newRules.correspondence)) throw new Error("..."); if (newRules.hasOwnProperty('other_normal') && !Array.isArray(newRules.other_normal)) throw new Error("..."); if (newRules.hasOwnProperty('other_unicode') && !Array.isArray(newRules.other_unicode)) throw new Error("..."); if (!newRules.other_normal) newRules.other_normal = []; if (!newRules.other_unicode) newRules.other_unicode = [];
            const tempProcessed = processRules(newRules); // Validate
            currentRules = newRules; processedRules = tempProcessed;
            localStorage.setItem('latexConverterRules', JSON.stringify(currentRules)); // Save raw parsed rules
            rulesTextArea.value = formatRulesForTextarea(currentRules); // <<<<<< Reformat textarea
            ruleStatus.textContent = 'ルールが正常に保存・適用されました。'; ruleStatus.className = '';
            convert();
        } catch (error) { console.error("Error saving rules:", error); ruleStatus.textContent = `ルール保存/処理エラー: ${error.message}`; ruleStatus.className = 'error'; }
    });
    resetRulesButton.addEventListener('click', () => { /* ... */
        if (confirm('...')) {
            try {
                currentRules = JSON.parse(JSON.stringify(defaultRules)); processedRules = processRules(currentRules);
                localStorage.removeItem('latexConverterRules');
                rulesTextArea.value = formatRulesForTextarea(currentRules); // <<<<<< Format on reset
                ruleStatus.textContent = 'デフォルトルールにリセットしました。'; ruleStatus.className = '';
                convert();
            } catch (error) { /*...*/ console.error("Error resetting:", error); ruleStatus.textContent = `リセットエラー: ${error.message}`; ruleStatus.className = 'error'; try { rulesTextArea.value = formatRulesForTextarea(defaultRules); } catch { rulesTextArea.value = "{}"; } processedRules = { unicodeToNormalMap: [], normalToUnicodeMap: [] }; }
        }
    });

    // --- Initial Load ---
    loadRules();
    updateUIForDirection();
}); // End DOMContentLoaded