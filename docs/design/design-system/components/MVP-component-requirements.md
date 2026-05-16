# MVP Component Specifications

Status: Approved for Implementation
Version: MVP-001

## Purpose

This document is the index and shared rule set for Tea Shelf MVP components. Each component has its own canonical specification file under this directory.

The implementation target for these component specifications is `design-system-impl`. MVP feature screens must compose shared primitives from that library instead of duplicating component behavior locally.

Components must use tokens from:

- `docs/design/design-system/color-system.md`
- `docs/design/design-system/typography.md`
- `docs/design/design-system/tokens/MVP-token-requirements.md`

## Global Component Rules

### Library Boundary

- `design-system-impl` owns shared component contracts, token mappings, variants, dimensions, states, and accessibility behavior.
- MVP web uses React components and CSS token exports from `design-system-impl`.
- Future clients must preserve these contracts through the same library or a platform-specific adapter.
- Feature screens may compose shared primitives and add screen layout, but must not fork shared button, field, dialog, navigation, timer-control, or validation behavior.
- External heavy UI kits must not replace this component library in MVP.

### Box Model

- All components use `box-sizing: border-box`.
- Controls use fixed heights from size tokens unless explicitly defined otherwise.
- Text wraps by default unless a component specifies truncation.
- Layout-affecting state changes must preserve component width and height.

### Shared Dimensions

| Use | Value |
| --- | ---: |
| Compact control height | 32px |
| Default control height | 40px |
| Large/mobile primary control height | 48px |
| Minimum practical touch target | 44px by 44px |
| Default icon size | 20px |
| Metadata icon size | 16px |
| Timer action icon size | 24px |
| Default control radius | 6px |
| Card/panel/dialog radius | 8px |
| Badge/chip radius | 999px |

### Shared Spacing

| Relationship | Value |
| --- | ---: |
| Icon to label | 8px |
| Label to field | 6px |
| Field to helper/error text | 6px |
| Inline metadata items | 8px |
| Row internal gap | 12px |
| Card internal gap | 12px |
| Form group gap | 16px |
| Section gap | 24px |
| Dialog content gap | 16px |
| Dialog action gap | 12px |

### Shared Focus

- Keyboard focus uses `2px solid focus.ring`.
- Default focus offset is 2px.
- Inset focus is allowed only when outline offset would be clipped.
- Focus style must be visible on `bg.default`, `surface.default`, `surface.muted`, and `surface.selected`.

### Shared Loading And Disabled Behavior

- Loading controls keep their normal width and height.
- Loading buttons show a spinner or progress mark before the label; label remains visible unless the button is icon-only.
- Disabled controls use `state.opacity.disabled`, keep readable labels, and do not use hover styling.
- Disabled controls that need explanation must be paired with helper text near the control.

### Shared Icon Rules

- Use familiar icons for favorite, edit, archive, restore, pause, resume, next, complete, and close actions.
- Icon-only controls require accessible names.
- Icons do not replace visible text for unfamiliar actions.
- Icons inherit the component text color unless state-specific color is defined.

## Component Files

### Actions

- [Button](actions/button.md)
- [Icon Button](actions/icon-button.md)

### Forms

- [Field Group](forms/field-group.md)
- [Text Input](forms/text-input.md)
- [Number Input With Unit](forms/number-input-with-unit.md)
- [Textarea](forms/textarea.md)
- [Select](forms/select.md)
- [Method Selector / Multi-Select Chips](forms/method-selector-multi-select-chips.md)
- [Checkbox / Toggle](forms/checkbox-toggle.md)
- [Validation Message](forms/validation-message.md)

### Feedback And Empty States

- [Inline Alert](feedback/inline-alert.md)
- [Empty State](feedback/empty-state.md)
- [Filtered Empty State](feedback/filtered-empty-state.md)

### Data Display

- [Badge](data-display/badge.md)
- [Metadata Group](data-display/metadata-group.md)
- [Divider](data-display/divider.md)

### Product Components

- [Tea List Row / Card](product/tea-list-row-card.md)
- [Stock Indicator](product/stock-indicator.md)
- [Favorite Control](product/favorite-control.md)
- [Teaware List Row / Card](product/teaware-list-row-card.md)
- [Brewing Method Chip](product/brewing-method-chip.md)

### Timer Components

- [Timer Display](timer/timer-display.md)
- [Timer Controls](timer/timer-controls.md)
- [Steep List](timer/steep-list.md)
- [Sequence Editor](timer/sequence-editor.md)
- [Progress Indicator](timer/progress-indicator.md)

### Session Components

- [Session History Row](session/session-history-row.md)
- [Session Detail Snapshot](session/session-detail-snapshot.md)
- [Repeat Session Panel](session/repeat-session-panel.md)

### Navigation

- [Primary Navigation](navigation/primary-navigation.md)

### Dialogs And Overlays

- [Confirmation Dialog](overlays/confirmation-dialog.md)
- [Save Failed State](overlays/save-failed-state.md)
- [Import Replacement Confirmation](overlays/import-replacement-confirmation.md)
