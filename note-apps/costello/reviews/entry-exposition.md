# Entry exposition: author-side record

Revision: 2026-10-06, base `50b7505`, branch `codex/costello-reader-exposition`.
Assigned scope: `content/orientation.md`, `content/gaussian.md`, `content/scales.md` only. This record is not independent reader acceptance.

## Reader and learning contract

Licensed starting knowledge: calculus, Taylor/binomial expansion, matrix quadratic forms. QFT, probability notation, heat kernels and BV machinery are not licensed prerequisites. The entry should let the reader distinguish averaging a polynomial from substituting its average, then compute and retain the new terms required to express the averaged weight. Chapter 2 must use those terms in a second average before passing to covariance splitting and the field calculation.

The old entry opened with field/functional/action definitions and then moved straight to divergent integrals, locality and symmetry. Those individually correct definitions did not yet supply an operation the reader could start. The repair starts with a fourth power and a symmetric Gaussian fluctuation. It carries the resulting quadratic term through the first two chapters and makes the same-point version of its coefficient the next problem. History is retained after the objects and questions it contextualizes.

## Pattern execution

Each listed slot is grounded in the unchanged worked equations, except the explicit source-result announcements noted below. No slot relies on an invented historical obstacle or emotional response.

### Orientation opening: P08, two orders of averaging

| Slot | Concrete content and realization | Basis/status |
| --- | --- | --- |
| first | First paragraph: average the fluctuating quantity, then take its fourth power. | Mean-zero assumption; direct algebra, verified. |
| second | Same question: take the fourth power, then average. | Same object with changed order; verified. |
| common | 「どちらも同じ量から出発する」 fixes the compared input. | Explicit shared input. |
| bridge | Binomial expansion. | Licensed baseline. |
| calculation | Odd powers cancel because positive and negative fluctuations have equal weight; even powers remain. | Gaussian symmetry; existing Gaussian density and moments. |
| match | Fourth, second and constant powers of the retained value are identified. | Existing `gaussian.md` first-order calculation. |
| difference | Averaging the fluctuation first returns the original value and loses the second/constant terms. | Mean-zero assumption and above expansion. |
| gain | 「何が足りないかを調べられる」: distinguish an average from discarding the fluctuation. | Consequence of the compared expansions. |
| use | Next paragraph asks which terms must be carried into an effective interaction, then into a second average. | Announced application; explicitly to be checked in Chapters 1–2. |

Payoff: the opening already identifies the missing powers; numerical coefficients and the exponentiated-weight version are to be computed in Chapter 1. It does not present the introductory polynomial comparison as a proof of the all-order effective interaction.

### Gaussian effective interaction through connected terms: P07, work before definition

| Slot | Concrete content and realization | Basis/status |
| --- | --- | --- |
| job | 「指数の平均を再び指数で表す」 opening: replace the averaged weight by a weight depending only on the retained variable. | Action/exponential convention stated in orientation; manuscript definition. |
| requirements | The new interaction must reproduce the same averaged exponential, retaining constants. | Existing `gaussian-effective` equality. |
| definition | `W(p,I)` via unchanged custom equation. | Original adopted convention; verified preservation. |
| check | Constant term in the coupling is one, so a formal logarithm exists. | Gaussian normalization and coefficientwise expansion. |
| simple | First order in the coupling, using the fourth moment. | Unchanged math-steps and displayed result. |
| interpretation | Two fluctuating factors produce a quadratic term, four produce a constant. | Terms in the immediately preceding expansion. |
| use | Second-order expansion subtracts the product of separate averages. | Unchanged cumulant calculation and graph comparison. |
| gain | Distinguish connected contributions from products; carry the resulting interaction to the second average. | Existing cumulant/general connected-component argument and revised exit. |

Payoff: the reader can identify the newly generated terms and explain why the logarithm removes separate products. The loop-count unit remains a separate consequence, with its existing graph-count justification.

### Scales, integral-to-derivative unit: P08

| Slot | Concrete content and realization | Basis/status |
| --- | --- | --- |
| first | Already established Gaussian integration. | Chapter 1 and Chapter 2 composition. |
| second | Opening of 「平均を微分で表す」: sum of even derivatives. | Explicit prospective description. |
| common | The average of the same polynomial after adding the fluctuation. | Stated before Taylor transformation. |
| bridge | Taylor expansion; odd moments vanish; even moments from Chapter 1 recurrence. | Available before this use. |
| calculation | Unchanged two-line sum and factorial identity. | Direct algebra. |
| match | Unchanged fourth-power example reproduces Chapter 1 average. | Explicit equal coefficients. |
| difference | Operator exponential means repeated differentiation, not multiplication by a scalar exponential; polynomial series terminates. | Sum already displayed; clarified at first operator use. |
| gain | Replace repeated integrals with even derivatives and moment coefficients. | Stated after the coefficient match. |
| use | Apply coefficientwise to the exponentiated interaction, then to a covariance matrix and composition. | Unchanged `W` identity, matrix operator and commutation equality. |

Payoff: the earlier average is reconstructed, and covariance addition becomes operator composition. The subsequent scale unit gives the covariance split a purpose before introducing the inverse quadratic form and heat-time interval.

## Author-side order and dependency inspection

Coverage: the complete visible orientation → Gaussian → scales route, including retained equations, headers, figure text, announcements and the scales supplement. The closed supplement is not a premise for the main route. This is a drafting replay with whole-manuscript access; independent prefix-limited judgments are pending.

