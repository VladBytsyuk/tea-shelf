# MVP Local Service Contracts

Status: Approved for Implementation
Version: MVP-001

## Purpose

Define local application service boundaries for MVP. These are not remote HTTP APIs.

## Contract Rules

- MVP runs local-first and single-user without authentication.
- Domain operations must be implemented behind local services or repositories so future sync can replace persistence without changing product behavior.
- Services must preserve archive/restore semantics and session snapshots.
- Services must reject invalid data before persistence and preserve user-entered values on save failure.

## Required Local Services

| Service | Responsibilities |
| --- | --- |
| Tea service | Create, read, update, archive, restore, filter, favorite, and validate tea records. |
| Teaware service | Create, read, update, archive, restore, filter, and validate teaware records. |
| Timer/session service | Validate sequences, run timer states, save sessions, retry failed saves, repeat saved sessions, and prompt manual stock updates. |
| History service | List, detail, archive, restore, and repeat saved sessions without mutating historical snapshots. |
| Backup service | Export local data, validate imports, reject malformed data, and require confirmation before replacement. |

## Non-Goals

- No backend API.
- No auth, token, role, account, or cloud-sync contract.
- No AI, commerce, marketplace, social, or content integration.
- No standalone recipe CRUD contract.
