import { products } from "@/data/products";
import { SearchSuggestion } from "@/components/ui/SearchBox";

export function buildProductSuggestions(): SearchSuggestion[] {
  return products.map((p) => ({
    label: p.name,
    meta: p.brand,
    href: `/san-pham/${p.slug}`,
  }));
}
