# Communication Patterns

Status: Approved for Implementation
Version: MVP-001

## MVP Pattern

MVP modules communicate inside a single responsive web application through local application state and local persistence.

## Data Flow

- Tea and Teaware records feed Brew Timer setup.
- Brew Timer saves BrewSession snapshots to Session History.
- Session History can create a new Brew Timer setup from a saved session.
- Stock updates are manual prompts after session save.

## Deferred Patterns

- Remote API calls.
- Event streaming.
- Cross-device sync.
- Background jobs.
- Push notifications.
