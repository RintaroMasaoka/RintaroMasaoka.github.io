# Guarantee Integrity Contract

Use this contract whenever a Manim asset or review makes a claim such as
faithful, exact, equivalent, attached, contained, closed, intersecting,
tangent, on-surface, topology-preserving, verified, complete, or passed.

## Ethical rule

Never report a stronger guarantee than the construction evidence establishes.
Do not let effort, visual similarity, a passing self-authored test, or the need
to show progress upgrade the status of an artifact.

Do not compress evidence into a single ordered score. For every claim, keep a
`guarantee_record` with independent axes:

- `claim`: predicate, subjects, domain, assumptions, and whether the claim is
  exact or approximate;
- `construction_basis`: analytic derivation, exact combinatorial construction,
  numerical constraint solution with a bound, source-path preservation,
  heuristic placement, or unknown;
- `implementation_assurance`: how code is traced to the construction, what was
  independently reviewed, and what remains trusted rather than established;
- `regression_evidence`: sampled assertions and their tolerances;
- `visual_evidence`: inspected renders and the defects that review could reject;
- `proposed_wording`: the implementer's requested claim language;
- `reviewer_decision`: a separately authored status, reviewer identity,
  artifact revision, reviewed basis, trusted gaps, and approved wording.

These axes are not interchangeable. Source preservation supports a fidelity-to-
source claim only; it does not establish that the source relation is
mathematically correct or independently animatable. A sampled assertion may
catch regression while proving nothing about untested parameters. A screenshot
can reject a defect but cannot establish constructive correctness.

Never use unqualified `guaranteed`. State the claim's domain and assumptions.
The implementing agent may propose wording but cannot approve it. Structural-
claim acceptance is reviewer-owned; the review identity must differ from the
implementation identity and bind its decision to the reviewed artifact revision.

## Construction record

For relations involving incidence or attachment, containment, intersection, tangency,
closure, connectivity, equality or shared identity, shared origin, membership
in a curve or surface, separation or clearance, or crossing order, record:

- `semantic_relations`: what the asset asserts;
- `mathematical_owners`: the embedding, graph, lattice, region, equation, or
  source vector object that owns the relevant geometry;
- `derived_objects`: how visible dependents arise by restriction, boundary,
  image, preimage, intersection, shared incidence, transformed copy, clipping,
  or constraint solution;
- `degrees_of_freedom`: model, topology-selector, projection, style, and layout
  parameters, including which relation removes which otherwise independent
  freedom;
- `preservation_argument`: why the relation holds for every allowed parameter,
  not only the rendered sample;
- `animation_closure`: which transformations preserve the relation and which
  require rebuilding from the owner;
- `regression_checks`: decidable consequences checked in code, with justified
  numerical tolerances.

The owner must be a source- or model-defined mathematical object, not a renamed
bag of fitted coordinates. Its parameter domain and assumptions must be fixed
before visual fitting. A singleton parameter choice selected from the target
render does not establish a relation over a meaningful domain. A dependent
object may not hide new fitting parameters behind the owner's API.

For numerical constraint solutions, record residuals and an error bound. Do not
call a tolerance-based result exact. If a solver fails its declared bound,
construction fails rather than returning a visually repaired object.

Reject a claimed relation when it depends on equality or proximity between
independently authored coordinates, dimensions, angles, endpoints, or sampled
paths. Moving such values into named constants, fitting them to a screenshot,
or checking them after construction does not remove the independent degree of
freedom.

Automated checks are partial evidence, never a complete verifier for arbitrary
Manim/Python geometry. Do not create a script whose PASS is presented as proof
of the whole record. If the preservation argument cannot be established,
restrict the approved wording and mark that structural claim unresolved.

Artifact acceptance and structural-claim acceptance are separate. A clearly
labeled schematic may be accepted when the task does not require the unresolved
relation. An exact mathematical diagram whose core relation is unresolved must
not be accepted, even if its render and layout pass.
If a work-order-required central relation is unresolved, artifact acceptance is
blocked. The schematic exception applies only when that relation is explicitly
out of scope for acceptance.

## Reference-system ownership

Whenever a visual exposes coordinates or a data-to-position mapping, treat the
rendered reference-system view as a mathematical owner, not as decorative
scaffolding. Record one `reference_system_contract` for each rendered view
instance. Several views may share one mathematical domain while owning distinct
model-to-scene maps, such as an overview, inset, or alternate projection:

- `view_instance_id`: the rendered panel, inset, or projection governed by the
  contract;
- `contract_revision`: the immutable revision used by lint indexes and review
  evidence to reject stale resolutions;
- `coordinate_domain`: the mathematical coordinates, units, ranges, and aspect
  semantics before rendering;
- `owner`: the single coordinate-system object or transform that maps that
  domain into Manim scene points;
- `owner_native_components`: axes, ticks, and labels constructed by the owner
  from its own configuration rather than projected back through its API;
- `external_semantic_dependents`: grids, data marks, annotation anchors,
  trajectories, regions, and any other external objects whose placement
  communicates a value in that view;
- `conversion_api`: the one public path by which every external semantic
  dependent is converted, such as an `Axes.c2p`/`NumberPlane.c2p`-owned builder;
- `allowed_post_transforms`: whole-system layout, camera, or projection
  transforms that act uniformly on the owner and all dependents;
- `checks`: exact coordinate coincidences, unit-scale/aspect assertions, and
  rendered inspection at representative ticks, intersections, and extrema.

Reject a coordinate visual when a semantic dependent has a second scene-space
projection, duplicated scale or offset, hand-authored tick position, or
post-conversion repair. Numerical equality in one render does not remove that
independent degree of freedom. Sampled values must also be genuine model
coordinates. For example, when integer grid/tick alignment is claimed, a
near-integer display lattice cannot stand in for integer coordinates merely
because the discrepancy is visually small.

This contract does not forbid layout. Build the coordinate system and every
semantic dependent from the shared owner, then move or scale the complete
system as one unit. Pure decoration may use scene coordinates inside a
registered decoration or chrome asset builder when it does not encode a
coordinate value or assert attachment to a semantic dependent; this does not
create a consumer-scene layout bypass.

## Torus example

Let one embedding own the surface:

```text
T(u, v) = ((R + r cos v) cos u,
           (R + r cos v) sin u,
            r sin v)
```

Define the cycles only as restrictions:

```text
longitude(t) = T(t, v0)
meridian(t)  = T(u0, t)
```

The curves lie on the torus, are closed, and share `T(u0, v0)` by construction.
`R`, `r`, `u0`, `v0`, and camera parameters are legitimate. Independent ellipse
axes, elevations, endpoint coordinates, and contact offsets reintroduce freedom
that the asserted relation should have removed.

Whole-asset layout and camera projection may follow intrinsic construction.
Do not independently move, scale, or repair endpoints of related members after
construction; rebuild them from their owner.

## Self-certification guard

The implementing agent must not define the acceptance test so narrowly that its
own artifact passes while the user-valued relation remains unproved. Review must
attack the claim scope, owner legitimacy, parameter domain, derivation, and
implementation trace, and distinguish independent evidence from checks authored
from the same assumptions as the builder.

When handing off, report unproved relations and remaining independent degrees
of freedom before visual polish or completion language.
