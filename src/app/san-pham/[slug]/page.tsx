import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Star } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Badge, { productBadgeTone } from "@/components/ui/Badge";
import SectionTitle from "@/components/ui/SectionTitle";
import ProductGrid from "@/components/product/ProductGrid";
import ProductTabs from "@/components/product/ProductTabs";
import ProductPurchasePanel from "@/components/product/ProductPurchasePanel";
import { getProductBySlug, getRelatedProducts, products } from "@/data/products";
import { categories } from "@/data/categories";
import { formatPrice } from "@/lib/utils";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: { title: product.name, description: product.shortDescription },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = categories.find((c) => c.slug === product.categorySlug);
  const related = getRelatedProducts(product);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    brand: { "@type": "Brand", name: product.brand },
    description: product.shortDescription,
    offers: {
      "@type": "Offer",
      priceCurrency: "VND",
      price: product.price,
      availability: "https://schema.org/InStock",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
  };

  return (
    <div className="pb-16">
      <Breadcrumb items={[{ label: "Sản phẩm", href: "/san-pham" }, ...(category ? [{ label: category.name, href: `/san-pham?category=${category.slug}` }] : []), { label: product.name }]} />

      <Container className="py-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          {/* Left: image */}
          <div>
            <div className="flex aspect-square items-center justify-center rounded-[var(--radius-lg)] border border-border bg-gradient-to-br from-slate-50 to-primary-light">
              <span className="flex h-28 w-28 items-center justify-center rounded-[var(--radius-lg)] bg-white text-3xl font-extrabold text-primary shadow-card-hover">
                {product.brand.slice(0, 2).toUpperCase()}
              </span>
            </div>
          </div>

          {/* Right: info */}
          <div>
            <div className="flex flex-wrap items-center gap-2">
              {product.badges?.map((b) => (
                <Badge key={b} tone={productBadgeTone(b)}>
                  {b}
                </Badge>
              ))}
            </div>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-primary">{product.brand}</p>
            <h1 className="h1 mt-1 !text-2xl md:!text-[32px]">{product.name}</h1>

            <div className="mt-3 flex items-center gap-2 text-sm">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className={`h-4 w-4 ${i < Math.round(product.rating) ? "fill-warning text-warning" : "text-border"}`} aria-hidden />
                ))}
              </div>
              <span className="font-semibold text-navy">{product.rating}</span>
              <span className="text-muted">({product.reviewCount} đánh giá)</span>
            </div>

            <p className="body-lg mt-4 max-w-lg">{product.shortDescription}</p>

            <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium text-navy">
              <span className="rounded-full bg-slate-100 px-3 py-1.5">{product.licenseType}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5">{product.duration}</span>
              <span className="rounded-full bg-slate-100 px-3 py-1.5">{product.seats}</span>
            </div>

            <div className="mt-6 flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-navy">{formatPrice(product.price)}</span>
              {product.originalPrice && (
                <span className="text-base text-muted line-through">{formatPrice(product.originalPrice)}</span>
              )}
              {product.discount && <Badge tone="danger">-{product.discount}%</Badge>}
            </div>

            <ProductPurchasePanel price={product.price} />
          </div>
        </div>

        <ProductTabs product={product} />

        {related.length > 0 && (
          <div className="mt-16 border-t border-border pt-14">
            <SectionTitle eyebrow="Liên quan" title="Sản phẩm cùng danh mục" />
            <div className="mt-8">
              <ProductGrid products={related} columns={4} />
            </div>
          </div>
        )}
      </Container>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </div>
  );
}
