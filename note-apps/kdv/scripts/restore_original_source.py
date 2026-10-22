#!/usr/bin/env python3
"""Convert the preserved KdV TeX source into the composite full-note Markdown."""
from __future__ import annotations

import re
import json
import subprocess
import tempfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[3]
SOURCE = ROOT / "public/notes/KdV/source/KdV.tex"
OUTPUT = ROOT / "note-apps/kdv/content/full.md"
FIGURES = ROOT / "public/notes/KdV/images"


def brace_end(text: str, start: int) -> int:
    depth = 0
    escaped = False
    for i in range(start, len(text)):
        ch = text[i]
        if escaped:
            escaped = False
            continue
        if ch == "\\":
            escaped = True
        elif ch == "{":
            depth += 1
        elif ch == "}":
            depth -= 1
            if depth == 0:
                return i + 1
    raise ValueError("unclosed TeX group")


def command_arg(text: str, pos: int) -> tuple[str, int] | None:
    while pos < len(text) and text[pos].isspace():
        pos += 1
    if pos >= len(text) or text[pos] != "{":
        return None
    end = brace_end(text, pos)
    return text[pos + 1 : end - 1], end


def drop_macro(text: str, name: str) -> str:
    needle = "\\" + name
    pos = 0
    out = []
    while True:
        i = text.find(needle, pos)
        if i < 0:
            out.append(text[pos:])
            return "".join(out)
        out.append(text[pos:i])
        arg = command_arg(text, i + len(needle))
        if arg is None:
            out.append(text[i : i + len(needle)])
            pos = i + len(needle)
        else:
            body, end = arg
            out.append(body)
            pos = end


def headings(section: str) -> list[tuple[str, str]]:
    pat = re.compile(r"(?m)^[ \t]*(?!%)(\\subsection\s*\{\s*(.*?)\s*\})", re.S)
    matches = list(pat.finditer(section))
    result = []
    for i, match in enumerate(matches):
        end = matches[i + 1].start() if i + 1 < len(matches) else len(section)
        result.append((match.group(2).strip(), section[match.end(1):end]))
    return result


def split_top_level_rows(content: str) -> list[tuple[str, str]]:
    r"""Split alignment rows, ignoring \ in grouped args and nested environments."""
    rows: list[tuple[str, str]] = []
    start = 0
    brace = 0
    nested = 0
    i = 0
    while i < len(content):
        if content.startswith("\\begin{", i):
            m = re.match(r"\\begin\{([^}]+)\}", content[i:])
            if m:
                if m.group(1) not in {"align", "align*", "gather", "gather*", "equation", "equation*", "multline", "multline*"}:
                    nested += 1
                i += len(m.group(0))
                continue
        if content.startswith("\\end{", i):
            m = re.match(r"\\end\{([^}]+)\}", content[i:])
            if m:
                if m.group(1) not in {"align", "align*", "gather", "gather*", "equation", "equation*", "multline", "multline*"}:
                    nested = max(0, nested - 1)
                i += len(m.group(0))
                continue
        ch = content[i]
        if ch == "\\":
            if brace == 0 and nested == 0 and content.startswith("\\\\", i):
                j = i + 2
                while j < len(content) and content[j] in " \t":
                    j += 1
                if j == len(content) or content[j] in "\n&":
                    rows.append((content[start:i], content[i:j]))
                    start = j
                    i = j
                    continue
            i += 2
            continue
        if ch == "{":
            brace += 1
        elif ch == "}":
            brace = max(0, brace - 1)
        i += 1
    rows.append((content[start:], ""))
    return rows


