# MVP Release Validation Runbook

Status: Draft  
Version: MVP-001

## Purpose

Validate that a release build satisfies MVP readiness gates before user-facing release.

## Steps

1. Confirm release artifact/version.
2. Confirm required checks passed.
3. Run first-use smoke flow.
4. Run repeat-session smoke flow.
5. Validate local persistence after reload.
6. Check responsive layouts for mobile, tablet, and desktop.
7. Check keyboard navigation and visible focus.
8. Record defects and evidence.
9. PM, QA, Tech Lead, and DevOps decide go/no-go.

## Escalation

- Critical user-flow failure: stop release.
- Data-loss behavior: stop release unless explicitly accepted by PM.
- Privacy boundary violation: stop release pending security review.
