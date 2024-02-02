'use client';
import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown } from "lucide-react";
import { ReactNode } from 'react';
export interface SelectProps extends SelectPrimitive.SelectProps {
  children: ReactNode;
  placeholder: string;
}

export function Select({ children, placeholder, ...props }: SelectProps) {
  return (
    <SelectPrimitive.Root {...props}>
      <SelectPrimitive.Trigger className="flex h-11 w-full items-center justify-between gap-2 rounded-lg border border-zinc-300 px-3 py-2 shadow-sm data-[placeholder]:text-zinc-600">
        <SelectPrimitive.Value placeholder="Select a country" className="text-black" />
        <SelectPrimitive.Icon>
          <ChevronDown className="h5 w-5 text-zinc-500" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content side="bottom" position='popper' className='shadow-sm z-10 border border-zinc-100 bg-white w-[--radix-select-trigger-width] overflow-hidden' sideOffset={8} >
          <SelectPrimitive.Viewport>
            {children}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  )
}