# Renormalization / schemes authoring record

Status: authorized prose revision completed; independent prefix-limited acceptance **pending** with coordinator. This record is an author-side dependency replay, not an independent reviewer verdict or a learner study.

## Scope and reader baseline

- Edited only `content/renormalization.md`, `content/schemes.md`, and this record.
- Licensed preparation: calculus, Taylor expansion, matrix quadratic forms. Read-only inspection of `gaussian.md` and `scales.md` supplies the actual preceding explanations: Gaussian moments, the generated quadratic and sextic terms, diagram contractions/loop counting, the differential contraction operator, inverse quadratic form as covariance, and additive interval propagators/composition.
- To be acquired here: replace sums over components by integrals over positions; use directional variation and the delta distribution to evaluate a field contraction; isolate an integrable Taylor remainder; identify which pre-average subtraction survives in the retained quadratic term; compensate finite subtraction changes; determine another scale from one condition; distinguish RG consistency, positive-scale nonlocality, and asymptotic locality.
- No assumption that a named object is understood merely because an earlier chapter mentions it. The matrix/kernel, derivative, and scale-transfer correspondences are restated at the actual operation.

## Selected patterns and realized slots

### Unit: field quadratic correction through local subtraction — P01

| Slot | Material / source | Realization |
| --- | --- | --- |
| goal | Obtain a finite quadratic correction; one-variable calculation in gaussian | Opening asks which pre-average term leaves a finite correction |
| known | Covariance/inverse matrix and contraction operator; scales | Matrix-to-kernel entry and directional derivative bridge |
| attempt | Apply the second derivative to the quartic field interaction; displayed equations | Delta distribution puts both contraction endpoints at the same position |
| obstacle | Singular diagonal propagator; Costello §1.2 and existing heat-kernel example | Direct evaluation of P(x,x) is unavailable |
| requirement | First use a smooth propagator, then separate growing short-distance coefficients | Closing paragraph of first section |
| tool | Heat-time lower cutoff and Taylor subtraction; displayed fixed-m,L asymptotic formulas | Heat-kernel section opening and inverse-power/log/remainder explanation |
| retry | Subtract the displayed local quadratic counterterm | Pre-average subtraction and the unchanged finite-limit equation |
| gain | Compute the retained quadratic coefficient B_mu(L) without requiring the whole effective interaction to be local | Counterterm conclusion, two-position sextic example, chapter close |

The same quartic interaction and its quadratic correction are retained from opening through retry. Later sextic and subdiagram paragraphs delimit what this computation does not prove; they do not turn the one-loop check into an all-orders theorem.

### Unit: finite compensation and one-scale condition — P02

| Slot | Material / source | Realization |
| --- | --- | --- |
| candidate | b+B_mu(L); existing displayed equation | Both inputs to the post-average coefficient are stated together |
| constraint | Preserve the same quadratic term while changing subtraction | Paragraph before compensation equation |
| test | Replace D_mu by D_mu+c holding b fixed | Result is b+B_mu(L)-c |
| mismatch | Finite shift survives | Fixed-b comparison explicitly distinguishes changed theory description |
| repair | Change b to b+c | Existing compensation equation |
| recheck | c cancels at every positive scale | Sentence after compensation equation |
| consequence | Choose the coefficient beta_* at L_* and solve for b | Second section; substitution yields the scale-difference prediction |
| scope | First order in g and hbar, quadratic field component; action coefficient rather than measured scattering quantity | Original opening/qualification preserved |

The condition at L_* is rechecked directly by setting L=L_* in the existing formula. The finite interval integral returns a prediction for the same quadratic coefficient, rather than changing examples.

## Specific repairs and author-side temporal checks

Meaning and operation support below use the preceding text at the indicated location. Definitions/questions are not treated as proved results. This is coverage of consequential transitions over both complete chapters; independent sentence-level frozen-prefix coverage is still pending.

