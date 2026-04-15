"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useCallback } from "react"
import {
  ShieldCheck, CreditCard, RefreshCw, Heart, Phone,
  ChevronLeft, ChevronRight, Truck, ArrowLeftRight, Headphones,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

const slides = [
  {
    tag: "Exclusive deal",
    title: "Premium Air Fryers\nup to 40% off",
    sub: "Cook faster, eat healthier. Free delivery on orders over ৳3,000.",
    img: "https://images.pexels.com/photos/1342529/pexels-photo-1342529.jpeg?auto=compress&cs=tinysrgb&w=400&h=480&fit=crop",
    badges: [
      { icon: ShieldCheck, label: "2-year warranty" },
      { icon: CreditCard, label: "36-month EMI" },
    ],
  },
  {
    tag: "New arrivals",
    title: "Laptops & Tablets\nstarting ৳35,000",
    sub: "Top brands. Fast processors. Student & business bundles available.",
    img: "https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=400&h=480&fit=crop",
    badges: [
      { icon: ShieldCheck, label: "Free accessories" },
      { icon: RefreshCw, label: "Easy returns" },
    ],
  },
  {
    tag: "Flash sale",
    title: "Latest Smartphones\nbest prices guaranteed",
    sub: "iPhone, Samsung, OnePlus & more. Trade-in available on select models.",
    img: "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg?auto=compress&cs=tinysrgb&w=400&h=480&fit=crop",
    badges: [
      { icon: Truck, label: "24-hr delivery" },
      { icon: ArrowLeftRight, label: "Trade-in accepted" },
    ],
  },
]

const sideAds = [
  {
    img: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    label: "Apple authorised",
    title: "iPhone repair & service",
    sub: "09678-149 149",
  },
  {
    img: "https://images.pexels.com/photos/4226805/pexels-photo-4226805.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop",
    label: "5-year motor warranty",
    title: "Mixer grinders from ৳4,200",
    sub: "Free shipping this week only",
  },
]

const features = [
  { icon: CreditCard,   label: "36 Months EMI" },
  { icon: Truck,        label: "Fastest Home Delivery" },
  { icon: RefreshCw,    label: "Exchange Facility" },
  { icon: Heart,        label: "Best Price Deals" },
  { icon: Headphones,   label: "After-Sales Service" },
]

export default function PromotionalHero() {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) return
    api.on("select", () => setCurrent(api.selectedScrollSnap()))
  }, [api])

  // Auto-play
  useEffect(() => {
    if (!api) return
    const interval = setInterval(() => api.scrollNext(), 4000)
    return () => clearInterval(interval)
  }, [api])

  return (
    <section className="py-4 container mx-auto px-30">
      <div className="grid grid-cols-[1fr_380px] gap-3 mb-3">

        <Carousel setApi={setApi} className="rounded-xl overflow-hidden bg-muted">
          <CarouselContent>
            {slides.map((slide, idx) => (
              <CarouselItem key={idx}>
                <div className="flex items-center gap-6 p-8 h-85">
                  <Image
                    src={slide.img}
                    alt={slide.title}
                    width={200}
                    height={240}
                    className="rounded-lg object-cover h-60 w-50 shrink-0"
                  />
                  <div className="flex-1">
                    <Badge variant="secondary" className="mb-3 text-amber-700 bg-amber-100 border-0">
                      {slide.tag}
                    </Badge>
                    <h2 className="text-2xl font-medium leading-snug mb-2 whitespace-pre-line">
                      {slide.title}
                    </h2>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {slide.sub}
                    </p>
                    <div className="flex gap-2 flex-wrap mb-5">
                      {slide.badges.map((b, i) => (
                        <span
                          key={i}
                          className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-md border bg-background"
                        >
                          <b.icon className="w-3.5 h-3.5" />
                          {b.label}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="#"
                      className="inline-flex items-center gap-1 text-sm font-medium px-4 py-2 rounded-md border hover:bg-muted transition-colors"
                    >
                      Shop now →
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="left-3" />
          <CarouselNext className="right-3" />

          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => api?.scrollTo(i)}
                className={`h-1.5 rounded-full transition-all ${
                  current === i ? "w-5 bg-orange-500" : "w-1.5 bg-border"
                }`}
              />
            ))}
          </div>
        </Carousel>

        <div className="flex flex-col gap-3">
          {sideAds.map((ad, i) => (
            <div key={i} className="relative rounded-xl overflow-hidden h-40.5">
              <Image src={ad.img} alt={ad.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-3">
                <p className="text-[10px] text-white/70 mb-0.5">{ad.label}</p>
                <p className="text-sm font-medium text-white leading-tight">{ad.title}</p>
                <p className="text-xs text-white/80 mt-0.5">{ad.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-5 divide-x border rounded-xl overflow-hidden">
        {features.map((feature, i) => (
          <div key={i} className="flex items-center gap-2.5 px-4 py-3">
            <div className="w-8 h-8 rounded-md bg-muted flex items-center justify-center shrink-0">
              <feature.icon className="w-4 h-4 text-muted-foreground" />
            </div>
            <span className="text-xs font-medium leading-tight">{feature.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}