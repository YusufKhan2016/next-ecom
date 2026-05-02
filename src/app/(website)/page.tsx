import FeaturedCategories from "@/components/pages/website/home/featuredCategories";
import FeaturedProducts from "@/components/pages/website/home/featuredProducts";
import GreatDeals from "@/components/pages/website/home/greatDeals";
import NewArrivals from "@/components/pages/website/home/newArrivals";
import NewTrends from "@/components/pages/website/home/newTrends";
import PromotionalHero from "@/components/pages/website/home/promotionalHero";
import TopBrands from "@/components/pages/website/home/topBrands";

export default function Home() {
  return (
    <>
      <PromotionalHero />
      <FeaturedCategories />
      <NewTrends />
      <FeaturedProducts />
      <GreatDeals />
      <NewArrivals />
      <TopBrands />
    </>
    
  );
}
  