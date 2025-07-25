import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  css: {
    // Enable CSS modules if you're using them
    modules: {
      localsConvention: 'camelCase',
    },
    // Enable preprocessors if needed
    preprocessorOptions: {
      // Add preprocessor options if needed
    },
  },
  // Ensure static assets are properly served
  publicDir: 'public',
}));
