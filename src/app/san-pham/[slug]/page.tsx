import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Sparkles, Star } from "lucide-react";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import Badge, { productBadgeTone } from "@/components/ui/Badge";
import SectionTitle from "@/components/ui/SectionTitle";
import ScrollReveal from "@/components/ui/ScrollReveal";
import ProductGrid from "@/components/product/ProductGrid";
import ProductTabs from "@/components/product/ProductTabs";
import ProductPurchasePanel from "@/components/product/ProductPurchasePanel";
import ProductImageGallery from "@/components/product/ProductImageGallery";
import SolutionDetailView from "@/components/solution/SolutionDetailView";
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

  // If this is an Enterprise Solution (HRM, ERP, SGIS), render the unified Solution layout!
  if (product.isSolution) {
    return <SolutionDetailView product={product} category={category} />;
  }

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
    <div className="relative min-h-screen bg-slate-50/50 pb-20 overflow-x-clip">
      {/* Ambient background glow & tech elements matching Homepage & Product page */}
      <div className="pointer-events-none absolute top-0 inset-x-0 h-[450px] bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(37,99,235,0.07),rgba(255,255,255,0))]" />
      <span className="pointer-events-none absolute right-[7%] top-28 hidden h-8 w-8 rotate-12 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-500 opacity-35 shadow-lg animate-balloon lg:block" />
      <span className="pointer-events-none absolute left-[4%] top-56 hidden h-7 w-7 -rotate-12 rounded-2xl bg-gradient-to-tr from-blue-500 to-teal-400 opacity-25 shadow-lg animate-balloon-slow lg:block" />

      {/* Breadcrumb Navigation */}
      <Breadcrumb
        items={[
          { label: "Sản phẩm", href: "/san-pham" },
          ...(category ? [{ label: category.name, href: `/san-pham?category=${category.slug}` }] : []),
          { label: product.name },
        ]}
      />

      <Container className="relative z-10 py-8">
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
              <div className="inline-flex items-center gap-1.5 rounded-full border border-blue-200/80 bg-blue-50/90 px-3 py-1 text-xs font-bold text-blue-700 shadow-xs backdrop-blur-sm">
                <span className="flex h-2 w-2 rounded-full bg-cyan-500 animate-ping" />
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span>Bản quyền chính ngạch 100%</span>
              </div>
            </div>

            {/* Brand & Title */}
            <p className="mt-3.5 text-xs font-bold uppercase tracking-wider text-primary">
              {product.brand}
            </p>
            <h1 className="mt-1 text-2xl font-black tracking-tight text-navy sm:text-3xl lg:text-4xl leading-tight">
              {product.name}
            </h1>

            {/* Rating Stars & Count */}
            <div className="mt-3.5 flex items-center gap-2.5 text-sm">
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
              <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700 border border-emerald-200/80">
                Đã xác thực
              </span>
            </div>

            {/* Description */}
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              {product.shortDescription}
            </p>

            {/* Key Spec Pills with Interactive Hover */}
            <div className="mt-5 flex flex-wrap gap-2 text-xs font-semibold">
              <span className="rounded-xl border border-slate-200/90 bg-white px-3.5 py-2 text-slate-700 shadow-xs transition-all hover:border-blue-300 hover:bg-blue-50/60 hover:text-blue-700">
                🏷️ {product.licenseType}
              </span>
              <span className="rounded-xl border border-slate-200/90 bg-white px-3.5 py-2 text-slate-700 shadow-xs transition-all hover:border-blue-300 hover:bg-blue-50/60 hover:text-blue-700">
                ⏳ {product.duration}
              </span>
              <span className="rounded-xl border border-slate-200/90 bg-white px-3.5 py-2 text-slate-700 shadow-xs transition-all hover:border-blue-300 hover:bg-blue-50/60 hover:text-blue-700">
                💻 {product.seats}
              </span>
            </div>

            {/* Price Box */}
            <div className="mt-6 flex flex-wrap items-baseline gap-3">
              <span className="text-3xl font-black bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-600 bg-clip-text text-transparent font-mono sm:text-4xl tracking-tight">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-base font-semibold text-slate-400 line-through">
                  {formatPrice(product.originalPrice)}
                </span>
              )}
              {product.discount && (
                <Badge tone="danger" className="text-xs font-extrabold shadow-xs px-2.5 py-0.5">
                  Tiết kiệm {product.discount}%
                </Badge>
              )}
            </div>

            {/* Purchase & Order Box */}
            <ProductPurchasePanel product={product} />
          </div>
        </div>

        {/* Detailed Information Tabs with Top Accent Line */}
        <ScrollReveal direction="up" delay={80}>
          <div className="relative mt-16 overflow-hidden rounded-[2.2rem] border border-blue-100/90 bg-white p-6 shadow-sm sm:p-9">
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-600" />
            <ProductTabs product={product} />
          </div>
        </ScrollReveal>

        {/* Sản phẩm tương tự — gợi ý dựa trên danh mục, thương hiệu, đối tượng, giá */}
        {similarProducts.length > 0 && (
          <ScrollReveal direction="up" delay={100} className="mt-18 border-t border-slate-200/90 pt-16">
            <div>
              <SectionTitle
                eyebrow="Gợi ý chuyên sâu"
                title="Sản phẩm tương tự"
                description="Các giải pháp bản quyền thay thế phù hợp nhất với cấu hình và ngân sách của bạn."
              />
              <div className="mt-8">
                <ProductGrid products={similarProducts} columns={4} />
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Sản phẩm mua kèm — cross-sell theo danh mục bổ trợ */}
        {bundleProducts.length > 0 && (
          <ScrollReveal direction="up" delay={100} className="mt-16">
            <div>
              <SectionTitle
                eyebrow="Gói bổ trợ tối ưu"
                title="Sản phẩm thường mua kèm"
                description="Các phần mềm bảo mật & hạ tầng bổ trợ giúp doanh nghiệp vận hành an toàn và trọn vẹn hơn."
              />
              <div className="mt-8">
                <ProductGrid products={bundleProducts} columns={4} />
              </div>
            </div>
          </ScrollReveal>
        )}
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </div>
  );
}
