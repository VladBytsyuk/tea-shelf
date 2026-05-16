# Method Selector / Multi-Select Chips

Status: Ready for Implementation Planning
Version: MVP-001

## Purpose

Choose brewing methods or show selected supported methods.

## Layout

- Container uses flex wrap.
- Gap: 8px.
- Chip min height: 32px.
- Chip padding: 0 12px.
- Radius: pill.

## States

- Unselected: `surface.default`, `border.default`, `text.secondary`.
- Selected: `surface.selected`, `action.primary`, `action.primary`.
- Disabled: disabled token.

## Accessibility

- Selectable chips expose selected state.
- Non-interactive metadata chips are not focusable.
