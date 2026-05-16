# MVP Tech Radar

Status: Ready for Implementation Planning
Version: MVP-001
Owner: Tech Lead
Audience: Engineering, QA, DevOps, Product

## Purpose

Define the technology choices for Tea Shelf MVP implementation. This radar turns the approved MVP requirements into stack decisions for a responsive, local-first web application.

## Context

Tea Shelf MVP is a single-user responsive web app for tea inventory, teaware inventory, guided multi-steep brewing sessions, and session history. The MVP excludes backend APIs, authentication, cloud sync, AI, native mobile apps, commerce, social features, and production telemetry by default.

The repository has no application scaffold yet. These decisions are the implementation defaults for the first app build.

## Radar Summary

| Ring | Technology / Practice | Decision |
| --- | --- | --- |
| Adopt | React + TypeScript + Vite | Primary app stack for the MVP SPA. |
| Adopt | design-system-impl | Internal shared design-system implementation library for every Tea Shelf client. |
| Adopt | Local service/repository layer | Boundary for domain behavior and persistence access. |
| Adopt | IndexedDB + Dexie | Default local persistence strategy. |
| Adopt | Export/import backup | Release-blocking backup path unless PM accepts data-loss risk. |
| Adopt | Vitest | Unit tests for deterministic logic and validation. |
| Adopt | Testing Library | Component and hook tests for UI behavior. |
| Adopt | Playwright | Release smoke, critical E2E flows, and responsive checks. |
| Adopt | axe checks with Playwright | Automated accessibility checks, paired with manual validation. |
| Adopt | Static hosting with HTTPS, previews, deploy history, and rollback | Deployment model for the MVP web app. |
| Trial | React Router | Client routing for catalog, timer, history, detail, form, and archive views. |
| Trial | CSS Modules or plain CSS with design tokens | Styling strategy inside `design-system-impl`. |
| Trial | Small headless accessibility helpers | Allowed for dialogs, popovers, and focus management where needed. |
| Trial | Zustand | Allowed only for cross-route state that React local state makes awkward. |
| Assess | Lightweight client error reporting | Defer unless release validation shows a concrete need. |
| Assess | PWA install/offline app shell | Defer until product value is proven beyond local persistence. |
| Hold | Backend API, cloud database, auth provider, sync workers | Out of MVP scope. |
| Hold | SSR/full-stack framework as default | Not needed for local-first MVP delivery. |
| Hold | Heavy UI kit | Third-party component frameworks remain out; use `design-system-impl` instead. |
| Hold | Remote analytics, AI, or third-party data flows | Excluded until approved specs and security review exist. |

## Adopt

### React + TypeScript + Vite

Use React with TypeScript and Vite for the first implementation. The MVP needs a responsive single-page application, not SSR or backend rendering. Vite provides a simple development workflow and a production build suitable for static hosting.

Implementation defaults:

- App type: static SPA.
- Build output: Vite production build artifact.
- Browser target: modern browsers supported by the selected Vite defaults unless implementation planning explicitly changes it.
- Package manager: choose one during scaffold creation and lock it in with a lockfile.

### design-system-impl

Use `design-system-impl` as the internal shared implementation library for the documented Tea Shelf design system. Every MVP client must consume shared primitives from this library instead of duplicating button, form, dialog, navigation, timer-control, or token behavior inside feature screens.

MVP implementation defaults:

- Package identity: `design-system-impl`.
- Initial target: React/web components and CSS token exports.
- Source of truth: `docs/design/design-system/MVP-design-system.md`, token docs, and component specs.
- Ownership: shared UI implementation owned by frontend engineering with UI/UX and QA review.

Required library contents:

- Token mappings for color, typography, spacing, radius, borders, shadows, motion, size, and state.
- Shared primitives for actions, forms, feedback, data display, dialogs, navigation, and timer controls/display.
- Accessibility behavior for focus styles, icon-only accessible names, keyboard support, dialog focus handling, and reduced-motion support.
- Stable component contracts that feature screens compose without forking behavior locally.

### Local Service and Repository Layer

Implement Tea, Teaware, Timer/Session, History, and Backup operations behind local services or repositories. UI components must not call browser storage directly.

Required service behavior:

- Validate domain rules before persistence.
- Preserve archive/restore semantics.
- Preserve immutable session snapshots when source records change.
- Preserve unsaved user input on save failure.
- Keep future auth/sync migration possible without changing product behavior.

### IndexedDB + Dexie

Use IndexedDB through Dexie as the default persistence layer. MVP data is more complex than a trivial key-value cache because it needs versioning, session snapshots, import/export, malformed import rejection, and recoverable storage errors.

Persistence requirements:

- Store Tea, Teaware, BrewSession, SessionNote or inline notes, and session sequence data.
- Include stored data schema versioning from the first release.
- Support future local migrations.
- Surface storage unavailable, quota exceeded, and incompatible data states as recoverable errors.
- Do not persist account, auth, sync, AI, commerce, or social metadata in MVP.

### Export/import Backup

Ship export/import before release unless the Product Manager explicitly accepts local data-loss risk.

Export/import rules:

