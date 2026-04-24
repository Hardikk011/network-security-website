import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import runtimeErrorOverlay from "@replit/vite-plugin-runtime-error-modal";

const port = Number(process.env.PORT) || 5173;
const basePath = process.env.BASE_PATH || "/";
const isProduction = process.env.NODE_ENV === "production";

export default defineConfig(async () => ({
  base: basePath,

  plugins: [
    react(),
    // Keep runtime overlay in development only.
    ...(isProduction ? [] : [runtimeErrorOverlay()]),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@assets": path.resolve(__dirname, "..", "..", "attached_assets"),
    },
  },

  server: {
    port,
    host: "0.0.0.0",
    middlewareMode: false,
  },

  build: {
    cssCodeSplit: true,
    sourcemap: false,
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
}));
