import React from 'react'

interface StepHeaderProps {
  title: string,
  description: string
}
export default function StepHeader({ title, description }: StepHeaderProps) {
  return (
    <div className='flex flex-col gap-4 mb-12'>
      <h1 className='leading-none text-4xl font-bold text-marine-blue'>{title}</h1>
      <p className='leading-none text-gray-400'>{description}</p>
    </div>
  )
}
