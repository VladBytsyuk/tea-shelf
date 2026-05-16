import type { ReactNode } from "react";

export const designTokens = {
  color: {
    surface: "#ffffff",
    text: "#202124",
    accent: "#2f6f4e"
  },
  radius: {
    control: "8px"
  }
} as const;

export function PlaceholderSurface({ children }: { children: ReactNode }) {
  return (
    <section
      style={{
        background: designTokens.color.surface,
        border: `1px solid ${designTokens.color.accent}`,
        borderRadius: designTokens.radius.control,
        color: designTokens.color.text,
        padding: "1rem"
      }}
    >
      {children}
    </section>
  );
}
