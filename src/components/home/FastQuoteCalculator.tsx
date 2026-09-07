"use client";

import { useState } from "react";
import Image from "next/image";
import { 
  Calculator, 
  Check, 
  Sparkles, 
  Send, 
  CheckCircle2, 
  Clock, 
  Building2,
  Phone,
  Mail,
  User
} from "lucide-react";
import { formatPrice } from "@/lib/utils";
import ScrollReveal from "@/components/ui/ScrollReveal";


interface SoftwarePlan {
  id: string;
  name: string;
  unitPrice: number;
  cycle: string;
  badge: string;
  image: string;
  features: string[];
}

const softwarePlans: SoftwarePlan[] = [
  {
    id: "m365-bus-std",
    name: "Microsoft 365 Business Standard",
    unitPrice: 2890000,
    cycle: "năm / user",
    badge: "Phổ Biến Nhất",
    image: "/legacy-media/solutions/Ph_n_m_m_Microsoft_365_Bus_Std_Retail_All_Lng_APAC_EM_SubPKL_1YR_Onln_DwnLd_NR.webp",
    features: [
      "Bộ ứng dụng Office desktop cài 5 thiết bị / user",
      "Email doanh nghiệp 50GB & lưu trữ OneDrive 1TB",
      "Họp trực tuyến Microsoft Teams bảo mật cao",
      "Kích hoạt online & bàn giao CO/CQ đầy đủ"
    ]
  },
  {
    id: "win-11-pro",
    name: "Windows 11 Pro 64-bit OEM/ESD",
    unitPrice: 3890000,
    cycle: "license vĩnh viễn",
    badge: "Doanh Nghiệp",
    image: "/legacy-media/solutions/HAV-00163.webp",
    features: [
      "Bản quyền vĩnh viễn theo máy tính doanh nghiệp",
      "Bảo mật BitLocker & mã hóa dữ liệu ổ đĩa",
      "Gia nhập miền mạng Active Directory / Azure AD",
      "Bảo hành trọn vòng đời sử dụng phần mềm"
    ]
  },
  {
    id: "office-2024",
    name: "Office Home & Business 2024",
    unitPrice: 6290000,
    cycle: "license vĩnh viễn",
    badge: "Mới Nhất 2025",
    image: "/legacy-media/solutions/EP2-06630.webp",
    features: [
      "Bản quyền vĩnh viễn Word, Excel, PowerPoint, Outlook",
      "Không phát sinh phí gia hạn hàng năm",
      "Cấp phép thương mại hợp lệ cho doanh nghiệp",
      "Tương thích hoàn hảo Windows 11 & macOS"
    ]
  },
  {
    id: "win-server",
    name: "Windows Server 2025 Standard 16-Core",
    unitPrice: 22900000,
    cycle: "hạ tầng server",
    badge: "Máy Chủ",
    image: "/legacy-media/solutions/EP2-25187.webp",
    features: [
      "Quản trị hạ tầng mạng tập trung doanh nghiệp",
      "Hỗ trợ ảo hóa 2 máy ảo Hyper-V VMs",
      "Bảo mật đa tầng chống mã độc tống tiền",
      "Đầy đủ giấy chứng nhận xuất xứ CO/CQ chính hãng"
    ]
  }
];

