# Save Failed State

Status: Approved for Implementation
Version: MVP-001
Implemented Version: DS-IMPL-001

## Purpose

Recover from failed save.

## Layout

- Inline alert near the form or timer save action.
- Retry action appears inside alert or directly after it.

## Rules

- Keep all entered values.
- Do not create duplicate session history entries after retry.
- Message explains that the save failed and what the user can do next.
