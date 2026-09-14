"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Sparkles, ChevronRight, ShieldCheck } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const phases = [
  {
    phase: "PHA 1",
    name: "KHẢO SÁT",
    subtitle: "Khảo sát hiện trạng, nắm bắt bài toán thực tế",
    stages: "GĐ0 → GĐ1 → GĐ2",
    color: "#0284c7", // Sky blue
    accentBg: "bg-sky-50 text-sky-700 border-sky-200",
    glowBorder: "border-sky-500 ring-sky-500/20",
    deliverable: "Báo cáo hiện trạng AS-IS & Thống nhất mục tiêu KPI",
    keyItems: ["Tiếp cận & Sàng lọc (GĐ0)", "Khảo sát sơ bộ Discovery (GĐ1)", "Phân tích hiện trạng & Pain points (GĐ2)"],
  },
  {
    phase: "PHA 2",
    name: "TƯ VẤN",
    subtitle: "Tư vấn kiến trúc, chứng minh giải pháp tối ưu",
    stages: "GĐ3 → GĐ4 → GĐ5",
    color: "#16a34a", // Green
    accentBg: "bg-emerald-50 text-emerald-700 border-emerald-200",
    glowBorder: "border-emerald-500 ring-emerald-500/20",
    deliverable: "Thiết kế mô hình TO-BE & Ký kết hợp đồng SOW",
    keyItems: ["Tư vấn giải pháp & Fit-Gap (GĐ3)", "Demo thực tế & Dự toán ROI/TCO (GĐ4)", "POC thử nghiệm & Chốt hợp đồng (GĐ5)"],
  },
  {
    phase: "PHA 3",
    name: "TRIỂN KHAI",
    subtitle: "Hiện thực hóa hệ thống, đồng bộ & đào tạo",
    stages: "GĐ6 → GĐ7",
    color: "#ea580c", // Orange
    accentBg: "bg-orange-50 text-orange-700 border-orange-200",
    glowBorder: "border-orange-500 ring-orange-500/20",
    deliverable: "Hệ thống chuẩn hóa & Nghiệm thu UAT đạt 100%",
    keyItems: ["Kick-off, cấu hình & phân quyền (GĐ6)", "Di chuyển dữ liệu & Kiểm thử UAT (GĐ7)", "Đào tạo Admin & Người dùng cuối"],
  },
  {
    phase: "PHA 4",
    name: "VẬN HÀNH",
    subtitle: "Đưa vào sản xuất thực tế, đồng hành dài hạn",
    stages: "GĐ8",
    color: "#9333ea", // Purple
    accentBg: "bg-purple-50 text-purple-700 border-purple-200",
    glowBorder: "border-purple-500 ring-purple-500/20",
    deliverable: "Vận hành Go-live thông suốt & Bảo hành kỹ thuật SLA",
    keyItems: ["Chính thức chuyển đổi Go-live (GĐ8)", "Chế độ hỗ trợ đặc biệt Hypercare 24/7", "Bàn giao quản trị & Chăm sóc CS"],
  },
];

const PHASE_DURATION_SECONDS = 4.5;

