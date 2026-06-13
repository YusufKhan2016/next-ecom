import FeaturedCategories from "@/components/features/website/featuredCategories";
import CarouselSlider from "@/components/features/website/carouselSlider";
import PromotionalHero from "@/components/features/website/promotionalHero";

import { categories } from "@/staticsDatas/categories"
import { products } from "@/staticsDatas/products"

import acGreatDeal from "@/assets/home/ac-mid-great-deal.gif"

export default function Home() {
  return (
    <>
      <PromotionalHero />
      <FeaturedCategories />
      
      <CarouselSlider
        headerFirstPart="New"
        headerSecondPart="Trends"
        products={products}
      />

      <CarouselSlider
        headerFirstPart="Featured"
        headerSecondPart="Products"
        categories={categories}
        products={products}
      />

      <CarouselSlider
        headerFirstPart="Great"
        headerSecondPart="Deals"
        banner={acGreatDeal}
        categories={categories}
        products={products}
      />

      <CarouselSlider
        headerFirstPart="New"
        headerSecondPart="Arrivals"
        categories={categories}
        products={products}
      />

      <CarouselSlider
        headerFirstPart="Top"
        headerSecondPart="Brands"
        categories={categories}
        products={products}
      />
    </>
    
  );
}
  