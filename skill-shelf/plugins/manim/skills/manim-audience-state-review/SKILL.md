---
name: manim-audience-state-review
description: "Run a revision-bound blind audience-state review of rendered Manim clips or Manim Slides checkpoints. Use before implementation to approve an explicit audience contract, and after rendering to detect use-before-introduction, undefined terms or visual conventions, missing why-now motivation, and reasoning leaps through a sequential cold-then-warm review. Keep this separate from geometry, visual-primitive, mathematical, and source-fidelity review."
---

# Manim Audience State Review

Audit whether each audience-facing checkpoint is licensed by what the viewer was
allowed to know at that point. Treat audience state as an evidence contract, not
as a guess about a real person's psychology.

Read `references/audience-artifact-schema.md` in full whenever creating,
approving, amending, or reviewing an audience artifact package.

## Role Boundary

Own only these failures:

- a term, symbol, color, region, arrow, or visual convention is used before its
  usable role is introduced;
- an operation appears before the question, constraint, or purpose that
  motivates it;
- a claimed transition requires a premise or relation unavailable from the
  baseline, prior established state, or current audience-facing segment.

Do not rewrite the scene. Do not judge geometry, primitive visibility,
typography, mathematical equivalence, source fidelity, or visual-metaphor
quality. Route those failures to the appropriate worker.

## Required Artifact Package

Require a durable package under `runs/<task>/audience/`. Allow drafts in `tmp/`,
but never authorize implementation from a temporary draft. Treat
`contract.yaml` as a working contract that may be revised through discussion
with the user. Preserve approved snapshots under `revisions/`; do not confuse
an evolving contract with an unversioned implementation target.

Require two separate locks:

- `contract.lock.json` binds the approved contract revision used by the current
  implementation.
- `review_bundle.lock.json` binds the reviewed contract, render/checkpoint
  manifest, required spoken script or narration audio, timing map, and the exact
  cold-input packet.

Do not accept mutable filenames as provenance. Verify the recorded hashes before
reviewing. Treat optional presenter reminders as private notes with no audience
credit.

Require a warm-side `cold_packet.index.json` to bind ordering and packet hashes,
but never disclose that index to the cold reviewer. Have an independent
dispatcher, distinct from the cold reviewer, verify the index and bundle locks,
then reveal exactly one sealed per-checkpoint packet at a time. Each packet
may contain only the current render segment, the current speech slice or excerpt,
and, for checkpoint 1, a mechanically derived baseline projection. Do not open
the full contract, list the packet directory, or inspect future packets.

Also require a language-provenance pair before contract approval:

- `user_language.yaml` preserves exact user expressions as evidence and marks
  whether each expression is an authoritative name, required quotation,
  explicitly defined project term, or provisional wording;
- `model_reconstruction.yaml` states the inferred entities, relations,
  constraints, uncertainties, and discriminating consequences independently of
  provisional user wording.

User language is evidence about the intended model, not the model itself. Do
not promote a memorable phrase, private shorthand, compressed diagnosis, or
requested label into a contract concept merely by repeating it. Exact reuse is
allowed for source quotations, proper names, notation, and user-approved terms,
but record why the surface form is authoritative.

## Pre-Code Approval

Before implementation:

1. Run the reconstruction gate. Give a reviewer `model_reconstruction.yaml`
   without `user_language.yaml` and ask whether the model identifies concrete
   referents, relations, decision boundaries, and observable consequences. Fail
   paraphrase-only abstractions that could be produced by synonym substitution.
   Then reveal the user-language record and verify traceability without replacing
   the reconstructed model with the user's phrasing.
2. Check the baseline prerequisites, motivating question, delivery mode, atomic
   transition claims, dependency graph, and required page claims.
3. Check the term/symbol/visual-convention ledger. Require every dependent item
   to have a planned first introduction, usable role, delivery channel, and
   evidence obligation.
4. Reject transitions that need unavailable premises, delay motivation until
   after the operation, or bundle several independent obligations before any can
   be inspected.
5. Incorporate user corrections to audience, motivation, scope, or explanation
   depth into the working contract before approval. Treat those corrections as
   authoritative contract evolution, not as reviewer defects.
6. Preserve an immutable revision snapshot and approve its exact hash, or return
   blocking findings. Do not allow Manim implementation to start from an
   unapproved revision.

## Post-Render Review

Use a genuinely fresh reviewer for the cold sweep. If no fresh reviewer is
available, label the result `not-blind` and do not use it as an acceptance gate.

### Phase 1: Complete Sequential Cold Sweep

Finish and seal the cold sweep for every in-scope checkpoint before revealing
any warm material.

For checkpoint 1, read only the files supplied in its sealed packet:

