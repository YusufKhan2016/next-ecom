
"use client"

import Image from "next/image"
import Link from "next/link"

import { extendedCategories } from "@/staticsDatas/categories"


export default function FeaturedCategories() {
  return (
    <section className="py-8 container mx-auto px-30">
      <div className="mb-8">
        <h2 className="text-4xl font-bold">
          Featured <span className="text-orange-500">Categories</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {extendedCategories.map((category) => (
          <Link
            key={category.id}
            href={`/products?category=${category.id}`}
            className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-muted transition-colors group"
          >
            <div className="relative w-20 h-20 bg-muted rounded-lg overflow-hidden">
              <Image
                src={category.image}
                alt={category.label}
                height={500}
                width={500}
                loading="eager"
                className="object-cover group-hover:scale-110 transition-transform"
              />
            </div>
            <span className="text-xs font-medium text-center leading-tight">
              {category.label}
            </span>
          </Link>
        ))}
      </div>
    </section>  
  )
}
