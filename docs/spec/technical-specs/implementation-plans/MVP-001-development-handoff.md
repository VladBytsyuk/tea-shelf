# MVP-001 Development Handoff

Status: Approved for Implementation
Version: MVP-001

## Goal

Prepare the approved MVP specification package for development planning using the selected MVP tech radar.

## Implementation Boundaries

- Build a responsive web application for Tea Shelf, Teaware Shelf, Brew Timer, and Session History.
- Implement shared client UI through `design-system-impl` before feature screens duplicate component behavior.
- Use local-first single-user persistence.
- Do not add auth, sync, AI, Knowledge Shelf, native mobile, push notifications, monetization, marketplace, social, or remote telemetry.
- Keep BrewSequence as session/timer sequence data, not standalone recipe management.
- Treat export/import or equivalent local backup as release-blocking unless PM explicitly accepts local data-loss risk.

## Recorded Stack Decisions

The stack decisions are recorded in [MVP Tech Radar](../../../research/technology/MVP-tech-radar.md):

- Frontend: React + TypeScript + Vite.
- Shared UI: `design-system-impl` internal design-system implementation library for every client.
- Package manager: pnpm with a committed `pnpm-lock.yaml`.
- Workspace: pnpm workspace with `apps/web` for the Vite React app and `packages/design-system-impl` for the internal UI package.
- Persistence: IndexedDB through Dexie behind local services/repositories.
- Testing: Vitest, Testing Library, Playwright, and axe-based accessibility checks.
- Deployment: Vercel static hosting with HTTPS, previews, deploy history, and rollback.
- Observability: no remote telemetry by default.

## Locked Development Defaults

- Required package scripts: `dev`, `lint`, `typecheck`, `test`, `test:e2e`, `build`, `preview`, and `release:smoke`.
- CI commands: `pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build`, and `pnpm test:e2e` where release validation requires end-to-end coverage.
- Build artifact strategy: Vite production output deployed to Vercel.
- Export/import shape: JSON with `schemaVersion`, `exportedAt`, and complete local dataset.
- Import replacement behavior: validate full import before replacement, reject malformed or incompatible files without overwrite, show privacy warning, and require explicit confirmation.

## Required Implementation Workstreams

- Product modules: Tea Shelf, Teaware Shelf, Brew Timer, Session History.
- Design system implementation: `design-system-impl` token mappings, shared primitives, accessibility behavior, and component tests.
- Shared domain layer: entities, validation, lifecycle, snapshots, and local service contracts.
- Persistence and backup: versioned local storage, reload persistence, import/export, malformed import handling.
- UX implementation: screen specs, responsive navigation, empty states, dialogs, timer states, accessible labels.
- QA automation/manual: acceptance, regression, data integrity, accessibility, responsive, smoke, and backup/recovery coverage.
- Operations: CI/CD, deployment, rollback, release evidence, and local-data recovery docs once stack is selected.

## Dev Handoff Gate

Development may start after:

- Sprint-002 approves all active MVP docs for implementation.
- Stack and persistence decisions are recorded.
- Implementation tasks cite approved requirement and acceptance IDs.
- QA confirms acceptance coverage for planned work.
- Security reviews export/import and any new external data flow.
