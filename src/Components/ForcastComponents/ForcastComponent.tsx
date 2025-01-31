import { forecastAtom } from "@/store/atoms/forecastatom"
import { themeAtom } from "@/store/atoms/theme"
import { ReactElement } from "react"
import { useRecoilValue, useSetRecoilState  } from "recoil"

interface ForcastComponentProps {
  WeatherImage? : ReactElement
  Day? : string 
  variant: "Right"|"Middle"|"Left"
}

const CustomComonentStyles = {
  "Right" : "rounded-r-3xl",
  "Left" : "rounded-l-3xl",
  "Middle" : ""
}

const HoverThemes = {
  "Dark" : "hover:bg-slate-800",
  "Bright" : "hover:bg-slate-400"
}


export function ForcastComponent({ variant , WeatherImage , Day}:ForcastComponentProps) {
  
  const theme = useRecoilValue(themeAtom);
  const setForecast = useSetRecoilState(forecastAtom);

  function ToggleModal() {
    setForecast(true);
    console.log("forcast modal called !");
  }

  return <div onClick={ToggleModal} className={CustomComonentStyles[variant] + " " + "w-80 cursor-pointer flex flex-col justify-center" + " " + HoverThemes[theme]}>
    <div className="flex justify-center items-center">{WeatherImage}</div>
    <br />
    <div className="flex justify-center">{Day}</div>
  </div>
}
