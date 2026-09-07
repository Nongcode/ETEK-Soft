"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { X } from "lucide-react";
import { categories } from "@/data/categories";
import { brands, licenseTypes, osList, audiences } from "@/data/products";
import { priceRanges } from "@/lib/productFilters";
import { cn } from "@/lib/utils";

function toList(value: string | null): string[] {
  return value ? value.split(",").filter(Boolean) : [];
}

export default function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  function updateParam(key: string, value: string, multi = true) {
    const params = new URLSearchParams(searchParams.toString());
    params.delete("page");

    if (!multi) {
      if (params.get(key) === value) {
        params.delete(key);
      } else {
        params.set(key, value);
      }
    } else {
      const current = toList(params.get(key));
      const next = current.includes(value) ? current.filter((v) => v !== value) : [...current, value];
      if (next.length) params.set(key, next.join(","));
      else params.delete(key);
    }

    router.push(`/san-pham?${params.toString()}`, { scroll: false });
  }

  const activeCategories = toList(searchParams.get("category"));
  const activeBrands = toList(searchParams.get("brand"));
  const activeOs = toList(searchParams.get("os"));
  const activeLicenses = toList(searchParams.get("license"));
  const activeAudiences = toList(searchParams.get("audience"));
  const activePrice = searchParams.get("price");

  const hasActiveFilters =
    activeCategories.length || activeBrands.length || activeOs.length || activeLicenses.length || activeAudiences.length || activePrice;

  return (
    <aside className="w-full shrink-0 lg:w-64">
      <div className="rounded-[var(--radius-md)] border border-border bg-white p-5">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-sm font-bold text-navy">Bộ lọc</h2>
          {hasActiveFilters ? (
            <button
              type="button"
              onClick={() => router.push("/san-pham", { scroll: false })}
              className="flex items-center gap-1 text-xs font-medium text-muted hover:text-primary"
            >
              <X className="h-3.5 w-3.5" aria-hidden />
              Xóa bộ lọc
            </button>
          ) : null}
        </div>

        <FilterGroup title="Danh mục">
          {categories.map((c) => (
            <FilterCheckbox key={c.slug} label={c.name} checked={activeCategories.includes(c.slug)} onChange={() => updateParam("category", c.slug)} />
          ))}
        </FilterGroup>

        <FilterGroup title="Thương hiệu">
          {brands.map((b) => (
            <FilterCheckbox key={b} label={b} checked={activeBrands.includes(b)} onChange={() => updateParam("brand", b)} />
          ))}
        </FilterGroup>

        <FilterGroup title="Hệ điều hành">
          {osList.map((o) => (
            <FilterCheckbox key={o} label={o} checked={activeOs.includes(o)} onChange={() => updateParam("os", o)} />
          ))}
        </FilterGroup>

        <FilterGroup title="Loại license">
          {licenseTypes.map((l) => (
            <FilterCheckbox key={l} label={l} checked={activeLicenses.includes(l)} onChange={() => updateParam("license", l)} />
          ))}
        </FilterGroup>

        <FilterGroup title="Đối tượng">
          {audiences.map((a) => (
            <FilterCheckbox key={a} label={a} checked={activeAudiences.includes(a)} onChange={() => updateParam("audience", a)} />
          ))}
        </FilterGroup>

        <FilterGroup title="Khoảng giá" last>
          {priceRanges.map((r) => (
            <FilterCheckbox key={r.value} label={r.label} checked={activePrice === r.value} onChange={() => updateParam("price", r.value, false)} />
          ))}
        </FilterGroup>
      </div>
    </aside>
  );
}

function FilterGroup({ title, children, last }: { title: string; children: React.ReactNode; last?: boolean }) {
  return (
    <div className={cn("border-b border-border py-4 first:pt-0", last && "border-b-0 pb-0")}>
      <p className="mb-2.5 text-xs font-bold uppercase tracking-wide text-muted">{title}</p>
      <div className="flex flex-col gap-2">{children}</div>
    </div>
  );
}

function FilterCheckbox({ label, checked, onChange }: { label: string; checked: boolean; onChange: () => void }) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5 text-sm text-navy/85">
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 shrink-0 rounded border-border text-primary focus:ring-primary/40"
      />
      <span className={cn(checked && "font-semibold text-primary")}>{label}</span>
    </label>
  );
}
