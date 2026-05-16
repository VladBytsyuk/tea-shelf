# Technical Strategy

Status: Approved for Implementation
Version: MVP-001

## Strategy

Build Tea Shelf MVP as a responsive, local-first single-page web application. The selected MVP stack is React + TypeScript + Vite, `design-system-impl` for shared client UI, and browser persistence behind local service/repository boundaries.

The detailed decision artifact is [MVP Tech Radar](../../research/technology/MVP-tech-radar.md).

## Technical Requirements

- Support core MVP flows on mobile, tablet, and desktop.
- Keep Tea Shelf, Teaware Shelf, and Brew Timer modular enough for separate future expansion.
- Provide shared design-system implementation primitives for every Tea Shelf client.
- Preserve a clear path to future authentication and cloud sync.
- Avoid coupling MVP entities to AI, content, marketplace, or native mobile concerns.
- Support testable timer behavior and deterministic session history.

## Stack Selection Criteria

- Fast MVP delivery.
- Strong frontend ergonomics for responsive UI.
- Clear local state and persistence strategy.
- Testability for catalog, timer, and session flows.
- Low operational burden.
- Compatibility with future account and sync architecture.

## Selected MVP Stack

- Frontend: React + TypeScript + Vite.
- Shared UI: `design-system-impl` internal design-system implementation library for every client.
- Routing: React Router unless implementation proves simple internal navigation is sufficient.
- Styling: CSS Modules or plain CSS with design tokens inside `design-system-impl`.
- Persistence: IndexedDB through Dexie behind local repositories.
- State: React local state and custom hooks by default; Zustand only for justified cross-route state.
- Testing: Vitest, Testing Library, Playwright, and axe-based accessibility checks.
- Package manager: pnpm with a committed `pnpm-lock.yaml`.
- Deployment: Vercel static hosting with HTTPS, PR previews, immutable deploy history, and rollback.

## Explicit Holds

- No authentication provider is selected for MVP.
- No AI provider is selected for MVP.
- No backend API, cloud database, sync worker, remote telemetry, commerce, social, or native mobile stack is selected for MVP.
- No third-party heavy UI kit is selected for MVP; shared UI behavior belongs in `design-system-impl`.
