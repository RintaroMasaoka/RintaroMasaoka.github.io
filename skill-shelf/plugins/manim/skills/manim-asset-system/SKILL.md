---
name: manim-asset-system
description: "Design and enforce reusable Manim assets that preserve the defining structure and behavior of represented objects, with visual conventions as derived presentation. Use before implementing or repairing scenes when mathematical, physical, computational, diagrammatic, or visual objects may recur; when scene code substitutes appearance for an executable model; or when reusable geometry and conventions need registry-backed identity. Require source-object classification, model-first construction for rule-governed objects, registry lookup, explicit variants, and fidelity plus DRY acceptance gates."
---

# Manim Asset System

Make scenes consumers of reusable semantic assets and conventions. Treat asset
identity as the concept being represented, not the incidental appearance of one
render.

Read `references/asset-convention-schema.md` in full whenever creating,
extending, migrating, or auditing a project registry.

Read `references/guarantee-integrity-contract.md` in full whenever an asset or
review claims fidelity, exactness, equivalence, topology, incidence or attachment,
containment, intersection, tangency, closure, connectivity, equality or shared
identity, shared origin, membership in a curve or surface, separation or
clearance, crossing order, or exposes coordinates or a data-to-position mapping.

## Core Principle

An asset is an executable representation of an object's defining structure.
Its first responsibility is to preserve the relations, invariants, generating
rules, state transitions, and admissible operations that make the source object
what it is. Geometry, animation, styling, and rendered appearance are derived
projections of that implementation; they are not the asset's identity or final
acceptance target.

For a mathematical, physical, computational, simulated, or otherwise
rule-governed source object, use this dependency order:

```text
source definition -> executable model -> computed state -> visual projection
```

The executable model may be analytic, numerical, symbolic, combinatorial, or a
faithful adapter to an accepted implementation. It must accept the object's
legitimate inputs or parameters and produce states by the source rules. Scene
mobjects must consume those states rather than act as the canonical state.

For a genuinely visual object with no independent source dynamics or structure,
such as a frame, legend, typographic block, semantic arrow, or layout container,
the registered visual identity and convention may itself be primary.

After source-object classification, resolve identity and semantic layout intent
before runtime geometry:

```text
source-object identity -> registered implementation -> semantic composition
    -> visual projection -> layout solver -> rendered geometry
```

Do not let each scene invent its own representation of the same concept. If two
visuals carry the same semantic role, reuse the registered convention even when
their layout, scale, or local surface differs. Model legitimate surface changes
as parameterized variants of one identity.

### Acceptance question

Before accepting an asset, ask:

> Does this implementation reproduce how the object is defined and behaves, or
> does it only reproduce how one instance looks?

Rule-governed objects require the first. Visual similarity can reject obvious
defects and support presentation review, but cannot substitute for structural or
behavioral fidelity.

The asset should remain valid under every allowed change of input, parameter,
state, coordinate system, or presentation declared by its contract. If a visible
relation is supposed to follow from the source object, derive it from the model;
do not author independent geometry that merely resembles the expected output.

### Explicit schematic boundary

A schematic is valid when the intended source object is itself schematic, or
when the work order explicitly limits the claim to a qualitative relation that
does not purport to be a computed realization. Register that limited identity and
permitted wording. Do not silently use a schematic as the implementation of a
rule-governed object that can and should be constructed or computed.

For coordinate-bearing visuals, refine the last step as:

```text
model coordinates -> one owner per rendered reference-system view -> semantic geometry
                  -> whole-view layout or camera transform
```

Owner-native axes, ticks, and labels must come from the owner's configuration;
external grids, data marks, curves, annotation anchors, and regions must share
that owner's public model-to-scene conversion. A second projection that happens
to match in one frame is not the same construction. Multiple views may share a
mathematical domain, but each view has its own entry in the
`reference_system_contracts` collection defined by the guarantee integrity
contract and registry schema. Scene-space decoration remains outside this rule
only inside a registered decoration or chrome asset builder, when it carries no
coordinate meaning or claimed attachment; consumer scenes still use semantic
layout.

## Project Sources of Truth

Read asset and convention roots from the project's adapter or instructions.
Only when the project explicitly adopts the conventional fallback, use:

