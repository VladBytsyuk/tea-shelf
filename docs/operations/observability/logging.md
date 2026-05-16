# Logging

Status: Approved for Implementation
Version: MVP-001

## MVP Position

Client-side errors may be inspected during development and release validation. Persistent remote logging is not required unless approved later.

## Requirements

- Development errors should be visible enough for engineers to diagnose failed saves, timer issues, and persistence failures.
- Release validation should include console/error review for smoke flows.
- Logs must not contain private notes by default.
