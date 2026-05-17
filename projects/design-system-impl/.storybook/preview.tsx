import type { Preview } from "@storybook/react-vite";
import "../src/styles.css";

// Implements design-system docs version MVP-001 as DS-IMPL-001.
const preview: Preview = {
  decorators: [
    (Story) => (
      <div className="ts-scope" style={{ background: "var(--ts-bg-default)", minHeight: "100vh", padding: 24 }}>
        <Story />
      </div>
    )
  ],
  parameters: {
    a11y: { test: "error" },
    viewport: {
      viewports: {
        mobile360: { name: "Mobile 360", styles: { width: "360px", height: "720px" } },
        tablet768: { name: "Tablet 768", styles: { width: "768px", height: "900px" } },
        desktop1024: { name: "Desktop 1024", styles: { width: "1024px", height: "900px" } }
      }
    }
  }
};

export default preview;
