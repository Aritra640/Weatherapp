import { atom } from "recoil";

export const airPollutionAtom = atom<string>({
  default: "Fair",
  key: "airPollutionAtom",
});
