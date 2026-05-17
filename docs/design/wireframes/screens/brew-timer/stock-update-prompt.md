# Stock Update Prompt Layout

Status: Approved for Implementation
Version: MVP-001
Layout Version: LAYOUT-001

## Purpose

Prompt the user to manually update tea stock after saving a session with a selected tea.

## Trigger

- Shown after a session with selected tea saves successfully.
- Not shown for custom sessions.

## Layout

- Confirmation-style panel or dialog.
- Content: selected tea, current remaining quantity, editable remaining quantity, explanation that stock updates are manual.
- Actions: save stock update, skip.

## Validation

- Remaining quantity cannot be negative.

## Acceptance Coverage

- AC-BT-008
- AC-TEA-004
