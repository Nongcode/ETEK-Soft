"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import {
  Star,
  CheckCircle2,
  Sparkles,
  Building2,
  ShieldCheck,
} from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
  highlight: string;
  industry: string;
  metric: string;
  verifiedYear: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Ông Trần Minh Đức",
    role: "Giám đốc CNTT & Chuyển đổi số",
    company: "Tập đoàn Cơ khí & Chế tạo Máy TPA",
    avatar: "/legacy-media/avatars/etek.webp",
    quote: "Trước đây mỗi kỳ tính lương cho hơn 1,200 nhân viên sản xuất mất gần một tuần với đủ thứ sai sót về ca kíp. Khi chuyển sang ETEKSOFTS HRM 4.0, toàn bộ quá trình tự động hóa chỉ mất đúng 2 giờ kiểm duyệt.",
    rating: 5,
    highlight: "Tiết kiệm 85% thời gian tính lương",
    industry: "Cơ khí & Sản xuất",
    metric: "1,200+ Nhân sự",
    verifiedYear: "Đồng hành 4 năm",
  },
  {
    name: "Bà Vũ Thị Hồng Nhung",
    role: "Trưởng phòng Nhân sự (HRD)",
    company: "Công ty Cổ phần May & Xuất Khẩu Hưng Yên",
    avatar: "/legacy-media/avatars/1166716503-612x612.webp",
    quote: "Đội ngũ ETEK tư vấn cực kỳ tận tâm. Hệ thống phân quyền chặt chẽ, chấm công khuôn mặt AI tại các phân xưởng hoạt động ổn định và nhân viên ai cũng hài lòng vì nhận phiếu lương tức thì trên điện thoại.",
    rating: 5,
    highlight: "Chấm công AI mượt mà, chuẩn xác",
    industry: "Dệt may & Xuất khẩu",
    metric: "3 Nhà máy quy mô",
    verifiedYear: "Đồng hành 3 năm",
  },
  {
    name: "Bác sĩ Nguyễn Văn Cường",
    role: "Phó Giám đốc Kỹ thuật & Viện phí",
    company: "Bệnh viện Đa khoa Quốc tế Đông Đô",
    avatar: "/legacy-media/avatars/etek.webp",
    quote: "Giải pháp SGIS của ETEK giúp kết nối dữ liệu BHYT cổng quốc gia trơn tru, giảm thiểu 100% tình trạng từ chối thanh toán bảo hiểm y tế và giúp bệnh nhân không còn phải mòn mỏi chờ đợi.",
    rating: 5,
    highlight: "Liên thông BHYT chuẩn xác 100%",
    industry: "Y tế & Bệnh viện",
    metric: "50,000+ Lượt khám/năm",
    verifiedYear: "Đồng hành 5 năm",
  },
];

interface TiltCardProps {
  item: Testimonial;
}

// 100% Self-contained 3D Tilt Card: Never causes sibling re-renders, completely eliminates flicker/lag!
function HolographicTiltCard({ item }: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [glarePos, setGlarePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -10;
    const rotY = ((x - centerX) / centerX) * 10;

    setRotateX(rotX);
    setRotateY(rotY);
    setGlarePos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      data-reveal
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: isHovered
          ? `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px) scale3d(1.02, 1.02, 1.02)`
          : "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0px) scale3d(1, 1, 1)",
        transition: isHovered ? "transform 0.08s ease-out" : "transform 0.4s cubic-bezier(0.23, 1, 0.32, 1)",
        willChange: "transform",
      }}
      className={`relative h-full rounded-[2.25rem] border bg-white cursor-pointer overflow-hidden flex flex-col justify-between p-7 sm:p-8 md:p-9 transition-all duration-300 ${
        isHovered
          ? "border-blue-400 shadow-[0_25px_60px_-15px_rgba(37,99,235,0.22)] ring-2 ring-blue-400/25 z-10"
          : "border-slate-200/90 shadow-[0_10px_35px_rgba(15,23,42,0.05)] z-0 hover:border-blue-300"
      }`}
    >
      {/* Permanent Glare Layer (No mount/unmount = Zero flash!) */}
      <div
        className={`pointer-events-none absolute inset-0 z-30 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          background: `radial-gradient(380px circle at ${glarePos.x}px ${glarePos.y}px, rgba(59, 130, 246, 0.16), transparent 70%)`,
        }}
      />

      {/* Permanent Top Accent Line (Smooth opacity transition) */}
      <div
        className={`absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-blue-600 via-cyan-400 to-indigo-600 transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Card Content */}
      <div className="relative z-10">
        {/* Top Badges & Metric Pill */}
        <div className="flex items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-1.5">
            {Array.from({ length: item.rating }).map((_, i) => (
              <Star key={i} className="h-4.5 w-4.5 fill-amber-400 text-amber-400 drop-shadow-sm" />
            ))}
          </div>

          <span
            className={`rounded-full px-3.5 py-1.5 text-xs font-mono font-bold tracking-tight transition-all duration-300 shadow-sm border ${
              isHovered
                ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-transparent shadow-blue-500/25 scale-105"
                : "bg-blue-50 text-blue-700 border-blue-200"
            }`}
          >
            {item.highlight}
          </span>
        </div>

        {/* Industry Tag & Enterprise Size */}
        <div className="flex items-center gap-2 mb-4 text-xs sm:text-sm font-semibold text-slate-600">
          <span className="flex items-center gap-1 text-slate-700">
            <Building2 className="h-4 w-4 text-blue-600" />
            {item.industry}
          </span>
          <span>•</span>
          <span className="text-blue-700 font-bold">{item.metric}</span>
        </div>

        {/* Testimonial Quote — Clear, readable, large typography without giant quotation watermarks */}
        <p className="text-base sm:text-[16px] lg:text-[17px] text-slate-800 leading-relaxed font-normal">
          &ldquo;{item.quote}&rdquo;
        </p>
      </div>

      {/* Bottom Leader Profile & Verification Seal — Không bị cắt chữ */}
      <div className="relative z-10 mt-8 pt-5 border-t border-slate-100 flex flex-col gap-3">
        <div className="flex items-start gap-3.5">
          <div className="relative h-13 w-13 shrink-0 rounded-full overflow-hidden ring-2 ring-blue-500/30 bg-slate-100 shadow-md">
            <Image
              src={item.avatar}
              alt={item.name}
              fill
              className="object-cover"
            />
            {/* Online/Verified Pulse Dot */}
            <span className="absolute bottom-0 right-0 h-3.5 w-3.5 rounded-full bg-emerald-500 ring-2 ring-white" />
          </div>

          <div className="min-w-0 flex-1">
            <p className="text-base sm:text-lg font-bold text-slate-900 leading-snug flex items-center gap-1.5 flex-wrap">
              <span>{item.name}</span>
              <CheckCircle2 className="h-4 w-4 text-blue-600 shrink-0 inline" />
            </p>
            <p className="text-xs sm:text-sm text-blue-700 font-semibold leading-normal mt-0.5">{item.role}</p>
            <p className="text-xs sm:text-sm text-slate-600 font-medium leading-normal mt-0.5">{item.company}</p>
          </div>
        </div>

        {/* Partnership & Verification Badges */}
        <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-100/80 text-xs">
          <span className="inline-flex items-center gap-1 text-[11px] font-mono font-bold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md border border-emerald-200">
            {item.verifiedYear}
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] text-slate-600 font-medium bg-slate-50 px-2.5 py-1 rounded-md border border-slate-200">
            <ShieldCheck className="h-3.5 w-3.5 text-blue-600" />
            Xác thực 100%
          </span>
        </div>
      </div>
    </div>
  );
}

