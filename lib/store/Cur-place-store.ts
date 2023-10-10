import { create } from "zustand";
import { Address } from "./Search-store";

interface CurrentPlaceStore {
  currentPlace?: Address;
  isLoading: boolean;
  setCurrentPlace: (addresses: Address) => void;
  setIsLoading: (bol: boolean) => void;
}

const currentPlaceStore = create<CurrentPlaceStore>((set) => ({
  currentPlace: undefined,
  isLoading: false,
  setCurrentPlace: (addresses) =>
    set(() => ({
      currentPlace: addresses,
    })),
  setIsLoading: (bol) =>
    set(() => ({
      isLoading: bol,
    })),
}));

export default currentPlaceStore;
