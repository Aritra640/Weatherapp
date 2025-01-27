import { atom } from "recoil";

export const themeAtom = atom<"Dark"|"Bright">({
  default: "Dark",
  key: "themeAtom",
});

export const searchAtom = atom<true|false>({
  default: false,
  key: "searchAtom",
});

export const airAtom = atom<true|false>({
  default: false,
  key: "airAtom",
});

export const cityAtom = atom<string>({
  default: "New York",
  key: "cityAtom",
});
