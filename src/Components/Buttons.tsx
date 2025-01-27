import { BrightIcon } from "@/Icons/BrightIcon"
import { DarkIcon } from "@/Icons/DarkIcon"
import { themeAtom } from "@/store/atoms/theme"
import { useRecoilValue, useSetRecoilState } from "recoil"


const IconButtonStyle = {
  "Dark" : "bg-slate-900 text-white",
  "Bright" : "bg-slate-200 text-slate-900"
}

export function IconButton() {

  const theme = useRecoilValue(themeAtom)
  const setTheme = useSetRecoilState(themeAtom)
  const style = IconButtonStyle[theme] + " " + " m-3 cursor-pointer"

  function toggleTheme() {
    if(theme == "Dark") {
      setTheme("Bright");
    }else{
      setTheme("Dark");
    }
  }

  return <button className = {style} onClick={toggleTheme}>
    {
      (theme == "Dark") ? <BrightIcon /> : <DarkIcon />
    }
  </button>
}
