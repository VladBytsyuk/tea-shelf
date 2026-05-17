# MVP Design System

Status: Approved for Implementation
Version: MVP-001
Implemented Version: DS-IMPL-001
Owner: UI/UX Designer

## Purpose

This design system defines the visual language, interaction rules, component behavior, and accessibility requirements for Tea Shelf / Чайная Полка MVP.

The implementation library for these decisions is `design-system-impl`. Every Tea Shelf client must consume shared tokens, primitives, and component behavior from that library instead of reimplementing common UI behavior per screen.

The system exists to make the product feel calm, focused, and practical for Chinese tea inventory, teaware context, guided multi-steep brewing, and repeatable session memory. It is an implementation-ready documentation source, not a marketing style guide.

## Product-Aligned Design Principles

| Principle | Design Meaning | Required UI Behavior |
| --- | --- | --- |
| Protect ritual focus | Brewing screens must reduce distraction and keep timing obvious. | Timer screens prioritize current steep, remaining time, and next action above secondary metadata. |
| Calm utility | The interface should feel quiet and trustworthy, not decorative or gamified. | Use restrained color, stable spacing, clear labels, and minimal motion. |
| Personal record | Collection and session data are private user-owned records. | Avoid social, marketplace, public-profile, or community visual patterns in MVP. |
| Tea-specific structure | The UI must make tea, teaware, stock, brewing methods, and steep sequence understandable. | Use structured metadata, units, badges, and grouped fields. |
| Inspectable workflow | Users should understand what the app is doing and what will be saved. | Show explicit state labels, validation, snapshots, and save/retry behavior. |

## Visual Direction

- Style: Chinese modern minimalism.
- Tone: calm, focused, warm, precise, and practical.
- Density: operational and scannable, with enough breathing room for repeated use.
- Primary surfaces: lists, forms, detail views, timer panels, history records, dialogs.
- Avoid: decorative gradients, nested cards, ornamental patterns, oversized hero sections, social feeds, marketplace cards, gamified badges, and excessive single-hue palettes.

## Foundation References

- Colors: `docs/design/design-system/color-system.md`
- Typography: `docs/design/design-system/typography.md`
- Tokens: `docs/design/design-system/tokens/MVP-token-requirements.md`
- Components and exact component layouts: `docs/design/design-system/components/MVP-component-requirements.md`
- Accessibility: `docs/design/design-system/accessibility.md`
- Screen behavior: `docs/design/wireframes/MVP-screen-specifications.md`

## Implementation Library

`design-system-impl` is the internal shared design-system implementation library.

MVP expectations:

- Initial target is React/web components and CSS token exports.
- Future clients must use the same token names, component contracts, accessibility behavior, and interaction rules through this library or a platform-specific adapter.
- Feature screens compose shared primitives from the library and may add screen-specific layout only when the behavior is not shared.
- Shared controls such as buttons, icon buttons, fields, validation messages, badges, alerts, dialogs, navigation, and timer controls must not be forked locally.
- Third-party heavy UI kits are not the design-system implementation for MVP.

## Layout System

### Breakpoints

| Breakpoint | Width | Layout Rule |
| --- | ---: | --- |
| Mobile | 360px+ | Single-column screens, stacked controls, compact primary navigation. |
| Tablet | 768px+ | Wider forms, optional list/detail split where content remains readable. |
| Desktop | 1024px+ | Constrained content width, denser lists, side-by-side metadata where helpful. |

### Page Widths

- Mobile page gutter: 16px.
- Tablet page gutter: 24px.
- Desktop page gutter: 32px.
- Main content max width: 1180px.
- Reading/detail content max width: 760px.
- Timer focus content max width: 720px.

### Surface Rules

- Page sections are not cards.
- Cards are only for repeated list items, dialogs, and genuinely framed tools.
- Do not place cards inside cards.
- Use stable dimensions for timer controls, icon buttons, status badges, and list rows where state changes could cause layout shift.

## Interaction System

### Primary Actions

- Use one primary action per screen region.
- Primary action examples: add tea, save tea, start timer, save session, repeat session.
- Secondary actions examples: cancel, clear filters, edit, restore.
- Destructive actions examples: archive record, cancel active session, replace imported data.

### State Feedback

- Saving states keep entered values visible.
- Save failure states preserve all user-entered values and offer retry.
- Archived and unavailable states use text plus color/icon treatment.
- Timer states must be shown as text, not color alone.

### Motion

- Default transition duration: 120ms.
- Emphasis transition duration: 180ms.
- Use motion only for state clarity, such as button feedback, dialog entrance, or timer state transition.
- Respect reduced motion preferences.
- Do not use decorative ambient animation.

## Content Style

- Labels must be direct and functional.
- Empty states must be action-oriented and short.
- Do not use in-app tutorial prose where a clear label or action is enough.
- Do not reference AI, marketplace, social, academy, or account features in MVP UI.
- Browser timer limitation copy must not imply background, lock-screen, push notification, or native mobile guarantees.

## Implementation Readiness Checklist

- Use exact color, spacing, typography, radius, border, shadow, and state tokens.
- Implement and consume those tokens through `design-system-impl`.
- Use `docs/design/design-system/components/MVP-component-requirements.md` as the source of truth for component anatomy, dimensions, spacing, variants, states, and accessibility.
- Use semantic component variants instead of one-off styling.
- Check every MVP screen at 360px, 768px, and 1024px.
- Verify every icon-only control has an accessible name.
- Verify every form field has label, helper/error behavior, and disabled/submitting states.
- Verify timer controls remain reachable on mobile.
- Verify no deferred module appears as required MVP navigation or UI.
