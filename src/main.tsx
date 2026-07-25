import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Navbar positions the page for whatever path was requested (e.g. a reload
// on /about-me lands back on About) — disable the browser's own scroll
// restoration so it doesn't fight that with a stale native scroll position.
if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
