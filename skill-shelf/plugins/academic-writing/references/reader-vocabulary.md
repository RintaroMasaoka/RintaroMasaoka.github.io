# Guard Reader Vocabulary

Protect the boundary between the target reader's available vocabulary and the
language native to the artifact. Do not simplify technical prose indiscriminately.

## Establish the Reader Card

Use this minimal schema:

```yaml
reader: <intended reader or role>
artifact: <artifact type and genre>
assumed-known:
  - <term or operation this reader may use without local introduction>
```

Require `reader` and `artifact`. Treat `assumed-known` as an optional short list
of task-specific terms, not a complete lexicon.  The schema values are
placeholders, never defaults; populate them only from explicit user input or
the artifact's governing specification.

Resolve the card from explicit user input or the artifact's governing spec. If
either required field remains unclear and different choices would change the
prose, ask one short question before changing the artifact. Do not infer the
reader from the draft's current difficulty or from vocabulary familiar to the
AI.

Keep reader and artifact distinct. An AI reading a mathematical note may accept
dense notation, but the note should still use mathematical rather than
AI-workflow language.

## Apply the Paragraph Gate

At each paragraph containing an expression whose meaning is used by a claim or
explanation, ask:

1. **Reader gate:** Can the stated reader identify the object or operation from
   the preceding text, `assumed-known` terms, or an immediately adjacent
   definition before any inference uses it? If not, introduce it once using
   available mathematical or ordinary language.
2. **Semantic-role gate:** For the expression's actual use in the sentence, can
   the reader bind every role needed to interpret it to already available
   content? Check only the roles the local predicate consumes, such as the
   participating objects or inputs, the relation or operation, and any required
   reference or parameterization. Familiar component words and grammatical
   fluency do not bind those roles. If a required role is missing, state the
   corresponding object, operation, or reference directly once; retain a
   compact expression only when it then saves reading effort.
3. **Operation-first gate:** Does the prose state what is formed, calculated,
   bounded, selected, or assumed before assigning it a name? Put the operation
   or guarantee first. Keep a name only when later reuse earns it.
4. **Artifact gate:** Does each organizing noun belong to the artifact's native
   discourse? Replace AI coordination language with the actual mathematical
   object, operation, condition, or conclusion it hides.
5. **Ambiguity gate:** Could a borrowed term suggest a different established
   meaning to this reader? Replace it with an unambiguous phrase or define the
   intended meaning locally.

Then cold-read the paragraph without relying on author intent. Check first use,
not merely whether a token appeared earlier. A prior appearance makes a term
available only if the reader could acquire its meaning there.

## Recognize the Main Failure Families

### Ungrounded first use

Catch unfamiliar notation defined through other unfamiliar notation, unexplained
symbol classes, acronyms, and names whose operative condition remains implicit.
Do not stack equivalent aliases unless the reader already knows them or each
alias has a concrete downstream role.

For example, prefer "write the set of complex \(D\times D\) matrices as
\(M_D\)" over defining \(M_D\) through several fresh operator-algebra notations.

### Name before content

Catch phrases that name a norm, identity, gauge, interval, decomposition, or
condition before saying what it counts or requires. State the formula's action
or the object's defining property first; attach the compact name afterward only
if it helps later reference.

### Unbound semantic roles

Catch fluent expressions whose words are individually familiar but whose use
leaves a required semantic role unbound.  Identify the predicate in which the
expression participates, then ask what a reader must know to interpret that
predicate at its present resolution.  Bind only those roles: the relevant
entities or inputs, what is done or related, and any reference,
parameterization, or comparison rule on which that use depends.  The reader
must be able to fill these roles from the Reader Card, preceding prose, or an
immediately adjacent definition rather than from specialist hindsight.
Binding need not take the form of a separate definition when local syntax gives
one unambiguous filler without specialist knowledge.  Do not require prose to
spell out a conventional index role or quantifier range that is uniquely
recoverable from the collection or expression it indexes.

An expression is already being used when it fills a role in a mathematical or
explanatory predicate; grammatical embedding does not make it a harmless
mention.  Conversely, do not expand a standard term merely because a fuller
definition exists.  If the local predicate needs no internal role beyond the
term's available standard meaning, leave it compressed.

Keep availability separate from entailment.  This gate checks whether the
reader knows what objects and relation the sentence is about, not whether the
claimed result follows.  An adjacent formula may bind missing roles, and an
explicit algebraic construction from available objects need not restate their
internal structure.  A citation may support a fact and an explicit delegation
may defer its derivation, but neither can fill a semantic role that the current
sentence leaves unidentified.

### AI-workflow vocabulary in reader prose

Treat words such as `contract`, `interface`, `tuple`, `label`, `assembly`,
`proof unit`, `typed`, and `live` as diagnostic cues, not a blacklist. They are
findings only when they replace the artifact's native account of mathematical
content. Recover the hidden subject and verb: name the assumptions, components,
equations, estimates, indexing variables, construction steps, or conclusions
directly.

Apply the same test to ordinary mathematical words such as `family` when they
are used as repeated AI classification labels rather than because the
mathematical collection needs that name.

## Draft and Review

When drafting, run the gate before presenting or writing each affected
paragraph, then emit clean reader-facing prose without audit commentary.

When reviewing, locate the earliest unsupported first use and later shifts into
artifact-external vocabulary. Report findings without editing unless the user
also requested changes. If changes are authorized, preserve the mathematical
claims, notation that has an actual downstream role, citations, and unaffected
spans.

## Boundaries

- Preserve terms explicitly listed as assumed known; do not turn the skill into
  a general simplifier.
- Preserve standard domain vocabulary merely written in English when it is
  native to the artifact and available to the reader.
- Do not ban equality chains, aliases, or abstract nouns categorically. Require
  reader availability and a local function.
- Do not replace scientific, mathematical, citation, or scope authority. Route
  those questions to the appropriate proof, source, or governing spec.
- Do not leave correction dialogue, rejected wording, or workflow labels in the
  finished artifact.

## Completion Check

Finish only when every new expression in the affected passage is recoverable
from the Reader Card and local context, every role required by its actual use is
bound to available content, names no longer substitute for operations,
artifact-external management language is absent, and established reader-native
terminology remains intact.
