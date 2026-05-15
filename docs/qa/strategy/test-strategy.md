# MVP Test Strategy

Status: Draft  
Version: MVP-001

## Scope

QA covers Tea Shelf, Teaware Shelf, Brew Timer, Session History, responsive behavior, accessibility, and scope-control validation.

## Test Levels

- Requirements review: verify each MVP requirement has acceptance criteria.
- Functional testing: verify catalog, timer, session, and history behavior.
- UX testing: verify first-use and repeat-use flows.
- Accessibility testing: verify keyboard navigation, focus, contrast, and timer readability.
- Responsive testing: verify mobile, tablet, and desktop layouts.
- Regression testing: verify Tea Shelf, Teaware Shelf, and Brew Timer continue working together.
- Data integrity testing: verify archive/restore, snapshots, stock validation, and save failure recovery.
- Release smoke testing: verify first-use and repeat-session flows against the release build.

## Quality Gates

- MVP PRD approved.
- Feature specs approved.
- Acceptance criteria approved.
- UX flows approved.
- Core entity definitions approved.
- Test plan approved.
- Risk register reviewed.
- Requirement matrix maps FR/NFR IDs to acceptance and tests.
- Release evidence is captured before signoff.

## Exclusions

- AI recommendation testing.
- Payment testing.
- Marketplace testing.
- Native mobile notification testing.
- Cloud sync testing unless MVP+ is approved.
