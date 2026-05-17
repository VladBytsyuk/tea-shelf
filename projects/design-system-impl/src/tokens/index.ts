// Implements design-system docs version MVP-001 as DS-IMPL-001.
export const DESIGN_SYSTEM_IMPLEMENTED_VERSION = "DS-IMPL-001";
export const DESIGN_SYSTEM_DOCS_VERSION = "MVP-001";

export const designTokens = {
  color: {
    "bg.default": "#F7F4EE",
    "bg.subtle": "#EFE8DD",
    "surface.default": "#FFFFFF",
    "surface.muted": "#F3F0EA",
    "surface.selected": "#DDEBE5",
    "text.primary": "#1F2521",
    "text.secondary": "#5C665F",
    "text.muted": "#7C847E",
    "text.inverse": "#FFFFFF",
    "border.default": "#D8D1C5",
    "border.strong": "#B8AFA1",
    "focus.ring": "#2F6F5E",
    "action.primary": "#2F6F5E",
    "action.primary-hover": "#24594B",
    "action.secondary": "#7A633E",
    "action.danger": "#B83A2E",
    "state.success": "#2E7D58",
    "state.warning": "#A66A1F",
    "state.error": "#B83A2E",
    "state.unavailable": "#6B7280",
    "state.archived": "#8A8178",
    "timer.running": "#2F6F5E",
    "timer.paused": "#A66A1F",
    "timer.complete": "#4E6F9E"
  },
  space: {
    0: "0px",
    1: "4px",
    2: "8px",
    3: "12px",
    4: "16px",
    5: "20px",
    6: "24px",
    8: "32px",
    10: "40px",
    12: "48px"
  },
  layout: {
    "mobile-min": "360px",
    tablet: "768px",
    desktop: "1024px",
    "content-max": "1180px",
    "reading-max": "760px",
    "timer-max": "720px",
    "mobile-gutter": "16px",
    "tablet-gutter": "24px",
    "desktop-gutter": "32px"
  },
  radius: {
    none: "0px",
    sm: "4px",
    md: "6px",
    lg: "8px",
    pill: "999px"
  },
  border: {
    "width.default": "1px",
    "width.focus": "2px"
  },
  shadow: {
    none: "none",
    sm: "0 1px 2px rgba(31, 37, 33, 0.08)",
    md: "0 8px 24px rgba(31, 37, 33, 0.12)"
  },
  motion: {
    "duration.fast": "80ms",
    "duration.base": "120ms",
    "duration.emphasis": "180ms",
    "easing.standard": "cubic-bezier(0.2, 0, 0, 1)"
  },
  size: {
    "control-sm": "32px",
    "control-md": "40px",
    "control-lg": "48px",
    "touch-target": "44px",
    "icon-sm": "16px",
    "icon-md": "20px",
    "icon-lg": "24px"
  },
  type: {
    caption: { fontSize: "12px", lineHeight: "16px", fontWeight: 400 },
    "caption-strong": { fontSize: "12px", lineHeight: "16px", fontWeight: 600 },
    "body-sm": { fontSize: "14px", lineHeight: "20px", fontWeight: 400 },
    body: { fontSize: "16px", lineHeight: "24px", fontWeight: 400 },
    "body-strong": { fontSize: "16px", lineHeight: "24px", fontWeight: 600 },
    "heading-sm": { fontSize: "18px", lineHeight: "24px", fontWeight: 600 },
    "heading-md": { fontSize: "20px", lineHeight: "28px", fontWeight: 650 },
    "heading-lg": { fontSize: "24px", lineHeight: "32px", fontWeight: 700 },
    "timer-md": { fontSize: "32px", lineHeight: "40px", fontWeight: 700 },
    "timer-lg": { fontSize: "40px", lineHeight: "48px", fontWeight: 700 }
  },
  state: {
    "opacity.disabled": "0.55",
    "opacity.busy": "0.72",
    "outline.focus": "2px solid var(--ts-focus-ring)",
    "outline.error": "1px solid var(--ts-state-error)"
  }
} as const;

export type DesignTokens = typeof designTokens;
