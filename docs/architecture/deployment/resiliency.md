# Resiliency

Status: Approved for Implementation
Version: MVP-001

## MVP Resiliency Goals

- Normal-use local data must persist across page reloads.
- Save failures must preserve entered values and allow retry.
- Timer foreground use must remain clear and deterministic.
- Browser background/refresh limitations must be disclosed if recovery cannot be guaranteed.

## Data Recovery

- MVP must provide export/import or equivalent local backup expectations before release unless PM accepts local data-loss risk.
- Cloud recovery is deferred.

## Deferred

- Server failover.
- Multi-device conflict resolution.
- Offline sync queues.
