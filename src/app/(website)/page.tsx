import FeaturedCategories from "@/components/pages/website/home/featuredCategories";
import FeaturedProducts from "@/components/pages/website/home/featuredProducts";
import NewTrends from "@/components/pages/website/home/newTrends";
import PromotionalHero from "@/components/pages/website/home/promotionalHero";

import { Button } from "@/components/ui/button";
import { MousePointerClick } from "lucide-react";

export default function Home() {
  return (
    <>
      
      <PromotionalHero />
      <FeaturedCategories />
      <NewTrends />
      <FeaturedProducts />

    </>
    
  );
}
  