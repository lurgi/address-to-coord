"use client";

import currentPlaceStore from "@/lib/store/Cur-place-store";
import { drawNaverMap, drawWindowContents, importNaver } from "@/lib/utils";
import { useEffect } from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const NaverMap = () => {
  const { currentPlace, isLoading, setIsLoading } = currentPlaceStore(
    (state) => state
  );
  useEffect(() => {
    setIsLoading(true);

    const script = importNaver();
    script.onload = () => {
      const map = drawNaverMap(currentPlace);
      if (currentPlace) {
        drawWindowContents(map, currentPlace);
      }
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
