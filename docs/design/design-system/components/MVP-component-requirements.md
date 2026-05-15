# MVP Component Requirements

Status: Draft  
Version: MVP-001

## Atoms

- Button
- Icon button
- Text input
- Number input
- Select
- Checkbox or toggle
- Badge
- Timer display
- Progress indicator

## Molecules

- Tea form field group
- Teaware form field group
- Filter bar
- Favorite control
- Quantity control
- Steep control
- Session note input

## Organisms

- Tea list
- Tea detail
- Teaware list
- Teaware detail
- Brew timer panel
- Session history list
- Session repeat panel

## Requirements

- Components must be responsive.
- Controls must have stable dimensions where layout shifts would harm timer or catalog usability.
- Mobile controls must be easy to reach and read.
- Component states must include empty, loading if applicable, error, disabled, active, complete, and unavailable states.
- Form components must include validation, dirty, saving, saved, and save-failed states.
- Archive and restore actions must support confirmation dialog states.
- Timer controls must include setup, running, paused, steep complete, completed, canceled, and save-failed states.
- Favorite controls must expose selected and unselected states with accessible names.
- Lists must support empty, filtered-empty, active, archived, and unavailable item states.

## Variant Requirements

- Buttons: primary, secondary, destructive, icon-only, disabled, loading.
- Inputs: text, number, select, multi-select or method selector, notes textarea.
- Badges: favorite, unavailable, archived, custom session.
- Dialogs: archive confirmation, cancel session confirmation, save failure.
