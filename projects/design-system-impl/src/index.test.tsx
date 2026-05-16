import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PlaceholderSurface, designTokens } from "./index";

describe("design-system-impl scaffold", () => {
  it("exports design tokens", () => {
    expect(designTokens.color.accent).toBe("#2f6f4e");
  });

  it("renders the placeholder surface", () => {
    render(<PlaceholderSurface>Shared UI is available.</PlaceholderSurface>);

    expect(screen.getByText("Shared UI is available.")).toBeInTheDocument();
  });
});
