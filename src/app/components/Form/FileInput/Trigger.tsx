'use client'

import { UploadCloud } from "lucide-react";
import { useFileInput } from "./Root"


export function Trigger() {
  const { id } = useFileInput();
  return (
    <div className="group flex-1 rounded-lg hover:bg-violet-25">
      <label htmlFor={id} className="flex flex-col items-center justify-center h-32 w-full gap-y-3 border border-zinc-200 rounded-lg cursor-pointer">
        <div className="rounded-full  bg-zinc-100 p-2 border-6 border-zinc-50 group-hover:bg-violet-100 group-hover:border-violet-50">
          <UploadCloud className="text-zinc-600 h-5 w-5 group-hover:text-violet-700" />
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-sm text-zinc-500"><span className="font-semibold text-violet-700">Click to upload</span> or drag and drop</span>
          <span className="text-xs text-zinc-500">SVG, PNG, JPG or GIF (max. 800x400px)</span>
        </div>
      </label>
    </div>
  )
}