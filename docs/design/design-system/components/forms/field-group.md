# Field Group

Status: Ready for Implementation Planning
Version: MVP-001

## Purpose

Wrap one label, one control, helper text, and error text.

## Layout

- Display: vertical stack.
- Label to control gap: 6px.
- Control to helper/error gap: 6px.
- Field group bottom margin: 16px inside forms.
- Error text appears below helper text and above following fields.

## Typography

- Label: `type.body-sm`, weight 600, `text.primary`.
- Helper: `type.caption`, `text.secondary`.
- Error: `type.caption`, `state.error`.

## Accessibility

- Label is programmatically associated with control.
- Helper and error are associated through descriptions.
- Required state is text-visible, not color-only.
