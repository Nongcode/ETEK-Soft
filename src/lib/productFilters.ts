import { Product } from "@/types";
import { products } from "@/data/products";

export type SortOption = "moi-nhat" | "gia-thap-den-cao" | "gia-cao-den-thap" | "ban-chay";

export const sortOptions: { value: SortOption; label: string }[] = [
  { value: "moi-nhat", label: "Mới nhất" },
  { value: "gia-thap-den-cao", label: "Giá thấp đến cao" },
  { value: "gia-cao-den-thap", label: "Giá cao đến thấp" },
  { value: "ban-chay", label: "Bán chạy" },
];

export const priceRanges: { value: string; label: string; min: number; max: number }[] = [
  { value: "duoi-1tr", label: "Dưới 1 triệu", min: 0, max: 1_000_000 },
  { value: "1tr-5tr", label: "1 - 5 triệu", min: 1_000_000, max: 5_000_000 },
  { value: "5tr-20tr", label: "5 - 20 triệu", min: 5_000_000, max: 20_000_000 },
  { value: "tren-20tr", label: "Trên 20 triệu", min: 20_000_000, max: Infinity },
];

export interface ProductQuery {
  q?: string;
  category?: string;
  brand?: string;
  os?: string;
  license?: string;
  audience?: string;
  price?: string;
  sort?: SortOption;
  page?: string;
}

function toList(value?: string): string[] {
  return value ? value.split(",").filter(Boolean) : [];
}

export function filterProducts(query: ProductQuery): Product[] {
  const categories = toList(query.category);
  const brands = toList(query.brand);
  const os = toList(query.os);
  const licenses = toList(query.license);
  const audiences = toList(query.audience);
  const priceRange = priceRanges.find((r) => r.value === query.price);
  const q = query.q?.trim().toLowerCase();

  let result = products.filter((p) => {
    if (categories.length && !categories.includes(p.categorySlug)) return false;
    if (brands.length && !brands.includes(p.brand)) return false;
    if (os.length && !p.os?.some((o) => os.includes(o))) return false;
    if (licenses.length && !licenses.includes(p.licenseType)) return false;
    if (audiences.length && !p.audience.some((a) => audiences.includes(a))) return false;
    if (priceRange && (p.price < priceRange.min || p.price > priceRange.max)) return false;
    if (q && !`${p.name} ${p.brand} ${p.shortDescription}`.toLowerCase().includes(q)) return false;
    return true;
  });

  switch (query.sort) {
    case "gia-thap-den-cao":
      result = [...result].sort((a, b) => a.price - b.price);
      break;
    case "gia-cao-den-thap":
      result = [...result].sort((a, b) => b.price - a.price);
      break;
    case "ban-chay":
      result = [...result].sort((a, b) => Number(b.bestseller) - Number(a.bestseller) || b.reviewCount - a.reviewCount);
      break;
    case "moi-nhat":
    default:
      result = [...result].sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
  }

  return result;
}

export function paginate<T>(items: T[], page: number, perPage: number): { items: T[]; totalPages: number } {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const start = (safePage - 1) * perPage;
  return { items: items.slice(start, start + perPage), totalPages };
}
