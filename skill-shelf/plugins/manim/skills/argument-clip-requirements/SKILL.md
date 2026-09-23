---
name: argument-clip-requirements
description: "Define a work order for converting a small source argument or reusable visual unit into a Manim clip or asset bundle. Use when the task needs requirements, scope, source basis, viewer baseline, term/symbol definitions, visualization obligations, artifact plan, temporal reveal plan, allowed transformations, must-show items, forbidden additions, review criteria, or success tests before Manim implementation."
---

# Argument Clip Requirements

Use this skill to turn a source discussion into a work order for a Manim implementer. Specify semantic composition intent rather than numeric page geometry. The implementer chooses grouping, hierarchy, relations, and beats; the registered layout runtime computes scale, coordinates, spacing, and placement.

When the work order includes a spatial or topological claim or a visual that
exposes coordinates or a data-to-position mapping, read
`../manim-asset-system/references/guarantee-integrity-contract.md` and preserve
its per-claim guarantee records and reference-system ownership contract in the
work order.

## Work Order Fields

Produce a compact work order with:

- `clip_id`: stable short id.
- `source`: format, location, verbatim text, verbatim equations, existing figures.
- `objective`: core claim, viewer should understand, must-show items, may-omit items.
- `viewer_contract`: a compact reference/projection of the durable audience
  contract revision, not a second authoritative copy.
- `audience_artifact_package`: durable working contract, approved revision lock,
  delivery mode, atomic audience-state transitions, introduction ledger,
  dependency graph, and review artifact paths required by
  `$manim:manim-audience-state-review`.
- `visualization_obligations`: equations, terms, relations, transformations, or diagrams that require visual representation beyond being displayed as text.
- `fidelity_constraints`: source-derived facts only, no unsupported examples, no analogies unless explicitly allowed.
- `allowed_transformations`: readable rephrasing, dense-equation splitting, equivalent derivation expansion, schematic diagram from source, numerical example only when source supplies parameters or the user asks.
- `numerical_visual_contract`: when numerical computation appears, what is computed, what is visible while it changes, what may be precomputed, and why the visual is not just a pasted result.
- `artifact_plan`: whether this is a standalone clip or a reusable paper asset, target paths, preview types, and files that should exist after implementation.
- `asset_reuse_contract`: source-object classes, accepted definitions, supported
  claims, structural signatures, class-specific authority contracts, concept
  identities, registry candidates, selected builders, convention IDs, variants,
  appearance-substitution gates, and any justified one-off code required by
  `$manim:manim-asset-system`.
- `temporal_plan`: the intended reveal order, persistent objects, objects that should be removed, and the maximum simultaneous focal items.
- `layout_intent`: semantic containment, fill/fit behavior, alignment, distribution,
  grouping, and anchors. Numeric scale, canvas coordinates, margins, gaps, and
  font sizes belong to registered runtime or style policy unless an intrinsic
  coordinate system is part of the source object.
- `screenshot_review_plan`: checkpoint frames that must be inspected, the adversarial questions each frame is meant to answer, and the required geometry and visual-primitive audits for every scene/page checkpoint.
- `spatial_relation_contract`: when a mathematical diagram depends on
  incidence or attachment, containment, intersection, tangency, closure, connectivity,
  equality or shared identity, shared origin, on-surface membership, separation
  or clearance, or crossing order, list the relations, mathematical owners,
  derivations, degree-of-freedom audit, preservation arguments, animation
  closure, and a separate guarantee record for each claim. Numerical checks do
  not establish arbitrary constructive correctness.
- `reference_system_contracts`: for every rendered coordinate panel, inset, or
  projection, declare its view instance, mathematical domain, single owner,
  owner-native components, external semantic dependents, conversion API,
  allowed whole-view transforms, and coordinate/regression checks. Reusable
  assets project these records from `asset_registry.yaml`; legitimate one-offs
  keep them in the work order.
- `implementation_constraints`: target duration, aspect ratio, voiceover on/off, required project helpers, style constraints.
- `verification_requirements`: render, frame bounds, required content, no new claims, derivation equivalence or flag, readability, density.
- `open_questions`: only questions that block implementation or fidelity.

## Viewer Contract Rules

