import { Drizzle } from "../Drizzle";
import { Snow } from "../snow";
import { Thunderstorm } from "../thunderstorm";
import { Typhoon } from "../Typhoon";
import { ForcastComponent } from "./ForcastComponent";

export function ForcastTab() {

  return <div className="flex justify-center">
    <span className="bg-sky-800/30 w-300 h-80 rounded-3xl flex justify-start">
      <ForcastComponent variant="Left" WeatherImage={<Typhoon />} Day="Mon"/>
      <ForcastComponent variant="Middle" WeatherImage={<Snow />} Day="Tue" />
      <ForcastComponent variant="Middle" WeatherImage={<Thunderstorm />} Day="Wed"/>
      <ForcastComponent variant="Right"  WeatherImage={<Drizzle />} Day="Thr"/>
    </span>
  </div>
}

 
