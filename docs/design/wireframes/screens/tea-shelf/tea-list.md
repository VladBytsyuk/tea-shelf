# Tea List Layout

Status: Approved for Implementation
Version: MVP-001
Layout Version: LAYOUT-001

## Purpose

Show active teas and support quick selection, filtering, creation, and archive access.

## Layout

- Header: title "Tea Shelf", primary action "Add tea", secondary link "Archived teas".
- Controls: search, type filter, availability filter, favorites filter, clear filters when filters are active.
- Body: active tea rows/cards showing name, type, remaining quantity, availability label, favorite control, and concise metadata.
- Row actions: open detail by row/card activation; favorite is directly toggleable; archive remains in detail to avoid accidental list removal.

## Responsive Behavior

- Mobile: filters stack below header; tea cards use one column; metadata wraps under name; primary action remains near title.
- Tablet: filters may use a two-row toolbar; cards remain one or two columns depending on available width.
- Desktop: list may be paired with a detail preview only if a full detail route remains available.

## States

- First-use empty state.
- Filtered-empty state.
- Unavailable tea state.
- Active filters state.

## Acceptance Coverage

- AC-TEA-001
- AC-TEA-005
- AC-TEA-006
- AC-TEA-009
- AC-TEA-010
- AC-X-001
