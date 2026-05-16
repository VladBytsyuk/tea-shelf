# FEAT-MVP-003: Brew Timer

Status: Approved for Implementation
Version: MVP-001

## Summary

The Brew Timer supports guided multi-steep tea sessions with timing, temperature notes, session history, and repeatability.

## User Problems Solved

- "I do not properly track steeping times."
- "I do not remember which brewing sequence worked."
- "I want to repeat successful ceremonies."

## Functional Requirements

- Start a brew session from a selected tea.
- Start a minimal custom session without selected tea or teaware.
- Optionally select teaware for the session.
- Define or use an ordered list of steep durations.
- Display current steep, remaining time, and next action.
- Capture temperature guidance and session notes.
- Pause, resume, cancel, and complete an active timer sequence.
- Mark steeps complete and advance through the sequence.
- Save session history.
- Repeat a saved session.
- Prompt the user to manually update tea stock after session save when a tea is selected.

## Acceptance Criteria

- Given a tea exists, when the user starts a session, then the timer can run at least one steep.
- Given a multi-steep sequence exists, when one steep completes, then the user can advance to the next steep.
- Given the user completes a session, when saving, then tea, optional teaware, steeps, and notes are stored in history.
- Given a saved session exists, when the user chooses repeat, then a new session starts with the same sequence.
- Given timer state changes, then the current state is perceivable without color alone.
- Given the user starts a custom session, when no tea is selected, then the timer can still run and the session is marked custom.
- Given the timer is running, when the user pauses, then remaining time stops changing until resume.
- Given the user cancels a session, then the app asks for confirmation before discarding unsaved progress.
- Given a session is saved, then session history preserves snapshots of selected tea, selected teaware, sequence, and notes.
- Given a tea was used, when the session is saved, then the user is prompted to update remaining stock manually.

## Timer States

- Setup
- Running
- Paused
- Steep complete
- Completed
- Canceled
- Save failed

## Exclusions

- Push notifications.
- Background mobile timer guarantees.
- AI recipe optimization.
- Community recipe sharing.
- Recipe favorite and standalone recipe-management UI.
