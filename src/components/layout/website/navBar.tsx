"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, GitCompare, Newspaper, LogIn } from "lucide-react"
import { useState } from "react"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationFlyoutMenuContent,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"

import logoMain from "@/assets/logo-main.png"

type ChildCategory = {
  label: string
  href?: string
  sub_child_categories?: SubChildCategory[]
}

type SubChildCategory = {
  label: string
  href?: string
}

type SubCategory = {
  label: string
  href?: string
  child_categories: ChildCategory[]
}

type NavItem = {
  category: string
  href?: string
  sub_categories: SubCategory[]
}

const navItems: NavItem[] = [
  {
    category: "Electronics",
    href: "#",
    sub_categories: [
      {
        label: "Phones",
        child_categories: [
          {
            label: "iPhone",
            href: "/electronics/phones/iphone",
            sub_child_categories: [
              { label: "Samsung", href: "/electronics/phones/samsung" },
              { label: "OnePlus", href: "/electronics/phones/oneplus" },
            ]
           },
          { label: "Samsung", href: "/electronics/phones/samsung" },
          { label: "OnePlus", href: "/electronics/phones/oneplus" },
        ],
      },
      {
        label: "Laptops",
        child_categories: [
          { label: "MacBook", href: "/electronics/laptops/macbook" },
          { label: "Dell", href: "/electronics/laptops/dell" },
          { label: "HP", href: "/electronics/laptops/hp" },
        ],
      },
      {
        label: "Tablets",
        child_categories: [
          { label: "iPad", href: "/electronics/tablets/ipad" },
          { label: "Galaxy Tab", href: "/electronics/tablets/galaxy" },
          { label: "Lenovo Tab", href: "/electronics/tablets/lenovo" },
        ],
      },
      {
        label: "Accessories",
        child_categories: [
          { label: "Chargers", href: "/electronics/accessories/chargers" },
          { label: "Headphones", href: "/electronics/accessories/headphones" },
          { label: "Power Banks", href: "/electronics/accessories/powerbanks" },
        ],
      },
    ],
  },
  {
    category: "Clothing",
    href: "#",
    sub_categories: [
      {
        label: "Men",
        child_categories: [],
      },
      {
        label: "Women",
        child_categories: [
          { label: "Dresses", href: "/clothing/women/dresses" },
          { label: "Tops", href: "/clothing/women/tops" },
          { label: "Skirts", href: "/clothing/women/skirts" },
        ],
      },
      {
        label: "Kids",
        child_categories: [
          { label: "Boys Wear", href: "/clothing/kids/boys" },
          { label: "Girls Wear", href: "/clothing/kids/girls" },
          { label: "Infants", href: "/clothing/kids/infants" },
        ],
      },
      {
        label: "Accessories",
        child_categories: [
          { label: "Hats", href: "/clothing/accessories/hats" },
          { label: "Belts", href: "/clothing/accessories/belts" },
          { label: "Scarves", href: "/clothing/accessories/scarves" },
        ],
      },
    ],
  },
  {
    category: "Home & Living",
    href: "#",
    sub_categories: [
      {
        label: "Furniture",
        child_categories: [
          { label: "Sofas", href: "/home/furniture/sofas" },
          { label: "Beds", href: "/home/furniture/beds" },
          { label: "Tables", href: "/home/furniture/tables" },
        ],
      },
      {
        label: "Decor",
        child_categories: [
          { label: "Wall Art", href: "/home/decor/wall-art" },
          { label: "Vases", href: "/home/decor/vases" },
          { label: "Clocks", href: "/home/decor/clocks" },
        ],
      },
      {
        label: "Kitchen",
        child_categories: [
          { label: "Cookware", href: "/home/kitchen/cookware" },
          { label: "Utensils", href: "/home/kitchen/utensils" },
          { label: "Appliances", href: "/home/kitchen/appliances" },
        ],
      },
      {
        label: "Lighting",
        child_categories: [
          { label: "Ceiling Lights", href: "/home/lighting/ceiling" },
          { label: "Lamps", href: "/home/lighting/lamps" },
          { label: "LED Lights", href: "/home/lighting/led" },
        ],
      },
    ],
  },
  {
    category: "Beauty",
    href: "#",
    sub_categories: [
      {
        label: "Skincare",
        child_categories: [
          { label: "Moisturizers", href: "/beauty/skincare/moisturizers" },
          { label: "Cleansers", href: "/beauty/skincare/cleansers" },
          { label: "Serums", href: "/beauty/skincare/serums" },
        ],
      },
      {
        label: "Makeup",
        child_categories: [
          { label: "Foundation", href: "/beauty/makeup/foundation" },
          { label: "Lipstick", href: "/beauty/makeup/lipstick" },
          { label: "Mascara", href: "/beauty/makeup/mascara" },
        ],
      },
      {
        label: "Haircare",
        child_categories: [
          { label: "Shampoo", href: "/beauty/haircare/shampoo" },
          { label: "Conditioner", href: "/beauty/haircare/conditioner" },
          { label: "Hair Oil", href: "/beauty/haircare/oil" },
        ],
      },
      {
        label: "Fragrances",
        child_categories: [
          { label: "Perfumes", href: "/beauty/fragrance/perfume" },
          { label: "Body Spray", href: "/beauty/fragrance/spray" },
          { label: "Attar", href: "/beauty/fragrance/attar" },
        ],
      },
    ],
  },
  {
    category: "Sports",
    href: "#",
    sub_categories: [
      {
        label: "Fitness",
        child_categories: [
          { label: "Dumbbells", href: "/sports/fitness/dumbbells" },
          { label: "Treadmills", href: "/sports/fitness/treadmill" },
          { label: "Yoga Mats", href: "/sports/fitness/yoga" },
        ],
      },
      {
        label: "Outdoor",
        child_categories: [
          { label: "Camping", href: "/sports/outdoor/camping" },
          { label: "Hiking", href: "/sports/outdoor/hiking" },
          { label: "Cycling", href: "/sports/outdoor/cycling" },
        ],
      },
      {
        label: "Team Sports",
        child_categories: [
          { label: "Football", href: "/sports/team/football" },
          { label: "Cricket", href: "/sports/team/cricket" },
          { label: "Basketball", href: "/sports/team/basketball" },
        ],
      },
      {
        label: "Accessories",
        child_categories: [
          { label: "Gloves", href: "/sports/accessories/gloves" },
          { label: "Bags", href: "/sports/accessories/bags" },
          { label: "Bottles", href: "/sports/accessories/bottles" },
        ],
      },
    ],
  },
  {
    category: "Books",
    href: "#",
    sub_categories: [
      {
        label: "Fiction", child_categories: [
          { label: "Fantasy", href: "/books/fiction/fantasy" },
          { label: "Romance", href: "/books/fiction/romance" },
          { label: "Thriller", href: "/books/fiction/thriller" },
        ]
      },
      {
        label: "Non-Fiction", child_categories: [
          { label: "Biography", href: "/books/nonfiction/biography" },
          { label: "Self Help", href: "/books/nonfiction/selfhelp" },
          { label: "History", href: "/books/nonfiction/history" },
        ]
      },
      {
        label: "Education", child_categories: [
          { label: "School", href: "/books/education/school" },
          { label: "College", href: "/books/education/college" },
          { label: "Programming", href: "/books/education/programming" },
        ]
      },
      {
        label: "Comics", child_categories: [
          { label: "Manga", href: "/books/comics/manga" },
          { label: "Marvel", href: "/books/comics/marvel" },
          { label: "DC", href: "/books/comics/dc" },
        ]
      },
    ],
  },
  {
    category: "Automotive",
    href: "#",
    sub_categories: [
      {
        label: "Cars", child_categories: [
          { label: "Sedan", href: "/auto/cars/sedan" },
          { label: "SUV", href: "/auto/cars/suv" },
          { label: "Electric", href: "/auto/cars/electric" },
        ]
      },
      {
        label: "Motorbikes", child_categories: [
          { label: "Sports", href: "/auto/bikes/sports" },
          { label: "Cruiser", href: "/auto/bikes/cruiser" },
          { label: "Scooter", href: "/auto/bikes/scooter" },
        ]
      },
      {
        label: "Parts", child_categories: [
          { label: "Tyres", href: "/auto/parts/tyres" },
          { label: "Engine", href: "/auto/parts/engine" },
          { label: "Battery", href: "/auto/parts/battery" },
        ]
      },
      {
        label: "Accessories", child_categories: [
          { label: "Covers", href: "/auto/accessories/covers" },
          { label: "Lights", href: "/auto/accessories/lights" },
          { label: "Mirrors", href: "/auto/accessories/mirrors" },
        ]
      },
    ],
  },
  {
    category: "Groceries",
    href: "#",
    sub_categories: [
      {
        label: "Fruits", child_categories: [
          { label: "Apple", href: "/grocery/fruits/apple" },
          { label: "Banana", href: "/grocery/fruits/banana" },
          { label: "Mango", href: "/grocery/fruits/mango" },
        ]
      },
      {
        label: "Vegetables", child_categories: [
          { label: "Potato", href: "/grocery/veg/potato" },
          { label: "Tomato", href: "/grocery/veg/tomato" },
          { label: "Onion", href: "/grocery/veg/onion" },
        ]
      },
      {
        label: "Dairy", child_categories: [
          { label: "Milk", href: "/grocery/dairy/milk" },
          { label: "Cheese", href: "/grocery/dairy/cheese" },
          { label: "Butter", href: "/grocery/dairy/butter" },
        ]
      },
      {
        label: "Snacks", child_categories: [
          { label: "Chips", href: "/grocery/snacks/chips" },
          { label: "Biscuits", href: "/grocery/snacks/biscuits" },
          { label: "Chocolate", href: "/grocery/snacks/chocolate" },
        ]
      },
    ],
  },
  {
    category: "Toys",
    href: "#",
    sub_categories: [
      {
        label: "Action Figures", child_categories: [
          { label: "Superheroes", href: "/toys/action/superheroes" },
          { label: "Anime", href: "/toys/action/anime" },
          { label: "Robots", href: "/toys/action/robots" },
        ]
      },
      {
        label: "Puzzles", child_categories: [
          { label: "3D Puzzle", href: "/toys/puzzle/3d" },
          { label: "Jigsaw", href: "/toys/puzzle/jigsaw" },
          { label: "Logic", href: "/toys/puzzle/logic" },
        ]
      },
      {
        label: "Educational", child_categories: [
          { label: "STEM", href: "/toys/edu/stem" },
          { label: "Math", href: "/toys/edu/math" },
          { label: "Science", href: "/toys/edu/science" },
        ]
      },
      {
        label: "Outdoor", child_categories: [
          { label: "Slides", href: "/toys/outdoor/slides" },
          { label: "Swings", href: "/toys/outdoor/swings" },
          { label: "Ride-ons", href: "/toys/outdoor/rideons" },
        ]
      },
    ],
  },
  {
    category: "Health",
    href: "#",
    sub_categories: [
      {
        label: "Supplements", child_categories: [
          { label: "Vitamins", href: "/health/supplements/vitamins" },
          { label: "Protein", href: "/health/supplements/protein" },
          { label: "Minerals", href: "/health/supplements/minerals" },
        ]
      },
      {
        label: "Personal Care", child_categories: [
          { label: "Oral Care", href: "/health/personal/oral" },
          { label: "Body Care", href: "/health/personal/body" },
          { label: "Hand Care", href: "/health/personal/hand" },
        ]
      },
      {
        label: "Medical", child_categories: [
          { label: "Devices", href: "/health/medical/devices" },
          { label: "First Aid", href: "/health/medical/firstaid" },
          { label: "Masks", href: "/health/medical/masks" },
        ]
      },
      {
        label: "Wellness", child_categories: [
          { label: "Meditation", href: "/health/wellness/meditation" },
          { label: "Sleep", href: "/health/wellness/sleep" },
          { label: "Therapy", href: "/health/wellness/therapy" },
        ]
      },
    ],
  },
]

