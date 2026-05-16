# MVP-001 Development Handoff

Status: Ready for Implementation Planning
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
- Persistence: IndexedDB through Dexie behind local services/repositories.
- Testing: Vitest, Testing Library, Playwright, and axe-based accessibility checks.
- Deployment: static hosting with HTTPS, previews, deploy history, and rollback.
- Observability: no remote telemetry by default.

## Remaining Development Decisions

These decisions must be recorded during scaffold and implementation planning:

- Package manager and package script names.
- Exact workspace/package layout for `design-system-impl`.
- Exact hosting provider and build artifact strategy.
- CI commands for install, lint/typecheck, test, build, and release smoke validation.
- Export/import file shape, validation, privacy warning, and replacement behavior.

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

- Sprint-001 spec package is approved for implementation planning.
- Stack and persistence decisions are recorded.
- Implementation tasks cite approved requirement and acceptance IDs.
- QA confirms acceptance coverage for planned work.
- Security reviews export/import and any new external data flow.
