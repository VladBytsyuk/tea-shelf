# Badge

Status: Ready for Implementation Planning
Version: MVP-001

## Purpose

Show compact status or metadata.

## Layout

- Height: 24px.
- Padding: 0 8px.
- Radius: pill.
- Gap: 4px if icon is present.
- Icon: 12px or 16px depending density.

## Typography

- `type.caption-strong`.

## Variants

| Variant | Background | Text | Border |
| --- | --- | --- | --- |
| Favorite | `surface.selected` | `action.primary` | `action.primary` |
| Unavailable | `surface.muted` | `state.unavailable` | `border.default` |
| Archived | `surface.muted` | `state.archived` | `border.default` |
| Custom session | `surface.selected` | `action.secondary` | `border.default` |
| Timer running | `surface.selected` | `timer.running` | `timer.running` |
| Timer paused | `surface.muted` | `timer.paused` | `timer.paused` |
| Timer complete | `surface.muted` | `timer.complete` | `timer.complete` |
