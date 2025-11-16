import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const appkey = env.VITE_KAKAO_APP_KEY;

  const devOrigin = env.VITE_DEV_ORIGIN || "http://localhost:8080";

  return {
    server: {
      host: "::",
      port: 8080,
      strictPort: true,
      proxy: appkey
        ? {
            "/kakao-maps-sdk.js": {
              target: `https://dapi.kakao.com`,
              changeOrigin: true,
              secure: true,
              headers: {
                Referer: devOrigin + "/",
                Origin: devOrigin,
              },
              selfHandleResponse: false,
              rewrite: (path) => `/v2/maps/sdk.js?appkey=${appkey}&autoload=true`,
              // no custom configure: rely on headers above
            },
          }
        : undefined,
    },
    plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
  };
});
