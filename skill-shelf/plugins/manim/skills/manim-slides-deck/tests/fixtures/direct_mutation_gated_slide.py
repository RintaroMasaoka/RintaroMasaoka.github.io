from manim import DOWN, Circle, FadeIn, Square, VGroup

from manim_slides_gate import GatedSlide


class DirectMutationAfterGateSlide(GatedSlide):
    def construct(self):
        first = Square()
        second = Circle()
        VGroup(first, second).arrange(DOWN)
        self.play(FadeIn(first), FadeIn(second))
        self.checkpoint_gate({"first": first, "second": second})
        second.move_to(first)
        self.next_slide()
