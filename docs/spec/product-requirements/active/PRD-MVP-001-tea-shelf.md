# PRD-MVP-001: Tea Shelf MVP

Status: Ready for Implementation Planning
Version: MVP-001
Owner: Product Manager
Audience: Product, design, architecture, engineering, QA, DevOps

## Product Brief

Tea Shelf / Чайная Полка is a personal tea ceremony assistant for modern Chinese tea enthusiasts. The MVP helps users manage tea collections, manage teaware collections, and conduct guided multi-steep brewing sessions.

## Problem Statement

Users forget what tea they own, lose track of remaining quantity, struggle to choose suitable teaware, and rely on disconnected tools for steep timing and session memory.

## MVP Goal

Users can catalog tea and teaware while conducting guided tea sessions.

## Target Users

- Primary: Gongfu practitioners, collectors, and tea ceremony practitioners.
- Secondary: Beginners who need structured collection and brewing support.
- Future: Advanced users needing aging analytics, AI tasting, and community features.

## In Scope

- Tea Shelf inventory.
- Teaware Shelf inventory.
- Brew Timer with multi-steep sequences.
- Session history.
- Favorites for teas.
- Repeat saved sessions.
- Remaining quantity tracking.
- Basic tea taxonomy fields.

## Out of Scope

- AI assistant.
- Articles and Knowledge Shelf.
- Academy onboarding.
- Monetization, subscriptions, marketplace, and social features.
- Native mobile applications.
- Push notifications, widgets, and offline-native enhancements.
- Authentication and cloud sync unless separately approved as MVP+.

## Functional Requirements

- FR-001: The system shall allow users to create, view, update, archive, and restore tea records.
- FR-002: The system shall support tea type, brand, region, year, original weight, remaining quantity, notes, favorite flag, and availability status.
- FR-003: The system shall allow users to create, view, update, archive, and restore teaware records.
- FR-004: The system shall support teaware category, material, volume, purpose, supported brewing methods, and notes.
- FR-005: The system shall allow users to run a timer-based brewing session with ordered steeps.
- FR-006: The system shall allow users to record temperature and timing guidance for a brewing sequence.
- FR-007: The system shall save completed session history with selected tea, selected teaware, completed steeps, and notes.
- FR-008: The system shall allow users to repeat a previous session.
- FR-009: The system shall allow users to mark teas as favorites.
- FR-010: The system shall allow users to update remaining stock after a session or inventory edit.
- FR-011: The system shall allow users to archive and restore tea, teaware, and saved session records.
- FR-012: The system shall allow users to run a minimal custom session without selecting tea or teaware.
- FR-013: The system shall provide export/import or an equivalent local backup path before release unless the Product Manager explicitly accepts local data-loss risk.

## Non-Functional Requirements

- NFR-001: The MVP shall be designed as a responsive web app.
- NFR-002: Core flows shall work on mobile, tablet, and desktop viewport sizes.
- NFR-003: Core interactions shall be accessible by keyboard.
- NFR-004: Timer states shall be visually clear and not rely on color alone.
- NFR-005: MVP documentation shall remain modular and traceable before implementation begins.
- NFR-006: Local data durability limits shall be disclosed in release/user-facing guidance.

## Business Rules

- A tea can exist without linked teaware.
- A teaware item can exist without linked tea.
- A session must reference a tea or be explicitly marked as a custom session.
- Remaining quantity cannot be negative.
- Availability status is derived from remaining quantity: available when quantity is greater than zero, unavailable when quantity is zero.
- Stock updates after brewing are prompted and manual; MVP does not automatically deduct tea.
- Records are archived/restored in MVP, not permanently deleted.
- Saved sessions preserve the tea, teaware, and steep sequence values used during the session, even if source records are later edited or archived.
- BrewSequence is internal timer/session sequence data in MVP, not a first-class recipe-management feature.
- Saved sessions may have zero notes; notes are optional user-entered private data.
- Deferred modules must not be represented as MVP acceptance requirements.

## Success Criteria

- A user can add tea, add teaware, run a multi-steep timer, save the session, and repeat it later.
- A user can archive records without losing historical session context.
- Acceptance criteria exist for all MVP features.
- QA has a test plan for catalog, timer, session history, responsive, and accessibility scenarios.
- Implementation can begin without relying on the original conversation.

## Assumptions

- Assumption: MVP is local-first or single-user until authentication and sync are approved.
  Impact if wrong: Entity ownership, persistence, privacy, and sync requirements must be revised.

- Assumption: English documentation is acceptable while product branding remains bilingual.
  Impact if wrong: Documentation and UX copy requirements need localization expansion.

- Assumption: Technical stack selection happens after spec approval.
  Impact if wrong: Architecture docs may need stack-specific constraints earlier.
