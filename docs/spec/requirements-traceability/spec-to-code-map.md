# Spec To Code Map

Status: Approved for Implementation
Version: MVP-001

## Purpose

This document maps approved MVP specifications to the planned implementation areas for the selected stack and workspace.

## Workspace Defaults

- Package manager: pnpm with committed `pnpm-lock.yaml`.
- Workspace root: `projects/`.
- Web app: `projects/web`.
- Shared UI package: `projects/design-system-impl`.
- Hosting: Vercel static deployment of the Vite production build.

## MVP Spec Sources

- PRD: `docs/spec/product-requirements/active/PRD-MVP-001-tea-shelf.md`
- Functional spec: `docs/spec/product-requirements/active/MVP-001-functional-specification.md`
- Tea feature: `docs/spec/feature-specs/active/FEAT-MVP-001-tea-shelf.md`
- Teaware feature: `docs/spec/feature-specs/active/FEAT-MVP-002-teaware-shelf.md`
- Brew Timer feature: `docs/spec/feature-specs/active/FEAT-MVP-003-brew-timer.md`
- Session History feature: `docs/spec/feature-specs/active/FEAT-MVP-004-session-history.md`
- Core entities: `docs/spec/system-specs/domain-models/MVP-core-entities.md`
- Acceptance criteria: `docs/spec/user-stories/acceptance-criteria/MVP-001-acceptance-criteria.md`

## Implementation Mapping Status

Sprint-003 created the empty runnable scaffold under `projects/`. Feature modules, domain services, persistence, real UI, and release smoke coverage have not started yet. New implementation tasks must update this map when concrete feature source paths are created.

## Planned Implementation Areas

| Spec Area | Planned Code Area |
| --- | --- |
| Tea Shelf | `projects/web` tea feature module, tea domain model, tea local service/repository, tea UI screens |
| Teaware Shelf | `projects/web` teaware feature module, teaware domain model, teaware local service/repository, teaware UI screens |
| Brew Timer | `projects/web` timer/session feature module, timer state machine, sequence validation, stock prompt UI |
| Session History | `projects/web` history feature module, session snapshots, repeat-session setup, archive/restore UI |
| Local persistence | `projects/web` storage adapter, Dexie schema versioning, import/export, corruption/quota error handling |
| Shared design system | `projects/design-system-impl` tokens, primitives, dialogs, forms, navigation, timer controls |
| QA | Unit, component, Playwright smoke, responsive, accessibility, and backup/recovery checks |

## Rule

Future implementation tasks must update this map when code areas are created.
