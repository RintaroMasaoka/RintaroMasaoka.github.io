# Study Note HTML Specification 1.1.0

## 1. Scope and versions

This specification defines the common contract for displaying, validating, and publishing Markdown manuscripts as HTML learning material. Required provisions determine conformance; recommended provisions may be changed with a recorded reason.

Record the location and adopted revision of the rendering implementation in the project's implementation mapping or adapter. To reuse behavior and appearance, start from that revision's rendering code, CSS, and lockfile. This does not prescribe future versions of dependencies. Verify that manuscripts conforming to this specification remain readable after dependency updates. “Reference implementation” below means the compatible implementation designated by the project.

Record changes that break manuscript syntax, links, or interactions as major; compatible feature additions as minor; and explanatory corrections or compatible fixes as patch. State the adopted version for each note. Do not silently apply changes requiring migration of existing manuscripts.

## 2. Manuscripts and management boundaries

Recommended layout:

```text
note-project/
  note.config.json
  content/                 # Sole canonical source of published prose
  public/diagrams/          # Displayed figures
  figure-sources/           # TeX and drawing sources
  sources/                 # Source metadata, transcriptions, acquisition records
  reviews/                 # Validation results, target revisions, publication records
  app/ components/ lib/    # Rendering and parsing implementation
  scripts/ tests/           # Drawing, validation, building
```

- Store manuscripts as UTF-8 Markdown and mathematics as TeX. Do not edit generated HTML independently of its source.
- Use one manuscript per chapter or route by default. Manage its main text, collapsible material, mathematical supplements, and reference ranges together.
- Preserve both displayed figures and the source data needed to regenerate them.
- Do not maintain copies of published manuscripts as separate editing authorities. Identify retained older drafts and make clear that they are not synchronized.
- Prefer managing manuscripts, configuration, rendering implementation, published figures, generation sources, and validation records in one Git unit. Even when source PDFs are excluded, record their locations, bibliographic data, and cited pages.
- Exclude generated output, dependency caches, and secrets from manuscript management. Keep source PDFs and review records outside publicly served directories.
- Editing Markdown in a general-purpose editor and rendering its custom blocks in that editor are separate compatibility requirements.

## 3. Chapter metadata

New notes use `note.config.json` as their canonical chapter configuration. The order of the `chapters` array determines the contents list and previous/next navigation. Do not maintain the same values, such as titles, independently in multiple places.

| Field | Type or condition | Purpose |
|---|---|---|
| `specVersion` | `"1.1.0"` | Adopted specification |
| `id` | Lowercase letters, digits, and hyphens; starts with a letter | Note identifier and namespace for saved preferences |
| `title` | Nonempty string | Note title |
| `description` | Nonempty string | Overall description |
| `language` | Language tag; legacy default `ja`; the English example explicitly sets `en` | HTML language |
| `source` | Object with `title`, `authors`, and `locator` | Source bibliography and covered range |
| `chapters` | Array with at least one entry | Chapter order |
| `chapters[].id` | `[a-z0-9]+(?:-[a-z0-9]+)*`; unique across chapters | Route `/<id>` |
| `chapters[].section` | Nonempty string | Human-readable chapter number |
| `chapters[].title` | Nonempty string; inline TeX allowed | Displayed chapter title |
| `chapters[].description` | Nonempty string; inline TeX allowed | Displayed chapter description |
| `chapters[].plainTitle` | Nonempty plain text | Browser-tab and sharing title |
| `chapters[].plainDescription` | Nonempty plain text | Sharing description |
| `chapters[].file` | Relative `.md` path inside `content/` | Manuscript |
| `chapters[].readingTimeMinutes` | Optional positive integer | Editorial estimate; omit the display when absent |
| `publication.provider` | `null` before publication; service name once chosen | Hosting service |
| `publication.projectId` | `null` before registration; actual ID afterward | Publication target |
| `publication.url` | `null` before publication; verified HTTPS URL afterward | Published location |
| `publication.visibility` | Default `private`; actual setting for an existing site | Access scope |

Maintain a one-to-one mapping between chapter IDs and manuscript files. Relative paths must not escape the working directory. Derive routes, navigation, and publication metadata from this configuration. Reading time does not imply automatic measurement or reading-history tracking.

Existing sites may retain other chapter formats through an explicit compatibility mapping. Adding JSON alone does not make an existing renderer consume it.

## 4. Main-text syntax

