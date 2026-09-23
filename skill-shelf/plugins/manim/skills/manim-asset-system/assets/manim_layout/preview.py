from manim import Circle, MathTex, Scene, Square, Text
from manim_layout import Column, Page, Row


class DeclarativeLayoutPreview(Scene):
    def construct(self):
        title = Text("Declarative layout")
        left = Square()
        center = Column(MathTex("E=mc^2"), Text("center"), gap="small")
        right = Circle()
        conclusion = Text("nested Row / Column")
        page = Page(
            Column(title, Row(left, center, right, gap="large"), conclusion, gap="large"),
            fit="fill",
            horizontal="center",
            vertical="center",
        )
        self.add(page.apply())