- Treat user expressions as evidence, not ready-made ontology. Before adopting
  user wording as an objective, concept, motivation, visual label, or review
  criterion, classify it as authoritative wording, approved project vocabulary,
  or provisional shorthand. Preserve the exact expression separately.
- Independently reconstruct the referents, relations, constraints, uncertainty,
  and at least one discriminating consequence. A synonymized restatement is not
  a reconstruction. If the inferred model cannot decide a concrete case without
  the original phrase, return to discussion rather than laundering the phrase
  into the work order.
- Reuse exact wording when fidelity requires it: source quotations, proper
  names, mathematical notation, explicitly requested on-screen labels, and
  terms the user has approved after their operational meaning is recorded.
- Define the intended viewer baseline for the clip. Use a compact baseline such as "knows basic linear algebra and Dirac notation" rather than an imagined general audience.
- Treat the audience contract as a working document during discussion with the
  user. Incorporate user-directed changes to audience, motivation, scope, and
  explanation depth as legitimate contract revisions. Do not freeze the working
  file; preserve and lock the exact revision used when implementation starts.
- Do not rely on a term, symbol, operator, color, arrow, region, or visual role before it has been introduced in the clip or listed as a baseline prerequisite.
- A source term can stay technical, but the clip must give the viewer a usable role for it: what object it names, what relation it participates in, or what part of the equation or diagram it controls.
- A displayed equation is not automatically a definition. If the clip depends on a symbol inside it, add that symbol to the term/symbol inventory with its source basis and visual role.
- If a term or symbol cannot be defined from source without adding unsupported explanation, flag it as an open question or mark it as a prerequisite. Do not invent a definition.

## Audience Artifact Rules

- Create the durable package under `runs/<task>/audience/`; use `tmp/` only for
  drafts that cannot authorize implementation.
- Follow `$manim:manim-audience-state-review` and its artifact schema. Keep the current
  working contract separate from immutable approved revision snapshots.
- Before code, specify delivery mode, baseline propositions, opening motivation,
  atomic transition claims, claim dependencies, required page claims, and every
  term/symbol/visual-convention introduction with a usable role and planned
  evidence obligation.
- Do not put observed frame paths, timecodes, or review verdicts into the
  pre-code contract. Those belong to reviewer-owned records after rendering.
- Require independent approval of the exact contract revision and hash before
  implementation. A later user correction creates a new valid revision and
  invalidates the consumers of the old revision; it is not a reason to rewrite
  old review history.
- Derive any compact `viewer_contract` fields in the work order from the current
  audience contract. After approval, record its revision and hash; if the two
  surfaces differ, the durable audience contract wins and the work order must be
  regenerated before implementation.

## Visualization Obligation Rules

Before planning new visual surfaces, use `$manim:manim-asset-system` to describe each
`concept_id` independently of appearance and inspect the asset and convention
registry roots resolved from the project adapter, plus public exports and
existing consumers. Use `paper_assets/asset_registry.yaml` and
`paper_assets/convention_registry.yaml` only when the project explicitly adopts
that conventional fallback. Choose `reuse`, `parameterize`,
`new_asset`, or `justified_one_off`. Treat scale, orientation, density, labels,
and local layout as parameters or variants unless a semantic invariant changes.
Keep the work-order reuse contract a projection of the project registries; the
registries remain authoritative when they differ.

For every asset whose disposition is `parameterize` or `new_asset`, define a
pre-code `implementation_work_order` inside that asset requirement. It must name
the asset id, public inputs and outputs, variants, semantic-part API, consumers,
target package paths, preview cases, and acceptance checks. This record specifies
work; it must not contain or imply a post-code completion verdict.

Keep post-code `asset_acceptance_records` separate from the work order. The
verifier owns their verdict and binds it to the artifact revision, implementer
identity, verifier identity, independently checked import/registry/render
evidence, and check results. Paths or prose supplied by a planner or implementer
cannot set an asset to `implemented`.

- For each central equation or claim, state what visual work it must do: term grouping, correspondence, transformation, dependency, geometric structure, plot behavior, or source-implied diagram.
- Do not satisfy a visualization obligation by only writing the equation on screen. At least one of its roles, relations, transformations, or dependencies must be visually inspectable.
- If an equation is shown only as source authority and not visualized, say so explicitly and keep it out of the central visualization obligations.
- Prefer source-derived representations. Do not add analogies, examples, or intuition pumps unless allowed by the work order.

