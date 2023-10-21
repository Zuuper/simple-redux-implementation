'use client'
import React from 'react'
import Button from '../UI/Button'
import DefaultFormInput from '../UI/Input'

export default function PersonalInfoForm() {

  return (
    <form onSubmit={() => null} className='flex flex-col justify-between'>
      <div className='flex flex-col gap-4 flex-grow mb-12'>
        <DefaultFormInput label='Name' placeholder='Input your name' />
        <DefaultFormInput label='Email' placeholder='Input your Email' />
        <DefaultFormInput label='Phone Number' placeholder='Input your Phone number' />
      </div>
      <div className='flex justify-end '>
        <Button title='Next step' buttonType='primary' type='submit' />
      </div>
    </form>
  )
}
