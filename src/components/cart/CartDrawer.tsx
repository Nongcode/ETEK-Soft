"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Minus, Plus, ShoppingCart, Trash2, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { getProductById } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import Button from "@/components/ui/Button";

function BrandVisual({ brand, name }: { brand: string; name: string }) {
  const b = brand.toLowerCase();
  const n = name.toLowerCase();

  if (b.includes("microsoft") || n.includes("windows") || n.includes("office") || n.includes("microsoft")) {
    return (
      <div className="grid grid-cols-2 gap-1 w-6 h-6">
        <div className="rounded-[1.5px] bg-[#f25022]" />
        <div className="rounded-[1.5px] bg-[#7fba00]" />
        <div className="rounded-[1.5px] bg-[#00a4ef]" />
        <div className="rounded-[1.5px] bg-[#ffb900]" />
      </div>
    );
  }

  if (b.includes("kaspersky")) {
    return (
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-emerald-500 to-teal-700 text-white">
        <span className="text-xs font-black">K</span>
      </div>
    );
  }

  if (b.includes("adobe")) {
    return (
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-red-600 to-rose-700 text-white">
        <span className="text-xs font-black italic">Ad</span>
      </div>
    );
  }

  if (b.includes("autodesk")) {
    return (
      <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-blue-600 to-cyan-700 text-white">
        <span className="text-xs font-black">A</span>
      </div>
    );
  }

  return (
    <div className="flex h-7 w-7 items-center justify-center rounded-md bg-gradient-to-br from-primary-dark to-primary text-white">
      <span className="text-[10px] font-black uppercase">{brand.slice(0, 2)}</span>
    </div>
  );
}

export default function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem } = useCart();

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function onKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeCart();
    }
    if (isOpen) window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen, closeCart]);

  if (!isOpen) return null;

  const lines = items
    .map((line) => ({ line, product: getProductById(line.productId) }))
    .filter((entry): entry is { line: typeof items[number]; product: NonNullable<ReturnType<typeof getProductById>> } => Boolean(entry.product));

  const subtotal = lines.reduce((sum, { line, product }) => sum + product.price * line.quantity, 0);

  return (
    <div className="fixed inset-0 z-[70]" role="dialog" aria-modal="true" aria-label="Giỏ hàng">
      <button
        type="button"
        aria-label="Đóng giỏ hàng"
        onClick={closeCart}
        className="absolute inset-0 bg-navy/40 backdrop-blur-[1px]"
      />

      <div className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-white shadow-2xl">
        <div className="flex h-16 shrink-0 items-center justify-between border-b border-border px-5">
          <h2 className="flex items-center gap-2 text-[15px] font-bold text-navy">
            <ShoppingCart className="h-[18px] w-[18px] text-primary" aria-hidden />
            Giỏ hàng {lines.length > 0 && <span className="text-muted font-medium">({lines.length})</span>}
          </h2>
          <button
            type="button"
            onClick={closeCart}
            aria-label="Đóng giỏ hàng"
            className="flex h-9 w-9 items-center justify-center rounded-full text-navy hover:bg-slate-100"
          >
            <X className="h-[18px] w-[18px]" aria-hidden />
          </button>
        </div>

        {lines.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center px-6 text-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-light text-primary">
              <ShoppingCart className="h-6 w-6" aria-hidden />
            </span>
            <p className="mt-4 text-sm font-semibold text-navy">Giỏ hàng của bạn đang trống</p>
            <p className="mt-1.5 text-sm text-muted">Khám phá các phần mềm bản quyền phù hợp với doanh nghiệp của bạn.</p>
            <Button href="/san-pham" className="mt-5" onClick={closeCart}>
              Khám phá sản phẩm
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-5 py-4">
              <ul className="space-y-4">
                {lines.map(({ line, product }) => (
                  <li key={product.id} className="flex gap-3 border-b border-border pb-4 last:border-b-0">
                    <Link
                      href={`/san-pham/${product.slug}`}
                      onClick={closeCart}
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/40 p-1.5 shadow-xs"
                    >
                      <BrandVisual brand={product.brand} name={product.name} />
                    </Link>
                    <div className="min-w-0 flex-1">
                      <Link
                        href={`/san-pham/${product.slug}`}
                        onClick={closeCart}
                        className="line-clamp-2 text-sm font-semibold leading-snug text-navy hover:text-primary"
                      >
                        {product.name}
                      </Link>
                      <p className="mt-0.5 text-xs text-muted">{product.licenseType}</p>

                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center rounded-lg border border-border">
                          <button
                            type="button"
                            aria-label="Giảm số lượng"
                            onClick={() => updateQuantity(product.id, line.quantity - 1)}
                            className="flex h-7 w-7 items-center justify-center text-navy hover:text-primary"
                          >
                            <Minus className="h-3.5 w-3.5" aria-hidden />
                          </button>
                          <span className="w-7 text-center text-xs font-bold text-navy">{line.quantity}</span>
                          <button
                            type="button"
                            aria-label="Tăng số lượng"
                            onClick={() => updateQuantity(product.id, line.quantity + 1)}
                            className="flex h-7 w-7 items-center justify-center text-navy hover:text-primary"
                          >
                            <Plus className="h-3.5 w-3.5" aria-hidden />
                          </button>
                        </div>
                        <span className="text-sm font-bold text-navy">{formatPrice(product.price * line.quantity)}</span>
                      </div>
                    </div>
                    <button
                      type="button"
                      aria-label={`Xóa ${product.name} khỏi giỏ hàng`}
                      onClick={() => removeItem(product.id)}
                      className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-muted hover:bg-danger/10 hover:text-danger"
                    >
                      <Trash2 className="h-4 w-4" aria-hidden />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="shrink-0 border-t border-border p-5">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-muted">Tạm tính</span>
                <span className="text-lg font-extrabold text-navy">{formatPrice(subtotal)}</span>
              </div>
              <Button href="/gio-hang" size="lg" className="w-full" onClick={closeCart}>
                Xem giỏ hàng &amp; đặt hàng
              </Button>
              <button
                type="button"
                onClick={closeCart}
                className="mt-2.5 w-full text-center text-sm font-medium text-muted hover:text-primary"
              >
                Tiếp tục mua sắm
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
