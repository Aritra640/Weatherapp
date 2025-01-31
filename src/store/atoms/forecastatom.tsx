import { atom } from "recoil";

export const forecastAtom = atom<true|false>({
  default: false,
  key: "forecastAtom",
});

