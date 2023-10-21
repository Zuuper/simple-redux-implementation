'use client'
import React, { useState } from 'react'
import StepHeader from '../UI/Header/StepHeader'
import AddOnsCard from '../UI/Card/AddOnsCard'
import { PlanType } from '@/interfaces/formPayment'

const PLANS = [
  { id: 1, name: 'Online Service', monthlyPrice: 1, yearlyPrice: 10, description: 'Access to multiplayer games' },
  { id: 2, name: 'Large Storage', monthlyPrice: 2, yearlyPrice: 20, description: 'Extra 1TB of cloud save' },
  { id: 3, name: 'Customizable profile', monthlyPrice: 2, yearlyPrice: 20, description: 'Custom theme on your profile' },
]

export default function PickAddOns() {
  const [planType, setPlanType] = useState<PlanType>('monthly')
  const [selectedAddOns, setSelectedAddOns] = useState<number[]>([])
  const selectAddOnsHandler = (id: number) => {
    const data = selectedAddOns
    if (data.includes(id)) {
      console.log('kesini cuk')
      data.filter((item) => item !== id)
    } else {
      data.push(id)
    }
    console.log(data)
    setSelectedAddOns(data)
  }
  return (
    <div className='flex flex-col gap-4'>
      <StepHeader title='Pick Add-ons'
        description='Add ons help enhace your gaming experience' />
      {PLANS.map((item) => {
        return <AddOnsCard
          key={item.id}
          title={item.name}
          description={item.description}
          pricing={planType == 'monthly' ? item.monthlyPrice : item.yearlyPrice}
          option={planType}
          isActive={selectedAddOns.includes(item.id)}
          changeHandler={() => selectAddOnsHandler(item.id)} />
      })}

    </div>
  )
}