- `paper_assets/asset_registry.yaml`: concept and builder identity
- `paper_assets/convention_registry.yaml`: meaning of colors, shapes,
  primitives, labels, and motion
- `paper_assets/common/`: cross-paper builders
- `paper_assets/<paper_id>/<asset_id>/`: paper-specific asset packages
- `scenes/`: composition code only when no reusable bundle is needed
- `manim_layout/`: standard consumer-facing recursive Row/Column composition,
  installed from this skill's canonical asset

Keep registries versioned with the project. Let user discussion revise semantic
identity or convention choices, but update the registry and affected consumers
explicitly rather than forking local conventions silently.

## Pre-Code Reuse Decision

For every nontrivial visual object or convention:

1. Classify the source object and apply the class-specific authority rule:
   - `rule_governed`: the claimed identity depends on equations, transitions,
     invariants, simulation dynamics, combinatorial rules, parameterized
     construction, or admissible operations. The executable model and its state
     are authoritative.
   - `source_geometry`: the claim is fidelity to one accepted, fixed source-owned
     vector, raster, path, coordinate dataset, or other geometric artifact. The
     preserved artifact and documented transforms are authoritative; this class
     does not claim to regenerate a family from independent laws.
   - `visual_convention`: the object's identity is its communicative role, such
     as a legend, semantic arrow, typography block, frame, chrome, or an
     explicitly limited schematic. Its registered builder and convention are
     authoritative.

   Classification follows the strongest claim, not the easiest implementation.
   If behavior, parameterized regeneration, or relations that must survive
   allowed operations are claimed, use `rule_governed` even when a fixed source
   figure is available. Use `source_geometry` only when preservation of that
   fixed artifact is itself the acceptance target. Record any schematic's
   permitted claim scope explicitly.
2. For `rule_governed` objects, identify the executable owner: inputs,
   parameters, equations or transition rules, state representation, method,
   validity domain, and assurance evidence appropriate to that method. Use
   derivation or exactness evidence for analytic and symbolic implementations,
   preserved invariants for combinatorial generators, provenance and
   compatibility evidence for adapters, and residual, error, or convergence
   evidence for numerical methods. Search
   for an existing accepted implementation before designing mobjects. If no such
   implementation exists, the first new asset is the model and state API, not a
   scene-shaped drawing.
3. Assign a stable `concept_id` and describe its semantic role without referring
   to its current color, coordinates, or scene.
4. Describe its structural signature: semantic parts, relations, state
   transitions, and data-to-visual mapping, excluding labels, values, colors,
   coordinates, scale, and orientation. Search both registries and existing
   exported builders for the same identity and for isomorphic signatures.
5. Choose exactly one disposition:
   - `reuse`: use an existing builder and convention unchanged;
   - `parameterize`: extend an existing builder only after applying the
     class-specific identity rule. For `rule_governed`, the defining mechanism
     and structural signature must remain invariant while allowed inputs or data
     change. For `source_geometry`, the canonical artifact must be identical and
     the change must be an allowed fidelity-preserving transform; a different
     dataset or path is a different identity unless the accepted source itself
     defines a collection. For `visual_convention`, the semantic role must remain
     invariant while registered surface variants change;
   - `new_asset`: register a genuinely new semantic identity;
   - `justified_one_off`: keep local code only when reuse is implausible and the
     reason is recorded.
6. Record the chosen asset/convention IDs, source-object class, authoritative
   owner for that class, visual projection IDs, structural signature, supported
   claims, and matching class-specific contract in the work order and visual
   plan before implementation.

Do not use a new filename, class name, concept label, or cosmetic difference as
evidence that a new implementation is needed. Distinct concepts may share one
structural builder through explicit data and semantic-role mappings. Create a
separate builder only when a material structural invariant or behavior differs;
record that difference rather than merely asserting that the concepts differ.

For ordinary page composition, install and use the canonical package:

```bash
python3 "$MANIM_PACKAGE_ROOT/skills/manim-asset-system/scripts/install_manim_layout.py" /path/to/project
```

Set `MANIM_PACKAGE_ROOT` to the absolute root of the active Manim package, the
directory containing `.codex-plugin/plugin.json`.
The installer creates a symlink to the stocked canonical package by default.
Use `--copy` only as an explicit portability fallback; copied code is not the
canonical development path and must not silently diverge.

