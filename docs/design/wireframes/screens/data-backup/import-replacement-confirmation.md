# Import Replacement Confirmation Layout

Status: Approved for Implementation
Version: MVP-001
Layout Version: LAYOUT-001

## Purpose

Prevent accidental local data replacement.

## Trigger

- User selects a compatible import file and chooses replacement.

## Layout

- Private-data warning.
- Statement that existing local data will be replaced.
- Import summary when available.
- Confirm replacement action.
- Cancel action.

## Validation And Focus

- Replacement is unavailable until the full import file validates successfully.
- Focus traps while open and returns to the replacement trigger on close.

## Acceptance Coverage

- AC-X-005
- AC-X-006
- AC-X-002
