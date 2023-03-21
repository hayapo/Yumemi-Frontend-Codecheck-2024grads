import { defineConfig } from "vite"
import react from "@vitejs/plugin-react-swc"
import { visualizer } from "rollup-plugin-visualizer"

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    assetsInlineLimit: 0,
    cssCodeSplit: true,
    cssTarget: "chrome110",
    minify: true,
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom"],
        },
        experimentalMinChunkSize: 40960,
      },
    },
    sourcemap: false,
    target: "chrome110",
  },
  plugins: [
    react(),
    visualizer({
      open: true,
      filename: "dist/stats.html",
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve: {
    alias: {
      "@/": `${__dirname}/src/`,
    },
  },
})
