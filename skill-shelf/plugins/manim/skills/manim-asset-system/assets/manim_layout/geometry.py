"""Deterministic geometry gates for logical Manim components."""
from __future__ import annotations

from dataclasses import dataclass
from itertools import combinations
from typing import Iterable, Mapping, Sequence

from manim import Mobject


@dataclass(frozen=True)
class OverlapFinding:
    first: str
    second: str
    overlap_width: float
    overlap_height: float
    overlap_area: float
    smaller_box_fraction: float


def _component_name(mobject: Mobject, index: int) -> str:
    return f"{index}:{mobject.__class__.__name__}"


def find_component_overlaps(
    components: Mapping[str, Mobject] | Sequence[Mobject],
    *,
    allow: Iterable[tuple[str | Mobject, str | Mobject]] = (),
    min_overlap: float = 0.01,
    min_smaller_fraction: float = 0.001,
) -> list[OverlapFinding]:
    """Return bounding-box collisions between named logical components."""
    if isinstance(components, Mapping):
        named = list(components.items())
    else:
        named = [(_component_name(mob, index), mob) for index, mob in enumerate(components)]

    allowed_names: set[frozenset[str]] = set()
    allowed_ids: set[frozenset[int]] = set()
    for first, second in allow:
        if isinstance(first, str) and isinstance(second, str):
            allowed_names.add(frozenset((first, second)))
        elif isinstance(first, Mobject) and isinstance(second, Mobject):
            allowed_ids.add(frozenset((id(first), id(second))))
        else:
            raise TypeError("allow pairs must contain either two names or two Mobjects")

    findings: list[OverlapFinding] = []
    for (first_name, first), (second_name, second) in combinations(named, 2):
        if first is second:
            continue
        if frozenset((first_name, second_name)) in allowed_names:
            continue
        if frozenset((id(first), id(second))) in allowed_ids:
            continue

        overlap_width = min(first.get_right()[0], second.get_right()[0]) - max(
            first.get_left()[0], second.get_left()[0]
        )
        overlap_height = min(first.get_top()[1], second.get_top()[1]) - max(
            first.get_bottom()[1], second.get_bottom()[1]
        )
        if overlap_width <= min_overlap or overlap_height <= min_overlap:
            continue

        overlap_area = overlap_width * overlap_height
        first_area = max(0.0, first.width) * max(0.0, first.height)
        second_area = max(0.0, second.width) * max(0.0, second.height)
        smaller_area = min(first_area, second_area)
        fraction = overlap_area / smaller_area if smaller_area else 0.0
        if fraction < min_smaller_fraction:
            continue
        if {first.__class__.__name__, second.__class__.__name__} <= {"VGroup", "Group"}:
            continue
        if (
            {first.__class__.__name__, second.__class__.__name__}
            & {"Rectangle", "RoundedRectangle", "SurroundingRectangle"}
            and fraction >= 0.9
        ):
            continue
        if "SurroundingRectangle" in {first.__class__.__name__, second.__class__.__name__} and fraction >= 0.5:
            continue
        findings.append(
            OverlapFinding(
                first=first_name,
                second=second_name,
                overlap_width=float(overlap_width),
                overlap_height=float(overlap_height),
                overlap_area=float(overlap_area),
                smaller_box_fraction=float(fraction),
            )
        )
    return findings


def assert_no_component_overlap(
    components: Mapping[str, Mobject] | Sequence[Mobject],
    **kwargs,
) -> None:
    findings = find_component_overlaps(components, **kwargs)
    if not findings:
        return
    details = "; ".join(
        f"{item.first} x {item.second}: "
        f"size=({item.overlap_width:.3f}, {item.overlap_height:.3f}), "
        f"area={item.overlap_area:.3f}, smaller_fraction={item.smaller_box_fraction:.1%}"
        for item in findings
    )
    raise AssertionError(f"component overlap detected: {details}")


__all__ = ["OverlapFinding", "assert_no_component_overlap", "find_component_overlaps"]
