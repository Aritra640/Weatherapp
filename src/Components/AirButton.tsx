import { IIcon } from "@/Icons/IIcon";
import { airAtom, themeAtom } from "@/store/atoms/theme"
import { useRecoilValue, useSetRecoilState } from "recoil"

const Airthemes = {
  "Dark" : "bg-slate-900 text-white",
  "Bright" : "bg-slate-200 text-slate-900"
}

export function AirButton() {


  const theme = useRecoilValue(themeAtom);
  const setAir = useSetRecoilState(airAtom);

  function toggleModal() {
    setAir(true);
  }

  return <button onClick={toggleModal} className={Airthemes[theme] + " " + "cursor-pointer"}>
    <IIcon />
  </button>
}
