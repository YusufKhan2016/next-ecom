"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import Link from "next/link";

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  oldPrice?: number;
  emoji: string;
  specs: Record<string, string>;
}

// ---------------------------------------------------------------------------
// Spec rows shown in the table, in display order.
// A row is rendered for every product column; cells fall back to "-" when a
// product has no value for that key (e.g. comparing a phone vs. earbuds).
// ---------------------------------------------------------------------------

const SPEC_FIELDS: { key: string; label: string }[] = [
  { key: "brand", label: "Brand" },
  { key: "model", label: "Model" },
  { key: "network", label: "Network" },
  { key: "dimensions", label: "Dimensions" },
  { key: "weight", label: "Weight" },
  { key: "sim", label: "SIM" },
  { key: "display", label: "Display" },
  { key: "chipset", label: "Chipset" },
  { key: "cpu", label: "CPU" },
  { key: "os", label: "OS" },
  { key: "memory", label: "Memory" },
  { key: "mainCamera", label: "Main Camera" },
  { key: "selfieCamera", label: "Selfie Camera" },
  { key: "sound", label: "Sound" },
  { key: "batteryInfo", label: "Battery Info" },
  { key: "connectivity", label: "Connectivity" },
  { key: "sensors", label: "Sensors" },
  { key: "othersInfo", label: "Others Info" },
  { key: "charging", label: "Charging" },
  { key: "encStatus", label: "ENC Status" },
  { key: "bluetooth", label: "Bluetooth" },
  { key: "batteryCapacity", label: "Battery Capacity" },
  { key: "ancStatus", label: "ANC Status" },
  { key: "driverSize", label: "Driver Size" },
  { key: "resistance", label: "Sweat & Water Resistance" },
  { key: "features", label: "Features" },
  { key: "playtime", label: "Playtime" },
];

// ---------------------------------------------------------------------------
// Static product catalog (this is what the search box searches against).
// Swap this for an API call later without touching the UI below.
// ---------------------------------------------------------------------------