export default function InteractiveTestimonials() {
  return (
    <section className="relative overflow-hidden bg-light-tech py-18 sm:py-28 border-t border-slate-200/80">
      {/* 3D Atmospheric Background Glows & Floating Spheres */}
      <div className="pointer-events-none absolute -top-24 left-1/4 h-[420px] w-[420px] rounded-full bg-gradient-to-tr from-blue-200/40 via-cyan-100/30 to-transparent blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-24 right-1/4 h-[420px] w-[420px] rounded-full bg-gradient-to-bl from-indigo-200/40 via-teal-100/30 to-transparent blur-3xl -z-10" />

      {/* Floating 3D Geometric Accents */}
      <div className="pointer-events-none absolute top-16 left-[6%] h-12 w-12 rounded-3xl bg-gradient-to-tr from-blue-500 to-cyan-400 opacity-20 shadow-xl rotate-45 animate-balloon hidden lg:block" />
      <div className="pointer-events-none absolute bottom-20 right-[7%] h-14 w-14 rounded-full bg-gradient-to-bl from-cyan-400 to-indigo-500 opacity-20 shadow-xl animate-balloon-slow hidden lg:block" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up">
          <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-16">
            <div className="inline-flex items-center gap-2 rounded-full border border-blue-200/80 bg-white/95 px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide text-blue-700 shadow-sm">
              <Sparkles className="h-4 w-4 text-cyan-500" />
              TIẾNG NÓI TỪ KHÁCH HÀNG THỰC TẾ
            </div>
            
            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight text-slate-800 leading-tight">
              Niềm Tin Từ{" "}
              <span className="font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Các Nhà Lãnh Đạo
              </span>
            </h2>

            <p className="mt-3.5 text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
              Lắng nghe trải nghiệm chuyển đổi số thực tế từ những đối tác đã đồng hành cùng ETEK trong nhiều năm qua.
            </p>

            {/* Clear, prominent, highly readable 3D Tip Badge */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-blue-50 border border-blue-200/80 px-4 py-2 text-xs sm:text-sm font-semibold text-blue-700 shadow-sm">
              <Sparkles className="h-4 w-4 text-blue-600 shrink-0" />
              <span>Rê chuột lên từng thẻ để trải nghiệm không gian 3D tương tác</span>
            </div>
          </div>
        </ScrollReveal>

        {/* 3 High-End 3D Interactive Tilt Cards — Waterfall scroll reveal */}
        <div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch"
          data-reveal-group
          data-reveal-step="130"
        >
          {testimonials.map((item, idx) => (
            <HolographicTiltCard key={idx} item={item} />
          ))}
        </div>

        {/* Bottom Leadership Trust Strip */}
        <div className="mt-14 pt-8 border-t border-slate-200/80 flex flex-wrap items-center justify-between gap-4 text-xs sm:text-sm text-slate-600">
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4.5 w-4.5 text-blue-600" />
            <span className="font-semibold text-slate-800">100% Đánh giá từ khách hàng thực tế có hợp đồng triển khai</span>
          </div>
          <div className="flex items-center gap-6 font-medium text-slate-600">
            <span>• Tỷ lệ tái ký hàng năm: <strong className="text-slate-900 font-bold">98.4%</strong></span>
            <span>• Điểm hài lòng CSAT: <strong className="text-emerald-600 font-bold">4.95 / 5.0</strong></span>
          </div>
        </div>

      </div>
    </section>
  );
}
