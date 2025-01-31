import { useForecast } from "@/hooks/useForcast";
import { ForcastComponent } from "./ForcastComponent";

export function ForcastTab() {

  const Forcasts = useForecast();

  if (!Forcasts || Forcasts.length < 4) {
    return <div>Loading forecast...</div>; // Handle loading state
  }

  return <div className="flex justify-center">
    <span className="bg-sky-800/30 w-300 h-80 rounded-3xl flex justify-start">
      <ForcastComponent variant="Left" WeatherImage={Forcasts[0].WeatherImage} Day="Day 1"/>
      <ForcastComponent variant="Middle" WeatherImage={Forcasts[1].WeatherImage} Day="Day 2" />
      <ForcastComponent variant="Middle" WeatherImage={Forcasts[2].WeatherImage} Day="Day 3"/>
      <ForcastComponent variant="Right"  WeatherImage={Forcasts[3].WeatherImage} Day="Day 4"/>
    </span>
  </div>
}