- Export the complete local dataset.
- Include `schemaVersion` and `exportedAt`.
- Warn that exports can contain private tea, teaware, session, and note data.
- Validate the whole import before replacement.
- Reject malformed or incompatible imports without overwriting existing data.
- Replace local data only after explicit confirmation.

### Test Stack

Use Vitest, Testing Library, Playwright, and axe-based accessibility checks.

Required coverage:

- Unit: timer state machine, validators, stock boundaries, archive/restore, snapshot creation, import validation, schema version checks.
- Component: forms, filters, empty states, dialogs, timer setup/running/paused/save-failed states, focus behavior.
- E2E smoke: first-use flow, create tea, create teaware, run custom session, run tea session, save session, repeat session, archive/restore, persistence after reload.
- Responsive: `360px`, `768px`, and `1024px` validation for catalog, forms, timer, history, dialogs, and long bilingual text.
- Accessibility: keyboard navigation, focus trap/restoration, contrast, timer readability, and non-color-only state communication.

### Static Hosting

Deploy the MVP as a static web app on a host that supports:

- HTTPS.
- PR preview deployments.
- Immutable deploy history.
- Rollback to a prior deploy.
- Static asset caching.
- Production deploy from main or a tagged release after required gates pass.

Good-fit hosts include Vercel, Netlify, and Cloudflare Pages. The final provider should be selected during scaffold/deployment setup based on repository ownership and account availability.

## Trial

### React Router

Use React Router unless implementation discovers that route needs are simpler than expected. Required route areas are Tea Shelf, Teaware Shelf, Brew Timer, Session History, detail views, form flows, and archive views.

### CSS Modules or Plain CSS with Design Tokens

Use token-driven CSS inside `design-system-impl`. Avoid a heavy component framework because the design system already defines custom component behavior and visual constraints.

### Headless Accessibility Helpers

Small libraries are allowed for hard accessibility primitives such as dialogs, popovers, and focus management. Prefer semantic HTML and `design-system-impl` components for ordinary buttons, fields, rows, navigation, and timer controls.

### Zustand

Use Zustand only if cross-route state becomes difficult with React state and custom hooks. Candidate uses are active timer draft, global storage status, or app-level transient status. Do not use it for ordinary form state or simple feature-local state.

## Assess

### Lightweight Client Error Reporting

Do not add external telemetry by default. Assess only if release validation needs diagnostics that cannot be handled through local logs, QA evidence, and user issue intake. Any external reporting must avoid private notes, storage payloads, filenames, exports, and full collection/session data.

### PWA Install and Offline Shell

Local persistence is required, but service worker caching, install prompts, background timer promises, push notifications, and lock-screen behavior are out of MVP scope.

## Hold

Do not introduce the following in MVP:

- Backend API.
- Cloud database.
- Authentication provider.
- Cloud sync workers.
- SSR or full-stack framework by default.
- Heavy UI kit.
- Remote analytics.
- AI provider.
- Commerce, marketplace, social, or content integrations.
- Native mobile build tooling.

## Risks and Mitigations

| Risk | Impact | Mitigation |
| --- | --- | --- |
| Browser storage clearing causes data loss | Users lose collection trust | Ship export/import and disclose local durability limits. |
| Timer is implemented directly in UI components | Timer becomes hard to test and unreliable | Implement deterministic timer service/hook with fake-timer coverage. |
| Import partially overwrites valid data | User data loss | Validate complete import before replacement and require confirmation. |
| Future sync becomes hard to add | Rework in domain and UI layers | Keep service/repository boundary between UI and persistence. |
| Accessibility gaps in custom controls | Release quality risk | Centralize shared controls in `design-system-impl` and require keyboard/focus/axe/manual validation. |
| Feature screens fork shared UI behavior | Inconsistent clients and duplicated defects | Require every client to consume `design-system-impl` primitives for shared UI behavior. |
| Telemetry captures private data | Privacy breach | Hold remote telemetry unless approved by security review. |

## Sources

- Product requirements: `docs/spec/product-requirements/active/PRD-MVP-001-tea-shelf.md`
- Technical requirements: `docs/spec/technical-specs/implementation-plans/MVP-001-technical-requirements.md`
- Storage strategy: `docs/architecture/data-architecture/storage-strategy.md`
- Design system: `docs/design/design-system/MVP-design-system.md`
- Component specifications: `docs/design/design-system/components/MVP-component-requirements.md`
- Local service contracts: `docs/api/contracts/service-contracts/MVP-local-service-contracts.md`
- QA strategy: `docs/qa/strategy/test-strategy.md`
- Release readiness: `docs/operations/release-management/MVP-release-readiness.md`
- Vite production build docs: https://vite.dev/guide/build.html
- Dexie docs: https://dexie.org/docs
- Vitest guide: https://vitest.dev/guide/
- Playwright accessibility testing docs: https://playwright.dev/docs/accessibility-testing
- Vercel deployment docs: https://vercel.com/docs/deployments

## Verification Status

- Reviewed current MVP product, architecture, storage, QA, security, release, deployment, and local service docs.
- Consulted frontend, backend, QA, and DevOps perspectives before finalizing the radar.
- No application scaffold exists yet, so build scripts, CI commands, and provider-specific rollback steps remain pending.
