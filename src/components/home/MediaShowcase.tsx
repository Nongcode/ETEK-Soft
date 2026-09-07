"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  Users,
  Award,
  ShieldCheck,
  Check,
  Sparkles,
  ArrowRight,
  Fingerprint,
  Building,
  Server,
  Zap,
  Maximize2,
  Layers,
  Clock,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import ImageLightbox, { LightboxData } from "@/components/ui/ImageLightbox";

interface CapabilityModule {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  desc: string;
  icon: React.ElementType;
  image: string;
  features: string[];
  metrics: string;
  link: string;
}

const capabilities: CapabilityModule[] = [
  {
    id: "hrm",
    title: "Phần Mềm Quản Trị Nhân Sự HRM 4.0",
    subtitle: "Tự Động Hóa 100% Chấm Công AI & Lương 3P",
    badge: "GIẢI PHÁP ĐỘT PHÁ",
    desc: "Đồng bộ tức thời dữ liệu từ máy chấm công vân tay, khuôn mặt AI và định vị GPS. Tự động tính lương 3P phức tạp, khấu trừ thuế TNCN, bảo hiểm và gửi phiếu lương bảo mật qua Zalo/App.",
    icon: Fingerprint,
    image: "/legacy-media/products/dong-bo-cham-cong-tinh-luong.png",
    features: [
      "Nhận diện khuôn mặt AI FaceID chống gian lận vị trí",
      "Cấu hình công thức lương 3P động (P1 Vị trí, P2 Năng lực, P3 Hiệu suất)",
      "Phê duyệt đơn từ trực tuyến, quản lý phép năm & tăng ca linh hoạt",
    ],
    metrics: "Tiết kiệm 85% thời gian tính lương hàng tháng",
    link: "/san-pham/giai-phap-quan-tri-nhan-su-toan-dien-hrm",
  },
  {
    id: "license",
    title: "Phân Phối Bản Quyền Microsoft Chính Hãng",
    subtitle: "Chứng Nhận Xuất Xứ CO/CQ & Hóa Đơn VAT Điện Tử",
    badge: "MICROSOFT GOLD PARTNER",
    desc: "Cung cấp giấy phép Microsoft 365, Office LTSC, Windows 11 Pro và Windows Server 2025. Bàn giao key bản quyền điện tử nhanh dưới 15 phút với chính sách bảo hành trọn dòng đời.",
    icon: ShieldCheck,
    image: "/legacy-media/solutions/phan-mem-microsoft-365.jpg",
    features: [
      "Microsoft 365 Business Standard & Enterprise E3/E5 bản quyền",
      "Windows 11 Pro 64-bit ESD & USB Box chính hãng",
      "Windows Server 2025 Standard 16-Core & SQL Server Enterprise",
    ],
    metrics: "Bàn giao kích hoạt 100% hợp lệ trong 15 phút",
    link: "/san-pham",
  },
  {
    id: "hospital",
    title: "Giải Pháp Quản Lý Bệnh Viện SGIS",
    subtitle: "Liên Thông Cổng BHYT Bộ Y Tế & Bệnh Án Điện Tử",
    badge: "TIÊU CHUẨN Y TẾ 4.0",
    desc: "Hệ thống thông tin bệnh viện thông minh (HIS/EMR) tích hợp đón tiếp bệnh nhân bằng thẻ CCCD gắn chip, giám định viện phí tự động và quản lý kho dược toàn diện.",
    icon: Building,
    image: "/legacy-media/articles/tong_the_bv.jpg",
    features: [
      "Liên thông cổng giám định bảo hiểm y tế tự động 100%",
      "Bệnh án điện tử EMR và quản trị kho thuốc, vật tư y tế chuẩn hóa",
      "Thanh toán viện phí không tiền mặt và kết nối viện phí nội trú",
    ],
    metrics: "Đã triển khai thành công tại hơn 60+ bệnh viện và phòng khám",
    link: "/san-pham/giai-phap-quan-ly-tong-the-benh-vien",
  },
  {
    id: "cloud",
    title: "Hạ Tầng Cloud & Bảo Mật Doanh Nghiệp",
    subtitle: "An Ninh Điểm Cuối & Trung Tâm Dữ Liệu SLA 99.9%",
    badge: "BẢO MẬT DOANH NGHIỆP",
    desc: "Giải pháp an toàn thông tin toàn diện bảo vệ chống mã độc tống tiền ransomware (Kaspersky, Trend Micro), mã hóa đường truyền 256-bit và sao lưu dữ liệu tự động.",
    icon: Server,
    image: "/legacy-media/solutions/banner-phap-ly-phan-mem.jpg",
    features: [
      "Mã hóa đường truyền SSL/TLS 256-bit theo tiêu chuẩn ISO 27001",
      "Tường lửa bảo vệ dữ liệu chống tấn công mạng và rò rỉ thông tin",
      "Hệ thống giám sát 24/7 và cam kết SLA phản hồi dưới 15 phút",
    ],
    metrics: "Đảm bảo thời gian hoạt động Uptime cam kết 99.9%",
    link: "/san-pham",
  },
];

