"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Fingerprint, 
  Calculator, 
  KeyRound, 
  ShieldCheck, 
  ArrowUpRight, 
  CheckCircle2, 
  Cpu, 
  Sliders, 
  Clock, 
  Lock,
  TrendingUp
} from "lucide-react";

export default function TechBentoGrid() {
  const [sliderSalary, setSliderSalary] = useState(25);

  return (
    <section className="relative overflow-hidden bg-slate-50/70 py-20 sm:py-28 border-t border-slate-200/70">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-700">
            <Cpu className="h-3.5 w-3.5" />
            ĐẶC TÍNH ĐỘT PHÁ
          </div>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Nền Tảng Công Nghệ Cho Doanh Nghiệp{" "}
            <span className="bg-gradient-to-r from-blue-700 to-cyan-600 bg-clip-text text-transparent">
              Tăng Tốc
            </span>
          </h2>
          <p className="mt-3.5 text-base text-slate-600">
            Trải nghiệm các phân hệ được thiết kế với độ chuẩn xác tuyệt đối, bảo mật cấp doanh nghiệp và khả năng mở rộng cao.
          </p>
        </div>

        {/* Gapless Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 grid-flow-dense">
          
          {/* ================= CARD 1: 2 cols x 2 rows (AI Smart Attendance) ================= */}
          <div className="lg:col-span-2 lg:row-span-2 group rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-[0_4px_25px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-blue-300 hover:shadow-[0_16px_45px_rgba(37,99,235,0.08)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-100 text-blue-600">
                  <Fingerprint className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-emerald-50 px-3 py-1 font-mono text-xs font-bold text-emerald-700 border border-emerald-200">
                  REAL-TIME SYNC
                </span>
              </div>

              <h3 className="mt-5 text-2xl font-bold text-slate-900 tracking-tight">
                Đồng Bộ Chấm Công AI & Đa Điểm Tức Thì
              </h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Tự động kết nối và nạp dữ liệu từ hàng trăm máy chấm công vân tay, khuôn mặt và ứng dụng di động GPS về máy chủ tập trung chỉ sau vài mili-giây.
              </p>
            </div>

            {/* Simulated Live Attendance Stream */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
              <div className="flex items-center justify-between border-b border-slate-200 pb-2.5 text-xs">
                <span className="font-mono text-slate-600 font-medium">Thiết bị: Hikvision / ZKTeco AI</span>
                <span className="text-emerald-600 font-mono font-bold flex items-center gap-1">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-ping" />
                  Đang kết nối
                </span>
              </div>

              <div className="mt-3 space-y-2">
                {[
                  { name: "Nguyễn Văn Hưng", time: "08:14:22", dept: "Phòng Kỹ Thuật", status: "Đúng giờ" },
                  { name: "Trần Thị Mai", time: "08:15:01", dept: "Khối Văn Phòng", status: "Đúng giờ" },
                  { name: "Lê Quốc Toàn", time: "08:15:45", dept: "Ban Dự Án", status: "Đúng giờ" }
                ].map((emp, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl border border-slate-100 bg-white px-3 py-2 text-xs shadow-sm">
                    <div className="flex items-center gap-2.5">
                      <div className="h-6 w-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-[10px]">
                        {emp.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-bold text-slate-900">{emp.name}</p>
                        <p className="text-[10px] text-slate-500">{emp.dept}</p>
                      </div>
                    </div>
                    <div className="text-right font-mono">
                      <p className="text-emerald-600 font-bold">{emp.status}</p>
                      <p className="text-[10px] text-slate-400">{emp.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 flex items-center justify-between text-xs text-slate-500 pt-3 border-t border-slate-100">
              <span>Chu kỳ đồng bộ: 1.5 giây</span>
              <span className="font-mono font-bold text-blue-600">Không bỏ sót log vào/ra</span>
            </div>
          </div>

          {/* ================= CARD 2: 2 cols x 1 row (3P Automated Payroll) ================= */}
          <div className="lg:col-span-2 group rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-8 shadow-[0_4px_25px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-violet-300 hover:shadow-[0_16px_45px_rgba(168,85,247,0.08)] flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-100 text-violet-600">
                  <Calculator className="h-5 w-5" />
                </span>
                <span className="rounded-full bg-violet-50 px-3 py-1 font-mono text-xs font-bold text-violet-700 border border-violet-200">
                  CÔNG THỨC 3P DYNAMIC
                </span>
              </div>

              <h3 className="mt-4 text-xl sm:text-2xl font-bold text-slate-900 tracking-tight">
                Động Cơ Bảng Lương 3P Tự Động Hóa 100%
              </h3>
              <p className="mt-1 text-sm text-slate-600">
                Tùy biến không giới hạn công thức tính lương theo vị trí (P1), năng lực (P2) và kết quả công việc (P3).
              </p>
            </div>

            {/* Formula Slider */}
            <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50/80 p-4">
              <div className="flex items-center justify-between text-xs text-slate-700 mb-2">
                <span className="font-mono font-semibold">Mô phỏng bậc lương:</span>
                <span className="font-mono text-violet-700 font-extrabold">{sliderSalary}.000.000 đ / tháng</span>
              </div>

              <input
                type="range"
                min={10}
                max={80}
                value={sliderSalary}
                onChange={(e) => setSliderSalary(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-violet-600"
              />

              <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-slate-600">
                <span className="bg-violet-100/70 border border-violet-200 px-2 py-0.5 rounded-full text-violet-800">P1 Vị trí: {(sliderSalary * 0.4).toFixed(1)}M</span>
                <span className="bg-violet-100/70 border border-violet-200 px-2 py-0.5 rounded-full text-violet-800">P2 Năng lực: {(sliderSalary * 0.3).toFixed(1)}M</span>
                <span className="bg-violet-100/70 border border-violet-200 px-2 py-0.5 rounded-full text-violet-800">P3 Hiệu suất: {(sliderSalary * 0.3).toFixed(1)}M</span>
              </div>
            </div>
          </div>

          {/* ================= CARD 3: 1 col x 1 row (Instant ESD License) ================= */}
          <div className="lg:col-span-1 group rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_4px_25px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-emerald-300 hover:shadow-[0_16px_45px_rgba(16,185,129,0.08)] flex flex-col justify-between">
            <div>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-100 text-emerald-600">
                <KeyRound className="h-5 w-5" />
              </span>

              <h3 className="mt-4 text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Cấp Phép Số ESD & FPP Chính Hãng
              </h3>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                Giao key bản quyền Microsoft trong 15 phút, xuất hóa đơn VAT điện tử và bảo hành trọn dòng đời.
              </p>
            </div>

            <div className="mt-4 rounded-xl border border-emerald-200 bg-emerald-50/80 p-2.5 text-center font-mono text-xs font-bold text-emerald-800">
              100% Genuine Audit Ready
            </div>
          </div>

          {/* ================= CARD 4: 1 col x 1 row (Enterprise Security & SLA) ================= */}
          <div className="lg:col-span-1 group rounded-3xl border border-slate-200/90 bg-white p-6 shadow-[0_4px_25px_rgba(15,23,42,0.04)] transition-all duration-300 hover:border-amber-300 hover:shadow-[0_16px_45px_rgba(245,158,11,0.08)] flex flex-col justify-between">
            <div>
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                <ShieldCheck className="h-5 w-5" />
              </span>

              <h3 className="mt-4 text-base sm:text-lg font-bold text-slate-900 tracking-tight">
                Bảo Mật Cấp Doanh Nghiệp & SLA 24/7
              </h3>
              <p className="mt-1.5 text-xs text-slate-600 leading-relaxed">
                Mã hóa đường truyền SSL/TLS 256-bit, phân quyền chi tiết và cam kết hỗ trợ phản hồi dưới 30 phút.
              </p>
            </div>

            <div className="mt-4 rounded-xl border border-amber-200 bg-amber-50/80 p-2.5 text-center font-mono text-xs font-bold text-amber-800">
              SLA 99.9% Uptime Guarantee
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
