import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  server: {
    proxy:{
      '/api': 'http://178.62.67.233:8000'
    } , // Replace with your Django API endpoint
  },
});
