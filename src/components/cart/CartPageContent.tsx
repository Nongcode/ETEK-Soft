"use client";

import Link from "next/link";
import {
  ArrowRight,
  FileCheck,
  Heart,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  ShoppingCart,
  Trash2,
  Truck,
} from "lucide-react";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CartBanner from "@/components/cart/CartBanner";
import { useCart, type CartLine } from "@/context/CartContext";
import { getProductById } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types";

/* Helper Brand Visual representation */
function BrandVisual({ brand, name }: { brand: string; name: string }) {
  const b = brand.toLowerCase();
  const n = name.toLowerCase();

  if (b.includes("microsoft") || n.includes("windows") || n.includes("office") || n.includes("microsoft")) {
    return (
      <div className="grid grid-cols-2 gap-1 w-8 h-8">
        <div className="rounded-[2px] bg-[#f25022] shadow-xs" />
        <div className="rounded-[2px] bg-[#7fba00] shadow-xs" />
        <div className="rounded-[2px] bg-[#00a4ef] shadow-xs" />
        <div className="rounded-[2px] bg-[#ffb900] shadow-xs" />
      </div>
    );
  }

  if (b.includes("kaspersky")) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-xs">
        <span className="text-base font-black tracking-tighter">K</span>
      </div>
    );
  }

  if (b.includes("adobe")) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-rose-700 text-white shadow-xs">
        <span className="text-sm font-black italic tracking-tighter">Ad</span>
      </div>
    );
  }

  if (b.includes("autodesk")) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-700 text-white shadow-xs">
        <span className="text-base font-black tracking-tighter">A</span>
      </div>
    );
  }

  if (b.includes("bitdefender")) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-slate-900 via-red-900 to-red-600 text-white shadow-xs">
        <span className="text-base font-black tracking-tighter">B</span>
      </div>
    );
  }

  if (b.includes("eset")) {
    return (
      <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-xs">
        <span className="text-sm font-black tracking-tighter">e</span>
      </div>
    );
  }

  return (
    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-primary-dark to-primary text-white shadow-xs">
      <span className="text-xs font-black uppercase tracking-wider">{brand.slice(0, 2)}</span>
    </div>
  );
}

