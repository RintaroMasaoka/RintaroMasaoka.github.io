# Audience Artifact Schema

Use this schema for Manim audience-state contracts and reviews. Keep planned
semantic obligations in the contract and observed evidence in reviewer-owned
records.

## Artifact Layout

Use compact mode for a short clip or page:

```text
runs/<task>/audience/
├── contract.yaml
├── user_language.yaml
├── model_reconstruction.yaml
├── reconstruction_review.yaml
├── contract.lock.json
├── review_bundle.lock.json
├── baseline_projection.yaml
├── cold_packet.index.json
├── cold_packets/
│   └── cp_<id>.packet.json
├── cold_review.yaml
├── cold_review.lock.json
├── warm_review.yaml
├── amendments.yaml
└── revisions/
    └── contract_<revision>.yaml
```

For a large page or deck, replace the compact review files with separate
`cold_review/checkpoint_<id>.yaml` and `warm_review/checkpoint_<id>.yaml` files,
plus a manifest and exact-byte lock for the complete cold set.

## Contract Lifecycle

Use `contract.yaml` as the current working contract. Revise it as discussion
with the user changes the intended audience, motivation, scope, explanation
depth, or allowed assumptions. When a revision is approved for implementation:

1. copy its exact content to `revisions/contract_<revision>.yaml`;
2. hash that immutable snapshot;
3. point `contract.lock.json` to the snapshot and hash;
4. make implementation and review cite that revision.

Do not overwrite an approved snapshot. A later user correction creates a new
revision; it does not retroactively change the meaning of an earlier render or
review.

## `contract.yaml` and Revision Snapshots

Before writing the contract, separate the evidence surface from the inferred
model:

```yaml
# user_language.yaml
expressions:
  - expression_id: <stable id>
    exact_text: <verbatim user expression>
    status: authoritative_name | required_quote | approved_project_term | provisional_wording
    authority_basis: <why exact wording must or need not survive>
    context: <where it occurred>
```

```yaml
# model_reconstruction.yaml
claims:
  - model_id: <stable id independent of user wording>
    referents: [<objects or states the claim is about>]
    relation_or_constraint: <what relates or constrains them>
    decision_boundary: <what case would be treated differently>
    observable_consequences: [<facts that would follow if this is right>]
    uncertainty: <remaining ambiguity or null>
    traces_to_expression_ids: [<ids>]
    adopted_surface_term: <authoritative/approved term or null>
```

The reconstruction reviewer first receives only `model_reconstruction.yaml`
and the independently authoritative source facts needed to interpret it. Pass
only if the reconstruction can guide a decision and distinguish a boundary
case without access to the user's phrasing. In the warm mapping, reveal
`user_language.yaml` and verify traceability. Lexical difference alone does not
prove independence; synonym substitution with unchanged compression fails.

```yaml
contract_id: <stable id>
revision: <integer or revision string>
scope:
  task_id: <task id>
  source_basis: [<paths or source ids>]
  page_ids: [<semantic page ids>]

delivery:
  mode: self_contained_visual | prerecorded_narration | live_presenter
  required_script: <path or null>
  required_audio: <path or null>
  timing_map: <path or null>
  optional_presenter_notes: <path or null>

baseline:
  target_viewer: <compact audience description>
  allowed_prerequisites:
    - id: <state id>
      proposition_or_mapping: <what may be used without redefinition>
      source_of_authority: <user/source/work order>
  forbidden_assumptions: [<items that must be introduced>]

motivation:
  opening_question_or_constraint: <why this argument begins>
  required_before_beat: <beat id>

ledger:
  - item_id: <stable id>
    item: <term, symbol, color, region, arrow, or convention>
    kind: term | symbol | color | region | primitive | convention
    usable_role: <object/relation/mapping supplied to viewer>
    first_introduction_beat: <beat id>
    delivery_channel: visual | animation | required_speech
    planned_evidence_obligation: <what must be perceptible>
    dependent_claim_ids: [<transition ids>]

transitions:
  - claim_id: <stable atomic id>
    checkpoint_id: <planned checkpoint id>
    consumes: [<baseline or prior claim ids>]
    observable_kind: identify | distinguish | map | predict | explain
    proposition_or_mapping: <specific audience-available result>
    local_why_now: <question or constraint this answers>
    planned_evidence_obligation: <what the audience-facing segment must supply>
    required_for_page: true | false

acceptance:
  required_claim_ids: [<claim ids>]
```

## `contract.lock.json`

```json
{
  "contract_id": "...",
  "revision": "...",
  "snapshot_path": "revisions/contract_<revision>.yaml",
  "contract_sha256": "...",
  "approved_at": "ISO-8601 timestamp",
  "approved_by": "contract reviewer id",
  "approved_by_role": "contract_reviewer",
  "parent_revision": null,
  "amendment_id": null
}
```

Bind only approved pre-code semantics here. Do not add observed frame or timecode
evidence to the contract.

## `review_bundle.lock.json`

```json
{
  "schema_version": "1",
  "bundle_revision": "...",
  "hash_algorithm": "sha256-exact-bytes",
  "contract_snapshot": {"path": "revisions/contract_<revision>.yaml", "sha256": "..."},
  "user_language": {"path": "user_language.yaml", "sha256": "..."},
  "model_reconstruction": {"path": "model_reconstruction.yaml", "sha256": "..."},
  "reconstruction_review": {"path": "reconstruction_review.yaml", "sha256": "..."},
  "checkpoint_manifest": {"path": "...", "sha256": "...", "schema_version": "..."},
  "required_script": {"path": "...", "sha256": "..."},
  "required_audio": null,
  "timing_map": {"path": "...", "sha256": "..."},
  "cold_packet_index": {"path": "cold_packet.index.json", "sha256": "...", "schema_version": "1"},
  "created_at": "ISO-8601 timestamp"
}
```

