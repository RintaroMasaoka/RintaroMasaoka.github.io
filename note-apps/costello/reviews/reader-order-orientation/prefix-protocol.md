# Prefix review execution

The coordinator can know the suffix; the independent reader cannot receive or
retrieve it before fixing each verdict. No file path to the manuscript, runner
session, full source, expected answer, or author's trace goes into the reader
packet. A shared UID and `0700` directory do not establish access isolation.
State the actual boundary and audit all reviewer tool calls. The instructions
below permit conversational replies only during replay. Discovery calls or a
suffix leak invalidate the run; start a new reader rather than asking it to
forget. Already-public domain knowledge is governed by the baseline, not the
model's personal memory of a paper.

## Coordinator preparation

Keep inputs, transcripts and state outside the skill package and manuscript.
Freeze a nonempty array of visible units with unique IDs and exact text, e.g.
`[{"id":"S1","text":"Let x denote the measured displacement."}]`.
The baseline is an array of specific licensed items with distinct IDs, e.g.
`[{"id":"B1","text":"The reader can use elementary algebra."}]`.
Use `[]` when no specific prior knowledge is licensed; do not invent it.
Include ordinary visible headings, captions and equations on the route. Split
at clause boundaries when one clause assumes something introduced later.
For excerpts, include the actual preceding context in the replay or explicitly
verified prefix facts; missing context cannot be certified by imagination.

From this skill directory:

```sh
python3 scripts/prefix_replay.py init --units-json UNITS.json --baseline-json BASELINE.json --state-dir NEW_SESSION
python3 scripts/prefix_replay.py context --state-dir NEW_SESSION
python3 scripts/prefix_replay.py reveal --state-dir NEW_SESSION
python3 scripts/prefix_replay.py record --state-dir NEW_SESSION --record-json REPLY.json
python3 scripts/prefix_replay.py status --state-dir NEW_SESSION
```

Each revised candidate needs new inputs and a new session. The utility freezes
input identity and rejects source drift. `reveal` emits only the current unit;
it cannot advance until a record is stored. `BLOCKED` or `UNVERIFIED` stops
that run. `status` returns `PASS` only for complete mechanical coverage; this
is not the final semantic or independent verdict.

## Initial reader prompt

Send the following with the actual baseline and relevant guidelines; no suffix
or example containing the target's later result:

> You are an independent adversarial reader. Read only the supplied baseline
> and text released so far. Make no filesystem, search, retrieval, thread-reading
> or other discovery tool calls. For each unit, first freeze what its wording
> requires; then challenge whether each need has a genuine license in the
> baseline, prior text or this introduction. Inspect notation, word meanings,
> presuppositions, contrasts, operation effects, claim status and relevance.
> Do not invent the author's intention or silently supply expert-only relations.
> New definitions, assumptions and determinate result announcements are allowed.
> A theorem may precede its proof, but it does not teach its unstated mechanism.
> Cite exact words and explain why they support this use. Record the first
> failure or uncertainty before receiving any more text. A later explanation
> must never change an earlier verdict. Separately record expression checks
> against supplied governing rules, including exact current spans, the rule,
> verdict and reason. A dependency pass cannot substitute for expression
> compliance. Return only the record below.

Send one `reveal` output at a time. The reader's JSON record is:

```json
{
  "unit_id": "S1",
  "verdict": "PASS",
  "requirements": [
    {"need": "identify x", "source_id": "CURRENT",
     "quote": "Let x denote the measured displacement.",
     "reason": "This sentence explicitly introduces the referent; no operation on x is yet required."}
  ],
  "missing": [],
  "introduced": ["x denotes the measured displacement"],
  "announced": [],
  "expression_checks": [
    {"span": "x", "rule": "Objects must be identifiable at use",
     "verdict": "PASS", "reason": "The sentence supplies x's referent before any dependent operation."}
  ],
  "reader_state": "x is identifiable; no equation or dynamics has been established."
}
```

Every PASS needs at least one requirement/witness, including a self-contained
new statement with `CURRENT`. Use baseline IDs or earlier unit IDs for prior
witnesses. A quote must be literally present in its source. Requirements list
all material dependencies, not only the easiest one. Keep stated results with
their epistemic status in `reader_state`; `introduced` is not automatic proof
or permission to use an unstated mechanism. Use `announced` for destinations
whose content or derivation remains unresolved. Record missing needs with
`BLOCKED`; missing context/evidence uses `UNVERIFIED`.

`expression_checks` covers the unit's consequential word, symbol, sentence-form
and implication choices against actual rules, grouping choices only when one
reason covers them. Each span quotes current text literally. Every PASS needs
nonempty expression coverage, and all expression checks must pass. A supported
violation or open required guideline check prevents overall PASS. The utility
checks record completeness, span provenance and verdict consistency; deciding
whether coverage is complete and the rule genuinely applies remains semantic.
Use the reader-order contract itself for an order-only assignment; include
actual governing notation/writing rules for the combined adversarial job.

The coordinator checks the meaning of every witness **before** storing the
record and revealing more text. If the quoted words do not license the use,
freeze that failure and end the run; do not improve the reader's explanation
and reuse its PASS. Exact-substring checks cannot judge semantic sufficiency.
Repair on the author side, then start a fresh reader/session. Do not send
author explanations back to persuade a failing reviewer.

A current-unit reply that explicitly contains a stopping verdict, unresolved
need or nonpassing expression check is failure evidence even if it incorrectly
labels its overall result PASS. The coordinator utility must preserve that
evidence and stop the session; it cannot be replaced with a revised all-PASS
reply. Unparseable JSON must also be preserved exactly and stop the session as
UNVERIFIED; do not guess its verdict or discard it to retry. Only a parseable
schema error without substantive stopping evidence can be corrected. Keep the
first stopping submission inspectable, then repair/restart with a fresh
candidate and reader.

## Evidence and limits

Retain outside the artifact: revision/input digest; route and total unit count;
baseline and guideline authority; clean-context delegation record; actual
boundary enforcement; each reveal followed by its reply and adjudication;
coverage; mechanical, semantic and independence verdicts. Check that no later
unit was released before its predecessor's record and that the reviewer made
no discovery call. The runner cannot inspect another agent's context or tool
log, detect omitted dependencies, or establish real reader comprehension.
No automated pass should be presented as proving those properties.
