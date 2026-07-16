import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Raise the warning threshold so Three.js / GSAP bundles
    // don't cause non-zero exit codes on CI runners like Netlify.
    chunkSizeWarningLimit: 3000,
  },
});
