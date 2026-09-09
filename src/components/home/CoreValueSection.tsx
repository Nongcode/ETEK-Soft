"use client";

import Link from "next/link";
import Image from "next/image";
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
  Clock,
  Network,
  Zap,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

const values = [
  {
    num: "01",
    title: "Tiết Kiệm 85% Thời Gian Tính Lương",
    desc: "Xóa bỏ hoàn toàn việc cộng công thủ công bằng file Excel rời rạc. Tự động hóa tính lương 3P, KPI, khấu trừ BHXH và thuế TNCN chính xác từng đồng.",
    icon: Clock,
    tag: "Tối Ưu 85%",
    accentGradient: "from-blue-600 via-cyan-500 to-blue-400",
    iconBg: "from-blue-600 to-cyan-500",
    badgeClass: "bg-blue-50 text-blue-700 border-blue-200/80",
    glowColor: "bg-blue-500/15",
  },
  {
    num: "02",
    title: "100% Bản Quyền Hợp Lệ & Hóa Đơn VAT",
    desc: "Đảm bảo tuân thủ Luật Sở Hữu Trí Tuệ. Cung cấp giấy chứng nhận xuất xứ CO/CQ chính hãng từ Microsoft, Autodesk, Kaspersky đầy đủ hóa đơn đỏ hợp pháp.",
    icon: ShieldCheck,
    tag: "Chuẩn CO/CQ",
    accentGradient: "from-emerald-600 via-teal-500 to-emerald-400",
    iconBg: "from-emerald-600 to-teal-500",
    badgeClass: "bg-emerald-50 text-emerald-700 border-emerald-200/80",
    glowColor: "bg-emerald-500/15",
  },
  {
    num: "03",
    title: "Đồng Bộ Đa Chi Nhánh Thời Gian Thực",
    desc: "Kết nối dữ liệu chấm công từ hàng chục nhà máy, chuỗi cửa hàng và văn phòng về một máy chủ trung tâm qua đường truyền mã hóa SSL 256-bit.",
    icon: Network,
    tag: "Realtime Sync",
    accentGradient: "from-indigo-600 via-purple-500 to-indigo-400",
    iconBg: "from-indigo-600 to-purple-500",
    badgeClass: "bg-indigo-50 text-indigo-700 border-indigo-200/80",
    glowColor: "bg-indigo-500/15",
  },
  {
    num: "04",
    title: "Kỹ Sư Đồng Hành Hỗ Trợ Dưới 15 Phút",
    desc: "Cam kết SLA phản hồi kỹ thuật nhanh nhất thị trường. Hỗ trợ từ xa qua UltraView/TeamViewer hoặc kỹ sư đến tận nơi triển khai cho doanh nghiệp.",
    icon: Zap,
    tag: "SLA < 15 Phút",
    accentGradient: "from-amber-500 via-orange-500 to-amber-400",
    iconBg: "from-amber-500 to-orange-500",
    badgeClass: "bg-amber-50 text-amber-700 border-amber-200/80",
    glowColor: "bg-amber-500/15",
  },
];

