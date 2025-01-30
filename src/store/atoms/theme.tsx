import { WeatherToday } from "@/types/WeatherToday";
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

export const locationAtom = atom<string>({
  default: "London",
  key: "locationAtom",
});


export const weatherTodayAtom = atom<WeatherToday>({
  default: {
    Location: "Atlantis",
    Longitude: "0.122",
    Latitude: "1,223",
    
    temperature: "1.223",
    feelsLike: "1.232",
    windSpeed: "1.222",

    weatherDesc: "refresh page",
    weatherCode: 300
  },
  key: "weatherTodayAtom",
});

export const airPollutionAtom = atom<string>({
  default: "Fair",
  key: "airPollutionAtom",
});

export const forcastModalAtom = atom<boolean>({
  default: false,
  key: "forcastModal",
});
