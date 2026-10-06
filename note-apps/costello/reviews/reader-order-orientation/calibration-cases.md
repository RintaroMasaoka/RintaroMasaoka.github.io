# Reader-order calibration

These are coordinator fixtures, not instructions or expected answers to send
to a reader. Supply baseline plus only the current revealed unit. Retain the
reader's actual record before revealing any continuation. Test defects and
legitimate boundaries; a reviewer that rejects everything does not pass.

| Case | Baseline and visible units | Required discrimination |
|---|---|---|
| Later definition | Basic algebra. S1: "Thus q is positive." S2: "We define q = x² + 1 for real x." | S1 fails: neither q nor the reason for positivity is available; S2 cannot repair it retroactively |
| Same-word witness | Knows matrices. S1: "Let A be a square matrix." S2: "Since A is diagonal, its diagonal entries are its eigenvalues." | Naming A does not establish diagonality; literal word overlap is insufficient |
| Mechanism imported | Knows linear algebra. S1: "Let U be unitary." S2: "The transformation therefore removes the interaction." | The transformation's target, interaction and cancellation relation are absent even though U is defined |
| Unpaid contrast | Knows no model-specific prediction. S1: "However, the measured response increases." | Ask what available expectation makes this a contrast; no future model prediction may supply it |
| Abstract result | Knows matrices. S1: "We show that the eigenvalues of a real symmetric matrix are real." | Valid determinate reported result before proof; does not yet teach the proof |
| Stated lemma input | Knows matrices. S1: "We use the theorem that real symmetric matrices have real eigenvalues." S2: "For the real symmetric matrix A, the theorem gives real eigenvalues." | Both can pass if the declared conditions are met; announcement/input does not require proving the theorem here |
| Promise without content | Knows matrices. S1: "A theorem about matrices will be proved below." S2: "By this theorem, A is invertible." | S2 fails: theorem content and conditions are not supplied |
| Hidden optional definition | Main route S1: "The tooltip defines r." S2: "Therefore r vanishes at equilibrium." Tooltip alone defines r and its dynamics. | Main route fails when the needed meaning and mechanism require opening hidden material |
| Caption route | A caption can be read independently; its first sentence is "The same correction is shown in blue." | Fails without a locally identifiable correction and comparison; main-body knowledge is not presumed on an independent caption route |
| Clause ordering | No symbol baseline. "Therefore z vanishes; z is the difference between equal measured values." | First clause spends later-clause meaning; split at that use and flag it. Compare the self-contained form "The difference z between equal measured values vanishes." |
| Licensed expertise | Baseline explicitly licenses differentiation. "Differentiating f(x)=x² gives f′(x)=2x." | Pass; do not require reteaching differentiation |
| Changed revision | Reviewer has seen the later definition; author rewrites S1. | That reader cannot provide a new independent prefix verdict; start a fresh context |
| Guideline challenge | Adopted guideline forbids reusing one symbol for two different objects in the same scope; a new sentence assigns both an operator and a scalar to Q. | Independent adversarial reviewer identifies the exact conflict; defining both objects does not excuse it |

The fixtures test editorial decisions, not universal claims about how humans
read. The coordinator must adjudicate findings against the specified baseline,
genre and guidelines. Keep reviewer/tool limits explicit in evidence.
