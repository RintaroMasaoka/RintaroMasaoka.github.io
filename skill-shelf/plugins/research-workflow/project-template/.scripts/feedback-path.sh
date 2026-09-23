#!/usr/bin/env bash
set -eu
python3 - "$@" <<'PY'
import datetime, pathlib, re, sys
root = pathlib.Path.cwd().resolve()
names = sys.argv[1:]
if not names or any(not re.fullmatch(r'[A-Za-z0-9_-]+', n) for n in names):
    raise SystemExit('usage: feedback-path.sh TYPE [SLUG] (run in project root)')
folder = root / 'feedback'
folder.mkdir(exist_ok=True)
stem = datetime.datetime.now().strftime('%y%m%d_%H%M%S') + '_' + '_'.join(names)
p = folder / (stem + '.md')
i = 2
while p.exists():
    p = folder / (stem + '_' + str(i) + '.md'); i += 1
print(p)
PY
