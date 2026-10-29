# Minimal records

`research/focus.md` is human-readable current memory, not a growing session log:

    # Current research
    Goal: ...
    Assumptions and scope: ...
    Current conclusion / live gap: ...
    Next check and distinguishing outcomes: ...
    Resource or stopping condition: ...
    Evidence: links to the owning notes/checks

`research_memory.py record --input JSON` accepts a check packet (paths are project-relative):

    {"claim_id":"c1", "target":"research/result.md",
     "method":"numerical", "scope":"sizes 4, 6, 8; beta=1",
     "outcome":"pass", "evidence":["research/data/run.json"],
     "command":"python3 research/code/check.py", "tool_version":"Python 3.x",
     "limitations":"Finite sizes only; no thermodynamic proof."}

Methods: analytic, ai_check, formal, symbolic, numerical, source, mechanical. For AI checks the script requires actual model and independence; for formal/symbolic/numerical checks it requires command/tool details and assumptions/limitations appropriate to the method. The script validates structural data and creates identity/timestamp/hash fields. The lead evaluates scientific sufficiency; no PASS implies universal correctness.

`attempt --input JSON` records a short evidence comparison, not a novelty score:

    {"question_id":"q1", "method":"finite-size experiment",
     "baseline":"The conjectured sign was unchecked at size 4",
     "result":"The tested instance has a negative sign",
     "assessment":"Excludes the conjecture for this instance if the numerical check is confirmed; no conclusion about the thermodynamic limit.",
     "witness":"research/data/run.json; precision and assumptions in research/result.md"}

`baseline` and `assessment` are nonempty text. An assessment may explicitly leave significance undecided. The witness supplies the evidence and its location; text validation cannot establish its sufficiency. Keep detailed reasoning in the owning note. Legacy `information_gain` booleans and `next_change` fields remain readable and append-compatible, but carry no automated decision authority; new records use the comparison above. `status` reports stale evidence and per-question counts/latest records for navigation only. It does not infer reassessment, scientific progress or a continuation decision from these records.

Optional `research/workflow.json` binds model tiers to locally available IDs and explicit resource limits. Keep names in that project configuration, not in reusable role definitions. Missing configuration is not a setup blocker; use available models under the core contract and report unselectable tiers honestly.
