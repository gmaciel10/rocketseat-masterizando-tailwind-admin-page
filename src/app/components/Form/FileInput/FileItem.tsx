import { formatBytes } from "@/utils/format-bytes";
import { CheckCircle2, Trash2, UploadCloud } from "lucide-react";
import { Button } from "../../Button";
import { tv, VariantProps } from "tailwind-variants";

const fileItem = tv({
  slots: {
    container: 'group flex items-start gap-4 p-4 rounded-lg border border-zinc-200',
    icon: 'rounded-full border-4 border-violet-100 bg-violet-200 p-2 text-violet-600',
    deleteButton: ''
  },
  variants: {
    state: {
      progress: {
        container: ''
      },
      complete: {
        container: [
          'border-violet-500'
        ]
      },
      error: {
        container: [
          'bg-error-25 border-error-300'
        ],
        icon: [
          'border-error-50 bg-error-100 text-error-600'
        ],
        deleteButton: [
          'text-error-700',
          'hover:text-error-900'
        ]
      }
    }
  },
  defaultVariants: {
    state: 'progress'
  }
})

export interface FileItem extends VariantProps<typeof fileItem> {
  name: string;
  size: number;
}

export function FileItem({ state, name, size }: FileItem) {
  const { container, icon, deleteButton } = fileItem({ state })
  return (
    <div className={container()}>
      <div className={icon()}>
        <UploadCloud className="h-4 w-4" />
      </div>
      {state === 'error' ? (<div className="flex flex-col flex-1 items-start gap-1">
        <div className="flex flex-col">
          <span className="text-error-700 font-medium text-sm">Upload failed, please try again.</span>
          <span className="text-error-600 text-sm uppercase">{name}</span>
        </div >
        <button className="text-sm font-semibold text-red-700 hover:text-red-900">Try again</button>
      </div >) : (
        <div className="flex flex-col flex-1 items-start gap-1">
          <div className="flex flex-col">
            <span className="text-zinc-700 font-medium text-sm">{name}</span>
            <span className="text-zinc-500 text-sm uppercase">{formatBytes(size)}</span>
          </div >
          <div className="flex w-full items-center gap-3">
            <div className="h-2 w-full rounded-full bg-violet-100">
              <div className="h-2 rounded bg-violet-600" style={{
                width: state === 'complete' ? '100%' : '80%'
              }} />
            </div>
            <span className="text-sm text-zinc-700 font-medium">
              {state === 'complete' ? ('100%') : ('80%')}
            </span>
          </div>
        </div >)
      }
      {
        state === 'complete' ? (
          <CheckCircle2 className="h-5 w-5 fill-violet-600 text-white" />
        ) :
          (<Button type="submit" variant="ghost" className={deleteButton()}>
            <Trash2 className="h-5 w-5" />
          </Button>)
      }
    </div >
  )
}