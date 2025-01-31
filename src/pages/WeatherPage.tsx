import { useRecoilValue } from "recoil";
import { themeAtom} from "../store/atoms/theme";
import { IconButton } from "@/Components/Buttons";
import { SearchButton } from "@/Components/SearchButton";
import { AirButton } from "@/Components/AirButton";
import { AirModal } from "@/Components/Modals/AirModal";
import { SearchModal } from "@/Components/Modals/SarchModal";
import { ForcastTab } from "@/Components/ForcastComponents/ForcastTab";
import { useCurWeather } from "@/hooks/useCurWeather";
import { useWeatherImage } from "@/hooks/useWeatherImage";
import { useAirPollution } from "@/hooks/useAirPollution";
import { ForecastModal } from "@/Components/Modals/ForecastModal";

const Themes = {
  Dark: "bg-slate-900  text-white",
  Bright: "bg-slate-200 text-black",
};

export function Weather() {
  const theme = useRecoilValue(themeAtom);
  const commonStyle = Themes[theme] + " " + "h-screen w-screen fixed";

  

  const weatherToday = useCurWeather();
  const airPollution = useAirPollution();

  return (
    <div className={commonStyle}>
      <AirModal />
      <SearchModal />
      <ForecastModal />
      <div className="flex justify-between">
        <div>
        <div className="text-5xl pl-4 pt-3">
          {weatherToday.Location}
        </div>
        <div className="text-xl pl-4 pt-1 flex justify-start gap-2">
            <div>lat: {weatherToday.Latitude}</div>
            <div>
                long: {weatherToday.Longitude}
            </div>
        </div>
        </div>
      <div className="flex justify-end">
        <SearchButton />
        <IconButton />
      </div>
      </div>

      <div className="flex justify-center max-h-48 ">
        {useWeatherImage()}{" "}
        <span className="pl-6 pt-5">
          <div className="flex justify-start gap-4">
            <div className="text-7xl">{weatherToday.temperature}&deg;C</div>
            <div className="text-4xl pt-6">feels like {weatherToday.feelsLike}&deg;C</div>
          </div>
          <div className="text-2xl pt-1">{weatherToday.weatherDesc}</div>
          <div className="text-2xl pt-1">wind speed: {weatherToday.windSpeed}</div>
          <div className="text-2xl pt-1">ait quality: {airPollution} <AirButton /></div>
        </span>
      </div>

      <br />
      <br />

      <ForcastTab />

    </div>
  );
}

