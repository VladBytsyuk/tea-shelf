# Deployment Topology

Status: Approved for Implementation
Version: MVP-001

## MVP Direction

The MVP topology is a single Vite static web application deployed to Vercel.

## Requirements

- Build artifact must be versioned for release validation.
- Hosting target must support HTTPS.
- Pull requests should produce Vercel preview deployments.
- Release build must be smoke-tested after deployment.
- Rollback procedure must restore the previous known-good Vercel deployment.

## Deferred Topology

- Backend API deployment.
- Cloud database.
- Sync workers.
- AI provider integration.
- Native app stores.
