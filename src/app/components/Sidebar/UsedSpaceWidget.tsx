import { Cog, LifeBuoy } from "lucide-react"
import { NavItem } from "./NavItem";
export function UsedSpaceWidget() {
  return (
    <div className="flex flex-col gap-6 mt-auto">
      <nav className="space-y-0.5">
        <NavItem key={null} icon={LifeBuoy} title="Support" />
        <NavItem key={null} icon={Cog} title="Settings" />
      </nav>
      <div className="flex flex-col gap-4 bg-violet-50 rounded-lg px-4 py-5">
        <div className="flex flex-col space-y-1">
          <span className="font-medium text-sm/5 text-violet-700">Used space</span>
          <span className="text-sm/5 text-violet-500">Your team has used 80% of your <br /> available space. Need more?</span>
        </div>
        <div className="h-2 w-full rounded-full bg-violet-100">
          <div className="h-2 w-4/5 rounded bg-violet-600" />
        </div>
        <div className="flex space-x-3">
          <button type="button" className="font-semibold text-sm text-violet-500 hover:text-violet-700">Dismiss</button>
          <button type="button" className="font-semibold text-sm text-violet-700 hover:text-violet-900">Upgrade plan</button>
        </div>
      </div>
    </div>
  )
}