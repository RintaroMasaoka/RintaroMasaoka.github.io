"""Read one mechanical Markdown paragraph; no persistent state or access isolation."""
import argparse
import hashlib
import json
from pathlib import Path
import re


BLANK = re.compile(r'^\s*$')
FENCE = re.compile(r'^ {0,3}(`{3,}|~{3,})(.*)$')


def paragraphs(lines):
    start = None
    fence = None
    math_end = None
    for i, line in enumerate(lines):
        token = line.strip()
        if fence:
            if re.fullmatch(r' {0,3}' + re.escape(fence[0]) +
                            '{' + str(fence[1]) + r',}[ \t]*(?:\r?\n)?', line):
                fence = None
        elif math_end:
            if token == math_end:
                math_end = None
        elif BLANK.fullmatch(line):
            if start is not None:
                yield start, i
                start = None
            continue
        else:
            match = FENCE.fullmatch(line.rstrip('\r\n'))
            if match:
                marker = match.group(1)
                fence = (marker[0], len(marker))
            elif token in ('$$', r'\['):
                math_end = '$$' if token == '$$' else r'\]'
        if start is None:
            start = i
    if fence or math_end:
        raise ValueError('Unclosed code or math block; repair source structure before reading')
    if start is not None:
        yield start, len(lines)


def read_paragraph(path, line, expected_hash):
    data = Path(path).read_bytes()
    digest = hashlib.sha256(data).hexdigest()
    if digest != expected_hash:
        raise ValueError('Source hash mismatch')
    lines = data.decode('utf-8').splitlines(keepends=True)
    if line < 1 or line > len(lines) + 1:
        raise ValueError('Cursor outside source')
    cursor = line - 1
    for start, end in paragraphs(lines):
        if end <= cursor:
            continue
        if start < cursor:
            raise ValueError('Cursor inside paragraph; use the returned next_line')
        return dict(text=''.join(lines[start:end]), span=[start + 1, end],
                    next_line=end + 1, source_sha256=digest, eof=False)
    return dict(text='', span=None, next_line=len(lines) + 1,
                source_sha256=digest, eof=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('snapshot')
    parser.add_argument('--line', type=int, default=1)
    parser.add_argument('--sha256', required=True)
    args = parser.parse_args()
    try:
        result = read_paragraph(args.snapshot, args.line, args.sha256)
    except (OSError, UnicodeError, ValueError) as exc:
        print(json.dumps({'error': str(exc)}, ensure_ascii=False))
        return 2
    print(json.dumps(result, ensure_ascii=False))
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
