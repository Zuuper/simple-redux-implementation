import React from 'react'
import StepHeader from '../UI/Header/StepHeader'
import { useAppSelector } from '@/hooks/useRedux'
import Button from '../UI/Button'

export default function Summary() {
  const plan = useAppSelector(state => state.formInput.plan)
  const addOns = useAppSelector(state => state.formInput.addOns)
  return (
    <div>
      <StepHeader
        title='Finishing Up'
        description='Double-check everything looks OK begore confirm'
      />
      <div className='p-8 bg-pastel-blue bg-opacity-30'>
        <div className='flex justify-between '>
          <div className='flex flex-col gap-2'>
            <p className='font-bold text-marine-blue leading-none '>Arcade{plan.name} {'('} {plan.planType}{')'}</p>
            <p className='text-gray-400 underline leading-none'>change</p>
          </div>
          <div className='w-16 text-marine-blue font-bold text-xl text-end'>{plan.price}/{plan.planType == 'monthly' ? 'mo' : 'yr'}</div>
        </div>
        <hr className='border-2' />
        {addOns.length > 0 ?? addOns.map((item) => {
          return <div key={item.name} className='flex justify-between'>
            <p className='font-bold text-marine-blue leading-none'>{item.name}</p>
            <p className='w-16 text-marine-blue text-end'>{item.name}/{plan.planType == 'monthly' ? 'mo' : 'yr'}</p>
          </div>
        })}
      </div>
      <div className='p-8 flex justify-between  '>
        <p className='text-gray-400'>Total {'('}per {plan.planType == 'monthly' ? 'month' : 'year'} {')'}</p>
        <p className='text-xl text-marine-blue font-bold'>{plan.price}{plan.planType == 'monthly' ? 'mo' : 'yr'}</p>
      </div>

      <div className='flex justify-between mt-16'>
        <Button title='Go back' buttonType='ghost' type='submit' />
        <Button title='Next step' buttonType='primary' type='submit' />
      </div>
    </div>
  )
}
