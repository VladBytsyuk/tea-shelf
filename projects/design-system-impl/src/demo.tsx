import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PlaceholderSurface } from "./index";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PlaceholderSurface>Design system scaffold is running.</PlaceholderSurface>
  </StrictMode>
);
