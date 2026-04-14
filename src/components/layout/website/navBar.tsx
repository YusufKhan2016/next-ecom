"use client"

import Link from "next/link"
import { cn } from "@/lib/utils"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  NavigationFlyoutMenuContent,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"


type ChildCategory = {
  label: string
  href?:string
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
    href: '#',
    sub_categories: [
      {
        label: "Phones",
        href: "#",
        child_categories: [
              { label: "Apple", href: "/phones/apple" },
              { label: "Samsung", href: "/phones/samsung" },
              { label: "Google", href: "/phones/google" },
              { label: "Flagship", href: "/phones/flagship" },
              { label: "Mid-range", href: "/phones/mid-range" },
              { label: "Budget", href: "/phones/budget" }
        ],
      },
      {
        label: "Laptops",
        href: "#",
        child_categories: [
          { label: "MacBook", href: "/laptops/macbook" },
          { label: "Windows", href: "/laptops/windows" },
          { label: "ChromeOS", href: "/laptops/chromeos" },
          { label: "Gaming", href: "/laptops/gaming" },
          { label: "Business", href: "/laptops/business" },
          { label: "Creative", href: "/laptops/creative" },
          { label: "Apple", href: "/phones/apple" },
          { label: "Samsung", href: "/phones/samsung" },
          { label: "Google", href: "/phones/google" },
          { label: "Flagship", href: "/phones/flagship" },
          { label: "Mid-range", href: "/phones/mid-range" },
          { label: "Budget", href: "/phones/budget" },
          { label: "iPad", href: "/tablets/ipad" },
          { label: "Android", href: "/tablets/android" },
          { label: "T-Shirts", href: "/men/tshirts" },
          { label: "Shirts", href: "/men/shirts" },
          { label: "Jeans", href: "/men/jeans" },
          { label: "Trousers", href: "/men/trousers" },
          { label: "Shorts", href: "/men/shorts" },
        ],
      },
      {
        label: "Tablets1",
        href: "#",
        child_categories: [
          { label: "iPad", href: "/tablets/ipad" },
          { label: "Android", href: "/tablets/android" },
        ],
      },
      {
        label: "Tablets2",
        href: "#",
        child_categories: [
          { label: "iPad", href: "/tablets/ipad" },
          { label: "Android", href: "/tablets/android" },
        ],
      },
      {
        label: "Tablets3",
        href: "#",
        child_categories: [
          { label: "iPad", href: "/tablets/ipad" },
          { label: "Android", href: "/tablets/android" },
        ],
      },
      {
        label: "Tablets4",
        href: "#",
        child_categories: [
          { label: "iPad", href: "/tablets/ipad" },
          { label: "Android", href: "/tablets/android" },
        ],
      },
      {
        label: "Tablets5",
        href: "#",
        child_categories: [
          { label: "iPad", href: "/tablets/ipad" },
          { label: "Android", href: "/tablets/android" },
        ],
      },
      {
        label: "Tablets6",
        href: "#",
        child_categories: [
          { label: "iPad", href: "/tablets/ipad" },
          { label: "Android", href: "/tablets/android" },
        ],
      },
      {
        label: "Tablets7",
        href: "#",
        child_categories: [
          { label: "iPad", href: "/tablets/ipad" },
          { label: "Android", href: "/tablets/android" },
        ],
      },
      {
        label: "Tablets8",
        href: "#",
        child_categories: [
          { label: "iPad", href: "/tablets/ipad" },
          { label: "Android", href: "/tablets/android" },
        ],
      },
    ],
  },
  {
    category: "Clothing",
    href: '#',
    sub_categories: [
      {
        label: "Men",
        child_categories: [
              { label: "T-Shirts", href: "/men/tshirts" },
              { label: "Shirts", href: "/men/shirts" },
              { label: "Jeans", href: "/men/jeans" },
              { label: "Trousers", href: "/men/trousers" },
              { label: "Shorts", href: "/men/shorts" },
        ],
      },
      {
        label: "Women",
        child_categories: [
              { label: "Blouses", href: "/women/blouses" },
              { label: "T-Shirts", href: "/women/tshirts" },
              { label: "Knitwear", href: "/women/knitwear" },
              { label: "Skirts", href: "/women/skirts" },
              { label: "Jeans", href: "/women/jeans" },
              { label: "Trousers", href: "/women/trousers" },
        ],
      },
    ],
  },
  {
    category: "Clothing",
    href: '#',
    sub_categories: [
      {
        label: "Men",
        child_categories: [
              { label: "T-Shirts", href: "/men/tshirts" },
              { label: "Shirts", href: "/men/shirts" },
              { label: "Jeans", href: "/men/jeans" },
              { label: "Trousers", href: "/men/trousers" },
              { label: "Shorts", href: "/men/shorts" },
        ],
      },
      {
        label: "Women",
        child_categories: [
              { label: "Blouses", href: "/women/blouses" },
              { label: "T-Shirts", href: "/women/tshirts" },
              { label: "Knitwear", href: "/women/knitwear" },
              { label: "Skirts", href: "/women/skirts" },
              { label: "Jeans", href: "/women/jeans" },
              { label: "Trousers", href: "/women/trousers" },
        ],
      },
    ],
  },
  {
    category: "Clothing",
    href: '#',
    sub_categories: [
      {
        label: "Men",
        child_categories: [
              { label: "T-Shirts", href: "/men/tshirts" },
              { label: "Shirts", href: "/men/shirts" },
              { label: "Jeans", href: "/men/jeans" },
              { label: "Trousers", href: "/men/trousers" },
              { label: "Shorts", href: "/men/shorts" },
        ],
      },
      {
        label: "Women",
        child_categories: [
              { label: "Blouses", href: "/women/blouses" },
              { label: "T-Shirts", href: "/women/tshirts" },
              { label: "Knitwear", href: "/women/knitwear" },
              { label: "Skirts", href: "/women/skirts" },
              { label: "Jeans", href: "/women/jeans" },
              { label: "Trousers", href: "/women/trousers" },
        ],
      },
    ],
  },
  {
    category: "Clothing",
    href: '#',
    sub_categories: [
      {
        label: "Men",
        child_categories: [
              { label: "T-Shirts", href: "/men/tshirts" },
              { label: "Shirts", href: "/men/shirts" },
              { label: "Jeans", href: "/men/jeans" },
              { label: "Trousers", href: "/men/trousers" },
              { label: "Shorts", href: "/men/shorts" },
        ],
      },
      {
        label: "Women",
        child_categories: [
              { label: "Blouses", href: "/women/blouses" },
              { label: "T-Shirts", href: "/women/tshirts" },
              { label: "Knitwear", href: "/women/knitwear" },
              { label: "Skirts", href: "/women/skirts" },
              { label: "Jeans", href: "/women/jeans" },
              { label: "Trousers", href: "/women/trousers" },
        ],
      },
    ],
  },
  {
    category: "Clothing",
    href: '#',
    sub_categories: [
      {
        label: "Men",
        child_categories: [
              { label: "T-Shirts", href: "/men/tshirts" },
              { label: "Shirts", href: "/men/shirts" },
              { label: "Jeans", href: "/men/jeans" },
              { label: "Trousers", href: "/men/trousers" },
              { label: "Shorts", href: "/men/shorts" },
        ],
      },
      {
        label: "Women",
        child_categories: [
              { label: "Blouses", href: "/women/blouses" },
              { label: "T-Shirts", href: "/women/tshirts" },
              { label: "Knitwear", href: "/women/knitwear" },
              { label: "Skirts", href: "/women/skirts" },
              { label: "Jeans", href: "/women/jeans" },
              { label: "Trousers", href: "/women/trousers" },
        ],
      },
    ],
  },
  {
    category: "Clothing",
    href: '#',
    sub_categories: [
      {
        label: "Men",
        child_categories: [
              { label: "T-Shirts", href: "/men/tshirts" },
              { label: "Shirts", href: "/men/shirts" },
              { label: "Jeans", href: "/men/jeans" },
              { label: "Trousers", href: "/men/trousers" },
              { label: "Shorts", href: "/men/shorts" },
        ],
      },
      {
        label: "Women",
        child_categories: [
              { label: "Blouses", href: "/women/blouses" },
              { label: "T-Shirts", href: "/women/tshirts" },
              { label: "Knitwear", href: "/women/knitwear" },
              { label: "Skirts", href: "/women/skirts" },
              { label: "Jeans", href: "/women/jeans" },
              { label: "Trousers", href: "/women/trousers" },
        ],
      },
    ],
  },
  {
    category: "Clothing",
    href: '#',
    sub_categories: [
      {
        label: "Men",
        child_categories: [
              { label: "T-Shirts", href: "/men/tshirts" },
              { label: "Shirts", href: "/men/shirts" },
              { label: "Jeans", href: "/men/jeans" },
              { label: "Trousers", href: "/men/trousers" },
              { label: "Shorts", href: "/men/shorts" },
        ],
      },
      {
        label: "Women",
        child_categories: [
              { label: "Blouses", href: "/women/blouses" },
              { label: "T-Shirts", href: "/women/tshirts" },
              { label: "Knitwear", href: "/women/knitwear" },
              { label: "Skirts", href: "/women/skirts" },
              { label: "Jeans", href: "/women/jeans" },
              { label: "Trousers", href: "/women/trousers" },
        ],
      },
    ],
  },
]




export default function Navbar() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4">

        <NavigationMenu>
          <NavigationMenuList>

            <NavigationMenuItem>
              <Input type="text"/>
            </NavigationMenuItem>

          </NavigationMenuList>
        </NavigationMenu>

        <NavigationMenu>
          <NavigationMenuList className="flex flex-wrap">

            {navItems.map((nav, idx) => (
              <NavigationMenuItem key={nav.category}>
                <NavigationMenuTrigger>{nav.category}</NavigationMenuTrigger>
                <NavigationMenuContent 
                  className="duration-75!"
                >
                  <NavigationFlyoutMenuContent categories={nav.sub_categories} />
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}

            <NavigationMenuItem>
              <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                <Link href="/deals">Deals</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>


          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  )
}