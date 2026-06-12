"use client"

import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Header } from "@/components/ui/header"


type PropTypes = {
  headerFirstPart: string,
  headerSecondPart: string,
  banner?: string | StaticImageData,
  categories?: CategoryTypes[],
  products: ProductTypes[]  
}

type CategoryTypes = {
  id: string,
  label: string
}

type ProductTypes = {
  id: number,
  name: string,
  image: string | StaticImageData,
  price: number,
  originalPrice?: number | null,
  discount: number,
  category?: string | null
}

export default function FeaturedProducts({ 

  headerFirstPart, 
  headerSecondPart, 
  banner,
  categories, 
  products
  
}: PropTypes) {

  const [api, setApi] = useState<CarouselApi>()
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <>
      <section className="pt-8 container mx-auto px-4">

        {banner && (
          <div>
            <Image
              src={banner}
              alt="Great Deals"
              width={10000}
              height={300}
              loading="eager"
              className="rounded-xl mb-6"
            />
          </div>
        )}

        <div className="flex items-center justify-between mb-8">

          <Header
            firstPart={headerFirstPart}
            secondPart={headerSecondPart}
          />

          <div className="flex gap-2">
            <Button
              size={"lg"}
              onClick={() => api?.scrollPrev() }
              className="hover:bg-accent-foreground bg-gray-50 text-accent-foreground hover:text-white border border-solid duration-300 border-accent-foreground rounded-full flex items-center justify-center"
            >
              <ChevronLeft strokeWidth={2.5} />
            </Button>

            <Button
              size={"lg"}
              onClick={() => api?.scrollNext()}
              className="hover:bg-accent-foreground bg-gray-50 text-accent-foreground hover:text-white border border-solid duration-300 border-accent-foreground rounded-full flex items-center justify-center"
            >
              <ChevronRight strokeWidth={2.5} />
            </Button>
          </div>

        </div>

        <div className="flex gap-3 flex-wrap sticky top-10">
          {categories?.map((category, idx) => (

            <Button
              key={idx}
              onClick={() => setSelectedCategory(category.id)}
              variant={selectedCategory === category.id ? "default" : "outline"}
              className={`rounded-full transition-all ${
                selectedCategory === category.id
                  ? "bg-accent-foreground text-white"
                  : "border-accent-foreground/30 text-foreground hover:border-accent-foreground bg-gray-50"
              }`}
            >
              {category.label}
            </Button>

          ))}
        </div>

        <Carousel setApi={setApi}>
          <CarouselContent >
            {products
              .filter((product) => selectedCategory === "all" || product.category === selectedCategory)
              .map((product) => (

                <CarouselItem key={product.id} className="basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/5 2xl:basis-1/5 py-8">
                  <Card className="overflow-hidden shadow-lg h-full transition-shadow">
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
    </>
  )
}
