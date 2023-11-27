import { Logo } from "./Logo";
import { LogOut, Search } from "lucide-react"
import { NavItem } from "./NavItem";
import { Home, BarChart, SquareStack, CheckSquare, Flag, Users } from "lucide-react";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import * as Input from "../Form/Input"

export function SideBar() {
  return (
    <aside className='flex flex-col gap-6 py-8 px-5 border-r border-zinc-200'>
      <Logo />
      <Input.Root>
        <Input.Prefix>
          <Search className="h-5 w-5 text-zinc-500" />
        </Input.Prefix>
        <Input.Control placeholder="Search" />
      </Input.Root>
      <nav className="space-y-0.5">
        <NavItem key={null} icon={Home} title="Home" />
        <NavItem key={null} icon={BarChart} title="Dashboard" />
        <NavItem key={null} icon={SquareStack} title="Projects" />
        <NavItem key={null} icon={CheckSquare} title="Tasks" />
        <NavItem key={null} icon={Flag} title="Reporting" />
        <NavItem key={null} icon={Users} title="Users" />
      </nav>
      <UsedSpaceWidget />
      <div className="h-px bg-zinc-200" />
      <Profile />
    </aside>
  )
}