import { useEffect } from "react";

declare global {
  interface Window {
    kakao?: any;
  }
}

export default function useKakaoLoader() {
  useEffect(() => {
    const appkey = import.meta.env.VITE_KAKAO_APP_KEY as string | undefined;
    if (!appkey) {
      if (import.meta.env.DEV) console.warn("[Kakao] VITE_KAKAO_APP_KEY is not set");
      return;
    }

    // Already loaded
    if (window.kakao && window.kakao.maps) return;

    // Avoid protocol-relative URL to prevent http scheme
    const exist = document.getElementById("kakao-maps-sdk");
    if (exist) return;

    const script = document.createElement("script");
    script.id = "kakao-maps-sdk";
    const devSrc = "/kakao-maps-sdk.js"; // proxied by Vite in dev
    const prodSrc = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${appkey}&autoload=true`;
    script.src = import.meta.env.DEV ? devSrc : prodSrc;
    script.async = true;
    document.head.appendChild(script);
  }, []);
}