const PRODUCTS: Product[] = [
  {
    id: "galaxy-a57",
    name: "Galaxy A57 5G",
    brand: "Samsung",
    category: "Phones",
    price: 43999,
    emoji: "📱",
    specs: {
      brand: "Samsung",
      model: "Galaxy A57 5G",
      network: "GSM / HSPA / LTE / 5G",
      dimensions: "161.5 × 76.8 × 6.9 mm",
      weight: "179 g",
      sim: "Nano SIM + eSIM / Dual Nano SIM",
      display:
        "6.7 inches | Super AMOLED+ | 1080×2340 | 120Hz | Gorilla Glass Victus+",
      chipset: "Exynos 1680",
      cpu: "Octa-core",
      os: "Android 16, One UI 8.5",
      memory: "8/128GB, 8/256GB, 12/256GB, 12/512GB",
      mainCamera:
        "50MP (Wide) + 12MP (Ultrawide) + 5MP (Macro) | Video: Up to 4K",
      selfieCamera: "12MP, Video: Up to 4K",
      sound: "Stereo speakers",
      batteryInfo: "5000 mAh | 45W Wired",
      connectivity: "Bluetooth 6.0 | Wi-Fi 6e | NFC: Yes",
      sensors: "Fingerprint, Accelerometer, Gyro, Proximity, Compass",
      othersInfo: "IP68, Quick share",
    },
  },
  {
    id: "airpods-pro-2",
    name: "AirPods Pro (2nd generation) USB-C",
    brand: "Apple",
    category: "Earbuds",
    price: 22500,
    oldPrice: 25000,
    emoji: "🎧",
    specs: {
      brand: "Apple",
      model: "AirPods Pro (2nd generation) USB-C",
      chipset: "H2 Headphone Chip",
      charging: "USB Type-C",
      encStatus: "Yes",
      bluetooth: "Version BT 5.3",
      batteryCapacity: "49.7mAh",
      ancStatus: "Yes | Up to 2x more Active Noise Cancellation",
      driverSize: "11 mm",
      resistance: "IP54 | Water, Sweat and Dust Resistant",
      features:
        "Hearing Aid (2024 Edition) | Hearing Protection (2024 Edition) | Hearing Test (2024 Edition) | Conversation Awareness (2024 Edition) | Conversation Boost (2024 Edition)",
      playtime:
        "6 hours listening (AirPods) | 4.5 hours talk time (AirPods) | 30 hours listening (Case) | 24 hours talk time (Case)",
    },
  },
  {
    id: "iphone-15",
    name: "iPhone 15",
    brand: "Apple",
    category: "Phones",
    price: 99999,
    emoji: "📱",
    specs: {
      brand: "Apple",
      model: "iPhone 15",
      network: "GSM / HSPA / LTE / 5G",
      dimensions: "147.6 × 71.6 × 7.8 mm",
      weight: "171 g",
      sim: "Nano SIM + eSIM",
      display: "6.1 inches | Super Retina XDR OLED | 1179×2556 | 60Hz",
      chipset: "Apple A16 Bionic",
      cpu: "Hexa-core",
      os: "iOS 17",
      memory: "128GB, 256GB, 512GB",
      mainCamera: "48MP (Wide) + 12MP (Ultrawide) | Video: Up to 4K",
      selfieCamera: "12MP, Video: Up to 4K",
      sound: "Stereo speakers",
      batteryInfo: "3349 mAh | 20W Wired",
      connectivity: "Bluetooth 5.3 | Wi-Fi 6 | NFC: Yes",
      sensors: "Face ID, Accelerometer, Gyro, Proximity, Barometer",
      othersInfo: "IP68",
    },
  },
  {
    id: "galaxy-buds-3-pro",
    name: "Galaxy Buds 3 Pro",
    brand: "Samsung",
    category: "Earbuds",
    price: 18900,
    emoji: "🎧",
    specs: {
      brand: "Samsung",
      model: "Galaxy Buds 3 Pro",
      chipset: "N/A",
      charging: "USB Type-C, Wireless",
      encStatus: "Yes",
      bluetooth: "Version BT 5.4",
      batteryCapacity: "59.5mAh",
      ancStatus: "Yes | Adaptive ANC",
      driverSize: "10.5 mm",
      resistance: "IP57 | Water and Dust Resistant",
      features: "360 Audio | Voice Detect | Find My Earbuds",
      playtime: "8 hours listening (Buds) | 26 hours listening (Case)",
    },
  },
  {
    id: "macbook-air-m3",
    name: "MacBook Air M3",
    brand: "Apple",
    category: "Laptops",
    price: 134900,
    emoji: "💻",
    specs: {
      brand: "Apple",
      model: "MacBook Air M3",
      dimensions: "304.1 × 215 × 11.3 mm",
      weight: "1.24 kg",
      display: "13.6 inches | Liquid Retina | 2560×1664 | 60Hz",
      chipset: "Apple M3",
      cpu: "Octa-core",
      os: "macOS Sonoma",
      memory: "8/256GB, 16/512GB, 24/1TB",
      sound: "Four-speaker sound system",
      batteryInfo: "Up to 18 hours",
      connectivity: "Bluetooth 5.3 | Wi-Fi 6 | Thunderbolt / USB 4",
      sensors: "Touch ID",
      othersInfo: "Backlit Magic Keyboard",
    },
  },
  {
    id: "redmi-note-14-pro",
    name: "Redmi Note 14 Pro",
    brand: "Xiaomi",
    category: "Phones",
    price: 32999,
    emoji: "📱",
    specs: {
      brand: "Xiaomi",
      model: "Redmi Note 14 Pro",
      network: "GSM / HSPA / LTE / 5G",
      dimensions: "161.3 × 75.0 × 8.0 mm",
      weight: "195 g",
      sim: "Nano SIM, Dual SIM",
      display: "6.67 inches | AMOLED | 1220×2712 | 120Hz",
      chipset: "Snapdragon 7s Gen 3",
      cpu: "Octa-core",
      os: "Android 14, HyperOS",
      memory: "8/256GB, 12/256GB",
      mainCamera: "200MP (Wide) + 8MP (Ultrawide) | Video: Up to 4K",
      selfieCamera: "20MP, Video: 1080p",
      sound: "Stereo speakers",
      batteryInfo: "5500 mAh | 45W Wired",
      connectivity: "Bluetooth 5.4 | Wi-Fi 6 | NFC: Yes",
      sensors: "Fingerprint, Accelerometer, Gyro, Proximity, Compass",
      othersInfo: "IP54",
    },
  },
];

const SLOT_COUNT = 3;

function formatPrice(value: number) {
  return `৳ ${value.toLocaleString("en-US")}`;
}

// ---------------------------------------------------------------------------
// One search + product slot (covers both the empty "search to add" state
// and the filled "show product + remove" state).
// ---------------------------------------------------------------------------

