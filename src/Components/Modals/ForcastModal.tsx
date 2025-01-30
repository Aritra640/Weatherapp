import { forcastModalAtom } from "@/store/atoms/theme"
import { useRecoilValue } from "recoil"

export function ForcastModal() {

  const forcastModalv = useRecoilValue(forcastModalAtom);

  return (forcastModalv && <div className="h-screen w-screen">
    <span className="bg-red-900">
      hello there
    </span>
  </div>)
}
