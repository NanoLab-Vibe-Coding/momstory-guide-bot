import { Map } from "react-kakao-maps-sdk";
import useKakaoLoader from "@/hooks/useKakaoLoader";

export default function BasicMap() {
  // Dev 환경에서 SDK 403을 회피하기 위한 단순 iframe 대체
  if (import.meta.env.DEV) {
    const lat = 36.9627427;
    const lng = 127.9269237;
    const place = encodeURIComponent("호암체육관");
    const src = `https://map.kakao.com/link/map/${place},${lat},${lng}`;
    return (
      <iframe
        id="map"
        src={src}
        width="100%"
        height={350}
        style={{ border: 0, borderRadius: 16 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="호암체육관 지도"
      />
    );
  }

  // Production: 공식 SDK + 가장 간단한 Map 컴포넌트
  useKakaoLoader();
  return (
    <Map
      id="map"
      center={{ lat: 36.9627427, lng: 127.9269237 }}
      style={{ width: "100%", height: "350px" }}
      level={3}
    />
  );
}
