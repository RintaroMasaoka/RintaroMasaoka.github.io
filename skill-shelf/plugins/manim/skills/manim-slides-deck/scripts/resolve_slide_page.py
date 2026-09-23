#!/usr/bin/env python3
"""Resolve a semantic slide identity to one build's derived page locator."""

from __future__ import annotations

import argparse
import json
import os
import sys
from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Any, Iterable


COLLECTION_FIELDS = ("pages", "units", "records")


@dataclass(frozen=True)
class PageResolution:
    selector: str
    semantic_id: str
    title: str | None
    locator_field: str
    locator: int | str
    record_count: int
    steps: tuple[int | str, ...]
    pdf_pages: tuple[int | str, ...]
    slot_key: str | None
    bindings: dict[str, str]
    revision: str | None


def _records(payload: Any, collection: str | None) -> tuple[list[dict[str, Any]], str | None]:
    revision = payload.get("revision") if isinstance(payload, dict) else None
    if revision is not None and (not isinstance(revision, str) or not revision):
        raise ValueError("manifest revision must be a nonempty string")
    if isinstance(payload, list):
        if collection is not None:
            raise ValueError("--collection is invalid for a record-list manifest")
        values = payload
    elif isinstance(payload, dict):
        present = [key for key in COLLECTION_FIELDS if isinstance(payload.get(key), list)]
        if collection is not None:
            if collection not in COLLECTION_FIELDS or collection not in present:
                raise ValueError(f"manifest collection not found: {collection!r}")
            values = payload[collection]
        elif len(present) == 1:
            values = payload[present[0]]
        elif len(present) > 1:
            raise ValueError(f"manifest has multiple collections {present!r}; declare one")
        else:
            raise ValueError("manifest must be a record list or contain pages/units/records")
    else:
        raise ValueError("manifest must be a JSON object or list")
    if not all(isinstance(value, dict) for value in values):
        raise ValueError("every manifest record must be an object")
    return values, revision


def _locator(record: dict[str, Any], field: str) -> int | str:
    value = record.get(field)
    if not isinstance(value, (int, str)) or isinstance(value, bool):
        raise ValueError(f"matched records need declared locator field {field!r}")
    return value


def _unique(values: Iterable[Any]) -> tuple[Any, ...]:
    return tuple(dict.fromkeys(value for value in values if value is not None))


def resolve_page(
    manifest: Path | str,
    selector: str,
    locator_field: str,
    slots: Path | str | None = None,
    collection: str | None = None,
    binding_fields: tuple[str, ...] = (),
) -> PageResolution:
    manifest_path = Path(manifest)
    records, revision = _records(
        json.loads(manifest_path.read_text(encoding="utf-8")), collection
    )

    id_matches = [record for record in records if record.get("page_id") == selector]
    matches = id_matches or [record for record in records if record.get("title") == selector]
    if not matches:
        raise ValueError(f"semantic page selector not found: {selector!r}")

    locators = {_locator(record, locator_field) for record in matches}
    if len(locators) != 1:
        raise ValueError(
            f"selector {selector!r} is ambiguous across page locators: "
            f"{sorted(locators, key=str)!r}; add stable page_id values"
        )
    locator = next(iter(locators))

    ids = _unique(record.get("page_id") for record in matches)
    titles = _unique(record.get("title") for record in matches)
    if id_matches:
        if ids != (selector,):
            raise ValueError(f"page_id selector {selector!r} matched inconsistent identities")
        semantic_id = selector
    elif len(titles) == 1 and len(ids) <= 1:
        semantic_id = str(titles[0])
    else:
        raise ValueError(
            f"title selector {selector!r} does not prove one semantic page; add page_id"
        )

    bindings: dict[str, str] = {}
    for field in binding_fields:
        values = _unique(record.get(field) for record in matches)
        if len(values) != 1 or not isinstance(values[0], str) or not values[0]:
            raise ValueError(f"matched records need one nonempty binding {field!r}")
        bindings[field] = values[0]

    slot_key = None
    if slots is not None:
        slot_payload = json.loads(Path(slots).read_text(encoding="utf-8"))
        if not isinstance(slot_payload, dict):
            raise ValueError("slot contract must be a JSON object")
        slot_revision = slot_payload.get("revision")
        if not revision or slot_revision != revision:
            raise ValueError("manifest and slot contract need the same nonempty revision")
        slot_pages = slot_payload.get("pages")
        if not isinstance(slot_pages, dict):
            raise ValueError("slot contract needs a pages object")
        slot_key = str(locator)
        if slot_key not in slot_pages:
            raise ValueError(
                f"resolved page {semantic_id!r} has {locator_field}={locator!r}, "
                f"but slot key {slot_key!r} is absent"
            )
        slot_record = slot_pages[slot_key]
        if not isinstance(slot_record, dict):
            raise ValueError(f"slot entry {slot_key!r} must be an object")
        if ids:
            if slot_record.get("page_id") != str(ids[0]):
                raise ValueError(f"slot entry {slot_key!r} belongs to a different page_id")
        elif slot_record.get("title") != str(titles[0]):
            raise ValueError(f"slot entry {slot_key!r} belongs to a different title")

    return PageResolution(
        selector=selector,
        semantic_id=semantic_id if not ids else str(ids[0]),
        title=str(titles[0]) if len(titles) == 1 else None,
        locator_field=locator_field,
        locator=locator,
        record_count=len(matches),
        steps=_unique(record.get("step") for record in matches),
        pdf_pages=_unique(record.get("pdf_page") for record in matches),
        slot_key=slot_key,
        bindings=bindings,
        revision=revision,
    )


def resolution_from_env(name: str = "MANIM_PAGE_RESOLUTION_JSON") -> PageResolution:
    raw = os.environ.get(name)
    if not raw:
        raise ValueError(f"page resolution environment variable is absent: {name}")
    payload = json.loads(raw)
    payload["steps"] = tuple(payload.get("steps", ()))
    payload["pdf_pages"] = tuple(payload.get("pdf_pages", ()))
    return PageResolution(**payload)


def main() -> int:
    parser = argparse.ArgumentParser(
        description="Resolve stable page_id (or a unique exact title) to build locators."
    )
    parser.add_argument("--manifest", required=True, type=Path)
    parser.add_argument("--selector", required=True)
    parser.add_argument("--locator-field", required=True)
    parser.add_argument("--slots", type=Path)
    parser.add_argument("--collection", choices=COLLECTION_FIELDS)
    parser.add_argument("--binding-field", action="append", default=[])
    parser.add_argument("--json", action="store_true", dest="as_json")
    args = parser.parse_args()
    try:
        result = resolve_page(
            args.manifest, args.selector, args.locator_field, args.slots,
            args.collection, tuple(args.binding_field),
        )
    except (OSError, ValueError, json.JSONDecodeError) as error:
        print(f"resolve_slide_page: {error}", file=sys.stderr)
        return 2
    if args.as_json:
        print(json.dumps(asdict(result), ensure_ascii=False, sort_keys=True))
    else:
        print(result.locator)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
