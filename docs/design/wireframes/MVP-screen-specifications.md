# MVP Screen Specifications

Status: Approved for Implementation
Version: MVP-001
Layout Version: LAYOUT-001

## Purpose

Index the implementation-ready annotated layout documents for the MVP responsive web app. Each screen or state has its own canonical layout file under `docs/design/wireframes/screens/`.

## Global Layout Rules

- Primary navigation includes Tea Shelf, Teaware Shelf, Brew Timer, and Session History only.
- Mobile uses one content column below persistent primary navigation. All primary destinations remain reachable at 360px width without horizontal scrolling.
- Tablet and desktop may use two-column list/detail layouts where specified, but every action must remain available in a single-column fallback.
- Page headers contain the screen title, one primary action when applicable, and compact supporting metadata or view switches.
- Lists use shared row/card patterns, with status badges and metadata wrapping below long names when needed.
- Forms use stacked fields on mobile. Tablet and desktop may group related fields into two columns only when labels, errors, and helper text remain readable.
- All destructive archive/cancel actions require confirmation dialogs.
- Save-failed states keep user-entered values visible and provide retry plus cancel/back options.
- Long tea names, bilingual branding, metadata, and validation text wrap without overlapping controls at 360px, 768px, and 1024px widths.
- Required shared components come from `design-system-impl`; feature screens may add page layout but must not duplicate shared button, field, navigation, timer, empty-state, or dialog behavior.

## End-To-End MVP Flow

1. User opens Tea Shelf.
2. User creates a tea from the empty or list state.
3. User opens Teaware Shelf.
4. User creates a teaware item from the empty or list state.
5. User opens Brew Timer, selects the tea, optionally selects teaware, edits the steep sequence, and starts the timer.
6. User pauses/resumes if needed, advances through steeps, completes the session, enters optional notes, and saves.
7. If a tea was selected, user sees the manual stock update prompt.
8. User opens Session History, views the saved session, and repeats it into a new timer setup.

## Screen Layout Files

### Navigation

- [Primary Navigation](screens/navigation/primary-navigation.md)

### Tea Shelf

- [Tea List](screens/tea-shelf/tea-list.md)
- [Tea Empty State](screens/tea-shelf/tea-empty-state.md)
- [Tea Filtered Empty State](screens/tea-shelf/tea-filtered-empty-state.md)
- [Tea Detail](screens/tea-shelf/tea-detail.md)
- [Tea Form](screens/tea-shelf/tea-form.md)
- [Archived Teas](screens/tea-shelf/archived-teas.md)

### Teaware Shelf

- [Teaware List](screens/teaware-shelf/teaware-list.md)
- [Teaware Empty State](screens/teaware-shelf/teaware-empty-state.md)
- [Teaware Filtered Empty State](screens/teaware-shelf/teaware-filtered-empty-state.md)
- [Teaware Detail](screens/teaware-shelf/teaware-detail.md)
- [Teaware Form](screens/teaware-shelf/teaware-form.md)
- [Archived Teaware](screens/teaware-shelf/archived-teaware.md)

### Brew Timer

- [Timer Setup](screens/brew-timer/timer-setup.md)
- [Active Timer](screens/brew-timer/active-timer.md)
- [Steep Complete](screens/brew-timer/steep-complete.md)
- [Completed Session](screens/brew-timer/completed-session.md)
- [Stock Update Prompt](screens/brew-timer/stock-update-prompt.md)
- [Timer Save Failed](screens/brew-timer/timer-save-failed.md)

### Session History

- [Session History List](screens/session-history/session-history-list.md)
- [Session History Empty State](screens/session-history/session-history-empty-state.md)
- [Session Detail](screens/session-history/session-detail.md)
- [Repeat Session Setup](screens/session-history/repeat-session-setup.md)
- [Archived Sessions](screens/session-history/archived-sessions.md)

### Data Backup

- [Data Backup](screens/data-backup/data-backup.md)
- [Import Replacement Confirmation](screens/data-backup/import-replacement-confirmation.md)

### Dialogs

- [Archive Confirmation](screens/dialogs/archive-confirmation.md)
- [Restore Confirmation](screens/dialogs/restore-confirmation.md)
- [Cancel Active Session Confirmation](screens/dialogs/cancel-active-session-confirmation.md)

## Responsive Acceptance Checklist

- 360px: all pages are single-column; no horizontal scrolling; primary actions remain visible near page context; timer controls are reachable.
- 768px: toolbars may compress into rows; forms may use limited two-column groups only when labels and errors remain readable.
- 1024px: list/detail or two-column layouts are allowed; no primary action is hidden in hover-only controls.
- Across all widths: icon-only actions have accessible names; dialogs trap focus; timer states use text; field errors remain adjacent to fields; long names and validation copy wrap.
