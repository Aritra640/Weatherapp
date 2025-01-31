import { searchVarAtom } from "@/store/atoms/searchValAtom";
import axios from "axios";
import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";

export function useSearchValues() {
  const city = useRecoilValue(searchVarAtom);

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`; 

  const [get , setGet] = useState<true|false>();

  useEffect(()=>{
    axios.get(url).then((response)=>{
      if(response.status >= 200 && response.status < 300){
        setGet(true);
      } 
      else{
        setGet(false);
      }
    })
  },[]);

  return get;
}
