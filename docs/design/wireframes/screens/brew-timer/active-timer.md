# Active Timer Layout

Status: Approved for Implementation
Version: MVP-001
Layout Version: LAYOUT-001

## Purpose

Run the current steep with obvious state and reachable controls.

## Layout

- Header: session label, selected tea/custom label, optional teaware.
- Main region: current steep number, remaining time, state label, progress indicator, and non-color status text.
- Secondary region: full steep list with completed/current/upcoming states.
- Controls: pause/resume, cancel, next/complete steep when appropriate.
- Cancel opens confirmation before discarding unsaved progress.

## Responsive Behavior

- Mobile: timer display is the first visible content; controls remain reachable without horizontal scrolling.
- Tablet/desktop: timer display and steep list may sit side by side.

## Accessibility

- Live announcements are limited to start, pause, resume, steep complete, completed, and save failed.
- Timer state must be perceivable through text and not rely on color alone.

## Acceptance Coverage

- AC-BT-003
- AC-BT-004
- AC-BT-005
- AC-BT-006
- AC-BT-009
- AC-X-001