## Numerical Computation Rules

- Treat numerical computation as a visual process only when the viewer can inspect the changing quantity, sampled object, measured value, approximation, convergence, or parameter dependence on screen. A final numeric answer by itself does not satisfy a visualization obligation.
- Distinguish two cases in the work order:
  - `animated_numerical_process`: allowed when the clip will show a value, sample set, curve, iteration, approximation, or measurement updating over time with source/user-supplied parameters.
  - `precomputed_result_label`: allowed only as an annotation, endpoint, check, or source quotation; it must not be the central visual evidence for the claim.
- If the source or user does not supply parameters, formulas, data, or an explicit request for a numerical example, flag the gap instead of inventing a calculation.
- If an offline computation is needed for performance, require the implementer to expose the visual meaning of the computed data: axes, samples, iteration states, color/position encoding, convergence trace, or other inspectable mapping.
- Do not let "numerical example" become a shortcut for adding an unsupported claim. The work order must state the source basis, parameter choice, visual variable, and whether the result is illustrative, a check, or part of the argument.
- Do not pair `mode: "precomputed_result_label"` with a central argument role. A precomputed label can annotate or check a visual process, but the argument step itself must be carried by an inspectable visual process or by source authority.

## Reference-System Rules

- Create one contract per rendered view instance, not per abstract mathematical
  domain. Multiple panels, insets, or projections may share one domain while
  using distinct declared model-to-scene maps.
- Separate owner-native components such as axes, ticks, and labels from external
  semantic dependents such as grids, marks, curves, anchors, and regions. The
  former share the owner's configuration; the latter use its one public
  conversion path.
- Permit page layout and camera transforms only as whole-view operations after
  ownership is established. Pure decoration is outside the contract only in a
  registered decoration or chrome builder; it does not authorize absolute
  positioning in consumer scenes and joins the contract if it encodes a value
  or claims attachment to semantic geometry.
- Require model-coordinate checks at meaningful declared values, unit/aspect
  checks, and rendered inspection. These are regression evidence; they do not
  replace construction from the shared owner.

## Scope Rules

- Prefer one core claim.
- Prefer 15-90 seconds.
- Keep only source needed for this clip.
- Flag scope creep instead of silently making a long scene.
- If the source contains multiple claims, propose separate clip ids.
- If the source contains reusable diagrams, formula blocks, circuit parts, plot components, or named visual states, define asset ids rather than forcing everything into one scene mp4.
- A final composition mp4 may be requested later, but do not make it the only artifact unless the work is genuinely a one-off clip.

## Temporal Display Rules

- Prefer staged revelation: one new claim, equation group, or visual relation per beat.
- Keep only intentional persistent objects on screen; remove stale definitions, labels, or helper marks before introducing a new focal relation.
- Keep the simultaneous focal set small enough to inspect at low-quality preview. If the clip needs more than about 3-7 major objects at once, split the scope or move reusable pieces into assets.
- Do not satisfy `must_show` by placing all required text and equations on screen at the beginning. Required items should appear when the argument needs them.

## Screenshot Review Rules

- Plan screenshot checkpoints before implementation so screenshots are evidence for specific risks, not decorative proof that a render happened.
- Require at least these checkpoint types when applicable: first meaningful frame, each beat's densest stable frame, before/after a central transformation, first use of each new visual convention, any numerical-process frame, and the final claim frame.
- For each checkpoint, state the adversarial question it should answer: what a skeptical viewer could misread, what source claim might be unsupported, what object could be clipped or too small, what relation is not visually forced, or what stale object could distract from the current claim.
- Every scene/page checkpoint must include a geometry audit question. Assume misalignment and unintended overlap are likely until checked: object edges, labels, arrows, connectors, braces, highlights, axes, legends, and grouped mobjects must be inspected for accidental contact, merge, occlusion, or wrong target association.
- Every scene/page checkpoint must also include a visual-primitive audit when primitives carry meaning: arrows, lines, braces, highlights, markers, axes, legends, color swatches, and motion paths must have the right direction, endpoints, rendered weight for their registered importance role, layering, and semantic role. Do not overfit this to arrows; any primitive that encodes relation, emphasis, order, or measurement can be wrong even when it is in-frame and non-overlapping.
- When spatial relations carry mathematical meaning, require pairwise predicates
  and tolerances for crossing, tangency, positive-clearance separation,
  containment, and attachment, plus intersection count or order where relevant.
  A screenshot is supporting evidence, not the relation guarantee.