Declare nested `Row`, `Column`, or `Grid` trees and choose semantic `fit`,
alignment, distribution, gap, padding, and pace tokens. The runtime maps those
tokens to numeric scale, coordinates, margins, spacing, and durations. Keep
absolute coordinates inside intrinsic asset builders, plots, graphs, circuits,
or faithful source-figure geometry; do not make consumer scenes own them.
Use `semantic_text` and `semantic_math` roles for ordinary canvas typography and
`duration(<pace>)` when a Manim API requires seconds. The scene chooses the role
or pace; the runtime owns its numeric mapping.

Classify numeric literals by role. Ordinary layout, typography, style, and
timing values belong to semantic runtime APIs; unexplained inline values in
those consumers are blocking. Source data, model parameters, topology selectors,
projection parameters, numerical tolerances, intrinsic style, and intrinsic
layout parameters are legitimate when their
provenance, units or coordinate system, owner, domain, and effect on claimed
relations are recorded. Generic bare-number detection is a review lead, not a
proof that a value is invalid. Use named semantic APIs such as
`semantic_math_parts(...).part("term")` instead of numeric submobject indices.
An intrinsic asset records a numeric value in its registered `builder.py` or
`mobjects.py` module marked `# manim-asset-builder`, as a top-level named
parameter immediately preceded by:

```python
# manim-parameter: meaning=nearest-neighbor spacing; role=model; owner=lattice embedding; domain=positive real; coordinate_system=lattice units; origin=normalized model; affects_relations=incidence
cell_length = 1.0
```

Use that parameter in geometry expressions. The declaration identifies what the
number denotes, the system in which it is measured, and why that value exists;
it is not a local visual tuning escape hatch.

## Asset Structure Rules

### Reality-preserving implementation

- Separate model, state, and projection APIs. A scene may animate a computed
  state but may not become the only place where the represented object's laws
  exist.
- Put reusable solvers, generators, symbolic transforms, simulations, and state
  types in importable modules independent of Manim scene sequencing. Keep a
  Manim projection layer that consumes their outputs.
- Make allowed source inputs produce new examples through the governing rules.
  An implementation fitted to one displayed instance is not a reusable asset of
  the source object.
- Record numerical method, discretization, tolerance, singularity handling,
  convergence or residual evidence, and known validity limits when a computed
  state supports a mathematical or physical claim.
- Keep computed state authoritative. Do not recover source state from mobject
  coordinates, animation progress, rendered pixels, or scene-local trackers
  unless the source object is explicitly a visual interaction model.
- A visual preview must exercise the model through its public inputs. A static
  preview of one hard-coded state is insufficient evidence for a parameterized
  rule-governed asset.

### Appearance-substitution anti-patterns

Reject these patterns for rule-governed source objects:

- **Render as specification**: treating a screenshot, source figure, or desired
  frame as the authoritative definition when the source has independent rules.
- **Appearance-equivalent substitution**: replacing a computed object with
  manually authored geometry because one render looks similar.
- **Single-instance fitting**: choosing coordinates, paths, constants, or timing
  to match one example without implementing the family-generating rule.
- **Decorated placeholder**: adding labels, colors, and animation to a schematic
  while leaving the represented process absent.
- **Visual verification as semantic proof**: treating a plausible render, pixel
  comparison, or successful animation as evidence that dynamics or relations are
  correct.
- **Renderer-owned truth**: allowing mobjects or scene coordinates to become the
  canonical model state.
- **Surface-first abstraction**: sharing a builder because outputs look alike
  while their generating mechanisms or admissible operations differ materially.
- **Premature schematic fallback**: drawing an explanation before checking
  whether the underlying object can be directly constructed or computed.

### Guarantee integrity and construction-backed geometry

Never report a stronger guarantee than the construction evidence establishes.
Keep construction basis, implementation assurance, regression evidence, visual
evidence, proposed wording, and the reviewer-owned decision as separate axes. A screenshot, pixel
comparison, source-path reuse, or passing assertion may support a specific
claim; none turns independently placed geometry into a relation that holds by
construction.

