# Brewing Method Chip

Status: Approved for Implementation
Version: MVP-001
Implemented Version: DS-IMPL-001

## Purpose

Show or choose supported brewing methods.

## Layout

- Height: 28px for metadata.
- Height: 32px for selectable chip.
- Padding: 0 10px.
- Radius: pill.
- Gap: 4px if icon exists.

## States

- Metadata: non-focusable.
- Selectable unselected: border `border.default`.
- Selectable selected: background `surface.selected`, text `action.primary`.
