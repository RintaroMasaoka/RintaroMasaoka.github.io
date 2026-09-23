import _bootstrap  # noqa: F401
from manim import Circle, Square, VGroup

from manim_slides_gate import assert_no_component_overlap, find_component_overlaps


def test_separated_components_pass():
    left = Square().shift((-2, 0, 0))
    right = Square().shift((2, 0, 0))
    assert find_component_overlaps({"left": left, "right": right}) == []


def test_overlap_reports_named_pair_and_measurements():
    left = Square()
    right = Circle().shift((0.5, 0, 0))
    findings = find_component_overlaps({"claim": left, "diagram": right})
    assert len(findings) == 1
    assert {findings[0].first, findings[0].second} == {"claim", "diagram"}
    assert findings[0].overlap_area > 0
    assert findings[0].smaller_box_fraction > 0


def test_allowed_overlay_and_grouped_overlay_pass():
    box = Square()
    label = Circle(radius=0.2)
    assert_no_component_overlap(
        {"box": box, "label": label},
        allow=[("box", "label")],
    )
    card = VGroup(box, label)
    other = Square().shift((3, 0, 0))
    assert_no_component_overlap({"card": card, "other": other})


def test_assertion_names_the_colliding_components():
    try:
        assert_no_component_overlap({"title": Square(), "body": Square()})
    except AssertionError as error:
        message = str(error)
        assert "title x body" in message
        assert "smaller_fraction=" in message
    else:
        raise AssertionError("expected overlap assertion")


if __name__ == "__main__":
    test_separated_components_pass()
    test_overlap_reports_named_pair_and_measurements()
    test_allowed_overlay_and_grouped_overlay_pass()
    test_assertion_names_the_colliding_components()
    print("overlap gate tests passed")