function CompareSlot({
  product,
  takenIds,
  onSelect,
  onRemove,
} : {
  product: Product | null;
  takenIds: string[];
  onSelect: (product: Product) => void;
  onRemove: () => void;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return PRODUCTS.filter(
      (p) =>
        !takenIds.includes(p.id) &&
        (p.name.toLowerCase().includes(q) || p.brand.toLowerCase().includes(q))
    ).slice(0, 6);
  }, [query, takenIds]);

  return (
    <div className="relative flex flex-col gap-3 p-4">
      <div className="relative">
        <Search size={20} className="absolute left-2 top-1/2 -translate-y-1/2 text-muted-foreground" />
        <Input
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            
            if (e.target.value.length === 0) {
              setOpen(false)
            } else {
              setOpen(true);
            }
          }}  
          placeholder="Search..."
          className="pl-9 h-10"
        />

        {open && results.length > 0 && (
          <Card className="absolute z-20 mt-1 w-full overflow-hidden p-1 shadow-lg">
            {results.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  onSelect(p);
                  setQuery("");
                  setOpen(false);
                }}
                className="flex w-full items-center gap-3 rounded-md px-2 py-2 text-left text-sm hover:bg-accent"
              >
                <span className="text-xl leading-none">{p.emoji}</span>
                <span className="flex-1 truncate">{p.name}</span>
                <span className="text-xs text-muted-foreground">
                  {formatPrice(p.price)}
                </span>
              </button>
            ))}
          </Card>
        )}
        {open && results.length === 0 && (
          <Card className="absolute z-20 mt-1 w-full p-3 text-sm text-muted-foreground shadow-lg">
            No products found.
          </Card>
        )}
      </div>

      {product ? (
        <div className="flex flex-col items-center gap-3 pt-2 text-center">
          <div className="flex h-32 w-32 items-center justify-center rounded-xl bg-muted text-5xl">
            {product.emoji}
          </div>
          <p className="font-medium leading-snug">{product.name}</p>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>
          <div className="flex flex-wrap gap-2 pt-1 w-full">

            <Button 
              size="lg"
              className="w-full"
            >
              Shop Now
            </Button>

            <Button 
              variant="outline" 
              size="lg" 
              className="w-full"
              onClick={onRemove}
            >
              <X className="mr-1" />
              Remove
            </Button>

          </div>
        </div>
      ) : (
        <div className="flex h-48 flex-col items-center justify-center gap-2 rounded-xl border border-dashed text-muted-foreground">
          <Search className="h-8 w-8" />
          <p className="text-sm">Search and add a product</p>
        </div>
      )}
    </div>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function Compare() {
  const [slots, setSlots] = useState<(Product | null)[]>(
    Array.from({ length: SLOT_COUNT }, () => null)
  );

  const takenIds = slots.filter(Boolean).map((p) => (p as Product).id);

  function selectProduct(index: number, product: Product) {
    setSlots((prev) => {
      const next = [...prev];
      next[index] = product;
      return next;
    });
  }

  function removeProduct(index: number) {
    setSlots((prev) => {
      const next = [...prev];
      next[index] = null;
      return next;
    });
  }

  return (
    <section>
      <div className="mx-auto container px-4">

        <Breadcrumb className="my-3">
          <BreadcrumbList>

            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                  <Link href={'/'}>Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbSeparator />

            <BreadcrumbItem>
              <BreadcrumbPage>Air Pods Pro 3</BreadcrumbPage>
            </BreadcrumbItem>
        
          </BreadcrumbList>
        </Breadcrumb>

        <h1 className="mb-8 text-3xl font-bold tracking-tight md:text-4xl">
          Compare Selected Product
        </h1>

        <Card className="overflow-hidden">
          <div className="">

            <div
              className="grid border-b grid-cols-4"
            > 
              <div className="border-r bg-muted p-4">
                <h2 className="font-semibold">Compare Products</h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Find and select products to see the differences and
                  similarities between them
                </p>
              </div>

              {slots.map((product, index) => (
                <div
                  key={index}
                  className={
                    index < SLOT_COUNT - 1 ? "border-r" : undefined
                  }
                >
                  <CompareSlot
                    product={product}
                    takenIds={takenIds}
                    onSelect={(p) => selectProduct(index, p)}
                    onRemove={() => removeProduct(index)}
                  />
                </div>
              ))}
            </div>

            {/* Spec rows */}
            {SPEC_FIELDS.map((field) => (
              <div
                key={field.key}
                className={`grid border-b last:border-b-0 grid-cols-4`}
              >
                <div className="border-r bg-muted p-4 text-sm font-medium text-muted-foreground">
                  {field.label}
                </div>

                {slots.map((product, colIndex) => (
                  <div
                    key={colIndex}
                    className={`p-4 text-sm leading-relaxed ${
                      colIndex < SLOT_COUNT - 1 ? "border-r" : ""
                    } ${!product?.specs[field.key] ? "text-muted-foreground" : ""}`}
                  >
                    {product?.specs[field.key] ?? "-"}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}