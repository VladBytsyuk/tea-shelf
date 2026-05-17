# Timer Controls

Status: Approved for Implementation
Version: MVP-001
Implemented Version: DS-IMPL-001

## Purpose

Perform timer transitions.

## Layout

- Mobile: horizontal wrap or two-column grid with 12px gap.
- Primary timer action height: 48px.
- Secondary timer actions height: 40px.
- Cancel action separated from primary flow by at least 12px.

## Required Controls

- Start.
- Pause.
- Resume.
- Next steep.
- Complete session.
- Cancel.

## Rules

- Current valid primary action is visually dominant.
- Unavailable actions are hidden or disabled consistently per implementation, but must not confuse keyboard order.
- Cancel active session opens confirmation dialog.
