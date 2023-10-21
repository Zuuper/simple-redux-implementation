import React, { ComponentProps } from 'react'


interface DefaultFormInputProps extends ComponentProps<'input'> {
  label: string,
  placeholder: string
}
export default function DefaultFormInput({ label, placeholder, ...rest }: DefaultFormInputProps) {
  return (
    <div className='flex flex-col'>
      <label>{label}</label>
      <input type='text' className='p-4 focus:outline-marine-blue border rounded-lg text-marine-blue' placeholder={placeholder} />
    </div>
  )
}
