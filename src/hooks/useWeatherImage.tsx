import { Clouds } from "@/Components/Clouds";
import { Drizzle } from "@/Components/Drizzle";
import { Dust } from "@/Components/Dust";
import { Rain } from "@/Components/Rain";
import { Snow } from "@/Components/snow";
import { Sunny } from "@/Components/Sunny";
import { Thunderstorm } from "@/Components/thunderstorm";
import { Typhoon } from "@/Components/Typhoon";
import { weatherTodayAtom } from "@/store/atoms/theme";
import { useRecoilValue } from "recoil";

// 200-232.Thunderstorm
// 300-321.Drizzle (heavy rain)
// 500-531.Rain
// 600-622.Snow
// 701-771.Dust/smoke/mist
// 800 clear sky/sunny
// 801-804.Clouds
// 781. Typhoon

export function useWeatherImage() {

  const WeatherToday = useRecoilValue(weatherTodayAtom);
  const weatherCode = WeatherToday.weatherCode;

  if(weatherCode >= 200 && weatherCode <= 232){
    return <Thunderstorm />
  }
  else if(weatherCode >= 300 && weatherCode <= 321) {
    return <Drizzle />
  }
  else if(weatherCode >= 500 && weatherCode <= 531) {
    return  <Rain />
  }
  else if(weatherCode >= 600 && weatherCode <= 622) {
    return <Snow />
  }
  else if(weatherCode >= 701 && weatherCode <= 711) {
    return <Dust />
  }
  else if(weatherCode == 800) {
    return <Sunny />
  }
  else if(weatherCode >= 801 && weatherCode <= 804) {
    return <Clouds />
  }
  else if(weatherCode == 781){
    return <Typhoon />
  }
  else{
    return <Sunny />
  }
}
