# Session History List Layout

Status: Approved for Implementation
Version: MVP-001
Layout Version: LAYOUT-001

## Purpose

Show saved active sessions in reverse chronological order.

## Layout

- Header: title "Session History", primary action "Start session", secondary link "Archived sessions".
- Body: session rows/cards showing date/time, tea snapshot or custom label, optional teaware snapshot, steep count, and notes presence.
- Row actions: open detail; repeat action may appear as a secondary action when space allows.

## Responsive Behavior

- Mobile: one-column cards; date/time and label stay readable before metadata.
- Tablet/desktop: rows may be denser but must preserve snapshot readability.

## States

- First-use empty state.
- Archived exclusion from default list.

## Acceptance Coverage

- AC-SH-001
- AC-SH-004
- AC-X-001
