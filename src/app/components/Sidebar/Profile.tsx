import { LogOut } from "lucide-react";
import { Button } from "../Button";

export function Profile() {
  return (
    <div className="flex items-center gap-3">
      <img src="https://avatars.githubusercontent.com/u/67983309?v=4" alt="" className="h-10 w-10 rounded-full" />
      <div className="flex flex-1 flex-col truncate">
        <span className="font-semibold text-sm text-zinc-700">Guilherme Maciel</span>
        <span className="font-semibold text-sm text-zinc-500 truncate">guilherme.maciel@alcans.com.br</span>
      </div>
      < Button type="submit" variant="ghost">
        <LogOut className="h-5 w-5 text-zinc-500" />
      </Button>
    </div>
  )
}