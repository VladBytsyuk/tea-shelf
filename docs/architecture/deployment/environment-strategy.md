# Environment Strategy

Status: Draft  
Version: MVP-001

## MVP Environments

- Local development: used for implementation and developer validation.
- Preview/review environment: used for PM, design, QA, and cross-role review when available.
- Production: user-facing MVP release environment.

## Requirements

- Environment configuration must not require secrets for MVP unless future integrations are approved.
- Preview and production builds must be reproducible from versioned source.
- Release validation must run against the same build class intended for production.

## Deferred

- Multi-region environments.
- Backend staging databases.
- Secret rotation workflows for external providers.
