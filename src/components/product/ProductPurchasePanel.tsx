"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FileText, Minus, Plus, ShieldCheck, ShoppingCart, Truck } from "lucide-react";
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
    <div className="mt-6 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm">
      {/* Quantity Stepper */}
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-navy">Số lượng license:</span>
        <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50/50 p-0.5">
          <button
            type="button"
            aria-label="Giảm số lượng"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-navy transition-colors hover:bg-white hover:text-primary hover:shadow-xs disabled:opacity-30 disabled:hover:bg-transparent"
            disabled={qty <= 1}
          >
            <Minus className="h-3.5 w-3.5" aria-hidden />
          </button>

          <span className="w-12 text-center text-sm font-extrabold text-navy" aria-live="polite">
            {qty}
          </span>

          <button
            type="button"
            aria-label="Tăng số lượng"
            onClick={() => setQty((q) => Math.min(99, q + 1))}
            className="flex h-8 w-8 items-center justify-center rounded-lg text-navy transition-colors hover:bg-white hover:text-primary hover:shadow-xs"
          >
            <Plus className="h-3.5 w-3.5" aria-hidden />
          </button>
        </div>
      </div>

      {/* Total Amount */}
      <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
        <div>
          <span className="text-xs text-slate-400 font-medium">Tổng tiền thanh toán</span>
          <p className="text-xs text-slate-500">Đã bao gồm thuế GTGT (VAT)</p>
        </div>
        <span className="text-2xl font-black text-navy tracking-tight">
          {formatPrice(product.price * qty)}
        </span>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <Button
          type="button"
          onClick={handleBuyNow}
          size="lg"
          className="flex-1 justify-center gap-2 font-bold shadow-md hover:shadow-lg transition-all"
        >
          <ShoppingCart className="h-4 w-4" aria-hidden />
          <span>Mua ngay</span>
        </Button>
        <Button
          type="button"
          onClick={handleAddToCart}
          size="lg"
          variant="outline"
          className="flex-1 justify-center font-bold border-slate-200 hover:border-primary hover:text-primary transition-all"
        >
          Thêm vào giỏ hàng
        </Button>
      </div>

      <p className="mt-3 text-center text-xs text-slate-500">
        Chưa chắc chắn lựa chọn?{" "}
        <Link href="/tu-van" className="font-semibold text-primary hover:underline">
          Nhận tư vấn miễn phí
        </Link>
      </p>

      {/* Trust guarantees list */}
      <div className="mt-6 grid grid-cols-1 gap-2.5 border-t border-slate-100 pt-4 text-xs text-slate-600">
        <span className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-primary shrink-0" aria-hidden />
          <span>Bản quyền 100% chính hãng, xác thực trực tuyến</span>
        </span>
        <span className="flex items-center gap-2">
          <FileText className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden />
          <span>Hóa đơn điện tử VAT hợp lệ chi phí doanh nghiệp</span>
        </span>
        <span className="flex items-center gap-2">
          <Truck className="h-4 w-4 text-blue-600 shrink-0" aria-hidden />
          <span>Nhận License Key qua Email trong 15 - 30 phút</span>
        </span>
      </div>
    </div>
  );
}
