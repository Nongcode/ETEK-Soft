"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Clock,
  PhoneCall,
  ShieldCheck,
  Sparkles,
  Zap,
  Building2,
  Server,
  Cloud,
  Layers,
  Cpu,
  Check,
  Send,
  Headphones,
} from "lucide-react";

type ArchitectureType = "hrm" | "server" | "m365";

interface ArchitectureOption {
  id: ArchitectureType;
  title: string;
  badge: string;
  icon: React.ElementType;
  accent: string;
  tagline: string;
  metrics: { label: string; value: string; desc: string }[];
  features: string[];
}

const ARCHITECTURES: ArchitectureOption[] = [
  {
    id: "hrm",
    title: "HRM 4.0 & Chấm Công AI FaceID",
    badge: "Giải Pháp Nhân Sự Toàn Diện",
    icon: Building2,
    accent: "#2563eb",
    tagline: "Đồng bộ hóa 100% máy quét sinh trắc học, GPS di động và động cơ tính lương 3P tự động.",
    metrics: [
      { label: "Tiết kiệm thời gian", value: "90%", desc: "Không còn tổng hợp Excel thủ công" },
      { label: "Độ chính xác sinh trắc", value: "99.98%", desc: "Chống gian lận vị trí và hình ảnh" },
      { label: "Thời gian thiết lập", value: "< 24h", desc: "Bàn giao sẵn sàng vận hành" },
    ],
    features: [
      "Quét khuôn mặt FaceID thời gian thực đa chi nhánh",
      "Tự động khóa bảng công và đẩy sang tính lương 3P",
      "App di động tự phê duyệt phép, tăng ca, công tác 1-chạm",
    ],
  },
  {
    id: "server",
    title: "Hạ Tầng Cloud & Windows Server 2025",
    badge: "Máy Chủ Doanh Nghiệp Tier 1",
    icon: Server,
    accent: "#0284c7",
    tagline: "Kiến trúc máy chủ dữ liệu bảo mật chuẩn quốc tế, cấp phép chính hãng vĩnh viễn và đám mây.",
    metrics: [
      { label: "Cam kết Uptime", value: "99.99%", desc: "Hệ thống vận hành liên tục 24/7" },
      { label: "Bảo mật dữ liệu", value: "256-Bit", desc: "Mã hóa cấp độ ngân hàng & y tế" },
      { label: "Bàn giao License", value: "< 15 Phút", desc: "Key điện tử chính ngạch Microsoft" },
    ],
    features: [
      "Quản trị tập trung Active Directory & Remote Desktop",
      "Sao lưu tự động chống tấn công Ransomware mã hóa",
      "Tối ưu hóa tài nguyên phần cứng, tiết kiệm 40% chi phí",
    ],
  },
  {
    id: "m365",
    title: "Bản Quyền Microsoft 365 Enterprise",
    badge: "Văn Phòng Số Hiện Đại",
    icon: Cloud,
    accent: "#4f46e5",
    tagline: "Hệ sinh thái cộng tác đám mây tích hợp trí tuệ nhân tạo Copilot AI bản quyền chính hãng.",
    metrics: [
      { label: "License hợp pháp", value: "100%", desc: "CO/CQ & Hóa đơn VAT kiểm toán" },
      { label: "Dung lượng lưu trữ", value: "1 TB/User", desc: "OneDrive đám mây bảo mật cao" },
      { label: "Hỗ trợ chuyên gia", value: "24/7/365", desc: "Đội ngũ kỹ sư Microsoft Certified" },
    ],
    features: [
      "Đầy đủ bộ ứng dụng Word, Excel, PowerPoint, Teams",
      "Quản lý thiết bị di động MDM & ngăn ngừa rò rỉ dữ liệu DLP",
      "Tích hợp trợ lý ảo Copilot AI tăng tốc soạn thảo & phân tích",
    ],
  },
];

const TRUST_BADGES = [
  {
    icon: ShieldCheck,
    title: "100% License CO/CQ Chính Ngạch",
    desc: "Đầy đủ chứng nhận ủy quyền hãng, hóa đơn tài chính VAT hợp lệ, an toàn kiểm toán tuyệt đối.",
    tag: "Bảo Hộ Pháp Lý",
  },
  {
    icon: Headphones,
    title: "Chuyên Gia Tư Vấn 1-Kèm-1",
    desc: "Khảo sát tận nơi cơ cấu doanh nghiệp, thiết kế phương án tối ưu ngân sách tốt nhất.",
    tag: "Kỹ Sư Đồng Hành",
  },
  {
    icon: Clock,
    title: "Bàn Giao Tốc Độ Dưới 15 Phút",
    desc: "Kích hoạt tài khoản và chuyển giao hệ thống tức thì, không làm gián đoạn kinh doanh.",
    tag: "SLA Vàng 15 Phút",
  },
];

