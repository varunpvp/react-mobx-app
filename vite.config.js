import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import packageJson from "./package.json";

export default defineConfig(() => {
  return {
    base: packageJson.homepage,
    build: {
      outDir: "build",
    },
    plugins: [react()],
  };
});
