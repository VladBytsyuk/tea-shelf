# Coding Standards

Status: Draft  
Version: MVP-001

## MVP Standards

- Implementation tasks must cite approved spec and acceptance IDs.
- Keep changes modular around Tea Shelf, Teaware Shelf, Brew Timer, and Session History.
- Avoid speculative AI, sync, content, commerce, social, or native mobile abstractions.
- Write deterministic tests for timer state, archive/restore, stock validation, and session snapshots.
- Preserve accessibility requirements in component implementation.
- Implement shared UI primitives in `design-system-impl` and consume them from every client.
- Do not duplicate shared button, field, dialog, navigation, timer-control, validation, or token behavior inside feature screens.
