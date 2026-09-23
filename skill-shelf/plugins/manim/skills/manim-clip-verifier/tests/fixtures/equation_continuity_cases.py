from manim import MathTex, Transform, TransformMatchingTex


def undivided_local_change(scene):
    old = MathTex("100")
    new = MathTex("1000")
    scene.play(TransformMatchingTex(old, new))


def maximal_stable_chunk(scene):
    old = MathTex("x+", "1", arg_separator="")
    new = MathTex("x+", "2", arg_separator="")
    scene.play(TransformMatchingTex(old, new))


def ambiguous_repeated_keys(scene):
    old = MathTex("1", "0", "0", arg_separator="")
    new = MathTex("1", "0", "0", "0", arg_separator="")
    scene.play(TransformMatchingTex(old, new))


def unrelated_replacement(scene):
    old = MathTex("a")
    new = MathTex("z")
    scene.play(TransformMatchingTex(old, new))


def official_double_brace_split(scene):
    old = MathTex("{{100}}")
    new = MathTex("{{100}} {{0}}")
    scene.play(TransformMatchingTex(old, new))


def official_substring_isolation(scene):
    old = MathTex("x+1", substrings_to_isolate=["x+"])
    new = MathTex("x+2", substrings_to_isolate=["x+"])
    scene.play(TransformMatchingTex(old, new))


def nonmatching_content_transform(scene):
    old = MathTex("x+", "1", arg_separator="")
    new = MathTex("x+", "2", arg_separator="")
    scene.play(Transform(old, new))


def unchanged_content_transform_is_not_this_warning(scene):
    old = MathTex("x+1")
    moved = MathTex("x+1")
    scene.play(Transform(old, moved))


def fragment_only_matching_transform(scene):
    old = MathTex("x+", "1", arg_separator="")
    new = MathTex("x+", "2", arg_separator="")
    scene.play(TransformMatchingTex(old[1], new[1]))
