"use client";

import { FormEvent, useState } from "react";
import {
  Check,
  CheckCircle2,
  Clock,
  FileCheck2,
  Headphones,
  Loader2,
  Send,
  ShieldCheck,
  Sparkles,
  Building2,
  Layers,
  Server,
  Cloud,
} from "lucide-react";

type ServiceInquiry = "m365" | "hrm" | "sgis" | "support";

interface ServiceOption {
  id: ServiceInquiry;
  title: string;
  badge: string;
  icon: React.ElementType;
  defaultMsg: string;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: "m365",
    title: "Bản Quyền Microsoft & Server",
    badge: "Microsoft Gold CSP",
    icon: Cloud,
    defaultMsg: "Tôi cần tư vấn bảng giá Microsoft 365 Business, Windows Server 2025 và kiểm toán bản quyền doanh nghiệp...",
  },
  {
    id: "hrm",
    title: "HRM 4.0 & Chấm Công FaceID",
    badge: "Tự Động Hóa 100%",
    icon: Building2,
    defaultMsg: "Doanh nghiệp tôi muốn đặt lịch demo hệ thống HRM 4.0, chấm công FaceID AI và tính lương 3P đa chi nhánh...",
  },
  {
    id: "sgis",
    title: "Giải Pháp Y Tế & Bệnh Viện SGIS",
    badge: "Chuẩn Bộ Y Tế",
    icon: Layers,
    defaultMsg: "Cần khảo sát triển khai phần mềm quản trị bệnh viện SGIS, hồ sơ bệnh án EMR và cổng giám định BHYT...",
  },
  {
    id: "support",
    title: "Hỗ Trợ Kỹ Thuật Khẩn Cấp",
    badge: "SLA < 15 Phút",
    icon: Headphones,
    defaultMsg: "Cần hỗ trợ xử lý sự cố máy chủ / kích hoạt license gấp...",
  },
];

