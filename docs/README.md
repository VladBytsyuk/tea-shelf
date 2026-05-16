# Tea Shelf Documentation

This directory is the entry point for project documentation. Use this README as the map for where each artifact belongs. Individual documentation files may be empty until their topic is ready to be written.

## MVP Spec Package

The current active product specification package is **MVP-001: Tea Shelf / Чайная Полка**.

Primary entry points:

- [MVP PRD](spec/product-requirements/active/PRD-MVP-001-tea-shelf.md)
- [MVP Functional Specification](spec/product-requirements/active/MVP-001-functional-specification.md)
- [Tea Shelf Feature Spec](spec/feature-specs/active/FEAT-MVP-001-tea-shelf.md)
- [Teaware Shelf Feature Spec](spec/feature-specs/active/FEAT-MVP-002-teaware-shelf.md)
- [Brew Timer Feature Spec](spec/feature-specs/active/FEAT-MVP-003-brew-timer.md)
- [Session History Feature Spec](spec/feature-specs/active/FEAT-MVP-004-session-history.md)
- [Core Entity Definitions](spec/system-specs/domain-models/MVP-core-entities.md)
- [MVP Information Architecture](spec/system-specs/domain-models/MVP-information-architecture.md)
- [Acceptance Criteria](spec/user-stories/acceptance-criteria/MVP-001-acceptance-criteria.md)
- [Requirement Matrix](spec/requirements-traceability/requirement-matrix.md)
- [Development Handoff](spec/technical-specs/implementation-plans/MVP-001-development-handoff.md)
- [MVP Screen Specifications](design/wireframes/MVP-screen-specifications.md)
- [MVP Design System](design/design-system/MVP-design-system.md)
- [Local Service Contracts](api/contracts/service-contracts/MVP-local-service-contracts.md)
- [MVP Test Plan](qa/test-plans/MVP-001-test-plan.md)
- [Local Data Privacy](security/data-protection/MVP-local-data-privacy.md)
- [Local Data Recovery](operations/backup-recovery/MVP-local-data-recovery.md)
- [Risk Register](team/risks/MVP-risk-register.md)
- [Spec Approval Workflow](team/governance/spec-approval-workflow.md)
- [Release Readiness](operations/release-management/MVP-release-readiness.md)
- [Sprint-001 Report](team/sprints/Sprint-001/MVP-spec-sprint-report.md)

## Documentation Structure

