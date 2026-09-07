import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Sparkles, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Badge, { productBadgeTone } from "@/components/ui/Badge";
import SectionTitle from "@/components/ui/SectionTitle";
import ProductGrid from "@/components/product/ProductGrid";
import ProductTabs from "@/components/product/ProductTabs";
import ProductPurchasePanel from "@/components/product/ProductPurchasePanel";
import ProductImageGallery from "@/components/product/ProductImageGallery";
import { getProductBySlug, products } from "@/data/products";
import { getSimilarProducts, getBundleProducts } from "@/lib/recommendations";
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
    title: `${product.name} | ETEK-soft`,
    description: product.shortDescription,
    openGraph: { title: product.name, description: product.shortDescription },
  };
}

export default async function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const category = categories.find((c) => c.slug === product.categorySlug);

  // Gợi ý sản phẩm tự động — tính lại theo sản phẩm đang xem mỗi lần render.
  const similarProducts = getSimilarProducts(product, 4);
  const bundleProducts = getBundleProducts(
    product,
    3,
    similarProducts.map((p) => p.id)
  );

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
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: "Sản phẩm", href: "/san-pham" },
          ...(category ? [{ label: category.name, href: `/san-pham?category=${category.slug}` }] : []),
          { label: product.name },
        ]}
      />

      <Container className="py-8">
        {/* Main Product Hero Grid */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left: Interactive Image Gallery with 3s Autoplay */}
          <div className="lg:col-span-6">
            <ProductImageGallery product={product} />
          </div>

          {/* Right: Product Info & Purchase Panel */}
          <div className="flex flex-col lg:col-span-6">
            {/* Top Badges */}
            <div className="flex flex-wrap items-center gap-2">
              {product.badges?.map((b) => (
                <Badge key={b} tone={productBadgeTone(b)} className="shadow-xs font-semibold">
                  {b}
                </Badge>
              ))}
              <span className="inline-flex items-center gap-1 rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-[11px] font-bold text-primary">
                <Sparkles className="h-3 w-3" />
                Chính hãng 100%
              </span>
            </div>

            {/* Brand & Title */}
            <p className="mt-3.5 text-xs font-bold uppercase tracking-wider text-primary">
              {product.brand}
            </p>
            <h1 className="mt-1 text-2xl font-black tracking-tight text-navy sm:text-3xl lg:text-4xl">
              {product.name}
            </h1>

            {/* Rating Stars & Count */}
            <div className="mt-3 flex items-center gap-2 text-sm">
              <div className="flex items-center gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.round(product.rating)
                        ? "fill-warning text-warning"
                        : "text-slate-200"
                    }`}
                    aria-hidden
                  />
                ))}
              </div>
              <span className="font-extrabold text-navy">{product.rating}</span>
              <span className="text-slate-400">({product.reviewCount} lượt đánh giá)</span>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {product.shortDescription}
            </p>

            {/* Key Spec Pills */}
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-medium">
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-slate-700 shadow-xs">
                🏷️ {product.licenseType}
              </span>
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-slate-700 shadow-xs">
                ⏳ {product.duration}
              </span>
              <span className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-slate-700 shadow-xs">
                💻 {product.seats}
              </span>
            </div>

            {/* Price Box */}
            <div className="mt-6 flex flex-wrap items-baseline gap-3">
              <span className="text-3xl font-black text-navy sm:text-4xl">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-base font-semibold text-slate-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {product.discount && (
                <Badge tone="danger" className="text-xs font-extrabold shadow-xs">
                  Tiết kiệm {product.discount}%
                </Badge>
              )}
            </div>

            {/* Purchase & Order Box */}
            <ProductPurchasePanel product={product} />
          </div>
        </div>

        {/* Detailed Information Tabs */}
        <div className="mt-14 rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm sm:p-8">
          <ProductTabs product={product} />
        </div>

        {/* Sản phẩm tương tự — gợi ý dựa trên danh mục, thương hiệu, đối tượng, giá */}
        {similarProducts.length > 0 && (
          <div className="mt-16 border-t border-slate-200 pt-14">
            <SectionTitle
              eyebrow="Gợi ý cho bạn"
              title="Sản phẩm tương tự"
              description="Các lựa chọn thay thế phù hợp nhất với nhu cầu và ngân sách của bạn."
            />
            <div className="mt-8">
              <ProductGrid products={similarProducts} columns={4} />
            </div>
          </div>
        )}

        {/* Sản phẩm mua kèm — cross-sell theo danh mục bổ trợ */}
        {bundleProducts.length > 0 && (
          <div className="mt-14">
            <SectionTitle
              eyebrow="Mua kèm"
              title="Sản phẩm thường mua kèm"
              description="Các phần mềm bổ trợ giúp bạn vận hành hệ thống trọn vẹn hơn."
            />
            <div className="mt-8">
              <ProductGrid products={bundleProducts} columns={4} />
            </div>
          </div>
        )}
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
