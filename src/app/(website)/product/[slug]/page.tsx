"use client";

import React, { useState, useRef, useEffect } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ShoppingCart,
  Zap,
  Truck,
  Shield,
  MessageCircle,
  ChevronRight,
  Star,
  Plus,
  Minus,
  GitCompare,
  Check,
} from "lucide-react";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

// ── Types ──────────────────────────────────────────────────────────────────────
interface Spec {
  label: string;
  value: string;
}

// ── Static data ────────────────────────────────────────────────────────────────
const specs: Spec[] = [
  { label: "Brand", value: "Apple" },
  { label: "Driver", value: "Custom High-excursion Apple driver" },
  { label: "Charging Interface", value: "MagSafe Charging Case (USB-C)" },
  { label: "IP Rating", value: "Dust, sweat, and water resistant (IP57)" },
  { label: "Model", value: "AirPods Pro 3" },
  { label: "ANC Status", value: "Active Noise Cancellation" },
  {
    label: "Features",
    value:
      "Live Translation | Hearing Protection | Hearing Test | Hearing Aid",
  },
  {
    label: "Wireless Charging",
    value: "Yes (MagSafe, Qi-Certified Pads: Qi1 & Qi2)",
  },
  {
    label: "Playtime",
    value:
      "Up to 8 hours with ANC | Up to 7.5 hours with Spatial Audio | Up to 10 hours single charge | Transparency using & Hearing Aid | With MagSafe: up to 24 Hours (ANC)",
  },
  { label: "Connectivity", value: "Bluetooth 5.3 wireless technology" },
  {
    label: "Audio",
    value:
      "Custom high dynamic range amplifier | Adaptive Audio | Transparency mode | Conversation Awareness | Voice Isolation | Personalized Volume | Loud Sound Reduction | Personalized Spatial Audio with dynamic head tracking | Adaptive EQ | Studio-quality audio recording | Vent system for pressure equalization",
  },
  {
    label: "Sensors",
    value:
      "Dual beamforming microphones | Inward-facing microphone | Skin-detect sensor | Motion-detecting accelerometer | Heart rate sensor for workouts10 | Touch control",
  },
  {
    label: "Other Features / Info",
    value:
      "Height: 1.22 inches (30.9 mm) | Width: 0.76 inch (19.2 mm) | Depth: 1.06 inches (27.0 mm) | Weight: 0.20 ounce (5.55 grams)",
  },
];

const features = [
  "Exceptional fit and stability for all-day comfort and security.",
  "Built for adventure with IP57 protection anytime, anywhere.",
  "Adaptive EQ delivers personalized, balanced sound for every song, podcast, and movie.",
  "Break language barriers instantly with advanced live translation.",
  "Double as discreet hearing aid, amplifying life's moments with crystal-clear precision.",
  "Track heart rate and detect high blood pressure for healthier workouts.",
  "Enhanced active noise cancellation creates immersive silence, even in the busiest environments.",
  "Greater battery life powers longer listening, keeping music alive wherever life goes.",
];

const thumbnails = [
  "https://images.pexels.com/photos/34624327/pexels-photo-34624327.jpeg",
  "https://images.pexels.com/photos/34018284/pexels-photo-34018284.jpeg",
  "https://images.pexels.com/photos/37421860/pexels-photo-37421860.jpeg",
  "https://images.pexels.com/photos/37421860/pexels-photo-37421860.jpeg",
  "https://images.pexels.com/photos/37421860/pexels-photo-37421860.jpeg",
  "https://images.pexels.com/photos/37421860/pexels-photo-37421860.jpeg",
];

const relatedProducts = [
  {
    name: "Apple AirPods 4",
    price: "৳14,500",
    originalPrice: "৳12,500",
    discount: "৳1,800 OFF",
    img: "https://images.pexels.com/photos/34624327/pexels-photo-34624327.jpeg",
  },
  {
    name: "AirPods Pro (2nd gen) USB-C",
    price: "৳22,000",
    originalPrice: "৳24,000",
    discount: "৳2,000 OFF",
    img: "https://images.pexels.com/photos/36503100/pexels-photo-36503100.jpeg",
  },
];

