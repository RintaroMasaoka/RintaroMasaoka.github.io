# Report Contracts

Use compact JSON-style reports when the user asks for a review result, when
coordinating multiple artifacts, or after direct edits.

## Scan Report

```json
{
  "target": "artifact or range",
  "mode": "scan",
  "gaps_found": 0,
  "gap_summary": {"G1": 0, "G2": 0},
  "items": [
    {
      "id": "G1-001",
      "type": ["G1"],
      "severity": "light or heavy",
      "location": "section, heading, or line",
      "diagnosis": "what is missing",
      "repair_unit": "sentence, paragraph, derivation block, section, separate artifact",
      "evidence_source": "self-reasoning, local reference, external source, calculation",
      "ownership": "direct-edit or external-request"
    }
  ],
  "external_requests": [],
  "unresolved": []
}
```

## Fill Report

```json
{
  "artifact": "artifact name",
  "gaps_fixed": ["G1-001"],
  "rewritten_ranges": ["section or line description"],
  "modified_files": [],
  "new_artifacts": [],
  "external_requests": [],
  "unresolved": [],
  "lines_added": 0,
  "lines_removed": 0
}
```

## Verification Report

```json
{
  "artifact": "artifact name",
  "result": "PASS or FAIL",
  "issues": [
    {
      "check": 1,
      "severity": "blocker or warning",
      "description": "specific problem",
      "location": "line, section, or quoted anchor"
    }
  ]
}
```

## Run Report

```json
{
  "job": "job id",
  "artifacts": [],
  "gaps_found": 0,
  "gaps_fixed": 0,
  "gap_summary": {"G1": 0},
  "modified_files": [],
  "new_artifacts": [],
  "external_requests": [],
  "unresolved": []
}
```
