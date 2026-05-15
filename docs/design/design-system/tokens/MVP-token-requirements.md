# MVP Design Token Requirements

Status: Draft  
Version: MVP-001

## Required Token Groups

- Color tokens
- Typography tokens
- Spacing tokens
- Radius tokens
- Border tokens
- Shadow tokens
- Motion tokens
- State tokens

## Spacing Requirements

- Use regulated spacing across forms, lists, panels, and timer surfaces.
- Preserve comfortable touch targets on mobile.
- Avoid nested card layouts.
- Define a scale before implementation, with common steps for compact list rows, form groups, page gutters, and timer controls.

## Radius Requirements

- Cards and panels should remain restrained.
- Use larger radius only when justified by the design system.
- Default card and panel radius should not exceed 8px unless a later design decision changes it.

## Motion Requirements

- Motion should support timer state and transitions without becoming decorative noise.
- Reduced motion preferences must be respected where applicable.
- Motion durations should be short and predictable for state transitions.

## Semantic Token Requirements

- Background, surface, surface-muted.
- Text, text-muted, text-inverse.
- Border, focus-ring.
- Action-primary, action-secondary, action-danger.
- State-success, state-warning, state-error, state-unavailable, state-archived.
- Timer-running, timer-paused, timer-complete.
