"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Award,
  BadgeCheck,
  CheckCircle2,
  ChevronRight,
  Clock,
  Lock,
  RefreshCw,
  Scan,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

type ModuleId = "attendance" | "payroll" | "license";

interface ModuleMeta {
  id: ModuleId;
  index: string;
  label: string;
  caption: string;
  accent: string; // dùng cho viền và vạch tiến trình
}

const MODULES: ModuleMeta[] = [
  {
    id: "attendance",
    index: "01",
    label: "Chấm Công FaceID",
    caption: "Nhận diện sinh trắc • đa chi nhánh",
    accent: "#2563eb",
  },
  {
    id: "payroll",
    index: "02",
    label: "Động Cơ Lương 3P",
    caption: "Tính lương • ký số • quyết toán",
    accent: "#0891b2",
  },
  {
    id: "license",
    index: "03",
    label: "Chứng Thư Bản Quyền",
    caption: "Microsoft CSP • CO/CQ • VAT",
    accent: "#7c3aed",
  },
];

const AUTO_ADVANCE_MS = 4500;

/**
 * Bảng điều khiển phân hệ dưới Hero — 100% mượt mà, tăng tốc phần cứng GPU.
 *
 * Cả 3 phân hệ đều được mount sẵn trong cùng một ô CSS Grid (col-start-1 row-start-1).
 * Khi chuyển phân hệ, thẻ cũ lùi nhẹ và mờ dần, thẻ mới trượt lên và hiện rõ
 * đồng thời bằng đường cong easing cubic-bezier chuẩn iOS/macOS.
 * Hoàn toàn không huỷ/tạo DOM, không reflow, không giật lag.
 */
