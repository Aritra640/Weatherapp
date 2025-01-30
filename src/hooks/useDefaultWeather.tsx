import { WeatherToday } from "@/types/WeatherToday";
import axios from "axios";
import { useEffect, useState } from "react";

export function useDefaultWeather() {
  const url = "https://api.openweathermap.org/data/2.5/weather?q=London&appid=79b9ad219403589204cb83cf5f95d51a"
  const [weather , setWeather] = useState<WeatherToday>();
  
  useEffect(()=>{
   axios.get(url).then((response) => {
      setWeather({
        Location: "London",
        Latitude: "" + response.data.cord.lat,
        Longitude: "" + response.data.cord.lon,

        temperature: "" + response.data.main.temp,
        feelsLike: "" + response.data.main.feels_like,
        windSpeed: "" + response.data.wind.speed,

        weatherDesc : "" + response.data.weather.description,
        weatherCode: response.data.weather.id
      })
    })
  }, [])

  return weather;
}
