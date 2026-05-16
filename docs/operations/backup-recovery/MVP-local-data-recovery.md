# MVP Local Data Recovery

Status: Draft  
Version: MVP-001

## Scope

MVP is local-first and has no cloud recovery. Users must not be promised cloud backup or multi-device sync.

## Requirements

- Implementation planning must define local persistence and data versioning.
- Release readiness must validate normal-use persistence after reload.
- Export/import or equivalent local backup guidance must be provided before release unless PM accepts data-loss risk.
- Browser storage clearing risk must be documented.

## Recovery Scenarios

- Reload page with existing data.
- Update app version with existing data.
- Restore from export/import if implemented.
- Handle corrupted or incompatible local data gracefully enough to avoid application lockout.

## Export / Import Requirements

- Export must be local user-initiated file creation or an equivalent local backup mechanism.
- Export must not send data to external services.
- Import must validate version and required structure before changing local data.
- Import must preserve existing local data if validation fails.
- Import replacement behavior requires explicit user confirmation.
- User-facing copy must warn that exported files may contain private collection and session notes.