export default function ImplementationProcess() {
  const [selectedPhase, setSelectedPhase] = useState(0);

  // Auto-cycle through the 4 phases
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedPhase((prev) => (prev + 1) % phases.length);
    }, PHASE_DURATION_SECONDS * 1000);

    return () => clearInterval(timer);
  }, [selectedPhase]);

  return (
    <section className="relative overflow-hidden bg-slate-100 py-16 sm:py-24 border-y border-slate-200">
      {/* Background Dot Matrix & Ambient Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(#94a3b8_1px,transparent_1px)] [background-size:24px_24px] opacity-35 pointer-events-none" />
      <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl pointer-events-none" />
      <div className="absolute right-1/4 bottom-0 h-96 w-96 rounded-full bg-purple-500/10 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl 2xl:max-w-[1440px] px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-blue-700 font-mono">
                QUY TRÌNH CHUẨN HÓA SỐ HÓA
              </span>
            </div>

            <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight uppercase leading-tight">
              TIẾN TRÌNH 4 PHA ĐỒNG HÀNH CHUYỂN ĐỔI SỐ
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
              Phương pháp luận triển khai tiêu chuẩn với <strong>4 Pha toàn diện</strong> và <strong>9 Giai đoạn thẩm định Gate</strong> nghiêm ngặt, đảm bảo bàn giao đúng hạn và bảo toàn hiệu quả đầu tư.
            </p>
          </div>
        </ScrollReveal>

        {/* 4-Phase Interactive Grid */}
        <ScrollReveal direction="up" delay={100} className="mt-10 sm:mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative">
            {phases.map((p, idx) => {
              const isCurrent = selectedPhase === idx;

              return (
                <div
                  key={p.phase}
                  onClick={() => setSelectedPhase(idx)}
                  className={`group relative rounded-3xl p-5 sm:p-6 transition-all duration-300 z-10 flex flex-col justify-between h-full min-h-[340px] cursor-pointer bg-white border-2 overflow-hidden ${
                    isCurrent
                      ? `shadow-[0_20px_45px_-10px_rgba(2,132,199,0.25)] -translate-y-1.5 ring-4 ${p.glowBorder} border-transparent opacity-100`
                      : "border-slate-200/90 hover:border-slate-300 hover:shadow-lg hover:-translate-y-1 opacity-90 hover:opacity-100"
                  }`}
                >
                  {/* Top Active Gradient Bar */}
                  {isCurrent && (
                    <div
                      className="absolute top-0 inset-x-0 h-2"
                      style={{ backgroundColor: p.color }}
                    />
                  )}

                  <div>
                    {/* Header Row: Phase Tag & Stage Range */}
                    <div className="flex items-center justify-between">
                      <span
                        className="flex h-10 px-3 items-center justify-center rounded-xl font-mono text-xs font-black text-white shadow-sm uppercase tracking-wider"
                        style={{ backgroundColor: p.color }}
                      >
                        {p.phase}
                      </span>
                      <span className="text-xs font-mono font-bold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-full border border-slate-200">
                        {p.stages}
                      </span>
                    </div>

                    {/* Phase Title */}
                    <h3 className="mt-4 text-xl font-black tracking-tight text-slate-900 leading-snug">
                      {p.name}
                    </h3>
                    <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-medium">
                      {p.subtitle}
                    </p>

                    {/* 3 Key Stage Items */}
                    <div className="mt-4 pt-3 border-t border-slate-100 space-y-1.5">
                      {p.keyItems.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2
                            className="h-3.5 w-3.5 shrink-0"
                            style={{ color: p.color }}
                          />
                          <span className="truncate font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom Deliverable & Countdown */}
                  <div className="mt-5">
                    <div className="pt-3 border-t border-slate-100">
                      <p className="text-[11px] font-mono font-bold text-slate-400 uppercase">
                        Sản phẩm cốt lõi
                      </p>
                      <p
                        className={`text-xs sm:text-sm font-bold mt-0.5 line-clamp-2 transition-colors ${
                          isCurrent ? "text-slate-900" : "text-slate-700"
                        }`}
                      >
                        {p.deliverable}
                      </p>
                    </div>

                    {/* Progress Bar for Active Phase */}
                    {isCurrent && (
                      <div className="mt-3.5 w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div
                          key={selectedPhase}
                          className="h-full rounded-full"
                          style={{
                            backgroundColor: p.color,
                            animation: `stepProgress ${PHASE_DURATION_SECONDS}s linear forwards`,
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Phase Indicators */}
        <div className="mt-8 flex items-center justify-center gap-2.5">
          {phases.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setSelectedPhase(i)}
              aria-label={`Chuyển tới pha ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                selectedPhase === i
                  ? "w-10 bg-blue-600 shadow-sm"
                  : "w-2.5 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>

        {/* CTA Banner: Navigate to Detailed Page */}
        <ScrollReveal direction="up" delay={200} className="mt-10 sm:mt-12">
          <div className="rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 p-6 sm:p-8 lg:p-10 shadow-xl border border-blue-900/50 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left max-w-2xl">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase text-sky-400 mb-2">
                <ShieldCheck className="h-4 w-4" />
                Kiểm định nghiêm ngặt theo tiêu chuẩn Gate
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight">
                Tìm hiểu chi tiết 9 Giai đoạn & 27 Nghiệp vụ triển khai
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                Xem tường tận phân tích AS-IS, TO-BE, Fit-Gap, POC/Pilot, UAT, Hypercare và điều kiện vượt Gate tại trang chuyên đề.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0">
              <Link
                href="/quy-trinh-so-hoa"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500 hover:shadow-xl transition-all group"
              >
                <span>Xem chi tiết quy trình số hóa</span>
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/quy-trinh-so-hoa#consultation-anchor"
                className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-white/10 hover:bg-white/15 px-5 py-3.5 text-sm font-bold text-white border border-white/20 backdrop-blur-sm transition-all"
              >
                Đăng ký khảo sát
              </Link>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
