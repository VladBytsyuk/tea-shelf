# Session Detail Layout

Status: Approved for Implementation
Version: MVP-001
Layout Version: LAYOUT-001

## Purpose

Review a saved session and repeat or archive it.

## Layout

- Header: tea snapshot/custom label, date/time, repeat action.
- Snapshot sections: tea snapshot, optional teaware snapshot, sequence snapshot, timestamps, notes.
- Actions: "Repeat session", "Archive"; archived detail uses "Restore".
- Historical context: if source tea or teaware is archived or changed, the saved snapshot remains the displayed source of truth.

## Responsive Behavior

- Mobile: sections stack in the order header, snapshots, notes, actions.
- Tablet/desktop: snapshot sections may be arranged in two columns.

## Acceptance Coverage

- AC-SH-002
- AC-SH-003
- AC-SH-005
