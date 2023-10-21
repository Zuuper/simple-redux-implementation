'use client'
import { PlanType } from '@/interfaces/formPayment'
import React, { ComponentProps } from 'react'


interface AddOnsCardProps extends ComponentProps<'input'> {
  title: string,
  description: string,
  pricing: number,
  option: PlanType,
  isActive?: boolean,
  changeHandler: () => void
}
export default function AddOnsCard({ changeHandler, isActive, title, description, pricing, option, ...rest }: AddOnsCardProps) {
  return (
    <div className={`p-8 flex items-center gap-4 rounded-lg w-full border hover:border-marine-blue ${isActive ? 'bg-pastel-blue bg-opacity-30 border-marine-blue' : 'border-gray-300'} hover:border-marine-blue`}>
      <input type='checkbox' className='w-6 h-6' {...rest} checked={isActive} />
      <div className='flex flex-col gap-2 flex-grow'>
        <h2 className='text-marine-blue font-bold leading-none text-lg'>{title}</h2>
        <p className='text-gray-500 leading-none '>{description} {isActive} </p>
      </div>
      <p className='text-gray-500'>${pricing}/{option == 'monthly' ? 'mo' : 'yr'}</p>
    </div>
  )
}
