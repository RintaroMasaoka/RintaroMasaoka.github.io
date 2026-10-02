# Research Tree Contract

The active tree is compressed memory for research decisions, not a complete work history. Store history in .logs, provisional work in _reviews, and reusable current understanding in the research tree.

## Main documents and directories

    research/
      focus.md
      story.md
      principles.md
      conventions.md
      map.md
      {node}/
        state.md
        map.md
        plan.md
        findings.md
        guide.md
        sources.md
        backlog.md
        asides.md
        dead_ends.md
        checks/
        _reviews/{slug}/
        _materials/{src,data,images,analyses}/
      archive/

- focus.md: the research lead's current decisions: cursor, lead work, selective dispatches, directives, and blockers.
- state.md: the node's Current Board and integrated evidence. Keep it short.
- map.md: each child's role, status, implications, and reopening conditions from the parent's perspective.
- plan.md: active decomposition, dependencies, and methods and success criteria adopted by the research lead and recorded by the curator.
- findings.md: admitted, reusable claims and derivations. Each principal claim needs a checks link.
- guide.md: an entry point for human inspection, without independent authority.
- sources.md: routes to sources used by the current direction.
- backlog.md: future tasks that do not obstruct the current dispatch.
- asides.md: items outside the active thread worth retaining. No authority for facts.
- dead_ends.md: reusable failure conditions and conditions for reopening.
- checks/: durable verification provenance.
- _reviews/: provisional worker/critic transactions.
- _materials/: code, data, figures, and clean analyses. Their existence alone gives no authority for facts.

## Node identity and lifecycle

Each node represents one research object, question, construction, result, bridge, warning, or gap. Consider splitting when independent problems or success criteria are mixed. For a node containing only process history, extract reusable material before archiving it.

Use kind and status in state.md frontmatter. Standard statuses are active, blocked, stable, closed, and archived. The curator completes status changes, creation, reparenting, and archiving as transactions required by research lead directives or existing evidence. The curator must not invent scientific priorities.

Minimal state.md shape:

    ---
    kind: question | construction | result | bridge | warning | other
    status: active | blocked | stable | closed | archived
    parent: research/{parent}/
    ---
    # {Node}
    ## Background
    ## Current Board
    ## Evidence

Replace Current Board with current understanding. Append integrated candidates, scope, verdicts, and implications for the next decision to Evidence. Move long derivations to findings or clean analyses and chronology to logs.

## Authority

- Research lead: focus.md, scientific directives, ordinary research execution, Research Draft, and the session closing packet. May update node-local working evidence in state and strategy in plan without changing graph meaning. Must not directly edit status/kind, maps, findings, checks, or cross-node routes.
- research-planner: explicitly requested, bounded advice on direction only. No authority to write focus or the tree.
- curator: graph/lifecycle, cross-node state/plan integration, maps, findings materialisation, checks routing, and archiving.
- critic: critic files in _reviews and requested checks reviews.
- worker: _reviews and explicitly specified _materials.
- guide-writer: guide.md.
- Project owner: story, paper writing, and narratives requiring human approval. This package does not automatically perform those tasks.

## Provisional review

Use a single transaction directory for:

    worker.md
    critic.md
    repair.md
    critic_rereview.md

The last two files are used only for the single permitted repair loop. The critic does not directly edit worker files. Review modes are blind, source-audit, and contextual. Verdicts are ACCEPT, REJECT, REVISE-NONBLOCKING, REVISE-BLOCKING, and OPAQUE.

For consequential claims, the curator integrates as established support only material reviewed by the critic and free of blocking defects. Lead-adopted material without a critic review may be integrated only into working state explicitly marked `unreviewed`; do not promote it to findings or confirmed support. Leave no durable links to _reviews or .logs.

## Durable facts and provenance

Each principal claim in findings.md requires:

1. The claim and its scope of applicability
2. A derivation or derivation outline the reader can follow
3. Limitations and the boundary between source content and project inference
4. A Markdown link to checks/{slug}.md

Check file frontmatter:

    confidence: confirmed | strong-conjecture | conjecture | open
    evidence: [proof | mechanical | numerical | literature]
    review: [critic-blind | critic-contextual]
    scope: full or specific limitations
    supports_project_central_claim: true | false

confirmed requires at least one form of first-order evidence and full scope. Critic review does not replace evidence. Literature alone can justify confirmed only for a direct citation of an external result that does not support the project's central claim. A central project claim requires local proof, mechanical evidence, or numerical evidence.

A Durable Surface Review file has record_kind: durable-surface-review, target, surface, review_mode, verdict, and scope. It is a review record, not the terminal provenance endpoint for a principal claim. The curator combines evidence and accepted review in a check record with record_kind: provenance.

When newly materialising substantive findings or a clean analysis, the curator requests a Durable Surface Review and reflects the result in checks and the reviewed document.

## Materials

- src: reproducible code with a short companion description. Place it at the lowest common ancestor of the nodes that share it.
- data: place it in the node that owns the observable. Use TSV tables with metadata headers by default.
- images: use the same node as the corresponding data or analysis.
- analyses: clean narratives that have passed review and curator placement. They are not findings.

Filter materials through indexes or frontmatter before reading them. Move superseded artifacts to the archive instead of deleting them. Do not commit generated caches, bytecode, or environment-specific files.

## Transaction close

The curator reconciles links, naming, notation, provenance, parent maps, and status for the durable prose touched by the transaction. If choices that change meaning remain unresolved, do not repair them unilaterally; return Admission blocked or a blocker with an owner.