For each asserted spatial or topological relation, require the construction
record defined in `references/guarantee-integrity-contract.md`: semantic
relations, mathematical owners, derivations, degree-of-freedom audit,
preservation argument, animation closure, and regression checks. The decisive
question is whether a related object retains any independent freedom with which
it could violate the claim. Reject coordinates, dimensions, angles, endpoints,
or curve parameters that are authored separately and later tuned or asserted
into agreement. Naming those values does not remove the freedom.

Prefer restrictions of one embedding, shared graph incidence, boundaries of
one region, analytic intersections, transformed copies, or a constraint solver
that blocks construction when its residual is unsatisfied. Whole-asset layout
and camera projection may follow intrinsic construction; related members may
not be independently repaired afterward.

Automated geometry checks are partial evidence, not a complete proof system for
arbitrary Manim/Python code. Never use a self-authored PASS as the sole basis for
`guaranteed`, `faithful`, `complete`, or acceptance language.

Keep artifact acceptance separate from acceptance of each structural claim. A
schematic may pass when its limited status satisfies the work order; a diagram
whose central mathematical relation remains unresolved may not. State permitted
wording per claim rather than granting one global completion label.

- Put reusable geometry and semantic subparts in importable builder functions or
  typed asset groups, not inside a scene method.
- Export public builders from package `__init__.py`; keep scene-specific animation
  sequencing in the consumer scene.
- Accept parameters for genuine surface variation. Do not copy a builder and
  edit constants to create a variant.
- Record every numeric parameter's value, meaning, coordinate system, and
  origin in the asset registry. Derived geometry refers to those parameters.
- Classify intrinsic parameters as `source`, `model`, `topology_selector`,
  `projection`, `tolerance`, `style`, or `layout`. A relation-dependent object may not introduce an
  independent model or placement parameter absent from its owner unless a
  declared constraint solver owns and eliminates that freedom.
- When two assets are structurally isomorphic, implement the shared structure
  once and supply concept-specific data and semantic-role mappings. Keep thin
  named wrappers only when they preserve a useful domain-facing API.
- Return named semantic parts when later animations need stable access. Do not
  make consumers depend on fragile numeric submobject indices.
- Keep builders cohesive. Do not create one universal builder with unrelated
  flags merely to claim DRY compliance.
- Give every registered asset an independent preview or smallest consumer that
  can verify its geometry and conventions.
- Store source basis, exported API, semantic parts, conventions, variants, and
  consumers in the registry rather than a prose-only README.

## Convention Rules

Register meaning before appearance:

- semantic color roles such as ground state, local term, active object,
  comparison baseline, warning, or result;
- theme-dependent surface roles such as canvas background, primary and muted
  foreground, panel fill and border, inverse text, and disabled chrome. A
  literal color such as `WHITE` or `BLACK` is not a convention identity when
  its purpose is only to contrast with the current background;
- primitive roles such as implication, correspondence, distance measurement,
  support, dependency, flow, or exclusion;
- shape, fill, stroke, marker, label, and motion semantics;
- introduction requirements when a convention is not already in the audience
  baseline.

For the same semantic role, keep meaning stable across assets and scenes. A
variant may change surface properties only when the registry states what changed
and why. If a surface difference implies a semantic difference, assign a new
role or identity instead of overloading the old one.

Do not hard-code semantic colors or arrow styles in consumer scenes. Import
registered convention values or pass them through a registered builder API.

When a project supports more than one presentation theme, keep semantic roles
stable and map both semantic and surface roles through a theme palette. Record
which roles remain literal because their physical or source meaning depends on
the actual color. Do not implement a second theme by globally swapping light
and dark values: filled objects, inverse labels, images, plots, and colors that
carry meaning may require different mappings. A claimed theme variant needs a
smallest preview in every supported theme before its consumers are accepted.

## DRY Acceptance Gate

Reject a scene or asset bundle when any of these hold:

- a rule-governed source object is represented without a registered executable
  model or an explicit, justified schematic-only contract;
- `source_geometry` is used to bypass a rule-governed claim, or a fixed source
  artifact is presented as a parameterized/generated family;
- a class-specific contract is absent, contradictory, or populated only with
  meaningless placeholders;
- model behavior exists only in mobject coordinates, scene sequencing, or
  appearance-fitting constants;
- a preview exercises only a hard-coded instance although the asset claims a
  parameterized family;
- numerical or simulated states support claims without a recorded method,
  validity domain, and appropriate error, convergence, or residual evidence;
