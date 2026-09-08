"use client";

import { FormEvent, useState } from "react";
import Image from "next/image";
import {
  Bot,
  Check,
  CheckCircle2,
  Mail,
  Send,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

const DOMAIN_SUGGESTIONS = [
  "@gmail.com",
  "@fpt.vn",
  "@viettel.vn",
  "@vng.com.vn",
  "@vinfast.vn",
];

export default function NewsNewsletter() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [inputFocused, setInputFocused] = useState(false);

  // Dynamic speech bubble text based on interaction state
  const getSpeechBubbleText = () => {
    if (isSubscribed) {
      return "Tuyệt vời! Đã ghi nhận email của bạn. Hẹn gặp bạn vào sáng thứ Hai nhé! 🎉";
    }
    if (inputFocused || email) {
      return "Rất tuyệt! Bạn có thể bấm chọn nhanh đuôi email bên dưới kìa 👇";
    }
    return "Xin chào! Mình là ETEK Bot 🤖. Nhập email để nhận báo cáo công nghệ mới nhất nhé!";
  };

  const handleDomainClick = (domain: string) => {
    if (!email) {
      setEmail(`ten.ban${domain}`);
      return;
    }
    if (email.includes("@")) {
      const prefix = email.split("@")[0];
      setEmail(`${prefix}${domain}`);
    } else {
      setEmail(`${email}${domain}`);
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setIsSubscribed(true);
    setTimeout(() => {
      setEmail("");
    }, 5000);
  };

  return (
    <section className="py-12 sm:py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div
          data-reveal="scale"
          className="relative overflow-hidden rounded-[3rem] bg-gradient-to-br from-[#080d1e] via-[#0d1633] to-[#080d1e] p-8 sm:p-12 lg:p-14 text-white shadow-2xl border border-cyan-500/30 backdrop-blur-xl"
        >
          {/* Subtle Cyber Grid & Ambient Ambient Glows */}
          <div className="pointer-events-none absolute -top-32 right-1/4 h-[450px] w-[450px] rounded-full bg-blue-600/20 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 left-10 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
          <div className="pointer-events-none absolute inset-0 opacity-[0.04] bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: 3D AI Robot Companion & Speech Bubble (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-center text-center lg:items-start lg:text-left">
              
              {/* Interactive Speech Bubble */}
              <div className="relative mb-6 max-w-sm rounded-2xl border border-cyan-400/40 bg-slate-900/90 p-4 text-xs sm:text-sm font-medium text-cyan-200 shadow-lg shadow-cyan-500/15 backdrop-blur-md animate-fade-up">
                <p className="leading-relaxed">{getSpeechBubbleText()}</p>
                {/* Little speech tail pointing down */}
                <div className="absolute -bottom-2 left-10 h-4 w-4 rotate-45 border-b border-r border-cyan-400/40 bg-slate-900/90" />
              </div>

              {/* 3D AI Robot Mascot Image with Floating Animation */}
              <div className="relative h-60 w-60 sm:h-72 sm:w-72">
                <div className="relative h-full w-full animate-scroll-active animate-float">
                  <Image
                    src="/images/ai_robot_mascot.jpg"
                    alt="ETEK AI Assistant Robot"
                    fill
                    sizes="288px"
                    className="object-cover rounded-3xl shadow-2xl border border-cyan-400/30"
                  />
                  {/* Subtle outer glow ring */}
                  <div className="absolute inset-0 rounded-3xl ring-2 ring-cyan-400/30 shadow-[0_0_40px_rgba(6,182,212,0.3)] pointer-events-none" />
                </div>

                {/* Holographic glowing base pedestal */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 h-8 w-44 rounded-full bg-cyan-400/25 blur-md animate-scroll-active animate-pulse-glow" />
              </div>

              <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-cyan-950/60 border border-cyan-500/30 px-3 py-1 font-mono text-[11px] text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-ping" />
                <span>ETEK AI TELEMETRY AGENT v2.6</span>
              </div>
            </div>

            {/* Right Column: Smart Subscription Form & 1-Click Domain Autocomplete (7 cols) */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-500/20 border border-blue-400/30 px-3.5 py-1 text-xs font-mono font-bold text-cyan-300 mb-4">
                <Sparkles className="h-3.5 w-3.5 text-cyan-400" />
                BẢN TIN CÔNG NGHỆ &amp; BẢN QUYỀN
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight uppercase leading-tight text-white">
                NHẬN BẢN TIN{" "}
                <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400 bg-clip-text text-transparent">
                  CHUYỂN ĐỔI SỐ DOANH NGHIỆP
                </span>
              </h2>

              <p className="mt-3 text-xs sm:text-sm text-slate-300 leading-relaxed font-normal max-w-xl">
                Cập nhật chính sách cấp phép Microsoft mới nhất, cảnh báo lỗ hổng an ninh mạng khẩn cấp và cẩm nang số hóa chấm công FaceID - tính lương 3P gửi định kỳ mỗi sáng thứ Hai.
              </p>

              {/* Interactive Form Card */}
              <div className="mt-6 rounded-3xl bg-white/[0.07] p-6 sm:p-7 backdrop-blur-xl border border-white/15 shadow-xl">
                {isSubscribed ? (
                  <div className="text-center py-6 animate-fade-up">
                    <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-500 text-white mb-4 shadow-lg shadow-emerald-500/30">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <span className="rounded-full bg-emerald-950/80 border border-emerald-500/40 px-3.5 py-1 font-mono text-xs font-bold text-emerald-300">
                      ĐÃ KÍCH HOẠT ĐĂNG KÝ
                    </span>
                    <h3 className="mt-3 text-lg sm:text-xl font-bold text-white">
                      Cảm Ơn Bạn Đã Tham Gia!
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 mt-1 max-w-sm mx-auto">
                      Bản tin Chuyển Đổi Số đầu tiên sẽ được gửi đến hòm thư của bạn vào 8h00 sáng thứ Hai tới.
                    </p>
                    <button
                      type="button"
                      onClick={() => setIsSubscribed(false)}
                      className="mt-5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 px-5 py-2 text-xs font-bold text-white transition-colors cursor-pointer"
                    >
                      Đăng ký email khác
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-1.5">
                      <label className="block text-xs font-bold text-slate-200">
                        Nhập email công ty để kết nối:
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-cyan-400" />
                        <input
                          type="email"
                          required
                          value={email}
                          onFocus={() => setInputFocused(true)}
                          onBlur={() => setInputFocused(false)}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="ten.ban@congty.vn"
                          className="w-full rounded-2xl border border-white/20 bg-slate-900/90 pl-11 pr-4 py-3.5 text-xs sm:text-sm text-white placeholder:text-slate-400 focus:border-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all font-medium"
                        />
                      </div>
                    </div>

                    {/* 1-Click Domain Suggestion Chips */}
                    <div>
                      <p className="text-[11px] font-bold text-slate-400 mb-1.5 font-mono">
                        Chọn nhanh đuôi email:
                      </p>
                      <div className="flex flex-wrap items-center gap-1.5">
                        {DOMAIN_SUGGESTIONS.map((domain) => (
                          <button
                            key={domain}
                            type="button"
                            onClick={() => handleDomainClick(domain)}
                            className="rounded-full bg-white/10 hover:bg-cyan-500/20 border border-white/15 hover:border-cyan-400/50 px-3 py-1 text-xs font-mono text-cyan-200 hover:text-white transition-all cursor-pointer"
                          >
                            {domain}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 px-6 py-4 text-xs sm:text-sm font-bold text-white shadow-lg shadow-cyan-500/25 hover:shadow-xl hover:shadow-cyan-500/40 hover:scale-[1.01] active:scale-95 transition-all duration-300 cursor-pointer"
                    >
                      <span>Đăng Ký Nhận Bản Tin Miễn Phí</span>
                      <Send className="h-4 w-4" />
                    </button>

                    {/* Guarantees */}
                    <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                      <span className="inline-flex items-center gap-1">
                        <ShieldCheck className="h-3.5 w-3.5 text-cyan-400" />
                        Cam kết không gửi thư rác
                      </span>
                      <span>Hơn 2,500 CTO &amp; HRD theo dõi</span>
                    </div>
                  </form>
                )}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
