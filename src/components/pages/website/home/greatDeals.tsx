"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

import acGreatDeal from "@/assets/home/ac-mid-great-deal.webp"

const products = [
  {
    id: 1,
    name: "iPhone 17 Pro Max",
    image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    price: 169500,
    originalPrice: 175000,
    discount: 5500,
  },
  {
    id: 2,
    name: "Galaxy S26 Ultra 5G",
    image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    price: 133500,
    originalPrice: 175000,
    discount: 41500,
  },
  {
    id: 3,
    name: "Galaxy A57 5G",
    image: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    price: 53500,
    originalPrice: null,
    discount: 0,
  },
  {
    id: 4,
    name: "Galaxy A37 5G",
    image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    price: 43000,
    originalPrice: null,
    discount: 0,
  },
  {
    id: 5,
    name: "Redmi Pad 2",
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    price: 26000, 
    originalPrice: null,
    discount: 0,
  },
  {
    id: 6,
    name: "OnePlus 13",
    image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=400&h=500&fit=crop",
    price: 59999,
    originalPrice: 65000,
    discount: 5001,
  },
]

export default function GreatDeals() {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    const data = api?.scrollProgress;
    console.log(data);
  })

  return (
    <section className="pt-8 container mx-auto px-30">
      
      <div>
        <Image
          src={acGreatDeal}
          alt="Great Deals"
          width={1200}
          height={300}
          className="rounded-lg mb-6"
        />
      </div>

      <div className="flex items-center justify-between">
        
        <h2 className="text-4xl font-bold">
          Great <span className="text-orange-500">Deals</span>
        </h2>

        <div className="flex gap-2">
          <button
            onClick={() => api?.scrollPrev()}
            className="w-10 h-10 hover:bg-amber-600 bg-amber-50 text-amber-600 hover:text-amber-50 border border-solid duration-300 border-amber-600 rounded-full flex items-center justify-center"
          >
            <ChevronLeft />
          </button>

          <button
            onClick={() => api?.scrollNext()}
            className="w-10 h-10 hover:bg-amber-600 bg-amber-50 text-amber-600 hover:text-amber-50 border border-solid duration-300 border-amber-600 rounded-full flex items-center justify-center"
          >
            <ChevronRight/>
          </button>
        </div>

      </div>

      <Carousel setApi={setApi}>
        <CarouselContent >
          {products.map((product) => (
            <CarouselItem key={product.id} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 2xl:basis-1/5 py-8">
              <Card className="overflow-hidden h-full transition-shadow">
                <Link href={`/products/${product.id}`} className="block">
                  <div className="relative overflow-hidden bg-muted">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={300}
                      height={380}
                      className="w-full h-60 object-cover scale-105 transition-transform"
                    />
                  </div>
                </Link>

                <CardContent className="p-2 my-2 flex flex-col gap-2 h-full">
                  <h3 className="font-medium text-sm line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-baseline gap-2">
                    <span className="text-lg font-bold">
                      ৳ {product.price.toLocaleString()}
                    </span>
                    {product.originalPrice && (
                      <span className="text-xs text-muted-foreground line-through">
                        ৳ {product.originalPrice.toLocaleString()}
                      </span>
                    )}
                  </div>

                  {product.discount > 0 && (
                    <Badge className="bg-green-100 text-green-700 hover:bg-green-100 border-0">
                      ৳ {product.discount.toLocaleString()} OFF
                    </Badge>
                  )}
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
