"use client";

import Link from "next/link";
import {
  ArrowRight,
  ShieldCheck,
  Smartphone,
  CheckCircle2,
  Users,
  Building,
  Sparkles,
  Fingerprint,
  MapPin,
  Calendar,
  Lock,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const values = [
  {
    num: "01",
    title: "Tiết Kiệm 85% Thời Gian Tính Lương",
    desc: "Xóa bỏ hoàn toàn việc cộng công thủ công bằng file Excel rời rạc. Tự động hóa tính lương 3P, KPI, khấu trừ BHXH và thuế TNCN chính xác từng đồng.",
  },
  {
    num: "02",
    title: "100% Bản Quyền Hợp Lệ & Hóa Đơn VAT",
    desc: "Đảm bảo tuân thủ Luật Sở Hữu Trí Tuệ. Cung cấp giấy chứng nhận xuất xứ CO/CQ chính hãng từ Microsoft, Autodesk, Kaspersky đầy đủ hóa đơn đỏ hợp pháp.",
  },
  {
    num: "03",
    title: "Đồng Bộ Đa Chi Nhánh Thời Gian Thực",
    desc: "Kết nối dữ liệu chấm công từ hàng chục nhà máy, chuỗi cửa hàng và văn phòng về một máy chủ trung tâm qua đường truyền mã hóa SSL 256-bit.",
  },
  {
    num: "04",
    title: "Kỹ Sư Đồng Hành Hỗ Trợ Dưới 15 Phút",
    desc: "Cam kết SLA phản hồi kỹ thuật nhanh nhất thị trường. Hỗ trợ từ xa qua UltraView/TeamViewer hoặc kỹ sư đến tận nơi triển khai cho doanh nghiệp.",
  },
];

export default function CoreValueSection() {
  return (
    <section className="relative overflow-hidden bg-miko-beige py-16 sm:py-24 border-b border-miko">
      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        
        {/* 1. Editorial Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight uppercase leading-tight">
              SỐ HÓA DOANH NGHIỆP — LỰA CHỌN THÔNG MINH TRONG KỶ NGUYÊN MỚI
            </h2>
            <div className="mt-4 mx-auto h-1 w-20 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full" />
          </div>
        </ScrollReveal>

        {/* 2. Editorial 2-Column Insight Narrative */}
        <ScrollReveal direction="up" delay={150}>
          <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 text-sm sm:text-base text-slate-700 leading-relaxed font-normal">
            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-200/80">
              <p className="font-semibold text-slate-900 text-base sm:text-lg mb-2">
                “Quản trị nhân sự và sử dụng phần mềm bản quyền không còn là bài toán thứ yếu...”
              </p>
              <p className="text-slate-600 text-xs sm:text-sm">
                Trong kỷ nguyên cạnh tranh khốc liệt, quản lý thủ công bằng giấy tờ hay Excel phân mảnh sẽ khiến doanh nghiệp thất thoát hàng trăm giờ làm việc mỗi tháng và đối mặt với rủi ro pháp lý kiểm toán bất ngờ. Chuyển đổi số là chìa khóa then chốt để củng cố sức mạnh nội tại.
              </p>
            </div>

            <div className="rounded-3xl bg-white p-6 sm:p-8 shadow-sm border border-slate-200/80">
              <p className="font-semibold text-slate-900 text-base sm:text-lg mb-2">
                Hệ sinh thái ETEK mang lại sự an tâm tuyệt đối cho chủ doanh nghiệp
              </p>
              <p className="text-slate-600 text-xs sm:text-sm">
                Với hơn 20 năm kinh nghiệm đồng hành cùng 500+ doanh nghiệp hàng đầu, ETEK cung cấp giải pháp kép: Chuẩn hóa quy trình vận hành nhân sự HRM 4.0 và cung ứng bản quyền phần mềm chính hãng có đầy đủ chứng nhận CO/CQ, xuất hóa đơn VAT trong ngày.
              </p>
            </div>
          </div>
        </ScrollReveal>

        {/* 3. Central Authentic Mobile App UI Showcase (Zero Broken Image) */}
        <div className="mt-16 sm:mt-20 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Graphic: Pure Vector & Interactive Mobile App Screen with Radar Scan */}
            <div className="lg:col-span-6 relative flex justify-center">
              {/* Organic Soft Circle Behind */}
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[320px] w-[320px] sm:h-[420px] sm:w-[420px] rounded-full bg-gradient-to-tr from-cyan-300/40 via-blue-200/30 to-teal-200/40 blur-xl -z-10" />

              {/* Realistic iPhone 16 Frame with High-Fidelity UI */}
              <div className="relative w-full max-w-[320px] rounded-[3rem] border-[6px] border-slate-800 bg-slate-900 p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.18)]">
                {/* Dynamic Island */}
                <div className="mx-auto h-4 w-24 rounded-full bg-black mb-3" />

                {/* Mobile App Screen Content */}
                <div className="rounded-[2.2rem] bg-slate-950 p-4 text-left text-white overflow-hidden relative">
                  {/* Top Bar */}
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div>
                      <p className="text-[10px] font-mono text-cyan-400 font-bold uppercase">ETEK HRM 4.0 APP</p>
                      <p className="text-xs font-bold text-white">Chấm Công AI Di Động</p>
                    </div>
                    <span className="flex h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
                  </div>

                  {/* FaceID & GPS Radar Scanner */}
                  <div className="my-5 rounded-2xl border border-white/10 bg-white/5 p-4 text-center relative overflow-hidden">
                    <div className="relative mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-blue-600/20 border-2 border-cyan-400 shadow-[0_0_20px_rgba(6,182,212,0.4)]">
                      <span className="absolute inset-0 rounded-full border border-cyan-400/50 animate-ping" />
                      <Fingerprint className="h-10 w-10 text-cyan-300" />
                    </div>
                    <p className="mt-3 text-xs font-bold text-emerald-400 flex items-center justify-center gap-1">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                      Đã Nhận Diện Khuôn Mặt
                    </p>
                    <p className="text-[10px] text-slate-300 mt-0.5">Trịnh Thị Lợi • P. Kỹ Thuật</p>
                  </div>

                  {/* Live GPS Telemetry */}
                  <div className="space-y-2 text-[11px]">
                    <div className="flex items-center justify-between rounded-xl bg-white/5 p-2.5 border border-white/10">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <MapPin className="h-3.5 w-3.5 text-rose-400" />
                        Vị trí GPS
                      </span>
                      <span className="font-mono font-bold text-emerald-400">Hợp Lệ (Văn phòng ETEK)</span>
                    </div>

                    <div className="flex items-center justify-between rounded-xl bg-white/5 p-2.5 border border-white/10">
                      <span className="flex items-center gap-1.5 text-slate-300">
                        <Calendar className="h-3.5 w-3.5 text-cyan-400" />
                        Thời gian ghi nhận
                      </span>
                      <span className="font-mono font-bold text-white">08:14:22 • Đúng giờ</span>
                    </div>
                  </div>

                  {/* One-Touch Quick Actions */}
                  <div className="mt-4 pt-3 border-t border-white/10 grid grid-cols-2 gap-2">
                    <button type="button" className="rounded-xl bg-blue-600 py-2 text-[10px] font-bold text-white text-center">
                      Tạo Đơn Phép
                    </button>
                    <button type="button" className="rounded-xl bg-white/10 py-2 text-[10px] font-bold text-slate-200 text-center">
                      Xem Bảng Lương
                    </button>
                  </div>
                </div>
              </div>

              {/* Floating Balloon Badge on the side */}
              <div className="absolute -top-3 -right-2 sm:right-4 animate-balloon hidden sm:block">
                <div className="rounded-2xl border border-white bg-white/95 px-3.5 py-2 shadow-xl text-left">
                  <div className="flex items-center gap-1.5">
                    <Lock className="h-3.5 w-3.5 text-blue-600" />
                    <p className="text-xs font-bold text-blue-700 font-mono">100% GEOFENCING</p>
                  </div>
                  <p className="text-[10px] text-slate-500">Chống gian lận vị trí tuyệt đối</p>
                </div>
              </div>

              <div className="absolute -bottom-3 -left-2 sm:left-4 animate-balloon-slow hidden sm:block">
                <div className="rounded-2xl border border-white bg-white/95 px-3.5 py-2 shadow-xl text-left">
                  <div className="flex items-center gap-1.5">
                    <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                    <p className="text-xs font-bold text-emerald-700 font-mono">SSL 256-BIT</p>
                  </div>
                  <p className="text-[10px] text-slate-500">Mã hóa dữ liệu cấp ngân hàng</p>
                </div>
              </div>
            </div>

            {/* Right Text & Reasons */}
            <div className="lg:col-span-6 text-left">
              <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-cyan-700 bg-cyan-100/70 px-3 py-1 rounded-full font-mono">
                TẠI SAO CHỌN ETEK
              </span>
              <h3 className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 tracking-tight leading-snug">
                TẠI SAO CẦN CHUYỂN ĐỔI SỐ & BẢN QUYỀN CHÍNH HÃNG NGAY HÔM NAY?
              </h3>
              <p className="mt-3 text-xs sm:text-sm md:text-base text-slate-600 leading-relaxed">
                Đừng để rủi ro mất dữ liệu, phạt vi phạm bản quyền hay sai sót tính lương làm cản bước phát triển của công ty. ETEK cung cấp trọn gói từ phần mềm nhân sự đến bản quyền hệ thống:
              </p>

              <div className="mt-6 space-y-3 text-xs sm:text-sm">
                {[
                  "Chuẩn hóa 100% quy trình nhân sự theo bộ luật lao động Việt Nam",
                  "Cung cấp key bản quyền chính hãng trực tiếp từ Microsoft (CSP Partner)",
                  "Triển khai nhanh chóng, bảo mật dữ liệu cấp ngân hàng (SSL 256-bit)",
                  "Chính sách bảo hành kỹ thuật trọn vòng đời sản phẩm, có VAT hợp lệ"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3">
                    <div className="flex h-5 w-5 items-center justify-center rounded-full bg-cyan-500 text-white shrink-0">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span className="font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-7">
                <Link
                  href="/tu-van"
                  className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-md hover:bg-blue-600 transition-all duration-300"
                >
                  <span>Nhận Báo Cáo Tư Vấn Miễn Phí</span>
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* 4. Horizontal Numbered Benefit Cards (01, 02, 03, 04) */}
        <div className="mt-16 sm:mt-20">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg sm:text-2xl font-extrabold text-slate-900 uppercase tracking-tight">
              GIẢI PHÁP ETEK MANG LẠI NHỮNG GIÁ TRỊ GÌ?
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" data-reveal-group data-reveal-step="110">
            {values.map((v, i) => (
              <div
                key={i}
                data-reveal
                className="group relative rounded-[2rem] bg-miko-sand p-6 sm:p-7 border border-miko transition-all duration-300 hover:bg-white hover:shadow-xl hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-3xl sm:text-4xl font-extrabold text-slate-400/80 group-hover:text-blue-600 transition-colors">
                    {v.num}
                  </span>
                  <h4 className="mt-4 text-sm sm:text-base font-bold text-slate-900 tracking-tight leading-snug">
                    {v.title}
                  </h4>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">
                    {v.desc}
                  </p>
                </div>
                <div className="mt-5 pt-3 border-t border-slate-300/40 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-cyan-700 font-mono">ETEK STANDARD</span>
                  <ArrowRight className="h-3.5 w-3.5 text-slate-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all" />
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
