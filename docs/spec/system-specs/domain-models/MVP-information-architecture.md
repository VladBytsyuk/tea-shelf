# MVP Information Architecture

Status: Approved for Implementation
Version: MVP-001

## Top-Level Navigation

- Tea Shelf
- Teaware Shelf
- Brew Timer
- Session History

## Tea Shelf

Views:

- Tea list.
- Tea detail.
- Create tea.
- Edit tea.

Primary objects:

- Tea.
- Favorite state.
- Availability state.

## Teaware Shelf

Views:

- Teaware list.
- Teaware detail.
- Create teaware.
- Edit teaware.

Primary objects:

- Teaware.
- Category.
- Material.
- Brewing method support.

## Brew Timer

Views:

- Session setup.
- Active timer.
- Session summary.
- Save session.

Primary objects:

- BrewSession.
- BrewSequence.
- BrewStep.
- SessionNote.

## Session History

Views:

- Session list.
- Session detail.
- Repeat session.
- Archived sessions.

Primary objects:

- Saved session.
- Notes.
- Repeat action.
- Archive and restore action.

## Deferred Navigation

These areas must not appear as MVP navigation unless approved later:

- Knowledge Shelf.
- AI Tea Assistant.
- Account/Profile.
- Marketplace.
- Community.
- Subscription or billing.
