# Teaware Form Layout

Status: Approved for Implementation
Version: MVP-001
Layout Version: LAYOUT-001

## Purpose

Create or edit a teaware item while preserving validation clarity and unsaved values on failure.

## Layout

- Modes: create and edit.
- Required fields: category, material, volume.
- Optional fields: purpose, supported brewing methods, notes.
- Sections: identity first, capacity/material second, method support third, notes fourth, actions last.
- Actions: primary save, secondary cancel.

## Validation And Failure

- Required-field errors appear below affected fields.
- Invalid volume is blocked.
- Save failed state shows an inline error near actions plus retry.
- All entered values remain in fields after save failure.

## Responsive Behavior

- Mobile: one field/control group per row; method chips wrap.
- Tablet/desktop: category/material/volume may use a two-column layout where readable.

## Acceptance Coverage

- AC-TW-002
- AC-TW-003
- AC-TW-009
- AC-X-002
