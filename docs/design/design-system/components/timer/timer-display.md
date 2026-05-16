# Timer Display

Status: Ready for Implementation Planning
Version: MVP-001

## Purpose

Show remaining time and current timer state.

## Layout

- Container max width: 720px.
- Padding: 24px on mobile, 32px on tablet/desktop.
- Surface: `surface.default`.
- Border: 1px solid `border.default`.
- Radius: 8px.
- Remaining time block min height: 56px.
- State label appears above or below time with 8px gap.
- Current steep appears near state label, not inside the time digits.

## Typography

- Remaining time: `type.timer-lg`.
- Compact remaining time: `type.timer-md`.
- State label: badge or `type.body-sm`, weight 600.
- Current steep: `type.body-sm`.

## Rules

- Use tabular numerals.
- Digits must not shift adjacent controls.
- Do not announce every countdown tick.
- Do not imply background or lock-screen guarantee.
