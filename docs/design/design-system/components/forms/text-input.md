# Text Input

Status: Approved for Implementation
Version: MVP-001
Implemented Version: DS-IMPL-001

## Purpose

Capture tea name, brand, region, teaware name, purpose, and short labels.

## Layout

- Height: 40px.
- Width: 100% of container.
- Padding: 0 12px.
- Border: 1px solid `border.default`.
- Radius: 6px.
- Background: `surface.default`.

## Typography

- Value: `type.body`.
- Placeholder: `type.body`, `text.muted`.

## States

- Focus: border `border.strong` plus focus ring.
- Invalid: border `state.error`; error text below.
- Disabled: `surface.muted`, opacity token.
- Save failed: value preserved; field remains editable unless failure is global.

## Rules

- Long entered values scroll within the input; they do not expand height.
- Placeholder never replaces visible label.
