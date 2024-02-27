'use client'
import * as Tabs from "@radix-ui/react-tabs"
import { motion } from "framer-motion"

interface TabItemProps {
  value: string;
  title: string;
  isSelected?: boolean;
}

export function TabItem({ value, title, isSelected = false }: TabItemProps) {
  return (
    <Tabs.Trigger value={value} className="group relative px-1 pb-4 font-medium text-sm text-zinc-500 hover:text-violet-700 data-[state=active]:text-violet-700 outline-none">
      <span className="group-focus-visible:ring-2 group-focus-visible:ring-violet-400 rounded group-focus-visible:ring-offset-4">{title}</span>
      {isSelected && (
        <motion.div layoutId="activeTab" className="absolute left-0 right-0 h-0.5 -bottom-px bg-violet-700" />
      )}
    </Tabs.Trigger>
  )
}