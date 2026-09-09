import Link from "next/link";
import Image from "next/image";
import { Headphones, FileText, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Container from "@/components/ui/Container";
import { SearchSuggestion } from "@/components/ui/SearchBox";
import ScrollReveal from "@/components/ui/ScrollReveal";

const trustBadges = [
  {
    icon: ShieldCheck,
    title: "100% Chính hãng",
    desc: "Từ nhà sản xuất",
  },
  {
    icon: Zap,
    title: "Giao nhận tức thì",
    desc: "15 - 30 phút qua email",
  },
  {
    icon: FileText,
    title: "Hóa đơn VAT",
    desc: "Hợp lệ chi phí DN",
  },
  {
    icon: Headphones,
    title: "Hỗ trợ 24/7",
    desc: "Cài đặt UltraViewer",
  },
];

export default function ProductBanner({
  suggestions = [],
}: {
  suggestions?: SearchSuggestion[];
}) {
  return (
    <>
      <section className="relative bg-[#ebf3fa] overflow-hidden min-h-[460px] sm:min-h-[500px] lg:min-h-[540px] xl:min-h-[580px] flex items-center">
      {/* Background Banner Image strictly clipped inside with smooth bottom fade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/banner-sp-base.png"
          alt="ETEK SOFTS Banner Sản phẩm"
          fill
          priority
          className="object-cover object-right-bottom lg:object-[center_bottom]"
        />
        {/* Soft gradient wash to guarantee high contrast and readability on the left content area */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent sm:via-white/70 lg:via-white/35" />
        {/* Gentle seamless bottom blend into page canvas */}
        <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent via-slate-50/30 to-slate-50/80 pointer-events-none" />
      </div>

      <Container className="relative z-10 py-12 lg:py-20">
        {/* 1. Top Breadcrumb navigation */}
        <nav
          aria-label="Breadcrumb"
          className="banner-enter mb-5 flex items-center gap-2 text-xs font-semibold text-slate-600"
          style={{ "--enter-delay": "80ms" } as React.CSSProperties}
        >
          <Link href="/" className="transition-colors hover:text-primary">
            Trang chủ
          </Link>
          <span className="text-slate-400">/</span>
          <span className="font-bold text-primary">Sản phẩm</span>
        </nav>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Heading, Subtitle, Search, Tags */}
          <div className="lg:col-span-7">
            {/* 2. Topic Pill Badge */}
            <div
              className="banner-enter mb-3.5 inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 shadow-xs backdrop-blur-sm"
              style={{ "--enter-delay": "180ms" } as React.CSSProperties}
            >
              <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-ping" />
              <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
              <span>ETEK SOFTS Solutions 2026</span>
            </div>

            {/* 3. Main Headline */}
            <h1
              className="banner-enter text-2xl font-black tracking-tight text-navy sm:text-3xl lg:text-4xl"
              style={{ "--enter-delay": "300ms" } as React.CSSProperties}
            >
              Phần Mềm &amp; License{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Bản Quyền Chính Hãng
              </span>
            </h1>

            {/* 4. Subtitle Description */}
            <p
              className="banner-enter mt-3 max-w-xl text-sm font-medium leading-relaxed text-slate-700 sm:text-base"
              style={{ "--enter-delay": "420ms" } as React.CSSProperties}
            >
              Hệ sinh thái bản quyền Microsoft, Windows, Office, an ninh mạng và phần mềm đồ họa kỹ thuật dành riêng cho doanh nghiệp — có chứng nhận hợp lệ và hóa đơn VAT đầy đủ.
            </p>
          </div>

          {/* Right Column: Space for the 3D Laptop & Office Scene to shine through */}
          <div className="hidden lg:block lg:col-span-5" />
        </div>
      </Container>
    </section>

    {/* Dedicated Trust Badges Block with matching seamless background */}
    <div className="relative z-10 pt-6 pb-2 sm:pt-8 sm:pb-3">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className="group flex items-center gap-3.5 rounded-2xl border border-slate-200/90 bg-white p-3.5 sm:p-4 shadow-sm transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:-translate-y-0.5"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white group-hover:shadow-sm">
                  <Icon className="h-5 w-5" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {badge.title}
                  </p>
                  <p className="truncate text-xs font-medium text-slate-500 mt-0.5">
                    {badge.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  </>
  );
}