def tag_display_math(text: str, section: int, first_number: int) -> tuple[str, int, dict[str, str]]:
    """Add original section-based tags and return the label map."""
    # This source uses \∅ as an alignment-row separator. Expand it before
    # numbering so all original equation counters are retained.
    text = re.sub(r"(?<!\\)%.*$", "", text, flags=re.M)
    text = text.replace("\\∅", r"\\")
    labels: dict[str, str] = {}
    env_re = re.compile(r"\\begin\{(align\*?|gather\*?|equation\*?|multline\*?)\}")
    pos = 0
    number = first_number
    out = []
    while True:
        match = env_re.search(text, pos)
        if not match:
            out.append(text[pos:])
            break
        out.append(text[pos:match.start()])
        env = match.group(1)
        end_marker = "\\end{" + env + "}"
        end = text.find(end_marker, match.end())
        if end < 0:
            out.append(text[match.start():])
            break
        body = text[match.end():end]
        if env.endswith("*"):
            out.append(text[match.start():end + len(end_marker)])
            pos = end + len(end_marker)
            continue
        row_parts = split_top_level_rows(body) if env.startswith(("align", "gather")) else [(body, "")]
        new_body = []
        for row, delimiter in row_parts:
            for label in re.findall(r"\\label\{([^}]+)\}", row):
                labels[label] = f"{section}.{number}"
            if row.strip() and not re.search(r"\\(?:nonumber|notag)\b", row):
                tag = f"{section}.{number}"
                row = row.rstrip() + rf" \tag{{{tag}}}"
                number += 1
            new_body.append(row + delimiter)
        out.append(text[match.start():match.end()] + "".join(new_body) + end_marker)
        pos = end + len(end_marker)
    return "".join(out), number, labels


