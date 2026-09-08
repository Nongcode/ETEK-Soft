"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Layers,
  Maximize2,
  Lock,
  Sparkles,
  TrendingUp,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";
import ImageLightbox, { LightboxData } from "@/components/ui/ImageLightbox";

interface Project {
  id: string;
  category: "hrm" | "license" | "medical";
  title: string;
  sector: string;
  tagline: string;
  image: string;
  href: string;
  badge: string;
  appUrl: string;
  metrics: { value: string; label: string }[];
  tags: string[];
}

const projects: Project[] = [
  {
    id: "hrm-project",
    category: "hrm",
    title: "DỰ ÁN HỆ THỐNG QUẢN TRỊ NHÂN SỰ HRM 4.0",
    sector: "Lĩnh vực: Sản Xuất, Tập Đoàn Đa Chi Nhánh",
    tagline: "Số hóa quy trình chấm công 1,500+ nhân sự, tự động tính lương 3P và phân ca kíp sản xuất phức tạp.",
    image: "/legacy-media/products/dong-bo-cham-cong-tinh-luong.png",
    href: "/san-pham/giai-phap-quan-tri-nhan-su-toan-dien-hrm",
    badge: "HRM 4.0 ENTERPRISE",
    appUrl: "app.etek-soft.vn/hrm-enterprise",
    metrics: [
      { value: "1,500+", label: "Nhân Sự Quản Trị" },
      { value: "-85%", label: "Thời Gian Tính Lương" },
    ],
    tags: ["AI FaceID", "GPS Geofencing", "SSL 256-Bit"],
  },
  {
    id: "license-project",
    category: "license",
    title: "DỰ ÁN PHẦN MỀM BẢN QUYỀN MICROSOFT & SERVER",
    sector: "Lĩnh vực: Doanh Nghiệp Tài Chính, Bán Lẻ & FDI",
    tagline: "Cung cấp hơn 10,000+ license Microsoft 365, Windows 11 Pro và Windows Server 2025 đầy đủ CO/CQ chính hãng.",
    image: "/legacy-media/solutions/phan-mem-microsoft-365.jpg",
    href: "/san-pham/phan-mem-ban-quyen-microsoft",
    badge: "MICROSOFT GOLD CSP",
    appUrl: "admin.microsoft.com/license-portal",
    metrics: [
      { value: "10,000+", label: "License Kích Hoạt" },
      { value: "100%", label: "CO/CQ & VAT Hợp Lệ" },
    ],
    tags: ["Microsoft CSP", "Cloud Tier 1", "SLA 99.9%"],
  },
  {
    id: "sgis-project",
    category: "medical",
    title: "DỰ ÁN QUẢN LÝ BỆNH VIỆN VÀ PHÒNG KHÁM SGIS",
    sector: "Lĩnh vực: Y Tế, Bệnh Viện Đa Khoa & Chuỗi Phòng Khám",
    tagline: "Liên thông cổng giám định BHYT Quốc gia, hồ sơ bệnh án điện tử EMR và quản trị kho dược chuyên sâu.",
    image: "/legacy-media/articles/tong_the_bv.jpg",
    href: "/san-pham/giai-phap-quan-ly-tong-the-benh-vien",
    badge: "CHUẨN BỘ Y TẾ",
    appUrl: "med.sgis.vn/emr-gateway",
    metrics: [
      { value: "15+", label: "Bệnh Viện & Chuỗi PK" },
      { value: "100%", label: "Liên Thông Cổng BHYT" },
    ],
    tags: ["Bệnh Án Điện Tử EMR", "Cổng BHYT", "Kho Dược FIFO"],
  },
];

const filterTabs = [
  { id: "all", label: "Tất Cả Hệ Thống" },
  { id: "hrm", label: "Quản Trị Nhân Sự HRM" },
  { id: "license", label: "Bản Quyền Microsoft" },
  { id: "medical", label: "Y Tế & Bệnh Viện SGIS" },
];

