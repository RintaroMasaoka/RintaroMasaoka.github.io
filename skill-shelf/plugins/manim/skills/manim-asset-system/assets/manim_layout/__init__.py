"""Deterministic layout solver for semantic Manim composition intents."""
from __future__ import annotations

from dataclasses import dataclass
from typing import Iterable, Literal, Mapping

import numpy as np
from manim import AnimationGroup, BLUE, DOWN, FadeIn, FadeOut, Group, LEFT, MathTex, Mobject, ORIGIN, RIGHT, TEAL, Text, UP, YELLOW, config

from .geometry import OverlapFinding, assert_no_component_overlap, find_component_overlaps

GAPS = {"none": 0.0, "small": 0.18, "medium": 0.36, "large": 0.68}
FRAME_PADDING = {
    "compact": (0.35, 0.30),
    "normal": (0.55, 0.45),
    "generous": (0.85, 0.65),
}
PACING = {"brief": 0.3, "quick": 0.45, "normal": 0.8, "slow": 1.2}
TEXT_SIZES = {"title": 40, "heading": 32, "body": 28, "label": 24}
MATH_SIZES = {"display": 48, "compact": 40, "detail": 36}
MIN_READABLE_SCALE = 0.72
SEMANTIC_COLORS = {"relation": TEAL, "source": YELLOW, "image": BLUE}

Align = Literal["start", "center", "end"]
Fit = Literal["contain", "fill"]
Gap = Literal["none", "small", "medium", "large"]
Padding = Literal["compact", "normal", "generous"]
Pace = Literal["brief", "quick", "normal", "slow"]
TextRole = Literal["title", "heading", "body", "label"]
MathRole = Literal["display", "compact", "detail"]
ColorRole = Literal["relation", "source", "image"]


class LayoutError(RuntimeError):
    pass


class LayoutOverflow(LayoutError):
    pass


def _choice(value: str, allowed: dict[str, object] | set[str], label: str) -> str:
    if value not in allowed:
        raise LayoutError(f"unsupported {label}: {value}")
    return value


def semantic_text(content: str, *, role: TextRole = "body", **kwargs) -> Text:
    role = _choice(role, TEXT_SIZES, "text role")
    if "font_size" in kwargs:
        raise LayoutError("font_size is owned by the registered text role")
    return Text(content, font_size=TEXT_SIZES[role], **kwargs)


def semantic_math(*tex_strings: str, role: MathRole = "display", **kwargs) -> MathTex:
    role = _choice(role, MATH_SIZES, "math role")
    if "font_size" in kwargs:
        raise LayoutError("font_size is owned by the registered math role")
    return MathTex(*tex_strings, font_size=MATH_SIZES[role], **kwargs)


class SemanticMathTex(MathTex):
    """A MathTex expression whose externally animated pieces have semantic names."""

    def __init__(self, semantic_parts: Mapping[str, str], *, role: MathRole = "display", **kwargs):
        if not semantic_parts:
            raise LayoutError("semantic_math_parts requires at least one named part")
        if any(not isinstance(name, str) or not name for name in semantic_parts):
            raise LayoutError("every semantic math part needs a nonempty name")
        role = _choice(role, MATH_SIZES, "math role")
        if "font_size" in kwargs:
            raise LayoutError("font_size is owned by the registered math role")
        super().__init__(*semantic_parts.values(), font_size=MATH_SIZES[role], **kwargs)
        self._semantic_parts = {
            name: self.submobjects[index]
            for index, name in enumerate(semantic_parts)
        }

    def part(self, name: str) -> Mobject:
        try:
            return self._semantic_parts[name]
        except KeyError as exc:
            available = ", ".join(self._semantic_parts)
            raise LayoutError(f"unknown semantic math part {name!r}; available: {available}") from exc


def semantic_math_parts(*, role: MathRole = "display", **parts: str) -> SemanticMathTex:
    return SemanticMathTex(parts, role=role)


def duration(pace: Pace = "normal") -> float:
    pace = _choice(pace, PACING, "pace")
    return PACING[pace]


def semantic_color(role: ColorRole):
    role = _choice(role, SEMANTIC_COLORS, "color role")
    return SEMANTIC_COLORS[role]


@dataclass(frozen=True)
class LayoutRegion:
    width: float
    height: float
    center: np.ndarray

    @classmethod
    def frame(cls, *, padding: Padding = "normal") -> "LayoutRegion":
        padding = _choice(padding, FRAME_PADDING, "frame padding")
        margin_x, margin_y = FRAME_PADDING[padding]
        return cls(
            float(config.frame_width - 2 * margin_x),
            float(config.frame_height - 2 * margin_y),
            np.array(ORIGIN, dtype=float),
        )


class Stack(Group):
    direction = RIGHT

    def __init__(self, *children: Mobject, gap: Gap = "medium", align: Align = "center"):
        super().__init__(*children)
        self.gap_name = _choice(gap, GAPS, "gap")
        self.gap = GAPS[self.gap_name]
        self.align = _choice(align, {"start", "center", "end"}, "alignment")

    def add(self, *mobjects: Mobject) -> "Stack":
        super().add(*mobjects)
        return self

    def _aligned_edge(self):
        if self.align == "center":
            return ORIGIN
        if self.direction[0]:
            return UP if self.align == "start" else DOWN
        return LEFT if self.align == "start" else RIGHT

    def reflow(self, *, recursive: bool = True) -> "Stack":
        if recursive:
            for child in self.submobjects:
                if isinstance(child, Stack):
                    child.reflow(recursive=True)
        kwargs = {} if self.align == "center" else {"aligned_edge": self._aligned_edge()}
        self.arrange(self.direction, buff=self.gap, center=True, **kwargs)
        return self

    def layout_leaves(self) -> list[Mobject]:
        leaves: list[Mobject] = []
        for child in self.submobjects:
            leaves.extend(child.layout_leaves() if isinstance(child, Stack) else [child])
        return leaves


