import _bootstrap  # noqa: F401
import importlib.util
from pathlib import Path


SCRIPT = Path(__file__).parents[1] / "scripts" / "collect_codex_feedback.py"
SPEC = importlib.util.spec_from_file_location("collect_codex_feedback", SCRIPT)
MODULE = importlib.util.module_from_spec(SPEC)
assert SPEC.loader is not None
SPEC.loader.exec_module(MODULE)


def test_clean_content_keeps_only_real_user_text():
    content = [
        {"type": "input_text", "text": "<environment_context>noise</environment_context>"},
        {"type": "input_text", "text": "実際の指摘です"},
        {"type": "input_text", "text": "<subagent_notification>noise</subagent_notification>"},
    ]
    assert MODULE.clean_content(content) == "実際の指摘です"


def test_skill_link_only_is_not_feedback():
    content = [{"type": "input_text", "text": "[$manim-slides-deck](/tmp/SKILL.md)"}]
    assert MODULE.clean_content(content) == ""


def test_skill_link_with_feedback_is_kept():
    text = "[$manim-slides-deck](/tmp/SKILL.md) overlapを直して"
    assert MODULE.clean_content([{"type": "input_text", "text": text}]) == text
