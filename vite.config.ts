import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import { resolve } from "path";

import { createRequire } from "node:module";
const requireFile = createRequire(import.meta.url);
const packageJson = requireFile("./package.json");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: [{ find: "@", replacement: resolve(__dirname, "src") }],
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: packageJson.name,
      fileName: () => `index.js`,
    },
    sourcemap: true,
    rollupOptions: {
      external: ["react", "react-dom"],
      output: [
        {
          globals: {
            react: "React",
            "react-dom": "ReactDom",
          },
        },
      ],
    },
  },
});
