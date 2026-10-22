# Visual review — Jost-profile figure

## Coverage and first visual impression

Reviewed `bound-desktop.jpg`, `independent-desktop.jpg`, `bound-mobile-light.jpg`, and `bound-mobile-dark.jpg` from the rendered images only, without consulting implementation or author rationale. The desktop bound-state view and both mobile themes show a single symmetric, positive hump centered at (x=0), falling toward zero on both sides. The solid and dashed profiles appear to coincide, and the displayed W value is 0. The independent desktop view instead shows two distinct profiles: one grows strongly toward the right edge while the other decays from a large value at the left edge; they meet near the center. Its displayed W value is -0.2474. At a glance, the screenshots communicate a shared decaying profile at the bound-state setting and visibly different profiles in the independent example.

## Visual judgment

The line styles, axes, and labels are legible in both desktop and mobile views. The legend identifies the two profiles by solid/dashed style and by their (f_-)/(f_+) labels. In the bound image, overlap makes the dashed profile hard to distinguish, but the legend still indicates that two traces are intended; the coincidence itself is clear. The central vertical guide and zero baseline help show symmetry and decay. The mobile light and dark renderings preserve these cues and readable contrast.

The figures communicate the two endpoint examples, but the set of images does not show an intermediate energy. Therefore, the visual change *as E changes* cannot be assessed from this packet. Also, each graph uses its own vertical range: the bound profile peaks at 0.5, while the independent profiles span values above 8. As a result, comparing apparent widths or amplitudes across the two figures would be misleading. The independent graph's large edge values dominate the scale and compress the near-zero region, though the divergent-versus-decaying distinction remains visible. The numeric W values are prominent and readable; the visual itself does not encode why zero is the criterion for proportionality, so that inference depends on the reader already knowing the stated criterion.

## Verdict

**Pass for the endpoint visual inference, with a scope limitation.** At E = -1 the plotted traces visibly coincide in a positive profile that decays toward both ends, alongside W = 0; the independent example visibly separates the traces and has nonzero W. Mobile themes retain that message. This packet does not establish how the profiles evolve across E because it contains no intermediate-energy view, and cross-figure magnitude/width comparisons are not supported by the independent axis scaling.

## Additional near-bound state

Reviewed `near-bound-desktop.jpg` as a single additional visual state (E = -1.05, W = -0.025). The two curves are distinguishable across most of the domain despite sharing a similar central peak: the solid curve rises toward the right edge, while the dashed curve falls toward zero; their left-side shapes also differ. The distinct line styles and dark green/black contrast make that separation readable, and the small nonzero W value is legible. This image supports reading curve differences near the bound-state setting. It does not establish behavior across the full energy interval.
