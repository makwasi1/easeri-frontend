import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: "@", replacement: "/src" }],
  },
  // server: {
  //   proxy:{
  //     '/api': 'https://easeri-backend-production.up.railway.app/',
  //     "secure": false,
      
  //   } , // Replace with your Django API endpoint
  // },
});
