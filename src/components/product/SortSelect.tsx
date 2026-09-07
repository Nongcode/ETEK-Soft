"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { sortOptions } from "@/lib/productFilters";

export default function SortSelect() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const current = searchParams.get("sort") || "moi-nhat";

  function handleChange(value: string) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    params.delete("page");
    router.push(`/san-pham?${params.toString()}`, { scroll: false });
  }

  return (
    <label className="flex items-center gap-2 text-sm">
      <span className="hidden text-muted sm:inline">Sắp xếp:</span>
      <select
        value={current}
        onChange={(e) => handleChange(e.target.value)}
        aria-label="Sắp xếp sản phẩm"
        className="h-10 rounded-lg border border-slate-200 bg-white px-3.5 text-sm font-medium text-navy shadow-xs transition-colors hover:border-slate-300 focus:border-slate-400 focus:outline-none focus:ring-0 outline-none"
      >
        {sortOptions.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
}
