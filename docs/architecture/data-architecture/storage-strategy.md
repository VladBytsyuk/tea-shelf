# Storage Strategy

Status: Draft  
Version: MVP-001

## MVP Direction

Tea Shelf MVP is local-first and single-user until authentication and cloud sync are approved as MVP+ or later. The implementation stack must define a browser/local persistence strategy before coding starts.

## Minimum Requirements

- Persist Tea, Teaware, BrewSession, SessionNote, and session sequence data for normal app use.
- Preserve session snapshots when source tea or teaware records are edited or archived.
- Support active/archived lifecycle status.
- Prevent negative remaining quantity.
- Version stored data so future migrations can be planned.
- Provide a user-accessible export/import or equivalent local backup path before release, unless PM explicitly accepts local data-loss risk.

## Privacy Boundaries

- Do not send collection notes or session notes to external services in MVP.
- Telemetry must not collect private notes by default.
- Cloud sync and remote backup are excluded from MVP.

## Data-Loss Expectations

- Browser storage clearing may remove local data unless export/import or another backup method is used.
- Release docs must disclose local data durability limits.
- QA must validate normal-use persistence and backup/recovery behavior once the implementation strategy is selected.