- the baseline projection allowed before checkpoint 1;
- the current rendered audience-visible segment;
- revision-bound audience-facing speech for that segment.

For later checkpoints, additionally carry only propositions, relations,
symbol-role mappings, and questions directly observed as established in earlier
cold records.

Do not read planned transition IDs, intended first-introduction locations, the
source argument, code, implementer rationale, model statements, audit defenses,
optional presenter notes, future checkpoints, or warm findings.

Interpret delivery mode strictly:

- `self_contained_visual`: give no speech credit;
- `prerecorded_narration`: credit only bound audio aligned by the bound timing
  map;
- `live_presenter`: credit the bound required script as contractual presentation
  content, and label acceptance conditional on that script being delivered.

Never describe a required live script as proof that a historical presenter
actually spoke it.

At each checkpoint:

1. Find the first unsupported term, convention, motivation, or inference.
2. Cite the exact frame, timecode, required-script line, or audio interval.
3. Record the actual proposition or mapping established by the segment. Do not
   propagate a vague capability label such as "understands X."
4. Do not propagate unsupported items. Never let a later definition repair an
   earlier first use retroactively.

Write all cold observations to reviewer-owned `cold_review.yaml`, then seal its
exact bytes in `cold_review.lock.json` before continuing. Do not append warm
fields to either cold artifact.

### Phase 2: Warm Comparison

After the complete cold sweep is sealed, write warm results separately to
`warm_review.yaml`. Reveal the planned transitions, term
ledger, source/fidelity material, dependency graph, and implementation audit.

Verify during warm comparison that the checkpoint-1 baseline projection was
derived only from `baseline.allowed_prerequisites`, and that every sealed packet,
its ordering, and its evidence hashes match the warm-side index and review
bundle. Treat a mismatch as provenance failure.

Map cold observations to atomic claims and mark each claim:

- `established`
- `not-established`
- `not-observed`

Compute affected dependency consumers and route each failure. Do not grant
retroactive audience credit from warm information.

## Decision Rubric

- **Introduction:** Pass only when the audience-facing channel identifies the
  item and supplies its usable role or mapping before its first dependent use.
- **Motivation:** Pass only when the next operation answers an already stated
  question or constraint, or its local purpose is supplied before the
  operation. Do not require practical usefulness.
- **Bridge:** Pass only when every premise and relation needed for the claimed
  transition is baseline-established, previously observed, or supplied in the
  current segment.
- **Overload:** Flag a segment when it requires several independent new
  premises or definitions before any becomes inspectable. Route this to
  checkpoint/story splitting rather than enforcing a universal item count.
- **Severity:** Treat an unsupported required claim or use-before-introduction
  as blocking. Treat optional enrichment and stylistic improvement as notes.

Ask whether the transition is licensed by supplied evidence. Never claim that
a real audience necessarily understood it.

## Repair and Invalidation

Require a new preserved revision and approved contract hash for semantic
changes. A user-directed change to audience, motivation, or scope is valid
contract evolution, but it still invalidates consumers of the previous revision
and must not be mixed into an old review bundle. Permit implementation to add
observed render/timecode anchors only to reviewer-owned review records, never to
an approved contract snapshot.

After a repair, create a new review-bundle revision and use a fresh cold
reviewer. Replay a continuous sequence from the earliest affected checkpoint
through the required dependency consumers, including intermediate checkpoints
needed to reconstruct audience state even when consumers are noncontiguous.

## Routing

- baseline, transition, or contract defect: `$manim:argument-clip-requirements`
- missing explanatory beat or model: `$manim:manim-visual-planner`
- local Manim insertion or timing repair: `$manim:manim-clip-implementer`
- geometry, primitive visibility, or typography: `$manim:manim-visual-review`
- mathematical equivalence: `$manim:manim-math-derivation`

When geometry conceals an otherwise valid introduction, route the geometry
defect to `$manim:manim-visual-review`, then rerun the affected audience-state review.

## Output

Write reviewer-owned cold and warm records using the reference schema. For every finding,
include the checkpoint and evidence location, category, first unsupported item
or inference, available audience state, blocking reason, smallest missing
bridge, affected atomic claims, routing target, and verdict.

Allow one `cold_review.yaml` plus one `warm_review.yaml` for a short clip or
page. Use separate cold/warm per-checkpoint files for a large page or deck. In
both modes, hash-lock the completed cold output before warm work begins and
make the warm record cite that cold hash.

Accept a page only when all required atomic claims are established against the
same contract and render revision plus the evidence required by its delivery
mode: no speech in self-contained mode, bound audio in prerecorded mode, or a
bound required-script revision with a `conditional-on-delivery` verdict in live
mode. Page-level verdicts are summaries of the atomic records, not a second
checklist.