export default function ContactInteractiveTerminal() {
  const [selectedService, setSelectedService] = useState<ServiceInquiry>("m365");
  const [companyScale, setCompanyScale] = useState("50 - 200 nhân sự");
  const [isUrgent, setIsUrgent] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: SERVICE_OPTIONS[0].defaultMsg,
  });

  const activeOption = SERVICE_OPTIONS.find((s) => s.id === selectedService) || SERVICE_OPTIONS[0];

  const handleSelectService = (service: ServiceOption) => {
    setSelectedService(service.id);
    setFormData((prev) => ({
      ...prev,
      message: service.defaultMsg,
    }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setTimeout(() => {
      setStatus("success");
    }, 1000);
  };

  const handleReset = () => {
    setStatus("idle");
    setFormData({
      name: "",
      email: "",
      phone: "",
      company: "",
      message: activeOption.defaultMsg,
    });
  };

  return (
    <section className="relative overflow-hidden bg-slate-50/50 py-16 sm:py-24">
      {/* Background Soft Glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-blue-100/50 blur-3xl -z-10" />
      <div className="pointer-events-none absolute bottom-0 left-10 h-72 w-72 rounded-full bg-sky-100/40 blur-2xl -z-10" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Terminal Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16" data-reveal="fade">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50/80 px-4 py-1.5 shadow-sm">
            <Sparkles className="h-4 w-4 text-blue-600 animate-spin" style={{ animationDuration: "8s" }} />
            <span className="text-xs font-extrabold uppercase tracking-[0.2em] text-blue-800 font-mono">
              TRUNG TÂM TIẾP NHẬN YÊU CẦU DOANH NGHIỆP
            </span>
          </div>

          <h2 className="mt-4 text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight uppercase">
            GỬI YÊU CẦU TƯ VẤN &amp; NHẬN DỰ TOÁN{" "}
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 bg-clip-text text-transparent">
              TRONG 15 PHÚT
            </span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
            Chọn phân hệ cần hỗ trợ để kết nối trực tiếp đến đúng kỹ sư chuyên trách, nhận báo giá chi tiết và tài liệu demo phù hợp nhất.
          </p>
        </div>

        {/* 2-Column Terminal Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Main Form Area (7 cols) */}
          <div className="lg:col-span-7" data-reveal="left">
            <div className="rounded-[2.5rem] border border-slate-200/90 bg-white p-6 sm:p-10 shadow-xl shadow-slate-200/50">
              
              {/* Category Pill Switchers */}
              <div className="mb-8">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 font-mono">
                  1. Chọn chuyên đề bạn đang quan tâm:
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SERVICE_OPTIONS.map((opt) => {
                    const isSelected = opt.id === selectedService;
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.id}
                        type="button"
                        onClick={() => handleSelectService(opt)}
                        className={`flex items-center gap-3 rounded-2xl p-3 text-left transition-all duration-200 border ${
                          isSelected
                            ? "border-blue-600 bg-blue-50/80 text-blue-900 shadow-sm ring-1 ring-blue-500"
                            : "border-slate-200/80 bg-slate-50/60 text-slate-700 hover:border-blue-200 hover:bg-white"
                        }`}
                      >
                        <span
                          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl ${
                            isSelected ? "bg-blue-600 text-white shadow-sm" : "bg-white text-slate-500 border border-slate-200"
                          }`}
                        >
                          <Icon className="h-4 w-4" />
                        </span>
                        <div className="min-w-0">
                          <span className="block text-xs font-bold truncate">{opt.title}</span>
                          <span className="block text-[10px] text-slate-500 font-mono">{opt.badge}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Form Content or Success View */}
              {status === "success" ? (
                <div className="rounded-3xl border border-emerald-200 bg-emerald-50/60 p-8 text-center animate-fade-up">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500 text-white shadow-lg shadow-emerald-500/25 mb-4">
                    <CheckCircle2 className="h-8 w-8" />
                  </div>
                  <span className="rounded-full bg-emerald-100 px-3 py-1 font-mono text-xs font-bold text-emerald-800">
                    MÃ TIẾP NHẬN: ETEK-{Math.floor(100000 + Math.random() * 900000)}
                  </span>
                  <h3 className="mt-4 text-xl sm:text-2xl font-black text-slate-900">
                    Gửi Yêu Cầu Thành Công!
                  </h3>
                  <p className="mt-2 text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Cảm ơn <strong>{formData.name || "quý khách"}</strong>. Kỹ sư trưởng ETEK-soft đã tiếp nhận thông tin và sẽ gọi lại hỗ trợ qua số <strong>{formData.phone || "điện thoại của bạn"}</strong> trong vòng 15 phút tới.
                  </p>
                  <div className="mt-6 pt-6 border-t border-emerald-200/60 flex flex-wrap items-center justify-center gap-4">
                    <button
                      type="button"
                      onClick={handleReset}
                      className="rounded-full bg-white border border-emerald-300 px-6 py-2.5 text-xs font-bold text-emerald-800 hover:bg-emerald-100/50 transition-colors"
                    >
                      Gửi yêu cầu khác
                    </button>
                    <a
                      href="tel:19002026"
                      className="rounded-full bg-emerald-600 px-6 py-2.5 text-xs font-bold text-white shadow-md hover:bg-emerald-700 transition-colors inline-flex items-center gap-1.5"
                    >
                      <Clock className="h-3.5 w-3.5" />
                      Cần gấp? Gọi ngay 1900 2026
                    </a>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Họ và tên người liên hệ <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Nguyễn Văn A"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-3 focus:ring-blue-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Số điện thoại (Zalo) <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="09xx xxx xxx"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-3 focus:ring-blue-100 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Email doanh nghiệp <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="contact@congty.vn"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-3 focus:ring-blue-100 transition-all"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Tên công ty / Tổ chức
                      </label>
                      <input
                        type="text"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Công ty Cổ phần ABC"
                        className="w-full rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-3 focus:ring-blue-100 transition-all"
                      />
                    </div>
                  </div>

                  {/* Company scale selector */}
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Quy mô nhân sự doanh nghiệp:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                      {["Dưới 50", "50 - 200", "201 - 500", "Trên 500"].map((scale) => (
                        <button
                          key={scale}
                          type="button"
                          onClick={() => setCompanyScale(scale)}
                          className={`rounded-xl px-3 py-2 text-xs font-semibold transition-all border ${
                            companyScale === scale
                              ? "bg-blue-600 text-white border-blue-600 shadow-sm"
                              : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                          }`}
                        >
                          {scale}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Chi tiết yêu cầu / Thắc mắc <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-xs sm:text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:bg-white focus:outline-none focus:ring-3 focus:ring-blue-100 transition-all"
                    />
                  </div>

                  {/* Urgent toggle */}
                  <div className="flex items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50/70 p-3.5">
                    <input
                      type="checkbox"
                      id="urgent-check"
                      checked={isUrgent}
                      onChange={(e) => setIsUrgent(e.target.checked)}
                      className="h-4 w-4 rounded text-blue-600 focus:ring-blue-500 cursor-pointer"
                    />
                    <label htmlFor="urgent-check" className="text-xs text-amber-900 font-medium cursor-pointer">
                      <strong>Cần kỹ sư liên hệ khẩn cấp:</strong> Ưu tiên điều phối cuộc gọi trong vòng 15 phút.
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-blue-600 via-blue-700 to-cyan-600 px-6 py-4 text-xs sm:text-sm font-bold text-white shadow-lg shadow-blue-600/25 hover:shadow-xl hover:shadow-blue-600/35 hover:scale-[1.01] active:scale-95 transition-all duration-300"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span>Đang mã hóa &amp; gửi yêu cầu...</span>
                      </>
                    ) : (
                      <>
                        <span>Gửi Yêu Cầu &amp; Nhận Tư Vấn Miễn Phí</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Expert Guidance & SLAs (5 cols) */}
          <div className="lg:col-span-5 space-y-6" data-reveal="right">
            
            {/* Expert Profile Card */}
            <div className="rounded-[2.2rem] border border-blue-200/90 bg-gradient-to-br from-white via-blue-50/30 to-sky-50/50 p-6 sm:p-7 shadow-md">
              <div className="flex items-center gap-4 pb-5 border-b border-blue-100">
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center text-white text-xl font-bold shadow-md">
                    ET
                  </div>
                  <span className="absolute -bottom-1 -right-1 h-4 w-4 rounded-full bg-emerald-500 border-2 border-white" />
                </div>
                <div>
                  <span className="font-mono text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-100/80 px-2 py-0.5 rounded-full">
                    KỸ SƯ TRƯỞNG PHỤ TRÁCH
                  </span>
                  <h3 className="mt-1 text-base sm:text-lg font-bold text-slate-900">Ban Cố Vấn Giải Pháp ETEK</h3>
                  <p className="text-xs text-slate-600">Hơn 15 năm kinh nghiệm kiến trúc hạ tầng IT</p>
                </div>
              </div>

              <div className="mt-5 space-y-3">
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <Check className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Khảo sát trực tiếp hạ tầng máy chủ và quy trình nhân sự tại doanh nghiệp.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <Check className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Cung cấp tài khoản trải nghiệm phần mềm HRM 4.0 và Copilot miễn phí trong 14 ngày.</span>
                </div>
                <div className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                  <Check className="h-4 w-4 text-blue-600 shrink-0 mt-0.5" />
                  <span>Thiết kế giải pháp bản quyền tiết kiệm đến 35% ngân sách định kỳ.</span>
                </div>
              </div>

              {/* 3 Live Metric Badges */}
              <div className="mt-6 pt-5 border-t border-blue-100 grid grid-cols-3 gap-2 text-center">
                <div className="rounded-xl bg-white p-2.5 border border-slate-100">
                  <p className="text-base sm:text-lg font-black text-blue-700">&lt; 15P</p>
                  <p className="text-[10px] font-bold text-slate-600">Phản Hồi</p>
                </div>
                <div className="rounded-xl bg-white p-2.5 border border-slate-100">
                  <p className="text-base sm:text-lg font-black text-blue-700">100%</p>
                  <p className="text-[10px] font-bold text-slate-600">Chính Ngạch</p>
                </div>
                <div className="rounded-xl bg-white p-2.5 border border-slate-100">
                  <p className="text-base sm:text-lg font-black text-blue-700">NDA</p>
                  <p className="text-[10px] font-bold text-slate-600">Bảo Mật</p>
                </div>
              </div>
            </div>

            {/* Direct Line Badge */}
            <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-sm flex items-center justify-between">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono">
                  ĐƯỜNG DÂY NÓNG GIẢI PHÁP
                </span>
                <p className="text-lg sm:text-xl font-black text-blue-700 mt-0.5">1900 2026 / 098.338.8196</p>
                <p className="text-xs text-slate-500 mt-0.5">Tư vấn kỹ thuật trực tiếp không qua trung gian</p>
              </div>
              <a
                href="tel:19002026"
                className="rounded-full bg-blue-600 p-3.5 text-white shadow-md hover:bg-blue-700 transition-all hover:scale-105"
                title="Gọi ngay"
              >
                <Headphones className="h-5 w-5" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
