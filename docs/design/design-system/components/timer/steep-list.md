# Steep List

Status: Approved for Implementation
Version: MVP-001

## Purpose

Show ordered steep sequence and progress.

## Layout

- Vertical list with 8px gap.
- Row padding: 12px.
- Row border: 1px solid `border.default`.
- Row radius: 8px.
- Step number column: 32px fixed.
- Duration column uses tabular numerals.

## Content Order

1. Step number.
2. Duration.
3. Temperature note.
4. Instruction note.
5. State badge.

## States

- Upcoming.
- Current.
- Complete.
- Invalid.

## Rules

- Current step uses text label plus selected border/background.
- Invalid duration shows validation message near the row.
