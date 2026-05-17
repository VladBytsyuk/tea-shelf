import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import {
  Button,
  DESIGN_SYSTEM_IMPLEMENTED_VERSION,
  FieldGroup,
  IconButton,
  MethodSelector,
  NumberInputWithUnit,
  PrimaryNavigation,
  SaveFailedState,
  TextInput,
  TimerDisplay,
  designTokens
} from "./index";

describe("design-system-impl", () => {
  it("exports implementation version and semantic tokens", () => {
    expect(DESIGN_SYSTEM_IMPLEMENTED_VERSION).toBe("DS-IMPL-001");
    expect(designTokens.color["action.primary"]).toBe("#2F6F5E");
  });

  it("renders button loading state without hiding the label", () => {
    render(<Button loading variant="primary">Save tea</Button>);

    expect(screen.getByRole("button", { name: "Save tea" })).toHaveAttribute("aria-busy", "true");
    expect(screen.getByText("Save tea")).toBeInTheDocument();
  });

  it("requires accessible names for icon buttons", () => {
    render(<IconButton icon="★" label="Favorite tea" selected />);

    expect(screen.getByRole("button", { name: "Favorite tea" })).toHaveAttribute("aria-pressed", "true");
  });

  it("associates field labels, helper text, and errors", () => {
    render(<TextInput label="Tea name" helperText="Use the package label." error="Tea name is required." />);

    const input = screen.getByLabelText("Tea name");
    expect(input).toHaveAttribute("aria-invalid", "true");
    expect(input).toHaveAccessibleDescription("Use the package label. Tea name is required.");
  });

  it("keeps number input units visible and described", () => {
    render(<NumberInputWithUnit label="Temperature" unit="C" />);

    expect(screen.getByLabelText("Temperature")).toHaveAccessibleDescription("C");
  });

  it("supports chip selection state", () => {
    const onToggle = vi.fn();
    render(<MethodSelector label="Methods" methods={[{ label: "Gongfu", value: "gongfu" }]} selected={["gongfu"]} onToggle={onToggle} />);

    expect(screen.getByRole("button", { name: "Gongfu" })).toHaveAttribute("aria-pressed", "true");
  });

  it("marks the current navigation item without color-only state", () => {
    render(<PrimaryNavigation items={[{ href: "#timer", label: "Brew timer", current: true }]} />);

    expect(screen.getByRole("link", { name: "Brew timer" })).toHaveAttribute("aria-current", "page");
  });

  it("renders timer state text and a polite live region", () => {
    render(<TimerDisplay state="paused" remainingTime="01:10" currentSteep="Steep 2" />);

    expect(screen.getByText("paused")).toBeInTheDocument();
    expect(screen.getByText("Timer state changed to paused")).toHaveAttribute("aria-live", "polite");
  });

  it("renders save failure as an alert with retry", () => {
    render(<SaveFailedState onRetry={() => undefined} />);

    expect(screen.getByRole("alert")).toHaveTextContent("Your entered values are still available.");
    expect(screen.getByRole("button", { name: "Retry" })).toBeInTheDocument();
  });

  it("allows explicit field grouping for custom controls", () => {
    render(<FieldGroup id="custom" label="Custom field"><input id="custom" /></FieldGroup>);

    expect(screen.getByLabelText("Custom field")).toBeInTheDocument();
  });
});
