# FEAT-MVP-004: Session History

Status: Draft  
Version: MVP-001

## Summary

Session History lets users review completed tea sessions and repeat successful ceremonies.

## Functional Requirements

- View saved sessions in reverse chronological order.
- View session details, including tea snapshot, teaware snapshot, steep sequence, timestamps, and notes.
- Repeat a saved session as a new timer setup.
- Archive and restore saved sessions.
- Preserve historical context when source tea or teaware records are edited or archived.

## Acceptance Criteria

- Given a saved session exists, when the user opens Session History, then the session appears in the list.
- Given a user opens a session detail, then tea, optional teaware, steep sequence, and notes are visible.
- Given source tea or teaware was archived after the session, when the user views session detail, then the original session snapshot is still readable.
- Given a user repeats a saved session, then a new timer setup opens with the saved sequence and does not overwrite the original session.
- Given a session is archived, when the default history list loads, then the session is hidden from the default list.

## Exclusions

- Social sharing.
- AI tasting analysis.
- Advanced analytics.
- Public ceremony logs.
