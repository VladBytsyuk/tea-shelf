# MVP-001 Functional Specification

Status: Approved for Implementation
Version: MVP-001
Source PRD: PRD-MVP-001

## Scope

This specification defines the complete MVP functional scope for Tea Shelf / Чайная Полка. MVP includes Tea Shelf, Teaware Shelf, Brew Timer, and Session History only.

## Module A: Tea Shelf

Functional requirements:

- Users can create tea records.
- Users can view tea records in a list and detail view.
- Users can edit tea records.
- Users can archive and restore tea records.
- Users can set tea name, tea type, original weight, remaining quantity, brand, region, year, notes, and favorite flag.
- Users can update remaining quantity.
- Users can filter or identify teas by type, favorite, and availability.

Business rules:

- Remaining quantity cannot be negative.
- Availability is derived from remaining quantity and is not manually edited.
- Tea records must be usable from Brew Timer flows.
- Required tea fields: name, type, original weight, remaining quantity.
- Optional tea fields: brand, region, year, notes, favorite flag.
- Archived teas are hidden from default lists but remain available as historical session snapshots.
- Restored teas return to active lists and can be selected for new sessions if remaining quantity is valid.

## Module B: Teaware Shelf

Functional requirements:

- Users can create teaware records.
- Users can view teaware records in a list and detail view.
- Users can edit teaware records.
- Users can archive and restore teaware records.
- Users can set name, category, material, volume, purpose, supported brewing methods, and notes.
- Users can filter teaware by category, material, and brewing method.
- Users can select teaware during a brew session.

Business rules:

- Teaware selection is optional for a session.
- Teaware records must not require linked tea records.
- Required teaware fields: name, category, material, volume.
- Optional teaware fields: purpose, supported brewing methods, notes.
- Archived teaware is hidden from default lists but remains available as historical session snapshots.
- Restored teaware returns to active lists and can be selected for new sessions.

## Module C: Brew Timer

Functional requirements:

- Users can start a brewing session from a tea or custom session path.
- Users can optionally select teaware.
- Users can define or use a multi-steep sequence.
- Users can see current steep, remaining time, and sequence progress.
- Users can pause, resume, cancel, and complete a timer sequence.
- Users can advance through steeps.
- Users can save a completed session.
- Users can record notes.
- Users can repeat a previous session.
- Users can manually update remaining stock after saving a session.

Business rules:

- A saved session must preserve the tea, optional teaware, sequence, and notes used for that session.
- Timer state must be clear for setup, running, paused, steep complete, completed, canceled, and save failure states.
- Browser refresh/background recovery is best effort in MVP and must be disclosed in UX copy if selected implementation cannot guarantee recovery.
- Recipe favorites and standalone recipe management are deferred.
- A valid steep sequence has at least one step and each step has a positive duration in seconds.
- Temperature guidance is optional and may be recorded as a Celsius value or note according to the selected implementation.
- Saving a session does not automatically decrement stock; after save, the user may manually update remaining quantity.
- Custom saved sessions preserve sequence, timestamps, custom label, and notes without tea or teaware snapshots.

## Module D: Session History

Functional requirements:

- Users can view saved sessions in a list.
- Users can view saved session details.
- Users can repeat a saved session as a new session.
- Users can archive and restore saved sessions.

Business rules:

- Saved sessions preserve snapshots of tea, teaware, and steep sequence values.
- Repeating a session creates a new session and does not overwrite history.
- Restored sessions return to the default history list and remain repeatable.

## Cross-Module Requirements

- Responsive web layouts for mobile, tablet, and desktop.
- Keyboard-accessible core flows.
- Empty states for first use.
- Filtered-empty and save-failure states for catalog and session flows.
- Scope boundaries visible in docs and acceptance criteria.
- Export/import or equivalent local backup path before release unless PM explicitly accepts local data-loss risk.

## Explicit Exclusions

- AI.
- Knowledge Shelf.
- Registration and login.
- Cloud sync.
- Native mobile.
- Monetization.
- Marketplace.
- Social features.
