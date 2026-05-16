# Security Standards

Status: Draft  
Version: MVP-001

## MVP Standards

- Treat tea, teaware, session, and note data as private user-owned data.
- Do not send private collection or note data to external systems by default.
- Do not add authentication, cloud sync, AI, telemetry, or commerce integrations without approved specs and security review.
- Disclose local data durability limits.
- Require review before export/import behavior is implemented.
- Export/import flows must warn users before creating or importing files containing private notes or collection details.
- Diagnostic logging must avoid private notes, full exported/imported payloads, filenames, and storage contents.
- Permanent deletion requires explicit approval and data-retention review.
