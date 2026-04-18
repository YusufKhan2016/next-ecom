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
import { products } from "@/staticsDatas/products"

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
          loading="eager"
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
                      loading="eager"
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
