"use client";

import { useState } from "react";
import { X, Gift, Check, Copy, Sparkles, Tag, Clock, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Voucher {
  id: string;
  code: string;
  title: string;
  discount: string;
  description: string;
  minSpend: string;
  expires: string;
  tag: string;
  badgeColor: string;
}

const activeVouchers: Voucher[] = [
  {
    id: "v1",
    code: "ETEK500K",
    title: "Voucher Chào Mừng Khách Hàng Mới",
    discount: "Giảm 500.000đ",
    description: "Áp dụng cho gói Bản quyền Microsoft 365 Business hoặc HRM 4.0 đầu tiên.",
    minSpend: "Đơn từ 3.000.000đ",
    expires: "Còn 15 ngày",
    tag: "Độc Quyền",
    badgeColor: "bg-blue-600 text-white",
  },
  {
    id: "v2",
    code: "AIHRM2026",
    title: "Ưu Đãi Công Nghệ AI FaceID",
    discount: "Miễn Phí 1 Tháng",
    description: "Tặng 01 tháng sử dụng module FaceID chống gian lận định vị GPS khi mua gói năm HRM.",
    minSpend: "Gói HRM từ 20 nhân sự",
    expires: "Còn 08 ngày",
    tag: "Hot Deal",
    badgeColor: "bg-rose-500 text-white",
  },
  {
    id: "v3",
    code: "M365BIZ",
    title: "Chiết Khấu Bản Quyền Microsoft 365",
    discount: "Giảm Thêm 15%",
    description: "Áp dụng cho Microsoft 365 Business Standard & Copilot bản quyền xuất VAT CO/CQ.",
    minSpend: "Đơn từ 5 user",
    expires: "Còn 22 ngày",
    tag: "Doanh Nghiệp",
    badgeColor: "bg-emerald-600 text-white",
  },
  {
    id: "v4",
    code: "FREESETUP",
    title: "Miễn Phí Khảo Sát & Triển Khai",
    discount: "Trị Giá 2.500.000đ",
    description: "Kỹ sư chuyên trách của ETEK đến tận nơi khảo sát hạ tầng máy chủ và cài đặt hoàn tất.",
    minSpend: "Gói Toàn Diện",
    expires: "Không giới hạn",
    tag: "VIP Service",
    badgeColor: "bg-amber-500 text-slate-900",
  },
];

interface VoucherDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onApplyVoucher?: (code: string) => void;
}

export default function VoucherDrawer({ isOpen, onClose, onApplyVoucher }: VoucherDrawerProps) {
  const [copiedCode, setCopiedCode] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleCopy = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopiedCode(code);
    if (onApplyVoucher) onApplyVoucher(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs transition-opacity"
        onClick={onClose}
      />

      {/* Drawer Panel */}
      <div className="relative z-10 flex h-full w-full max-w-md flex-col bg-slate-50 shadow-2xl transition-transform animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-amber-500 to-rose-500 text-white shadow-md shadow-rose-500/20">
              <Gift className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-bold text-slate-900 text-base">Kho Voucher & Ưu Đãi</h3>
              <p className="text-[11px] text-slate-500">Mã giảm giá sự kiện đang hoạt động</p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Đóng kho voucher"
            className="rounded-full p-2 text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Info Banner */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-white">
          <div className="flex items-center gap-2 text-xs font-semibold">
            <Sparkles className="h-4 w-4 text-amber-300" />
            <span>Ưu đãi áp dụng tức thì khi thanh toán đơn hàng</span>
          </div>
        </div>

        {/* Voucher List */}
        <div className="flex-1 overflow-y-auto p-6 space-y-3.5">
          {activeVouchers.map((v) => {
            const isCopied = copiedCode === v.code;
            return (
              <div
                key={v.id}
                className="relative overflow-hidden rounded-2xl border border-slate-200/90 bg-white p-4 shadow-xs hover:shadow-md transition-all hover:border-blue-300"
              >
                <div className="flex items-center justify-between">
                  <span
                    className={cn(
                      "rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider",
                      v.badgeColor
                    )}
                  >
                    {v.tag}
                  </span>
                  <span className="flex items-center gap-1 text-[11px] font-medium text-slate-400">
                    <Clock className="h-3 w-3" />
                    {v.expires}
                  </span>
                </div>

                <div className="mt-2">
                  <h4 className="font-bold text-slate-900 text-sm">{v.title}</h4>
                  <div className="text-base font-extrabold text-blue-600 mt-0.5">{v.discount}</div>
                  <p className="mt-1 text-xs text-slate-600 leading-relaxed">{v.description}</p>
                </div>

                <div className="my-2.5 border-t border-dashed border-slate-200 relative">
                  <div className="absolute -left-6 -top-2 h-4 w-4 rounded-full bg-slate-50" />
                  <div className="absolute -right-6 -top-2 h-4 w-4 rounded-full bg-slate-50" />
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <Tag className="h-3.5 w-3.5 text-slate-400" />
                    <span className="font-mono text-xs font-bold text-slate-800 tracking-wider">
                      {v.code}
                    </span>
                    <span className="text-[10px] text-slate-400">({v.minSpend})</span>
                  </div>

                  <button
                    onClick={() => handleCopy(v.code)}
                    className={cn(
                      "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-bold transition-all",
                      isCopied
                        ? "bg-emerald-600 text-white"
                        : "bg-blue-50 text-blue-700 hover:bg-blue-600 hover:text-white"
                    )}
                  >
                    {isCopied ? (
                      <>
                        <Check className="h-3.5 w-3.5" />
                        <span>Đã Lấy</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Lấy Mã</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Footer */}
        <div className="border-t border-slate-200 bg-white p-4 text-center">
          <p className="text-xs text-slate-500">
            Cần mã ưu đãi riêng cho hợp đồng Doanh Nghiệp quy mô lớn?
          </p>
          <a
            href="/tu-van"
            className="mt-1 inline-flex items-center gap-1 text-xs font-bold text-blue-600 hover:underline"
          >
            <span>Liên hệ chuyên viên tư vấn riêng</span>
            <ArrowRight className="h-3 w-3" />
          </a>
        </div>
      </div>
    </div>
  );
}
