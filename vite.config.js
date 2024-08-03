import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfolio-2024/", // replace with your repo name
  build: {
    outDir: "docs", // GitHub Pages expects files in a folder named docs
  },
});
