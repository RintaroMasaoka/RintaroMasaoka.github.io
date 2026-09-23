from manim import FadeIn, Square, Text

from manim_slides_gate import GatedSlide


class AttentionWarningGatedSlide(GatedSlide):
    def construct(self):
        title = Text("Read this explanatory title before the diagram")
        diagram = Square()
        self.play(FadeIn(title), FadeIn(diagram), run_time=0.2)
        self.checkpoint_gate({"title": title, "diagram": diagram})
        self.next_slide()
