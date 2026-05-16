# Stock Indicator

Status: Ready for Implementation Planning
Version: MVP-001

## Purpose

Show remaining quantity and availability.

## Layout

- Inline group with quantity and status badge.
- Gap: 8px.
- Quantity uses tabular numerals where available.

## States

- Available: quantity greater than zero.
- Unavailable: quantity equals zero.
- Invalid: negative value in edit flow only.

## Rules

- Display unit as `g`.
- Manual post-session update uses same visual and validation rules.
