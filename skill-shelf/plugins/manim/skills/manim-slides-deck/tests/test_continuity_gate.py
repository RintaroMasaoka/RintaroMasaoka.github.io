import _bootstrap  # noqa: F401
from manim import MathTex, TransformMatchingTex
from manim_slides_gate import ContinuitySnapshot, GatedSlide


def snapshot(content_key):
    return ContinuitySnapshot(
        object_id=1,
        class_name="MathTex",
        semantic_id=None,
        geometry_hash="shape",
        center=(0.0, 0.0),
        width=1.0,
        height=1.0,
        content_key=content_key,
        font_size=48.0,
    )


def test_content_similarity_accepts_local_tex_change():
    score = GatedSlide._content_similarity(
        snapshot("tex_strings:100"),
        snapshot("tex_strings:1000"),
    )
    assert score >= 0.65


def test_content_similarity_rejects_unrelated_tex():
    score = GatedSlide._content_similarity(
        snapshot(r"tex_string:\\alpha+1"),
        snapshot(r"tex_string:z^9"),
    )
    assert score < 0.65


def gated_slide_for_trace():
    slide = object.__new__(GatedSlide)
    slide._gate_database_cache = {"continuity": {}}
    slide._continuity_findings = []
    slide._continuity_removed = []
    return slide


def test_transform_matching_tex_uses_official_root_handoff():
    old = MathTex("100")
    new = MathTex("100", "0", arg_separator="")
    animation = TransformMatchingTex(old, new)
    assert animation.to_remove[0] is old
    assert animation.to_add is new


def test_natural_content_growth_is_not_scale_drift():
    old = MathTex("100")
    new = MathTex("100", "0", arg_separator="")
    slide = gated_slide_for_trace()
    slide._record_transition_drift((TransformMatchingTex(old, new),))
    assert not any(item.kind == "font-or-scale-drift-candidate" for item in slide._continuity_findings)


def test_similar_formula_move_and_true_scale_are_reviewed():
    old = MathTex("100")
    new = MathTex("100", "0", arg_separator="").shift((1, 0, 0)).scale(1.3)
    slide = gated_slide_for_trace()
    slide._record_transition_drift((TransformMatchingTex(old, new),))
    kinds = {item.kind for item in slide._continuity_findings}
    assert "position-drift-candidate" in kinds
    assert "font-or-scale-drift-candidate" in kinds


def test_matching_tex_internal_fades_do_not_trigger_recreation_fatal():
    old = MathTex("a")
    new = MathTex("b")
    slide = gated_slide_for_trace()
    slide._record_continuity_play((TransformMatchingTex(old, new),))
    assert slide._continuity_findings == []


if __name__ == "__main__":
    test_content_similarity_accepts_local_tex_change()
    test_content_similarity_rejects_unrelated_tex()
    test_transform_matching_tex_uses_official_root_handoff()
    test_natural_content_growth_is_not_scale_drift()
    test_similar_formula_move_and_true_scale_are_reviewed()
    test_matching_tex_internal_fades_do_not_trigger_recreation_fatal()
    print("continuity similarity tests passed")