Use `null` only when the delivery mode does not use that channel. Optional
presenter notes are not audience evidence and do not belong in this lock.
Compute each SHA-256 over the exact bytes of the named file. Bind ordered render
segments through one versioned checkpoint manifest; do not use an ambiguous
directory hash.

## Cold Input Packet

Generate `baseline_projection.yaml` mechanically from only
`baseline.allowed_prerequisites`. Present the opening motivation through the
checkpoint-1 audience-facing segment, not through the baseline projection. Do
not include planned transition IDs, ledger introduction targets, source
material, or future information.

Bind ordering and packet hashes in the warm-side `cold_packet.index.json`:

```json
{
  "schema_version": "1",
  "packet_revision": "...",
  "contract_sha256": "...",
  "ordered_packets": [
    {
      "checkpoint_id": "cp01",
      "packet_path": "cold_packets/cp_01.packet.json",
      "packet_sha256": "..."
    }
  ]
}
```

Never disclose the index to the cold reviewer. Use an independent dispatcher to
provide one packet at a time. A per-checkpoint packet has this form:

```json
{
  "schema_version": "1",
  "packet_revision": "...",
  "checkpoint_id": "cp01",
  "delivery_mode": "self_contained_visual|prerecorded_narration|live_presenter",
  "baseline_projection": {"path": "baseline_projection.yaml", "sha256": "..."},
  "render_segment": {"path": "...", "sha256": "...", "time_range": "..."},
  "speech_slice": null
}
```

Include `baseline_projection` only for checkpoint 1; use `null` later. For
`self_contained_visual`, keep `speech_slice` null. For
`prerecorded_narration`, create a checkpoint-specific audio slice and bind its
path and hash. For `live_presenter`, create a checkpoint-specific required-script
excerpt and bind its path and hash. Do not give the cold reviewer the full audio,
full script, master index, or future packet paths.

During warm comparison, verify that the baseline projection exactly matches
`baseline.allowed_prerequisites`, every packet hash matches the master index,
and the master index matches the review-bundle lock.

## Cold Reviewer Record

```yaml
checkpoint_id: <stable id>
contract_sha256: <reviewed contract hash>
bundle_revision: <reviewed bundle revision>
cold_sweep_id: <fresh reviewer run id>
cold_reviewer_id: <reviewer id distinct from contract approver>
incoming_observed_state:
  - state_id: <cold-observed id>
    proposition_or_mapping: <actual audience-available content>

audience_visible_evidence:
  render_path: <frame or video path>
  time_range: <timestamp or segment>
  required_speech_evidence: <script lines or audio interval, or null>

cold_observations:
  established:
    - observed_state_id: <id>
      proposition_or_mapping: <specific observed content>
      evidence: <exact anchor>
  unsupported:
    - finding_id: <id>
      category: undefined_term | undefined_convention | undefined_motivation | reasoning_leap
      first_unsupported_item_or_inference: <specific item>
      available_audience_state: [<state ids and propositions>]
      evidence: <exact frame/time/script anchor>
      why_blocking: <short reason>
      smallest_missing_bridge: <diagnosis, not a rewrite>

cold_verdict: cold-pass | cold-needs-repair | not-blind
```

After the complete sequential sweep, seal the exact bytes of the cold output:

```json
{
  "schema_version": "1",
  "hash_algorithm": "sha256-exact-bytes",
  "cold_sweep_id": "...",
  "cold_reviewer_id": "...",
  "cold_review": {"path": "cold_review.yaml", "sha256": "..."},
  "sealed_at": "ISO-8601 timestamp"
}
```

Do not modify the cold record after creating this lock.

## Warm Mapping Record

Write warm output to a separate artifact that cites the sealed cold hash:

```yaml
contract_sha256: <reviewed contract hash>
bundle_revision: <reviewed bundle revision>
cold_review_lock: <path>
cold_review_sha256: <sealed cold review hash>

warm_mapping:
  - claim_id: <planned atomic transition id>
    status: established | not-established | not-observed
    cold_observed_state_ids: [<ids>]
    affected_consumer_claim_ids: [<ids>]
    route: manim:argument-clip-requirements | manim:manim-visual-planner | manim:manim-clip-implementer | manim:manim-visual-review | manim:manim-math-derivation
    decision: keep | repair | reroute

verdict: pass | needs-repair | conditional-on-delivery | not-blind
```

Use `conditional-on-delivery` only for live-presenter mode when every required
claim is otherwise established against the bound required-script revision.

## `amendments.yaml`

```yaml
amendments:
  - amendment_id: <stable id>
    authority: user_direction | reviewer_finding | implementation_discovery
    parent_contract_sha256: <old hash>
    reason: <why semantics changed>
    changed_fields: [<field paths>]
    affected_claim_ids: [<directly affected ids>]
    invalidated_dependency_closure: [<transitive consumer ids>]
    new_contract_sha256: <new approved hash>
    approved_by: <reviewer id>
    approved_at: <timestamp>
```

After a repair, replay a continuous checkpoint sequence sufficient to rebuild
the audience state, not only a disconnected list of dependency consumers.
