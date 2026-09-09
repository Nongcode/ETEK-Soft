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
  category: "hrm" | "office" | "finance";
  title: string;
  sector: string;
  tagline: string;
  image: string;
  href: string;
  badge: string;
  appUrl: string;
  metrics: { value: string; label: string }[];
  tags: string[];
  pillars?: { title: string; desc: string }[];
}

const projects: Project[] = [
  {
    id: "hrm-project",
    category: "hrm",
    title: "DỰ ÁN HỆ THỐNG QUẢN TRỊ NHÂN SỰ HRM 4.0",
    sector: "Lĩnh vực: Sản Xuất, Tập Đoàn Đa Chi Nhánh & Doanh Nghiệp",
    tagline: "Hệ sinh thái HRM 4.0 đa nền tảng (Web & Mobile App): Quản lý 1,532+ nhân sự, chấm công vân tay & GPS đạt 98% đúng giờ, tự động tính lương 3P và đồng bộ BHXH.",
    image: "/images/hrm.png",
    href: "/san-pham/giai-phap-quan-tri-nhan-su-toan-dien-hrm",
    badge: "HRM 4.0 ENTERPRISE",
    appUrl: "app.etek-soft.vn/hrm-4.0",
    metrics: [
      { value: "1,532+", label: "Nhân Sự Quản Trị" },
      { value: "98%", label: "Chấm Công Đúng Giờ" },
    ],
    tags: ["Quản Lý Nhân Sự", "Chấm Công GPS & Vân Tay", "Tính Lương 3P", "Bảo Hiểm Xã Hội", "Báo Cáo Đa Chiều"],
    pillars: [
      { title: "Quản lý nhân sự", desc: "Tuyển dụng • Hồ sơ • Hợp đồng" },
      { title: "Chấm công thông minh", desc: "Vân tay • GPS • Tích hợp thiết bị" },
      { title: "Tính lương tự động 3P", desc: "Tự động • Chính xác • Linh hoạt" },
      { title: "Bảo hiểm xã hội", desc: "Đồng bộ • Nhanh chóng • Minh bạch" },
      { title: "Báo cáo & Thống kê", desc: "Trực quan • Chi tiết • Đa chiều" },
    ],
  },
  {
    id: "office-project",
    category: "office",
    title: "DỰ ÁN HỆ THỐNG VĂN PHÒNG SỐ TOÀN DIỆN",
    sector: "Lĩnh vực: Doanh Nghiệp, Tập Đoàn & Hành Chính Công",
    tagline: "Số hóa quy trình vận hành không giấy tờ: Quản lý công việc, hồ sơ ISO, pháp lý, tài sản, quyết định và điều hành cuộc họp trực tuyến thông minh.",
    image: "/images/van-phong-so.png",
    href: "/san-pham",
    badge: "VĂN PHÒNG SỐ 4.0",
    appUrl: "office.etek-soft.vn/portal",
    metrics: [
      { value: "100%", label: "Không Giấy Tờ (Paperless)" },
      { value: "-70%", label: "Thời Gian Phê Duyệt" },
    ],
    tags: ["Quản Lý Công Việc", "Hồ Sơ ISO", "Vận Hành Nghiệp Vụ", "Quản Lý Meeting", "Tài Sản & Pháp Lý"],
    pillars: [
      { title: "Hoạt động pháp lý & Quyết định", desc: "Soạn thảo, trình ký & Ký số điện tử" },
      { title: "Quản lý công việc & Nghiệp vụ", desc: "Giao việc, nhắc hạn & Tự động luân chuyển" },
      { title: "Hồ sơ ISO & Tài liệu số", desc: "Lưu trữ, phân quyền & Chuẩn hóa quy trình" },
      { title: "Quản lý Meeting & Phòng họp", desc: "Lịch họp thông minh, tài liệu số & Biên bản" },
      { title: "Quản lý tài sản & Đào tạo", desc: "Kiểm kê, cấp phát thiết bị & E-learning" },
    ],
  },
  {
    id: "finance-project",
    category: "finance",
    title: "DỰ ÁN HỆ THỐNG QUẢN LÝ KINH DOANH - TÀI CHÍNH",
    sector: "Lĩnh vực: Doanh Nghiệp Thương Mại, Phân Phối & Sản Xuất",
    tagline: "Chuẩn hóa quy trình kinh doanh và tài chính doanh nghiệp: Quản trị khách hàng tiềm năng CRM, CSKH trước bán, tự động hóa đơn hàng và kiểm soát dòng tiền chuyên sâu.",
    image: "/images/kd-tc.png",
    href: "/san-pham",
    badge: "KINH DOANH & TÀI CHÍNH 4.0",
    appUrl: "finance.etek-soft.vn/crm-portal",
    metrics: [
      { value: "+45%", label: "Tăng Trưởng Doanh Số" },
      { value: "100%", label: "Kiểm Soát Dòng Tiền & Công Nợ" },
    ],
    tags: ["CRM Khách Hàng", "Quản Lý Bán Hàng", "CSKH Trước Bán", "Quản Trị Tài Chính", "Tra Cứu & Báo Cáo"],
    pillars: [
      { title: "Tra cứu - thông báo", desc: "Tra cứu dữ liệu, chính sách & Thông báo tự động" },
      { title: "Quản lý CSKH trước khi bán", desc: "Phễu khách hàng tiềm năng & Lịch tương tác" },
      { title: "Quản lý bán hàng", desc: "Báo giá, hợp đồng & Theo dõi đơn hàng" },
      { title: "Hệ thống CRM", desc: "Dữ liệu 360° khách hàng & Phân hạng tự động" },
      { title: "Quản lý tài chính", desc: "Doanh thu, công nợ, chi phí & Dòng tiền" },
    ],
  },
];

