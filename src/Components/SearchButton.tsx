import { Search } from "@/Icons/SearchIcon";
import { searchAtom, themeAtom } from "@/store/atoms/theme"
import { useRecoilValue, useSetRecoilState } from "recoil"

const searchStyles = {
  "Dark" : "text-white bg-slate-900",
  "Bright" : "text-slate-900 bg-slate-200"
}

export function SearchButton() {

  const theme = useRecoilValue(themeAtom);
  const setSearch = useSetRecoilState(searchAtom);

  function searchLocationModalON() {
    setSearch(true);
  }
  
  return <button className={searchStyles[theme] + " " + "cursor-pointer"} onClick={searchLocationModalON}>
    <Search />
  </button>
}