- Require the work order to state, for each relation, its domain, assumptions,
  exact or approximate status and error bound, construction basis,
  implementation assurance, regression evidence, visual evidence, and permitted
  wording. Do not let source preservation, a self-test, or a screenshot stand in
  for a different evidence axis or independent acceptance authority.
- Reserve structural-claim decisions for a reviewer whose identity differs from
  the implementer; the work order may request wording but cannot pre-approve it.
- Give every spatial or topological component of `objective.core_claim` a
  `relation_id` and list it in `objective.central_relation_ids`. Artifact
  acceptance depends on that set by definition; the implementer cannot weaken
  criticality with a per-relation boolean. An empty list is valid only when the
  core claim contains no spatial or topological assertion, with that decision
  recorded for review.
- Do not create, request, inspect, submit, or cite a contact sheet, gallery, montage, or batched screenshot artifact for verification. Fine layout and label defects require page-by-page or checkpoint-by-checkpoint inspection at full resolution, using the individual frame or mp4 segment directly.
- A screenshot checklist must produce repair/no-repair decisions. If no concrete decision is recorded, the screenshot pass did not happen.

## Transformation Policy

Mark each transformation as one of:

- `verbatim`: displayed exactly from source.
- `formatting`: line break, grouping, or symbol spacing only.
- `meaning_preserving_rephrase`: wording changed for readability without adding content.
- `equivalent_derivation`: intermediate algebraic step added.
- `source_implied_visual`: diagram or visual relation directly implied by source.
- `unsupported`: not allowed unless user approves.

## Output Template

