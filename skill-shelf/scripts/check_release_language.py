#!/usr/bin/env python3
"""Reject Japanese instruction prose in the public Skill Shelf snapshots.

Japanese language examples are allowed only on the exact documented lines below.
Code and Unicode test fixtures are outside this documentation check.
"""
from pathlib import Path
import re
import sys

PLUGINS = Path(__file__).resolve().parents[1] / 'plugins'
DOCUMENT_SUFFIXES = {'.md', '.json', '.yaml', '.yml', '.txt', '.html'}
JAPANESE = re.compile(r'[\u3040-\u30ff\u3400-\u9fff\uf900-\ufaff\uff66-\uff9f]')
EXAMPLES = {
    'nogap/references/japanese-friction-taxonomy.md': {
        'Abstract nouns and `こと` / `もの` / `性` / `化` chains hide the actual action or',
        'Connectives such as `したがって`, `一方`, `つまり`, `なお`, `ただし`, or `むしろ`',
    },
}


def check(root: Path) -> list[str]:
    errors = []
    for path in sorted(root.rglob('*')):
        if not path.is_file() or path.suffix.lower() not in DOCUMENT_SUFFIXES:
            continue
        relative = path.relative_to(root).as_posix()
        allowed = EXAMPLES.get(relative, set())
        for number, line in enumerate(path.read_text(encoding='utf-8').splitlines(), 1):
            if JAPANESE.search(line) and line not in allowed:
                errors.append(f'{relative}:{number}: Japanese text in release documentation')
    return errors


def main() -> int:
    if not PLUGINS.is_dir():
        print(f'Missing release directory: {PLUGINS}', file=sys.stderr)
        return 1
    errors = check(PLUGINS)
    if errors:
        print('\n'.join(errors), file=sys.stderr)
        return 1
    print('Release documentation language check passed (Japanese examples preserved).')
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
