"use client";

import Link from "next/link";
import { Headphones, Mail, PhoneCall, ShieldCheck, Sparkles, Clock, ArrowUpRight } from "lucide-react";
import AuroraBackground from "@/components/ui/AuroraBackground";
import Breadcrumb from "@/components/layout/Breadcrumb";

const fastChannels = [
  {
    icon: PhoneCall,
    badge: "Hotline VIP 24/7",
    title: "1900 2026",
    subtitle: "098.338.8196 (Kỹ sư trực)",
    desc: "Tiếp nhận cuộc gọi tức thì, tư vấn báo giá và kích hoạt license khẩn cấp dưới 15 phút.",
    href: "tel:19002026",
    actionLabel: "Gọi ngay",
    accent: "from-blue-600 to-cyan-500",
    glow: "rgba(37,99,235,0.15)",
  },
  {
    icon: Mail,
    badge: "Phòng Giải Pháp & Bản Quyền",
    title: "sales@etek-soft.vn",
    subtitle: "Phản hồi báo giá trong 30 phút",
    desc: "Gửi yêu cầu dự toán, hồ sơ năng lực và yêu cầu demo phần mềm trực tiếp tại văn phòng doanh nghiệp.",
    href: "mailto:sales@etek-soft.vn",
    actionLabel: "Gửi Email",
    accent: "from-indigo-600 to-blue-500",
    glow: "rgba(99,102,241,0.15)",
  },
  {
    icon: Headphones,
    badge: "Trung Tâm Hỗ Trợ Kỹ Thuật",
    title: "support@etek-soft.vn",
    subtitle: "Trực ca 24/7/365",
    desc: "Xử lý sự cố phần mềm, hướng dẫn cài đặt từ xa qua UltraViewer / AnyDesk và bảo trì định kỳ.",
    href: "mailto:support@etek-soft.vn",
    actionLabel: "Yêu cầu hỗ trợ",
    accent: "from-cyan-600 to-teal-500",
    glow: "rgba(6,182,212,0.15)",
  },
];

export default function ContactHero() {
  return (
    <section className="relative isolate overflow-hidden pt-4 pb-16 sm:pb-20 lg:pb-24 border-b border-slate-200/80">
      {/* Background Aurora Effect */}
      <AuroraBackground intensity={0.8} bubbles={12} />

      {/* Floating decorative ambient blobs */}
      <span className="pointer-events-none absolute left-[8%] top-28 hidden h-8 w-8 rotate-12 rounded-2xl bg-gradient-to-tr from-cyan-400 to-blue-500 opacity-40 shadow-lg animate-balloon lg:block" />
      <span className="pointer-events-none absolute right-[10%] top-36 hidden h-7 w-7 -rotate-12 rounded-xl bg-gradient-to-tr from-blue-500 to-indigo-500 opacity-35 shadow-lg animate-balloon-slow lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ label: "Liên hệ" }]} />

        {/* Hero Header Content */}
        <div className="mt-8 text-center max-w-3xl mx-auto" data-reveal="fade">
          {/* Live Online Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/90 bg-white/90 px-4 py-1.5 shadow-sm backdrop-blur-md">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500" />
            </span>
            <span className="text-xs font-bold text-slate-800 tracking-wide">
              Kỹ sư tư vấn trực tuyến: Sẵn sàng kết nối (&lt; 5 phút)
            </span>
            <span className="hidden sm:inline-block rounded-full bg-blue-100 px-2 py-0.5 text-[10px] font-extrabold text-blue-700">
              SLA 2026
            </span>
          </div>

          <h1 className="mt-5 text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.25] uppercase">
            KẾT NỐI VỚI ĐỘI NGŨ{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-500 bg-clip-text text-transparent">
              CHUYÊN GIA ETEK-SOFT
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed font-normal">
            Chúng tôi luôn sẵn sàng lắng nghe bài toán quản trị và hạ tầng phần mềm của bạn. Khảo sát thực tế miễn phí,
            tư vấn bản quyền Microsoft chính hãng và demo hệ thống HRM 4.0 trực tiếp.
          </p>
        </div>

        {/* 3 Fast-Action Contact Cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6" data-reveal-group data-reveal-step="120">
          {fastChannels.map((channel, idx) => {
            const Icon = channel.icon;
            return (
              <a
                key={idx}
                href={channel.href}
                data-reveal
                className="group relative flex flex-col justify-between rounded-[2rem] border border-slate-200/90 bg-white/95 p-6 sm:p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:border-blue-300 overflow-hidden"
              >
                {/* Subtle top gradient bar */}
                <div
                  className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${channel.accent} opacity-80 group-hover:h-1.5 transition-all`}
                />

                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span
                      className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${channel.accent} text-white shadow-md transition-transform duration-300 group-hover:scale-110`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="rounded-full bg-slate-100 px-3 py-1 text-[11px] font-bold text-slate-700 font-mono">
                      {channel.badge}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight group-hover:text-blue-600 transition-colors">
                    {channel.title}
                  </h3>
                  <p className="mt-1 text-xs sm:text-sm font-bold text-blue-600">{channel.subtitle}</p>
                  <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">{channel.desc}</p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  <span>{channel.actionLabel}</span>
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
