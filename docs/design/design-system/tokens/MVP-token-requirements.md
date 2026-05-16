# MVP Design Tokens

Status: Ready for Implementation Planning
Version: MVP-001

## Purpose

Tokens define the smallest reusable visual decisions for Tea Shelf MVP. Implementation must map these tokens into `design-system-impl` before component work starts.

Every Tea Shelf client must consume token values through `design-system-impl` or a platform-specific adapter that preserves the same semantic token names.

## Color Tokens

Use the semantic tokens from `docs/design/design-system/color-system.md`. Components must reference semantic tokens such as `action.primary`, `surface.default`, or `state.error` instead of raw palette tokens.

## Spacing Tokens

| Token | Value | Usage |
| --- | ---: | --- |
| `space.0` | 0px | Reset spacing. |
| `space.1` | 4px | Tight icon/text gaps, compact internal spacing. |
| `space.2` | 8px | Badge padding, close label/helper gaps. |
| `space.3` | 12px | Compact row internal spacing. |
| `space.4` | 16px | Mobile gutters, form field spacing. |
| `space.5` | 20px | Panel internal spacing. |
| `space.6` | 24px | Section gaps, tablet gutters. |
| `space.8` | 32px | Desktop gutters, major groups. |
| `space.10` | 40px | Large section separation. |
| `space.12` | 48px | Top-level page separation. |

## Layout Tokens

| Token | Value | Usage |
| --- | ---: | --- |
| `layout.mobile-min` | 360px | Minimum supported viewport width. |
| `layout.tablet` | 768px | Tablet layout breakpoint. |
| `layout.desktop` | 1024px | Desktop layout breakpoint. |
| `layout.content-max` | 1180px | Main page content max width. |
| `layout.reading-max` | 760px | Detail and text-heavy content max width. |
| `layout.timer-max` | 720px | Timer focus area max width. |
| `layout.mobile-gutter` | 16px | Mobile page gutter. |
| `layout.tablet-gutter` | 24px | Tablet page gutter. |
| `layout.desktop-gutter` | 32px | Desktop page gutter. |

## Radius Tokens

| Token | Value | Usage |
| --- | ---: | --- |
| `radius.none` | 0px | Flush dividers or square media if needed. |
| `radius.sm` | 4px | Small controls, compact chips. |
| `radius.md` | 6px | Inputs and buttons. |
| `radius.lg` | 8px | Cards, panels, dialogs. |
| `radius.pill` | 999px | Badges and compact status chips only. |

Cards and panels must not exceed 8px radius in MVP.

## Border Tokens

| Token | Value | Usage |
| --- | --- | --- |
| `border.width.default` | 1px | Inputs, cards, dividers. |
| `border.width.focus` | 2px | Focus outline. |
| `border.color.default` | `border.default` | Standard border. |
| `border.color.strong` | `border.strong` | Active or emphasized border. |
| `border.color.error` | `state.error` | Invalid field border. |

## Shadow Tokens

| Token | Value | Usage |
| --- | --- | --- |
| `shadow.none` | `none` | Default for most surfaces. |
| `shadow.sm` | `0 1px 2px rgba(31, 37, 33, 0.08)` | Raised controls and subtle sticky areas. |
| `shadow.md` | `0 8px 24px rgba(31, 37, 33, 0.12)` | Dialogs and overlays. |

Use shadows sparingly. Borders are preferred for everyday structure.

## Motion Tokens

| Token | Value | Usage |
| --- | ---: | --- |
| `motion.duration.fast` | 80ms | Pressed feedback. |
| `motion.duration.base` | 120ms | Hover/focus/state changes. |
| `motion.duration.emphasis` | 180ms | Dialog entry and important state transition. |
| `motion.easing.standard` | `cubic-bezier(0.2, 0, 0, 1)` | Default easing. |

If reduced motion is enabled, non-essential transitions must be removed or reduced to immediate state changes.

## Size Tokens

| Token | Value | Usage |
| --- | ---: | --- |
| `size.control-sm` | 32px | Compact secondary controls. |
| `size.control-md` | 40px | Standard input and button height. |
| `size.control-lg` | 48px | Primary mobile actions and timer controls. |
| `size.touch-target` | 44px | Minimum practical touch target. |
| `size.icon-sm` | 16px | Inline metadata icon. |
| `size.icon-md` | 20px | Standard button icon. |
| `size.icon-lg` | 24px | Timer and primary navigation icon. |

## State Tokens

| Token | Value | Usage |
| --- | --- | --- |
| `state.opacity.disabled` | `0.55` | Disabled non-critical controls. |
| `state.opacity.busy` | `0.72` | Pending save or loading state. |
| `state.outline.focus` | `2px solid focus.ring` | Keyboard focus. |
| `state.outline.error` | `1px solid state.error` | Invalid fields. |

Disabled controls must still communicate their label and purpose.
