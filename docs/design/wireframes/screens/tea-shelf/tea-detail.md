# Tea Detail Layout

Status: Approved for Implementation
Version: MVP-001
Layout Version: LAYOUT-001

## Purpose

Review a tea record and start related actions.

## Layout

- Header: tea name, favorite control, availability badge, edit action.
- Metadata: type, brand, region, year, original weight, remaining quantity, archive status when applicable.
- Body: notes area; optional historical warning if opened from a session snapshot after archive/edit.
- Actions: "Start brew", "Edit", "Archive"; archived detail uses "Restore" instead of brew/edit by default unless restored.
- Confirmation: archive action opens Archive Tea Confirmation.

## Responsive Behavior

- Mobile: actions stack below title; metadata appears as a single-column definition list.
- Tablet/desktop: metadata may sit beside notes in a two-column layout.

## Acceptance Coverage

- AC-TEA-005
- AC-TEA-007
- AC-TEA-008
- AC-BT-001
