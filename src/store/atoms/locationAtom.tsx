import { atom } from "recoil";

export const locationAtom = atom<string>({
  default: "London",
  key: "locationAtom",
});