export default function SolutionPortfolio() {
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <section id="solutions" className="relative overflow-hidden bg-slate-50/70 py-20 sm:py-28 border-y border-slate-200/90">
      
      {/* Background Tech Dot Matrix & Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none" />
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-500/8 blur-3xl pointer-events-none" />
      <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-cyan-400/8 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700 font-mono bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200/80">
              <Layers className="h-3.5 w-3.5" />
              <span>SHOWCASE GIẢI PHÁP THỰC TẾ</span>
            </div>
            <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight uppercase">
              NHỮNG HỆ THỐNG TIÊU BIỂU
            </h2>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl">
              Khám phá các giải pháp công nghệ đã được triển khai thành công tại 500+ doanh nghiệp, bệnh viện và tập đoàn sản xuất hàng đầu Việt Nam.
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0">
            <Link
              href="/san-pham"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 px-6 py-2.5 text-xs sm:text-sm font-bold text-white shadow-md shadow-blue-500/25 hover:shadow-lg hover:shadow-blue-500/35 hover:scale-105 transition-all duration-300"
            >
              <span>Xem Tất Cả Giải Pháp</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* Interactive Category Filter Tabs */}
        <div className="mt-8 flex flex-wrap items-center gap-2">
          {filterTabs.map((tab) => {
            const count = tab.id === "all" ? projects.length : projects.filter((p) => p.category === tab.id).length;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id)}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                  isActive
                    ? "bg-slate-900 text-white shadow-md scale-105"
                    : "bg-white text-slate-600 border border-slate-200 hover:border-blue-300 hover:text-blue-600 hover:bg-blue-50/50"
                }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-full font-extrabold ${
                    isActive ? "bg-white/20 text-white" : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* 3 High-End Agency Project Showcase Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((proj) => (
            <div
              key={proj.id}
              className="group flex flex-col rounded-[2.2rem] bg-white border border-slate-200/90 p-2.5 sm:p-3 shadow-sm transition-all duration-500 hover:shadow-[0_25px_60px_rgba(37,99,235,0.14)] hover:border-blue-300 hover:-translate-y-2 overflow-hidden"
            >
              {/* Application / Browser Window Simulation Frame */}
              <div className="rounded-[1.6rem] overflow-hidden border border-slate-800 bg-slate-950 flex flex-col">
                
                {/* Mac Style Browser Top Bar */}
                <div className="h-8 bg-slate-900 px-3.5 flex items-center justify-between border-b border-slate-800 select-none">
                  {/* macOS 3 Dots: Red, Yellow, Green */}
                  <div className="flex items-center gap-1.5">
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f56] border border-[#e0443e] block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd2e] border border-[#dea123] block" />
                    <span className="h-2.5 w-2.5 rounded-full bg-[#27c93f] border border-[#1aab29] block" />
                  </div>

                  {/* Center Mock URL Pill */}
                  <div className="flex items-center gap-1.5 rounded-md bg-slate-950/80 px-2.5 py-0.5 border border-white/10 text-[10px] font-mono text-slate-400 max-w-[180px] truncate">
                    <Lock className="h-2.5 w-2.5 text-emerald-400 shrink-0" />
                    <span className="truncate">{proj.appUrl}</span>
                  </div>

                  {/* Right Live Status Pill */}
                  <div className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                    </span>
                    <span className="text-[9px] font-mono font-bold text-emerald-400 uppercase hidden sm:inline">Live</span>
                  </div>
                </div>

                {/* Image Screenshot Showcase Container with Hover Pill Overlay */}
                <div
                  className="relative aspect-[16/10] w-full overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() =>
                    setLightboxData({
                      src: proj.image,
                      alt: proj.title,
                      title: proj.title,
                      badge: proj.badge,
                      description: proj.tagline,
                    })
                  }
                  title="Click để phóng to xem chi tiết"
                >
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />

                  {/* Floating Pill on Hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2 text-xs font-bold text-white shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                      <Maximize2 className="h-3.5 w-3.5" />
                      Phóng To Xem Chi Tiết
                    </span>
                  </div>

                  {/* Badge Top Left */}
                  <div className="absolute top-2.5 left-2.5">
                    <span className="font-mono text-[10px] font-bold text-cyan-300 bg-slate-950/85 px-2.5 py-1 rounded-full border border-cyan-400/30 backdrop-blur-md shadow-sm">
                      {proj.badge}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-[11px] font-bold text-blue-600 uppercase tracking-wider font-mono">
                    {proj.sector}
                  </p>
                  <h3 className="mt-2 text-base sm:text-lg font-extrabold text-slate-900 leading-snug tracking-tight group-hover:text-blue-600 transition-colors">
                    <Link href={proj.href}>{proj.title}</Link>
                  </h3>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {proj.tagline}
                  </p>

                  {/* Key Impact Metrics Dual Box */}
                  <div className="mt-4 grid grid-cols-2 gap-2 rounded-2xl bg-slate-50 p-2.5 border border-slate-200/80">
                    {proj.metrics.map((m, idx) => (
                      <div key={idx} className="text-center px-1">
                        <p className="text-base sm:text-lg font-black font-mono text-blue-600 tracking-tight">
                          {m.value}
                        </p>
                        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tight truncate mt-0.5">
                          {m.label}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack Pills */}
                  <div className="mt-3.5 flex flex-wrap items-center gap-1.5">
                    {proj.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="inline-flex items-center text-[10px] font-semibold text-slate-600 bg-slate-100/90 px-2 py-0.5 rounded-md border border-slate-200/60"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom Action & Sliding Underline Bar */}
                <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={proj.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors"
                  >
                    <span>Khám phá phân hệ</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-blue-600" />
                  </Link>
                  <span className="h-1.5 w-8 rounded-full bg-slate-200 group-hover:w-16 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-400 transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Lightbox Inspector */}
      <ImageLightbox data={lightboxData} onClose={() => setLightboxData(null)} />
    </section>
  );
}

