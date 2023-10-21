'use client'
import { useAppSelector } from '@/hooks/useRedux'
import React from 'react'
type FormStep = {
  id: number,
  title: string,
  description: string
}
const formSteps: FormStep[] = [
  { id: 1, title: 'Step 1', description: 'Your Info' },
  { id: 2, title: 'Step 2', description: 'Select Plan' },
  { id: 3, title: 'Step 3', description: 'Add-Ons' },
  { id: 4, title: 'Step 4', description: 'Summary' },
]

const Steps = ({ isActive, step }: { isActive?: boolean, step: FormStep }) => {
  return <div className='flex gap-4 items-center'>
    <div className={`h-16 w-16 flex items-center justify-center text-center leading-none  text-xl font-bold p-4 border border-pastel-blue rounded-full ${isActive ? 'bg-pastel-blue text-marine-blue' : 'text-white'}`}>{step.id}</div>
    <div className=' max-sm:hidden'>
      <h2 className='uppercase mb-2 text-pastel-blue text-xl leading-none'>{step.title}</h2>
      <p className='uppercase font-bold text-white text-2xl leading-none'>{step.description}</p>
    </div>
  </div>
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const step = useAppSelector((state) => state.formInput.step)
  return (
    <div className='grid grid-cols-12 gap-4 p-4 h-screen'>
      <section className='col-span-4 flex md:flex-col gap-12 md:p-16 bg-mobile-sidebar-background md:bg-desktop-sidebar-background bg-cover h-full'>{formSteps.map((item) => {
        return <Steps key={item.id} isActive={step == item.id} step={item} />
      })}</section>
      <section className='col-span-8 h-screen'>{children}</section>
    </div>
  )
}
