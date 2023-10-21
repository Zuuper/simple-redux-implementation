'use client'
import PersonalInfo from '@/components/Content/PersonalInfo'
import PickAddOns from '@/components/Content/PickAddOns'
import SelectPlan from '@/components/Content/SelectPlan'
import Summary from '@/components/Content/Summary'
import { useAppSelector } from '@/hooks/useRedux'
import React, { useMemo } from 'react'

export default function HomePage() {
  const step = useAppSelector(state => state.formInput.step)
  const stepPage = useMemo(() => {
    return [
      <PersonalInfo key={'personal-info'} />,
      <SelectPlan key={'personal-info-1'} />,
      <PickAddOns key={'personal-info-2'} />,
      <Summary key={'personal-info-3'} />,

    ]
  }, [])
  return (
    <div className='py-16 px-24 h-full'>{stepPage[step - 1]}</div>
  )
}
