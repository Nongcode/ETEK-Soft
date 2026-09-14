"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Sparkles,
  CheckCircle2,
  ArrowRight,
  PhoneCall,
  Mail,
  ShieldCheck,
  ChevronDown,
  Building,
  Users,
  Clock,
  Calculator,
  Award,
  GraduationCap,
  BarChart3,
  Coins,
  TrendingUp,
  Truck,
  Boxes,
  Cpu,
  LineChart,
  Layers,
  Calendar,
  Send,
  FileCheck2,
  Lock,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import { Category, Product } from "@/types";
import { cn } from "@/lib/utils";
import HRMROICalculator from "@/components/solution/HRMROICalculator";
import { Scale, Network, Database, CheckSquare } from "lucide-react";

// Map dynamic icon name to Lucide Icon component
const iconMap: Record<string, React.ElementType> = {
  Users,
  Clock,
  Calculator,
  Award,
  GraduationCap,
  BarChart3,
  Coins,
  TrendingUp,
  Truck,
  Boxes,
  Cpu,
  LineChart,
  Layers,
  Building,
  ShieldCheck,
  Calendar,
};

function SolutionIcon({ name, className }: { name: string; className?: string }) {
  const IconComponent = iconMap[name] || Layers;
  return <IconComponent className={className} />;
}

