import { atom } from "recoil";

export const airAtom = atom<true|false>({
  default: false,
  key: "airAtom",
});


