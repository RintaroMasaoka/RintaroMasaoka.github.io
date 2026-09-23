def overloaded(self, a, b, c):
    self.play(FadeIn(a), Write(b), a.animate.shift(c))


def ordinary_pair(self, a, b):
    self.play(FadeIn(a), FadeIn(b))


def staggered(self, a, b, c):
    self.play(LaggedStart(FadeIn(a), FadeIn(b), FadeIn(c), lag_ratio=0.2))


def fake_stagger(self, a, b, c):
    self.play(LaggedStart(FadeIn(a), FadeIn(b), FadeIn(c), lag_ratio=0))


def unstaggered_group(self, a, b, c):
    self.play(AnimationGroup(FadeIn(a), FadeIn(b), FadeIn(c)))


def intentional_relation(self, a, b, c):
    # manim-review: intentional-simultaneous
    self.play(Transform(a, b), Transform(b, c), Transform(c, a))


def dynamic_count(self, animations):
    self.play(*animations)


def dynamic_group(self, animations):
    self.play(AnimationGroup(*animations))


def unknown_lag(self, a, b, c, ratio):
    self.play(AnimationGroup(FadeIn(a), FadeIn(b), FadeIn(c), lag_ratio=ratio))


def fake_marker_in_string(self, a, b, c):
    note = "# manim-review: intentional-simultaneous"
    self.play(FadeIn(a), FadeIn(b), FadeIn(c))


def split_attention(self):
    title = Text("Read this explanatory title first")
    diagram = VGroup(Square(), Circle())
    self.play(FadeIn(title), FadeIn(diagram))


def short_label_and_visual(self):
    label = Text("case A")
    diagram = Square()
    self.play(FadeIn(label), FadeIn(diagram))


def too_fast(self):
    claim = Text("new claim")
    self.play(FadeIn(claim), run_time=0.2)


def quick_cleanup_is_allowed(self, old):
    self.play(FadeOut(old), run_time=0.2)


def intentional_quick_event(self, marker):
    # manim-review: intentional-quick
    self.play(FadeIn(marker), run_time=0.2)
