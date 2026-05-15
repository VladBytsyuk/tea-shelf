# MVP Tea Management Flow

Status: Draft  
Version: MVP-001

## Goal

Let users create and maintain a useful tea inventory.

## Flow

1. User opens Tea Shelf.
2. If empty, user sees an empty state with a create action.
3. User creates a tea with required identity and stock fields.
4. User optionally adds brand, region, year, notes, and favorite status.
5. User saves and returns to the tea list.
6. User filters or opens a tea detail.
7. User edits details or remaining quantity when needed.
8. User archives a tea only after confirmation.
9. User restores archived tea from an archived view when needed.

## UX Requirements

- Creation must be possible without expert taxonomy knowledge.
- Remaining quantity must be visible enough to support drinking decisions.
- Favorite status must be quick to change.
- Archive behavior must avoid accidental data loss.
- Required field errors must be shown before save completes.
- Save failure must preserve entered values and offer retry.
- Filtered-empty state must distinguish no data from no matching results.
- Zero-stock teas must be visibly unavailable and not rely on color alone.

## Empty State

The empty state should be calm and direct. It should not include article content, AI prompts, or marketplace suggestions.

## Exit States

- Saved tea appears in the default active list.
- Archived tea is hidden from the default active list.
- Failed save leaves the user in the form with values intact.
