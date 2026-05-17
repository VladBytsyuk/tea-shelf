# Teaware List Layout

Status: Approved for Implementation
Version: MVP-001
Layout Version: LAYOUT-001

## Purpose

Show active teaware and support filtering, creation, and archive access.

## Layout

- Header: title "Teaware Shelf", primary action "Add teaware", secondary link "Archived teaware".
- Controls: category filter, material filter, brewing method filter, clear filters when active.
- Body: active teaware rows/cards showing name or category label, material, volume, purpose, supported methods, and availability for new sessions.

## Responsive Behavior

- Mobile: filters stack; cards use one column and keep volume visible near the name/category.
- Tablet/desktop: filters may form a compact toolbar; cards may use two columns.

## States

- First-use empty state.
- Filtered-empty state.
- Archived exclusion from active list.

## Acceptance Coverage

- AC-TW-001
- AC-TW-004
- AC-TW-005
- AC-TW-008
- AC-X-001