```text
/docs/ — Project documentation root for product, specification, architecture, API, design, QA, security, operations, research, team process, templates, and archive material.
├── README.md — Entry point and navigation map for the documentation tree.
│
├── product/ — Product strategy, users, roadmap, business model, and success measurement.
│   ├── vision/ — Long-term product direction and strategic intent.
│   │   ├── product-vision.md — Product vision statement and future-state narrative.
│   │   ├── mission.md — Mission statement explaining why the product exists.
│   │   ├── strategic-goals.md — Strategic goals that guide product priorities.
│   │   └── value-proposition.md — Core value delivered to target users and stakeholders.
│   │
│   ├── roadmap/ — Roadmap planning and release direction.
│   │   ├── roadmap-overview.md — High-level roadmap summary across planning horizons.
│   │   ├── quarterly-roadmap/ — Quarter-level roadmap plans.
│   │   ├── yearly-roadmap/ — Year-level strategic roadmap plans.
│   │   └── release-plans/ — Planned release scope, sequencing, and release goals.
│   │
│   ├── personas/ — User and stakeholder profile documentation.
│   │   ├── primary-users.md — Primary user personas and needs.
│   │   ├── enterprise-users.md — Enterprise or organizational user personas.
│   │   └── stakeholder-profiles.md — Non-user stakeholder profiles, concerns, and expectations.
│   │
│   ├── user-journeys/ — User lifecycle and workflow maps.
│   │   ├── onboarding.md — First-use and activation journey.
│   │   ├── retention.md — Repeat-use and retention journey.
│   │   ├── conversion.md — Conversion journey from interest to desired action.
│   │   └── lifecycle-maps/ — Detailed maps for lifecycle stages and transitions.
│   │
│   ├── business-model/ — Business model, pricing, growth, and economics.
│   │   ├── pricing.md — Pricing model, tiers, and pricing rationale.
│   │   ├── monetization.md — Revenue strategy and monetization approach.
│   │   ├── unit-economics.md — Unit economics assumptions and analysis.
│   │   └── growth-strategy.md — Growth channels, loops, and expansion strategy.
│   │
│   └── metrics/ — Product measurement and reporting framework.
│       ├── kpis.md — Key performance indicators and definitions.
│       ├── north-star-metric.md — Primary product success metric and rationale.
│       ├── analytics-framework.md — Analytics events, funnels, and measurement approach.
│       └── reporting-standards.md — Reporting conventions, cadence, and ownership.
│
├── spec/ — Product, feature, system, and technical specifications.
│   ├── backlog/ — Backlog organization and prioritization inputs.
│   │   ├── epic-backlog/ — Large outcome-based initiatives and epics.
│   │   ├── feature-backlog/ — Candidate feature requests and future product work.
│   │   ├── technical-debt/ — Known technical debt items and remediation candidates.
│   │   └── prioritization-framework.md — Prioritization method and scoring rules.
│   │
│   ├── product-requirements/ — Product requirement documents.
│   │   ├── PRD-template.md — Template for product requirement documents.
│   │   ├── active/ — PRDs currently under discussion or implementation.
│   │   ├── completed/ — PRDs whose scope has been delivered.
│   │   └── archived/ — Retired or superseded PRDs.
│   │
│   ├── feature-specs/ — Feature-level specifications.
│   │   ├── FEAT-template.md — Template for feature specifications.
│   │   ├── active/ — Feature specs currently being designed or built.
│   │   ├── completed/ — Delivered feature specs.
│   │   └── archived/ — Superseded or inactive feature specs.
│   │
│   ├── system-specs/ — System-level behavior, integration, domain, and infrastructure specifications.
│   │   ├── service-specifications/ — Service behavior and responsibility specs.
│   │   ├── domain-models/ — Domain entities, relationships, and business rules.
│   │   ├── integration-specs/ — Integration behavior and external system contracts.
│   │   └── infrastructure-specs/ — Infrastructure requirements and environment specifications.
│   │
│   ├── technical-specs/ — Engineering implementation and technical planning documents.
│   │   ├── implementation-plans/ — Implementation plans for approved work.
│   │   ├── scalability-plans/ — Scalability analysis and planned improvements.
│   │   ├── migration-plans/ — Migration, backfill, and compatibility plans.
│   │   └── dependency-plans/ — Dependency introduction, upgrade, and retirement plans.
│   │
│   ├── user-stories/ — User stories and acceptance artifacts.
│   │   ├── story-maps/ — Story maps across journeys, releases, or epics.
│   │   ├── acceptance-criteria/ — Acceptance criteria grouped by feature or story.
│   │   └── personas-linked/ — Stories organized by persona needs.
│   │
│   ├── requirements-traceability/ — Requirement traceability from intent to implementation.
│   │   ├── requirement-matrix.md — Matrix connecting requirements to specs, tests, and delivery status.
│   │   ├── spec-to-code-map.md — Mapping between specs and implementation areas.
│   │   └── sprint-traceability.md — Mapping between sprint work and requirements.
│   │
│   └── governance/ — Rules for managing specification lifecycle and scope.
│       ├── scope-management.md — Scope definition and scope-change handling.
│       ├── prioritization-rules.md — Rules for prioritizing spec and backlog items.
│       ├── change-control.md — Change-control process for approved requirements.
│       └── spec-lifecycle.md — States and lifecycle rules for documentation artifacts.
│
├── architecture/ — Architecture overview, system boundaries, data architecture, deployment, diagrams, and standards.
│   ├── overview/ — Top-level architecture direction.
│   │   ├── system-overview.md — System purpose, major components, and responsibilities.
│   │   ├── architecture-principles.md — Engineering principles that guide architecture decisions.
│   │   └── technical-strategy.md — Technical strategy, priorities, and tradeoffs.
│   │
│   ├── system-context/ — System context and boundaries.
│   │   ├── context-diagrams/ — Context diagrams showing users, services, and external systems.
│   │   ├── external-systems.md — External systems, dependencies, and integration roles.
│   │   └── service-boundaries.md — Ownership and responsibility boundaries between services.
│   │
│   ├── service-map/ — Service catalog and inter-service relationships.
│   │   ├── service-catalog.md — Catalog of services, responsibilities, and owners.
│   │   ├── ownership-map.md — Ownership mapping for services and components.
│   │   └── communication-patterns.md — Synchronous, asynchronous, and event communication patterns.
│   │
│   ├── data-architecture/ — Data models, schemas, events, and storage decisions.
│   │   ├── data-models/ — Conceptual and logical data models.
│   │   ├── schemas/ — Database, document, and payload schemas.
│   │   ├── event-models/ — Event model definitions and event relationships.
│   │   └── storage-strategy.md — Storage choices, retention, partitioning, and access strategy.
│   │
│   ├── deployment/ — Deployment architecture and runtime environments.
│   │   ├── deployment-topology.md — Deployment topology and runtime component placement.
│   │   ├── environment-strategy.md — Environment roles, promotion flow, and configuration approach.
│   │   ├── scalability.md — Scaling assumptions, limits, and scaling strategy.
│   │   └── resiliency.md — Reliability patterns, failure handling, and recovery expectations.
│   │
│   ├── diagrams/ — Architecture and system diagrams.
│   │   ├── c4-model/ — C4 context, container, component, and code diagrams.
│   │   ├── sequence-diagrams/ — Sequence diagrams for system interactions.
│   │   ├── flowcharts/ — Process, workflow, and decision flowcharts.
│   │   └── infra-diagrams/ — Infrastructure and deployment diagrams.
│   │
│   └── standards/ — Technical standards shared across implementation work.
│       ├── coding-standards.md — Coding conventions and engineering standards.
│       ├── api-standards.md — API design standards and contract conventions.
│       ├── observability-standards.md — Logging, metrics, tracing, and alerting standards.
│       └── security-standards.md — Secure engineering standards and expectations.
│
├── adr/ — Architecture Decision Records and their lifecycle folders.
│   ├── README.md — ADR process overview and navigation for decision records.
│   ├── templates/ — ADR templates.
│   │   └── adr-template.md — Template for creating new ADRs.
│   │
│   ├── active/ — ADRs currently proposed or under review.
│   ├── accepted/ — Accepted ADRs that represent current decisions.
│   ├── deprecated/ — ADRs that are no longer recommended but remain historical.
│   └── superseded/ — ADRs replaced by newer decisions.
│
├── api/ — API contracts, event contracts, authentication, authorization, and versioning documentation.
│   ├── openapi/ — OpenAPI specifications.
│   │   ├── internal/ — Internal service API specifications.
│   │   ├── public/ — Public API specifications.
│   │   └── partner/ — Partner API specifications.
│   │
│   ├── graphql/ — GraphQL schemas, operations, and conventions.
│   ├── events/ — Event schemas, contracts, and catalog.
│   │   ├── schemas/ — Event payload schemas.
│   │   ├── contracts/ — Producer and consumer event contracts.
│   │   └── event-catalog.md — Catalog of events and their business meaning.
│   │
│   ├── contracts/ — Service contracts and shared interface rules.
│   │   ├── service-contracts/ — Contracts between internal services.
│   │   ├── shared-types/ — Shared types used across contracts.
│   │   └── compatibility-rules.md — Compatibility rules for evolving contracts.
│   │
│   ├── auth/ — Authentication, authorization, and token model documentation.
│   │   ├── authentication.md — Authentication methods and identity flows.
│   │   ├── authorization.md — Authorization model, roles, permissions, and access rules.
│   │   └── token-models.md — Token types, claims, lifetimes, and validation rules.
│   │
│   └── versioning/ — API versioning and deprecation policy.
│       ├── api-version-policy.md — Versioning rules for API changes.
│       └── deprecation-policy.md — Deprecation timelines, notices, and support expectations.
│
├── design/ — UX, design-system, research, prototypes, and platform guidance.
│   ├── design-system/ — Reusable design-system foundations and components.
│   │   ├── components/ — Component specifications and usage guidance.
│   │   ├── tokens/ — Design tokens for spacing, color, typography, and related values.
│   │   ├── typography.md — Typography scale, usage, and readability rules.
│   │   ├── color-system.md — Color palette, semantic colors, and contrast guidance.
│   │   └── accessibility.md — Accessibility standards and design requirements.
│   │
│   ├── ux-flows/ — UX flows grouped by product area.
│   │   ├── onboarding/ — Onboarding flow designs and notes.
│   │   ├── purchase/ — Purchase or checkout flow designs and notes.
│   │   ├── retention/ — Retention and re-engagement flow designs.
│   │   └── admin/ — Administrative workflow designs.
│   │
│   ├── wireframes/ — Low-fidelity layout and interaction sketches.
│   ├── prototypes/ — Prototype links, exports, and prototype notes.
│   ├── usability-research/ — Usability research plans, findings, and synthesis.
│   ├── interaction-patterns/ — Reusable interaction patterns and behavior guidance.
│   └── platform-guidelines/ — Platform-specific experience guidance.
│       ├── web.md — Web platform UX and interaction guidance.
│       ├── mobile-ios.md — iOS platform UX guidance.
│       └── mobile-android.md — Android platform UX guidance.
│
├── qa/ — Quality strategy, test assets, automation, performance, and release validation.
│   ├── strategy/ — Quality strategy and release readiness rules.
│   │   ├── test-strategy.md — Overall test approach, levels, and responsibilities.
│   │   ├── quality-gates.md — Quality gates required before release or handoff.
│   │   └── release-readiness.md — Release readiness criteria and checklist.
│   │
│   ├── test-plans/ — Test plans by feature, release, or system area.
│   ├── test-cases/ — Manual and automated test case definitions.
│   ├── regression/ — Regression suites and coverage notes.
│   ├── automation/ — Automated testing strategy, scripts, and framework notes.
│   ├── performance/ — Performance test plans, results, and tuning notes.
│   ├── test-data/ — Test data definitions, fixtures, and data management notes.
│   ├── bug-reports/ — Bug reports and defect analysis.
│   └── release-validation/ — Release validation evidence and signoff notes.
│
├── security/ — Security assurance, compliance, incident response, and secure development documentation.
│   ├── threat-models/ — Threat models by feature, system, or data flow.
│   ├── security-reviews/ — Security review findings and signoffs.
│   ├── compliance/ — Compliance-specific documentation and evidence.
│   │   ├── gdpr/ — GDPR-related privacy and data protection records.
│   │   ├── soc2/ — SOC 2 control and evidence documentation.
│   │   └── internal-policies/ — Internal security and compliance policies.
│   │
│   ├── auth-security/ — Authentication and authorization security analysis.
│   ├── data-protection/ — Data classification, encryption, retention, and protection notes.
│   ├── incident-response/ — Security incident response procedures and records.
│   ├── vulnerability-management/ — Vulnerability tracking, triage, and remediation plans.
│   ├── penetration-testing/ — Penetration test plans, reports, and remediation tracking.
│   └── secure-development/ — Secure development lifecycle guidance.
│
├── operations/ — Delivery, deployment, observability, incident, infrastructure, and release operations.
│   ├── ci-cd/ — CI/CD pipeline design, checks, and operational notes.
│   ├── deployment/ — Deployment procedures and environment rollout notes.
│   ├── observability/ — Monitoring, logging, tracing, and alerting documentation.
│   │   ├── monitoring.md — Monitoring strategy, metrics, and dashboards.
│   │   ├── logging.md — Logging standards, fields, and retention expectations.
│   │   ├── tracing.md — Distributed tracing strategy and trace usage.
│   │   └── alerting.md — Alert rules, severity, routing, and response expectations.
│   │
│   ├── runbooks/ — Operational runbooks for recurring procedures and incidents.
│   ├── incident-management/ — Incident process, reports, and post-incident actions.
│   ├── backup-recovery/ — Backup, restore, disaster recovery, and continuity plans.
│   ├── infrastructure/ — Infrastructure design, provisioning, and ownership notes.
│   ├── environment-management/ — Environment configuration, access, and lifecycle notes.
│   └── release-management/ — Release process, approvals, and rollout records.
│
├── research/ — Technology, market, vendor, competitor, experiment, benchmark, and recommendation research.
│   ├── technology/ — Technical research and implementation options.
│   ├── market/ — Market research and segment analysis.
│   ├── competitors/ — Competitor analysis and positioning notes.
│   ├── vendors/ — Vendor evaluations and procurement research.
│   ├── experiments/ — Experiment plans, hypotheses, results, and learnings.
│   ├── feasibility-studies/ — Feasibility analysis for product or technical ideas.
│   ├── benchmarks/ — Benchmark plans, results, and comparisons.
│   └── recommendations/ — Research conclusions and recommended actions.
│
├── team/ — Sprint records, reports, handoffs, decisions, risks, staffing, governance, and process improvement.
│   ├── sprints/ — Sprint-specific plans, outputs, and delivery records.
│   │   ├── Sprint-001/ — Sprint 001 artifacts.
│   │   ├── Sprint-002/ — Sprint 002 artifacts.
│   │   └── templates/ — Sprint-specific reusable templates.
│   │
│   ├── retrospectives/ — Retrospective notes and improvement actions.
│   ├── reports/ — Delivery reports, status summaries, and stakeholder updates.
│   ├── handoffs/ — Cross-role or cross-team handoff documents.
│   ├── decisions/ — Team-level decisions that do not require ADR treatment.
│   ├── risks/ — Delivery, product, operational, and technical risk records.
│   ├── staffing/ — Staffing plans, ownership notes, and role coverage.
│   ├── governance/ — Team operating rules and governance records.
│   └── process-improvements/ — Continuous improvement proposals and follow-through.
│
├── templates/ — Shared templates for recurring documentation artifacts.
│   ├── prd-template.md — Template for product requirement documents.
│   ├── feature-spec-template.md — Template for feature specifications.
│   ├── sprint-template.md — Template for sprint planning and tracking.
│   ├── retrospective-template.md — Template for sprint or project retrospectives.
│   ├── adr-template.md — General ADR template.
│   ├── qa-plan-template.md — Template for QA plans.
│   ├── security-review-template.md — Template for security review artifacts.
│   ├── research-template.md — Template for research notes and recommendations.
│   ├── implementation-plan-template.md — Template for engineering implementation plans.
│   └── handoff-template.md — Template for role, sprint, or delivery handoffs.
│
└── archive/ — Historical material retained for reference but no longer active.
    ├── deprecated-specs/ — Deprecated or obsolete specifications.
    ├── old-roadmaps/ — Historical roadmaps.
    ├── legacy-architecture/ — Legacy architecture documentation.
    ├── retired-projects/ — Retired project documentation.
    └── historical-sprints/ — Old sprint artifacts retained for history.
```
