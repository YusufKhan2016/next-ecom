import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowRightCircleIcon, Trash2, Plus, Minus, X, Trash } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'
import { Field, FieldGroup } from '@/components/ui/field'
import { useCartStore } from '@/store/website/cart'

type CartPropsType = {
  cartOpen?: boolean
  setCartOpen: Dispatch<SetStateAction<boolean>>
}

function Cart({ cartOpen, setCartOpen }: CartPropsType) {
  
  const cartList = useCartStore((state) => state.cart);
  const incrementQuantity = useCartStore((state) => state.incrementQuantity);
  const decrementQuantity = useCartStore((state) => state.decrementQuantity);
  const removeCartItem = useCartStore((state) => state.removeFromCart)
  const clearCart = useCartStore((state) => state.clearCart)

  const subtotal:number = cartList.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <section className={`${cartOpen? 'translate-x-0': 'translate-x-full'} fixed min-w-sm right-0 top-0 z-1000 h-[98vh] duration-300 overflow-y-auto`}>
        <Card className='h-full overflow-hidden flex flex-col'>
          <CardHeader className='sticky top-0 bg-foreground text-background z-10'>
            <Field 
              orientation={'horizontal'}
              className='justify-between sticky top-0 bg-foreground text-background z-10'
            >
              
              <CardTitle>
                Cart ({cartList.length})
              </CardTitle>

              <X
                className='cursor-pointer hover:scale-110 transition-transform'
                onClick={() => setCartOpen(false)}
              />
              
            </Field>
          </CardHeader>

          <Separator orientation={'horizontal'} />

          <CardContent className='flex-1 overflow-y-auto py-4'>
            {
              cartList.length === 0 ? (

                <div className='flex items-center justify-center h-full text-gray-500'>
                  <p>Your cart is empty</p>
                </div>
            
              ) : (
                  
                <div className='space-y-2 my-2'>
                  {cartList.map((item, idx) => (
                    <div key={idx} className='flex justify-between items-center p-1.5 border border-solid border-foreground/10 shadow-sm rounded-lg transition-colors'>

                      <div className='relative w-20 h-18 shrink-0'>
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          loading={'eager'}
                          sizes='200'
                          className='object-cover rounded'
                        />
                      </div>

                      <div className='w-full h-18 flex flex-col ml-2 justify-between'>

                        <h4 className='text-sm w-40 flex-wrap font-medium truncate'>
                          {item.name}
                        </h4>

                        <Field orientation={'horizontal'} className='flex items-center gap-1 border border-solid border-foreground/10 w-fit rounded-lg p-0.5 shadow-sm'>
                          <Button
                            onClick={() => decrementQuantity(item.id)}
                          >
                            <Minus size={16} />
                          </Button>

                          <span className='px-1 text-sm font-semibold'>{item.quantity}</span>

                          <Button
                            onClick={() => incrementQuantity(item.id)}
                          >
                            <Plus size={16} />
                          </Button>

                        </Field>

                      </div>

                      <div className='flex items-center gap-2'>

                        <p className='text-md font-semibold text-foreground'>
                          ৳{(item.price * item.quantity).toLocaleString()}
                        </p>

                        <Button
                          onClick={() => removeCartItem(item.id)}
                          className='text-destructive shadow-sm rounded-full py-6'
                        >
                          <Trash2 size={18} />
                        </Button>

                      </div>

                    </div>
                  ))}
                </div>
              )
            }
          </CardContent>

          <Separator orientation={'horizontal'} />

          <CardFooter className='flex flex-col gap-2'>

            {cartList.length > 0 && (

              <div className='px-4 w-full pt-2 space-y-3'>
                <div className='flex justify-between text-lg'>
                  <span className='font-bold'>Subtotal</span>
                  <span className='font-bold text-foreground'>৳{subtotal.toLocaleString()}</span>
                </div>
              </div>

            )}

            <Field>
              <FieldGroup className='gap-2 pt-3'>

                <Button
                  variant='outline'
                  onClick={() => setCartOpen(false)}
                >
                  Continue Shopping
                </Button>

                <Button
                  disabled={cartList.length === 0}
                >
                  Proceed to checkout
                </Button>

              </FieldGroup>
            </Field>
            
          
          </CardFooter>
        </Card>
      </section>
    </>
  )
}

export default Cart