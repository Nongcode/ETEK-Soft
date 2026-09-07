import Hero from "@/components/home/Hero";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import SolutionSection from "@/components/home/SolutionSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ProcessSteps from "@/components/home/ProcessSteps";
import PartnersSection from "@/components/home/PartnersSection";
import NewsSection from "@/components/home/NewsSection";
import ConsultationCTA from "@/components/home/ConsultationCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <CategoryGrid />
      <FeaturedProducts />
      <SolutionSection />
      <WhyChooseUs />
      <ProcessSteps />
      <PartnersSection />
      <NewsSection />
      <ConsultationCTA />
    </>
  );
}
