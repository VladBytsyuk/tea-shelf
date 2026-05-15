# MVP Pipeline Requirements

Status: Draft  
Version: MVP-001

## Required Checks

- Install/build check for the selected stack.
- Unit or component tests for core behavior.
- End-to-end or equivalent smoke checks for first-use and repeat-session flows.
- Accessibility check or documented manual accessibility evidence.
- Responsive validation evidence.
- Dependency/security check if package tooling supports it.

## Failure Rules

- Failed required checks block release.
- Critical or high defects block release.
- Medium defects require PM and QA acceptance before release.

## Artifacts

- Record release version or commit.
- Record build output location.
- Record validation evidence.
