---
name: manim-math-derivation
description: "Verify, expand, and prepare mathematical derivations for faithful Manim animation. Use for equation transformations, omitted algebraic steps, term correspondences, symbolic substitutions, approximation checks, or deciding whether a generated derivation step is equivalent to the source."
---

# Manim Math Derivation

Use this skill before Manim implementation when a clip depends on equation transformations. The goal is not to explain creatively; it is to make the source derivation animatable without changing its mathematical content.

## Inputs

Require or reconstruct:

- source equations verbatim
- assumptions and definitions used in the source
- target transformation or claimed result
- allowed transformation policy from the work order

Ask one narrow question if an assumption is missing and the derivation cannot be checked without it.

## Procedure

1. Normalize symbols.
   - List definitions and assumptions.
   - Preserve notation unless a display-only rewrite is required.

2. Classify each proposed step.
   - `identity`
   - `substitution`
   - `algebraic rearrangement`
   - `differentiation/integration`
   - `limit/approximation`
   - `definition expansion`
   - `unsupported`

3. Check equivalence.
   - Do not add approximations, gauge choices, boundary conditions, special cases, or physical interpretation unless they are in source.
   - Flag low confidence instead of smoothing over uncertainty.
   - Use symbolic tools only when they fit the expression class; do not force SymPy onto domain-specific tensor/operator algebra.
   - If a numerical approximation or finite-parameter check is requested for a Manim clip, state its source/user-supplied parameters and whether it is an illustrative check, endpoint label, or animation driver. Do not present an agent-computed number as the clip's central claim.

4. Produce an animation-ready derivation plan.
   - Keep steps few enough to fit 15-90 seconds.
   - Identify term correspondences and highlight candidates.
   - Mark which equations should be displayed verbatim and which are intermediate.
   - For numerical quantities, recommend the visual role to pass to the work order or visual planner: changing quantity, sampled states, convergence trace, parameter dependence, endpoint/check label, or unsupported.

## Output

Return:

- derivation summary
- step table with source basis and confidence
- recommended animation treatment
- numerical visual role, when numerical values or approximations are involved
- flagged risks

Use this table shape:

| Step | Expression | Operation | Source basis | Animation hint | Confidence |
|---|---|---|---|---|---|

## Rejection Criteria

Reject or flag a step when:

- it uses an unstated assumption
- it changes the problem class
- it introduces a new example
- it replaces equality with approximation without source support
- it turns a numerical approximation into source authority without source/user parameters and a planned visual role
- it hides a nontrivial theorem as "obvious"
