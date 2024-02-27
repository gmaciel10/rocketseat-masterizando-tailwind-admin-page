'use client'

import { Trash2, UploadCloud } from "lucide-react";
import { useFileInput } from "./Root"
import { formatBytes } from "../../../../utils/format-bytes"
import { useAutoAnimate } from "@formkit/auto-animate/react"

export function FileList() {
  const { files } = useFileInput();
  const [parent] = useAutoAnimate();
  return (
    <div ref={parent} className="mt-4 space-y-3">
      {files.map(file => {
        return (
          <div className="group flex items-start gap-4 p-4 rounded-lg border border-zinc-200">
            <div className="rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600">
              <UploadCloud className="h-4 w-4" />
            </div>
            <div className="flex flex-col flex-1 items-start gap-1">
              <div className="flex flex-col">
                <span className="text-zinc-700 font-medium text-sm">{file.name}</span>
                <span className="text-zinc-500 text-sm uppercase">{formatBytes(file.size)}</span>
              </div>
              <div className="flex w-full items-center gap-3">
                <div className="h-2 w-full rounded-full bg-violet-100">
                  <div className="h-2 w-4/5 rounded bg-violet-600" />
                </div>
                <span className="text-sm text-zinc-700 font-medium">80%</span>
              </div>
            </div>
            <button type="submit" className="ml-auto px-2 hover:bg-zinc-50 rounded-md">
              <Trash2 className="h-5 w-5 text-zinc-500" />
            </button>
            <img src="" alt="" />
          </div>
        )
      })}
    </div>
  )
}