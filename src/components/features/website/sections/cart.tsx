import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { ArrowRightCircleIcon, Trash2, Plus, Minus, X } from 'lucide-react'
import { Dispatch, SetStateAction, useState } from 'react'
import Image from 'next/image'

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
      name: "iPhone 1z7 Pro Max",
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

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const tax = subtotal * 0.1
  const total = subtotal + tax

  return (
    <>
      <section className={`${cartOpen? 'translate-x-0': 'translate-x-full'} fixed min-w-sm right-0 top-0 z-1000 h-screen duration-300 overflow-y-auto`}>
        <Card className='h-full rounded-none flex flex-col'>
          <CardHeader className='sticky top-0 bg-white z-10'>
            <div className='flex items-center justify-between'>
              <CardTitle>
                Cart ({cartItems.length})
              </CardTitle>

              <X
                className='cursor-pointer hover:scale-110 transition-transform'
                onClick={() => setCartOpen(false)}
              />
            </div>
          </CardHeader>

          <Separator orientation={'horizontal'} />

          <CardContent className='flex-1 overflow-y-auto py-4'>
            {cartItems.length === 0 ? (
              <div className='flex items-center justify-center h-full text-gray-500'>
                <p>Your cart is empty</p>
              </div>
            ) : (
              <div className='space-y-4'>
                {cartItems.map((item) => (
                  <div key={item.id} className='flex gap-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors'>
                    {/* Product Image */}
                    <div className='relative w-20 h-20 flex-shrink-0'>
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className='object-cover rounded'
                      />
                    </div>

                    {/* Product Details */}
                    <div className='flex-1 min-w-0'>
                      <h4 className='text-sm font-medium truncate'>{item.name}</h4>
                      <p className='text-lg font-bold text-blue-600'>
                        ৳{(item.price * item.quantity).toLocaleString()}
                      </p>

                      {/* Quantity Controls */}
                      <div className='flex items-center gap-2 mt-2'>
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

                    {/* Delete Button */}
                    <button
                      onClick={() => removeItem(item.id)}
                      className='text-red-500 hover:text-red-700 transition p-1'
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>

          <Separator orientation={'horizontal'} />

          {/* Cart Summary */}
          {cartItems.length > 0 && (
            <div className='p-4 space-y-3 bg-gray-50'>
              <div className='flex justify-between text-lg'>
                <span className='font-bold'>Subtotal</span>
                <span className='font-bold text-blue-600'>৳{subtotal.toLocaleString()}</span>
              </div>
            </div>
          )}

          <CardFooter className='flex gap-2'>
            <Button
              variant='outline'
              className='flex-1'
              onClick={() => setCartOpen(false)}
            >
              Continue Shopping
            </Button>
            <Button
              className='flex-1 bg-blue-600 hover:bg-blue-700'
              disabled={cartItems.length === 0}
            >
              Proceed to checkout
            </Button>
          </CardFooter>
        </Card>
      </section>
    </>
  )
}

export default Cart