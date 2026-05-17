# Timer Setup Layout

Status: Approved for Implementation
Version: MVP-001
Layout Version: LAYOUT-001

## Purpose

Configure a tea or custom brewing session before starting.

## Layout

- Header: title "Brew Timer"; optional source context when launched from tea detail or repeated session.
- Sections: session type, tea selection, optional teaware selection, steep sequence editor, start/cancel actions.
- Tea selection: active teas only by default; selected tea shows availability and remaining quantity.
- Custom path: user can choose custom session without tea or teaware; saved label must read as custom.
- Teaware selection: active teaware only by default.
- Sequence editor: ordered steeps with duration, optional temperature, optional note, add/remove/reorder controls where implemented.

## Validation

- Start is blocked when no steps exist or any duration is non-positive.
- Sequence error appears next to the editor and near start action when needed.

## Responsive Behavior

- Mobile: selection sections and sequence editor stack; primary start action appears after sequence.
- Tablet/desktop: setup may use a two-column layout with selections on one side and sequence editor on the other.

## Acceptance Coverage

- AC-BT-001
- AC-BT-002
- AC-BT-003
- AC-BT-003A
- AC-BT-012