export default function FuturisticCTA() {
  const [activeArch, setActiveArch] = useState<ArchitectureType>("hrm");
  const [selectedTag, setSelectedTag] = useState<string>("Tư Vấn Toàn Diện");
  const [contactInput, setContactInput] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const currentArch = ARCHITECTURES.find((a) => a.id === activeArch) || ARCHITECTURES[0];
  const ArchIcon = currentArch.icon;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactInput.trim()) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setContactInput("");
    }, 4500);
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#f8fafc] via-[#f0f7ff] to-white py-16 sm:py-24 border-t border-slate-200/80">
      {/* Background Soft Organic Radial Glows — Tone màu sáng, thanh khiết */}
      <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-[480px] w-[920px] rounded-full bg-gradient-to-r from-blue-100/60 via-sky-100/50 to-indigo-100/40 blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-0 right-10 h-72 w-72 rounded-full bg-cyan-100/40 blur-2xl -z-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Main Stage Enclosure: ETEK Enterprise Innovation Pavilion (Luminous Architecture) */}
        <div
          data-reveal="scale"
          className="relative rounded-[2.5rem] border border-blue-200/80 bg-white/90 p-6 sm:p-10 lg:p-12 shadow-[0_24px_70px_-20px_rgba(37,99,235,0.15),0_0_0_1px_rgba(255,255,255,0.9)_inset] backdrop-blur-xl"
        >
          {/* Subtle Cyber Blueprint Grid on background */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:20px_20px]" />

          {/* Section Header */}
          <div className="relative z-10 text-center max-w-3xl mx-auto mb-10 sm:mb-14" data-reveal="fade">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 shadow-sm">
              <Sparkles className="h-4 w-4 text-blue-600 animate-spin" style={{ animationDuration: "6s" }} />
              <span className="text-xs sm:text-sm font-extrabold uppercase tracking-[0.2em] text-blue-800 font-mono">
                GIAN HÀNG TĂNG TỐC KỸ THUẬT SỐ DOANH NGHIỆP
              </span>
            </div>

            <h2 className="mt-4 text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight uppercase">
              NÂNG TẦM DOANH NGHIỆP CÙNG{" "}
              <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
                HẠ TẦNG PHẦN MỀM ĐỈNH CAO
              </span>
            </h2>
            <p className="mt-3 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed">
              Lựa chọn mô hình chuyển đổi số phù hợp với quy mô doanh nghiệp của bạn. Đội ngũ kỹ sư ETEK đồng hành khảo sát, triển khai và bảo hành trọn đời.
            </p>
          </div>

          {/* 2-Column Interactive Studio Experience */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            
            {/* Left Column: Dynamic Architecture Blueprint Switcher (7 cols) */}
            <div className="lg:col-span-7 flex flex-col justify-between" data-reveal="left">
              
              {/* Architecture Selector Tabs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 mb-6">
                {ARCHITECTURES.map((arch) => {
                  const isCurrent = arch.id === activeArch;
                  const Icon = arch.icon;
                  return (
                    <button
                      key={arch.id}
                      type="button"
                      onClick={() => setActiveArch(arch.id)}
                      className={`flex items-center gap-2.5 rounded-2xl p-3 text-left transition-all duration-300 border ${
                        isCurrent
                          ? "border-blue-500 bg-gradient-to-r from-blue-50 to-sky-50 text-blue-900 shadow-md ring-1 ring-blue-400 scale-[1.02]"
                          : "border-slate-200/80 bg-white/70 text-slate-600 hover:border-blue-200 hover:bg-white"
                      }`}
                    >
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors ${
                          isCurrent ? "bg-blue-600 text-white shadow-sm" : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <div className="min-w-0">
                        <span className="block text-xs font-black truncate">{arch.title.split("&")[0]}</span>
                        <span className="block text-[10px] text-slate-500 truncate">{arch.badge}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* Active Architecture Display Card */}
              <div className="rounded-3xl border border-blue-100 bg-gradient-to-br from-white via-sky-50/40 to-blue-50/20 p-6 sm:p-7 shadow-sm transition-all duration-300">
                <div className="flex items-center justify-between gap-4 border-b border-slate-100 pb-4 mb-5">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-blue-600 text-white shadow-md shadow-blue-500/20">
                      <ArchIcon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900">{currentArch.title}</h3>
                      <p className="text-xs text-blue-600 font-semibold">{currentArch.badge}</p>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-200 px-3 py-1 text-xs font-bold text-emerald-700">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    Sẵn Sàng Triển Khai
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6 font-medium">
                  {currentArch.tagline}
                </p>

                {/* 3 Live Metric Badges */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  {currentArch.metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="rounded-2xl border border-slate-200/90 bg-white/90 p-3 text-center shadow-xs"
                    >
                      <p className="text-lg sm:text-2xl font-black text-blue-700">{m.value}</p>
                      <p className="text-[11px] font-bold text-slate-800 tracking-tight mt-0.5">{m.label}</p>
                      <p className="text-[9.5px] text-slate-500 truncate mt-0.5">{m.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Feature Checklist */}
                <div className="space-y-2.5">
                  {currentArch.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm font-medium text-slate-700">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-blue-600 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Fast-Track VIP Consultation Terminal (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between" data-reveal="right">
              <div className="h-full rounded-3xl border border-blue-200/90 bg-gradient-to-br from-white via-blue-50/30 to-sky-50/50 p-6 sm:p-7 shadow-md flex flex-col justify-between">
                <div>
                  {/* Terminal Header */}
                  <div className="flex items-center justify-between gap-3 border-b border-blue-100 pb-4 mb-5">
                    <div className="flex items-center gap-2">
                      <span className="flex h-3 w-3 rounded-full bg-emerald-500 animate-ping" />
                      <span className="text-xs font-bold text-slate-800 uppercase tracking-wider">
                        TIẾP NHẬN YÊU CẦU 24/7
                      </span>
                    </div>
                    <span className="rounded-full bg-blue-100/80 px-2.5 py-0.5 text-[10.5px] font-bold text-blue-700 font-mono">
                      SLA &lt; 10 Phút
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 tracking-tight">
                    Đăng Ký Khảo Sát &amp; Nhận Báo Giá Tức Thì
                  </h3>
                  <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                    Kỹ sư trưởng ETEK sẽ liên hệ hỗ trợ trực tiếp, tư vấn bản quyền và gửi hồ sơ dự toán chi tiết trong 10 phút.
                  </p>

                  {/* Fast Requirement Selector Tags */}
                  <div className="mt-5">
                    <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                      Nhu cầu doanh nghiệp của bạn:
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Demo HRM 4.0",
                        "Báo Giá Windows Server",
                        "Microsoft 365 Doanh Nghiệp",
                        "Tư Vấn Toàn Diện",
                      ].map((tag) => (
                        <button
                          key={tag}
                          type="button"
                          onClick={() => setSelectedTag(tag)}
                          className={`rounded-full px-3 py-1 text-xs font-bold transition-all ${
                            selectedTag === tag
                              ? "bg-blue-600 text-white shadow-sm ring-2 ring-blue-300 scale-105"
                              : "bg-white border border-slate-200 text-slate-600 hover:border-blue-300 hover:bg-blue-50/50"
                          }`}
                        >
                          {tag}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Submission Form */}
                  <form onSubmit={handleSubmit} className="mt-6 space-y-3">
                    <div className="relative">
                      <input
                        type="text"
                        value={contactInput}
                        onChange={(e) => setContactInput(e.target.value)}
                        placeholder="Nhập số điện thoại hoặc email doanh nghiệp..."
                        className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3.5 text-xs sm:text-sm text-slate-900 shadow-sm placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-3 focus:ring-blue-100 transition-all"
                        required
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitted}
                      className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 px-6 py-3.5 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:scale-[1.01] active:scale-95 transition-all duration-300"
                    >
                      {isSubmitted ? (
                        <>
                          <Check className="h-4 w-4 text-emerald-300" />
                          <span>Đã tiếp nhận! Kỹ sư sẽ gọi lại ngay...</span>
                        </>
                      ) : (
                        <>
                          <span>Yêu Cầu Báo Giá &amp; Khảo Sát Miễn Phí</span>
                          <Send className="h-3.5 w-3.5" />
                        </>
                      )}
                    </button>
                  </form>
                </div>

                {/* Direct Emergency Call Line */}
                <div className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-100 text-blue-700">
                      <PhoneCall className="h-4 w-4 animate-bounce" />
                    </span>
                    <div>
                      <p className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Hotline Kỹ Thuật 24/7</p>
                      <a
                        href="tel:19002026"
                        className="text-sm sm:text-base font-black text-blue-700 hover:text-blue-900 transition-colors"
                      >
                        1900 2026 / 098.338.8196
                      </a>
                    </div>
                  </div>
                  <Link
                    href="/tu-van"
                    className="text-xs font-bold text-slate-600 hover:text-blue-600 inline-flex items-center gap-1 group"
                  >
                    <span>Chi tiết</span>
                    <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 3 Trust Guarantee Cards */}
          <div className="mt-10 sm:mt-12 grid grid-cols-1 md:grid-cols-3 gap-4" data-reveal-group data-reveal-step="90">
            {TRUST_BADGES.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  data-reveal
                  className="rounded-2xl border border-slate-200/90 bg-white/90 p-5 shadow-xs transition-all duration-300 hover:border-blue-300 hover:shadow-md hover:-translate-y-1"
                >
                  <div className="flex items-center gap-3 mb-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 ring-1 ring-blue-100">
                      <Icon className="h-4 w-4" />
                    </span>
                    <div>
                      <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-blue-600">
                        {b.tag}
                      </span>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900">{b.title}</h4>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
