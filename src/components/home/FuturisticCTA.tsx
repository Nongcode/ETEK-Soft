"use client";

import { useState } from "react";
import { Phone, ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Clock } from "lucide-react";

export default function FuturisticCTA() {
  const [phone, setPhone] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!phone) return;
    setSubmitted(true);
  }

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-28">
      <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Main Radiant CTA Card */}
        <div className="relative rounded-3xl bg-gradient-to-br from-blue-700 via-blue-600 to-cyan-600 p-8 sm:p-12 lg:p-16 text-center text-white shadow-[0_20px_60px_rgba(37,99,235,0.25)] overflow-hidden">

          {/* Subtle Background Rings */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full border border-white/10" />

          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-bold uppercase tracking-[0.16em] text-white backdrop-blur-md mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            SẴN SÀNG CHUYỂN ĐỔI SỐ HÔM NAY
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
            Nâng Tầm Doanh Nghiệp Cùng{" "}
            <span className="text-cyan-200">
              Hạ Tầng Phần Mềm Đỉnh Cao
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-blue-100 leading-relaxed">
            Nhận tư vấn giải pháp nhân sự 4.0 và bảng báo giá bản quyền Microsoft chính hãng với mức chiết khấu ưu đãi nhất cho doanh nghiệp của bạn.
          </p>

          {/* Quick Lead Phone Capture */}
          <div className="mt-9 max-w-md mx-auto">
            {submitted ? (
              <div className="rounded-2xl border border-white/30 bg-white/20 p-5 text-center backdrop-blur-md">
                <CheckCircle2 className="mx-auto h-8 w-8 text-white mb-2" />
                <p className="text-sm font-bold text-white">Yêu cầu đã được tiếp nhận!</p>
                <p className="text-xs text-blue-100 mt-1">
                  Đội ngũ kỹ sư ETEK sẽ gọi lại cho bạn theo số <strong className="text-white underline">{phone}</strong> trong 15 phút.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2.5">
                <input
                  type="tel"
                  required
                  placeholder="Nhập số điện thoại của bạn..."
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="flex-1 rounded-full border border-white/30 bg-white px-5 py-3.5 text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-white shadow-inner"
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-900 px-7 py-3.5 text-sm font-bold text-white shadow-md transition-all duration-200 hover:bg-black hover:scale-105 active:scale-95"
                >
                  <span>Gọi Lại Tôi</span>
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          {/* Direct Hotline & Guarantees */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 pt-8 border-t border-white/15 text-xs sm:text-sm text-blue-100 font-medium">
            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white">
                <Phone className="h-4 w-4" />
              </span>
              <span>Hotline 24/7: <strong className="text-white">0969 633 163</strong></span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white">
                <ShieldCheck className="h-4 w-4" />
              </span>
              <span>100% License Chính Hãng • CO/CQ Đầy Đủ</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 text-white">
                <Clock className="h-4 w-4" />
              </span>
              <span>Kích Hoạt Nhanh Dưới 15 Phút</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
