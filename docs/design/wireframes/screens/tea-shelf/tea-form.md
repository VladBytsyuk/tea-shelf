# Tea Form Layout

Status: Approved for Implementation
Version: MVP-001
Layout Version: LAYOUT-001

## Purpose

Create or edit a tea while preserving validation clarity and unsaved values on failure.

## Layout

- Modes: create and edit.
- Required fields: name, type, original weight, remaining quantity.
- Optional fields: brand, region, year, notes, favorite.
- Sections: identity first, stock second, optional details third, actions last.
- Actions: primary save, secondary cancel. Cancel returns to previous list/detail without saving.

## Validation And Failure

- Field-level errors appear below affected fields.
- Negative remaining quantity is blocked.
- Save failed state shows an inline error near actions plus retry.
- All entered values remain in fields after save failure.

## Responsive Behavior

- Mobile: one field per row; save/cancel stay at the end of form.
- Tablet/desktop: identity and stock fields may use two columns; notes remain full width.

## Acceptance Coverage

- AC-TEA-002
- AC-TEA-003
- AC-TEA-004
- AC-TEA-011
- AC-X-002
