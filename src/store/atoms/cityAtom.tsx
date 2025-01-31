import { atom } from "recoil";

export const cityAtom = atom<string>({
  default: "New York",
  key: "cityAtom",
});
