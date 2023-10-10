import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Address } from "./store/Search-store";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function importNaver() {
  const url = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_API_CLIENT_ID}`;

  const script = document.createElement("script");
  script.type = "text/javascript";
  script.src = url;
  document.head.appendChild(script);
  return script;
}

export function drawNaverMap(currentPlace?: Address) {
  const map = new naver.maps.Map("map", {
    center: new naver.maps.LatLng(
      currentPlace ? +currentPlace.y : 37.5666102,
      currentPlace ? +currentPlace.x : 126.9783881
    ),
    zoom: 16,
  });
  return map;
}

export function drawWindowContents(map: naver.maps.Map, currentPlace: Address) {
  const contentString = `
          <div class="window_contents">
          <h3>이곳의 좌표</h3>
            <p>
            X : ${currentPlace.x}
            </p>
            <p>
            Y : ${currentPlace.y}
            </p>
          </div>
        `;
  const infowindow = new naver.maps.InfoWindow({
    content: contentString,
  });
  const location = new naver.maps.LatLng(+currentPlace.y, +currentPlace.x);
  const marker = new naver.maps.Marker({
    map: map,
    position: location,
  });
  infowindow.open(map, marker);
  map.setZoom(18);
}
