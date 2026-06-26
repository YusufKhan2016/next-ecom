"use client";

import { Button } from "@/components/ui/button";
import { Field } from "@/components/ui/field";
import { useCartStore } from "@/store/website/cart";
import { Minus, Plus } from "lucide-react";

interface CounterProps {
  id: number;
  quantity: number;
  size?: "sm" | "md" | "lg" | "xl";
}

const sizeVariants = {
  sm: {
    container: "gap-1 rounded-md",
    button: "size-7",
    icon: 14,
    text: "text-xs min-w-6",
  },
  md: {
    container: "gap-1 rounded-lg",
    button: "size-9",
    icon: 16,
    text: "text-sm min-w-8",
  },
  lg: {
    container: "gap-1.5 rounded-lg",
    button: "size-10",
    icon: 18,
    text: "text-base min-w-10",
  },
  xl: {
    container: "gap-2 rounded-xl",
    button: "size-12",
    icon: 20,
    text: "text-lg min-w-12",
  },
};

export default function Counter({
  id,
  quantity,
  size = "md",
}: CounterProps) {
  const incrementQuantity = useCartStore(
    (state) => state.incrementQuantity
  );
  const decrementQuantity = useCartStore(
    (state) => state.decrementQuantity
  );

  const variant = sizeVariants[size];

  return (
    <Field
      orientation="horizontal"
      className={`flex items-center border border-foreground/10 shadow-sm w-fit p-1 ${variant.container}`}
    >
      <Button
        type="button" 
        size="icon"
        className={variant.button}
        onClick={() => decrementQuantity(id)}
      >
        <Minus size={variant.icon} />
      </Button>

      <span
        className={`text-center font-semibold ${variant.text}`}
      >
        {quantity}
      </span>

      <Button
        type="button" 
        size="icon"
        className={variant.button}
        onClick={() => incrementQuantity(id)}
      >
        <Plus size={variant.icon} />
      </Button>
    </Field>
  );
}