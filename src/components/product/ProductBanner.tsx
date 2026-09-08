import Link from "next/link";
import Image from "next/image";
import { Headphones, FileText, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Container from "@/components/ui/Container";
import SearchBox, { SearchSuggestion } from "@/components/ui/SearchBox";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { FloatingSoftwareLogos } from "@/components/product/FloatingSoftwareLogos";

const popularKeywords = [
  { label: "Microsoft 365", href: "/san-pham?category=microsoft-365" },
  { label: "Windows 11 Pro", href: "/san-pham?category=windows" },
  { label: "Office 2024", href: "/san-pham?category=office" },
  { label: "Kaspersky", href: "/san-pham?brand=Kaspersky" },
  { label: "SQL Server", href: "/san-pham?category=sql-server" },
  { label: "AutoCAD", href: "/san-pham?q=Autodesk" },
];

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
    <section className="relative bg-slate-50 overflow-hidden">
      {/* Background Banner Image strictly clipped inside with smooth bottom fade */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Image
          src="/images/banner-sp-base.png"
          alt="ETEK SOFTS Banner Sản phẩm"
          fill
          priority
          className="object-cover object-right lg:object-center"
        />
        {/* Soft gradient wash to guarantee high contrast and readability on the left content area */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent sm:via-white/70 lg:via-white/40" />
        {/* Gentle seamless bottom blend */}
        <div className="absolute bottom-0 inset-x-0 h-14 bg-gradient-to-b from-transparent to-slate-50/70" />
      </div>

      {/* Dynamic Floating Software Logos hovering over the laptop workspace */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[48%] z-10 pointer-events-none">
        <FloatingSoftwareLogos />
      </div>

      {/* Floating 3D Geometric Accents matching Homepage Hero */}
      <span className="pointer-events-none absolute right-[34%] top-10 hidden h-7 w-7 rotate-12 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-500 opacity-40 shadow-lg animate-balloon lg:block" />
      <span className="pointer-events-none absolute right-[12%] bottom-14 hidden h-8 w-8 -rotate-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-teal-400 opacity-30 shadow-lg animate-balloon-slow lg:block" />

      <Container className="relative z-10 py-10 lg:py-16">
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

            {/* 5. Integrated Search Box */}
            <div
              className="banner-enter mt-6 max-w-xl transition-transform duration-300 hover:scale-[1.01]"
              style={{ "--enter-delay": "540ms" } as React.CSSProperties}
            >
              <SearchBox
                suggestions={suggestions}
                placeholder="Tìm kiếm phần mềm (Windows, Office, Kaspersky, Autodesk...)"
                className="shadow-md hover:shadow-lg transition-shadow"
              />
            </div>

            {/* 6. Popular Quick Tag Pills */}
            <div
              className="banner-enter mt-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-600"
              style={{ "--enter-delay": "660ms" } as React.CSSProperties}
            >
              <span className="font-bold text-slate-800">Phổ biến:</span>
              {popularKeywords.map((tag) => (
                <Link
                  key={tag.label}
                  href={tag.href}
                  className="rounded-full border border-slate-200/90 bg-white/95 px-2.5 py-0.5 font-medium text-slate-700 shadow-xs transition-all duration-200 hover:scale-105 hover:border-primary hover:bg-primary hover:text-white hover:shadow-sm active:scale-95"
                >
                  {tag.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Space for the 3D Laptop & Glass Icons to shine through */}
          <div className="hidden lg:block lg:col-span-5" />
        </div>

        {/* 7. 4 Trust Badges Floating Strip with Staggered Cascading Entrance */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-3xl lg:max-w-4xl pt-2">
          {trustBadges.map((badge, idx) => {
            const Icon = badge.icon;
            const delay = 780 + idx * 120;
            return (
              <div
                key={badge.title}
                className="banner-enter group flex items-center gap-2.5 rounded-xl border border-white/90 bg-white/85 p-3 shadow-xs backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:bg-white hover:shadow-md cursor-pointer"
                style={{ "--enter-delay": `${delay}ms` } as React.CSSProperties}
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-500 group-hover:text-white group-hover:shadow-sm">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-xs font-bold text-navy group-hover:text-blue-600 transition-colors">{badge.title}</p>
                  <p className="truncate text-[11px] font-medium text-slate-500">{badge.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