export default function HeroConsole() {
  const [active, setActive] = useState<ModuleId>("attendance");
  const [isScanning, setIsScanning] = useState(false);
  const [scanDone, setScanDone] = useState(false);
  const [calculating, setCalculating] = useState(false);
  const [payrollTime, setPayrollTime] = useState("0.42");

  const goToNext = useCallback(() => {
    setActive((current) => {
      const i = MODULES.findIndex((m) => m.id === current);
      return MODULES[(i + 1) % MODULES.length].id;
    });
  }, []);

  /* ---------- Vòng lặp tự chuyển phân hệ liên tục ---------- */
  useEffect(() => {
    const timer = setTimeout(() => {
      goToNext();
    }, AUTO_ADVANCE_MS);

    return () => clearTimeout(timer);
  }, [active, goToNext]);

  const simulateScan = useCallback(() => {
    setIsScanning(true);
    setScanDone(false);
    setTimeout(() => {
      setIsScanning(false);
      setScanDone(true);
    }, 1100);
  }, []);

  const simulatePayroll = useCallback(() => {
    setCalculating(true);
    setTimeout(() => {
      setCalculating(false);
      setPayrollTime((Math.random() * 0.1 + 0.38).toFixed(2));
    }, 700);
  }, []);

  const activeModule = MODULES.find((m) => m.id === active) || MODULES[0];

  function renderModule(id: ModuleId): ReactNode {
    if (id === "attendance") {
      return <AttendanceModule isScanning={isScanning} scanDone={scanDone} onSimulate={simulateScan} />;
    }
    if (id === "payroll") {
      return <PayrollModule calculating={calculating} elapsed={payrollTime} onSimulate={simulatePayroll} />;
    }
    return <LicenseModule />;
  }

  return (
    <div className="relative mx-auto mt-10 max-w-5xl text-left sm:mt-14">
      {/* Thanh chọn phân hệ — Chuyển trạng thái êm ái, tối ưu phản hồi tức thì */}
      <div className="mb-5 flex flex-col gap-2.5 sm:flex-row sm:items-stretch sm:gap-3">
        {MODULES.map((m) => {
          const isActive = m.id === active;
          return (
            <button
              key={m.id}
              type="button"
              onClick={() => setActive(m.id)}
              aria-pressed={isActive}
              className={`group relative flex-1 rounded-2xl border px-4 py-3.5 text-left transition-all duration-400 ease-out ${
                isActive
                  ? "border-blue-600 bg-white shadow-[0_10px_25px_-5px_rgba(37,99,235,0.18)] ring-2 ring-blue-500/20 -translate-y-0.5"
                  : "border-slate-200/80 bg-white/75 hover:border-blue-300 hover:bg-white hover:-translate-y-0.5"
              }`}
            >
              <span className="flex items-center gap-3">
                <span
                  className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-xl font-mono text-[11px] font-black transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-sm scale-105"
                      : "bg-slate-100 text-slate-400 group-hover:bg-blue-50 group-hover:text-blue-600"
                  }`}
                >
                  {m.index}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={`block truncate text-[13px] font-extrabold transition-colors duration-300 ${
                      isActive ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"
                    }`}
                  >
                    {m.label}
                  </span>
                  <span className="block truncate text-[10.5px] font-medium text-slate-400">{m.caption}</span>
                </span>
                {isActive && (
                  <span className="hidden sm:inline-flex h-2 w-2 rounded-full bg-blue-600 animate-pulse" />
                )}
              </span>
            </button>
          );
        })}
      </div>

      {/* Khối hiển thị phân hệ chính — 100% 60fps mượt mà, chuyển cảnh êm ru */}
      <div className="relative rounded-[2rem] border border-slate-200/90 bg-white shadow-[0_20px_60px_-15px_rgba(15,23,42,0.1)] overflow-hidden">
        {/* Vầng sáng ambient mượt mà đổi màu theo phân hệ */}
        <div
          className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full opacity-15 blur-3xl transition-colors duration-1000 ease-out"
          style={{ backgroundColor: activeModule.accent }}
        />

        {/* Thanh tiêu đề bảng */}
        <div className="relative flex items-center justify-between gap-3 overflow-hidden border-b border-slate-100 bg-gradient-to-r from-slate-50 via-white to-slate-50 px-4 py-3.5 sm:px-6">
          <span className="flex items-center gap-2.5">
            <span
              className="flex h-8 w-8 items-center justify-center rounded-xl text-white shadow-sm transition-all duration-500 ease-out"
              style={{ background: `linear-gradient(135deg, ${activeModule.accent}, #06b6d4)` }}
            >
              <Sparkles className="h-4 w-4" />
            </span>
            <span>
              <span className="block text-[12px] font-extrabold tracking-tight text-slate-900">
                ETEK ENTERPRISE SUITE
              </span>
              <span className="block font-mono text-[10px] text-slate-400 transition-colors duration-300">
                {activeModule.index} / {activeModule.label.toUpperCase()}
              </span>
            </span>
          </span>

          <span className="hidden shrink-0 items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700 sm:inline-flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            ĐANG VẬN HÀNH
          </span>
        </div>

        {/* Nội dung phân hệ — Xếp lớp CSS Grid, chuyển đổi mượt mà bằng GPU */}
        <div className="relative grid grid-cols-1 grid-rows-1 bg-gradient-to-b from-white to-slate-50/60 p-4 sm:p-6 lg:min-h-[415px]">
          {MODULES.map((m) => {
            const isActive = m.id === active;
            return (
              <div
                key={m.id}
                className={`col-start-1 row-start-1 w-full transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  isActive
                    ? "opacity-100 translate-y-0 scale-100 pointer-events-auto z-10 visible"
                    : "opacity-0 translate-y-3.5 scale-[0.985] pointer-events-none z-0 invisible"
                }`}
                style={{
                  willChange: "transform, opacity",
                }}
              >
                {renderModule(m.id)}
              </div>
            );
          })}
        </div>

        {/* Chân bảng */}
        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-slate-100 bg-slate-50/90 px-4 py-3 text-xs sm:px-6">
          <span className="flex flex-wrap items-center gap-x-5 gap-y-1.5 text-slate-600">
            <span className="flex items-center gap-1.5 font-semibold text-slate-700">
              <ShieldCheck className="h-4 w-4 text-emerald-600" />
              Bảo hộ pháp lý CO/CQ 100%
            </span>
            <span className="flex items-center gap-1.5 font-semibold text-slate-700">
              <Clock className="h-4 w-4 text-blue-600" />
              Kích hoạt &lt; 15 phút
            </span>
          </span>

          <Link
            href="/tu-van"
            className="group inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2 text-xs font-bold text-white shadow-sm transition-all hover:bg-blue-700 active:scale-95"
          >
            <span>Yêu Cầu Demo &amp; Báo Giá</span>
            <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/* ======================== Phân hệ 01 — Chấm công ======================== */

function AttendanceModule({
  isScanning,
  scanDone,
  onSimulate,
}: {
  isScanning: boolean;
  scanDone: boolean;
  onSimulate: () => void;
}) {
  const feed = [
    {
      initials: "HN",
      tone: "bg-blue-100 text-blue-700",
      name: "Nguyễn Hải Nam",
      meta: "Kinh Doanh B2B • Camera AI Sảnh",
      time: "08:05:12",
    },
    {
      initials: "SG",
      tone: "bg-violet-100 text-violet-700",
      name: "Trần Quốc Tuấn",
      meta: "Kỹ Sư Triển Khai • GPS Mobile App",
      time: "08:11:40",
    },
    {
      initials: "HP",
      tone: "bg-cyan-100 text-cyan-700",
      name: "Phạm Quỳnh Chi",
      meta: "Kế Toán Trưởng • Máy Quét Hikvision",
      time: "08:14:02",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
      {/* Thẻ nhân sự sinh trắc */}
      <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-5">
        <span className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-500/10 blur-2xl" />

        {isScanning && <span className="deck__scanline" />}

        <div>
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <span className="flex items-center gap-1.5 text-[11px] font-bold tracking-wide text-slate-800">
              <span className="h-2 w-2 rounded-full bg-blue-600" />
              ETEK SMART PASS
            </span>
            <span className="rounded-md border border-blue-100 bg-blue-50 px-2 py-0.5 text-[9px] font-bold text-blue-700">
              NFC • BIOMETRIC
            </span>
          </div>

          <div className="mt-4 flex items-center gap-3.5">
            <span className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-lg font-extrabold text-white shadow-md ring-2 ring-blue-100">
              MA
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-emerald-500 ring-2 ring-white">
                <CheckCircle2 className="h-2.5 w-2.5 text-white" />
              </span>
            </span>
            <span>
              <span className="block text-sm font-extrabold text-slate-900">Lê Mai Anh</span>
              <span className="block text-xs font-semibold text-blue-700">Trưởng Phòng Nhân Sự</span>
              <span className="mt-0.5 block font-mono text-[10px] text-slate-400">ETEK-EMP-0418</span>
            </span>
          </div>

          <dl className="mt-4 space-y-2 rounded-xl border border-slate-100 bg-slate-50 p-3 text-xs">
            <div className="flex items-center justify-between">
              <dt className="text-slate-500">Trụ sở</dt>
              <dd className="font-semibold text-slate-800">Tầng 12 — Hà Nội</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-slate-500">Giờ check-in</dt>
              <dd className="font-bold text-emerald-600">08:14:02 (Đúng giờ)</dd>
            </div>
            <div className="flex items-center justify-between">
              <dt className="text-slate-500">Độ khớp FaceID</dt>
              <dd className="font-bold text-blue-600">99.98%</dd>
            </div>
          </dl>

          {scanDone && (
            <p className="mt-2.5 flex items-center gap-1.5 rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[11px] font-bold text-emerald-800 animate-fade-up">
              <CheckCircle2 className="h-3.5 w-3.5 shrink-0 text-emerald-600" />
              Đã xác thực &amp; đồng bộ bảng công!
            </p>
          )}
        </div>

        <div className="mt-4 border-t border-slate-100 pt-3">
          <button
            type="button"
            onClick={onSimulate}
            disabled={isScanning}
            className="flex w-full items-center justify-center gap-2 rounded-xl border border-blue-200/80 bg-blue-50 px-3 py-2 text-xs font-bold text-blue-700 transition-all hover:bg-blue-100/70 active:scale-[0.98] disabled:opacity-70"
          >
            {isScanning ? (
              <>
                <RefreshCw className="h-3.5 w-3.5 animate-spin" />
                Đang quét nhận diện khuôn mặt…
              </>
            ) : (
              <>
                <Scan className="h-3.5 w-3.5" />
                Chạm để mô phỏng quét FaceID
              </>
            )}
          </button>
        </div>
      </div>

      {/* Dòng chấm công thời gian thực */}
      <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-7">
        <div>
          <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <span>
              <span className="block text-xs font-bold text-slate-800">ĐIỀU HÀNH CHẤM CÔNG TOÀN QUỐC</span>
              <span className="block text-[11px] text-slate-500">Đồng bộ tự động 10 chi nhánh &amp; nhà máy</span>
            </span>
            <span className="flex shrink-0 items-center gap-1.5 rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-1 text-[10px] font-bold text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-ping" />
              1.420 / 1.420
            </span>
          </div>

          <ul className="mt-3.5 space-y-2.5">
            {feed.map((row) => (
              <li
                key={row.initials}
                className="flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-xs transition-colors hover:border-blue-200 hover:bg-blue-50/50"
              >
                <span className="flex min-w-0 items-center gap-2.5">
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-lg text-[11px] font-bold ${row.tone}`}
                  >
                    {row.initials}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-bold text-slate-800">{row.name}</span>
                    <span className="block truncate text-[10px] text-slate-500">{row.meta}</span>
                  </span>
                </span>
                <span className="shrink-0 text-right">
                  <span className="block font-mono text-xs font-bold text-slate-800">{row.time}</span>
                  <span className="mt-0.5 inline-block rounded bg-emerald-50 px-1.5 py-0.5 text-[9px] font-bold text-emerald-600">
                    Đúng giờ
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-4 flex items-start gap-2.5 rounded-xl border border-blue-200/60 bg-blue-50/70 p-3 text-[11px] leading-relaxed text-slate-700">
          <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-blue-600" />
          <span>
            <strong className="text-blue-900">Không còn tổng hợp Excel thủ công:</strong> dữ liệu quét mặt từ Hikvision,
            ZKTeco và App GPS tự lọc trùng rồi đẩy thẳng sang phân hệ Tính Lương 3P.
          </span>
        </p>
      </div>
    </div>
  );
}

/* ======================== Phân hệ 02 — Lương 3P ======================== */

function PayrollModule({
  calculating,
  elapsed,
  onSimulate,
}: {
  calculating: boolean;
  elapsed: string;
  onSimulate: () => void;
}) {
  const rows = [
    { label: "P1 — Lương Vị Trí", value: "18.500.000 đ", tone: "text-slate-900" },
    { label: "P2 — Hiệu Quả & KPI (115%)", value: "+ 7.450.000 đ", tone: "text-emerald-600" },
    { label: "P3 — Năng Lực & Thâm Niên", value: "+ 3.500.000 đ", tone: "text-blue-600" },
    { label: "Khấu trừ BHXH & Thuế TNCN", value: "− 2.450.000 đ", tone: "text-rose-500" },
  ];

  const benefits = [
    {
      title: "Giải phóng 100% khỏi bảng tính Excel",
      body: "Xử lý bảng lương 500+ nhân sự với công thức phức tạp trong tích tắc, loại trừ sai sót thủ công.",
      tone: "text-emerald-600",
    },
    {
      title: "Tự động quyết toán Thuế & BHXH 2026",
      body: "Áp dụng biểu thuế lũy tiến và mức trần đóng BHXH mới nhất theo luật định.",
      tone: "text-blue-600",
    },
    {
      title: "Liên thông phần mềm kế toán 1 chạm",
      body: "Kết xuất bút toán tiền lương sang MISA, FAST, Bravo, SAP mà không phải nhập liệu lại.",
      tone: "text-violet-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
      {/* Phiếu lương */}
      <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-6">
        <div>
          <div className="flex items-start justify-between gap-3 border-b border-slate-200 pb-3">
            <span>
              <span className="block text-[11px] font-extrabold uppercase tracking-wide text-blue-900">
                Công Ty Cổ Phần Công Nghệ ETEK
              </span>
              <span className="mt-0.5 block text-xs font-bold text-slate-800">
                PHIẾU LƯƠNG ĐIỆN TỬ — THÁNG 09/2026
              </span>
            </span>
            <span className="shrink-0 rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700">
              ĐÃ DUYỆT CHI
            </span>
          </div>

          <div className="mt-3 flex flex-wrap items-center justify-between gap-2 rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-xs text-slate-600">
            <span>
              Nhân sự: <strong className="text-slate-800">Hoàng Minh Quân</strong>
            </span>
            <span>
              Vị trí: <strong className="text-slate-800">Kỹ Sư Trưởng</strong>
            </span>
          </div>

          <dl className="mt-3.5 text-xs">
            {rows.map((r) => (
              <div key={r.label} className="flex items-center justify-between gap-3 border-b border-slate-100 py-1.5">
                <dt className="font-medium text-slate-600">{r.label}</dt>
                <dd className={`shrink-0 font-mono font-bold ${r.tone}`}>{r.value}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-3 flex items-center justify-between gap-3 rounded-xl border border-blue-200/80 bg-blue-50/80 p-3">
            <span className="text-xs font-extrabold uppercase tracking-wide text-blue-950">Thực lĩnh (NET)</span>
            <span className="font-mono text-base font-black text-blue-700 sm:text-lg">27.000.000 đ</span>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-slate-100 pt-3 text-[10px] text-slate-500">
          <span className="flex items-center gap-1.5 font-semibold text-emerald-700">
            <BadgeCheck className="h-4 w-4 shrink-0 text-emerald-600" />
            ĐÃ KÝ SỐ BỞI GIÁM ĐỐC TÀI CHÍNH
          </span>
          <span className="font-mono text-slate-400">C-CA: 99824-VN</span>
        </div>
      </div>

      {/* Động cơ tính lương */}
      <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-6">
        <div>
          <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <span>
              <span className="block text-xs font-bold text-slate-800">ĐỘNG CƠ TÍNH LƯƠNG 3P</span>
              <span className="block text-[11px] text-slate-500">Tự động hoá toàn bộ bảng lương &amp; KPI</span>
            </span>
            <span
              className={`shrink-0 rounded-lg border px-2.5 py-1 font-mono text-xs font-black transition-colors ${
                calculating ? "border-amber-200 bg-amber-50 text-amber-700" : "border-blue-200 bg-blue-50 text-blue-700"
              }`}
            >
              {calculating ? "···" : `${elapsed} GIÂY`}
            </span>
          </div>

          <ul className="mt-4 space-y-3 text-xs text-slate-700">
            {benefits.map((b) => (
              <li key={b.title} className="flex items-start gap-2.5">
                <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${b.tone}`} />
                <span>
                  <strong className="text-slate-900">{b.title}:</strong>
                  <span className="mt-0.5 block text-[11px] text-slate-500">{b.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 border-t border-slate-100 pt-3">
          <button
            type="button"
            onClick={onSimulate}
            disabled={calculating}
            className="flex w-full items-center justify-center gap-2 rounded-xl bg-slate-100 px-3 py-2 text-xs font-bold text-slate-800 transition-all hover:bg-slate-200/80 active:scale-[0.98] disabled:opacity-70"
          >
            {calculating ? (
              <>
                <RefreshCw className="h-3.5 w-3.5 animate-spin text-blue-600" />
                Đang tính 1.420 bảng lương…
              </>
            ) : (
              <>
                <Zap className="h-3.5 w-3.5 text-blue-600" />
                Mô phỏng tốc độ tính toán
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ======================= Phân hệ 03 — Bản quyền ======================= */

function LicenseModule() {
  const catalog = [
    { name: "Microsoft 365 Business & Copilot", note: "Kích hoạt < 15p", tone: "text-emerald-600" },
    { name: "Windows Server 2025 Standard/Data", note: "OEM / CSP gốc", tone: "text-blue-600" },
    { name: "Office LTSC 2024 vĩnh viễn", note: "Key chính hãng", tone: "text-violet-600" },
  ];

  const legal = [
    {
      title: "Đầy đủ chứng nhận CO/CQ bản gốc",
      body: "Chứng nhận xuất xứ và chất lượng do Microsoft ban hành — bản quyền sạch, không rủi ro crack hay mã độc.",
      tone: "text-emerald-600",
    },
    {
      title: "Hoá đơn điện tử VAT hợp lệ",
      body: "100% đơn hàng có hoá đơn GTGT mã cơ quan thuế, bảo vệ chi phí khấu trừ thuế doanh nghiệp.",
      tone: "text-blue-600",
    },
    {
      title: "Gắn tên miền riêng của doanh nghiệp",
      body: "License gắn thẳng vào tenant quản trị của bạn (@congty.vn) — bạn nắm toàn quyền sở hữu.",
      tone: "text-violet-600",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-5 lg:grid-cols-12">
      {/* Chứng thư */}
      <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-blue-200 bg-gradient-to-br from-white via-blue-50/30 to-slate-50 p-5 shadow-sm lg:col-span-6">
        <span className="pointer-events-none absolute -bottom-10 -right-10 h-28 w-28 rounded-full bg-amber-400/15 blur-xl" />

        <div>
          <div className="flex items-center justify-between gap-3 border-b border-blue-100 pb-3">
            <span className="flex items-center gap-2 text-xs font-extrabold tracking-wider text-blue-900">
              <Award className="h-5 w-5 text-blue-600" />
              MICROSOFT CSP TIER-1
            </span>
            <span className="shrink-0 rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[9px] font-bold text-emerald-700">
              CO/CQ 100%
            </span>
          </div>

          <div className="mt-3.5">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
              Đơn vị được uỷ quyền phân phối
            </p>
            <p className="mt-0.5 text-sm font-extrabold text-slate-900">CÔNG TY CỔ PHẦN CÔNG NGHỆ ETEK</p>
            <p className="mt-0.5 font-mono text-[10px] text-blue-700">MPN ID #6489210 • Microsoft Partner Network</p>
          </div>

          <ul className="mt-3.5 space-y-1.5 rounded-xl border border-slate-100 bg-white p-3 text-xs">
            {catalog.map((c) => (
              <li key={c.name} className="flex items-center justify-between gap-3">
                <span className="font-medium text-slate-600">• {c.name}</span>
                <span className={`shrink-0 font-mono text-[11px] font-bold ${c.tone}`}>{c.note}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-blue-100 pt-3 text-[10px]">
          <span className="font-mono font-semibold text-slate-700">Serial: VN-MS-2026-88492</span>
          <span className="font-bold text-emerald-600">Kích hoạt trực tiếp Admin Portal</span>
        </div>
      </div>

      {/* Hồ sơ pháp lý */}
      <div className="flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:col-span-6">
        <div>
          <div className="flex items-center justify-between gap-3 border-b border-slate-100 pb-3">
            <span>
              <span className="block text-xs font-bold text-slate-800">HỒ SƠ PHÁP LÝ BẢO VỆ DOANH NGHIỆP</span>
              <span className="block text-[11px] text-slate-500">Minh bạch tuyệt đối khi thanh kiểm tra thuế</span>
            </span>
            <span className="flex shrink-0 items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-1 text-[10px] font-bold text-blue-700">
              <Lock className="h-3 w-3" />
              HỢP PHÁP
            </span>
          </div>

          <ul className="mt-4 space-y-3 text-xs text-slate-700">
            {legal.map((l) => (
              <li key={l.title} className="flex items-start gap-2.5">
                <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${l.tone}`} />
                <span>
                  <strong className="text-slate-900">{l.title}:</strong>
                  <span className="mt-0.5 block text-[11px] text-slate-500">{l.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl border border-amber-200/80 bg-amber-50/80 p-3 text-amber-900">
          <span className="flex items-center gap-2 text-[11px] font-bold">
            <Award className="h-4 w-4 shrink-0 text-amber-600" />
            Hoàn tiền &amp; đền bù 200% nếu bản quyền không hợp lệ
          </span>
          <Link
            href="/san-pham?category=microsoft"
            className="flex shrink-0 items-center gap-0.5 text-[11px] font-bold text-blue-700 hover:underline"
          >
            Chi tiết
            <ChevronRight className="h-3 w-3" />
          </Link>
        </div>
      </div>
    </div>
  );
}
