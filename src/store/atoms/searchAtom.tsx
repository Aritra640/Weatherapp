import { atom } from "recoil";

export const searchAtom = atom<true|false>({
  default: false,
  key: "searchAtom",
});

