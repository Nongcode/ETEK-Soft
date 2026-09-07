"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  ShieldCheck,
  CheckCircle2,
  Fingerprint,
  Zap,
  Clock,
  Gift,
  Play,
  Flame,
  Tag,
  Laptop,
  Database,
  Building2,
  Stethoscope,
  Copy,
  Check,
  Phone,
  MessageSquare,
  ShoppingCart,
  Cloud,
  ChevronRight
} from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroProps {
  onOpenVideo?: () => void;
  onOpenVoucher?: () => void;
  onOpenAuth?: () => void;
}

const flagshipTabs = [
  {
    id: "hrm",
    title: "HRM 4.0 & AI FaceID",
    headline: "Chấm Công AI & Tự Động Lương 3P",
    sub: "Nhận diện khuôn mặt chống gian lận GPS, tính lương tự động trong 30 giây và đồng bộ dữ liệu bảo hiểm.",
    stat: "500+ Doanh nghiệp",
    statBadge: "Chính xác 99.8%",
    screenImage: "/legacy-media/articles/Quan_tri_nhan_su_4.0.webp",
    ctaPrimary: "Dùng Thử Miễn Phí 14 Ngày",
    ctaLink: "/tu-van",
  },
  {
    id: "m365",
    title: "Microsoft 365 & Copilot AI",
    headline: "Bản Quyền Chính Hãng Chiết Khấu 25%",
    sub: "Cấp License key trong 15 phút, xuất VAT CO/CQ đầy đủ từ Đối tác Ủy quyền Microsoft Partner.",
    stat: "15 Phút Kích Hoạt",
    statBadge: "100% License CO/CQ",
    screenImage: "/legacy-media/banners/1688642169.png",
    ctaPrimary: "Nhận Báo Giá Ưu Đãi",
    ctaLink: "/tu-van",
  },
  {
    id: "sgis",
    title: "Hệ Thống Y Tế SGIS",
    headline: "Chuyển Đổi Số Bệnh Viện & Phòng Khám",
    sub: "Liên thông cổng BHYT giám định tự động, bệnh án điện tử EMR, quản lý dược và viện phí thông minh.",
    stat: "50+ Bệnh Viện",
    statBadge: "Chuẩn Bộ Y Tế",
    screenImage: "/legacy-media/articles/tinh_nang_SGIS.jpg",
    ctaPrimary: "Khảo Sát Giải Pháp",
    ctaLink: "/tu-van",
  },
];

const categoryJumps = [
  { label: "HRM 4.0 Nhân Sự", icon: Fingerprint, href: "/san-pham/giai-phap-quan-tri-nhan-su-toan-dien-hrm" },
  { label: "Microsoft 365 & Office", icon: Laptop, href: "/san-pham" },
  { label: "Windows Server & SQL", icon: Database, href: "/san-pham" },
  { label: "Phần Mềm Bệnh Viện SGIS", icon: Stethoscope, href: "/san-pham" },
  { label: "Bảo Mật Endpoint", icon: ShieldCheck, href: "/san-pham" },
];

