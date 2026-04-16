
"use client"

import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    id: "mobile-phone",
    label: "Mobile Phone",
    image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: "home-appliances",
    label: "Home Appliances",
    image: "https://images.pexels.com/photos/4226805/pexels-photo-4226805.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: "tablet-accessories",
    label: "Tablet & Accessories",
    image: "https://images.pexels.com/photos/1334597/pexels-photo-1334597.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: "wired-headphone",
    label: "Wired Headphone",
    image: "https://images.pexels.com/photos/3394650/pexels-photo-3394650.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: "laptop",
    label: "Laptop",
    image: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: "airpods",
    label: "Airpods",
    image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: "wireless-headphone",
    label: "Wireless Headphone",
    image: "https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: "headphone",
    label: "Headphone",
    image: "https://images.pexels.com/photos/3394651/pexels-photo-3394651.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: "smart-watch",
    label: "Smart Watch",
    image: "https://images.pexels.com/photos/312545/pexels-photo-312545.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: "speakers",
    label: "Speakers",
    image: "https://images.pexels.com/photos/3587620/pexels-photo-3587620.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: "starlink",
    label: "Starlink",
    image: "https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: "adapter",
    label: "Adapter",
    image: "https://images.pexels.com/photos/4016634/pexels-photo-4016634.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: "cables",
    label: "Cables",
    image: "https://images.pexels.com/photos/4195325/pexels-photo-4195325.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: "hubs-docks",
    label: "Hubs & Docks",
    image: "https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: "wireless-charger",
    label: "Wireless Charger",
    image: "https://images.pexels.com/photos/2248480/pexels-photo-2248480.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
  {
    id: "smart-pen",
    label: "Smart Pen",
    image: "https://images.pexels.com/photos/27402/pexels-photo-27402.jpg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop",
  },
]

export default function FeaturedCategories() {
  return (
    <section className="py-8 container mx-auto px-30">
      <div className="mb-8">
        <h2 className="text-4xl font-bold">
          Featured <span className="text-orange-500">Categories</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
        {categories.map((category) => (
          <Link
            key={category.id}
            href={`/products?category=${category.id}`}
            className="flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-muted transition-colors group"
          >
            <div className="relative w-20 h-20 bg-muted rounded-lg overflow-hidden">
              <Image
                src={category.image}
                alt={category.label}
                fill
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
