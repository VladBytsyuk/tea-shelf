# Tea Shelf Documentation

This directory is the entry point for project documentation. It organizes product intent, delivery specifications, architecture, decisions, API contracts, design assets, quality practices, security records, operations, research, team process, reusable templates, and archived material.

Use this README as the map for where each artifact belongs. Individual documentation files may be empty until their topic is ready to be written.

## How to Use This Documentation

- Start with [product/](product/) to understand vision, users, roadmap, business model, and metrics.
- Use [spec/](spec/) for implementation-ready requirements, feature specs, user stories, traceability, and scope governance.
- Use [architecture/](architecture/) and [adr/](adr/) for technical direction, diagrams, standards, and decision history.
- Use [api/](api/) for interface contracts, event contracts, authentication, authorization, and versioning policies.
- Use [design/](design/) for product experience, design-system, UX flow, prototype, and platform guidance.
- Use [qa/](qa/), [security/](security/), and [operations/](operations/) for validation, security assurance, deployment, observability, and runbooks.
- Use [research/](research/) for market, technology, vendor, benchmark, experiment, and feasibility work.
- Use [team/](team/) for sprint history, reports, handoffs, risks, and team operating records.
- Use [templates/](templates/) when creating new repeatable project documents.
- Move obsolete but still useful material into [archive/](archive/).

## Documentation Structure

### Root

- [README.md](README.md): Entry point and navigation map for the documentation tree.

### Product

- [product/](product/): Product strategy, users, roadmap, business model, and success measurement.
- [product/vision/](product/vision/): Long-term product direction and strategic intent.
- [product/vision/product-vision.md](product/vision/product-vision.md): Product vision statement and future-state narrative.
- [product/vision/mission.md](product/vision/mission.md): Mission statement explaining why the product exists.
- [product/vision/strategic-goals.md](product/vision/strategic-goals.md): Strategic goals that guide product priorities.
- [product/vision/value-proposition.md](product/vision/value-proposition.md): Core value delivered to target users and stakeholders.
- [product/roadmap/](product/roadmap/): Roadmap planning and release direction.
- [product/roadmap/roadmap-overview.md](product/roadmap/roadmap-overview.md): High-level roadmap summary across planning horizons.
- [product/roadmap/quarterly-roadmap/](product/roadmap/quarterly-roadmap/): Quarter-level roadmap plans.
- [product/roadmap/yearly-roadmap/](product/roadmap/yearly-roadmap/): Year-level strategic roadmap plans.
- [product/roadmap/release-plans/](product/roadmap/release-plans/): Planned release scope, sequencing, and release goals.
- [product/personas/](product/personas/): User and stakeholder profile documentation.
- [product/personas/primary-users.md](product/personas/primary-users.md): Primary user personas and needs.
- [product/personas/enterprise-users.md](product/personas/enterprise-users.md): Enterprise or organizational user personas.
- [product/personas/stakeholder-profiles.md](product/personas/stakeholder-profiles.md): Non-user stakeholder profiles, concerns, and expectations.
- [product/user-journeys/](product/user-journeys/): User lifecycle and workflow maps.
- [product/user-journeys/onboarding.md](product/user-journeys/onboarding.md): First-use and activation journey.
- [product/user-journeys/retention.md](product/user-journeys/retention.md): Repeat-use and retention journey.
- [product/user-journeys/conversion.md](product/user-journeys/conversion.md): Conversion journey from interest to desired action.
- [product/user-journeys/lifecycle-maps/](product/user-journeys/lifecycle-maps/): Detailed maps for lifecycle stages and transitions.
- [product/business-model/](product/business-model/): Business model, pricing, growth, and economics.
- [product/business-model/pricing.md](product/business-model/pricing.md): Pricing model, tiers, and pricing rationale.
- [product/business-model/monetization.md](product/business-model/monetization.md): Revenue strategy and monetization approach.
- [product/business-model/unit-economics.md](product/business-model/unit-economics.md): Unit economics assumptions and analysis.
- [product/business-model/growth-strategy.md](product/business-model/growth-strategy.md): Growth channels, loops, and expansion strategy.
- [product/metrics/](product/metrics/): Product measurement and reporting framework.
- [product/metrics/kpis.md](product/metrics/kpis.md): Key performance indicators and definitions.
- [product/metrics/north-star-metric.md](product/metrics/north-star-metric.md): Primary product success metric and rationale.
- [product/metrics/analytics-framework.md](product/metrics/analytics-framework.md): Analytics events, funnels, and measurement approach.
- [product/metrics/reporting-standards.md](product/metrics/reporting-standards.md): Reporting conventions, cadence, and ownership.

