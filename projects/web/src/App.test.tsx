import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App";

describe("web scaffold", () => {
  it("renders the empty app shell", () => {
    render(<App />);

    expect(screen.getByRole("navigation", { name: "Primary navigation" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Shared design system" })).toBeInTheDocument();
    expect(screen.getByText("MVP web scaffold is running with shared design-system components.")).toBeInTheDocument();
  });
});
