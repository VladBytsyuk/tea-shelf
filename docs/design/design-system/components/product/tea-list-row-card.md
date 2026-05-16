# Tea List Row / Card

Status: Approved for Implementation
Version: MVP-001

## Purpose

Summarize one active or archived tea.

## Layout

- Surface: `surface.default`.
- Border: 1px solid `border.default`.
- Radius: 8px.
- Padding: 16px.
- Row gap: 12px.
- Mobile: vertical stack.
- Tablet/desktop: grid with main content, stock/status, and actions.
- Minimum row height: 88px.

## Content Order

1. Tea name.
2. Type, origin, brand metadata.
3. Stock indicator and availability.
4. Favorite control.
5. Primary row action or menu.

## Typography

- Tea name: `type.body-strong`.
- Metadata: `type.body-sm`.
- Stock: `type.body-sm`, weight 600.

## States

- Favorite: favorite control selected plus optional badge.
- Unavailable: unavailable badge and non-color text label.
- Archived: archived badge; reduce metadata emphasis; restore action replaces archive action.
- Focus: global focus ring around row or first interactive element.

## Rules

- Archived teas are not selectable for new sessions by default.
- Long names wrap to two lines before truncation.
- Full tea name must remain available to assistive technology.