export default function FastQuoteCalculator() {
  const [selectedPlanId, setSelectedPlanId] = useState<string>("m365-bus-std");
  const [userCount, setUserCount] = useState<number>(15);
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", company: "" });

  const activePlan = softwarePlans.find((p) => p.id === selectedPlanId) || softwarePlans[0];
  const totalPrice = activePlan.unitPrice * userCount;
  const estimatedDiscount = userCount >= 20 ? 0.12 : userCount >= 10 ? 0.08 : userCount >= 5 ? 0.05 : 0;
  const finalPrice = totalPrice * (1 - estimatedDiscount);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden bg-light-tech py-16 sm:py-24 border-t border-slate-200/80">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-14">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-white/90 px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-blue-700 shadow-sm">
              <Calculator className="h-3.5 w-3.5 text-blue-600" />
              CÔNG CỤ DỰ TOÁN TỰ ĐỘNG
            </div>
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
              Dự Toán Bản Quyền Phần Mềm{" "}
              <span className="bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                Doanh Nghiệp
              </span>
            </h2>
            <p className="mt-3.5 text-base text-slate-600 leading-relaxed font-medium">
              Ước tính ngân sách đầu tư bản quyền Microsoft chính hãng theo số lượng nhân sự, áp dụng biểu phí chiết khấu đại lý cấp 1.
            </p>
          </div>
        </ScrollReveal>

        {/* Calculator Card Container */}
        <ScrollReveal direction="scale" delay={150}>
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-slate-200/90 bg-white/95 p-6 sm:p-10 shadow-[0_20px_60px_rgba(15,23,42,0.06)]">

          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Plan selection & Slider (7 Cols) */}
            <div className="lg:col-span-7 space-y-6">
              
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                  1. Chọn gói phần mềm bản quyền
                </label>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {softwarePlans.map((plan) => {
                    const isSelected = plan.id === selectedPlanId;
                    return (
                      <button
                        key={plan.id}
                        type="button"
                        onClick={() => setSelectedPlanId(plan.id)}
                        className={`group rounded-2xl border p-3.5 text-left transition-all duration-200 ${
                          isSelected
                            ? "border-blue-500 bg-blue-50/70 shadow-sm ring-1 ring-blue-500/30"
                            : "border-slate-200 bg-white hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-bold text-blue-700">
                            {plan.badge}
                          </span>
                          {isSelected && <Check className="h-4 w-4 text-blue-600" />}
                        </div>
                        <p className="mt-2 text-xs font-bold text-slate-900 leading-tight">
                          {plan.name}
                        </p>
                        <p className="mt-1 text-[11px] text-slate-500 font-mono">
                          {formatPrice(plan.unitPrice)} / {plan.cycle}
                        </p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Slider for User Count */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-bold uppercase tracking-wider text-slate-700">
                    2. Quy mô người dùng (Seats / Thiết bị)
                  </label>
                  <span className="rounded-xl bg-blue-600 px-3.5 py-1 font-mono text-base font-extrabold text-white shadow-sm">
                    {userCount} User
                  </span>
                </div>

                <input
                  type="range"
                  min={1}
                  max={100}
                  value={userCount}
                  onChange={(e) => setUserCount(Number(e.target.value))}
                  className="mt-5 w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
                />

                <div className="mt-3 flex items-center justify-between text-[11px] text-slate-500 font-mono">
                  <span>1 User</span>
                  <span>50 Users</span>
                  <span>100+ Users</span>
                </div>

                {estimatedDiscount > 0 && (
                  <div className="mt-4 flex items-center gap-2 rounded-xl bg-emerald-50 p-2.5 text-xs text-emerald-800 border border-emerald-200 font-semibold">
                    <Sparkles className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>Áp dụng chiết khấu doanh nghiệp: <strong>-{estimatedDiscount * 100}%</strong></span>
                  </div>
                )}
              </div>

              {/* Plan Included Features */}
              <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-5 space-y-2">
                <p className="text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
                  Quyền lợi gói bản quyền đã chọn
                </p>
                {activePlan.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                    <Check className="h-3.5 w-3.5 text-blue-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Column: Cost Summary & Lead Capture (5 Cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-blue-100 bg-gradient-to-b from-blue-50/40 via-white to-slate-50/50 p-6 sm:p-7 shadow-sm">
              
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Dự toán ngân sách ước tính
                </p>

                <div className="mt-3">
                  <span className="text-3xl sm:text-4xl font-extrabold text-blue-700 font-mono">
                    {formatPrice(finalPrice)}
                  </span>
                  {estimatedDiscount > 0 && (
                    <p className="text-xs text-slate-400 mt-1 line-through font-mono">
                      Giá gốc: {formatPrice(totalPrice)}
                    </p>
                  )}
                  <p className="text-[11px] text-slate-500 mt-1">
                    * Giá tham khảo chưa gồm VAT. Đã bao gồm hỗ trợ triển khai kỹ thuật.
                  </p>
                </div>

                <div className="mt-6 border-t border-slate-200 pt-5">
                  {submitted ? (
                    <div className="rounded-2xl border border-emerald-300 bg-emerald-50 p-6 text-center space-y-2">
                      <CheckCircle2 className="mx-auto h-10 w-10 text-emerald-600" />
                      <p className="text-sm font-bold text-slate-900">Yêu Cầu Đã Gửi Thành Công!</p>
                      <p className="text-xs text-slate-600">
                        Chuyên viên ETEK-Soft sẽ liên hệ gửi báo giá chi tiết và hồ sơ CO/CQ trong vòng 15-30 phút.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <p className="text-xs font-bold uppercase tracking-wider text-blue-700">
                        Nhận báo giá chính thức có dấu mộc
                      </p>

                      <div className="relative">
                        <User className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          required
                          placeholder="Họ và tên của bạn *"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
                        />
                      </div>

                      <div className="relative">
                        <Phone className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <input
                          type="tel"
                          required
                          placeholder="Số điện thoại liên hệ *"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
                        />
                      </div>

                      <div className="relative">
                        <Mail className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <input
                          type="email"
                          required
                          placeholder="Email nhận báo giá file PDF *"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
                        />
                      </div>

                      <div className="relative">
                        <Building2 className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                        <input
                          type="text"
                          placeholder="Tên doanh nghiệp"
                          value={formData.company}
                          onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                          className="w-full rounded-xl border border-slate-200 bg-white pl-9 pr-3.5 py-2.5 text-xs text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none"
                        />
                      </div>

                      <button
                        type="submit"
                        className="w-full mt-1.5 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-5 py-3 text-xs font-bold text-white shadow-md transition-all duration-200 hover:scale-[1.02] active:scale-95"
                      >
                        <Send className="h-3.5 w-3.5" />
                        <span>Gửi Yêu Cầu Báo Giá Ngay</span>
                      </button>
                    </form>
                  )}
                </div>
              </div>

              <div className="mt-5 flex items-center justify-between text-[11px] text-slate-500 pt-3 border-t border-slate-200">
                <span className="flex items-center gap-1 font-medium">
                  <Clock className="h-3.5 w-3.5 text-blue-600" />
                  Phản hồi sau 15 phút
                </span>
                <span className="font-bold text-slate-700">Hotline: 0969 633 163</span>
              </div>

            </div>

          </div>

        </div>
        </ScrollReveal>

      </div>
    </section>
  );
}