def macro_transform_math(text: str) -> str:
    # The source's short-commands.sty and physics shorthand, expanded to KaTeX-safe TeX.
    text = text.replace("\\∅", r"\\")
    text = re.sub(r"\\e(?![A-Za-z])", "e", text)
    text = re.sub(r"\\i(?![A-Za-z])", "i", text)
    text = re.sub(r"\\diag(?![A-Za-z])", r"\\operatorname{diag}", text)
    text = re.sub(r"\\tilde([A-Za-z])", r"\\tilde{\1}", text)
    # Expand matrix shorthand before \m is normalized to \middle.
    out = []
    i = 0
    while i < len(text):
        if not text.startswith(r"\M", i) or (i + 2 < len(text) and text[i + 2].isalpha()):
            out.append(text[i]); i += 1; continue
        j = i + 2
        while j < len(text) and text[j].isspace(): j += 1
        if j >= len(text) or text[j] != "(":
            out.append(r"\begin{pmatrix}"); i += 2; continue
        depth, k = 1, j + 1
        while k < len(text):
            if text[k] == "\\": k += 2; continue
            if text[k] == "(": depth += 1
            elif text[k] == ")":
                depth -= 1
                if depth == 0: break
            k += 1
        if k >= len(text):
            out.append(r"\begin{pmatrix}"); i = j + 1; continue
        out.append(r"\begin{pmatrix}" + text[j + 1:k] + r"\end{pmatrix}")
        i = k + 1
    text = "".join(out)
    replacements = {
        r"\f": r"\frac", r"\∂": r"\pdv", r"\δ": r"\delta",
        r"\bb": r"\mathbb", r"\cl": r"\mathcal", r"\fk": r"\mathfrak",
        r"\bm": r"\boldsymbol", r"\Res": r"\operatorname{Res}",
        r"\sech": r"\operatorname{sech}", r"\rm": r"\mathrm",
        r"\tt": r"\mathtt", r"\it": r"\mathit", r"\bf": r"\mathbf",
        r"\sf": r"\mathsf", r"\q": r"\quad", r"\m": r"\middle",
        r"\l": r"\left", r"\r": r"\right",
    }
    for old, new in replacements.items():
        tail = old[1:]
        boundary = r"(?![A-Za-z])" if tail.isascii() and tail.isalpha() else ""
        pattern = re.compile(re.escape(old) + boundary)
        def replace_command(match: re.Match[str]) -> str:
            # A macro may follow an even-length escaped row separator (`\\\foo`).
            # Do not mistake the second slash in `\\foo` for a new command.
            preceding = len(text[:match.start()]) - len(text[:match.start()].rstrip("\\"))
            return match.group(0) if preceding % 2 else new
        text = pattern.sub(replace_command, text)
    # Unicode accent shorthand from short-commands.sty.
    for old, new in [(r"\~", r"\tilde"), (r"\.", r"\dot"), (r"\^", r"\hat"), (r"\=", r"\bar"), (r"\v", r"\check"), (r"\u", r"\breve"), (r"\'", r"\acute"), (r"\`", r"\grave")]:
        boundary = r"(?![A-Za-z])" if len(old) == 2 and old[1].isalpha() else ""
        pattern = re.compile(re.escape(old) + boundary)
        def replace_command(match: re.Match[str]) -> str:
            # A macro may follow an even-length escaped row separator (`\\\foo`).
            # Do not mistake the second slash in `\\foo` for a new command.
            preceding = len(text[:match.start()]) - len(text[:match.start()].rstrip("\\"))
            if preceding % 2:
                return match.group(0)
            # Do not fuse an accent command with an unbraced letter: \~B -> \tilde B.
            return new + (" " if match.end() < len(text) and text[match.end()].isalpha() else "")
        text = pattern.sub(replace_command, text)
    text = re.sub(r"\\t(?![A-Za-z])\s*\{", r"\\text{", text)
    text = re.sub(r"\\d(?![A-Za-z])\s*\{([^{}]*)\}", r"\\,\\mathrm{d}\1", text)
    text = re.sub(r"\\√\s*(\{[^{}]*\})", r"\\sqrt\1\\,", text)
    text = re.sub(r"\\qty(?![A-Za-z])", r"\\Q", text)
    # Physics derivative commands with an optional order and one or two braced args.
    def take_arg(s: str, i: int) -> tuple[str, int] | None:
        return command_arg(s, i)
    out = []
    i = 0
    while i < len(text):
        cmd = next((c for c in (r"\pdv", r"\dv") if text.startswith(c, i) and (i + len(c) == len(text) or not text[i + len(c)].isalpha())), None)
        if not cmd:
            out.append(text[i]); i += 1; continue
        start = i + len(cmd)
        if start < len(text) and text[start] == "*":
            start += 1
        order = ""
        if start < len(text) and text[start] == "[":
            close = text.find("]", start)
            if close >= 0:
                order = text[start + 1:close]
                start = close + 1
        first = take_arg(text, start)
        if first is None:
            out.append(text[i]); i += 1; continue
        a, end1 = first
        second = take_arg(text, end1)
        differential = r"\partial" if cmd == r"\pdv" else r"\mathrm{d}"
        if second:
            b, end2 = second
            numerator = a if not order or order == "1" else rf"{a}"
            top = differential + (rf"^{{{order}}}" if order and order != "1" else "") + " " + numerator
            bottom = differential + " " + b + (rf"^{{{order}}}" if order and order != "1" else "")
            out.append(rf"\frac{{{top}}}{{{bottom}}}")
            i = end2
        else:
            top = differential if not order or order == "1" else rf"{differential}^{order}"
            bottom = differential + " " + a + (rf"^{{{order}}}" if order and order != "1" else "")
            out.append(rf"\frac{{{top}}}{{{bottom}}}")
            i = end1
    text = "".join(out)
    # Expand innermost auto-sized delimiter macros first so nested calls survive.
    while r"\Q" in text:
        i = text.rfind(r"\Q")
        j = i + 2
        while j < len(text) and text[j].isspace(): j += 1
        if j < len(text) and text.startswith(r"\Big{", j):
            start = j + len(r"\Big")
            end = brace_end(text, start)
            replacement = r"\Bigl\{" + text[start + 1:end - 1] + r"\Bigr\}"
            text = text[:i] + replacement + text[end:]
            continue
        if j >= len(text) or text[j] not in "([{":
            text = text[:i] + r"\left" + text[i + 2:]
            continue
        opening = text[j]
        closing = {"(": ")", "[": "]", "{": "}"}[opening]
        depth, k = 1, j + 1
        while k < len(text):
            if text[k] == "\\": k += 2; continue
            if text[k] == opening: depth += 1
            elif text[k] == closing:
                depth -= 1
                if depth == 0: break
            k += 1
        if k >= len(text):
            text = text[:i] + r"\left" + opening + text[j + 1:]
            break
        op = r"\{" if opening == "{" else opening
        cl = r"\}" if closing == "}" else closing
        replacement = r"\left" + op + text[j + 1:k] + r"\right" + cl
        text = text[:i] + replacement + text[k + 1:]
    return text


