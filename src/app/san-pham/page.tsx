import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Breadcrumb from "@/components/layout/Breadcrumb";
import SearchBox from "@/components/ui/SearchBox";
import FilterSidebar from "@/components/product/FilterSidebar";
import SortSelect from "@/components/product/SortSelect";
import ProductGrid from "@/components/product/ProductGrid";
import Pagination from "@/components/ui/Pagination";
import { filterProducts, paginate, ProductQuery } from "@/lib/productFilters";
import { buildProductSuggestions } from "@/lib/search";

export const metadata: Metadata = {
  title: "Sản phẩm phần mềm bản quyền",
  description: "Duyệt toàn bộ danh mục phần mềm bản quyền: Microsoft, Windows, Office, Windows Server, SQL Server, Antivirus và phần mềm doanh nghiệp.",
};

const PER_PAGE = 12;

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
    <div className="pb-16">
      <Breadcrumb items={[{ label: "Sản phẩm" }]} />

      <Container className="py-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="h1 !text-2xl md:!text-[32px]">Sản phẩm phần mềm bản quyền</h1>
            <p className="mt-1.5 text-sm text-muted">Tìm thấy {filtered.length} sản phẩm phù hợp</p>
          </div>
        </div>

        <div className="mb-6 max-w-xl">
          <SearchBox suggestions={buildProductSuggestions()} />
        </div>

        <div className="flex flex-col gap-8 lg:flex-row">
          <FilterSidebar />

          <div className="min-w-0 flex-1">
            <div className="mb-5 flex items-center justify-end">
              <SortSelect />
            </div>
            <ProductGrid products={items} />
            <Pagination currentPage={currentPage} totalPages={totalPages} buildHref={buildHref} />
          </div>
        </div>
      </Container>
    </div>
  );
}