### Specification

- [spec/](spec/): Product, feature, system, and technical specifications.
- [spec/backlog/](spec/backlog/): Backlog organization and prioritization inputs.
- [spec/backlog/epic-backlog/](spec/backlog/epic-backlog/): Large outcome-based initiatives and epics.
- [spec/backlog/feature-backlog/](spec/backlog/feature-backlog/): Candidate feature requests and future product work.
- [spec/backlog/technical-debt/](spec/backlog/technical-debt/): Known technical debt items and remediation candidates.
- [spec/backlog/prioritization-framework.md](spec/backlog/prioritization-framework.md): Prioritization method and scoring rules.
- [spec/product-requirements/](spec/product-requirements/): Product requirement documents.
- [spec/product-requirements/PRD-template.md](spec/product-requirements/PRD-template.md): Template for product requirement documents.
- [spec/product-requirements/active/](spec/product-requirements/active/): PRDs currently under discussion or implementation.
- [spec/product-requirements/completed/](spec/product-requirements/completed/): PRDs whose scope has been delivered.
- [spec/product-requirements/archived/](spec/product-requirements/archived/): Retired or superseded PRDs.
- [spec/feature-specs/](spec/feature-specs/): Feature-level specifications.
- [spec/feature-specs/FEAT-template.md](spec/feature-specs/FEAT-template.md): Template for feature specifications.
- [spec/feature-specs/active/](spec/feature-specs/active/): Feature specs currently being designed or built.
- [spec/feature-specs/completed/](spec/feature-specs/completed/): Delivered feature specs.
- [spec/feature-specs/archived/](spec/feature-specs/archived/): Superseded or inactive feature specs.
- [spec/system-specs/](spec/system-specs/): System-level behavior, integration, domain, and infrastructure specifications.
- [spec/system-specs/service-specifications/](spec/system-specs/service-specifications/): Service behavior and responsibility specs.
- [spec/system-specs/domain-models/](spec/system-specs/domain-models/): Domain entities, relationships, and business rules.
- [spec/system-specs/integration-specs/](spec/system-specs/integration-specs/): Integration behavior and external system contracts.
- [spec/system-specs/infrastructure-specs/](spec/system-specs/infrastructure-specs/): Infrastructure requirements and environment specifications.
- [spec/technical-specs/](spec/technical-specs/): Engineering implementation and technical planning documents.
- [spec/technical-specs/implementation-plans/](spec/technical-specs/implementation-plans/): Implementation plans for approved work.
- [spec/technical-specs/scalability-plans/](spec/technical-specs/scalability-plans/): Scalability analysis and planned improvements.
- [spec/technical-specs/migration-plans/](spec/technical-specs/migration-plans/): Migration, backfill, and compatibility plans.
- [spec/technical-specs/dependency-plans/](spec/technical-specs/dependency-plans/): Dependency introduction, upgrade, and retirement plans.
- [spec/user-stories/](spec/user-stories/): User stories and acceptance artifacts.
- [spec/user-stories/story-maps/](spec/user-stories/story-maps/): Story maps across journeys, releases, or epics.
- [spec/user-stories/acceptance-criteria/](spec/user-stories/acceptance-criteria/): Acceptance criteria grouped by feature or story.
- [spec/user-stories/personas-linked/](spec/user-stories/personas-linked/): Stories organized by persona needs.
- [spec/requirements-traceability/](spec/requirements-traceability/): Requirement traceability from intent to implementation.
- [spec/requirements-traceability/requirement-matrix.md](spec/requirements-traceability/requirement-matrix.md): Matrix connecting requirements to specs, tests, and delivery status.
- [spec/requirements-traceability/spec-to-code-map.md](spec/requirements-traceability/spec-to-code-map.md): Mapping between specs and implementation areas.
- [spec/requirements-traceability/sprint-traceability.md](spec/requirements-traceability/sprint-traceability.md): Mapping between sprint work and requirements.
- [spec/governance/](spec/governance/): Rules for managing specification lifecycle and scope.
- [spec/governance/scope-management.md](spec/governance/scope-management.md): Scope definition and scope-change handling.
- [spec/governance/prioritization-rules.md](spec/governance/prioritization-rules.md): Rules for prioritizing spec and backlog items.
- [spec/governance/change-control.md](spec/governance/change-control.md): Change-control process for approved requirements.
- [spec/governance/spec-lifecycle.md](spec/governance/spec-lifecycle.md): States and lifecycle rules for documentation artifacts.

