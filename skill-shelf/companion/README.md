# Skill Shelf companions

Human summaries and Mermaid organization diagrams accompany a published Skill
Shelf package version. Keep them here, outside `plugins/`, so the AI skill
entrypoints and installed package contents remain focused on execution.
The private working stock may retain drafts. Its routine edits do not require
companion maintenance. Reconcile the companion when selecting a snapshot for
publication, against `skill-shelf/plugins/<package>/`, including any adaptations
made for isolated public use.

## Files for each promoted package

Create `companion/<package>/HUMAN.md` and `review.json`. The summary explains:

- the purpose, selection conditions, expected inputs, and outputs;
- the roles and the skills fulfilling them;
- coordination, conditional handoffs, feedback, and important boundaries;
- links to the exact release-source files supporting those relationships.

Include a Mermaid fenced block. A box represents a role, not necessarily a
separate agent. Distinguish coordination from execution order and label optional
branches. Source links from this directory begin `../../plugins/<package>/`.
Do not copy private catalog entries, machine paths, or working-stock instructions
into the public companion.

## Catch up during promotion

1. Finalize the selected release snapshot and its new package version through
   the existing review, validation, and isolated-use checks.
2. Read its current entrypoints and supporting files. Bring the summary and
   every role/handoff in the diagram into agreement with that release snapshot.
3. Render the Mermaid diagram and inspect its labels, relationships, and layout.
4. Record the checked package version, full package fingerprint, summary digest,
   date, and completed checks in `review.json`. Do not replace the fingerprints
   merely to make a check pass; first repeat the affected content/visual review.
5. Run the catch-up check for every package being promoted, then run the existing
   release checks and generate downloads. Commit the companion and review record
   with that promotion. Further edits invalidate the affected record.

```sh
python3 skill-shelf/scripts/check_companions.py --package PACKAGE_NAME
```

Repeat `--package` for multiple promoted packages. An absent, stale, or incomplete
companion fails this promotion check. Existing published versions do not become
retrospectively reviewed; prepare their companions when they are next promoted.
This command is a promotion check, not a prerequisite for ordinary stock edits
or unrelated site builds. It is not yet wired to automatic deployment or download
packaging. The companion currently ships as source documentation in this
repository; website presentation and ZIP inclusion are separate changes.

## Review record

```json
{
  "schema_version": 1,
  "package": "PACKAGE_NAME",
  "version": "RELEASE_VERSION",
  "source_sha256": "FULL_PACKAGE_SHA256",
  "summary_sha256": "HUMAN_MD_SHA256",
  "reviewed_on": "YYYY-MM-DD",
  "checks": {
    "summary_fidelity": true,
    "roles_and_handoffs": true,
    "mermaid_rendered": true
  }
}
```

The package fingerprint hashes compact, key-sorted JSON mapping every relative
file path to its SHA-256, using the same convention and ignored runtime debris
as the download builder. `check_companions.fingerprint(package_path)` computes
it; `sha256(HUMAN_md_path.read_bytes())` computes the summary digest. Neither
operation performs the semantic or visual review. The checker binds an explicit
review record to the final bytes; it does not independently prove its assertions.
