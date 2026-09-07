"use client";

import { useState } from "react";
import { Minus, Plus, ShieldCheck, Truck } from "lucide-react";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";

export default function ProductPurchasePanel({ price }: { price: number }) {
  const [qty, setQty] = useState(1);

  return (
    <div className="mt-6 rounded-[var(--radius-md)] border border-border bg-white p-5">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-navy">Số lượng</span>
        <div className="flex items-center rounded-[var(--radius-sm)] border border-border">
          <button
            type="button"
            aria-label="Giảm số lượng"
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="flex h-9 w-9 items-center justify-center text-navy hover:text-primary disabled:opacity-40"
            disabled={qty <= 1}
          >
            <Minus className="h-4 w-4" aria-hidden />
          </button>
          <span className="w-10 text-center text-sm font-semibold text-navy" aria-live="polite">
            {qty}
          </span>
          <button
            type="button"
            aria-label="Tăng số lượng"
            onClick={() => setQty((q) => Math.min(99, q + 1))}
            className="flex h-9 w-9 items-center justify-center text-navy hover:text-primary"
          >
            <Plus className="h-4 w-4" aria-hidden />
          </button>
        </div>
      </div>

      <div className="mt-4 flex items-center justify-between border-t border-border pt-4">
        <span className="text-sm font-medium text-muted">Tạm tính</span>
        <span className="text-lg font-extrabold text-navy">{formatPrice(price * qty)}</span>
      </div>

      <div className="mt-5 flex flex-col gap-2.5 sm:flex-row">
        <Button size="lg" className="flex-1">
          Mua ngay
        </Button>
        <Button href="/tu-van" size="lg" variant="outline" className="flex-1">
          Nhận tư vấn
        </Button>
      </div>

      <div className="mt-5 flex flex-col gap-2 border-t border-border pt-4 text-xs text-muted">
        <span className="flex items-center gap-2">
          <ShieldCheck className="h-4 w-4 text-primary" aria-hidden /> Bản quyền chính hãng, có hóa đơn VAT
        </span>
        <span className="flex items-center gap-2">
          <Truck className="h-4 w-4 text-primary" aria-hidden /> Nhận license qua email trong 15-30 phút
        </span>
      </div>
    </div>
  );
}
