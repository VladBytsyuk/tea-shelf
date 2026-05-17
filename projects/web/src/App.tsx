import { Button, EmptyState, PrimaryNavigation } from "design-system-impl";

export function App() {
  return (
    <main className="ts-scope">
      <PrimaryNavigation
        items={[
          { href: "#tea", label: "Tea shelf", current: true },
          { href: "#teaware", label: "Teaware" },
          { href: "#timer", label: "Brew timer" },
          { href: "#history", label: "History" }
        ]}
      />
      <EmptyState
        title="Shared design system"
        body="MVP web scaffold is running with shared design-system components."
        action={<Button variant="primary">Add tea</Button>}
      />
    </main>
  );
}
