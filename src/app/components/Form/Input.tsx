import { ComponentProps } from "react";

type RootProps = ComponentProps<'div'>;

export function Root(props: RootProps) {
  return <div className="flex mx-1 w-full border items-center gap-2 border-zinc-300 rounded-lg py-2 px-3 shadow-sm" {...props} />

}

type PrefixProps = ComponentProps<'div'>;

export function Prefix(props: PrefixProps) {
   return <div {...props} />
}

type ControlProps = ComponentProps<'input'>;

export function Control(props: ControlProps) {
  return <input className="flex-1 border-0 bg-transparent p-0 text-zinc-900 placeholder-zinc-600 outline-none" type="text" {...props} />
}