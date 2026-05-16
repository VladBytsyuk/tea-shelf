# Web Platform Guidelines

Status: Approved for Implementation
Version: MVP-001

## Supported Viewports

- Mobile: 360px width and above.
- Tablet: 768px width and above.
- Desktop: 1024px width and above.

## Navigation

- MVP navigation includes Tea Shelf, Teaware Shelf, Brew Timer, and Session History.
- Deferred modules must not appear as primary navigation.
- Mobile navigation must keep Brew Timer reachable without deep nesting.

## Layout

- Mobile layouts use single-column forms and lists.
- Tablet and desktop may use list/detail or wider form layouts when space allows.
- Lists must handle long tea names, Russian labels, metadata, and badges without overlap.
- Timer controls should remain visible and reachable on mobile during active sessions.

## Forms

- Required fields must be visibly indicated.
- Field errors must appear near the affected field.
- Save failure must keep entered values.
- Number fields must show expected units where applicable.

## Responsive QA

Validate mobile, tablet, and desktop layouts for:

- Tea list and tea form.
- Teaware list and teaware form.
- Timer setup and active timer.
- Session history list and detail.
- Archive and cancel confirmation dialogs.
