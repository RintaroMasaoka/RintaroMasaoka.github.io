# Introduction gate calibration cases

Use these cases to test the behavior of `physics-paper:introduction` after a
gate change. They are not opening templates and do not prescribe a single
rhetorical style. For each case, the gate should identify the earliest relevant
decision and give the stated disposition for the underlying reason.

## Case 1: coherent but downstream entry

A regular theoretical-physics article opens by restricting simultaneously to a
dimension, a critical regime, a decomposition of an observable, and a
particular geometric correction. Every term is familiar to the target
journal's broadly trained readers, and every later paragraph follows coherently.
The opening gives no consequence for readers outside the observable's immediate
microcommunity until paragraph two. Its stored G3 candidate record explicitly
selects this downstream conjunction and cites only terminology familiarity as
interest provenance.

Expected disposition: `BACK(G3)`. Familiarity and downstream
coherence do not establish interest provenance. The gate must ask what
field-level issue makes the chosen correction consequential before accepting
the restrictions.

## Case 2: ceremonial generality

A materials paper opens with a true statement that quantum materials are
important, followed by a textbook definition of a phase transition. The first
model-specific paragraph eventually identifies an experimentally unresolved
transport anomaly.

Expected disposition: `BACK(G4)`. Broad comprehensibility does not activate
the paper's scientific problem. The repair should begin from a sourced
field-level relation that makes the anomaly consequential, not from more basic
background.

## Case 3: successful direct method entry

A methods Regular Article states that its purpose is to describe an algorithm
in enough detail for practitioners to implement it, identifies the class of
problems it addresses, and names the limitation in existing algorithms that it
removes. Its intended reader is a practitioner and implementation capability
is the paper's primary contribution.

Expected disposition: `PASS` at the entry gates when the venue and body support
that genre and audience. Do not force a wider physical preface merely because
other theory papers use one.

## Case 4: general sentence followed by an interest cliff

A paper begins with an acceptable field-level problem. Its second sentence
introduces a particular dimension, phase class, geometry, model, and formalism.
The later paragraph explains why all five matter.

Expected disposition: `BACK(G5)` at sentence two. A broad first sentence does
not prepay later specificity. Each restriction or justified cluster needs a
benefit visible from the accepted prefix.

## Case 5: knowledgeable but indifferent reader

An opening uses standard terminology accurately and a specialist reviewer says
it is clear. A neighboring reader can paraphrase the claims but cannot say
what changes if the stated quantity is calculated or why the chosen limitation
is scientifically useful. The stored G3 ledger marks knowledge of the terms as
the reason for existing interest; the G4 wording faithfully instantiates that
selected candidate.

Expected disposition: `BACK(G3)`. Knowledge and parsing are not
interest. The gate must recover a consequence from venue-representative
literature or the manuscript body.

## Case 6: attractive but unsupported stake

An opening clearly tells readers why a result would matter, but the claimed
connection to a broad class of phases is inferred only from one model and from
the present paper's desired story.

Expected disposition: `BACK(G1)`. Interest cannot compensate for an
unsupported field claim. Narrow the scope or obtain a convergent source basis.

## Case 7: locally good sentences, false paragraph coordinate

A paragraph gives one example indexed by spatial dimension and another indexed
by phase class. A transition then describes them as a dimensional progression.
Each sentence is individually correct.

Expected disposition: `BACK(G6)`. Reconstruct the relation taught by the
prefix; do not repair only the connective if the selected examples created the
false grouping.

## Case 8: successful direct theoretical entry

A PRB Regular Article opens with a named theoretical anomaly already documented
across experiments and several modeling approaches in its intended readership.
The first sentence states the anomaly and its physical consequence; the next
sentence restricts to a model known to discriminate between the competing
accounts. The paper is not a methods manual, but its narrow first object is
already a shared venue-level stake and its restriction has an immediate
scientific payoff.

Expected disposition: `PASS` through G3--G5 when the source set actually
establishes that shared salience and discriminating role. A field-wide preface
would add no orientation. If only the immediate model community treats the
anomaly as salient, return to G3 instead.

## Case 9: the same visible defect under three failure classes

Visible defect: a draft asks a broad venue reader to care about a specialized
quantity before stating its consequence.

- **Execution failure:** the active gate already requires an
  interest-provenance ledger, but the generator left its provenance blank and
  nevertheless marked G3 `PASS`. Expected action: enforce G3, invalidate G4--G8,
  and retain this artifact as a regression input; the gate wording need not
  change.
- **Gate-specification failure:** the active gate asks only whether the reader
  knows the terminology and contains no representation of existing or earned
  interest. Expected action: add the missing decision contract to the reusable
  gate before revising prose, then invalidate and regenerate.
- **Evidence failure:** the gate represents interest provenance, but the full
  venue materials and representative Introductions needed to determine it are
  unavailable. Expected action: return to G0, recover evidence or report
  `UNRESOLVED`, and do not infer a pass from the draft.

The classification follows the state of the gate and evidence, not the surface
appearance of the sentence.

## Case 10: failed draft exposes an absent gate

