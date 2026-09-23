#!/usr/bin/env python3
"""Build the downloadable Skill Shelf archive from the reviewed package source."""

import argparse
import hashlib
import io
import stat
import sys
import zipfile
from pathlib import Path


SOURCE = Path(__file__).resolve().parents[1]
SITE = SOURCE.parent
DOWNLOADS = SITE / "public" / "tools" / "skill-shelf" / "downloads"
ARCHIVE = DOWNLOADS / "skill-shelf.zip"
CHECKSUM = DOWNLOADS / "skill-shelf.zip.sha256"
INCLUDED = ("LICENSE", "README.md", ".agents", ".claude-plugin", "plugins")


def archive_bytes() -> bytes:
    paths = []
    for name in INCLUDED:
        root = SOURCE / name
        if not root.exists():
            raise FileNotFoundError(f"Missing package source: {root}")
        paths.extend(root.rglob("*") if root.is_dir() else [root])

    buffer = io.BytesIO()
    with zipfile.ZipFile(buffer, "w", compression=zipfile.ZIP_DEFLATED, compresslevel=9) as output:
        for path in sorted(paths, key=lambda item: item.relative_to(SOURCE).as_posix()):
            if path.is_symlink():
                raise ValueError(f"Symlink in package source: {path}")
            if path.is_dir():
                continue
            if not path.is_file():
                raise ValueError(f"Unsupported package source entry: {path}")

            name = "skill-shelf/" + path.relative_to(SOURCE).as_posix()
            info = zipfile.ZipInfo(name, date_time=(1980, 1, 1, 0, 0, 0))
            info.create_system = 3
            info.external_attr = (stat.S_IFREG | (path.stat().st_mode & 0o777)) << 16
            info.compress_type = zipfile.ZIP_DEFLATED
            output.writestr(info, path.read_bytes(), compress_type=zipfile.ZIP_DEFLATED, compresslevel=9)
    return buffer.getvalue()


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--check", action="store_true", help="verify the committed download matches the package source")
    args = parser.parse_args()

    contents = archive_bytes()
    checksum = f"{hashlib.sha256(contents).hexdigest()}  {ARCHIVE.name}\n"
    if args.check:
        if not ARCHIVE.exists() or ARCHIVE.read_bytes() != contents or not CHECKSUM.exists() or CHECKSUM.read_text() != checksum:
            print("Skill Shelf download is out of date. Run python3 skill-shelf/scripts/build_download.py", file=sys.stderr)
            return 1
        print("Skill Shelf download matches the package source.")
        return 0

    DOWNLOADS.mkdir(parents=True, exist_ok=True)
    ARCHIVE.write_bytes(contents)
    CHECKSUM.write_text(checksum)
    print(f"Built {ARCHIVE.relative_to(SITE)}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
