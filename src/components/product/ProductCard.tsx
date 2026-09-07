import Link from "next/link";
import { Star } from "lucide-react";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import Badge, { productBadgeTone } from "@/components/ui/Badge";
import Button from "@/components/ui/Button";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="group flex h-full flex-col rounded-[var(--radius-md)] border border-border bg-white shadow-card transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-card-hover">
      <Link href={`/san-pham/${product.slug}`} className="relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br from-slate-50 to-primary-light p-6">
        {product.badges && product.badges.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-wrap gap-1.5">
            {product.badges.map((b) => (
              <Badge key={b} tone={productBadgeTone(b)}>
                {b}
              </Badge>
            ))}
          </div>
        )}
        <span className="flex h-16 w-16 items-center justify-center rounded-[var(--radius-md)] bg-white text-lg font-extrabold text-primary shadow-card">
          {product.brand.slice(0, 2).toUpperCase()}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">{product.brand}</p>
        <Link href={`/san-pham/${product.slug}`}>
          <h3 className="mt-1 line-clamp-2 text-[15px] font-semibold leading-snug text-navy transition-colors hover:text-primary">
            {product.name}
          </h3>
        </Link>
        <p className="mt-1.5 line-clamp-2 text-[13px] leading-relaxed text-muted">{product.shortDescription}</p>

        <div className="mt-3 flex flex-wrap items-center gap-1.5 text-[11px] text-muted">
          <span className="rounded-full bg-slate-100 px-2 py-1 font-medium">{product.licenseType}</span>
          <span className="rounded-full bg-slate-100 px-2 py-1 font-medium">{product.duration}</span>
          <span className="rounded-full bg-slate-100 px-2 py-1 font-medium">{product.seats}</span>
        </div>

        <div className="mt-3 flex items-center gap-1 text-xs text-muted">
          <Star className="h-3.5 w-3.5 fill-warning text-warning" aria-hidden />
          <span className="font-semibold text-navy">{product.rating}</span>
          <span>({product.reviewCount})</span>
        </div>

        <div className="mt-auto pt-4">
          <div className="mb-3 flex items-baseline gap-2">
            <span className="text-lg font-extrabold text-navy">{formatPrice(product.price)}</span>
            {product.originalPrice && (
              <span className="text-xs text-muted line-through">{formatPrice(product.originalPrice)}</span>
            )}
          </div>
          <Button href={`/san-pham/${product.slug}`} variant="outline" className="w-full">
            Xem chi tiết
          </Button>
        </div>
      </div>
    </div>
  );
}
