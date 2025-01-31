import { atom } from "recoil";

export const searchVarAtom = atom<string>({
  default: "London",
  key: "searchVarAtom",
});
