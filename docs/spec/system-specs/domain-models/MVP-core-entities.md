# MVP Core Entity Definitions

Status: Approved for Implementation
Version: MVP-001

## Tea

Represents a tea owned by the user.

Fields:

- ID
- Name
- Type
- Brand
- Region
- Year
- Original weight
- Remaining quantity
- Notes
- Favorite flag
- Availability status
- Lifecycle status
- Created timestamp
- Updated timestamp

Rules:

- Remaining quantity cannot be negative.
- Original weight and remaining quantity use grams.
- Availability status is derived from remaining quantity.
- Lifecycle status is active or archived.
- Required fields are ID, name, type, original weight, remaining quantity, lifecycle status, created timestamp, and updated timestamp.
- AI tasting metadata is excluded.

## Teaware

Represents a teaware item owned by the user.

Fields:

- ID
- Name
- Category
- Material
- Volume
- Purpose
- Supported brewing methods
- Notes
- Lifecycle status
- Created timestamp
- Updated timestamp

Rules:

- Teaware may be used in zero or many sessions.
- Volume uses milliliters.
- Lifecycle status is active or archived.
- Required fields are ID, name, category, material, volume, lifecycle status, created timestamp, and updated timestamp.
- Marketplace and purchase metadata are excluded.

## BrewSequence

Represents a brewing sequence used by timer setup or saved session history.

Fields:

- ID
- Tea reference
- Optional teaware compatibility
- Water temperature
- Tea weight
- Water volume
- Ordered brew steps
- Created timestamp
- Updated timestamp

Rules:

- BrewSequence is a conceptual/session-sequence model for MVP.
- Standalone recipe management and recipe favorites are deferred.
- Recipes or sequences may be repeated through saved sessions.
- MVP may store sequences embedded in sessions instead of as separately managed records.
- AI optimization fields are excluded.

## BrewStep

Represents one step in a brewing sequence.

Fields:

- ID
- Step number
- Duration
- Temperature note
- Instruction note

Rules:

- Duration uses seconds.
- Step number must be stable within a sequence.
- Temperature uses Celsius when specified.

## BrewSession

Represents a conducted ceremony or brewing attempt.

Fields:

- ID
- Tea used
- Optional teaware used
- Sequence used or custom sequence
- Started timestamp
- Completed timestamp
- Steeps completed
- Session notes
- Lifecycle status
- Tea snapshot
- Teaware snapshot
- Sequence snapshot

Rules:

- A session must reference a tea or be explicitly marked custom.
- A saved session can be repeated as a new session.
- Lifecycle status is active or archived.
- Saved sessions must preserve tea, teaware, and sequence snapshots.
- Editing or archiving source tea or teaware does not mutate historical session snapshots.

## SessionNote

Represents optional user reflection on a session.

Fields:

- ID
- Experience note
- Adjustments
- Repeat intent
- Created timestamp

Rules:

- MVP supports zero or more notes per session.
- Notes are private user data.
- Implementations may store notes inline on BrewSession unless separate note records reduce complexity.

## Deferred Entity Areas

- User account and profile ownership.
- Cloud sync metadata.
- Knowledge article content.
- AI recommendation context.
- Marketplace and commerce data.
