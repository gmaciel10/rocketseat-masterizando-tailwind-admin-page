'use client'

import { User } from "lucide-react";
import { useFileInput } from "./Root";
import { useMemo } from "react";

export function ImagePreview() {
  const { files } = useFileInput()
  const previewURL = useMemo(() => {
    if (files.length === 0) {
      return null;
    }
    return URL.createObjectURL(files[0]);
  }, [files])

  if (previewURL === null) {
    return (
      <div className="flex gap-5">
        <div className="flex h-16 w-16 items-center justify-center bg-violet-50 rounded-full">
          <User className="h-6 w-6 text-violet-600" />
        </div>
      </div>
    )
  } else {
    return (
      <img src={previewURL} alt="" className=" h-16 w-16 rounded-full object-cover"/>
    )
  }


}