```json
{
  "clip_id": "clip_001",
  "source": {
    "format": "tex|markdown|note",
    "location": "",
    "text_verbatim": "",
    "equations_verbatim": [],
    "figures": []
  },
  "objective": {
    "core_claim": "",
    "central_relation_ids": [],
    "viewer_should_understand": [],
    "must_show": [],
    "may_omit": [],
    "must_not_add": []
  },
  "viewer_contract": {
    "audience_contract_path": "runs/clip_001/audience/contract.yaml",
    "approved_revision": null,
    "contract_sha256": null,
    "target_viewer_projection": "",
    "authoritative": false
  },
  "audience_artifact_package": {
    "working_contract": "runs/clip_001/audience/contract.yaml",
    "approved_revision_dir": "runs/clip_001/audience/revisions",
    "contract_lock": "runs/clip_001/audience/contract.lock.json",
    "review_bundle_lock": "runs/clip_001/audience/review_bundle.lock.json",
    "cold_packet_index": "runs/clip_001/audience/cold_packet.index.json",
    "cold_packet_dir": "runs/clip_001/audience/cold_packets",
    "cold_review": "runs/clip_001/audience/cold_review.yaml",
    "cold_review_lock": "runs/clip_001/audience/cold_review.lock.json",
    "warm_review": "runs/clip_001/audience/warm_review.yaml",
    "amendments": "runs/clip_001/audience/amendments.yaml",
    "user_language": "runs/clip_001/audience/user_language.yaml",
    "model_reconstruction": "runs/clip_001/audience/model_reconstruction.yaml",
    "reconstruction_review": "runs/clip_001/audience/reconstruction_review.yaml",
    "implementation_requires_approved_hash": true
  },
  "asset_reuse_contract": {
    "registry_roots": {
      "source": "project_adapter|explicit_conventional_fallback",
      "asset_registry": "",
      "convention_registry": ""
    },
    "requirements": [
      {
        "concept_id": "",
        "source_contract": {
          "source_object_class": "rule_governed|source_geometry|visual_convention",
          "accepted_definition": "",
          "supported_claims": [],
          "schematic_scope": "not-applicable"
        },
        "structural_signature": {
          "semantic_parts": [],
          "relations": [],
          "state_transitions": [],
          "admissible_operations": [],
          "data_to_visual_mapping": []
        },
        "class_specific_contract": {
          "kind": "rule_governed|source_geometry|visual_convention",
          "details": "complete matching registry or one-off contract; empty contract is invalid"
        },
        "registry_candidates": [],
        "disposition": "reuse|parameterize|new_asset|justified_one_off",
        "selected_asset_id": null,
        "selected_convention_ids": [],
        "variant_id": null,
        "rationale": "",
        "implementation_work_order": {
          "asset_id": "",
          "public_inputs": [],
          "public_outputs": [],
          "semantic_part_api": [],
          "variants": [],
          "consumers": [],
          "target_package_paths": [],
          "preview_cases": [],
          "acceptance_checks": []
        },
        "gate": {
          "source_classification": "pass|fail",
          "defining_structure_fidelity": "pass|fail|not_applicable",
          "appearance_substitution": "pass|fail",
          "schematic_scope": "pass|fail|not_applicable",
          "duplicate_identity": "pass|fail",
          "local_hardcoded_semantics": "pass|fail",
          "convention_consistency": "pass|fail",
          "public_api_and_preview": "pass|fail",
          "reference_system_ownership": "pass|fail|not_applicable",
          "false_abstraction": "pass|fail",
          "verdict": "pass|needs-source-classification|needs-model|needs-behavioral-fidelity|needs-schematic-scope|needs-extraction|needs-convention-repair|needs-constructive-geometry|needs-registry-entry"
        }
      }
    ]
  },
  "visualization_obligations": [
    {
      "source_item": "",
      "why_visualize": "",
      "required_visual_role": "term_grouping|correspondence|transformation|dependency|diagram|plot|source_authority_only",
      "minimum_visual_evidence": "",
      "may_remain_text_only": false
    }
  ],
  "allowed_transformations": {
    "rephrase_for_readability": true,
    "split_dense_equation": true,
    "add_equivalent_derivation_steps": "flag_if_uncertain",
    "create_schematic_diagram_from_source": "only_if_source_implies_it",
    "run_numerical_example": "only_if_source_or_user_supplies_parameters"
  },
  "numerical_visual_contract": {
    "mode": "none|animated_numerical_process|precomputed_result_label",
    "source_basis": "",
    "parameters_or_data": [],
    "computed_quantity": "",
    "visible_process": "",
    "visual_encoding": "",
    "result_role": "not_used|annotation|endpoint|check|process_visualized_argument_step|source_authority",
    "precomputed_parts_allowed": [],
    "why_not_result_only": ""
  },
  "artifact_plan": {
    "artifact_type": "standalone_clip|paper_asset|composition_preview",
    "paper_id": "",
    "clip_id": "clip_001",
    "asset_ids": [],
    "asset_acceptance_record_paths": [],
    "target_paths": {
      "work_order": "runs/clip_001/work_order.json",
      "source_to_scene": "runs/clip_001/source_to_scene.md",
      "verification": "runs/clip_001/verification.md",
      "audience_contract": "runs/clip_001/audience/contract.yaml",
      "audience_cold_review": "runs/clip_001/audience/cold_review.yaml",
      "audience_warm_review": "runs/clip_001/audience/warm_review.yaml",
      "scene": "scenes/clip_001.py",
      "asset_dir": ""
    },
    "preview_outputs": [
      {
        "kind": "low_quality_mp4",
        "purpose": "standalone_clip|asset_preview|composition_preview",
        "path": ""
      }
    ]
  },
  "temporal_plan": {
    "beats": [
      {
        "name": "",
        "new_information": [],
        "persistent_objects": [],
        "remove_before_next": []
      }
    ],
    "max_simultaneous_focal_items": 5,
    "items_never_shown_simultaneously": []
  },
  "layout_intent": {
    "fit": "contain|fill",
    "horizontal": "start|center|end",
    "vertical": "start|center|end",
    "distribution": "row|column|grid|overlay",
    "gap_role": "none|small|medium|large",
    "typography_roles": [],
    "pace_roles": [],
    "preserve_anchors": [],
    "intrinsic_geometry_exceptions": []
  },
  "screenshot_review_plan": {
    "checkpoint_frames": [
      {
        "beat": "",
        "timing": "first_meaningful_frame|densest_stable_frame|before_transform|after_transform|new_convention_first_use|numerical_process_frame|final_claim_frame",
        "must_be_visible": [],
        "geometry_audit": [
          "alignment",
          "unintended_overlap",
          "near_touching_or_false_connection",
          "label_merge_or_occlusion",
          "arrow_connector_target",
          "layout_shift_from_neighbor_checkpoint"
        ],
        "visual_primitive_audit": [
          "direction_matches_relation",
          "endpoints_or_targets_correct",
          "relative_scale_and_stroke_weight_reasonable",
          "marker_or_head_size_not_dominating",
          "layering_does_not_hide_meaning",
          "semantic_role_matches_legend_or_prior_use"
        ],
        "adversarial_questions": [],
        "known_risks": [],
        "acceptance_basis": "full_resolution_frame|mp4_segment"
      }
    ],
    "batched_screenshot_artifacts_allowed": false
  },
  "spatial_relation_contract": {
    "relations": [
      {
        "relation_id": "",
        "claim": {
          "predicate": "incidence_or_attachment|containment|intersection|tangency|closure|connectivity|equality_or_shared_identity|shared_origin|on_surface|separation_or_clearance|crossing_order|other",
          "subjects": [],
          "domain": "",
          "assumptions": [],
          "status": "exact|approximate",
          "error_bound": null
        },
        "mathematical_owner": "",
        "derivation": "restriction|boundary|image|preimage|intersection|shared_incidence|transformed_copy|clipping|constraint_solution",
        "removed_independent_freedoms": [],
        "preservation_argument": "",
        "animation_closure": [],
        "construction_basis": "analytic_derivation|exact_combinatorial|numerical_constraint_with_bound|source_path_preservation|heuristic_placement|unknown",
        "implementation_assurance": {
          "trace": "",
          "trusted_gaps": []
        },
        "regression_evidence": [],
        "visual_evidence": [],
        "proposed_wording": "",
        "structural_claim_review": {
          "status": "pending",
          "reviewer_id": "",
          "implementer_id": "",
          "artifact_revision": "",
          "reviewed_basis": [],
          "trusted_gaps": [],
          "approved_wording": ""
        }
      }
    ],
    "unresolved_independent_degrees_of_freedom": []
  },
  "reference_system_contracts": [
    {
      "reference_system_id": "",
      "contract_revision": "",
      "view_instance_id": "",
      "coordinate_domain": "",
      "owner": "",
      "owner_native_components": [],
      "external_semantic_dependents": [],
      "conversion_api": "",
      "allowed_post_transforms": [],
      "checks": []
    }
  ],
  "implementation_constraints": {
    "target_duration_sec": [15, 90],
    "aspect_ratio": "16:9",
    "voiceover": false,
    "use_existing_frame_check": true
  },
  "verification_requirements": [
    "renders_low_quality",
    "no_frame_overflow",
    "all_must_show_items_visible",
    "no_new_claims",
    "derivation_steps_equivalent_or_flagged",
    "text_readable",
    "not_visually_overcrowded",
    "every_scene_or_page_checkpoint_has_geometry_audit",
    "meaningful_visual_primitives_have_direction_scale_and_semantic_audit",
    "must_show_items_are_staged_not_dumped",
    "terms_and_symbols_defined_before_use_or_marked_prerequisite",
    "audience_contract_revision_approved_before_implementation",
    "required_atomic_audience_claims_established_by_blind_review",
    "asset_and_convention_registry_checked_before_implementation",
    "no_duplicate_semantic_assets_or_local_hardcoded_conventions",
    "guarantee_claims_do_not_exceed_construction_evidence",
    "spatial_relations_have_owner_derivation_and_degree_of_freedom_audit",
    "coordinate_views_have_single_owner_and_no_independent_scene_projection",
    "central_equations_have_visual_roles_beyond_text_display",
    "numerical_results_are_process_visualized_or_marked_as_labels",
    "checkpoint_screenshots_reviewed_with_adversarial_findings",
    "artifact_bundle_complete"
  ],
  "open_questions": []
}
```
