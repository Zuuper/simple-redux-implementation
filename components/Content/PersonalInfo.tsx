import React from 'react'
import PersonalInfoForm from '../Form/PersonalInfo'
import StepHeader from '../UI/Header/StepHeader'

export default function PersonalInfo() {
  return (
    <div className='flex flex-col'>
      <StepHeader
        title='Personal Info'
        description='Please provice your name, email address and phone number' />

      <PersonalInfoForm />
    </div>
  )
}
