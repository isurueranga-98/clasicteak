import Category from "@/components/section/home/BestSell";
import ExploreProducts from "@/components/section/home/ExploreProducts";
import HeroSection from "@/components/section/home/Hero";
import ProductCard from "@/components/section/home/productCard";
import Services from "@/components/section/home/Services";
import Image from "next/image";

export default function Home() {
  return (
   <>
      <HeroSection/>
      <Services/>
      <Category/>
      <ExploreProducts/>
      <ProductCard/>
   </>
  );
}