def replace_figures(tex: str) -> tuple[str, dict[str, str]]:
    figures: dict[str, str] = {}
    count = 0
    def repl(m: re.Match[str]) -> str:
        nonlocal count
        block = m.group(0)
        paths = re.findall(r"\\includegraphics(?:\[[^\]]*\])?\{([^}]+)\}", block)
        caption_start = block.find(r"\caption")
        caption_arg = command_arg(block, caption_start + len(r"\caption")) if caption_start >= 0 else None
        caption = re.sub(r"\s+", " ", caption_arg[0].strip()) if caption_arg else ""
        caption = re.sub(r"\\url\{([^}]+)\}", r"<\1>", caption)
        rendered_paths = []
        for path in paths:
            name = Path(path).name
            if name.lower().endswith(".pdf"):
                name = Path(name).stem + ".png"
            rendered_paths.append("/notes/KdV/images/" + name)
        alt = "2つのソリトンの衝突" if "2つのソリトン" in caption else ("3-ソリトン解が分裂する様子" if "3-ソリトン" in caption else "KdV方程式のシミュレーション結果")
        if len(rendered_paths) == 1:
            images = f"![{alt}]({rendered_paths[0]})"
        elif rendered_paths:
            cells = " | ".join(f"![KdV simulation frame {i+1}]({path})" for i, path in enumerate(rendered_paths))
            images = "| " + cells + " |\n| " + " | ".join(["---"] * len(rendered_paths)) + " |"
        else:
            images = ""
        token = f"FIGURETOKEN{count}"
        figures[token] = images + (f"\n\n{caption}" if caption else "")
        count += 1
        return "\n\n" + token + "\n\n"
    return re.sub(r"\\begin\{figure\}.*?\\end\{figure\}", repl, tex, flags=re.S), figures


def convert_fragment(tex: str, labels: dict[str, str], figure_map: dict[str, str], fragment_id: int) -> str:
    # References to omitted original §3.1–3.3 formulas map to the corresponding live GLM equation.
    labels = dict(labels)
    labels["u-K relation"] = "4"
    tex = re.sub(r"\\ref\{([^}]+)\}", lambda m: labels.get(m.group(1), "[UNMAPPED:" + m.group(1) + "]"), tex)
    tex = re.sub(r"\\cite\{Nakamura\}", "CITATION_NAKAMURA", tex)
    tex = re.sub(r"\\label\{[^}]+\}", "", tex)
    tex = drop_macro(tex, "tcboxmath")
    tex = macro_transform_math(tex)
    with tempfile.NamedTemporaryFile("w", suffix=".tex", encoding="utf-8") as f:
        f.write(tex)
        f.flush()
        result = subprocess.run(["pandoc", f.name, "--from=latex", "--to=markdown", "--wrap=none"], check=True, capture_output=True, text=True)
    md = result.stdout.strip()
    md = md.replace("CITATION_NAKAMURA", "[1]").replace("[@Nakamura]", "[1]")
    # Pandoc restarts footnote numbering for every fragment; namespace IDs so
    # source notes remain distinct after the fragments are assembled.
    md = re.sub(r"\[\^(\d+)\]", lambda m: f"[^src-{fragment_id}-{m.group(1)}]", md)
    for token, figure in figure_map.items():
        md = md.replace(token, figure)
    # The site renderer supports one equation tag per display block. Split source
    # alignment rows while retaining their original section-based number tags.
    env_re = re.compile(r"\$\$\s*\\begin\{(align\*?|gather\*?)\}(.*?)\\end\{\1\}\s*\$\$", re.S)
    def split_display(m: re.Match[str]) -> str:
        rows = split_top_level_rows(m.group(2))
        blocks = []
        for row, _ in rows:
            row = row.strip()
            if not row:
                continue
            tag_match = re.search(r"\\tag\{([^}]+)\}", row)
            tag = tag_match.group(1) if tag_match else None
            if tag_match:
                row = row[:tag_match.start()] + row[tag_match.end():]
            row = re.sub(r"\\nonumber\b|\\notag\b", "", row).strip()
            if not row:
                continue
            block = "$$\n\\begin{aligned}\n" + row + "\n\\end{aligned}"
            if tag:
                block += "\\tag{" + tag + "}"
            block += "\n$$"
            blocks.append(block)
        return "\n\n".join(blocks)
    md = env_re.sub(split_display, md)
    # Put every display formula on its own Markdown block line.
    md = re.sub(r"(?<!\$)\$\$(.*?)\$\$(?!\$)", lambda m: "\n\n$$\n" + m.group(1).strip() + "\n$$\n\n", md, flags=re.S)
    md = re.sub(r"\n{3,}", "\n\n", md)
    # Indent footnote continuation lines after display normalization so their
    # delimiters and equations remain part of the footnote.
    lines = md.splitlines()
    in_footnote = False
    normalized = []
    for line in lines:
        if re.match(r"\[\^src-\d+-\d+\]:", line):
            in_footnote = True
            normalized.append(line)
        elif in_footnote:
            if line.startswith("[^src-"):
                normalized.append(line)
            elif line.strip():
                normalized.append("    " + line)
            else:
                normalized.append("")
        else:
            normalized.append(line)
    md = "\n".join(normalized)
    return md


