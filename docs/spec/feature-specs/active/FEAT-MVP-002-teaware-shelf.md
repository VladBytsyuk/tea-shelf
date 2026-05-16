# FEAT-MVP-002: Teaware Shelf

Status: Approved for Implementation
Version: MVP-001

## Summary

The Teaware Shelf lets users catalog teaware and understand which items are suitable for brewing methods.

## User Problems Solved

- "I do not understand which teaware is suitable."
- "I own multiple gaiwans, pots, cups, and clay pieces but do not track their purpose."

## Functional Requirements

- Create, view, edit, archive, and restore teaware records.
- Capture name, category, material, volume, purpose, supported brewing methods, and notes.
- Support categories such as gaiwan, teapot, cup, Yixing clay, and other user-defined or generic items.
- Filter teaware by category, material, and brewing method.
- Allow teaware selection during a brew session.

## Acceptance Criteria

- Given no teaware exists, when the user opens Teaware Shelf, then a clear empty state prompts teaware creation.
- Given valid required fields, when the user saves teaware, then it appears in Teaware Shelf.
- Given a teaware item has volume and material, when viewed, then those values are visible.
- Given a brewing method filter is applied, then only matching teaware appears.
- Given a brew session starts, then the user can select an existing teaware item or continue without one.
- Given required fields are missing, when the user tries to save, then save is blocked and field-level errors identify missing values.
- Given a teaware item is archived, when the default list loads, then the item is hidden but historical session snapshots remain readable.
- Given no filter results exist, when the user applies filters, then a no-results state explains the list is filtered.

## Field Rules

- Required: name, category, material, volume.
- Optional: purpose, supported brewing methods, notes.
- Units: volume uses milliliters unless implementation planning approves a unit selector.
- Archived teaware cannot be selected for new sessions by default.

## Exclusions

- AI teaware recommendations.
- Teaware marketplace links.
- Advanced clay seasoning history.
