import Link from "next/link";
import { ArrowRight, Star, Sparkles, Headset } from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import Badge, { productBadgeTone } from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import AddToCartButton from "@/components/cart/AddToCartButton";

function BrandVisual({ brand, name }: { brand: string; name: string }) {
  const b = brand.toLowerCase();
  const n = name.toLowerCase();

  if (b.includes("microsoft") || n.includes("windows") || n.includes("office") || n.includes("microsoft")) {
    return (
      <div className="flex items-center justify-center">
        <div className="grid grid-cols-2 gap-1.5 w-11 h-11">
          <div className="rounded-[3px] bg-[#f25022] shadow-sm" />
          <div className="rounded-[3px] bg-[#7fba00] shadow-sm" />
          <div className="rounded-[3px] bg-[#00a4ef] shadow-sm" />
          <div className="rounded-[3px] bg-[#ffb900] shadow-sm" />
        </div>
      </div>
    );
  }

  if (b.includes("kaspersky")) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-700 text-white shadow-sm">
        <span className="text-2xl font-black tracking-tighter">K</span>
      </div>
    );
  }

  if (b.includes("adobe")) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-red-600 to-rose-700 text-white shadow-sm">
        <span className="text-xl font-black italic tracking-tighter">Ad</span>
      </div>
    );
  }

  if (b.includes("autodesk")) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-cyan-700 text-white shadow-sm">
        <span className="text-2xl font-black tracking-tighter">A</span>
      </div>
    );
  }

  if (b.includes("bitdefender")) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-slate-900 via-red-900 to-red-600 text-white shadow-sm">
        <span className="text-2xl font-black tracking-tighter">B</span>
      </div>
    );
  }

  if (b.includes("eset")) {
    return (
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-teal-500 to-cyan-600 text-white shadow-sm">
        <span className="text-xl font-black tracking-tighter">e</span>
      </div>
    );
  }

  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary-dark to-primary text-white shadow-sm">
      <span className="text-lg font-black uppercase tracking-wider">{brand.slice(0, 2)}</span>
    </div>
  );
}

export default function ProductCard({ product }: { product: Product }) {
  const isSolution = Boolean(product.isSolution || product.price === 0);

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_22px_45px_-12px_rgba(37,99,235,0.18)]">
      {/* Top Accent Gradient Line — Active on Hover */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20" />

      {/* Subtle diagonal shine sweep on hover */}
      <div className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out z-10" />

      {/* Top Media / Thumbnail Showcase */}
      <Link
        href={`/san-pham/${product.slug}`}
        className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/20 to-slate-100/70 p-5"
      >
        {/* Floating status badges */}
        {product.badges && product.badges.length > 0 && (
          <div className="absolute left-3 top-3 z-10 flex flex-wrap gap-1.5">
            {product.badges.map((b) => (
              <Badge key={b} tone={productBadgeTone(b)} className="shadow-xs font-semibold">
                {b}
              </Badge>
            ))}
          </div>
        )}

        {/* Discount badge if available with subtle pulse */}
        {product.discount && product.discount > 0 ? (
          <span className="absolute right-3 top-3 z-10 rounded-md bg-danger px-2 py-0.5 text-xs font-extrabold text-white shadow-sm transition-transform duration-200 group-hover:scale-105">
            -{product.discount}%
          </span>
        ) : null}

        {/* Crisp Brand Center Showcase */}
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl border border-white/80 bg-white/90 shadow-sm backdrop-blur-sm transition-all duration-500 group-hover:scale-110 group-hover:shadow-md">
          <BrandVisual brand={product.brand} name={product.name} />
        </div>

        {/* Floating Quick View Pill Overlay on Hover */}
        <div className="absolute inset-0 flex items-end justify-center pb-2.5 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-slate-950/80 px-3.5 py-1 text-[11px] font-bold text-white shadow-lg backdrop-blur-md translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            <Sparkles className="h-3 w-3 text-cyan-400" />
            <span>Xem chi tiết</span>
          </span>
        </div>
      </Link>

      {/* Card Body */}
      <div className="flex flex-1 flex-col p-5">
        <span className="text-[11.5px] font-bold uppercase tracking-wider text-primary">
          {product.brand}
        </span>

        <Link href={`/san-pham/${product.slug}`}>
          <h3 className="mt-1 line-clamp-2 min-h-[44px] text-[15.5px] font-bold leading-snug text-navy transition-colors duration-200 group-hover:text-blue-600">
            {product.name}
          </h3>
        </Link>

        <p className="mt-1.5 line-clamp-2 min-h-[36px] text-xs leading-relaxed text-slate-500">
          {product.shortDescription}
        </p>

        {/* Key Specification Tags with interactive hover */}
        <div className="mt-3.5 flex flex-wrap items-center gap-1.5 text-[11px]">
          <span className="inline-flex items-center rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200">
            {product.licenseType}
          </span>
          <span className="inline-flex items-center rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200">
            {product.duration}
          </span>
          <span className="inline-flex items-center rounded-md border border-slate-200/80 bg-slate-50 px-2 py-0.5 font-medium text-slate-700 transition-colors hover:bg-blue-50 hover:text-blue-700 hover:border-blue-200">
            {product.seats}
          </span>
        </div>

        {/* Rating and Reviews */}
        <div className="mt-3.5 flex items-center gap-1.5 text-xs text-slate-500">
          <Star className="h-3.5 w-3.5 fill-warning text-warning transition-transform group-hover:scale-110" aria-hidden />
          <span className="font-bold text-navy">{product.rating}</span>
          <span>({product.reviewCount} đánh giá)</span>
        </div>

        {/* Pricing and Action Footer */}
        <div className="mt-auto pt-4">
          <div className="mb-3.5 flex items-baseline justify-between border-t border-slate-100 pt-3">
            <div>
              <span className="block text-[11px] font-medium text-slate-400">
                {isSolution ? "Báo giá dự án" : "Giá bản quyền"}
              </span>
              <span
                className={`tracking-tight transition-colors duration-200 ${
                  isSolution
                    ? "text-base sm:text-lg font-extrabold text-blue-600 group-hover:text-blue-700"
                    : "text-xl font-extrabold text-navy group-hover:text-blue-600"
                }`}
              >
                {isSolution ? "Liên hệ tư vấn" : formatPrice(product.price)}
              </span>
            </div>
            {!isSolution && product.originalPrice && (
              <span className="text-xs font-medium text-slate-400 line-through">
                {formatPrice(product.originalPrice)}
              </span>
            )}
          </div>

          <div className="flex gap-2">
            <Button
              href={`/san-pham/${product.slug}`}
              variant="outline"
              className="flex-1 justify-center gap-1.5 font-semibold text-primary border-primary/25 hover:bg-primary hover:text-white hover:border-primary transition-all duration-200 active:scale-95"
            >
              <span>Xem chi tiết</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden />
            </Button>
            {isSolution ? (
              <Link
                href={`/tu-van?solution=${product.slug}`}
                aria-label={`Tư vấn giải pháp ${product.name}`}
                title="Tư vấn giải pháp"
                className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-primary/25 bg-blue-50/60 text-primary hover:border-primary hover:bg-primary hover:text-white transition-all duration-200 active:scale-95"
              >
                <Headset className="h-[18px] w-[18px]" aria-hidden />
              </Link>
            ) : (
              <AddToCartButton product={product} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
