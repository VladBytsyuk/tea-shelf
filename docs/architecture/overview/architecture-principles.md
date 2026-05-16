# Architecture Principles

Status: Approved for Implementation
Version: MVP-001

## Principles

- Keep MVP local-first, single-user, and responsive web.
- Do not couple MVP modules to deferred AI, Knowledge Shelf, auth, sync, commerce, social, or native mobile work.
- Preserve user data by default through archive/restore and session snapshots.
- Keep module boundaries clear for Tea Shelf, Teaware Shelf, Brew Timer, and Session History.
- Prefer simple, testable architecture over speculative extensibility.
- Require stack, persistence, testing, and deployment decisions before implementation starts.
