import { locationAtom, weatherTodayAtom } from "@/store/atoms/theme";
import axios from "axios";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

export function useCurWeather() {

  const curLocation = useRecoilValue(locationAtom);
  const setWeatherToday = useSetRecoilState(weatherTodayAtom);
  const weatherToday = useRecoilValue(weatherTodayAtom);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${curLocation}&units=metric&appid=${import.meta.env.VITE_APP_ID}`; 

  useEffect(()=>{
    axios.get(url).then((response)=>{
      setWeatherToday({
        Location : curLocation,
        Longitude: response.data.coord.lon,
        Latitude: response.data.coord.lat,

        temperature: response.data.main.temp,
        feelsLike: response.data.main.feels_like,
        windSpeed: response.data.wind.speed,

        weatherDesc: response.data.weather.description,
        weatherCode: response.data.weather.id
      })
    })
  } , []);

  console.log("curLocation called!")
  console.log(curLocation)

  return weatherToday;
}
