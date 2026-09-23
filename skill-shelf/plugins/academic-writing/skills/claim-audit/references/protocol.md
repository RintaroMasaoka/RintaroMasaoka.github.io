# Evidence and dispatch protocol

## Freeze and enumerate

Copy the audited range into an immutable UTF-8 snapshot. Record its SHA-256,
original path/revision and original line offset. All spans below are inclusive,
one-based **snapshot line numbers**. Preserve source order and `<details>` /
figure visibility. A later explanation can establish that a proof exists without
making its premises available at the earlier use.

Inventory one independently falsifiable assertion per claim. Include equalities,
implications, inequalities, definitions with existence/uniqueness obligations,
physical identifications, applicability of approximations, claims in examples,
and claims communicated by figures. A displayed chain may contain several
claims; repeated occurrences need separate availability/role decisions even if
they share a warrant. Introduce inferred transition claims where the prose
moves between representations or regimes without stating the needed relation.
Do not convert a paragraph into one indivisible "checked" claim.

Every nonblank source line must be covered by a claim span or an explicit
nonclaim exclusion (heading, layout, bibliographic listing, etc.). Overlapping
claim spans are legitimate for compound sentences. Exclusions cannot overlap
claim spans. Captions and image links require assessment of the visual content;
reading only alt text cannot pass an unseen mathematical figure. A reference
list alone is not a set of unverified mathematical claims.

An inventory reviewer, given the raw source and reader contract with no claim
verdicts, checks missed/merged assertions, unjustified exclusions and omitted
inferences. It may use the inventory after first enumerating the source's
assertions. Mechanical line coverage cannot discover a second claim hidden
inside an already-covered line. Record this decision as `coverage_review`.

## License premises without circularity

For each target distinguish:

- Established reader knowledge, with its contractual basis.
- Earlier document claims, referenced by claim ID and checked at their actual
  presentation point.
- External inputs, with precise source statement and applicable hypotheses.
- What this passage is meant to teach, which cannot be licensed as prior knowledge.

Do not trace proofs indefinitely beyond licensed foundations. An external
result still needs a checked statement, applicability and consequence. A core
learning mechanism cannot be declared external merely because its derivation
is hard. Source agreement and reader availability are separate facts.

Each claim gets three root checks. Use the full acceptance rules in
[Decision rules](decision-rules.md), not only the labels below:

| Dimension | Required evidence |
|---|---|
| `warrant` | Licensed premise → inference → exact conclusion and scope |
| `availability` | Next operation → needed relationship → where it is usable now |
| `role` | Prior capability → specific advance or retrieval → next use |

These are separate tasks, but their witnesses share the same reader contract.
For each prerequisite claim, an `edge` task checks the particular operation
carrying it into the conclusion, including conditions and conventions. Treat
its witness as a warrant for that inference. The list of premises is not the
operation. Split multiple unresolved decisions before dispatch.

Run the integration check in Decision rules before accepting the combined
verdict. Dispatch its conditional premise-license task when a warrant imports
an unlicensed relation from the material being inspected. Independence of
judgments does not excuse contradictory premises.

## Agent packet and response

Each worker receives this packet plus the common rule and its assigned
dimension from Decision rules. Do not compress away the required witness or
boundary case to reduce tokens; reduce the number of decisions in the batch:

```text
Target task ID and revision:
One assertion / one question:
Assigned dimension, copied decision rule and required witness:
Exact source span and necessary surrounding text:
Audience premises, with authority:
Candidate premises, each with its license (background / explicit task assumption / checked claim ID / assertion still under inspection):
Relevant source extracts, conventions and approximation regime:
Return pass / gap / unknown / split, a short evidence witness and locator.
Do not write replacement prose. Do not assume the target as a premise.
If split, give the distinct child questions and the inference joining them.
If unknown, name the specific missing input. Do not invent a verdict.
```

Prepare separate source-lookup or algebra tasks if discovery would turn a leaf
into open-ended research. A small packet must still contain the context needed
to answer honestly. An audit worker should not browse a full repository merely
to recover omitted context. Independent tasks can be batched with explicit IDs;
sequence tasks that consume others' results.

A pass includes a checkable witness: the short calculation, relevant quoted
hypothesis with locator, or precise reader-contract and source relation. A gap
identifies the failed inference and a counterexample or missing premise. Unknown
identifies unavailable evidence. None is an instruction to add paragraphs.

A split has children for the newly isolated questions and a **distinct join
check** for their sufficiency. Dispatch the join after child results. Child
results with a gap or unknown cannot justify an unconditional parent pass.
If subdivision does not reduce the unresolved reasoning, keep the leaf unknown
and record the capability/input needed to resolve it.

