"use client";

import { useState } from "react";
import { Calculator, TrendingUp, Clock, Sparkles, ArrowRight, CheckCircle2 } from "lucide-react";
import { formatPrice } from "@/lib/utils";

export default function HRMROICalculator({ onConsultClick }: { onConsultClick?: () => void }) {
  const [headcount, setHeadcount] = useState<number>(150);
  const [manualHours, setManualHours] = useState<number>(45);
  const [hourlyRate, setHourlyRate] = useState<number>(85000);

  // Constants based on Chapter 43 & Tool 17 (ETEK Solutions 2026)
  const AUTOMATION_SAVINGS_RATIO = 0.8; // Tiết kiệm 80% thời gian xử lý công & lương
  const ERROR_REDUCTION_SAVINGS_PER_EMP_YEAR = 160000; // Tiết kiệm chi phí sai sót, đối soát & khiếu nại 160k/NV/năm

  // Calculations
  const savedHoursMonthly = Math.round(manualHours * AUTOMATION_SAVINGS_RATIO);
  const savedHoursYearly = savedHoursMonthly * 12;
  const directLaborSavingsYearly = savedHoursYearly * hourlyRate;
  const indirectErrorSavingsYearly = headcount * ERROR_REDUCTION_SAVINGS_PER_EMP_YEAR;
  const totalSavingsYearly = directLaborSavingsYearly + indirectErrorSavingsYearly;

  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 text-slate-800 shadow-xl sm:p-8 lg:p-10">
      {/* Gentle background accent glows */}
      <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -left-20 -bottom-20 h-72 w-72 rounded-full bg-cyan-100/50 blur-3xl" />

      {/* Header */}
      <div className="relative z-10 flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-6">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-3.5 py-1 text-xs font-bold text-blue-700 border border-blue-200/80">
            <Sparkles className="h-3.5 w-3.5 text-blue-600" />
            <span>CÔNG CỤ PHÂN TÍCH TÀI CHÍNH • TOOL 17 ROI CALCULATOR</span>
          </div>
          <h3 className="mt-2 text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
            Ước Tính Hiệu Quả Đầu Tư Số Hóa Quản Trị Nhân Sự (ROI)
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-600 max-w-2xl leading-relaxed">
            Dựa trên mô hình tính toán hiệu quả vận hành (Chương 43 - ETEK Handbook 2026). Kéo thanh trượt để xem giá trị tiết kiệm định lượng cho doanh nghiệp của bạn.
          </p>
        </div>

        <div className="flex items-center gap-3 rounded-2xl bg-emerald-50/80 px-4 py-2.5 border border-emerald-200/80 shadow-xs">
          <Calculator className="h-6 w-6 text-emerald-600 shrink-0" />
          <div className="text-right">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Thời gian hoàn vốn</span>
            <span className="text-sm font-black text-emerald-700">Từ 2 – 4 tháng</span>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="relative z-10 mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders Input Panel */}
        <div className="lg:col-span-6 space-y-5">
          {/* Slider 1: Quy mô nhân sự */}
          <div className="rounded-2xl bg-slate-50/80 p-4 sm:p-5 border border-slate-200/80 transition-colors hover:border-blue-200">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold mb-2.5">
              <span className="text-slate-800">1. Quy mô nhân sự doanh nghiệp:</span>
              <span className="font-mono text-sm sm:text-base font-bold text-blue-700 bg-white px-3 py-1 rounded-xl border border-blue-200 shadow-xs">
                {headcount} nhân sự
              </span>
            </div>
            <input
              type="range"
              min={30}
              max={1500}
              step={10}
              value={headcount}
              onChange={(e) => setHeadcount(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-medium mt-1.5">
              <span>30 NV (SMB)</span>
              <span>300 NV (Mid-market)</span>
              <span>1.500+ NV (Enterprise)</span>
            </div>
          </div>

          {/* Slider 2: Thời gian xử lý thủ công */}
          <div className="rounded-2xl bg-slate-50/80 p-4 sm:p-5 border border-slate-200/80 transition-colors hover:border-blue-200">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold mb-2.5">
              <span className="text-slate-800">2. Giờ HR làm thủ công/tháng (công, lương, đơn):</span>
              <span className="font-mono text-sm sm:text-base font-bold text-blue-700 bg-white px-3 py-1 rounded-xl border border-blue-200 shadow-xs">
                {manualHours} giờ / tháng
              </span>
            </div>
            <input
              type="range"
              min={15}
              max={120}
              step={5}
              value={manualHours}
              onChange={(e) => setManualHours(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-medium mt-1.5">
              <span>15 giờ (Cơ bản)</span>
              <span>45 giờ (Phổ biến)</span>
              <span>120 giờ (Nhiều ca kíp)</span>
            </div>
          </div>

          {/* Slider 3: Mức chi phí nhân sự trung bình */}
          <div className="rounded-2xl bg-slate-50/80 p-4 sm:p-5 border border-slate-200/80 transition-colors hover:border-blue-200">
            <div className="flex items-center justify-between text-xs sm:text-sm font-bold mb-2.5">
              <span className="text-slate-800">3. Chi phí giờ công nhân sự HR (Loaded Cost):</span>
              <span className="font-mono text-sm sm:text-base font-bold text-blue-700 bg-white px-3 py-1 rounded-xl border border-blue-200 shadow-xs">
                {formatPrice(hourlyRate)} / giờ
              </span>
            </div>
            <input
              type="range"
              min={50000}
              max={200000}
              step={5000}
              value={hourlyRate}
              onChange={(e) => setHourlyRate(Number(e.target.value))}
              className="w-full h-2.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-medium mt-1.5">
              <span>50.000 đ/h</span>
              <span>100.000 đ/h</span>
              <span>200.000 đ/h</span>
            </div>
          </div>
        </div>

        {/* Output Metrics Panel */}
        <div className="lg:col-span-6">
          <div className="rounded-3xl bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 p-6 sm:p-8 text-white shadow-xl shadow-blue-500/20">
            <span className="text-xs uppercase font-extrabold tracking-wider text-cyan-200">
              Tổng Giá Trị Tiết Kiệm Dự Kiến / Năm
            </span>
            <div className="mt-2 flex items-baseline gap-2">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white font-mono tracking-tight">
                {formatPrice(totalSavingsYearly)}
              </span>
              <span className="text-xs sm:text-sm text-blue-100 font-semibold">/ năm</span>
            </div>

            {/* Sub Metrics Grid */}
            <div className="mt-6 grid grid-cols-2 gap-3.5">
              <div className="rounded-2xl bg-white/15 p-3.5 sm:p-4 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-xs text-blue-100 font-semibold mb-1">
                  <Clock className="h-4 w-4 text-cyan-300 shrink-0" />
                  <span>Giải phóng giờ công</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono">
                  {savedHoursYearly} <span className="text-xs font-normal text-blue-200">giờ/năm</span>
                </div>
                <p className="text-[11px] text-blue-200 mt-0.5">Tiết kiệm ~{savedHoursMonthly}h mỗi kỳ lương</p>
              </div>

              <div className="rounded-2xl bg-white/15 p-3.5 sm:p-4 border border-white/20 backdrop-blur-sm">
                <div className="flex items-center gap-1.5 text-xs text-blue-100 font-semibold mb-1">
                  <TrendingUp className="h-4 w-4 text-emerald-300 shrink-0" />
                  <span>Tránh sai sót & phạt</span>
                </div>
                <div className="text-xl sm:text-2xl font-black text-white font-mono">
                  {formatPrice(indirectErrorSavingsYearly)}
                </div>
                <p className="text-[11px] text-blue-200 mt-0.5">Triệt tiêu rủi ro tranh chấp</p>
              </div>
            </div>

            {/* Key Outcomes List */}
            <div className="mt-5 space-y-2 border-t border-white/20 pt-4 text-xs text-blue-50">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-300 shrink-0" />
                <span>Rút ngắn thời gian chốt bảng lương từ <strong>5 ngày xuống 2 giờ</strong></span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-300 shrink-0" />
                <span>Số hóa 100% phiếu lương điện tử (Payslip) gửi bảo mật tới nhân viên</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-300 shrink-0" />
                <span>Tuân thủ 100% Luật BHXH 2024 & Thuế TNCN áp dụng từ 2026</span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="mt-6">
              <button
                type="button"
                onClick={onConsultClick}
                className="w-full flex items-center justify-center gap-2 rounded-2xl bg-white px-5 py-3.5 text-sm font-bold text-blue-700 shadow-md transition-all hover:bg-blue-50 hover:shadow-lg active:scale-[0.98]"
              >
                <span>Nhận Đề Xuất Giải Pháp & Báo Cáo ROI Cho Doanh Nghiệp</span>
                <ArrowRight className="h-4 w-4 text-blue-600" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
