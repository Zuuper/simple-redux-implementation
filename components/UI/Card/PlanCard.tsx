import { PlanType } from '@/interfaces/formPayment'
import Image, { StaticImageData } from 'next/image'
import React, { ComponentProps } from 'react'

interface PlanCardProps extends ComponentProps<'div'> {
  title: string,
  pricing: number,
  option: PlanType
  isActive?: boolean
  icon: string | StaticImageData
}


export default function PlanCard({ title, pricing, option, icon, isActive, ...rest }: PlanCardProps) {
  return (
    <div className={`p-6 border rounded-xl flex flex-col justify-between h-56 w-48 ${isActive ? 'bg-pastel-blue bg-opacity-30 border-marine-blue' : 'border-gray-300'} hover:border-marine-blue`} {...rest}>
      <div className='relative w-12 h-12'>
        <Image src={icon} alt='title' fill />
      </div>
      <div>
        <h3 className='text-xl text-marine-blue font-medium leading-none mb-2'>{title}</h3>
        <p className='text-gray-500 leading-none mb-2'>${pricing}/{option == 'monthly' ? 'mo' : 'yr'}</p>
        {option == 'yearly' ?
          <p className='leading-none text-marine-blue'>2 months free</p>
          : <></>
        }
      </div>
    </div>
  )
}
