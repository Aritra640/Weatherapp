import { atom } from "recoil";

export const themeAtom = atom<"Dark"|"Bright">({
  default: "Dark",
  key: "themeAtom",
});