def use_equation_keys(text: str) -> str:
    """Translate archive equation identities; display numbers belong to the renderer."""
    keys = json.loads(Path(__file__).with_name("legacy-equation-keys.json").read_text())
    protected = re.compile(r"(\$\$.*?\$\$|\$[^$\n]*\$|```.*?```|`[^`]*`|\[[^\]\n]*\]\([^\n]*?\))", re.S)
    parts = protected.split(text)
    for i, part in enumerate(parts):
        if i % 2 == 0:
            part = re.sub(r"\((\d+(?:\.\d+)?[a-z]?)\)", lambda m: "(@" + keys[m[1]] + ")" if m[1] in keys else m[0], part)
        parts[i] = re.sub(r"\\tag\{([^}]+)\}", lambda m: r"\tag{" + keys.get(m[1], m[1]) + "}", part)
    return "".join(parts)


def revised_sections(text: str) -> str:
    """Use the authored left-convention sections as the canonical source."""
    for name, start, end in [("introduction", "## 1.", "## 2."), ("soliton", "### 2.1.", "### 2.2."), ("lax", "### 2.2.", "### 2.3."), ("overview", "### 2.3.", "### 2.4."), ("scattering", "### 2.4.", "## 3."), ("reflectionless", "### 3.4.", "## 4."), ("hierarchy", "## 4.", "## 参考文献")]:
        section = (OUTPUT.parent / "sections" / (name + ".md")).read_text(encoding="utf-8")
        a, b = text.index(start), text.index(end)
        if name == "reflectionless":
            section = "<!-- kdv-reflectionless:start -->\n" + section.rstrip() + "\n<!-- kdv-reflectionless:end -->"
        text = text[:a] + section.rstrip() + "\n\n" + text[b:]
    return text


