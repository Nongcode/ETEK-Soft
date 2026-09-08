"use client";

import { useState } from "react";
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative min-h-screen bg-slate-50/60 pb-24 overflow-x-clip text-slate-800">
      {/* Ambient background decoration */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-[600px] bg-[radial-gradient(ellipse_90%_60%_at_50%_-15%,rgba(37,99,235,0.1),rgba(255,255,255,0))]" />
      <span className="pointer-events-none absolute right-[5%] top-36 hidden h-10 w-10 rotate-12 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-600 opacity-25 shadow-xl animate-balloon lg:block" />
      <span className="pointer-events-none absolute left-[4%] top-72 hidden h-8 w-8 -rotate-12 rounded-2xl bg-gradient-to-tr from-blue-600 to-emerald-400 opacity-20 shadow-xl animate-balloon-slow lg:block" />

      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Sản phẩm", href: "/san-pham" },
          ...(category ? [{ label: category.name, href: `/san-pham?category=${category.slug}` }] : []),
          { label: product.name },
        ]}
      />

      {/* Quick Navigation Sticky Ribbon */}
      <div className="sticky top-16 z-30 hidden border-y border-slate-200/80 bg-white/95 backdrop-blur-md md:block shadow-xs">
        <Container className="flex items-center justify-between py-2.5">
          <div className="flex items-center gap-1 text-xs font-bold text-slate-600 overflow-x-auto">
            <button
              type="button"
              onClick={() => scrollToSection("tong-quan")}
              className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-blue-600 transition-colors"
            >
              Tổng quan
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("tinh-nang-cot-loi")}
              className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-blue-600 transition-colors"
            >
              Tính năng phân hệ
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("quy-trinh-trien-khai")}
              className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-blue-600 transition-colors"
            >
              Quy trình triển khai
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("loi-ich-kinh-doanh")}
              className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-blue-600 transition-colors"
            >
              Hiệu quả & ROI
            </button>
            <button
              type="button"
              onClick={() => scrollToSection("hoi-dap-faq")}
              className="px-3 py-1.5 rounded-lg hover:bg-slate-100 hover:text-blue-600 transition-colors"
            >
              Hỏi & Đáp
            </button>
          </div>

          <button
            type="button"
            onClick={() => scrollToSection("dang-ky-tu-van")}
            className="inline-flex items-center gap-1.5 rounded-full bg-blue-600 px-4 py-1.5 text-xs font-bold text-white hover:bg-blue-700 transition-all shadow-sm"
          >
            <Sparkles className="h-3.5 w-3.5" />
            <span>Đăng ký Demo</span>
          </button>
        </Container>
      </div>

      {/* 1. HERO SECTION */}
      <section id="tong-quan" className="relative z-10 pt-8 pb-16 lg:pt-14 lg:pb-20">
        <Container>
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
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-blue-700">
              <Layers className="h-3.5 w-3.5" />
              HỆ THỐNG PHÂN HỆ CỐT LÕI
            </span>
            <h2 className="mt-3 text-2xl font-black text-slate-900 sm:text-3xl lg:text-4xl tracking-tight">
              Tính Năng Phân Hệ Chuyên Sâu Của Sản Phẩm
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
              Được thiết kế module hóa linh hoạt, cho phép doanh nghiệp kích hoạt từng phân hệ theo nhu cầu thực tế hoặc triển khai đồng bộ toàn diện.
            </p>
          </div>

          {/* Modules Grid */}
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {modules.map((mod, idx) => (
              <div
                key={idx}
                className="group relative flex flex-col justify-between rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-500/10"
              >
                <div>
                  {/* Top Bar: Icon + Badge */}
                  <div className="flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white shadow-xs">
                      <SolutionIcon name={mod.icon} className="h-6 w-6" />
                    </span>
                    {mod.highlightBadge && (
                      <span className="rounded-full bg-cyan-50 px-2.5 py-1 text-[11px] font-bold text-cyan-700 border border-cyan-200/60">
                        {mod.highlightBadge}
                      </span>
                    )}
                  </div>

                  {/* Title & Subtitle */}
                  <h3 className="mt-5 text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {mod.title}
                  </h3>
                  {mod.subtitle && (
                    <p className="text-xs font-semibold text-blue-600 mt-0.5">
                      {mod.subtitle}
                    </p>
                  )}

                  {/* Description */}
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {mod.description}
                  </p>

                  {/* Feature Checkmarks */}
                  <ul className="mt-4 space-y-2 border-t border-slate-100 pt-4 text-xs text-slate-700">
                    {mod.features.map((item, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-3.5 w-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-50 flex items-center justify-between text-xs font-bold text-blue-600 group-hover:text-blue-700">
                  <span>Khám phá phân hệ</span>
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

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
        <section id="loi-ich-kinh-doanh" className="relative z-10 py-16 bg-slate-900 text-white overflow-hidden">
          <div className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-cyan-500/15 blur-3xl" />

          <Container className="relative z-10">
            <div className="text-center max-w-3xl mx-auto">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/20 px-3 py-1 text-xs font-extrabold uppercase tracking-widest text-cyan-300 border border-cyan-400/30">
                <TrendingUp className="h-3.5 w-3.5" />
                HIỆU QUẢ THỰC TẾ
              </span>
              <h2 className="mt-3 text-2xl font-black sm:text-3xl lg:text-4xl tracking-tight">
                Giá Trị Khác Biệt Mang Lại Cho Doanh Nghiệp
              </h2>
              <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed">
                Được kiểm chứng qua hơn hàng trăm dự án chuyển đổi số trên khắp cả nước.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {benefits.map((b, idx) => (
                <div
                  key={idx}
                  className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-md transition-all hover:bg-white/10 hover:border-blue-400/50"
                >
                  <span className="inline-block rounded-full bg-blue-500/20 px-2.5 py-0.5 text-[11px] font-bold text-cyan-300">
                    {b.tag}
                  </span>
                  <p className="mt-4 text-3xl sm:text-4xl font-black font-mono text-cyan-400">
                    {b.metric}
                  </p>
                  <h3 className="mt-2 text-base font-bold text-white">
                    {b.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-300">
                    {b.description}
                  </p>
                </div>
              ))}
            </div>
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
                  Để lại thông tin để chuyên gia giải pháp của ETEK Softs liên hệ khảo sát thực tế và thiết lập tài khoản Demo phù hợp nhất với ngành nghề của bạn.
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
