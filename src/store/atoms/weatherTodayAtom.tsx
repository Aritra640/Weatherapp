import { WeatherToday } from "@/types/WeatherToday";
import { atom } from "recoil";

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