def main() -> None:
    source = SOURCE.read_text(encoding="utf-8")
    section_matches = list(re.finditer(r"\\section\s*\{\s*(.*?)\s*\}", source, re.S))
    if len(section_matches) != 4:
        raise SystemExit(f"expected 4 source sections, found {len(section_matches)}")
    sections = [source[m.end():section_matches[i+1].start() if i+1 < len(section_matches) else source.find(r"\end{document}")] for i, m in enumerate(section_matches)]
    intro = re.sub(r"\\(?:maketitle|tableofcontents|newpage)\b", "", sections[0])
    soliton_parts = headings(sections[1])
    inverse_parts = headings(sections[2])
    appendix_source = re.split(r"\\newpage\s*\\begin\{thebibliography\}", sections[3], maxsplit=1)[0]
    appendix_parts = headings(appendix_source)
    if len(soliton_parts) != 5 or len(inverse_parts) != 6 or len(appendix_parts) != 3:
        raise SystemExit(f"source subsection inventory changed: §2={len(soliton_parts)}, §3={len(inverse_parts)}, §4={len(appendix_parts)}")

    # Original section §§3.1–3.3 are replaced by the revised GLM chapter.
    # Tag each kept range first so every source cross-reference can be resolved.
    tagged_parts: dict[str, list[tuple[str, str]]] = {"intro": [], "soliton": [], "inverse": [], "appendix": []}
    all_labels: dict[str, str] = {}
    tagged, _, labels = tag_display_math(intro, 1, 1)
    tagged_parts["intro"].append(("導入", tagged)); all_labels.update(labels)
    number = 1
    for title, body in soliton_parts:
        tagged, number, labels = tag_display_math(body, 2, number)
        tagged_parts["soliton"].append((title, tagged)); all_labels.update(labels)
    number = 60
    for title, body in inverse_parts[3:]:
        tagged, number, labels = tag_display_math(body, 3, number)
        tagged_parts["inverse"].append((title, tagged)); all_labels.update(labels)
    number = 1
    for title, body in appendix_parts:
        tagged, number, labels = tag_display_math(body, 4, number)
        tagged_parts["appendix"].append((title, tagged)); all_labels.update(labels)

    fragment_counter = 0
    def render(tagged: str) -> str:
        nonlocal fragment_counter
        fragment_counter += 1
        tagged, figures = replace_figures(tagged)
        return convert_fragment(tagged, all_labels, figures, fragment_counter)

    intro_md = render(tagged_parts["intro"][0][1])
    soliton_md = [render(body) for _, body in tagged_parts["soliton"]]
    inverse_md = [render(body) for _, body in tagged_parts["inverse"]]
    appendix_md = [render(body) for _, body in tagged_parts["appendix"]]

    # Convert headings separately so title levels and original section numbers stay explicit.
    chunks = ["## 1. 導入\n\n" + intro_md]
    chunks.append("## 2. ソリトンと等スペクトル変形\n\n" + "\n\n".join(f"### 2.{i}. {title}\n\n{body}" for i, ((title, _), body) in enumerate(zip(soliton_parts, soliton_md), 1)))
    inv_sections = [f"### 3.{i + 4}. {title}\n\n{body}" for i, ((title, _), body) in enumerate(zip(tagged_parts["inverse"], inverse_md))]
    chunks.append("## 3. 散乱の逆問題\n\n" + '<div data-chapter-slot="glm"></div>\n\n' + "\n\n".join(inv_sections))
    chunks.append("## 4. おまけ: 無限個の保存量の存在\n\n" + "\n\n".join(f"### 4.{i}. {title}\n\n{body}" for i, ((title, _), body) in enumerate(zip(appendix_parts, appendix_md), 1)))
    chunks.append("## 参考文献\n\n[1] 中村佳正, 高崎金久, & 辻本諭. (2018). 可積分系の数理 (解析学百科 2). 朝倉書店.\n\n[2] 及川正行. (2013). 第 5 章 逆散乱法. ながれ: 日本流体力学会誌, 32(1), 39-53.\n\n[3] Miura, R. M., Gardner, C. S., & Kruskal, M. D. (1968). Korteweg-de vries equation and generalizations. II. Existence of conservation laws and constants of motion. Journal of Mathematical physics, 9(8), 1204-1209.")
    result = "\n\n".join(chunks)
    result = re.sub(r"[ \t]+$", "", result, flags=re.M)
    for title, slot in [('### 2.2. Lax表示', 'traveling')]:
        if title not in result:
            raise ValueError(f'missing visual placement: {title}')
        result = result.replace(title, f'<div data-extra-visual="{slot}"></div>\n\n{title}', 1)
    result = re.sub(r'!\[2つのソリトンの衝突\]\([^\n]+\)\n\n2つのソリトンの衝突', '<div data-extra-visual="collision"></div>', result, count=1)
    result = re.sub(r'\| !\[KdV simulation frame 1\][\s\S]*?(?=またKdV方程式は)', '<div data-extra-visual="breakup"></div>\n\n', result, count=1)
    result = use_equation_keys(revised_sections(result))
    result = result.replace("[B(t), U(t)L(t)U(t)^{-1}]", "[B(t), U(t)L(0)U(t)^{-1}]")
    OUTPUT.write_text(result.rstrip() + "\n", encoding="utf-8")


if __name__ == "__main__":
    main()
