import Hero from "@/components/home/Hero";
import PartnerMarquee from "@/components/home/PartnerMarquee";
import CredibilityStats from "@/components/home/CredibilityStats";
import CoreValueSection from "@/components/home/CoreValueSection";
import SolutionPortfolio from "@/components/home/SolutionPortfolio";
import ImplementationProcess from "@/components/home/ImplementationProcess";
import PricingPlans from "@/components/home/PricingPlans";
import AgencyQuoteSection from "@/components/home/AgencyQuoteSection";
import InteractiveTestimonials from "@/components/home/InteractiveTestimonials";
import FuturisticCTA from "@/components/home/FuturisticCTA";

/**
 * Cố ý KHÔNG bọc mỗi section trong một `data-reveal`.
 *
 * Bọc cả section sẽ cho toàn bộ khối cao 1200–1800px hiện cùng một lúc, ngay
 * khi mép trên của nó vừa chạm đáy màn hình — nghĩa là phần nội dung nằm sâu
 * bên dưới đã xuất hiện xong từ lâu trước khi người xem cuộn tới. Nhìn ra thì
 * đúng là "vừa vào trang mọi thứ đã hiện hết".
 *
 * Thay vào đó `data-reveal` được đặt ở từng khối con bên trong mỗi section
 * (tiêu đề, từng thẻ, từng cột), nên nội dung nối nhau xuất hiện đúng theo
 * nhịp cuộn. RevealEngine trong layout gom tất cả vào một observer duy nhất.
 */
export default function Home() {
  return (
    <div className="relative min-h-screen overflow-x-clip bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Vạch chỉ dẫn cuộn dọc mép trái */}
      <div className="scroll-indicator hidden xl:block">Scroll</div>

      <Hero />
      <PartnerMarquee />
      <CredibilityStats />
      <CoreValueSection />
      <SolutionPortfolio />
      <ImplementationProcess />
      <PricingPlans />
      <AgencyQuoteSection />
      <InteractiveTestimonials />
      <FuturisticCTA />
    </div>
  );
}
