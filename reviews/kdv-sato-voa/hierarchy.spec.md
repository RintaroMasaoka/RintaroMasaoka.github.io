# KdV hierarchy: the inverse-scattering transform and the dressed derivative

- spec_id: kdv-hierarchy-dressing-v1
- status: active
- artifact: note-apps/kdv/content/sections/hierarchy.md
- governs: section 4, its exact composition in full.md, and the new dressing diagram
- approval_migration_status: complete

## Objective and reader

Before higher KdV flows, the reader understands the already-known inverse-scattering transformation as S, and understands why the normalized square root P equals S∂xS^−1. This is a realization of the human-approved mathematical route, not approval of any exact manuscript wording. Earlier recorded approvals concern the conceptual role and conventions; no bounded section-4 prose is protected. The reader knows Schrödinger eigenfunctions, Fourier modes, derivatives/integrals and the prior left GLM relation f_−=exp(ikx)+integral_-infinity^x K(x,y)exp(iky)dy, u=2 dK(x,x)/dx. Pseudodifferential operators and their formal inverse are NOT licensed before the revised introduction supplies them.

## Required route and motivation

1. Recall the existing kernel transformation, define its identity-plus-integral action as S at fixed time. The transformation maps free Schrödinger eigenfunctions to potential-dependent ones. It is not a fresh unknown transform or a replacement notation for K itself.
2. Explain the negative-power notation and noncommutative coefficient/derivative product before use. A left antiderivative supplies an initial concrete interpretation of ∂x^−1 on a stated class of inputs with vanishing left boundary terms. Explain the formal series meaning at the move to arbitrary negative powers. Do not claim convergence or an analytic realization for arbitrary formal series.
3. Establish S=1+K(x,x)∂x^−1−(∂yK)(x,x)∂x^−2+… as a formal expansion with its source identified. The full integration-by-parts verification/conditions may be disclosed, but the main text supplies the recognizable meaning and first terms, with proof status explicit where needed. The arbitrary PDO definition and Leibniz product must be introduced before later calculations consume them.
4. The reason to compare LS and S(−∂x²) is that both eigenvalue equations describe the very same transformed eigenfunction. Show this comparison directly. Justify LS=S(−∂x²) in the formal calculus by comparing coefficients in the large-wave-number expansion, or a correctly established kernel intertwining calculation. Do not silently assert that one eigenfunction determines an operator.
5. Explain the formal inverse S^−1 before use, with a short visible reason why 1+negative is invertible; details can be disclosed. Then derive −L=S∂x²S^−1=(S∂xS^−1)^2. Introduce P as this transported derivative and the monic formal square root, rather than assuming its interpretation after the fact. Use the accepted root coefficient series to make contact with u and the earlier diagonal reconstruction.
6. Only after closing this bridge, proceed to the higher hierarchy construction and existing conservation proof. Maintain its useful explanation and full supporting residue proof. This task does not add KP/ZS/Grassmannian/VOA chapters.

## Conventions and scope

L=−∂x²+u; left Jost normalization, left K and physical time t before this section retained. From the PDO/hierarchy unit use B_n=(P^n)_≥0, ∂_{t_n}P=[B_n,P]; t1=x, t3=−4t at the time-normalization boundary. No (-4)^n generator factors. P²=−L gives trivial even flows. The conservation demonstration stays along t3, with R_n,J_n,I_n and no unnecessary second flux index or simultaneous multi-time assumption before compatibility is taught.

S is an identity-plus-kernel transformation, then its formal PDO representation. Keep its analytic meaning in the actual scattering setting distinct from the general formal KP calculus. Higher KdV flows mean higher differential order, not additional spatial dimensions. Preserve all equation IDs when moving/revising equations; add descriptive IDs for genuinely new equations. Section numbers may shift coherently. Preserve all full.md content before section4 and the entire bibliography byte-for-byte against /private/tmp/kdv-kernel-dressing-20261022 snapshot. Do not edit unrelated sections, source archives or other tasks.

## Main path, supplements and figure

Keep the essential explanation LS=S(−∂²) and the square-root factorization in the main path. Dropdowns hold the repeated integration-by-parts terms/conditions and inverse-series or coefficient checks when they only certify the understood construction. With dropdowns closed, the reason for each operator and operation remains available. Never rely on a later PDO definition to make an earlier inverse or negative-power manipulation intelligible.

A compact commuting diagram must let the reader compare: free input g maps by S to Sg; free differentiation maps g to ∂g; applying S gives the same result as P acting on Sg. A second-derivative view may show P²=−L with the same orientation. It is an operator diagram, not a numerical wave simulation. All lettering/controls in English with KaTeX math, inherited light/dark colors, no horizontal panning or phone overflow. Introduce its symbols in prose before the first dependent visual inference. Do not add diagrams of text boxes that add no relation.

## Checks and handoff

Author returns preparation before writing. Separate fresh Luna readers cover scientific/prerequisite validity, sequential explanation, visual inference/usability, and Japanese wording; give each one perspective. No Sol/Astra, no worker subdelegation. Coordinator checks the final source ranges and fixes actual findings, rather than claiming a full-note acceptance from local checks. Build using the shared reader, run source/build reader guards, section sync and mathematical rendering checks. Inspect diagram in embedded desktop/portrait and both themes. Publication is authorized by the user. Publish this bounded change through an isolated checkout and report verified deployment status.

## Scientific authority

The accepted K→S→PS= S∂ relation and square-root derivation in the current user exchange; existing left GLM manuscript; direct algebra and formal asymptotic verification; Batlle's PDO calculus and Mulase's Algebraic Theory of the KP Equations for dressing/root normalization. Reader-order, notation and wording decisions follow the project study-note skill and the recovered philosophy in reviews/project-philosophy/20261022/principles.md.
