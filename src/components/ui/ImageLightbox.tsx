"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  X,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  CheckCircle2,
  FileCheck2,
  Layers,
  ArrowRight,
  ShieldAlert,
  Server,
  Cpu,
  Sparkles,
} from "lucide-react";

export interface LightboxData {
  src: string;
  alt: string;
  title?: string;
  badge?: string;
  description?: string;
  specs?: { label: string; val: string }[];
}

interface ImageLightboxProps {
  data: LightboxData | null;
  onClose: () => void;
}

export default function ImageLightbox({ data, onClose }: ImageLightboxProps) {
  const [scale, setScale] = useState(1);
  const [activeTab, setActiveTab] = useState<"preview" | "specs" | "compliance">("preview");
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!data) return;

    setScale(1);
    setActiveTab("preview");

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") setScale((s) => Math.min(s + 0.3, 2.5));
      if (e.key === "-") setScale((s) => Math.max(s - 0.3, 0.8));
      if (e.key === "0") setScale(1);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [data, onClose]);

  if (!data) return null;

  const handleZoomIn = () => setScale((s) => Math.min(Number((s + 0.3).toFixed(1)), 2.5));
  const handleZoomOut = () => setScale((s) => Math.max(Number((s - 0.3).toFixed(1)), 0.8));
  const handleResetZoom = () => setScale(1);

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
      className="fixed inset-0 z-[120] flex items-center justify-center bg-slate-950/80 p-2 sm:p-4 md:p-6 backdrop-blur-xl animate-fade-up"
      onClick={onClose}
    >
      <div
        ref={containerRef}
        className="relative flex flex-col h-[92vh] sm:h-[88vh] w-full max-w-6xl overflow-hidden rounded-3xl border border-slate-700/60 bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 shadow-[0_25px_70px_rgba(0,0,0,0.5)] ring-1 ring-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Studio Top Control Strip */}
        <div className="flex flex-wrap items-center justify-between border-b border-slate-800/80 bg-slate-950/70 px-4 sm:px-6 py-3.5 gap-3">
          {/* Document / Module Identity */}
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 shrink-0">
              <Layers className="h-4 w-4" />
            </div>
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase font-bold tracking-wider text-cyan-400 bg-cyan-950/60 px-2 py-0.5 rounded border border-cyan-800/50">
                  {data.badge || "ETEK ENTERPRISE STUDIO"}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                  <CheckCircle2 className="h-3 w-3" />
                  Xác Thực Chính Hãng
                </span>
              </div>
              <h2
                id="lightbox-title"
                className="text-sm sm:text-base font-bold text-white truncate max-w-xs sm:max-w-md md:max-w-xl"
              >
                {data.title || data.alt}
              </h2>
            </div>
          </div>

          {/* Navigation View Tabs */}
          <div className="flex items-center rounded-xl bg-slate-800/70 p-1 border border-slate-700/50">
            <button
              type="button"
              onClick={() => setActiveTab("preview")}
              className={`rounded-lg px-3 py-1 text-xs font-semibold transition-all ${
                activeTab === "preview"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Giao Diện
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("specs")}
              className={`rounded-lg px-3 py-1 text-xs font-semibold transition-all ${
                activeTab === "specs"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Thông Số
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("compliance")}
              className={`rounded-lg px-3 py-1 text-xs font-semibold transition-all ${
                activeTab === "compliance"
                  ? "bg-blue-600 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              Pháp Lý & CO/CQ
            </button>
          </div>

          {/* Action Toolbar */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            {activeTab === "preview" && (
              <div className="flex items-center gap-1 rounded-xl bg-slate-800/80 px-2 py-1 border border-slate-700/60">
                <button
                  type="button"
                  onClick={handleZoomOut}
                  disabled={scale <= 0.8}
                  aria-label="Thu nhỏ"
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white disabled:opacity-40 transition-colors"
                >
                  <ZoomOut className="h-3.5 w-3.5" />
                </button>
                <span className="font-mono text-xs text-cyan-300 font-bold px-1.5 min-w-[42px] text-center">
                  {Math.round(scale * 100)}%
                </span>
                <button
                  type="button"
                  onClick={handleZoomIn}
                  disabled={scale >= 2.5}
                  aria-label="Phóng to"
                  className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-300 hover:bg-slate-700 hover:text-white disabled:opacity-40 transition-colors"
                >
                  <ZoomIn className="h-3.5 w-3.5" />
                </button>
                {scale !== 1 && (
                  <button
                    type="button"
                    onClick={handleResetZoom}
                    aria-label="Đặt lại thu phóng"
                    title="Đặt lại 100%"
                    className="flex h-7 w-7 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-700 hover:text-cyan-300 transition-colors"
                  >
                    <RotateCcw className="h-3 w-3" />
                  </button>
                )}
              </div>
            )}

            <button
              type="button"
              onClick={onClose}
              aria-label="Đóng cửa sổ"
              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-slate-800/80 text-slate-300 hover:bg-rose-600 hover:text-white border border-slate-700/60 transition-all duration-200"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Studio Content Body */}
        <div className="relative flex-1 overflow-auto p-3 sm:p-6 bg-slate-950/90 flex flex-col justify-center items-center">
          {activeTab === "preview" && (
            <div className="relative w-full h-full min-h-[360px] overflow-auto flex items-center justify-center rounded-2xl bg-gradient-to-b from-slate-900/60 to-slate-950/80 border border-slate-800/70 p-2 sm:p-4">
              <div
                style={{
                  transform: `scale(${scale})`,
                  transformOrigin: "center center",
                  transition: "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
                className="relative max-w-full max-h-full flex items-center justify-center"
              >
                <Image
                  src={data.src}
                  alt={data.alt}
                  width={1400}
                  height={900}
                  priority
                  className="max-h-[64vh] w-auto max-w-full object-contain rounded-xl shadow-2xl ring-1 ring-white/10"
                />
              </div>
            </div>
          )}

          {activeTab === "specs" && (
            <div className="w-full max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl animate-fade-up">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <Server className="h-4 w-4 text-cyan-400" />
                Kiến Trúc Kỹ Thuật & Tương Thích Triển Khai
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                <div className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-3.5">
                  <p className="font-medium text-slate-400">Nền Tảng Hỗ Trợ</p>
                  <p className="mt-1 font-bold text-white">Web Browser, iOS App, Android App, Windows Desktop</p>
                </div>
                <div className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-3.5">
                  <p className="font-medium text-slate-400">Thiết Bị Tích Hợp Sẵn</p>
                  <p className="mt-1 font-bold text-white">Hikvision, ZKTeco, Suprema, Anviz, Dahua (LAN & Cloud)</p>
                </div>
                <div className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-3.5">
                  <p className="font-medium text-slate-400">Mã Hóa & Bảo Mật Dữ Liệu</p>
                  <p className="mt-1 font-bold text-emerald-400">AES-256 Bit, SSL TLS 1.3, Chuẩn ISO 27001</p>
                </div>
                <div className="rounded-xl border border-slate-800/80 bg-slate-950/50 p-3.5">
                  <p className="font-medium text-slate-400">Cơ Chế Phân Ca & Tính Lương</p>
                  <p className="mt-1 font-bold text-cyan-300">Công thức động 3P, Tự động đối soát phép & bảo hiểm</p>
                </div>
              </div>
              <p className="mt-4 text-[11px] text-slate-400">
                * Toàn bộ module phần mềm đều có sẵn API RESTful để kết nối liên thông ERP, SAP, Oracle, phần mềm kế toán MISA, FAST.
              </p>
            </div>
          )}

          {activeTab === "compliance" && (
            <div className="w-full max-w-3xl rounded-2xl border border-slate-800 bg-slate-900/80 p-6 shadow-xl animate-fade-up">
              <h3 className="text-base font-bold text-white mb-4 flex items-center gap-2">
                <FileCheck2 className="h-4 w-4 text-emerald-400" />
                Hồ Sơ Bản Quyền & Cam Kết Pháp Lý ETEK
              </h3>
              <div className="space-y-3 text-xs">
                <div className="flex items-start gap-3 rounded-xl border border-emerald-900/40 bg-emerald-950/20 p-3.5">
                  <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Chứng Nhận Xuất Xứ & Chất Lượng (CO/CQ)</p>
                    <p className="text-slate-300 mt-0.5 text-[11px]">
                      Cung cấp văn bản chứng thực license chính ngạch từ hãng sản xuất (Microsoft, ETEK Corp), có dấu đỏ xác thực phục vụ kiểm toán nhà nước và nội bộ.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-blue-900/40 bg-blue-950/20 p-3.5">
                  <CheckCircle2 className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Hóa Đơn Thuế VAT Điện Tử Hợp Lệ 100%</p>
                    <p className="text-slate-300 mt-0.5 text-[11px]">
                      Xuất hóa đơn VAT ngay trong ngày bàn giao bản quyền, đầy đủ mã tra cứu hợp pháp của Tổng Cục Thuế.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 rounded-xl border border-cyan-900/40 bg-cyan-950/20 p-3.5">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-bold text-white">Cam Kết Dịch Vụ Kỹ Thuật (SLA) Dưới 15 Phút</p>
                    <p className="text-slate-300 mt-0.5 text-[11px]">
                      Kỹ sư ETEK hỗ trợ kích hoạt, cài đặt, sao lưu và khắc phục sự cố 24/7 trực tiếp qua UltraView, TeamViewer hoặc tận nơi doanh nghiệp.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Studio Bottom Status Bar & CTA */}
        <div className="border-t border-slate-800/80 bg-slate-950/90 px-4 sm:px-6 py-3 text-xs text-slate-300 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3 min-w-0">
            <span className="hidden md:inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
            <p className="text-slate-300 text-[11px] sm:text-xs truncate max-w-lg">
              {data.description || "Giao diện và thông số bản quyền chính hãng được thẩm định bởi ETEK-SOFTS."}
            </p>
          </div>

          <div className="flex items-center gap-3 shrink-0 ml-auto">
            <Link
              href="/tu-van"
              onClick={onClose}
              className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 px-4 py-2 text-xs font-bold text-white shadow-md hover:scale-105 transition-all"
            >
              <span>Yêu Cầu Demo Trực Tiếp</span>
              <ArrowRight className="h-3 w-3" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
