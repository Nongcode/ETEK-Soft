import { Product } from "@/types";
import ProductCard from "@/components/product/ProductCard";
import ScrollReveal from "@/components/ui/ScrollReveal";

export default function ProductGrid({ products, columns = 3 }: { products: Product[]; columns?: 3 | 4 }) {
  if (products.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-border bg-white py-16 text-center">
        <p className="text-sm font-medium text-muted">Không tìm thấy sản phẩm phù hợp với bộ lọc hiện tại.</p>
      </div>
    );
  }

  return (
    <ScrollReveal direction="up" delay={80}>
      <div
        className={
          columns === 3
            ? "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
            : "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        }
      >
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </ScrollReveal>
  );
}
