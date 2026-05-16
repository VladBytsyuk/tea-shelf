# MVP Deploy Procedure

Status: Approved for Implementation
Version: MVP-001

## Pre-Deploy

- Confirm approved MVP specs.
- Confirm CI/check pipeline is green.
- Confirm release readiness gates pass.
- Confirm known risks are accepted.

## Deploy

- Deploy the Vite production build artifact to Vercel.
- Use Vercel preview deployments for pull requests and production deployments from the approved release branch or tag.
- Record the deployment URL and Vercel deployment identifier in release evidence.

## Post-Deploy Smoke Test

- Open production URL.
- Create a tea.
- Create teaware.
- Start and complete a custom session.
- Start and complete a tea session.
- Save session and repeat it.
- Verify local persistence after reload.

## Rollback

- Roll back through Vercel deploy history to the last known-good deployment.
- Record rollback trigger, owner, previous deployment identifier, and restored deployment URL.
