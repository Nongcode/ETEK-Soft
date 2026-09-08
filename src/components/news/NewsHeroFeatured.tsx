"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Calendar,
  Clock,
  Flame,
  Radio,
  ShieldCheck,
} from "lucide-react";
import { NewsArticle } from "@/types";
import { formatDate } from "@/lib/utils";

const TRENDING_TAGS = [
  { label: "#CopilotAI", href: "/tin-tuc/microsoft-365-copilot-cho-doanh-nghiep-vua-va-nho" },
  { label: "#FaceID4.0", href: "/tin-tuc/tu-dong-hoa-cham-cong-faceid-ai-da-chi-nhanh" },
  { label: "#Luong3P", href: "/tin-tuc/thiet-lap-dong-co-tinh-luong-3p-cho-doanh-nghiep" },
  { label: "#WindowsServer2025", href: "/tin-tuc/so-sanh-windows-server-2022-va-2025" },
];

export default function NewsHeroFeatured({ article }: { article: NewsArticle }) {
  return (
    <section className="relative isolate overflow-hidden pt-6 pb-12 sm:pb-16 lg:pb-20 border-b border-slate-200/80 bg-slate-50/50 text-slate-900">
      {/* 3D Moving Architectural Canvas Layer */}
      <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden">
        <div className="relative h-full w-full animate-scroll-active animate-ambient-3d">
          <Image
            src="/images/news_hero_3d_bg.jpg"
            alt="3D Futuristic Architectural Tech Atrium"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center opacity-85"
          />
        </div>
      </div>

      {/* Luminous Glass Overlay: Soft white sunlight wash to keep text crystal clear and bright */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-white/80 via-white/85 to-white/95 backdrop-blur-[1.5px]" />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 h-[500px] w-[950px] rounded-full bg-gradient-to-r from-blue-200/40 via-sky-200/35 to-indigo-200/25 blur-3xl -z-10" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Scientific Editorial Header & Telemetry Bar */}
        <div className="pb-8 space-y-4" data-reveal="fade">
          {/* Top Status Strip */}
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/95 px-3.5 py-1 text-xs font-bold text-blue-800 shadow-xs backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
              </span>
              <span>ETEK TECH JOURNAL · TRI THỨC SỐ 2026</span>
            </div>

            <div className="hidden sm:flex items-center gap-2 text-xs font-semibold text-slate-600 bg-white/80 border border-slate-200/80 rounded-full px-3.5 py-1 shadow-2xs backdrop-blur-sm">
              <Radio className="h-3 w-3 text-emerald-500 animate-pulse" />
              <span>ẤN BẢN SỐ ĐIỆN TỬ · CẬP NHẬT LIÊN TỤC 24/7</span>
            </div>
          </div>

          {/* Main Title */}
          <div>
            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-[1.25] sm:leading-[1.3] uppercase text-slate-900">
              TIN TỨC, XU HƯỚNG &amp;{" "}
              <span className="inline-block py-1 bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
                HẠ TẦNG KỸ THUẬT SỐ
              </span>
            </h1>
            <p className="mt-2.5 max-w-3xl text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
              Cập nhật chuyên sâu về bản quyền phần mềm Microsoft, bảo mật đám mây và tự động hóa quản trị nhân lực 4.0 từ đội ngũ chuyên gia ETEK.
            </p>
          </div>

          {/* Scientific Trending Topics Strip (Seamlessly integrated, zero awkward wrapping) */}
          <div className="pt-1">
            <div className="inline-flex flex-wrap items-center gap-2 rounded-2xl border border-blue-200/70 bg-white/85 p-1.5 sm:p-2 shadow-xs backdrop-blur-md">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50/90 rounded-xl border border-blue-100">
                <Flame className="h-3.5 w-3.5 text-amber-500" />
                <span>Xu hướng:</span>
              </span>

              {TRENDING_TAGS.map((tag) => (
                <Link
                  key={tag.label}
                  href={tag.href}
                  className="rounded-xl px-3 py-1 text-[11.5px] font-semibold text-slate-700 bg-slate-50/80 hover:bg-blue-50 hover:text-blue-600 border border-slate-200/60 hover:border-blue-300 transition-all cursor-pointer"
                >
                  {tag.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* 2-Column Balanced Spotlight Card */}
        <div
          data-reveal="scale"
          className="mt-2 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch rounded-[2.8rem] border border-blue-200/90 bg-white/95 p-6 sm:p-9 lg:p-10 shadow-[0_20px_60px_-15px_rgba(37,99,235,0.14)] backdrop-blur-xl overflow-hidden"
        >
          {/* Left Column: Featured Article Editorial Information (6 cols) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Category, Date & Read time */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-3.5 py-1 text-xs font-bold text-white shadow-sm shadow-blue-500/25">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                  TIÊU ĐIỂM CÔNG NGHỆ
                </span>
                <span className="rounded-full bg-blue-50 border border-blue-200 px-3 py-1 font-mono text-xs font-bold text-blue-700">
                  {article.category}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <Calendar className="h-3.5 w-3.5 text-blue-600" />
                  {formatDate(article.date)}
                </span>
                <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <Clock className="h-3.5 w-3.5 text-blue-600" />
                  {article.readTime}
                </span>
              </div>

              {/* Title */}
              <Link href={`/tin-tuc/${article.slug}`}>
                <h2 className="text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 leading-snug tracking-tight hover:text-blue-600 transition-colors">
                  {article.title}
                </h2>
              </Link>

              {/* Excerpt */}
              <p className="mt-3.5 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed font-normal">
                {article.excerpt}
              </p>

              {/* 3 Metric Chips */}
              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-3 text-center">
                  <p className="text-base sm:text-xl font-black text-blue-700 font-mono">40%</p>
                  <p className="text-[10px] text-slate-600 font-medium mt-0.5">Tiết kiệm thời gian</p>
                </div>
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-3 text-center">
                  <p className="text-base sm:text-xl font-black text-blue-700 font-mono">CO/CQ</p>
                  <p className="text-[10px] text-slate-600 font-medium mt-0.5">Bản quyền 100%</p>
                </div>
                <div className="rounded-2xl border border-slate-200/90 bg-slate-50/70 p-3 text-center">
                  <p className="text-base sm:text-xl font-black text-emerald-600 font-mono">&lt; 15P</p>
                  <p className="text-[10px] text-slate-600 font-medium mt-0.5">Kỹ sư hỗ trợ</p>
                </div>
              </div>
            </div>

            {/* Author & Action Button */}
            <div className="mt-7 pt-5 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                  {article.author ? article.author.name.charAt(0) : "E"}
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-bold text-slate-900">
                    {article.author ? article.author.name : "Ban Cố Vấn ETEK"}
                  </p>
                  <p className="text-[11px] text-blue-600 font-medium">
                    {article.author ? article.author.role : "Bộ Phận Nghiên Cứu Chuyển Đổi Số"}
                  </p>
                </div>
              </div>

              <Link
                href={`/tin-tuc/${article.slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 px-6 py-3 text-xs font-bold text-white shadow-md shadow-blue-600/20 hover:shadow-lg hover:shadow-blue-600/30 hover:scale-105 active:scale-95 transition-all duration-300"
              >
                <span>Đọc bài viết chi tiết</span>
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          </div>

          {/* Right Column: Luminous Bright Technology Banner (6 cols, 100% inside container) */}
          <div className="lg:col-span-6 w-full h-full min-h-[320px] sm:min-h-[380px] lg:min-h-[420px] relative rounded-[2.2rem] overflow-hidden border border-blue-200/90 bg-slate-100 shadow-md group">
            <Image
              src="/images/news_banner_bright.jpg"
              alt="Hạ Tầng Tri Thức Số Doanh Nghiệp"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-transform duration-1000 group-hover:scale-105"
            />

            {/* Subtle soft white gradient vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 via-transparent to-transparent pointer-events-none" />

            {/* Floating Gentle Glass Micro-Card 1 (Top Right) */}
            <div className="absolute top-4 right-4 hidden sm:block animate-scroll-active animate-float">
              <div className="rounded-2xl border border-white/80 bg-white/95 px-3.5 py-2 shadow-md backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-blue-100 text-blue-700">
                    <BookOpen className="h-3.5 w-3.5" />
                  </span>
                  <div>
                    <p className="text-[10px] font-bold text-slate-800">Bản Tin Doanh Nghiệp</p>
                    <p className="text-[9px] text-blue-600 font-semibold">Cập nhật liên tục 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Gentle Glass Micro-Card 2 (Bottom Left) */}
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
              <div className="rounded-xl border border-white/80 bg-white/95 px-3.5 py-1.5 shadow-md backdrop-blur-md flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-emerald-600" />
                <span className="text-[11px] font-semibold text-slate-800">
                  Microsoft &amp; HRM Certified Knowledge Hub
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
