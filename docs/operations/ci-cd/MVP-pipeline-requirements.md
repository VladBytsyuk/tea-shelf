# MVP Pipeline Requirements

Status: Draft  
Version: MVP-001

## Required Checks

- Install/build check for the selected React + TypeScript + Vite stack.
- Unit and component tests with Vitest and Testing Library for core behavior.
- End-to-end smoke checks with Playwright for first-use and repeat-session flows.
- Accessibility check with axe where practical plus documented manual accessibility evidence.
- Responsive validation evidence.
- Dependency/security check if package tooling supports it.

## Required MVP Scenarios

- Timer state machine and validation rules pass deterministic unit tests.
- Tea, teaware, session snapshot, archive/restore, and stock validation coverage exists.
- Export/import validation rejects malformed input without overwriting existing data.
- Release build smoke covers create tea, create teaware, run a session, save history, repeat session, and persistence after reload.
- Responsive evidence includes `360px`, `768px`, and `1024px` viewports.

## Failure Rules

- Failed required checks block release.
- Critical or high defects block release.
- Medium defects require PM and QA acceptance before release.

## Artifacts

- Record release version or commit.
- Record build output location.
- Record validation evidence.
