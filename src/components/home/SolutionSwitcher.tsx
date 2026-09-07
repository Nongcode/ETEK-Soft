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
  Sparkles, 
  Layers, 
  Activity,
  Award,
  Zap
} from "lucide-react";

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
    badge: "MICROSOFT & ENTERPRISE LICENSING",
    tagline: "Cung cấp License bản quyền đầy đủ CO/CQ, kích hoạt an toàn tuyệt đối",
    description: "ETEK-Soft là đối tác cung ứng giải pháp phần mềm bản quyền hàng đầu cho khối doanh nghiệp, trường học và tổ chức chính phủ. Đầy đủ hóa đơn VAT, chứng nhận xuất xứ rõ ràng và cam kết tuân thủ pháp lý bản quyền.",
    icon: ShieldCheck,
    features: [
      "Microsoft 365 Business Basic, Standard, Premium & Family/Personal",
      "Hệ điều hành Windows 11 Pro 64-bit ESD & FPP chính hãng hộp USB",
      "Hạ tầng máy chủ Windows Server 2025 Standard & Datacenter 16-Core",
      "Bộ công cụ văn phòng chuyên nghiệp Microsoft Office 2024, Visio & Project"
    ],
    metrics: [
      { label: "Kích hoạt hợp lệ", value: "100%" },
      { label: "Thời gian bàn giao license", value: "<15 Phút" },
      { label: "Hỗ trợ cài đặt kỹ thuật", value: "24/7 Miễn phí" }
    ],
    primaryImage: "/legacy-media/solutions/EP2-06630.webp",
    secondaryImage: "/legacy-media/solutions/EP2-25187.webp",
    ctaHref: "/san-pham",
    ctaText: "Duyệt Danh Mục License"
  },
  {
    id: "hospital",
    title: "Quản Lý Bệnh Viện SGIS",
    badge: "HỆ THỐNG Y TẾ CHUYÊN SÂU",
    tagline: "Giải pháp quản trị tổng thể bệnh viện, phòng khám và cơ sở y tế thông minh",
    description: "Hệ thống phần mềm SGIS đồng hành cùng ngành y tế: liên thông dữ liệu bảo hiểm y tế cổng BHYT quốc gia, quản lý viện phí, kho dược, xét nghiệm LIS, chẩn đoán hình ảnh PACS/RIS và hồ sơ bệnh án điện tử EMR.",
    icon: Activity,
    features: [
      "Quản lý tiếp đón bệnh nhân, phân luồng khám thông minh giảm tải hàng đợi",
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
  const current = solutions.find((s) => s.id === activeId) || solutions[0];

  return (
    <section id="solutions" className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            <Layers className="h-3.5 w-3.5" />
            HỆ SINH THÁI GIẢI PHÁP
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Ba Trụ Cột Công Nghệ{" "}
            <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
              Chuyển Đổi Số
            </span>
          </h2>
          <p className="mt-3.5 text-base text-slate-600 leading-relaxed">
            Chọn nhóm giải pháp để khám phá hệ sinh thái phần mềm được thiết kế tối ưu hóa cho từng quy mô vận hành.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 rounded-full border border-slate-200 bg-slate-100/90 gap-1.5 shadow-inner">
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
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/60"
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" />
                  <span>{item.title}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Solution Canvas Card */}
        <div className="mt-10 rounded-3xl border border-slate-200/90 bg-slate-50/60 p-6 sm:p-10 lg:p-12 shadow-[0_16px_50px_rgba(15,23,42,0.05)]">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 items-center">
            
            {/* Left Content (7 Cols) */}
            <div className="lg:col-span-6 space-y-6">
              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 font-mono text-xs font-bold text-blue-700 border border-blue-200">
                {current.badge}
              </span>

              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                {current.tagline}
              </h3>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {current.description}
              </p>

              {/* Feature Checklist */}
              <div className="space-y-3 pt-1">
                {current.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-600 mt-0.5">
                      <Check className="h-3 w-3 stroke-[3]" />
                    </span>
                    <span className="text-sm text-slate-700 font-medium leading-normal">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>

              {/* Metrics Row */}
              <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-6">
                {current.metrics.map((m, idx) => (
                  <div key={idx} className="space-y-1">
                    <p className="text-xl sm:text-2xl font-extrabold text-blue-600 font-mono">
                      {m.value}
                    </p>
                    <p className="text-[11px] text-slate-500 font-medium">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  href={current.ctaHref}
                  className="group inline-flex items-center gap-2.5 rounded-full bg-blue-600 px-7 py-3 text-sm font-bold text-white shadow-md transition-all duration-300 hover:bg-blue-700 hover:shadow-lg active:scale-95"
                >
                  <span>{current.ctaText}</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Right Showcase Media (6 Cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative mx-auto rounded-2xl border border-slate-200 bg-white p-3 shadow-xl overflow-hidden group">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-xl bg-slate-100">
                  <Image
                    src={current.primaryImage}
                    alt={current.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Floating Micro-Card Overlap */}
                <div className="absolute -bottom-2 -left-2 sm:bottom-4 sm:left-4 max-w-[280px] rounded-xl border border-slate-200 bg-white p-3 shadow-xl">
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

      </div>
    </section>
  );
}
