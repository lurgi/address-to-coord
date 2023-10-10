"use client";

import currentPlaceStore from "@/lib/store/Cur-place-store";
import { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const url = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpClientId=${process.env.NEXT_PUBLIC_NAVER_API_CLIENT_ID}`;

const NaverMap = () => {
  const { currentPlace, isLoading, setIsLoading } = currentPlaceStore(
    (state) => state
  );
  useEffect(() => {
    setIsLoading(true);
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.head.appendChild(script);

    script.onload = () => {
      const map = new naver.maps.Map("map", {
        center: new naver.maps.LatLng(
          currentPlace ? +currentPlace.y : 37.5666102,
          currentPlace ? +currentPlace.x : 126.9783881
        ),
        zoom: 16,
      });
    };
    setIsLoading(false);
  }, [currentPlace, setIsLoading]);
  return (
    <div id="map" className="w-2/3 h-screen">
      {isLoading || (
        <div className="flex justify-center items-center h-full">
          <AiOutlineLoading3Quarters className="w-20 h-20 animate-spin" />
        </div>
      )}
    </div>
  );
};

export default NaverMap;
