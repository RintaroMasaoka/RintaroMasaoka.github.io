from manim import DOWN, Circle, FadeIn, Square, VGroup
from manim_slides_gate import GatedSlide


class MinimalGatedSlide(GatedSlide):
    def construct(self):
        square = Square()
        circle = Circle()
        VGroup(square, circle).arrange(DOWN)
        self.play(FadeIn(square), FadeIn(circle))
        self.checkpoint_gate({"square": square, "circle": circle})
        self.next_slide()


class OverlappingGatedSlide(GatedSlide):
    def construct(self):
        first = Square()
        second = Square()
        self.play(FadeIn(first), FadeIn(second))
        self.checkpoint_gate({"first": first, "second": second})
        self.next_slide()


class MissingCheckpointGateSlide(GatedSlide):
    def construct(self):
        square = Square()
        self.play(FadeIn(square))
        self.next_slide()


class StaleCheckpointGateSlide(GatedSlide):
    def construct(self):
        square = Square()
        circle = Circle()
        self.play(FadeIn(square))
        self.checkpoint_gate({"square": square})
        self.add(circle)
        self.next_slide()
