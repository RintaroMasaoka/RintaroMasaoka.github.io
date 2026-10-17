# Subject/prerequisite lane — frozen review

Verdict: PASS for the supplied single paragraph and attached source/target screenshots. Scope is conceptual meaning and application; proof of state–operator correspondence and certification of the implementation are outside this verdict.

Unit: “state-operator correspondence を使うと、平坦空間の原点に挿入した局所演算子は、S²×R 上の状態に対応する。ここで R は radial quantization の時間方向であり、S² は原点を囲む球面である。”

Supported baseline: polar coordinates, sphere, and CFT local operators/states. No previously read passage was supplied or assumed.

| Premise-demanding expression or relation | Available witness | Reconstructible object and operation | Next usable inference |
| --- | --- | --- | --- |
| Local operator at the flat-space origin corresponds to a state on S²×R | Paragraph explicitly supplies the imported correspondence and identifies its operator and state arguments. Figure labels O(0), |O〉, and τ→−∞. | Associate an insertion O(0) with a state |O〉 on spherical spatial slices; origin is the limiting past of cylinder time, rather than an ordinary finite-time cylinder point. | Read subsequent cylinder states as the radial-quantization representation of the insertion. Meaning/application is supplied; no optional proof is demanded. |
| R as radial-quantization time; S² as enclosing sphere | Paragraph identifies both factors. Figure supplies τ=log r, r↦er ⇔ τ↦τ+1, positive-radius domain R³\\{0}, and the metric relation ds²_flat=e^(2τ)(dτ²+dΩ²₂), ds²_cyl=dτ²+dΩ²₂. Caption says Weyl rescaling removes e^(2τ). | Hold angular position fixed and map radius r>0 to a cylinder time slice τ. The flat-space spheres become cylinder spatial S² slices; the conformal factor accounts for why the cylinder metric is not the unchanged flat metric. | Interpret scaling outward as forward time and equal radial ratios as equal cylinder-time intervals. |
| Movable sphere and time slice are a corresponding pair | Source shows r=0.741, τ=−0.300; target shows r=2.014, τ=0.700. Both conform to r=e^τ. Bold contours and marked points supply the movable pair; caption distinguishes whole S² slices from depicted sections and suppresses one angle. | Change either paired radius/time coordinate while maintaining the logarithmic relationship and fixed angular position. Between supplied states, Δτ=1 and the radius ratio is approximately e. | Use the interaction to recognize radial evolution as cylinder-time translation. No mechanism of state evolution beyond this coordinate relation is claimed by the packet. |

Unfamiliar imported result: state–operator correspondence. Required depth here is meaning and application, both given by the paragraph and |O〉/O(0) figure labels. The packet does not ask the reader to derive the theorem or calculate the state from an arbitrary operator. The supplied scope therefore does not require a further proof or deferred learning route.

Uncertainty: Screenshots establish two visible states, not event-handler behavior or continuous dragging correctness. This is a subject/prerequisite verdict only; no rhetoric or visual-design verdict is offered.

Evidence access: only supplied screenshots and the required subject-lane rubric were read; no full note, external sources, project discovery, or thread-history content was consulted.
