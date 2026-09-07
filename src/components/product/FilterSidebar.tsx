"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { ChevronDown, RotateCcw, SlidersHorizontal } from "lucide-react";
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

  const activeCategories = toList(searchParams.get("category"));
  const activeBrands = toList(searchParams.get("brand"));
  const activeOs = toList(searchParams.get("os"));
  const activeLicenses = toList(searchParams.get("license"));
  const activeAudiences = toList(searchParams.get("audience"));
  const activePrice = searchParams.get("price");

  const hasActiveFilters =
    activeCategories.length > 0 ||
    activeBrands.length > 0 ||
    activeOs.length > 0 ||
    activeLicenses.length > 0 ||
    activeAudiences.length > 0 ||
    Boolean(activePrice);

  // Initial state: Keep category open by default or any group that has active selections
  const [openGroups, setOpenGroups] = useState<Record<string, boolean>>(() => ({
    category: activeCategories.length > 0 || true,
    brand: activeBrands.length > 0,
    os: activeOs.length > 0,
    license: activeLicenses.length > 0,
    audience: activeAudiences.length > 0,
    price: Boolean(activePrice),
  }));

  function toggleGroup(id: string) {
    setOpenGroups((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  }

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

  return (
    <aside className="w-full shrink-0 lg:w-72">
      <div className="rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm">
        {/* Filter Title Header */}
        <div className="mb-3 flex items-center justify-between border-b border-slate-100 pb-3.5">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10 text-primary">
              <SlidersHorizontal className="h-4 w-4" aria-hidden />
            </span>
            <h2 className="text-[15px] font-bold text-navy">Bộ lọc sản phẩm</h2>
          </div>

          {hasActiveFilters && (
            <button
              type="button"
              onClick={() => router.push("/san-pham", { scroll: false })}
              className="flex items-center gap-1 rounded-md px-2 py-1 text-xs font-medium text-primary hover:bg-primary-light transition-colors"
            >
              <RotateCcw className="h-3 w-3" aria-hidden />
              <span>Đặt lại</span>
            </button>
          )}
        </div>

        {/* 1. Danh mục Dropdown */}
        <FilterDropdownGroup
          title="Danh mục"
          isOpen={!!openGroups.category}
          onToggle={() => toggleGroup("category")}
          badgeCount={activeCategories.length}
        >
          {categories.map((c) => (
            <FilterCheckbox
              key={c.slug}
              label={c.name}
              checked={activeCategories.includes(c.slug)}
              onChange={() => updateParam("category", c.slug)}
            />
          ))}
        </FilterDropdownGroup>

        {/* 2. Thương hiệu Dropdown */}
        <FilterDropdownGroup
          title="Thương hiệu"
          isOpen={!!openGroups.brand}
          onToggle={() => toggleGroup("brand")}
          badgeCount={activeBrands.length}
        >
          {brands.map((b) => (
            <FilterCheckbox
              key={b}
              label={b}
              checked={activeBrands.includes(b)}
              onChange={() => updateParam("brand", b)}
            />
          ))}
        </FilterDropdownGroup>

        {/* 3. Hệ điều hành Dropdown */}
        <FilterDropdownGroup
          title="Hệ điều hành"
          isOpen={!!openGroups.os}
          onToggle={() => toggleGroup("os")}
          badgeCount={activeOs.length}
        >
          {osList.map((o) => (
            <FilterCheckbox
              key={o}
              label={o}
              checked={activeOs.includes(o)}
              onChange={() => updateParam("os", o)}
            />
          ))}
        </FilterDropdownGroup>

        {/* 4. Loại license Dropdown */}
        <FilterDropdownGroup
          title="Loại license"
          isOpen={!!openGroups.license}
          onToggle={() => toggleGroup("license")}
          badgeCount={activeLicenses.length}
        >
          {licenseTypes.map((l) => (
            <FilterCheckbox
              key={l}
              label={l}
              checked={activeLicenses.includes(l)}
              onChange={() => updateParam("license", l)}
            />
          ))}
        </FilterDropdownGroup>

        {/* 5. Đối tượng sử dụng Dropdown */}
        <FilterDropdownGroup
          title="Đối tượng sử dụng"
          isOpen={!!openGroups.audience}
          onToggle={() => toggleGroup("audience")}
          badgeCount={activeAudiences.length}
        >
          {audiences.map((a) => (
            <FilterCheckbox
              key={a}
              label={a}
              checked={activeAudiences.includes(a)}
              onChange={() => updateParam("audience", a)}
            />
          ))}
        </FilterDropdownGroup>

        {/* 6. Khoảng giá Dropdown */}
        <FilterDropdownGroup
          title="Khoảng giá"
          isOpen={!!openGroups.price}
          onToggle={() => toggleGroup("price")}
          badgeCount={activePrice ? 1 : 0}
          last
        >
          {priceRanges.map((r) => (
            <FilterCheckbox
              key={r.value}
              label={r.label}
              checked={activePrice === r.value}
              onChange={() => updateParam("price", r.value, false)}
            />
          ))}
        </FilterDropdownGroup>
      </div>
    </aside>
  );
}

function FilterDropdownGroup({
  title,
  isOpen,
  onToggle,
  badgeCount = 0,
  children,
  last = false,
}: {
  title: string;
  isOpen: boolean;
  onToggle: () => void;
  badgeCount?: number;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <div className={cn("border-b border-slate-100", last && "border-b-0")}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between py-3.5 text-left text-[13.5px] font-bold text-navy transition-colors hover:text-primary"
      >
        <span className="flex items-center gap-2">
          <span>{title}</span>
          {badgeCount > 0 && (
            <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-primary px-1.5 text-[10.5px] font-extrabold text-white shadow-xs">
              {badgeCount}
            </span>
          )}
        </span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-slate-400 transition-transform duration-200",
            isOpen && "rotate-180 text-primary"
          )}
          aria-hidden
        />
      </button>

      {isOpen && (
        <div className="flex flex-col gap-1 pb-3 pt-0.5 animate-in fade-in duration-200">
          {children}
        </div>
      )}
    </div>
  );
}

function FilterCheckbox({
  label,
  checked,
  onChange,
}: {
  label: string;
  checked: boolean;
  onChange: () => void;
}) {
  return (
    <label className="group -mx-2 flex cursor-pointer items-center justify-between rounded-lg px-2.5 py-1.5 text-sm text-slate-700 transition-colors hover:bg-slate-50">
      <span className={cn("text-[13.5px] transition-colors", checked && "font-semibold text-primary")}>
        {label}
      </span>
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        className="h-4 w-4 shrink-0 rounded border-slate-300 text-primary accent-primary focus:ring-0 focus:outline-none outline-none"
      />
    </label>
  );
}
