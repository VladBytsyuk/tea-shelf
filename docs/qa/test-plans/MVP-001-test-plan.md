# MVP-001 Test Plan

Status: Approved for Implementation
Version: MVP-001

## Test Scope

Validate Tea Shelf, Teaware Shelf, Brew Timer, Session History, responsive layouts, accessibility, data integrity, and release readiness gates.

## Test Types

- Acceptance: verify all MVP acceptance criteria.
- Regression: verify Tea Shelf, Teaware Shelf, Brew Timer, and Session History work together.
- Data integrity: verify archive/restore, snapshots, stock validation, and save failures.
- Accessibility: verify keyboard, focus, contrast, labels, live timer states, and touch targets.
- Responsive: verify mobile, tablet, and desktop viewport behavior.
- Smoke: verify release build can complete first-use and repeat-session flows.

## Acceptance Tests

| Test ID | Priority | Coverage | Expected Result |
| --- | --- | --- | --- |
| T-TEA-001 | Must | AC-TEA-001..007 | Tea records can be created, validated, favorited, archived, restored, and filtered. |
| T-TW-001 | Must | AC-TW-001..006 | Teaware records can be created, validated, archived, restored, filtered, and selected for sessions. |
| T-BT-001 | Must | AC-BT-001..009 | Timer supports tea sessions, custom sessions, pause/resume/cancel, steep advancement, save, stock prompt, and non-color states. |
| T-SH-001 | Must | AC-SH-001..005 | Session history lists, details, repeats, archives, and preserves snapshots. |
| T-X-001 | Must | AC-X-001..004 | Cross-feature responsive, accessibility, traceability, and scope-control gates pass. |

## Executable Case Requirements

Each implementation test case must record:

- Preconditions and test data.
- Steps.
- Expected result.
- Related acceptance criteria.
- Manual or automated ownership.
- Blocking severity for failure.

## Data Edge Cases

- Missing required fields.
- Zero, decimal, and negative quantities.
- Duplicate tea or teaware names.
- Edited source record after session save.
- Archived source record after session save.
- Save failure with unsaved form/session values.
- Empty list and filtered-empty states.
- Unavailable tea used for historical session detail.
- Restore tea, teaware, and session records.
- Save retry without losing entered values.
- Timer sequence with no steps or non-positive duration.
- Repeat session when source tea or teaware is archived.
- Storage unavailable, quota exceeded, incompatible data, and malformed import.
- Export/import privacy warning and replacement confirmation.

## Responsive Matrix

- Mobile: 360px width and above.
- Tablet: 768px width and above.
- Desktop: 1024px width and above.

Validate tea list/form, teaware list/form, timer setup, active timer, session history, confirmation dialogs, and long bilingual text.

## Accessibility Checks

- Keyboard-only completion of create/edit/archive/restore and timer flows.
- Visible focus order.
- Form labels and error association.
- Dialog focus trap and focus restoration.
- Timer state announcement where useful.
- WCAG AA contrast for text and meaningful controls.
- Touch targets at least 44 by 44 CSS pixels where practical.

## Release Evidence

QA signoff requires:

- Completed acceptance test results.
- Responsive screenshots or equivalent evidence.
- Accessibility checklist result.
- Data integrity test result.
- Backup/export or explicit PM data-loss acceptance result.
- Smoke test result for release build.
- List of known defects and accepted residual risks.