// ── Component ──────────────────────────────────────────────────────────────────
export default function ProductDetailsPage() {
  const carouselApiRef = useRef<any>(null);
  const [activeContent, setActiveContent] = useState(0);

  const handleThumbnailClick = (index: number) => {
    if (carouselApiRef.current) {
      carouselApiRef.current.scrollTo(index);
      setActiveContent(index);
    }
  };
  

  return (
    <section>
      <div className="container mx-auto px-4">

        <Breadcrumb>
          <BreadcrumbList>

            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                  <Link href={'/'}>Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
              
            <BreadcrumbSeparator />
            
            <BreadcrumbItem>
              <BreadcrumbLink href="/components">Components</BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Air Pods Pro 3</BreadcrumbPage>
            </BreadcrumbItem>
        
          </BreadcrumbList>
        </Breadcrumb>

        
        {/* ── Hero card ── */}
        <Card className="p-4">
          <div className="flex justify-between gap-10">
            <div className="space-y-4">
              {/* Carousel */}
              <Carousel 
                className="size-100 border-2 border-solid border-input rounded-2xl overflow-hidden"
                setApi={(api) => {
                  carouselApiRef.current = api;
                }}
                opts={{
                  align: "center",
                  loop: true,
                }}
              >
                <CarouselContent>
                  {thumbnails.map((src, i) => (
                    <CarouselItem key={i} className="size-100 overflow-hidden relative">
                      <Image
                        src={src}
                        fill={true}
                        sizes={"100"}
                        loading="eager"
                        alt={`AirPods Pro 3 - ${i + 1}`}
                        className="object-cover"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              {/* Thumbnails */}
              <Carousel className="w-full max-w-100">
                <CarouselContent className="w-27">
                  {thumbnails.map((src, i) => (
                    <CarouselItem key={i} >
                      <button
                        key={i}
                        className={`rounded-2xl border-2 border-solid ${activeContent === i ? 'border-black' : 'border-input'} overflow-hidden size-24 relative cursor-pointer`}
                        onClick={() => handleThumbnailClick(i)}
                      >
                        <Image
                          src={src}
                          alt={`Thumb ${i + 1}`}
                          loading="eager"
                          fill={true}
                          sizes={"24"}
                          className="object-cover"
                          
                          
                        />
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            {/* Right – product info */}
            <div className="flex-1 space-y-4">
              {/* Brand */}
              <p className="text-sm font-semibold text-gray-400 tracking-widest uppercase">
                Apple
              </p>

              {/* Title */}
              <h1 className="text-3xl font-bold text-gray-900 leading-tight">
                AirPods Pro 3
              </h1>

              {/* Rating row */}
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star
                      key={s}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">(128 reviews)</span>
              </div>

              {/* Price block */}
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-gray-900">
                  ৳26,500
                </span>
                <span className="text-lg text-gray-400 line-through">
                  ৳34,000
                </span>
                <Badge className="bg-red-50 text-red-600 border-red-200 font-semibold">
                  ৳7,500 OFF
                </Badge>
              </div>
              <p className="text-xs text-gray-500 -mt-1">Cash Price</p>

              <Separator />

              {/* Meta badges */}
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="text-green-700 border-green-300 bg-green-50"
                >
                  <Check className="w-3 h-3 mr-1" /> In Stock
                </Badge>
                <Badge variant="outline" className="text-gray-600">
                  Code: AGL30499
                </Badge>
                <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50">
                  1 Year Official Warranty
                </Badge>
              </div>

              {/* Quantity */}
              <div className="space-y-1.5">
                <label className="text-sm font-medium text-gray-700">
                  Select Quantity
                </label>
                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 rounded-lg"
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                  <span className="w-10 text-center font-semibold text-lg">
                    2
                  </span>
                  <Button
                    variant="outline"
                    size="icon"
                    className="h-9 w-9 rounded-lg"
                  >
                    <Plus className="w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* CTA buttons */}
              <div className="grid grid-cols-2 gap-3">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold h-11 rounded-xl">
                  <Zap className="w-4 h-4 mr-2" />
                  Shop Now
                </Button>
                <Button
                  variant="outline"
                  className="border-orange-400 text-orange-600 hover:bg-orange-50 font-semibold h-11 rounded-xl"
                >
                  <ShoppingCart className="w-4 h-4 mr-2" />
                  Add to Cart
                </Button>
              </div>

              {/* Secondary actions */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="text-green-700 border-green-300 hover:bg-green-50 h-10 rounded-xl text-sm"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  WhatsApp
                </Button>
                <Button
                  variant="ghost"
                  className="text-blue-600 hover:bg-blue-50 h-10 rounded-xl text-sm"
                >
                  <GitCompare className="w-4 h-4 mr-2" />
                  Add to Compare
                </Button>
              </div>

              {/* Delivery & EMI info */}
              <div className="rounded-xl border border-gray-100 bg-gray-50 p-3 space-y-2 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>
                    EMI Available —{" "}
                    <span className="text-blue-600 cursor-pointer hover:underline">
                      View Plans
                    </span>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>Delivery Timescale: 3–5 Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-blue-500 shrink-0" />
                  <span>1 Year Official Warranty Support</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* ── Tabs: Specification / Description / Warranty ── */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <Tabs defaultValue="specification">
            <TabsList className="w-full rounded-none border-b bg-white px-6 pt-4 pb-0 gap-6 justify-start h-auto">
              {["specification", "description", "warranty"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="rounded-none border-b-2 border-transparent data-[state=active]:border-blue-600 data-[state=active]:text-blue-600 data-[state=active]:shadow-none pb-3 capitalize font-medium text-sm text-gray-500 hover:text-gray-800 transition-colors"
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>

            {/* Specification */}
            <TabsContent value="specification" className="p-6 md:p-8">
              <h2 className="text-xl font-bold mb-5 text-gray-900">
                Specification
              </h2>
              <div className="rounded-xl border border-gray-100 overflow-hidden">
                {specs.map((s, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-[160px_1fr] md:grid-cols-[220px_1fr] gap-4 px-5 py-3.5 text-sm ${
                      i % 2 === 0 ? "bg-gray-50" : "bg-white"
                    }`}
                  >
                    <span className="text-gray-500 font-medium">{s.label}</span>
                    <span className="text-gray-800">{s.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            {/* Description */}
            <TabsContent value="description" className="p-6 md:p-8 space-y-8">
              {/* Live Translation banner */}
              <div className="rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center py-12 px-6 text-center gap-4">
                <p className="text-sm uppercase tracking-widest text-gray-400">
                  Live Translation
                </p>
                <p className="text-xl md:text-2xl font-semibold">
                  Live Translation helps you communicate across languages.
                </p>
                <div className="flex gap-8 text-3xl font-bold mt-2">
                  <span className="text-purple-400">Hola</span>
                  <span className="text-green-400">Hello</span>
                </div>
              </div>

              {/* About text */}
              <div className="space-y-3 text-gray-700 leading-relaxed text-sm md:text-base">
                <h2 className="text-2xl font-bold text-gray-900">
                  AirPods Pro 3
                </h2>
                <p>
                  Meet the all new AirPods Pro 3, totally changing the way you
                  listen and move. They fit perfectly and stay put with
                  exceptional fit and stability, which makes wearing them all
                  day feel super easy. And yeah, they are built for the wild and
                  durable against adventure with IP57, so rain, sweat, or spills
                  are no big deal. Adaptive EQ adjusts every track perfectly to
                  your ears, and the live translation feature is amazing for
                  chatting across languages, honestly.
                </p>
                <p>
                  On and wait, they even work as a hearing aid, making everyday
                  sounds clearer. The heart rate sensor for workouts10 can also
                  check high blood pressure, keeping your health in check, which
                  is really handy. With the skin detect sensor, the AirPods Pro
                  3 ensures seamless playback, pausing and resuming music
                  perfectly automatically. And of course, better Active Noise
                  Cancellation and greater battery life keep your music going
                  strong, no matter what.
                </p>
              </div>

              {/* Features list */}
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">
                  AirPods Pro 3 Features
                </h2>
                <ul className="space-y-2.5">
                  {features.map((f, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="mt-0.5 w-5 h-5 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3" />
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Similar product price links */}
              <div className="rounded-xl border border-gray-100 p-5 space-y-2">
                <h3 className="font-semibold text-gray-900 mb-3">
                  Check Similar Product Price
                </h3>
                {[
                  "AirPods Pro (2nd generation) USB-C",
                  "Apple AirPods 4",
                ].map((p) => (
                  <a
                    key={p}
                    href="#"
                    className="flex items-center gap-2 text-blue-600 hover:underline text-sm"
                  >
                    <ChevronRight className="w-3.5 h-3.5" /> {p}
                  </a>
                ))}
              </div>
            </TabsContent>

            {/* Warranty */}
            <TabsContent value="warranty" className="p-6 md:p-8">
              <h2 className="text-xl font-bold mb-3 text-gray-900">Warranty</h2>
              <p className="text-sm text-gray-600">
                Explore our{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Warranty Policy
                </a>{" "}
                page for detailed information about our warranty coverage.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        {/* ── Promo Banner ── */}
        <div className="rounded-2xl overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-blue-700 text-white flex flex-col md:flex-row items-center justify-between px-8 py-6 gap-4 shadow-md">
          <div className="space-y-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-300">
              Great Deals
            </p>
            <p className="text-4xl font-black">28%</p>
            <p className="text-sm text-blue-200">Discount on Air Conditioner</p>
          </div>
          <Button className="bg-white text-blue-800 hover:bg-blue-50 font-bold px-6 py-2.5 rounded-xl shrink-0">
            Order Now
          </Button>
        </div>

        {/* ── Related Products ── */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-bold text-gray-900">Related Products</h2>
            <a href="#" className="text-blue-600 hover:underline text-sm flex items-center gap-1">
              View all <ChevronRight className="w-4 h-4" />
            </a>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {relatedProducts.map((p, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 hover:shadow-md transition-shadow group"
              >
                <div className="bg-gray-50 rounded-xl flex items-center justify-center h-32 mb-3 overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="object-contain h-24 group-hover:scale-105 transition-transform"
                  />
                </div>
                <p className="text-sm font-semibold text-gray-800 line-clamp-2 mb-1">
                  {p.name}
                </p>
                <p className="text-base font-bold text-gray-900">{p.price}</p>
                <p className="text-xs text-gray-400 line-through">
                  {p.originalPrice}
                </p>
                <Badge className="mt-1 bg-red-50 text-red-600 border-red-200 text-xs">
                  {p.discount}
                </Badge>
                <Button
                  size="sm"
                  className="mt-3 w-full rounded-lg bg-orange-500 hover:bg-orange-600 text-white text-xs h-8"
                >
                  Shop Now
                </Button>
              </div>
            ))}
          </div>
        </div>
        

      </div> 
    </section>
  );
}