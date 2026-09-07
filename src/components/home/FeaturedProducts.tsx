import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import ProductGrid from "@/components/product/ProductGrid";
import { getFeaturedProducts } from "@/data/products";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 8);

  return (
    <section className="bg-white py-16 lg:py-20">
      <Container>
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionTitle eyebrow="Nổi bật" title="Sản phẩm nổi bật" description="Những phần mềm bản quyền được doanh nghiệp lựa chọn nhiều nhất." />
          <Link href="/san-pham" className="flex items-center gap-1.5 text-sm font-semibold text-primary hover:text-primary-dark">
            Xem tất cả sản phẩm
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </div>
        <div className="mt-10">
          <ProductGrid products={featured} />
        </div>
      </Container>
    </section>
  );
}
