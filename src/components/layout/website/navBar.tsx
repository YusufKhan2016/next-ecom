"use client"

import Link from "next/link"
import Image from "next/image"
import { Search, ShoppingCart, GitCompare, Newspaper, LogIn, User } from "lucide-react"
import { useEffect, useState } from "react"

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

import logoMain from "@/assets/logo-main.png"
import { cn } from "@/lib/utils"
import Cart from "@/components/features/website/cart"
import { Button } from "@/components/ui/button"
import { useCartStore } from "@/store/website/cart"
import navItems from "@/staticsDatas/navCategories"
import { useUserStore } from "@/store/website/user"


export default function Navbar() {
  const [searchQuery, setSearchQuery] = useState("")
  const [mouseMovePercent, setMouseMovePercent] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [cartShow, setCartShow] = useState<true | false>(false);

  const cartList = useCartStore((state) => state.cart);
  const isUserActive = useUserStore((state) => state.isUserActive);
  const setUser = useUserStore((state) => state.setUser);

  useEffect(() => {

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const width = window.innerWidth;
      const percentage = (x / width) * 100;
      setMouseMovePercent(percentage);
    }

    window.addEventListener("mousemove", handleMouseMove)
  }, []);

  return (
    <>
      
      <Cart 
        cartOpen={cartShow} 
        setCartOpen={setCartShow} 
      />

      <header className="sticky top-0 z-50 border-b drop-shadow-sm bg-background backdrop-blur-2xl drop-shadow-gray-500">
        <div className="container mx-auto px-4 py-2">

          <div className="flex items-center gap-10">

            <Link href="/" className="shrink-0 ml-2">
              <p className="font-bold text-3xl shadow-sm">
                <i>NEXT com</i> 
              </p>
            </Link>

            <div className="flex-1 relative">
              <Input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full h-10 pl-4 pr-10 bg-white border-gray-300 focus-visible:ring-1 focus-visible:border-accent-foreground shadow-sm"
              />
              <Search className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
            </div>

            <div className="flex items-center gap-2">

              <Link
                href="/blogs"
                className="flex items-center gap-2 h-10 px-3 font-semibold rounded-md border border-input bg-white text-sm text-gray-700 transition-colors"
              >
                <Newspaper strokeWidth={2.3} className="w-4 h-4" />
                <span className="hidden sm:inline">Blogs</span>
              </Link>

              <Link
                href="/compare"
                className="flex items-center gap-2 h-10 px-3 font-semibold rounded-md border border-input bg-white text-sm text-gray-700 transition-colors"
              >
                <GitCompare strokeWidth={2.3} className="w-4 h-4" />
                <span className="hidden sm:inline">Compare</span>
              </Link>

              <Button
                onClick={() => setCartShow(!cartShow)}
                className="relative flex items-center cursor-pointer justify-center h-10 w-10 rounded-md border border-input bg-white text-gray-700 transition-colors"
              >
                <ShoppingCart strokeWidth={2.3} />

                <Badge
                  className="absolute bg-accent-foreground -top-2 -right-2 w-5 h-5 p-0 flex items-center justify-center text-xs rounded-full"
                >
                  {cartList.length}
                </Badge>
              </Button>

              {
                isUserActive 
                  ? (
                    <Link
                      href="/account"
                      className="flex items-center font-semibold gap-2 h-10 px-3 rounded-md border border-input bg-foreground text-sm text-background transition-colors"
                    >
                      <User strokeWidth={2.5} className="w-4 h-4" />
                      <span className="hidden sm:inline">User</span>
                    </Link>
                  ) : (
                    <Link
                      href="#"
                      onClick={setUser}
                      className="flex items-center font-semibold gap-2 h-10 px-3 rounded-md border border-input bg-white text-sm text-gray-700 transition-colors"
                    >
                      <LogIn strokeWidth={2.3} className="w-4 h-4" />
                      <span className="hidden sm:inline">Login</span>
                    </Link>
                )
              }

            </div>
          </div>

          <NavigationMenu viewport={false}>
            <NavigationMenuList className="flex flex-wrap">
              {navItems?.map((nav, idx) => (
                <NavigationMenuItem key={idx}>

                  <NavigationMenuTrigger
                    onMouseEnter={() => {
                      const dir = mouseMovePercent > 50 ? "right" : "left";
                      setDirection(dir);
                    }}
                    className="mt-2 text-gray-700 hover:bg-white/40 transition-all"
                  >
                    <Link href={"/category/products"}>
                      {nav?.name}
                    </Link>
                  </NavigationMenuTrigger>

                  <NavigationMenuContent
                    className={cn(
                      "duration-10!",
                      direction === "right" ? "right-0" : "left-0"
                    )}
                  >
                    <NavigationFlyoutMenuContent   
                      direction={direction} 
                      categories={nav.children ?? []}
                    />
                  </NavigationMenuContent>
                  
                </NavigationMenuItem>
              ))}
            </NavigationMenuList> 
          </NavigationMenu>

        </div>
      </header>
    </>
  )
}