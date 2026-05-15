# Accessibility Requirements

Status: Draft  
Version: MVP-001

## Scope

Accessibility applies to Tea Shelf, Teaware Shelf, Brew Timer, and Session History MVP flows.

## Requirements

- Core flows must be keyboard navigable.
- Focus states must be visible.
- Color must not be the only indicator for timer state, favorite state, or availability.
- Form fields must have clear labels.
- Error messages must explain what needs correction.
- Interactive controls must have adequate touch targets.
- Timer information must be readable without relying on animation.
- Responsive layouts must avoid overlapping text and controls.
- Pages must use semantic landmarks and heading order.
- Form errors must be associated with their fields.
- Dialogs and confirmations must trap focus while open and restore focus when closed.
- Timer state changes must be announced through an appropriate live region when useful.
- Reduced motion preferences must be respected.
- Text and meaningful UI controls must meet WCAG AA contrast targets.
- Touch targets should be at least 44 by 44 CSS pixels unless platform constraints require otherwise.
- Favorite, archive, restore, and availability controls must have accessible names.

## QA Coverage

QA must validate keyboard navigation, focus order, contrast, timer readability, and responsive layout behavior.
