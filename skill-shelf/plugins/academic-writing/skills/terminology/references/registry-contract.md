# Registry Contract

Read this reference when integrating the registry, consuming machine output, or
changing policy and migration behavior.

## Ownership and identity

The SQLite database is project-owned. Term keys use Unicode NFKC, case folding,
whitespace collapse, and normalized dash variants. Normalization provides lookup
identity and must not rewrite manuscript spelling.

Each term stores:

- `usage_policy`: `undecided`, `as_is`, `brief_intro`, `full_definition`, or
  `forbidden`;
- `authorization`: `none`, `ai_authorized`, or `human_authorized`;
- `deferred`: workflow state independent of policy;
- optional definition, rationale, evidence, detector information, and current
  source occurrences.

The legacy `category`, `standing`, and `reader_policy` fields remain only for
backward compatibility. New consumers must use `usage_policy`.

## Authorization

`propose` and `propose-batch` always write `ai_authorized` and clear deferral.
The local GUI may convert a proposal or override into `human_authorized`.
Deferring a term changes only `deferred`; it never grants human authorization.
This distinguishes normal channels but does not resist direct DB edits or GUI
automation.

## Version-3 migration

Version-2 records map deterministically:

1. `replace` reader policy or `suspect` standing → `forbidden`;
2. `define` reader policy or `project_coined` standing → `full_definition`;
3. `introduce` reader policy → `brief_intro`;
4. `assume_known` or `not_applicable` → `as_is`;
5. all other combinations → `undecided`.

Migration preserves authorization, occurrences, definitions, rationales, and
evidence. Version-1 registries migrate through the version-2 mapping first.

## Gate and exit status

`check` returns:

- `0` when no active term blocks;
- `1` when findings exist;
- `2` for command, input, or registry errors.

Blocking reasons include:

- `human_review_deferred`;
- `unresolved`;
- `forbidden_term_present`;
- `human_authorization_required`;
- `first_use_introduction_not_detected`;
- `first_use_definition_not_detected`.

`--allow-ai` bypasses only the human-authorization requirement for exploratory
work. It never permits undecided, deferred, forbidden, or insufficiently
introduced terms and must not be used as a publication gate.

## JSON interface

- `scan`: file, occurrence, new-term, and active-term counts;
- `queue`: active term records with policy, authorization, deferral, detector,
  occurrence count, and first occurrence;
- `propose` and `propose-batch`: updated AI-provisional records;
- `check`: `ok`, `findings`, and active-term count.

Consumers should ignore unknown fields so minor versions can add information.
