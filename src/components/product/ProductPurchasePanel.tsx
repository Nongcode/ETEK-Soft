"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FileText, Headphones, Minus, Plus, ShieldCheck, ShoppingCart, Truck } from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import Button from "@/components/ui/Button";

export default function ProductPurchasePanel({ product }: { product: Product }) {
  const [qty, setQty] = useState(1);
  const { addItem } = useCart();
  const router = useRouter();

  function handleBuyNow() {
    addItem(product.id, qty);
    router.push("/gio-hang");
  }

  function handleAddToCart() {
    addItem(product.id, qty);
  }

  return (
    <div className="mt-6 rounded-[2rem] border border-blue-100/90 bg-white/95 p-6 sm:p-7 shadow-[0_20px_50px_-15px_rgba(37,99,235,0.08)] backdrop-blur-sm">
      {/* Quantity Stepper */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-navy">Số lượng license:</span>
        <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50/80 p-1">
          <button
            type="button"
            aria-label="Giảm số lượng"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-navy transition-all hover:bg-white hover:text-primary hover:shadow-xs active:scale-90 disabled:opacity-30 disabled:hover:bg-transparent"
            disabled={qty <= 1}
          >
            <Minus className="h-3.5 w-3.5" aria-hidden />
          </button>

          <span className="w-12 text-center text-sm font-extrabold text-navy font-mono" aria-live="polite">
            {qty}
          </span>

          <button
            type="button"
            aria-label="Tăng số lượng"
            onClick={() => setQty((q) => Math.min(99, q + 1))}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-navy transition-all hover:bg-white hover:text-primary hover:shadow-xs active:scale-90"
          >
            <Plus className="h-3.5 w-3.5" aria-hidden />
          </button>
        </div>
      </div>

      {/* Total Amount */}
      <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
        <div>
          <span className="text-xs text-slate-400 font-medium uppercase tracking-wider">Tổng tiền thanh toán</span>
          <p className="text-xs text-slate-500 mt-0.5">Đã bao gồm thuế GTGT (VAT 10%)</p>
        </div>
        <span className="text-2xl sm:text-3xl font-black bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent font-mono tracking-tight">
          {formatPrice(product.price * qty)}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button
          type="button"
          onClick={handleBuyNow}
          size="lg"
          className="flex-1 justify-center gap-2 font-extrabold bg-gradient-to-r from-blue-600 via-blue-600 to-cyan-500 text-white shadow-[0_8px_25px_rgba(37,99,235,0.25)] hover:shadow-[0_12px_32px_rgba(37,99,235,0.4)] hover:scale-[1.02] active:scale-95 transition-all duration-300"
        >
          <ShoppingCart className="h-4 w-4" aria-hidden />
          <span>Mua Ngay Bản Quyền</span>
        </Button>
        <Button
          type="button"
          onClick={handleAddToCart}
          size="lg"
          variant="outline"
          className="flex-1 justify-center font-bold border-2 border-slate-200 hover:border-blue-400 hover:bg-blue-50/50 hover:text-blue-700 active:scale-95 transition-all duration-200"
        >
          Thêm Vào Giỏ Hàng
        </Button>
      </div>

      <p className="mt-3.5 text-center text-xs text-slate-500">
        Chưa chắc chắn lựa chọn?{" "}
        <Link href="/tu-van" className="font-bold text-primary hover:underline">
          Nhận tư vấn cấu hình & giải pháp 24/7
        </Link>
      </p>

      {/* Trust guarantees grid */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2.5 border-t border-slate-100 pt-5 text-xs text-slate-600">
        <div className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/60 p-2.5 transition-colors hover:bg-white hover:border-blue-200">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-50 text-emerald-600">
            <ShieldCheck className="h-4 w-4" aria-hidden />
          </span>
          <span className="text-[11.5px] font-medium leading-tight text-slate-700">100% Chính hãng xác thực</span>
        </div>

        <div className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/60 p-2.5 transition-colors hover:bg-white hover:border-blue-200">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
            <FileText className="h-4 w-4" aria-hidden />
          </span>
          <span className="text-[11.5px] font-medium leading-tight text-slate-700">Hóa đơn VAT điện tử hợp lệ</span>
        </div>

        <div className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/60 p-2.5 transition-colors hover:bg-white hover:border-blue-200">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
            <Truck className="h-4 w-4" aria-hidden />
          </span>
          <span className="text-[11.5px] font-medium leading-tight text-slate-700">Giao key Email 15 - 30 phút</span>
        </div>

        <div className="flex items-center gap-2.5 rounded-xl border border-slate-100 bg-slate-50/60 p-2.5 transition-colors hover:bg-white hover:border-blue-200">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
            <Headphones className="h-4 w-4" aria-hidden />
          </span>
          <span className="text-[11.5px] font-medium leading-tight text-slate-700">Cài đặt từ xa UltraViewer 24/7</span>
        </div>
      </div>
    </div>
  );
}
