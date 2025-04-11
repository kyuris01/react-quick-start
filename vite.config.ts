import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: path.resolve("src") }],
  },
  server: {
    watch: {
      usePolling: true, // 파일 변경 감지를 polling 방식으로 강제
    },
  },
});
