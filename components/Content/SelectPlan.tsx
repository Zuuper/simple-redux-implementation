'use client'
import React, { useState } from 'react'
import StepHeader from '../UI/Header/StepHeader'
import PlanCard from '../UI/Card/PlanCard'
import { PlanType } from '@/interfaces/formPayment'
import IconArcade from '@/public/icon-arcade.svg'
import IconAdvance from '@/public/icon-advanced.svg'
import IconPro from '@/public/icon-pro.svg'
import Button from '../UI/Button'
const PLANS = [
  { id: 1, name: 'Arcade', monthlyPrice: 9, yearlyPrice: 90, icon: IconArcade },
  { id: 2, name: 'Advance', monthlyPrice: 12, yearlyPrice: 120, icon: IconAdvance },
  { id: 3, name: 'Pro', monthlyPrice: 15, yearlyPrice: 150, icon: IconPro },
]
export default function SelectPlan() {
  const [planType, setPlanType] = useState<PlanType>('yearly')
  const [selectedPlan, setSelectedPlan] = useState<number>(0)
  return (
    <div className='flex flex-col'>
      <StepHeader
        title='Select your Plan'
        description='you have the option of monthly and yearly billing '
      />
      <div className='flex gap-4'>
        {PLANS.map((item) => {
          return <PlanCard
            icon={item.icon}
            key={item.id}
            title={item.name}
            pricing={planType == 'monthly' ? item.monthlyPrice : item.yearlyPrice}
            option={planType}
            isActive={selectedPlan == item.id}
            onClick={() => setSelectedPlan(item.id)}
          />
        })}
      </div>
      <div className='flex justify-between mt-16'>
        <Button title='Go back' buttonType='ghost' type='submit' />
        <Button title='Next step' buttonType='primary' type='submit' />
      </div>
    </div>
  )
}
