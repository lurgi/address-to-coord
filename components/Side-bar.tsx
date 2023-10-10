"use client";
import SearchResults from "./side-bar/Search-results";
import SearchForm from "./side-bar/Search-form";
import { useState } from "react";

export interface Address {
  addressElements: string[];
  englishAddress: string;
  jibunAddress: string;
  roadAddress: string;
  x: string;
  y: string;
}

const SideBar = () => {
  const [addresses, setAddresses] = useState<Address[]>();
  return (
    <div className="w-1/3 p-8">
      <SearchForm setAddresses={setAddresses} />
      <SearchResults addresses={addresses} />
    </div>
  );
};

export default SideBar;
