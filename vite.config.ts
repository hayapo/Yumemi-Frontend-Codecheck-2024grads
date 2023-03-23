import { defineConfig, splitVendorChunkPlugin } from "vite"
import react from "@vitejs/plugin-react-swc"
import { visualizer } from "rollup-plugin-visualizer"
import gzipPlugin from "rollup-plugin-gzip"

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  return {
    build: {
      assetsInlineLimit: 20480,
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
      sourcemap: true,
      target: "chrome110",
    },
    plugins: [
      react(),
      mode === "analyze" &&
        visualizer({
          open: true,
          filename: "dist/stats.html",
          gzipSize: true,
          brotliSize: true,
        }),
      splitVendorChunkPlugin(),
      gzipPlugin({ fileName: ".gz" }),
    ],
    resolve: {
      alias: {
        "@/": `${__dirname}/src/`,
      },
    },
  }
})
