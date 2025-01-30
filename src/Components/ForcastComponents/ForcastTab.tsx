import { Drizzle } from "../Drizzle";
import { Snow } from "../snow";
import { Thunderstorm } from "../thunderstorm";
import { Typhoon } from "../Typhoon";
import { ForcastComponent } from "./ForcastComponent";

export function ForcastTab() {

  return <div className="flex justify-center">
    <span className="bg-sky-800/30 w-300 h-80 rounded-3xl flex justify-start">
      <ForcastComponent variant="Left" WeatherImage={<Typhoon />} Day="Day 1"/>
      <ForcastComponent variant="Middle" WeatherImage={<Snow />} Day="Day 2" />
      <ForcastComponent variant="Middle" WeatherImage={<Thunderstorm />} Day="Day 3"/>
      <ForcastComponent variant="Right"  WeatherImage={<Drizzle />} Day="Day 4"/>
    </span>
  </div>
}

 
