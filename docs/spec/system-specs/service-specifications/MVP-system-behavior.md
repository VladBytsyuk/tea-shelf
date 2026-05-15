# MVP System Behavior

Status: Draft  
Version: MVP-001

## Boundary

The MVP behaves as a single-user responsive web application focused on local product workflows. Authentication, account ownership, and cloud sync are deferred until MVP+ approval.

## Core Workflows

- Tea management: create, browse, edit, favorite, update quantity, identify availability.
- Teaware management: create, browse, edit, filter, select for sessions.
- Brewing session: select tea, optionally select teaware, run steeps, save notes, repeat session.
- Session history: browse saved sessions, view details, repeat, archive, and restore.

## State Expectations

- Tea and teaware records must remain available to session flows.
- Saved sessions must preserve the brewing context used at the time of the session.
- Timer progress must be clear to the user during active sessions.
- Stock updates must not create negative remaining quantity.
- Archived records are hidden from default lists and cannot be selected for new sessions by default.
- Archived source records do not hide or alter historical session snapshots.
- Save failures must keep unsaved user input available for retry.

## Timer State Machine

- Setup: user chooses tea or custom session, optional teaware, and steep sequence.
- Running: countdown is active for the current steep.
- Paused: countdown stops until the user resumes.
- Steep complete: current steep is done and the user can continue to the next steep or complete the session.
- Completed: all intended steeps are done and the user can save session notes.
- Canceled: user confirms discarding unsaved session progress.
- Save failed: app reports failure and allows retry without losing session details.

## Data Lifecycle

- Create records as active.
- Archive records instead of permanent deletion in MVP.
- Restore archived records when the user chooses restore.
- Preserve snapshots inside sessions at save time.
- Require explicit future approval before adding permanent deletion.

## Integration Expectations

MVP has no required external integrations.

Future integrations must be documented before implementation:

- Authentication provider.
- Cloud storage or sync backend.
- AI provider.
- Content management system.
- Commerce or affiliate systems.
