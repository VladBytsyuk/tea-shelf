# MVP-001 Acceptance Criteria

Status: Approved for Implementation
Version: MVP-001

## Tea Shelf

| ID | Requirement | Acceptance Criteria |
| --- | --- | --- |
| AC-TEA-001 | FR-001 | Given no teas exist, when the user opens Tea Shelf, then an empty state offers tea creation. |
| AC-TEA-002 | FR-001, FR-002 | Given required fields are valid, when the user saves a tea, then it appears in the active tea list. |
| AC-TEA-003 | FR-002 | Given required fields are missing, when the user tries to save, then save is blocked and field-level errors are shown. |
| AC-TEA-004 | FR-010 | Given remaining quantity is edited, when the value is negative, then save is blocked. |
| AC-TEA-005 | FR-010 | Given remaining quantity is zero, when the tea is displayed, then it is marked unavailable without relying on color alone. |
| AC-TEA-006 | FR-009 | Given a tea is favorited, when the user filters by favorites, then the tea appears in the filtered list. |
| AC-TEA-007 | FR-011 | Given a tea is archived, when the default list loads, then the tea is hidden and historical session snapshots remain readable. |
| AC-TEA-008 | FR-011 | Given an archived tea exists, when the user restores it, then it appears in active tea lists and can be selected for new sessions. |
| AC-TEA-009 | FR-001, FR-002 | Given a type or availability filter is applied, when matching active teas exist, then only matching active teas appear. |
| AC-TEA-010 | FR-001 | Given no tea matches active filters, when the filtered list loads, then a filtered-empty state is shown. |
| AC-TEA-011 | FR-001, FR-002 | Given saving a tea fails, when the error is shown, then entered values remain available for retry. |

## Teaware Shelf

| ID | Requirement | Acceptance Criteria |
| --- | --- | --- |
| AC-TW-001 | FR-003 | Given no teaware exists, when the user opens Teaware Shelf, then an empty state offers teaware creation. |
| AC-TW-002 | FR-003, FR-004 | Given required fields are valid, when the user saves teaware, then it appears in the active teaware list. |
| AC-TW-003 | FR-004 | Given required fields are missing, when the user tries to save, then save is blocked and field-level errors are shown. |
| AC-TW-004 | FR-004 | Given a method filter is applied, when matching teaware exists, then only matching active teaware appears. |
| AC-TW-005 | FR-011 | Given teaware is archived, when a new session is started, then archived teaware is not selectable by default. |
| AC-TW-006 | FR-011 | Given archived teaware was used in a saved session, when session detail opens, then the historical teaware snapshot is still readable. |
| AC-TW-007 | FR-011 | Given an archived teaware item exists, when the user restores it, then it appears in active teaware lists and can be selected for new sessions. |
| AC-TW-008 | FR-003 | Given no teaware matches active filters, when the filtered list loads, then a filtered-empty state is shown. |
| AC-TW-009 | FR-003, FR-004 | Given saving teaware fails, when the error is shown, then entered values remain available for retry. |

## Brew Timer

| ID | Requirement | Acceptance Criteria |
| --- | --- | --- |
| AC-BT-001 | FR-005 | Given a tea exists, when the user starts a session from that tea, then timer setup opens with that tea selected. |
| AC-BT-002 | FR-012 | Given the user starts a custom session, when no tea or teaware is selected, then the timer can run and the session is labeled custom. |
| AC-BT-003 | FR-005, FR-006 | Given a valid steep sequence exists, when the user starts the timer, then the first steep enters running state. |
| AC-BT-003A | FR-005, FR-006 | Given a steep sequence has no steps or a non-positive duration, when the user starts the timer, then start is blocked and the sequence error is shown. |
| AC-BT-004 | FR-005 | Given the timer is running, when the user pauses, then remaining time stops until resumed. |
| AC-BT-005 | FR-005 | Given a steep completes, when the user advances, then the next steep becomes the active steep. |
| AC-BT-006 | FR-005 | Given the user cancels an active session, when they confirm cancellation, then unsaved session progress is discarded. |
| AC-BT-007 | FR-007 | Given a session is completed, when the user saves it, then session history stores tea snapshot, optional teaware snapshot, sequence snapshot, timestamps, and notes. |
| AC-BT-008 | FR-010 | Given a session with selected tea is saved, when save completes, then the user is prompted to update remaining stock manually. |
| AC-BT-009 | NFR-004 | Given timer state changes, when viewed or announced, then state is perceivable without color alone. |
| AC-BT-010 | FR-007, FR-012 | Given a custom session completes without tea or teaware, when saved, then history stores it as custom with sequence, timestamps, and notes. |
| AC-BT-011 | FR-007 | Given session save fails, when the error is shown, then timer/session values and notes remain available for retry. |
| AC-BT-012 | FR-008 | Given a saved session references archived source records, when the user repeats it, then timer setup opens from the saved snapshots and does not require restoring source records. |

## Session History

| ID | Requirement | Acceptance Criteria |
| --- | --- | --- |
| AC-SH-001 | FR-007 | Given a saved session exists, when the user opens Session History, then it appears in reverse chronological order. |
| AC-SH-002 | FR-007 | Given a saved session is opened, then tea, optional teaware, steep sequence, timestamps, and notes are visible. |
| AC-SH-003 | FR-008 | Given a saved session exists, when the user repeats it, then a new timer setup opens and the original session remains unchanged. |
| AC-SH-004 | FR-011 | Given a saved session is archived, when the default history list loads, then the session is hidden. |
| AC-SH-005 | FR-007 | Given source tea or teaware is archived after a session, when session detail opens, then the saved snapshot remains readable. |
| AC-SH-006 | FR-011 | Given an archived session exists, when the user restores it, then it appears in the default history list. |

## Cross-Feature

| ID | Requirement | Acceptance Criteria |
| --- | --- | --- |
| AC-X-001 | NFR-001, NFR-002 | Given mobile, tablet, and desktop viewports, when core flows are used, then content and controls do not overlap. |
| AC-X-002 | NFR-003 | Given keyboard-only input, when the user completes core flows, then focus order is visible and usable. |
| AC-X-003 | NFR-005 | Given implementation planning starts, then each implementation task cites an approved MVP spec and acceptance ID. |
| AC-X-004 | Scope control | Given MVP acceptance is evaluated, then AI, Knowledge Shelf, auth/sync, monetization, native mobile, marketplace, and social features are not required. |
| AC-X-005 | FR-013, NFR-006 | Given release readiness is evaluated, then export/import or equivalent local backup behavior exists unless PM has explicitly accepted local data-loss risk. |
| AC-X-006 | NFR-006 | Given local-only persistence is used, when user-facing release guidance is prepared, then browser storage clearing and backup limits are disclosed. |
