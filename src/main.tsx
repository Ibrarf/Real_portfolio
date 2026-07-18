import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Always start at the top so the hero intro plays correctly, even when the
// page is reloaded on a deep-linked path like /about or /contact.
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

// Normalize deep-linked paths (/about, /contact, …) back to the home route on
// load. The SPA rewrite serves index.html for those paths (no 404), and this
// makes every entry point behave exactly like the working homepage instead of
// triggering the fragile on-load scroll that left the hero blank.
if (window.location.pathname !== "/") {
  window.history.replaceState(null, "", "/");
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
