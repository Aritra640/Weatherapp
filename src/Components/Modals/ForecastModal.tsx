import { themeAtom } from "@/store/atoms/theme";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Sunny } from "../Sunny";
import { CrossIcon } from "../CrossIcon";
import { forecastAtom } from "@/store/atoms/forecastatom";

const ForecastModalThemes = {
  "Dark" : "bg-slate-500",
  "Bright" : "bg-white",
}

export function ForecastModal() {
  const forecast = useRecoilValue(forecastAtom);
  const theme = useRecoilValue(themeAtom);
  const setForecast = useSetRecoilState(forecastAtom);

  function ToggleModal() {
    setForecast(false);
  }

  return (forecast && <div className="bg-slate-600/30 h-screen w-screen fixed flex justify-center items-center">
    <span className={ForecastModalThemes[theme] + " " + "min-w-100 max-w-100 min-h-100 rounded-3xl "}>
      <div className = "flex justify-end pt-2">
        <button className={ForecastModalThemes[theme] + " " + "cursor-pointer mr-3"} onClick={ToggleModal}><CrossIcon /></button> 
      </div>

      <div className="flex flex-col justify-start items-center">
        <Sunny />

        <div className="pt-3 text-4xl">
          clear
        </div>

        <div className="text-3xl pt-2">
            temperature : 24&deg;C
        </div>
        <div className="text-3xl pt-2">
            feels like : 32&deg;C
        </div>

        <div className="text-3xl pt-2">
            wind speed : 1.33
        </div>
      </div>
    </span>
  </div> )
}
