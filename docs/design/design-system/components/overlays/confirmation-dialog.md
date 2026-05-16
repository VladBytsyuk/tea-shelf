# Confirmation Dialog

Status: Ready for Implementation Planning
Version: MVP-001

## Purpose

Confirm archive, restore, cancel active session, or import replacement.

## Layout

- Width: min(100% - 32px, 480px).
- Padding: 24px.
- Radius: 8px.
- Shadow: `shadow.md`.
- Content gap: 16px.
- Action row gap: 12px.
- Mobile actions stack if labels do not fit.

## Typography

- Title: `type.heading-sm`.
- Body: `type.body-sm`.

## Rules

- Body states the consequence plainly.
- Destructive confirm button uses destructive variant.
- Cancel action remains available.

## Accessibility

- Dialog traps focus.
- Focus starts on safest useful action unless destructive confirmation requires deliberate action.
- Focus returns to triggering control on close.
