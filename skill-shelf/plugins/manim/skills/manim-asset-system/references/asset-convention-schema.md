# Asset and Convention Registry Schema

Use project-level YAML registries so planners, implementers, deck composers, and
reviewers share the same semantic identities.

## Recommended Layout

```text
paper_assets/
├── asset_registry.yaml
├── convention_registry.yaml
├── common/
│   ├── __init__.py
│   └── <shared_asset>.py
└── <paper_id>/
    └── <asset_id>/
        ├── __init__.py
        ├── asset.yaml
        ├── mobjects.py
        └── scene_<asset_id>.py
```

Use `asset.yaml` as a package-local projection of the project registry, not a
competing source of truth. The project registry wins when they differ.

## `asset_registry.yaml`

```yaml
schema_version: 1
revision: <project revision>

assets:
  - asset_id: <stable kebab-case id>
    concept_id: <semantic identity independent of appearance>
    source_contract:
      source_object_class: rule_governed | source_geometry | visual_convention
      accepted_definition: <equations, transition rules, fixed source artifact, or visual role>
      supported_claims: [<claims this asset may support>]
      schematic_scope: <permitted qualitative claim or not-applicable>
    structural_signature:
      semantic_parts: [<parts independent of surface appearance>]
      relations: [<defining relations>]
      state_transitions: [<allowed transitions or not-applicable>]
      admissible_operations: [<operations identity must survive>]
      data_to_visual_mapping: [<authoritative state/source to projection mapping>]
    scope: common | paper
    paper_id: <paper id or null>
    source_basis: [<source paths or ids>]
    module: <import path>
    public_exports: [<builder or typed-group names>]
    class_specific_contract:
      kind: rule_governed
      module: <import path>
      public_exports: [<solver, generator, transform, or state API>]
      inputs: [<accepted model inputs>]
      state_type: <authoritative computed state>
      governing_rules: [<relations or transitions implemented>]
      method: analytic | symbolic | numerical | combinatorial | adapter
      validity_domain: <domain and assumptions>
      assurance_evidence: <derivation, exactness, invariants, provenance, bounds, convergence, or residuals appropriate to method>
    visual_projection:
      module: <import path>
      public_exports: [<mobject builders or projection adapters>]
      consumes: <authoritative computed state, fixed source artifact, or visual convention>
    semantic_parts:
      - name: <stable part name>
        role: <semantic role exposed to consumers>
    parameters:
      - name: <specific descriptive parameter name>
        value: <declared numeric value or semantic variant>
        meaning: <what quantity or variation this represents>
        role: source | model | topology_selector | projection | tolerance | style | layout
        owner: <mathematical or source object that owns the value>
        domain: <allowed parameter domain fixed before visual fitting>
        coordinate_system: <units or reference frame>
        origin: <source, model, normalized construction, or runtime policy>
        affects_relations: <relation ids or none>
        allowed_values: <range, enum, or description>
    reference_system_contracts:
      - reference_system_id: <stable id>
        contract_revision: <revision bound into the lint index>
        view_instance_id: <rendered panel, inset, or projection id>
        coordinate_domain: <coordinates, units, ranges, and aspect semantics>
        owner: <single coordinate-system object or transform>
        conversion_api: <one public model-to-scene conversion path>
        owner_native_components: [<axes, ticks, native labels>]
        external_semantic_dependents: [<grids, marks, curves, anchors, regions>]
        allowed_post_transforms: [<whole-system layout or camera transforms>]
        checks: [<coordinate coincidences, unit scale, rendered intersections>]
    convention_ids: [<registered convention ids>]
    variants:
      - variant_id: <stable id>
        differs_in: [<declared surface properties>]
        invariant_semantics: [<roles that must remain unchanged>]
        reason: <why a variant is needed>
    previews:
      - class: <preview scene class>
        path: <source or rendered preview path>
    consumers: [<scene import paths>]
    aliases: [<old ids or builder names>]
    status: active | deprecated | migrating
```

The example above shows the `rule_governed` shape. The other permitted
`class_specific_contract` shapes are:

```yaml
class_specific_contract:
  kind: source_geometry
  canonical_artifact: <source-owned vector, raster, path, or coordinate dataset>
  preserved_layers_or_paths: [<source identities preserved>]
  allowed_transforms: [<documented transforms that preserve the claim>]
  fidelity_evidence: <source-path, metadata, or comparison evidence>
```

```yaml
class_specific_contract:
  kind: visual_convention
  semantic_role: <communicative identity>
  builder_owner: <registered builder or convention>
  allowed_surface_variants: [<theme, layout, label, or style variants>]
```

## `convention_registry.yaml`