### Architecture

- [architecture/](architecture/): Architecture overview, system boundaries, data architecture, deployment, diagrams, and standards.
- [architecture/overview/](architecture/overview/): Top-level architecture direction.
- [architecture/overview/system-overview.md](architecture/overview/system-overview.md): System purpose, major components, and responsibilities.
- [architecture/overview/architecture-principles.md](architecture/overview/architecture-principles.md): Engineering principles that guide architecture decisions.
- [architecture/overview/technical-strategy.md](architecture/overview/technical-strategy.md): Technical strategy, priorities, and tradeoffs.
- [architecture/system-context/](architecture/system-context/): System context and boundaries.
- [architecture/system-context/context-diagrams/](architecture/system-context/context-diagrams/): Context diagrams showing users, services, and external systems.
- [architecture/system-context/external-systems.md](architecture/system-context/external-systems.md): External systems, dependencies, and integration roles.
- [architecture/system-context/service-boundaries.md](architecture/system-context/service-boundaries.md): Ownership and responsibility boundaries between services.
- [architecture/service-map/](architecture/service-map/): Service catalog and inter-service relationships.
- [architecture/service-map/service-catalog.md](architecture/service-map/service-catalog.md): Catalog of services, responsibilities, and owners.
- [architecture/service-map/ownership-map.md](architecture/service-map/ownership-map.md): Ownership mapping for services and components.
- [architecture/service-map/communication-patterns.md](architecture/service-map/communication-patterns.md): Synchronous, asynchronous, and event communication patterns.
- [architecture/data-architecture/](architecture/data-architecture/): Data models, schemas, events, and storage decisions.
- [architecture/data-architecture/data-models/](architecture/data-architecture/data-models/): Conceptual and logical data models.
- [architecture/data-architecture/schemas/](architecture/data-architecture/schemas/): Database, document, and payload schemas.
- [architecture/data-architecture/event-models/](architecture/data-architecture/event-models/): Event model definitions and event relationships.
- [architecture/data-architecture/storage-strategy.md](architecture/data-architecture/storage-strategy.md): Storage choices, retention, partitioning, and access strategy.
- [architecture/deployment/](architecture/deployment/): Deployment architecture and runtime environments.
- [architecture/deployment/deployment-topology.md](architecture/deployment/deployment-topology.md): Deployment topology and runtime component placement.
- [architecture/deployment/environment-strategy.md](architecture/deployment/environment-strategy.md): Environment roles, promotion flow, and configuration approach.
- [architecture/deployment/scalability.md](architecture/deployment/scalability.md): Scaling assumptions, limits, and scaling strategy.
- [architecture/deployment/resiliency.md](architecture/deployment/resiliency.md): Reliability patterns, failure handling, and recovery expectations.
- [architecture/diagrams/](architecture/diagrams/): Architecture and system diagrams.
- [architecture/diagrams/c4-model/](architecture/diagrams/c4-model/): C4 context, container, component, and code diagrams.
- [architecture/diagrams/sequence-diagrams/](architecture/diagrams/sequence-diagrams/): Sequence diagrams for system interactions.
- [architecture/diagrams/flowcharts/](architecture/diagrams/flowcharts/): Process, workflow, and decision flowcharts.
- [architecture/diagrams/infra-diagrams/](architecture/diagrams/infra-diagrams/): Infrastructure and deployment diagrams.
- [architecture/standards/](architecture/standards/): Technical standards shared across implementation work.
- [architecture/standards/coding-standards.md](architecture/standards/coding-standards.md): Coding conventions and engineering standards.
- [architecture/standards/api-standards.md](architecture/standards/api-standards.md): API design standards and contract conventions.
- [architecture/standards/observability-standards.md](architecture/standards/observability-standards.md): Logging, metrics, tracing, and alerting standards.
- [architecture/standards/security-standards.md](architecture/standards/security-standards.md): Secure engineering standards and expectations.

