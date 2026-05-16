# MVP Screen Specifications

Status: Approved for Implementation
Version: MVP-001

## Purpose

Define minimum implementation-ready screen expectations for MVP responsive web builds. These are behavior specifications, not visual mockups.

## Navigation

- Primary navigation includes Tea Shelf, Teaware Shelf, Brew Timer, and Session History.
- Mobile uses a compact navigation pattern selected during implementation, but all primary destinations must remain reachable without horizontal scrolling.
- Long tea names, bilingual branding, and validation text must wrap without overlapping controls at 360px width and above.

## Tea Shelf Screens

- List: active teas, search/filter controls, favorite and availability indicators, create action, archived-view entry.
- Empty state: direct create-tea action; no education, AI, or marketplace prompts.
- Filtered empty state: clear filters action and explanation that filters hide all active teas.
- Detail: tea fields, stock, favorite state, notes, edit action, archive action.
- Form: required fields, optional fields, validation errors, save/cancel, save-failed retry with values preserved.
- Archived view: archived teas, restore action, historical context warning when relevant.

## Teaware Shelf Screens

- List: active teaware, category/material/method filters, create action, archived-view entry.
- Empty state: direct create-teaware action.
- Filtered empty state: clear filters action.
- Detail: category, material, volume, purpose, methods, notes, edit/archive actions.
- Form: required fields, validation errors, save/cancel, save-failed retry with values preserved.
- Archived view: restore action and note that archived items are unavailable for new sessions by default.

## Brew Timer Screens

- Setup: choose tea or custom session, optional teaware, sequence steps, start/cancel actions.
- Sequence validation: start is blocked when no steps exist or any duration is non-positive.
- Active timer: current steep, remaining time, sequence progress, pause/resume/cancel controls, non-color state label.
- Steep complete: next-steep and complete-session actions; MVP does not require auto-advance.
- Completed: session notes, save action, cancel action, and stock-update prompt after successful save when tea is selected.
- Save failed: error state with retry; sequence, selected tea/teaware, and notes remain visible.
- Recovery copy: do not imply guaranteed background, lock-screen, push, or native notification behavior.

## Session History Screens

- List: saved active sessions in reverse chronological order, archive action, repeat action, archived-view entry.
- Empty state: direct action to start a session.
- Detail: tea snapshot or custom label, optional teaware snapshot, sequence snapshot, timestamps, notes, repeat/archive actions.
- Archived view: archived sessions with restore action.
- Repeat setup: starts from saved snapshots and does not mutate the original session.

## Accessibility And Responsive Requirements

- Every icon-only action must have an accessible name.
- Dialogs for cancel/archive/restore/import replacement must trap focus and restore focus on close.
- Timer state changes must be perceivable through text; live announcements should be limited to start, pause, resume, steep complete, completed, and save failed.
- Touch targets should be at least 44 by 44 CSS pixels where practical.
- Core screens must be checked at 360px, 768px, and 1024px widths.
