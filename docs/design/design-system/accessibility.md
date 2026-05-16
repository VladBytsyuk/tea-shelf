# Accessibility Requirements

Status: Approved for Implementation
Version: MVP-001

## Purpose

Accessibility is required for all Tea Shelf MVP flows. The app must support keyboard use, readable timer states, form correction, responsive layouts, and non-color state communication.

## Baseline Standard

- Target WCAG 2.2 AA for text, controls, focus, and interactive states.
- Use semantic HTML before ARIA.
- ARIA is allowed only when semantic HTML cannot express the required state or relationship.

## Keyboard Requirements

- All core flows must be usable with keyboard only.
- Tab order follows visual order.
- Focus must be visible on every interactive element.
- Focus must not enter hidden archived panels, closed dialogs, or collapsed menus.
- Dialogs must trap focus while open and restore focus to the triggering control when closed.
- Escape closes non-destructive dialogs; destructive cancellation still requires explicit confirmation when user progress would be lost.

## Form Accessibility

- Every field has a visible label.
- Helper text and error text are programmatically associated with the field.
- Required fields are indicated with text or accessible state, not color alone.
- Invalid fields expose invalid state to assistive technology.
- Save failure summary appears near the submit action and preserves field-level errors.
- Number inputs show units such as grams, milliliters, seconds, or Celsius where applicable.

## Timer Accessibility

- Timer state is always visible as text: Setup, Running, Paused, Steep complete, Completed, Canceled, or Save failed.
- Remaining time uses tabular numerals and does not shift adjacent controls.
- State changes are announced through a polite live region for start, pause, resume, steep complete, completed, and save failed.
- Countdown ticks are not announced continuously.
- Steep completion must be perceivable without sound, color, or animation.
- Timer controls must remain reachable on mobile and keyboard navigable.

## Non-Color Indicators

These states must use text, icon, or shape in addition to color:

- Favorite selected/unselected.
- Tea unavailable.
- Record archived.
- Timer running, paused, complete, save failed.
- Validation error.
- Destructive action.
- Current route or selected filter.

## Touch And Pointer Requirements

- Preferred touch target: at least 44 by 44 CSS pixels.
- Icon-only controls use at least `size.control-md` and have accessible names.
- Adjacent destructive and primary actions must have enough spacing to prevent accidental activation.
- Hover-only information is not required to complete any flow.

## Responsive Accessibility

- Text and controls must not overlap at 360px width.
- Long tea names, Russian labels, and metadata wrap or truncate with accessible full text when needed.
- Mobile navigation must expose all MVP destinations without horizontal scrolling.
- Sticky or fixed timer controls must not cover form fields, dialogs, or final actions.

## Contrast Requirements

- Body text and controls meet WCAG AA contrast.
- Focus ring must be visible against `bg.default`, `surface.default`, `surface.muted`, and `surface.selected`.
- Disabled state may reduce contrast but must remain identifiable.

## QA Checklist

- Keyboard-only Tea creation, Teaware creation, Timer completion, Session save, Archive/restore, and Repeat session.
- Screen-reader labels for icon-only favorite, archive, restore, timer, and navigation controls.
- Field-level validation and save failure announcement.
- Dialog focus trap and focus restoration.
- Timer state live-region behavior.
- Responsive no-overlap checks at 360px, 768px, and 1024px.
