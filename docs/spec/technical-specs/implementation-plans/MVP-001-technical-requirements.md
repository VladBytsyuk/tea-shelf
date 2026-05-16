# MVP-001 Technical Requirements

Status: Approved for Implementation
Version: MVP-001

## Purpose

Define technical requirements for the selected MVP implementation direction. The stack decisions are recorded in [MVP Tech Radar](../../../research/technology/MVP-tech-radar.md).

## Platform

- Responsive web application.
- Mobile, tablet, and desktop viewport support.
- Shared design-system implementation library for all Tea Shelf clients.
- No native iOS or Android implementation in MVP.

## Data Requirements

- Store tea records.
- Store teaware records.
- Store brew sequences or session sequences without standalone recipe-management UI.
- Store saved brew sessions.
- Preserve saved session context even if source records are later edited.
- Store lifecycle status for active and archived records.
- Store timestamps and IDs for traceability.
- Support data versioning for future local migrations.
- Support export/import or equivalent local backup expectations before release unless PM accepts data-loss risk.
- Reject malformed imports without overwriting existing data.
- Warn users that exported files may contain private collection and session notes.

## Reliability Requirements

- Timer state must remain clear during active sessions.
- Catalog records must not be lost during normal app use.
- Remaining quantity updates must be validated.
- Save failures must preserve unsaved user-entered values.
- Timer must support setup, running, paused, steep complete, completed, canceled, and save-failed states.
- Timer must not promise guaranteed background, lock-screen, or push-notification behavior in MVP.

## Security and Privacy Requirements

- Treat all collection and session data as private user data.
- Do not send data to AI, analytics, sync, or third-party systems without future approved specs.
- Do not require authentication in MVP.
- Disclose local-only data durability limits.

## Observability Requirements

Implementation planning must define how core errors are surfaced during development and release validation.
Remote telemetry is not required in MVP and must not collect private notes by default if later introduced.

## Compatibility Requirements

- MVP architecture must leave room for future authentication and cloud sync.
- MVP data concepts must not depend on AI, content, commerce, or social features.

## Resolved Technical Decisions

- Frontend framework: React + TypeScript + Vite.
- Shared UI implementation: `design-system-impl` internal library.
- Package manager: pnpm with a committed `pnpm-lock.yaml`.
- Workspace layout: pnpm workspace with `apps/web` for the Vite React app and `packages/design-system-impl` for the internal UI package.
- Persistence strategy: IndexedDB through Dexie behind local services/repositories.
- Test framework: Vitest, Testing Library, Playwright, and axe-based accessibility checks.
- Deployment topology: Vercel static web app hosting with HTTPS, previews, deploy history, and rollback.
- Observability approach: CI evidence, release smoke evidence, and issue intake by default; remote telemetry held unless separately approved.
- Export/import backup: required before release unless PM explicitly accepts local data-loss risk.

## Implementation Defaults

- Required scripts: `dev`, `lint`, `typecheck`, `test`, `test:e2e`, `build`, `preview`, and `release:smoke`.
- CI command sequence: `pnpm install --frozen-lockfile`, `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build`, and `pnpm test:e2e` for release branches or release validation.
- Build artifact: Vite production output from the selected app package.
- Export file shape: JSON object containing `schemaVersion`, `exportedAt`, and the complete local Tea Shelf dataset.
- Import behavior: validate the entire file before replacement, reject malformed or incompatible imports without overwriting local data, show a private-data warning, and require explicit replacement confirmation.
