import { CardTitle } from '@/components/ui/card'
import { Field, FieldGroup, FieldLabel } from '@/components/ui/field'
import React from 'react'

export default function AccountPage() {
  return (
    <>
      <FieldGroup>
        <Field className='gap-1!'>
          <FieldLabel className='text-md'>Name</FieldLabel>
          <p className='text-sm'>Hasan Yusuf Khan</p>        
        </Field>
        <Field className='gap-1!'>
          <FieldLabel className='text-md'>Email Address</FieldLabel>
          <p className='text-sm'>hasanrafsun5@gmail.com</p>        
        </Field>
        <Field className='gap-1!'>
          <FieldLabel className='text-md'>Phone Number</FieldLabel>
          <p className='text-sm'>01647724824</p>        
        </Field>
        <Field className='gap-1!'>
          <FieldLabel className='text-md'>Address</FieldLabel>
          <p className='text-sm'>RSH Tower, Mirpur 11, Dhaka</p>        
        </Field>
      </FieldGroup>
    </>
  )
}
