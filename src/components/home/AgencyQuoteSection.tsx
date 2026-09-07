"use client";

import { useState } from "react";
import {
  Send,
  CheckCircle2,
  PhoneCall,
  Mail,
  Building2,
  Clock,
  Sparkles,
  ShieldCheck,
  Zap,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function AgencyQuoteSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    email: "",
    employees: "30-100",
    solution: "hrm",
    note: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormState({
        name: "",
        phone: "",
        email: "",
        employees: "30-100",
        solution: "hrm",
        note: "",
      });
    }, 4000);
  };

  return (
    <section className="relative overflow-hidden bg-miko-beige py-16 sm:py-24 border-t border-b border-miko">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* Mikotech Style Agency Quote Registration Form */}
        <div className="rounded-[2.5rem] bg-white border border-miko p-6 sm:p-10 lg:p-12 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Direct Consultation Info */}
            <div className="lg:col-span-5 text-left" data-reveal="left">
              <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-cyan-600 font-mono">
                KẾT NỐI CHUYÊN GIA ETEK
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900 uppercase leading-snug">
                NHẬN BÁO GIÁ & TƯ VẤN KIẾN TRÚC PHẦN MỀM
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Điền thông tin quy mô doanh nghiệp để nhận ngay dự toán chi phí chi tiết và bản demo phần mềm phù hợp nhất trong vòng 15 phút.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-miko-sand text-blue-600 shrink-0">
                    <PhoneCall className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Hotline tư vấn 24/7</p>
                    <a href="tel:19002026" className="text-sm sm:text-base font-extrabold text-slate-900 hover:text-blue-600 transition-colors">
                      1900 2026 / 098.338.8196
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-miko-sand text-blue-600 shrink-0">
                    <Mail className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Email tiếp nhận dự toán</p>
                    <a href="mailto:sales@etek-soft.vn" className="text-sm sm:text-base font-extrabold text-slate-900 hover:text-blue-600 transition-colors">
                      sales@etek-soft.vn
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3.5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-miko-sand text-blue-600 shrink-0">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 font-medium">Trụ sở chính ETEK</p>
                    <p className="text-xs font-bold text-slate-900">
                      189 Phan Trọng Tuệ, Thanh Trì, Hà Nội
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Sleek Form with Mikotech Beige Input styling */}
            <div className="lg:col-span-7" data-reveal="right" style={{ "--reveal-delay": "140ms" } as React.CSSProperties}>
              {submitted ? (
                <div className="rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center animate-fade-up">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-950">Gửi Yêu Cầu Thành Công!</h4>
                  <p className="text-xs sm:text-sm text-emerald-800 mt-2">
                    Kỹ sư trưởng ETEK sẽ liên hệ lại với bạn trong vòng 15 phút để cung cấp bảng dự toán chi tiết.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-3.5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Họ và Tên Doanh Nghiệp *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Nguyễn Văn A - Công ty ABC"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full h-10 sm:h-11 rounded-xl bg-miko-sand px-3.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 border border-transparent focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Số Điện Thoại / Zalo *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="098.xxx.xxxx"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full h-10 sm:h-11 rounded-xl bg-miko-sand px-3.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 border border-transparent focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Email Nhận Báo Giá *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="contact@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full h-10 sm:h-11 rounded-xl bg-miko-sand px-3.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 border border-transparent focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Quy Mô Nhân Sự
                      </label>
                      <select
                        value={formState.employees}
                        onChange={(e) => setFormState({ ...formState, employees: e.target.value })}
                        className="w-full h-10 sm:h-11 rounded-xl bg-miko-sand px-3 text-xs font-medium text-slate-900 border border-transparent focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                      >
                        <option value="under-30">Dưới 30 nhân sự (SMB)</option>
                        <option value="30-100">Từ 30 - 100 nhân sự</option>
                        <option value="100-300">Từ 100 - 300 nhân sự</option>
                        <option value="over-300">Trên 300 nhân sự (Tập đoàn / Nhà máy)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Phân Hệ Cần Quan Tâm
                    </label>
                    <select
                      value={formState.solution}
                      onChange={(e) => setFormState({ ...formState, solution: e.target.value })}
                      className="w-full h-10 sm:h-11 rounded-xl bg-miko-sand px-3 text-xs font-medium text-slate-900 border border-transparent focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                    >
                      <option value="hrm">Phần mềm quản trị nhân sự & Chấm công HRM 4.0</option>
                      <option value="license">Phần mềm bản quyền Microsoft 365 / Windows / Server</option>
                      <option value="sgis">Giải pháp quản lý tổng thể bệnh viện SGIS</option>
                      <option value="all">Tư vấn gói giải pháp tổng thể Enterprise</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Yêu Cầu Cụ Thể (Tùy chọn)
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mô tả số lượng máy chấm công hiện có hoặc số lượng license cần cấp phép..."
                      value={formState.note}
                      onChange={(e) => setFormState({ ...formState, note: e.target.value })}
                      className="w-full rounded-xl bg-miko-sand p-3 text-xs font-medium text-slate-900 placeholder:text-slate-400 border border-transparent focus:border-blue-500 focus:bg-white focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 py-3 text-xs sm:text-sm font-bold text-white shadow-lg transition-all hover:scale-[1.01] hover:shadow-xl active:scale-98 cursor-pointer"
                  >
                    <span>Gửi Yêu Cầu Dự Toán Ngay</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
