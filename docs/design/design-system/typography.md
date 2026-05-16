# Typography

Status: Ready for Implementation Planning
Version: MVP-001

## Purpose

Typography must make tea inventory, teaware metadata, brewing sequence, timer state, and session history easy to scan across English and Russian text.

## Font Families

| Token | Value | Usage |
| --- | --- | --- |
| `font.family.sans` | `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` | All standard UI text. |
| `font.family.numeric` | `ui-monospace, "SFMono-Regular", Menlo, Consolas, monospace` | Timer numerals only if tabular system numerals are insufficient. |

Implementation must enable `font-variant-numeric: tabular-nums` for timer and numeric metadata.

## Type Scale

| Token | Size | Line Height | Weight | Usage |
| --- | ---: | ---: | ---: | --- |
| `type.caption` | 12px | 16px | 400 | Units, timestamps, compact metadata. |
| `type.caption-strong` | 12px | 16px | 600 | Badge labels, compact state labels. |
| `type.body-sm` | 14px | 20px | 400 | Secondary text, helper text, metadata. |
| `type.body` | 16px | 24px | 400 | Default body, inputs, list content. |
| `type.body-strong` | 16px | 24px | 600 | Item names, primary field values. |
| `type.heading-sm` | 18px | 24px | 600 | Card/list section headings. |
| `type.heading-md` | 20px | 28px | 650 | Page section headings. |
| `type.heading-lg` | 24px | 32px | 700 | Page titles. |
| `type.timer-md` | 32px | 40px | 700 | Compact timer display. |
| `type.timer-lg` | 40px | 48px | 700 | Primary active timer display. |

## Usage Rules

- Page titles use `type.heading-lg`.
- Dense panel headings use `type.heading-sm` or `type.heading-md`, never hero-scale typography.
- List item names use `type.body-strong`.
- Metadata labels and values use `type.body-sm` or `type.caption`.
- Timer numerals use `type.timer-lg` on active timer screens and `type.timer-md` in compact contexts.
- Do not scale font size with viewport width.
- Letter spacing is `0`; do not use negative letter spacing.
- Long tea names, Russian labels, and notes must wrap instead of overlapping controls.
- Use sentence case for labels and actions unless product names require otherwise.

## Content Hierarchy

| UI Surface | Primary Text | Secondary Text | Metadata |
| --- | --- | --- | --- |
| Tea list row | Tea name | Type, origin, brand | Stock, favorite, availability |
| Teaware row | Teaware name | Category, material | Volume, brewing methods |
| Timer screen | Remaining time | Current steep and state | Temperature, next action |
| Session history row | Tea/custom label | Date/time | Teaware, steep count, repeat status |

## Accessibility

- Form labels are always visible.
- Placeholder text must not be the only label.
- Error text uses clear correction language.
- Timer text must be readable without animation, sound, or color.
