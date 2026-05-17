# Color System

Status: Approved for Implementation
Version: MVP-001
Implemented Version: DS-IMPL-001

## Purpose

The color system supports calm tea practice, readable inventory management, timer clarity, and privacy-respecting data workflows. Colors are semantic first: implementation should use token names, not raw hex values, inside components.

## Core Palette

| Token | Hex | Usage |
| --- | --- | --- |
| `color.tea-jade.700` | `#24594B` | Primary hover, strong calm emphasis. |
| `color.tea-jade.600` | `#2F6F5E` | Primary action, focus identity, running timer. |
| `color.tea-jade.100` | `#DDEBE5` | Subtle primary background, selected quiet states. |
| `color.tea-brown.800` | `#3B2F22` | Strong warm text and grounding accents. |
| `color.tea-brown.600` | `#7A633E` | Secondary action and metadata emphasis. |
| `color.parchment.100` | `#F7F4EE` | App background. |
| `color.parchment.200` | `#EFE8DD` | Muted background and inactive surface. |
| `color.bamboo.500` | `#8A7A3E` | Sparse secondary highlight. |
| `color.ceremony-red.600` | `#B83A2E` | Error, destructive action, rare ceremonial emphasis. |
| `color.blue-clay.600` | `#4E6F9E` | Completed timer state and neutral completion emphasis. |
| `color.gray.900` | `#1F2521` | Primary text. |
| `color.gray.700` | `#3F4742` | Secondary strong text. |
| `color.gray.600` | `#5C665F` | Secondary text. |
| `color.gray.500` | `#7C847E` | Muted text. |
| `color.gray.300` | `#D8D1C5` | Borders. |
| `color.white` | `#FFFFFF` | Primary surface. |

## Semantic Tokens

| Token | Value | Required Usage |
| --- | --- | --- |
| `bg.default` | `#F7F4EE` | Application background. |
| `bg.subtle` | `#EFE8DD` | Muted page bands, inactive areas. |
| `surface.default` | `#FFFFFF` | Forms, dialogs, repeated item cards, timer panels. |
| `surface.muted` | `#F3F0EA` | Read-only metadata groups and quiet callouts. |
| `surface.selected` | `#DDEBE5` | Selected filter, selected list row, active route background. |
| `text.primary` | `#1F2521` | Main content. |
| `text.secondary` | `#5C665F` | Metadata and secondary labels. |
| `text.muted` | `#7C847E` | Placeholder-level text and timestamps. |
| `text.inverse` | `#FFFFFF` | Text on dark primary/destructive fills. |
| `border.default` | `#D8D1C5` | Standard field, card, and divider borders. |
| `border.strong` | `#B8AFA1` | Active fields, separators needing emphasis. |
| `focus.ring` | `#2F6F5E` | Keyboard focus outline. |
| `action.primary` | `#2F6F5E` | Main positive action. |
| `action.primary-hover` | `#24594B` | Primary hover/pressed. |
| `action.secondary` | `#7A633E` | Secondary action text or outline. |
| `action.danger` | `#B83A2E` | Destructive action. |
| `state.success` | `#2E7D58` | Successful save, available completion. |
| `state.warning` | `#A66A1F` | Paused timer, caution, manual review. |
| `state.error` | `#B83A2E` | Validation and save failures. |
| `state.unavailable` | `#6B7280` | Unavailable tea. |
| `state.archived` | `#8A8178` | Archived records. |
| `timer.running` | `#2F6F5E` | Running timer state. |
| `timer.paused` | `#A66A1F` | Paused timer state. |
| `timer.complete` | `#4E6F9E` | Steep complete or session complete. |

## Usage Rules

- Primary action fill uses `action.primary`; only one filled primary action should dominate a screen region.
- Destructive actions use `action.danger` and must include text or icon semantics that identify the risk.
- Availability, archived, favorite, and timer states must include text, icon, or label, not color alone.
- Deep red is reserved for destructive, error, or high-risk confirmation states.
- Avoid decorative gradients and large saturated color blocks.
- Avoid making the product read as a one-note beige/brown interface; use jade, white, gray, and blue-clay completion states to balance warmth.

## Contrast Requirements

- Body text and meaningful controls must meet WCAG AA contrast.
- Disabled controls may use reduced contrast only when non-interactive and not required for comprehension.
- Focus rings must remain visible against white, parchment, muted, and selected surfaces.
