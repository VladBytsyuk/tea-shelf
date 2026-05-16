# MVP Local Data Privacy

Status: Draft  
Version: MVP-001

## Scope

MVP data includes tea inventory, teaware inventory, brew recipes, session history, and user-entered notes.

## Privacy Requirements

- Treat collection and session notes as user-owned private data.
- Do not introduce external AI, analytics, sync, or account data flows without documented approval.
- Do not require account creation for MVP workflows.
- If telemetry is introduced later, document event scope and avoid collecting sensitive notes by default.
- Browser/local storage limits and data-loss risks must be disclosed.
- Export/import or local backup behavior must avoid sending user data to external services by default.
- Export/import UX must warn that exported files can contain private collection and session notes.
- Import must reject malformed files without overwriting existing data.

## Deferred Security Areas

- Authentication.
- Authorization.
- Cloud sync.
- Multi-device account ownership.
- AI provider data sharing.
- Payment handling.

## Risks

- Local data loss can reduce trust.
- Future sync may require migration and conflict-resolution rules.
- AI features may introduce privacy and consent requirements.
- Export/import may expose private collection data if files are shared outside the app.
