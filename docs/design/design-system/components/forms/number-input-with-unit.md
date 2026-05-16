# Number Input With Unit

Status: Approved for Implementation
Version: MVP-001

## Purpose

Capture grams, milliliters, seconds, Celsius, and year.

## Layout

- Wrapper: horizontal grid with input and unit label.
- Input height: 40px.
- Unit block min width: 44px.
- Unit block padding: 0 12px.
- Unit block border-left: 1px solid `border.default`.
- Whole control radius: 6px.

## Typography

- Input value: `type.body`.
- Unit: `type.body-sm`, `text.secondary`.

## Validation

- Remaining quantity: zero or positive.
- Timer duration: positive.
- Volume: positive.
- Year: numeric; exact bounds are implementation-planning responsibility unless product spec defines them.

## Rules

- Unit is always visible.
- Invalid state applies to the full input-plus-unit wrapper.
