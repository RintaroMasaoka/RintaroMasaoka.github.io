---
name: manim-asset-implementer
description: "Implement and repair executable reusable Manim asset bundles after concept identity, source-object authority, public API, and reuse disposition are resolved. Use when Codex must create model/state code, builder or mobject modules, registry projections, exports, asset previews, or migrate scene-local reusable geometry into an asset. Do not use for prose-only asset planning or composed clip narration."
---

# Manim Asset Implementer

Build the reusable object that clip scenes consume. Own executable model/state
code, visual projection builders, semantic-part APIs, package exports, registry
projection, and focused asset previews. Do not own clip narration, temporal
exposition, or composition-level prose; route those to
`$manim:manim-clip-implementer` after the asset passes its own implementation
gate.

Read `../manim-asset-system/SKILL.md` before implementation. Read
`../manim-asset-system/references/asset-convention-schema.md` when creating or
changing registry records, and
`../manim-asset-system/references/guarantee-integrity-contract.md` whenever the asset
claims a structural relation, fidelity, exactness, or coordinate mapping.

## Entry Gate

Require an asset work order containing:

- `asset_id`, `concept_id`, source-object class, accepted definition, supported
  claims, structural signature, and reuse disposition;
- authoritative model, source geometry, or visual-convention owner;
- public inputs, variants, semantic parts, output API, consumers, and target
  package paths;
- applicable construction and guarantee records;
- preview cases and acceptance checks that exercise the declared contract.

If identity, authority, claim scope, or reuse disposition is unresolved, return
the missing fields and route to `$manim:manim-asset-system` or
`$manim:argument-clip-requirements`. Do not replace a missing contract with a
design note, caption, storyboard, pseudo-code, or a scene-local sketch.

## Implementation Contract

1. Inspect existing registry entries and exported builders. Reuse or extend an
   accepted semantic match before creating a new identity.
2. Implement the authoritative layer first:
   - `rule_governed`: executable model and state API, then computed visual
     projection;
   - `source_geometry`: preserved source artifact plus documented transforms;
   - `visual_convention`: registered semantic builder and allowed variants.
3. Put reusable implementation under the project-resolved asset root. Under the
   conventional fallback, use
   `paper_assets/<paper_id>/<asset_id>/builder.py` or `mobjects.py`, export the
   public API from `__init__.py`, and project the registry record to
   `asset.yaml` when the project uses package projections.
4. Return named semantic parts and stable builder functions. Consumers must not
   depend on numeric submobject indices or copy internal geometry.
5. Create a focused asset-preview scene that imports the public API and shows
   representative inputs, variants, and states. It may use short identifiers or
   parameter labels needed to inspect the asset, but it must not become an
   explanatory substitute for constructing the object.
6. When an asset exposes a transition API or its preview animates between asset
   states, apply `$manim:manim-clip-implementer`'s non-TeX transform
   correspondence rules. Name the surviving, added, and removed semantic parts;
   do not let Manim's recursive family alignment invent the origin of an
   unmatched part. Check model-owned attachment relations at the first
   materially visible frame and at the highest-risk intermediate frame when it
   is distinct, recording a timestamp, animation alpha, or precise beat
   location for each.
7. Run import, model/contract, registry, render, and checkpoint checks required
   by the work order. Record limitations and failed cases instead of narrowing
   the claim silently.

## No-Prose Completion Rule

An asset task produces executable, importable artifact files. Text artifacts
such as plans, schemas, mappings, registry proposals, verification notes, or
descriptions are supporting evidence only. They cannot satisfy an asset
deliverable, advance its status to implemented, or justify a missing builder,
model, export, preview, or required check.

If implementation cannot proceed, report `blocked` with the exact missing
contract, dependency, or failing check. Do not return a polished explanation as
partial asset completion. A task explicitly scoped to asset design or audit may
finish in `$manim:manim-asset-system`; it is not an implementation task and must
be labeled accordingly.

## Handoff to Clip Composition

Hand off to `$manim:manim-clip-implementer` only after the asset package is
importable and the required preview/checks have run. Provide:

- asset directory and files created or changed;
- exported builders, parameters, variants, and named semantic parts;
- registry entry and convention IDs;
- preview class and rendered checkpoint paths;
- checks run, results, guarantee records, and unresolved limitations;
- consumer import example that uses the public API.

The clip implementer may position, animate, and narratively compose the public
asset. It must not repair a missing asset by recreating its geometry locally or
by replacing it with on-canvas explanation.

## Completion Gate

The implementer may report `ready-for-verification` when all required code and
registry projections exist, the public API imports, the preview consumes that
API, required contract checks pass, and the preview has rendered. Only
`$manim:manim-clip-verifier` may issue `implemented`, bound to the reviewed
artifact revision and evidence. Otherwise report `blocked` or `needs_repair`
and list the concrete missing artifacts or failed checks.

The verifier-owned acceptance record is a separate post-code artifact, not a
field the implementer fills in the work order. It records `asset_id`,
`artifact_revision`, `implementer_id`, `verifier_id`, independently observed
public API imports, registry projection, preview class and render paths,
required check results, missing artifacts, and `implemented|needs_repair|blocked`.