- Use `#` for the manuscript title, `##` and `###` for the within-chapter contents list, and `####` or deeper for subordinate headings in the body.
- Write paragraphs, lists, quotations, tables, links, images, and code in ordinary Markdown/GFM.
- Use `$...$` for inline mathematics and `$$` on separate lines for display mathematics.
- Use the same mathematical typesetting process in prose, headings, table cells, link labels, summaries, and popup bodies.
- Keep TeX inside code as literal text. Do not typeset mathematics in attribute strings such as image alt text, URLs, or tab titles.
- Convert prose `--` and `---` to en and em dashes at display time. Do not transform mathematics or code.
- Arbitrary raw HTML, JavaScript, MDX, and YAML front matter are outside the version 1.0 manuscript contract. HTML-like syntax is limited to the details and reference markers below.

## 5. Collapsible material

```html
<details id="note-example">
<summary>Supplement heading $x$</summary>

Supplementary text.

</details>
```

An `id` is required when the block is linked. Prefer an initial letter followed by letters, digits, and hyphens; IDs must be unique within a manuscript. Support nested details and details within lists or quotations. Put blank lines around markers and blocks.

Display closed by default. The `open` attribute is allowed, but main-text review examines the block in its closed state regardless of that attribute.

Following `[Supplement](#note-example)` opens the target and its ancestor details and scrolls to it. Repeated clicks and direct access to a fragment URL must also work.

Keep objects, notation, assumptions, and short justifications needed for the main conclusion in the main text. Collapsible sections may contain long calculations and complete formulas for reference. Review the summary itself as prose visible to ordinary readers.

## 6. Mathematical supplements and transformations

### `math-hint`

A code block placed immediately after display mathematics. Its contents are Markdown and may include prose and mathematics.

````markdown
$$
x^2-1=(x-1)(x+1)
$$

```math-hint
Expanding the right-hand side gives $x^2-1$.
```
````

Attach a lightbulb control to the preceding display. Version 1.0 does not support attachment directly after an `equation` block or an ordinary paragraph.

### `math-steps`

````markdown
```math-steps
lhs: (x+1)^2
part expanded: x^2+2x+1
note: Expand the product.
popup-math: (x+1)(x+1)=x^2+x+x+1
---
part regrouped: x(x+2)+1
note: Factor $x$ out of the first two terms.
```
````

- An initial `lhs:` is required. Each step needs at least one `part <id>:`.
- Part IDs use letters, digits, underscores, or hyphens. Concatenate TeX in the written order. IDs are internal identifiers and imply neither coloring nor animation.
- Separate steps with `---` on its own line. Each field occupies one line; each step has at most one `note:` and one `popup-math:`.
- `note:` contains supplementary Markdown; `popup-math:` contains TeX without dollar delimiters. `step:` is a compatibility alias for `note:`; use `note:` in new manuscripts.
- Display an equals sign on each line and the left-hand side on the first line. Use ordinary TeX environments for non-equational reasoning, inequalities, or approximation sequences.
- Keep the main equation visible; opening a supplement must not replace it.

## 7. Equation references

````markdown
```equation
id: square
(x+1)^2=x^2+2x+1
```

Use equation (square).
````

An `equation` block begins with `id: <id>`, followed by nonempty TeX. IDs use `[a-zA-Z0-9_-]+` and are unique across the site. Put any visible equation number in the TeX explicitly; do not display a number merely from its ID.

Also collect `\tag{6.12}` in ordinary `$$` blocks as an equation key. Duplicate keys are not allowed. If original equation numbers collide across sources, preserve their displayed numbers and use source-specific `equation` IDs.

Convert prose `(key)` matching a registered key into an equation preview. Do not auto-convert inside headings, summaries, mathematics, code, or existing links. Explicit `#eq-key` links are also supported.

Equation references are preview interactions. The reference implementation's popup has no link to the original equation, and collecting a `\tag` alone does not create a DOM anchor. For permanent external references, use the text-range links in the next section.

## 8. Text references and permanent links

```markdown
<!-- reference: square-identity -->

Place the existing explanation and necessary mathematics here.

<!-- /reference -->
```

- IDs use `[a-z0-9-]+` and are unique within a manuscript. Different chapters may reuse an ID.
- Put markers on separate lines with blank lines around them. Close a range within the same parent element; do not nest ranges.
- Use `[Explanation](/chapter-id#ref-square-identity)`; within the same chapter, `#ref-square-identity` also works.
- Keep the original text displayed and reuse that same range for the preview. Do not author duplicate definitions only for hover previews.
- Let readers inspect the target prose, mathematics, and conditions together and navigate to the original location through a “Go to referenced text” control.
- Treat links inside popups as ordinary links; do not open nested popups.
- Do not attach a term preview to its own introductory term, a heading, a summary, or text inside mathematics.
- Permanent links use the chapter ID and a reference or details ID. Provide compatibility for old links when changing IDs after publication.
- Ordinary heading IDs in the reference implementation depend on line numbers. Use them for within-chapter navigation, not long-term citations.

