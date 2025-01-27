import { useRecoilValue } from "recoil";
import { themeAtom } from "../store/atoms/theme";
import { IconButton } from "@/Components/Buttons";
import { Sunny } from "@/Components/Sunny";
import { SearchButton } from "@/Components/SearchButton";
import { AirButton } from "@/Components/AirButton";
import { AirModal } from "@/Components/Modals/AirModal";
import { SearchModal } from "@/Components/Modals/SarchModal";
import { ForcastTab } from "@/Components/ForcastComponents/ForcastTab";

const Themes = {
  Dark: "bg-slate-900  text-white",
  Bright: "bg-slate-200 text-black",
};

export function Weather() {
  const theme = useRecoilValue(themeAtom);
  const commonStyle = Themes[theme] + " " + "h-screen w-screen fixed";

  return (
    <div className={commonStyle}>
      <AirModal />
      <SearchModal />
      <div className="flex justify-between">
        <div>
        <div className="text-5xl pl-4 pt-3">
          New York
        </div>
        <div className="text-xl pl-4 pt-1 flex justify-start gap-2">
            <div>lat: 1.333</div>
            <div>
                long: 2.333
            </div>
        </div>
        </div>
      <div className="flex justify-end">
        <SearchButton />
        <IconButton />
      </div>
      </div>

      <div className="flex justify-center max-h-48 ">
        <Sunny />{" "}
        <span className="pl-6">
          <div className="flex justify-start gap-4">
            <div className="text-7xl">24&deg;C</div>
            <div className="text-4xl pt-6">feels like 32&deg;C</div>
          </div>
          <div className="text-2xl pt-1">Sunny</div>
          <div className="text-2xl pt-1">wind speed: 4.09</div>
          <div className="text-2xl pt-1">ait quality: Fair <AirButton /></div>
        </span>
      </div>

      <br />
      <br />

      <ForcastTab />
    </div>
  );
}

