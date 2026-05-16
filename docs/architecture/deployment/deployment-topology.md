# Deployment Topology

Status: Draft  
Version: MVP-001

## MVP Direction

The MVP topology is a single static web application deployed to an HTTPS-capable static host. The exact provider is not selected yet.

Good-fit providers include Vercel, Netlify, and Cloudflare Pages because they support static web app deployment, preview environments, deploy history, and rollback.

## Requirements

- Build artifact must be versioned for release validation.
- Hosting target must support HTTPS.
- Pull requests should produce preview deployments when the selected provider supports them.
- Release build must be smoke-tested after deployment.
- Rollback procedure must restore the previous known-good static deploy and must be documented once hosting is selected.

## Deferred Topology

- Backend API deployment.
- Cloud database.
- Sync workers.
- AI provider integration.
- Native app stores.
