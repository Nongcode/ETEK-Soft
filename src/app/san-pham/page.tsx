import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import FilterSidebar from "@/components/product/FilterSidebar";
import SortSelect from "@/components/product/SortSelect";
import ProductGrid from "@/components/product/ProductGrid";
import ProductBanner from "@/components/product/ProductBanner";
import Pagination from "@/components/ui/Pagination";
import { filterProducts, paginate, ProductQuery } from "@/lib/productFilters";
import { buildProductSuggestions } from "@/lib/search";

export const metadata: Metadata = {
  title: "Sản phẩm phần mềm bản quyền chính hãng",
  description:
    "Duyệt toàn bộ danh mục phần mềm bản quyền: Microsoft 365, Windows, Office, Windows Server, SQL Server, Antivirus và phần mềm doanh nghiệp với hóa đơn VAT đầy đủ.",
};

const PER_PAGE = 9;

export default async function ProductListingPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const rawParams = await searchParams;
  const query: ProductQuery = {
    q: typeof rawParams.q === "string" ? rawParams.q : undefined,
    category: typeof rawParams.category === "string" ? rawParams.category : undefined,
    brand: typeof rawParams.brand === "string" ? rawParams.brand : undefined,
    os: typeof rawParams.os === "string" ? rawParams.os : undefined,
    license: typeof rawParams.license === "string" ? rawParams.license : undefined,
    audience: typeof rawParams.audience === "string" ? rawParams.audience : undefined,
    price: typeof rawParams.price === "string" ? rawParams.price : undefined,
    sort: (typeof rawParams.sort === "string" ? rawParams.sort : undefined) as ProductQuery["sort"],
  };

  const filtered = filterProducts(query);
  const currentPage = Number(rawParams.page) || 1;
  const { items, totalPages } = paginate(filtered, currentPage, PER_PAGE);
  const suggestions = buildProductSuggestions();

  function buildHref(page: number) {
    const params = new URLSearchParams();
    Object.entries(rawParams).forEach(([key, value]) => {
      if (key === "page" || !value) return;
      params.set(key, String(value));
    });
    if (page > 1) params.set("page", String(page));
    const qs = params.toString();
    return `/san-pham${qs ? `?${qs}` : ""}`;
  }

  return (
    <div className="min-h-screen bg-slate-50/50 pb-20">
      {/* Dedicated Hero Banner */}
      <ProductBanner suggestions={suggestions} />

      <Container className="py-8">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* Left Sidebar Filters */}
          <FilterSidebar />

          {/* Right Main Product Area (3 products per row) */}
          <div className="min-w-0 flex-1">
            <div className="mb-6 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm text-slate-500">
                  Tìm thấy{" "}
                  <span className="font-bold text-navy">{filtered.length}</span> sản phẩm phù hợp
                  {query.q && (
                    <span>
                      {" "}
                      cho từ khóa <span className="font-semibold text-primary">&quot;{query.q}&quot;</span>
                    </span>
                  )}
                </p>
              </div>

              <div className="flex items-center gap-2 self-end sm:self-auto">
                <SortSelect />
              </div>
            </div>

            {/* 3 products per row grid */}
            <ProductGrid products={items} columns={3} />

            {/* Pagination */}
            <div className="mt-8">
              <Pagination currentPage={currentPage} totalPages={totalPages} buildHref={buildHref} />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
