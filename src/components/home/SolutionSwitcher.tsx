"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  ShieldCheck, 
  Building, 
  Check, 
  ArrowRight, 
  Layers, 
  Maximize2
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ImageLightbox, { LightboxData } from "@/components/ui/ImageLightbox";

interface SolutionPillar {
  id: string;
  title: string;
  badge: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  metrics: { label: string; value: string }[];
  primaryImage: string;
  secondaryImage: string;
  ctaHref: string;
  ctaText: string;
}

const solutions: SolutionPillar[] = [
  {
    id: "hrm",
    title: "Quản Trị Nhân Sự (HRM 4.0)",
    badge: "ĐỘT PHÁ CÔNG NGHỆ NHÂN SỰ",
    tagline: "Số hóa 100% quy trình từ chấm công, phân ca đến tính lương 3P tự động",
    description: "Giải pháp quản trị nhân sự toàn diện chuẩn hóa theo đặc thù sản xuất và kinh doanh tại Việt Nam. Xóa bỏ hoàn toàn sai sót tính công thủ công, đồng bộ dữ liệu thời gian thực từ mọi máy chấm công và định vị GPS di động.",
    icon: Users,
    features: [
      "Đồng bộ máy chấm công vân tay, khuôn mặt AI & định vị GPS di động",
      "Tính lương 3P linh hoạt theo công thức động, tự động khấu trừ thuế & bảo hiểm",
      "Quy trình phê duyệt đơn từ (nghỉ phép, công tác, tăng ca) tức thì qua App",
      "Đánh giá hiệu suất nhân sự, quản trị mục tiêu KPI / OKR đa cấp bậc"
    ],
    metrics: [
      { label: "Tiết kiệm thời gian tính lương", value: "85%" },
      { label: "Độ chính xác dữ liệu chấm công", value: "99.9%" },
      { label: "Doanh nghiệp đã tin dùng", value: "300+" }
    ],
    primaryImage: "/legacy-media/products/banner-1689128898.png",
    secondaryImage: "/legacy-media/products/dong-bo-cham-cong-tinh-luong.png",
    ctaHref: "/san-pham/giai-phap-quan-tri-nhan-su-toan-dien-hrm",
    ctaText: "Xem Chi Tiết Hệ Thống HRM"
  },
  {
    id: "license",
    title: "Phần Mềm Bản Quyền Chính Hãng",
    badge: "MICROSOFT GOLD PARTNER",
    tagline: "Cung cấp giấy phép bản quyền phần mềm doanh nghiệp đầy đủ chứng nhận CO/CQ",
    description: "Đại lý phân phối ủy quyền bản quyền chính hãng từ Microsoft, Autodesk, Kaspersky... Đảm bảo 100% tuân thủ pháp lý sở hữu trí tuệ, xuất hóa đơn VAT điện tử hợp lệ và hỗ trợ kích hoạt kỹ thuật chuyên sâu 24/7.",
    icon: ShieldCheck,
    features: [
      "Microsoft 365 Business, Office LTSC, Windows 11 Pro bản quyền vĩnh viễn & thuê bao",
      "Windows Server 2025, SQL Server, Remote Desktop Services (CAL) cho hạ tầng máy chủ",
      "Giải pháp bảo mật điểm cuối chống mã độc tống tiền (Kaspersky, Trend Micro)",
      "Bàn giao license điện tử (ESD/CSP) siêu tốc trong 15 phút, bảo hành trọn dòng đời"
    ],
    metrics: [
      { label: "License đã cấp phát", value: "10,000+" },
      { label: "Thời gian bàn giao key", value: "< 15p" },
      { label: "Tỷ lệ kích hoạt thành công", value: "100%" }
    ],
    primaryImage: "/legacy-media/solutions/phan-mem-microsoft-365.jpg",
    secondaryImage: "/legacy-media/solutions/banner-phap-ly-phan-mem.jpg",
    ctaHref: "/san-pham/phan-mem-ban-quyen-microsoft",
    ctaText: "Khám Phá Danh Mục Bản Quyền"
  },
  {
    id: "sgis",
    title: "Quản Lý Y Tế & Bệnh Viện (SGIS)",
    badge: "TIÊU CHUẨN BỘ Y TẾ",
    tagline: "Hệ thống thông tin quản lý tổng thể bệnh viện và phòng khám thông minh 4.0",
    description: "Nền tảng HIS/EMR chuyên sâu tích hợp liên thông dữ liệu khám chữa bệnh BHYT, quản trị kho dược, cận lâm sàng (LIS/PACS) và thanh toán viện phí thông minh, nâng cao chất lượng phục vụ người bệnh.",
    icon: Building,
    features: [
      "Quản lý tiếp đón bệnh nhân thông minh, tích hợp thẻ CCCD gắn chip & VNeID",
      "Tự động hóa giám định viện phí & liên thông cổng dữ liệu BHYT bộ y tế",
      "Quản trị kho dược, vật tư y tế, cảnh báo hạn dùng và tương tác thuốc",
      "Hồ sơ bệnh án điện tử (EMR) chuẩn hóa, bảo mật theo chuẩn Bộ Y tế"
    ],
    metrics: [
      { label: "Bệnh viện & PK triển khai", value: "60+" },
      { label: "Thời gian chờ khám", value: "-45%" },
      { label: "Độ chuẩn xác quyết toán BHYT", value: "100%" }
    ],
    primaryImage: "/legacy-media/articles/tong_the_bv.jpg",
    secondaryImage: "/legacy-media/articles/tinh_nang_SGIS.jpg",
    ctaHref: "/san-pham/giai-phap-quan-ly-tong-the-benh-vien",
    ctaText: "Tìm Hiểu Giải Pháp SGIS"
  }
];

