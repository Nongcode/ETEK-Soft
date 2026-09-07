"use client";

import Link from "next/link";
import { ArrowRight, Zap } from "lucide-react";
import AuroraBackground from "@/components/ui/AuroraBackground";
import HeroConsole from "@/components/home/HeroConsole";

/**
 * Khối mở đầu trang chủ.
 *
 * Lưu ý về tầng lớp: <section> có `isolate` để tạo stacking context riêng.
 * Nếu thiếu nó, các lớp trang trí `-z-10` sẽ rơi ra phía sau nền của chính
 * section và biến mất hoàn toàn — đó là lý do nền gradient từng "mất tích".
 * Nền do <AuroraBackground /> vẽ ở z-0, nội dung nằm ở z-10.
 */
export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden pt-8 pb-16 sm:pt-12 sm:pb-24 lg:pt-14 lg:pb-28">
      {/* Nền gradient chuyển động + bong bóng — định nghĩa .aurora trong globals.css */}
      <AuroraBackground intensity={1} bubbles={16} />

      {/* Khối trang trí bay lơ lửng, nằm trên nền nhưng dưới nội dung */}
      <span className="pointer-events-none absolute left-[9%] top-24 hidden h-7 w-7 rotate-12 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-500 opacity-50 shadow-lg animate-balloon lg:block" />
      <span className="pointer-events-none absolute right-[11%] top-40 hidden h-9 w-9 -rotate-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-cyan-400 opacity-40 shadow-lg animate-balloon-slow lg:block" />
      <span className="pointer-events-none absolute bottom-40 left-[6%] hidden h-6 w-6 rotate-45 rounded-lg bg-gradient-to-tr from-cyan-400 to-teal-300 opacity-50 shadow-md animate-balloon-reverse lg:block" />
      <span className="pointer-events-none absolute bottom-52 right-[8%] hidden h-8 w-8 rotate-6 rounded-xl bg-gradient-to-tr from-blue-400 to-indigo-500 opacity-35 shadow-lg animate-balloon lg:block" />

      {/* hero-enter: các khối con hiện lần lượt ngay khi tải trang, không chờ cuộn */}
      <div className="hero-enter relative z-10 mx-auto max-w-6xl px-4 text-center sm:px-6 lg:px-8">
        {/* 1. Nhãn chuyên mục */}
        <div style={{ "--enter-delay": "60ms" } as React.CSSProperties}>
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/90 px-4 py-1.5 shadow-sm">
            <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-ping" />
            <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-blue-800 sm:text-xs">
              Hệ sinh thái chuyển đổi số &amp; bản quyền chính hãng
            </span>
            <span className="hidden rounded-full bg-blue-100 px-2 py-0.5 font-mono text-[10px] font-bold text-blue-700 sm:inline-block">
              ETEK 2026
            </span>
          </span>
        </div>

        {/* 2. Tiêu đề */}
        <div className="mx-auto mt-5 max-w-4xl" style={{ "--enter-delay": "180ms" } as React.CSSProperties}>
          <h1 className="text-2xl font-extrabold uppercase leading-[1.3] tracking-tight text-slate-900 sm:text-4xl sm:leading-[1.25] lg:text-[2.75rem]">
            HỆ THỐNG QUẢN TRỊ NHÂN SỰ{" "}
            <span className="relative mx-1 inline-block">
              <span className="bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 bg-clip-text text-transparent">
                HRM 4.0
              </span>
              <span className="absolute bottom-0 left-0 right-0 h-[2.5px] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400" />
            </span>
            <br className="hidden sm:block" />
            &amp; BẢN QUYỀN DOANH NGHIỆP
          </h1>
        </div>

        {/* 3. Mô tả */}
        <p
          className="mx-auto mt-4 max-w-2xl text-xs font-medium leading-relaxed text-slate-600 sm:text-sm md:text-base"
          style={{ "--enter-delay": "300ms" } as React.CSSProperties}
        >
          Đồng hành cùng hơn 500+ doanh nghiệp trên toàn quốc: Tự động hóa chấm công AI đa chi nhánh, tính lương 3P
          chuẩn xác và phân phối 100% bản quyền phần mềm Microsoft, Windows, Server có chứng nhận CO/CQ chính hãng.
        </p>

        {/* 4. Nút hành động */}
        <div
          className="mt-7 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4"
          style={{ "--enter-delay": "420ms" } as React.CSSProperties}
        >
          <Link
            href="#solutions"
            className="group inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 px-7 py-3 text-xs font-bold text-white shadow-[0_8px_20px_rgba(37,99,235,0.25)] transition-all duration-300 hover:scale-105 hover:shadow-[0_12px_28px_rgba(37,99,235,0.35)] active:scale-95 sm:text-sm"
          >
            <span>Khám Phá Giải Pháp</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-white/20 transition-transform group-hover:translate-x-1">
              <ArrowRight className="h-3 w-3" />
            </span>
          </Link>

          <Link
            href="/tu-van"
            className="group inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-6 py-3 text-xs font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:border-blue-300 hover:bg-blue-50/50 hover:text-blue-600 active:scale-95 sm:text-sm"
          >
            <Zap className="h-4 w-4 text-cyan-600 transition-transform group-hover:scale-110" />
            <span>Nhận Báo Giá Tức Thì</span>
          </Link>
        </div>

        {/* 5. Bảng điều khiển 3D */}
        <div style={{ "--enter-delay": "560ms" } as React.CSSProperties}>
          <HeroConsole />
        </div>
      </div>
    </section>
  );
}
