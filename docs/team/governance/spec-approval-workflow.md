# Spec Approval Workflow

Status: Approved for Implementation
Version: MVP-001

## Workflow States

1. Draft: PM creates or updates the specification.
2. Cross-Functional Review: Architect, Designer, Engineer, QA, and DevOps review owned sections.
3. Revision: PM reconciles comments, conflicts, risks, and scope questions.
4. Approved for Planning: Specs are stable enough for implementation planning.
5. Approved for Implementation: Acceptance criteria, UX flows, entity definitions, QA plan, and risk register are complete.
6. Change Controlled: Any scope change requires explicit approval and traceability updates.

## Approval Gates

- Product scope approved.
- Functional requirements approved.
- UX flows approved.
- Design system requirements approved.
- Core entity definitions approved.
- Technical requirements approved.
- QA plan approved.
- Risk register reviewed.
- Deferred scope confirmed.
- Requirement matrix maps FR/NFR IDs to acceptance and tests.
- Release readiness, quality gates, storage strategy, and local data privacy are reviewed.

## Approval Ownership

- Role owners approve their owned specification areas.
- Product Manager consolidates approval status and resolves scope conflicts.
- Product Manager must not override unresolved QA, security, architecture, or DevOps blockers.
- A spec is implementation-ready only when its role owner has no blocking findings.

## Change Control

Any proposed change that adds AI, Knowledge Shelf, authentication, cloud sync, native mobile, monetization, marketplace, or social features to MVP must be rejected by default and escalated to PM for explicit approval.

Permanent deletion, remote telemetry, and external data export also require explicit PM, architecture, QA, and security review.

## Implementation Rule

No implementation begins from conversation context alone. Implementation tasks must cite approved docs, requirement IDs, and acceptance criteria. Active MVP implementation must start only from specs marked `Approved for Implementation`.