export default function SolutionSwitcher() {
  const [activeId, setActiveId] = useState("hrm");
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);
  const current = solutions.find((s) => s.id === activeId) || solutions[0];

  return (
    <section id="solutions" className="relative overflow-hidden bg-light-tech py-16 sm:py-24 border-t border-slate-200/80">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm">
              <Layers className="h-3.5 w-3.5 text-blue-600" />
              HỆ SINH THÁI GIẢI PHÁP
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Ba Trụ Cột Công Nghệ{" "}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Chuyển Đổi Số
              </span>
            </h2>
            <p className="mt-3.5 text-base text-slate-600 leading-relaxed font-medium">
              Chọn nhóm giải pháp để khám phá hệ sinh thái phần mềm được thiết kế tối ưu hóa cho từng quy mô vận hành.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Switcher */}
        <ScrollReveal direction="up" delay={120}>
          <div className="mt-9 flex justify-center">
            <div className="inline-flex p-1.5 rounded-full border border-slate-200/90 bg-white/90 gap-1.5 shadow-sm">
              {solutions.map((item) => {
                const Icon = item.icon;
                const isActive = item.id === activeId;
                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveId(item.id)}
                    className={`relative flex items-center gap-2 rounded-full px-4 sm:px-6 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 text-white shadow-md"
                        : "text-slate-600 hover:text-slate-900 hover:bg-slate-100"
                    }`}
                  >
                    <Icon className="h-4 w-4 shrink-0" />
                    <span className="whitespace-nowrap">{item.title}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        {/* Solution Canvas Card */}
        <ScrollReveal direction="scale" delay={200}>
          <div className="mt-9 rounded-[2rem] border border-slate-200/90 bg-white/95 p-6 sm:p-10 lg:p-12 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
              
              {/* Left Content (6 Cols) */}
              <div className="lg:col-span-6 space-y-5">
                <span className="inline-block rounded-full bg-blue-100/80 px-3.5 py-1 font-mono text-xs font-bold text-blue-700 border border-blue-200">
                  {current.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                  {current.tagline}
                </h3>

                <p className="text-base text-slate-600 leading-relaxed font-normal">
                  {current.description}
                </p>

                {/* Feature Checklist */}
                <div className="space-y-3 pt-1">
                  {current.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 mt-0.5">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      <span className="text-sm sm:text-[15px] text-slate-800 font-medium leading-snug">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-4 border-t border-slate-100 pt-5">
                  {current.metrics.map((m, idx) => (
                    <div key={idx} className="space-y-1">
                      <p className="text-xl sm:text-2xl font-extrabold text-blue-700 font-mono">
                        {m.value}
                      </p>
                      <p className="text-xs text-slate-500 font-medium">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <Link
                    href={current.ctaHref}
                    className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-xl active:scale-95"
                  >
                    <span>{current.ctaText}</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              {/* Right Showcase Media (6 Cols) */}
              <div className="lg:col-span-6 relative">
                <div
                  onClick={() =>
                    setLightboxData({
                      src: current.primaryImage,
                      alt: current.title,
                      title: current.title,
                      badge: current.badge,
                      description: current.description,
                    })
                  }
                  className="relative mx-auto rounded-2xl border border-slate-200 bg-white p-3 shadow-xl overflow-hidden group cursor-zoom-in"
                  title="Click để phóng to ảnh giải pháp"
                >
                  <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl bg-slate-100">
                    <Image
                      src={current.primaryImage}
                      alt={current.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-blue-700 shadow-md">
                        <Maximize2 className="h-3 w-3" />
                        Phóng to chi tiết
                      </span>
                    </div>
                  </div>

                  {/* Micro-Card */}
                  <div
                    onClick={(e) => {
                      e.stopPropagation();
                      setLightboxData({
                        src: current.secondaryImage,
                        alt: `Chi tiết phân hệ ${current.title}`,
                        title: `Chi Tiết Cấu Hình: ${current.title}`,
                        badge: "PHÂN HỆ VẬN HÀNH",
                        description: `Giao diện cấu hình và vận hành thực tế phân hệ ${current.title}. Hỗ trợ đồng bộ đa nền tảng và phân quyền linh hoạt theo phòng ban.`,
                      });
                    }}
                    className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-4 max-w-[280px] rounded-xl border border-slate-200 bg-white/95 p-3 shadow-xl cursor-pointer hover:border-blue-400 hover:scale-105 transition-all"
                    title="Click để phóng to chi tiết cấu hình"
                  >
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 shrink-0 rounded-lg overflow-hidden border border-slate-100 bg-slate-50">
                        <Image
                          src={current.secondaryImage}
                          alt="Chi tiết giải pháp"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">Xác thực hệ thống</p>
                        <p className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 font-mono">
                          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                          Đã sẵn sàng triển khai
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </ScrollReveal>

      </div>

      {/* Image Lightbox */}
      <ImageLightbox data={lightboxData} onClose={() => setLightboxData(null)} />
    </section>
  );
}
