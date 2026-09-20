import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "node:path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(process.cwd(), "src"),
      "@components": path.resolve(process.cwd(), "src/components"),
    },
  },
  server: {
    host: true,
    port: 4321,
  },
});
