import { defineConfig, Plugin } from "vite";
import react from "@vitejs/plugin-react";

// The Tech Stack 3D bundle (react-three: fiber/drei/rapier/postprocessing) is
// loaded lazily and only when the user scrolls to it. Vite would otherwise
// inject a <link rel="modulepreload"> for it into index.html, which makes the
// browser download ~1MB on first paint. Strip that specific preload so the
// heavy chunk stays truly on-demand. (three.js is left preloaded because the
// hero character above the fold needs it immediately.)
const stripLazyPreload = (): Plugin => ({
  name: "strip-lazy-preload",
  transformIndexHtml(html) {
    return html.replace(
      /\s*<link[^>]+rel="modulepreload"[^>]*react-three[^>]*>/g,
      ""
    );
  },
});

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), stripLazyPreload()],
  build: {
    // Raise the warning threshold so Three.js / GSAP bundles
    // don't cause non-zero exit codes on CI runners like Netlify.
    chunkSizeWarningLimit: 3000,
    rollupOptions: {
      output: {
        // Split large shared libraries into their own cacheable chunks so
        // three.js isn't duplicated across the Character and TechStack
        // bundles, and vendor code stays cached between deploys.
        manualChunks: {
          three: ["three", "three-stdlib"],
          "react-three": [
            "@react-three/fiber",
            "@react-three/drei",
            "@react-three/postprocessing",
            "@react-three/rapier",
          ],
          gsap: ["gsap", "@gsap/react"],
        },
      },
    },
  },
});
