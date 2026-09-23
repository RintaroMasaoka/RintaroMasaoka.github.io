# Audit Japanese Rendering

Use this task when Japanese academic prose is distorted by an unestablished
translation, a dictionary-level substitution, or source-language syntax. The
task is to recover established Japanese terminology and natural Japanese
prose, not to maximize the number of translated tokens.

## Classify before rewriting

Separate three kinds of expression because they require different decisions:

1. **Technical concepts and terms:** use the Japanese rendering already
   established in the relevant discipline. That established form may be a
   Sino-Japanese term, a katakana loan, a mixed form, or another conventional
   rendering. If no Japanese rendering is established, keep the concept in
   English by default rather than coining a translation. Use a katakana
   transliteration instead only when that form is genuinely more natural for
   the field and readers while preserving the concept's identity. Add a local
   explanation only when the reader needs it.
2. **General words and prose relations:** do not assign a fixed Japanese word to
   each source word. Recover what the word does in the sentence, then express
   the action, relation, qualification, emphasis, or transition in ordinary
   Japanese. Recast or omit a source token when a literal counterpart would be
   redundant or unnatural and its semantic work is preserved elsewhere.
3. **Personal names:** preserve identity rather than translating lexical
   meaning. Follow the manuscript's citation and transliteration convention;
   use an established Japanese form when one exists, otherwise retain the
   original spelling or a consistent transliteration. Do not translate the
   semantic content of a person's name.

## Evidence for establishment

Prefer, in order, a project-owned terminology record, consistent usage already
adopted by the manuscript, and representative literature or authoritative
terminology sources from the same discipline. Mere plausibility, a
word-for-word dictionary match, or repetition inside the current AI task does
not establish a translation.

Do not investigate the historical date at which a concept entered Japanese.
The operational question is only whether a rendering is established for the
present field and readership. When evidence is unavailable and competing forms
would change term identity, retain the English term and report the uncertainty
outside the artifact. A plausible katakana spelling is not by itself evidence
that the katakana form is preferable.

## Repair

1. Read the full sentence and surrounding paragraph. Identify the proposition
   and the role played by each suspicious expression.
2. For a technical term, verify establishment before replacing it. Keep one
   stable rendering throughout the relevant scope, except for a functional
   first-use gloss.
3. For a general word, rewrite the clause as Japanese rather than replacing the
   word in isolation. Check collocation, particle choice, topic flow, modifier
   order, agency, and information structure.
4. Remove residual source-language structure such as unnecessary abstract
   subjects, noun-heavy predicate chains, automatic passives, and nominalized
   “make possible” constructions when Japanese can state the actor or operation
   directly. Treat these as diagnostic cues, not a blacklist.
5. Re-check the source or governing claim. Preserve modality, negation,
   quantifier scope, causal direction, comparison class, technical distinctions,
   notation, and citation attachment.

## Boundaries

- Do not translate an established English or katakana field term merely to make
  the page look more Japanese.
- Do not retain English merely because the source was English; established
  Japanese terminology takes precedence.
- When no Japanese rendering is established, prefer English. Use katakana only
  when disciplinary usage or the sentence's readership makes the
  transliteration more natural without changing the concept.
- Do not manufacture a Sino-Japanese compound by translating source morphemes
  one by one.
- Do not replace a conventional technical term with a looser native-Japanese
  paraphrase when the result loses term identity.
- Do not treat every stiff sentence as mistranslated. Controlled stiffness may
  carry a real definition, proof relation, or qualification.

## Output

- **Edit:** publication-ready Japanese with stable technical terminology and
  natural sentence-level phrasing.
- **Review:** exact span, whether the problem concerns an unestablished term,
  an overly literal general word, source-language syntax, or a personal name;
  concrete wording; and any unresolved technical ambiguity.

Do not expose these classification labels in the finished manuscript.
