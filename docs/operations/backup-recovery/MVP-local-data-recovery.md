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
