"use client";

import { useState } from "react";
import {
  CheckCircle2,
  Cpu,
  FileCheck,
  HelpCircle,
  Info,
  Key,
  Sparkles,
} from "lucide-react";
import { Product } from "@/types";
import { cn } from "@/lib/utils";

const tabs = [
  { id: "Tổng quan", label: "Tổng quan", icon: Info },
  { id: "Tính năng", label: "Tính năng nổi bật", icon: Sparkles },
  { id: "Yêu cầu hệ thống", label: "Yêu cầu hệ thống", icon: Cpu },
  { id: "Thông tin license", label: "Thông tin license", icon: Key },
  { id: "Hướng dẫn kích hoạt", label: "Hướng dẫn kích hoạt", icon: FileCheck },
  { id: "FAQ", label: "Hỏi đáp FAQ", icon: HelpCircle },
] as const;

export default function ProductTabs({ product }: { product: Product }) {
  const [active, setActive] = useState<(typeof tabs)[number]["id"]>("Tổng quan");

  return (
    <div className="w-full">
      {/* Pill-style Tab Bar */}
      <div
        role="tablist"
        aria-label="Thông tin sản phẩm"
        className="flex gap-1.5 overflow-x-auto rounded-2xl border border-slate-200/80 bg-slate-100/70 p-1.5 no-scrollbar backdrop-blur-sm"
      >
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isSelected = active === tab.id;
          return (
            <button
              key={tab.id}
              role="tab"
              aria-selected={isSelected}
              onClick={() => setActive(tab.id)}
              className={cn(
                "flex shrink-0 items-center gap-2 rounded-xl px-4 py-2.5 text-xs sm:text-sm font-bold transition-all duration-200",
                isSelected
                  ? "bg-white text-blue-700 shadow-sm ring-1 ring-slate-900/5 scale-[1.01]"
                  : "text-slate-600 hover:bg-white/60 hover:text-slate-900"
              )}
            >
              <Icon className={cn("h-4 w-4", isSelected ? "text-blue-600" : "text-slate-400")} />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab Panels */}
      <div className="pt-7 animate-in fade-in duration-300">
        {/* 1. Tổng quan */}
        {active === "Tổng quan" && (
          <div className="max-w-4xl space-y-4 text-sm sm:text-base leading-relaxed text-slate-700">
            <p className="font-normal text-slate-600 leading-relaxed whitespace-pre-line">
              {product.description}
            </p>
          </div>
        )}

        {/* 2. Tính năng nổi bật */}
        {active === "Tính năng" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 max-w-4xl">
            {product.features.map((f, i) => (
              <div
                key={i}
                className="group flex items-start gap-3 rounded-2xl border border-slate-200/80 bg-slate-50/50 p-4 transition-all duration-200 hover:border-blue-300 hover:bg-white hover:shadow-xs"
              >
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600 transition-transform group-hover:scale-110 mt-0.5">
                  <CheckCircle2 className="h-4 w-4" />
                </span>
                <span className="text-sm font-semibold text-slate-800 leading-snug">{f}</span>
              </div>
            ))}
          </div>
        )}

        {/* 3. Yêu cầu hệ thống */}
        {active === "Yêu cầu hệ thống" && (
          <div className="max-w-3xl space-y-3">
            {product.systemRequirements.map((r, i) => (
              <div
                key={i}
                className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/70 p-3.5 text-sm text-slate-700"
              >
                <span className="mt-1 flex h-2 w-2 shrink-0 rounded-full bg-blue-600 shadow-xs" />
                <span className="font-medium leading-relaxed">{r}</span>
              </div>
            ))}
          </div>
        )}

        {/* 4. Thông tin license */}
        {active === "Thông tin license" && (
          <div className="grid max-w-3xl grid-cols-1 sm:grid-cols-2 gap-3">
            {[
              ["Loại hình License", product.licenseType],
              ["Thời hạn bản quyền", product.duration],
              ["Số lượng thiết bị / User", product.seats],
              ["Đối tượng áp dụng", product.audience.join(", ")],
              ["Hệ điều hành tương thích", product.os?.join(", ") ?? "Không giới hạn"],
              ["Nhà sản xuất / Hãng", product.brand],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-xl border border-slate-200/70 bg-slate-50/50 p-4 transition-colors hover:bg-white"
              >
                <dt className="text-[11px] font-bold uppercase tracking-wider text-slate-400">{label}</dt>
                <dd className="mt-1 text-sm font-bold text-navy">{value}</dd>
              </div>
            ))}
          </div>
        )}

        {/* 5. Hướng dẫn kích hoạt */}
        {active === "Hướng dẫn kích hoạt" && (
          <div className="max-w-3xl space-y-3.5">
            {[
              "Kiểm tra hòm thư email đã đăng ký để nhận License Key và hướng dẫn kích hoạt chính ngạch.",
              "Mở phần mềm và truy cập mục Cài đặt (Settings) ➔ Tài khoản (Account) ➔ Kích hoạt bản quyền (Activate).",
              "Nhập chính xác mã bản quyền dạng chuỗi ký tự được cấp trong hóa đơn xác nhận.",
              "Hệ thống tự động kết nối máy chủ Cloud xác thực. Sau khi thành công, toàn bộ tính năng cao cấp sẽ sẵn sàng sử dụng.",
            ].map((step, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 rounded-2xl border border-slate-200/80 bg-white p-4 shadow-xs"
              >
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 to-cyan-500 text-xs font-black text-white shadow-sm font-mono">
                  0{idx + 1}
                </span>
                <p className="pt-1 text-sm font-medium leading-relaxed text-slate-700">{step}</p>
              </div>
            ))}
          </div>
        )}

        {/* 6. FAQ */}
        {active === "FAQ" && (
          <div className="max-w-3xl space-y-3">
            {product.faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200/80 bg-white p-5 shadow-xs transition-colors hover:border-blue-300"
              >
                <h4 className="text-sm sm:text-base font-bold text-navy flex items-center gap-2">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700 text-xs font-bold font-mono">
                    Q
                  </span>
                  {faq.question}
                </h4>
                <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 pl-7">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
