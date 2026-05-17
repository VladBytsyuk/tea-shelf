# Data Backup Layout

Status: Approved for Implementation
Version: MVP-001
Layout Version: LAYOUT-001

## Purpose

Provide the MVP local backup path without adding auth, sync, or cloud storage.

## Layout

- Entry: secondary utility link from app-level menu or footer; not a primary navigation item.
- Header: title "Data Backup", back link to the previous primary destination.
- Export section: explain that export downloads a local JSON backup containing private collection and session notes; primary action "Export data".
- Import section: file picker for JSON import, validation result area, and disabled replacement action until a compatible file is selected.
- Failure state: malformed or incompatible import shows an error and does not overwrite existing data.

## Responsive Behavior

- Mobile: export and import sections stack; file picker, validation text, and actions wrap.
- Tablet/desktop: export and import sections may sit side by side if warnings remain readable.

## Acceptance Coverage

- AC-X-005
- AC-X-006