### Architecture Decision Records

- [adr/](adr/): Architecture Decision Records and their lifecycle folders.
- [adr/README.md](adr/README.md): ADR process overview and navigation for decision records.
- [adr/templates/](adr/templates/): ADR templates.
- [adr/templates/adr-template.md](adr/templates/adr-template.md): Template for creating new ADRs.
- [adr/active/](adr/active/): ADRs currently proposed or under review.
- [adr/accepted/](adr/accepted/): Accepted ADRs that represent current decisions.
- [adr/deprecated/](adr/deprecated/): ADRs that are no longer recommended but remain historical.
- [adr/superseded/](adr/superseded/): ADRs replaced by newer decisions.

### API

- [api/](api/): API contracts, event contracts, authentication, authorization, and versioning documentation.
- [api/openapi/](api/openapi/): OpenAPI specifications.
- [api/openapi/internal/](api/openapi/internal/): Internal service API specifications.
- [api/openapi/public/](api/openapi/public/): Public API specifications.
- [api/openapi/partner/](api/openapi/partner/): Partner API specifications.
- [api/graphql/](api/graphql/): GraphQL schemas, operations, and conventions.
- [api/events/](api/events/): Event schemas, contracts, and catalog.
- [api/events/schemas/](api/events/schemas/): Event payload schemas.
- [api/events/contracts/](api/events/contracts/): Producer and consumer event contracts.
- [api/events/event-catalog.md](api/events/event-catalog.md): Catalog of events and their business meaning.
- [api/contracts/](api/contracts/): Service contracts and shared interface rules.
- [api/contracts/service-contracts/](api/contracts/service-contracts/): Contracts between internal services.
- [api/contracts/shared-types/](api/contracts/shared-types/): Shared types used across contracts.
- [api/contracts/compatibility-rules.md](api/contracts/compatibility-rules.md): Compatibility rules for evolving contracts.
- [api/auth/](api/auth/): Authentication, authorization, and token model documentation.
- [api/auth/authentication.md](api/auth/authentication.md): Authentication methods and identity flows.
- [api/auth/authorization.md](api/auth/authorization.md): Authorization model, roles, permissions, and access rules.
- [api/auth/token-models.md](api/auth/token-models.md): Token types, claims, lifetimes, and validation rules.
- [api/versioning/](api/versioning/): API versioning and deprecation policy.
- [api/versioning/api-version-policy.md](api/versioning/api-version-policy.md): Versioning rules for API changes.
- [api/versioning/deprecation-policy.md](api/versioning/deprecation-policy.md): Deprecation timelines, notices, and support expectations.

### Design

- [design/](design/): UX, design-system, research, prototypes, and platform guidance.
- [design/design-system/](design/design-system/): Reusable design-system foundations and components.
- [design/design-system/components/](design/design-system/components/): Component specifications and usage guidance.
- [design/design-system/tokens/](design/design-system/tokens/): Design tokens for spacing, color, typography, and related values.
- [design/design-system/typography.md](design/design-system/typography.md): Typography scale, usage, and readability rules.
- [design/design-system/color-system.md](design/design-system/color-system.md): Color palette, semantic colors, and contrast guidance.
- [design/design-system/accessibility.md](design/design-system/accessibility.md): Accessibility standards and design requirements.
- [design/ux-flows/](design/ux-flows/): UX flows grouped by product area.
- [design/ux-flows/onboarding/](design/ux-flows/onboarding/): Onboarding flow designs and notes.
- [design/ux-flows/purchase/](design/ux-flows/purchase/): Purchase or checkout flow designs and notes.
- [design/ux-flows/retention/](design/ux-flows/retention/): Retention and re-engagement flow designs.
- [design/ux-flows/admin/](design/ux-flows/admin/): Administrative workflow designs.
- [design/wireframes/](design/wireframes/): Low-fidelity layout and interaction sketches.
- [design/prototypes/](design/prototypes/): Prototype links, exports, and prototype notes.
- [design/usability-research/](design/usability-research/): Usability research plans, findings, and synthesis.
- [design/interaction-patterns/](design/interaction-patterns/): Reusable interaction patterns and behavior guidance.
- [design/platform-guidelines/](design/platform-guidelines/): Platform-specific experience guidance.
- [design/platform-guidelines/web.md](design/platform-guidelines/web.md): Web platform UX and interaction guidance.
- [design/platform-guidelines/mobile-ios.md](design/platform-guidelines/mobile-ios.md): iOS platform UX guidance.
- [design/platform-guidelines/mobile-android.md](design/platform-guidelines/mobile-android.md): Android platform UX guidance.

