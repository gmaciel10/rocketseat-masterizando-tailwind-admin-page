'use client'

import { Logo } from "./Logo";
import { Menu, Search } from "lucide-react"
import { NavItem } from "./NavItem";
import { Home, BarChart, SquareStack, CheckSquare, Flag, Users } from "lucide-react";
import { UsedSpaceWidget } from "./UsedSpaceWidget";
import { Profile } from "./Profile";
import * as Input from "../Form/Input"
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from "../Button";

export function SideBar() {
  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />
        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>
      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
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
      </Collapsible.Content>
    </Collapsible.Root>
  )
}