## Ledger schema

Use JSON. Object keys are unique IDs; the checker rejects duplicate JSON keys.
Project metadata such as reader-contract path, agent/model, token counts when
reported, original-source offset and adjudications may be added. No reader
contract or evidence is inferred merely from a JSON field's existence.

```json
{
  "source_sha256": "SHA256 of snapshot bytes",
  "claims": {
    "C1": {
      "span": [1, 2],
      "text": "One exact assertion",
      "kind": "equation",
      "requires": [],
      "checks": {"warrant": "T1", "availability": "T2", "role": "T3"},
      "edges": {}
    }
  },
  "exclusions": [{"span": [3, 3], "reason": "Blank-layout delimiter"}],
  "tasks": {
    "T1": {"question": "One decision?", "status": "pass", "evidence": "Witness and locator"},
    "T2": {"question": "One decision?", "status": "gap", "evidence": "Exact unsupported transition and locator"},
    "T3": {"question": "One decision?", "status": "unknown", "evidence": "Missing audience premise"},
    "TC": {"question": "Does the inventory account for every assertion and connection?", "status": "pass", "evidence": "Independent enumeration comparison and scope"}
  },
  "coverage_review": "TC"
}
```

For a prerequisite C1 of C2, set `C2.requires` to `["C1"]` and
`C2.edges` to `{"C1": "TE1"}`; TE1 is a separate single-question task.
License non-claim premises in the packet and audit evidence. Do not create fake
claim IDs to bypass absent reader knowledge. A task may be reused as warrant
for the same assertion, but availability/role/edge decisions concern their own
occurrences. Referenced tasks are the only ones that count as audited work.

Split representation:

```json
{"question": "Original decision?", "status": "split",
 "children": ["T4", "T5"], "join": "T6"}
```

T4, T5 and T6 are records in `tasks`. Children cannot include the parent or join.
Task and claim dependency cycles are invalid. `pass` and `gap` with evidence are
completed decisions; `unknown` is unresolved. A split is complete only when all
children and its join are complete. A split supports a pass only if all pass.
A claim is supported only when its own checks, edge checks and prerequisite
claims all pass. Missing check records are incomplete accounting, not gaps in
the document. After adjudication retain original worker output separately;
record reasons for amended decisions rather than erasing disagreement.

Run:

```sh
python3 <package>/skills/claim-audit/scripts/check_ledger.py snapshot.md ledger.json
```

Exit 0 means the ledger is well-formed, line coverage is complete, the semantic
inventory review passes, and every required decision is complete. Explicit gaps
in the document can coexist with exit 0. Exit 1 means incomplete accounting;
exit 2 means malformed ledger or changed source. The output reports gaps and
unknowns separately. It does not certify truth, inventory completeness, reader
comprehension or the honesty of an evidence witness.

A changed source hash requires a new snapshot and a ledger migration with a
recorded comparison. Rebind spans, re-enumerate changed text, and reopen affected
claims, consumers and join checks. Never update only the hash to preserve passes.

## Usage record

Keep a project-owned `runs.jsonl`, one record per dispatch: `agent_id`, `model`,
`reasoning_effort`, `task_ids`, `input_chars`, `output_chars`, `usage` (the exact
provider-reported fields, or null), and `usage_scope` (for example per-call or
cumulative-agent). Unknown character counts are null too. Record retries and
source-lookup calls. Do not sum cumulative counters as per-call costs. Character
counts can reveal packet bloat; they are not token counts or billing estimates.
Set budget thresholds only from user constraints or explicit runtime limits.

## Author access boundary

Audit and authoring have different allowed inputs. The author gets an export
containing source content, necessary primary sources, reader contract, learning
objective, and a short subject-level problem, e.g. "Explain how the state space
acquires a position representation." Do not export a compressed ledger, ordered
repair list or diagnostic labels. The author may reorganize or replace the
passage. Its output must stand as teaching prose independently of the audit.

Before dispatch verify both context isolation and data/tool access isolation:

- No inherited audit conversation, reviewer messages or diagnostic memory.
- A separate filesystem/mount/account or tool allowlist exposing only the author
  export; no access to the audit store, its parent paths, tool-history transcripts
  or coordination endpoints that reveal it.
- A non-sensitive sentinel in the audit store cannot be read through the author's
  available tools. Record the boundary mechanism and the result of this check.

A path instruction, separate directory, fresh task, worktree or `fork_turns:none`
alone is not access control. Do not claim strict isolation on that evidence.
If the environment cannot enforce the boundary, stop before authoring while
retaining completed audit work and the clean export. The user can explicitly
choose a weaker context-only arrangement; label it accurately if chosen.
