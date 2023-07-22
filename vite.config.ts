import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
      "@features": resolve(__dirname, "src/features"),
      "@components": resolve(__dirname, "src/components"),
      "@assets": resolve(__dirname, "src/assets"),
      "@libs": resolve(__dirname, "src/libs"),
      "@router": resolve(__dirname, "src/router"),
    },
  },
  plugins: [vue()],
});
