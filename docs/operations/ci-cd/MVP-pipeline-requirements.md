# MVP Pipeline Requirements

Status: Approved for Implementation
Version: MVP-001

## Required Checks

- Install/build check for the selected React + TypeScript + Vite stack using pnpm.
- Unit and component tests with Vitest and Testing Library for core behavior.
- End-to-end smoke checks with Playwright for first-use and repeat-session flows.
- Accessibility check with axe where practical plus documented manual accessibility evidence.
- Responsive validation evidence.
- Dependency/security check if package tooling supports it.

## Required Commands

- Install: `pnpm install --frozen-lockfile`.
- Lint: `pnpm lint`.
- Typecheck: `pnpm typecheck`.
- Unit/component tests: `pnpm test`.
- Production build: `pnpm build`.
- Release smoke/E2E: `pnpm test:e2e` and `pnpm release:smoke` where configured by the scaffold.

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
- Record Vite build output location.
- Record Vercel preview or production deployment URL.
- Record validation evidence.
