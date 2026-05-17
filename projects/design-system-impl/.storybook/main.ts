import type { StorybookConfig } from "@storybook/react-vite";

// Implements design-system docs version MVP-001 as DS-IMPL-001.
const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-a11y"],
  framework: {
    name: "@storybook/react-vite",
    options: {}
  }
};

export default config;
