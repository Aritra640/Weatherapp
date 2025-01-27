import { searchAtom, themeAtom } from "@/store/atoms/theme"
import { useRecoilValue, useSetRecoilState } from "recoil"

const SearchThemes = {
  "Dark" : "bg-slate-800/80",
  "Bright" : "bg-slate-300/90"
}

export function SearchModal() {

  const theme = useRecoilValue(themeAtom);
  const search = useRecoilValue(searchAtom);
  const setSearch = useSetRecoilState(searchAtom);

  function toggleSearch() {
    setSearch(false);
  }

  function EnterFunction(event : React.KeyboardEvent<HTMLInputElement>) {
    if(event.key == 'Enter') {
      //Send request 

      toggleSearch();
    }
    else if(event.key == 'Escape') {
      toggleSearch();
    }
  }

  return(search && <div className="h-screen w-screen fixed flex justify-center">
    <span className = {SearchThemes[theme] + " " + "max-h-96 rounded-2xl min-w-120 max-w-120 mt-2"}>
      <div className="flex justify-center">
        <input className = "bg-white text-black rounded-2xl mt-2 min-w-110 max-w-110 h-10 text-center" placeholder="Enter city name here (Press escape to cancel , enter to select)" type="text" onKeyUp={EnterFunction} /> 
      </div>

      <br />

      <div className="ml-2 mr-2 rounded-xl h-72">
        <SearchSuggestion City="Kolkata" lat="1.22" long="3.11"/>
        <SearchSuggestion City="New Delhi" lat="2.33" long="31.33" />
      </div>
    </span>
  </div>)
}

interface SearchSuggestionProps {
  City : string 
  onClick?: ()=>void
  lat : string 
  long : string
}

const LatLongThemes = {
  "Dark" : "text-green-400",
  "Bright" : "text-red-800"
}

const hoverThemes = {
  "Dark" : "hover:bg-slate-900",
  "Bright" : "hover:bg-white"
}

function SearchSuggestion({City , onClick , lat , long}:SearchSuggestionProps) {
  const theme = useRecoilValue(themeAtom);

  return <div onClick={onClick} className = {hoverThemes[theme] + " " +  "w-full cursor-pointer flex justify-between p-2 m-0.5 rounded-xl"}>
    <div className="ml-3">
      {City}
    </div>
    <div className={LatLongThemes[theme] + " " + "flex justify-start gap-2"}>
      <div>lat = {lat}</div>
      <div>long = {long}</div>
    </div>
  </div>
}
