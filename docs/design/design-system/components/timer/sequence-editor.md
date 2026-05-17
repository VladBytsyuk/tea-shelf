# Sequence Editor

Status: Approved for Implementation
Version: MVP-001
Implemented Version: DS-IMPL-001

## Purpose

Edit steep duration and guidance before starting or repeating.

## Layout

- Uses Steep List row structure with editable fields.
- Each row contains duration input, optional temperature input/note, optional instruction note, remove action.
- Add-step action appears after list.
- Row gap: 12px.

## Validation

- At least one step.
- Duration is positive.
- Invalid sequence blocks Start.
