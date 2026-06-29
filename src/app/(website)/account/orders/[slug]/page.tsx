"use client";

import Image from "next/image";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  BadgeCheck,
  PackageCheck,
  Truck,
  Box,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const steps = [
  { title: "Order Confirmation", icon: BadgeCheck, active: true, },
  { title: "Order Processing", icon: PackageCheck, active: false, },
  { title: "Shipping", icon: Truck, active: false, },
  { title: "Completed", icon: Box, active: false, },
];

export default function OrderDetailsPage() {
  return (
    <div className="space-y-8">

      <div>
        <h2 className="text-xl font-bold flex gap-2 items-center">
          <Button className="text-background" asChild>
            <Link href={'/account/orders'}>
              <ChevronLeft /> 
            </Link>
          </Button>
          Order Details
        </h2>

        <p className="mt-4 text-xl font-semibold">
          Order ID: #344708
        </p>

        <p className="text-sm text-muted-foreground">
          Your expected delivery time: 3-5 days
        </p>
      </div>

      {/* Progress */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">
          Order Progress
        </h3>

        <div className="grid grid-cols-1 gap-3 md:grid-cols-2 xl:grid-cols-4">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <Card
                key={step.title}
                className={`transition-all ${
                  step.active
                    ? "border-orange-500 bg-orange-50"
                    : ""
                }`}
              >
                <CardContent className="flex items-center gap-3 pt-2.5">
                  <Icon
                    className={
                      step.active
                        ? "text-orange-500"
                        : "text-muted-foreground"
                    }
                    size={22}
                  />

                  <span
                    className={
                      `${step.active ? "font-semibold text-orange-600" : "text-muted-foreground"}`
                    }
                  >
                    {step.title}
                  </span>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Order Item */}
      <div>
        <h3 className="mb-4 text-lg font-semibold">
          Order Item
        </h3>

        <Card>
          <div className="flex items-center p-2 gap-4">
            <div className="relative size-20 overflow-hidden rounded-md border">
              <Image
                src="https://images.pexels.com/photos/17518760/pexels-photo-17518760.jpeg"
                alt="iPhone"
                fill
                sizes="200px"
                className="object-cover"
              />
            </div>

            <div>
              <h4 className="font-semibold">
                iPhone 17 Pro Max
              </h4>

              <p className="mt-1 text-lg font-bold">
                ৳ 159,000
              </p>
            </div>
          </div>
        </Card>
      </div>

      {/* Summary */}
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>

        <CardContent className="space-y-5">

          <div className="flex justify-between">
            <span>Sub Total (1 Item)</span>
            <span className="font-medium">
              ৳159,000.00
            </span>
          </div>

          <Separator />

          <div className="flex justify-between">
            <div>
              <p>Delivery</p>

              <p className="text-xs text-muted-foreground">
                Delivery charge will be added based on location
              </p>
            </div>

            <span className="font-medium">
              ৳0.00
            </span>
          </div>

          <Separator />

          <div className="flex justify-between">
            <span>Discount</span>

            <span className="font-medium">
              ৳0.00
            </span>
          </div>

          <Separator />

          <div className="flex justify-between text-lg font-bold">
            <span>Total Amount</span>

            <span>৳159,000.00</span>
          </div>

        </CardContent>
      </Card>
    </div>
  );  
}