# Button

Status: Ready for Implementation Planning
Version: MVP-001

## Purpose

Trigger primary, secondary, destructive, or low-emphasis actions.

## Anatomy

1. Optional leading icon.
2. Text label.
3. Optional loading indicator.

## Layout

| Variant | Height | Padding | Gap | Radius | Border |
| --- | ---: | --- | ---: | ---: | --- |
| Compact | 32px | 0 12px | 8px | 6px | 1px |
| Default | 40px | 0 16px | 8px | 6px | 1px |
| Large | 48px | 0 20px | 8px | 6px | 1px |
| Full-width mobile | 48px | 0 20px | 8px | 6px | 1px |

## Typography

- Compact: `type.body-sm`, weight 600.
- Default and large: `type.body`, weight 600.
- Text stays on one line; if it cannot fit, the button becomes full width or the label wraps only on mobile full-width actions.

## Colors

| Variant | Background | Text | Border | Hover |
| --- | --- | --- | --- | --- |
| Primary | `action.primary` | `text.inverse` | `action.primary` | `action.primary-hover` |
| Secondary | `surface.default` | `action.secondary` | `border.default` | `surface.muted` |
| Ghost | `transparent` | `text.secondary` | `transparent` | `surface.muted` |
| Destructive | `action.danger` | `text.inverse` | `action.danger` | `#9F2F26` |

## States

- Focus: global focus ring.
- Active: reduce visual brightness or translate 1px downward without changing layout.
- Loading: preserve width; show loading indicator before label.
- Disabled: `state.opacity.disabled`; no hover or active treatment.

## Usage

- Primary actions: add tea, save tea, start timer, save session, repeat session.
- Secondary actions: cancel, clear filters, edit, restore.
- Destructive actions: archive record, cancel active session, replace imported data.
- Only one primary filled button may dominate a screen region.

## Accessibility

- Visible label names the action.
- Loading state exposes busy status.
- Destructive actions that lose progress require confirmation.
