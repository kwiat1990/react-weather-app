import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import mdPlugin, { Mode } from "vite-plugin-markdown";
import * as path from "path";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      react(),
      mdPlugin({
        mode: [Mode.REACT],
      }),
    ],
    resolve: {
      alias: [{ find: "@", replacement: path.resolve(__dirname, "./src") }],
    },
  };
});
