import react from "@vitejs/plugin-react-swc";

/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "happy-dom",
    include: ["./src/**/*.{test,spec}.{js,mjs,cjs,  ts,mts,cts,jsx,tsx}"],
    watchExclude: [
      ".*\\/node_modules\\/.*",
      ".*\\/build\\/.*",
      ".*\\/postgres-data\\/.*",
    ],
  },
});
