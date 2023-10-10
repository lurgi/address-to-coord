"use client";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

import { Button } from "../ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

import addressesStore from "@/lib/store/Search-store";
import currentPlaceStore from "@/lib/store/Cur-place-store";

const SearchResults = () => {
  const { addresses, isLoading } = addressesStore((state) => state);
  const { setCurrentPlace } = currentPlaceStore((state) => state);
  return (
    <>
      <Card className="mt-8 h-[360px]">
        <CardHeader>
          <CardTitle className="text-xl">주소 목록</CardTitle>
        </CardHeader>
        <CardContent>
          {isLoading ? (
            <div className="flex justify-center">
              <AiOutlineLoading3Quarters className="animate-spin" />
            </div>
          ) : addresses?.length === 0 ? (
            <div>정확한 주소를 입력하세요.</div>
          ) : (
            addresses?.map((address, index) => (
              <Button
                key={index}
                className="w-full justify-start"
                variant={"outline"}
                onClick={() => setCurrentPlace(address)}
              >
                {address.roadAddress}
              </Button>
            ))
          )}
        </CardContent>
      </Card>
    </>
  );
};

export default SearchResults;
