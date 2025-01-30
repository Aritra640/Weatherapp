import { weatherTodayAtom } from "@/store/atoms/theme";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export function useAirPollution() {

  const weatherToday = useRecoilValue(weatherTodayAtom);
  const url = `http://api.openweathermap.org/data/2.5/air_pollution?lat=${weatherToday.Latitude}&lon=${weatherToday.Longitude}&appid=${import.meta.env.VITE_APP_ID}`;

  const [air , setAirPollution] = useState<string>("");

  useEffect(()=>{
    axios.get(url).then((response)=>{
      const ind = response.data.list[0].main.aqi;
      if(ind == 1) {
        setAirPollution("Good");
      }
      else if(ind == 2) {
        setAirPollution("Fair");
      }
      else if(ind == 3) {
        setAirPollution("Moderate");
      }
      else if(ind == 4) {
        setAirPollution("Poor");
      }
      else if(ind == 5){
        setAirPollution("Very Poor");
      }

      console.log("Air : " , ind);
    })
  } , [url]);


  return air;
}