```yaml
schema_version: 1
revision: <project revision>

conventions:
  - convention_id: <stable id>
    semantic_role: <meaning, not appearance>
    kind: color | shape | primitive | label | motion | layout
    encoding:
      color: <Manim color or null>
      shape: <shape family or null>
      stroke_width: <value or null>
      fill_opacity: <value or null>
      arrow_style: <style or null>
      motion_rule: <rule or null>
    invariants: [<meaning that must stay stable>]
    introduction_requirement: <baseline | introduce-before-use>
    allowed_variants:
      - variant_id: <id>
        differs_in: [<properties>]
        reason: <semantic or accessibility reason>
    conflicts_with: [<convention ids that cannot share one encoding>]
    consumers: [<asset ids>]
```

## Semantic Layout Intent

Ordinary composition records semantic choices and leaves continuous values to
the registered runtime:

```yaml
layout_intent:
  fit: contain | fill
  horizontal: start | center | end
  vertical: start | center | end
  distribution: row | column | grid | overlay
  gap_role: none | small | medium | large
  padding_role: compact | normal | generous
  pace: brief | quick | normal | slow
  typography_roles: [title | heading | body | label | display | compact | detail]
  preserve_anchors: [<semantic part names>]
  intrinsic_geometry_exceptions:
    - asset_id: <asset id>
      reference_system: <source-defined coordinates, units, or topology>
```

The runtime owns the numeric mapping for these roles. Registry parameters may
contain numeric values only for data, physical/source coordinates, or intrinsic
asset geometry; they are not a page-composition API.

## Reuse Decision Record

```yaml
scene_id: <scene or page id>
requirements:
  - concept_id: <semantic identity>
    source_contract:
      source_object_class: rule_governed | source_geometry | visual_convention
      accepted_definition: <authoritative definition or source>
      supported_claims: [<claims this use requires>]
      schematic_scope: <permitted qualitative claim or not-applicable>
    structural_signature:
      semantic_parts: [<parts independent of surface appearance>]
      relations: [<defining relations>]
      state_transitions: [<transitions or not-applicable>]
      admissible_operations: [<operations identity must survive>]
      data_to_visual_mapping: [<authoritative state/source to projection mapping>]
    class_specific_contract: <complete discriminated contract whose kind matches source_object_class>
    registry_candidates: [<asset ids inspected>]
    disposition: reuse | parameterize | new_asset | justified_one_off
    selected_asset_id: <id or null>
    selected_convention_ids: [<ids>]
    variant_id: <id or null>
    rationale: <identity-based reason>
    one_off_expiry: <condition for later extraction or null>

gate:
  source_classification: pass | fail
  defining_structure_fidelity: pass | fail | not_applicable
  appearance_substitution: pass | fail
  schematic_scope: pass | fail | not_applicable
  duplicate_identity: pass | fail
  local_hardcoded_semantics: pass | fail
  convention_consistency: pass | fail
  public_api_and_preview: pass | fail
  reference_system_ownership: pass | fail | not_applicable
  false_abstraction: pass | fail
  verdict: pass | needs-source-classification | needs-model | needs-behavioral-fidelity | needs-schematic-scope | needs-extraction | needs-convention-repair | needs-constructive-geometry | needs-registry-entry
```

Reusable assets keep these contracts in `asset_registry.yaml`. A legitimate
one-off keeps the same structure in its work order rather than inventing a
second registry. A local `.manim-reference-systems.json` file is only a derived
lint index. Each entry contains `reference_system_id`, project-relative
`canonical_path`, and `contract_revision`; preflight must resolve exactly one
complete matching contract before accepting an exception. Bare IDs, stale
revisions, escaping paths, and duplicated matches are invalid.

## Identity Tests

Classify the source before comparing visible identities. If the source has
independent equations, transition rules, invariants, simulation dynamics,
combinatorial structure, or admissible operations, its asset identity includes
those mechanisms and their authoritative state. Similar renders do not establish
the same asset identity.

For a rule-governed object, require this dependency direction:

```text
accepted definition -> executable model -> computed state -> visual projection
```

Reject registry entries that make a scene, mobject tree, coordinate list, or
reference render the canonical state unless the represented object is explicitly
a visual convention. Register a schematic as a distinct limited identity; do not
let it alias a computed realization.

The registry is a discriminated union. `class_specific_contract.kind` must match
`source_contract.source_object_class`, and its remaining fields must be complete
for that shape. Do not add fields from another shape or fill missing fields with
null placeholders. Common projection and semantic fields remain available to
every class. If class selection is unresolved, do not register or reuse the asset
yet.

For `rule_governed` assets, treat two projections as the same concept identity
when the viewer should interpret the same objects, mechanisms, and relations
despite allowed changes in inputs, scale, orientation, density, labels, or local
layout. For `source_geometry`, require the same canonical artifact or an accepted
collection identity and only fidelity-preserving transforms. For
`visual_convention`, require the same semantic role despite registered surface
variation.

Treat them as distinct only when at least one semantic invariant changes: the
object represented, relation asserted, direction of implication, measurement
meaning, state role, or source-defined mechanism.

Use a parameterized variant only after the source class, defining mechanism, and
structural signature are known to be compatible. Otherwise record the identity
as unresolved and block reuse; do not merge or fork merely to avoid understanding
the source object.