| Route position | Meaning available there | Inference/status and actual witness |
| --- | --- | --- |
| Orientation first paragraph | Two orders of average/fourth power and the missing powers. | Binomial expansion; Gaussian positive/negative symmetry explicitly precedes odd-power cancellation. |
| Entry → fields | An infinite collection of fluctuations may make an otherwise finite coefficient singular. | A reported field-theory problem, not inferred from the one-variable example; coincidence and the Chapter 3 target are named immediately afterward. |
| Locality → gauge redundancy | Subtracting an infinite coefficient is constrained by same-point/finite-derivative locality and by equivalence of configurations. | These are stated requirements; finite coefficients are not asserted to imply symmetry. |
| Effective family | Scale specifies how much fluctuation is averaged; two-stage consistency is a concrete condition. | Definition/result overview. Its finite-dimensional calculation is announced for Chapters 1–2. |
| Heat kernel and theorem scope | Kernel propagates initial values by an integral; manifolds locally admit coordinates, with sphere as intuitive example. | Positive-scale smoothing and the restricted compact-manifold theorem are reported source results. No theorem for every theory or noncompact space is inferred. |
| BV regularization | Replace same-point pairing with two-point weighting by a smooth positive-time heat kernel. | Reported construction; [Costello §1.8 and §10.1](https://arxiv.org/html/0706.1533v3#S1.S8). The equation's transport is distinguished from existence of an initial quantum correction. |
| History and conventions | Historical methods attach to already identified averaging, subtraction and symmetry tasks. | History is retained; action sign, formal series and unproved theorem caveats remain explicit. |
| Gaussian entry and moments | Retained variable, averaged fluctuation, density-weighted integral and variance have visible roles. | Normalization and integration-by-parts recurrence are unchanged. |
| Effective interaction definition | Average the weight, then represent it by an exponential with a new exponent. | Prior sign convention plus coefficientwise formal logarithm; no positive-quartic integral convergence is assumed. |
| First-order payoff | Quadratic/constant terms come from two/four averaged factors. | Immediately preceding unchanged binomial math-steps. |
| Logarithm/graph unit | Compare simultaneous and separate averages; crossing contractions explain which terms survive. | Existing two-vertex difference and explicit cumulant polynomial; no later loop counting used as a premise. |
| Loop/exit → scales | Powers of the formal variable follow from vertex/edge factors; generated terms must be retained in a second average. | Existing tree-count argument; next chapter checks the cross term explicitly. |
| Scales composition | Independent averages combine by summed covariance. | Density-factorization, moment-generating calculation and nested-average equality precede the composition result. |
| Derivative representation | Taylor coefficients select even moments; repeated derivatives reproduce the same average. | Displayed sums and fourth-power coefficient match; the operator exponential is explained at its first use. |
| Quadratic form → interval split | The quadratic weight determines covariance; interval splitting supplies additive pieces for composition. | Diagonalization is described as a sum of coordinate squares; inverse covariance and exponential integral already displayed before interval flow. |
| Interval → length | Endpoint controls weighted wave components, with length measured by square root of heat time. | Existing plane-wave eigenvalue and dimension argument; smooth weighting is distinguished from a sharp wave-number boundary. |
| Exit → field contraction | The same quartic-to-quadratic correction is to be recomputed for fields; its same-point coefficient is the next obstacle. | Preview only, matching the actual opening/calculation in `renormalization.md`. |
| Closed inverse-flow supplement | Formal inverse operator is distinct from a positive covariance distribution. | Existing statement retained; not used to establish main-route composition. |

Term/symbol checks are separate from these operation witnesses. Existing notation is retained; added inline mentions only re-identify existing `y`, `hbar` and `z`. The notation-design gate was read. `z` is now explicitly the integrated multivariable input at the unchanged quadratic weight. No alternate notation or new alias was introduced. Original source conventions, `I=-V`, operator factors, indices and signs were not changed. Full-document notation review is not claimed.

Japanese prose check covered every changed sentence in context: averaging is distinguished from discarding fluctuations; coefficients are the things that change or diverge; the symmetry condition is what is transported; theorem conditions are restrictions rather than consequences of the elementary calculation. All drafting/pattern/gate commentary stays in this record.

## Scientific fidelity and validation

- Original displayed formulas, fenced equation/math-steps payloads, reference comments and link targets were compared with `50b7505` and are identical as multisets (orientation: 0 displays/0 custom payloads/10 links; Gaussian: 11 displays/2 custom payloads/2 links; scales: 9 displays/1 custom payload/2 links). No original inline formula was removed or changed. Custom IDs and payload ordering remain intact.
- [Costello 2007 §§1.2–1.4](https://arxiv.org/html/0706.1533v3#S1.S2) was inspected for smooth positive-scale kernels, singular zero-scale limit, composition, locality and scheme choice. §1.8/§10.1 was inspected for heat-kernel BV operators and QME transport. The orientation preserves separate existence/obstruction and source-theorem caveats. The retained historical bibliography was not independently re-audited; the 2011 book was not newly inspected.
- Added polynomial and operator descriptions are restatements of the existing displayed calculations. `git diff --check` on the three assigned manuscripts passed.
- `python3 scripts/check-calculations.py` could not run: default Python lacks SymPy. No dependency was installed. Integration validation remains with the coordinator; no build, publication or commit was made here.

SHA-256 of the submitted manuscripts:

```text
orientation.md c19b84ec8eaf2436c76a4d5d81bf5f685994135cf65cb06e3f04677d48ca5836
gaussian.md    b122ec7fbf521aa6dc8836d81e31a5094e54c7adfe180b7a1b60294f63256be3
scales.md      99180dbb52d12e0a94c109ca7a7ed8787593631b0d4d969b4dc8186967863339
```

Independent reader-order/adversarial acceptance: **pending**. The coordinator must inspect the integration boundary to Chapter 3 and perform the fresh prefix reading without this author rationale. The downstream manuscript must deliver the promised same-point quartic-to-quadratic coefficient; its current displayed calculation already does so.
