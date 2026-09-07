"use client";

import { useState, useEffect } from "react";
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const steps = [
  {
    step: "01",
    title: "Khảo Sát & Tư Vấn Kiến Trúc",
    desc: "Đội ngũ kỹ sư phân tích cơ cấu tổ chức, quy chế tính công lương 3P, hạ tầng máy chấm công hiện có và số lượng license cần cấp phép.",
    deliverable: "Bản báo cáo giải pháp & Dự toán chi phí tối ưu",
  },
  {
    step: "02",
    title: "Cấp Phép & Cài Đặt Dưới 15 Phút",
    desc: "Bàn giao key điện tử chính ngạch (Microsoft CSP/ESD, Server 2025). Khởi tạo máy chủ Cloud bảo mật hoặc cài đặt On-Premise theo yêu cầu.",
    deliverable: "Tài khoản quản trị & Hệ thống sẵn sàng vận hành",
  },
  {
    step: "03",
    title: "Tích Hợp Dữ Liệu & Máy Chấm Công",
    desc: "Đấu nối thiết bị AI FaceID, vân tay và GPS di động. Nạp toàn bộ danh sách nhân sự, thiết lập công thức tính lương và phân quyền đa cấp bậc.",
    deliverable: "Đồng bộ dữ liệu thời gian thực 100% tự động",
  },
  {
    step: "04",
    title: "Đào Tạo Chuyển Giao Chuyên Sâu",
    desc: "Tổ chức buổi đào tạo trực tiếp hoặc online cho bộ phận Nhân sự, Kế toán và hướng dẫn cán bộ công nhân viên sử dụng App điện thoại.",
    deliverable: "Tài liệu hướng dẫn & Video quy trình chi tiết",
  },
  {
    step: "05",
    title: "Bàn Giao CO/CQ & Hỗ Trợ 24/7",
    desc: "Xuất hóa đơn VAT điện tử, cung cấp văn bản chứng nhận CO/CQ từ hãng sản xuất và cam kết SLA hỗ trợ kỹ thuật phản hồi dưới 15 phút.",
    deliverable: "Hồ sơ pháp lý hoàn chỉnh & Bảo hành trọn đời",
  },
];

const STEP_DURATION_SECONDS = 4; // 4 seconds per step strictly continuous

export default function ImplementationProcess() {
  const [selectedStep, setSelectedStep] = useState(0);

  // Pure, continuous, unstoppable auto-cycle strictly 0 -> 1 -> 2 -> 3 -> 4 -> 0
  useEffect(() => {
    const timer = setInterval(() => {
      setSelectedStep((prev) => (prev + 1) % steps.length);
    }, STEP_DURATION_SECONDS * 1000);

    return () => clearInterval(timer);
  }, [selectedStep]);

  const handleSelectStep = (idx: number) => {
    setSelectedStep(idx);
  };

  return (
    <section className="relative overflow-hidden bg-miko-cream py-18 sm:py-24 border-t border-b border-miko">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 shadow-sm backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-blue-600" />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-blue-700 font-mono">
                QUY TRÌNH CHUẨN HÓA DOANH NGHIỆP
              </span>
            </div>

            <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight uppercase leading-tight">
              QUY TRÌNH TRIỂN KHAI PHẦN MỀM CHUYÊN NGHIỆP
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
              Cam kết tiến độ bàn giao chuẩn xác, không làm gián đoạn hoạt động kinh doanh của doanh nghiệp.
            </p>
          </div>
        </ScrollReveal>

        {/* 5-Step Connected Process Flow */}
        <div className="mt-12 sm:mt-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 relative" data-reveal-group data-reveal-step="95">
            

            {steps.map((s, idx) => {
              const isCurrent = selectedStep === idx;
              return (
                <div
                  key={idx}
                  data-reveal
                  onClick={() => handleSelectStep(idx)}
                  className={`group relative rounded-3xl p-5 sm:p-6 transition-all duration-300 z-10 flex flex-col justify-between h-full min-h-[330px] cursor-pointer bg-white border-2 overflow-hidden ${
                    isCurrent
                      ? "border-blue-600 shadow-[0_20px_45px_-10px_rgba(37,99,235,0.25)] -translate-y-2 ring-4 ring-blue-500/15"
                      : "border-slate-200/90 hover:border-blue-300 hover:shadow-lg hover:-translate-y-1 opacity-85 hover:opacity-100"
                  }`}
                >
                  {/* Subtle Top Active Glow */}
                  {isCurrent && (
                    <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />
                  )}

                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`flex h-11 w-11 items-center justify-center rounded-2xl font-mono text-sm sm:text-base font-extrabold transition-all duration-300 ${
                          isCurrent
                            ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-md scale-105"
                            : "bg-slate-100 text-slate-700 group-hover:bg-blue-50 group-hover:text-blue-600"
                        }`}
                      >
                        {s.step}
                      </span>
                      {isCurrent ? (
                        <span className="flex items-center gap-1 text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                          <span className="h-1.5 w-1.5 rounded-full bg-blue-600 animate-ping" />
                          Đang xem
                        </span>
                      ) : (
                        <span className="text-xs font-bold text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                          Bấm để xem
                        </span>
                      )}
                    </div>

                    <h3
                      className={`mt-4 text-base sm:text-lg font-bold leading-snug transition-colors ${
                        isCurrent ? "text-blue-950" : "text-slate-900 group-hover:text-blue-700"
                      }`}
                    >
                      {s.title}
                    </h3>

                    <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                      {s.desc}
                    </p>
                  </div>

                  <div>
                    <div className="mt-4 pt-3.5 border-t border-slate-100">
                      <p className="text-[11px] font-mono font-bold text-slate-400 uppercase">
                        Kết quả bàn giao
                      </p>
                      <p
                        className={`text-xs sm:text-sm font-semibold mt-0.5 line-clamp-2 transition-colors ${
                          isCurrent ? "text-blue-700 font-bold" : "text-slate-700"
                        }`}
                      >
                        {s.deliverable}
                      </p>
                    </div>

                    {/* Continuous CSS-driven countdown bar */}
                    {isCurrent && (
                      <div className="mt-3.5 w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                        <div
                          key={selectedStep}
                          className="h-full bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full"
                          style={{
                            animation: `stepProgress ${STEP_DURATION_SECONDS}s linear forwards`,
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              );
            })}

          </div>

          {/* Bottom Step Dots Indicator */}
          <div className="mt-8 flex items-center justify-center gap-2.5">
            {steps.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => handleSelectStep(i)}
                aria-label={`Chuyển tới bước ${i + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  selectedStep === i
                    ? "w-9 bg-blue-600 shadow-sm"
                    : "w-2.5 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
