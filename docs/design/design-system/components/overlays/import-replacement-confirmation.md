# Import Replacement Confirmation

Status: Approved for Implementation
Version: MVP-001
Implemented Version: DS-IMPL-001

## Purpose

Warn before imported data replaces local data.

## Layout

- Confirmation Dialog variant.
- Includes privacy warning and replacement consequence.

## Rules

- Confirm button is destructive if local data will be replaced.
- Malformed import errors use Inline Alert instead of this dialog.
