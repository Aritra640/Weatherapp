import { Sunny } from "@/Components/Sunny";
import { ForecastDay } from "@/types/ForcastDay";
import { atom } from "recoil";

export const ForecaseDaysAtom = atom<ForecastDay[]>({
  default: [
    {
      WeatherImage: <Sunny />,
      WeatherCode: 800,
      Weather: "Clear",
      temeperatur: "12",
      feelsLike: "13",
      windSpeed: "1.333"
    }
  ],
  key: "ForecaseDaysAtom",
});