- rendered similarity is used as the final acceptance criterion for structural
  or behavioral fidelity;

- reusable geometry, formula structure, plot setup, or semantic grouping is
  reimplemented inside a scene;
- an existing concept receives a new builder without an explicit identity or
  variant decision;
- the same semantic role is expressed with an unregistered color, primitive,
  motion, or shape convention;
- a theme-capable project uses literal foreground/background colors in consumer
  scenes, or claims theme support without rendered previews for each supported
  theme;
- two assets differ mainly by copied constants or coordinates rather than
  parameters;
- logically equivalent or structurally isomorphic assets have separate
  implementations without a recorded material invariant or behavior that
  prevents one shared builder;
- a scene accesses reusable assets through private internals or numeric indices;
- a new asset has no registry entry, public export, preview, or consumer record;
- a claimed relation has no construction record, is supported only by
  appearance or sampled checks, or remains contingent on independently authored
  placement values;
- a coordinate-bearing asset gives any semantic dependent an independent
  model-to-scene projection, scale, offset, tick placement, or post-conversion
  repair instead of deriving it from the registered reference-system owner;
- the implementer reports a guarantee stronger than the construction or
  relies on acceptance checks derived from the same unsupported assumptions;
- a `justified_one_off` is merely implementation convenience.

Also reject false abstraction: a shared helper that only removes repeated syntax
but erases semantic names, creates flag-heavy coupling, or makes assets harder to
inspect.

## Migration

When existing scenes contain local builders:

1. Inventory repeated semantic identities before moving code.
2. Choose the canonical builder based on fidelity and existing consumers, not
   simply the newest implementation.
3. Extract one asset at a time, preserve a compatibility wrapper when needed,
   and migrate consumers incrementally.
4. Register aliases and deprecated builders so duplicate identities remain
   visible until removed.
5. Render the asset preview and affected consumers after each extraction.

Do not perform a bulk mechanical move that preserves conflicting conventions
under a cleaner directory tree.

## Review Record

For every scene task, record:

- required `concept_id` values;
- source-object class and accepted definition or source basis;
- class-specific authoritative owner and model/source/convention-to-projection
  boundary; for `rule_governed`, include public inputs, state type, governing
  rules, validity domain, and assurance evidence; for `source_geometry`, include
  canonical artifact, preserved identities, allowed transforms, and fidelity
  evidence; for `visual_convention`, include semantic role, builder owner, and
  allowed surface variants;
- for numerical assets, method, discretization, tolerances, singularity handling,
  convergence or residual evidence, and unresolved limitations;
- evidence that allowed input or parameter changes regenerate states through the
  model rather than through appearance fitting;
- structural signatures and isomorphic builder candidates;
- registry matches considered;
- disposition and rationale;
- builder imports and public exports used;
- convention IDs used or introduced;
- supported themes, palette-role mappings, literal-color exceptions, and
  per-theme preview evidence;
- declared variants;
- one-off exceptions;
- preview and consumer verification;
- guarantee record per claimed relation: scope and assumptions, construction
  basis, implementation assurance, regression and visual evidence, proposed
  wording, reviewer-owned decision, construction record when required, and unresolved independent
  degrees of freedom;
- reference-system contracts for every coordinate-bearing rendered view:
  mathematical domain, owner, owner-native components, external semantic
  dependents, conversion API, allowed whole-view transforms, checks, and any
  unresolved independent scene-space freedom;
- verdict: `pass`, `needs-source-classification`, `needs-model`,
  `needs-behavioral-fidelity`, `needs-schematic-scope`, `needs-extraction`,
  `needs-convention-repair`, `needs-constructive-geometry`, or
  `needs-registry-entry`.

Route geometry and rendered primitive visibility to `$manim:manim-visual-review`.
Route conceptual visual redesign to `$manim:manim-visual-planner`. Route
extraction, model/projection implementation, API repair, registry projection,
and asset-preview construction to `$manim:manim-asset-implementer`; route
consumer-scene migration and narrative composition to
`$manim:manim-clip-implementer`. A design record or prose description is not an
implemented asset. Route unresolved mathematical definitions,
equivalences, or derivations to `$manim:manim-math-derivation`; route missing
source-object and claim contracts to `$manim:argument-clip-requirements` before
implementation.
