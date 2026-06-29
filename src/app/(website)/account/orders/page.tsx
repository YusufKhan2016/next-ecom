import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader } from '@/components/ui/card'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function OrdersPage() {
  return (
    <>
      <Card className='overflow-hidden'>
        <CardHeader className='bg-accent p-5'>
          <div className='flex justify-between'>
            <div className='space-y-1'>
              <div className='flex gap-2 items-center'>
                <h5>Order Id: <span className='font-bold'>344708</span></h5>
                <Badge className='text-sm py-3'>Payment Pending</Badge>
              </div>
              
              <CardDescription>Placed on 29 Jun 2026</CardDescription>
            </div>

            <Button asChild>
              <Link href={'/account/orders/1'}>View Details</Link>
            </Button>
          </div>

        </CardHeader>

        <CardContent>
          <div className='pt-5 px-5 flex justify-between items-center'>
            <div className='flex gap-3 items-center'>
              <div className='relative size-15 overflow-hidden rounded-lg'>
                <Image
                  src={'https://images.pexels.com/photos/17518760/pexels-photo-17518760.jpeg'}
                  alt='order image'
                  sizes='200px'
                  fill
                />
              </div>
              <h4 className='font-medium'>Iphone 17 pro max</h4>
            </div>

            <div className='text-end'>
              <p>QTY: 1</p>
              <p className='font-medium'>Total: 159000</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </>
  )
}
  