import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Button, EmptyState, PrimaryNavigation } from "./index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <main className="ts-scope">
      <PrimaryNavigation items={[{ href: "#", label: "Design system", current: true }]} />
      <EmptyState
        title="Design system"
        body="Shared Tea Shelf components are available."
        action={<Button variant="primary">Review components</Button>}
      />
    </main>
  </StrictMode>
);
