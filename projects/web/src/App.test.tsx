import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { App } from "./App";
import { type AppData, type Repository, createServices } from "./domain";

function createMemoryServices(initialData: AppData = { sessions: [], teas: [], teaware: [] }) {
  let stored = initialData;
  const repository: Repository = {
    async load() {
      return stored;
    },
    async replace(data) {
      stored = data;
    }
  };
  return createServices(repository);
}

describe("Tea Shelf MVP app", () => {
  it("renders MVP navigation and first-use tea empty state", async () => {
    render(<App services={createMemoryServices()} />);

    expect(await screen.findByRole("navigation", { name: "Primary navigation" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Tea shelf" })).toBeInTheDocument();
    expect(screen.getByText("No teas yet")).toBeInTheDocument();
  });

  it("creates a tea, marks zero stock as unavailable, and filters favorites", async () => {
    render(<App services={createMemoryServices()} />);

    await screen.findByRole("heading", { name: "Tea shelf" });
    fireEvent.change(screen.getByLabelText(/Tea name/), { target: { value: "Da Hong Pao" } });
    fireEvent.change(screen.getByLabelText(/Original weight/), { target: { value: "50" } });
    fireEvent.change(screen.getByLabelText(/Remaining quantity/), { target: { value: "0" } });
    fireEvent.click(screen.getByLabelText("Favorite tea"));
    fireEvent.click(screen.getByRole("button", { name: "Save tea" }));

    expect(await screen.findByRole("heading", { name: "★ Da Hong Pao" })).toBeInTheDocument();
    expect(screen.getAllByText("Unavailable").length).toBeGreaterThan(0);

    fireEvent.click(screen.getByLabelText("Favorites only"));
    expect(screen.getByRole("heading", { name: "★ Da Hong Pao" })).toBeInTheDocument();
  });

  it("blocks invalid tea saves with field-level errors while preserving values", async () => {
    render(<App services={createMemoryServices()} />);

    await screen.findByRole("heading", { name: "Tea shelf" });
    fireEvent.change(screen.getByLabelText(/Tea name/), { target: { value: "Broken tea" } });
    fireEvent.change(screen.getByLabelText(/Remaining quantity/), { target: { value: "-1" } });
    fireEvent.click(screen.getByRole("button", { name: "Save tea" }));

    expect(screen.getByText("Remaining quantity cannot be negative.")).toBeInTheDocument();
    expect(screen.getByDisplayValue("Broken tea")).toBeInTheDocument();
  });

  it("runs a custom timer session and stores it in session history", async () => {
    render(<App services={createMemoryServices()} />);

    await screen.findByRole("heading", { name: "Tea shelf" });
    fireEvent.click(screen.getByRole("button", { name: "Brew timer" }));
    expect(screen.getByRole("heading", { name: "Brew timer" })).toBeInTheDocument();
    fireEvent.click(screen.getByRole("button", { name: "Start timer" }));
    fireEvent.click(screen.getByRole("button", { name: "Next steep" }));
    fireEvent.click(screen.getByRole("button", { name: "Next steep" }));
    fireEvent.click(screen.getByRole("button", { name: "Next steep" }));
    fireEvent.change(screen.getByLabelText("Session notes"), { target: { value: "Sweet finish" } });
    fireEvent.click(screen.getByRole("button", { name: "Save session" }));

    fireEvent.click(screen.getByRole("button", { name: "History" }));
    await waitFor(() => expect(screen.getByText("Custom session")).toBeInTheDocument());
    fireEvent.click(screen.getByRole("button", { name: "Details" }));
    expect(screen.getByText("Sweet finish")).toBeInTheDocument();
  });
});
