"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

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

export default function NewTrends() {
  const [api, setApi] = useState<CarouselApi>()

  useEffect(() => {
    const data = api?.scrollProgress;
    console.log(data);
  })

  return (
    <section className="py-8 container mx-auto px-30">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-4xl font-bold">
          New <span className="text-orange-500">Trends</span>
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => api?.scrollPrev()}
            className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-muted transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => api?.scrollNext()}
            className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <Carousel setApi={setApi}>
        <CarouselContent >
          {products.map((product) => (
            <CarouselItem key={product.id} className="py-12 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4 xl:basis-1/5">
              <Card className="overflow-hidden shadow-lg h-full transition-shadow">
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

                <div className="p-4 flex flex-col h-full">
                  <h3 className="font-medium text-sm mb-2 line-clamp-2">
                    {product.name}
                  </h3>

                  <div className="flex items-baseline gap-2 mb-2">
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
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  )
}
