import { ReactElement } from "react"

export type ForecastDay = {
  WeatherImage: ReactElement;
  WeatherCode : number;

  Weather: string;
  temeperatur: string;
  feelsLike : string;
  windSpeed: string;
}
