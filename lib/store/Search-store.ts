import { create } from "zustand";

export interface Address {
  addressElements: string[];
  englishAddress: string;
  jibunAddress: string;
  roadAddress: string;
  x: string;
  y: string;
}

interface AddressesStore {
  addresses?: Address[];
  isLoading: boolean;
  setAddresses: (addresses: Address[]) => void;
  setIsLoading: (bol: boolean) => void;
}

const addressesStore = create<AddressesStore>((set) => ({
  addresses: undefined,
  isLoading: false,
  setAddresses: (addresses) =>
    set(() => ({
      addresses,
    })),
  setIsLoading: (bol) =>
    set(() => ({
      isLoading: bol,
    })),
}));

export default addressesStore;
