import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { manualChunksPlugin } from "vite-plugin-webpackchunkname";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), manualChunksPlugin()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve("src") }],
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8000",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
    watch: {
      usePolling: true, // 파일 변경 감지를 polling 방식으로 강제
    },
  },
});
