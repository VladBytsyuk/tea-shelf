# MVP Session History Flow

Status: Approved for Implementation
Version: MVP-001

## Goal

Let users review and repeat past tea sessions without losing historical context.

## Flow

1. User opens Session History.
2. User sees saved active sessions in reverse chronological order.
3. User opens a session detail.
4. User reviews tea snapshot, optional teaware snapshot, steep sequence, timestamps, and notes.
5. User repeats the session as a new setup or archives the session after confirmation.
6. User restores archived sessions from an archived view when needed.

## UX Requirements

- Empty history must show a clear first-session action.
- Archived sessions must be hidden from the default history list.
- Session detail must remain readable when source tea or teaware is archived.
- Repeat action must not overwrite the original session.
- Save or restore failures must preserve user context and offer retry.
