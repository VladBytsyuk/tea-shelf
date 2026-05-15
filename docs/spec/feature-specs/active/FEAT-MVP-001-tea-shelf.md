# FEAT-MVP-001: Tea Shelf

Status: Draft  
Version: MVP-001

## Summary

The Tea Shelf lets users catalog owned teas and understand what is available for brewing.

## User Problems Solved

- "I forget what teas I currently own."
- "I lose track of remaining stock."
- "I need a structured way to choose what to drink."

## Functional Requirements

- Create, view, edit, archive, and restore tea records.
- Capture tea name, type, original weight, remaining quantity, brand, region, year, notes, and favorite flag.
- Filter or group teas by type, availability, and favorite status.
- Update remaining quantity manually.
- Show empty state for first tea creation.
- Show filtered-empty and save-failure states.

## Acceptance Criteria

- Given no teas exist, when the user opens Tea Shelf, then a clear empty state prompts tea creation.
- Given valid required fields, when the user saves a tea, then it appears in Tea Shelf.
- Given a tea exists, when the user edits stock, then remaining quantity updates and persists.
- Given remaining quantity reaches zero, then the tea is unavailable or clearly marked out of stock.
- Given a tea is favorited, then the user can identify it in lists and filter to favorites.
- Given required fields are missing, when the user tries to save, then save is blocked and field-level errors identify missing values.
- Given a tea is archived, when the default list loads, then the tea is hidden but historical session snapshots remain readable.
- Given no filter results exist, when the user applies filters, then a no-results state explains the list is filtered.

## Field Rules

- Required: name, type, original weight, remaining quantity.
- Optional: brand, region, year, notes, favorite flag.
- Units: weight and quantity use grams unless implementation planning approves a unit selector.
- Remaining quantity must be zero or greater.
- Availability is derived from remaining quantity.

## Exclusions

- AI tasting notes.
- Aging analytics.
- Marketplace purchase links.
- Shared collections.