### QA

- [qa/](qa/): Quality strategy, test assets, automation, performance, and release validation.
- [qa/strategy/](qa/strategy/): Quality strategy and release readiness rules.
- [qa/strategy/test-strategy.md](qa/strategy/test-strategy.md): Overall test approach, levels, and responsibilities.
- [qa/strategy/quality-gates.md](qa/strategy/quality-gates.md): Quality gates required before release or handoff.
- [qa/strategy/release-readiness.md](qa/strategy/release-readiness.md): Release readiness criteria and checklist.
- [qa/test-plans/](qa/test-plans/): Test plans by feature, release, or system area.
- [qa/test-cases/](qa/test-cases/): Manual and automated test case definitions.
- [qa/regression/](qa/regression/): Regression suites and coverage notes.
- [qa/automation/](qa/automation/): Automated testing strategy, scripts, and framework notes.
- [qa/performance/](qa/performance/): Performance test plans, results, and tuning notes.
- [qa/test-data/](qa/test-data/): Test data definitions, fixtures, and data management notes.
- [qa/bug-reports/](qa/bug-reports/): Bug reports and defect analysis.
- [qa/release-validation/](qa/release-validation/): Release validation evidence and signoff notes.

### Security

- [security/](security/): Security assurance, compliance, incident response, and secure development documentation.
- [security/threat-models/](security/threat-models/): Threat models by feature, system, or data flow.
- [security/security-reviews/](security/security-reviews/): Security review findings and signoffs.
- [security/compliance/](security/compliance/): Compliance-specific documentation and evidence.
- [security/compliance/gdpr/](security/compliance/gdpr/): GDPR-related privacy and data protection records.
- [security/compliance/soc2/](security/compliance/soc2/): SOC 2 control and evidence documentation.
- [security/compliance/internal-policies/](security/compliance/internal-policies/): Internal security and compliance policies.
- [security/auth-security/](security/auth-security/): Authentication and authorization security analysis.
- [security/data-protection/](security/data-protection/): Data classification, encryption, retention, and protection notes.
- [security/incident-response/](security/incident-response/): Security incident response procedures and records.
- [security/vulnerability-management/](security/vulnerability-management/): Vulnerability tracking, triage, and remediation plans.
- [security/penetration-testing/](security/penetration-testing/): Penetration test plans, reports, and remediation tracking.
- [security/secure-development/](security/secure-development/): Secure development lifecycle guidance.

### Operations

- [operations/](operations/): Delivery, deployment, observability, incident, infrastructure, and release operations.
- [operations/ci-cd/](operations/ci-cd/): CI/CD pipeline design, checks, and operational notes.
- [operations/deployment/](operations/deployment/): Deployment procedures and environment rollout notes.
- [operations/observability/](operations/observability/): Monitoring, logging, tracing, and alerting documentation.
- [operations/observability/monitoring.md](operations/observability/monitoring.md): Monitoring strategy, metrics, and dashboards.
- [operations/observability/logging.md](operations/observability/logging.md): Logging standards, fields, and retention expectations.
- [operations/observability/tracing.md](operations/observability/tracing.md): Distributed tracing strategy and trace usage.
- [operations/observability/alerting.md](operations/observability/alerting.md): Alert rules, severity, routing, and response expectations.
- [operations/runbooks/](operations/runbooks/): Operational runbooks for recurring procedures and incidents.
- [operations/incident-management/](operations/incident-management/): Incident process, reports, and post-incident actions.
- [operations/backup-recovery/](operations/backup-recovery/): Backup, restore, disaster recovery, and continuity plans.
- [operations/infrastructure/](operations/infrastructure/): Infrastructure design, provisioning, and ownership notes.
- [operations/environment-management/](operations/environment-management/): Environment configuration, access, and lifecycle notes.
- [operations/release-management/](operations/release-management/): Release process, approvals, and rollout records.

