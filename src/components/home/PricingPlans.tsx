"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Check, Sparkles, ArrowRight, Star, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { products } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import AddToCartButton from "@/components/cart/AddToCartButton";

interface TabConfig {
  id: string;
  label: string;
  slugs: string[];
}

const productThumbnailMap: Record<string, string> = {
  "microsoft-365-business-standard": "/images/m365-business-thumb.jpg",
  "microsoft-365-personal": "/images/m365-business-thumb.jpg",
  "windows-11-pro": "/images/windows-11-pro-thumb.jpg",
  "windows-11-home": "/images/windows-11-pro-thumb.jpg",
  "windows-11-enterprise": "/images/windows-11-pro-thumb.jpg",
  "microsoft-office-2021-ltsc": "/images/m365-business-thumb.jpg",
  "microsoft-office-2024-home-business": "/images/m365-business-thumb.jpg",
  "windows-server-2022-standard": "/images/server_datacenter_3d.jpg",
  "sql-server-2022-standard": "/images/server_datacenter_3d.jpg",
  "giai-phap-quan-tri-nhan-su-toan-dien-hrm": "/images/hrm.png",
  "giai-phap-quan-tri-doanh-nghiep-tong-the-erp": "/images/kd-tc.png",
  "giai-phap-quan-ly-tong-the-benh-vien": "/images/home-2.png",
  "microsoft-project-professional": "/images/workflow-hero-bright.jpg",
  "kaspersky-endpoint-security": "/images/server_datacenter_3d.jpg",
  "bitdefender-gravityzone": "/images/server_datacenter_3d.jpg",
  "adobe-acrobat-pro-dc": "/images/van-phong-so.png",
  "autodesk-autocad": "/images/copilot_ai_3d.jpg",
};

const tabs: TabConfig[] = [
  {
    id: "featured",
    label: "⭐ Bán chạy & Tiêu biểu",
    slugs: [
      "microsoft-365-business-standard",
      "windows-11-pro",
      "giai-phap-quan-tri-nhan-su-toan-dien-hrm",
      "windows-server-2022-standard",
    ],
  },
  {
    id: "solutions",
    label: "💼 Giải pháp Doanh nghiệp",
    slugs: [
      "giai-phap-quan-tri-nhan-su-toan-dien-hrm",
      "giai-phap-quan-tri-doanh-nghiep-tong-the-erp",
      "microsoft-project-professional",
      "giai-phap-quan-ly-tong-the-benh-vien",
    ],
  },
  {
    id: "os-server",
    label: "💻 Hệ điều hành & Máy chủ",
    slugs: [
      "windows-11-pro",
      "windows-11-enterprise",
      "windows-server-2022-standard",
      "sql-server-2022-standard",
    ],
  },
  {
    id: "office-cloud",
    label: "📄 Office & Làm việc số",
    slugs: [
      "microsoft-365-business-standard",
      "microsoft-office-2024-home-business",
      "microsoft-office-2021-ltsc",
      "microsoft-365-personal",
    ],
  },
  {
    id: "security",
    label: "🛡️ Bảo mật & Thiết kế",
    slugs: [
      "kaspersky-endpoint-security",
      "bitdefender-gravityzone",
      "adobe-acrobat-pro-dc",
      "autodesk-autocad",
    ],
  },
];

