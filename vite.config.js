import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  server: {
    proxy:{
      '/api': 'http://164.90.185.233:8000/',
      "secure": false,
      
    } , // Replace with your Django API endpoint
  },
});
