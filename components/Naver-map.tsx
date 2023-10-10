"use client";

import { useEffect } from "react";

const url = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_API_CLIENT_ID}`;

const NaverMap = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.head.appendChild(script);

    script.onload = () => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(37.5666102, 126.9783881),
        zoom: 16,
      });
    };
  }, []);
  return <div id="map" className="w-2/3 h-screen"></div>;
};

export default NaverMap;
