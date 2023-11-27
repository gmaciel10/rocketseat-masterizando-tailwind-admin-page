import { ComponentProps } from "react";

interface ButtonProps extends ComponentProps<'button'> {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <button {...rest}>{title}</button>
  )
}