An isolated reviewer identifies a reader failure that no field in the stored
gate record represents. The drafter can improve the sentence directly.

Expected disposition: gate-specification failure. Repair the reusable gate,
invalidate dependent planning and prose, rerun these calibration cases, and
regenerate. The improved sentence alone is not acceptance evidence.

## Case 11: prospective theory generation

Inputs only: a PRB Regular Article body establishes an analytic result for a
specialized geometric observable in one critical model; the venue profile
includes neighboring condensed-matter readers; the literature contains a
venue-wide problem of identifying universal continuum information in critical
ground states, a one-dimensional exact precedent, and a higher-dimensional
extraction difficulty. Hide every prior Introduction, target first sentence,
and user complaint.

Expected behavior: G3 compares at least the venue-wide critical-state problem
with the direct geometric-observable problem. Unless the sources establish the
observable itself as a shared venue-level stake, it selects the wider problem.
G4 creates a substantive field-level prefix rather than ceremonial praise; G5
admits the geometry only after its information gain is visible. The test fails
if the generated prefix merely replaces specialist nouns with generic nouns or
if its selection rationale depends on the hidden final result.

## Case 12: prospective direct generation

Inputs only: a PRB Regular Article body supplies a theory for a named anomaly;
multiple experiments and distinct theory communities in PRB already frame that
same anomaly and its consequence as unresolved; one model in the body
discriminates between the competing accounts. Hide every prior Introduction and
target opening.

Expected behavior: G3 may select the direct anomaly entry, G4 states its
consequence, and G5 admits the discriminating model without a generic field
preface. The test fails if “general first” is applied despite the documented
shared stake.

## Case 13: controlled direct-entry sibling pair

Hold the article type, sentence wording, restriction cluster, and paper body
fixed. In version A, independent experiments and several PRB communities
document the opening issue and its consequence. In version B, only papers from
the immediate model community use that framing.

Expected behavior: version A may pass G3--G5 directly; version B returns to G3
and requires an upstream stake. The differing decision must be attributed to
interest provenance, not to vocabulary, sentence length, or topic prestige.

## Case 14: blind-packet sibling pair

Version A gives a fresh reviewer the verdict-neutral gate specification, the
Introduction, raw body/result records, venue materials, and full comparison
sources. Version B adds the author's selected reader population, candidate
ranking, gate decisions, and expected verdict. All else is fixed.

Expected behavior: version A is eligible for G8 review. Version B is rejected
as an anchored packet and must be rebuilt for a fresh reviewer; its verdict
cannot count as blind evidence.

## Case 15: incomplete blind evidence

A fresh reviewer receives the verdict-neutral gate and the Introduction but
not the raw body results or the comparison Introductions needed to assess its
field claims and reader calibration.

Expected behavior: G8 returns `UNRESOLVED`. The author must supply the missing
raw evidence to a fresh reviewer rather than reveal the author-side claim basis
or ask the same reviewer to continue after an incomplete packet.

## Case 16: interest-transfer trap

A PRB theory article has source support for a venue-wide stake in identifying
universal long-distance structure of critical ground states. Its proposed
opening instead makes “geometry-dependent subleading entanglement” the active
problem. The candidate record cites the broader critical-state stake as the
reason that readers already value the narrower focus, but the proposed prefix
states neither a relation between the two nor what the narrower quantity can
establish or distinguish about critical states. The next paragraph would
eventually supply that relation.

Expected disposition: `BACK(G3)`. Interest in the ancestor problem does not
transfer by category membership. Record `S`, `F`, the warranted relation `R`,
and the consequence visible in the prefix; otherwise select the ancestor as
the controlling entry and earn the observable later. The result must not
change merely because all of the specialized words are familiar.

## Case 17: downstream candidate-set trap

A candidate comparison contains four polished alternatives: a universal term
in one observable, a particular critical model, a replica formalism, and a
corner geometry. The comparison literature and body also support a nearer
upstream problem concerning how critical ground states are characterized, but
no candidate represents it. The observable candidate wins as the “widest” of
the four.

Expected disposition: `BACK(G3)` before drafting prose. Build the
interest-dependency graph and add the nearest warranted ancestor candidate.
Breadth is determined by the scientific dependency relation, not by which
downstream label sounds most general. The direct candidate may still win after
comparison if its independent shared salience or an immediately visible
ancestor-to-focus consequence is documented.

## Case 18: ancestor-label laundering

An interest-dependency graph correctly places “characterize critical ground
states” above “universal entanglement” and “corner coefficient.” A candidate
record lists the first node as shared stake `S`, but lists universal
subleading entanglement as actual focus `F`; its proposed first sentence is
also governed by subleading entanglement. The record nevertheless calls this
the ancestor candidate because the wider stake appears in its motivation.

Expected disposition: `BACK(G3)`. Classify the candidate by `F` and the cold
prefix. It occupies the entanglement node and cannot satisfy ancestor coverage.
Add a separate candidate whose actual first focus is the critical-ground-state
problem, run the observable-free focus test, and compare the two trajectories.
Do not repair the record by relabeling the same opening or by adding a broad
dependent clause to its first sentence.
