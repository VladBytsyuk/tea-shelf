# Select

Status: Approved for Implementation
Version: MVP-001
Implemented Version: DS-IMPL-001

## Purpose

Choose single values such as tea type, category, material, selected tea, optional teaware, and filters.

## Layout

- Height: 40px.
- Padding: 0 36px 0 12px.
- Right icon area: 36px.
- Border/radius/background match text input.
- Selected value appears left-aligned.

## Typography

- Selected value: `type.body`.
- Placeholder: `type.body`, `text.muted`.

## States

- Open: focus ring remains visible.
- Disabled: disabled token.
- Invalid: field error rules.

## Accessibility

- Keyboard navigable.
- Current selection is programmatically exposed.
