import Link from "next/link";
import Image from "next/image";
import { Headphones, FileText, ShieldCheck, Sparkles, Zap } from "lucide-react";
import Container from "@/components/ui/Container";
import SearchBox, { SearchSuggestion } from "@/components/ui/SearchBox";

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
    <section className="relative overflow-hidden border-b border-border bg-slate-50">
      {/* Background Banner Image from D:\Downloads\bnner-sp.png */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banner-sp.png"
          alt="ETEK SOFTS Banner Sản phẩm"
          fill
          priority
          className="object-cover object-right lg:object-center"
        />
        {/* Soft gradient wash to guarantee high contrast and readability on the left content area */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 to-transparent sm:via-white/70 lg:via-white/40" />
      </div>

      <Container className="relative z-10 py-10 lg:py-16">
        {/* Top Breadcrumb navigation */}
        <nav aria-label="Breadcrumb" className="mb-5 flex items-center gap-2 text-xs font-semibold text-slate-600">
          <Link href="/" className="transition-colors hover:text-primary">
            Trang chủ
          </Link>
          <span className="text-slate-400">/</span>
          <span className="font-bold text-primary">Sản phẩm</span>
        </nav>

        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Heading, Subtitle, Search, Tags */}
          <div className="lg:col-span-7">
            <div className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-white/80 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary shadow-xs backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-primary" aria-hidden />
              <span>ETEK SOFTS Solutions</span>
            </div>

            <h1 className="text-2xl font-black tracking-tight text-navy sm:text-3xl lg:text-4xl">
              Phần Mềm &amp; License Bản Quyền Chính Hãng
            </h1>

            <p className="mt-3 max-w-xl text-sm font-medium leading-relaxed text-slate-700 sm:text-base">
              Hệ sinh thái bản quyền Microsoft, Windows, Office, an ninh mạng và phần mềm đồ họa kỹ thuật dành riêng cho doanh nghiệp — có chứng nhận hợp lệ và hóa đơn VAT đầy đủ.
            </p>

            {/* Integrated Search Box */}
            <div className="mt-6 max-w-xl">
              <SearchBox
                suggestions={suggestions}
                placeholder="Tìm kiếm phần mềm (Windows, Office, Kaspersky, Autodesk...)"
                className="shadow-md"
              />
            </div>

            {/* Popular quick tags */}
            <div className="mt-4 flex flex-wrap items-center gap-1.5 text-xs text-slate-600">
              <span className="font-bold text-slate-800">Phổ biến:</span>
              {popularKeywords.map((tag) => (
                <Link
                  key={tag.label}
                  href={tag.href}
                  className="rounded-full border border-slate-200/80 bg-white/90 px-2.5 py-0.5 font-medium text-slate-700 shadow-xs transition-all hover:border-primary hover:bg-white hover:text-primary"
                >
                  {tag.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Column: Space for the 3D Laptop & Glass Icons to shine through */}
          <div className="hidden lg:block lg:col-span-5" />
        </div>

        {/* 4 Trust Badges Floating Strip */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 max-w-3xl lg:max-w-4xl pt-2">
          {trustBadges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className="flex items-center gap-2.5 rounded-xl border border-white/80 bg-white/85 p-3 shadow-xs backdrop-blur-sm transition-all hover:bg-white hover:shadow-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="h-4 w-4" aria-hidden />
                </span>
                <div className="min-w-0">
                  <p className="truncate text-xs font-bold text-navy">{badge.title}</p>
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
