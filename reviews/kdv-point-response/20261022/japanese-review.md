# Japanese wording review

- Input: `candidate.md`
- Input SHA256: `6efcdfd1b31263b405e134093364fa33d2f5b25c56994855ea13e7ad3a97ac27`
- Read range: lines 1–55; unread: none.
- Perspective: Japanese scholarly wording and disciplinary naming only. This report does not assess scientific correctness or reader-order/derivation sufficiency.
- Coverage: `japanese-coverage.json` maps all 11 repeated inventory surfaces, the heading, and supplemental concepts missed by the scanner; each occurrence is located. Manual sweep covered every assigned line.

## Decision

**Bounded PASS for Japanese wording and names in this excerpt.** I found no located Japanese wording defect requiring a change. The heading phrase `傾きの跳び` is a recognizable Japanese physics rendering for the slope discontinuity at a delta interaction: the project reader contract uses the same concept and fixes its sign as right-minus-left, while Kyoto University’s quantum-mechanics graduate exam calls the discontinuity’s value the slope’s 「とび」 (II-2A(1)). The heading’s `点ポテンシャル` also follows the project’s adopted name for the exact interaction used here. `デルタ関数ポテンシャル` is an attested alternative in Japanese course material; its presence does not make the project-adopted `点ポテンシャル` misleading.

The central terms `束縛状態`, `固有関数`, `確率密度`, `デルタ関数`, and `留数` are used with their standard referents made explicit by the accompanying eigenvalue equation, normalized integral, squared wavefunction, distribution term, and pole expression. The prose repetitions and cross-references are idiomatic and locally interpretable. The full evidence and occurrence partition are in `japanese-coverage.json`.

## Evidence and limits

- Project authorities: `note-apps/kdv/reader-contract.yaml` (audience terminology and point-potential/energy-response convention) and `reviews/kdv-glm/kdv.spec.md` (the same Delta is the derivative jump and point-potential strength).
- Independent Japanese physics usage for the heading phrase: Kyoto University, Graduate School entrance exam, 2022, Quantum Mechanics II-2A(1), which explicitly pairs a delta-function-type attractive potential with a continuous wavefunction and a slope 「とび」.
- Corroborating terminology usage: Nagoya University OpenCourseWare, “束縛状態: デルタ関数ポテンシャル,” §4.6.
- This is a wording-only judgment. Source claims and the perturbation derivation were not independently checked. The exact preference of `点ポテンシャル` over `デルタ関数ポテンシャル` is resolved here by the explicit project convention, not by a claim that it is the only Japanese usage.

## Recheck binding

The final reviewed source remains the candidate identified by the SHA256 above. No manuscript edits were made. Coverage validation is recorded separately.

Snapshot binding: only the final empty line was removed after review; all prose, equations and occurrence coordinates are identical.
