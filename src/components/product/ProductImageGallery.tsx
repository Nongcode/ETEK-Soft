"use client";

import { useEffect, useRef, useState } from "react";
import {
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  Clock,
  Cpu,
  FileCheck,
  Headphones,
  Key,
  Layers,
  Monitor,
  Shield,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Product } from "@/types";
import { cn } from "@/lib/utils";

interface SlideData {
  id: number;
  label: string;
  badge: string;
  title: string;
  subtitle: string;
}

export default function ProductImageGallery({ product }: { product: Product }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const slides: SlideData[] = [
    {
      id: 0,
      label: "Bản quyền chính hãng",
      badge: "CHÍNH HÃNG 100%",
      title: product.name,
      subtitle: `${product.brand} • ${product.licenseType}`,
    },
    {
      id: 1,
      label: "Giao diện & Tính năng",
      badge: "TÍNH NĂNG NỔI BẬT",
      title: product.features[0] || product.shortDescription,
      subtitle: `Hệ điều hành: ${product.os?.join(", ") || "Đa nền tảng"}`,
    },
    {
      id: 2,
      label: "Hóa đơn VAT & Pháp lý",
      badge: "HÓA ĐƠN VAT ĐẦY ĐỦ",
      title: "Chứng nhận cấp phép điện tử (ESD)",
      subtitle: "Hợp lệ chi phí doanh nghiệp, bảo hộ bản quyền",
    },
    {
      id: 3,
      label: "Kích hoạt 15-30 phút",
      badge: "BÀN GIAO SIÊU TỐC",
      title: "Kích hoạt trực tuyến & Hỗ trợ 24/7",
      subtitle: "Cài đặt từ xa UltraViewer/AnyDesk nhanh chóng",
    },
  ];

  // Auto scroll every 3 seconds (3000ms)
  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, slides.length]);

  function handleSelect(index: number) {
    setCurrent(index);
  }

  function handlePrev() {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }

  function handleNext() {
    setCurrent((prev) => (prev + 1) % slides.length);
  }

  return (
    <div
      className="flex flex-col gap-4 select-none"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Big Main Image / Showcase */}
      <div className="relative aspect-square w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 via-blue-50/25 to-slate-100/70 p-6 shadow-sm sm:p-8">
        {/* Ambient subtle light circles */}
        <div
          aria-hidden
          className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-primary/10 blur-2xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-blue-400/10 blur-2xl"
        />

        {/* Floating Top Badge */}
        <div className="absolute left-4 top-4 z-20 flex items-center gap-1.5 rounded-full border border-primary/20 bg-white/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-primary shadow-xs backdrop-blur-sm">
          <Sparkles className="h-3 w-3 text-primary" aria-hidden />
          <span>{slides[current].badge}</span>
        </div>

        {/* Counter Tag */}
        <div className="absolute right-4 top-4 z-20 rounded-md bg-navy/70 px-2 py-0.5 text-[11px] font-semibold text-white/90 backdrop-blur-sm">
          {current + 1} / {slides.length}
        </div>

        {/* Slide Visual Content */}
        <div className="relative flex h-full w-full flex-col items-center justify-center text-center">
          {current === 0 && <SlideBrandView product={product} />}
          {current === 1 && <SlideFeaturesView product={product} />}
          {current === 2 && <SlideLegalView product={product} />}
          {current === 3 && <SlideDeliveryView product={product} />}
        </div>

        {/* Prev / Next Navigation Arrows */}
        <button
          type="button"
          onClick={handlePrev}
          aria-label="Ảnh trước"
          className="absolute left-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-navy shadow-sm transition-all hover:bg-white hover:scale-105 active:scale-95"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden />
        </button>

        <button
          type="button"
          onClick={handleNext}
          aria-label="Ảnh tiếp theo"
          className="absolute right-3 top-1/2 -translate-y-1/2 flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-navy shadow-sm transition-all hover:bg-white hover:scale-105 active:scale-95"
        >
          <ChevronRight className="h-4 w-4" aria-hidden />
        </button>

        {/* Bottom 3s Autoplay Progress Indicators */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-20">
          {slides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => handleSelect(idx)}
              aria-label={`Chuyển đến ảnh ${idx + 1}`}
              className={cn(
                "h-1.5 rounded-full transition-all duration-300",
                current === idx ? "w-6 bg-primary" : "w-1.5 bg-slate-300 hover:bg-slate-400"
              )}
            />
          ))}
        </div>
      </div>

      {/* Row of Thumbnails Below Big Image */}
      <div className="grid grid-cols-4 gap-2.5 sm:gap-3">
        {slides.map((slide, idx) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => handleSelect(idx)}
            className={cn(
              "group relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-xl border bg-white p-2 text-center transition-all duration-200",
              current === idx
                ? "border-primary ring-2 ring-primary/20 shadow-sm bg-blue-50/20"
                : "border-slate-200/80 hover:border-slate-300 hover:bg-slate-50"
            )}
          >
            {/* Mini Icon representation */}
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-100 text-slate-600 transition-colors group-hover:text-primary">
              {idx === 0 && <Layers className="h-4 w-4" />}
              {idx === 1 && <Monitor className="h-4 w-4" />}
              {idx === 2 && <FileCheck className="h-4 w-4" />}
              {idx === 3 && <Clock className="h-4 w-4" />}
            </div>

            <span
              className={cn(
                "mt-1.5 line-clamp-1 text-[11px] font-semibold transition-colors",
                current === idx ? "text-primary font-bold" : "text-slate-600 group-hover:text-navy"
              )}
            >
              {slide.label}
            </span>

            {/* Active Bottom Bar */}
            {current === idx && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

/* ================= Slide 0: Brand & Box Showcase ================= */
function SlideBrandView({ product }: { product: Product }) {
  return (
    <div className="flex flex-col items-center justify-center animate-in fade-in duration-300">
      {/* 3D Box / Shield Card */}
      <div className="relative mb-5 flex h-36 w-36 items-center justify-center rounded-3xl border border-white/90 bg-white shadow-xl sm:h-44 sm:w-44">
        <BrandLogo brand={product.brand} name={product.name} />

        {/* Genuine Stamp */}
        <span className="absolute -bottom-3 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold text-emerald-700 shadow-xs flex items-center gap-1">
          <BadgeCheck className="h-3 w-3 text-emerald-600" />
          CHÍNH HÃNG
        </span>
      </div>

      <h2 className="mt-2 text-base font-extrabold text-navy sm:text-lg max-w-xs line-clamp-1">
        {product.name}
      </h2>
      <p className="mt-1 text-xs text-slate-500 font-medium">
        Bản quyền điện tử chính hãng ETEK SOFTS
      </p>
    </div>
  );
}

/* ================= Slide 1: Features & Specs ================= */
function SlideFeaturesView({ product }: { product: Product }) {
  return (
    <div className="flex flex-col items-center justify-center animate-in fade-in duration-300 w-full max-w-sm px-2">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-xs">
        <Cpu className="h-7 w-7" />
      </div>

      <h2 className="text-base font-bold text-navy sm:text-lg">Tính Năng &amp; Vận Hành</h2>
      <p className="mt-1 text-xs text-slate-500 line-clamp-2">{product.shortDescription}</p>

      {/* Feature Pills */}
      <div className="mt-4 grid grid-cols-2 gap-2 w-full text-left">
        <div className="rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-xs">
          <span className="block text-[10.5px] font-medium text-slate-400">Hình thức</span>
          <span className="text-xs font-bold text-navy">{product.licenseType}</span>
        </div>

        <div className="rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-xs">
          <span className="block text-[10.5px] font-medium text-slate-400">Thời hạn</span>
          <span className="text-xs font-bold text-navy">{product.duration}</span>
        </div>

        <div className="rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-xs">
          <span className="block text-[10.5px] font-medium text-slate-400">Thiết bị / Seats</span>
          <span className="text-xs font-bold text-navy">{product.seats}</span>
        </div>

        <div className="rounded-xl border border-slate-200/80 bg-white p-2.5 shadow-xs">
          <span className="block text-[10.5px] font-medium text-slate-400">Hệ điều hành</span>
          <span className="text-xs font-bold text-navy line-clamp-1">
            {product.os?.join(", ") || "Tất cả"}
          </span>
        </div>
      </div>
    </div>
  );
}

/* ================= Slide 2: Legal & VAT Certification ================= */
function SlideLegalView({ product }: { product: Product }) {
  return (
    <div className="flex flex-col items-center justify-center animate-in fade-in duration-300 w-full max-w-sm px-2">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-emerald-50 text-emerald-600 shadow-xs border border-emerald-100">
        <ShieldCheck className="h-7 w-7" />
      </div>

      <h2 className="text-base font-bold text-navy sm:text-lg">Chứng Nhận Bản Quyền Hợp Pháp</h2>
      <p className="mt-1 text-xs text-slate-500">Bảo vệ quyền lợi doanh nghiệp 100%</p>

      <div className="mt-4 flex flex-col gap-2.5 w-full text-left">
        <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-3 shadow-xs">
          <FileCheck className="h-5 w-5 text-primary shrink-0" />
          <div>
            <p className="text-xs font-bold text-navy">Hóa đơn giá trị gia tăng (VAT)</p>
            <p className="text-[11px] text-slate-500">Xuất hóa đơn điện tử hợp lệ chi phí thuế DN</p>
          </div>
        </div>

        <div className="flex items-center gap-3 rounded-xl border border-slate-200/80 bg-white p-3 shadow-xs">
          <Shield className="h-5 w-5 text-emerald-600 shrink-0" />
          <div>
            <p className="text-xs font-bold text-navy">Ủy quyền chính hãng từ {product.brand}</p>
            <p className="text-[11px] text-slate-500">Mã kích hoạt chính hãng, không qua trung gian</p>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================= Slide 3: Instant Delivery & Support ================= */
function SlideDeliveryView({ product }: { product: Product }) {
  return (
    <div className="flex flex-col items-center justify-center animate-in fade-in duration-300 w-full max-w-sm px-2">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-primary shadow-xs border border-blue-100">
        <Key className="h-7 w-7" />
      </div>

      <h2 className="text-base font-bold text-navy sm:text-lg">Giao Key Siêu Tốc &amp; Kích Hoạt</h2>
      <p className="mt-1 text-xs text-slate-500">Nhận qua Email trong vòng 15 - 30 phút</p>

      <div className="mt-4 grid grid-cols-2 gap-2.5 w-full text-left">
        <div className="flex flex-col gap-1 rounded-xl border border-slate-200/80 bg-white p-3 shadow-xs">
          <Clock className="h-4 w-4 text-primary" />
          <p className="text-xs font-bold text-navy">15 - 30 Phút</p>
          <p className="text-[11px] text-slate-500">Giao key và link tải trực tiếp</p>
        </div>

        <div className="flex flex-col gap-1 rounded-xl border border-slate-200/80 bg-white p-3 shadow-xs">
          <Headphones className="h-4 w-4 text-emerald-600" />
          <p className="text-xs font-bold text-navy">Hỗ Trợ 24/7</p>
          <p className="text-[11px] text-slate-500">Cài đặt từ xa UltraViewer miễn phí</p>
        </div>
      </div>
    </div>
  );
}

/* ================= Helper Brand Visual ================= */
function BrandLogo({ brand, name }: { brand: string; name: string }) {
  const b = brand.toLowerCase();
  const n = name.toLowerCase();

  if (b.includes("microsoft") || n.includes("windows") || n.includes("office") || n.includes("microsoft")) {
    return (
      <div className="grid grid-cols-2 gap-2 w-16 h-16 sm:w-20 sm:h-20">
        <div className="rounded-md bg-[#f25022] shadow-sm" />
        <div className="rounded-md bg-[#7fba00] shadow-sm" />
        <div className="rounded-md bg-[#00a4ef] shadow-sm" />
        <div className="rounded-md bg-[#ffb900] shadow-sm" />
      </div>
    );
  }

  if (b.includes("kaspersky")) {
    return (
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-md">
        <span className="text-4xl font-black tracking-tighter">K</span>
      </div>
    );
  }

  if (b.includes("adobe")) {
    return (
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-red-600 to-rose-700 text-white shadow-md">
        <span className="text-3xl font-black italic tracking-tighter">Ad</span>
      </div>
    );
  }

  if (b.includes("autodesk")) {
    return (
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-700 text-white shadow-md">
        <span className="text-4xl font-black tracking-tighter">A</span>
      </div>
    );
  }

  if (b.includes("bitdefender")) {
    return (
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-slate-900 via-red-900 to-red-600 text-white shadow-md">
        <span className="text-3xl font-black tracking-tighter">B</span>
      </div>
    );
  }

  if (b.includes("eset")) {
    return (
      <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-md">
        <span className="text-3xl font-black tracking-tighter">e</span>
      </div>
    );
  }

  return (
    <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-br from-primary-dark to-primary text-white shadow-md">
      <span className="text-3xl font-black uppercase tracking-wider">{brand.slice(0, 2)}</span>
    </div>
  );
}
