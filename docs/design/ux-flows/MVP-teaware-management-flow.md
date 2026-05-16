# MVP Teaware Management Flow

Status: Approved for Implementation
Version: MVP-001

## Goal

Let users catalog teaware and use it during brewing sessions.

## Flow

1. User opens Teaware Shelf.
2. If empty, user sees an empty state with a create action.
3. User creates a teaware item with category, material, and volume.
4. User optionally adds purpose, supported brewing methods, and notes.
5. User saves and returns to the teaware list.
6. User filters by category, material, or brewing method.
7. User selects teaware during a brewing session.
8. User archives teaware only after confirmation.
9. User restores archived teaware from an archived view when needed.

## UX Requirements

- Common categories must support gaiwan, teapot, cup, Yixing clay, and generic other.
- Volume must be easy to read and compare.
- Material and method metadata should support practical selection without AI recommendations.
- Required field errors must be shown before save completes.
- Save failure must preserve entered values and offer retry.
- Filtered-empty state must distinguish no data from no matching results.
- Archived teaware must not disappear from historical session snapshots.
