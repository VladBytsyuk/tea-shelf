# Inline Alert

Status: Approved for Implementation
Version: MVP-001

## Purpose

Show save failure, import warning, storage warning, or recoverable error.

## Layout

- Padding: 12px 16px.
- Border: 1px solid state color.
- Radius: 8px.
- Gap: 8px between icon/title/body.
- Width: 100% of parent.

## Variants

- Error: `state.error`.
- Warning: `state.warning`.
- Success: `state.success`.

## Rules

- Alert title uses `type.body-strong`.
- Body uses `type.body-sm`.
- Retry action appears below body or right-aligned on desktop.