export default function MediaShowcase() {
  const [activeTab, setActiveTab] = useState<string>("hrm");
  const [lightboxData, setLightboxData] = useState<LightboxData | null>(null);

  const currentModule =
    capabilities.find((c) => c.id === activeTab) || capabilities[0];

  return (
    <section className="relative overflow-hidden bg-light-tech py-16 sm:py-24 border-t border-slate-200/80">
      {/* Dynamic light glows */}
      <div className="glow-orb-blue -top-20 left-1/4" />
      <div className="glow-orb-cyan bottom-10 right-1/4" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm">
              <Sparkles className="h-3.5 w-3.5 text-blue-600" />
              HÀNH TRÌNH 20 NĂM PHÁT TRIỂN & ĐỔI MỚI
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Hệ Sinh Thái Công Nghệ{" "}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Doanh Nghiệp Toàn Diện
              </span>
            </h2>
            <p className="mt-3.5 text-base text-slate-600 leading-relaxed font-medium">
              Khám phá 4 phân hệ giải pháp phần mềm và bản quyền cốt lõi được xây dựng qua hai thập kỷ phụng sự hơn 500+ doanh nghiệp hàng đầu Việt Nam.
            </p>
          </div>
        </ScrollReveal>

        {/* 4 Interactive Capability Tabs */}
        <ScrollReveal direction="up" delay={120}>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 max-w-5xl mx-auto mb-8">
            {capabilities.map((item) => {
              const Icon = item.icon;
              const isActive = item.id === activeTab;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveTab(item.id)}
                  className={`flex flex-col items-start p-4 rounded-2xl border text-left transition-all duration-300 ${
                    isActive
                      ? "border-blue-500 bg-white shadow-lg ring-2 ring-blue-500/20 -translate-y-1"
                      : "border-slate-200/90 bg-white/75 hover:border-blue-300 hover:bg-white"
                  }`}
                >
                  <span
                    className={`flex h-10 w-10 items-center justify-center rounded-xl mb-3 transition-colors ${
                      isActive
                        ? "bg-gradient-to-tr from-blue-600 to-cyan-500 text-white shadow-md"
                        : "bg-blue-50 text-blue-600"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <p className="text-xs font-bold text-slate-900 line-clamp-1">
                    {item.title}
                  </p>
                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                    {item.subtitle}
                  </p>
                </button>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Active Capability Showcase Console */}
        <ScrollReveal direction="scale" delay={200}>
          <div className="relative mx-auto max-w-5xl rounded-[2rem] border border-slate-200/90 bg-white/95 p-6 sm:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left description (7 cols) */}
              <div className="lg:col-span-7 space-y-4 text-left">
                <span className="inline-block rounded-full bg-blue-100/80 px-3.5 py-1 font-mono text-xs font-bold text-blue-700 border border-blue-200">
                  {currentModule.badge}
                </span>

                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-tight">
                  {currentModule.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                  {currentModule.desc}
                </p>

                {/* Features */}
                <div className="space-y-2.5 pt-2">
                  {currentModule.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5">
                      <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 shrink-0">
                        <Check className="h-3 w-3 stroke-[3]" />
                      </span>
                      <span className="text-xs sm:text-sm font-semibold text-slate-800">
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Metric pill */}
                <div className="rounded-xl border border-blue-200/80 bg-blue-50/70 p-3 flex items-center gap-2.5 text-xs font-bold text-blue-900">
                  <Zap className="h-4 w-4 text-blue-600 shrink-0" />
                  <span>{currentModule.metrics}</span>
                </div>

                <div className="pt-2">
                  <Link
                    href={currentModule.link}
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-cyan-600 px-6 py-3 text-xs sm:text-sm font-bold text-white shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
                  >
                    <span>Xem Chi Tiết Giải Pháp</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>

              {/* Right preview with click-to-zoom (5 cols) */}
              <div className="lg:col-span-5">
                <div
                  onClick={() =>
                    setLightboxData({
                      src: currentModule.image,
                      alt: currentModule.title,
                      title: currentModule.title,
                      badge: currentModule.badge,
                      description: currentModule.desc,
                    })
                  }
                  className="group/img relative overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50 p-2 cursor-zoom-in shadow-md hover:border-blue-400 transition-all"
                  title="Click để phóng to chi tiết"
                >
                  <div className="relative h-60 sm:h-72 w-full overflow-hidden rounded-xl bg-white flex items-center justify-center">
                    <Image
                      src={currentModule.image}
                      alt={currentModule.title}
                      fill
                      className="object-contain p-2 transition-transform duration-500 group-hover/img:scale-105"
                    />
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center bg-slate-950/20 opacity-0 group-hover/img:opacity-100 transition-opacity backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-[11px] font-bold text-blue-700 shadow-md">
                      <Maximize2 className="h-3 w-3" />
                      Phóng to xem chi tiết
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* 4 Landmark Milestone Statistics WITH REAL COUNT-UP ANIMATION FROM 0 */}
        <ScrollReveal direction="up" delay={300}>
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 max-w-5xl mx-auto">
            {/* Card 1: 20+ */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white/90 p-5 sm:p-6 text-center shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl text-blue-600 bg-blue-100 mb-3 group-hover:scale-110 transition-transform">
                <Award className="h-5 w-5" />
              </span>
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-700 font-mono tracking-tight">
                <AnimatedCounter target={20} suffix="+" duration={2000} />
              </p>
              <p className="mt-2 text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                Năm Vững Bước Phát Triển
              </p>
              <p className="text-[11px] text-slate-500 mt-1 font-medium">
                Thành lập và khẳng định vị thế từ 2004
              </p>
            </div>

            {/* Card 2: 500+ */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white/90 p-5 sm:p-6 text-center shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl text-cyan-600 bg-cyan-100 mb-3 group-hover:scale-110 transition-transform">
                <Users className="h-5 w-5" />
              </span>
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-700 font-mono tracking-tight">
                <AnimatedCounter target={500} suffix="+" duration={2200} />
              </p>
              <p className="mt-2 text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                Doanh Nghiệp Triển Khai
              </p>
              <p className="text-[11px] text-slate-500 mt-1 font-medium">
                Tin dùng hệ sinh thái ETEK toàn quốc
              </p>
            </div>

            {/* Card 3: 99.9% */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white/90 p-5 sm:p-6 text-center shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl text-emerald-600 bg-emerald-100 mb-3 group-hover:scale-110 transition-transform">
                <ShieldCheck className="h-5 w-5" />
              </span>
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-700 font-mono tracking-tight">
                <AnimatedCounter target={99.9} decimals={1} suffix="%" duration={2000} />
              </p>
              <p className="mt-2 text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                Bản Quyền Hợp Lệ 100%
              </p>
              <p className="text-[11px] text-slate-500 mt-1 font-medium">
                CO/CQ chính hãng & VAT đầy đủ
              </p>
            </div>

            {/* Card 4: 24/7 */}
            <div className="group rounded-3xl border border-slate-200/90 bg-white/90 p-5 sm:p-6 text-center shadow-[0_4px_20px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1">
              <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-2xl text-violet-600 bg-violet-100 mb-3 group-hover:scale-110 transition-transform">
                <Check className="h-5 w-5" />
              </span>
              <p className="text-3xl sm:text-4xl font-extrabold text-blue-700 font-mono tracking-tight">
                <AnimatedCounter target={24} isSpecialTime={true} duration={1800} />
              </p>
              <p className="mt-2 text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                Hỗ Trợ Kỹ Thuật Chuyên Sâu
              </p>
              <p className="text-[11px] text-slate-500 mt-1 font-medium">
                Kỹ sư chính hãng phản hồi dưới 15 phút
              </p>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Image Lightbox */}
      <ImageLightbox data={lightboxData} onClose={() => setLightboxData(null)} />
    </section>
  );
}