export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("")

  return (
    <header className="sticky top-0 z-50 bg-primary-foreground border-b shadow-sm shadow-amber-500">
      <div className="container mx-auto px-30 py-2">

        <div className="flex items-center gap-10">

          <Link href="/" className="shrink-0 ml-2">
            <p className="font-bold text-3xl text-amber-600 shadow-sm">
              <i>NEXT com</i> 
            </p>
          </Link>

          <div className="flex-1 relative">
            <Input
              type="text"
              placeholder="Search for products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-4 pr-10 bg-white border-gray-300 focus-visible:ring-1 focus-visible:border-amber-500 shadow-sm"
            />
            <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>

          <div className="flex items-center gap-2">

            <Link
              href="/blogs"
              className="flex items-center gap-2 h-10 px-3 font-semibold rounded-md border border-input bg-white/30 text-sm text-gray-700 hover:text-amber-600 transition-colors"
            >
              <Newspaper strokeWidth={2.3} className="w-4 h-4" />
              <span className="hidden sm:inline">Blogs</span>
            </Link>

            <Link
              href="/compare"
              className="flex items-center gap-2 h-10 px-3 font-semibold rounded-md border border-input bg-white/30 text-sm text-gray-700 hover:text-amber-600 transition-colors"
            >
              <GitCompare strokeWidth={2.3} className="w-4 h-4" />
              <span className="hidden sm:inline">Compare</span>
            </Link>

            <Link
              href="/cart"
              className="relative flex items-center justify-center h-10 w-10 rounded-md border border-input bg-white/30 text-gray-700 hover:text-amber-600 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <Badge
                variant="destructive"
                className="absolute -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs rounded-full"
              >
                0
              </Badge>
            </Link>

            <Link
              href="/login"
              className="flex items-center font-semibold gap-2 h-10 px-3 rounded-md border border-input bg-white/30 text-sm text-gray-700 hover:text-amber-600 transition-colors"
            >
              <LogIn strokeWidth={2.3} className="w-4 h-4" />
              <span className="hidden sm:inline">Login</span>
            </Link>

          </div>
        </div>

        <NavigationMenu viewport={false}>
          <NavigationMenuList className="flex flex-wrap">
            {navItems.map((nav, idx) => (
              <NavigationMenuItem key={idx}>
                <NavigationMenuTrigger className="mt-2 text-gray-700 hover:text-amber-600 hover:bg-white/40 transition-all">
                  {nav.category}
                </NavigationMenuTrigger>
                <NavigationMenuContent className="duration-70! -left-1/2">
                  <NavigationFlyoutMenuContent categories={nav.sub_categories} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList> 
        </NavigationMenu>

      </div>
    </header>
  )
}