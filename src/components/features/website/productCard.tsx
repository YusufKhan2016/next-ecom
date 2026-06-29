import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter } from '@/components/ui/card'
import { useCartStore } from '@/store/website/cart'
import { ShoppingCart } from 'lucide-react'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'

interface ProductTypes {
  id: number,
  name: string,
  image: string | StaticImageData,
  price: number,
  originalPrice?: number | null,
  discount: number,
  category?: string | null
}

export default function ProductCard({ product } : { product: ProductTypes }) {

  const addToCart = useCartStore((state) => state.addToCart)

  return (
    <>
      <Card
        className="drop-shadow-xl overflow-hidden"
      >
        {/* Product Image */}
        <Link
          href={`/product/${product?.id}`} 
          className="relative bg-gray-100 block aspect-5/6 overflow-hidden group"
        >
          <Image
            src={product?.image}
            alt={product?.name}
            sizes='300px'
            fill
            loading={'eager'}
            className="object-cover"
          />
        </Link>

        {/* Product Info */}
        <CardContent className='mt-2'>
          <Link href={`/product/${product.id}`} className="text-sm font-medium line-clamp-2 mb-4">
            {product.name}
          </Link>

          <div className="flex items-center gap-2">
            <span className="text-lg font-bold text-gray-900">
              ৳{product.price.toLocaleString()}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">
                ৳{product.originalPrice.toLocaleString()}
              </span>
            )}
          </div>
        </CardContent>

        <CardFooter className='space-x-1'>
          <Button variant={'outline'} className="flex-1 cursor-pointer">
            Buy Now
          </Button>

          <Button
            onClick={() => {
              addToCart({
                id: product.id,
                name: product.name,
                image: product.image,
                price: product.price,
              })
            }}
            className='cursor-pointer'
          >
            <ShoppingCart />
          </Button>
        </CardFooter>
      </Card>
    </>
  )
}