class Row(Stack):
    direction = RIGHT


class Column(Stack):
    direction = DOWN


class Grid(Stack):
    def __init__(
        self,
        *children: Mobject,
        rows: int | None = None,
        cols: int | None = None,
        gap: Gap = "medium",
    ):
        super().__init__(*children, gap=gap)
        self.rows, self.cols = rows, cols

    def reflow(self, *, recursive: bool = True) -> "Grid":
        if recursive:
            for child in self.submobjects:
                if isinstance(child, Stack):
                    child.reflow(recursive=True)
        self.arrange_in_grid(rows=self.rows, cols=self.cols, buff=self.gap)
        return self


class Page:
    def __init__(
        self,
        root: Stack | Mobject,
        *,
        region: LayoutRegion | None = None,
        fit: Fit = "contain",
        horizontal: Align = "center",
        vertical: Align = "center",
    ):
        self.root = root if isinstance(root, Stack) else Column(root)
        self.region = region or LayoutRegion.frame()
        self.fit = _choice(fit, {"contain", "fill"}, "fit")
        self.horizontal = _choice(horizontal, {"start", "center", "end"}, "horizontal alignment")
        self.vertical = _choice(vertical, {"start", "center", "end"}, "vertical alignment")
        self._applied_scale = 1.0

    @property
    def mobject(self) -> Stack:
        return self.root

    def _leaves(self) -> list[Mobject]:
        return self.root.layout_leaves()

    def _target_center(self, scaled_width: float, scaled_height: float) -> np.ndarray:
        center = self.region.center.copy()
        horizontal_sign = {"start": -1.0, "center": 0.0, "end": 1.0}[self.horizontal]
        vertical_sign = {"start": 1.0, "center": 0.0, "end": -1.0}[self.vertical]
        center[0] += horizontal_sign * max(self.region.width - scaled_width, 0.0) / 2
        center[1] += vertical_sign * max(self.region.height - scaled_height, 0.0) / 2
        return center

    def _compute_target(self, *, new_ids: set[int] | None = None) -> float:
        new_ids = new_ids or set()
        snapshot = {id(leaf): (leaf.get_center().copy(), float(leaf.width)) for leaf in self._leaves()}
        try:
            if self._applied_scale != 1.0:
                for leaf in self._leaves():
                    if id(leaf) not in new_ids:
                        leaf.scale(1 / self._applied_scale)
            self.root.reflow(recursive=True)
            if self.root.width <= 0 or self.root.height <= 0:
                raise LayoutError("layout root must contain positive-size mobjects")
            available_scale = min(self.region.width / self.root.width, self.region.height / self.root.height)
            scale = min(available_scale, 1.0) if self.fit == "contain" else available_scale
            if scale < MIN_READABLE_SCALE:
                raise LayoutOverflow(
                    f"layout needs scale {scale:.3f}, below runtime readability policy "
                    f"{MIN_READABLE_SCALE:.3f}; split or simplify the semantic composition"
                )
            target_center = self._target_center(self.root.width * scale, self.root.height * scale)
            self.root.scale(scale).move_to(target_center)
            return scale
        except Exception:
            for leaf in self._leaves():
                center, width = snapshot[id(leaf)]
                leaf.scale_to_fit_width(width).move_to(center)
            raise

    def apply(self) -> Stack:
        self._applied_scale = self._compute_target()
        return self.root

    def animate_reflow(
        self,
        *,
        new: Iterable[Mobject] = (),
        removed: Iterable[Mobject] = (),
        pace: Pace = "normal",
    ) -> AnimationGroup:
        pace = _choice(pace, PACING, "pace")
        new_ids = {id(mobject) for mobject in new}
        leaves = self._leaves()
        old = {id(leaf): (leaf.get_center().copy(), float(leaf.width)) for leaf in leaves if id(leaf) not in new_ids}
        target_scale = self._compute_target(new_ids=new_ids)
        targets = {id(leaf): (leaf.get_center().copy(), float(leaf.width)) for leaf in leaves}
        animations = []
        for leaf in leaves:
            target_center, target_width = targets[id(leaf)]
            if id(leaf) in new_ids:
                animations.append(FadeIn(leaf))
                continue
            old_center, old_width = old[id(leaf)]
            leaf.scale_to_fit_width(old_width).move_to(old_center)
            animations.append(leaf.animate.scale_to_fit_width(target_width).move_to(target_center))
        animations.extend(FadeOut(mobject) for mobject in removed)
        self._applied_scale = target_scale
        return AnimationGroup(*animations, lag_ratio=0, run_time=PACING[pace])


__all__ = [
    "Column",
    "FRAME_PADDING",
    "GAPS",
    "Grid",
    "LayoutError",
    "LayoutOverflow",
    "LayoutRegion",
    "MIN_READABLE_SCALE",
    "MATH_SIZES",
    "OverlapFinding",
    "PACING",
    "Page",
    "Row",
    "SemanticMathTex",
    "SEMANTIC_COLORS",
    "TEXT_SIZES",
    "assert_no_component_overlap",
    "duration",
    "find_component_overlaps",
    "semantic_math",
    "semantic_math_parts",
    "semantic_color",
    "semantic_text",
]
