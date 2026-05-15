# MVP Deploy Procedure

Status: Draft  
Version: MVP-001

## Pre-Deploy

- Confirm approved MVP specs.
- Confirm CI/check pipeline is green.
- Confirm release readiness gates pass.
- Confirm known risks are accepted.

## Deploy

Deployment commands depend on the selected stack and hosting target and must be filled during implementation planning.

## Post-Deploy Smoke Test

- Open production URL.
- Create a tea.
- Create teaware.
- Start and complete a custom session.
- Start and complete a tea session.
- Save session and repeat it.
- Verify local persistence after reload.

## Rollback

Rollback procedure depends on hosting target and must be documented before release.
