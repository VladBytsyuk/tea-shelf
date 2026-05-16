# Primary Navigation

Status: Ready for Implementation Planning
Version: MVP-001

## Purpose

Move between MVP modules.

## Destinations

- Tea Shelf.
- Teaware Shelf.
- Brew Timer.
- Session History.

## Layout

- Desktop/tablet: horizontal or side navigation selected during implementation; item height 40px.
- Mobile: compact navigation with all destinations reachable without horizontal scrolling.
- Item padding: 0 12px.
- Icon-label gap: 8px.
- Active item uses `surface.selected` plus text state.

## Rules

- Deferred modules must not appear.
- Brew Timer must not be buried behind deep menus on mobile.
- Active route is not indicated by color alone.
