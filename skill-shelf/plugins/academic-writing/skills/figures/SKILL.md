---
name: figures
description: Create or revise explanatory diagrams and scientific figures for academic notes, teaching documents, papers, and slides. Design the figure around the reader's next inference, typeset all mathematical labels from TeX, and inspect the rendered result. Use for static figures and explanatory web diagrams, not decorative artwork or animation choreography.
---

Read [the shared authoring contract](../../references/authoring-contract.md) before applying this workflow.

# Academic Figures

Make a figure that helps the intended reader infer a specific relation. A
figure is part of the argument: it can carry spatial correspondence, a change
of representation, a comparison, or the mechanism behind a calculation.

## Decide what the figure must do

Before drawing, identify from the surrounding explanation:

- What the reader already understands and what this figure must establish.
- The concrete inference the reader should be able to make from it.
- Which objects, relations, and mathematical conditions determine that inference.

Use established audience information. Do not turn a request for a missing
bridge into a beginner's introduction to the whole field. If an uncertain
prerequisite would change what the figure teaches, ask one narrow question
before choosing that explanation. Work on independent parts while waiting.
If the audience premise changes, reconsider the dependent visual choices and
labels, including deleting explanations that have become unnecessary.

Use a figure where seeing the relation makes it easier to understand than
tracking it in prose. Do not merely place sentences in boxes. Keep a derivation
as typeset mathematics when its essential content is algebraic and a diagram
would add no information.

## Preserve the represented objects

Choose geometry from the relation being shown, not from available shapes.
Distinguish domains, spaces, states, configurations, and their images whenever
confusing them would change the inference. Label schematic projections or
sections when dimensions or topology could otherwise be misread.

Every arrow must have a determinate meaning: map, evolution, implication,
measurement, or another specified operation. Anchor it to the correct object
and make its destination unambiguous. Different meanings need distinct labels
or visual treatments. Do not imply a physical process merely to connect two
panels. Preserve orientation, boundary conditions, constraints, and limiting
assumptions that matter to the claim.

For quantitative figures, preserve the data and identify quantities, units,
scales, and uncertainty where applicable. Do not invent numerical values to
make a conceptual figure look quantitative.

## Mathematical text must use TeX

**All mathematics in a figure must be authored in TeX/LaTeX and typeset by a
math renderer.** This includes single mathematical variables, subscripts,
superscripts, indices, operators, state notation, arrow labels, axis labels,
legends, and equations inside otherwise ordinary text.

- Use a LaTeX workflow such as TikZ/PGF or TeX-rendered labels for exported
  figures. A web figure may use KaTeX or MathJax with TeX source.
- With Matplotlib, use a TeX-backed text workflow or composite independently
  TeX-rendered labels. Its default MathText renderer is not a substitute for
  this requirement; surrounding a string with dollar signs alone does not
  establish that TeX rendered it.
- Do not approximate mathematical notation with Unicode subscripts, ordinary
  text, hand-placed glyphs, drawing paths by hand, or image-generated lettering.
  Vector outlines produced by a TeX renderer are acceptable final output.
- Ordinary Japanese or other prose may use a suitable text font separately.
  Match its size and baseline to the mathematics without converting formulas
  into plain text to solve a font problem.
- Keep the editable TeX source and figure source. Check the actual rendering
  configuration and output; do not infer compliance from appearance alone.

If the chosen renderer cannot satisfy this requirement, switch to a supported
TeX workflow. Do not silently fall back to plain text or MathText. Report an
actual unresolved rendering limitation before calling the figure finished.

## Arrange information for immediate use

Place related objects and their correspondence within the same usable view.
Attach labels to the objects they identify; use matching notation and stable
visual encodings across panels. Prefer direct labels when a legend would make
the reader repeatedly look away from the relation.

Introduce symbols at the point where their purpose becomes apparent. Do not
make the reader remember an unexplained label, infer the panel reading order,
or track which intermediate question has already been answered. Split a figure
when its independent arguments compete for attention, not simply because it
contains many marks. Preserve enough detail to support the inference.

Integrate the figure where that inference is needed in the document. Prose
should supply assumptions or reasoning that the picture cannot show; the
caption should identify scope and interpretation. Avoid repeating the complete
visual explanation in both caption and body. Provide useful alternative text
for the final medium.

## Verify the rendered figure

Inspect the actual export at its intended reading size, alongside its nearby
text when available. Check mathematical rendering, label placement, clipping,
contrast, arrow endpoints, and consistent notation. Prefer vector output for
line diagrams; use an appropriate raster resolution when vector output is
unsuitable. Keep the editable source with the artifact.

Then perform the intended inference using only the reader's prerequisites and
the visible figure and surrounding explanation. Record a specific missing
relation if it fails. Check both directions: an explanation may be necessary
but absent, or correct but unnecessary for this reader. A visually clean image
and a successful export do not establish pedagogical success.

Fix demonstrated defects and re-inspect the affected output. Hand off the
verified figure to the document or site workflow; this skill does not itself
authorize publication or modification of unrelated figures.