| Reading location | Meaning available there | Operation support / downstream check |
| --- | --- | --- |
| Renormalization opening | Repeat the acquired one-variable quadratic-correction calculation for a retained function; locate failure before choosing subtraction | Preview only. Exact function/decay/mass/vacuum assumptions follow before any field operation |
| Free-action paragraph | Integral kernel maps input positions to output positions | Earlier inverse matrix covariance correspondence; displayed inverse action fixes what P means |
| Variation equation → contraction | Differentiate F along a function-valued direction using ordinary s differentiation; combine two position derivatives with P | Displayed equation supplies the first derivative's meaning; following contraction expression directly replaces earlier double sum by double integral |
| Quartic second derivative → diagonal | The delta distribution forces y=x, leaving two fields | Already supplied delta identity and quartic second-variation expression justify the evaluation; retained coefficient matches prior one-variable correction |
| Heat-kernel entry → cutoff | Cut off small heat times to compute the same diagonal contraction | Existing interval integral is recalled before the heat-kernel representation; no unrestricted functional probability measure asserted |
| Taylor decomposition → asymptotic formula | Constant and linear Taylor terms create inverse-power and logarithmic integrals; remainder remains bounded | Fixed-L, fixed-m regime stated before expansion and maintained in existing o(1) statement; remainder divided by t² tends to m⁴/2 |
| Counterterm entry → finite retained term | Same local quadratic density cancels its divergent coefficient | Further contraction of a quadratic term leaves no fields (vacuum), so within the stated component the pre-average subtraction survives unchanged |
| Nonlocal section entry → two-position example | Locality of subtraction does not require locality of all generated terms | Existing sextic diagram and combinatorial coefficient unchanged; P links three fields at each of two separate positions |
| Higher-order/chapter close | A subdiagram may need subtraction before remaining computation; general existence still requires theorem | Original caveat retained; result claimed only for computed component |
| Schemes opening → finite compensation | Finite subtraction choice can change the retained coefficient unless pre-average input changes too | b and B_mu roles stated before comparison; exact c cancellation supplies the check |
| Condition → scale prediction | One assigned coefficient fixes b, so another scale uses the difference of B_mu | Existing substitution; explicit L=L_* return verifies the assigned condition before using the difference |
| Derivative → finite integral | Remaining scale motion is between strictly positive endpoints | Existing derivative formula and fundamental theorem of calculus; mu cancellation retained |
| Family section entry | A complete effective interaction includes generated terms and must inherit them across scales | Same quartic-to-quadratic contraction on interval L1→L2 supplies the scalar example of composition before general family definition |
| Family locality condition | RG composition alone does not specify local small-scale behavior | Earlier positive-scale nonlocal term licenses distinct locality requirement; definition is an adopted external condition, not inferred from the one-loop example |
| Family example/theorem caveat | B_mu can diverge at zero while multiplying a local density | Unchanged B_mu formula; original topology and theorem-C links preserved, no noncompact example promoted to general theorem proof |
| BV handoff | Next demand is preserving transformation-derived integration identities in addition to finiteness | Prospective only; BV mechanism delegated to next chapter, not used as an established premise here |

## Notation and Japanese prose

- Loaded notation-design before finalizing the restatements/earlier prose uses of adopted symbols. No symbols renamed, new aliases, convention changes, or equation-order changes.
- Retained p→P relationship because it makes the acquired scalar covariance role visible in the diagonal kernel; retained interval subscripts because they identify the already-defined scale increment; retained s as ordinary scalar directional parameter because it exposes the calculus operation in the immediately following fixed equation. Its role is now available before the equation rather than inferred afterward.
- All section routes checked for existing names/roles: field position x explicitly separated from earlier scalar x; H, Delta, F, eta, delta distribution, P, K_t, epsilon/L, mu, D_mu/B_mu, counterterm, b/c, L_*/beta_*, I[L]/Phi[L], and hbar order retain their existing introductions/conditions. This is targeted choice/availability coverage, not a whole-manuscript notation certification.
- Affected Japanese sentences checked in context for explicit subject/action, modifier scope, and equation attachment. Replaced compressed 'indices become positions' with the sum-to-integral operation and compressed 'counterterm contraction creates vacuum' with remaining-field counting. No pending author-side wording finding; independent acceptance pending.

## Scientific preservation and checks

- Primary authority read: Costello, arXiv:0706.1533v3, §1.2 (regulated contractions), §1.6, Definition 1.6.1 and Theorem C (effective families and scheme dependence). The adopted family conditions are retained as external inputs. The manuscript's flat noncompact scalar example remains distinct from the original compact BV setting.
- Added derivational prose unpacks existing displayed calculations: delta evaluation, Taylor integration/remainder, quadratic contraction field count, finite c cancellation, setting L=L_* and finite interval scale increment. No additional general theorem or new physical observable claim introduced.
- Python mechanical comparison against the original repository content confirmed byte-exact equality of all display-math blocks, custom equation/math-steps blocks, reference comments, and Markdown link tokens in both files.
- Existing `scripts/check-calculations.py` was attempted with system python3 and stopped because SymPy is missing; no package installation or alternative claim of passing. Coordinator notified to use its available validation runtime.
- No build, git operation, publication, or changes outside the assigned paths performed.

Revision SHA-256:

- renormalization.md: `145ff5d8efa6edff99f9a6f6db53132d65b32f14ebff29e22fe7800e83531997`
- schemes.md: `7c27a4c635da495dd01e263cf97d8a09707664d5d519d4e704082927b586abb8`

Cross-chapter dependencies for integration: renormalization entry consumes the actual quartic quadratic-correction example and matrix covariance from gaussian/scales; its close hands the finite-choice question to schemes. Schemes consumes the fixed-L subtraction and B_mu formula, uses the interval composition mechanism from scales, and hands only the prospective integration-identity requirement to BV. Check these joins again if preceding chapters change acquisition order.
