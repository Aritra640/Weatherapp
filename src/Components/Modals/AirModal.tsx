import { airAtom } from "@/store/atoms/theme";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { CrossIcon } from "../CrossIcon";

export function AirModal() {
  const air = useRecoilValue(airAtom);
  const setAir = useSetRecoilState(airAtom);

  function toggleModal() {
    setAir(false);
  }

  return (
    air && (
      <div className = "flex justify-center">
      <div className="bg-slate-600 text-black fixed mt-28 w-120 rounded-xl">
        <div className="p-3">
        <div className="flex justify-end">
          <button className="slate-600 text-black cursor-pointer" onClick={toggleModal}>
            <CrossIcon />
          </button>
        </div>

        <div className = "flex justify-center text-5xl">
          Air Pollution API
        </div>
        <br />
        <div>
          Air Pollution API provides current, forecast and historical air pollution data for any coordinates on the globe.

Besides basic Air Quality Index, the API returns data about polluting gases, such as Carbon monoxide (CO), Nitrogen monoxide (NO), Nitrogen dioxide (NO2), Ozone (O3), Sulphur dioxide (SO2), Ammonia (NH3), and particulates (PM2.5 and PM10).

Air pollution forecast is available for 4 days with hourly granularity. Historical data is accessible from 27th November 2020.

Here is a description of OpenWeather scale for Air Quality Index levels:


          Other parameters that do not affect the AQI calculation:

NH3: min value 0.1 - max value 200
NO: min value 0.1 - max value 100
Please find Air Quality Index levels scales used in UK, Europe, USA and Mainland China in the <a href="https://openweathermap.org/air-pollution-index-levels" className="text-red-900">Air pollution index scale</a>
        </div>
      </div>
      </div>
      </div>
    )
  );
}