export default function SolutionDetailView({
  product,
  category,
}: {
  product: Product;
  category?: Category;
}) {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    company: "",
    scale: "Dưới 50 nhân sự",
    note: "",
  });

  const modules = product.solutionModules ?? [];
  const processSteps = product.solutionProcess ?? [];
  const metrics = product.solutionHeroMetrics ?? [];
  const benefits = product.solutionBenefits ?? [];
  const isHrm = product.slug === "giai-phap-quan-tri-nhan-su-toan-dien-hrm" || product.id === "sol-hrm";

  const [activeSection, setActiveSection] = useState<string>("tong-quan");

  const navItems = [
    { id: "tong-quan", label: "Tổng quan" },
    { id: "tinh-nang-cot-loi", label: "Tính năng phân hệ" },
    ...(isHrm
      ? [
          { id: "tuan-thu-phap-ly", label: "Pháp lý 2026" },
          { id: "kien-truc-tich-hop", label: "Tích hợp hệ thống" },
        ]
      : []),
    { id: "quy-trinh-trien-khai", label: "Quy trình triển khai" },
    { id: "loi-ich-kinh-doanh", label: "Hiệu quả & Lợi ích" },
    ...(isHrm ? [{ id: "tinh-toan-roi", label: "Bảng tính ROI" }] : []),
    { id: "hoi-dap-faq", label: "Hỏi & Đáp" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 180;

      for (let i = navItems.length - 1; i >= 0; i--) {
        const item = navItems[i];
        const section = document.getElementById(item.id);
        if (section) {
          const sectionTop = section.offsetTop;
          if (scrollPosition >= sectionTop) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHrm]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 110;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50/60 pb-24 overflow-x-clip text-slate-800">
      {/* Ambient background decoration */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_90%_60%_at_50%_-15%,rgba(37,99,235,0.1),rgba(255,255,255,0))]" />
      <span className="pointer-events-none absolute right-[5%] top-36 hidden h-10 w-10 rotate-12 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 opacity-25 shadow-xl animate-balloon lg:block" />
      <span className="pointer-events-none absolute left-[4%] top-72 hidden h-8 w-8 -rotate-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-emerald-400 opacity-20 shadow-xl animate-balloon-slow lg:block" />

      {/* Quick Navigation Sticky Ribbon */}
      <div className="sticky top-16 z-30 hidden border-y border-slate-200/80 bg-white/95 backdrop-blur-md md:block shadow-xs">
        <Container className="flex items-center justify-between py-2.5">
          <div className="flex items-center gap-1 text-xs font-bold text-slate-600 overflow-x-auto">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "px-3 py-1.5 rounded-lg text-xs font-bold transition-all whitespace-nowrap",
                    isActive
                      ? "bg-blue-600 text-white shadow-xs"
                      : "text-slate-600 hover:bg-slate-100 hover:text-blue-600"
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("dang-ky-tu-van")}
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white hover:bg-blue-700 transition-all shadow-sm shrink-0"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Đăng ký Demo</span>
          </button>
        </Container>
      </div>

      {/* 1. HERO SECTION */}
      <section id="tong-quan" className="relative z-10 pt-4 pb-16 lg:pt-6 lg:pb-20">
        <Container>
          {/* Breadcrumb Navigation inside Hero */}
          <div className="mb-6">
            <Breadcrumb
              noContainer
              items={[
                { label: "Sản phẩm", href: "/san-pham" },
                ...(category ? [{ label: category.name, href: `/san-pham?category=${category.slug}` }] : []),
                { label: product.name },
              ]}
            />
          </div>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
            {/* Left Content */}
            <div className="lg:col-span-7">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-blue-50/90 px-3.5 py-1.5 text-xs font-extrabold text-blue-700 shadow-xs backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-ping" />
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span>{product.solutionBadge || "GIẢI PHÁP CHUYỂN ĐỔI SỐ DOANH NGHIỆP"}</span>
              </div>

              {/* Title */}
              <h1 className="mt-4 text-3xl font-black tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-tight">
                {product.name}
              </h1>

              {/* Tagline */}
              {product.solutionTagline && (
                <p className="mt-4 text-base font-semibold text-blue-800 leading-relaxed sm:text-lg">
                  {product.solutionTagline}
                </p>
              )}

              {/* Description */}
              <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
                {product.description}
              </p>

              {/* Metrics Highlights */}
              {metrics.length > 0 && (
                <div className="mt-8 grid grid-cols-3 gap-3 sm:gap-4">
                  {metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/80 bg-white/90 p-3 sm:p-4 shadow-xs transition-all hover:border-blue-300 hover:shadow-md"
                    >
                      <p className="text-2xl sm:text-3xl font-black text-blue-600 font-mono tracking-tight">
                        {m.value}
                      </p>
                      <p className="mt-1 text-xs font-bold text-slate-800 leading-snug">{m.label}</p>
                      {m.sub && (
                        <p className="text-[11px] text-slate-500 hidden sm:block">{m.sub}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}

              {/* Action Buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-3.5">
                <button
                  type="button"
                  onClick={() => scrollToSection("dang-ky-tu-van")}
                  className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-105 hover:shadow-xl hover:shadow-blue-500/35 active:scale-95"
                >
                  <span>Đăng ký tư vấn & Demo trực tiếp</span>
                  <ArrowRight className="h-4 w-4" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("quy-trinh-trien-khai")}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-5 py-3.5 text-sm font-bold text-slate-700 transition-all hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-700 shadow-xs"
                >
                  <Calendar className="h-4 w-4 text-blue-600" />
                  <span>Xem quy trình 5 bước</span>
                </button>
              </div>

              {/* Trust Guarantees */}
              <div className="mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-semibold text-slate-500">
                <span className="inline-flex items-center gap-1.5">
                  <ShieldCheck className="h-4 w-4 text-emerald-600" />
                  Bảo mật dữ liệu chuẩn ISO
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <FileCheck2 className="h-4 w-4 text-blue-600" />
                  Hợp đồng & Hóa đơn VAT đầy đủ
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <PhoneCall className="h-4 w-4 text-cyan-600" />
                  Hỗ trợ kỹ thuật 24/7
                </span>
              </div>
            </div>

            {/* Right Graphic Preview Box */}
            <div className="lg:col-span-5">
              <div className="relative rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/90 p-6 shadow-xl">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-rose-400" />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="rounded-full bg-slate-100 px-3 py-0.5 font-mono text-[10px] font-bold text-slate-600">
                    ETEK SOFTS LIVE SYSTEM
                  </span>
                </div>

                <div className="mt-5 space-y-4">
                  {/* Status Indicator */}
                  <div className="rounded-2xl border border-blue-100 bg-blue-50/50 p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold uppercase tracking-wider text-blue-700">
                        Trạng thái kiến trúc
                      </span>
                      <span className="inline-flex items-center gap-1 rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-extrabold text-emerald-800">
                        ● Sẵn sàng triển khai
                      </span>
                    </div>
                    <p className="mt-2 text-sm font-semibold text-slate-800">
                      Tương thích 100% Cloud Server & On-Premise nội bộ
                    </p>
                  </div>

                  {/* Highlights Checklist */}
                  <div className="space-y-2.5 text-xs text-slate-700">
                    {product.features?.slice(0, 5).map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 rounded-xl bg-white p-2.5 shadow-xs border border-slate-100">
                        <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="font-medium">{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Quick consultation prompt */}
                  <div className="rounded-2xl bg-gradient-to-r from-blue-700 to-cyan-700 p-4 text-white shadow-md">
                    <p className="text-xs font-bold uppercase tracking-wider text-blue-200">
                      Tư vấn kỹ thuật trực tiếp
                    </p>
                    <p className="mt-1 text-sm font-bold">
                      Khảo sát nghiệp vụ & Demo chức năng trực tiếp theo mô hình của bạn.
                    </p>
                    <div className="mt-3 flex items-center justify-between">
                      <span className="font-mono text-xs font-extrabold text-cyan-200">
                        Hotline: 1900 2026
                      </span>
                      <button
                        type="button"
                        onClick={() => scrollToSection("dang-ky-tu-van")}
                        className="rounded-lg bg-white px-3 py-1 text-xs font-bold text-blue-700 hover:bg-blue-50 transition-colors"
                      >
                        Liên hệ ngay
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 2. CORE FEATURE MODULES */}
      <section id="tinh-nang-cot-loi" className="relative z-10 py-16 bg-white border-y border-slate-200/80">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3.5 py-1 text-xs sm:text-sm font-extrabold uppercase tracking-widest text-blue-700">
              <Layers className="h-4 w-4 text-blue-600" />
              HỆ THỐNG PHÂN HỆ CỐT LÕI
            </span>
            <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl tracking-tight">
              Tính Năng Phân Hệ Chuyên Sâu Của Sản Phẩm
            </h2>
            <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
              Được thiết kế module hóa linh hoạt, cho phép doanh nghiệp kích hoạt từng phân hệ theo nhu cầu thực tế hoặc triển khai đồng bộ toàn diện.
            </p>
          </div>

          {/* Modules Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white shadow-xs">
                      <SolutionIcon name={mod.icon} className="h-6 w-6" />
                    </span>
                    {mod.highlightBadge && (
                      <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-extrabold text-cyan-800 border border-cyan-200/80">
                        {mod.highlightBadge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-5 text-xl sm:text-2xl font-black text-slate-900 group-hover:text-blue-600 transition-colors leading-snug">
                    {mod.title}
                  </h3>
                  {mod.subtitle && (
                    <p className="text-sm font-bold text-blue-700 mt-1">
                      {mod.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {mod.description}
                  </p>

                  {/* Feature Checkmarks */}
                  <ul className="mt-5 space-y-2.5 border-t border-slate-100 pt-4 text-sm sm:text-base text-slate-700 font-medium">
                    {mod.features.map((item, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0 mt-1" />
                        <span className="leading-snug">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between text-sm font-extrabold text-blue-600 group-hover:text-blue-700">
                  <span>Khám phá phân hệ</span>
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 2.5 COMPLIANCE & LEGAL SECTION (HRM ONLY) */}
      {isHrm && (
        <section id="tuan-thu-phap-ly" className="relative z-10 py-16 bg-gradient-to-b from-slate-50 to-blue-50/40 border-b border-slate-200/80 scroll-mt-20">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 text-blue-800 border border-blue-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest">
                <Scale className="h-3.5 w-3.5 text-blue-700" />
                COMPLIANCE-BY-DESIGN • PHÁP LÝ VIỆT NAM 2026
              </span>
              <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl tracking-tight">
                Sẵn Sàng 100% Khung Pháp Lý Mới Nhất Năm 2026
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                ETEK HRM tích hợp cơ chế Rule Table Versioned — mọi thay đổi về luật lao động, thuế TNCN và bảo hiểm xã hội đều được áp dụng chính xác theo ngày hiệu lực (Effective Date) mà không cần can thiệp mã nguồn.
              </p>
            </div>

            {/* Legal Baseline Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Quan hệ lao động</span>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">BLLĐ 2019</span>
                </div>
                <h3 className="mt-3 font-bold text-slate-900 text-base">Bộ Luật Lao Động 45/2019/QH14</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Quản lý chuẩn mực hợp đồng lao động, thời giờ làm việc/nghỉ ngơi, làm thêm giờ (hệ số OT ca đêm, ngày nghỉ x200%, lễ tết x300%), kỷ luật và quyết toán thôi việc (Final Settlement).
                </p>
              </div>

              <div className="rounded-3xl border border-blue-200 bg-blue-50/50 p-6 shadow-xs hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between pb-3 border-b border-blue-100">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Bảo hiểm xã hội & Y tế</span>
                  <span className="text-[11px] font-bold text-blue-700 bg-blue-100 px-2 py-0.5 rounded-md">Hiệu lực 01/07/2025</span>
                </div>
                <h3 className="mt-3 font-bold text-slate-900 text-base">Luật BHXH 41/2024 & NĐ 158/2025</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Tự động xác định đối tượng và căn cứ tiền lương đóng BHXH bắt buộc, đồng bộ Luật BHYT 51/2024/QH15 và xuất báo cáo đối soát khớp 100% với dữ liệu cơ quan BHXH.
                </p>
              </div>

              <div className="rounded-3xl border border-emerald-200 bg-emerald-50/50 p-6 shadow-xs hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between pb-3 border-b border-emerald-100">
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Lương tối thiểu vùng</span>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">Nghị định 293/2025</span>
                </div>
                <h3 className="mt-3 font-bold text-slate-900 text-base">Áp dụng từ 01/01/2026</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Gắn Location/Site tự động kiểm soát mức lương sàn: Vùng I (5.310.000đ/tháng - 25.500đ/h), Vùng II (4.730.000đ), Vùng III (4.140.000đ), Vùng IV (3.700.000đ). Cảnh báo vi phạm ngưỡng.
                </p>
              </div>

              <div className="rounded-3xl border border-amber-200 bg-amber-50/50 p-6 shadow-xs hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between pb-3 border-b border-amber-100">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Thuế thu nhập cá nhân</span>
                  <span className="text-[11px] font-bold text-amber-700 bg-amber-100 px-2 py-0.5 rounded-md">Luật 109/2025/QH15</span>
                </div>
                <h3 className="mt-3 font-bold text-slate-900 text-base">Kỳ tính thuế 2026 Mới</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Áp dụng biểu thuế 5 bậc và mức giảm trừ gia cảnh mới: Bản thân <strong>15,5 triệu đồng/tháng</strong> (186 triệu/năm), Người phụ thuộc <strong>6,2 triệu đồng/tháng/người</strong>.
                </p>
              </div>

              <div className="rounded-3xl border border-purple-200 bg-purple-50/50 p-6 shadow-xs hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between pb-3 border-b border-purple-100">
                  <span className="text-xs font-bold text-purple-700 uppercase tracking-wider">Bảo vệ dữ liệu cá nhân</span>
                  <span className="text-[11px] font-bold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-md">Luật 91/2025 & Luật 116/2025</span>
                </div>
                <h3 className="mt-3 font-bold text-slate-900 text-base">Data Privacy & An Ninh Mạng</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Bảo vệ dữ liệu nhạy cảm theo mục đích (Purpose-based), che dấu trường nhạy cảm (Field masking), kiểm soát quyền truy cập chặt chẽ và ghi vết thao tác (Audit log 100%).
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs hover:shadow-md transition-shadow">
                <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Kiểm soát nội bộ (SoD)</span>
                  <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-md">Internal Controls</span>
                </div>
                <h3 className="mt-3 font-bold text-slate-900 text-base">Phân tách nhiệm vụ & Maker-Checker</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Triệt tiêu rủi ro gian lận lương: Người lập bảng lương không duyệt chi trả, kiểm tra phương sai (Variance check ±20%) và đối soát dân số lương (Population reconciliation).
                </p>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 2.6 INTEGRATION ARCHITECTURE (HRM ONLY) */}
      {isHrm && (
        <section id="kien-truc-tich-hop" className="relative z-10 py-16 bg-white border-b border-slate-200/80 scroll-mt-20">
          <Container>
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-50 text-cyan-800 border border-cyan-200 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest">
                <Network className="h-3.5 w-3.5 text-cyan-600" />
                HỆ SINH THÁI TÍCH HỢP MỞ • HRM 360°
              </span>
              <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl tracking-tight">
                Kiến Trúc Kết Nối Đa Nền Tảng Liền Mạch
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Được xây dựng trên nền tảng API Gateway hiện đại với cơ chế Idempotency và Retry thông minh, ETEK HRM dễ dàng đồng bộ 2 chiều với hạ tầng CNTT hiện có của doanh nghiệp.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 text-center hover:border-blue-300 hover:bg-blue-50/30 transition-all">
                <div className="h-12 w-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4 font-black text-lg">
                  1
                </div>
                <h3 className="font-bold text-slate-900 text-base">Máy Chấm Công & IoT</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Đồng bộ Raw Punch thời gian thực qua LAN / Cloud API từ Hikvision, ZKTeco, Suprema, Ronald Jack & App di động GPS.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 text-center hover:border-emerald-300 hover:bg-emerald-50/30 transition-all">
                <div className="h-12 w-12 rounded-2xl bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4 font-black text-lg">
                  2
                </div>
                <h3 className="font-bold text-slate-900 text-base">ERP & Kế Toán</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Tự động đẩy bút toán hạch toán chi phí lương (General Ledger) sang SAP, Oracle, MISA, FAST, Bravo theo Cost Center.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 text-center hover:border-cyan-300 hover:bg-cyan-50/30 transition-all">
                <div className="h-12 w-12 rounded-2xl bg-cyan-100 text-cyan-600 flex items-center justify-center mx-auto mb-4 font-black text-lg">
                  3
                </div>
                <h3 className="font-bold text-slate-900 text-base">Cổng Ngân Hàng Chi Lương</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Kết xuất file điện tử chuẩn hoặc kết nối Direct Corporate Banking (Vietcombank, Techcombank, BIDV...) chi lương chỉ với 1 click.
                </p>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-slate-50/70 p-6 text-center hover:border-purple-300 hover:bg-purple-50/30 transition-all">
                <div className="h-12 w-12 rounded-2xl bg-purple-100 text-purple-600 flex items-center justify-center mx-auto mb-4 font-black text-lg">
                  4
                </div>
                <h3 className="font-bold text-slate-900 text-base">Hệ Thống Định Danh SSO</h3>
                <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                  Đồng bộ người dùng với Microsoft Azure AD, Google Workspace, Okta; tự động cấp tài khoản khi vào làm và khóa quyền khi nghỉ việc.
                </p>
              </div>
            </div>
          </Container>
        </section>
      )}

      {/* 3. IMPLEMENTATION WORKFLOW */}
      <section id="quy-trinh-trien-khai" className="relative z-10 py-16 lg:py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-blue-700">
              <Calendar className="h-3.5 w-3.5" />
              LỘ TRÌNH VẬN HÀNH BÀI BẢN
            </span>
            <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl tracking-tight">
              Quy Trình 5 Bước Triển Khai Chuyên Nghiệp
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Quy trình chuẩn hóa đảm bảo hệ thống vận hành đúng tiến độ, dữ liệu được chuyển đổi trọn vẹn và người dùng được đào tạo thành thạo.
            </p>
          </div>

          {/* Workflow Steps Timeline */}
          <div className="mt-14 space-y-6 max-w-4xl mx-auto">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl border border-slate-200/80 bg-white p-6 sm:p-7 shadow-xs transition-all hover:border-blue-300 hover:shadow-lg"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3.5">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 font-mono text-sm font-extrabold text-white shadow-sm">
                      0{step.step}
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">
                        {step.title}
                      </h3>
                      {step.subtitle && (
                        <p className="text-xs font-semibold text-blue-600">
                          {step.subtitle}
                        </p>
                      )}
                    </div>
                  </div>

                  {step.duration && (
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700 shrink-0">
                      <Clock className="h-3.5 w-3.5 text-slate-500" />
                      {step.duration}
                    </span>
                  )}
                </div>

                <p className="mt-4 text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {step.description}
                </p>

                {step.deliverables && step.deliverables.length > 0 && (
                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                      Sản phẩm bàn giao & Kết quả:
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {step.deliverables.map((deliv, dIdx) => (
                        <span
                          key={dIdx}
                          className="inline-flex items-center gap-1.5 rounded-xl bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 border border-slate-200/70"
                        >
                          <CheckCircle2 className="h-3 w-3 text-blue-600" />
                          {deliv}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* 4. BUSINESS BENEFITS & ROI */}
      {benefits.length > 0 && (
        <section id="loi-ich-kinh-doanh" className="relative z-10 py-16 bg-gradient-to-b from-white via-slate-50 to-blue-50/40 text-slate-800 border-b border-slate-200/80 scroll-mt-20">
          <Container className="relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-100 px-3.5 py-1 text-xs font-extrabold uppercase tracking-widest text-blue-800 border border-blue-200">
                <TrendingUp className="h-3.5 w-3.5 text-blue-600" />
                HIỆU QUẢ THỰC TẾ
              </span>
              <h2 className="mt-3 text-2xl font-black sm:text-3xl lg:text-4xl tracking-tight text-slate-900">
                Giá Trị Khác Biệt Mang Lại Cho Doanh Nghiệp
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
                Được kiểm chứng qua hơn hàng trăm dự án chuyển đổi số trên khắp cả nước.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
                >
                  <span className="inline-block rounded-full bg-blue-50 px-2.5 py-1 text-[11px] font-bold text-blue-700 border border-blue-200/60">
                    {b.tag}
                  </span>
                  <p className="mt-4 text-3xl sm:text-4xl font-black font-mono text-blue-600">
                    {b.metric}
                  </p>
                  <h3 className="mt-2 text-base font-bold text-slate-900">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* 4.5 INTERACTIVE ROI CALCULATOR (HRM ONLY) */}
      {isHrm && (
        <section id="tinh-toan-roi" className="relative z-10 py-16 bg-gradient-to-b from-blue-50/40 via-slate-50 to-slate-100/70 border-b border-slate-200/80 scroll-mt-20">
          <Container>
            <HRMROICalculator onConsultClick={() => scrollToSection("dang-ky-tu-van")} />
          </Container>
        </section>
      )}

      {/* 5. CONSULTATION & DEMO FORM */}
      <section id="dang-ky-tu-van" className="relative z-10 py-16 lg:py-24">
        <Container>
          <div className="rounded-[2.5rem] border border-slate-200/90 bg-white p-6 sm:p-10 lg:p-12 shadow-xl">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:items-center">
              {/* Left Column: Value Prop */}
              <div className="lg:col-span-5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-blue-700">
                  <PhoneCall className="h-3.5 w-3.5" />
                  ĐỒNG HÀNH CHUYỂN ĐỔI SỐ
                </span>
                <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl tracking-tight">
                  Đăng Ký Tư Vấn & Trải Nghiệm Demo
                </h2>
                <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                  Để lại thông tin để chuyên gia giải pháp của ETEK Softs liên hệ khảo sát thực tế và thiết lập tài khoản Demo phù hợp tối ưu với ngành nghề của bạn.
                </p>

                <div className="mt-8 space-y-4 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-blue-100 text-blue-700 shrink-0">
                      <PhoneCall className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-500">Hotline tư vấn 24/7</p>
                      <p className="font-bold text-slate-900 text-sm">1900 2026 - 0988 567 890</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700 shrink-0">
                      <Mail className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-500">Email tiếp nhận yêu cầu</p>
                      <p className="font-bold text-slate-900 text-sm">sales@etek-soft.vn</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-emerald-100 text-emerald-700 shrink-0">
                      <Lock className="h-4 w-4" />
                    </div>
                    <div>
                      <p className="text-[11px] text-slate-500">Cam kết bảo mật</p>
                      <p className="font-bold text-slate-900 text-sm">Ký thỏa thuận NDA bảo mật số liệu doanh nghiệp</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Form */}
              <div className="lg:col-span-7">
                {formSubmitted ? (
                  <div className="rounded-3xl border border-emerald-200 bg-emerald-50/70 p-8 text-center animate-fade-up">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mx-auto">
                      <CheckCircle2 className="h-8 w-8" />
                    </span>
                    <h3 className="mt-4 text-xl font-black text-slate-900">
                      Đã Gửi Yêu Cầu Thành Công!
                    </h3>
                    <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto">
                      Cảm ơn bạn. Chuyên gia giải pháp của ETEK Softs sẽ liên hệ lại qua số điện thoại <strong>{formData.phone}</strong> trong vòng 15-30 phút làm việc.
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          fullName: "",
                          phone: "",
                          email: "",
                          company: "",
                          scale: "Dưới 50 nhân sự",
                          note: "",
                        });
                      }}
                      className="mt-6 inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-5 py-2.5 text-xs font-bold text-white hover:bg-emerald-700 transition-colors"
                    >
                      Gửi yêu cầu khác
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Họ và tên <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.fullName}
                          onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                          placeholder="Nguyễn Văn A"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Số điện thoại <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="0912 345 678"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Email doanh nghiệp <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="contact@company.com"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 mb-1">
                          Tên công ty / tổ chức
                        </label>
                        <input
                          type="text"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          placeholder="Công ty Cổ phần ABC"
                          className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Quy mô nhân sự / Phạm vi triển khai
                      </label>
                      <select
                        value={formData.scale}
                        onChange={(e) => setFormData({ ...formData, scale: e.target.value })}
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all"
                      >
                        <option value="Dưới 50 nhân sự">Dưới 50 nhân sự</option>
                        <option value="Từ 50 - 200 nhân sự">Từ 50 - 200 nhân sự</option>
                        <option value="Từ 200 - 500 nhân sự">Từ 200 - 500 nhân sự</option>
                        <option value="Trên 500 nhân sự (Tập đoàn)">Trên 500 nhân sự (Tập đoàn)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nhu cầu tư vấn cụ thể
                      </label>
                      <textarea
                        rows={3}
                        value={formData.note}
                        onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                        placeholder="Nêu ngắn gọn bài toán hiện tại hoặc tính năng doanh nghiệp cần ưu tiên..."
                        className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-800 outline-none focus:border-blue-500 focus:bg-white focus:ring-2 focus:ring-blue-100 transition-all resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all"
                    >
                      <Send className="h-4 w-4" />
                      <span>Gửi yêu cầu Demo & Nhận báo giá giải pháp</span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* 6. FAQ SECTION */}
      {product.faqs && product.faqs.length > 0 && (
        <section id="hoi-dap-faq" className="relative z-10 py-12">
          <Container className="max-w-3xl">
            <div className="text-center">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-blue-700">
                HỎI & ĐÁP CHUYÊN GIA
              </span>
              <h2 className="mt-2 text-2xl font-black text-slate-900 sm:text-3xl tracking-tight">
                Câu Hỏi Thường Gặp Về Giải Pháp
              </h2>
            </div>

            <div className="mt-8 space-y-3">
              {product.faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden shadow-xs transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="flex w-full items-center justify-between p-4 sm:p-5 text-left text-sm font-bold text-slate-900 hover:text-blue-600"
                  >
                    <span>{faq.question}</span>
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 text-slate-400 shrink-0 transition-transform duration-200",
                        openFaq === i && "rotate-180 text-blue-600"
                      )}
                    />
                  </button>
                  {openFaq === i && (
                    <div className="px-4 sm:px-5 pb-5 text-xs sm:text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
                      {faq.answer}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}
    </div>
  );
}