export default function Hero({ onOpenVideo, onOpenVoucher, onOpenAuth }: HeroProps) {
  const [activeTabIdx, setActiveTabIdx] = useState(0);
  const [isCopied, setIsCopied] = useState(false);

  // Auto rotate tabs every 7 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTabIdx((prev) => (prev + 1) % flagshipTabs.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const tab = flagshipTabs[activeTabIdx];

  const handleCopyVoucher = () => {
    navigator.clipboard.writeText("ETEK500K");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-white to-slate-50 pt-8 pb-16 lg:pt-12 lg:pb-24">
      
      {/* 1. MIKO TECH AESTHETIC: Soft glowing cyan & teal ambient aura orbs */}
      <div className="pointer-events-none absolute left-1/4 top-12 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-200/35 blur-[110px]" />
      <div className="pointer-events-none absolute right-1/4 top-20 h-96 w-96 translate-x-1/2 rounded-full bg-blue-200/30 blur-[120px]" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full bg-teal-100/20 blur-[140px]" />

      {/* 2. MIKO TECH SCROLL INDICATOR (Left side fixed-style vertical line) */}
      <div className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-30 flex-col items-center gap-3">
        <span className="font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-slate-400 [writing-mode:vertical-lr] rotate-180">
          Scroll
        </span>
        <div className="h-16 w-[1.5px] bg-gradient-to-b from-blue-600 via-cyan-400 to-transparent animate-pulse" />
      </div>

      {/* 3. MIKO TECH FLOATING QUICK ACTION PILLS (Right side) */}
      <div className="hidden lg:flex fixed right-5 bottom-20 z-30 flex-col gap-3">
        {/* Hotline */}
        <a
          href="tel:0969633163"
          aria-label="Hotline 24/7"
          className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-[#1bc1c1] text-white shadow-lg shadow-teal-500/30 hover:scale-110 hover:bg-teal-600 transition-all"
        >
          <Phone className="h-5 w-5" />
          <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
            0969 633 163 (Hotline)
          </span>
        </a>

        {/* Voucher Button */}
        <button
          type="button"
          onClick={onOpenVoucher}
          aria-label="Nhận Voucher 500K"
          className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-amber-500 text-white shadow-lg shadow-amber-500/30 hover:scale-110 hover:bg-amber-600 transition-all"
        >
          <Gift className="h-5 w-5" />
          <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
            Kho Voucher 500K
          </span>
        </button>

        {/* Consultation */}
        <Link
          href="/tu-van"
          aria-label="Tư vấn giải pháp"
          className="group relative flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:scale-110 hover:bg-blue-700 transition-all"
        >
          <MessageSquare className="h-5 w-5" />
          <span className="absolute right-full mr-3 whitespace-nowrap rounded-lg bg-slate-900 px-2.5 py-1 text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-md pointer-events-none">
            Nhận Tư Vấn Demo
          </span>
        </Link>
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Eyebrow Tag */}
        <div className="inline-flex items-center gap-2 rounded-full border border-teal-200/80 bg-white/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-[#1bc1c1] animate-ping" />
          <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#0f766e]">
            HỆ SINH THÁI SỐ & BẢN QUYỀN CHÍNH HÃNG 100%
          </span>
          <span className="rounded-full bg-teal-50 px-2 py-0.5 text-[10px] font-extrabold text-[#0d9488]">
            ETEK 2026
          </span>
        </div>

        {/* Grand Editorial Headline (Miko Tech Aesthetic: wide tracking, high-contrast, artistic) */}
        <h1 className="mx-auto mt-6 max-w-5xl text-3xl sm:text-5xl lg:text-[3.8rem] font-black tracking-[-0.02em] text-slate-900 leading-[1.18] sm:leading-[1.15]">
          GIẢI PHÁP PHẦN MỀM{" "}
          <span className="bg-gradient-to-r from-blue-700 via-teal-500 to-cyan-500 bg-clip-text text-transparent">
            DOANH NGHIỆP
          </span>
          <br className="hidden sm:inline" />
          <span className="relative inline-block mt-1 sm:mt-2 text-2xl sm:text-4xl lg:text-[3.2rem] font-extrabold text-slate-800 tracking-tight">
            QUẢN TRỊ HRM 4.0 — BẢN QUYỀN CHÍNH HÃNG
          </span>
        </h1>

        {/* Short, Concise, High-Impact Subtitle (NO TEXT WALL!) */}
        <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
          Đồng hành cùng hơn <strong className="text-slate-900 font-bold">500+ doanh nghiệp</strong>: Chấm công AI FaceID, tự động hóa lương 3P và phân phối bản quyền Microsoft, Windows Server CO/CQ tức thì trong 15 phút.
        </p>

        {/* Action Buttons Row */}
        <div className="mt-7 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href="/tu-van"
            className="group relative inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 via-teal-500 to-cyan-500 px-7 py-3.5 text-sm font-bold text-white shadow-[0_8px_25px_rgba(20,184,166,0.35)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_30px_rgba(20,184,166,0.5)] active:scale-95"
          >
            <span>Dùng Thử Miễn Phí 14 Ngày</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>

          {onOpenVideo && (
            <button
              type="button"
              onClick={onOpenVideo}
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/90 px-6 py-3.5 text-sm font-bold text-slate-800 shadow-sm backdrop-blur-md hover:bg-slate-50 hover:border-teal-400 hover:text-teal-700 transition-all active:scale-95"
            >
              <Play className="h-4 w-4 fill-teal-500 text-teal-500" />
              <span>Xem Video 20 Năm ETEK</span>
            </button>
          )}

          {/* Quick Voucher Promo Pill */}
          <button
            type="button"
            onClick={handleCopyVoucher}
            className="inline-flex items-center gap-2 rounded-full border border-amber-300 bg-amber-50/90 px-4 py-3 text-xs font-bold text-amber-900 shadow-xs hover:bg-amber-100 hover:scale-105 transition-all"
          >
            <Tag className="h-3.5 w-3.5 text-amber-600" />
            <span>Mã: <strong className="font-mono text-slate-900">ETEK500K</strong> (-500.000đ)</span>
            <span className="rounded-md bg-amber-500 px-1.5 py-0.5 text-[10px] text-white">
              {isCopied ? "Đã lấy!" : "Lấy mã"}
            </span>
          </button>
        </div>

        {/* 4. MIKO TECH HERO CENTERPIECE: REALISTIC 3D IMAC / WORKSTATION STAGE */}
        <div className="relative mx-auto mt-12 max-w-5xl">
          
          {/* Interactive Switcher Tabs Directly on Top of the Screen */}
          <div className="flex items-center justify-center gap-2 mb-4 overflow-x-auto pb-1">
            {flagshipTabs.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => setActiveTabIdx(idx)}
                className={cn(
                  "flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all whitespace-nowrap",
                  activeTabIdx === idx
                    ? "bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-105"
                    : "border border-slate-200 bg-white/80 text-slate-600 hover:bg-white hover:text-slate-900"
                )}
              >
                <span className={cn("h-2 w-2 rounded-full", activeTabIdx === idx ? "bg-teal-400" : "bg-slate-300")} />
                <span>{t.title}</span>
              </button>
            ))}
          </div>

          {/* Device Mockup Shell (iMac Aluminum & Glass Frame) */}
          <div className="relative mx-auto max-w-4xl rounded-3xl border-[10px] sm:border-[12px] border-slate-800 bg-slate-950 p-1 sm:p-2 shadow-[0_25px_70px_rgba(15,23,42,0.25)] ring-1 ring-white/20">
            
            {/* Screen Bezel Camera Dot */}
            <div className="absolute top-1.5 sm:top-2 left-1/2 -translate-x-1/2 h-1.5 w-1.5 rounded-full bg-slate-700" />

            {/* Display Viewport */}
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden rounded-2xl bg-white">
              
              {/* Product Screenshot Image */}
              <Image
                src={tab.screenImage}
                alt={tab.headline}
                fill
                priority
                className="object-cover object-top transition-all duration-700"
              />

              {/* Glass Overlay Card with Live Headline & Badge inside the screen */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-5 sm:left-5 sm:right-5 rounded-2xl border border-white/60 bg-white/90 p-3 sm:p-4 backdrop-blur-md shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-left">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-teal-600 px-2 py-0.5 font-mono text-[10px] font-bold text-white uppercase">
                      {tab.statBadge}
                    </span>
                    <span className="text-[11px] font-bold text-slate-500">
                      {tab.stat}
                    </span>
                  </div>
                  <h3 className="mt-1 text-sm sm:text-base font-bold text-slate-900">
                    {tab.headline}
                  </h3>
                  <p className="hidden sm:block text-xs text-slate-600 line-clamp-1 mt-0.5">
                    {tab.sub}
                  </p>
                </div>

                <Link
                  href={tab.ctaLink}
                  className="shrink-0 rounded-full bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:bg-blue-700 transition-colors"
                >
                  {tab.ctaPrimary} →
                </Link>
              </div>
            </div>

            {/* iMac Stand / Base */}
            <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 h-8 w-32 sm:w-40 bg-gradient-to-b from-slate-300 to-slate-400 rounded-b-xl shadow-md" />
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 h-2.5 w-48 sm:w-60 bg-slate-300 rounded-full shadow-lg" />
          </div>

          {/* Floating Circular Pill Badges (Miko Tech Inspired Floating Orbs) */}
          {/* Top Left: Cloud Partner */}
          <div className="hidden md:flex absolute -left-6 top-1/4 -translate-y-1/2 items-center gap-2.5 rounded-full border border-slate-200 bg-white/95 px-4 py-2 shadow-xl backdrop-blur-md animate-float">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-600">
              <Cloud className="h-4 w-4" />
            </div>
            <div className="text-left">
              <div className="text-[11px] font-bold text-slate-900">Microsoft Partner</div>
              <div className="text-[9px] text-emerald-600 font-bold">● License CO/CQ 100%</div>
            </div>
          </div>

          {/* Top Right: AI Attendance */}
          <div className="hidden md:flex absolute -right-6 top-1/3 -translate-y-1/2 items-center gap-2.5 rounded-full border border-slate-200 bg-white/95 px-4 py-2 shadow-xl backdrop-blur-md animate-float" style={{ animationDelay: "1.5s" }}>
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-teal-50 text-teal-600">
              <Fingerprint className="h-4 w-4" />
            </div>
            <div className="text-left">
              <div className="text-[11px] font-bold text-slate-900">AI FaceID Scanner</div>
              <div className="text-[9px] text-teal-600 font-bold">Chính xác 99.8%</div>
            </div>
          </div>

          {/* Bottom Right: Fast Key */}
          <div className="hidden md:flex absolute -right-4 bottom-8 items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3.5 py-1.5 shadow-xl backdrop-blur-md animate-float" style={{ animationDelay: "2.5s" }}>
            <Clock className="h-4 w-4 text-blue-600" />
            <span className="text-xs font-bold text-slate-800">Cấp License &lt; 15 Phút</span>
          </div>

        </div>

        {/* 5. COMMERCIAL QUICK CATEGORY JUMP STRIP (CellphoneS Style Fast Navigation) */}
        <div className="mt-20 pt-6 border-t border-slate-200/80">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mr-2">
              Danh Mục Mua Nhanh:
            </span>
            {categoryJumps.map((cat, i) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={i}
                  href={cat.href}
                  className="flex items-center gap-1.5 rounded-xl border border-slate-200/80 bg-white px-3.5 py-2 text-xs font-bold text-slate-700 hover:border-teal-400 hover:text-teal-700 hover:shadow-sm transition-all"
                >
                  <Icon className="h-3.5 w-3.5 text-teal-600" />
                  <span>{cat.label}</span>
                  <ChevronRight className="h-3 w-3 text-slate-400" />
                </Link>
              );
            })}
          </div>
        </div>

        {/* 6. BOTTOM 4 COMMERCIAL TRUST COMMITMENTS */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4 lg:gap-4">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3 shadow-xs hover:border-teal-300 transition-all">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900">100% License Chính Hãng</div>
              <div className="text-[11px] text-slate-500">CO/CQ & VAT Đầy Đủ</div>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3 shadow-xs hover:border-teal-300 transition-all">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-[#1bc1c1]">
              <Clock className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900">Kích Hoạt 15 Phút</div>
              <div className="text-[11px] text-slate-500">Giao License tức thì</div>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3 shadow-xs hover:border-teal-300 transition-all">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
              <Gift className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900">Voucher Sự Kiện</div>
              <div className="text-[11px] text-slate-500">Ưu đãi 500K cho đơn mới</div>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white px-4 py-3 shadow-xs hover:border-teal-300 transition-all">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-50 text-indigo-600">
              <Zap className="h-5 w-5" />
            </div>
            <div className="text-left">
              <div className="text-xs font-bold text-slate-900">Hỗ Trợ Kỹ Thuật 24/7</div>
              <div className="text-[11px] text-slate-500">Kỹ sư ETEK đồng hành</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
