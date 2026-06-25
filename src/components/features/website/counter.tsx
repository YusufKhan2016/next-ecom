"use client"

import { Button } from '@/components/ui/button'
import { Field } from '@/components/ui/field'
import { useCartStore } from '@/store/website/cart'
import { Minus, Plus } from 'lucide-react'
import React from 'react'

interface CounterType {
  id: number
  quantity: number
}

export default function Counter({ id, quantity } : CounterType) {

  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);

  return (
    <>
      <Field
        orientation={'horizontal'} 
        className='flex items-center gap-1 border border-solid border-foreground/10 w-fit rounded-lg p-0.5 shadow-sm'
      >
        <Button
          onClick={() => decrementQuantity(id)}
        >
          <Minus size={16} />
        </Button>

        <span className='px-1 text-sm font-semibold'>{quantity}</span>

        <Button
          onClick={() => incrementQuantity(id)}
        >
          <Plus size={16} />
        </Button>

      </Field>
    </>
  )
}