export default function PricingPlans() {
  const [activeTabId, setActiveTabId] = useState("featured");

  const currentTab = tabs.find((t) => t.id === activeTabId) || tabs[0];
  const activeProducts = currentTab.slugs
    .map((slug) => products.find((p) => p.slug === slug))
    .filter(Boolean);

  return (
    <section className="relative overflow-hidden py-16 sm:py-24 border-y border-slate-200/90 bg-slate-50">
      {/* Luminous Soft Silk Wave Background Image */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image
          src="/images/pricing-soft-bg.jpg"
          alt="Hạ tầng bản quyền & phần mềm doanh nghiệp ETEK"
          fill
          unoptimized
          priority
          className="object-cover object-center scale-105 blur-[5px] opacity-70"
        />
        {/* Gentle protective light gradient wash */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-transparent to-white/60" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700 font-mono bg-blue-100/80 px-3.5 py-1.5 rounded-full border border-blue-200/80 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              BẢNG GIÁ & SẢN PHẨM BẢN QUYỀN
            </span>
            <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight uppercase leading-tight">
              BẢNG GIÁ PHẦN MỀM & BẢN QUYỀN TRỌN GÓI
            </h2>
            <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600">
              Dữ liệu trực tiếp từ trang sản phẩm. Báo giá minh bạch, 100% bản quyền chính hãng với đầy đủ hóa đơn VAT và bảo hành kích hoạt trọn đời.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Tabs Switcher */}
        <ScrollReveal direction="up" delay={50}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTabId(tab.id)}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all shadow-xs ${
                  activeTabId === tab.id
                    ? "bg-blue-600 text-white shadow-md scale-105"
                    : "bg-white/90 backdrop-blur-sm text-slate-700 hover:bg-white hover:text-blue-600 border border-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* 4 Cards Grid with Images and Concise Content */}
        <ScrollReveal direction="up" delay={100} className="mt-8 sm:mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 xl:gap-6 items-stretch">
            {activeProducts.map((p, idx) => {
              if (!p) return null;
              const isHighlight = p.isSolution || idx === 2;
              const thumbUrl = productThumbnailMap[p.slug] || "/images/banner-sp-base.png";

              return (
                <div
                  key={p.id}
                  className={`relative flex flex-col justify-between rounded-[2rem] p-4 sm:p-5 xl:p-5 2xl:p-6 transition-all duration-300 h-full group ${
                    isHighlight
                      ? "bg-gradient-to-b from-blue-600 via-blue-600 to-cyan-600 text-white shadow-2xl border-2 border-cyan-300 ring-4 ring-blue-500/20 hover:-translate-y-1.5"
                      : "bg-white/95 backdrop-blur-md border border-slate-200/90 text-slate-900 shadow-sm hover:shadow-2xl hover:border-blue-300 hover:-translate-y-1.5 hover:bg-white"
                  }`}
                >
                  {/* Top Badge */}
                  {isHighlight && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap z-20">
                      <span className="inline-flex items-center gap-1 rounded-full bg-cyan-300 px-3 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-slate-950 shadow-md">
                        <Sparkles className="h-3 w-3" />
                        {p.isSolution ? "GIẢI PHÁP TRỌN GÓI" : "LỰA CHỌN PHỔ BIẾN"}
                      </span>
                    </div>
                  )}

                  {/* Top Section */}
                  <div>
                    {/* 1. Product Image Thumbnail */}
                    <Link
                      href={`/san-pham/${p.slug}`}
                      className="relative block aspect-[16/10] w-full overflow-hidden rounded-2xl mb-3.5 bg-slate-100 border border-slate-200/60 shadow-xs"
                    >
                      <Image
                        src={thumbUrl}
                        alt={p.name}
                        fill
                        className="object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                      {/* Brand Tag Floating on Image */}
                      <div className="absolute top-2 left-2">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-wider bg-white/95 text-blue-700 px-2 py-0.5 rounded-md shadow-xs backdrop-blur-sm border border-slate-200/80">
                          {p.brand}
                        </span>
                      </div>

                      {/* Rating Floating on Image */}
                      {p.rating && (
                        <div className="absolute top-2 right-2 flex items-center gap-1 text-[11px] font-extrabold bg-slate-900/80 text-amber-300 px-2 py-0.5 rounded-md shadow-xs backdrop-blur-sm">
                          <Star className="h-3 w-3 fill-current" />
                          <span>{p.rating}</span>
                        </div>
                      )}
                    </Link>

                    {/* 2. Product Title */}
                    <Link href={`/san-pham/${p.slug}`}>
                      <h3
                        className={`text-[15px] font-extrabold tracking-tight line-clamp-2 min-h-[44px] transition-colors leading-snug ${
                          isHighlight
                            ? "text-white group-hover:text-cyan-100"
                            : "text-slate-900 group-hover:text-blue-600"
                        }`}
                      >
                        {p.name}
                      </h3>
                    </Link>

                    {/* 3. Price Display */}
                    <div className="mt-2 pb-3 border-b border-slate-200/50">
                      {p.price > 0 ? (
                        <div className="flex flex-col">
                          <div className="flex items-baseline">
                            <span
                              className={`text-xl sm:text-2xl font-black tracking-tight font-mono ${
                                isHighlight ? "text-white" : "text-blue-600"
                              }`}
                            >
                              {formatPrice(p.price)}
                            </span>
                            <span
                              className={`text-[11px] font-medium ml-1 ${
                                isHighlight ? "text-cyan-100" : "text-slate-500"
                              }`}
                            >
                              / {p.duration}
                            </span>
                          </div>
                          {p.originalPrice && (
                            <span
                              className={`text-[11px] line-through ${
                                isHighlight ? "text-cyan-200/70" : "text-slate-400"
                              }`}
                            >
                              {formatPrice(p.originalPrice)}
                            </span>
                          )}
                        </div>
                      ) : (
                        <div>
                          <span
                            className={`text-lg sm:text-xl font-black tracking-tight ${
                              isHighlight ? "text-white" : "text-blue-600"
                            }`}
                          >
                            Kiến Trúc Theo Yêu Cầu
                          </span>
                          <p
                            className={`text-[11px] font-medium mt-0.5 ${
                              isHighlight ? "text-cyan-100" : "text-slate-500"
                            }`}
                          >
                            Khảo sát & Báo giá theo quy mô DN
                          </p>
                        </div>
                      )}
                    </div>

                    {/* 4. Reduced, Punchy Features (Top 3 only) */}
                    <ul className="mt-3.5 space-y-2 text-xs leading-snug">
                      {p.features.slice(0, 3).map((feat, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span
                            className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full mt-0.5 ${
                              isHighlight
                                ? "bg-white/20 text-white"
                                : "bg-cyan-100 text-cyan-700"
                            }`}
                          >
                            <Check className="h-2.5 w-2.5" />
                          </span>
                          <span
                            className={`line-clamp-2 font-medium ${
                              isHighlight ? "text-white/95" : "text-slate-700"
                            }`}
                          >
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* 5. Bottom Action Buttons */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100/30 flex items-center gap-2">
                    {p.isSolution ? (
                      <Link
                        href={`/san-pham/${p.slug}`}
                        className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-2.5 px-3 text-xs font-bold transition-all shadow-md active:scale-95 ${
                          isHighlight
                            ? "bg-white !text-blue-900 font-extrabold hover:bg-slate-100 hover:shadow-xl"
                            : "bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:opacity-95"
                        }`}
                      >
                        <span className={isHighlight ? "!text-blue-900 font-extrabold" : "text-white"}>
                          Khám phá giải pháp
                        </span>
                        <ArrowRight className={`h-3 w-3 ${isHighlight ? "!text-blue-900" : "text-white"}`} />
                      </Link>
                    ) : (
                      <>
                        <Link
                          href={`/san-pham/${p.slug}`}
                          className={`flex-1 inline-flex items-center justify-center gap-1.5 rounded-xl py-2.5 px-3 text-xs font-bold transition-all shadow-xs ${
                            isHighlight
                              ? "bg-white !text-blue-900 font-extrabold hover:bg-slate-100"
                              : "bg-blue-600 text-white hover:bg-blue-700"
                          }`}
                        >
                          <span>Xem chi tiết</span>
                          <ArrowRight className="h-3 w-3" />
                        </Link>
                        <AddToCartButton
                          product={p}
                          className={`rounded-xl h-9 w-9 p-0 ${
                            isHighlight
                              ? "bg-white/20 border-white/30 text-white hover:bg-white hover:text-blue-900"
                              : "bg-slate-100 border-slate-200 text-slate-700 hover:bg-blue-50 hover:text-blue-600"
                          }`}
                        />
                      </>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Bottom Banner to Products Page */}
        <ScrollReveal direction="up" delay={150}>
          <div className="mt-10 text-center">
            <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-4 sm:p-5 rounded-2xl bg-white/90 backdrop-blur-md border border-slate-200 shadow-md">
              <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700">
                <ShieldCheck className="h-5 w-5 text-emerald-600 shrink-0" />
                <span>
                  Toàn bộ license được cấp phép chính ngạch kèm hóa đơn VAT, chứng nhận CO/CQ và bảo hành kỹ thuật 24/7.
                </span>
              </div>
              <Link
                href="/san-pham"
                className="whitespace-nowrap inline-flex items-center gap-1.5 rounded-xl bg-slate-900 px-5 py-2.5 text-xs sm:text-sm font-bold text-white hover:bg-blue-600 transition-all shadow-xs"
              >
                <span>Xem tất cả 18+ sản phẩm tại Cửa Hàng</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