### Research

- [research/](research/): Technology, market, vendor, competitor, experiment, benchmark, and recommendation research.
- [research/technology/](research/technology/): Technical research and implementation options.
- [research/market/](research/market/): Market research and segment analysis.
- [research/competitors/](research/competitors/): Competitor analysis and positioning notes.
- [research/vendors/](research/vendors/): Vendor evaluations and procurement research.
- [research/experiments/](research/experiments/): Experiment plans, hypotheses, results, and learnings.
- [research/feasibility-studies/](research/feasibility-studies/): Feasibility analysis for product or technical ideas.
- [research/benchmarks/](research/benchmarks/): Benchmark plans, results, and comparisons.
- [research/recommendations/](research/recommendations/): Research conclusions and recommended actions.

### Team

- [team/](team/): Sprint records, reports, handoffs, decisions, risks, staffing, governance, and process improvement.
- [team/sprints/](team/sprints/): Sprint-specific plans, outputs, and delivery records.
- [team/sprints/Sprint-001/](team/sprints/Sprint-001/): Sprint 001 artifacts.
- [team/sprints/Sprint-002/](team/sprints/Sprint-002/): Sprint 002 artifacts.
- [team/sprints/templates/](team/sprints/templates/): Sprint-specific reusable templates.
- [team/retrospectives/](team/retrospectives/): Retrospective notes and improvement actions.
- [team/reports/](team/reports/): Delivery reports, status summaries, and stakeholder updates.
- [team/handoffs/](team/handoffs/): Cross-role or cross-team handoff documents.
- [team/decisions/](team/decisions/): Team-level decisions that do not require ADR treatment.
- [team/risks/](team/risks/): Delivery, product, operational, and technical risk records.
- [team/staffing/](team/staffing/): Staffing plans, ownership notes, and role coverage.
- [team/governance/](team/governance/): Team operating rules and governance records.
- [team/process-improvements/](team/process-improvements/): Continuous improvement proposals and follow-through.

### Templates

- [templates/](templates/): Shared templates for recurring documentation artifacts.
- [templates/prd-template.md](templates/prd-template.md): Template for product requirement documents.
- [templates/feature-spec-template.md](templates/feature-spec-template.md): Template for feature specifications.
- [templates/sprint-template.md](templates/sprint-template.md): Template for sprint planning and tracking.
- [templates/retrospective-template.md](templates/retrospective-template.md): Template for sprint or project retrospectives.
- [templates/adr-template.md](templates/adr-template.md): General ADR template.
- [templates/qa-plan-template.md](templates/qa-plan-template.md): Template for QA plans.
- [templates/security-review-template.md](templates/security-review-template.md): Template for security review artifacts.
- [templates/research-template.md](templates/research-template.md): Template for research notes and recommendations.
- [templates/implementation-plan-template.md](templates/implementation-plan-template.md): Template for engineering implementation plans.
- [templates/handoff-template.md](templates/handoff-template.md): Template for role, sprint, or delivery handoffs.

### Archive

- [archive/](archive/): Historical material retained for reference but no longer active.
- [archive/deprecated-specs/](archive/deprecated-specs/): Deprecated or obsolete specifications.
- [archive/old-roadmaps/](archive/old-roadmaps/): Historical roadmaps.
- [archive/legacy-architecture/](archive/legacy-architecture/): Legacy architecture documentation.
- [archive/retired-projects/](archive/retired-projects/): Retired project documentation.
- [archive/historical-sprints/](archive/historical-sprints/): Old sprint artifacts retained for history.
