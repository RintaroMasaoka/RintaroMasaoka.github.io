#!/usr/bin/env python3
"""Deterministic smoke tests for the canonical manim_layout package."""
from __future__ import annotations
import pathlib, sys

sys.path.insert(0, str(pathlib.Path(__file__).resolve().parents[1] / "assets"))
from manim import Circle, Square, Text
from manim_layout import Column, Grid, LayoutError, LayoutOverflow, Page, Row, SemanticMathTex, assert_no_component_overlap, duration, find_component_overlaps, semantic_math, semantic_math_parts, semantic_text


def main() -> int:
    a, b, c = Square(), Circle(), Text("x")
    assert find_component_overlaps({"a": a, "b": b})
    b.next_to(a)
    assert not find_component_overlaps({"a": a, "b": b})
    assert_no_component_overlap({"a": a, "b": b})
    assert semantic_text("Title", role="title").font_size == 40
    assert semantic_math("x", role="compact").font_size == 40
    named_math = semantic_math_parts(left="x", equals="=", right="y")
    assert isinstance(named_math, SemanticMathTex)
    assert named_math.part("left") is named_math.submobjects[0]
    try: named_math.part("missing")
    except LayoutError: pass
    else: raise AssertionError("expected named math part enforcement")
    assert duration("brief") == 0.3
    try: semantic_text("bad", font_size=41)
    except LayoutError: pass
    else: raise AssertionError("expected semantic typography enforcement")
    root = Column(Text("title"), Row(a, Column(b, c, gap="small"), gap="large"), gap="large")
    page = Page(root); page.apply(); ids = [id(x) for x in root.layout_leaves()]
    assert abs(root.get_center()[0]) < 1e-8 and a.get_right()[0] < b.get_left()[0]
    page.apply(); assert ids == [id(x) for x in root.layout_leaves()]
    new = Square(side_length=0.5); root.add(new); page.animate_reflow(new=[new]); assert id(new) in [id(x) for x in root.layout_leaves()]
    grid = Grid(Square(), Circle(), Square(), Circle(), rows=2); Page(grid).apply(); grid.add(Square()); grid.cols = 3; grid.rows = 2; grid.reflow()
    filled = Row(Square(), Circle(), gap="small"); Page(filled, fit="fill", horizontal="start", vertical="end").apply()
    assert filled.width > 2 and filled.get_center()[0] <= 0 and filled.get_center()[1] <= 0
    huge = Row(*[Square(side_length=3) for _ in range(8)], gap="large"); overflow = Page(huge)
    before = [(x.get_center().copy(), x.width) for x in huge.layout_leaves()]
    try: overflow.apply(); raise AssertionError("expected LayoutOverflow")
    except LayoutOverflow: pass
    after = [(x.get_center().copy(), x.width) for x in huge.layout_leaves()]
    assert all((p0 == p1).all() and abs(w0 - w1) < 1e-9 for (p0, w0), (p1, w1) in zip(before, after))
    try: Row(Square(), gap=0.2)
    except LayoutError: pass
    else: raise AssertionError("expected semantic gap enforcement")
    print("manim_layout smoke tests passed"); return 0


if __name__ == "__main__": raise SystemExit(main())