const filterTabs = [
  { id: "all", label: "Tất Cả Hệ Thống" },
  { id: "hrm", label: "Quản Trị Nhân Sự HRM" },
  { id: "office", label: "Hệ Thống Văn Phòng Số" },
  { id: "finance", label: "Kinh Doanh & Tài Chính" },
];

export default function SolutionPortfolio() {
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);
  const [activeTab, setActiveTab] = useState<string>("all");

  const filteredProjects = activeTab === "all"
    ? projects
    : projects.filter((p) => p.category === activeTab);

  return (
    <section id="solutions" className="relative overflow-hidden bg-slate-100 py-20 sm:py-28 border-y border-slate-200">
      
      {/* Background Tech Dot Matrix & Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none" />

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
                suppressHydrationWarning
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
                  className="relative aspect-[3/2] w-full overflow-hidden bg-slate-900 cursor-pointer"
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
                    unoptimized
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-100 contrast-[1.06] brightness-[1.03] saturate-[1.04] [image-rendering:-webkit-optimize-contrast]"
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

                  {/* 5 Phân hệ tính năng cốt lõi từ Mockup HRM 4.0 */}
                  {proj.pillars && (
                    <div className="mt-3.5 rounded-2xl bg-blue-50/60 border border-blue-100/80 p-3">
                      <p className="text-[10px] font-bold uppercase tracking-wider text-blue-800 flex items-center gap-1.5 mb-2">
                        <Sparkles className="h-3 w-3 text-blue-600" />
                        <span>5 Phân Hệ Nghiệp Vụ Cốt Lõi</span>
                      </p>
                      <div className="space-y-1.5">
                        {proj.pillars.map((p, idx) => (
                          <div key={idx} className="flex items-center justify-between text-[11px] py-0.5 border-b border-blue-100/60 last:border-0">
                            <span className="font-bold text-slate-800 flex items-center gap-1.5">
                              <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600 shrink-0" />
                              {p.title}
                            </span>
                            <span className="text-[10.5px] text-slate-500 font-medium truncate max-w-[180px] text-right">
                              {p.desc}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

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