## 9. Display and interaction

The standard display has a fixed header, a chapter sidebar, and a single text column. Include the current chapter's `##` and `###` headings in its contents list and support previous/next chapter navigation. Provide a direct URL for every chapter.

- Inherit serif body typography, KaTeX mathematics, generous line spacing, subtle rules, and green reference colors from the reference implementation. Manage widths, spacing, type sizes, and light/dark colors through shared CSS.
- On small screens, make the chapter list a collapsible menu. Avoid unintended horizontal scrolling of the whole page; let long equations and figures scroll separately.
- Show popups temporarily on hover and pin them on click or tap. Outside clicks and Escape close them. Pinned popups stay open when the pointer leaves. Support keyboard interaction with visible focus.
- Keep previews within the viewport and scroll long content internally. Suggested maximum widths are 640px for text references and 680px for mathematical supplements.
- Initially follow the OS theme and save explicit choices in the browser. For new notes, distinguish storage keys by note ID.
- The progress bar represents the current page's scroll ratio. Persisted reading completion and position are outside version 1.0.
- For printing, hide the header, contents list, progress bar, theme controls, and lightbulb buttons, and use a white background. Automatic expansion of all chapters and supplements or batch PDF export is not guaranteed. Check the chapter being printed and the state of details blocks.

## 10. Figures

Prefer `public/diagrams/<id>.svg` and reference it as `![Meaningful description](/diagrams/<id>.svg)`. Use PNG or another raster format when appropriate.

- Make the figure's role, objects, and correspondences understandable from the prose. Do not require decorative figures.
- Typeset mathematical labels with TeX and retain drawing sources and regeneration instructions.
- Give SVGs lazy loading, an adequate minimum display width, and keyboard-accessible horizontal scrolling.
- Check the readability of labels, lines, and corresponding colors in both themes. Inspect every figure even when using the reference implementation's dark-theme inversion filter.
- Preserve traceable figure source data, attribution, and usage conditions.

## 11. Validation and acceptance

Pin the manuscript and implementation revisions to be published. Required checks:

1. **Manuscript consistency:** Verify uniqueness of chapter IDs, equation keys, and reference IDs; block syntax; existence of targets and figures; and correspondence between chapter configuration and routes.
2. **Mathematics:** Inspect prose, headings, tables, links, summaries, supplements, and derivations, resolving rendering errors. Check custom blocks separately from ordinary mathematics.
3. **Main-text reasoning:** Extract the main text using the same parsing process as the site, excluding details bodies, math-hints, and derivation popups. Retain visible summaries, equations, tables, links, and figure references.
4. **Independent review:** After changes to definitions, derivations, structure, or the division between main text and supplements, a reviewer uninvolved in writing reads the extracted main-text units sequentially. Then check whole-text consistency and supplements. Do not fill earlier gaps with unread later text or hidden supplements.
5. **Interaction and display:** Check desktop and mobile widths, both themes, keyboard operation, hover, pinning and closing, navigation to original locations, links inside collapsible material, and long equations and figures. For print-related changes, inspect print preview too.
6. **Build:** Confirm that the publication build succeeds and includes the figures and necessary files.

Check the scope relevant to the change. Prose-only changes do not require repeating unrelated UI checks each time. Renderer changes require regression checks of shared syntax. Successful extraction or building alone does not establish that the reasoning passes.

Review records include the target Git revision or file hashes, reader prerequisites, scope, findings and resolutions, outstanding issues, and checks performed. Keep sequential-reading outputs `body.md`, `units.json`, and `manifest.json` tied to their input revision.

The reference implementation's mathematical checks and extractor are available, but do not automatically test all manuscript consistency, custom-block rendering, or UI behavior. Supplement missing coverage manually or with additional checks. Do not record unperformed checks as passing.

## 12. Publication and recovery

1. Confirm the publication target ID, URL, and visibility. Retain existing registration for existing sites. Do not copy the reference implementation's target ID to another note.
2. Record the verified manuscript and implementation in Git and build the publication artifacts from that same state.
3. Publish the verified revision using the chosen hosting service's procedure. Keep publishing credentials out of manuscripts and Git.
4. Confirm deployment completion and check representative chapter URLs, mathematics, references, and figure loading. Do not report publication success while its result remains unverified.
5. Record the publication time, source revision, service revision ID, URL, visibility, and validation results under `reviews/`.
6. Recover using a known-good service revision or check out the corresponding Git revision in another working directory and rebuild and republish it. Preserve current unsaved manuscripts.

New notes default to private. Follow the authorized scope for external publication or expanded visibility. Record any automatic publication policy in note-specific instructions. Creating a manuscript or template alone does not trigger publication; apply publication steps to site-editing and publishing requests.
