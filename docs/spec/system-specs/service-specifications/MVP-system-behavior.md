# MVP System Behavior

Status: Ready for Implementation Planning
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

## Timer Transition Rules

| From | Trigger | To | Guard / Result |
| --- | --- | --- | --- |
| Setup | Start | Running | Sequence has at least one step and each duration is positive. |
| Setup | Cancel | Canceled | User confirms discard if setup has unsaved values. |
| Running | Pause | Paused | Remaining time stops changing until resume. |
| Running | Current steep reaches zero | Steep complete | User chooses next steep or complete session; MVP does not require auto-advance. |
| Running | Cancel | Canceled | User confirms discard of unsaved progress. |
| Paused | Resume | Running | Countdown resumes from remaining time. |
| Paused | Cancel | Canceled | User confirms discard of unsaved progress. |
| Steep complete | Next steep | Running | Next ordered step becomes active. |
| Steep complete | Complete session | Completed | User can enter notes and save. |
| Completed | Save succeeds | Session history entry | Snapshots are written at save time. |
| Completed | Save fails | Save failed | Session values and notes remain available for retry. |
| Save failed | Retry succeeds | Session history entry | No duplicate history entry is created for the failed attempt. |
| Save failed | Cancel | Canceled | User confirms discard of unsaved completed session. |

Terminal states are Canceled and saved Session history entry. Browser refresh, tab backgrounding, sleep/wake, and lock-screen behavior are best effort in MVP and must not be described as guaranteed background timing.

## Data Lifecycle

- Create records as active.
- Archive records instead of permanent deletion in MVP.
- Restore archived records when the user chooses restore.
- Preserve snapshots inside sessions at save time.
- If source tea or teaware records change during an active unsaved session, the saved session uses the selected values visible in setup/session context at save time.
- Repeating a saved session uses saved snapshots and does not require restoring archived source records.
- Saving a session does not automatically decrement tea stock; manual stock update happens after save and must validate non-negative remaining quantity.
- Require explicit future approval before adding permanent deletion.

## Local Persistence and Backup Expectations

- Normal-use data must persist after reload once the implementation stack is selected.
- Stored data must include version metadata to support future migrations.
- Export/import or an equivalent local backup path is required before release unless PM explicitly accepts local data-loss risk.
- Import failures, storage unavailable, quota exceeded, and incompatible local data must not lock the user out of the application.

## Integration Expectations

MVP has no required external integrations.

Future integrations must be documented before implementation:

- Authentication provider.
- Cloud storage or sync backend.
- AI provider.
- Content management system.
- Commerce or affiliate systems.