export default function CartPageContent() {
  const { items, updateQuantity, removeItem, clearCart } = useCart();

  const lines = items
    .map((line) => ({ line, product: getProductById(line.productId) }))
    .filter((entry): entry is { line: CartLine; product: Product } => Boolean(entry.product));

  const subtotal = lines.reduce((sum, { line, product }) => sum + product.price * line.quantity, 0);
  const totalCount = lines.reduce((sum, { line }) => sum + line.quantity, 0);

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* Dedicated Cart Banner with Thank You Note */}
      <CartBanner totalItems={totalCount} />

      <Container className="py-8">
        {lines.length === 0 ? (
          <div className="flex flex-col items-center rounded-3xl border border-dashed border-slate-200 bg-white py-20 text-center shadow-xs">
            <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 text-primary shadow-xs">
              <ShoppingBag className="h-8 w-8" aria-hidden />
            </span>
            <h2 className="mt-5 text-xl font-bold text-navy">Giỏ hàng của bạn đang trống</h2>
            <p className="mt-2 max-w-md text-sm text-slate-500 leading-relaxed">
              Bạn chưa thêm sản phẩm phần mềm nào vào giỏ hàng. Hãy khám phá kho bản quyền chính hãng tại ETEK SOFTS ngay hôm nay!
            </p>
            <Button href="/san-pham" size="lg" className="mt-6 font-bold shadow-md hover:shadow-lg">
              Khám phá sản phẩm
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_380px]">
            {/* Left: Cart Items List */}
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-1">
                <h2 className="text-base font-bold text-navy">
                  Danh sách sản phẩm ({totalCount} license)
                </h2>
                <button
                  type="button"
                  onClick={clearCart}
                  className="text-xs font-semibold text-slate-400 hover:text-danger transition-colors"
                >
                  Xóa toàn bộ
                </button>
              </div>

              {lines.map(({ line, product }) => (
                <div
                  key={product.id}
                  className="group flex flex-col gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-all hover:border-primary/30 sm:flex-row sm:items-center"
                >
                  {/* Visual Brand Box */}
                  <Link
                    href={`/san-pham/${product.slug}`}
                    className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl border border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50/40 p-2 shadow-xs transition-transform group-hover:scale-105"
                  >
                    <BrandVisual brand={product.brand} name={product.name} />
                  </Link>

                  {/* Product Details */}
                  <div className="min-w-0 flex-1">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      {product.brand}
                    </span>
                    <Link
                      href={`/san-pham/${product.slug}`}
                      className="block line-clamp-1 text-[15.5px] font-bold text-navy transition-colors hover:text-primary"
                    >
                      {product.name}
                    </Link>

                    <div className="mt-1.5 flex flex-wrap items-center gap-2 text-xs text-slate-500">
                      <span className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                        {product.licenseType}
                      </span>
                      <span className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                        {product.duration}
                      </span>
                      <span className="rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 text-[11px] font-medium text-slate-600">
                        {product.seats}
                      </span>
                    </div>
                  </div>

                  {/* Quantity & Price Action */}
                  <div className="flex items-center justify-between gap-6 sm:justify-end border-t border-slate-100 pt-3 sm:border-t-0 sm:pt-0">
                    {/* Stepper */}
                    <div className="flex items-center rounded-xl border border-slate-200 bg-slate-50/60 p-0.5">
                      <button
                        type="button"
                        aria-label="Giảm số lượng"
                        onClick={() => updateQuantity(product.id, line.quantity - 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-navy transition-colors hover:bg-white hover:text-primary hover:shadow-xs disabled:opacity-30"
                        disabled={line.quantity <= 1}
                      >
                        <Minus className="h-3.5 w-3.5" aria-hidden />
                      </button>
                      <span className="w-10 text-center text-sm font-extrabold text-navy" aria-live="polite">
                        {line.quantity}
                      </span>
                      <button
                        type="button"
                        aria-label="Tăng số lượng"
                        onClick={() => updateQuantity(product.id, line.quantity + 1)}
                        className="flex h-8 w-8 items-center justify-center rounded-lg text-navy transition-colors hover:bg-white hover:text-primary hover:shadow-xs"
                      >
                        <Plus className="h-3.5 w-3.5" aria-hidden />
                      </button>
                    </div>

                    {/* Total item price */}
                    <span className="w-32 shrink-0 text-right text-base font-black tracking-tight text-navy">
                      {formatPrice(product.price * line.quantity)}
                    </span>

                    {/* Delete button */}
                    <button
                      type="button"
                      aria-label={`Xóa ${product.name} khỏi giỏ hàng`}
                      onClick={() => removeItem(product.id)}
                      className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-slate-400 transition-colors hover:bg-rose-50 hover:text-danger"
                    >
                      <Trash2 className="h-4 w-4" aria-hidden />
                    </button>
                  </div>
                </div>
              ))}

              {/* Bottom Actions */}
              <div className="flex items-center justify-between pt-2">
                <Link
                  href="/san-pham"
                  className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:text-primary-dark transition-colors"
                >
                  <span>← Tiếp tục mua sắm</span>
                </Link>
              </div>

              {/* Customer Appreciation & Security Guarantee Card */}
              <div className="mt-8 rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50/70 via-indigo-50/40 to-slate-50 p-5 shadow-xs">
                <div className="flex items-start gap-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-white shadow-xs">
                    <Heart className="h-4 w-4 fill-white" aria-hidden />
                  </span>
                  <div>
                    <h3 className="text-sm font-bold text-navy">
                      Đồng hành &amp; Bảo hành bản quyền suốt vòng đời
                    </h3>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600">
                      Mỗi đơn hàng tại ETEK SOFTS đều được gán chuyên viên hỗ trợ riêng. Nếu bạn gặp bất kỳ khó khăn nào trong quá trình nhập key, kích hoạt hoặc cài đặt phần mềm, đội ngũ IT của chúng tôi sẵn sàng kết nối hỗ trợ UltraViewer / AnyDesk từ xa ngay lập tức.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Order Summary Sidebar */}
            <aside className="h-fit rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm lg:sticky lg:top-24">
              <div className="flex items-center gap-2 border-b border-slate-100 pb-4">
                <ShoppingCart className="h-4 w-4 text-primary" aria-hidden />
                <h2 className="text-base font-bold text-navy">Tóm tắt đơn hàng</h2>
              </div>

              <div className="mt-4 space-y-3 border-b border-slate-100 pb-4 text-sm">
                <div className="flex items-center justify-between text-slate-600">
                  <span>Tạm tính ({totalCount} license)</span>
                  <span className="font-bold text-navy">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Thuế GTGT (VAT 10%)</span>
                  <span className="font-bold text-emerald-600">Đã bao gồm VAT</span>
                </div>
                <div className="flex items-center justify-between text-slate-600">
                  <span>Phí giao nhận license</span>
                  <span className="font-bold text-emerald-600">Miễn phí qua Email</span>
                </div>
              </div>

              {/* Total Price */}
              <div className="mt-5 flex items-baseline justify-between">
                <div>
                  <span className="block text-xs font-medium text-slate-400">Tổng thanh toán:</span>
                  <span className="text-xs text-slate-500">Giá thanh toán cuối cùng</span>
                </div>
                <span className="text-2xl font-black tracking-tight text-navy">
                  {formatPrice(subtotal)}
                </span>
              </div>

              {/* Order Button */}
              <Button
                href="/tu-van"
                size="lg"
                className="mt-6 w-full justify-center gap-2 font-bold shadow-md hover:shadow-lg transition-all"
              >
                <span>Tiến hành đặt hàng</span>
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Button>

              <Button
                href="/tu-van"
                size="md"
                variant="outline"
                className="mt-3 w-full justify-center font-bold border-slate-200 text-slate-700 hover:border-primary hover:text-primary transition-all"
              >
                Báo giá doanh nghiệp số lượng lớn
              </Button>

              {/* Trust badges checklist */}
              <div className="mt-6 flex flex-col gap-2.5 border-t border-slate-100 pt-5 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="h-4 w-4 text-primary shrink-0" aria-hidden />
                  <span>Cam kết license bản quyền 100% chính hãng</span>
                </div>
                <div className="flex items-center gap-2">
                  <FileCheck className="h-4 w-4 text-emerald-600 shrink-0" aria-hidden />
                  <span>Xuất hóa đơn VAT điện tử trong ngày</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="h-4 w-4 text-blue-600 shrink-0" aria-hidden />
                  <span>Kích hoạt qua email trong vòng 15 - 30 phút</span>
                </div>
              </div>
            </aside>
          </div>
        )}
      </Container>
    </div>
  );
}
