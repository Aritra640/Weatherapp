import { Clouds } from "@/Components/Clouds";
import { Drizzle } from "@/Components/Drizzle";
import { Dust } from "@/Components/Dust";
import { Rain } from "@/Components/Rain";
import { Snow } from "@/Components/snow";
import { Sunny } from "@/Components/Sunny";
import { Thunderstorm } from "@/Components/thunderstorm";
import { Typhoon } from "@/Components/Typhoon";
import { ForecaseDaysAtom } from "@/store/atoms/ForecastDaysAtom";
import { locationAtom } from "@/store/atoms/locationAtom"
import axios from "axios";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil"

function getImage(weatherCode: number) {
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

export function useForecast() {
  const city = useRecoilValue(locationAtom);
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;

  const setForcasts = useSetRecoilState(ForecaseDaysAtom);

  useEffect(()=>{
    axios.get(url).then((response)=>{

      setForcasts([
        {
          WeatherCode: response.data.list[0].weather[0].id,
          WeatherImage: getImage(response.data.list[0].weather[0].id),
          Weather: response.data.list[0].weather[0].description,

          temeperatur: response.data.list[0].main.temp,
          feelsLike: response.data.list[0].main.feels_like,
          windSpeed: response.data.list[0].wind.speed
        },
         {
          WeatherCode: response.data.list[1].weather[0].id,
          WeatherImage: getImage(response.data.list[1].weather[0].id),
          Weather: response.data.list[1].weather[0].description,

          temeperatur: response.data.list[1].main.temp,
          feelsLike: response.data.list[1].main.feels_like,
          windSpeed: response.data.list[1].wind.speed
        },
         {
          WeatherCode: response.data.list[2].weather[0].id,
          WeatherImage: getImage(response.data.list[2].weather[0].id),
          Weather: response.data.list[2].weather[0].description,

          temeperatur: response.data.list[2].main.temp,
          feelsLike: response.data.list[2].main.feels_like,
          windSpeed: response.data.list[2].wind.speed
        },
         {
          WeatherCode: response.data.list[3].weather[0].id,
          WeatherImage: getImage(response.data.list[3].weather[0].id),
          Weather: response.data.list[3].weather[0].description,

          temeperatur: response.data.list[3].main.temp,
          feelsLike: response.data.list[3].main.feels_like,
          windSpeed: response.data.list[3].wind.speed
        }]
      )
    })
  },[url]);

  const Forcasts = useRecoilValue(ForecaseDaysAtom);
  return Forcasts; 
}
