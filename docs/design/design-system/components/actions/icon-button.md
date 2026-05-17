# Icon Button

Status: Approved for Implementation
Version: MVP-001
Implemented Version: DS-IMPL-001

## Purpose

Provide compact actions with familiar symbols.

## Anatomy

1. Icon centered in square hit area.
2. Optional visually hidden label.
3. Optional selected indicator for toggle actions.

## Layout

| Size | Box | Icon | Radius |
| --- | ---: | ---: | ---: |
| Compact | 32px | 16px | 6px |
| Default | 40px | 20px | 6px |
| Timer | 48px | 24px | 6px |

## Colors

- Default background: transparent.
- Hover background: `surface.muted`.
- Selected background: `surface.selected`.
- Destructive icon color: `action.danger`.

## States

- Favorite selected: selected background plus visible selected icon state.
- Archive/restore: action-specific icon with accessible name.
- Disabled: opacity token and no pointer action.

## Accessibility

- Required accessible name, such as "Favorite tea", "Archive tea", "Pause timer".
- Toggle buttons expose selected/pressed state.
