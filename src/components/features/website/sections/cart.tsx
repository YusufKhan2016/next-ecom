import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowRightCircleIcon, Trash2, Plus, Minus, X, Trash } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'
import { Field, FieldGroup } from '@/components/ui/field'

type CartItem = {
  id: number
  name: string
  image: string
  price: number
  quantity: number
}

type CartPropsType = {
  cartOpen?: boolean
  setCartOpen: Dispatch<SetStateAction<boolean>>
}

function Cart({ cartOpen, setCartOpen }: CartPropsType) {

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      name: "iPhone 1z7 Pro Maxasfsfsfasdfsfasdfasfdsfafd",
      image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      price: 169500,
      quantity: 1,
    },
    {
      id: 2,
      name: "Galaxy S26 Ultra 5G",
      image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      price: 133500,
      quantity: 2,
    },
    {
      id: 6,
      name: "OnePlus 13",
      image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      price: 59999,
      quantity: 1,
    },
    {
      id: 6,
      name: "OnePlus 13",
      image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      price: 59999,
      quantity: 1,
    },
    {
      id: 6,
      name: "OnePlus 13",
      image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
      price: 59999,
      quantity: 1,
    },
            
  ])

  const updateQuantity = (id: number, change: number) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    )
  }

  const removeItem = (id: number) => {
    setCartItems(prev => prev.filter(item => item.id !== id))
  }

  const subtotal:number = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  return (
    <>
      <section className={`${cartOpen? 'translate-y-0': 'translate-y-full'} fixed min-w-sm right-0 top-0 z-1000 h-screen duration-300 overflow-y-auto`}>
        <Card className='h-full overflow-hidden flex flex-col'>
          <CardHeader className='sticky top-0 bg-foreground text-background z-10'>
            <Field 
              orientation={'horizontal'}
              className='justify-between sticky top-0 bg-foreground text-background z-10'
            >
              
              <CardTitle>
                Cart ({cartItems.length})
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
              cartItems.length === 0 ? (

                <div className='flex items-center justify-center h-full text-gray-500'>
                  <p>Your cart is empty</p>
                </div>
            
              ) : (
                  
                <div className='space-y-2 my-2'>
                  {cartItems.map((item, idx) => (
                    <div key={idx} className='flex justify-between items-center p-1.5 hover:bg-gray-50 transition-colors'>

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

                        <div className='flex items-center gap-2'>
                          <button
                            onClick={() => updateQuantity(item.id, -1)}
                            className='p-1 hover:bg-gray-200 rounded transition'
                          >
                            <Minus size={16} />
                          </button>

                          <span className='w-6 text-center text-sm font-semibold'>{item.quantity}</span>

                          <button
                            onClick={() => updateQuantity(item.id, 1)}
                            className='p-1 hover:bg-gray-200 rounded transition'
                          >
                            <Plus size={16} />
                          </button>

                        </div>

                      </div>

                      <div className='flex gap-2'>

                        <p className='text-md font-bold text-foreground'>
                          ৳{(item.price * item.quantity).toLocaleString()}
                        </p>

                        <button
                          onClick={() => removeItem(item.id)}
                          className='text-red-500 hover:text-red-700 transition p-1'
                        >
                          <Trash2 size={18} />
                        </button>

                      </div>

                    </div>
                  ))}
                </div>
              )
            }
          </CardContent>

          <Separator orientation={'horizontal'} />

          <CardFooter className='flex flex-col gap-2'>

            {cartItems.length > 0 && (

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
                  disabled={cartItems.length === 0}
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