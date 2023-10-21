import React, { ComponentProps } from 'react'

type ButtonType = 'primary' | 'ghost'
interface ButtonProps extends ComponentProps<'button'> {
  title: string
  buttonType: ButtonType
}
const ButtonStyle = {
  'primary': 'bg-marine-blue text-white ',
  'ghost': 'text-gray-500'

} as { [keyof in ButtonType]: string }
export default function Button({ title, buttonType, type, ...rest }: ButtonProps) {

  return (
    <button {...rest} type={type} className={`${ButtonStyle[buttonType]} font-medium p-4 rounded-lg hover:bg-purplish-blue hover:text-white`}>{title}</button>
  )
}
