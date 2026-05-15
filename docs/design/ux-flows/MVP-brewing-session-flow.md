# MVP Brewing Session Flow

Status: Draft  
Version: MVP-001

## Goal

Let users conduct a focused, repeatable tea session.

## Flow

1. User starts from Brew Timer, tea detail, or previous session.
2. User selects a tea or starts a custom session.
3. User optionally selects teaware.
4. User confirms or edits steep sequence.
5. User starts timer.
6. User pauses or resumes if interrupted.
7. User completes each steep and advances through the sequence.
8. User saves notes or saves without notes.
9. If a tea was selected, user is prompted to update stock manually.
10. User can repeat the saved session later.

## UX Requirements

- Timer state must be readable at a glance.
- Current steep number and remaining time must be prominent.
- Controls must be reachable on mobile.
- Session save must preserve enough context to repeat.
- The flow must remain usable without accounts, AI, or content modules.
- Canceling an active session must ask for confirmation.
- Steep completion must be perceivable without relying on sound or color alone.
- Browser background and refresh recovery must be described according to the selected implementation limits.
- Repeat-session setup must allow the user to edit the sequence before starting the new session.
- Save failure must keep session details and notes available for retry.

## Timer States

- Setup
- Running
- Paused
- Steep complete
- Completed
- Canceled
- Save failed

## Custom Session Path

Custom sessions require only a steep sequence. Tea and teaware are optional, and the saved session must be labeled as custom.