export default function CoreValueSection() {
  return (
    <section className="relative overflow-hidden bg-miko-beige py-16 sm:py-24 border-b border-miko">
      <div className="relative z-10 mx-auto w-full max-w-7xl 2xl:max-w-[1600px] px-4 sm:px-6 lg:px-8">
        
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

        {/* 3. Central Authentic Mobile App UI Showcase with home-1.png Background */}
        <div className="relative left-1/2 right-1/2 -mx-[50vw] w-screen overflow-hidden my-16 sm:my-24 border-y border-slate-200/90 shadow-[0_20px_60px_rgba(15,23,42,0.06)] bg-white">
          {/* Full-width Background Image */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/home-1.png"
              alt="Hệ sinh thái bản quyền và chuyển đổi số ETEK SOFTS"
              fill
              priority
              className="object-cover object-left"
            />
            {/* Protective soft gradient wash on the right side so text is strictly crisp and never overlaps 3D illustration */}
            <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[64%] xl:w-[60%] 2xl:w-[56%] bg-gradient-to-r from-transparent via-white/85 to-white pointer-events-none z-[1]" />
            {/* Mobile soft background overlay */}
            <div className="absolute inset-0 bg-white/75 lg:hidden pointer-events-none z-[1]" />
          </div>

          {/* Content container — bỏ giới hạn max-width & thu hẹp padding phải để nhóm điện thoại + text
              áp sát mép phải màn hình thật sự, đồng thời có thêm khoảng đệm rời khỏi minh họa 3D bên trái */}
          <div className="relative z-10 w-full px-6 sm:px-10 lg:px-12 xl:px-14 2xl:px-16 py-16 sm:py-20 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-end gap-8 lg:gap-10 xl:gap-14">

              {/* Left Graphic: Mobile App Frame, nằm gọn sát cạnh khối text */}
              <div className="w-full lg:w-[290px] xl:w-[310px] shrink-0 relative flex justify-center">
                {/* Organic Glow */}
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[320px] w-[320px] rounded-full bg-gradient-to-tr from-cyan-400/20 via-blue-500/15 to-teal-300/15 blur-2xl -z-10" />

                {/* Realistic iPhone 16 Frame with High-Fidelity UI */}
                <div className="relative w-full max-w-[280px] sm:max-w-[300px] rounded-[3rem] border-[6px] border-slate-800 bg-slate-900/95 backdrop-blur-md p-2.5 shadow-[0_25px_60px_rgba(0,0,0,0.22)]">
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

                {/* Floating Balloon Badges */}
                <div className="absolute -top-3 -right-2 sm:-right-4 animate-balloon hidden sm:block">
                  <div className="rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-md px-3.5 py-2 shadow-xl text-left">
                    <div className="flex items-center gap-1.5">
                      <Lock className="h-3.5 w-3.5 text-blue-600" />
                      <p className="text-xs font-bold text-blue-700 font-mono">100% GEOFENCING</p>
                    </div>
                    <p className="text-[10px] text-slate-500">Chống gian lận vị trí tuyệt đối</p>
                  </div>
                </div>

                <div className="absolute -bottom-3 -left-2 sm:-left-4 animate-balloon-slow hidden sm:block">
                  <div className="rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-md px-3.5 py-2 shadow-xl text-left">
                    <div className="flex items-center gap-1.5">
                      <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
                      <p className="text-xs font-bold text-emerald-700 font-mono">SSL 256-BIT</p>
                    </div>
                    <p className="text-[10px] text-slate-500">Mã hóa dữ liệu cấp ngân hàng</p>
                  </div>
                </div>
              </div>

              {/* Right Column: Text & Value Propositions, nằm sát ngay cạnh điện thoại */}
              <div className="w-full lg:max-w-[490px] xl:max-w-[550px] 2xl:max-w-[620px] shrink-0 text-left relative z-10">
                <span className="text-xs font-extrabold uppercase tracking-[0.18em] text-blue-700 bg-blue-100/90 px-3.5 py-1.5 rounded-full font-mono border border-blue-200/80 shadow-xs">
                  TẠI SAO CHỌN ETEK
                </span>
                <h3 className="mt-3.5 text-2xl sm:text-3xl lg:text-3xl xl:text-4xl font-black text-slate-900 tracking-tight leading-[1.25]">
                  TẠI SAO CẦN CHUYỂN ĐỔI SỐ & BẢN QUYỀN CHÍNH HÃNG NGAY HÔM NAY?
                </h3>
                <p className="mt-3.5 text-xs sm:text-sm md:text-base text-slate-700 leading-relaxed font-normal">
                  Đừng để rủi ro mất dữ liệu, phạt vi phạm bản quyền hay sai sót tính lương làm cản bước phát triển của công ty. ETEK cung cấp trọn gói từ phần mềm nhân sự đến bản quyền hệ thống:
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                  {[
                    "Chuẩn hóa 100% quy trình nhân sự theo bộ luật lao động Việt Nam",
                    "Cung cấp key bản quyền chính hãng trực tiếp từ Microsoft (CSP Partner)",
                    "Triển khai nhanh chóng, bảo mật dữ liệu cấp ngân hàng (SSL 256-bit)",
                    "Chính sách bảo hành kỹ thuật trọn vòng đời sản phẩm, có VAT hợp lệ",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2.5 rounded-2xl bg-white/95 backdrop-blur-sm p-3 border border-slate-200/90 shadow-xs hover:border-blue-300 transition-colors"
                    >
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white shrink-0 mt-0.5 shadow-xs">
                        <CheckCircle2 className="h-3.5 w-3.5" />
                      </div>
                      <span className="font-semibold text-slate-900 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap items-center gap-3.5">
                  <Link
                    href="/tu-van"
                    className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 px-7 py-3 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 hover:scale-105 transition-all duration-300 active:scale-95"
                  >
                    <span>Nhận Báo Cáo Tư Vấn Miễn Phí</span>
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/san-pham"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/95 backdrop-blur-sm px-5 py-3 text-xs sm:text-sm font-bold text-slate-700 hover:border-blue-300 hover:bg-blue-50/60 hover:text-blue-700 shadow-xs transition-all"
                  >
                    <span>Xem danh mục bản quyền</span>
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* 4. Horizontal Numbered Benefit Cards (01, 02, 03, 04) */}
        <div className="mt-16 sm:mt-24">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-blue-700 font-mono bg-blue-100/80 px-3 py-1 rounded-full border border-blue-200/80 mb-3">
                <Sparkles className="h-3.5 w-3.5" />
                <span>GIÁ TRỊ THỰC TIỄN &amp; KHÁC BIỆT</span>
              </div>
              <h3 className="text-xl sm:text-3xl lg:text-4xl font-black text-slate-900 uppercase tracking-tight">
                GIẢI PHÁP ETEK MANG LẠI NHỮNG GIÁ TRỊ GÌ?
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600 max-w-2xl">
                Được kiểm chứng qua 500+ dự án thực tế với cam kết tối ưu chi phí, đảm bảo 100% bản quyền pháp lý và tốc độ kỹ thuật dưới 15 phút.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" data-reveal-group data-reveal-step="110">
            {values.map((v, i) => (
              <div
                key={i}
                data-reveal
                className="group relative overflow-hidden rounded-[2rem] bg-white p-6 sm:p-7 border border-slate-200/90 shadow-[0_4px_20px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_40px_rgba(15,23,42,0.12)] transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                {/* Top Accent Gradient Line */}
                <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${v.accentGradient} opacity-80 group-hover:opacity-100 transition-opacity`} />

                {/* Soft Ambient Corner Glow on Hover */}
                <div className={`absolute -right-10 -top-10 h-32 w-32 rounded-full ${v.glowColor} blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} />

                {/* Big Watermark Number */}
                <span className="absolute right-5 top-4 font-mono text-5xl sm:text-6xl font-black text-slate-100 select-none pointer-events-none group-hover:text-slate-200/80 transition-colors">
                  {v.num}
                </span>

                <div className="relative z-10">
                  {/* Icon & Badge Header */}
                  <div className="flex items-center justify-between">
                    <div className={`flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${v.iconBg} text-white shadow-md shadow-slate-900/10 transform group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300`}>
                      <v.icon className="h-6 w-6" />
                    </div>
                    <span className={`font-mono text-[11px] font-bold px-2.5 py-1 rounded-full ${v.badgeClass} border`}>
                      {v.tag}
                    </span>
                  </div>

                  {/* Title & Desc */}
                  <h4 className="mt-5 text-base font-extrabold text-slate-900 tracking-tight leading-snug group-hover:text-blue-600 transition-colors">
                    {v.title}
                  </h4>
                  <p className="mt-2.5 text-xs text-slate-600 leading-relaxed font-normal">
                    {v.desc}
                  </p>
                </div>

                {/* Bottom Footer */}
                <div className="relative z-10 mt-6 pt-3.5 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-slate-400 font-mono tracking-wider group-hover:text-slate-700 transition-colors">
                    ETEK STANDARD
                  </span>
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-slate-500 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
