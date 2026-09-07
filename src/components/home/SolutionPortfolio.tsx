"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Layers, Maximize2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageLightbox, { LightboxData } from "@/components/ui/ImageLightbox";

const projects = [
  {
    id: "hrm-project",
    title: "DỰ ÁN HỆ THỐNG QUẢN TRỊ NHÂN SỰ HRM 4.0",
    sector: "Lĩnh vực: Sản Xuất, Tập Đoàn Đa Chi Nhánh",
    tagline: "Số hóa quy trình chấm công 1,500+ nhân sự, tự động tính lương 3P và phân ca kíp phức tạp.",
    image: "/legacy-media/products/dong-bo-cham-cong-tinh-luong.png",
    href: "/san-pham/giai-phap-quan-tri-nhan-su-toan-dien-hrm",
    badge: "HRM 4.0 ENTERPRISE",
  },
  {
    id: "license-project",
    title: "DỰ ÁN PHẦN MỀM BẢN QUYỀN MICROSOFT & SERVER",
    sector: "Lĩnh vực: Doanh Nghiệp Tài Chính, Bán Lẻ & FDI",
    tagline: "Cung cấp hơn 10,000+ license Microsoft 365, Windows 11 Pro và Windows Server 2025 đầy đủ CO/CQ.",
    image: "/legacy-media/solutions/phan-mem-microsoft-365.jpg",
    href: "/san-pham/phan-mem-ban-quyen-microsoft",
    badge: "MICROSOFT GOLD CSP",
  },
  {
    id: "sgis-project",
    title: "DỰ ÁN QUẢN LÝ BỆNH VIỆN VÀ PHÒNG KHÁM SGIS",
    sector: "Lĩnh vực: Y Tế, Bệnh Viện Đa Khoa & Chuỗi Phòng Khám",
    tagline: "Liên thông cổng giám định BHYT Quốc gia, hồ sơ bệnh án điện tử EMR và quản trị kho dược chuyên sâu.",
    image: "/legacy-media/articles/tong_the_bv.jpg",
    href: "/san-pham/giai-phap-quan-ly-tong-the-benh-vien",
    badge: "CHUẨN BỘ Y TẾ",
  },
];

export default function SolutionPortfolio() {
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);

  return (
    <section id="solutions" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header with Editorial Slider Controls — Mikotech Style */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 pb-10 border-b border-slate-200" data-reveal>
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-600 font-mono">
              <Layers className="h-3.5 w-3.5" />
              SHOWCASE GIẢI PHÁP
            </div>
            <h2 className="mt-3 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight uppercase">
              NHỮNG HỆ THỐNG TIÊU BIỂU
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/san-pham"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:scale-105 transition-all"
            >
              <span>Xem Tất Cả Giải Pháp</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>

        {/* 3 High-End Agency Project Showcase Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" data-reveal-group data-reveal-step="130">
          {projects.map((proj, idx) => (
            <div
              key={proj.id}
              data-reveal
              className="group flex flex-col rounded-[2.2rem] bg-white border border-slate-200/90 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 overflow-hidden"
            >
              {/* Image Showcase Container with Hover Pill Overlay */}
              <div
                className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 cursor-pointer"
                onClick={() =>
                  setLightboxData({
                    src: proj.image,
                    alt: proj.title,
                    title: proj.title,
                    badge: proj.badge,
                    description: proj.tagline,
                  })
                }
                title="Click để xem phóng to chi tiết"
              >
                <Image
                  src={proj.image}
                  alt={proj.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />

                {/* Mikotech Signature Floating Pill on Hover */}
                <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                  <span className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-blue-600 px-5 py-2 text-xs font-bold text-white shadow-xl transform scale-90 group-hover:scale-100 transition-transform">
                    <Maximize2 className="h-3.5 w-3.5" />
                    Xem Chi Tiết
                  </span>
                </div>

                {/* Category Badge Top Left */}
                <div className="absolute top-3 left-3">
                  <span className="font-mono text-[10px] font-bold text-cyan-300 bg-slate-950/80 px-2.5 py-1 rounded-full border border-cyan-400/30 backdrop-blur-md">
                    {proj.badge}
                  </span>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
                <div>
                  <p className="text-xs font-bold text-cyan-600 uppercase tracking-wider font-mono">
                    {proj.sector}
                  </p>
                  <h3 className="mt-2 text-lg sm:text-xl font-bold text-slate-900 leading-snug tracking-tight group-hover:text-blue-600 transition-colors">
                    <Link href={proj.href}>{proj.title}</Link>
                  </h3>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {proj.tagline}
                  </p>
                </div>

                {/* Bottom Underline & Link Arrow (Mikotech Style) */}
                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link
                    href={proj.href}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors"
                  >
                    <span>Khám phá phân hệ</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                  <span className="h-1.5 w-8 rounded-full bg-slate-200 group-hover:w-14 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-cyan-400 transition-all duration-300" />
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
