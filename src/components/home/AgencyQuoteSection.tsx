"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Send,
  CheckCircle2,
  PhoneCall,
  Mail,
  Building2,
} from "lucide-react";

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
    <section className="relative overflow-hidden bg-slate-50 py-12 sm:py-16 lg:py-20 border-t border-b border-slate-200/90 shadow-[0_20px_60px_rgba(15,23,42,0.04)]">
      {/* Full-width Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/home-2.png"
          alt="Tư vấn & Báo giá giải pháp phần mềm ETEK"
          fill
          priority
          className="object-cover object-left"
        />
        {/* Soft protective gradient wash on right side so form is 100% crisp and readable */}
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[58%] xl:w-[52%] bg-gradient-to-r from-transparent via-white/80 to-white pointer-events-none z-[1]" />
        {/* Mobile soft background overlay */}
        <div className="absolute inset-0 bg-white/85 lg:hidden pointer-events-none z-[1]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 mx-auto w-full max-w-[1600px] 2xl:max-w-[1720px] px-4 sm:px-6 lg:px-10 xl:px-14">
        
        {/* Floating Handwriting Quote from Consultant: "Chúng tôi luôn sẵn sàng hỗ trợ bạn!" */}
        <div className="hidden lg:block absolute left-[26%] xl:left-[30%] 2xl:left-[33%] top-8 xl:top-12 z-20 pointer-events-none select-none">
          <div className="relative inline-block animate-float-handwriting">
            <p
              className="text-2xl xl:text-3xl 2xl:text-4xl font-bold text-blue-600 leading-[1.15] tracking-tight drop-shadow-sm"
              style={{ fontFamily: "'Caveat', 'Patrick Hand', cursive, sans-serif" }}
            >
              Chúng tôi luôn<br />
              sẵn sàng hỗ trợ<br />
              bạn!
            </p>
            {/* Hand-drawn curved brush underline stroke underneath "bạn!" */}
            <svg
              className="w-36 xl:w-44 2xl:w-52 h-4 text-blue-600 mt-1 ml-1 overflow-visible"
              viewBox="0 0 180 14"
              fill="none"
            >
              <path
                d="M 4 8 C 50 3, 130 3, 176 9 C 130 5, 50 5, 4 8 Z"
                fill="currentColor"
              />
            </svg>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          
          {/* Left Spacer: Keeps the consultant and orbiting communication badges completely unobstructed */}
          <div className="hidden lg:block lg:flex-1 pointer-events-none" />

          {/* Right Card: Contact form pushed to the right corner */}
          <div className="w-full lg:max-w-[580px] xl:max-w-[640px] 2xl:max-w-[680px] shrink-0 text-left lg:ml-auto relative z-10">
            
            {/* Floating "Liên hệ ngay" with hand-drawn arrow at the bottom corner */}
            <div className="hidden lg:block absolute bottom-12 xl:bottom-14 -left-16 xl:-left-24 2xl:-left-28 z-20 pointer-events-none select-none">
              <div className="inline-flex items-center gap-2 animate-arrow-nudge -rotate-3">
                <span
                  className="text-2xl xl:text-3xl font-bold text-blue-600 tracking-tight drop-shadow-sm whitespace-nowrap"
                  style={{ fontFamily: "'Caveat', 'Patrick Hand', cursive, sans-serif" }}
                >
                  Liên hệ ngay
                </span>
                {/* Hand-drawn curved swooping arrow pointing up-right towards the button/form */}
                <svg
                  className="w-16 xl:w-20 h-10 text-blue-600 overflow-visible"
                  viewBox="0 0 80 40"
                  fill="none"
                >
                  {/* Swooping curved arrow arc */}
                  <path
                    d="M 4 22 C 24 36, 52 32, 72 14"
                    stroke="currentColor"
                    strokeWidth="3.4"
                    strokeLinecap="round"
                    fill="none"
                  />
                  {/* Arrowhead */}
                  <path
                    d="M 56 12 L 72 14 L 68 28"
                    stroke="currentColor"
                    strokeWidth="3.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </svg>
              </div>
            </div>

            {/* Mobile Header: Visible on smaller screens (< lg) */}
            <div className="lg:hidden mb-4 text-center">
              <div className="animate-float-handwriting inline-block">
                <p
                  className="text-xl font-bold text-blue-600 leading-tight"
                  style={{ fontFamily: "'Caveat', 'Patrick Hand', cursive, sans-serif" }}
                >
                  Chúng tôi luôn sẵn sàng hỗ trợ bạn!
                </p>
              </div>
            </div>

            <div className="rounded-[2.5rem] bg-white/95 backdrop-blur-md border border-slate-200/90 p-6 sm:p-8 lg:p-9 shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
              
              {/* Header */}
              <span className="inline-block text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700 bg-blue-100/90 px-3.5 py-1.5 rounded-full font-mono border border-blue-200/80 shadow-xs">
                KẾT NỐI CHUYÊN GIA ETEK
              </span>
              <h3 className="mt-3 text-xl sm:text-2xl lg:text-3xl font-black text-slate-900 uppercase tracking-tight leading-snug">
                NHẬN BÁO GIÁ & TƯ VẤN KIẾN TRÚC PHẦN MỀM
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Điền thông tin quy mô doanh nghiệp để nhận ngay dự toán chi phí chi tiết và bản demo phần mềm phù hợp nhất trong vòng 15 phút.
              </p>

              {submitted ? (
                <div className="my-6 rounded-2xl bg-emerald-50 border border-emerald-200 p-8 text-center animate-fade-up">
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 mb-3">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <h4 className="text-xl font-bold text-emerald-950">Gửi Yêu Cầu Thành Công!</h4>
                  <p className="text-xs sm:text-sm text-emerald-800 mt-2">
                    Kỹ sư trưởng ETEK sẽ liên hệ lại với bạn trong vòng 15 phút để cung cấp bảng dự toán chi tiết.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Họ và Tên Doanh Nghiệp *
                      </label>
                      <input
                        type="text"
                        required
                        suppressHydrationWarning
                        placeholder="Nguyễn Văn A - Công ty ABC"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className="w-full h-10 rounded-xl bg-slate-50 px-3.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-all shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Số Điện Thoại / Zalo *
                      </label>
                      <input
                        type="tel"
                        required
                        suppressHydrationWarning
                        placeholder="098.xxx.xxxx"
                        value={formState.phone}
                        onChange={(e) => setFormState({ ...formState, phone: e.target.value })}
                        className="w-full h-10 rounded-xl bg-slate-50 px-3.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-all shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Email Nhận Báo Giá *
                      </label>
                      <input
                        type="email"
                        required
                        suppressHydrationWarning
                        placeholder="contact@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className="w-full h-10 rounded-xl bg-slate-50 px-3.5 text-xs font-medium text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-all shadow-xs"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-slate-700 mb-1">
                        Quy Mô Nhân Sự
                      </label>
                      <select
                        value={formState.employees}
                        suppressHydrationWarning
                        onChange={(e) => setFormState({ ...formState, employees: e.target.value })}
                        className="w-full h-10 rounded-xl bg-slate-50 px-3 text-xs font-medium text-slate-900 border border-slate-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-all shadow-xs"
                      >
                        <option value="under-30">Dưới 30 nhân sự (SMB)</option>
                        <option value="30-100">Từ 30 - 100 nhân sự</option>
                        <option value="100-300">Từ 100 - 300 nhân sự</option>
                        <option value="over-300">Trên 300 nhân sự (Tập đoàn / Nhà máy)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Phân Hệ Cần Quan Tâm
                    </label>
                    <select
                      value={formState.solution}
                      suppressHydrationWarning
                      onChange={(e) => setFormState({ ...formState, solution: e.target.value })}
                      className="w-full h-10 rounded-xl bg-slate-50 px-3 text-xs font-medium text-slate-900 border border-slate-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-all shadow-xs"
                    >
                      <option value="hrm">Phần mềm quản trị nhân sự & Chấm công HRM 4.0</option>
                      <option value="license">Phần mềm bản quyền Microsoft 365 / Windows / Server</option>
                      <option value="sgis">Giải pháp quản lý tổng thể bệnh viện SGIS</option>
                      <option value="all">Tư vấn gói giải pháp tổng thể Enterprise</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-[11px] font-bold text-slate-700 mb-1">
                      Yêu Cầu Cụ Thể (Tùy chọn)
                    </label>
                    <textarea
                      rows={2}
                      suppressHydrationWarning
                      placeholder="Mô tả số lượng máy chấm công hiện có hoặc số lượng license cần cấp phép..."
                      value={formState.note}
                      onChange={(e) => setFormState({ ...formState, note: e.target.value })}
                      className="w-full rounded-xl bg-slate-50 p-3 text-xs font-medium text-slate-900 placeholder:text-slate-400 border border-slate-200 focus:border-blue-500 focus:bg-white focus:outline-none transition-all resize-none shadow-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    suppressHydrationWarning
                    className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-500/25 transition-all hover:scale-[1.01] hover:shadow-xl hover:shadow-blue-500/35 active:scale-98 cursor-pointer"
                  >
                    <span>Gửi Yêu Cầu Dự Toán Ngay</span>
                    <Send className="h-3.5 w-3.5" />
                  </button>
                </form>
              )}

              {/* Quick Contact Hotline & Email */}
              <div className="mt-5 pt-4 border-t border-slate-200/80 grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600 shrink-0">
                    <PhoneCall className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-medium">Hotline 24/7</p>
                    <a href="tel:19002026" className="font-bold text-slate-900 hover:text-blue-600 transition-colors">
                      1900 2026
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600 shrink-0">
                    <Mail className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-medium">Email dự toán</p>
                    <a href="mailto:sales@etek-soft.vn" className="font-bold text-slate-900 hover:text-blue-600 transition-colors truncate block">
                      sales@etek-soft.vn
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-50 text-blue-600 shrink-0">
                    <Building2 className="h-3.5 w-3.5" />
                  </div>
                  <div>
                    <p className="text-[10px] text-slate-500 font-medium">Trụ sở chính</p>
                    <p className="font-bold text-slate-900 truncate">189 Phan Trọng Tuệ, HN</p>
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
