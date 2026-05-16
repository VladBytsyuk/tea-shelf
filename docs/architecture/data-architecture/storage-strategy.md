# Storage Strategy

Status: Approved for Implementation
Version: MVP-001

## MVP Direction

Tea Shelf MVP is local-first and single-user until authentication and cloud sync are approved as MVP+ or later. The implementation stack must define a browser/local persistence strategy before coding starts.

The selected MVP persistence default is IndexedDB through Dexie, accessed only through local services or repositories. UI components must not call browser storage directly.

## Minimum Requirements

- Persist Tea, Teaware, BrewSession, SessionNote, and session sequence data for normal app use.
- Preserve session snapshots when source tea or teaware records are edited or archived.
- Support active/archived lifecycle status.
- Prevent negative remaining quantity.
- Version stored data so future migrations can be planned.
- Provide a user-accessible export/import or equivalent local backup path before release, unless PM explicitly accepts local data-loss risk.
- Exported files must include data version metadata.
- Import must reject malformed or incompatible data without overwriting existing data.
- Import must warn users that exported files can contain private tea, teaware, session, and note data.
- Conflict handling may be simple for MVP: replace all local data only after explicit confirmation, or import into a separate review flow selected during implementation planning.

## Privacy Boundaries

- Do not send collection notes or session notes to external services in MVP.
- Telemetry must not collect private notes by default.
- Cloud sync and remote backup are excluded from MVP.

## Data-Loss Expectations

- Browser storage clearing may remove local data unless export/import or another backup method is used.
- Release docs must disclose local data durability limits.
- QA must validate normal-use persistence and backup/recovery behavior once the implementation strategy is selected.
- Storage unavailable, quota exceeded, or incompatible local data must surface a recoverable error instead of trapping users in a broken app state.

## Implementation Default

- Use IndexedDB through Dexie for Tea, Teaware, BrewSession, SessionNote or inline notes, and session sequence data.
- Store a schema version from the first release and keep migration hooks explicit.
- Keep export/import format versioned with `schemaVersion` and `exportedAt`.
- Validate the complete import payload before any replacement.
- Replace local data only after explicit user confirmation.
- Preserve existing data untouched when import validation fails.
