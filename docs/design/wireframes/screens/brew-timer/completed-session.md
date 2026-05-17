# Completed Session Layout

Status: Approved for Implementation
Version: MVP-001
Layout Version: LAYOUT-001

## Purpose

Capture optional notes and save session history.

## Layout

- Header: "Session complete" with session summary.
- Summary: tea snapshot or custom label, optional teaware snapshot, completed steep sequence, start/end timestamps when available.
- Form: optional notes textarea.
- Actions: primary "Save session", secondary cancel/discard with confirmation.

## Failure

- Save failed state preserves notes, selected tea/teaware, and sequence.
- Retry remains available.

## Acceptance Coverage

- AC-BT-007
- AC-BT-010
- AC-BT-011
