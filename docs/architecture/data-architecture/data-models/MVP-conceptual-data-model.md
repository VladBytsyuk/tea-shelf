# MVP Conceptual Data Model

Status: Ready for Implementation Planning
Version: MVP-001

## Entities

- Tea
- Teaware
- BrewSequence
- BrewStep
- BrewSession
- SessionNote

## Relationships

- A Tea may have many saved BrewSequences through session history.
- A Tea may appear in many BrewSessions.
- A Teaware item may appear in many BrewSessions.
- A BrewSequence contains one or more BrewSteps.
- A BrewSession may be created from a saved sequence or custom sequence.
- A BrewSession may have zero or more SessionNotes.
- A BrewSession stores snapshots of the Tea, Teaware, and sequence values used at save time.

## Data Rules

- Remaining tea quantity cannot be negative.
- BrewStep order must be stable within a recipe or session.
- Saved sessions should preserve the values used during the session, even if the tea or teaware record is later edited.
- Tea, Teaware, and BrewSession records use active/archived lifecycle status.
- Archived records are hidden from default selection lists.
- Recipe favorites and standalone recipe management are deferred.
- BrewSequence does not imply standalone recipe CRUD in MVP.

## Deferred Data Concerns

- Multi-user ownership.
- Cloud sync conflict resolution.
- Offline-native sync queues.
- AI-generated recommendation history.
- Payment, subscription, or marketplace records.
