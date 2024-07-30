import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";
import removeConsole from "vite-plugin-remove-console";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr(), removeConsole()],
  assetsInclude: ['**/*.png'],


  resolve: {
    alias: {
      "@": "/src",
    },
  },
});
