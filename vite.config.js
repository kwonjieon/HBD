import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: "0.0.0.0", // 외부 IP로 접근 가능하게 설정
  //   port: 5173, // 기본 포트
  // },
});
