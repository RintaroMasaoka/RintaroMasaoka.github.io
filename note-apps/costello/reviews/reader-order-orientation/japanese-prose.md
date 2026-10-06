# Audit Japanese Prose

Use for Japanese scholarly prose whose sentence does not naturally convey a recoverable proposition, whether originally written in Japanese or translated. Check the intended meaning and its Japanese expression together. This gate is separate from establishing scientific correctness, defining symbols, or verifying a translation's terminology.

## Check the clause in context

1. Read the full sentence and surrounding argument. Recover who or what acts, what changes or is related, its object or complement, and the governing conditions. An equation or preceding definition may fix the intended relation. When two plausible meanings differ scientifically, retain the ambiguity as a finding; do not choose one merely because it yields smoother prose.
2. Check whether the actual subject, predicate, particles, and arguments express that relation in ordinary scholarly Japanese. Test collocation and agency: can this subject perform the stated operation, and does the predicate say what happens to its object? A mathematically valid metaphor or conventional abstract subject can pass when the operation is determinate in context.
3. Resolve modifier scope, reference words, topic changes, and omitted arguments where they obstruct that meaning. For a compact nominal expression, recover the relation between its parts. Established technical terms may remain compact; an invented compound must not hide a relation needed to understand this sentence.
4. Rewrite the clause from its intended operation or relation, rather than swapping the suspicious word in isolation. Preserve established technical terms, modality, negation, quantifiers, conditions, causal direction, notation, and citation attachment. Use the [Japanese rendering check](audit-japanese-rendering.md) when deciding a translation or term/name rendering.
5. Reread the repaired sentence with its neighbors. Confirm both that it says the same supported proposition and that a reader can recover the subject–predicate relation without knowing the author's intended answer. If the operation itself remains unlicensed, record an additional dependency finding under [reader state](audit-reader-state.md#operation-dependency-check); fluent Japanese cannot supply the missing premise.

## Decision boundaries

- Fail an expression for a specific unrecoverable or unnatural relation, not for word count, kanji density, stiffness, assumed AI authorship, or the presence of English.
- Do not blacklist verbs or abstract subjects. “A boundary condition selects the allowed sector” can be legitimate when the selection rule is identifiable; an unexplained correspondence to a fixed state or coefficient belongs in the operation-dependency findings. Record an additional Japanese-expression failure when the predicate itself suggests a different operation or leaves its intended relation unrecoverable.
- Keep conventional technical terminology when a simpler paraphrase would change its identity or precision. Controlled compression is acceptable when the relations are already clear.
- A grammatical sentence can fail because its collocation suggests the wrong operation. Conversely, an unusual sentence may be required to state a precise definition; identify a concrete reading problem before revising it.

## Output and completion

For review, record the exact span, the intended relation supported by context, the obstacle in the Japanese wording, and a concrete repair or unresolved ambiguity. For authorized revision, write clean manuscript-ready Japanese and retain this record outside the artifact. Match the requested coverage: inspect all affected sentences for drafting/revision and all requested spans for a language audit, including captions and headings when in scope. Report that coverage and residual findings separately from notation, scientific, and causal-dependency verdicts.
