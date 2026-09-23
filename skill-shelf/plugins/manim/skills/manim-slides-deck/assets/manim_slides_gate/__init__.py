"""Small shared helpers for Manim scenes in this repository."""

from __future__ import annotations

from dataclasses import dataclass
import difflib
import hashlib
import json
import os
from pathlib import Path
from typing import Iterable, Mapping, Sequence

from manim import Mobject
from manim_slides import Slide
from manim_layout import OverlapFinding, assert_no_component_overlap, find_component_overlaps


@dataclass(frozen=True)
class ContinuitySnapshot:
    object_id: int
    class_name: str
    semantic_id: str | None
    geometry_hash: str
    center: tuple[float, float]
    width: float
    height: float
    content_key: str | None
    font_size: float | None


@dataclass(frozen=True)
class ContinuityFinding:
    kind: str
    severity: str
    before: ContinuitySnapshot
    after: ContinuitySnapshot
    detail: str


class GatedSlide(Slide):
    """Slide whose checkpoints automatically run live geometry gates.

    Logical-component policy is loaded from an optional project-owned JSON
    database.  The generic runtime owns classification mechanics; projects own
    semantic identities, composite families, chrome, and exceptions.
    """

    _checkpoint_gate_armed = False
    _checkpoint_gate_payload = None

    def setup(self):
        result = super().setup()
        self._continuity_removed = []
        self._continuity_findings = []
        return result

    def _gate_database(self) -> dict:
        cached = getattr(self, "_gate_database_cache", None)
        if cached is not None:
            return cached
        path = os.environ.get("MANIM_SLIDES_COMPONENT_DB")
        if not path:
            cursor = Path.cwd().resolve()
            for root in (cursor, *cursor.parents):
                config_path = root / ".manim-slides-deck.json"
                if not config_path.is_file():
                    continue
                config = json.loads(config_path.read_text(encoding="utf-8"))
                relative = config.get("component_database")
                path = str(root / relative) if relative else None
                break
        database = {}
        if path:
            database = json.loads(Path(path).read_text(encoding="utf-8"))
        self._gate_database_cache = database
        return database

    @staticmethod
    def _matches_gate_rule(mobject: Mobject, rule: Mapping) -> bool:
        class_names = rule.get("class_names", ())
        if class_names and mobject.__class__.__name__ not in class_names:
            return False
        attribute = rule.get("attribute")
        if attribute and not hasattr(mobject, attribute):
            return False
        attribute_value = rule.get("attribute_value")
        if attribute and "attribute_value" in rule:
            return getattr(mobject, attribute, None) == attribute_value
        return bool(class_names or attribute)

    def _automatic_gate_components(self) -> tuple[dict[str, Mobject], dict]:
        database = self._gate_database()
        rules = database.get("classifiers", [])
        ignored_ids: set[int] = set()
        names: dict[int, str] = {}
        families: dict[str, list[Mobject]] = {}

        for index, mobject in enumerate(self.mobjects):
            role = "semantic"
            identity = getattr(mobject, "semantic_id", None) or getattr(
                mobject, "asset_id", None
            )
            family = None
            for rule in rules:
                if self._matches_gate_rule(mobject, rule):
                    role = rule.get("role", role)
                    family = rule.get("composite_family")
                    family_attribute = rule.get("composite_family_from_attribute")
                    if family_attribute:
                        family = getattr(mobject, family_attribute, None)
                    identity = identity or rule.get("identity")
                    break
            if role in {"chrome", "internal", "ignore"}:
                ignored_ids.add(id(mobject))
                continue
            names[id(mobject)] = str(identity or f"{index}:{mobject.__class__.__name__}")
            if family:
                families.setdefault(family, []).append(mobject)

        # Structural composites are generic geometry knowledge, not asset
        # identity. Curves/dots living inside one Axes rectangle form a single
        # overlap component even when Manim has promoted them to scene roots.
        axes_roots = [mob for mob in self.mobjects if mob.__class__.__name__ in {"Axes", "NumberPlane"}]
        for axis_index, axis in enumerate(axes_roots):
            members = [axis]
            left, right = axis.get_left()[0], axis.get_right()[0]
            bottom, top = axis.get_bottom()[1], axis.get_top()[1]
            for mob in self.mobjects:
                if mob is axis or id(mob) in ignored_ids:
                    continue
                center = mob.get_center()
                if left <= center[0] <= right and bottom <= center[1] <= top:
                    members.append(mob)
            if len(members) > 1:
                families.setdefault(f"axes:{axis_index}", []).extend(members)

        # A panel shell and the labels/diagrams deliberately placed inside it
        # are one logical component. Manim often promotes both the shell and
        # its contents to scene roots, which otherwise looks like a 100%
        # collision to the bounding-box gate.
        panel_roots = [
            mob for mob in self.mobjects
            if mob.__class__.__name__ in {"RoundedRectangle", "SurroundingRectangle"}
        ]
        for panel_index, panel in enumerate(panel_roots):
            members = [panel]
            left, right = panel.get_left()[0], panel.get_right()[0]
            bottom, top = panel.get_bottom()[1], panel.get_top()[1]
            for mob in self.mobjects:
                if mob is panel or id(mob) in ignored_ids:
                    continue
                center = mob.get_center()
                if left <= center[0] <= right and bottom <= center[1] <= top:
                    members.append(mob)
            if len(members) > 1:
                families.setdefault(f"panel:{panel_index}", []).extend(members)

        grouped_ids = {id(mob) for members in families.values() for mob in members}
        components = {
            names[id(mob)]: mob
            for mob in self.mobjects
            if id(mob) not in ignored_ids and id(mob) not in grouped_ids
        }
        from manim import Group
        for family, members in families.items():
            components[f"composite:{family}"] = Group(*members)

        overlap = database.get("overlap", {})
        return components, {
            "frame_margin": float(database.get("frame_margin", 0.05)),
            "allow": [tuple(pair) for pair in overlap.get("allow", ())],
            "min_overlap": float(overlap.get("min_overlap", 0.01)),
            "min_smaller_fraction": float(
                overlap.get("min_smaller_fraction", 0.001)
            ),
        }

    @staticmethod
    def _continuity_snapshot(mobject: Mobject) -> ContinuitySnapshot:
        import numpy as np

        points = mobject.get_all_points()
        if len(points):
            centered = points[:, :2] - np.mean(points[:, :2], axis=0)
            scale = max(float(np.ptp(centered[:, 0])), float(np.ptp(centered[:, 1])), 1e-9)
            payload = np.round(centered / scale, 3).tobytes()
        else:
            payload = (
                mobject.__class__.__name__
                + ":"
                + ",".join(child.__class__.__name__ for child in mobject.family_members_with_points())
            ).encode()
        center = mobject.get_center()
        semantic_id = getattr(mobject, "semantic_id", None) or getattr(mobject, "asset_id", None)
        return ContinuitySnapshot(
            object_id=id(mobject),
            class_name=mobject.__class__.__name__,
            semantic_id=str(semantic_id) if semantic_id is not None else None,
            geometry_hash=hashlib.sha256(payload).hexdigest()[:20],
            center=(float(center[0]), float(center[1])),
            width=float(mobject.width),
            height=float(mobject.height),
            content_key=GatedSlide._content_key(mobject),
            font_size=GatedSlide._font_size(mobject),
        )

    @staticmethod
    def _content_key(mobject: Mobject) -> str | None:
        for attribute in ("tex_string", "text"):
            value = getattr(mobject, attribute, None)
            if isinstance(value, str) and value:
                return f"{attribute}:{value}"
        strings = getattr(mobject, "tex_strings", None)
        if strings:
            return "tex_strings:" + "\u241f".join(str(item) for item in strings)
        return None

    @staticmethod
    def _font_size(mobject: Mobject) -> float | None:
        value = getattr(mobject, "font_size", None)
        try:
            return float(value) if value is not None else None
        except (TypeError, ValueError):
            return None

    @staticmethod
    def _content_similarity(before: ContinuitySnapshot, after: ContinuitySnapshot) -> float:
        if before.content_key is None or after.content_key is None:
            return 0.0
        if before.content_key == after.content_key:
            return 1.0
        before_text = before.content_key.split(":", 1)[-1].replace("\u241f", "")
        after_text = after.content_key.split(":", 1)[-1].replace("\u241f", "")
        return difflib.SequenceMatcher(None, before_text, after_text, autojunk=False).ratio()

    @staticmethod
    def _flatten_animations(animations):
        for animation in animations:
            children = getattr(animation, "animations", None)
            if children:
                yield from GatedSlide._flatten_animations(children)
            else:
                yield animation

    @staticmethod
    def _same_continuity_object(before: ContinuitySnapshot, after: ContinuitySnapshot) -> bool:
        if before.semantic_id and after.semantic_id:
            return before.semantic_id == after.semantic_id
        return (
            before.class_name == after.class_name
            and before.geometry_hash == after.geometry_hash
            and abs(before.width - after.width) <= max(before.width, after.width, 1.0) * 0.03
            and abs(before.height - after.height) <= max(before.height, after.height, 1.0) * 0.03
        )

    def _record_continuity_play(self, animations) -> None:
        leaves = [
            leaf
            for animation in animations
            if animation.__class__.__name__ != "TransformMatchingTex"
            for leaf in self._flatten_animations((animation,))
        ]
        removed = []
        introduced = []
        for animation in leaves:
            name = animation.__class__.__name__
            mobject = getattr(animation, "mobject", None)
            if mobject is None:
                continue
            if name == "FadeOut":
                removed.append(self._continuity_snapshot(mobject))
            elif name in {"FadeIn", "Create", "Write"}:
                introduced.append(self._continuity_snapshot(mobject))
        pool = [*self._continuity_removed, *removed]
        consumed: set[int] = set()
        for after in introduced:
            for index, before in enumerate(pool):
                if index in consumed or not self._same_continuity_object(before, after):
                    continue
                consumed.add(index)
                self._continuity_findings.append(
                    ContinuityFinding(
                        kind="unnecessary-recreation",
                        severity="fatal",
                        before=before,
                        after=after,
                        detail="matching visible object was removed and introduced again",
                    )
                )
                break
        self._continuity_removed = [item for index, item in enumerate(pool) if index not in consumed]

    def _record_transition_drift(self, animations) -> None:
        database = self._gate_database().get("continuity", {})
        position_threshold = float(database.get("position_candidate_threshold", 0.55))
        scale_threshold = float(database.get("scale_candidate_fraction", 0.08))
        similarity_threshold = float(database.get("content_similarity_threshold", 0.65))
        pairs = []
        # TransformMatchingTex is an AnimationGroup whose official cleanup
        # removes the source root and adds the target root. Inspect those roots
        # directly instead of mistaking that ownership handoff for recreation.
        for animation in animations:
            if animation.__class__.__name__ == "TransformMatchingTex":
                to_remove = getattr(animation, "to_remove", ())
                target = getattr(animation, "to_add", None)
                if to_remove and target is not None:
                    pairs.append((to_remove[0], target))
        for animation in self._flatten_animations(animations):
            source = getattr(animation, "mobject", None)
            target = getattr(animation, "target_mobject", None)
            if source is None or target is None:
                continue
            pairs.append((source, target))
        seen_pairs: set[tuple[int, int]] = set()
        for source, target in pairs:
            identity = (id(source), id(target))
            if identity in seen_pairs:
                continue
            seen_pairs.add(identity)
            before = self._continuity_snapshot(source)
            after = self._continuity_snapshot(target)
            similarity = self._content_similarity(before, after)
            if similarity < similarity_threshold:
                continue
            displacement = (
                (before.center[0] - after.center[0]) ** 2
                + (before.center[1] - after.center[1]) ** 2
            ) ** 0.5
            if displacement > position_threshold:
                self._continuity_findings.append(
                    ContinuityFinding(
                        kind="position-drift-candidate",
                        severity="review",
                        before=before,
                        after=after,
                        detail=(
                            f"identical/highly similar content ({similarity:.0%}) moves "
                            f"{displacement:.3f} frame units"
                        ),
                    )
                )
            width_fraction = abs(before.width - after.width) / max(before.width, after.width, 1e-9)
            height_fraction = abs(before.height - after.height) / max(before.height, after.height, 1e-9)
            font_changed = (
                before.font_size is not None
                and after.font_size is not None
                and abs(before.font_size - after.font_size) > 0.1
            )
            geometry_scaled = similarity == 1.0 and max(width_fraction, height_fraction) > scale_threshold
            if font_changed or geometry_scaled:
                self._continuity_findings.append(
                    ContinuityFinding(
                        kind="font-or-scale-drift-candidate",
                        severity="review",
                        before=before,
                        after=after,
                        detail=(
                            f"identical/highly similar content ({similarity:.0%}) changes font/scale; "
                            f"font_changed={font_changed}, geometry_delta="
                            f"({width_fraction:.1%} width, {height_fraction:.1%} height)"
                        ),
                    )
                )

    def _assert_continuity(self) -> None:
        review = [item for item in self._continuity_findings if item.severity == "review"]
        findings_path = os.environ.get("MANIM_GATE_FINDINGS_PATH")
        if findings_path and self._continuity_findings:
            path = Path(findings_path)
            path.parent.mkdir(parents=True, exist_ok=True)
            with path.open("a", encoding="utf-8") as handle:
                for item in self._continuity_findings:
                    handle.write(json.dumps({
                        "category": "continuity",
                        "severity": "error" if item.severity == "fatal" else "warning",
                        "code": item.kind,
                        "provider": "animation-trace-and-rendered-state",
                        "message": item.detail,
                        "object_class": item.before.class_name,
                        "content_key": item.before.content_key,
                        "semantic_id": item.before.semantic_id,
                    }, ensure_ascii=False) + "\n")
        for item in review:
            print(
                "[continuity-review] "
                f"{item.kind}: {item.before.class_name} "
                f"{item.before.content_key or item.before.semantic_id or item.before.geometry_hash}; "
                f"{item.detail}"
            )
        fatal = [item for item in self._continuity_findings if item.severity == "fatal"]
        if not fatal:
            return
        details = "; ".join(
            f"{item.kind}: {item.before.class_name}"
            f"[{item.before.semantic_id or item.before.geometry_hash}]"
            for item in fatal
        )
        raise AssertionError(f"continuity gate detected avoidable state replacement: {details}")

    def _invalidate_checkpoint_gate(self) -> None:
        self._checkpoint_gate_armed = False
        self._checkpoint_gate_payload = None

    def play(self, *args, **kwargs):
        self._invalidate_checkpoint_gate()
        self._record_transition_drift(args)
        result = super().play(*args, **kwargs)
        self._record_continuity_play(args)
        return result

    def add(self, *mobjects):
        self._invalidate_checkpoint_gate()
        return super().add(*mobjects)

    def remove(self, *mobjects):
        self._invalidate_checkpoint_gate()
        return super().remove(*mobjects)

    def clear(self):
        self._invalidate_checkpoint_gate()
        return super().clear()

    def wait(self, *args, **kwargs):
        self._invalidate_checkpoint_gate()
        return super().wait(*args, **kwargs)

    def checkpoint_gate(
        self,
        components: Mapping[str, Mobject] | Sequence[Mobject],
        *,
        frame_margin: float = 0.05,
        **overlap_kwargs,
    ) -> None:
        """Run frame and overlap checks and arm exactly one next_slide call."""
        if os.environ.get("MANIM_SKIP_RUNTIME_GATES") == "1":
            self._invalidate_checkpoint_gate()
            return
        if not components:
            raise AssertionError("checkpoint_gate requires at least one logical component")
        assert_scene_in_frame(self, margin=frame_margin)
        assert_no_component_overlap(components, **overlap_kwargs)
        self._checkpoint_gate_armed = True
        self._checkpoint_gate_payload = (components, frame_margin, overlap_kwargs)

    def next_slide(self, *args, **kwargs):
        if os.environ.get("MANIM_SKIP_RUNTIME_GATES") == "1":
            self._continuity_removed = []
            self._continuity_findings = []
            self._invalidate_checkpoint_gate()
            return super().next_slide(*args, **kwargs)
        if self._checkpoint_gate_armed and self._checkpoint_gate_payload is not None:
            components, frame_margin, overlap_kwargs = self._checkpoint_gate_payload
            automatic_gate = False
        else:
            components, options = self._automatic_gate_components()
            frame_margin = options.pop("frame_margin")
            overlap_kwargs = options
            automatic_gate = True
        # A transition checkpoint may legitimately contain only persistent
        # deck chrome after the previous page has cleared its content.
        # Re-run at consumption time. Mobjects can mutate directly through
        # shift/scale/arrange/become without calling a Scene method.
        assert_scene_in_frame(self, margin=frame_margin)
        if automatic_gate:
            for finding in find_component_overlaps(components, **overlap_kwargs):
                print(
                    "[geometry-review] component-overlap-candidate: "
                    f"{finding.first} x {finding.second}; "
                    f"smaller_fraction={finding.smaller_box_fraction:.1%}"
                )
        else:
            assert_no_component_overlap(components, **overlap_kwargs)
        self._assert_continuity()
        self._continuity_removed = []
        self._continuity_findings = []
        self._invalidate_checkpoint_gate()
        return super().next_slide(*args, **kwargs)


def assert_scene_in_frame(scene, margin: float = 0.05) -> None:
    """Raise if visible mobjects extend outside the camera frame.

    The check is intentionally lightweight. It catches large layout mistakes
    during low-quality renders without constraining animation design.
    """
    if not scene.mobjects:
        return

    frame_width = scene.camera.frame_width
    frame_height = scene.camera.frame_height
    x_limit = frame_width / 2 - margin
    y_limit = frame_height / 2 - margin

    for mob in scene.mobjects:
        left = mob.get_left()[0]
        right = mob.get_right()[0]
        bottom = mob.get_bottom()[1]
        top = mob.get_top()[1]
        if left < -x_limit or right > x_limit or bottom < -y_limit or top > y_limit:
            raise AssertionError(
                f"{mob.__class__.__name__} out of frame: "
                f"x=[{left:.2f}, {right:.2f}], y=[{bottom:.2f}, {top:.2f}], "
                f"limits=+/-({x_limit:.2f}, {y_limit:.2f})"
            )
