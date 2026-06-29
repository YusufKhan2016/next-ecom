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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Counter from "@/components/features/website/counter";
import acGreatDeal from "@/assets/home/ac-mid-great-deal.gif";
import CarouselSlider from "@/components/features/website/carouselSlider";
import { products } from "@/staticsDatas/products";


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
  const count = 1;

  // =====================================================================
  
  const [zoom, setZoom] = useState(false);
  const [position, setPosition] = useState({ x: 50, y: 50 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    setPosition({ x, y });
  };

  // =======================================================================

  const handleThumbnailClick = (index: number) => {
    if (carouselApiRef.current) {
      carouselApiRef.current.scrollTo(index);
      setActiveContent(index);
    }
  };
  

  return (
    <section>
      <div className="container mx-auto px-4">

        <Breadcrumb className="my-3">
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

        <Card className="p-4">
          <div className="flex justify-between gap-5">
            <div className="space-y-4">

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
                    <CarouselItem
                      key={i}
                      className="relative size-100 overflow-hidden cursor-zoom-in"
                      onMouseEnter={() => setZoom(true)}
                      onMouseLeave={() => {
                        setZoom(false);
                        setPosition({ x: 50, y: 50 });
                      }}
                      onMouseMove={handleMouseMove}
                    >
                      
                      <Image
                        src={src}
                        fill
                        alt={`AirPods Pro 3 - ${i + 1}`}
                        sizes={"300px"}
                        loading="eager"
                        className="object-cover pointer-events-none duration-100"
                        style={{
                          transform: zoom ? "scale(1.5)" : "scale(1)",
                          transformOrigin: `${position.x}% ${position.y}%`,
                        }}
                      />

                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>

              <Carousel className="w-full max-w-100">
                <CarouselContent>
                  {thumbnails.map((src, i) => (
                    <CarouselItem key={i}  className="basis-auto">
                      <button
                        key={i}
                        className={`rounded-2xl border-2 duration-300 border-solid ${activeContent === i ? 'border-black' : 'border-input'} overflow-hidden size-24 relative cursor-pointer`}
                        onClick={() => handleThumbnailClick(i)}
                      >
                        <Image
                          src={src}
                          alt={`Thumb ${i + 1}`}
                          loading="eager"
                          fill={true}
                          sizes={"300px"}
                          className="object-cover" 
                        />
                      </button>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            <div className="flex-1 space-y-4">

              <p className="text-sm font-semibold text-foreground/70 tracking-widest uppercase">
                Apple
              </p>

              {/* Title */}
              <h1 className="text-3xl font-bold leading-tight">
                AirPods Pro 3
              </h1>

              {/* Price block */}
              <div className="flex items-end">
                <h3 className="text-2xl font-bold">
                  ৳1,26,500
                </h3> 

                <div className="flex text-end gap-2 ml-2">
                  <span className="text-lg text-foreground/50 font-normal">(Cash Price)</span> 
                  <Separator 
                    orientation={"vertical"} 
                    className="mx-4 my-auto h-4 bg-foreground/40"
                  />
                  <h3 className="text-lg font-medium text-foreground/40 line-through">
                    ৳34,000
                  </h3>
                </div>
              </div>

              {/* Meta badges */}
              <div className="flex flex-wrap gap-2">
                
                <Badge
                  className="text-green-700 border-green-300 bg-green-50 py-3 text-sm"
                >
                  <Check className="w-3 h-3 mr-1" /> In Stock
                </Badge>

                <Badge className="py-3 text-sm">
                  Code: AGL30499
                </Badge>
              
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Color:
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-wrap gap-2">
                    <Badge variant={'outline'} className="text-sm px-2 py-4" >
                      <span className="size-5 bg-orange-400 rounded-full"></span>
                      Cosmic Orange
                    </Badge>

                    <Badge variant={'outline'} className="text-sm px-2 py-4" >
                      <span className="size-5 bg-blue-400 rounded-full"></span>
                      Deep Blue
                    </Badge>

                    <Badge variant={'outline'} className="text-sm px-2 py-4" >
                      <span className="size-5 bg-gray-400 rounded-full"></span>
                      Silver
                    </Badge>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Color:
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-wrap gap-2">
                    <Badge variant={'outline'} className="text-sm px-2 py-4" >
                      E-Sim JP
                    </Badge>

                    <Badge variant={'outline'} className="text-sm px-2 py-4" >
                      E-Sim USA
                    </Badge>

                    <Badge variant={'outline'} className="text-sm px-2 py-4" >
                      SIM+eSim AUS
                    </Badge>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">
                      Storage:
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="flex flex-wrap gap-2">
                    <Badge variant={'outline'} className="text-sm px-2 py-4" >
                      1TB
                    </Badge>

                    <Badge variant={'outline'} className="text-sm px-2 py-4" >
                      2TB
                    </Badge>

                    <Badge variant={'outline'} className="text-sm px-2 py-4" >
                      256GB
                    </Badge>

                    <Badge variant={'outline'} className="text-sm px-2 py-4" >
                      512GB
                    </Badge>
                  </CardContent>
                </Card>
              </div>

              <div>
                <label className="text-lg mb-2 block font-semibold">
                  Select Quantity:
                </label>

                <Counter
                  id={1}
                  quantity={count}
                  size="lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <Button
                  className="h-11 cursor-pointer"
                >
                  <Zap />
                  Shop Now
                </Button>
                <Button
                  variant="outline"
                  className="h-11 cursor-pointer"
                >
                  <ShoppingCart />
                  Add to Cart
                </Button>
              </div>

              {/* Secondary actions */}
              <div className="grid grid-cols-2 gap-3">
                <Button
                  variant="outline"
                  className="h-11 border border-solid border-green-700 text-green-700 hover:bg-green-50"
                >
                  <MessageCircle />
                  WhatsApp
                </Button>
                <Button
                  variant={"secondary"}
                  className="h-11 rounded-xl text-sm"
                >
                  <GitCompare />
                  Add to Compare
                </Button>
              </div>

              {/* Delivery & EMI info */}
              <Card className="p-4 text-sm! space-y-1 bg-accent!">

                <div className="flex items-center gap-2">
                  <Zap size={20} />

                  <span>
                    EMI Available —{" "}
                    <span className="text-blue-600 cursor-pointer hover:underline">
                      View Plans
                    </span>
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <Truck size={20} />
                  <span>Delivery Timescale: 3–5 Days</span>
                </div>

                <div className="flex items-center gap-2">
                  <Shield size={20} />
                  <span>1 Year Official Warranty Support</span>
                </div>

              </Card>
            </div>
          </div>
        </Card>

        {/* ── Tabs: Specification / Description / Warranty ── */}
        <Card className="my-5 overflow-hidden">
          <Tabs
            defaultValue="specification"
            className="bg-accent p-3"
          >
            <TabsList>
              {["specification", "description", "warranty"].map((tab) => (
                <TabsTrigger
                  key={tab}
                  value={tab}
                  className="text-md p-3"
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>

            <TabsContent value="specification" className="p-4">
              <h2 className="text-2xl font-bold mb-5">
                Specification
              </h2>
              <div className="rounded-xl border border-gray-100 overflow-hidden">
                {specs.map((s, i) => (
                  <div
                    key={i}
                    className={`grid grid-cols-[160px_1fr] md:grid-cols-[220px_1fr] gap-4 px-5 py-3.5 text-sm bg-white border border-solid border-accent`}
                  >
                    <span className="text-gray-500 font-medium">{s.label}</span>
                    <span className="text-gray-800">{s.value}</span>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="description" className="p-4">
              <h2 className="text-2xl font-bold mb-5">
                Description
              </h2>

              <div className="bg-white p-4 rounded-lg">
                <div className="space-y-3 text-gray-700 leading-relaxed text-sm md:text-base rounded-lg">
                  <h2 className="text-2xl font-bold">
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
                  <h2 className="text-2xl font-bold mb-4">
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

              </div>
            </TabsContent>

            <TabsContent value="warranty" className="p-6 md:p-8">
              <h2 className="text-xl font-bold mb-3">Warranty</h2>
              <p className="text-sm text-gray-600">
                Explore our{" "}
                <a href="#" className="text-blue-600 hover:underline">
                  Warranty Policy
                </a>{" "}
                page for detailed information about our warranty coverage.
              </p>
            </TabsContent>
            
          </Tabs>
        </Card>
        
      </div>
      
      <CarouselSlider
        headerFirstPart="Related"
        headerSecondPart="Products"
        banner={acGreatDeal}
        products={products}
      />
    </section>
  );
}